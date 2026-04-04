import { test, expect } from '@playwright/test';
import { gotoAndWaitForStablePage } from './helpers/reliability';

test.describe('smoke routes', () => {
    test('home renders key portfolio content', async ({ page }) => {
        await gotoAndWaitForStablePage(page, '/', {
            heading: { level: 1, name: /scalable, production-ready web applications/i },
        });

        await expect(page.getByRole('heading', { level: 2, name: 'About' })).toBeVisible();
        await expect(page.getByRole('heading', { level: 2, name: 'Projects' })).toBeVisible();
        await expect(page.getByRole('heading', { level: 2, name: 'Skills' })).toBeVisible();
        await expect(page.getByRole('heading', { level: 2, name: 'Blog' })).toBeVisible();
        await expect(page.getByRole('heading', { level: 2, name: 'Contact' })).toBeVisible();
    });

    test('unknown route redirects to 404 with return link', async ({ page }) => {
        await gotoAndWaitForStablePage(page, '/this-route-does-not-exist', { heading: { anyH1: true } });

        await expect(page).toHaveURL(/\/404$/);
        await expect(page.getByRole('heading', { level: 1, name: /could not be found/i })).toBeVisible();
        await expect(page.getByRole('link', { name: /here/i })).toHaveAttribute('href', '/');
    });
});