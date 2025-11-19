const { test, expect } = require("@playwright/test");
const { error } = require("console");

test("Validate Error Message", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.getByPlaceholder("username").type("Admin");
  await page.getByPlaceholder("password").type("admin12345");
  await page.locator("//button[normalize-space()='Login']").click();

  const errorMessage = await page
    .locator("//p[contains(@class,'oxd-alert-content')]")
    .textContent();

  expect(errorMessage.includes("Invalid")).toBeTruthy();
});
