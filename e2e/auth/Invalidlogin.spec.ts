import { test, expect } from "@playwright/test";

// Invalid
const usernameInvalid = process.env.ZENBRIDGE_USERNAME_INVALID ?? "";
const passwordInvalid = process.env.ZENBRIDGE_PASSWORD_INVALID ?? "";

test.use({
  headless: true,
  launchOptions: { slowMo: 0 },
  storageState: undefined,
});

test.describe("Authentication/Entry Page Testing", () => {
  test("Invalid Login", async ({ page }) => {
    await page.goto("/");
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill(usernameInvalid);
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill(passwordInvalid);
    await page.locator("text=Login").click();
    const errorText = await page.locator("text=Invalid Email/Password");
    await expect(errorText).toHaveText("Invalid Email/Password");
    await expect(page).toHaveURL("/");
    await Promise.all([
      // page.waitForNavigation(),
      page.locator("img").click(),
    ]);
    await expect(page).toHaveURL("https://zenbridge.io/");
  });
});
