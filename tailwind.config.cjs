module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Merriweather': ['Merriweather', 'serif'],
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Nunito': ['Nunito', 'sans-serif'],
        'Pacifico': ['Pacifico','cursive'],
        'Roboto': ['Roboto','sans-serif'],
        'Tangerine': ['Tangerine','cursive'],
        'Kaushan': ['Kaushan Script','cursive'],
      },
      screens:{
        'lmd': '900px',
      }
    },
  },
  plugins: [],
}