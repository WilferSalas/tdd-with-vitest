/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import react from 'vite-preset-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
