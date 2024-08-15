/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./gb2/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000000",
        blue: {
          50: "#e6f1fe",
          100: "#cce3fd",
          200: "#99c7fb",
          300: "#66aaf9",
          400: "#338ef7",
          500: "#006FEE",
          600: "#005bc4",
          700: "#004493",
          800: "#002e62",
          900: "#001731",
        },
        purple:"#E4D4F4",
        green:{
          200: '#A2E9C1',
          900: '#052814',
        },
        zinc:{ 
          600: "#52525B",
          800: "#27272A",},
        // .. rest of the colors
      },
    },
  },
  darkMode: "class",
  plugins: [nextui({
    addCommonColors: true,
    layout: {
      
      radius: {
        small: "2px", // rounded-small
        medium: "4px", // rounded-medium
        large: "6px", // rounded-large
      },
      borderWidth: {
        small: "1px", // border-small
        medium: "1px", // border-medium
        large: "2px", // border-large
      },
    },
  })],
};
