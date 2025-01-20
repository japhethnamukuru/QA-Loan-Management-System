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

test("TC_EN_UI_001. Client Module Page header", async({page}) => {
    await page.goto('http://localhost:3000/home')
    await expect(page).toHaveURL('http://localhost:3000/home');   
    await page.getByRole('link', { name: 'Email' }).click();
    // await page.pause();  
    
    await expect(page.locator('h3').nth(1)).toHaveText('Send Email');
    await expect(page.locator('p').nth(1)).toHaveText('Update your client with their loan.');

    await expect(page.locator('h3').nth(2)).toHaveText("Clients Contact Info");
    await expect(page.locator('h3').nth(3)).toHaveText("Email Form");        
    
  });

test('TC_EN_UI_002. Client Email Contact Info.', async({page}) => {
    await page.goto('http://localhost:3000/home')
    await expect(page).toHaveURL('http://localhost:3000/home');   
    await page.getByRole('link', { name: 'Email' }).click();
    // await page.pause();

    await expect(page.getByRole('cell', { name: 'ID', exact: true })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Full Name' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Contact Number' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Address' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Email' })).toBeVisible();    
    await expect(page.getByRole('cell', { name: 'Action' })).toBeVisible();
})

test('TC_UI_003. Email form', async({page}) => {
    await page.goto('http://localhost:3000/home')
    await expect(page).toHaveURL('http://localhost:3000/home');   
    await page.getByRole('link', { name: 'Email' }).click();
    // await page.pause();

    await expect(page.getByText('Full Name:')).toBeVisible();
    await expect(page.getByPlaceholder('Choose a borrower')).toBeVisible();
  
    await expect(page.getByText('Email:')).toBeVisible();
    await expect(page.locator('input[name="email"]')).toBeVisible();
    
    await expect(page.getByText('Subject')).toBeVisible();
    await expect(page.getByLabel('Subject')).toBeVisible();
  
    await expect(page.getByText('Your message')).toBeVisible();
    await expect(page.getByPlaceholder('Write your message...')).toBeVisible();
    
    await expect(page.getByRole('button', { name: 'Send message' })).toBeVisible();    
});