// Light, dark or follow-the-system theme, stored on this device only.
const KEY = 'iq:theme';

export const getTheme = () => {
  try { return localStorage.getItem(KEY) || 'system'; } catch { return 'system'; }
};

const isDark = (t) => t === 'dark' || (t === 'system' && window.matchMedia?.('(prefers-color-scheme: dark)').matches);

export function applyTheme(t = getTheme()) {
  const dark = isDark(t);
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#17120e' : '#e8590c');
}

export function setTheme(t) {
  try { localStorage.setItem(KEY, t); } catch { /* private mode: the theme just will not persist */ }
  applyTheme(t);
  window.dispatchEvent(new Event('iq-theme'));
}