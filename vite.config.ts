import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // base: mode === 'production' ? '/test-project/dist/' : '/',
  // root: '',
  plugins: [react()],
  server: {
    // open browser on server start
    open: true,
  },

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

  // required for in-browser template compilation
  resolve: {
    alias: {
      '@': '/src/',
    },
  },
});
