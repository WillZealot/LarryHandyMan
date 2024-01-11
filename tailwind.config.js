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
        "about-hero": "url(/src/assets/heros/About-Hero.jpg)",
        "contact-hero": "url(/src/assets/heros/Contact-Hero.jpg)",
        "gallery-hero": "url(/src/assets/heros/Gallery-Hero.jpg)",
        "services-hero": "url(/src/assets/heros/Services-Hero.jpg)",
        "service-hero": "url(/src/assets/heros/ServiceID-Hero.jpg)",
      },
      keyframes: {
        fadeInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        fadeInLeft: "fadeInLeft 1s ease-out forwards",
        fadeInRight: "fadeInRight 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
