/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "475px",
      xxs: "250px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "about-hero": "url(/src/assets/img/deck-building.jpg)",
      },
    },
  },
  plugins: [],
};
