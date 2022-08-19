import { Page } from "@playwright/test";

async function login(
  page: Page,
  username: string,
  password: string
): Promise<void> {
  // testing login auth
  await page.goto("https://platform.sandbox.zenbridge.io/");
  await page.locator('input[name="email"]').fill(username);
  await page.locator('input[name="password"]').fill(password);

  await Promise.all([
    // page.waitForNavigation(),
    page.locator("text=Login").click(),
  ]);
}

export default login;
