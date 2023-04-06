import { fileURLToPath } from 'node:url';
import { mergeConfig,defineConfig } from 'vite';
import viteConfig from './vite.config';
// eslint-disable-next-line import/no-unresolved
import { configDefaults } from 'vitest/config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'jsdom',
      exclude: [...configDefaults.exclude, 'e2e/*'],
      root: fileURLToPath(new URL('./', import.meta.url))
    }
  })
);
