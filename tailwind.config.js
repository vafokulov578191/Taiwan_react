/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      width: {
        '800': '50rem',
      },
      colors: {
        item_color: '#212936'
      }
    },
  },
  plugins: [],
}
