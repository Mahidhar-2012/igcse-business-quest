import { byte, lesson, mc, calc, multi, cloze, match, fig, def, exam } from '../helpers.js';

// Unit 1: Number (Cambridge IGCSE Mathematics 0580, syllabus topics C1 and E1, Core and Extended).

export const m11 = lesson('m1-number', 'Types of number, HCF and LCM', 'C1.1 to C1.5', [
  'Every whole number above 1 is prime or a product of primes. HCF and LCM come straight from prime factors.',
], [
  byte('Types of number and prime factors', [
    '**Natural** numbers are 1, 2, 3 … **Integers** include 0 and negatives. **Rational** numbers can be written as a fraction of two integers; **irrational** numbers (such as √2 and π) cannot.',
    'A **prime number** has exactly **two factors**, 1 and itself. 1 is **not** prime. 2 is the only even prime.',
    'Every integer above 1 is a **product of prime factors** in only one way, for example 360 = 2³ × 3² × 5. Use a **factor tree** or repeated division.',
  ], mc('How many different prime numbers divide exactly into 360?', [
    ['Three: 2, 3 and 5', 'Correct: 360 = 2³ × 3² × 5.'],
    ['Six: 2, 3, 4, 5, 6 and 8', 'Only primes count, and 4, 6 and 8 are not prime.'],
    ['Five: 2, 2, 2, 3 and 3', 'The repeated factors are the same primes counted again.'],
    ['Four: 1, 2, 3 and 5', '1 is not a prime number.'],
  ], 0), { fig: { svg: 'primeTree', caption: 'Prime factor tree for 360' } }),
  byte('Highest common factor and lowest common multiple', [
    'The **HCF** is the biggest number that divides both. The **LCM** is the smallest number that both divide into.',
    'From prime factors: HCF = the **lowest power** of each **shared** prime. LCM = the **highest power** of **every** prime that appears.',
    'For 84 = 2² × 3 × 7 and 126 = 2 × 3² × 7: HCF = 2 × 3 × 7 = **42** and LCM = 2² × 3² × 7 = **252**. Also HCF × LCM = the two numbers multiplied.',
  ], calc('Two lighthouses flash every 12 s and every 20 s. They flash together now. After how many seconds will they next flash together?', 60, { unit: 's', formula: 'LCM(12, 20)', steps: ['12 = 2² × 3 and 20 = 2² × 5.', 'LCM = 2² × 3 × 5 = 60.', 'They next flash together after 60 s.'] }), { eq: ['HCF × LCM = a × b'] }),
  byte('Rational and irrational numbers', [
    'A **terminating** or **recurring** decimal is rational. A decimal that never ends and never repeats (π, √2) is irrational.',
    'The **sum or product of two irrationals** may be rational: √2 × √8 = √16 = 4. But **√3 × √5 = √15** is still irrational.',
    'Recurring to fraction: let x = 0.4545…; then 100x − x = 45, so x = 45/99 = **5/11**.',
  ], mc('Which of these numbers is irrational?', [
    ['√3 × √5', 'Correct: this equals √15, which is not a perfect square.'],
    ['√2 × √8', 'This equals √16 = 4, a rational number.'],
    ['√12 ÷ √3', 'This equals √4 = 2, a rational number.'],
    ['√81 + √16', 'This equals 9 + 4 = 13, a rational number.'],
  ], 0)),
], [
  calc('What is the smallest positive number that is divisible by 8, 12 and 20?', 120, { formula: 'LCM(8, 12, 20)', steps: ['8 = 2³, 12 = 2² × 3, 20 = 2² × 5.', 'Highest powers: 2³ × 3 × 5 = 120.'] }),
  multi('Select ALL the prime numbers.', [
    ['51', '51 = 3 × 17.', false], ['53', 'Prime: no factor other than 1 and 53.', true], ['57', '57 = 3 × 19.', false], ['59', 'Prime.', true], ['61', 'Prime.', true],
  ], 'Test each number against the primes up to its square root.'),
  def('Define a prime number.', ['A whole number greater than 1', 'with exactly two factors: 1 and itself'], 'A prime number is a whole number greater than 1 that has exactly two factors, 1 and itself.'),
  exam('Write 420 as a product of its prime factors.', 'Write', ['Divides repeatedly by primes or draws a factor tree', 'Uses only the primes 2, 3, 5 and 7', 'Correct answer 2² × 3 × 5 × 7'], '420 = 2 × 210 = 2 × 2 × 105 = 2 × 2 × 3 × 35 = 2² × 3 × 5 × 7.'),
  match('Match each description to its number.', [['The HCF of 18 and 30', '6'], ['The LCM of 18 and 30', '90'], ['The number of prime factors of 30 (all different)', '3'], ['The smallest prime number', '2']], 'HCF 6; LCM 90; 30 = 2 × 3 × 5; 2 is the smallest prime.'),
]);

