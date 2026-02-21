/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0c',
        panel: '#111116',
        border: '#2a2a35',
        primary: '#6b46c1',
        secondary: '#00e5ff',
        textMain: '#e2e8f0',
        textMuted: '#94a3b8'
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', 'monospace'],
        sans: ['"Inter"', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 229, 255, 0.4)',
        'glow-primary': '0 0 20px rgba(107, 70, 193, 0.4)',
      }
    },
  },
  plugins: [],
}
