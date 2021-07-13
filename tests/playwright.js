const pw = require("playwright");

const browsers = ["firefox", "webkit", "chromium"];

(async () => {
  browsers.forEach(async (browser) => {
    const browser = await pw["browser"].launch();
    const page = await browser.newPage();
    await page.goto("http://whatsmyuseragent.org/");
    await page.screenshot({ path: `example.png` });
    await browser.close();
  });
})();
