 /// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({

  css: {
    postcss: {
      plugins: [autoprefixer]
    }
  },
  // Plugins
  plugins: [
    react()
  ]
})
