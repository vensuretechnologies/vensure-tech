'use client'
import { useEffect, useState } from 'react'

const links = ['Services','Process','Work','Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-16 py-6 transition-all duration-500 ${scrolled ? 'bg-[#0e0e14]/80 backdrop-blur-xl border-b border-purple-900/30' : ''}`}>
      {/* Logo */}
      <a href="#" className="flex items-center gap-3 group">
        <div className="w-8 h-8 relative">
          <div className="absolute inset-0 border border-purple-500/60 rotate-45 group-hover:rotate-[50deg] transition-transform duration-300" />
          <div className="absolute inset-[6px] bg-purple-500/80 rotate-45 group-hover:rotate-[55deg] transition-transform duration-300" style={{boxShadow:'0 0 12px rgba(168,85,247,0.6)'}} />
        </div>
        <span className="font-display text-base tracking-[0.15em] text-white font-bold">VENSURE</span>
      </a>

      {/* Links */}
      <ul className="hidden md:flex gap-10 items-center">
        {links.map(l => (
          <li key={l}>
            <a href={`#${l.toLowerCase()}`}
               className="font-mono text-[0.7rem] tracking-[0.2em] uppercase text-purple-200/60 hover:text-purple-300 transition-colors duration-200 relative group">
              {l}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-purple-400 group-hover:w-full transition-all duration-300" />
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contact" className="hidden md:flex items-center gap-2 font-mono text-[0.7rem] tracking-[0.15em] uppercase text-purple-300 border border-purple-500/50 px-5 py-2.5 hover:bg-purple-500/10 hover:border-purple-400 transition-all duration-300" style={{boxShadow:'0 0 20px rgba(168,85,247,0.1)'}}>
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        Get Started
      </a>
    </nav>
  )
}
