// playwright.config.js
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  reporter: [['html', { open: 'on-failure' }]], 
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10000,
    baseURL: process.env.TEST_BASE_URL || 'https://www.saucedemo.com',
  },
})
