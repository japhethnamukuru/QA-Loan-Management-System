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

test("TC_CM_UI_001. Client Module Page load", async({page}) => {
    await page.goto('http://localhost:3000/home')
    await expect(page).toHaveURL('http://localhost:3000/home');   
    await page.getByRole('link', { name: 'Borrowers' }).click();     
  });

test('TC_CM_UI_002. Existing clients page header', async({page}) => {
    await page.goto('http://localhost:3000/home')
    //await page.pause();
    await page.getByRole('link', { name: 'Borrowers' }).click();     
    await expect(page.locator('h3').nth(1)).toHaveText('Borrowers');
    await expect(page.locator('h3').nth(2)).toHaveText("Borrowers\' List");
    await expect(page.locator('p').nth(1)).toHaveText('All clients registered');  
    await expect(page.locator('a').nth(6)).toHaveText('Add Borrower');
});

test('TC_CM_UI_003. Client table header', async({page}) => {
    await page.goto('http://localhost:3000/home')    
    await page.getByRole('link', { name: 'Borrowers' }).click();
    
    await expect(page.getByRole('cell', { name: 'ID' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Full Name' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Contact Number' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Address' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Email' })).toBeVisible();    
    await expect(page.getByRole('cell', { name: 'Action' })).toBeVisible();
    await page.getByRole('row', { name: '1 Elon Musk 444333 Boca Chica' }).getByRole('link').click();
});

test('TC_CM_UI_004. Add Borrowers Page', async({page}) => {
    await page.goto('http://localhost:3000/home')    
    await page.getByRole('link', { name: 'Borrowers' }).click();
    
    await page.getByRole('link', { name: 'Add Borrower' }).click();
    // await page.pause();
    await expect(page.locator('h3').nth(1)).toHaveText('Add New Borrower');
    await expect(page.locator('p').nth(1)).toHaveText('Register all the required fields.'); 

    await expect(page.getByText('First Name:')).toBeVisible();
    await expect(page.getByPlaceholder('First Name')).toBeVisible();

    await expect(page.getByText('Last Name:')).toBeVisible();
    await expect(page.getByPlaceholder('Last Name')).toBeVisible();

    await expect(page.getByText('Contact Number:')).toBeVisible();
    await expect(page.getByPlaceholder('Contact Number')).toBeVisible();

    await expect(page.getByText('Address:', { exact: true })).toBeVisible();
    await expect(page.getByPlaceholder('Address')).toBeVisible();

    await expect(page.getByText('Email Address:')).toBeVisible();
    await expect(page.getByPlaceholder('Email')).toBeVisible();

    await expect(page.getByText('Username:')).toBeVisible();
    await expect(page.getByPlaceholder('Username')).toBeVisible();
});

test('TC_CM_UI_005. Client Details Tab', async({page}) => {
    await page.goto('http://localhost:3000/home')    
    await page.getByRole('link', { name: 'Borrowers' }).click();
    await page.getByRole('row', { name: '1 Elon Musk 444333 Boca Chica' }).getByRole('link').click();
    // await page.pause();
    await expect(page.locator('h3').nth(1)).toHaveText('Borrower Info');
    await expect(page.locator('p').nth(1)).toHaveText("All client's information");

    await expect(page.getByText('Elon Musk')).toBeVisible();
    await expect(page.getByText('japhethnamukuru@gmail.com')).toBeVisible();
    await expect(page.getByText('444333')).toBeVisible();
    await expect(page.getByText('Boca Chica Texas')).toBeVisible();
    await expect(page.getByRole('button', { name: 'UPDATE CLIENT' })).toBeVisible();     

});

