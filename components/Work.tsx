'use client'
import { useReveal } from './useReveal'

const projects = [
  {
    tag: 'Website Development + E-Commerce',
    title: 'Nexloom — Full platform rebuild, 3× conversion rate',
    gradient: 'from-[#1a0a3a] via-[#2d1b1b] to-[#dc2626]',
    size: 'featured',
  },
  {
    tag: 'Managed IT + Cloud Migration',
    title: 'Arborel — Zero-downtime AWS migration',
    gradient: 'from-[#0a0a1e] via-[#1a1050] to-[#7c3aed]',
    size: 'small',
  },
  {
    tag: 'IT Support + System Integration',
    title: 'Kova Health — 80% faster issue resolution',
    gradient: 'from-[#130a2e] via-[#3b0764] to-[#9333ea]',
    size: 'small',
  },
]

// Abstract SVG decorations for each card
const CardDecoration = ({ index }: { index: number }) => {
  if (index === 0) return (
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 500" fill="none">
      <circle cx="320" cy="120" r="180" stroke="rgba(220,38,38,0.4)" strokeWidth="0.5" />
      <circle cx="320" cy="120" r="120" stroke="rgba(192,132,252,0.3)" strokeWidth="0.5" />
      <circle cx="320" cy="120" r="60"  stroke="rgba(216,180,254,0.5)" strokeWidth="1" />
      <line x1="0" y1="250" x2="400" y2="250" stroke="rgba(220,38,38,0.15)" strokeWidth="0.5" />
      <line x1="200" y1="0" x2="200" y2="500" stroke="rgba(220,38,38,0.15)" strokeWidth="0.5" />
    </svg>
  )
  if (index === 1) return (
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none">
      <rect x="80" y="60" width="240" height="180" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" />
      <rect x="120" y="90" width="160" height="120" stroke="rgba(192,132,252,0.4)" strokeWidth="0.5" />
      <line x1="80" y1="60" x2="320" y2="240" stroke="rgba(220,38,38,0.2)" strokeWidth="0.5" />
      <line x1="320" y1="60" x2="80" y2="240" stroke="rgba(220,38,38,0.2)" strokeWidth="0.5" />
    </svg>
  )
  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" fill="none">
      <polygon points="200,30 370,270 30,270" stroke="rgba(220,38,38,0.3)" strokeWidth="0.5" fill="none" />
      <polygon points="200,80 320,240 80,240"  stroke="rgba(192,132,252,0.4)" strokeWidth="0.5" fill="none" />
      <circle cx="200" cy="180" r="40" stroke="rgba(216,180,254,0.5)" strokeWidth="1" fill="none" />
    </svg>
  )
}

export default function Work() {
  const ref = useReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      id="work"
      className="relative py-32 px-6 lg:px-16 bg-[#0e0e14]"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-red-glow/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="reveal flex items-end justify-between mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-brand-red-glow" />
              <span className="font-mono text-xs tracking-[0.25em] text-brand-red-bright/70 uppercase">Selected Work</span>
            </div>
            <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold leading-tight">
              Projects that <span className="gradient-text">ship.</span>
            </h2>
          </div>
          <a
            href="#contact"
            className="hidden md:flex items-center gap-2 font-body text-xs font-semibold tracking-widest uppercase text-brand-red-bright/50 hover:text-brand-red-bright transition-colors group"
          >
            View All Cases
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Work grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-brand-red-glow/8">
          {/* Featured */}
          <div className="reveal md:row-span-2 group relative overflow-hidden bg-surface min-h-[480px] cursor-pointer">
            <div className={`absolute inset-0 bg-gradient-to-br ${projects[0].gradient} opacity-60`} />
            <CardDecoration index={0} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end p-10">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-brand-red-bright mb-3">{projects[0].tag}</span>
              <h3 className="font-display text-2xl font-bold text-white group-hover:gradient-text transition-all duration-300">{projects[0].title}</h3>
            </div>
            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
              <span className="font-mono text-xs text-brand-red-bright border border-brand-red-glow/30 px-3 py-1">View Case →</span>
            </div>
          </div>

          {/* Small cards */}
          {[projects[1], projects[2]].map((p, i) => (
            <div key={i} className="reveal group relative overflow-hidden bg-surface min-h-[220px] cursor-pointer">
              <div className={`absolute inset-0 bg-gradient-to-br ${p.gradient} opacity-60`} />
              <CardDecoration index={i + 1} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-brand-red-bright mb-2">{p.tag}</span>
                <h3 className="font-display text-lg font-bold text-white group-hover:gradient-text transition-all duration-300">{p.title}</h3>
              </div>
              <div className="absolute top-5 right-5 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-brand-red-glow text-lg">↗</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
