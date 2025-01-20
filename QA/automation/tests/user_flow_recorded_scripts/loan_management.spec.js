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
  await page.getByPlaceholder('Username').press('Tab');
  await page.getByPlaceholder('******************').fill('1234');
  await page.getByRole('button', { name: 'Sign In' }).click();
  await page.getByRole('link', { name: 'Loans' }).click();
  await page.getByRole('link', { name: 'Add Loan' }).click();
  await page.getByPlaceholder('Client ID').click();
  await page.getByPlaceholder('Client ID').fill('3');
  await page.getByLabel('Type of Loan:').selectOption('Salary Loan');
  await page.getByLabel('Type of Loan:').selectOption('Personal Loan');
  await page.locator('#status').selectOption('Pending');
  await page.getByPlaceholder('Gross Loan').click();
  await page.getByPlaceholder('Gross Loan').fill('35000');
  await page.getByPlaceholder('Balance').click();
  await page.getByPlaceholder('Balance').fill('7000');
  await page.getByPlaceholder('Amortization').click();
  await page.getByPlaceholder('Balance').click();
  await page.getByPlaceholder('Balance').fill('35000');
  await page.getByPlaceholder('Amortization').click();
  await page.getByPlaceholder('Amortization').fill('7000');
  await page.getByLabel('Terms:').selectOption('5');
  await page.getByPlaceholder('Maturity Date').fill('2025-05-18');
  await page.getByPlaceholder('Date Released').click();
  await page.getByPlaceholder('Date Released').press('ArrowRight');
  await page.getByPlaceholder('Date Released').click();
  await page.getByPlaceholder('Date Released').click();
  await page.getByRole('button', { name: 'Add New Loan' }).click();
  await page.getByPlaceholder('Date Released').press('ArrowRight');
  await page.getByPlaceholder('Date Released').press('ArrowRight');
  await page.getByPlaceholder('Date Released').press('ArrowRight');
  await page.getByPlaceholder('Date Released').press('ArrowRight');
  await page.getByPlaceholder('Date Released').press('ArrowRight');
  await page.getByPlaceholder('Date Released').fill('2025-01-18T00:46');
  await page.getByPlaceholder('Date Released').press('ArrowUp');
  await page.getByRole('button', { name: 'Add New Loan' }).click();
  await page.getByRole('row', { name: '7 Personal Loan ₱ 35000.00 ₱' }).getByRole('link').first().click();
  await page.getByLabel('Status:').selectOption('Approved');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('link', { name: '₱' }).click();
  await page.getByPlaceholder('Collection Date').fill('2025-01-18');
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('7000');
  await page.getByPlaceholder('Collected by').click();
  await page.getByPlaceholder('Collected by').fill('Jane');
  await page.locator('#method').selectOption('OTC');
  await page.locator('#method').selectOption('ATM');
  await page.getByRole('button', { name: 'Add Payment' }).click();
  await page.getByRole('row', { name: '7 Personal Loan ₱ 35000.00 ₱' }).getByRole('button').first().click();
  await page.getByRole('row', { name: '7 Personal Loan ₱ 35000.00 ₱' }).getByRole('button').first().click();
  await page.getByRole('row', { name: '7 Personal Loan ₱ 35000.00 ₱' }).getByRole('button').first().click();
  await page.getByRole('row', { name: '7 Personal Loan ₱ 35000.00 ₱' }).getByRole('button').first().click();
  await page.getByRole('row', { name: '7 ₱ 7000.00 Sat Jan 18 2025' }).getByRole('button').click();
  await page.getByRole('link', { name: '₱' }).click();
  await page.getByPlaceholder('Collection Date').fill('2025-01-18');
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('14000');
  await page.getByPlaceholder('Collected by').click();
  await page.getByPlaceholder('Collected by').fill('Jane');
  await page.locator('#method').selectOption('OTC');
  await page.locator('#method').selectOption('ATM');
  await page.getByRole('button', { name: 'Add Payment' }).click();
});