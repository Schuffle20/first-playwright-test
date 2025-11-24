const { test, expect } = require("@playwright/test");

test("Select Values from Dropdown", async ({ page }) => {
  await page.goto("https://freelance-learn-automation.vercel.app/signup");

  /*
  Priorities are as follows:
  1. label
  2. value
  3. index
  
  */

  await page.locator("#state").selectOption({ label: "Goa" });
  await page.waitForTimeout(1000);

  await page.locator("#state").selectOption({ value: "Gujarat" });
  await page.waitForTimeout(1000);

  await page.locator("#state").selectOption({ index: 4 });
  await page.waitForTimeout(1000);

  /*
  const value = await page.locator("#state").textContent();
  console.log("Selected Value from Dropdown is: " + value);

  await expect(value.includes("Punjab")).toBeTruthy();
  */

  let state = await page.$("#state");

  let allElements = await state.$$("option");
  let ddStatus = false;

  for (let i = 0; i < allElements.length; i++) {
    let element = allElements[i];
    let value = await element.textContent();

    if (value.includes("Assam")) {
      ddStatus = true;
      break;
    }

    console.log("Dropdown Value at index " + i + " is: " + value);
  }

  await expect(ddStatus).toBeTruthy();

  //   Select Multiple Values

  await page.locator("#hobbies").selectOption(["Playing", "Swimming"]);
  await page.waitForTimeout(2000);
});
