import { byte, lesson, mc, calc, multi, def, exam } from '../../../maths/data/helpers.js';

// Units 3 to 6: Graphs and circular measure, trigonometry, binomial and counting, vectors (Cambridge IGCSE Additional Mathematics 0606).

export const a31 = lesson('a3-lingraph', 'Straight-line graphs from curves', '0606 topic 5', [
  'Many relationships become straight lines when the right quantities are plotted. The gradient and intercept then give the unknown constants.',
], [
  byte('Reducing to linear form', [
    'Compare with **Y = mX + c**. y = 3x² + 2 plotted as **y against x²** is a straight line with **gradient 3** and **intercept 2**.',
    '**y = kxⁿ:** take logs, **lg y = n lg x + lg k**, so plot **lg y against lg x**: gradient **n**, intercept lg k.',
    '**y = abˣ:** **lg y = x lg b + lg a**, so plot **lg y against x**: gradient lg b, intercept lg a.',
  ], calc('y = 5x³ is plotted as lg y against lg x. What is the gradient of the straight line?', 3, { formula: 'lg y = 3 lg x + lg 5', steps: ['lg y = lg 5 + 3 lg x.', 'The gradient is 3.'] }), { fig: { svg: 'linearGraph', caption: 'Plotting y against x² gives a straight line' } }),
  byte('Finding constants from a graph', [
    'Read **two points** on the line, find the **gradient**, then the **intercept**, then write the original law.',
    'A graph of y against x² through (1, 5) and (3, 13) has gradient (13 − 5) ÷ (3 − 1) = 4 and intercept 1, so **y = 4x² + 1**.',
    'For y = a/x + b plot **y against 1/x**: gradient a and intercept b.',
  ], mc('The law y = a/x + b is to be shown as a straight line. What should be plotted?', [
    ['y against 1/x, with gradient a', 'Correct: y = a(1/x) + b has the form Y = mX + c.'],
    ['y against x, with gradient a', 'The graph of y against x is a curve for this law.'],
    ['y against 1/x, with gradient b', 'b is the intercept, not the gradient.'],
    ['y against x², with gradient 1/a', 'x² does not appear in the law.'],
  ], 0)),
  byte('Where a line meets a curve', [
    'Set the two equations equal, rearrange to a quadratic, and solve; each x gives a **y** from the line.',
    'y = x + 2 and y = x²: x² − x − 2 = 0, so x = 2 or −1, giving **(2, 4)** and **(−1, 1)**.',
    'The **distance** between the points is √(Δx² + Δy²).',
  ], calc('The line y = x + 2 meets the curve y = x² at two points. Find the distance between them to 2 decimal places.', 4.24, { formula: '√((2 − (−1))² + (4 − 1)²)', steps: ['The points are (2, 4) and (−1, 1).', '√(9 + 9) = √18 = 4.24.'], tol: 0.01 })),
], [
  calc('y = 3 × 2ˣ is plotted as lg y against x. What is the gradient to 3 decimal places?', 0.301, { formula: 'lg 2', steps: ['lg y = lg 3 + x lg 2.', 'Gradient = lg 2 = 0.301.'], tol: 0.001 }),
  calc('When y is plotted against x², the points (x² = 0, y = 2) and (x² = 2, y = 10) lie on the straight line. Find y when x = 3.', 38, { formula: 'y = 4x² + 2', steps: ['Gradient = (10 − 2) ÷ (2 − 0) = 4.', 'The intercept is 2, so y = 4x² + 2.', 'When x = 3, y = 4(9) + 2 = 38.'], tol: 0.01 }),
  calc('y = a/x + b is plotted as y against 1/x. The line passes through (0.5, 7) and (2, 13). Find a.', 4, { formula: 'gradient', steps: ['Gradient = (13 − 7) ÷ (2 − 0.5) = 4.', 'a = 4.'] }),
  def('Why plot lg y against lg x for y = kxⁿ?', ['Taking logs gives lg y = n lg x + lg k', 'which is a straight line with gradient n'], 'Because lg y = n lg x + lg k is linear in lg x with gradient n and intercept lg k.'),
  exam('Two variables satisfy y = axⁿ. A graph of ln y against ln x is a straight line with gradient 2 and intercept ln 3. Find a and n.', 'Find', ['ln y = n ln x + ln a', 'n = 2 (the gradient)', 'a = 3 (since ln a = ln 3)'], 'ln y = n ln x + ln a, so n = 2 and ln a = ln 3, hence a = 3.'),
]);

