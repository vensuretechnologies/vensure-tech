import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#0e0e14',
          50:  '#f4f3ff',
          100: '#e9e8fe',
          200: '#c5c2fd',
          300: '#a09bfb',
          400: '#7c75f8',
          500: '#5a52f0',
          600: '#4239e4',
          700: '#2e27c8',
          800: '#1e1a9e',
          900: '#121070',
          950: '#0e0e14',
        },
        // Brand colors from logo
        brand: {
          red: {
            DEFAULT: '#DC2626',
            50:  '#FEF2F2',
            100: '#FEE2E2', 
            200: '#FECACA',
            300: '#FCA5A5',
            400: '#F87171',
            500: '#EF4444',
            600: '#DC2626',
            700: '#B91C1C',
            800: '#991B1B',
            900: '#7F1D1D',
          },
          navy: {
            DEFAULT: '#1E3A8A',
            50:  '#EFF6FF',
            100: '#DBEAFE',
            200: '#BFDBFE',
            300: '#93C5FD',
            400: '#60A5FA',
            500: '#3B82F6',
            600: '#2563EB',
            700: '#1D4ED8',
            800: '#1E40AF',
            900: '#1E3A8A',
          }
        },
        // Keep backward compatibility while transitioning
        purple: {
          glow:   '#DC2626',   // Now red
          bright: '#EF4444',   // Now light red
          soft:   '#FEE2E2',   // Now light red
          dim:    '#991B1B',   // Now dark red
          dark:   '#7F1D1D',   // Now darker red
        },
        surface: {
          DEFAULT: '#13131c',
          2: '#1a1a27',
          3: '#22223a',
        },
        cyber: '#DC2626', // Now brand red
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body:    ['var(--font-body)', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      animation: {
        'marquee':       'marquee 28s linear infinite',
        'pulse-slow':    'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float':         'float 6s ease-in-out infinite',
        'glow-pulse':    'glowPulse 3s ease-in-out infinite',
        'scan':          'scan 8s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%':   { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(220,38,38,0.3)' },
          '50%':      { boxShadow: '0 0 60px rgba(220,38,38,0.7), 0 0 100px rgba(220,38,38,0.3)' },
        },
        scan: {
          '0%':   { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
      },
      backgroundImage: {
        'grid-brand': `linear-gradient(rgba(220,38,38,0.06) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(220,38,38,0.06) 1px, transparent 1px)`,
        'radial-brand': 'radial-gradient(ellipse 70% 50% at 60% 40%, #3a1e1e 0%, #0e0e14 65%)',
        // Keep backward compatibility
        'grid-purple': `linear-gradient(rgba(220,38,38,0.06) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(220,38,38,0.06) 1px, transparent 1px)`,
        'radial-purple': 'radial-gradient(ellipse 70% 50% at 60% 40%, #3a1e1e 0%, #0e0e14 65%)',
      },
      backgroundSize: {
        'grid': '56px 56px',
      },
    },
  },
  plugins: [],
}

export default config
