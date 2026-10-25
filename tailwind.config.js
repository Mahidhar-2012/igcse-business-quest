/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'] },
      colors: {
        ink: '#1f2937',
        brand: { DEFAULT: '#58cc02', dark: '#46a302', soft: '#e5f8cf' },
        sky: { quest: '#1cb0f6', questDark: '#1899d6' },
      },
    },
  },
  plugins: [],
};
