import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { gotoAndWaitForStablePage } from './helpers/reliability';

/**
 * Runs an axe accessibility scan and fails when critical issues are present,
 * or when serious issues exist excluding known color-contrast variance.
 * @param page Playwright page instance to analyze.
 * @param url Route to navigate to before scanning.
 * @returns A promise that resolves when assertions complete.
 */
async function expectNoSeriousA11yViolations(page: Page, url: string): Promise<void> {
    await gotoAndWaitForStablePage(page, url, { heading: { anyH1: true } });
    const results = await new AxeBuilder({ page }).analyze();

    const critical = results.violations.filter((violation) => violation.impact === 'critical');
    expect(critical).toEqual([]);

    const seriousExcludingContrast = results.violations.filter((violation) => violation.impact === 'serious' && violation.id !== 'color-contrast');
    expect(seriousExcludingContrast).toEqual([]);
}

test.describe('a11y + seo', () => {
    test('home has no serious/critical a11y violations', async ({ page }) => {
        await expectNoSeriousA11yViolations(page, '/');
    });

    test('home has baseline SEO metadata', async ({ page }) => {
        await gotoAndWaitForStablePage(page, '/', {
            heading: { level: 1, name: /scalable, production-ready web applications/i },
        });

        await expect(page).toHaveTitle(/Joseph Castle/);
        await expect(page.locator('meta[data-rh="true"][name="description"]')).toHaveAttribute('content', /full-stack software developer/i);
        await expect(page.locator('meta[data-rh="true"][property="og:title"]')).toHaveAttribute('content', /Joseph Castle/);
        await expect(page.locator('meta[data-rh="true"][property="og:description"]')).toHaveAttribute('content', /scalable/i);
        await expect(page.locator('meta[data-rh="true"][name="twitter:title"]')).toHaveAttribute('content', /Joseph Castle/);
        await expect(page.locator('meta[data-rh="true"][name="twitter:description"]')).toHaveAttribute('content', /full-stack/i);
        await expect(page.locator('meta[data-rh="true"][name="robots"]')).toHaveAttribute('content', 'index, follow');
    });

    test('404 has noindex metadata', async ({ page }) => {
        await gotoAndWaitForStablePage(page, '/404', { heading: { anyH1: true } });

        await expect(page).toHaveTitle(/Page not found - Joseph Castle/);
        await expect(page.locator('meta[data-rh="true"][name="description"]')).toHaveAttribute('content', /404 page not found/i);
        await expect(page.locator('meta[data-rh="true"][name="robots"]')).toHaveAttribute('content', 'noindex, follow');
    });
});