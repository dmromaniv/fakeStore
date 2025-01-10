import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        md: "728px",
        lg: "984px",
        xl: "1280px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "2rem",
        xl: "3rem",
      },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1F2937",
          100: "#242b3f",
        },
        secondary: {
          DEFAULT: "#FFFFFF",
        },
        accent: {
          DEFAULT: "#6376F1",
          50: "#EBF2FF",
          100: "#464FE5",
          200: "#c7d8fe",
        },
        danger: {
          DEFAULT: "#FDAAAA",
          100: "#FADEDE",
        },
      },
      backgroundColor: {
        primary: { DEFAULT: "#FFFFFF", 50: "#DDE5ED" },
        secondary: { DEFAULT: "#000000", 50: "#b6cde2" },
        accent: {
          DEFAULT: "#6376F1",
          50: "#EBF2FF",
          100: "#464FE5",
          200: "#c7d8fe",
        },
        warm: "#F3BD77",
      },
    },
  },
  plugins: [],
} satisfies Config;
