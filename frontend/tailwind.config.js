/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: "#1D3461",
        green: "#007E66",
        yellow:"#FFB20C",
        darkBlue: "#1D3461",
        white: "#FFFFFF",
      }
    },
  },
  plugins: [],
}