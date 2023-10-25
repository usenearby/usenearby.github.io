/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      // Each time you change colors here run
      // npm run gen-tailwind-colors
      borderRadius: {
        DEFAULT: '.325rem',
      },
      colors: {
        transparent: 'transparent',
        brandBlue: '#0000E6',
        brandBlue800: '#002BB4',
        brandBlue900: '#1A0DAB',
        lightBlue: '#1BA9EA',
        brandCyan: {
          100: '#000080',
          200: '#00279F',
          300: '#005CBF',
          400: '#009CDF',
          500: '#00E7FF',
          600: '#22FFEE',
          700: '#44FFCE',
          800: '#66FFB9',
          900: '#88FFAF',
        },
        brandMagenta: '#FF00CD',
        brandGray: {
          100: '#F5F5F5',
          300: '#DADCE0',
          500: '#70757A',
          800: '#3C4043',
        },
        brandYellow: {
          100: '#FFEBAB',
          200: '#FFEB3B',
          800: '#FBBC04',
        },
      },
      boxShadow: {
        tooltip: '0 0 0 1px rgba(0,0,0,.05), 0 10px 60px rgba(0, 0, 0, 0.04)',
      },
      fontFamily: {
        sans: ['proxima-nova', ...defaultTheme.fontFamily.sans],
        numeric: ['effra', ...defaultTheme.fontFamily.sans],
        sansCondensed: ['proxima-nova-condensed', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: '0.65rem',
      },
      spacing: {
        13: '52px',
        18: '72px',
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        16: 'repeat(16, minmax(0, 1fr))',
      },
      maxWidth: {
        'xxs': '15rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/line-clamp')],
};
