/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bannerImg': "url('img/show.jpg')",
      },
      colors:{
        'ebony':"#242C44",
        'mirage':'#1C2434',
      },
      backgroundColor:{
        'dark-purple':'rgb(48,34,73)'
      },
    },
  },
  plugins: [],
}