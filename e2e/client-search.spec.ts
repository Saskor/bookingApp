import { test, expect } from '@playwright/test';

test.describe('Client: Search Services', () => {
  test('navigate to search from client home', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Клиент').click();
    await expect(page.getByText('VK ID мастера')).toBeVisible({ timeout: 5000 });

    await page.getByRole('button', { name: 'Поиск услуг' }).click();
    await expect(page.getByText('Поиск услуг')).toBeVisible({ timeout: 3000 });
    await expect(page.getByPlaceholder('Название услуги...')).toBeVisible();
  });

  test('search for a service and see results', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Клиент').click();
    await expect(page.getByText('VK ID мастера')).toBeVisible({ timeout: 5000 });

    await page.getByRole('button', { name: 'Поиск услуг' }).click();
    await expect(page.getByPlaceholder('Название услуги...')).toBeVisible({ timeout: 3000 });

    await page.getByPlaceholder('Название услуги...').fill('Стрижка');
    await expect(page.getByText('Стрижка')).toBeVisible({ timeout: 3000 });
    await expect(page.getByText('Тестовый мастер').first()).toBeVisible();
  });

  test('click on search result navigates to services', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Клиент').click();
    await expect(page.getByText('VK ID мастера')).toBeVisible({ timeout: 5000 });

    await page.getByRole('button', { name: 'Поиск услуг' }).click();
    await expect(page.getByPlaceholder('Название услуги...')).toBeVisible({ timeout: 3000 });

    await page.getByPlaceholder('Название услуги...').fill('Стрижка');
    await expect(page.getByText('Стрижка')).toBeVisible({ timeout: 3000 });

    // Click on the search result
    await page.getByText('Стрижка').first().click();

    // Should navigate to the services/slots view of that owner
    await expect(page.getByText('Стрижка')).toBeVisible({ timeout: 5000 });
  });

  test('empty search result shows placeholder', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Клиент').click();
    await expect(page.getByText('VK ID мастера')).toBeVisible({ timeout: 5000 });

    await page.getByRole('button', { name: 'Поиск услуг' }).click();
    await expect(page.getByPlaceholder('Название услуги...')).toBeVisible({ timeout: 3000 });

    await page.getByPlaceholder('Название услуги...').fill('НесуществующаяУслуга12345');
    await expect(page.getByText('Ничего не найдено')).toBeVisible({ timeout: 5000 });
  });

  test('back button returns to client home', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Клиент').click();
    await expect(page.getByText('VK ID мастера')).toBeVisible({ timeout: 5000 });

    await page.getByRole('button', { name: 'Поиск услуг' }).click();
    await expect(page.getByText('Поиск услуг')).toBeVisible({ timeout: 3000 });

    await page.getByRole('button', { name: 'Назад' }).click();
    await expect(page.getByText('VK ID мастера')).toBeVisible({ timeout: 3000 });
  });
});
