import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  // Perform manual login
  await page.goto('http://localhost:3000/login');

  await page.getByPlaceholder('Username').fill('jane_doe');
  await page.getByPlaceholder('******************').fill('1234');
  
  const loginButton = await page.getByRole('button', { name: 'Sign In' });
  await loginButton.click();

  //await page.pause();

  // Verify successful login
  await expect(page).toHaveURL('http://localhost:3000/home');
});

test("TC_LM_UI_001. Loans Module Page load", async({page}) => {
  await page.goto('http://localhost:3000/home')
  //await page.pause();
  await page.getByRole('link', { name: 'Loans' }).click();  
})

test('TC_LM_UI_002. Existing loans page header', async({page}) => {
  await page.goto('http://localhost:3000/home')
  //await page.pause();
  await page.getByRole('link', { name: 'Loans' }).click(); 
  
  //loans page
  await expect(page.locator('h3').nth(1)).toHaveText('Loans Report');
  await expect(page.locator('h3').nth(2)).toHaveText('Loan Transactions');
  await expect(page.locator('p').nth(1)).toHaveText('Loans summary and informations.');  
  await expect(page.locator('a').nth(6)).toHaveText('Add Loan');  
})

test('TC_LM_UI_003. Add Loan to client page', async({page}) => {
  await page.goto('http://localhost:3000/home')

  await page.getByRole('link', { name: 'Loans' }).click();
  await page.getByRole('link', { name: 'Add Loan' }).click();
  
  await expect(page.locator('h3').nth(1)).toHaveText('Add New Loan');
  await expect(page.locator('p').nth(1)).toHaveText('Add a loan for a client'); 

  //add loan form
  await expect(page.getByText('Client ID:')).toBeVisible();
  await expect(page.getByPlaceholder('Client ID')).toBeVisible();

  await expect(page.getByText('Type of Loan:')).toBeVisible();
  await expect(page.getByLabel('Type of Loan:')).toBeVisible();

  await expect(page.getByText('Status:')).toBeVisible();
  await page.locator('#status');
  
  await expect(page.getByText('Gross Loan:')).toBeVisible();
  await expect(page.getByPlaceholder('Gross Loan')).toBeVisible();

  await expect(page.getByText('Balance:')).toBeVisible();
  await expect(page.getByPlaceholder('Balance')).toBeVisible();

  await expect(page.getByText('Amortization:')).toBeVisible();
  await expect(page.getByPlaceholder('Amortization')).toBeVisible();

  await expect(page.getByText('Terms:')).toBeVisible();
  await expect(page.getByLabel('Terms:')).toBeVisible();

  await expect(page.getByText('Date Released:')).toBeVisible();
  await expect(page.getByPlaceholder('Date Released')).toBeVisible();

  await expect(page.getByText('Maturity Date:')).toBeVisible();
  await expect(page.getByPlaceholder('Maturity Date')).toBeVisible();

  // await page.pause();
  await expect(page.getByRole('button', { name: 'Add New Loan' })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Cancel' })).toBeVisible();

})

test('TC_LM__UI_004. loans table header', async({page}) => {
  await page.goto('http://localhost:3000/home')
  
  await page.getByRole('link', { name: 'Loans' }).click();
  
  //loans table header
  const loan_table_header = await page.locator('thead');    
  // await page.pause();
  await expect(page.getByRole('cell', { name: 'Voucher' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Client Name' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Loan Type' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Outstanding Balance' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Gross Loan' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Amortization' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Terms' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Date Released' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Status' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Actions' })).toBeVisible();
  //await page.pause();

  // Delete button
  await page.getByRole('button').nth(2);

  //loan edit buttion
  await page.getByRole('row', { name: '1 Elon Musk Personal Loan ₱' }).getByRole('link').click();
  // await page.pause();
})

// loan view page
test('TC_LM_UI_005. existing header', async({page}) => {
  await page.goto('http://localhost:3000/home')

  //loans module
  await page.getByRole('link', { name: 'Loans' }).click();

  // view elon musk loan
  await page.getByRole('row', { name: '1 Elon Musk Personal Loan ₱' }).getByRole('link').click();  

  // Verify page header Info
  await expect(page.locator('h3').nth(1)).toHaveText('Update Loan Voucher # 1');
  await expect(page.locator('p').nth(1)).toHaveText('Edit and update your loan');  
  await expect(page.locator('h3').nth(2)).toHaveText('Loan Info');
  // await page.pause();

  //selected loan transaction header
  await expect(page.getByRole('cell', { name: 'Voucher' })).toBeVisible();  
  await expect(page.getByRole('cell', { name: 'Loan Type' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Outstanding Balance' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Gross Loan' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Amortization' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Terms' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Date Released' })).toBeVisible();
  await expect(page.getByRole('cell', { name: 'Status' })).toBeVisible(); 

})

test('TC_LM_006. Update loan form', async({page}) => {
  await page.goto('http://localhost:3000/home')

  await page.getByRole('link', { name: 'Loans' }).click();
  await page.getByRole('row', { name: '1 Elon Musk Personal Loan ₱' }).getByRole('link').click(); 
  
  await expect(page.locator('h3').nth(3)).toHaveText('Edit Form');  

  //add loan form
  // await page.pause();
  await expect(page.getByText('Loan Type:')).toBeVisible();
  await expect(page.getByLabel('Loan Type:')).toBeVisible();

  await expect(page.getByText('Status:')).toBeVisible();
  await page.locator('#status');
  
  await expect(page.getByText('Gross Loan:')).toBeVisible();
  await expect(page.getByPlaceholder('Gross Loan')).toBeVisible();

  await expect(page.getByText('Balance:')).toBeVisible();
  await expect(page.getByPlaceholder('Balance')).toBeVisible();

  await expect(page.getByText('Amortization:')).toBeVisible();
  await expect(page.getByPlaceholder('Monthly Amortization')).toBeVisible();

  await expect(page.getByText('Terms:')).toBeVisible();
  await expect(page.getByLabel('Terms:')).toBeVisible();

  await expect(page.getByText('Date Released:')).toBeVisible();
  await expect(page.getByPlaceholder('Date Released')).toBeVisible();

  await expect(page.getByText('Maturity Date:')).toBeVisible();
  await expect(page.getByPlaceholder('Maturity Date')).toBeVisible();

  // await page.pause();
  await expect(page.getByRole('button', { name: 'Update' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Back' })).toBeVisible();
})