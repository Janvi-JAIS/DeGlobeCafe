/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
extend: {
  fontFamily: {
    heading: ['"Playfair Display"', 'serif'],
    body: ['Lato', 'sans-serif'],
  },
  colors: {
    espresso: '#3B2F2F',
    caramel: '#C49E78',
    cream: '#F5F0E6',
  },


},

  plugins: [],
}
}