import { expect, type Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;
  readonly url: string;
  readonly pageName: string;

  constructor(page: Page) {
    this.page = page;
    this.url = "/";
    this.pageName = "Welcome to the-internet";
  }

  async navigateTo() {
    await this.page.goto(this.url);
    await expect(
      this.page.getByRole("heading", { name: this.pageName }),
    ).toBeVisible();
  }
}
