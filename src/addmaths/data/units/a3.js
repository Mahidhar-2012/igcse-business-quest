import { byte, lesson, mc, calc, multi, def, exam } from '../../../maths/data/helpers.js';

// Unit 7: Calculus and kinematics (Cambridge IGCSE Additional Mathematics 0606, topics 11 and 12).

export const a71 = lesson('a7-diff', 'Differentiation rules', '0606 topic 11', [
  'The chain, product and quotient rules extend differentiation to composite functions, products and fractions. Know the derivatives of eˣ, ln x, sin x, cos x and tan x.',
], [
  byte('The chain rule', [
    '**dy/dx = dy/du × du/dx.** Differentiate the outside, keep the inside, then multiply by the derivative of the inside.',
    'd/dx (2x + 1)³ = 3(2x + 1)² × 2 = **6(2x + 1)²**. At x = 0 the gradient is 6.',
    'Write the **inner function** as u first if you are unsure.',
  ], calc('Find the gradient of y = (2x + 1)³ at x = 0.', 6, { formula: 'dy/dx = 6(2x + 1)²', steps: ['dy/dx = 3(2x + 1)² × 2 = 6(2x + 1)².', 'At x = 0: 6(1)² = 6.'] }), { eq: ['dy/dx = dy/du × du/dx'] }),
  byte('Product and quotient rules', [
    '**Product:** y = uv gives **dy/dx = u dv/dx + v du/dx**. y = x²(3x + 1): dy/dx = 2x(3x + 1) + 3x²; at x = 1 this is **11**.',
    '**Quotient:** y = u/v gives **dy/dx = (v du/dx − u dv/dx)/v²**. y = x/(x + 1) gives **1/(x + 1)²**.',
    'Check the order in the quotient rule: the numerator is **v u′ − u v′**.',
  ], mc('Differentiate y = x/(x + 1).', [
    ['1/(x + 1)²', 'Correct: ((x + 1) × 1 − x × 1)/(x + 1)².'],
    ['1/(x + 1)', 'The denominator is squared in the quotient rule.'],
    ['x/(x + 1)²', 'The numerator is (x + 1) − x = 1, not x.'],
    ['(2x + 1)/(x + 1)²', 'The numerator subtracts the terms; it does not add them.'],
  ], 0), { eq: ['uv: u v′ + v u′', 'u/v: (v u′ − u v′)/v²'] }),
  byte('Derivatives of eˣ, ln x and trig functions', [
    'd/dx eˣ = **eˣ**; d/dx e^(ax) = **a e^(ax)**; d/dx ln x = **1/x**; d/dx ln(ax + b) = **a/(ax + b)**.',
    'd/dx sin x = **cos x**; d/dx cos x = **−sin x**; d/dx tan x = **sec²x** (angles in **radians**).',
    'With the chain rule: d/dx sin 3x = **3 cos 3x** and d/dx ln(x² + 1) = **2x/(x² + 1)**, which equals 1 at x = 1.',
  ], calc('Find the gradient of y = ln(x² + 1) at x = 1.', 1, { formula: 'dy/dx = 2x/(x² + 1)', steps: ['dy/dx = 2x/(x² + 1).', 'At x = 1: 2/2 = 1.'] }), { eq: ['d/dx eˣ = eˣ', 'd/dx ln x = 1/x', 'd/dx sin x = cos x', 'd/dx cos x = −sin x', 'd/dx tan x = sec²x'] }),
], [
  calc('Find the gradient of y = e^(2x) at x = 0.', 2, { formula: '2e^(2x)', steps: ['dy/dx = 2e^(2x).', 'At x = 0: 2.'] }),
  calc('Find the gradient of y = x ln x at x = e. Give the exact value as a whole number.', 2, { formula: 'ln x + 1', steps: ['Product rule: dy/dx = ln x + x(1/x) = ln x + 1.', 'At x = e: 1 + 1 = 2.'] }),
  calc('Find the gradient of y = sin 3x at x = 0.', 3, { formula: '3 cos 3x', steps: ['dy/dx = 3 cos 3x.', 'At x = 0: 3.'] }),
  def('State the chain rule.', ['dy/dx = dy/du × du/dx', 'differentiate the outer function, then multiply by the derivative of the inner'], 'If y is a function of u and u is a function of x then dy/dx = (dy/du)(du/dx).'),
  exam('Differentiate y = x²/(2x + 1) and find the gradient of the curve at x = 1.', 'Differentiate', ['Uses the quotient rule with u = x², v = 2x + 1', 'dy/dx = (2x² + 2x)/(2x + 1)²', 'Gradient at x = 1 is 4/9'], 'dy/dx = (2x(2x + 1) − 2x²)/(2x + 1)² = (2x² + 2x)/(2x + 1)². At x = 1: 4/9.'),
]);

