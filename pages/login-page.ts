import { expect, type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  readonly header: Locator;
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly incorectLoginError: Locator;
  readonly incorectPasswordError: Locator;
  readonly blankEmailError: Locator;
  readonly blankPasswordError: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.locator('h3', { hasText: 'Sign In - Technical Test' });
    this.emailInput = page.locator('input[name="email"]')
    this.passwordInput = page.locator('input[name="password"]');
    this.loginButton = page.getByRole('button', { name: 'Sign in' });
    this.incorectLoginError = page.getByText('Login Gagal! Akun tidak ada.');
    this.incorectPasswordError = page.getByText('Login Gagal! Kata sandi salah.');
    this.blankEmailError = page.getByText('Email harus diisi.', { exact: true });
    this.blankPasswordError = page.getByText('Kata Sandi harus diisi.', { exact: true });
  }

  async goto() {
    await this.page.goto('/');
    await expect(this.header).toBeVisible();
  }

  async login(login: string, password: string) {
    await this.emailInput.fill(login);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}