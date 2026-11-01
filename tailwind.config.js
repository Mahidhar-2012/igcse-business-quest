/** @type {import('tailwindcss').Config} */
// Neutral greys come from CSS variables so every screen follows the light and dark themes (see src/index.css).
const slate = Object.fromEntries([50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((n) => [n, `var(--sl-${n})`]));

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Lexend', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'sans-serif'], display: ['Outfit', 'Lexend', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
      colors: {
        slate,
        ink: 'var(--ink)',
        brand: { DEFAULT: 'var(--brand)', dark: 'var(--brand-dark)', soft: 'var(--brand-soft)' },
        sky: { quest: 'var(--accent)', questDark: 'var(--accent-dark)' },
      },
    },
  },
  plugins: [],
};