export const a32 = lesson('a3-radian', 'Radians, arcs and sectors', '0606 topic 6', [
  'Radians measure an angle by arc length ÷ radius. They make arc and sector formulas simple.',
], [
  byte('Radians', [
    '**π radians = 180°.** To convert degrees to radians multiply by **π/180**; radians to degrees by **180/π**.',
    'One radian is the angle at the centre of a circle subtended by an arc **equal to the radius** (about 57.3°).',
    'Know 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 180° = π, 360° = 2π. 5π/6 rad is **150°**.',
  ], calc('Convert 5π/6 radians to degrees.', 150, { unit: '°', formula: '5π/6 × 180/π', steps: ['(5/6) × 180 = 150.'] }), { fig: { svg: 'radianSector', caption: 'A sector with angle θ radians' } }),
  byte('Arc length and sector area in radians', [
    '**Arc length s = rθ** and **sector area A = ½r²θ** (θ in radians).',
    'Sector perimeter = **rθ + 2r**.',
    'r = 8, θ = 0.75: s = **6** and A = ½ × 64 × 0.75 = **24**.',
  ], calc('A sector has radius 8 cm and angle 0.75 radians. Find its area in cm².', 24, { unit: 'cm²', formula: '½ r² θ', steps: ['½ × 64 × 0.75 = 24.'] }), { eq: ['s = rθ', 'A = ½ r² θ'] }),
  byte('Segments and compound shapes', [
    'A **segment** is the sector minus a triangle: **A = ½r²(θ − sin θ)**.',
    'For compound shapes split into sectors, triangles and segments and add or subtract. Keep the calculator in **radian mode**.',
    'r = 10, θ = 1.2: A = 50(1.2 − 0.932) = **13.40 cm²**.',
  ], calc('Find the area of the segment of a circle of radius 10 cm cut off by a chord that subtends 1.2 radians at the centre. Give your answer to 2 decimal places.', 13.4, { unit: 'cm²', formula: '½ × 100 × (1.2 − sin 1.2)', steps: ['sin 1.2 = 0.93204.', '1.2 − 0.93204 = 0.26796.', '50 × 0.26796 = 13.40.'], tol: 0.02 })),
], [
  calc('Convert 2.5 radians to degrees. Give your answer to 1 decimal place.', 143.2, { unit: '°', formula: '2.5 × 180/π', steps: ['2.5 × 57.2958 = 143.24.'], tol: 0.1 }),
  calc('A sector has radius 12 cm and angle 0.5 radians. Find its arc length in cm.', 6, { unit: 'cm', formula: 'rθ', steps: ['12 × 0.5 = 6.'] }),
  calc('A sector of radius 6 cm has area 36 cm². Find its angle in radians.', 2, { unit: 'rad', formula: 'θ = 2A ÷ r²', steps: ['36 = ½ × 36 × θ.', 'θ = 2.'] }),
  def('Define a radian.', ['The angle at the centre of a circle', 'subtended by an arc equal in length to the radius'], 'One radian is the angle subtended at the centre by an arc whose length equals the radius.'),
  exam('Sector OAB has radius 10 cm and angle 0.8 radians. Find its perimeter and area.', 'Find', ['Arc length 10 × 0.8 = 8 cm', 'Perimeter 8 + 20 = 28 cm', 'Area ½ × 100 × 0.8 = 40 cm²'], 'Arc = 8 cm so perimeter = 8 + 10 + 10 = 28 cm. Area = ½ × 10² × 0.8 = 40 cm².'),
]);

