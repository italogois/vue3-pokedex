/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        backgroundApp: "#222831",
        textColorDefault: "#eeeeee",
        yellowProgression: "#ca9629",
        yellowBar: "#594212",
        backgroundPokemonItem: "#252e38",
        yellow: "#FFD369",
        bgScrollBar: "#364351",
      },
    },
  },
  plugins: [],
};
