'use client'
import { useState } from 'react'
import { useReveal } from './useReveal'
import ProjectModal from './ProjectModal'

export default function CTA() {
  const ref = useReveal()
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      id="contact"
      className="relative py-40 px-6 lg:px-16 overflow-hidden bg-[#0e0e14]"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-radial-purple opacity-80" />
      <div className="absolute inset-0 bg-grid-purple bg-grid opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-purple-glow/10 blur-[160px] rounded-full pointer-events-none" />

      {/* Watermark text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="font-display font-extrabold whitespace-nowrap"
          style={{
            fontSize: 'clamp(6rem, 20vw, 22rem)',
            letterSpacing: '-0.03em',
            WebkitTextStroke: '1px rgba(168,85,247,0.06)',
            color: 'transparent',
            lineHeight: 1,
          }}
        >
          VENSURE
        </span>
      </div>

      <div className="max-w-4xl mx-auto text-center relative">
        <div className="reveal flex items-center gap-3 mb-6 justify-center">
          <div className="w-6 h-px bg-purple-glow" />
          <span className="font-mono text-xs tracking-[0.25em] text-purple-bright/70 uppercase">Ready to Start?</span>
          <div className="w-6 h-px bg-purple-glow" />
        </div>

        <h2 className="reveal font-display font-extrabold leading-[0.9] tracking-tight mb-8"
          style={{ fontSize: 'clamp(3.5rem, 10vw, 9rem)' }}
        >
          <span className="block text-white/90">LET&rsquo;S</span>
          <span className="block gradient-text text-glow">BUILD IT.</span>
        </h2>

        <p className="reveal font-body font-light text-base text-white/40 mb-14 max-w-md mx-auto">
          Tell us what you need — we'll scope it, price it, and deliver it. No fluff, just results.
        </p>

        <div className="reveal flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-3 px-10 py-5 font-body text-sm font-semibold tracking-[0.15em] uppercase bg-purple-glow text-white hover:bg-purple-bright transition-all duration-300 animate-glow-pulse"
          >
            Start a Project
            <span className="transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </button>
          <a
            href="tel:+91 7799192932"
            className="inline-flex items-center gap-2 px-8 py-5 font-body text-sm font-semibold tracking-widest uppercase border border-purple-glow/30 text-white/50 hover:text-purple-bright hover:border-purple-glow/60 transition-all duration-300"
          >
            Schedule a Call
          </a>
        </div>

        {/* Contact info strip */}
        <div className="reveal mt-20 pt-10 border-t border-purple-glow/10 flex flex-col sm:flex-row items-center justify-center gap-10">
          {[
            { label: 'Email', value: 'hello@vensuretechnologies.in' },
            { label: 'Phone', value: '+91 7799192932' },
            { label: 'Response', value: 'Within 2 hours' },
          ].map(({ label, value }) => (
            <div key={label} className="text-center">
              <div className="font-mono text-[10px] tracking-[0.25em] uppercase text-purple-glow/40 mb-1">{label}</div>
              <div className="font-body text-sm text-white/50">{value}</div>
            </div>
          ))}
        </div>
      </div>
      
      <ProjectModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  )
}