export const a72 = lesson('a7-stat', 'Stationary points and applications', '0606 topic 11', [
  'Set dy/dx = 0 to find stationary points and use d²y/dx² to classify them. Optimisation and rates of change use the same tools.',
], [
  byte('Stationary points and their nature', [
    'Stationary points have **dy/dx = 0**. Find x, then y.',
    '**d²y/dx² > 0:** minimum. **d²y/dx² < 0:** maximum. **= 0:** test the sign of the gradient either side (it may be a point of inflection).',
    'y = x³ − 6x² + 9x + 1: dy/dx = 3(x − 1)(x − 3); x = 1 gives y = 5 and d²y/dx² = −6 (**maximum**); x = 3 gives y = 1 (**minimum**).',
  ], calc('Find the maximum value of y = x³ − 6x² + 9x + 1.', 5, { formula: 'dy/dx = 3(x − 1)(x − 3)', steps: ['dy/dx = 3x² − 12x + 9 = 3(x − 1)(x − 3).', 'x = 1: y = 1 − 6 + 9 + 1 = 5, and d²y/dx² = 6x − 12 = −6, a maximum.'] }), { fig: { svg: 'stationaryTypes', caption: 'Maximum, minimum and point of inflection' } }),
  byte('Optimisation', [
    'Write the quantity to optimise as a function of **one variable**, differentiate, set to zero, then **prove** it is a maximum or minimum.',
    'A rectangle of perimeter 40 m has area A = x(20 − x); dA/dx = 20 − 2x = 0 gives x = 10, so the largest area is **100 m²**.',
    'Check the answer is in the **allowed range** and answer the question in context with units.',
  ], calc('A rectangle has perimeter 40 m. What is the largest possible area in m²?', 100, { unit: 'm²', formula: 'A = x(20 − x)', steps: ['A = 20x − x².', 'dA/dx = 20 − 2x = 0 gives x = 10.', 'A = 10 × 10 = 100.'] })),
  byte('Rates of change and small changes', [
    '**dy/dt = dy/dx × dx/dt.** For a circle A = πr²: dA/dt = 2πr dr/dt. With r = 4 and dr/dt = 0.5: dA/dt = **4π ≈ 12.57 cm²/s**.',
    '**Small changes:** δy ≈ (dy/dx) δx.',
    'A **positive** rate means increasing; a negative rate means decreasing.',
  ], calc('The radius of a circle is increasing at 0.5 cm/s. Find the rate at which its area is increasing when r = 4 cm, in cm²/s to 2 decimal places.', 12.57, { unit: 'cm²/s', formula: 'dA/dt = 2πr dr/dt', steps: ['dA/dt = 2π(4)(0.5) = 4π.', '4π = 12.57.'], tol: 0.01 })),
], [
  calc('Find the minimum value of y = x² − 4x + 7.', 3, { formula: 'dy/dx = 2x − 4', steps: ['dy/dx = 0 gives x = 2.', 'y = 4 − 8 + 7 = 3.'] }),
  calc('The volume of a sphere is V = 4πr³/3. Find dV/dr when r = 3, to 1 decimal place.', 113.1, { formula: '4πr²', steps: ['dV/dr = 4πr².', 'At r = 3: 36π = 113.1.'], tol: 0.1 }),
  calc('Two numbers x and y satisfy x + y = 12. Find the largest value of xy.', 36, { formula: 'x(12 − x)', steps: ['xy = 12x − x².', 'Derivative 12 − 2x = 0, so x = 6.', 'xy = 36.'] }),
  def('What is a stationary point?', ['A point on a curve where the gradient is zero', 'dy/dx = 0'], 'A stationary point is a point where dy/dx = 0.'),
  exam('A square sheet of card has sides 12 cm. Squares of side x cm are cut from each corner to make an open box with volume V = x(12 − 2x)². Find the value of x that gives the largest volume and the volume.', 'Find', ['Differentiates to (12 − 2x)(12 − 6x)', 'Sets to zero and rejects x = 6, so x = 2', 'Volume 2 × 8² = 128 cm³'], 'dV/dx = (12 − 2x)² − 4x(12 − 2x) = (12 − 2x)(12 − 6x) = 0, giving x = 2 (x = 6 gives zero volume). V = 2 × 64 = 128 cm³.'),
]);

