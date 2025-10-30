/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        toggleOn: '#3b82f6',   // azul
        toggleOff: '#d1d5db',  // cinza claro
      },
    },
  },
  plugins: [],
}

