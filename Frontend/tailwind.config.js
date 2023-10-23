/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        primaryColor: "#E3F5FF",
        secondaryColor: "#E5ECF6",
        thirdColor: "#F7F9FB",
        textColor: "#1C1C1C",
      }
    },
  },
  plugins: [],
}