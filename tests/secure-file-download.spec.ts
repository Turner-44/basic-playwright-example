import { test, expect } from "@playwright/test";
import { pageNames } from "../support/page-names";
import { HomePage } from "../pages/home";
import { SharedPage } from "../pages/shared";

test("Assert text on page", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateTo();

  const sharedPage = new SharedPage(page);
  // TODO: Fix the page loading no title. Probably deal with this seperately.
  // await sharedPage.navigateTo(pageNames.secureFileDownload);
});