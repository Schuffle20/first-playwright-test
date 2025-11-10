const { test, expect } = require("@playwright/test");

test("Verify Error Message", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  //   await page.getByPlaceholder("Username").type("Admin", { delay: 200 });
  await page.fill('input[placeholder="Username"]', "Admin");

  await page.getByPlaceholder("Password").type("wrongpassword");

  await page.locator("//button[normalize-space()='Login']").click();

  const errorMessage = await page
    .locator("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']")
    .textContent();

  console.log("Error Message is: " + errorMessage);

  expect(errorMessage.includes("Invalid credentials")).toBeTruthy();
});
