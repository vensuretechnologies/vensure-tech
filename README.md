# Vensure Technologies — Next.js Website

A futuristic, tech-forward IT solutions website built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 🎨 Design
- **Color palette:** Charcoal + Purple Glow
- **Vibe:** Futuristic & Tech-forward
- **Fonts:** Syne (display) + Outfit (body) + JetBrains Mono
- **Features:** Custom cursor, scroll-triggered reveals, scan-line animation, animated orbs, marquee ticker

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
http://localhost:3000
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🗂 Project Structure

```
vensure-tech/
├── app/
│   ├── globals.css       # Global styles, fonts, animations
│   ├── layout.tsx        # Root layout + metadata
│   └── page.tsx          # Main page (assembles all sections)
├── components/
│   ├── Cursor.tsx        # Custom cursor (dot + ring)
│   ├── Navbar.tsx        # Sticky nav with scroll detection
│   ├── Hero.tsx          # Full-screen hero with animated orbs
│   ├── Marquee.tsx       # Scrolling service ticker
│   ├── Services.tsx      # 6-card services grid
│   ├── Process.tsx       # 4-step process section
│   ├── Work.tsx          # Case study grid
│   ├── Testimonials.tsx  # 3-column testimonials
│   ├── CTA.tsx           # Full-width call-to-action
│   ├── Footer.tsx        # Footer with links
│   └── useReveal.ts      # Scroll-triggered reveal hook
├── tailwind.config.ts    # Custom theme (purple palette, animations)
└── package.json
```

## 🧩 Key Dependencies

| Package         | Purpose                        |
|-----------------|--------------------------------|
| next@14         | Framework                      |
| react@18        | UI library                     |
| tailwindcss     | Utility-first CSS              |
| framer-motion   | Animations (ready to extend)   |
| lucide-react    | Icon library (ready to use)    |
| typescript      | Type safety                    |

## ✏️ Customisation

- **Colors** → `tailwind.config.ts` (purple palette + surface colors)
- **Content** → Edit each component in `/components`
- **Fonts** → `app/globals.css` (currently Syne + Outfit + JetBrains Mono)
- **Animations** → `tailwind.config.ts` keyframes section