export const m12 = lesson('m1-index', 'Indices, standard form and surds', 'C1.6, C1.9, E1.5, E1.6', [
  'Index laws turn multiplication into adding powers. Standard form writes very large and small numbers as A × 10ⁿ. Surds keep roots exact.',
], [
  byte('Laws of indices', [
    '**aᵐ × aⁿ = aᵐ⁺ⁿ**, **aᵐ ÷ aⁿ = aᵐ⁻ⁿ**, **(aᵐ)ⁿ = aᵐⁿ**. Apply the power to **every** factor in a bracket: (3x²y)³ = 27x⁶y³.',
    '**a⁰ = 1**, **a⁻ⁿ = 1/aⁿ** (a negative power means a reciprocal, not a negative number), and **a^(1/n) = ⁿ√a**.',
    'Fractional powers: **a^(m/n) = (ⁿ√a)ᵐ**. So 8^(2/3) = (∛8)² = 2² = 4. Root first, then power, keeps the numbers small.',
  ], mc('Simplify (3x²y)³ ÷ 9x²y.', [
    ['3x⁴y²', 'Correct: 27x⁶y³ ÷ 9x²y = 3x⁴y².'],
    ['3x³y²', 'The powers of x subtract to give x⁴, not x³.'],
    ['9x⁴y²', '3³ = 27 and 27 ÷ 9 = 3, not 9.'],
    ['3x⁴y³', 'The power of y is 3 − 1 = 2.'],
  ], 0), { eq: ['aᵐ × aⁿ = aᵐ⁺ⁿ', 'aᵐ ÷ aⁿ = aᵐ⁻ⁿ', '(aᵐ)ⁿ = aᵐⁿ', 'a⁻ⁿ = 1/aⁿ', 'a^(1/n) = ⁿ√a'] }),
  byte('Standard form', [
    'Standard form is **A × 10ⁿ** with **1 ≤ A < 10** and n an integer. 0.00047 = **4.7 × 10⁻⁴**; 52 000 000 = **5.2 × 10⁷**.',
    'Multiply and divide the **A parts** and **add or subtract the powers** of 10, then **adjust** so that A is between 1 and 10 again.',
    'Check the answer is in proper form: 47 × 10⁻⁵ and 0.47 × 10⁻³ are **not** standard form.',
  ], calc('Work out (3.6 × 10⁵) × (2 × 10⁻²). Give your answer as an ordinary number.', 7200, { formula: '3.6 × 2 = 7.2 and 10⁵ × 10⁻² = 10³', steps: ['3.6 × 2 = 7.2.', '10⁵ × 10⁻² = 10³.', '7.2 × 10³ = 7200.'] })),
  byte('Surds', [
    'A **surd** is an irrational root left exact, for example √2 or 3√5. Simplify with the largest square factor: √72 = √(36 × 2) = **6√2**.',
    '**√a × √b = √(ab)** and **√a ÷ √b = √(a/b)**. You can add surds only when the root is the same: 4√3 + 2√3 = 6√3.',
    '**Rationalise** a denominator by multiplying top and bottom by the surd: 6/√3 = 6√3/3 = **2√3**. For (a + √b) multiply by (a − √b) to use the difference of two squares.',
  ], mc('Simplify √48 + √12.', [
    ['6√3', 'Correct: 4√3 + 2√3 = 6√3.'],
    ['√60', 'Roots cannot be added under one root sign.'],
    ['5√3', '√48 = 4√3, not 3√3.'],
    ['14√3', 'The numbers inside the roots are not added to the coefficients.'],
  ], 0), { eq: ['√a × √b = √(ab)'] }),
], [
  calc('Work out 8^(2/3).', 4, { formula: '8^(2/3) = (∛8)²', steps: ['∛8 = 2.', '2² = 4.'] }),
  calc('Work out (4.5 × 10⁶) ÷ (1.5 × 10²) as an ordinary number.', 30000, { formula: '4.5 ÷ 1.5 = 3 and 10⁶ ÷ 10² = 10⁴', steps: ['4.5 ÷ 1.5 = 3.', '10⁶ ÷ 10² = 10⁴.', '3 × 10⁴ = 30 000.'] }),
  multi('Select ALL the expressions that are equal to 1/8.', [['2⁻³', '2⁻³ = 1/2³ = 1/8.', true], ['8⁻¹', '8⁻¹ = 1/8.', true], ['1/2³', '2³ = 8.', true], ['−8', 'A negative power is a reciprocal, not a negative number.', false], ['8⁰', '8⁰ = 1.', false]], 'A negative power means the reciprocal.'),
  def('Define standard form.', ['A number written as A × 10ⁿ', 'where 1 ≤ A < 10 and n is an integer'], 'A number is in standard form when it is written as A × 10ⁿ, where 1 ≤ A < 10 and n is an integer.'),
  exam('Show that (3 + √5)(3 − √5) = 4.', 'Show that', ['Expands to 9 − 3√5 + 3√5 − 5 (or uses the difference of two squares)', 'Correct simplification 9 − 5 = 4 with no surd left'], '(3 + √5)(3 − √5) = 9 − 3√5 + 3√5 − 5 = 9 − 5 = 4.'),
]);

