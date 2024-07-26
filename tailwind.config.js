/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6ccbcb",
          light: "#c3ffff",
          dark: "#366666",
          50: "#cfffff",
          100: "#c3ffff",
          200: "#b7fefe",
          300: "#9ffefe",
          400: "#93fefe",
          500: "#87fefe",
          600: "#7ae5e5",
          700: "#6ccbcb",
          800: "#519898",
          900: "#366666",
        },
      },
      fontFamily: {
        sans: ["K2D", "sans-serif"],
        serif: ["K2D", "serif"],
      },
    },
  },
  plugins: [],
};
