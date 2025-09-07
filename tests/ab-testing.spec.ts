import { test, expect } from "@playwright/test";
import { pageNames } from "../support/page-names";
import { HomePage } from "../pages/home";
import { SharedPage } from "../pages/shared";

const text = `Also known as split testing. This is a way in which businesses are able to simultaneously test and 
  learn different versions of a page to see which text and/or functionality works best towards a 
  desired outcome (e.g. a user action such as a click-through).`;

test("Assert text on page", async ({ page }) => {
  const homePage = new HomePage(page);
  await homePage.navigateTo();

  const sharedPage = new SharedPage(page);
  await sharedPage.navigateTo(pageNames.abTesting, new RegExp("^A\/B Test"));

  // TODO: Find a way to toggle page that is displayed
  //await expect(page.getByRole("heading", { name: /^A\/B Test/ })).toBeVisible();

  await expect(page.getByRole("paragraph")).toHaveText(text);
});
