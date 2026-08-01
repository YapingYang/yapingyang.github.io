---
title: "Attention, KV Cache, and Prompt Caching Explained From First Principles"
subtitle: "Alignment as Arithmetic, Meaning as Direction"
description: "Alignment as Arithmetic, Meaning as Direction"
date: 2026-08-01T16:54:12-04:00
# draft: true
---

## What Is an Attention Mechanism, and What Does It Solve?

A large language model cannot store the word "cat", only numbers. So every word has to become a list of numbers, which we'll call a vector, looked up from a big table. But here's the catch, that lookup is context-free, meaning "it" in the sentence "the cat eats because it was hungry" has the same vector representation "it" gets in every other sentence. On its own, it knows nothing about the cat.

Now, attention is the mechanism that lets tokens share information with each other, so that by the time the model finishes processing the sentence, "it" has absorbed information from "cat" into its representation.

## How Does Attention Actually Work?

Every token is given three roles, and they are computed from the same input vector via some learned transformations:

- **Q (query):** "what am I looking for?"
- **K (key):** "what do I advertise about myself?"
- **V (value):** "what do I actually deliver if picked?"

This is exactly like a search engine. First, you type a query, then it's matched with every page's title/keywords (key), a short summary. If the page is picked, it will return the page's actual content (value), which is much richer than the title.

In the context of large language models, the steps can be broken down like this:

1. **Score everyone against everyone.** For every pair of tokens (i, j), compute the dot product of (query_i, key_j), a single number that measures "how relevant is token j to token i?" Do this for all token pairs, and you end up with a score grid of n×n size, where n is the number of tokens.

2. **Scale the scores.** The dot products get artificially large simply because of how many dimensions get summed together as vectors grow wider. This is fixed by dividing the attention grid by `math.sqrt(d_head)`, where `d_head` is a fixed number based on how big the vectors are (`d_head = d_model // num_of_heads`). This normalizes the variance of the attention scores so softmax doesn't become overly sharp and dump almost all the probability onto one token.

3. **Turn scores into a budget using softmax.** Each attention score gets turned into a weighted percentage. So for a given token i, its attention could be "40% to token A, 50% to token B, 10% to token C", always summing to 100%.

4. **Blend using that budget.** Token i's attention output becomes the weighted sum of every token's Value vector, weighted by those percentages. The Value vectors themselves don't change, attention is producing a new output vector out of them. The diagonal in the matrix represents the amount of attention token_i retains for itself.

To sum it up, attention is: score everyone, turn scores into a budget, then blend using that budget.

"It"'s output at the end will be mostly built out of "cat"'s value, because "cat"'s key matches what "it" was asking for.

Before applying softmax to get the weighted percentages, a technique called the **causal mask** is also applied. Its purpose is to ensure a token never gets to see any token that comes after it. Those future-facing scores are set to negative infinity, so they become 0 after softmax is applied. This is what makes autoregressive generation possible, the model can only use information that already exists when predicting the next token, so token 5 never gets to peek at token 6 before generating it.

## What Is the Time Complexity of the Transformer Architecture?

It's **n²**, because in step 1 above, the attention mechanism generates an n×n grid, where n is the number of tokens in your prompt. If you have 100 tokens, the grid size is 100×100, which generates 10,000 scores. Double the token count to 200, now it's 40,000 scores. That's 4x the work for 2x the input, that's what quadratic means: n² = cost grows with the square of the length.

The Q/K/V projection step has a cost of n·d², where d is the vector width, fixed per model. Doubling n there only doubles the cost, a linear increase, not quadratic.

So a transformer has two parts that make up its time complexity: a linear part (the Q/K/V projection) and a quadratic part (the attention mechanism). The quadratic part eventually dominates as context length grows, exactly where that crossover happens depends on model size, hardware, and implementation details like FlashAttention, so there's no single universal token count where it kicks in. But the trend is always the same direction, and it's why long context windows get increasingly expensive.

## What Is KV Cache, and Why Do We Need It?

So far, we understand that the model generates one token at a time. To generate token 101, it needs to run attention over tokens 1 through 100. The brute-force, naive way to go about this is to recompute the key and value vectors from scratch every time you generate a new token.

Because of causal attention, token i's hidden state at every layer only ever depends on tokens 1 through i, never on anything that comes after it. Once token i has been processed, future tokens cannot reach back and change that hidden state, so the Key and Value vectors derived from it are fixed forever. Recomputing them at every step is pure waste.

