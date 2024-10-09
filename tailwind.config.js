/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        pop: ["Poppins", "sans-serif"],
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      colors: {
        transparent: "transparent",
        btnBg: "#036ab5",
        bgColor: "#f2f4f6",
        primary: "#000000",
        secondary: "#c5cad1",
        text: "#89919c",
      },
    },
  },
  plugins: [],
};