export const m13 = lesson('m1-percent', 'Fractions, decimals and percentages', 'C1.7 to C1.13', [
  'Percentage problems are multiplier problems: increase by 15% means multiply by 1.15. Reverse problems divide by the multiplier.',
], [
  byte('Percentage change and multipliers', [
    'Increase by r%: multiply by **1 + r/100**. Decrease by r%: multiply by **1 − r/100**. A 15% rise is × 1.15; a 20% fall is × 0.80.',
    '**Percentage change = (change ÷ original) × 100.** The original is the value **before** the change.',
    'A rise then an equal fall does **not** cancel: 80 × 1.15 × 0.85 = 78.2, which is **less** than 80, because the fall is a percentage of a bigger number.',
  ], calc('A jacket costs $80. The price rises by 15% and then falls by 15%. What is the final price in dollars?', 78.2, { unit: '$', formula: '80 × 1.15 × 0.85', steps: ['80 × 1.15 = 92.', '92 × 0.85 = 78.2.', 'The final price is $78.20.'] }), { eq: ['New = original × (1 ± r/100)', '% change = change ÷ original × 100'] }),
  byte('Reverse percentages', [
    'Reverse percentage: you know the **final** amount and want the original. **Divide by the multiplier**, never take a percentage of the final amount.',
    'A 20% discount means the sale price is **80%** of the original, so original = sale price ÷ 0.80.',
    'Check by multiplying forwards: 80 × 0.80 = 64.',
  ], mc('After a 20% discount a coat costs $64. What was its original price?', [
    ['$80', 'Correct: $64 ÷ 0.80 = $80.'],
    ['$76.80', 'This adds 20% of $64, but the 20% was taken off the original.'],
    ['$51.20', 'This takes 20% off $64 instead of reversing the discount.'],
    ['$84', 'The discount is a percentage of the original, so adding $20 is not correct.'],
  ], 0)),
  byte('Simple and compound interest', [
    '**Simple interest** is the same each year: I = P × R × T / 100. **Compound interest** is paid on the interest too: **amount = P × (1 + R/100)ⁿ**.',
    'Depreciation works the same way with a **multiplier below 1**: a value losing 15% a year is multiplied by 0.85 each year.',
    'Round only at the **end**. Compound interest = final amount − original amount.',
  ], calc('$2000 is invested at 3% compound interest per year for 4 years. How much is it worth at the end, in dollars? Give your answer to 2 decimal places.', 2251.02, { unit: '$', formula: '2000 × 1.03⁴', steps: ['1.03⁴ = 1.12550881.', '2000 × 1.12550881 = 2251.0176.', 'The amount is $2251.02.'], tol: 0.01 }), { eq: ['Simple: I = PRT/100', 'Compound: A = P(1 + R/100)ⁿ'] }),
], [
  calc('A price rises from $450 to $531. What is the percentage increase?', 18, { unit: '%', formula: 'change ÷ original × 100', steps: ['Change = 531 − 450 = 81.', '81 ÷ 450 × 100 = 18.'] }),
  calc('A car worth $12 000 loses 15% of its value each year. How much is it worth after 3 years, in dollars?', 7369.5, { unit: '$', formula: '12 000 × 0.85³', steps: ['0.85³ = 0.614125.', '12 000 × 0.614125 = 7369.5.'], tol: 0.1 }),
  multi('Select ALL the multipliers that match an 8% decrease then a 5% increase one after the other.', [['0.92 × 1.05', 'Correct: 8% decrease is × 0.92 and 5% increase is × 1.05.', true], ['1.05 × 0.92', 'Multiplication can be done in either order.', true], ['0.97', 'This is not the same as 0.92 × 1.05 = 0.966.', false], ['0.92 + 0.05', 'Multipliers multiply, they are not added.', false]], 'Combine multipliers by multiplying.'),
  def('Define compound interest.', ['Interest calculated on the original amount', 'plus the interest already added in earlier periods'], 'Compound interest is interest paid on both the original amount and on the interest already added.'),
  exam('Mia invests $500 at 4% simple interest per year. Ben invests $500 at 4% compound interest per year. Who has more after 3 years and by how much? Show your working.', 'Calculate', ['Simple interest total 500 + 3 × 20 = $560', 'Compound amount 500 × 1.04³ = $562.43', 'Ben has more, by about $2.43'], 'Simple: 4% of 500 = 20 a year, so 500 + 60 = $560. Compound: 500 × 1.04³ = 562.432, about $562.43. Ben has $2.43 more.'),
]);

