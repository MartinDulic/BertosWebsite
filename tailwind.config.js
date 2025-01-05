/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      textShadow: {
        outline: '0 0 3px black',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        aswald: ['Aswald', 'sans-serif'],

      },
      colors: {
        primary: '#111745ff',
        secondary: '#F2F4F3',
        teriary: '#5899E2'
      },
      backgroundImage: {
        tint: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))`,
      },
      animation: {
        spin180: 'spin180 0.3s ease-in-out', // Add the custom animation
      },
      keyframes: {
        spin180: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(180deg)' },
        },
      },
      // Custom text shadows
      textShadow: {
        sm: '1.41px 1.41px 2px rgba(0, 0, 0, 1)',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const textShadow = theme('textShadow'); // Get the custom shadows
      const textShadowUtilities = Object.keys(textShadow).map((key) => {
        return {
          [`.text-shadow-${key}`]: {
            textShadow: textShadow[key],
          },
        };
      });

      addUtilities(textShadowUtilities, ['responsive']); // Add utility classes
    },
  ],
}