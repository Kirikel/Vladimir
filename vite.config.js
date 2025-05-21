import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: './',
  plugins: [react()],
  server: {
    port: 1338, // Измените на другой порт, например, 5174
    open: true,
  },
});