/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'neo-bg': '#0B0C10',
        'neo-surface': '#111217',
        'neo-cyan': '#00F0FF',
        'neo-magenta': '#FF2D95',
        'neo-lime': '#B7FF00',
        'neo-gray': '#A6A6A6'
      },
      fontFamily: {
        display: ['Anton', 'Space Grotesk', 'sans-serif'],
        grotesk: ['Space Grotesk', 'sans-serif'],
        mono: ['Space Mono', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        'neo-soft': '0 10px 30px rgba(0,0,0,0.6)',
        'neo-neon': '0 8px 40px rgba(0,240,255,0.08)'
      }
    },
  },
  darkMode: 'class',
  plugins: [],
}
