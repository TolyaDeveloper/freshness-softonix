/** @type {import('tailwindcss').Config} */

const colors = require('./tailwind.colors.cjs')

module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    colors,
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      'open-sans': ['Open Sans', 'sans-serif']
    },
    extend: {}
  },
  plugins: []
}
