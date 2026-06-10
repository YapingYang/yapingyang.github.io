/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, FormEvent } from "react"
import { motion } from "motion/react"
import {
  Award,
  Terminal,
  Code,
  Cpu,
  Sparkles,
  Sliders,
  ChevronRight,
  Check,
} from "lucide-react"
import { skillsData, certificationsData, personalInfo } from "../data"

export default function BentoSkills() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [terminalInput, setTerminalInput] = useState("")
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "$ cat introduction.txt",
    personalInfo.bio,
    "$ help",
    "Available commands: about, skills, contact, achievements, clear",
  ])

  const handleTerminalSubmit = (e: FormEvent) => {
    e.preventDefault()
    const cmd = terminalInput.trim().toLowerCase()
    if (!cmd) return

    let response = ""
    switch (cmd) {
      case "about":
        response = `👨‍💻 Name: ${personalInfo.name}\n📍 Location: ${personalInfo.location}\n🎓 Degrees:\n - M.S. in Computer Science (HCI), Georgia Tech (2025)\n - Dual B.A. Math & B.B.A. Accounting & Finance, FMU (2018)\n💼 Goal: Senior Engineer delivering scalable AI systems and high-converting automation workflows.`
        break
      case "skills":
        response =
          "🛠️ Top Skills:\n- Applied AI & Safety: LangGraph, CrewAI, AutoGen, Agentic RAG, Guardrails, Alignment & Safety Evaluations\n- Full-Stack: Python (FastAPI), React (TypeScript), C# (.NET Core)\n- Databases & Systems: SQL / PostgreSQL, Docker, AWS, GCP, REST APIs\n- Methodologies: Software Design Patterns, HCI, GTM Automation, A/B Testing"
        break
      case "contact":
        response = `📩 Connection established:\n- Email: ${personalInfo.email}\n- Phone: ${personalInfo.phone}\n- GitHub: ${personalInfo.github}\n- LinkedIn: ${personalInfo.linkedin}`
        break
      case "achievements":
        response =
          "🏆 Certifications:\n- IBM: Building AI Agents & Agentic Workflows Specialization\n- BrainStation Product Management Professional"
        break
      case "clear":
        setTerminalHistory([])
        setTerminalInput("")
        return
      case "help":
        response =
          "Available commands: about, skills, contact, achievements, clear"
        break
      default:
        response = `Command unknown: "${cmd}". Type "help" to see available command instructions.`
    }

    setTerminalHistory((prev) => [...prev, `$ ${terminalInput}`, response])
    setTerminalInput("")
  }

  return (
    <section
      id="skills"
      className="py-24 bg-transparent text-neutral-800 relative"
    >
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55rem] h-[55rem] rounded-full border border-[#E6E1D3] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] rounded-full border border-[#E6E1D3] border-dashed pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center md:text-left md:flex md:items-end md:justify-between mb-16 border-b border-[#E6E1D3] pb-8">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-orange-600 font-semibold mb-2">
              Capabilities Bento
            </h2>
            <h3
              id="skills-section-header"
              className="text-3xl sm:text-4xl font-display font-extrabold text-[#2D2A26] tracking-tight"
            >
              Design, Code, &amp; Cloud Architecture
            </h3>
          </div>
          <p className="mt-4 md:mt-0 max-w-sm text-sm text-neutral-600 font-sans leading-relaxed">
            Core proficiencies, background, and how I approach building reliable
            AI systems.
          </p>
        </div>

        {/* Bento Grid Structure */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Card 1: Core Profile Narrative (Col-Span 7) */}
          <div
            id="bento-bio-card"
            className="md:col-span-7 bg-white/80 border border-[#E6E1D3] rounded-2xl p-6 md:p-8 flex flex-col justify-between hover:border-neutral-400 transition-all duration-300 shadow-md"
          >
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-orange-600 mb-2">
                <Sparkles className="w-5 h-5 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Applied AI Philosophy
                </span>
              </div>
              <h4
                id="bento-bio-title"
                className="text-xl md:text-2xl font-display font-bold text-[#2D2A26] tracking-tight"
              >
                Building reliable AI systems.
              </h4>
              <p className="text-sm text-neutral-700 font-sans leading-relaxed">
                I started in full-stack and growth engineering, then earned an
                M.S. in Computer Science from Georgia Tech. Today I focus on
                applied AI — designing agentic and retrieval systems, and the
                evaluation, observability, and serving layers that make them
                trustworthy in production.
              </p>
              <p className="text-sm text-neutral-650 font-sans leading-relaxed">
                My HCI and full-stack background means I think about the whole
                system: not just the model, but the interface, the failure
                modes, and the person on the other end. Outside of building, I
                follow computational neuroscience and AI interpretability, and
                I'm active in the Research Software Engineering (RSE) community.
              </p>
            </div>

            {/* Core Values / Bullet Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-[#E6E1D3] pt-6 mt-8">
              <div className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-mono font-medium text-neutral-800">
                    Reliability
                  </span>
                  <span className="text-[10px] text-neutral-500 font-sans block">
                    Evals, structured output, guardrails
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-mono font-medium text-neutral-800">
                    Full-Stack Range
                  </span>
                  <span className="text-[10px] text-neutral-500 font-sans block">
                    Backend, pipelines, and front end
                  </span>
                </div>
              </div>
              <div className="flex items-start space-x-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-xs font-mono font-medium text-neutral-800">
                    Systems Curiosity
                  </span>
                  <span className="text-[10px] text-neutral-500 font-sans block">
                    Interpretability & computational neuroscience
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Interactive Terminal Sandbox (Col-Span 5) */}
          <div
            id="bento-terminal-card"
            className="md:col-span-5 bg-white/90 border border-[#E6E1D3] rounded-2xl p-4 flex flex-col justify-between hover:border-neutral-400 transition-all duration-300 shadow-md animate-none"
          >
            <div className="flex items-center justify-between border-b border-[#E6E1D3] pb-3 mb-3">
              <div className="flex items-center space-x-2">
                <Terminal className="w-4 h-4 text-orange-600 animate-pulse" />
                <span className="font-mono text-xs text-neutral-500">
                  interactive-terminal.sh
                </span>
              </div>
              <div className="text-[10px] font-mono text-neutral-600 bg-[#F4F1EA] border border-[#E6E1D3] px-2 py-0.5 rounded">
                YAPING_OS
              </div>
            </div>

            {/* Terminal output viewport */}
            <div
              id="terminal-screen-viewport"
              className="flex-grow font-mono text-xs text-neutral-800 bg-[#FAF6F0]/65 border border-[#E6E1D3]/80 rounded-lg p-3 overflow-y-auto max-h-56 min-h-[14rem] space-y-2 custom-scrollbar select-text"
            >
              {terminalHistory.map((line, idx) => (
                <div key={idx} className="whitespace-pre-wrap leading-relaxed">
                  {line.startsWith("$") ? (
                    <span className="text-orange-600 font-semibold">
                      {line}
                    </span>
                  ) : (
                    <span className="text-neutral-650">{line}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Terminal Input Form */}
            <form
              onSubmit={handleTerminalSubmit}
              className="mt-3 flex items-center bg-[#FAF6F0] rounded-lg border border-[#E6E1D3] px-3 py-1"
            >
              <span className="font-mono text-xs text-orange-600 mr-2 selection:bg-orange-600/15">
                $
              </span>
              <input
                id="terminal-input-element"
                type="text"
                value={terminalInput}
                onChange={(e) => setTerminalInput(e.target.value)}
                placeholder="type 'about', 'skills', 'contact', 'achievements'..."
                className="flex-grow bg-transparent border-0 outline-none text-xs text-neutral-800 font-mono placeholder-neutral-400 focus:ring-0 ring-offset-0 py-1.5"
                autoComplete="off"
              />
              <button
                id="terminal-enter-submit"
                type="submit"
                className="text-[10px] font-mono bg-[#F4F1EA] hover:bg-[#E6E1D3] text-neutral-600 hover:text-neutral-800 px-2 py-1 rounded transition-colors"
              >
                Enter
              </button>
            </form>
          </div>

          {/* Card 3: Interactive Skills Category Tab Selector (Col-Span 6) */}
          <div
            id="bento-skills-tab-card"
            className="md:col-span-6 bg-white/80 border border-[#E6E1D3] rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-400 transition-all duration-300 shadow-md"
          >
            <div>
              <div className="flex items-center space-x-3 text-orange-600 mb-4">
                <Cpu className="w-5 h-5 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Proficiency Engine
                </span>
              </div>

              {/* Tabs list */}
              <div className="flex space-x-1 bg-[#F4F1EA] p-1 rounded-lg border border-[#E6E1D3] mb-6 sm:max-w-md">
                {skillsData.map((category, idx) => (
                  <button
                    key={category.title}
                    id={`bento-skills-tab-${idx}`}
                    onClick={() => setActiveCategory(idx)}
                    className={`flex-1 text-center py-2 rounded-md text-[10px] sm:text-xs font-mono transition-all uppercase cursor-pointer ${
                      activeCategory === idx
                        ? "bg-orange-600 text-white font-medium shadow-md"
                        : "text-neutral-600 hover:text-neutral-900 hover:bg-white/50"
                    }`}
                  >
                    {idx === 0
                      ? "Applied AI"
                      : idx === 1
                        ? "Backend / Dev"
                        : "Products"}
                  </button>
                ))}
              </div>

              {/* Selected Proficiency bars with level and name */}
              <div className="space-y-4">
                <h5 className="font-display font-semibold text-neutral-800 text-sm tracking-wide">
                  {skillsData[activeCategory].title}
                </h5>

                <div className="space-y-3.5">
                  <div className="flex flex-wrap gap-2">
                    {skillsData[activeCategory].items.map((skill) => (
                      <span
                        key={skill.name}
                        className="inline-flex items-center text-xs font-mono text-neutral-700 bg-[#F4F1EA] border border-[#E6E1D3] px-2 py-1 rounded-md"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4: Work Methodology & Dials (Col-Span 3) */}
          <div
            id="bento-methodology-card"
            className="md:col-span-3 bg-white/80 border border-[#E6E1D3] rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-400 transition-all duration-300 shadow-md"
          >
            <div>
              <div className="flex items-center space-x-3 text-orange-600 mb-4">
                <Sliders className="w-5 h-5 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Work Values
                </span>
              </div>
              <h5 className="font-display font-semibold text-neutral-800 text-base mb-6 tracking-tight">
                Software Style Settings
              </h5>

              {/* Dials sliders indicator layout */}
              <div className="space-y-5">
                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                    <span>Performance</span>
                    <span>Aesthetic</span>
                  </div>
                  <div className="h-1 w-full bg-[#FAF6F0] rounded-full relative border border-[#E6E1D3]">
                    <div className="absolute top-1/2 left-[50%] -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-orange-500 ring-4 ring-[#FAF6F0] shadow-xs"></div>
                    <div className="h-full bg-neutral-200 rounded-full w-full"></div>
                  </div>
                  <div className="text-center font-mono text-[9px] text-[#4F4A42] pt-1">
                    Perfect Equidistant Ratio (50/50)
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                    <span>Scale-To-Zero</span>
                    <span>Heavy Data</span>
                  </div>
                  <div className="h-1 w-full bg-[#FAF6F0] rounded-full relative border border-[#E6E1D3]">
                    <div className="absolute top-1/2 left-[30%] -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-orange-600 ring-4 ring-[#FAF6F0] shadow-xs"></div>
                    <div className="h-full bg-neutral-200 rounded-full w-full"></div>
                  </div>
                  <div className="text-center font-mono text-[9px] text-[#4F4A42] pt-1">
                    Serverless Optimized (30/70)
                  </div>
                </div>

                <div className="space-y-1">
                  <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                    <span>Fast Prototyping</span>
                    <span>Stable Testing</span>
                  </div>
                  <div className="h-1 w-full bg-[#FAF6F0] rounded-full relative border border-[#E6E1D3]">
                    <div className="absolute top-1/2 left-[70%] -translate-y-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-[#C2410C] ring-4 ring-[#FAF6F0] shadow-xs"></div>
                    <div className="h-full bg-neutral-200 rounded-full w-full"></div>
                  </div>
                  <div className="text-center font-mono text-[9px] text-[#4F4A42] pt-1">
                    Strict Production Safety (70/30)
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E1D3] mt-6 text-[10px] text-neutral-500 font-sans leading-relaxed">
              Equipped to adapt. Custom build parameters adjusted per project
              constraints.
            </div>
          </div>

          {/* Card 5: Certifications Snapshot (Col-Span 3) */}
          <div
            id="bento-certs-card"
            className="md:col-span-3 bg-white/80 border border-[#E6E1D3] rounded-2xl p-6 flex flex-col justify-between hover:border-neutral-400 transition-all duration-300 shadow-md"
          >
            <div>
              <div className="flex items-center space-x-3 text-orange-600 mb-4">
                <Award className="w-5 h-5 animate-pulse" />
                <span className="font-mono text-xs uppercase tracking-wider font-semibold">
                  Achievements
                </span>
              </div>
              <h5 className="font-display font-semibold text-neutral-800 text-base mb-4 tracking-tight">
                Top Certs
              </h5>

              {/* Dynamic list */}
              <div className="space-y-3">
                {certificationsData.slice(0, 3).map((cert) => (
                  <div
                    key={cert.id}
                    className="group/cert border-b border-[#E6E1D3] pb-2.5 last:border-0 last:pb-0"
                  >
                    <span className="block text-[11px] font-sans font-semibold text-neutral-800 group-hover/cert:text-orange-600 transition-colors line-clamp-2 leading-tight">
                      {cert.name}
                    </span>
                    <span className="block text-[9px] font-mono text-neutral-500">
                      {cert.issuer} &bull; {cert.date}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[#E6E1D3] mt-4">
              <span className="text-[10px] font-mono text-neutral-600 flex items-center hover:text-orange-600 transition-colors cursor-pointer">
                <span>View all verified credentials</span>
                <ChevronRight className="w-3 h-3 ml-0.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
