/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ['*'],
  theme: {
    extend: {
      colors:{
        'dim':'#24223a',
        'dark':'#151422',
        'light':'#e7e5f2',
        'white':'#fff',
        'black':'#000',
        'purple':'#6e62f2',
        'yellow':'#e8c93d',
        'orange':'#ff6b5c',
        'green':'#37bf9b',
        'skyblue':'#39a0ef'
      },
      screens: {
        'sm': '480px',
        // => @media (min-width: 480px) { ... }
      }
      
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '4rem',
        xl: '8rem',
        '2xl': '10rem',
      },
    },
  },
  plugins: [],
}

