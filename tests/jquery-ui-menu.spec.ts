import { test, expect } from "@playwright/test";
import { pageNames } from "../support/page-names";
import { HomePage } from "../pages/home";
import { SharedPage } from "../pages/shared";

test("Assert text on page", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateTo();

  const sharedPage = new SharedPage(page);
  await sharedPage.navigateTo(pageNames.jqueryUiMenus, 'JQueryUI - Menu');
});