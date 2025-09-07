import { expect, type Page } from "@playwright/test";
import { pageNames } from "../support/page-names";

export class SharedPage {
  readonly page: Page;
  readonly pageName: (typeof pageNames)[keyof typeof pageNames];

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(
    pageName: (typeof pageNames)[keyof typeof pageNames],
    alternativeHeaderText?: string | RegExp,
  ) {
    await this.page.getByRole("link", { name: pageName, exact: true }).click();
    const headerText = alternativeHeaderText ?? pageName;
    await expect(
      this.page.getByRole("heading", { name: headerText, exact: true }),
    ).toBeVisible();
  }
}
