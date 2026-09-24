// CrumbCraft Mathematical Formula Audit & Unit Test Suite
// Verifies all artisan bread formulas against physical and chemical constants

const assert = require('assert');

// 1. HYDRATION ENGINE
function calculateHydration({ flourWeight, waterWeight, starterWeight, starterHydrationPercent = 100 }) {
  // starterHydrationPercent is e.g. 100 for 100% hydration (1:1 flour:water)
  const hLevain = starterHydrationPercent / 100;
  
  // Starter flour and water contribution
  const starterFlour = starterWeight / (1 + hLevain);
  const starterWater = starterWeight - starterFlour;

  // 1. Recipe Hydration (added water / added flour)
  const recipeHydration = (waterWeight / flourWeight) * 100;

  // 2. Starter Hydration
  const starterHydration = starterHydrationPercent;

  // 3. Total True Hydration
  const totalFlour = flourWeight + starterFlour;
  const totalWater = waterWeight + starterWater;
  const totalHydration = (totalWater / totalFlour) * 100;

  return {
    starterFlour,
    starterWater,
    recipeHydration,
    starterHydration,
    totalFlour,
    totalWater,
    totalHydration
  };
}

// 2. REVERSE RECIPE SCALER
function scaleRecipe({ targetTotalWeight, recipeHydrationPct, starterPct, saltPct, starterHydrationPct = 100 }) {
  const h = recipeHydrationPct / 100;
  const s = starterPct / 100;
  const p = saltPct / 100;
  const hLevain = starterHydrationPct / 100;

  // Total weight = F * (1 + h + s + p)
  const flourWeight = targetTotalWeight / (1 + h + s + p);
  const waterWeight = flourWeight * h;
  const starterWeight = flourWeight * s;
  const saltWeight = flourWeight * p;

  const starterFlour = starterWeight / (1 + hLevain);
  const starterWater = starterWeight - starterFlour;
  const totalFlour = flourWeight + starterFlour;
  const totalWater = waterWeight + starterWater;
  const totalHydration = (totalWater / totalFlour) * 100;

  return {
    flourWeight,
    waterWeight,
    starterWeight,
    saltWeight,
    starterFlour,
    starterWater,
    totalFlour,
    totalWater,
    totalHydration,
    totalDoughWeight: flourWeight + waterWeight + starterWeight + saltWeight
  };
}

// 3. DESIRED DOUGH TEMPERATURE (DDT) & ICE WATER MATH
function calculateDDT({
  desiredDoughTemp,
  roomTemp,
  flourTemp,
  starterTemp = null, // null for 3-factor (direct dough), number for 4-factor (sourdough)
  frictionFactor,
  tapWaterTemp,
  unit = 'C', // 'C' or 'F'
  waterWeight = 0 // total water weight in recipe for ice calculation
}) {
  let requiredWaterTemp;
  const isSourdough = starterTemp !== null && starterTemp !== undefined;

  if (isSourdough) {
    // 4-factor formula
    requiredWaterTemp = (4 * desiredDoughTemp) - (roomTemp + flourTemp + starterTemp + frictionFactor);
  } else {
    // 3-factor formula
    requiredWaterTemp = (3 * desiredDoughTemp) - (roomTemp + flourTemp + frictionFactor);
  }

  // Ice calculation if water temp is below tap water temp
  let iceWeight = 0;
  let tapWaterWeight = waterWeight;

  if (tapWaterTemp !== undefined && tapWaterTemp > requiredWaterTemp && waterWeight > 0) {
    if (unit === 'C') {
      // Latent heat of fusion = 80 cal/g
      // Ice mass = Water * (T_tap - T_target) / (T_tap + 80)
      iceWeight = waterWeight * (tapWaterTemp - requiredWaterTemp) / (tapWaterTemp + 80);
    } else {
      // Fahrenheit: Latent heat = 144 F equivalent
      // Ice mass = Water * (T_tap - T_target) / (T_tap + 112)
      iceWeight = waterWeight * (tapWaterTemp - requiredWaterTemp) / (tapWaterTemp + 112);
    }
    // Cap ice to water weight if extreme
    iceWeight = Math.max(0, Math.min(waterWeight, iceWeight));
    tapWaterWeight = waterWeight - iceWeight;
  }

  return {
    requiredWaterTemp,
    isSourdough,
    needsIce: tapWaterTemp !== undefined && tapWaterTemp > requiredWaterTemp,
    iceWeight,
    tapWaterWeight
  };
}

