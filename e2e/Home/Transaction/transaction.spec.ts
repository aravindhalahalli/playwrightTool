import { expect, test } from "@playwright/test";

test.describe("Transaction", () => {
  test("Testing the transaction url", async ({ page }) => {
    await page.goto("/sunlandtrident/transaction");
    await expect(page).toHaveURL("/sunlandtrident/transaction");
  });

  test("Header-context", async ({ page }) => {
    const ZenbridgeLogo = await page.locator("img");
    const HeaderText = await page.$("text=Welcome Nesan!");
    const notificationImg = await page.locator(".notification");
    const logoutIcon = await page.locator(".logout");
    
    await ZenbridgeLogo?.isVisible();
    await HeaderText?.isVisible();
    await notificationImg?.isVisible();
    await logoutIcon?.isVisible();
  });

  test("Transaction-Search", async ({ page }) => {
    const Sender = await page.locator('[placeholder="Sender"]');
    const Receiver = await page.locator('[placeholder="Receiver"]');
    const InvoiceSelect = await page.locator(".ui dropdown selection");
    const Search = await page.locator(
      '[placeholder="Search PO\\#\\, Invoice\\# etc\\."]'
    );
    const Searchbutton = await page.locator("text=Search");
    const Refreshbutton = await page.locator("text=Refresh List");

    // Table data
    const table_ID = await page.locator('th:has-text("ID")');
    const table_Document_ID = await page.locator("text=Document ID");
    const table_Sender = await page.locator("text=Sender");
    const table_Receiver = await page.locator("text=Receiver");
    const table_document = await page.locator("text=Document");
    const table_edi_status = await page.locator("text=Edi Status");
    const table_Ack = await page.locator('th:has-text("Ack")');
    const table_conn_status = await page.locator("text=Connector Status");
    const table_dateTime = await page.locator("text=Date/Time");

    await Sender?.isVisible();
    await Receiver?.isVisible();
    await InvoiceSelect?.isVisible();
    await Search?.isVisible();
    await Searchbutton?.isVisible();
    await Refreshbutton?.isVisible();

    // table checking UI
    await table_ID?.isVisible();
    await table_Document_ID?.isVisible();
    await table_Sender?.isVisible();
    await table_Receiver?.isVisible();
    await table_document?.isVisible();
    await table_edi_status?.isVisible();
    await table_Ack?.isVisible();
    await table_conn_status?.isVisible();
    await table_dateTime?.isVisible();
  });
});
