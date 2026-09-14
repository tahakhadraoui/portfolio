import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const OUT = "shots";
mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();

const desktop = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
});
const page = await desktop.newPage();
await page.goto("http://localhost:3003", { waitUntil: "networkidle" });
await page.waitForTimeout(2200);

await page.screenshot({ path: `${OUT}/01-hero.png` });

const sections = ["services", "work", "stack", "certifications", "process", "about", "contact"];
for (const id of sections) {
  await page.evaluate((sel) => {
    document.querySelector(`#${sel}`)?.scrollIntoView({ block: "start", behavior: "instant" });
  }, id);
  await page.waitForTimeout(900);
  await page.screenshot({ path: `${OUT}/${id}.png` });
}

await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(600);

const mobile = await browser.newContext({
  viewport: { width: 390, height: 844 },
  deviceScaleFactor: 2,
  isMobile: true,
  hasTouch: true,
});
const mp = await mobile.newPage();
await mp.goto("http://localhost:3003", { waitUntil: "networkidle" });
await mp.waitForTimeout(1800);
await mp.screenshot({ path: `${OUT}/mobile-hero.png` });

await browser.close();
console.log("done");
