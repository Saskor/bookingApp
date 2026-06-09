import { test, expect } from '@playwright/test';

test('debug: capture console errors on navigation', async ({ page }) => {
  const errors: string[] = [];
  const logs: string[] = [];

  page.on('console', (msg) => {
    const text = `[${msg.type()}] ${msg.text()}`;
    logs.push(text);
    if (msg.type() === 'error') errors.push(text);
  });

  page.on('pageerror', (err) => {
    errors.push(`[pageerror] ${err.message}`);
  });

  await page.goto('/');
  await expect(page.getByText('Мои услуги')).toBeVisible({ timeout: 5000 });

  // Click "Мои услуги"
  await page.getByText('Мои услуги').click();
  await page.waitForTimeout(2000);

  // Capture DOM content
  const bodyText = await page.locator('body').innerText();
  const html = await page.locator('#root').innerHTML();

  console.log('=== BODY TEXT ===');
  console.log(bodyText);
  console.log('=== HTML (first 3000 chars) ===');
  console.log(html.substring(0, 3000));
  console.log('=== CONSOLE ERRORS ===');
  console.log(errors.join('\n'));
  console.log('=== ALL LOGS ===');
  console.log(logs.join('\n'));

  // This will likely fail, but we want the output
  expect(errors.length, `Console errors found: ${errors.join('; ')}`).toBe(0);
});
