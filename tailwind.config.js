/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      cookie: ["Cookie", "cursive"],
      courgette: ["Courgette", "cursive"],
    },
    extend: {},
  },
  plugins: [],
};
