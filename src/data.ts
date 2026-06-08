/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Certification, SkillCategory, Education } from './types';

export const personalInfo = {
  name: 'Yaping Yang',
  title: 'Senior Applied AI Engineer',
  tagline: 'Bridging full-stack engineering and intelligent agentic workflows.',
  bio: 'I am a Senior Applied AI Engineer specializing in full-stack architecture, GTM automation, and Applied AI systems. Armed with an M.S. in Computer Science (HCI) from Georgia Tech and advanced training in Agentic AI workflows, I orchestrate multi-agent solutions, self-correcting RAG frameworks, and scalable backend platforms while engineering robust, human-aligned guardrails for AI safety and operational reliability.',
  email: 'yaping.tech@gmail.com',
  github: 'https://github.com/yaping-tech',
  linkedin: 'https://linkedin.com/in/yaping-yang',
  location: 'New York City, NY (Remote Friendly)',
  resumeUrl: '#',
  phone: '(917) 520-3111',
};

export const skillsData: SkillCategory[] = [
  {
    title: 'Agentic AI & Machine Learning',
    items: [
      { name: 'Agentic Systems & Workflows', level: 96 },
      { name: 'Generative AI Agents', level: 95 },
      { name: 'Large Language Modeling (LLM App)', level: 94 },
      { name: 'Retrieval-Augmented Generation (RAG)', level: 93 },
      { name: 'Frameworks (LangGraph, CrewAI, AutoGen, BeeAI)', level: 92 },
      { name: 'Prompt Engineering & AI Orchestration', level: 95 },
    ],
  },
  {
    title: 'Backends, Prototyping & Clouds',
    items: [
      { name: 'Python Backend (FastAPI, Django)', level: 97 },
      { name: 'React / JS / TS (Rapid Client Prototyping)', level: 91 },
      { name: 'SQL / PostgreSQL / REST APIs', level: 92 },
      { name: 'CI/CD / Docker / AWS / GCP', level: 91 },
      { name: 'Automation (n8n, Clay, Orkes Conductor, Zapier)', level: 93 },
      { name: 'A/B Testing (Optimizely, Statsig, Analytics)', level: 88 },
    ],
  },
  {
    title: 'Product Engineering & Methods',
    items: [
      { name: 'Software Design Patterns', level: 94 },
      { name: 'Human-Computer Interaction (HCI)', level: 93 },
      { name: 'Data Visualization (D3.js / Recharts)', level: 89 },
      { name: 'GTM Automation & Growth Lifecycle', level: 92 },
      { name: 'AI Safety & Responsible Reflection', level: 92 },
      { name: 'Agile (Scrum / Kanban)', level: 91 },
    ],
  },
];

