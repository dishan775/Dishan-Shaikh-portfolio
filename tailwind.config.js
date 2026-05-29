/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#030712',
        surface: '#0a0f1e',
        'surface-elevated': '#111827',
        primary: '#00D4FF',
        secondary: '#7C3AED',
        tertiary: '#10B981',
        'accent-warm': '#F59E0B',
        text-primary: '#F0F4FF',
        text-muted: '#6B7A99',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-mesh': 'radial-gradient(ellipse at 20% 50%, rgba(0,212,255,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(124,58,237,0.06) 0%, transparent 60%), radial-gradient(ellipse at 60% 80%, rgba(16,185,129,0.04) 0%, transparent 60%), #030712',
      }
    },
  },
  plugins: [],
}
