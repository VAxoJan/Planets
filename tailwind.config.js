/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {},
    fontFamily:{
      headerFont: ["League Spartan", "sans-serif"],
      antonio: ["Antonio", "sans-serif"],
    },
  },
  plugins: [],
}