export const projectsData: Project[] = [
  {
    id: 'reflexion-langgraph',
    title: 'Reflexion Agent with External Tool Integration',
    description: 'A self-improving coding and reasoning assistant that leverages iterative critique, specialized memory state management, and real-time execution sandboxes to verify code correctiveness asynchronously.',
    details: [
      'Developed with LangGraph utilizing advanced state networks, conditional routers, and reflection loops.',
      'Configured robust tool calling controls enabling the agent to execute shell routines and run Unit Tests.',
      'Incorporated human-in-the-loop checkpoints to allow review and override on destructive command queries.'
    ],
    category: 'dev-tool',
    technologies: ['LangGraph', 'LangChain', 'Python', 'FastAPI', 'Docker', 'Generative AI'],
    liveUrl: '#',
    image: 'reflexion_assistant',
    featured: true,
    completionDate: '2026-05',
  },
  {
    id: 'docchat-multiagent-rag',
    title: 'DocChat: Multi-Agent RAG Knowledge System',
    description: 'An intelligent multi-agent document analysis framework designed to ingest, chunk, and index corporate records, routing complex research queries to targeted specialist agents.',
    details: [
      'Built sequential and routing agent design patterns utilizing LangChain\'s Expression Language (LCEL) and VectorDB.',
      'Engineered semantic citation loops ensuring that every assertion maps back directly to a verifiable chunk in source files.',
      'Achieved a 35% improvement in retrieval precision over conventional flat RAG frameworks by resolving query fragmentation.'
    ],
    category: 'web',
    technologies: ['React', 'TypeScript', 'LangChain', 'Python', 'Vector DB', 'RAG'],
    liveUrl: '#',
    image: 'docchat_rag',
    featured: true,
    completionDate: '2024-04',
  },
  {
    id: 'gtm-crewai-orchestration',
    title: 'Autonomous GTM Lead Research Crew',
    description: 'A collaborative multi-agent squad engineered with CrewAI that automates market research, enriches profile signals, and structures outbound strategies using Clay and n8n pipelines.',
    details: [
      'Orchestrated multiple specialized agents (Researcher, Profiler, Copywriter) executing concurrent tasks.',
      'Connected agents to external Web Search and Scraping APIs with strict rate-limiting and fallback structures.',
      'Reduced manual corporate discovery cycles by 80%, providing a formatted structured report in real-time.'
    ],
    category: 'dev-tool',
    technologies: ['CrewAI', 'AutoGen (AG2)', 'Python', 'n8n', 'Clay', 'AI Orchestration'],
    liveUrl: '#',
    image: 'gtm_orchestrator',
    featured: true,
    completionDate: '2026-03',
  },
  {
    id: 'stripe-payroll-automation',
    title: 'Collective Stripe Payroll Add-on Engine',
    description: 'An enterprise-grade, cron-driven automated payroll orchestration pipeline built to streamline Stripe billing, ensure customer account safety, and minimize checkout friction.',
    details: [
      'Architected and deployed microservices handling high-volume webhooks and financial reconciliations with zero consumer downtime.',
      'Projected to boost corporate annual recurring revenue by 10% during a period of 2x YoY company member scaling.',
      'Standardized logging metrics and alarm configurations in AWS/GCP to guarantee SOC2-compliant secure transactions.'
    ],
    category: 'web',
    technologies: ['Python', 'SQL', 'GCP', 'PostgreSQL', 'Stripe API', 'cron-workflows'],
    liveUrl: '#',
    image: 'stripe_payroll',
    featured: false,
    completionDate: '2024-11',
  },
  {
    id: 'onecrm-migration-system',
    title: 'High-Fidelity CRM Data Synchronization Engine',
    description: 'A secure, multi-node backend system optimized to migrate and sanitize records from HubSpot into Salesforce with strict relational constraint validation.',
    details: [
      'Successfully mapped and synced complex historical transaction histories for thousands of enterprise leads.',
      'Engineered automated transactional retry queues, data deduplication routines, and real-time migration logs.',
      'Slashed redundant software licensing expenditures while boosting top-of-funnel marketing analytics and webinar sign-ups.'
    ],
    category: 'dev-tool',
    technologies: ['TypeScript', 'Node.js', 'Salesforce API', 'HubSpot API', 'SQL'],
    liveUrl: '#',
    image: 'crm_sync',
    featured: false,
    completionDate: '2023-08',
  }
];

