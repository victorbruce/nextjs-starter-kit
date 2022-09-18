/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: false,
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fore: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
        },
        back: {
          primary: "var(--color-background-primary)",
          secondary: "var(--color-background-secondary)",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"]
      }
    },
  },
  plugins: [],
};
