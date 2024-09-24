import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path'


export default defineConfig({
  base: process.env.BASE_URL ?? '/',
  plugins: [react()],
  test: {
    coverage: {
      reporter: ['text', 'lcov'], 
      reportsDirectory: './coverage',
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
});
