/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: [...defaultTheme.fontFamily.sans],
      serif: ["var(--font-open-sans)", ...defaultTheme.fontFamily.serif],
      cursive: ["var(--font-bebas-neue)", "cursive"],
    },
    fontSize: {
      ...defaultTheme.fontSize,
      timer: [
        "2.5rem",
        {
          lineHeight: "1",
          letterSpacing: "0",
        },
      ],
      title: [
        "5rem",
        {
          lineHeight: "0.875em",
          letterSpacing: "0.06em",
        },
      ],
    },
  },
  plugins: [],
};
