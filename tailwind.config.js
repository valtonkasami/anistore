/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'ipad': '1121px',
        'big': '1374px',
      },
    },
  },
  plugins: [],
}