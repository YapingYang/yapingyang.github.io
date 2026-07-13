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
  title: "Applied AI Engineer | Full-Stack Software Engineer",
  tagline:
    "I build AI-powered applications with modern LLMs — grounded in 6 years of software engineering.",
  bio: "I build AI-powered applications with modern LLMs — grounded in 6 years of software engineering.",
  terminalBio:
    "I build AI-powered applications using modern LLM technologies, combining full-stack engineering experience with RAG, agent workflows, and automation systems.\n\nMy focus is making AI applications reliable, maintainable, and useful — from backend architecture to user experience.",
  seoDescription:
    "Building AI-powered applications with a full-stack engineering foundation.",
  focus: [
    "Reliable AI apps",
    "Retrieval & agents",
    "Full-stack delivery",
  ],
  exploring: [
    "Agent architecture patterns",
    "LLM evaluation methodologies",
    "Retrieval optimization techniques",
    "AI observability tooling",
    "Production AI system design patterns",
  ],
  email: "yaping.tech@gmail.com",
  github: "https://github.com/yapingyang",
  linkedin: "https://linkedin.com/in/yaping-yang",
  location: "New York City, NY (Remote Friendly)",
  resumeUrl: "#",
}

export const aboutContent = {
  heading: "Building Reliable AI Applications",
  description:
    "Applying software engineering discipline to AI: testing, structured outputs, observability, and thoughtful failure handling.",
  cards: [
    {
      title: "System Architecture",
      text: "Building AI application architectures with retrieval pipelines, structured outputs, validation workflows, and automated testing. Applying backend engineering principles to make AI systems easier to debug, improve, and maintain.",
    },
    {
      title: "Full-Stack Range",
      text: "From FastAPI services and data pipelines to React interfaces and user-facing products. My background allows me to build complete AI applications — not only the AI workflow, but also the systems and experiences around it.",
    },
  ],
}

export const philosophyContent = {
  title: "Applied AI, built on engineering foundations.",
  text: "Today I focus on applied AI — using my software engineering background to design AI-powered applications, retrieval systems, and automation workflows. I am especially interested in the engineering practices that make AI systems reliable: evaluation, observability, user experience, and thoughtful system design.",
}

export const skillsData: SkillCategory[] = [
  {
    title: "Applied AI",
    items: [
      { name: "RAG applications", level: 0 },
      { name: "Agent workflows", level: 0 },
      { name: "LLM APIs", level: 0 },
      { name: "Prompt engineering", level: 0 },
      { name: "Structured outputs (Pydantic)", level: 0 },
      { name: "AI evaluation approaches", level: 0 },
      { name: "Retrieval optimization", level: 0 },
    ],
  },
  {
    title: "Backend / Dev",
    items: [
      { name: "Python", level: 0 },
      { name: "FastAPI", level: 0 },
      { name: "Django", level: 0 },
      { name: "React", level: 0 },
      { name: "PostgreSQL", level: 0 },
      { name: "Docker", level: 0 },
      { name: "Cloud deployment", level: 0 },
      { name: "CI/CD", level: 0 },
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
      "Building AI-powered applications and automation systems for early- and growth-stage companies — LLM-backed workflows, retrieval prototypes, and data-integration pipelines in Python.",
      "Lead technical discovery and solution architecture, turning ambiguous requirements into tested, reliable deliverables.",
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
