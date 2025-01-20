// get started
const { test, expect } = require('@playwright/test');

test('TC_LMS_003. Welcome', async ({ page }) => {
  await page.goto('http://localhost:3000/');

  // check app title
  await expect(page).toHaveTitle('Loan Management System');
});

test('TC_LMS_004. Get Started', async ({ page }) => {
  await page.goto('http://localhost:3000/register');

  // Click the get started link.
  await page.getByRole('link', { name: 'Sign In' }).click();

  
  await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
});
