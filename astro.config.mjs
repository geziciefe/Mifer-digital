import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  site: 'https://miferdigital.com',
  output: 'static',
  integrations: [react()],
  prefetch: { defaultStrategy: 'hover', prefetchAll: false },
  trailingSlash: 'always',
  // Exclude the preserved, inactive React prototype from dev dependency scanning.
  vite: { optimizeDeps: { entries: ['src/pages/**/*.astro', '!src/mifer/**', '!src/**/*.tsx', '!src/**/*.jsx'] } }
});
