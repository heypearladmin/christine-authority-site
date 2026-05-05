import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0A1F44",
          deep: "#061534",
          soft: "#1B2D55",
        },
        gold: {
          DEFAULT: "#B8965A",
          light: "#D4B57F",
          dark: "#8E6F3F",
        },
        cream: {
          DEFAULT: "#F5F1EA",
          light: "#FAF7F2",
          dark: "#EBE5DA",
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', '"Roboto"', "system-ui", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.18em",
      },
      maxWidth: {
        prose: "70ch",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
