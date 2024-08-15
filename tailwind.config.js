/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

module.exports = {
  content: [
    "./gb2/**/*.{js,ts,jsx,tsx,mdx,html}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
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
        // .. rest of the colors
      },
    },
  },
  animation: {
    "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
  },
  keyframes: {
    "border-beam": {
      "100%": {
        "offset-distance": "100%",
      },
    },
  },
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          primary: {
            DEFAULT: "#66AAF9",
            foreground: "#0000",
          },
          focus: "#66AAF9",
        },
      },},
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