export const a73 = lesson('a7-int', 'Integration', '0606 topic 12', [
  'Integration reverses differentiation. Definite integrals give areas and, with a boundary condition, fix the constant.',
], [
  byte('Integration as reverse differentiation', [
    '**∫xⁿ dx = xⁿ⁺¹/(n + 1) + c** (n ≠ −1); **∫e^(ax) dx = e^(ax)/a + c**; **∫1/x dx = ln|x| + c**; ∫cos x dx = sin x + c.',
    '**Definite integral:** ∫ₐᵇ f(x) dx = F(b) − F(a). ∫₁³ (2x + 1) dx = [x² + x]₁³ = 12 − 2 = **10**.',
    'Always include **+ c** for an indefinite integral and write the **limits** correctly.',
  ], calc('Evaluate ∫ from 1 to 3 of (2x + 1) dx.', 10, { formula: '[x² + x] from 1 to 3', steps: ['At 3: 9 + 3 = 12.', 'At 1: 1 + 1 = 2.', '12 − 2 = 10.'] }), { eq: ['∫xⁿ dx = xⁿ⁺¹/(n + 1) + c', '∫ₐᵇ f(x) dx = F(b) − F(a)'] }),
  byte('Area under a curve and between curves', [
    'The area between a curve and the x-axis from a to b is **∫ₐᵇ y dx** (area below the axis counts negative, so split at the roots).',
    'The area between **two curves** is **∫ (top − bottom) dx** between the intersection points. y = x and y = x² between 0 and 1: ∫(x − x²) dx = ½ − ⅓ = **1/6**.',
    'Sketch first to see which curve is on top.',
  ], calc('Find the area enclosed between the curve y = x² and the line y = x. Give your answer as a decimal to 3 decimal places.', 0.167, { formula: '∫₀¹ (x − x²) dx', steps: ['The curves meet at x = 0 and x = 1.', '[x²/2 − x³/3] from 0 to 1 = ½ − ⅓ = 1/6 = 0.167.'], tol: 0.001 }), { fig: { svg: 'areaCurve', caption: 'Area between y = x and y = x²' } }),
  byte('Finding the constant', [
    'Use a **given point** to find c. If dy/dx = 6x − 2 and the curve passes through (1, 3): y = 3x² − 2x + c, so 3 − 2 + c = 3 and **c = 2**.',
    'Then y(2) = 12 − 4 + 2 = **10**.',
    'The same idea gives displacement from velocity when s = 0 at t = 0.',
  ], calc('dy/dx = 6x − 2 and the curve passes through (1, 3). Find y when x = 2.', 10, { formula: 'y = 3x² − 2x + 2', steps: ['y = 3x² − 2x + c.', '3 = 3 − 2 + c gives c = 2.', 'y(2) = 12 − 4 + 2 = 10.'] })),
], [
  calc('Evaluate ∫ from 0 to 2 of (3x² + 2) dx.', 12, { formula: '[x³ + 2x]', steps: ['At 2: 8 + 4 = 12; at 0: 0.', 'Integral = 12.'] }),
  calc('Evaluate ∫ from 0 to 1 of e^(2x) dx to 2 decimal places.', 3.19, { formula: '[e^(2x)/2]', steps: ['(e² − 1)/2 = (7.389 − 1)/2 = 3.19.'], tol: 0.01 }),
  calc('Find the area between the curve y = 4 − x² and the x-axis from x = −2 to x = 2, to 2 decimal places.', 10.67, { unit: 'units²', formula: '[4x − x³/3]', steps: ['At 2: 8 − 8/3 = 16/3; at −2: −16/3.', 'Area = 32/3 = 10.67.'], tol: 0.01 }),
  def('What is a definite integral?', ['An integral with limits a and b', 'giving F(b) − F(a), the area under the curve'], 'A definite integral ∫ₐᵇ f(x) dx evaluates F(b) − F(a), the signed area under y = f(x).'),
  exam('Find the area enclosed between the curve y = x² and the line y = 2x.', 'Find', ['Finds the intersections x = 0 and x = 2', 'Integrates (2x − x²) to get x² − x³/3', 'Area = 4 − 8/3 = 4/3'], 'The curves meet at x = 0 and 2. ∫₀² (2x − x²) dx = [x² − x³/3] = 4 − 8/3 = 4/3.'),
]);

