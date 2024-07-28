import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#028478", bg: "#028478" },
        secondary: { DEFAULT: "#fff", bg: "rgb(231, 239, 230)" },
        "subtitle-color": { DEFAULT: "rgb(128, 128, 128)" },
        pure: "#000000",
      },
    },
  },
  plugins: [],
};
export default config;
