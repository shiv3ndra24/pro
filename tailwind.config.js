/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50:  '#f0f1f8',
          100: '#dde0ef',
          200: '#bcc2e0',
          300: '#8e98ca',
          400: '#6270b2',
          500: '#4a5499',
          600: '#3b4380',
          700: '#313769',
          800: '#2b3057',
          900: '#1C1C2E',
          950: '#12121e',
        },
        cream: {
          50:  '#FAFAF7',
          100: '#F5F3EE',
          200: '#EDE9DF',
          300: '#E0D9CC',
        },
        gold: {
          400: '#D4A843',
          500: '#C49A2A',
          600: '#B08020',
        },
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"Lora"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'sans-serif'],
      },
      // fontFamily: {
      //   display: ['"Montserrat"', 'sans-serif'],
      //   body:    ['"Roboto"', 'sans-serif'],
      //   sans:    ['"Roboto"', 'sans-serif'],
      // },
      boxShadow: {
        'card': '0 2px 12px 0 rgba(28,28,46,0.07)',
        'card-hover': '0 8px 32px 0 rgba(28,28,46,0.13)',
      },
      fontSize: {
        'xs': '14px',
        'sm': '16px',
        'base': '18px',
        'lg': '20px',
        'xl': '25px',
        '2xl': '30px',
        '3xl': '32px',
        '4xl': '34px',
        '5xl': '36px',
      },
    },
  },
  plugins: [],
}