export const m14 = lesson('m1-ratio', 'Ratio, proportion and rates', 'C1.11, E1.11', [
  'Ratio shares a total in parts. Direct proportion keeps the ratio constant; inverse proportion keeps the product constant.',
], [
  byte('Ratio and sharing', [
    'Add the **parts**, divide the total by the number of parts to find **one part**, then multiply. Share 360 in 2 : 3 : 4: 9 parts, one part = 40, shares **80, 120, 160**.',
    'Simplify by dividing by the **HCF**. Write 1 : n by dividing both sides by the first number.',
    'If one amount is known, find **one part** from it. Ratios of different quantities must be in the **same units** first.',
  ], mc('Anna, Ben and Cai share $360 in the ratio 2 : 3 : 4. How much more does Cai get than Anna?', [
    ['$80', 'Correct: one part is $40, so Cai gets $160 and Anna $80.'],
    ['$160', 'This is Cai’s share, not the difference.'],
    ['$40', 'This is the value of one part.'],
    ['$120', 'This is Ben’s share.'],
  ], 0)),
  byte('Direct and inverse proportion', [
    '**Direct proportion:** y = kx; when x doubles, y doubles; the graph is a **straight line through the origin**. y ∝ x² means y = kx².',
    '**Inverse proportion:** y = k/x; when x doubles, y **halves**; the product xy is **constant**. More workers means **fewer** days.',
    'Find k from one known pair, write the formula, then substitute.',
  ], calc('5 workers take 12 days to build a wall. Working at the same rate, how many days would 8 workers take?', 7.5, { unit: 'days', formula: 'workers × days = constant', steps: ['5 × 12 = 60 worker-days.', '60 ÷ 8 = 7.5 days.'] }), { fig: { svg: 'directInverse', caption: 'Direct proportion is a line through the origin; inverse proportion is a curve' }, eq: ['Direct: y = kx', 'Inverse: y = k/x'] }),
  byte('Speed, rates and unit conversion', [
    '**Speed = distance ÷ time**, distance = speed × time, time = distance ÷ speed. Density = mass ÷ volume.',
    '**Average speed = total distance ÷ total time**, never the average of two speeds.',
    'Convert units: **km/h to m/s: divide by 3.6**. 72 km/h = 20 m/s. Convert the time to **hours** before using km/h.',
  ], calc('A car drives 60 km at 40 km/h and then another 60 km at 60 km/h. What is its average speed in km/h?', 48, { unit: 'km/h', formula: 'total distance ÷ total time', steps: ['Time 1 = 60 ÷ 40 = 1.5 h; time 2 = 60 ÷ 60 = 1 h.', 'Total time = 2.5 h; total distance = 120 km.', '120 ÷ 2.5 = 48 km/h.'] }), { eq: ['Speed = distance ÷ time', 'Density = mass ÷ volume'] }),
], [
  calc('Divide $480 in the ratio 3 : 5. How much is the larger share, in dollars?', 300, { unit: '$', formula: '480 ÷ 8 × 5', steps: ['3 + 5 = 8 parts.', '480 ÷ 8 = 60 per part.', '5 × 60 = 300.'] }),
  calc('y is inversely proportional to x. y = 6 when x = 4. Find y when x = 3.', 8, { formula: 'xy = 24', steps: ['xy = 4 × 6 = 24.', 'y = 24 ÷ 3 = 8.'] }),
  calc('A cyclist travels at 18 km/h. What is this speed in metres per second?', 5, { unit: 'm/s', formula: 'divide km/h by 3.6', steps: ['18 ÷ 3.6 = 5.'] }),
  def('Define average speed.', ['Total distance travelled', 'divided by total time taken'], 'Average speed is the total distance travelled divided by the total time taken.'),
  exam('A recipe for 6 people uses 450 g of flour and 270 ml of milk. Write the ratio of flour to milk in its simplest form, then find the flour needed for 10 people.', 'Calculate', ['Ratio 450 : 270 simplified to 5 : 3', 'Flour for one person 75 g', '750 g for 10 people'], '450 : 270 = 5 : 3 (divide by 90). Flour per person 450 ÷ 6 = 75 g, so for 10 people 750 g.'),
]);

