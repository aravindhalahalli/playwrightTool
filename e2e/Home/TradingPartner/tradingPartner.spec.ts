import { expect, test } from "@playwright/test";

test.describe("TradingPartner", () => {
  test("Testing the transaction url", async ({ page }) => {
    await page.goto("/sunlandtrident/trading-partner");
    await expect(page).toHaveURL("/sunlandtrident/trading-partner");
  });

  test("test the table data", async ({ page }) => {
    const table_Connection = await page.locator("text=Connection");
    const table_Connection_Name = await page.locator("text=Connection Name");
    const table_Type = await page.locator("text=Type");
    const table_My_Profile = await page.locator("text=My Profile");
    const table_My_AS2_Identifier = await page.locator(
      "text=My AS2 Identifier"
    );
    const table_Partner_AS2_Identifier = await page.locator(
      "text=Partner AS2 Identifier"
    );

    await table_Connection_Name?.isVisible();
    await table_Connection?.isVisible();
    await table_Type?.isVisible();
    await table_My_Profile?.isVisible();
    await table_Partner_AS2_Identifier?.isVisible();
  });

  // test("Redirectiing to partner page", async ({ page }) => {
  //   await page.locator('td').first().click();
  //   await expect(page).toHaveURL('https://platform.sandbox.zenbridge.io/sunlandtrident/trading-partner/detail');
  

  //   await page.locator('text=Summary').click();
  //   const partnerName = await page.locator("text=Name: Sunland");
  //   const clientName = await page.locator("text=Partner Name: Trident");
  //   await expect(partnerName).toHaveText("Name: Sunland");
  //   await expect(clientName).toHaveText("Partner Name: Trident");
  //   // (//td[text()='Trident ⇌ Sunland'])[1]

  //   await page.locator("text=Local Profile").click();
  //   const Name = await page.locator("text=Name: Sunland");
  //   const idenName = await page.locator("text=AS2 Identifier: sunlandtrident");
  //   await expect(Name).toHaveText("Name: Sunland");
  //   await expect(idenName).toHaveText("AS2 Identifier: sunlandtrident");
  // });
});
