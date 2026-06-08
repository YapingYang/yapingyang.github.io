/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import BentoSkills from "./components/BentoSkills"
import ProjectsShowcase from "./components/ProjectsShowcase"
import TimelineExperience from "./components/TimelineExperience"
import ResumeViewer from "./components/ResumeViewer"
import ContactForm from "./components/ContactForm"
import { personalInfo } from "./data"
import { ArrowUp, Github, Linkedin, Mail, Triangle } from "lucide-react"
import watercolorBg from "./assets/images/watercolor_parchment_bg_1780884222094.png"
import profileWatercolor from "./assets/images/profile_watercolor_1780885225682.png"

export default function App() {
  const [activeSection, setActiveSection] = useState("hero")

  // Smooth scroll click handler
  const handleScrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80 // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = element.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setActiveSection(sectionId)
    }
  }

  // Monitor scroll movements to activate tab indicators dynamically
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160 // offset focal point

      const sections = [
        "hero",
        "about",
        "skills",
        "projects",
        "experience",
        "resume",
        "contact",
      ]

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[#FAF6F0] font-sans text-neutral-800 selection:bg-orange-600/15 selection:text-orange-950 relative">
      {/* High-Resolution Watercolor Parchment Texture Overlay */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-50 select-none bg-cover bg-center bg-no-repeat mix-blend-multiply animate-fade-in"
        style={{ backgroundImage: `url(${watercolorBg})` }}
      />

      {/* Dynamic Filtered Fluid Watercolor Pools */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-25 mix-blend-multiply">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="watercolor-wash">
            {/* Blends source graphic circular edges completely with a heavy blur for pristine organic bleeding */}
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="110"
              result="blurred"
            />
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.005"
              numOctaves="4"
              result="noise"
            />
            <feDisplacementMap
              in="blurred"
              in2="noise"
              scale="140"
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
          <g filter="url(#watercolor-wash)">
            {/* Blended warm & cool watercolor pools mirroring the color palette from your artwork */}
            <circle cx="15%" cy="15%" r="450" fill="#EA580C" opacity="0.22" />{" "}
            {/* Warm sunset orange */}
            <circle
              cx="85%"
              cy="25%"
              r="520"
              fill="#3B82F6"
              opacity="0.18"
            />{" "}
            {/* Indigo blue */}
            <circle
              cx="50%"
              cy="50%"
              r="400"
              fill="#9333EA"
              opacity="0.15"
            />{" "}
            {/* Royal violet pool */}
            <circle
              cx="15%"
              cy="75%"
              r="420"
              fill="#F59E0B"
              opacity="0.16"
            />{" "}
            {/* Sunset golden amber */}
            <circle
              cx="80%"
              cy="80%"
              r="480"
              fill="#EC4899"
              opacity="0.20"
            />{" "}
            {/* Bright magenta pink */}
          </g>
        </svg>
      </div>

      <div className="relative z-10 print:p-0">
        {/* Navigation Bar */}
        <div className="print:hidden">
          <Navbar
            onNavClick={handleScrollToSection}
            activeSection={activeSection}
          />
        </div>

        {/* Section 1: Hero Banner */}
        <div id="section-hero" className="print:hidden">
          <Hero onNavClick={handleScrollToSection} />
        </div>

        {/* Section 2: Narrative Biography Focus Block */}
        <section
          id="about"
          className="py-24 bg-[#FAF6F0]/30 border-t border-[#E6E1D3] relative overflow-hidden print:hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-4 text-center lg:text-left space-y-4">
                <span className="text-xs font-mono uppercase tracking-widest text-orange-600 font-semibold">
                  Aesthetic Focus
                </span>
                <h3
                  id="about-section-heading"
                  className="text-3xl font-display font-extrabold text-neutral-800 tracking-tight leading-tight"
                >
                  Design Aesthetics &amp; Systems Logic
                </h3>
                <p className="text-sm text-neutral-600 font-sans font-light leading-relaxed">
                  I believe software engineering functions at its absolute peak
                  when developer interfaces, robust APIs, and design guidelines
                  co-exist seamlessly.
                </p>
              </div>

              {/* Graphic center layout cards */}
              <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div
                  id="about-card-1"
                  className="p-6 bg-white/70 backdrop-blur-md border border-[#E6E1D3] rounded-2xl hover:border-neutral-400 transition-all"
                >
                  <div className="w-10 h-10 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4 font-mono font-bold text-xs">
                    01
                  </div>
                  <h4 className="text-base font-display font-bold text-neutral-800 mb-2 tracking-tight">
                    Technical Architecture
                  </h4>
                  <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                    Developing durable server architectures utilizing
                    Express/Node ecosystems proxying secure API vectors,
                    deploying containerized routines securely under GCP Cloud
                    Run frameworks.
                  </p>
                </div>

                <div
                  id="about-card-2"
                  className="p-6 bg-white/70 backdrop-blur-md border border-[#E6E1D3] rounded-2xl hover:border-neutral-400 transition-all"
                >
                  <div className="w-10 h-10 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center text-orange-600 mb-4 font-mono font-bold text-xs">
                    02
                  </div>
                  <h4 className="text-base font-display font-bold text-neutral-800 mb-2 tracking-tight">
                    Responsive Presentation
                  </h4>
                  <p className="text-xs text-neutral-600 font-sans leading-relaxed">
                    Crafting highly tactile web interfaces. Utilizing fluid
                    Tailwind utilities, CSS grid structures, standard
                    ResizeObservers and mobile-compliant touching targets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Bento Grid Core Skills */}
        <div id="section-skills" className="print:hidden">
          <BentoSkills />
        </div>

        {/* Section 4: Projects Portfolio */}
        <div id="section-projects" className="print:hidden">
          <ProjectsShowcase />
        </div>

        {/* Section 5: Work Experience & Timeline */}
        <div id="section-experience" className="print:hidden">
          <TimelineExperience />
        </div>

        {/* Section 6: Interactive Printable Resume (Visible in Print & UI toggles) */}
        <div id="section-resume">
          <ResumeViewer />
        </div>

        {/* Section 7: Enquiries Contact Form */}
        <div id="section-contact" className="print:hidden">
          <ContactForm />
        </div>

        {/* Dynamic footer element */}
        <footer
          id="master-app-footer"
          className="bg-[#FAF6F0]/50 border-t border-[#E6E1D3] py-12 text-sm text-neutral-500 relative overflow-hidden print:hidden"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo Footer details */}
              <div className="flex items-center space-x-2">
                <div className="relative w-6 h-6 rounded-full border border-orange-500 overflow-hidden bg-transparent">
                  <img
                    src={profileWatercolor}
                    alt="yaping.tech logo"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="font-display font-bold tracking-wider text-[#2D2A26] text-sm">
                  yaping<span className="text-orange-600">.tech</span>
                </span>
              </div>

              {/* Link references and descriptors */}
              <div className="font-mono text-[10px] uppercase text-neutral-500">
                &copy; 2026 {personalInfo.name} &bull; Built in Modern React
                &amp; Tailwind CSS
              </div>

              {/* Direct footer coordinates */}
              <div className="flex items-center space-x-4">
                <a
                  id="footer-github-link"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg border border-[#E5DEC9] bg-white/75 hover:bg-[#F4F1EA] text-neutral-600 hover:text-orange-600 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  id="footer-linkedin-link"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg border border-[#E5DEC9] bg-white/75 hover:bg-[#F4F1EA] text-neutral-600 hover:text-orange-600 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <button
                  id="footer-back-to-top-btn"
                  onClick={() =>
                    window.scrollTo({ top: 0, behavior: "smooth" })
                  }
                  className="p-1.5 rounded-lg border border-orange-200 bg-white hover:border-orange-600 text-orange-600 hover:bg-orange-50 transition-colors cursor-pointer"
                  title="Back to Top"
                >
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
