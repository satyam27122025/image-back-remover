/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#5003C0',
          magenta: '#AB03A9',
          pink: '#FF467A',
          yellow: '#FFD51E',
          light: '#FAF8FC',
          dark: '#17131F',
          muted: '#6F6878'
        }
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
