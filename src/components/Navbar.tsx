/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useRef } from "react"
import { Menu, X, ArrowUpRight, FileText } from "lucide-react"
import profile480 from "../assets/images/profile_watercolor_1780885225682-480.webp"
import profile800 from "../assets/images/profile_watercolor_1780885225682-800.webp"
import profile1200 from "../assets/images/profile_watercolor_1780885225682-1200.webp"

interface NavbarProps {
  onNavClick: (sectionId: string) => void
  activeSection: string
}

export default function Navbar({ onNavClick, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Close mobile menu on escape and clicks outside
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false)
    }
    const onClickOutside = (e: MouseEvent) => {
      if (!menuRef.current) return
      const target = e.target as Node
      if (isOpen && !menuRef.current.contains(target)) setIsOpen(false)
    }
    window.addEventListener("keydown", onKey)
    window.addEventListener("mousedown", onClickOutside)
    return () => {
      window.removeEventListener("keydown", onKey)
      window.removeEventListener("mousedown", onClickOutside)
    }
  }, [isOpen])

  const navItems = [
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Experience", target: "experience" },
    { label: "Resume CV", target: "resume" },
    { label: "Contact", target: "contact" },
  ]

  const SHOW_PROJECTS_NAV = false
  const navItemsFiltered = SHOW_PROJECTS_NAV
    ? navItems
    : navItems.filter((i) => i.target !== "projects")

  const handleItemClick = (target: string) => {
    onNavClick(target)
    setIsOpen(false)
  }

  return (
    <nav
      id="main-navigation-container"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAF6F0]/90 backdrop-blur-md border-b border-[#E6E1D3] py-3 shadow-md"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              id="navbar-logo-btn"
              onClick={() => handleItemClick("hero")}
              className="group flex items-center space-x-2 text-neutral-800 font-display font-bold text-lg tracking-wider focus:outline-none cursor-pointer"
              aria-label="Go to top"
            >
              <div className="relative w-8 h-8 rounded-full border border-orange-500 overflow-hidden bg-transparent shadow-3xs group-hover:scale-105 transition-all duration-300">
                <picture>
                  <source
                    type="image/webp"
                    srcSet={`${profile480} 480w, ${profile800} 800w, ${profile1200} 1200w`}
                    sizes="48px"
                  />
                  <img
                    src={profile1200}
                    alt="yaping.tech logo"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
              <span className="group-hover:text-amber-950 transition-colors duration-200">
                yaping<span className="text-orange-600">.tech</span>
              </span>
            </button>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3">
            {navItemsFiltered.map((item) => (
              <button
                key={item.target}
                id={`nav-link-${item.target}`}
                onClick={() => handleItemClick(item.target)}
                className={`px-3 py-2 text-xs font-mono tracking-tight uppercase transition-all duration-200 hover:text-orange-600 rounded-md cursor-pointer ${
                  activeSection === item.target
                    ? "text-orange-700 bg-[#F4F1EA]/85 font-semibold border-b-2 border-orange-600 rounded-b-none"
                    : "text-neutral-600 hover:bg-[#F2ECE0]/60 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Hire Me CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              id="navbar-cv-cta-btn"
              onClick={() => handleItemClick("resume")}
              className="flex items-center space-x-1.5 px-3 py-1.5 border border-dashed border-[#CFC9BA] hover:border-orange-600 rounded-md text-xs font-mono text-neutral-700 hover:text-neutral-900 hover:bg-[#F4F1EA]/60 transition-all cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-orange-600" />
              <span>Print Out CV</span>
            </button>
            <button
              id="navbar-hire-cta-btn"
              onClick={() => handleItemClick("contact")}
              className="relative px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-mono rounded-md hover:shadow-lg hover:shadow-orange-700/20 active:translate-y-0.5 transition-all duration-200 overflow-hidden cursor-pointer group"
            >
              <span className="relative z-10 flex items-center space-x-1">
                <span>Email me</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-orange-500 to-orange-850 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              id="mobile-nav-toggle-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-600 hover:text-neutral-900 hover:bg-[#F4F1EA] focus:outline-none"
              aria-label="Toggle navigation menu"
              aria-expanded={isOpen}
              aria-controls="mobile-nav-menu-panel"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Open Panel */}
      {isOpen && (
        <div
          id="mobile-nav-menu-panel"
          ref={menuRef}
          className="md:hidden bg-[#FAF6F0] border-b border-[#E6E1D3] shadow-2xl animate-in fade-in duration-200"
        >
          <div
            className="px-2 pt-2 pb-4 space-y-1 sm:px-3"
            role="menu"
            aria-label="Mobile navigation"
          >
            {navItemsFiltered.map((item) => (
              <button
                key={item.target}
                id={`mobile-nav-link-${item.target}`}
                onClick={() => handleItemClick(item.target)}
                className={`block w-full text-left px-4 py-3 rounded-md text-sm font-mono uppercase tracking-wider ${
                  activeSection === item.target
                    ? "text-orange-700 bg-[#F4F1EA] font-semibold border-l-4 border-orange-600"
                    : "text-neutral-600 hover:bg-[#F2ECE0]/60 hover:text-neutral-900"
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="border-t border-[#E6E1D3] mt-4 pt-4 px-4 flex flex-col space-y-2">
              <button
                id="mobile-nav-cv-btn"
                onClick={() => handleItemClick("resume")}
                className="w-full flex items-center justify-center space-x-2 py-2 border border-[#CFC9BA] hover:border-neutral-500 rounded-md text-xs font-mono text-neutral-700 hover:bg-[#F4F1EA]/60"
              >
                <FileText className="w-4 h-4 text-orange-600" />
                <span>Show Printable CV</span>
              </button>
              <button
                id="mobile-nav-hire-btn"
                onClick={() => handleItemClick("contact")}
                className="w-full py-3 bg-orange-700 hover:bg-orange-600 text-white rounded-md text-xs font-mono flex items-center justify-center space-x-1"
              >
                <span>Email Me</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
