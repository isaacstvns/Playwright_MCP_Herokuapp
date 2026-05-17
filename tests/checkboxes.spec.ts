// spec: specs/next-five-links.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Checkboxes', () => {
  test('Toggle Checkboxes', async ({ page }) => {
    // 1. Navigate to https://the-internet.herokuapp.com/
    await page.goto('https://the-internet.herokuapp.com/');
    // 2. Click the 'Checkboxes' link
    const checkboxesLink = page.getByRole('link', { name: 'Checkboxes' });
    await checkboxesLink.click();
    // 3. Toggle each checkbox (check/uncheck)
    const checkboxes = page.locator('input[type="checkbox"]');
    const count = await checkboxes.count();
    for (let i = 0; i < count; i++) {
      // Toggle check
      await checkboxes.nth(i).check();
      await expect(checkboxes.nth(i)).toBeChecked();
      // Toggle uncheck
      await checkboxes.nth(i).uncheck();
      await expect(checkboxes.nth(i)).not.toBeChecked();
    }
  });
});
