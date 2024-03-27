import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './theme/**/*.{js,ts,jsx,tsx,mdx}',
    './theme.config.tsx'
  ],
  theme: {
    extend: {
      colors: {},
      fontSize: {
        title: 'max(48px,min(5vw,60px))'
      }
    }
  },
  plugins: [],
  darkMode: 'class'
}
export default config
