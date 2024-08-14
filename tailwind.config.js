import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'button-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0) 100%)',
      },
      colors: {
        white: '#ffffff',
        grey: '#ADB1B8',
        'button-base': '#030712',
        menu: '#4B5563',
        divider: '#D1D5DB',
        footer: '#DBEAFE',
      },
      fontSize: {
        base: ['16px', '20px'],
      },
    },
  },
  plugins: [],
};
