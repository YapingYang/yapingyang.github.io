/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react"
import { Mail, Github, Linkedin, Copy, Check } from "lucide-react"
import { personalInfo } from "../data"

export default function ContactForm() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      className="py-24 bg-transparent text-neutral-800 relative"
    >
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-orange-200/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-orange-600 font-semibold mb-2">
            Get in touch
          </h2>
          <h3
            id="contact-section-header"
            className="text-3xl sm:text-4xl font-display font-extrabold text-[#2D2A26] tracking-tight"
          >
            Contact
          </h3>
          <p className="mt-3 text-neutral-600 text-sm font-sans font-light leading-relaxed">
            Open to applied AI engineering roles and interesting problems. Email is the fastest way to reach me.
          </p>
        </div>

        {/* Coordinates column centered and expanded */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          <div className="lg:col-span-12 flex justify-center">
            {/* Quick Copy Coordinates Block */}
            <div className="bg-white/80 border border-[#E6E1D3] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="space-y-1">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-orange-600 font-semibold">
                  Reach me
                </h4>
                <p className="text-xl font-display font-bold text-[#2D2A26]">
                  Contact
                </p>
              </div>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="bg-[#FAF6F0] rounded-xl border border-[#E6E1D3] p-4.5 flex justify-between items-center">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                        Email
                      </span>
                      <span className="text-sm font-sans text-neutral-800">
                        {personalInfo.email}
                      </span>
                    </div>
                  </div>
                  <button
                    id="btn-copy-email"
                    onClick={handleCopyEmail}
                    className="p-2 bg-white border border-[#E6E1D3] hover:border-neutral-400 hover:bg-[#F2ECE0]/20 rounded-lg text-neutral-700 hover:text-black transition-all cursor-pointer shadow-3xs"
                    title="Copy email to clipboard"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Git profile box */}
                <a
                  id="contact-github-coord-link"
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="block bg-[#FAF6F0] hover:bg-[#F2ECE0]/30 transition-all duration-250 rounded-xl border border-[#E6E1D3] hover:border-neutral-400 p-4.5 shadow-3xs"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E6E1D3] flex items-center justify-center text-neutral-650">
                      <Github className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                        GitHub
                      </span>
                      <span className="text-sm font-sans text-neutral-800">
                        github.com/yapingyang
                      </span>
                    </div>
                  </div>
                </a>

                {/* LinkedIn box */}
                <a
                  id="contact-linkedin-coord-link"
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block bg-[#FAF6F0] hover:bg-[#F2ECE0]/30 transition-all duration-250 rounded-xl border border-[#E6E1D3] hover:border-neutral-400 p-4.5 shadow-3xs"
                >
                  <div className="flex items-center space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-white border border-[#E6E1D3] flex items-center justify-center text-orange-605">
                      <Linkedin className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-neutral-500 uppercase tracking-widest">
                        LinkedIn
                      </span>
                      <span className="text-sm font-sans text-neutral-800">
                        linkedin.com/in/yaping-yang
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Design Ethos card block */}
            <div className="bg-linear-to-br from-orange-50/50 to-[#FAF6F0]/30 border border-[#E6E1D3] p-6 rounded-2xl">
              <p className="text-xs sm:text-sm text-neutral-650 font-sans leading-relaxed italic">
                "The hard part of applied AI isn't the demo — it's making it reliable."
              </p>
              <span className="block text-[10px] font-mono text-orange-600 uppercase tracking-widest mt-4 font-semibold">
                &mdash; Engineering manifesto
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
