/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        scaleAnimate:'scaleAnimate 1s linear',
        marquee: "marquee 10s linear infinite forwards",
      },
      keyframes:{
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      fontFamily: {
        appFont: ['"Manrope", sans-serif'],
        appContent: ['"Poppins", sans-serif'],
      },  
    },
  },
  plugins: [],
}

