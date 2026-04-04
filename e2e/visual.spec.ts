import { test, expect } from '@playwright/test';
import { gotoAndWaitForStablePage } from './helpers/reliability';

test.describe('visual regression', () => {
    test('home landing section is stable', async ({ page }) => {
        await gotoAndWaitForStablePage(page, '/', {
            loadState: 'load',
            heading: { anyH1: true },
        });

        const landing = page.locator('.section.landing').first();
        await expect(landing).toBeVisible();
        await expect(landing).toHaveScreenshot('home-landing.png');
    });

    test('projects summary section is stable', async ({ page }) => {
        await gotoAndWaitForStablePage(page, '/', {
            loadState: 'load',
            heading: { anyH1: true },
        });

        const projects = page.locator('.projects-section').first();
        await expect(projects).toBeVisible();
        await expect(projects).toHaveScreenshot('home-projects-summary.png');
    });
});