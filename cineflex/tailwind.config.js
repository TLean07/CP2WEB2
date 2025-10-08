/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        background: '#121212',
        surface: '#181818',
        primary: '#FFFFFF',
        secondary: '#AFAFAF',
        accent: '#3B82F6', 
      },
    },
  },
  plugins: [],
}