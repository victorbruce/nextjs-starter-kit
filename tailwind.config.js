/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pageColor: "var(--system-color-pageColor)",
        pageColorSecondary: "var(--system-color-pageColorSecondary)",
        pageColorTertiary: "var(--system-color-pageColorTertiary)",
        pageBg: "var(--system-color-pageBg)",
        pageBgSecondary: "var(--system-color-pageBgSecondary)",
        pageBgTertiary: "var(--system-color-pageBgTertiary)",
        borderColor: "var(--system-color-border)",
        dropdownBg: "var(--system-color-dropdownBg)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
