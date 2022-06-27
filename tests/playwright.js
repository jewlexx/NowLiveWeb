const pw = require('playwright');

const browsers = ['firefox', 'webkit', 'chromium'];

browsers.forEach(async bw => {
  const browser = await pw[bw].launch();
  const page = await browser.newPage();
  await page.goto('http://whatsmyuseragent.org/');
  await page.screenshot({ path: `userAgent${bw}.png` });
  await page.goto('https://nowlive.jewelexx.com/');
  await page.screenshot({ path: `actualWebsite${bw}.png` });
  await browser.close();
});
