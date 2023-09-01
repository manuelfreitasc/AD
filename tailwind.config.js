/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: {
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FEFEFE',
          300: '#FDFDFD',
          400: '#FCFCFC',
          500: '#FBFBFB',
          600: '#E2E2E2',
          700: '#979797',
          800: '#717171',
          900: '#4B4B4B',
        },

        'cerulean-blue': {
          50: '#F6F6FC',
          100: '#ECEEF9',
          200: '#D1D4F0',
          300: '#B5B9E6',
          400: '#7D85D4',
          500: '#4551C1',
          600: '#3E49AE',
          700: '#293174',
          800: '#1F2457',
          900: '#15183A',
        },

        wistful: {
          50: '#FAFBFD',
          100: '#F5F6FB',
          200: '#E6E9F5',
          300: '#D7DBEF',
          400: '#B9C1E2',
          500: '#9BA6D6',
          600: '#8C95C1',
          700: '#5D6480',
          800: '#464B60',
          900: '#2F3240',
        },

        'moody-blue': {
          50: '#F9F8FC',
          100: '#F3F1FA',
          200: '#E0DBF1',
          300: '#CDC5E9',
          400: '#A89AD9',
          500: '#826EC8',
          600: '#7563B4',
          700: '#4E4278',
          800: '#3B325A',
          900: '#27213C',
        },
      },
    },
  },
  plugins: [],
}
