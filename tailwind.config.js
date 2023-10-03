/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  important: '#jb',
  prefix: 'tw-',
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/container-queries')],
};
