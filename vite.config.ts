
import { defineConfig } from 'vite';

export default defineConfig({
  // The base path matches your GitHub repository name
  base: '/Event-planning/',
  build: {
    outDir: 'dist',
    target: 'esnext'
  },
  server: {
    port: 3000
  }
});