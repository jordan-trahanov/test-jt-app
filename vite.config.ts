import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/test-jt-app/' : '/',
  plugins: [react()],
  // development
  server: {
    open: true,
  },
  // production
  build: {
    // esbuild target
    target: 'es2020',

    // chunk size
    chunkSizeWarningLimit: 1000,

    // output format
    rollupOptions: {
      output: {
        format: 'umd',
      },
    },
  },

  // in-browser template compilation
  resolve: {
    alias: {
      '@': '/src/',
    },
  },
}));