export const unit3 = {
  id: 'a3', number: 3, title: 'Graphs and Circular Measure', short: 'Graphs', emoji: '📈', color: 'teal',
  submodules: [a31, a32],
  papers: [],
};

export const a41 = lesson('a4-trig', 'Trigonometric functions and equations', '0606 topic 7', [
  'Work in radians as well as degrees. Reciprocal functions sec, cosec and cot extend the toolkit for graphs and equations.',
], [
  byte('Exact values in radians', [
    'sin(π/6) = ½, cos(π/3) = ½, sin(π/4) = cos(π/4) = **1/√2**, sin(π/3) = cos(π/6) = **√3/2**, tan(π/4) = 1, tan(π/3) = √3.',
    'Use the **unit circle**: cos is the x-coordinate and sin the y-coordinate, so signs follow the quadrant (**ASTC**: all, sin, tan, cos positive).',
    'cos(2π/3) = −cos(π/3) = **−½** (second quadrant, cos negative).',
  ], mc('What is the exact value of cos(2π/3)?', [
    ['−1/2', 'Correct: second quadrant, so cos is negative; reference angle π/3.'],
    ['1/2', 'cos is negative in the second quadrant.'],
    ['−√3/2', 'This is cos(5π/6); the reference angle for 2π/3 is π/3.'],
    ['√3/2', 'This is cos(π/6), with the wrong sign and angle.'],
  ], 0), { fig: { svg: 'unitCircle', caption: 'The unit circle with exact values' } }),
  byte('Graphs, amplitude and equations', [
    'y = a sin(bx) + c has **amplitude a**, **period 2π/b** (360°/b) and a vertical shift c.',
    'Solve by finding the **principal value**, then all values in the range using symmetry and the period. cos 3x = 0.5 has 3x = ±π/3 + 2πn.',
    'For cos 3x = 0.5 on 0 ≤ x ≤ 2π, 3x covers 0 to 6π, so there are **6** solutions.',
  ], calc('How many solutions does cos 3x = 0.5 have for 0 ≤ x ≤ 2π?', 6, { formula: '3x runs from 0 to 6π', steps: ['cos θ = 0.5 twice in each 2π.', 'θ covers three full turns, so 3 × 2 = 6 solutions.'] })),
  byte('Reciprocal functions: sec, cosec, cot', [
    '**sec x = 1/cos x**, **cosec x = 1/sin x**, **cot x = 1/tan x = cos x/sin x**.',
    'They are **undefined** where the denominator is zero, with vertical **asymptotes** on the graph.',
    'sec x = 2 gives cos x = ½, so the smallest positive x is **π/3 ≈ 1.05**.',
  ], calc('Find the smallest positive solution of sec x = 2 in radians, to 2 decimal places.', 1.05, { unit: 'rad', formula: 'cos x = ½', steps: ['sec x = 2 means cos x = 1/2.', 'x = π/3 = 1.0472, which is 1.05 to 2 d.p.'], tol: 0.01 })),
], [
  calc('Find the period of y = sin 2x in radians, to 2 decimal places.', 3.14, { unit: 'rad', formula: '2π ÷ 2', steps: ['Period = 2π ÷ 2 = π = 3.14.'], tol: 0.01 }),
  calc('Find the smallest positive solution of tan x = 1 in radians, to 3 decimal places.', 0.785, { unit: 'rad', formula: 'π/4', steps: ['tan(π/4) = 1.', 'π/4 = 0.785.'], tol: 0.001 }),
  calc('Work out the exact value of cot(π/4).', 1, { formula: 'cos ÷ sin', steps: ['cos(π/4) = sin(π/4), so cot(π/4) = 1.'] }),
  multi('Select ALL the true statements.', [['sec x = 1/cos x', 'Correct.', true], ['cot x = 1/tan x', 'Correct.', true], ['The graph of sec x has asymptotes', 'It is undefined where cos x = 0.', true], ['cosec x = 1/cos x', 'It is 1/sin x.', false]], 'Link each reciprocal to its function.'),
  exam('Solve sin 2x = 0.5 for 0 ≤ x ≤ π. Give x in terms of π.', 'Solve', ['2x = π/6 or 5π/6', 'Divides by 2', 'x = π/12 and 5π/12'], '2x = π/6 or 5π/6 in the range 0 to 2π, so x = π/12 or 5π/12.'),
]);

