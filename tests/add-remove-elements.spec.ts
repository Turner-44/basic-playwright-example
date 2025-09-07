import { test, expect } from "@playwright/test";
import { pageNames } from "../support/page-names";
import { HomePage } from "../pages/home";
import { SharedPage } from "../pages/shared";

test("Check user can add element", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateTo();

  const sharedPage = new SharedPage(page);
  await sharedPage.navigateTo(pageNames.addRemoveElements);

  await page.getByRole("button", { name: "Add Element" }).click();
  await expect(page.getByRole("button", { name: "Delete" })).toBeVisible();
});

test("Check user can remove element", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateTo();

  const sharedPage = new SharedPage(page);
  await sharedPage.navigateTo(pageNames.addRemoveElements);

  await page.getByRole("button", { name: "Add Element" }).click();
  await expect(page.getByRole("button", { name: "Delete" })).toBeVisible();

  await page.getByRole("button", { name: "Delete" }).click();
  await expect(page.getByRole("button", { name: "Delete" })).not.toBeVisible();
});
