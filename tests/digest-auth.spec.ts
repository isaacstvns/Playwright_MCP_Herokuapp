// spec: specs/next-five-links.plan.md
// seed: tests/seed.spec.ts

import { test as base, expect } from '@playwright/test';

const test = base.extend<{ contextWithAuth: typeof base['context'], contextWithInvalidAuth: typeof base['context'] }>({
  contextWithAuth: async ({ browser }, use) => {
    const context = await browser.newContext({
      httpCredentials: { username: 'admin', password: 'admin' }
    });
    await use(context);
    await context.close();
  },
  contextWithInvalidAuth: async ({ browser }, use) => {
    const context = await browser.newContext({
      httpCredentials: { username: 'invalid', password: 'invalid' }
    });
    await use(context);
    await context.close();
  },
});

test.describe('Digest Authentication', () => {
  test('Successful Digest Auth', async ({ contextWithAuth }) => {
    const page = await contextWithAuth.newPage();
    await page.goto('https://the-internet.herokuapp.com/digest_auth');
    await expect(page.locator('p')).toContainText('Congratulations! You must have the proper credentials.');
  });

  test('Failed Digest Auth', async ({ contextWithInvalidAuth }) => {
    const page = await contextWithInvalidAuth.newPage();
    await page.goto('https://the-internet.herokuapp.com/digest_auth');
    await expect(page.locator('body')).not.toContainText('Congratulations! You must have the proper credentials.');
  });
});
