import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#FBF6EC",
          100: "#F5E9D0",
          200: "#EAD3A1",
          300: "#DFBD72",
          400: "#D1A34A",
          500: "#B8863A",
          600: "#96692C",
          700: "#785424",
          800: "#5C4019",
          900: "#3D2A10",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },
  plugins: [],
};

export default config;
