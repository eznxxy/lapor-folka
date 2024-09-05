import { test, expect } from "./base";

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
});

test.describe('User login using invalid credential @pass', () => {
  test('Login using invalid email and password', async ({ loginPage }) => {
    await test.step('Fill login form then submit', async () => {
      await loginPage.login('user@folka.com', 'password');
    });

    await test.step('Assert error', async () => {
      await expect(loginPage.incorectLoginError).toBeVisible();
    });
  });

  test('Login using blank email', async ({ loginPage }) => {
    await test.step('Fill login form then submit', async () => {
      await loginPage.login('', 'password');
    });

    await test.step('Assert error', async () => {
      await expect(loginPage.blankEmailError).toBeVisible();
    });
  });

  test('Login using blank password', async ({ loginPage }) => {
    await test.step('Fill login form then submit', async () => {
      await loginPage.login('user@folka.com', '');
    });

    await test.step('Assert error', async () => {
      await expect(loginPage.blankPasswordError).toBeVisible();
    });
  });

  test('Login using invalid email format', async ({ loginPage }) => {
    await test.step('Fill login form then submit', async () => {
      await loginPage.login('user', 'password');
    });

    await test.step('Assert url & header', async () => {
      await expect(loginPage.page).not.toHaveURL(/.*dashboard/);
      await expect(loginPage.header).toBeVisible();
    });
  });
});

test.describe('User login using valid credential @pass', () => {
  test('Login using valid email and password', async ({ loginPage, dashboardPage }) => {
    await test.step('Fill login form then submit', async () => {
      await loginPage.login('admin@example.com', 'password');
    });

    await test.step('Assert url & header', async () => {
      await expect(dashboardPage.page).toHaveURL(/.*dashboard/);
      await expect(dashboardPage.header).toBeVisible();
    });
  });
});

test('User can login using invalid email format @fail', async ({ loginPage }) => {
  await test.step('Fill login form then submit', async () => {
    await loginPage.login('admin', 'password');
  });

  await test.step('Assert url & header', async () => {
    await expect(loginPage.page).toHaveURL(/.*dashboard/);
    await expect(loginPage.header).not.toBeVisible();
  });
});