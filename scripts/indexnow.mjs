// Notify Bing (and other IndexNow engines such as Yandex) that pages changed, so they recrawl quickly.
// Run after a deploy is live:  npm run indexnow
// Optionally pass specific paths:  npm run indexnow -- /services /contact
//
// The key file public/<KEY>.txt must be deployed first — IndexNow fetches it to verify ownership.

const HOST = "www.fixerland.com";
const KEY = "ab589400e12e5d411c9a22756d9d3026";
const DEFAULT_PATHS = ["/", "/about", "/services", "/contact"];

const paths = process.argv.slice(2).length ? process.argv.slice(2) : DEFAULT_PATHS;
const urlList = paths.map((p) => `https://${HOST}${p.startsWith("/") ? p : `/${p}`}`);

async function main() {
  const keyUrl = `https://${HOST}/${KEY}.txt`;
  const keyCheck = await fetch(keyUrl);
  if (!keyCheck.ok || (await keyCheck.text()).trim() !== KEY) {
    console.error(`Key file not live at ${keyUrl} — deploy first, then run this again.`);
    return 1;
  }

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ host: HOST, key: KEY, keyLocation: keyUrl, urlList }),
  });

  // 200 = accepted, 202 = accepted (key validation pending). Anything else is an error.
  console.log(`IndexNow responded ${res.status} ${res.statusText}`);
  for (const url of urlList) console.log(`  submitted ${url}`);
  if (res.status !== 200 && res.status !== 202) {
    console.error(await res.text());
    return 1;
  }
  return 0;
}

// Set the exit code instead of calling process.exit(), which can crash Node on Windows mid-fetch.
process.exitCode = await main();
