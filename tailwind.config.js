/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Josefin Sans', 'sans-serif'],
      },
      colors: {
        light: '#fef7f9',
        dark: '#43393b',
        beige: '#cc9d9f',
        lightCoral: '#ec7484',
        lightSalmon: '#dd9e8b',
      },
    },
  },
  plugins: [],
}