export const a42 = lesson('a4-trigid', 'Trigonometric identities', '0606 topic 7', [
  'sin² + cos² = 1 and its relatives let you simplify, prove and solve. Always work on one side of an identity.',
], [
  byte('The basic identities', [
    '**sin²x + cos²x = 1**; **1 + tan²x = sec²x**; **1 + cot²x = cosec²x**; **tan x = sin x ÷ cos x**.',
    'Given sin A = 3/5 with A acute: cos A = 4/5, so **tan A = 3/4**.',
    'Check the **sign** by the quadrant (A obtuse: cos is negative).',
  ], calc('sin A = 3/5 and A is acute. Find tan A as a decimal.', 0.75, { formula: 'sin ÷ cos', steps: ['cos A = √(1 − 9/25) = 4/5.', 'tan A = 3/4 = 0.75.'], tol: 0.001 }), { eq: ['sin²x + cos²x = 1', '1 + tan²x = sec²x', '1 + cot²x = cosec²x'] }),
  byte('Proving identities', [
    'Start with the **more complicated side** and change everything to sin and cos if stuck. Never move terms across the equals sign.',
    '(1 − cos²θ)/(sin θ cos θ) = sin²θ/(sin θ cos θ) = sin θ/cos θ = **tan θ**.',
    'Finish with “as required” or ≡ and the target expression.',
  ], mc('Simplify (1 − cos²θ)/(sin θ cos θ).', [
    ['tan θ', 'Correct: the numerator is sin²θ.'],
    ['sin θ', 'The denominator contains cos θ, which remains after cancelling sin θ.'],
    ['cot θ', 'This inverts the result: sin θ ÷ cos θ is tan θ.'],
    ['sec θ', 'This would be 1/cos θ; the sin θ in the numerator does not cancel away.'],
  ], 0)),
  byte('Solving equations with identities', [
    'Replace to get **one trig function**, then solve like a quadratic. 2cos²x + sin x − 1 = 0 becomes 2(1 − sin²x) + sin x − 1 = 0, so 2s² − s − 1 = 0, giving (2s + 1)(s − 1) = 0.',
    'sin x = 1 or −½. In 0° ≤ x < 360°: x = 90°, 210°, 330° (**3** solutions).',
    'Reject values outside [−1, 1] and **do not divide by a trig function** (you may lose solutions).',
  ], calc('Solve 2cos²x + sin x − 1 = 0 for 0° ≤ x < 360°. How many solutions are there?', 3, { formula: '2sin²x − sin x − 1 = 0', steps: ['2(1 − sin²x) + sin x − 1 = 0, so 2sin²x − sin x − 1 = 0.', '(2 sin x + 1)(sin x − 1) = 0, so sin x = 1 or −½.', 'x = 90°, 210°, 330°: 3 solutions.'] })),
], [
  calc('cos A = −5/13 and A is obtuse. Find sin A as a decimal to 3 decimal places.', 0.923, { formula: '12/13', steps: ['sin²A = 1 − 25/169 = 144/169.', 'sin A = 12/13 = 0.923 (positive in the second quadrant).'], tol: 0.001 }),
  calc('tan x = 2. Find the value of sec²x.', 5, { formula: '1 + tan²x', steps: ['sec²x = 1 + 4 = 5.'] }),
  calc('cot θ = 3. Find the value of cosec²θ.', 10, { formula: '1 + cot²θ', steps: ['cosec²θ = 1 + 9 = 10.'] }),
  def('State the identity that links tan x and sec x.', ['1 + tan²x', '= sec²x'], '1 + tan²x = sec²x.'),
  exam('Prove that sin x/(1 + cos x) + (1 + cos x)/sin x = 2/sin x.', 'Prove', ['Combines over (1 + cos x) sin x', 'Numerator sin²x + 1 + 2cos x + cos²x = 2 + 2cos x', 'Cancels 2(1 + cos x) to give 2/sin x'], 'Common denominator: (sin²x + (1 + cos x)²)/(sin x(1 + cos x)) = (2 + 2 cos x)/(sin x(1 + cos x)) = 2/sin x.'),
]);

