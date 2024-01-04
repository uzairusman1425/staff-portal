/** @type {import('tailwindcss').Config} */
import scrollbarPlugin from 'tailwind-scrollbar'
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        themeGray: '#B1B2B2',
        themeDarkGray: '#797A7B',
        themeLightGray: '#F2F2F2'
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        sora: ['var(--font-sora)'],
        poppins: ['var(--font-poppins)']
      }
    },
  },
  plugins: [
    scrollbarPlugin({ nocompatible: true })
  ],
}
