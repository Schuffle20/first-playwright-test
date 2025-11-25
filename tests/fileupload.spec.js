const { test, expect } = require("@playwright/test");

test("Verify File Upload", async ({ page }) => {
  await page.goto("https://the-internet.herokuapp.com/upload");

  await page
    .locator("#file-upload")
    .setInputFiles(
      "/Users/alex/Desktop/Development/playwright/first-test/uploads/Screenshot 2025-11-22 at 2.46.51 PM.png"
    );

  await page.locator("#file-submit").click();

  await expect(page.locator("//h3")).toHaveText("File Uploaded!");
});
