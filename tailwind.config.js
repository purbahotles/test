/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003459"
      },
      linearGradientColors: {
        'custom-gradient': 'linear-gradient(to bottom right, #FCEED5 0%, #FCEED5 100%, #FFE7BA 100%)',
      },
    },
  },
  plugins: [],
};
