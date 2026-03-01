const footerLinks = {
  Services: ['Website Development', 'UI/UX Design', 'E-Commerce Solutions', 'IT Support & Helpdesk', 'Managed IT Services', 'Cloud & Integration'],
  Company:  ['About', 'Case Studies', 'Careers', 'Blog', 'Press'],
  Legal:    ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
}

const socials = ['LinkedIn', 'Twitter', 'GitHub', 'Instagram']

export default function Footer() {
  return (
    <footer className="relative bg-surface border-t border-purple-glow/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-16 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-display text-3xl font-extrabold tracking-widest gradient-text-bright mb-5">VENSURE</div>
            <p className="font-body font-light text-sm leading-relaxed text-white/35 max-w-xs mb-8">
              An IT solutions company delivering websites, digital products, and technical support for businesses of all sizes.
            </p>
            <div className="flex gap-5">
              {socials.map((s) => (
                <a
                  key={s}
                  href="#"
                  className="font-mono text-[10px] tracking-widest uppercase text-white/25 hover:text-purple-bright transition-colors duration-200"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-purple-glow/60 mb-6">{col}</p>
              <ul className="space-y-3">
                {links.map((l) => (
                  <li key={l}>
                    <a href="#" className="font-body text-sm text-white/35 hover:text-purple-bright transition-colors duration-200">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-purple-glow/8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[10px] tracking-wider text-white/20">
            © 2025 Vensure Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-glow animate-pulse" />
            <span className="font-mono text-[10px] tracking-wider text-purple-glow/40 uppercase">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
