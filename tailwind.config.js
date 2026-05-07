/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './*.html',
    './js/**/*.{js,jsx}',
    './css/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          50: '#FAFAF8',
          100: '#F5F5F3',
          200: '#E5E5E3',
          300: '#D3D3D1',
          400: '#B5B5B1',
          500: '#999995',
          600: '#7A7A76',
          700: '#4F4F4F',
          800: '#333333',
          900: '#1A1A1A',
          950: '#0D0D0D',
        },
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Poppins', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '88rem',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      transitionDuration: {
        '300': '300ms',
        '400': '400ms',
      },
      backdropBlur: {
        'xs': '2px',
        'sm': '4px',
      },
    },
  },
  plugins: [],
  important: false,
  variants: {
    extend: {
      opacity: ['hover', 'focus'],
      scale: ['hover', 'active'],
    },
  },
}
