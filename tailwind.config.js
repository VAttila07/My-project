/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        voyage: ["Voyage", "sans-serif"],
        thunder: ["Thunder", "sans-serif"],
      }
    },
  },
  plugins: [],
}