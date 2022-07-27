/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3F5E87",
          secondary: "#F9D72F",
          accent: "#EBF1F4",
          neutral: "#18182F",
          "base-100": "#FFFFFF",
          info: "#3E8561",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
    ],
  },
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"'],
        nunito: ['"Nunito"'],
      },
    },
  },
  plugins: [require("daisyui")],
};
