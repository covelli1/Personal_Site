/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'summer-pattern': "url('./../public/summer.jpg')",
        'spring-pattern': "url('./../public/spring.jpg')",
        'winter-pattern': "url('./../public/winter.jpg')",
        'fall-pattern': "url('./../public/fall.jpg')",
      },
    }
  }
}