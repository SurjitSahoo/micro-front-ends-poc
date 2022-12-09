import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

const config: import('vite').UserConfig = {
  plugins: [
    react(),
    federation({
      name: 'mf_template',
      filename: 'remoteEntry.js',
      remotes: {
        app1: 'app1@http://localhost:3001/remoteEntry.js',
      },
      exposes: {},
    }),
  ],
  server: {
    port: 3000,
  },
};
export default defineConfig(config);
