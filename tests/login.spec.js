const { test, expect } = require("@playwright/test");

test.use({ viewport: { width: 1538, height: 1000 } });

test("Validate Login", async ({ page }) => {
  console.log(await page.viewportSize().width);
  console.log(await page.viewportSize().height);

  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );

  await page.getByPlaceholder("Username").type("Admin", { delay: 100 });
  //   await page.getByPlaceholder("用户名").type("Admin");

  await page.locator("input[name='password']").type("admin123", { delay: 100 });
  //   await page.locator("input[name='密码']").type("admin123");

  await page.locator("//button[@type='submit']").click();

  //   await page.waitForTimeout(5000);

  await expect(page).toHaveURL(/dashboard/);

  await page.getByAltText("profile picture").first().click();

  //   await page.locator("img.oxd-userdropdown-img").click();

  await page.getByText("Logout").click();

  //   await page.waitForTimeout(3000);

  await expect(page).toHaveURL(/login/);
});
