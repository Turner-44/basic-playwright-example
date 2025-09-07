import { test, expect } from "@playwright/test";

test("Toggle checkbox on and off", async ({ page }) => {
  await page.goto('/');
  await page.getByRole('heading', {name: 'Available Examples'}).isVisible();

  await page.getByRole('link', {name: 'Checkboxes'}).click();

  await expect(page).toHaveURL('/checkboxes');
  const checkbox1 = await page.getByRole('checkbox', {name: ' checkbox 1'});
  const checkbox2 = await page.getByRole('checkbox', {name: ' checkbox 2'});

  //await expect(checkbox1).toBeVisible();
  await expect(checkbox1).toBeChecked();

  await expect(checkbox2).toBeVisible();
  await expect(checkbox2).not.toBeChecked();


  await expect(page).toHaveURL('**/checkboxes')
});
