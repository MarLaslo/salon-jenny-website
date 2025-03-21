/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'false',
  theme: {
    extend: {
      fontFamily: {
        'bebas-neue': ['"Bebas Neue"', 'serif'],
      },
    },
  },
  plugins: [],
}

