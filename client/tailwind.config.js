/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        scaleAnimate:'scaleAnimate 1s linear',
      },
      keyframes:{
        
      },
      fontFamily: {
        appFont: ['"Manrope", sans-serif'],
        appContent: ['"Poppins", sans-serif'],
      },  
    },
  },
  plugins: [],
}

