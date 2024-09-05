import { type Locator, type Page } from '@playwright/test';
import { BasePage } from './base-page';

export class DashboardPage extends BasePage {
  readonly header: Locator;

  constructor(page: Page) {
    super(page);
    this.header = page.locator('h3', { hasText: 'Dashboard' });
  }

  async goto() {
    await this.page.goto('/admin/dashboard');
  }
}