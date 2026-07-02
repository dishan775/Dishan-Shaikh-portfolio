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
        primary: '#39FF14',
        secondary: '#2ecc71',
        tertiary: '#10B981',
        'accent-warm': '#a3e635',
        'text-primary': '#F0F4FF',
        'text-muted': '#6B7A99',
      },
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif'],
        sans: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
