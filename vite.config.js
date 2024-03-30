import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: 'public', // Specify the public directory for static assets
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Resolve the src directory
      '@assets': resolve(__dirname, 'src/assets'), // Resolve the assets directory
    },
  },
  plugins: [react()],
});
