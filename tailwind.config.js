module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "node_modules/preline/dist/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js"
],
  theme: {
    fontSize: {
      'big': '10rem',
    },
    extend: {},
  },
  plugins: [
    require('preline/plugin'),
    require("tw-elements/dist/plugin"),
    require('@tailwindcss/forms'),
  ],
}