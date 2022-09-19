/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: "var(--color-accent-icon)",
        fore: {
          primary: "var(--color-text-title)",
          secondary: "var(--color-text-body)",
        },
        back: {
          primary: "var(--color-background-primary)",
          secondary: "var(--color-background-secondary)",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
