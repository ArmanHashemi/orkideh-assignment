/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors'

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#14532D',
      secondary: '#FFFFFF',
      accent: '#343741',

      blue: colors.blue,
      gray: colors.gray,
      red: colors.rose,
      green: colors.green,
      yellow: colors.yellow,
      white: colors.white,
      black: colors.black,

      transparent: colors.transparent
    },
    plugins: []
  }
}
