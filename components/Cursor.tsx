'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let rx = 0, ry = 0
    let animId: number

    const move = (e: MouseEvent) => {
      const { clientX: x, clientY: y } = e
      if (dotRef.current) {
        dotRef.current.style.left = x + 'px'
        dotRef.current.style.top = y + 'px'
      }
      rx += (x - rx) * 0.12
      ry += (y - ry) * 0.12
      if (ringRef.current) {
        ringRef.current.style.left = x + 'px'
        ringRef.current.style.top = y + 'px'
      }
    }

    const grow = () => {
      dotRef.current?.style.setProperty('transform', 'translate(-50%,-50%) scale(3)')
      if (ringRef.current) { ringRef.current.style.opacity = '0.15' }
    }
    const shrink = () => {
      dotRef.current?.style.setProperty('transform', 'translate(-50%,-50%) scale(1)')
      if (ringRef.current) { ringRef.current.style.opacity = '0.5' }
    }

    window.addEventListener('mousemove', move)
    document.querySelectorAll('a,button').forEach(el => {
      el.addEventListener('mouseenter', grow)
      el.addEventListener('mouseleave', shrink)
    })
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div ref={dotRef} className="fixed z-[9999] pointer-events-none w-3 h-3 rounded-full bg-purple-400 -translate-x-1/2 -translate-y-1/2 transition-transform duration-100" style={{boxShadow:'0 0 10px rgba(168,85,247,0.8)'}} />
      <div ref={ringRef} className="fixed z-[9998] pointer-events-none w-10 h-10 rounded-full border border-purple-400 -translate-x-1/2 -translate-y-1/2 transition-[opacity] duration-300" style={{opacity:0.5, transition:'left 0.2s ease, top 0.2s ease, opacity 0.3s'}} />
    </>
  )
}