// 4. FLOUR PROTEIN BLENDING
function calculateProteinBlend({
  baseProteinPct,     // e.g. 10.5 for AP flour
  fortifierProteinPct,// e.g. 75.0 for Vital Wheat Gluten or 14.0 for High Gluten
  targetProteinPct,   // e.g. 12.5 for target Bread Flour
  totalFlourWeight    // e.g. 1000g
}) {
  const p1 = baseProteinPct / 100;
  const p2 = fortifierProteinPct / 100;
  const pTarget = targetProteinPct / 100;

  if (pTarget < p1 || pTarget > p2) {
    throw new Error('Target protein must be between base and fortifier protein percentages');
  }

  const fortifierWeight = totalFlourWeight * (pTarget - p1) / (p2 - p1);
  const baseWeight = totalFlourWeight - fortifierWeight;

  return {
    baseWeight,
    fortifierWeight,
    achievedProteinPct: ((baseWeight * p1 + fortifierWeight * p2) / totalFlourWeight) * 100
  };
}

// 5. YEAST & DISCARD CONVERTER
function convertYeast({ amount, fromType }) {
  // Ratios relative to Instant Dry Yeast (IDY = 1.0)
  // IDY: 1.0, ADY: 1.25, Fresh: 3.0
  let idy = 0;
  if (fromType === 'instant') idy = amount;
  else if (fromType === 'active_dry') idy = amount / 1.25;
  else if (fromType === 'fresh') idy = amount / 3.0;

  return {
    instant: idy,
    active_dry: idy * 1.25,
    fresh: idy * 3.0
  };
}

// ==========================================
// TEST EXECUTION
// ==========================================

console.log('=== RUNNING CRUMBCRAFT FORMULA AUDIT SUITE ===\n');

// Test 1: Hydration with 100% starter
{
  const res = calculateHydration({
    flourWeight: 1000,
    waterWeight: 700,
    starterWeight: 200,
    starterHydrationPercent: 100
  });

  console.log('Test 1: Standard 100% Starter Hydration Distinction');
  console.log(`- Recipe Hydration: ${res.recipeHydration.toFixed(2)}% (Expected: 70.00%)`);
  console.log(`- Starter Flour: ${res.starterFlour}g, Starter Water: ${res.starterWater}g`);
  console.log(`- Total True Hydration: ${res.totalHydration.toFixed(2)}% (Expected: 72.73%)`);

  assert.strictEqual(res.recipeHydration, 70);
  assert.strictEqual(res.starterFlour, 100);
  assert.strictEqual(res.starterWater, 100);
  assert.strictEqual(res.totalFlour, 1100);
  assert.strictEqual(res.totalWater, 800);
  assert(Math.abs(res.totalHydration - 72.72727) < 0.001);
  console.log('-> PASS\n');
}

// Test 2: Hydration with 50% stiff starter (Lievito Madre)
{
  const res = calculateHydration({
    flourWeight: 1000,
    waterWeight: 700,
    starterWeight: 150,
    starterHydrationPercent: 50
  });

  console.log('Test 2: Stiff 50% Starter (Lievito Madre)');
  console.log(`- Recipe Hydration: ${res.recipeHydration.toFixed(2)}%`);
  console.log(`- Starter Flour: ${res.starterFlour.toFixed(1)}g, Starter Water: ${res.starterWater.toFixed(1)}g`);
  console.log(`- Total True Hydration: ${res.totalHydration.toFixed(2)}% (Expected: 68.18%)`);

  assert.strictEqual(res.starterFlour, 100);
  assert.strictEqual(res.starterWater, 50);
  assert.strictEqual(res.totalFlour, 1100);
  assert.strictEqual(res.totalWater, 750);
  assert(Math.abs(res.totalHydration - (750 / 1100 * 100)) < 0.001);
  console.log('-> PASS\n');
}

// Test 3: Reverse Recipe Scaler (2 loaves @ 900g = 1800g total)
{
  const res = scaleRecipe({
    targetTotalWeight: 1800,
    recipeHydrationPct: 75,
    starterPct: 20,
    saltPct: 2,
    starterHydrationPct: 100
  });

  console.log('Test 3: Reverse Recipe Scaler (Target: 1800g total dough)');
  console.log(`- Flour: ${res.flourWeight.toFixed(1)}g`);
  console.log(`- Water: ${res.waterWeight.toFixed(1)}g`);
  console.log(`- Starter: ${res.starterWeight.toFixed(1)}g`);
  console.log(`- Salt: ${res.saltWeight.toFixed(1)}g`);
  console.log(`- Total Sum: ${res.totalDoughWeight.toFixed(1)}g (Expected: 1800.0g)`);
  console.log(`- Total True Hydration: ${res.totalHydration.toFixed(2)}% (Expected: 77.27%)`);

  assert(Math.abs(res.totalDoughWeight - 1800) < 0.001);
  assert(Math.abs(res.totalHydration - 77.2727) < 0.01);
  console.log('-> PASS\n');
}

