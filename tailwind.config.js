/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
module.exports = {
  content: ["*.html"],
  theme: {
    colors:{
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow:  colors.yellow,
      
      darkcyan: "hsl(158, 36%, 37%)",
      cream: "hsl(30, 38%, 92%)",
      veryDarkBlue: 'hsl(212, 21%, 14%)',
      darkGrayishBlue: 'hsl(228, 12%, 48%)',
    },
    fontFamily:{
      'Montserrat':["'Montserrat', sans-serif;"],
      'Fraunces': ["'Fraunces', serif"],
    },
    extend: {},
  },
  plugins: [],
}
