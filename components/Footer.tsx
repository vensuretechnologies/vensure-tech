const footerLinks = {
  Services: [
    { name: 'Website Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'E-Commerce Solutions', href: '#services' },
    { name: 'IT Support & Helpdesk', href: '#services' },
    { name: 'Managed IT Services', href: '#services' },
    { name: 'Cloud & Integration', href: '#services' }
  ],
  Company: [
    { name: 'About', href: '#' },
    { name: 'Case Studies', href: '#work' },
    { name: 'Careers', href: '/careers' },
    { name: 'Blog', href: '#' },
    { name: 'Contact', href: '/contact' }
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' }
  ],
}

const socials = [
  { name: 'LinkedIn', href: 'https://linkedin.com/company/vensure-technologies' },
  { name: 'Twitter', href: 'https://twitter.com/vensuretechh' },
  { name: 'GitHub', href: 'https://github.com/vensuretech' },
  { name: 'Instagram', href: 'https://instagram.com/vensuretech' }
]

export default function Footer() {
  return (
    <footer className="relative bg-surface border-t border-brand-red-glow/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-display text-3xl font-extrabold tracking-widest gradient-text-bright mb-5">VENSURE</div>
            <p className="font-body font-light text-sm leading-relaxed text-white/35 max-w-xs mb-8">
              An IT solutions company delivering websites, digital products, and technical support for businesses of all sizes.
            </p>
            <div className="flex gap-5 mb-8">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-[10px] tracking-widest uppercase text-white/25 hover:text-brand-red-bright transition-colors duration-200"
                >
                  {s.name}
                </a>
              ))}
            </div>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <a href="mailto:hello@vensuretechnologies.in" className="block font-mono text-xs text-white/40 hover:text-brand-red-bright transition-colors">
                hello@vensuretechnologies.in
              </a>
              <a href="tel:+917799192932" className="block font-mono text-xs text-white/40 hover:text-brand-red-bright transition-colors">
                +91 7799192932
              </a>
              <p className="font-mono text-xs text-white/30">
                Response within 2 hours
              </p>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-brand-red-glow/60 mb-6">{col}</p>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l.name}>
                    <a 
                      href={l.href} 
                      className="font-body text-sm text-white/35 hover:text-brand-red-bright transition-colors duration-200"
                      target={l.href.startsWith('mailto:') ? '_self' : l.href.startsWith('#') ? '_self' : '_blank'}
                      rel={l.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {l.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-brand-red-glow/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-wider text-white/20">
            © 2026 Vensure Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-red-glow animate-pulse" />
            <span className="font-mono text-[10px] tracking-wider text-brand-red-glow/40 uppercase">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
