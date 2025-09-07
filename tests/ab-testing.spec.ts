import { test, expect } from "@playwright/test";
import { pageNames } from "../support/page-names";

const text = `Also known as split testing. This is a way in which businesses are able to simultaneously test and 
  learn different versions of a page to see which text and/or functionality works best towards a 
  desired outcome (e.g. a user action such as a click-through).`;

test("Assert text on page", async ({ page }) => {
  await page.goto("/");
  await page.getByRole("heading", { name: "Available Examples" }).isVisible();
  await page.getByRole("link", { name: pageNames.abTesting }).click();

  await page.getByRole("heading", { name: pageNames.abTesting }).isVisible();

  expect(page.getByRole("paragraph")).toHaveText(text);
});