export const unit4 = {
  id: 'a4', number: 4, title: 'Trigonometry', short: 'Trigonometry', emoji: '📐', color: 'indigo',
  submodules: [a41, a42],
  papers: [],
};

export const a51 = lesson('a5-binom', 'The binomial theorem', '0606 topic 8', [
  'Binomial coefficients nCr come from Pascal’s triangle; the expansion of (a + b)ⁿ lets you pick out any term.',
], [
  byte('Pascal’s triangle and binomial coefficients', [
    'Row n of **Pascal’s triangle** gives the coefficients of (a + b)ⁿ. Each number is the **sum of the two above it**.',
    '**nCr = n!/(r!(n − r)!)** and nC0 = nCn = 1. 8C3 = (8 × 7 × 6)/(3 × 2 × 1) = **56**.',
    'Symmetry: **nCr = nC(n − r)**.',
  ], calc('Work out 8C3.', 56, { formula: '8!/(3!5!)', steps: ['(8 × 7 × 6) ÷ (3 × 2 × 1) = 336 ÷ 6 = 56.'] }), { fig: { svg: 'pascalTriangle', caption: 'Pascal’s triangle' }, eq: ['nCr = n!/(r!(n − r)!)'] }),
  byte('Binomial expansion', [
    '**(a + b)ⁿ = aⁿ + nC1 aⁿ⁻¹b + nC2 aⁿ⁻²b² + … + bⁿ**. The power of a falls as the power of b rises.',
    'Put **brackets round** terms like 2x or −x before raising to a power: (2x)³ = 8x³.',
    '(1 + 2x)⁵: the x³ term is 5C3 × 1² × (2x)³ = 10 × 8x³ = **80x³**.',
  ], calc('Find the coefficient of x³ in the expansion of (1 + 2x)⁵.', 80, { formula: '5C3 × 2³', steps: ['5C3 = 10 and 2³ = 8.', '10 × 8 = 80.'] })),
  byte('Finding a particular term', [
    'The term containing **bʳ** is **nCr aⁿ⁻ʳ bʳ**. In (2 − x)⁶ the x² term is 6C2 × 2⁴ × (−x)² = 15 × 16 = **240**.',
    'For a term **independent of x**, find r so the powers of x cancel. In (x + 1/x)⁶: x⁶⁻ʳ × x⁻ʳ = x⁰, so r = 3 and the term is 6C3 = **20**.',
    'Use the first few terms for **approximations**: (1.02)¹⁰ ≈ 1 + 0.2 + 0.018.',
  ], calc('Find the coefficient of x² in the expansion of (2 − x)⁶.', 240, { formula: '6C2 × 2⁴ × (−1)²', steps: ['6C2 = 15 and 2⁴ = 16.', '(−x)² = x².', '15 × 16 = 240.'] })),
], [
  calc('Work out 10C4.', 210, { formula: '10!/(4!6!)', steps: ['(10 × 9 × 8 × 7) ÷ 24 = 5040 ÷ 24 = 210.'] }),
  calc('Find the coefficient of x in the expansion of (3 + x)⁴.', 108, { formula: '4C1 × 3³', steps: ['4 × 27 = 108.'] }),
  calc('Find the term independent of x in the expansion of (x + 1/x)⁶.', 20, { formula: '6C3', steps: ['x⁶⁻ʳ × x⁻ʳ = x⁰ gives r = 3.', '6C3 = 20.'] }),
  def('What does nCr represent?', ['The number of ways to choose r items from n', 'without regard to order'], 'nCr is the number of ways of choosing r objects from n when order does not matter.'),
  exam('Find the first three terms, in ascending powers of x, of (1 + x/2)⁶.', 'Find', ['Constant term 1', 'x term 6 × x/2 = 3x', 'x² term 15 × x²/4 = 15x²/4'], '1 + 6(x/2) + 15(x/2)² = 1 + 3x + (15/4)x².'),
]);

