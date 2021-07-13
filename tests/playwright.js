const pw = require("playwright");

const browsers = ["firefox", "webkit", "chromium"];

browsers.forEach(async (bw) => {
  const browser = await pw[bw].launch();
  const page = await browser.newPage();
  await page.goto("http://whatsmyuseragent.org/");
  await page.screenshot({ path: `example.png` });
  await browser.close();
});
