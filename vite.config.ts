import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgr from "vite-plugin-svgr";

export default defineConfig({
  base: process.env.BASE_URL ?? '/',
  plugins: [react(), svgr()],
  test: {
    coverage: {
      reporter: ['text', 'lcov'],
      reportsDirectory: './coverage',
    },
  },
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});
