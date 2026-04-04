import { expect } from '@playwright/test';
import type { Page } from '@playwright/test';

export interface StablePageOptions {
    loadState?: 'domcontentloaded' | 'load';
}

export interface NavigateStableOptions extends StablePageOptions {
    heading?: {
        name?: string | RegExp;
        level?: 1 | 2 | 3 | 4 | 5 | 6;
        anyH1?: boolean;
    };
}

/**
 * Shared stabilization to reduce timing flake.
 * @param page Playwright page instance to stabilize.
 * @param options Optional load state configuration.
 * @returns A promise that resolves when the page is in a stable state for assertions.
 */
export async function waitForPageToBeStable(page: Page, options: StablePageOptions = {}): Promise<void> {
    const { loadState = 'domcontentloaded' } = options;

    await page.waitForLoadState(loadState);
    await expect(page.locator('body')).toBeVisible();

    await page.evaluate(async () => {
        if ('fonts' in document) {
            await document.fonts.ready;
        }
    });
}

/**
 * Navigate + stabilize + optional heading readiness check.
 * @param page Playwright page instance.
 * @param url Route to navigate to.
 * @param options Stabilization and optional heading assertions.
 * @returns A promise that resolves when navigation and readiness checks are complete.
 */
export async function gotoAndWaitForStablePage(page: Page, url: string, options: NavigateStableOptions = {}): Promise<void> {
    const { heading, loadState = 'domcontentloaded' } = options;

    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await waitForPageToBeStable(page, { loadState });

    if (heading?.anyH1) {
        await expect(page.getByRole('heading', { level: 1 }).first()).toBeVisible();
    }

    if (heading?.name) {
        await expect(page.getByRole('heading', { level: heading.level ?? 1, name: heading.name })).toBeVisible();
    }
}