**KV cache is just this: keep them in memory instead of throwing them away.** At each new token, you only compute Q, K, V for that new token, append its Key and Value to the cache, and attend using the query against everything else stored so far. Query is never stored, because it belongs to the token that's currently asking the question, the moment it gets its answer, the query is no longer needed. That's why it's called KV cache, not QKV cache.

"Time to first token" is dominated by the prefill phase, where the model processes the entire prompt in one big pass and builds the initial KV cache before it can generate anything. Once that prefill is done, it's cheap to look up the cached values, that's your tokens per second.

## Prompt Caching: KV Cache Across Requests

KV cache applies to a single request/conversation. Prompt caching is the same idea, but it works across conversations.

If two different API calls start with the same 5,000-token system prompt, the cached KV representation of that shared prefix can be reused for the second call instead of recomputed from scratch. This only works if the prefix is exactly the same. If there's any difference, it's a cache miss. The rule is: "if it's identical up until token X, then reuse up until token X."

Because of this, there's a hard rule in production prompt engineering.

> **Put stable stuff first, volatile stuff later.**

For example: `system prompt → tool definitions → retrieved documents → conversation history → [new user message] → [timestamp, request ID]`

The most expensive mistake in prompt engineering is putting volatile things, like a timestamp or request ID, at the top of the system prompt. That guarantees a cache miss for every single request, since the changed value sits before everything else and nothing after it can be reused.

## Q&A

**What is the difference between self-attention and cross-attention?**

Self-attention is when Q, K, and V all come from the same sequence, this is what powers GPT-style models reading their own input. Cross-attention is when Q comes from one sequence and K, V come from a different sequence, this shows up in encoder-decoder models, where the decoder's queries attend over the encoder's keys and values (translation models are a classic example).

**Why is it called multi-head attention?**

Instead of running one big attention pass over the full d_model vector, the model splits each Q, K, V into num_of_heads smaller chunks (each of size d_head) and runs attention separately on each chunk. Different heads often learn to specialize in different kinds of relationships (one might track syntax, another might track long-range references), and the results get concatenated back together at the end.

**What is the difference between KV cache and prompt caching?**

KV cache lives inside a single request. It stores the key and value vectors as you generate tokens one by one, so you're not recomputing them at every step. Prompt caching works across requests. If two separate API calls start with the identical prompt prefix, the server reuses the KV cache it already computed for that prefix instead of recomputing it from scratch.

**Does KV cache affect output quality?**

No. KV cache is a pure performance optimization, it stores exact values that would have been recomputed anyway. It doesn't change what the model attends to or what it generates, it only changes how fast generation happens.

**Why does KV cache use so much memory?**

Because you're storing a key and value vector for every token, at every layer, for every head. Memory scales with sequence length, so long conversations or long documents can turn the KV cache into a major memory bottleneck, sometimes exceeding the memory needed for the model's own weights during inference. This is part of why techniques like grouped-query attention and multi-query attention exist, they shrink the cache by having multiple query heads share the same key and value heads.

**Is "attention is O(n²)" actually the full story?**

Not quite, but it's the honest simplification. The real cost of scoring all pairs is n²·d_head per attention head, which simplifies to n²·d_model once you account for all heads together. d_model is fixed for a given model, so it never changes when you feed the model a longer or shorter prompt. n is the one thing that actually varies from request to request. Standard practice in complexity analysis is to drop the constants and track what scales, so "O(n²)" is really shorthand for "n²·d_model, and d_model never moves."

**Is d the number of attention heads?**

No. d here is the per-token vector dimensionality, either d_model (looking at all heads together) or d_head (looking at one head alone). num_of_heads is a separate factor, and it cancels out: scoring costs n²·d_head per head, times num_of_heads heads, and since d_head = d_model // num_of_heads, that product simplifies to n²·d_model. Whether a model uses 1 head or 32 heads, the total scoring cost across all heads comes out the same, more heads just means smaller vectors per head, multiplied by more heads.

**Is it really the causal mask that lets KV cache work?**

Yes, but the connection is slightly more subtle than "causal mask means fixed cache." K_i and V_i are computed from token i's hidden state. Because of causal attention, that hidden state at every layer only depends on tokens 1 through i, never anything after it. Once token i has been processed, future tokens cannot change that hidden state, so K_i and V_i remain valid forever. If attention were bidirectional instead, adding a new token could change previous tokens' hidden states, which would invalidate their cached Keys and Values, and KV caching wouldn't be possible at all.
