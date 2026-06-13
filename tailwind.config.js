/** @type {import('tailwindcss').Config} */

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          orange: '#FF6B35',
          'orange-light': '#FFE8D6',
          'orange-dark': '#E55A2B',
          cream: '#FFF8F0',
          mint: '#2EC4B6',
          'mint-light': '#E0F7F5',
          brown: '#3D2C2E',
          'brown-light': '#6B5356',
          peach: '#FFD4B8',
        },
      },
      fontFamily: {
        fredoka: ['Fredoka', 'Nunito', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
