/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        gradient: 'gradient 15s ease infinite',
        'slide-left-right': 'slide-left-right 20s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
        'slide-left-right': {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-50%)',
          },
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            fontFamily: 'Inter, system-ui, sans-serif',
            h1: {
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 700,
            },
            h2: {
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 700,
            },
            h3: {
              fontFamily: 'Inter, system-ui, sans-serif',
              fontWeight: 600,
            },
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};