import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    height: 961,
    width: 1920
  }
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('jane_doe');
  await page.getByPlaceholder('******************').click();
  await page.getByPlaceholder('******************').fill('1234');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Email' }).click();
  await page.getByRole('row', { name: '1 Elon Musk 444333 Boca Chica' }).getByRole('button').nth(1).click();
  await page.getByLabel('Subject').selectOption('Loan Denied');
  await page.getByLabel('Subject').selectOption('Loan Approval');
  await page.getByPlaceholder('Write your message...').click();
  await page.getByPlaceholder('Write your message...').fill('Greetings,\nYour loan has been approved');
  await page.getByRole('button', { name: 'Send message' }).click();
});