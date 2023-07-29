/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          400: '#1fc77e',
          500: '#053283',
        },
        yellow: {
          300: '#feea00',
          400: '#ffc542',
        },
        lilac: "#7F3DD2",
        grey: {
          200: "#D9D9D9",
          400: "#F4FAFF",
          800: "#414651",
        }
      },
    },
  },
  plugins: [],
};