test('TC_CM_UI_006. Update Client', async({page}) => {
    await page.goto('http://localhost:3000/home')    
    await page.getByRole('link', { name: 'Borrowers' }).click();
    await page.getByRole('row', { name: '1 Elon Musk 444333 Boca Chica' }).getByRole('link').click();
    await page.getByRole('link', { name: 'UPDATE CLIENT' }).click();
    // await page.pause()

    await expect(page.locator('h3').nth(1)).toHaveText('Update Borrower #1');
    await expect(page.locator('p').nth(1)).toHaveText('Update all the required fields.');

    await expect(page.getByPlaceholder('First Name')).toBeVisible();
    await expect(page.getByPlaceholder('Last Name')).toBeVisible();
    await expect(page.getByPlaceholder('Contact Number')).toBeVisible();
    await expect(page.getByPlaceholder('Address')).toBeVisible();
    await expect(page.getByPlaceholder('Email')).toBeVisible();

    await expect(page.getByRole('button', { name: 'Update' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();
})

test('TC_CM_UI_007. Client loan details header Tab', async({page}) => {
    await page.goto('http://localhost:3000/home')    
    await page.getByRole('link', { name: 'Borrowers' }).click();
    await page.getByRole('row', { name: '1 Elon Musk 444333 Boca Chica' }).getByRole('link').click();
    
    await page.getByRole('link', { name: 'Add Loan' }).click();
    await expect(page.locator('h3').nth(1)).toHaveText('Add Loan for Client #1');
    await expect(page.locator('p').nth(1)).toHaveText('Fill all the required fields.');        

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

test('TC_CM_UI_OO8. Client Loan Details Tab', async({page}) => {
    await page.goto('http://localhost:3000/home')    
    await page.getByRole('link', { name: 'Borrowers' }).click();
    await page.getByRole('row', { name: '1 Elon Musk 444333 Boca Chica' }).getByRole('link').click();
    // await page.pause();
    
    await expect(page.locator('h3').nth(2)).toHaveText('Loan Transactions');

    await expect(page.getByRole('cell', { name: 'Voucher' }).first()).toBeVisible();  
    await expect(page.getByRole('cell', { name: 'Loan Type' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Outstanding Balance' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Gross Loan' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Amortization' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Terms' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Date Released' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Status' })).toBeVisible(); 
    await expect(page.getByRole('cell', { name: 'Actions' })).toBeVisible();
})

test('TC_CM_UI_009. Client payment history Tab', async({page}) => {
    await page.goto('http://localhost:3000/home')    
    await page.getByRole('link', { name: 'Borrowers' }).click();
    await page.getByRole('row', { name: '1 Elon Musk 444333 Boca Chica' }).getByRole('link').click(); 
    
    await expect(page.locator('h3').nth(3)).toHaveText('Payment History');

    await expect(page.getByRole('cell', { name: 'Voucher' }).nth(1)).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Amount' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Collection Date' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'New Balance' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Collected By:' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Method' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Delete' })).toBeVisible();    
})

test('TC_CM_UI_0010. Client Payment Page', async({page}) => {
    await page.goto('http://localhost:3000/home')    
    await page.getByRole('link', { name: 'Borrowers' }).click();
    await page.getByRole('row', { name: '1 Elon Musk 444333 Boca Chica' }).getByRole('link').click();
    // await page.pause();

    await page.getByRole('link', { name: '₱' }).first().click();

    await expect(page.locator('h3').nth(1)).toHaveText('Payment for Loan Voucher #1');
    await expect(page.locator('p').nth(1)).toHaveText('Add a payment for a client');

    await expect(page.locator('h3').nth(2)).toHaveText("Client's Loan");     

    await expect(page.getByRole('cell', { name: 'Voucher' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Gross Loan' })).toBeVisible();    
    await expect(page.getByRole('cell', { name: 'Outstanding Balance' })).toBeVisible();    
    await expect(page.getByRole('cell', { name: 'Amortization' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Terms' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Date Released' })).toBeVisible();
    await expect(page.getByRole('cell', { name: 'Status' })).toBeVisible(); 

    await expect(page.locator('h3').nth(3)).toHaveText('Loan Payment');

    await expect(page.getByText('Client ID:')).toBeVisible(); 
    await expect(page.locator('input[name = "client_id"]')).toBeVisible();

    await expect(page.getByText('Voucher:')).toBeVisible();
    //await expect(page.ggetByPlaceholder('Voucher #')).toBeVisible();

    await expect(page.getByText('Collection Date:')).toBeVisible();
    await expect(page.getByPlaceholder('Collection Date')).toBeVisible();

    await expect(page.getByText('Amount:')).toBeVisible();
    await expect(page.getByPlaceholder('Amount')).toBeVisible();

    await expect(page.getByText('Collected By:')).toBeVisible();
    await expect(page.getByPlaceholder('Collected by')).toBeVisible();

    await expect(page.getByText('New Balances:')).toBeVisible();
    await expect(page.locator('input[name="new_balance"]')).toBeVisible();

    await expect(page.getByText('Method:')).toBeVisible();
    await expect(page.locator('#method')).toBeVisible();

    await expect(page.getByRole('button', { name: 'Add Payment' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Back' })).toBeVisible();

    await page.getByRole('button', { name: 'Back' }).click();
})