// Test 4: DDT 3-Factor (Commercial Yeast Direct Dough) in Celsius
{
  const res = calculateDDT({
    desiredDoughTemp: 26,
    roomTemp: 22,
    flourTemp: 21,
    starterTemp: null,
    frictionFactor: 5,
    tapWaterTemp: 20,
    unit: 'C',
    waterWeight: 700
  });

  // Required water = 3 * 26 - (22 + 21 + 5) = 78 - 48 = 30C
  console.log('Test 4: DDT 3-Factor Direct Dough (Celsius)');
  console.log(`- Required Water Temp: ${res.requiredWaterTemp}C (Expected: 30C)`);
  console.log(`- Needs Ice: ${res.needsIce} (Expected: false)`);

  assert.strictEqual(res.requiredWaterTemp, 30);
  assert.strictEqual(res.needsIce, false);
  console.log('-> PASS\n');
}

// Test 5: DDT 4-Factor (Sourdough) with Ice Water Calculation (Celsius)
{
  // Summer baking scenario: room 28C, flour 27C, starter 26C, mixer friction 6C, desired dough 24C
  // Required water = 4 * 24 - (28 + 27 + 26 + 6) = 96 - 87 = 9C
  // Tap water is 24C, so ice is required to bring 700g water down to 9C
  const res = calculateDDT({
    desiredDoughTemp: 24,
    roomTemp: 28,
    flourTemp: 27,
    starterTemp: 26,
    frictionFactor: 6,
    tapWaterTemp: 24,
    unit: 'C',
    waterWeight: 700
  });

  console.log('Test 5: DDT 4-Factor Sourdough with Ice Math (Celsius)');
  console.log(`- Required Water Temp: ${res.requiredWaterTemp}C (Expected: 9C)`);
  console.log(`- Tap Water Temp: 24C -> Needs Ice: ${res.needsIce}`);
  console.log(`- Ice Weight: ${res.iceWeight.toFixed(1)}g`);
  console.log(`- Tap Water Weight: ${res.tapWaterWeight.toFixed(1)}g`);
  console.log(`- Total Liquid: ${(res.iceWeight + res.tapWaterWeight).toFixed(1)}g (Expected: 700g)`);

  assert.strictEqual(res.requiredWaterTemp, 9);
  assert.strictEqual(res.needsIce, true);
  // Formula: 700 * (24 - 9) / (24 + 80) = 700 * 15 / 104 = 100.96g
  assert(Math.abs(res.iceWeight - 100.96) < 0.1);
  assert(Math.abs(res.iceWeight + res.tapWaterWeight - 700) < 0.001);
  console.log('-> PASS\n');
}

// Test 6: DDT 4-Factor in Fahrenheit
{
  // Room: 76F, Flour: 74F, Starter: 75F, Friction: 10F, Desired: 78F
  // Required water = 4 * 78 - (76 + 74 + 75 + 10) = 312 - 235 = 77F
  const res = calculateDDT({
    desiredDoughTemp: 78,
    roomTemp: 76,
    flourTemp: 74,
    starterTemp: 75,
    frictionFactor: 10,
    tapWaterTemp: 70,
    unit: 'F',
    waterWeight: 500
  });

  console.log('Test 6: DDT 4-Factor Sourdough (Fahrenheit)');
  console.log(`- Required Water Temp: ${res.requiredWaterTemp}F (Expected: 77F)`);
  assert.strictEqual(res.requiredWaterTemp, 77);
  console.log('-> PASS\n');
}

// Test 7: Vital Wheat Gluten Protein Blend
{
  const res = calculateProteinBlend({
    baseProteinPct: 10.5,
    fortifierProteinPct: 75.0,
    targetProteinPct: 12.5,
    totalFlourWeight: 1000
  });

  console.log('Test 7: Flour Protein Blending (AP to Bread Flour Target)');
  console.log(`- Base AP Flour (10.5%): ${res.baseWeight.toFixed(1)}g`);
  console.log(`- Vital Wheat Gluten (75%): ${res.fortifierWeight.toFixed(1)}g`);
  console.log(`- Resulting Protein: ${res.achievedProteinPct.toFixed(2)}% (Expected: 12.50%)`);

  assert(Math.abs(res.baseWeight - 968.99) < 0.1);
  assert(Math.abs(res.fortifierWeight - 31.01) < 0.1);
  assert(Math.abs(res.achievedProteinPct - 12.5) < 0.001);
  console.log('-> PASS\n');
}

// Test 8: Yeast Conversion
{
  const res = convertYeast({ amount: 7, fromType: 'instant' });
  console.log('Test 8: Yeast Conversion from 7g Instant Dry Yeast');
  console.log(`- Instant: ${res.instant}g`);
  console.log(`- Active Dry: ${res.active_dry}g (Expected: 8.75g)`);
  console.log(`- Fresh Cake: ${res.fresh}g (Expected: 21g)`);

  assert.strictEqual(res.instant, 7);
  assert.strictEqual(res.active_dry, 8.75);
  assert.strictEqual(res.fresh, 21);
  console.log('-> PASS\n');
}

console.log('=====================================================');
console.log('ALL 8 FORMULA AUDIT TESTS PASSED SUCCESSFULLY! 100%');
console.log('=====================================================');
