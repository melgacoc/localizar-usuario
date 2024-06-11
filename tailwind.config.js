/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        darkGray: '#31353f',
        lightGray: '#E2E4E9',
        error: '#ff0000',
        primary: '#c2d6ff',
        secondary: '#578fff',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-black': theme('colors.black'),
          '--color-dark-gray': theme('colors.darkGray'),
          '--color-light-gray': theme('colors.lightGray'),
          '--color-primary': theme('colors.primary'),
          '--color-secondary': theme('colors.secondary'),
          '--color-error': theme('colors.error'),
        },
      });
    },
  ],
};
