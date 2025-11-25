const { test, expect } = require("@playwright/test");

test("Mouse Hover Action", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/login");

  // Hover over 'Main Item 2' to reveal its submenu
  await page.getByPlaceholder("Username").fill("admin@gmail.com");
  await page.waitForTimeout(1000);

  await page.getByPlaceholder("Password").fill("admin123");
  await page.waitForTimeout(1000);
  await page.getByRole("button", { name: "Sign in" }).click();
  await page.waitForTimeout(1000);

  await page.locator("text=Main Item 2").hover();
  await page.waitForTimeout(1000);

  await page.locator("text=SUB SUB LIST »").click();
});
