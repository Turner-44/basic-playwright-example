import { test, expect } from "@playwright/test";
import { pageNames } from "../support/page-names";

test("Toggle checkbox on and off", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("heading", { name: "Available Examples" }).isVisible();
  await page.getByRole("link", { name: pageNames.checkboxes }).click();

  await page.getByRole("heading", { name: pageNames.checkboxes }).isVisible();

  // Ensure there are only 2 checkboxes
  await expect(page.getByRole("checkbox")).toHaveCount(2);
  const checkbox1 = await page.getByRole("checkbox").first();
  const checkbox2 = await page.getByRole("checkbox").last();

  // Validate checkboxes on load
  await expect(checkbox1).toBeVisible();
  await expect(checkbox1).not.toBeChecked();

  await expect(checkbox2).toBeVisible();
  await expect(checkbox2).toBeChecked();

  // Select and validate checkbox selections
  await checkbox1.check();
  await expect(checkbox1).toBeChecked();

  await checkbox2.check();
  await expect(checkbox2).toBeChecked();

  // Deselect and validate checkbox selections
  await checkbox1.uncheck();
  await expect(checkbox1).not.toBeChecked();

  await checkbox2.uncheck();
  await expect(checkbox2).not.toBeChecked();
});
