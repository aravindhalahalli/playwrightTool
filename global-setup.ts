import { chromium, FullConfig } from "@playwright/test";
import login from "./e2e/utils/login";

const username = process.env.ZENBRIDGE_USERNAME ?? "";
const password = process.env.ZENBRIDGE_PASSWORD ?? "";
console.log("use",username,password)
async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await login(page, username, password);
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: "storageState.json" });
  await browser.close();
}

export default globalSetup;
