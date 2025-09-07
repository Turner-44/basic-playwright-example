import { test, expect } from "@playwright/test";
import { pageNames } from "../support/page-names";

test("Check user can add element", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("heading", { name: "Available Examples" }).isVisible();
  await page.getByRole("link", { name: pageNames.addRemoveElements }).click();

  await page.getByRole("heading", { name: pageNames.addRemoveElements }).isVisible();

  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible()

});


test("Check user can remove element", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("heading", { name: "Available Examples" }).isVisible();
  await page.getByRole("link", { name: pageNames.addRemoveElements }).click();

  await page.getByRole("heading", { name: pageNames.addRemoveElements }).isVisible();

  await page.getByRole('button', { name: 'Add Element' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).toBeVisible()

  await page.getByRole('button', { name: 'Delete' }).click();
  await expect(page.getByRole('button', { name: 'Delete' })).not.toBeVisible()

});