export const a74 = lesson('a7-kin', 'Kinematics', '0606 topic 12', [
  'Velocity is the derivative of displacement and acceleration the derivative of velocity; integrate to go the other way.',
], [
  byte('Calculus in kinematics', [
    '**v = ds/dt** and **a = dv/dt = d²s/dt²**. The **particle is at rest** when v = 0.',
    's = t³ − 6t² + 9t: v = 3t² − 12t + 9 = 3(t − 1)(t − 3), at rest at t = 1 and 3; a = 6t − 12, so at t = 4, **a = 12 m/s²**.',
    'Distinguish **displacement** (signed) from **distance** (total path length) and **speed** (magnitude of velocity).',
  ], calc('A particle moves so that s = t³ − 6t² + 9t. Find its acceleration at t = 4, in m/s².', 12, { unit: 'm/s²', formula: 'a = 6t − 12', steps: ['v = 3t² − 12t + 9.', 'a = 6t − 12.', 'At t = 4: 24 − 12 = 12.'] })),
  byte('From acceleration to displacement', [
    'Integrate: **v = ∫a dt** and **s = ∫v dt**, finding each constant from the **initial conditions**.',
    'a = 6t with v = 0 and s = 0 at t = 0: v = 3t² and s = t³, so s(2) = **8**.',
    'Check by differentiating back.',
  ], calc('A particle has acceleration a = 6t m/s². At t = 0 it is at the origin and at rest. Find its displacement at t = 2, in metres.', 8, { unit: 'm', formula: 's = t³', steps: ['v = ∫6t dt = 3t² + c, with v(0) = 0 so c = 0.', 's = ∫3t² dt = t³ + c, with s(0) = 0 so c = 0.', 's(2) = 8.'] })),
  byte('Constant acceleration and graphs', [
    '**v = u + at**, **s = ut + ½at²**, **v² = u² + 2as**, s = ½(u + v)t. List the known quantities first.',
    'u = 5, a = 2, t = 6: s = 5(6) + ½(2)(36) = **66 m**.',
    'On a **v–t graph** the gradient is a and the area is s; on an **s–t graph** the gradient is v.',
  ], calc('A car starts with speed 5 m/s and accelerates uniformly at 2 m/s² for 6 s. How far does it travel, in metres?', 66, { unit: 'm', formula: 's = ut + ½at²', steps: ['s = 5 × 6 + ½ × 2 × 36.', '= 30 + 36 = 66.'] }), { fig: { svg: 'kinematicsChain', caption: 'Displacement, velocity and acceleration' }, eq: ['v = u + at', 's = ut + ½at²', 'v² = u² + 2as'] }),
], [
  calc('A particle has displacement s = 2t³ + t metres. Find its velocity at t = 1, in m/s.', 7, { unit: 'm/s', formula: 'v = 6t² + 1', steps: ['v = 6t² + 1.', 'At t = 1: 7.'] }),
  calc('A particle has velocity v = t² − 4t m/s. At what time t > 0 is it instantaneously at rest?', 4, { unit: 's', formula: 't(t − 4) = 0', steps: ['t² − 4t = 0 gives t = 0 or 4.', 't > 0, so t = 4.'] }),
  calc('A car travelling at 20 m/s brakes with constant deceleration 4 m/s² until it stops. Find the stopping distance in metres.', 50, { unit: 'm', formula: 'v² = u² + 2as', steps: ['0 = 400 + 2(−4)s.', 's = 50.'] }),
  def('What is acceleration?', ['The rate of change of velocity', 'the derivative of velocity with respect to time'], 'Acceleration is the rate of change of velocity, a = dv/dt.'),
  exam('A particle moves with velocity v = 6t − 3t² m/s. Find the time (t > 0) at which it is instantaneously at rest and its displacement from t = 0 to that time.', 'Find', ['Sets 6t − 3t² = 0 so t = 2', 'Integrates to get s = 3t² − t³', 'Displacement 12 − 8 = 4 m'], 'v = 3t(2 − t) = 0 gives t = 2. s = ∫ v dt = 3t² − t³, so at t = 2, s = 12 − 8 = 4 m.'),
]);

export const unit7 = {
  id: 'a7', number: 7, title: 'Calculus and Kinematics', short: 'Calculus', emoji: '∫', color: 'sky',
  submodules: [a71, a72, a73, a74],
  papers: [],
};
