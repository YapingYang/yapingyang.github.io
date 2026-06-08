/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, Terminal, Code, Cpu, Sparkles, FolderGit2, X, CheckCircle, Loader2 } from 'lucide-react';
import { Project } from '../types';
import { projectsData } from '../data';

// Helper to render a gorgeous vector background per project based on its properties
function ProjectCardGraphic({ project }: { project: Project }) {
  const isWeb = project.category === 'web';
  const isDesign = project.category === 'design';
  const isDevTool = project.category === 'dev-tool';
  const isMobile = project.category === 'mobile';

  // Customize gradients based on project properties (light elegant gradients)
  let bgGradient = 'from-orange-50 to-[#FAF6F0]';
  let accentColor = 'text-orange-850 border-orange-200 bg-white';
  let icon = <Code className="w-5 h-5 text-orange-600" />;

  if (isWeb) {
    bgGradient = 'from-orange-50/70 via-orange-50/30 to-[#FAF6F0]';
    accentColor = 'text-orange-850 border-orange-300 bg-white';
    icon = <Code className="w-5 h-5 text-orange-650" />;
  } else if (isDesign) {
    bgGradient = 'from-orange-50/70 via-orange-50/30 to-[#FAF6F0]';
    accentColor = 'text-orange-700 border-orange-200 bg-white';
    icon = <Sparkles className="w-5 h-5 text-orange-500" />;
  } else if (isDevTool) {
    bgGradient = 'from-amber-50/70 via-amber-50/30 to-[#FAF6F0]';
    accentColor = 'text-amber-700 border-amber-200 bg-white';
    icon = <Terminal className="w-5 h-5 text-amber-600" />;
  } else if (isMobile) {
    bgGradient = 'from-purple-50/70 via-purple-50/30 to-[#FAF6F0]';
    accentColor = 'text-purple-700 border-purple-200 bg-white';
    icon = <Cpu className="w-5 h-5 text-purple-600" />;
  }

  return (
    <div className={`relative w-full h-44 bg-linear-to-b ${bgGradient} border-b border-[#E6E1D3] p-5 flex flex-col justify-between overflow-hidden group-hover:bg-linear-to-t transition-all duration-300`}>
      {/* Decorative SVG grid/dots pattern */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#CFC9BA_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none"></div>
      
      {/* Dynamic geometry blur circle */}
      <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-white/20 blur-xl group-hover:scale-125 transition-transform duration-500"></div>

      <div className="flex justify-between items-start z-10">
        <span className={`px-2.5 py-1 rounded-full border text-[10px] font-mono uppercase tracking-wider ${accentColor} shadow-2xs`}>
          {project.category}
        </span>
        <div className="p-1.5 rounded-lg bg-white/85 border border-[#E6E1D3] backdrop-blur-xs">
          {icon}
        </div>
      </div>

      {/* Decorative code vector line or digital matrix mockup */}
      <div className="my-auto z-10 w-full opacity-80">
        <div className="font-mono text-[9px] text-neutral-500 space-y-0.5 truncate select-none">
          <p className="text-emerald-700 font-semibold">{`// compile state ok (200)`}</p>
          <p>{`import { schema } from "@/lib/graphics";`}</p>
          <p>{`const target = document.getElementById("${project.id}");`}</p>
        </div>
      </div>

      <div className="flex items-center justify-between z-10">
        <span className="font-mono text-[10px] text-neutral-600 uppercase tracking-wider font-medium">
          {project.completionDate}
        </span>
        <span className="font-mono text-[9px] text-neutral-400">
          STABLE RUNTIME
        </span>
      </div>
    </div>
  );
}

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'web' | 'mobile' | 'design' | 'dev-tool'>('all');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [sandboxActive, setSandboxActive] = useState<string | null>(null);

  const categories = [
    { label: 'All Frameworks', id: 'all' as const },
    { label: 'Web Applications', id: 'web' as const },
    { label: 'Developer Tools', id: 'dev-tool' as const },
    { label: 'Product Designs', id: 'design' as const },
    { label: 'Mobile Concepts', id: 'mobile' as const },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projectsData
    : projectsData.filter((p) => p.category === selectedCategory);

  const handleLaunchSandbox = (projectId: string) => {
    setSandboxActive(projectId);
    setTimeout(() => {
      setSandboxActive(null);
    }, 4000);
  };

  return (
    <section id="projects" className="py-24 bg-transparent text-neutral-800 relative">
      {/* Decorative backdrop divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#E6E1D3] to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-orange-600 font-semibold mb-2">
            Architectures &amp; Sandbox Systems
          </h2>
          <h3 id="projects-section-header" className="text-3xl sm:text-4xl font-display font-extrabold text-[#2D2A26] tracking-tight">
            Enterprise Client Deliverables
          </h3>
          <p className="mt-3 text-neutral-600 text-sm font-sans font-light leading-relaxed">
            Because proprietary codebases are locked under NDAs, the boxes below simulate de-identified system architectures, orchestration flows, and interactive mock runtime sandboxes.
          </p>
        </div>

        {/* Filter Navigation Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              id={`filter-btn-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-mono rounded-full border transition-all cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-orange-700 border-orange-600 text-white shadow-md shadow-orange-750/15'
                  : 'bg-white border-[#E6E1D3] text-neutral-600 hover:text-orange-600 hover:bg-[#F2ECE0]/40 hover:border-neutral-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid Grid layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                id={`project-card-${project.id}`}
                className="group flex flex-col h-full bg-white/80 border border-[#E6E1D3] hover:border-neutral-400 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                onClick={() => setActiveProjectModal(project)}
              >
                {/* Simulated Graphic Representation */}
                <ProjectCardGraphic project={project} />

                 {/* Card Body contents */}
                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-2.5">
                    <h4 id={`project-title-${project.id}`} className="text-base font-display font-bold text-neutral-800 group-hover:text-orange-600 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-neutral-600 font-sans line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Skills/Tools badges on this project */}
                  <div className="mt-5 pt-4 border-t border-[#E6E1D3]/80">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-[9px] font-mono text-neutral-650 bg-[#FAF6F0] border border-[#E6E1D3]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-[9px] font-mono text-neutral-500 bg-[#FAF6F0] border border-[#E6E1D3]">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* View project indicators */}
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-neutral-500 group-hover:text-neutral-700 transition-colors">
                        Click card to inspect architecture
                      </span>
                      <span className="p-1 rounded bg-white border border-[#E6E1D3] text-neutral-500 group-hover:text-orange-600 group-hover:border-orange-400 group-hover:bg-orange-50/50 transition-all">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal Window Detail Viewer for Active Project */}
        <AnimatePresence>
          {activeProjectModal && (
            <div
              id="project-detail-overlay"
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#FAF6F0]/85 backdrop-blur-md overflow-y-auto"
              onClick={() => setActiveProjectModal(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.25 }}
                id="project-detail-modal"
                className="relative w-full max-w-3xl bg-white border border-[#E6E1D3] rounded-3xl overflow-hidden shadow-2xl focus:outline-none"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Mac OS title frame style of modal */}
                <div className="bg-[#F4F1EA] border-b border-[#E6E1D3]/85 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <FolderGit2 className="w-5 h-5 text-orange-600" />
                    <span className="text-xs font-mono text-neutral-600">audit_log - {activeProjectModal.id}.json</span>
                  </div>
                  <button
                    id="close-project-modal-btn"
                    onClick={() => setActiveProjectModal(null)}
                    className="p-1.5 rounded-lg hover:bg-neutral-200/50 text-neutral-505 hover:text-neutral-800 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <div className="p-6 md:p-8 space-y-6 max-h-[85vh] overflow-y-auto custom-scrollbar">
                  {/* Grid layout */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    
                    {/* Left Column details */}
                    <div className="md:col-span-8 space-y-6">
                      <div className="space-y-2">
                        <span className="px-2.5 py-1 text-[10px] font-mono uppercase bg-orange-50 text-orange-850 border border-orange-200 rounded-full">
                          {activeProjectModal.category}
                        </span>
                        <h3 id="modal-project-title" className="text-2xl font-display font-extrabold text-[#2D2A26] tracking-tight pt-1">
                          {activeProjectModal.title}
                        </h3>
                        <p className="text-sm font-mono text-neutral-500 mt-1">
                          Development concluded: {activeProjectModal.completionDate}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 border-b border-[#E6E1D3] pb-1.5 font-semibold">
                          Project Summary &amp; Scope
                        </h4>
                        <p className="text-neutral-700 text-sm font-sans leading-relaxed">
                          {activeProjectModal.description}
                        </p>
                      </div>

                      <div className="space-y-4">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 border-b border-[#E6E1D3] pb-1.5 font-semibold">
                          Key Technical Contributions
                        </h4>
                        <ul className="space-y-3">
                          {activeProjectModal.details.map((bullet, i) => (
                            <li key={i} className="flex items-start space-x-2.5 text-xs text-neutral-700 font-sans leading-relaxed">
                              <CheckCircle className="w-4.5 h-4.5 text-orange-600 shrink-0 mt-0.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Right Column sidebar metadata info */}
                    <div className="md:col-span-4 space-y-6 bg-[#FAF6F0]/60 p-5 rounded-2xl border border-[#E6E1D3]">
                      <div className="space-y-4">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                          Technologies Used
                        </h4>
                        <div className="flex flex-wrap gap-1.5">
                          {activeProjectModal.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded-md text-[10px] font-mono text-orange-850 bg-white border border-orange-250 shadow-3xs"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Code Repos Links */}
                      <div className="space-y-3 pt-4 border-t border-[#E6E1D3]">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-500 font-semibold">
                          Artifact Links
                        </h4>
                        
                        <div className="space-y-2">
                          {activeProjectModal.githubUrl && activeProjectModal.githubUrl !== '#' ? (
                            <a
                              id="modal-github-btn"
                              href={activeProjectModal.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                              className="flex items-center justify-center space-x-2 w-full py-2.5 bg-white hover:bg-[#F2ECE0]/40 border border-[#CFC9BA] rounded-lg text-xs font-mono text-neutral-700 hover:text-neutral-900 transition-all duration-200"
                            >
                              <Github className="w-4 h-4" />
                              <span>Inspect Source Code</span>
                            </a>
                          ) : (
                            <div className="flex items-center justify-center space-x-2 w-full py-2.5 bg-[#FAF6F0] border border-[#E6E1D3] rounded-lg text-xs font-mono text-neutral-500 select-none">
                              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                              <span>Proprietary NDA Protected</span>
                            </div>
                          )}
                          
                          <button
                            id="modal-demorun-btn"
                            onClick={() => handleLaunchSandbox(activeProjectModal.id)}
                            disabled={sandboxActive !== null}
                            className="flex items-center justify-center space-x-2 w-full py-2.5 bg-orange-700 hover:bg-orange-600 text-white rounded-lg text-xs font-mono transition-all duration-200 cursor-pointer disabled:bg-neutral-300 disabled:text-neutral-600 disabled:cursor-not-allowed shadow-xs"
                          >
                            {sandboxActive === activeProjectModal.id ? (
                              <>
                                <Loader2 className="w-4 h-4 animate-spin" />
                                <span>Starting VM Sandbox...</span>
                              </>
                            ) : (
                              <>
                                <ExternalLink className="w-4 h-4" />
                                <span>Launch Live Sandbox</span>
                              </>
                            )}
                          </button>
                        </div>

                        {/* Interactive simulation status log message */}
                        {sandboxActive === activeProjectModal.id && (
                          <div className="p-2 border border-emerald-200 bg-emerald-50 rounded-lg text-[9px] font-mono text-emerald-850 mt-2 leading-relaxed animate-fade-in">
                            🛠️ $ npm init virtual-sandbox --scope={activeProjectModal.id}
                            <br />
                            💡 connection established: 127.0.0.1:3000 to container running!
                          </div>
                        )}
                      </div>

                      {/* Status indicator */}
                      <div className="bg-white rounded-lg border border-[#E6E1D3] p-3 flex items-center space-x-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
                        <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest leading-none">
                          CODE AUDIT CONCLUDED OK
                        </span>
                      </div>

                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
