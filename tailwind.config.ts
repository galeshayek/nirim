import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: 'rgba(var(--primary), <alpha-value>)',
        complimantry: 'rgba(var(--complimantry), <alpha-value>)',
        pop: 'rgba(var(--pop), <alpha-value>)',
        oposite: 'rgba(var(--oposite), <alpha-value>)',
        text: 'rgba(var(--text), <alpha-value>)',
      },
      fontSize: {
        sm: 'clamp(0.8rem, 1vw, 1.3rem)',
        md: 'clamp(1rem, 1.2vw, 1.5rem)',
        lg: 'clamp(1.125rem, 1.4vw, 1.75rem)',
        xl: 'clamp(1.25rem, 1.5vw, 1.75rem)',
        '2xl': 'clamp(1.563rem, 1.8vw, 2rem)',
        '3xl': 'clamp(1.953rem, 2.2vw, 2.5rem)',
        '4xl': 'clamp(2.441rem, 2.5vw, 3rem)',
        '5xl': 'clamp(3.052rem, 3vw, 3.5rem)',
      }
    },
  },
  plugins: [],
}

export default config

