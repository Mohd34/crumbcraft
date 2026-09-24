# 📐 The Baker's Percentage & Hydration Cheat Sheet

> **A standalone technical reference for artisan bread bakers.**

---

## 1. What Is Baker's Math?

In baker's percentages, **Total Flour Weight is ALWAYS 100%**. Every other ingredient is weighed and expressed as a ratio of that total flour.

$$\text{Baker's \% of Ingredient} = \left(\frac{\text{Weight of Ingredient}}{\text{Total Weight of Flour}}\right) \times 100$$

### Standard Open-Crumb Sourdough Baseline
- **Flour Blend:** 100% (e.g. 85% Bread Flour + 15% Whole Wheat)
- **Water (Hydration):** 75%
- **Active Levain / Starter (100% Hydration):** 20%
- **Fine Sea Salt:** 2.0%
- **Total Dough Percentage:** 197%

---

## 2. The "True Hydration" Rule (Accounting for Levain)

Many beginner recipes overlook the flour and water hidden inside the sourdough starter. If you use 100g of a 100% hydration levain, it contains **50g of flour and 50g of water**.

$$\text{True Hydration \%} = \frac{\text{Recipe Water} + \text{Levain Water}}{\text{Recipe Flour} + \text{Levain Flour}} \times 100$$

### Example:
- Recipe Flour: 500g, Recipe Water: 350g, Levain (100% hydration): 100g (50g flour + 50g water).
- **Nominal Hydration:** $350 / 500 = 70.0\%$
- **True Hydration:** $(350 + 50) / (500 + 50) = 400 / 550 = \mathbf{72.7\%}$

---

## 3. Desired Dough Temperature (DDT) Equation

Fermentation speed depends heavily on dough temperature. Professional bakers target **78°F (25.5°C)** at the end of mixing.

$$\text{Water Temp} = (4 \times \text{Target DDT}) - \text{Room Temp} - \text{Flour Temp} - \text{Starter Temp} - \text{Friction Factor}$$

- **Frictional factor allowances:**
  - Hand kneading / Stretch & fold: $1^\circ\text{F} \text{ to } 2^\circ\text{F}$
  - Spiral stand mixer (low speed): $5^\circ\text{F} \text{ to } 8^\circ\text{F}$
  - Planetary stand mixer (medium speed): $8^\circ\text{F} \text{ to } 12^\circ\text{F}$

---

## 4. Bulk Fermentation Rise by Ambient Temperature

| Dough Temperature | Approximate Rise Target | Est. Bulk Ferment Duration |
| :--- | :--- | :--- |
| **80°F / 27°C** | 30% – 40% volume increase | 3.5 – 4.5 hours |
| **75°F / 24°C** | 50% – 60% volume increase | 5.0 – 6.5 hours |
| **70°F / 21°C** | 75% – 100% volume increase | 7.0 – 9.0 hours |
| **65°F / 18°C** | 100% (Double in size) | 10.0 – 14.0 hours |

*Rule of thumb:* At higher temperatures, stop bulk fermentation early (lower rise %) because the dough retains heat and ferments rapidly during shaping and early bench rest.

---

## 5. Flour Protein & Water Absorption Index

| Flour Type | Protein Content | Safe Hydration Ceiling | Notes |
| :--- | :--- | :--- | :--- |
| All-Purpose (Bleached) | 9.5% – 10.5% | 62% – 66% | Low gluten matrix, prone to puddling above 68% |
| All-Purpose (King Arthur) | 11.7% | 68% – 72% | Strong gluten for an AP flour |
| Standard Bread Flour | 12.0% – 12.7% | 72% – 78% | High elasticity, ideal for open crumb |
| High-Gluten / Pizza Flour | 13.5% – 14.2% | 76% – 84% | Strong chew, absorbs high water volumes |
| Whole Wheat Flour | 13.0% – 14.0% | 80% – 90% | High bran content thirstily absorbs water |
| Whole Rye Flour | 10.0% – 12.0% | 80% – 95% | Pentosans absorb huge water; zero gluten elasticity |

---

*Open source reference by [CrumbCraft](https://mohd34.github.io/crumbcraft/). Share freely with attribution.*
