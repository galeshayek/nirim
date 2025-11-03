import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router'],
          'i18n-vendor': ['i18next', 'react-i18next'],
        },
      },
    },
  },
  server: {
    host: '0.0.0.0',  // Listen on all network interfaces
    port: 5173,       // Default port, change if necessary
  },
})
