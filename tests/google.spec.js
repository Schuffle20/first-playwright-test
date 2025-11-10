const { test, expect } = require("@playwright/test");

test("Verify Application Title", async ({ page }) => {
  await page.goto("https://google.com");

  const url = await page.url();
  console.log("Current URL is: " + url);
  await expect(url).toBe("https://www.google.com/");

  const title = await page.title();
  console.log("Page title is: " + title);
  await expect(page).toHaveTitle("Google");
});