export const a52 = lesson('a5-perm', 'Permutations and combinations', '0606 topic 9', [
  'Count arrangements (order matters) with permutations and selections (order ignored) with combinations.',
], [
  byte('Arrangements and factorials', [
    '**n!** is the number of ways to arrange n different objects. 5! = **120**.',
    'With **repeated** objects divide by the factorial of each repeat: the letters of LETTER (E twice, T twice) give 6!/(2! 2!) = **180**.',
    'Restrictions: treat items that must stay **together** as one block; place **restricted** positions first.',
  ], calc('How many different arrangements are there of the letters of the word LETTER?', 180, { formula: '6!/(2! × 2!)', steps: ['There are 6 letters with E twice and T twice.', '720 ÷ 4 = 180.'] })),
  byte('Permutations nPr', [
    '**nPr = n!/(n − r)!**: arranging r items chosen from n. 7P3 = 7 × 6 × 5 = **210**.',
    'Use it when **order matters** (positions, codes, rankings).',
    '3-digit numbers from the digits 1 to 5 with no repeats: 5P3 = **60**.',
  ], calc('Work out 7P3.', 210, { formula: '7 × 6 × 5', steps: ['7!/4! = 7 × 6 × 5 = 210.'] }), { eq: ['nPr = n!/(n − r)!'] }),
  byte('Combinations nCr', [
    '**nCr** counts selections when **order does not matter**. 9C4 = **126**.',
    'Break **“some of each”** selections into products: 3 men from 5 and 2 women from 4: 5C3 × 4C2 = 10 × 6 = **60**.',
    '“At least” questions: use **total − none**. At least one girl in a team of 4 from 6 boys and 4 girls: 10C4 − 6C4 = 195.',
  ], calc('A group of 5 men and 4 women forms a committee of 3 men and 2 women. How many different committees are possible?', 60, { formula: '5C3 × 4C2', steps: ['5C3 = 10 and 4C2 = 6.', '10 × 6 = 60.'] })),
], [
  calc('Work out 9C4.', 126, { formula: '9!/(4!5!)', steps: ['(9 × 8 × 7 × 6) ÷ 24 = 126.'] }),
  calc('How many 3-digit numbers can be made from the digits 1, 2, 3, 4, 5 with no digit repeated?', 60, { formula: '5P3', steps: ['5 × 4 × 3 = 60.'] }),
  calc('In how many ways can the letters of BANANA be arranged?', 60, { formula: '6!/(3! × 2!)', steps: ['6 letters; A three times, N twice.', '720 ÷ 12 = 60.'] }),
  def('What is the difference between a permutation and a combination?', ['A permutation counts arrangements where order matters', 'a combination counts selections where order does not matter'], 'A permutation is an ordered arrangement; a combination is an unordered selection.'),
  exam('A team of 4 is chosen from 6 boys and 4 girls. Find the number of teams that include at least one girl.', 'Find', ['Total number of teams 10C4 = 210', 'Teams with no girls 6C4 = 15', 'At least one girl 210 − 15 = 195'], 'Total = 10C4 = 210. No girls: 6C4 = 15. So 210 − 15 = 195.'),
]);

export const unit5 = {
  id: 'a5', number: 5, title: 'Binomial and Counting', short: 'Counting', emoji: '🎲', color: 'amber',
  submodules: [a51, a52],
  papers: [],
};

