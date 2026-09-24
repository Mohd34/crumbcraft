# 🍞 CrumbCraft Distribution Plan & Channel Playbook

## 1. Day-0 Distribution Baseline (Recorded: September 24, 2026)

All metrics start at honest, verifiable zero:

| Metric | Day-0 Baseline Value | Verification Source |
| :--- | :--- | :--- |
| **Unique Visitors** | `0` | GitHub Pages HTTP access logs |
| **Page Views** | `0` | Live web logs |
| **Tool Interactions** | `0` | Client hydration / DDT calculation events |
| **Returning Users** | `0` | Returning client state |
| **Referral Sources** | `0` | HTTP Referer headers |
| **Organic Search Impressions** | `0 (Pre-Index)` | Google Search Console |
| **Organic Clicks** | `0 (Pre-Index)` | Google Search Console |
| **Ranking Queries** | `None (Pre-Index)` | Google Search Console |
| **External Referrals** | `0` | Reddit / forum inbound tracking |
| **GitHub Stars** | `0` | `Mohd34/crumbcraft` |

---

## 2. 10 Legitimate Distribution Channels for Sourdough Bakers

| # | Channel & Platform | Target User Persona | Discussion Velocity & Topics | Value-First Discovery Angle |
|---|---|---|---|---|
| 1 | **`r/Sourdough`** (Reddit - 600k+ members) | Novice & intermediate sourdough home bakers | Extremely high: 40+ posts/day on gummy crumb, overproofing, starter feeding | Responding to *"Why is my crumb dense?"* with DDT temp adjustments and true hydration math. |
| 2 | **`r/Breadit`** (Reddit - 1.1M members) | Artisan bread enthusiasts, pizza bakers | High: 50+ posts/day sharing crumb shots and loaf pan sizing | Providing exact baker's percentage splits for whole grain substitutions. |
| 3 | **The Fresh Loaf** (`thefreshloaf.com`) | Veteran artisan bakers, micro-bakeries | Moderate: Authoritative technical threads on flour ash, enzyme activity, DDT | Contributing precise DDT water temperature equations in technical recipe threads. |
| 4 | **Breadtopia Community** (`forum.breadtopia.com`) | Heritage grain, clay baker, sourdough enthusiasts | Moderate: Whole grain hydration and long fermentation questions | Helping users calculate hydration increases when mixing spelt, einkorn, and rye. |
| 5 | **Sourdough Baker Forum** (`sourdough.com`) | International artisan bakers (UK, EU, Australia) | Moderate: Levain inoculation rates and ambient room variations | Answering questions on summer bulk ferment speedups vs winter slows. |
| 6 | **Sourdough Geeks** (Facebook - 400k+ members) | Cottage bakers, weekend sourdough enthusiasts | High: High volume of starter feeding and starter ratio queries | Sharing the 1:1:1 vs 1:2:2 vs 1:5:5 levain inoculation timing charts. |
| 7 | **King Arthur Baking Community** (Discussions) | Precision home bakers | Moderate: Flour protein discrepancies and absorption ceilings | Explaining how 11.7% AP requires 4% less water than 12.7% bread flour. |
| 8 | **YouTube Artisan Baking Comment Threads** (ChainBaker, Bake with Jack, Full Proof Baking) | Video-first learners confused by hydration | High: High comment density on "my dough is too sticky" | Clarifying the difference between nominal hydration and true hydration (levain split). |
| 9 | **Instagram Sourdough Community** (`#sourdoughbakers`, `#bakerspercentage`) | Visual bakers, recipe sharers | High: Aesthetic recipe cards and ear/crumb scoring | Sharing clean printable bake sheets with full percentage transparency. |
| 10 | **Cottage Bakery Discord & Micro-Baker Networks** | Small commercial bakers | Low-moderate: High retention: Scaling 1 loaf to 20 loaves | Providing baker's percentage batch scaling formulas and pan volume calculators. |

---

## 3. Standalone Distribution Assets

### Asset A: The Artisan Sourdough Bake Sheet
- **File:** [`assets/templates/sourdough-bake-sheet.md`](assets/templates/sourdough-bake-sheet.md)
- **Purpose:** A printable or downloadable markdown log for bakers to track true hydration, levain split, DDT water temp, stretch-and-folds, and sensory crumb evaluation.

### Asset B: Baker's Math & Hydration Cheat Sheet
- **File:** [`assets/templates/bakers-math-cheat-sheet.md`](assets/templates/bakers-math-cheat-sheet.md)
- **Purpose:** Standalone reference sheet detailing total flour 100% rule, true hydration formulas, and flour absorption limits.

### Asset C: GitHub README Badge
```markdown
[![CrumbCraft Tested](https://img.shields.io/badge/Hydration-75%25%20CrumbCraft-amber.svg)](https://mohd34.github.io/crumbcraft/)
```

---

## 4. Value-First Community Participation Rule

When interacting in communities:
1. **Never post unsolicited promotional spam** (e.g. *"Hey check out my cool calculator!"*).
2. **Always answer the user's specific problem first** with full mathematical and baking reasoning in the comment itself:
   > *"If your dough is slumping at 75% hydration with standard grocery store all-purpose flour (10.5% protein), it's over-saturated. Standard AP flour caps around 66–68% water absorption. If you add 100g of 100% hydration starter, your true hydration is actually higher than you think. You can either swap in bread flour (12.7% protein) or drop recipe water by 35g to bring true hydration to 67%. If you want to check your exact flour blend absorption, CrumbCraft has a free flour protein calculator: https://mohd34.github.io/crumbcraft/flour-protein-calculator.html"*

---

## 5. Sharing Loop & Funnel Equations

$$\text{Share Rate} = \frac{\text{Shared Results}}{\text{Completed Tool Sessions}}$$

$$\text{Referral Conversion} = \frac{\text{Referred Visitors}}{\text{Shared Results}}$$

$$\text{Retention Rate} = \frac{\text{Returning Users}}{\text{Unique Users}}$$

*Current Baseline (Day 0): 0% across all metrics.*

---

## 6. Growth Experiment 001

- **Experiment ID:** `EXP-CC-001`
- **Hypothesis:** Providing an instant downloadable/printable `.md` Bake Sheet on calculation completion increases 7-day returning user rate from 0% baseline to >15%, as home bakers print or save records for their next weekly bake.
- **Controlled Variable:** Placement of a prominent "📥 Download Sourdough Bake Sheet (.md)" export button directly below the dough calculation results.
- **Success Criteria:** >15% repeat visit rate within 14 days.
- **Status:** Baseline recorded; asset published.
