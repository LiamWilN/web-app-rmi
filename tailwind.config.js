/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "prm-clr": "#2d47c5",
        "scd-clr": "#ffffff",
        "acn-clr": "#8c8c8c",
      },
    },
  },
  plugins: [],
};
