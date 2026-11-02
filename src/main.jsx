import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import './theme-dark.css';
import { applyTheme } from './lib/theme.js';

import { initCloud } from './lib/cloud.js';

applyTheme();

// Signed-in visitors pull their saved progress first (waits at most a few seconds); everyone else renders at once.
initCloud()
  .catch(() => { /* offline or misconfigured: carry on with this browser's progress */ })
  .finally(() =>
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    ));