import pw, { chromium, firefox, webkit, devices } from 'playwright';

const devicearray = [devices['iPhone 6'], devices['iPhone 12 Pro']];

const browsers = [chromium, firefox, webkit];

// browsers.forEach(async bw => {
//   const browser = await bw.launch();
//   const ctx = await browser.newContext();
//   const page = await ctx.newPage();

//   await page.goto('nowlive.jamesinaxx.me');
//   await page.fill('name=Search', 'Test');
//   await page.screenshot({ path: './image.png' });
//   browser.close();
// });

async function test() {
  const browser = await chromium.launch();
  const ctx = await browser.newContext();
  const page = await ctx.newPage();

  await page.goto('nowlive.jamesinaxx.me');
  await page.fill('name=Search', 'Test');
  await page.screenshot({ path: './image.png' });
  browser.close();
}

test();
