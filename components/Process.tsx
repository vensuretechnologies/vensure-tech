'use client'
import { useReveal } from './useReveal'

const steps = [
  {
    step: 'Step 01',
    title: 'Discover & Scope',
    desc: 'We dig deep into your goals, existing systems, and technical requirements — building a precise picture before a single decision is made.',
  },
  {
    step: 'Step 02',
    title: 'Design & Architect',
    desc: 'Wireframes, tech-stack selection, and systems architecture defined upfront — so every build decision is intentional, not reactive.',
  },
  {
    step: 'Step 03',
    title: 'Build & Test',
    desc: 'Agile development with continuous QA, performance testing, and regular client check-ins — delivered on schedule, no surprises.',
  },
  {
    step: 'Step 04',
    title: 'Launch & Support',
    desc: 'Smooth go-live, full handover documentation, staff training if needed, and ongoing support plans that keep everything at peak performance.',
  },
]

export default function Process() {
  const ref = useReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      id="process"
      className="relative py-32 px-6 lg:px-16 bg-surface"
    >
      <div className="absolute inset-0 bg-grid-navy bg-grid opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red-glow/20 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="reveal flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-brand-red-glow" />
          <span className="font-mono text-xs tracking-[0.25em] text-brand-red-bright/70 uppercase">How We Work</span>
        </div>

        <h2 className="reveal font-display text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold leading-tight mb-20">
          A process built for{' '}
          <span className="gradient-text">zero surprises.</span>
        </h2>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`reveal reveal-delay-${i + 1} group py-8 md:py-12 border-t border-brand-red-glow/10 hover:border-brand-red-glow/35 transition-colors duration-300`}
            >
              {/* Mobile Layout */}
              <div className="md:hidden space-y-4">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-brand-red-glow">{s.step}</span>
                <h3 className="font-display text-xl md:text-2xl font-bold group-hover:gradient-text transition-all duration-300">{s.title}</h3>
                <p className="font-body font-light text-sm leading-relaxed text-white/40">{s.desc}</p>
              </div>
              {/* Desktop Layout */}
              <div className="hidden md:grid grid-cols-[100px_1fr_1fr] gap-10 items-start">
                <span className="font-mono text-xs tracking-[0.2em] uppercase text-brand-red-glow mt-1">{s.step}</span>
                <h3 className="font-display text-2xl font-bold group-hover:gradient-text transition-all duration-300">{s.title}</h3>
                <p className="font-body font-light text-sm leading-relaxed text-white/40">{s.desc}</p>
              </div>
            </div>
          ))}
          <div className="border-t border-brand-red-glow/10" />
        </div>

        {/* Decorative right-side element */}
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3 opacity-20">
          <div className="w-px h-32 bg-gradient-to-b from-brand-red-glow to-transparent" />
          <span className="font-mono text-[9px] tracking-[0.3em] text-brand-red-bright [writing-mode:vertical-rl]">
            PROCESS
          </span>
        </div>
      </div>
    </section>
  )
}
