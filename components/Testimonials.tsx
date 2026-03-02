'use client'
import { useReveal } from './useReveal'

const testimonials = [
  {
    quote: "Vensure rebuilt our entire platform from the ground up. The support team responds within the hour — we haven't had a major outage since day one.",
    name: 'Mara Lindqvist',
    role: 'CTO, Nexloom Technologies',
    initials: 'ML',
  },
  {
    quote: "The cloud migration was flawless. What we expected to take six months, Vensure delivered in eight weeks with zero service interruption.",
    name: 'David Osei',
    role: 'Head of Engineering, Arborel',
    initials: 'DO',
  },
  {
    quote: "Our helpdesk tickets dropped 60% after Vensure integrated our systems. The team just gets it — technical depth meets real business understanding.",
    name: 'Priya Mehta',
    role: 'COO, Kova Health',
    initials: 'PM',
  },
]

export default function Testimonials() {
  const ref = useReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="relative py-32 px-6 lg:px-16 bg-surface overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-navy bg-grid opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-red-glow/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red-glow/30 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="reveal flex items-center gap-3 mb-4 justify-center">
          <div className="w-6 h-px bg-brand-red-glow" />
          <span className="font-mono text-xs tracking-[0.25em] text-brand-red-bright/70 uppercase">Client Voices</span>
          <div className="w-6 h-px bg-brand-red-glow" />
        </div>

        <h2 className="reveal font-display text-[clamp(2rem,4vw,3.5rem)] font-extrabold leading-tight text-center mb-16">
          What clients <span className="gradient-text">say.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-brand-red-glow/8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`reveal reveal-delay-${i + 1} group relative bg-[#0e0e14] p-10 hover:bg-surface-2 transition-all duration-300`}
            >
              {/* Quote mark */}
              <div className="font-display text-6xl leading-none text-brand-red-glow/15 group-hover:text-brand-red-glow/30 transition-colors duration-300 mb-6 select-none">
                &ldquo;
              </div>
              <p className="font-body font-light text-sm leading-relaxed text-white/50 mb-10 italic">
                {t.quote}
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-red-glow to-brand-red-dark flex items-center justify-center font-display text-xs font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <div className="font-display text-sm font-semibold text-white">{t.name}</div>
                  <div className="font-mono text-[10px] tracking-wider text-brand-red-bright/40 mt-0.5">{t.role}</div>
                </div>
              </div>
              {/* Corner accent */}
              <div className="absolute bottom-0 left-0 w-8 h-px bg-brand-red-glow/0 group-hover:bg-brand-red-glow/60 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 w-px h-8 bg-brand-red-glow/0 group-hover:bg-brand-red-glow/60 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
