import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const isProduction = mode === 'production';
  
  return {
    plugins: [react()],
    root: process.cwd(),
    base: isProduction ? './' : '/',
    publicDir: 'public',
    build: {
      outDir: 'dist',
      emptyOutDir: true,
      rollupOptions: {
        input: path.resolve(__dirname, 'index.html'),
        output: {
          entryFileNames: 'assets/[name].[hash].js',
          chunkFileNames: 'assets/[name].[hash].js',
          assetFileNames: 'assets/[name].[hash][extname]',
        },
      },
      sourcemap: !isProduction,
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    server: {
      port: 3000,
      open: true,
      strictPort: true,
    },
    preview: {
      port: 3000,
      open: true,
      strictPort: true,
    },
  };
});
