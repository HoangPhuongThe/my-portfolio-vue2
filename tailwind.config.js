/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {},
  },
  plugins: [],
  fontFamily: {
    sans: ['Optician Sans'],
    lato: ['Lato'],
  },
  color: {
    viola: '#C597A9',
    confetti: '#E8D44D', //javascript color
    'bright-turquoise': '#00d1f7', //reactjs
    'ocean-green': '#3fb17f', //vue
  },
};
