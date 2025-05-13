import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#DA2C32",
        light: "#666",
        "light-bg": "#eee",
        white: "#fff",
        black: "#303030",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      boxShadow: {
        DEFAULT: "0 .5rem 1rem rgba(0,0,0,.1)",
      },
      spacing: {
        "1": "1rem",
        "2": "2rem",
        "3": "3rem",
      },
      fontSize: {
        "1": "1rem",
        "1.1": "1.1rem",
        "1.3": "1.3rem",
        "1.5": "1.5rem",
        "1.6": "1.6rem",
        "1.8": "1.8rem",
        "2": "2rem",
        "2.5": "2.5rem",
        "3": "3rem",
        "3.5": "3.5rem",
      },
    },
  },
  plugins: [],
};
export default config;
