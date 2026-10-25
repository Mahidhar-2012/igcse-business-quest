import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' makes the built site work from any URL path, e.g. https://<user>.github.io/<repo>/
export default defineConfig({ base: './', plugins: [react()] });
