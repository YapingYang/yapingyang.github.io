/**
 * @license
    degree: "B.A. in Mathematics, B.B.A. in Accounting, and B.B.A. in Finance",
 */

import {
  Project,
  Experience,
  Certification,
  SkillCategory,
  Education,
} from "./types"

export const personalInfo = {
  name: "Yaping Yang",
  title: "Applied AI Engineer",
  tagline: "Bridging full-stack engineering and intelligent agentic workflows.",
  bio: "I build production AI systems — agentic pipelines, RAG applications, and the evaluation and serving infrastructure that makes them reliable. Full-stack engineer with an M.S. in Computer Science from Georgia Tech and 6 years shipping software at scale. I care most about the unglamorous half of applied AI: structured outputs that don't break, hallucination control, evals you can trust, and latency and cost that hold up in production.",
  email: "yaping.tech@gmail.com",
  github: "https://github.com/yapingyang",
  linkedin: "https://linkedin.com/in/yaping-yang",
  location: "New York City, NY (Remote Friendly)",
  resumeUrl: "#",
}

export const skillsData: SkillCategory[] = [
  {
    title: "Applied AI",
    items: [
      { name: "Agentic orchestration (LangGraph, CrewAI)", level: 95 },
      { name: "RAG architecture & retrieval optimization", level: 93 },
      { name: "Structured output (Pydantic)", level: 92 },
      { name: "LLM evaluation (RAGAS, eval harnesses)", level: 91 },
      { name: "Hallucination mitigation", level: 90 },
      { name: "Prompt design", level: 90 },
    ],
  },
  {
    title: "Backend / Dev",
    items: [
      { name: "Python (FastAPI, Django)", level: 97 },
      { name: "TypeScript / React", level: 92 },
      { name: "SQL / PostgreSQL / pgvector", level: 91 },
      { name: "Docker", level: 90 },
      { name: "GCP (Cloud Run) / AWS", level: 90 },
      {
        name: "CI/CD; Observability (Langfuse, Prometheus/Grafana)",
        level: 89,
      },
    ],
  },
  {
    title: "Products",
    items: [
      { name: "M.S. Computer Science, HCI (Georgia Tech)", level: 100 },
      { name: "B.A. Mathematics", level: 100 },
      { name: "6 yrs full-stack & growth engineering", level: 95 },
      { name: "Systems design", level: 92 },
    ],
  },
]

export const projectsData: Project[] = [
  {
    id: "account-research-enrichment",
    title: "Account Research & Enrichment Agent",
    description:
      "An agentic pipeline that researches companies against an ICP spec and returns structured, citation-verified, confidence-scored enrichment, with a labeled eval benchmark running in CI. Live demo and repo coming soon.",
    details: [
      "Agentic enrichment pipeline with structured outputs and provenance",
      "Automated labeled evaluation benchmark integrated into CI",
      "Confidence scoring and citation verification for downstream accuracy",
    ],
    category: "dev-tool",
    technologies: ["LangGraph", "Python", "FastAPI", "pgvector", "Langfuse"],
    liveUrl: "#",
    image: "account_research",
    featured: true,
    completionDate: "In Progress",
    status: "IN PROGRESS",
  },
  {
    id: "rag-eval-harness",
    title: "RAG Evaluation Harness",
    description:
      "A reusable framework for measuring retrieval and generation quality — accuracy, citation validity, and hallucination rate — across RAG pipelines.",
    details: [
      "Standardized metrics for RAG systems",
      "Pluggable evaluators for citation and hallucination checks",
      "Integrates with dataset loaders and common vector stores",
    ],
    category: "dev-tool",
    technologies: ["Python", "RAGAS", "Qdrant"],
    liveUrl: "#",
    image: "rag_eval",
    featured: false,
    completionDate: "Planned",
    status: "PLANNED",
  },
  {
    id: "llm-serving-latency-benchmark",
    title: "LLM Serving & Latency Benchmark",
    description:
      "A small serving setup benchmarking quantization and caching strategies for cost and latency under load.",
    details: [
      "Benchmarking quantization strategies and caching layers",
      "Load testing for P95/P99 latency under configurable concurrency",
      "Cost vs latency tradeoff analysis for serving infra",
    ],
    category: "web",
    technologies: ["Python", "FastAPI", "Docker"],
    liveUrl: "#",
    image: "llm_serving",
    featured: false,
    completionDate: "Planned",
    status: "PLANNED",
  },
]

