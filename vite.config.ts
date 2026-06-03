import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';
import CONFIG from './gitprofile.config';
import { createHtmlPlugin } from 'vite-plugin-html';

// https://vitejs.dev/config/
export default defineConfig({
  base: CONFIG.base || '/',
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          metaTitle: CONFIG.seo.title,
          metaDescription: CONFIG.seo.description,
          metaImageURL: CONFIG.seo.imageURL,
        },
      },
    }),
    ...(CONFIG.enablePWA
      ? [
          VitePWA({
            registerType: 'autoUpdate',
            workbox: {
              navigateFallback: '/index.html',
              globPatterns: [
                '**/*.{js,css,html,ico,png,svg,jpg,jpeg,json,webmanifest}',
              ],
              runtimeCaching: [
                {
                  urlPattern: /^https:\/\/api\.github\.com\/.*/i,
                  handler: 'NetworkFirst',
                  options: {
                    cacheName: 'github-api-cache',
                    expiration: {
                      maxEntries: 50,
                      maxAgeSeconds: 60 * 60 * 24, // 24 hours
                    },
                  },
                },
              ],
            },
            includeAssets: ['logo.png'],
            manifest: {
              name: CONFIG.seo.title || 'Portfolio',
              short_name: CONFIG.seo.title || 'Portfolio',
              description: CONFIG.seo.description || 'Personal Portfolio',
              theme_color: CONFIG.themeConfig?.customTheme?.primary || '#fc055b',
              background_color: CONFIG.themeConfig?.customTheme?.['base-100'] || '#ffffff',
              display: 'standalone',
              start_url: '/',
              scope: '/',
              orientation: 'portrait',
              icons: [
                {
                  src: 'logo.png',
                  sizes: '64x64 32x32 24x24 16x16 192x192 512x512',
                  type: 'image/png',
                  purpose: 'any maskable',
                },
              ],
            },
          }),
        ]
      : []),
  ],
  define: {
    CONFIG: CONFIG,
  },
});
