'use client'
import { useReveal } from './useReveal'

const services = [
  {
    num: '01',
    title: 'Website Development',
    desc: 'Custom websites engineered for speed, accessibility, and conversion — from sleek landing pages to complex multi-page platforms using Next.js, React, and modern stacks.',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    num: '02',
    title: 'UI/UX Design',
    desc: 'User-centred design that transforms complexity into clarity — wireframes, interactive prototypes, and pixel-perfect interfaces built on real user data.',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    num: '03',
    title: 'E-Commerce Solutions',
    desc: 'Scalable online stores on Shopify, WooCommerce, or fully custom stacks — with checkout optimisation, payment integrations, and performance tuning from day one.',
    tags: ['Shopify', 'WooCommerce', 'Custom'],
  },
  {
    num: '04',
    title: 'IT Support & Helpdesk',
    desc: 'Responsive technical support for your team and infrastructure — remote helpdesk, ticketing systems, SLA-backed resolutions, and on-site support when it matters.',
    tags: ['Remote Support', 'SLA', 'Ticketing'],
  },
  {
    num: '05',
    title: 'Managed IT Services',
    desc: 'Proactive monitoring, patching, and maintenance of your entire IT environment — eliminating problems before they disrupt your business operations.',
    tags: ['Monitoring', 'Patching', '24/7'],
  },
  {
    num: '06',
    title: 'Cloud & System Integration',
    desc: 'Cloud migrations, API integrations, and systems architecture that connect your tools — unlocking efficiency and eliminating data silos across your organisation.',
    tags: ['AWS', 'Azure', 'API'],
  },
]

export default function Services() {
  const ref = useReveal()

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      id="services"
      className="relative py-32 px-6 lg:px-16 bg-[#0e0e14]"
    >
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-glow/30 to-transparent" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="reveal mb-4 flex items-center gap-3">
          <div className="w-6 h-px bg-purple-glow" />
          <span className="font-mono text-xs tracking-[0.25em] text-purple-bright/70 uppercase">What We Do</span>
        </div>

        <div className="reveal grid md:grid-cols-2 gap-8 mb-20 items-end">
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold leading-tight">
            End-to-end IT services for{' '}
            <span className="gradient-text">modern businesses.</span>
          </h2>
          <p className="font-body font-light text-base leading-relaxed text-white/45 md:max-w-sm ml-auto">
            From pixel-perfect websites to round-the-clock technical support — we cover every layer of your digital infrastructure.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-purple-glow/8">
          {services.map((s, i) => (
            <div
              key={s.num}
              className={`reveal reveal-delay-${(i % 3) + 1} group relative bg-surface p-10 hover:bg-surface-2 transition-all duration-300 overflow-hidden`}
            >
              {/* Hover glow corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-purple-glow/0 group-hover:bg-purple-glow/8 rounded-full blur-2xl transition-all duration-500 -translate-y-1/2 translate-x-1/2" />

              <div className="font-display text-5xl font-extrabold text-purple-glow/8 group-hover:text-purple-glow/20 transition-colors duration-300 leading-none mb-8 select-none">
                {s.num}
              </div>

              <h3 className="font-display text-xl font-bold mb-4 text-white group-hover:gradient-text transition-all duration-300">
                {s.title}
              </h3>

              <p className="font-body font-light text-sm leading-relaxed text-white/40 mb-8">
                {s.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 border border-purple-glow/15 text-purple-bright/50 group-hover:border-purple-glow/35 group-hover:text-purple-bright transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="absolute bottom-8 right-8 text-purple-glow opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-lg">
                ↗
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