export const experiencesData: Experience[] = [
  {
    id: "exp-1",
    role: "Software Engineering Consultant",
    company: "Independent Consulting",
    location: "Remote",
    period: "Jan 2026 - Present",
    description: [
      "Build production AI and automation systems for early- and growth-stage companies — LLM-backed workflows, agentic and retrieval prototypes, and data-integration pipelines in Python.",
      "Lead technical discovery and solution architecture, turning ambiguous requirements into tested, reliable, production-ready deliverables.",
      "Design end-to-end backend and integration systems (APIs, Django services, workflow automation) with attention to structured outputs, failure handling, and maintainability.",
    ],
    skills: [
      "Python",
      "FastAPI",
      "Django",
      "LangChain/LangGraph",
      "RAG",
      "PostgreSQL",
      "n8n",
    ],
  },
  {
    id: "exp-2",
    role: "Senior Software Engineer / Project Technical Lead",
    company: "Collective",
    location: "San Francisco, CA",
    period: "Apr 2022 - Feb 2025",
    description: [
      "Led and mentored a team of 3 engineers in the Growth function, collaborating with engineering leadership and product managers to shape architecture and roadmap decisions during a period of 2x YoY member growth.",
      "Architected and launched a Stripe payroll add-on automation utilizing secure, cron-based reliable workflows, delivered with zero member disruption and projected to drive a 10% increase in company revenue.",
      "Directed OneCRM migration from HubSpot to Salesforce, ensuring data consistency, streamlining sales processes, cutting software costs, and boosting webinar sign-ups and email campaign performance.",
      "Optimized top-of-funnel conversion performance via programmatic A/B testing (using Optimizely, Statsig), CAC cost analysis, funnel drop-off tracking, and segmentation in partnership with Sales, Marketing, and Data Science.",
    ],
    skills: [
      "Python",
      "Django",
      "React",
      "SQL",
      "A/B Testing (Optimizely, Statsig)",
      "Salesforce",
      "Mentorship",
    ],
  },
  {
    id: "exp-3",
    role: "Senior Software Engineer",
    company: "ACS Technologies",
    location: "Florence, SC",
    period: "Apr 2019 - Mar 2022",
    description: [
      "Engineered custom data automation solutions using SQL, C#, and Python (Django) that reduced database update cycles from several days to 7 minutes, saving hundreds of developer hours annually.",
      "Redesigned and streamlined team developer onboarding workflows with Docker, Git, and CI/CD pipelines, reducing machine setup time by 30% and accelerating productivity.",
      "Mentored 5+ software engineering interns and junior developers on full-stack projects (React, Django, .NET Core, REST APIs, SQL), providing ongoing architectural guidance and implementing engineering best practices.",
      "Partnered closely with UX, QA, and product squads to deliver highly responsive, accessible web applications for thousands of users; integrated Google Analytics to generate actionable product insights.",
    ],
    skills: [
      "React",
      "Django",
      "C#",
      ".NET Core",
      "SQL",
      "Docker",
      "Google Analytics",
      "CI/CD",
    ],
  },
  {
    id: "exp-4",
    role: "Financial Consolidation Analyst",
    company: "TE Connectivity",
    location: "Winston-Salem, NC",
    period: "Jun 2018 - Mar 2019",
    description: [
      "Drove global financial consolidation and forecast analysis by partnering with regional finance teams to aggregate, validate, and present executive-level weekly and monthly reports.",
      "Optimized financial reporting systems (Hyperion, BPC) by designing robust formula-driven template structures that reduced periodic data processing times by 20% while improving metrics accuracy across global report channels.",
    ],
    skills: [
      "Hyperion",
      "BPC",
      "Financial Modeling",
      "Data Consolidation",
      "Analytics",
    ],
  },
]

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    name: "Building AI Agents and Agentic Workflows Specialization",
    issuer: "IBM (Coursera)",
    date: "Active",
    credentialId: "IBM-AI-AGENTS-9128",
    link: "#",
  },
  {
    id: "cert-2",
    name: "Product Management Professional Certificate",
    issuer: "BrainStation",
    date: "2023",
    credentialId: "",
    link: "#",
  },
  // Other certificates removed per request; add 'AI Safety — BlueDot Impact' only if confirmed.
]

export const educationData: Education[] = [
  {
    id: "edu-1",
    degree: "M.S. in Computer Science (Specialization: HCI)",
    institution: "Georgia Institute of Technology",
    period: "Graduated Dec 2025",
    location: "Atlanta, GA",
    details: [
      "Acquired advanced master-level expertise in Human-Computer Interaction, Software Engineering, and Interactive Product Layouts.",
    ],
  },
  {
    id: "edu-2",
    degree: "B.A. in Mathematics & B.B.A. in Accounting & Finance",
    institution: "Francis Marion University",
    period: "Graduated May 2018",
    location: "Florence, SC",
    details: [
      "Triple degrees with highest honors combining rigorous quantitative math analysis with full enterprise finance and business consolidation methodologies.",
    ],
  },
]
