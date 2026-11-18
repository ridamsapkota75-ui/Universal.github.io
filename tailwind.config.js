/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        deepNavy: "#07182F",
        darkBlue: "#0B2344",
        electricBlue: "#1265D8",
        royalBlue: "#1D4ED8",
        iceBlue: "#DCEBFA",
        steelWhite: "#F5F8FC",
        metallicSilver: "#B9C6D4",
        steelBlack: "#101820",
      },
      fontFamily: {
        sans: ["Inter", "Helvetica", "Arial", "sans-serif"]
      }
    }
  },
  plugins: []
};
