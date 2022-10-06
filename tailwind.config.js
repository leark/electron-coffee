/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      darkbrown: {
        DEFAULT: '#562A0E',
      },
      brown: {
        DEFAULT: '#78380C',
      },
      orangebrown: {
        DEFAULT: '#C8691C',
      },
      darkbeige: {
        DEFAULT: '#D09259',
      },
      beige: {
        DEFAULT: '#E4CEAF',
      },
      blackbean: {
        DEFAULT: '#330E01',
      },
      bloodred: {
        DEFAULT: '#551501',
      },
      brownrust: {
        DEFAULT: '#9E3A07',
      },
      orangerust: {
        DEFAULT: '#B15320',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
  darkMode: 'class',
};
