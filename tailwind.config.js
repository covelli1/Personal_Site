/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: '#0d1127',
        'navy-light': '#161b33',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }
  }
}
