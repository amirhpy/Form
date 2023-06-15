/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'succ': '#198754',
        'err': '#dc3545'
      },
    },
  },
  plugins: [],
}

