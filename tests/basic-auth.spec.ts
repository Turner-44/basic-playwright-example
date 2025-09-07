import { test } from "@playwright/test";
import { pageNames } from "../support/page-names";
import { HomePage } from "../pages/home";
import { SharedPage } from "../pages/shared";

test("Authenticate user", async ({ browser }) => {
  // Setting user credentials to by pass login pop up
  const context = await browser.newContext({
    httpCredentials: {
      username: "admin",
      password: "admin",
    },
  });

  const page = await context.newPage();

  const homePage = new HomePage(page);
  await homePage.navigateTo();

  const sharedPage = new SharedPage(page);
  await sharedPage.navigateTo(pageNames.basicAuth);
});

// test("Fail to authenticate user", async ({ page }) => {
//   await page.goto("/");
//   await page.getByRole("heading", { name: "Available Examples" }).isVisible();
//   await page.getByRole("link", { name: pageNames.basicAuth }).click();

//   await page.getByRole("heading", { name: pageNames.basicAuth }).isVisible();
// });
