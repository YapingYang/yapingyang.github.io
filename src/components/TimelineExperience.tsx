/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion } from 'motion/react';
import { Briefcase, GraduationCap, MapPin, Calendar, Plus, Minus, FileCode } from 'lucide-react';
import { experiencesData, educationData } from '../data';

export default function TimelineExperience() {
  const [expandedCorpId, setExpandedCorpId] = useState<string | null>('exp-1');

  const toggleExpand = (id: string) => {
    if (expandedCorpId === id) {
      setExpandedCorpId(null);
    } else {
      setExpandedCorpId(id);
    }
  };

  return (
    <section id="experience" className="py-24 bg-transparent text-neutral-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#E6E1D3] pb-8">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-orange-600 font-semibold mb-2">
              Chronological History
            </h2>
            <h3 id="experience-section-header" className="text-3xl sm:text-4xl font-display font-extrabold text-[#2D2A26] tracking-tight">
              Professional Timeline
            </h3>
          </div>
          <p className="mt-4 md:mt-0 max-w-sm text-sm text-neutral-600 font-sans leading-relaxed">
            A review of staff appointments, consulting assignments, and engineering deliverables at enterprise groups and startups.
          </p>
        </div>

        {/* Master layout grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Work History Timeline (Col-Span 7) */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center space-x-3 text-orange-600 mb-6 font-semibold">
              <Briefcase className="w-5 h-5" />
              <span className="font-mono text-xs uppercase tracking-wider">Employment Records</span>
            </div>

            {/* Neural Chrono Line */}
            <div className="relative border-l-2 border-[#E6E1D3] ml-4 pl-6 md:pl-8 space-y-10">
              {experiencesData.map((exp, idx) => {
                const isExpanded = expandedCorpId === exp.id;
                
                return (
                  <div key={exp.id} className="relative group">
                    {/* Ring timeline mark indicator */}
                    <div className={`absolute -left-10 md:-left-12 top-1 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isExpanded
                        ? 'bg-orange-700 border-orange-500 text-white scale-110 shadow-lg'
                        : 'bg-white border-[#E6E1D3] text-neutral-500 group-hover:border-neutral-400 group-hover:text-orange-600'
                    }`}>
                      <Briefcase className="w-3.5 h-3.5" />
                    </div>

                    {/* Timeline card container */}
                    <div
                      id={`experience-card-${exp.id}`}
                      className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer ${
                        isExpanded
                          ? 'bg-white border-[#E6E1D3] shadow-lg'
                          : 'bg-white/50 border-[#E6E1D3]/70 hover:bg-white/80 hover:border-neutral-400'
                      }`}
                      onClick={() => toggleExpand(exp.id)}
                    >
                      {/* Top Header info */}
                      <div className="flex items-start justify-between flex-wrap gap-2">
                        <div className="space-y-1">
                          <h4 className="text-base font-display font-bold text-neutral-800 group-hover:text-orange-650 transition-colors">
                            {exp.role}
                          </h4>
                          <span className="text-sm text-neutral-700 font-sans font-medium flex items-center gap-1.5 flex-wrap">
                            <span>{exp.company}</span>
                            <span className="text-neutral-455">&bull;</span>
                            <span className="text-xs font-mono text-neutral-500 flex items-center">
                              <MapPin className="w-3 h-3 mr-1 inline" /> {exp.location}
                            </span>
                          </span>
                        </div>

                        {/* Expand status badge icon */}
                        <div className="flex items-center space-x-3">
                          <span className="hidden sm:inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-[#FAF6F0] border border-[#E6E1D3] text-[10px] font-mono text-neutral-600 animate-none">
                            <Calendar className="w-3 h-3 text-orange-600" />
                            <span>{exp.period}</span>
                          </span>
                          <span className="text-neutral-500 hover:text-neutral-800 transition-colors bg-[#FAF6F0] hover:bg-[#F2ECE0]/50 p-1.5 rounded-lg border border-[#E6E1D3]">
                            {isExpanded ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                          </span>
                        </div>
                      </div>

                      {/* Mobile period display */}
                      <div className="sm:hidden mt-2">
                        <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-[#FAF6F0] border border-[#E6E1D3] text-[9px] font-mono text-neutral-600">
                          {exp.period}
                        </span>
                      </div>

                      {/* Expandable contribution bulletins */}
                      <div
                        className={`transition-all duration-300 overflow-hidden ${
                          isExpanded ? 'max-h-96 opacity-100 mt-5 pt-4 border-t border-[#E6E1D3]/80' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="space-y-3 font-sans text-xs sm:text-sm text-neutral-700 leading-relaxed font-light">
                          {exp.description.map((bullet, index) => (
                            <p key={index} className="flex items-start">
                              <span className="text-orange-600 mr-2 shrink-0 select-none font-mono font-bold">&bull;</span>
                              <span>{bullet}</span>
                            </p>
                          ))}
                        </div>

                        {/* Applied skills tools tags */}
                        <div className="mt-5 pt-4 border-t border-[#E6E1D3]/40 flex flex-wrap gap-1.5">
                          <span className="text-[10px] font-mono text-neutral-500 self-center mr-1">Impact stack:</span>
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-0.5 rounded text-[9px] font-mono text-neutral-600 bg-[#FAF6F0] border border-[#E6E1D3]"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Academic & Honors Education (Col-Span 5) */}
          <div className="lg:col-span-4 space-y-8">
            {/* Education Section */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 text-orange-600 font-semibold">
                <GraduationCap className="w-5 h-5" />
                <span className="font-mono text-xs uppercase tracking-wider">Education</span>
              </div>

              {educationData.map((edu) => (
                <div
                  key={edu.id}
                  id={`education-card-${edu.id}`}
                  className="bg-white/80 border border-[#E6E1D3] hover:border-neutral-400 hover:shadow-lg rounded-2xl p-6 space-y-4 transition-all duration-300"
                >
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono text-orange-500 block tracking-wider uppercase font-semibold">
                      {edu.period}
                    </span>
                    <h4 className="text-base font-display font-bold text-neutral-800 tracking-tight leading-tight">
                      {edu.degree}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 font-sans">
                      {edu.institution}, {edu.location}
                    </p>
                    {edu.gpa && (
                      <span className="inline-block mt-1 px-2 py-0.5 rounded bg-orange-50 text-[10px] font-mono text-orange-850 border border-orange-200 shadow-3xs">
                        GPA: {edu.gpa}
                      </span>
                    )}
                  </div>

                  {edu.details && (
                    <div className="border-t border-[#E6E1D3]/80 pt-3.5 text-xs text-neutral-650 space-y-2.5 font-sans font-light leading-relaxed">
                      {edu.details.map((detail, index) => (
                        <p key={index}>{detail}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Design Manifesto / Code Principles Box */}
            <div className="bg-white/50 border border-dashed border-[#E6E1D3] rounded-2xl p-6 space-y-4">
              <div className="flex items-center space-x-2 text-neutral-500">
                <FileCode className="w-4 h-4 text-emerald-650" />
                <span className="font-mono text-xs tracking-wider font-semibold">manifesto_checks.yaml</span>
              </div>

              <div className="font-mono text-[11px] text-neutral-600 space-y-3 select-none leading-relaxed">
                <div>
                  <p className="text-neutral-450">---</p>
                  <p className="text-orange-600 font-semibold"># Core engineering constraints:</p>
                </div>
                <div>
                  <p><span className="text-neutral-450">performance_budget:</span></p>
                  <p className="pl-4">initial_payload: <span className="text-orange-600 font-semibold">&lt; 150kb</span></p>
                  <p className="pl-4">interactive_delay: <span className="text-orange-600 font-semibold">&lt; 100ms</span></p>
                </div>
                <div>
                  <p><span className="text-neutral-450">accessibility_targets:</span></p>
                  <p className="pl-4">lighthouse_score: <span className="text-orange-600 font-semibold">"100.00"</span></p>
                  <p className="pl-4">wcag_level: <span className="text-orange-600 font-semibold">"AAA compliant"</span></p>
                </div>
                <div>
                  <p className="text-yellow-700 font-medium"># Craft is code. Respect constraints.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
