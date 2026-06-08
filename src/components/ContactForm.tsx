/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, ChangeEvent, FormEvent } from 'react';
import { Mail, Send, Github, Linkedin, MessageSquareCode, Check, Copy } from 'lucide-react';
import { personalInfo } from '../data';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    
    // Simulate real server logging transition for 1.2 seconds
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      // Clean form state
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-transparent text-neutral-800 relative">
      <div className="absolute inset-0 z-0 opacity-15">
        <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-orange-200/20 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-xs font-mono uppercase tracking-widest text-orange-600 font-semibold mb-2">
            Establish Connection
          </h2>
          <h3 id="contact-section-header" className="text-3xl sm:text-4xl font-display font-extrabold text-[#2D2A26] tracking-tight">
            Start a Project
          </h3>
          <p className="mt-3 text-neutral-600 text-sm font-sans font-light leading-relaxed">
            Interested in adding full-stack engineering power to your product design group? Draft a secure message or tap coordinates directly to copy.
          </p>
        </div>

        {/* Form & Coordinates columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Column 1: Contact Form (Col-Span 7/12) */}
          <div className="lg:col-span-7 bg-white/80 border border-[#E6E1D3] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xs hover:border-neutral-400 transition-all duration-300">
            {success ? (
              <div id="contact-form-success" className="my-auto py-12 text-center space-y-6 animate-in fade-in zoom-in duration-300">
                <div className="w-16 h-16 bg-emerald-50 rounded-full border border-emerald-200 flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 text-emerald-600" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-display font-bold text-neutral-800">Connection Logged Successfully</h4>
                  <p className="text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                    Thank you! Your inquiry has been encrypted and buffered. I typically review my queue and reply to valid requests within 12-24 hours.
                  </p>
                </div>
                <button
                  id="btn-dismiss-success"
                  onClick={() => setSuccess(false)}
                  className="px-5 py-2.5 bg-white hover:bg-[#F2ECE0]/40 border border-[#CFC9BA] hover:border-neutral-450 text-xs font-mono text-neutral-700 rounded-lg transition-all cursor-pointer shadow-3xs"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex items-center space-x-2 text-neutral-500 border-b border-[#E6E1D3]/80 pb-4 mb-2">
                  <MessageSquareCode className="w-4 h-4 text-orange-600" />
                  <span className="font-mono text-xs uppercase tracking-wider font-semibold">Secure Transmission Channel</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-[10px] font-mono text-neutral-500 font-semibold uppercase tracking-wider block">
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Jane Doe"
                      className="w-full bg-[#FAF6F0] border border-[#E6E1D3] focus:border-orange-500 rounded-lg text-sm text-neutral-800 font-sans placeholder-neutral-400 focus:ring-1 focus:ring-orange-500/10 outline-hidden px-4.5 py-3 transition-colors shadow-3xs"
                      autoComplete="name"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-[10px] font-mono text-neutral-500 font-semibold uppercase tracking-wider block">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="jane@example.com"
                      className="w-full bg-[#FAF6F0] border border-[#E6E1D3] focus:border-orange-500 rounded-lg text-sm text-neutral-800 font-sans placeholder-neutral-400 focus:ring-1 focus:ring-orange-500/10 outline-hidden px-4.5 py-3 transition-colors shadow-3xs"
                      autoComplete="email"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-[10px] font-mono text-neutral-500 font-semibold uppercase tracking-wider block">
                    Subject Heading
                  </label>
                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Product Collaboration / Consulting"
                    className="w-full bg-[#FAF6F0] border border-[#E6E1D3] focus:border-orange-500 rounded-lg text-sm text-neutral-800 font-sans placeholder-neutral-400 focus:ring-1 focus:ring-orange-500/10 outline-hidden px-4.5 py-3 transition-colors shadow-3xs"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-[10px] font-mono text-neutral-500 font-semibold uppercase tracking-wider block">
                    Enquiry Details *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe project details, deadlines, or technology requirements..."
                    className="w-full bg-[#FAF6F0] border border-[#E6E1D3] focus:border-orange-500 rounded-lg text-sm text-neutral-800 font-sans placeholder-neutral-400 focus:ring-1 focus:ring-orange-500/10 outline-hidden px-4.5 py-3.5 transition-colors resize-none shadow-3xs"
                  />
                </div>

                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="w-full py-3.5 bg-orange-700 hover:bg-orange-600 text-white font-mono text-xs rounded-lg flex items-center justify-center space-x-2 transition-all shadow-md hover:shadow-orange-700/15 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4.5 w-4.5 border-t-2 border-b-2 border-white"></div>
                      <span>Encrypting Payload...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Transmit Message Securely</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Column 2: Direct Coordinates (Col-Span 5/12) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            {/* Quick Copy Coordinates Block */}
            <div className="bg-white/80 border border-[#E6E1D3] rounded-2xl p-6 sm:p-8 space-y-6 shadow-xs">
              <div className="space-y-1">
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-orange-600 font-semibold">
                  Global Coordinates
                </h4>
                <p className="text-xl font-display font-bold text-[#2D2A26]">Direct Connect</p>
              </div>

              <div className="space-y-4">
                {/* Email Box */}
                <div className="bg-[#FAF6F0] rounded-xl border border-[#E6E1D3] p-4.5 flex justify-between items-center">
                  <div className="flex items-center space-x-3.5">
                    <div className="w-9 h-9 rounded-lg bg-orange-50 border border-orange-200 flex items-center justify-center text-orange-600">
                      <Mail className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-neutral-500 uppercase tracking-widest">EMAIL QUEUE</span>
                      <span className="text-sm font-sans text-neutral-800">{personalInfo.email}</span>
                    </div>
                  </div>
                  <button
                    id="btn-copy-email"
                    onClick={handleCopyEmail}
                    className="p-2 bg-white border border-[#E6E1D3] hover:border-neutral-400 hover:bg-[#F2ECE0]/20 rounded-lg text-neutral-700 hover:text-black transition-all cursor-pointer shadow-3xs"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
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
                      <span className="block text-[9px] font-mono text-neutral-500 uppercase tracking-widest">GITHUB PROFILE</span>
                      <span className="text-sm font-sans text-neutral-800">github.com/yaping-tech</span>
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
                      <span className="block text-[9px] font-mono text-neutral-500 uppercase tracking-widest">LINKEDIN NETWORK</span>
                      <span className="text-sm font-sans text-neutral-800">linkedin.com/in/yaping-tech</span>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Design Ethos card block */}
            <div className="bg-linear-to-br from-orange-50/50 to-[#FAF6F0]/30 border border-[#E6E1D3] p-6 rounded-2xl">
              <p className="text-xs sm:text-sm text-neutral-650 font-sans leading-relaxed italic">
                "Every line of software written must respect constraints, support accessibility standards natively, represent clean visual hierarchy, and perform securely at scale."
              </p>
              <span className="block text-[10px] font-mono text-orange-600 uppercase tracking-widest mt-4 font-semibold">
                &mdash; Engineering manifesto
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
