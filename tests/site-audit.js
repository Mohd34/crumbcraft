// CrumbCraft Comprehensive Technical SEO & Structural Audit Script
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
console.log('=== RUNNING CRUMBCRAFT SITE & TECHNICAL SEO AUDIT ===\n');

let passCount = 0;
let failCount = 0;

function assertCheck(desc, condition) {
  if (condition) {
    console.log(`✓ PASS: ${desc}`);
    passCount++;
  } else {
    console.error(`✗ FAIL: ${desc}`);
    failCount++;
  }
}

// 1. Verify Sitemap matches actual HTML files
const sitemapPath = path.join(rootDir, 'sitemap.xml');
assertCheck('sitemap.xml exists', fs.existsSync(sitemapPath));

const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
const locMatches = [...sitemapContent.matchAll(/<loc>https:\/\/crumbcraft\.pages\.dev\/(.*?)<\/loc>/g)];
console.log(`\nFound ${locMatches.length} URLs in sitemap.xml:`);

locMatches.forEach(m => {
  let relativePath = m[1];
  if (relativePath === '') relativePath = 'index.html';
  const filePath = path.join(rootDir, relativePath);
  assertCheck(`Sitemap URL resolves to local file: ${relativePath}`, fs.existsSync(filePath));
});

// 2. Audit Core HTML Files for Technical SEO & Accessibility
const htmlFiles = [
  'index.html',
  'ddt-calculator.html',
  'starter-feeding-schedule.html',
  'fermentation-calculator.html',
  'flour-protein-calculator.html',
  'yeast-converter.html',
  'loaf-pan-calculator.html',
  'seo-dashboard.html',
  'guides/bakers-percentages-explained.html',
  'guides/desired-dough-temperature-guide.html',
  'guides/sourdough-hydration-crumb-guide.html'
];

console.log('\nAuditing HTML Pages for Title, Meta Description, Canonical, H1, Schema, Viewport:');

htmlFiles.forEach(file => {
  const fullPath = path.join(rootDir, file);
  if (!fs.existsSync(fullPath)) {
    assertCheck(`File exists: ${file}`, false);
    return;
  }

  const content = fs.readFileSync(fullPath, 'utf8');

  assertCheck(`[${file}] Has <title>`, /<title>.+<\/title>/i.test(content));
  assertCheck(`[${file}] Has <meta name="description"`, /<meta name="description" content=".+"/i.test(content));
  assertCheck(`[${file}] Has <link rel="canonical"`, /<link rel="canonical" href=".+"/i.test(content));
  assertCheck(`[${file}] Has responsive <meta name="viewport"`, /<meta name="viewport"/i.test(content));
  assertCheck(`[${file}] Has <h1> heading`, /<h1[^>]*>.+<\/h1>/i.test(content));
  assertCheck(`[${file}] Has JSON-LD structured data`, /<script type="application\/ld\+json">/i.test(content));
});

// 3. Verify Robots.txt points to sitemap
const robotsPath = path.join(rootDir, 'robots.txt');
assertCheck('robots.txt exists', fs.existsSync(robotsPath));
const robotsContent = fs.readFileSync(robotsPath, 'utf8');
assertCheck('robots.txt references sitemap.xml', robotsContent.includes('sitemap.xml'));

// 4. Verify PWA manifest & favicon
assertCheck('site.webmanifest exists', fs.existsSync(path.join(rootDir, 'site.webmanifest')));
assertCheck('favicon.svg exists', fs.existsSync(path.join(rootDir, 'assets/img/favicon.svg')));
assertCheck('style.css exists', fs.existsSync(path.join(rootDir, 'assets/css/style.css')));
assertCheck('calculators.js exists', fs.existsSync(path.join(rootDir, 'assets/js/calculators.js')));
assertCheck('app.js exists', fs.existsSync(path.join(rootDir, 'assets/js/app.js')));

console.log('\n======================================================');
console.log(`AUDIT COMPLETE: ${passCount} PASSED, ${failCount} FAILED`);
console.log('======================================================');

if (failCount > 0) {
  process.exit(1);
}
