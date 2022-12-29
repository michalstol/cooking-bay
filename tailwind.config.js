/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [...fontFamily.sans],
      serif: ["var(--font-open-sans)", ...fontFamily.serif],
      cursive: ["var(--font-bebas-neue)", "cursive"],
    },
  },
  plugins: [],
};
