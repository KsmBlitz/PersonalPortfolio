/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <--- ESTA LÍNEA ES LA QUE HACE LA MAGIA
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} 
