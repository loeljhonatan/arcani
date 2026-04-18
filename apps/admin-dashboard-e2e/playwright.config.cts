const { defineConfig, devices } = require('@playwright/test');
const { nxE2EPreset } = require('@nx/playwright/preset');
const { workspaceRoot } = require('@nx/devkit');

/**
 * En .cts volvemos a tener acceso nativo a __filename y __dirname
 * sin necesidad de polyfills de import.meta.
 */

module.exports = defineConfig({
  ...nxE2EPreset(__filename, { testDir: './src' }),
  use: {
    baseURL: process.env['BASE_URL'] || 'http://localhost:4200',
    trace: 'on-first-retry',
  },
  webServer: {
    command: 'npx nx run admin-dashboard:serve',
    url: 'http://localhost:4200',
    reuseExistingServer: true,
    cwd: workspaceRoot,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
});
