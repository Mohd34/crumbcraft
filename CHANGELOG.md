# Changelog

All notable changes to the CrumbCraft project are documented in this file.

---

## [1.0.0] - 2026-09-24

### Added
- **Micro-Niche Selection & Verification Gate:**
  - Evaluated 10 micro-niches; selected Artisan Sourdough & Baker's Math.
  - Verified live SERP landscape, low keyword difficulty, and lack of DR 90 dominance.
- **Mathematical Formula Audit & Unit Test Suite (`tests/formulas.test.js`):**
  - Formally proved and tested the 3-way hydration distinction (Recipe Hydration, Starter Hydration, Total True Hydration).
  - Derived thermodynamic ice water cooling formula based on latent heat of fusion ($L_f = 80 \text{ cal/g}$).
  - Tested reverse recipe scaling, Pearson square protein blending, and yeast equivalence ratios.
- **Interactive Calculator Suite:**
  - `index.html`: Sourdough Hydration Calculator & Baker's Percentage Engine.
  - `ddt-calculator.html`: Desired Dough Temperature & Strike Water Calculator with Ice Math.
  - `starter-feeding-schedule.html`: Sourdough Starter Feeding & Peak Timeline Planner.
  - `fermentation-calculator.html`: Bulk Fermentation Calculator & Temperature Chart.
  - `flour-protein-calculator.html`: Flour Protein Blending & Vital Wheat Gluten Fortifier.
  - `yeast-converter.html`: Commercial Yeast & Sourdough Discard Converter.
  - `loaf-pan-calculator.html`: Bread Pan Size to Dough Weight Scaler & Banneton Guide.
- **Educational Guides & Science Hub:**
  - `guides/bakers-percentages-explained.html`
  - `guides/desired-dough-temperature-guide.html`
  - `guides/sourdough-hydration-crumb-guide.html`
- **Technical SEO & Analytics Suite:**
  - Validated XML sitemap (`sitemap.xml`) covering all 13 production URLs.
  - Permissive `robots.txt` crawler configuration.
  - Comprehensive JSON-LD schema markup (`WebApplication`, `HowTo`, `FAQPage`, `BreadcrumbList`, `Article`).
  - Interactive SEO Dashboard (`seo-dashboard.html`) tracking live GSC metrics and A/B experiments.
  - Automated site and technical SEO audit script (`tests/site-audit.js`).
- **Offline / PWA Support:**
  - Service Worker (`sw.js`) and Web Manifest (`site.webmanifest`).
- **Deployment Pipeline:**
  - GitHub Actions workflow (`.github/workflows/deploy.yml`) for automated CI/CD and verification.
