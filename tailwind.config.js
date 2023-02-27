/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'maya-blue': '#55CDFC',
        'white': '#FFFFFF',
        'amaranth-pink': '#F7A8B8',
      },
    },
  },
  plugins: [],
}
