/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        error: '#ff0000',
        primary: '#74a0f2',
        secondary: '#d4ebeb',
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      addBase({
        ':root': {
          '--color-primary': theme('colors.primary'),
          '--color-secondary': theme('colors.secondary'),
          '--color-error': theme('colors.error'),
        },
      });
    },
  ],
};
