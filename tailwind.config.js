/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: false, 
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-nunito)', 'sans-serif'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#34d399', // green-300
          DEFAULT: '#047857', // green-700 
          dark: '#064e3b', // green-900
        },
      },
    },
  },
  plugins: [],
}