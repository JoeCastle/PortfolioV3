import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './e2e',
    fullyParallel: false,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : 1,
    reporter: 'list',
    expect: {
        timeout: 10000,
    },
    use: {
        baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://127.0.0.1:3000',
        trace: 'on-first-retry',
        navigationTimeout: 30000,
    },
    webServer: {
        command: 'npm run build && npm run serve:build',
        url: 'http://127.0.0.1:3000',
        reuseExistingServer: true,
        timeout: 300000,
    },
    projects: [
        {
            name: 'chromium',
            use: { ...devices['Desktop Chrome'] },
        },
    ],
});