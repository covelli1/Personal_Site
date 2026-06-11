/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'summer-pattern': "url('/Personal_Site/summer.jpg')",
        'spring-pattern': "url('/Personal_Site/spring.jpg')",
        'winter-pattern': "url('/Personal_Site/winter.jpg')",
        'fall-pattern': "url('/Personal_Site/fall.jpg')",
      },
    }
  }
}