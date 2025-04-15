import { defineConfig, loadEnv } from 'vite';
import solid from 'vite-plugin-solid';
import autoprefixer from 'autoprefixer';
import pmf from 'postcss-mobile-forever';
import path from 'path';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      solid(),
      legacy({
        targets: ['Android >= 8.0', 'iOS >= 12', 'last 1 version', '> 0.5%'],
        renderLegacyChunks: true,
      }),
    ],
    base: env.VITE_BASE_URL || '/',
    css: {
      postcss: {
        plugins: [
          autoprefixer({
            overrideBrowserslist: ['Android >= 8.0', 'iOS >= 12', 'last 1 version', '> 0.5%'],
            grid: true,
          }),
          pmf({
            appSelector: '#root',
            viewportWidth: 375,
            maxDisplayWidth: 600,
            disableDesktop: true,
          }),
        ],
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
        },
      },
    },
    server: {
      host: '0.0.0.0',
      port: 9000,
      proxy: {
        '/activity-api': {
          target: 'https://act.tmlyun.com',
          // target: 'https://preact.tmlyun.com',
          // target: 'https://testact.tmlyun.com',
          // target: 'http://10.182.16.72:8082',
          changeOrigin: true,
        },
      },
    },
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './'), // 根路径
        '@': path.resolve(__dirname, 'src'), // src 路径
      },
    },
  };
});
