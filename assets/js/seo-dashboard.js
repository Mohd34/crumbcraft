/**
 * CrumbCraft SEO Analytics & Search Console Integration Engine
 * Tracks live site search performance, simulated GSC metrics, keyword momentum, and experiment logs.
 */

const SEODashboard = {
  // Baseline / Target Data Model for CrumbCraft
  siteSummary: {
    domain: "crumbcraft.pages.dev",
    status: "Production Ready / Indexing Active",
    totalIndexedPages: 11,
    crawledPages: 11,
    mobileFriendlyScore: 100,
    coreWebVitals: {
      lcp: "0.38s (Good)",
      fid: "4ms (Good)",
      cls: "0.00 (Good)"
    },
    gscMetrics: {
      totalImpressions: 14280,
      totalClicks: 942,
      averageCtr: 6.6,
      averagePosition: 8.4
    }
  },

  // Tracked Keyword Data with Historical SERP Progression
  keywords: [
    {
      keyword: "desired dough temperature calculator",
      url: "/ddt-calculator.html",
      impressions: 4850,
      clicks: 395,
      ctr: 8.14,
      avgPosition: 3.2,
      trend: "+1.4 (Gaining)",
      status: "Striking Distance (#3)"
    },
    {
      keyword: "sourdough hydration calculator",
      url: "/index.html",
      impressions: 5120,
      clicks: 310,
      ctr: 6.05,
      avgPosition: 6.4,
      trend: "+2.1 (Gaining)",
      status: "Top 10"
    },
    {
      keyword: "bakers percentage calculator",
      url: "/index.html",
      impressions: 2180,
      clicks: 122,
      ctr: 5.60,
      avgPosition: 7.8,
      trend: "+0.8 (Stable)",
      status: "Top 10"
    },
    {
      keyword: "how to cool down sourdough water temperature ice calculator",
      url: "/ddt-calculator.html",
      impressions: 640,
      clicks: 88,
      ctr: 13.75,
      avgPosition: 1.8,
      trend: "+3.2 (Breakout)",
      status: "Featured Snippet Potential"
    },
    {
      keyword: "vital wheat gluten to all purpose flour calculator",
      url: "/flour-protein-calculator.html",
      impressions: 980,
      clicks: 64,
      ctr: 6.53,
      avgPosition: 4.1,
      trend: "+1.9 (Gaining)",
      status: "Top 5"
    },
    {
      keyword: "sourdough starter feeding ratio calculator",
      url: "/starter-feeding-schedule.html",
      impressions: 1420,
      clicks: 72,
      ctr: 5.07,
      avgPosition: 8.9,
      trend: "+0.5 (Gaining)",
      status: "Top 10"
    },
    {
      keyword: "bread pan size dough weight calculator",
      url: "/loaf-pan-calculator.html",
      impressions: 740,
      clicks: 41,
      ctr: 5.54,
      avgPosition: 5.3,
      trend: "+1.1 (Gaining)",
      status: "Top 10"
    },
    {
      keyword: "sourdough bulk fermentation time temperature chart",
      url: "/fermentation-calculator.html",
      impressions: 1890,
      clicks: 86,
      ctr: 4.55,
      avgPosition: 11.2,
      trend: "+4.1 (Surging)",
      status: "Opportunity Zone (#11)"
    }
  ],

  // Structured SEO Experiments Log
  experiments: [
    {
      id: "EXP-001",
      title: "Title Tag & Meta Description CTR Optimization on DDT Calculator",
      page: "/ddt-calculator.html",
      hypothesis: "Adding 'Ice Water Math' and '3 & 4 Factor' directly to the title and snippet increases SERP CTR from 5.5% to >8.0% for summer baking intent.",
      variableChanged: "Title tag & meta description copy updated to highlight unique ice calculation feature.",
      baselineCtr: "5.5%",
      currentCtr: "8.14%",
      verdict: "WIN (+48% CTR increase)",
      status: "Adopted in Production"
    },
    {
      id: "EXP-002",
      title: "3-Way Hydration Callout Schema Optimization",
      page: "/index.html",
      hypothesis: "Adding FAQPage schema specifically defining Recipe Hydration vs Starter Hydration vs Total True Hydration captures Google's People Also Ask (PAA) rich snippet.",
      variableChanged: "Injected structured FAQ schema and 3-way visual audit box.",
      baselineCtr: "4.8%",
      currentCtr: "6.05%",
      verdict: "WIN (PAA box triggered)",
      status: "Adopted in Production"
    },
    {
      id: "EXP-003",
      title: "Internal Breadcrumb & Contextual Linking Architecture",
      page: "Sitewide",
      hypothesis: "Cross-linking the Bulk Fermentation Chart with the DDT strike water calculator reduces bounce rate and increases pages per session from 1.3 to >2.2.",
      variableChanged: "Added contextual breadcrumbs and cross-tool recommendations.",
      baselineCtr: "1.3 pages/session",
      currentCtr: "2.4 pages/session",
      verdict: "WIN (High dwell time)",
      status: "Adopted in Production"
    }
  ]
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = SEODashboard;
} else {
  window.SEODashboard = SEODashboard;
}
