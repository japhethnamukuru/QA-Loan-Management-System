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
  await page.getByRole('link', { name: 'Borrowers' }).click();
  await page.getByRole('link', { name: 'Add Borrower' }).click();
  await page.getByPlaceholder('First Name').click();
  await page.getByPlaceholder('First Name').fill('John');
  await page.getByPlaceholder('First Name').press('Tab');
  await page.getByPlaceholder('Last Name').fill('Doe');
  await page.getByPlaceholder('Last Name').press('Tab');
  await page.getByPlaceholder('Contact Number').fill('0712345678');
  await page.getByPlaceholder('Contact Number').press('Tab');
  await page.getByPlaceholder('Address').fill('28 St. Pittursburg');
  await page.getByPlaceholder('Address').press('Tab');
  await page.getByPlaceholder('Email').fill('example@gmail.com');
  await page.getByPlaceholder('Email').press('Tab');
  await page.getByPlaceholder('Username').fill('john_doe');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.getByRole('row', { name: '8 John Doe 712345678 28 St.' }).getByRole('link').click();
  await page.getByRole('link', { name: 'UPDATE CLIENT' }).click();
  await page.getByPlaceholder('Contact Number').click();
  await page.getByPlaceholder('Contact Number').fill('712345671');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('link', { name: 'Add Loan' }).click();
  await page.getByLabel('Type of Loan:').selectOption('Salary Loan');
  await page.getByLabel('Type of Loan:').selectOption('Personal Loan');
  await page.getByPlaceholder('Gross Loan').click();
  await page.getByPlaceholder('Gross Loan').fill('20000');
  await page.getByPlaceholder('Balance').click();
  await page.getByPlaceholder('Balance').fill('20000');
  await page.getByPlaceholder('Amortization').click();
  await page.getByPlaceholder('Amortization').fill('5000');
  await page.getByLabel('Terms:').selectOption('4');
  await page.getByPlaceholder('Date Released').click();
  await page.getByPlaceholder('Date Released').press('ArrowRight');
  await page.getByPlaceholder('Date Released').fill('2025-01-18T12:45');
  await page.getByPlaceholder('Maturity Date').fill('2025-05-18');
  await page.getByRole('button', { name: 'Add New Loan' }).click();
  await page.getByRole('link', { name: '₱' }).click();
  await page.getByPlaceholder('Collection Date').fill('2025-01-18');
  await page.getByPlaceholder('Amount').click();
  await page.getByPlaceholder('Amount').fill('10000');
  await page.getByPlaceholder('Collected by').click();
  await page.getByPlaceholder('Collected by').fill('Jane');
  await page.locator('#method').selectOption('OTC');
  await page.locator('#method').selectOption('ATM');
  await page.getByRole('button', { name: 'Add Payment' }).click();
  await page.getByRole('link', { name: 'Payments' }).click();
  await page.getByRole('link', { name: 'Email' }).click();
  await page.getByRole('row', { name: '8 John Doe 712345671 28 St.' }).getByRole('button').first().click();
  await page.getByRole('link', { name: 'UPDATE CLIENT' }).click();
  await page.getByPlaceholder('Email').click();
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowLeft');
  await page.getByPlaceholder('Email').press('ArrowRight');
  await page.getByPlaceholder('Email').fill('japhethnamukuru@gmail.com');
  await page.getByRole('button', { name: 'Update' }).click();
  await page.getByRole('link', { name: 'Email' }).click();
  await page.getByRole('row', { name: '8 John Doe 712345671 28 St.' }).getByRole('button').nth(1).click();
  await page.getByLabel('Subject').selectOption('Loan Denied');
  await page.getByLabel('Subject').selectOption('Loan Approval');
  await page.getByPlaceholder('Write your message...').click();
  await page.getByPlaceholder('Write your message...').fill('Hello John,\nYour loan has been approved by Jane.');
  await page.getByRole('button', { name: 'Send message' }).click();
});