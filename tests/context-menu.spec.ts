// spec: specs/next-five-links.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Context Menu', () => {
  test('Right-Click Context Menu', async ({ page }) => {
    // 1. Navigate to https://the-internet.herokuapp.com/
    await page.goto('https://the-internet.herokuapp.com/');
    // 2. Click the 'Context Menu' link
    const contextMenuLink = page.getByRole('link', { name: 'Context Menu' });
    await contextMenuLink.click();
    // 3. Right-click on the hotspot area
    const hotspot = page.locator('#hot-spot');
    await hotspot.click({ button: 'right' });
    // 4. Validate that a context menu alert appears
    page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('You selected a context menu');
      await dialog.dismiss();
    });
    // Trigger the dialog
    await hotspot.click({ button: 'right' });
  });

  test('Dismiss Context Menu', async ({ page }) => {
    // 1. Navigate to Context Menu page
    await page.goto('https://the-internet.herokuapp.com/context_menu');
    // 2. Right-click to trigger and dismiss the alert
    const hotspot = page.locator('#hot-spot');
    page.once('dialog', async dialog => {
      await dialog.dismiss();
    });
    await hotspot.click({ button: 'right' });
    // 3. Validate that the page remains interactive
    await expect(hotspot).toBeVisible();
  });
});
