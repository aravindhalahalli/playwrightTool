import {
  test,
  expect,
  Browser,
  BrowserContext,
  Page,
  chromium,
} from "@playwright/test";

// Valid
const username = process.env.ZENBRIDGE_USERNAME ?? "";
const password = process.env.ZENBRIDGE_PASSWORD ?? "";

test.use({
  headless: true,
  launchOptions: { slowMo: 0 },
  storageState: undefined,
});

test.describe("Authentication/Entry Page Testing", () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;

  test.beforeAll(async () => {
    browser = await chromium.launch({
      headless: true,
    });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("/");
  });

  test("basic content check", async () => {
    const title = page.locator("text=Sign In to Zenbridge");
    await expect(title).toHaveText("Sign In to Zenbridge");
  });

  test("Valid Loign Credentials Check", async () => {
    await page.locator('input[name="email"]').click();
    await page.locator('input[name="email"]').fill(username);
    await page.locator('input[name="password"]').click();
    await page.locator('input[name="password"]').fill(password);
    await Promise.all([
      // page.waitForNavigation(),
      page.locator("text=Login").click(),
    ]);
    await page.goto("/sunlandtrident/");
    await expect(page).toHaveURL("/sunlandtrident/");
  });

  test.afterAll(async () => {
    await page.close();
    await context.close();
    await browser.close();
  });
});
