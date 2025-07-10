import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
    port: 5174, // changed to avoid conflict
  },
  plugins: [react()],
  base: '/Yunimall/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
