import { VitePWAOptions } from 'vite-plugin-pwa';
import colors from './theme.config.json' assert { type: 'json' };
const manifest: Partial<VitePWAOptions> = {
  manifest: {
    theme_color: colors.primary,
    background_color: colors.background,
    name: 'MIP Starting Point',
    short_name: 'MIP Starting Point',
    icons: [
      {
        src: 'src/public/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: 'src/public/icon-256x256.png',
        sizes: '256x256',
        type: 'image/png',
      },
      {
        src: 'src/public/icon-384x384.png',
        sizes: '384x384',
        type: 'image/png',
      },
      {
        src: 'src/public/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    description: 'Application',
  },
};

export default manifest;
