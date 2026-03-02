'use client'
import { useReveal } from './useReveal'

const services = [
  {
    num: '01',
    title: 'Custom Website Development',
    desc: 'Professional custom website development services using modern technologies like Next.js, React, and TypeScript. We build responsive, SEO-optimized websites that drive conversions and deliver exceptional user experiences for businesses of all sizes.',
    tags: ['Next.js', 'React', 'TypeScript'],
  },
  {
    num: '02',
    title: 'Professional UI/UX Design Services',
    desc: 'Expert UI/UX design services that transform complex business requirements into intuitive user interfaces. Our design process includes user research, wireframing, prototyping, and usability testing to ensure optimal user engagement.',
    tags: ['Figma', 'Prototyping', 'User Research'],
  },
  {
    num: '03',
    title: 'E-Commerce Website Development',
    desc: 'Complete e-commerce solution development for online businesses. We specialize in Shopify, WooCommerce, and custom e-commerce platforms with secure payment gateways, inventory management, and conversion optimization.',
    tags: ['Shopify', 'WooCommerce', 'Custom'],
  },
  {
    num: '04',
    title: 'IT Support & Technical Helpdesk',
    desc: 'Comprehensive IT support and helpdesk services including remote technical assistance, ticketing system management, SLA-backed issue resolution, and on-site computer repair services for businesses across India.',
    tags: ['Remote Support', 'SLA', 'Ticketing'],
  },
  {
    num: '05',
    title: 'Managed IT Services & Monitoring',
    desc: 'Proactive managed IT services including 24/7 network monitoring, system maintenance, security patch management, and infrastructure optimization to prevent downtime and ensure business continuity.',
    tags: ['Monitoring', 'Patching', '24/7'],
  },
  {
    num: '06',
    title: 'Cloud Migration & System Integration',
    desc: 'Enterprise cloud migration services and system integration solutions. We help businesses migrate to AWS, Azure, and Google Cloud while ensuring seamless integration between existing systems and new cloud infrastructure.',
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
          <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] font-extrabold leading-tight" role="heading" aria-level={2}>
            Professional IT services for{' '}
            <span className="gradient-text">modern businesses in India.</span>
          </h2>
          <p className="font-body font-light text-base leading-relaxed text-white/45 md:max-w-sm ml-auto">
            From custom website development to enterprise cloud solutions — we deliver comprehensive IT services that help Indian businesses grow and succeed in the digital marketplace.
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

<h3 className="font-display text-xl font-bold mb-4 text-white group-hover:gradient-text transition-all duration-300" role="heading" aria-level={3}>
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
