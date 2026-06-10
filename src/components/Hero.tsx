/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react"
import {
  ArrowDown,
  Mail,
  Github,
  Linkedin,
  Terminal,
  ChevronRight,
  LayoutGrid,
} from "lucide-react"
import { personalInfo } from "../data"
import profile480 from "../assets/images/profile_watercolor_1780885225682-480.webp"
import profile800 from "../assets/images/profile_watercolor_1780885225682-800.webp"
import profile1200 from "../assets/images/profile_watercolor_1780885225682-1200.webp"
import profilePng from "../assets/images/profile_watercolor_1780885225682.png"

interface HeroProps {
  onNavClick: (sectionId: string) => void
}

export default function Hero({ onNavClick }: HeroProps) {
  // Toggle showing the Projects CTA. Set to `true` to restore the Explore Projects button.
  const SHOW_PROJECTS = false
  // Stagger children config
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent text-[#2D2A26]"
    >
      {/* Premium Minimal Backdrop Pattern */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(#CFC9BA_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="absolute top-1/4 left-1/4 w-[35rem] h-[35rem] rounded-full bg-orange-400/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] rounded-full bg-pink-400/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Hero Left Content Column */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 flex flex-col space-y-6 text-left lg:pr-6"
          >
            {/* Announcement Pill Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex self-start"
            >
              <span
                id="hero-availability-tag"
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#E6E1D3] text-xs font-mono text-neutral-600 shadow-xs"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                </span>
                <span>Active &amp; Open to Remote / Hybrid Roles</span>
              </span>
            </motion.div>

            {/* Title / Name Header */}
            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-sm font-mono tracking-widest text-orange-600 uppercase font-semibold" aria-hidden="true">
                Hello, my name is
              </p>
              <h2
                id="hero-main-header-name"
                className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold text-[#2D2A26] tracking-tight leading-none"
              >
                {personalInfo.name}
              </h2>
              <h3
                id="hero-main-header-role"
                className="text-xl sm:text-2xl md:text-3xl font-display font-medium text-neutral-600 tracking-tight leading-snug"
              >
                {personalInfo.title}
              </h3>
            </motion.div>

            {/* Core Bio / Tagline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-neutral-700 max-w-xl font-sans font-light leading-relaxed"
            >
              I build production AI systems — agentic pipelines, RAG
              applications, and the evaluation and serving infrastructure that
              makes them reliable. Full-stack engineer with an M.S. in Computer
              Science from Georgia Tech and 6 years shipping software at scale.
              I care most about the unglamorous half of applied AI: structured
              outputs that don't break, hallucination control, evals you can
              trust, and latency and cost that hold up in production.
            </motion.p>

            {/* Quick Metrics */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 border-y border-[#E6E1D3] py-5 max-w-lg"
            >
              <div id="metric-experience" className="text-left">
                <span className="block text-2xl font-display font-bold text-[#2D2A26]">
                  6+
                </span>
                <span className="block text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  Years Exp
                </span>
              </div>
              <div
                id="metric-satisfaction"
                className="text-left border-x border-[#E6E1D3] px-4"
              >
                <span className="block text-2xl font-display font-bold text-[#2D2A26]">
                  M.S. CS
                </span>
                <span className="block text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  Georgia Tech
                </span>
              </div>
              <div id="metric-projects" className="text-left pl-2">
                <span className="block text-2xl font-display font-bold text-[#2D2A26]">
                  Agentic AI
                </span>
                <span className="block text-xs font-mono text-neutral-500 uppercase tracking-wider">
                  RAG · Evals
                </span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap gap-4 items-center pt-2"
            >
              {SHOW_PROJECTS && (
                <button
                  id="hero-view-projects-btn"
                  onClick={() => onNavClick("projects")}
                  className="flex items-center space-x-2 px-6 py-3.5 bg-orange-700 hover:bg-orange-600 text-[#FAF6F0] rounded-lg text-sm font-mono font-medium hover:shadow-xl hover:shadow-orange-700/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
                >
                  <span>Explore Projects</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              )}

              <button
                id="hero-contact-btn"
                onClick={() => onNavClick("contact")}
                className="flex items-center space-x-2 px-6 py-3.5 bg-orange-700 hover:bg-orange-600 text-[#FAF6F0] rounded-lg text-sm font-mono font-medium hover:shadow-xl hover:shadow-orange-700/10 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                <span>Get In Touch</span>
                <Mail className="w-4 h-4 text-[#FAF6F0]" />
              </button>
            </motion.div>

            {/* Social Icons Container */}
            <motion.div
              variants={itemVariants}
              className="flex items-center space-x-6 pt-4 text-neutral-500"
            >
              <a
                id="hero-github-link"
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-600 transition-colors duration-200"
                title="GitHub Repositories"
              >
                <div className="flex items-center space-x-1.5 font-mono text-xs">
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </div>
              </a>
              <a
                id="hero-linkedin-link"
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-orange-600 transition-colors duration-200"
                title="LinkedIn Profile"
              >
                <div className="flex items-center space-x-1.5 font-mono text-xs">
                  <Linkedin className="w-4 h-4" />
                  <span>LinkedIn</span>
                </div>
              </a>
              <div className="text-xs font-mono select-none">
                📍 New York City, NY / Remote
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Right Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, x: 15 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              type: "spring",
              stiffness: 80,
              damping: 18,
              delay: 0.25,
            }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm md:max-w-md flex items-center justify-center">
              {/* Soft atmospheric gradient under portrait to enhance watercolor depth */}
              <div className="absolute inset-0 bg-radial-gradient(ellipse at center, rgba(234,88,12,0.06) 0%, transparent 70%) pointer-events-none rounded-full blur-3xl"></div>

              <picture>
                <source type="image/webp" srcSet={`${profile480} 480w, ${profile800} 800w, ${profile1200} 1200w`} sizes="(max-width:425px) 480px, (max-width:1024px) 800px, 1200px" />
                <img
                  src={profile1200}
                  alt="Yaping Yang - Watercolor Sketch"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto max-h-[28rem] md:max-h-[32rem] object-contain select-none transition-transform duration-500 hover:scale-[1.02] mix-blend-multiply"
                />
              </picture>
            </div>
          </motion.div>
        </div>

        {/* Floating Arrow down anchor to Bio Section */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center space-y-1 text-neutral-500 z-10 hover:text-orange-600 transition-colors">
          <button
            id="hero-scroll-down-btn"
            onClick={() => onNavClick("about")}
            className="flex flex-col items-center focus:outline-none cursor-pointer"
          >
            <span className="font-mono text-[10px] tracking-widest uppercase">
              Scroll Down
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce mt-1" />
          </button>
        </div>
      </div>
    </section>
  )
}
