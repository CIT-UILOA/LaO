/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blueberry: {
          400: "#3a3d8c",
          200: "#2a2d6e",
          100: "#202355",
        },
        gold: {
          400: "#9c6b0c",
          300: "#ffad0e",
          100: "#fed89c",
        },
        white: "#ffffff",
        black: "#000000",
      }
    },
    fontFamily: {
      sans: ["Inter", "serif"],
      serif: ["Noto Serif", "serif"],
    }
  },
  plugins: []
};
