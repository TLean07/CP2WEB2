/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Bebas Neue', 'cursive'],
      },
      colors: {
        'brand-dark': '#101010',
        'brand-light-dark': '#181818',
        'brand-primary': '#8A2BE2',
        'brand-secondary': '#A020F0',
        'brand-accent': '#00FFFF',
      },
    },
  },
  plugins: [],
}