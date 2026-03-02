'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    if (!ctx) {
      console.warn('Canvas 2D context not supported')
      return
    }
    
    let animId: number | undefined

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Particle system - responsive particle count
    const particleCount = window.innerWidth < 768 ? 40 : 80
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.5 + 0.5,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy
        if (p.x < 0) p.x = canvas.width
        if (p.x > canvas.width) p.x = 0
        if (p.y < 0) p.y = canvas.height
        if (p.y > canvas.height) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(220,38,38,${p.alpha})`
        ctx.fill()
      })

      // Connect nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx*dx + dy*dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(220,38,38,${0.12 * (1 - dist/120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { 
      if (animId !== undefined) {
        cancelAnimationFrame(animId)
      }
      window.removeEventListener('resize', resize) 
    }
  }, [])

  return (
    <section 
      id="hero"
      className="relative min-h-screen flex flex-col justify-end pb-24 px-8 md:px-16 overflow-hidden" 
      style={{background:'radial-gradient(ellipse 80% 60% at 65% 35%, #1e0a3a 0%, #0e0e14 65%)'}}>
      {/* Canvas particles */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      {/* Grid overlay */}
      <div className="absolute inset-0 z-0" style={{backgroundImage:'linear-gradient(rgba(220,38,38,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(220,38,38,0.05) 1px,transparent 1px)',backgroundSize:'56px 56px'}} />

      {/* Scan line */}
      <div className="absolute left-0 right-0 h-px z-0 pointer-events-none" style={{background:'linear-gradient(90deg,transparent,rgba(220,38,38,0.6),transparent)',animation:'scan 8s linear infinite',top:0}} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full z-0 pointer-events-none" style={{background:'radial-gradient(circle,rgba(220,38,38,0.15) 0%,transparent 70%)',filter:'blur(40px)'}} />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full z-0 pointer-events-none" style={{background:'radial-gradient(circle,rgba(59,130,246,0.1) 0%,transparent 70%)',filter:'blur(40px)'}} />

      {/* Content */}
      <div className="relative z-10">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8 opacity-0 animate-[fadeUp_0.7s_0.2s_forwards]" style={{animationFillMode:'forwards'}}>
          <span className="w-8 h-px bg-brand-red-400" />
          <span className="font-mono text-[0.7rem] tracking-[0.25em] uppercase text-brand-red-400">IT Solutions & Digital Services — Est. 2026</span>
        </div>

        {/* Title */}
        <div className="relative flex flex-col xl:flex-row xl:items-center xl:gap-12">
          <h1 className="font-display font-black leading-[0.9] sm:leading-[0.88] mb-8 sm:mb-10 xl:mb-0 overflow-visible flex-1" style={{fontSize:'clamp(2.5rem,10vw,11rem)'}}>
            <span className="block opacity-0" style={{animation:'fadeUp 0.8s 0.4s forwards'}}>
              <span className="glitch text-white" data-text="BUILD.">BUILD.</span>
            </span>
            <span className="block opacity-0" style={{animation:'fadeUp 0.8s 0.55s forwards'}}>
              <span className="md:hidden text-brand-red-bright" style={{textShadow:'0 0 20px rgba(220,38,38,0.8)'}}>LAUNCH.</span>
              <span className="hidden md:block" style={{WebkitTextStroke:'2px rgba(220,38,38,0.9)',color:'rgba(220,38,38,0.1)',textShadow:'0 0 30px rgba(220,38,38,0.3)'}}>LAUNCH.</span>
            </span>
            <span className="block opacity-0" style={{animation:'fadeUp 0.8s 0.7s forwards',color:'#DC2626',textShadow:'0 0 40px rgba(220,38,38,0.5), 0 0 80px rgba(220,38,38,0.2)'}}>
              SUPPORT.
            </span>
          </h1>

          {/* Animated Rocket */}
          <div className="absolute top-4 right-4 sm:top-8 sm:right-8 xl:relative xl:top-auto xl:right-auto opacity-0 animate-[rocketFadeIn_1.5s_1s_forwards]">
            <div className="relative animate-[rocketFloat_3s_ease-in-out_infinite]">
              {/* Exhaust Trail */}
              <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-1.5 sm:w-2 h-8 sm:h-12 animate-[exhaustFlicker_0.3s_ease-in-out_infinite_alternate]" 
                     style={{background: 'linear-gradient(to bottom, rgba(255,165,0,0.8), rgba(255,69,0,0.6), transparent)'}}></div>
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-6 sm:h-8 animate-[exhaustFlicker_0.4s_ease-in-out_infinite_alternate]" 
                     style={{background: 'linear-gradient(to bottom, rgba(255,255,255,0.9), rgba(255,165,0,0.7), transparent)'}}></div>
              </div>
              
              {/* Rocket SVG */}
              <div className="transform hover:scale-110 transition-transform duration-300 cursor-pointer">
                <svg width="80" height="100" viewBox="0 0 48 64" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-lg sm:w-[100px] sm:h-[125px] xl:w-[120px] xl:h-[150px]">
                  {/* Rocket Body */}
                  <path d="M24 2 L18 12 L18 45 L30 45 L30 12 Z" fill="#DC2626" stroke="#B91C1C" strokeWidth="1"/>
                  
                  {/* Rocket Nose */}
                  <path d="M24 2 L18 12 L30 12 Z" fill="#EF4444"/>
                  
                  {/* Window */}
                  <circle cx="24" cy="18" r="4" fill="#1E3A8A" stroke="#3B82F6" strokeWidth="1"/>
                  <circle cx="24" cy="18" r="2" fill="#60A5FA" opacity="0.8"/>
                  
                  {/* Wings */}
                  <path d="M18 35 L12 50 L18 45 Z" fill="#7C2D12" stroke="#A16207" strokeWidth="1"/>
                  <path d="M30 35 L36 50 L30 45 Z" fill="#7C2D12" stroke="#A16207" strokeWidth="1"/>
                  
                  {/* Details */}
                  <rect x="20" y="25" width="8" height="2" fill="#B91C1C"/>
                  <rect x="20" y="30" width="8" height="2" fill="#B91C1C"/>
                  
                  {/* Exhaust */}
                  <path d="M20 45 L24 52 L28 45 Z" fill="#DC2626"/>
                </svg>
              </div>
              
              {/* Sparkles */}
              <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-[sparkle_1.5s_ease-in-out_infinite]"></div>
              <div className="absolute top-2 sm:top-4 -left-2 sm:-left-3 w-1 h-1 sm:w-1.5 sm:h-1.5 bg-blue-400 rounded-full animate-[sparkle_2s_ease-in-out_infinite_0.5s]"></div>
              <div className="absolute bottom-1 sm:bottom-2 right-6 sm:right-8 w-0.5 h-0.5 sm:w-1 sm:h-1 bg-white rounded-full animate-[sparkle_1.2s_ease-in-out_infinite_1s]"></div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 opacity-0" style={{animation:'fadeUp 0.8s 0.9s forwards'}}>
          <p className="max-w-sm font-body text-brand-navy-100/50 leading-relaxed font-light text-base">
            We design, develop, and support digital products — from high-performance websites to enterprise IT systems that keep your business running 24/7.
          </p>
          <div className="flex items-center gap-4">
            <a href="#services" className="flex items-center gap-3 font-mono text-[0.75rem] tracking-[0.15em] uppercase bg-brand-red hover:bg-brand-red-500 text-white px-7 py-4 transition-all duration-300 hover:-translate-y-1 group" style={{boxShadow:'0 0 30px rgba(220,38,38,0.3)'}}>
              Explore Services
              <span className="group-hover:translate-x-1.5 transition-transform duration-200">→</span>
            </a>
            <a href="#work" className="flex items-center gap-3 font-mono text-[0.75rem] tracking-[0.15em] uppercase border border-brand-red/40 text-brand-red-300 hover:border-brand-red-400 px-7 py-4 transition-all duration-300 hover:bg-brand-red/10">
              View Work
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-0 right-0 flex flex-col items-center gap-2 opacity-0" style={{animation:'fadeIn 1s 1.3s forwards'}}>
          <span className="font-mono text-[0.6rem] tracking-[0.25em] uppercase text-brand-red-400/50 [writing-mode:vertical-rl]">Scroll</span>
          <div className="w-px h-16" style={{background:'linear-gradient(to bottom, rgba(220,38,38,0.6), transparent)',animation:'scrollPulse 2s infinite'}} />
        </div>
      </div>

      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes scan { 0%{top:-2px} 100%{top:100vh} }
        @keyframes scrollPulse { 0%,100%{opacity:0.4} 50%{opacity:1} }
        @keyframes rocketFadeIn { from{opacity:0;transform:translateY(-20px) rotate(-10deg)} to{opacity:1;transform:translateY(0) rotate(0deg)} }
        @keyframes rocketFloat { 
          0%, 100% { transform: translateY(0px) rotate(-5deg) } 
          50% { transform: translateY(-15px) rotate(5deg) } 
        }
        @keyframes exhaustFlicker { 
          0% { opacity: 0.8; transform: scaleY(1) } 
          100% { opacity: 1; transform: scaleY(1.2) } 
        }
        @keyframes sparkle { 
          0%, 100% { opacity: 0; transform: scale(0.5) rotate(0deg) } 
          50% { opacity: 1; transform: scale(1) rotate(180deg) } 
        }
      `}</style>
    </section>
  )
}
