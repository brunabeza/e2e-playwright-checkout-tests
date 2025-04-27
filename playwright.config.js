import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
      baseURL: 'https://www.saucedemo.com',
  },
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
  },
});
