/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Nunito', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'] },
      colors: {
        ink: 'var(--ink)',
        brand: { DEFAULT: 'var(--brand)', dark: 'var(--brand-dark)', soft: 'var(--brand-soft)' },
        sky: { quest: 'var(--accent)', questDark: 'var(--accent-dark)' },
      },
    },
  },
  plugins: [],
};