export const experiencesData: Experience[] = [
  {
    id: 'exp-1',
    role: 'Software Engineering Consultant',
    company: 'Independent Consulting',
    location: 'Remote',
    period: 'Jan 2026 - Present',
    description: [
      'Advise early-stage and growth-stage companies on full-stack architecture, GTM automation, and AI-enabled product development, implementing state-of-the-art LLM capabilities and self-healing Django orchestration backends.',
      'Design and implement end-to-end automation pipelines using Python, n8n, and Clay, reducing manual workflows and accelerating go-to-market execution for B2B SaaS clients.',
      'Lead technical discovery and solution design engagements, translating complex business requirements into scalable, secure, and production-ready engineering deliverables.'
    ],
    skills: ['Python', 'Django', 'n8n', 'Clay', 'Generative AI Agents', 'Agentic Workflows', 'Software Design Patterns']
  },
  {
    id: 'exp-2',
    role: 'Senior Software Engineer / Project Technical Lead',
    company: 'Collective',
    location: 'San Francisco, CA',
    period: 'Apr 2022 - Feb 2025',
    description: [
      'Led and mentored a team of 3 engineers in the Growth function, collaborating with engineering leadership and product managers to shape architecture and roadmap decisions during a period of 2x YoY member growth.',
      'Architected and launched a Stripe payroll add-on automation utilizing secure, cron-based reliable workflows, delivered with zero member disruption and projected to drive a 10% increase in company revenue.',
      'Directed OneCRM migration from HubSpot to Salesforce, ensuring data consistency, streamlining sales processes, cutting software costs, and boosting webinar sign-ups and email campaign performance.',
      'Optimized top-of-funnel conversion performance via programmatic A/B testing (using Optimizely, Statsig), CAC cost analysis, funnel drop-off tracking, and segmentation in partnership with Sales, Marketing, and Data Science.'
    ],
    skills: ['Python', 'Django', 'React', 'SQL', 'A/B Testing (Optimizely, Statsig)', 'Salesforce', 'GTM Automation', 'Mentorship']
  },
  {
    id: 'exp-3',
    role: 'Senior Software Engineer',
    company: 'ACS Technologies',
    location: 'Florence, SC',
    period: 'Apr 2019 - Mar 2022',
    description: [
      'Engineered custom data automation solutions using SQL, C#, and Python (Django) that reduced database update cycles from several days to 7 minutes, saving hundreds of developer hours annually.',
      'Redesigned and streamlined team developer onboarding workflows with Docker, Git, and CI/CD pipelines, reducing machine setup time by 30% and accelerating productivity.',
      'Mentored 5+ software engineering interns and junior developers on full-stack projects (React, Django, .NET Core, REST APIs, SQL), providing ongoing architectural guidance and implementing engineering best practices.',
      'Partnered closely with UX, QA, and product squads to deliver highly responsive, accessible web applications for thousands of users; integrated Google Analytics to generate actionable product insights.'
    ],
    skills: ['React', 'Django', 'C#', '.NET Core', 'SQL', 'Docker', 'Google Analytics', 'CI/CD']
  },
  {
    id: 'exp-4',
    role: 'Financial Consolidation Analyst',
    company: 'TE Connectivity',
    location: 'Winston-Salem, NC',
    period: 'Jun 2018 - Mar 2019',
    description: [
      'Drove global financial consolidation and forecast analysis by partnering with regional finance teams to aggregate, validate, and present executive-level weekly and monthly reports.',
      'Optimized financial reporting systems (Hyperion, BPC) by designing robust formula-driven template structures that reduced periodic data processing times by 20% while improving metrics accuracy across global report channels.'
    ],
    skills: ['Hyperion', 'BPC', 'Financial Modeling', 'Data Consolidation', 'Analytics']
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    name: 'Building AI Agents and Agentic Workflows Specialization',
    issuer: 'IBM (Coursera)',
    date: 'Active',
    credentialId: 'IBM-AI-AGENTS-9128',
    link: '#',
  },
  {
    id: 'cert-2',
    name: 'Product Management Professional Certificate',
    issuer: 'BrainStation',
    date: '2023',
    credentialId: 'BS-PM-59302',
  },
  {
    id: 'cert-3',
    name: 'C++ Introduction to Financial Engineering Certificate',
    issuer: 'Baruch College CUNY',
    date: '2019',
  }
];

export const educationData: Education[] = [
  {
    id: 'edu-1',
    degree: 'M.S. in Computer Science (Specialization: HCI)',
    institution: 'Georgia Institute of Technology',
    period: 'Graduated Dec 2025',
    location: 'Atlanta, GA',
    details: [
      'Acquired advanced master-level expertise in Human-Computer Interaction, Software Engineering, and Interactive Product Layouts.'
    ]
  },
  {
    id: 'edu-2',
    degree: 'B.A. in Mathematics & B.B.A. in Accounting & Finance',
    institution: 'Francis Marion University',
    period: 'Graduated May 2018',
    location: 'Florence, SC',
    details: [
      'Dual degrees with highest honors combining rigorous quantitative math analysis with full enterprise finance and business consolidation methodologies.'
    ]
  }
];

