/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Printer, Download, Eye, EyeOff, LayoutGrid, FileText, CheckCircle2, CircleDot } from 'lucide-react';
import { personalInfo, skillsData, experiencesData, educationData, certificationsData, projectsData } from '../data';

export default function ResumeViewer() {
  const [paperTheme, setPaperTheme] = useState<'light' | 'dark'>('light');
  const [compactMode, setCompactMode] = useState<boolean>(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section id="resume" className="py-24 bg-transparent text-neutral-800 relative print:bg-white print:text-black print:p-0">
      
      {/* Absolute Backdrop Gradient block */}
      <div className="absolute inset-x-0 bottom-0 h-96 bg-linear-to-t from-orange-50/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 print:max-w-none print:px-0">
        
        {/* Section Header (hidden on print) */}
        <div className="text-center max-w-2xl mx-auto mb-16 print:hidden">
          <h2 className="text-xs font-mono uppercase tracking-widest text-orange-600 font-semibold mb-2">
            Curriculum Vitae
          </h2>
          <h3 id="resume-section-header" className="text-3xl sm:text-4xl font-display font-extrabold text-[#2D2A26] tracking-tight">
            Printable Resume
          </h3>
          <p className="mt-3 text-neutral-600 text-sm font-sans font-light leading-relaxed">
            Review a structured representation of my professional capabilities. Toggle theme styles, hide specific subsections, or invoke the browser print engine to save as a PDF.
          </p>
        </div>

        {/* Toolbar (hidden on print) */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-white/90 border border-[#E6E1D3] p-4 rounded-2xl mb-8 print:hidden shadow-xs">
          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-neutral-600">Sheet Theme:</span>
            <div className="flex space-x-1 bg-[#FAF8F5] p-1 border border-[#E6E1D3] rounded-lg">
              <button
                id="btn-resume-theme-light"
                onClick={() => setPaperTheme('light')}
                className={`px-3 py-1 text-[10px] font-mono rounded cursor-pointer transition-all ${
                  paperTheme === 'light'
                    ? 'bg-white border border-[#E6E1D3] text-neutral-800 font-semibold shadow-3xs'
                    : 'text-neutral-500 hover:text-orange-600'
                }`}
              >
                Paper Light
              </button>
              <button
                id="btn-resume-theme-dark"
                onClick={() => setPaperTheme('dark')}
                className={`px-3 py-1 text-[10px] font-mono rounded cursor-pointer transition-all ${
                  paperTheme === 'dark'
                    ? 'bg-neutral-800 text-white font-semibold shadow-3xs'
                    : 'text-neutral-500 hover:text-orange-600'
                }`}
              >
                Slate Dark
              </button>
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <span className="font-mono text-xs text-neutral-600">Details View:</span>
            <button
              id="btn-resume-compact-toggle"
              onClick={() => setCompactMode(!compactMode)}
              className="px-3.5 py-1.5 bg-white border border-[#E6E1D3] hover:border-neutral-400 text-xs font-mono text-neutral-700 rounded-lg flex items-center space-x-1.5 transition-all cursor-pointer shadow-3xs"
            >
              {compactMode ? (
                <>
                  <Eye className="w-3.5 h-3.5 text-orange-600" />
                  <span>Show Full Text</span>
                </>
              ) : (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-orange-600" />
                  <span>Compact CV</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center space-x-2">
            <button
              id="btn-resume-print"
              onClick={handlePrint}
              className="px-4 py-2 bg-orange-600 hover:bg-orange-500 text-white text-xs font-mono rounded-lg flex items-center space-x-2 shadow-md hover:shadow-orange-700/10 transition-all cursor-pointer"
              title="Prints standard Letter sized pages cleanly from browser"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print or Save PDF</span>
            </button>
          </div>
        </div>

        {/* Paper Sheet Container (optimized both for on-screen paper look and print) */}
        <div
          id="resume-document-sheet"
          className={`w-full max-w-4xl mx-auto rounded-3xl border shadow-xl p-8 sm:p-12 md:p-16 transition-all duration-300 text-left relative overflow-hidden ${
            paperTheme === 'light'
              ? 'bg-white text-neutral-800 border-[#E6E1D3]'
              : 'bg-neutral-900 text-neutral-300 border-neutral-800'
          } print:rounded-none print:border-none print:shadow-none print:p-0 print:bg-white print:text-black print:max-w-none`}
        >
          {/* Aesthetic Stripe header on paper */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-orange-600 via-orange-400 to-orange-850 print:hidden"></div>

          {/* Sheet Header Section (2 Core Columns: Name/Role vs Coordinates) */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-start border-b-2 border-[#E6E1D3]/50 pb-8 mb-8 gap-6 print:flex-row print:justify-between print:pb-6 print:mb-6">
            <div className="space-y-2">
              <h1 className={`text-3xl sm:text-4xl font-display font-extrabold tracking-tight ${paperTheme === 'light' ? 'text-[#2D2A26]' : 'text-white'} print:text-black print:text-3xl`}>
                {personalInfo.name}
              </h1>
              <h2 className="text-sm font-mono tracking-wider text-orange-600 dark:text-orange-400 font-semibold uppercase print:text-black print:text-xs">
                {personalInfo.title}
              </h2>
              <p className="max-w-lg text-xs leading-relaxed font-sans text-neutral-500 font-light print:text-[11px] print:leading-normal">
                {personalInfo.bio}
              </p>
            </div>

            <div className={`space-y-1.5 font-mono text-[11px] shrink-0 border-l border-neutral-800/10 md:pl-6 dark:border-neutral-700/10 print:pl-4 print:text-[10px]`}>
              <div className="flex items-center space-x-2 text-neutral-500">
                <span className="text-neutral-400 font-medium">Email:</span>
                <span className={paperTheme === 'light' ? 'text-neutral-750' : 'text-neutral-200'}>{personalInfo.email}</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-500">
                <span className="text-neutral-400 font-medium">GitHub:</span>
                <span className={paperTheme === 'light' ? 'text-neutral-750' : 'text-neutral-200'}>{personalInfo.github.replace('https://', '')}</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-500">
                <span className="text-neutral-400 font-medium">LinkedIn:</span>
                <span className={paperTheme === 'light' ? 'text-neutral-750' : 'text-neutral-200'}>{personalInfo.linkedin.replace('https://', '')}</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-500">
                <span className="text-neutral-400 font-medium">Location:</span>
                <span className={paperTheme === 'light' ? 'text-neutral-750' : 'text-neutral-200'}>{personalInfo.location}</span>
              </div>
            </div>
          </div>

          {/* Grid Area: Skills, Work Experience, Education */}
          <div className="space-y-8 print:space-y-6">
            
            {/* Section: Technical Stack Grid */}
            <div className="space-y-4 print:space-y-3">
              <h3 className={`text-xs font-mono font-bold tracking-widest uppercase border-b-2 border-[#E6E1D3]/50 pb-1.5 ${paperTheme === 'light' ? 'text-neutral-900' : 'text-white'} print:text-black print:text-[11px]`}>
                Structured Tech-Stack Matrix
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 print:grid-cols-3 print:gap-4">
                {skillsData.map((cat) => {
                  const displayTitle = cat.title.includes('Products') ? 'Foundations' : cat.title.split('&')[0];
                  return (
                    <div key={cat.title} className="space-y-2">
                      <h4 className="text-[11px] font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 font-semibold print:text-[9px] print:text-black">
                        {displayTitle}
                      </h4>
                      <p className={`text-xs font-sans font-light leading-relaxed ${paperTheme === 'light' ? 'text-neutral-600' : 'text-neutral-400'} print:text-[10px]`}>
                        {cat.items.map(item => item.name).join(', ')}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section: Professional Work History */}
            <div className="space-y-4 print:space-y-3">
              <h3 className={`text-xs font-mono font-bold tracking-widest uppercase border-b-2 border-[#E6E1D3]/50 pb-1.5 ${paperTheme === 'light' ? 'text-neutral-900' : 'text-white'} print:text-black print:text-[11px]`}>
                Employment Chronology
              </h3>

              <div className="space-y-6 print:space-y-5">
                {experiencesData.map((exp) => (
                  <div key={exp.id} className="space-y-1.5">
                    <div className="flex justify-between items-start flex-wrap print:flex-row print:justify-between print:space-y-0">
                      <div>
                        <h4 className={`text-sm font-sans font-bold ${paperTheme === 'light' ? 'text-neutral-900' : 'text-white'} print:text-black print:text-[12px]`}>
                           {exp.role}
                        </h4>
                        <span className="text-[11px] font-mono text-neutral-500 font-semibold print:text-[10px]">
                          {exp.company} &bull; {exp.location}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono font-medium text-neutral-500 bg-[#FAF8F5] dark:bg-neutral-950 border border-[#E6E1D3] dark:border-neutral-800 px-2 py-0.5 rounded print:text-[9px] print:bg-white print:border-none print:px-0">
                        {exp.period}
                      </span>
                    </div>

                    {!compactMode && (
                      <div className={`space-y-1 pl-2.5 border-l-2 border-orange-500/10 dark:border-orange-500/15 print:border-l print:border-neutral-200 print:pl-2`}>
                        {exp.description.map((bullet, i) => (
                          <div key={i} className={`text-xs font-sans font-light flex items-start gap-1.5 leading-relaxed ${paperTheme === 'light' ? 'text-neutral-600' : 'text-neutral-400'} print:text-[10px] print:leading-normal`}>
                            <span className="text-orange-600 font-mono text-[9px] shrink-0 mt-0.5 print:text-neutral-500">&bull;</span>
                            <span>{bullet}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Academic Degrees */}
            <div className="space-y-4 print:space-y-3">
              <h3 className={`text-xs font-mono font-bold tracking-widest uppercase border-b-2 border-[#E6E1D3]/50 pb-1.5 ${paperTheme === 'light' ? 'text-neutral-900' : 'text-white'} print:text-black print:text-[11px]`}>
                Academic Credentials &bull; Education
              </h3>

              {educationData.map((edu) => (
                <div key={edu.id} className="space-y-1">
                  <div className="flex justify-between items-start flex-wrap print:flex-row print:justify-between">
                    <div>
                      <h4 className={`text-sm font-sans font-bold ${paperTheme === 'light' ? 'text-neutral-950' : 'text-white'} print:text-black print:text-[11px]`}>
                        {edu.degree}
                      </h4>
                      <p className="text-[11px] font-mono text-neutral-500">
                        {edu.institution}, {edu.location}
                      </p>
                    </div>
                    <div className="text-right">
                      <span className="text-[10px] font-mono text-neutral-420 block print:text-[9px]">
                        {edu.period}
                      </span>
                      {edu.gpa && (
                        <span className="text-[9px] font-mono text-orange-600 dark:text-orange-400 font-semibold print:text-[8px] print:text-black">
                          GPA: {edu.gpa}
                        </span>
                      )}
                    </div>
                  </div>
                  {!compactMode && edu.details && (
                    <div className={`mt-2 pl-2.5 border-l-2 border-orange-500/10 dark:border-orange-500/15 print:pl-2 text-xs font-sans font-light ${paperTheme === 'light' ? 'text-neutral-600' : 'text-neutral-400'} print:text-[10px]`}>
                      <span className="block leading-relaxed">{edu.details.join(' ')}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Section: Professional Certifications */}
            <div className="space-y-4 print:space-y-3">
              <h3 className={`text-xs font-mono font-bold tracking-widest uppercase border-b-2 border-[#E6E1D3]/50 pb-1.5 ${paperTheme === 'light' ? 'text-neutral-900' : 'text-white'} print:text-black print:text-[11px]`}>
                Verified Professional Accreditations
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 print:grid-cols-2 print:gap-3">
                {certificationsData.map((cert) => (
                  <div key={cert.id} className="flex items-start space-x-2 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h4 className={`font-sans font-bold ${paperTheme === 'light' ? 'text-neutral-900' : 'text-white'} print:text-black print:text-[10px]`}>
                        {cert.name}
                      </h4>
                      <span className="text-[10px] font-mono text-neutral-500">
                        Issued by {cert.issuer} &bull; {cert.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Paper Sheet Footer status */}
          <div className="mt-12 pt-8 border-t border-neutral-300/40 flex items-center justify-between text-neutral-500 font-mono text-[9px] dark:border-neutral-700/10 print:mt-10 print:pt-6 print:text-neutral-500 print:text-[7px]">
            <span aria-hidden className="sr-only" />
            <span>REFERENCES FURNISHED UPON EMAIL REQUEST</span>
          </div>
        </div>

      </div>
    </section>
  );
}
