/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-violet': 'hsl(278, 68%, 11%)',
        'very-dark-violet': 'hsl(278, 68%, 11%)',
        'light-gray-violet': 'hsl(270, 3%, 87%)',
        'dark-gray-violet': 'hsl(279, 6%, 55%)',
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif']
      },
    },

  },
  plugins: [],
}
