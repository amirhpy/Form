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
        'err': '#dc3545',
        'grau': '#d1d5db',
        'grau-100': '#e5e7eb'
      },
      backgroundColor: {
        'schwarz': '#111827'
      }
    },
  },
  plugins: [],
}

