import { test, expect } from '@playwright/test';


// ****** Uncomment alll the browser projects on playwright.config.js file ******//

test.describe('Login cross browser Tests', () => {
  let context;
  let page;

  test.beforeAll(async ({ browser }) => {
    //shared context
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto('http://localhost:3000/login');
  });

  test.afterAll(async () => {
    // Clean up
    await context.close();
  });

   //   tests
  //    page load
  test('TC_LMS_001. Page Load', async () => {
    await expect(page).toHaveURL('http://localhost:3000/login');
    await expect(page.getByRole('heading', { name: 'Welcome back' })).toBeVisible();
    await expect(page.getByText('Welcome back! Please enter')).toBeVisible();
  });

    //   username and password
  test('TC_LMS_002. Username and Password Fields', async () => {
    await expect(page.getByText('Username')).toBeVisible();
    await page.getByPlaceholder('Username').fill('jane_doe');
    await expect(page.getByText('Password')).toBeVisible();
    await page.getByPlaceholder('******************').fill('1234');

    // login button
    const loginButton = page.getByRole('button', { name: 'Sign In' });
    await expect(loginButton).toBeVisible();
    await loginButton.click();

    // Assert login successfull
    await expect(page).toHaveURL('http://localhost:3000/home');
    // await page.pause();


  });

// // login
//   test('Login Button Click', async () => {
//     const loginButton = page.getByRole('button', { name: 'Sign In' });
//     await expect(loginButton).toBeVisible();
//     await loginButton.click();

//     // login assertion
//     await expect(page).toHaveURL('http://localhost:3000/home');
//   });
});