export const m15 = lesson('m1-bounds', 'Rounding, estimation and bounds', 'C1.14 to C1.17, E1.13', [
  'Round sensibly, estimate to check, and use bounds to say how accurate a calculated answer is.',
], [
  byte('Rounding and significant figures', [
    'Round to **decimal places** by counting after the point; round to **significant figures** from the first **non-zero** digit. 0.004567 to 2 s.f. is **0.0046**.',
    'Look at the **next digit**: 5 or more rounds up. Keep placeholder zeros in whole numbers: 48 612 to 2 s.f. is **49 000**.',
    'Do **not round in the middle** of a multi-step calculation. Round only the final answer.',
  ], mc('Write 0.004567 correct to 2 significant figures.', [
    ['0.0046', 'Correct: the first significant figure is the 4.'],
    ['0.0045', 'The next digit is 6, so the 5 rounds up to 6.'],
    ['0.00', 'Zeros at the start are not significant figures.'],
    ['0.0050', 'Count significant figures from the first non-zero digit, 4.'],
  ], 0)),
  byte('Estimation', [
    'Estimate by rounding every number to **1 significant figure**, then calculate. 4.82 × 31.6 ÷ 0.52 ≈ 5 × 30 ÷ 0.5 = **300**.',
    'Use estimation to **check** a calculator answer for a slipped decimal point or a wrong key.',
    'When dividing, rounding the divisor **down** gives an **over-estimate**, rounding it up gives an under-estimate.',
  ], calc('Estimate (6.8 × 19.7) ÷ 0.48 by rounding each number to 1 significant figure. Give the estimate.', 280, { formula: '(7 × 20) ÷ 0.5', steps: ['7 × 20 = 140.', '140 ÷ 0.5 = 280.'] })),
  byte('Upper and lower bounds', [
    'A value given to a stated accuracy lies in a **range**. 8.6 cm to 1 d.p. has **lower bound 8.55** and **upper bound 8.65** (half a unit either way).',
    'For **a + b** and **a × b**: use upper with upper, lower with lower. For **a − b** and **a ÷ b** the biggest answer needs **upper − lower** and **upper ÷ lower**.',
    'Say bounds as an **inequality**: 8.55 ≤ x < 8.65.',
  ], calc('A rectangle has length 8.6 cm and width 5.2 cm, each correct to 1 decimal place. What is the upper bound for its area, in cm²? Give your answer to 2 decimal places.', 45.41, { unit: 'cm²', formula: 'upper × upper = 8.65 × 5.25', steps: ['Upper bound of length = 8.65.', 'Upper bound of width = 5.25.', '8.65 × 5.25 = 45.4125, which is 45.41 to 2 d.p.'], tol: 0.01 }), { fig: { svg: 'boundsLine', caption: 'A number given to 1 d.p. lies half a unit either side' } }),
], [
  calc('Round 0.0507 to 2 significant figures. Give your answer as a decimal.', 0.051, { formula: 'first significant figure is 5', steps: ['The first significant digit is 5, the second is 0, the next is 7.', '7 rounds the 0 up to 1, so 0.051.'], tol: 0.00001 }),
  calc('A length is 12.4 m to 1 decimal place. Write the upper bound in metres.', 12.45, { unit: 'm', formula: 'add half a unit', steps: ['Half of 0.1 is 0.05.', '12.4 + 0.05 = 12.45.'], tol: 0.00001 }),
  calc('a = 8.5 and b = 3.2, both correct to 1 d.p. What is the lower bound of a − b?', 5.2, { formula: 'lower a − upper b = 8.45 − 3.25 = 5.2', steps: ['Lower bound of a = 8.45.', 'Upper bound of b = 3.25.', 'For the smallest difference subtract the biggest b: 8.45 − 3.25 = 5.2.'], tol: 0.00001 }),
  def('What is meant by a lower bound?', ['The smallest value', 'that rounds to the stated accuracy'], 'The lower bound is the smallest value that would still round to the given measurement.'),
  exam('The mass of a parcel is 4.5 kg to the nearest 0.1 kg. Write down the lower and upper bounds, and say whether 4.55 kg is possible.', 'Write down', ['Lower bound 4.45 kg', 'Upper bound 4.55 kg', 'States 4.55 kg is not possible because upper bounds are not included (x < 4.55)'], '4.45 ≤ mass < 4.55. So 4.55 would round up to 4.6 and is not possible.'),
]);

export const unit1 = {
  id: 'm1', number: 1, title: 'Number', short: 'Number', emoji: '🔢', color: 'sky',
  submodules: [m11, m12, m13, m14, m15],
  papers: [],
};
