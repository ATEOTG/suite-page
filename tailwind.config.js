/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        main: ["Epilogue"],
      },
      colors: {
        primary: {
          100: "#A060FF",
          200: "#CB30E3",
        },
        secondary: {
          100: "#FFA84E",
        },
        neutral: {
          100: "#172339",
          200: "#49566D",
          300: "#F3EDE7",
          400: "#FAF8F6",
        },
      },
    },
  },
  plugins: [],
};
