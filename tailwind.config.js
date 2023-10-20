/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inikabold: ['InikaBold', 'sans-serif'],
        inikaregular: ['InikaRegular', 'sans-serif'],
        esteban: ['Esteban', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
        enriquetabold: ['EnriquetaBold', 'sans-serif'],
        enriquetasemibold: ['EnriquetaSemiBold', 'sans-serif'],
        enriquetamedium: ['EnriquetaMedium', 'sans-serif'],
        enriquetaregular: ['EnriquetaRegular', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

