import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Perform manual login
  await page.goto('http://localhost:3000/login');

  await page.getByPlaceholder('Username').fill('jane_doe');
  await page.getByPlaceholder('******************').fill('1234');
  
  const loginButton = await page.getByRole('button', { name: 'Sign In' });
  await loginButton.click();

  // Verify successful login
  await expect(page).toHaveURL('http://localhost:3000/home');
});

test("TC_PM_UI_001. Payment Module Page load", async({page}) => {
    await page.goto('http://localhost:3000/home')
    await expect(page).toHaveURL('http://localhost:3000/home');   
    await page.getByRole('link', { name: 'Payments' }).click();
    
  });

test('TC_PM_UI_002. Existing payments Header', async({page}) => {
    await page.goto('http://localhost:3000/home')
    await expect(page).toHaveURL('http://localhost:3000/home');   
    await page.getByRole('link', { name: 'Payments' }).click();
    
    await expect(page.locator('h3').nth(1)).toHaveText('Payments Report');
    await expect(page.locator('p').nth(1)).toHaveText('Summary of Collections and information.');

    await expect(page.locator('h3').nth(2)).toHaveText("Payment Transactions");      
    await expect(page.locator('a').nth(6)).toHaveText('Add Payment');
})

test('TC_PM_UI_003. Payments Information', async({page}) => {
    await page.goto('http://localhost:3000/home')
    await expect(page).toHaveURL('http://localhost:3000/home');   
    await page.getByRole('link', { name: 'Payments' }).click();
    //await page.pause();

    await expect(page.getByRole('cell', { name: 'ID', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Client Name' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Voucher ID' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Amount' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Collection Date' })).toBeVisible();    
    await expect(page.getByRole('cell', { name: 'Collected By:' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'New Balance' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Method' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Delete' })).toBeVisible(); 
})