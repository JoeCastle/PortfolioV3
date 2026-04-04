# Testing Guide

This project uses a layered testing strategy:

- Unit tests for utilities and focused logic
- Component tests for UI behavior
- End-to-end tests for user journeys, SEO, accessibility, theme behavior, and visual stability

## Testing Stack

- Jest (via react-scripts) for unit and component tests
- Testing Library for DOM-oriented assertions
- Cypress for component and end-to-end tests
- Playwright for browser e2e, accessibility/SEO checks, and visual regression snapshots

## Test Locations

- Jest tests: src/tests/**
- Cypress component tests: cypress/component/**
- Cypress e2e tests: cypress/e2e/**
- Playwright tests: e2e/**

## E2E Reliability Pattern

Playwright specs use shared stabilization helpers in e2e/helpers/reliability.ts.

- gotoAndWaitForStablePage(page, url, options):
  - Navigates to a route
  - Waits for a stable load state
  - Waits for body visibility and font readiness
  - Optionally asserts key heading presence before test assertions
- waitForPageToBeStable(page, options):
  - Reused when a test has already navigated and only needs stabilization

Use this pattern for new e2e tests to reduce flakiness in accessibility, SEO, and visual checks.

## Run Tests

Install dependencies:

```bash
npm install
```

Run Jest suite:

```bash
npm test
```

Run Cypress component tests:

```bash
npm run cypress-component
```

Run Cypress e2e tests:

```bash
npm run cypress-e2e
```

Run Playwright tests:

```bash
npm run playwright:test
```

Run Playwright headed mode:

```bash
npm run playwright:test:headed
```

Update Playwright visual snapshots when intentional UI changes are made:

```bash
npm run playwright:test:update-snapshots
```

If Playwright browsers are not installed yet:

```bash
npx playwright install chromium
```

## Recommended CI Order

1. npm test
2. npm run cypress-e2e
3. npm run playwright:test

This gives fast feedback from Jest first, then validates full-browser behavior in both e2e suites.

## What Is Covered

- Core UI and component behavior in unit/component tests
- Route-level and section-level user journeys in Cypress e2e
- Metadata and SEO assertions
- Theme toggle and persistence behavior
- Responsive viewport behavior
- Accessibility scans in Playwright
- Visual regression snapshots for key regions in Playwright

## Authoring Good Tests

- Prefer user-observable outcomes over implementation details.
- Test failure paths, not just happy paths.
- Keep mocks narrow and realistic.
- Make each test name describe behavior and expected outcome.
- Avoid placeholder assertions (for example, expect(true).toBe(true)).
- Keep visual snapshots intentional and review diffs before accepting updates.

## Employer-Facing Testing Story

When presenting this project, describe your testing design as:

- Layered: unit + component + e2e with two complementary browser runners
- Behavior-first: assertions target user-visible and system-relevant outcomes
- Defensive: metadata, edge conditions, and non-happy paths are explicitly tested
- Practical: fast local feedback from Jest, broad browser confidence from Cypress and Playwright
