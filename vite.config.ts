import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss()],
    define: {
      // Add env definitions here as needed.
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // Hot module reload can be disabled via DISABLE_HMR (useful in certain CI/agent environments).
      // Do not modify—file watching can cause flickering when used with automated editing tools.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
