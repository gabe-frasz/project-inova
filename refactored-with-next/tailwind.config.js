const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ["Krona One", defaultTheme.fontFamily.sans],
        text: ["DM Sans", defaultTheme.fontFamily.sans],
      },
      colors: {
        brand: {
          400: "#e85128",
          500: "#db3609",
          600: "#b73511",
          900: "#515151",
        },
      },
    },
  },
  plugins: [],
};
