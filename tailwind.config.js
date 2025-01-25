/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "sigmar": ["Sigmar","serif"],
        "roboto": ["Roboto","serif"],
      },
      fontSize: {
        clampTitle: 'clamp(2.8rem,6.2vw,7.4rem)',
        clamp: 'clamp(.79rem,2vw,1.3rem)',
      }
    },
  },
  plugins: [],
}