/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'primary-dark' : "#192745" ,
        'secondary-dark' : "#111827",
        'low-white' : '#e4e7ed',
        'primary-light' : "#d8e3f2",
        'secondary-light' : "#edf3fa",

      }
    },
    fontFamily: {
      intro: ["Caveat Brush", "cursive"],
    },
    
  },
  plugins: [require('@tailwindcss/typography')],
}
