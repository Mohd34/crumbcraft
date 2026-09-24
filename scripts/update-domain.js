// Update canonical domain across all files to match live deployment
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const oldDomain = 'https://crumbcraft.pages.dev';
const newDomain = 'https://mohd34.github.io/crumbcraft';

function replaceInFile(filePath) {
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf8');
  if (content.includes(oldDomain)) {
    content = content.replaceAll(oldDomain, newDomain);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated: ${path.relative(root, filePath)}`);
  }
}

const files = [
  'index.html',
  'ddt-calculator.html',
  'starter-feeding-schedule.html',
  'fermentation-calculator.html',
  'flour-protein-calculator.html',
  'yeast-converter.html',
  'loaf-pan-calculator.html',
  'seo-dashboard.html',
  'sitemap.xml',
  'robots.txt',
  'SEO_CHALLENGE.md',
  'README.md',
  'guides/bakers-percentages-explained.html',
  'guides/desired-dough-temperature-guide.html',
  'guides/sourdough-hydration-crumb-guide.html',
  'legal/privacy.html',
  'legal/terms.html',
  'assets/js/seo-dashboard.js',
  'tests/site-audit.js'
];

files.forEach(f => replaceInFile(path.join(root, f)));
console.log('Domain alignment complete!');
