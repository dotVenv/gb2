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
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
 
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
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
        zinc:{
          400: "#A1A1AA",
          500: "#71717A",
          600: "#52525B",
          900: "#18181B",
        },
        purple:{
          800: "#301050",
          900: "#180828",
        }
        // .. rest of the colors
      },
    },
  },
  animation: {
    orbit: "orbit calc(var(--duration)*1s) linear infinite",
    "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
    ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
    "accordion-down": "accordion-down 0.2s ease-out",
    "accordion-up": "accordion-up 0.2s ease-out",
  },
  keyframes: {
    orbit: {
      "0%": {
        transform:
          "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
      },
      "100%": {
        transform:
          "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
      },
    },
    "border-beam": {
      "100%": {
        "offset-distance": "100%",
      },
    },
    ripple: {
      "0%, 100%": {
        transform: "translate(-50%, -50%) scale(1)",
      },
      "50%": {
        transform: "translate(-50%, -50%) scale(0.9)",
      },

    },
    "accordion-down": {
      from: { height: "0" },
      to: { height: "var(--radix-accordion-content-height)" },
    },
    "accordion-up": {
      from: { height: "var(--radix-accordion-content-height)" },
      to: { height: "0" },
    },
    "shine-pulse": {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
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