export const a61 = lesson('a6-vec', 'Vectors', '0606 topic 10', [
  'Vectors have size and direction. Use them for position, collinearity, ratios and relative velocity.',
], [
  byte('Vectors, magnitude and unit vectors', [
    'A vector **xi + yj** has **magnitude √(x² + y²)**. |3i − 4j| = **5**.',
    'A **unit vector** has magnitude 1: divide the vector by its magnitude. The unit vector along 3i + 4j is (3i + 4j)/5.',
    '**Parallel** vectors are scalar multiples: (6, 10) is parallel to (3, 5).',
  ], calc('Find the magnitude of the vector 3i − 4j.', 5, { formula: '√(9 + 16)', steps: ['√25 = 5.'] })),
  byte('Position vectors and ratios', [
    '**AB = b − a** (position of B minus position of A). The midpoint M has **OM = ½(a + b)**.',
    'A point P dividing AB in the ratio **m : n** (AP : PB) has **OP = (n a + m b)/(m + n)**.',
    'A(2, 1), B(8, 10), ratio 1 : 2: P = A + ⅓AB = (4, 4). To show **collinear**, show AB = k AC.',
  ], calc('A is (2, 1) and B is (8, 10). The point P divides AB so that AP : PB = 1 : 2. Find the sum of the coordinates of P.', 8, { formula: 'P = A + ⅓(B − A)', steps: ['AB = (6, 9) and ⅓AB = (2, 3).', 'P = (4, 4).', '4 + 4 = 8.'] })),
  byte('Velocity and relative velocity', [
    '**Resultant velocity = sum** of the vectors (velocity of body + velocity of wind or current).',
    'Draw a **triangle of velocities** and use Pythagoras or the sine and cosine rules; give **speed** (magnitude) and **direction** (bearing).',
    'An aircraft flying north at 200 km/h in a 50 km/h east wind has ground speed √(200² + 50²) = **206.2 km/h**.',
  ], calc('An aircraft has airspeed 200 km/h due north in a wind blowing at 50 km/h due east. Find its ground speed in km/h to 1 decimal place.', 206.2, { unit: 'km/h', formula: '√(200² + 50²)', steps: ['The velocities are at right angles.', '√(40 000 + 2 500) = √42 500 = 206.2.'], tol: 0.1 }), { fig: { svg: 'riverVelocity', caption: 'Triangle of velocities' } }),
], [
  calc('p = 2i + 3j and q = −i + 4j. Find |p + q| to 2 decimal places.', 7.07, { formula: '√(1² + 7²)', steps: ['p + q = i + 7j.', '√50 = 7.07.'], tol: 0.01 }),
  calc('The vector 3i + kj is parallel to 6i + 10j. Find k.', 5, { formula: '3/6 = k/10', steps: ['6i + 10j = 2(3i + 5j).', 'k = 5.'] }),
  calc('A boat travels at 5 m/s due north through water that flows due east at 3 m/s. Find its speed relative to the ground in m/s, to 2 decimal places.', 5.83, { unit: 'm/s', formula: '√(5² + 3²)', steps: ['√34 = 5.83.'], tol: 0.01 }),
  def('What is a unit vector?', ['A vector with magnitude 1', 'found by dividing a vector by its magnitude'], 'A unit vector has magnitude 1; divide any vector by its magnitude to get one.'),
  exam('OA = 4i + j and OB = 10i + 7j. The point C has position vector 7i + 4j. Show that A, B and C lie on a straight line.', 'Show that', ['AB = 6i + 6j', 'AC = 3i + 3j', 'AC = ½AB, so they are parallel and share A'], 'AB = (6, 6) and AC = (3, 3) = ½AB. The vectors are parallel and share the point A, so A, B and C are collinear.'),
]);

export const unit6 = {
  id: 'a6', number: 6, title: 'Vectors', short: 'Vectors', emoji: '↗️', color: 'rose',
  submodules: [a61],
  papers: [],
};
