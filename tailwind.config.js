/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#071224',
        'turqoise': '#74f2db'
      },
      fontFamily: {
        radio: ["Radio Canada Big", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        sfmono: ["sf_mono", "sf"]
      },
    },
  },
  plugins: [
    require('daisyui')
  ],
}

