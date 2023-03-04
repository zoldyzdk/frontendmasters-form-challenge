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
      },
      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif']
      },
    },

  },
  plugins: [],
}
