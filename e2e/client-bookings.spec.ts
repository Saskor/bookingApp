import { test, expect } from '@playwright/test';

test.describe('Client: My Bookings', () => {
  test('navigate to my bookings page from client home', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Клиент').click();
    await expect(page.getByText('VK ID мастера')).toBeVisible({ timeout: 5000 });

    await page.getByRole('button', { name: 'Мои записи' }).click();
    await expect(page.getByText('Мои записи')).toBeVisible({ timeout: 3000 });
  });

  test('my bookings page shows existing bookings', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Клиент').click();
    await expect(page.getByText('VK ID мастера')).toBeVisible({ timeout: 5000 });

    await page.getByRole('button', { name: 'Мои записи' }).click();
    await expect(page.getByText('Мои записи')).toBeVisible({ timeout: 3000 });

    // Mock has 1 booking with status PENDING for client_vk_id=1
    await expect(page.getByText('Ожидают подтверждения')).toBeVisible({ timeout: 3000 });
    await expect(page.getByText('10:00 — 10:30')).toBeVisible();
  });

  test('booking flow: create booking then see it in my bookings', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Клиент').click();
    await expect(page.getByText('VK ID мастера')).toBeVisible({ timeout: 5000 });

    // Search for owner
    await page.getByPlaceholder('Введите VK ID мастера').fill('1');
    await page.getByRole('button', { name: 'Найти мастера' }).click();

    // Select a service
    await expect(page.getByText('Стрижка')).toBeVisible({ timeout: 3000 });
    await page.getByText('Стрижка').click();

    // Select an available slot
    await expect(page.getByText('09:00 — 09:30').first()).toBeVisible({ timeout: 3000 });
    await page.getByText('09:00 — 09:30').first().click();

    // Confirm booking
    await expect(page.getByRole('button', { name: 'Записаться' })).toBeVisible({ timeout: 3000 });
    await page.getByRole('button', { name: 'Записаться' }).click();

    // Should see success and "My bookings" button
    await expect(page.getByText('Запись создана')).toBeVisible({ timeout: 5000 });
    await expect(page.getByRole('button', { name: 'Мои записи' })).toBeVisible();

    // Navigate to my bookings
    await page.getByRole('button', { name: 'Мои записи' }).click();
    await expect(page.getByText('Мои записи')).toBeVisible({ timeout: 3000 });

    // Should see the booking we just created (PENDING)
    await expect(page.getByText('Ожидают подтверждения')).toBeVisible({ timeout: 3000 });
  });

  test('my bookings: back button returns to client home', async ({ page }) => {
    await page.goto('/');
    await page.getByText('Клиент').click();
    await expect(page.getByText('VK ID мастера')).toBeVisible({ timeout: 5000 });

    await page.getByRole('button', { name: 'Мои записи' }).click();
    await expect(page.getByText('Мои записи')).toBeVisible({ timeout: 3000 });

    // Click back
    await page.getByRole('button', { name: 'Назад' }).click();
    await expect(page.getByText('VK ID мастера')).toBeVisible({ timeout: 3000 });
  });
});
