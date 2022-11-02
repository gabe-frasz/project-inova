/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      black: "#000000",
      white: "#FFFFFF",

      primary: {
        500: "#EB5E28",
        content: "#0F121A",
      },
      secondary: {
        500: "#73C2BE",
        content: "#0F121A",
      },
      base: {
        300: "#0F121A",
        content: "#FFFFFF",
      },

      gray: {
        800: "#262626",
      },
    },

    extend: {
      fontFamily: {
        sans: "'Albert Sans', sans-serif",
      },
      fontSize: {
        "4xl": "2.5rem",
        "5xl": "3.125rem",
      },
      backgroundImage: {
        gradient:
          "linear-gradient(141.95deg, rgba(109, 137, 136, 0.8) -147.36%, rgba(15, 18, 26, 0.8) 67.08%)",
        "home-banner": "url('/images/home-banner.png')",
        "about-banner": "url('/images/about-banner.png')",
        "budget-banner": "url('/images/budget-banner.png')",
      },
    },
  },
  plugins: [],
};
