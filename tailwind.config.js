/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'rain': "url('../public/img/rain.jpg')",
        'clouds' : "url('../public/img/cloud.jpg')",
        'sunny' : "url('../public/img/sunny.jpg')",
      },
    },
  },
  plugins: [],
}