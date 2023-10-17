/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        color1: "#61777f",
        color2: "#C8C8C8",
      },
      fontFamily: {
        bitter: ["Bitter", "serif"],
        monoton: ["Monoton", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
};