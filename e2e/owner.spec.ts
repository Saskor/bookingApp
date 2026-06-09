import { test, expect } from '@playwright/test';

test.describe('Owner flow', () => {
  test('app loads and shows owner home with menu items', async ({ page }) => {
    await page.goto('/');
    // Should see the owner tab content (menu items) within a few seconds
    await expect(page.getByText('Мои услуги')).toBeVisible({ timeout: 5000 });
    await expect(page.getByText('Сгенерировать слоты')).toBeVisible();
    await expect(page.getByText('Расписание (дерево)')).toBeVisible();
  });

  test('navigate to service list', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Мои услуги').click();
    // Should see service list with mock data
    await expect(page.getByText('Услуги')).toBeVisible({ timeout: 3000 });
    await expect(page.getByText('Добавить услугу')).toBeVisible();
    await expect(page.getByText('Стрижка')).toBeVisible();
    await expect(page.getByText('Окрашивание')).toBeVisible();
  });

  test('create a new service', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Мои услуги').click();
    await expect(page.getByText('Добавить услугу')).toBeVisible({ timeout: 3000 });
    await page.getByText('Добавить услугу').click();

    // Should see the form
    await expect(page.getByText('Новая услуга')).toBeVisible({ timeout: 3000 });

    // Fill the form
    const nameInput = page.locator('input').first();
    await nameInput.fill('Маникюр');

    // Click create
    await page.getByRole('button', { name: 'Создать' }).click();

    // Should go back to service list and see new service
    await expect(page.getByText('Маникюр')).toBeVisible({ timeout: 3000 });
  });

  test('edit existing service', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Мои услуги').click();
    await expect(page.getByText('Стрижка')).toBeVisible({ timeout: 3000 });
    await page.getByText('Стрижка').click();

    // Should see edit form
    await expect(page.getByText('Редактировать')).toBeVisible({ timeout: 3000 });

    // Name input should be pre-filled
    const nameInput = page.locator('input').first();
    await expect(nameInput).toHaveValue('Стрижка');
  });

  test('navigate to schedule tree', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Расписание (дерево)').click();

    // Should see years
    await expect(page.getByText('Расписание')).toBeVisible({ timeout: 3000 });
    await expect(page.getByText('2026')).toBeVisible();
  });

  test('tree: drill down year -> month -> day -> slots', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Расписание (дерево)').click();
    await expect(page.getByText('2026')).toBeVisible({ timeout: 3000 });

    // Click year
    await page.getByText('2026').click();
    await expect(page.getByText('Март')).toBeVisible({ timeout: 3000 });

    // Click month
    await page.getByText('Март').click();
    // Should see days 10 and 11
    await expect(page.getByText('10 Март')).toBeVisible({ timeout: 3000 });

    // Click day
    await page.getByText('10 Март').click();
    // Should see slot times
    await expect(page.getByText('09:00')).toBeVisible({ timeout: 3000 });
  });

  test('slot generator page opens', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Сгенерировать слоты').click();
    await expect(page.getByText('Генерация слотов')).toBeVisible({ timeout: 3000 });
  });
});

test.describe('Client flow', () => {
  test('switch to client tab', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByText('Мои услуги')).toBeVisible({ timeout: 5000 });

    // Click client tab
    await page.getByText('Клиент').click();
    await expect(page.getByText('VK ID мастера')).toBeVisible({ timeout: 3000 });
  });

  test('search for owner and see services', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Клиент').click();
    await expect(page.getByText('VK ID мастера')).toBeVisible({ timeout: 3000 });

    // Enter owner VK ID
    await page.getByPlaceholder('Введите VK ID мастера').fill('1');
    await page.getByRole('button', { name: 'Найти мастера' }).click();

    // Should see active services (not inactive ones)
    await expect(page.getByText('Стрижка')).toBeVisible({ timeout: 3000 });
    await expect(page.getByText('Окрашивание')).toBeVisible();
  });
});
