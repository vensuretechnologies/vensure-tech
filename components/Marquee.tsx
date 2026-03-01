export default function Marquee() {
  const items = ['Website Development','IT Support & Helpdesk','UI/UX Design','Cloud Solutions','E-Commerce Builds','Managed IT Services','System Integration','Cybersecurity']
  const doubled = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-purple-500/30 py-4" style={{background:'linear-gradient(90deg,#1a0a2e,#13131c,#1a0a2e)'}}>
      <div className="flex gap-16 w-max animate-marquee">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-16 whitespace-nowrap">
            <span className="font-mono text-[0.75rem] tracking-[0.2em] uppercase text-purple-300/70">{item}</span>
            <span className="text-purple-500/50 text-xs">◆</span>
          </div>
        ))}
      </div>
    </div>
  )
}
