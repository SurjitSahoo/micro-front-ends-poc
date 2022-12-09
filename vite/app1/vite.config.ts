import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

const config: import('vite').UserConfig = {
  plugins: [
    react(),
    federation({
      name: 'app1',
      filename: 'remoteEntry.js',
      remotes: {},
      exposes: {
        './hello': './src/hello.tsx',
      },
    }),
  ],
  server: {
    port: 3001,
  },
};
export default defineConfig(config);
