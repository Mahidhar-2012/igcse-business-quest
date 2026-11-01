import { byte, lesson, mc, calc, multi, match, def, exam } from '../helpers.js';

// Unit 6: Trigonometry (Cambridge IGCSE Mathematics 0580, topics C6 and E6).

export const m61 = lesson('m6-pyth', 'Pythagoras’ theorem', 'C5.6, E6.1', [
  'In a right-angled triangle the square on the hypotenuse equals the sum of the squares on the other two sides.',
], [
  byte('Pythagoras’ theorem', [
    '**a² + b² = c²**, where **c is the hypotenuse**, the longest side, opposite the right angle.',
    'To find the **hypotenuse add** the squares then square-root. To find a **shorter side subtract**: a² = c² − b².',
    'Always check the hypotenuse is the longest side. 8, 15 gives √(64 + 225) = √289 = **17**.',
  ], calc('A right-angled triangle has shorter sides 8 cm and 15 cm. Find the length of the hypotenuse, in cm.', 17, { unit: 'cm', formula: '√(8² + 15²)', steps: ['64 + 225 = 289.', '√289 = 17.'] }), { fig: { svg: 'pythagoras', caption: 'a² + b² = c²' }, eq: ['a² + b² = c²'] }),
  byte('Is the triangle right-angled?', [
    'The **converse** works too: if a² + b² = c² for the two shorter sides and the longest side, the triangle is **right-angled**.',
    'Common **Pythagorean triples**: 3, 4, 5; 5, 12, 13; 8, 15, 17; 7, 24, 25 (and multiples such as 9, 12, 15).',
    'Show your working by calculating **both sides** of the equation and comparing.',
  ], mc('Which set of lengths forms a right-angled triangle?', [
    ['9 cm, 12 cm, 15 cm', 'Correct: 81 + 144 = 225 = 15².'],
    ['6 cm, 8 cm, 12 cm', '36 + 64 = 100, which is not 144.'],
    ['7 cm, 24 cm, 26 cm', '49 + 576 = 625, which is 25², not 26².'],
    ['10 cm, 24 cm, 25 cm', '100 + 576 = 676, which is 26², not 25².'],
  ], 0)),
  byte('Pythagoras in coordinates and 3D', [
    'In coordinates, **distance = √(Δx² + Δy²)**. A **3D diagonal** of a cuboid is **√(l² + w² + h²)**.',
    'For 3D problems find the **face diagonal first**, then use a **second right-angled triangle**.',
    'For a 3 × 4 × 12 cuboid: √(9 + 16 + 144) = √169 = **13**.',
  ], calc('A cuboid measures 3 cm by 4 cm by 12 cm. Find the length of its longest diagonal, in cm.', 13, { unit: 'cm', formula: '√(3² + 4² + 12²)', steps: ['9 + 16 + 144 = 169.', '√169 = 13.'] }), { fig: { svg: 'cuboidDiagonal', caption: 'Space diagonal of a cuboid' } }),
], [
  calc('A 5 m ladder has its foot 1.4 m from a vertical wall. How high up the wall does it reach, in metres?', 4.8, { unit: 'm', formula: '√(5² − 1.4²)', steps: ['25 − 1.96 = 23.04.', '√23.04 = 4.8.'], tol: 0.01 }),
  calc('An isosceles triangle has sides 13 cm, 13 cm and 10 cm. Find its area, in cm².', 60, { unit: 'cm²', formula: 'height from Pythagoras', steps: ['Half the base is 5, so height = √(169 − 25) = 12.', 'Area = ½ × 10 × 12 = 60.'] }),
  calc('Find the distance between (−1, 2) and (4, 14).', 13, { formula: '√(5² + 12²)', steps: ['Δx = 5 and Δy = 12.', '√(25 + 144) = 13.'] }),
  multi('Select ALL the sets of lengths that are Pythagorean triples.', [['5, 12, 13', '25 + 144 = 169.', true], ['8, 15, 17', '64 + 225 = 289.', true], ['6, 8, 11', '36 + 64 = 100, not 121.', false], ['9, 40, 41', '81 + 1600 = 1681 = 41².', true]], 'Check a² + b² = c² each time.'),
  exam('Show that a triangle with sides 7 cm, 24 cm and 25 cm is right-angled.', 'Show that', ['Calculates 7² + 24² = 49 + 576 = 625', 'Calculates 25² = 625 and concludes the converse of Pythagoras gives a right angle'], '49 + 576 = 625 = 25², so by the converse of Pythagoras’ theorem the triangle is right-angled.'),
]);

export const m62 = lesson('m6-trig', 'Sine, cosine and tangent', 'C6.1 to C6.3', [
  'SOH CAH TOA connects an angle to two sides of a right-angled triangle. Label the sides first.',
], [
  byte('Sine, cosine and tangent', [
    'Label the sides from the angle: **hypotenuse** (opposite the right angle), **opposite** (across from the angle), **adjacent** (next to it).',
    '**sin θ = opp/hyp**, **cos θ = adj/hyp**, **tan θ = opp/adj** (SOH CAH TOA).',
    'To find an **angle** use the **inverse** function: tan⁻¹(7/24) = **16.26°**. Check the calculator is in **degrees** mode.',
  ], calc('In a right-angled triangle the side opposite angle θ is 7 cm and the adjacent side is 24 cm. Find θ in degrees to 1 decimal place.', 16.3, { unit: '°', formula: 'θ = tan⁻¹(7/24)', steps: ['tan θ = 7/24.', 'θ = 16.26°, which is 16.3° to 1 d.p.'], tol: 0.1 }), { fig: { svg: 'sohcahtoa', caption: 'Opposite, adjacent and hypotenuse' }, eq: ['sin θ = opp/hyp', 'cos θ = adj/hyp', 'tan θ = opp/adj'] }),
  byte('Finding a side', [
    'Choose the ratio that contains the **side you know** and the **side you want**. Write it, then rearrange.',
    'If the unknown is on **top** multiply: opp = hyp × sin θ. If it is on the **bottom** divide: hyp = adj ÷ cos θ.',
    'With θ = 40° and adj = 9: hyp = 9 ÷ cos 40° = **11.75**. Check the hypotenuse is the longest side.',
  ], mc('A right-angled triangle has an angle of 40° and an adjacent side of 9 cm. What is the hypotenuse?', [
    ['11.75 cm', 'Correct: 9 ÷ cos 40°.'],
    ['6.89 cm', 'This multiplies by cos 40° instead of dividing.'],
    ['7.55 cm', 'This uses tan 40°, which gives the opposite side.'],
    ['14.00 cm', 'This divides by sin 40°; cosine is needed for the adjacent side.'],
  ], 0)),
  byte('Angles of elevation and depression', [
    'The **angle of elevation** is measured **up from the horizontal**; the **angle of depression** is measured **down from the horizontal**.',
    'The angle of depression from A to B equals the angle of elevation from B to A (**alternate angles**).',
    'Draw a **right-angled triangle** with a horizontal line, then label. Tower: 50 m away at 32° gives h = 50 tan 32° = **31.2 m**.',
  ], calc('From a point 50 m from the base of a tower on level ground, the angle of elevation of the top is 32°. Find the height of the tower in metres to 1 decimal place.', 31.2, { unit: 'm', formula: '50 × tan 32°', steps: ['tan 32° = opposite ÷ adjacent.', 'Height = 50 × 0.6249 = 31.2 m.'], tol: 0.1 }), { fig: { svg: 'elevationDepression', caption: 'Elevation and depression' } }),
], [
  calc('A right-angled triangle has opposite side 5 cm and hypotenuse 13 cm. Find the angle in degrees to 1 decimal place.', 22.6, { unit: '°', formula: 'sin⁻¹(5/13)', steps: ['sin θ = 5/13.', 'θ = 22.6°.'], tol: 0.1 }),
  calc('A ramp 6 m long rises at 12° to the horizontal. Find its height in metres to 2 decimal places.', 1.25, { unit: 'm', formula: '6 × sin 12°', steps: ['Height = 6 sin 12° = 1.2475.', 'To 2 d.p. this is 1.25.'], tol: 0.01 }),
  calc('From the top of a 40 m cliff the angle of depression of a boat is 25°. How far is the boat from the foot of the cliff, in metres to 1 decimal place?', 85.8, { unit: 'm', formula: '40 ÷ tan 25°', steps: ['The angle at the boat is 25° (alternate angles).', 'Distance = 40 ÷ tan 25° = 85.78.'], tol: 0.1 }),
  multi('Select ALL the correct statements.', [['sin θ = opposite ÷ hypotenuse', 'Correct.', true], ['cos θ = adjacent ÷ hypotenuse', 'Correct.', true], ['tan θ = adjacent ÷ opposite', 'It is opposite ÷ adjacent.', false], ['tan θ = sin θ ÷ cos θ', 'Correct.', true]], 'Use SOH CAH TOA.'),
  exam('A 6.5 m ladder leans against a wall with its foot 2.5 m from the wall. Calculate the angle between the ladder and the ground.', 'Calculate', ['Identifies adjacent 2.5 and hypotenuse 6.5 (cosine)', 'cos θ = 2.5/6.5', 'θ = 67.4°'], 'cos θ = 2.5 ÷ 6.5 = 0.3846, so θ = cos⁻¹(0.3846) = 67.4° to 1 d.p.'),
]);

export const m63 = lesson('m6-rules', 'Sine rule, cosine rule and area', 'E6.2 to E6.5', [
  'For triangles without a right angle use the sine rule (pairs) or the cosine rule (SAS or SSS), and area = ½ab sin C.',
], [
  byte('The sine rule', [
    '**a/sin A = b/sin B = c/sin C.** Side a is **opposite** angle A. Use it when you know a **matching pair** (a side and its opposite angle).',
    'To find a **side** put the unknown on top; to find an **angle** use sin A/a = sin B/b.',
    'a = 8, A = 40°, B = 65°: b = 8 × sin 65° ÷ sin 40° = **11.28**.',
  ], calc('In triangle ABC, a = 8 cm, angle A = 40° and angle B = 65°. Find side b in cm to 2 decimal places.', 11.28, { unit: 'cm', formula: 'b = a × sin B ÷ sin A', steps: ['b/sin 65° = 8/sin 40°.', 'b = 8 × 0.9063 ÷ 0.6428 = 11.28.'], tol: 0.01 }), { fig: { svg: 'abcTriangle', caption: 'Side a is opposite angle A' }, eq: ['a/sin A = b/sin B = c/sin C'] }),
  byte('The cosine rule', [
    '**a² = b² + c² − 2bc cos A.** Use it for **two sides and the included angle (SAS)**, or **three sides (SSS)**.',
    'To find an **angle**: **cos A = (b² + c² − a²)/(2bc)**. Put the angle you want opposite the side that is **squared alone**.',
    'a = 7, b = 9 and C = 60°: c² = 49 + 81 − 2(7)(9)cos 60° = 67, so c = **8.19**.',
  ], mc('In triangle ABC, a = 7, b = 9 and c = 11. Which expression gives cos C?', [
    ['(7² + 9² − 11²) ÷ (2 × 7 × 9)', 'Correct: C is opposite c, the side that is squared alone.'],
    ['(7² + 9² + 11²) ÷ (2 × 7 × 9)', 'The squared side c² is subtracted, not added.'],
    ['(7² + 11² − 9²) ÷ (2 × 7 × 11)', 'This gives cos B, the angle opposite b.'],
    ['11 ÷ (2 × 7 × 9)', 'This is not a form of the cosine rule.'],
  ], 0), { eq: ['a² = b² + c² − 2bc cos A', 'cos A = (b² + c² − a²)/(2bc)'] }),
  byte('Area of a triangle', [
    '**Area = ½ab sin C**, where C is the angle **between** sides a and b.',
    'No perpendicular height is needed. Use it when you know **two sides and the included angle**.',
    'Sides 10 and 12 with included angle 30°: ½ × 10 × 12 × 0.5 = **30**.',
  ], calc('Two sides of a triangle are 10 cm and 12 cm with an angle of 30° between them. Find the area in cm².', 30, { unit: 'cm²', formula: '½ × 10 × 12 × sin 30°', steps: ['sin 30° = 0.5.', '½ × 10 × 12 × 0.5 = 30.'] }), { eq: ['Area = ½ab sin C'] }),
], [
  calc('A triangle has sides 5 cm, 6 cm and 7 cm. Find its largest angle in degrees to 1 decimal place.', 78.5, { unit: '°', formula: 'cos θ = (5² + 6² − 7²)/(2 × 5 × 6)', steps: ['The largest angle is opposite the longest side.', 'cos θ = 12/60 = 0.2.', 'θ = 78.5°.'], tol: 0.1 }),
  calc('In triangle ABC, a = 12 cm, A = 50° and b = 10 cm. Find angle B in degrees to 1 decimal place.', 39.7, { unit: '°', formula: 'sin B = b sin A ÷ a', steps: ['sin B = 10 × sin 50° ÷ 12 = 0.6384.', 'B = 39.7°.'], tol: 0.1 }),
  calc('A triangle has sides 8 cm and 9 cm with an angle of 40° between them. Find its area in cm² to 1 decimal place.', 23.1, { unit: 'cm²', formula: '½ × 8 × 9 × sin 40°', steps: ['½ × 72 × 0.6428 = 23.14.'], tol: 0.1 }),
  multi('Select ALL the situations where the cosine rule is the right first step.', [['Two sides and the angle between them are known', 'This is SAS.', true], ['All three sides are known and an angle is wanted', 'This is SSS.', true], ['Two angles and a side are known', 'Use the sine rule (or angle sum).', false], ['A side and its opposite angle plus one other side are known', 'Use the sine rule.', false]], 'Match the known information to the rule.'),
  exam('A ship sails 12 km on a bearing of 040°, then 9 km on a bearing of 130°. Calculate its distance from the start.', 'Calculate', ['Finds the angle between the two legs is 90°', 'Uses Pythagoras 12² + 9²', 'Distance = 15 km'], 'The bearings differ by 90°, so the legs are at right angles. Distance = √(144 + 81) = √225 = 15 km.'),
]);

export const m64 = lesson('m6-graphs', 'Exact values, trig graphs and bearings', 'C6.4, E6.3, E6.6', [
  'Know the exact values for 30°, 45° and 60°, the shape of sin, cos and tan graphs, and measure bearings clockwise from north.',
], [
  byte('Exact trigonometric values', [
    'sin 30° = **½**, cos 60° = **½**, sin 60° = cos 30° = **√3/2**, tan 45° = **1**, tan 30° = **1/√3**, tan 60° = **√3**.',
    'Derive them from a **half-equilateral triangle** (30°, 60°, 90°) and a **right-angled isosceles triangle** (45°).',
    'sin 0° = 0, sin 90° = 1, cos 0° = 1, cos 90° = 0. Know them without a calculator.',
  ], mc('What is the exact value of sin 60° × cos 60°?', [
    ['√3/4', 'Correct: (√3/2) × (1/2).'],
    ['√3/2', 'This is sin 60° alone.'],
    ['1/4', 'This uses sin 30° × cos 60°.'],
    ['3/4', 'This squares sin 60°.'],
  ], 0)),
  byte('Graphs of sine, cosine and tangent', [
    '**y = sin x** and **y = cos x** repeat every **360°** and lie between **−1 and 1**. **y = tan x** repeats every **180°** and has asymptotes at 90°, 270°.',
    '**y = a sin(bx)**: **amplitude a**, **period 360° ÷ b**. y = 3 cos 2x has amplitude 3 and period **180°**.',
    'sin x = 0.5 in 0° ≤ x ≤ 360° has **two** solutions: 30° and **150°** (180° − 30°).',
  ], calc('Find the period of y = 3 cos 2x in degrees.', 180, { unit: '°', formula: '360 ÷ 2', steps: ['The period of cos(bx) is 360° ÷ b.', '360 ÷ 2 = 180.'] }), { fig: { svg: 'trigGraphs', caption: 'Sine and cosine graphs' } }),
  byte('Bearings', [
    'A **bearing** is the angle **clockwise from north**, written with **three digits** (for example 070°).',
    'The **back bearing** is the bearing **plus or minus 180°**. If B is on a bearing of 070° from A, then A is on **250°** from B.',
    'Draw a **north line** at every point and mark angles from it. Use alternate angles with parallel north lines.',
  ], calc('The bearing of B from A is 070°. Find the bearing of A from B, in degrees.', 250, { unit: '°', formula: '70 + 180', steps: ['The north lines at A and B are parallel.', 'The back bearing is 70° + 180° = 250°.'] }), { fig: { svg: 'bearings', caption: 'Bearings and back bearings' } }),
], [
  calc('Solve cos x = −0.5 for 0° ≤ x ≤ 180°. Give x in degrees.', 120, { unit: '°', formula: 'cos⁻¹(−0.5)', steps: ['cos 60° = 0.5 and cosine is negative in the second quadrant.', 'x = 180° − 60° = 120°.'] }),
  calc('Write down the amplitude of y = −4 sin x.', 4, { formula: 'amplitude is the size of the coefficient', steps: ['The graph runs between −4 and 4.', 'The amplitude is 4 (positive).'] }),
  calc('The bearing of A from B is 295°. Find the bearing of B from A, in degrees.', 115, { unit: '°', formula: '295 − 180', steps: ['Back bearing = 295° − 180° = 115°.'] }),
  multi('Select ALL the correct exact values.', [['sin 30° = 1/2', 'Correct.', true], ['cos 60° = 1/2', 'Correct.', true], ['tan 45° = 1', 'Correct.', true], ['sin 60° = 1/2', 'sin 60° = √3/2.', false]], 'Learn the 30°, 45°, 60° table.'),
  exam('Solve 2 sin x = 1 for 0° ≤ x ≤ 360°.', 'Solve', ['sin x = 0.5 so x = 30°', 'Second solution x = 180° − 30° = 150°'], 'sin x = 0.5, so x = 30° or x = 180° − 30° = 150°.'),
]);

export const unit6 = {
  id: 'm6', number: 6, title: 'Trigonometry', short: 'Trigonometry', emoji: '📐', color: 'indigo',
  submodules: [m61, m62, m63, m64],
  papers: [],
};

// Unit 7: Transformations and vectors (C7, E7).

export const m71 = lesson('m7-transform', 'Transformations', 'C7.1, E7.1', [
  'To describe a transformation fully you must name it and give its details: line, centre, angle, vector or scale factor.',
], [
  byte('Reflection and translation', [
    '**Reflection:** state the **mirror line**. In the x-axis (x, y) → (x, −y); in the y-axis (x, y) → (−x, y); in **y = x**, (x, y) → **(y, x)**.',
    '**Translation:** state the **column vector** (a, b): a right, b up. The shape is **not turned or resized**.',
    'Reflect (3, −2) in y = x: the coordinates swap to **(−2, 3)**.',
  ], calc('The point (3, −2) is reflected in the line y = x. What is the x-coordinate of the image?', -2, { formula: '(x, y) → (y, x)', steps: ['Reflection in y = x swaps the coordinates.', '(3, −2) → (−2, 3), so x = −2.'] }), { fig: { svg: 'reflectionGrid', caption: 'Reflection in a mirror line' } }),
  byte('Rotation', [
    'To describe a rotation give the **angle**, the **direction** (clockwise or anticlockwise) and the **centre**.',
    'About the origin: **90° anticlockwise** (x, y) → (−y, x); **180°** (x, y) → (−x, −y); **90° clockwise** (x, y) → (y, −x).',
    'The **centre can be found** by drawing perpendicular bisectors of the lines joining matching points.',
  ], calc('The point (4, 1) is rotated 90° clockwise about the origin. Find the y-coordinate of the image.', -4, { formula: '(x, y) → (y, −x)', steps: ['90° clockwise: (x, y) → (y, −x).', '(4, 1) → (1, −4), so y = −4.'] }), { fig: { svg: 'rotationGrid', caption: 'Rotation about a centre' } }),
  byte('Enlargement', [
    'Give the **centre** and the **scale factor k**. Each point’s distance from the centre is multiplied by k.',
    'A **negative k** puts the image on the **opposite side** of the centre and **inverted**. A fractional k (0 < k < 1) gives a **smaller** image.',
    'Lengths scale by k, **areas by k²**. Enlarge (2, 3) by k = −2 about the origin: **(−4, −6)**.',
  ], calc('The point (2, 3) is enlarged by scale factor −2 about the origin. Find the sum of the coordinates of the image.', -10, { formula: '(−2 × 2, −2 × 3)', steps: ['Image = (−4, −6).', '−4 + (−6) = −10.'] }), { fig: { svg: 'enlargementGrid', caption: 'Enlargement from a centre' } }),
], [
  calc('The point (4, 1) is translated by the vector (−3, 5). Find the sum of the coordinates of the image.', 7, { formula: '(4 − 3, 1 + 5)', steps: ['Image = (1, 6).', '1 + 6 = 7.'] }),
  calc('The point (5, 2) is reflected in the line x = 3. Find the x-coordinate of the image.', 1, { formula: '3 − (5 − 3)', steps: ['5 is 2 to the right of the mirror line.', 'The image is 2 to the left: x = 1.'] }),
  calc('A triangle of area 48 cm² is enlarged by scale factor ½. Find the area of the image, in cm².', 12, { unit: 'cm²', formula: '48 × (½)²', steps: ['Area factor = ¼.', '48 × ¼ = 12.'] }),
  multi('Select ALL the transformations that keep the shape the same size.', [['Reflection', 'Congruent image.', true], ['Rotation', 'Congruent image.', true], ['Translation', 'Congruent image.', true], ['Enlargement with scale factor 2', 'The image is bigger.', false]], 'Only enlargement changes size.'),
  exam('Triangle A has vertices (1, 2), (3, 2) and (1, 5). Triangle B has vertices (−1, −2), (−3, −2) and (−1, −5). Describe fully one single transformation that maps A onto B.', 'Describe', ['States rotation (or enlargement)', 'Angle 180° about the origin (or scale factor −1 centre origin)'], 'Rotation of 180° about the origin (equivalently an enlargement with scale factor −1 and centre (0, 0)).'),
]);

export const m72 = lesson('m7-vector', 'Vectors', 'E7.2 to E7.4', [
  'A vector has size and direction. Write it as a column, combine by adding components, and use letters to prove geometry.',
], [
  byte('Column vectors and magnitude', [
    'A **column vector (a, b)** means a across and b up. **Magnitude |v| = √(a² + b²)**.',
    '**Add** by adding components; **scalar multiples** scale both. **Parallel vectors** are multiples of each other.',
    '|(5, −12)| = √(25 + 144) = **13**.',
  ], calc('Find the magnitude of the vector with components 5 across and −12 up (that is (5, −12)).', 13, { formula: '√(5² + 12²)', steps: ['25 + 144 = 169.', '√169 = 13.'] }), { eq: ['|v| = √(a² + b²)'] }),
  byte('Vector arithmetic', [
    'For p = (2, 3) and q = (−1, 4): **3p − 2q = (6, 9) − (−2, 8) = (8, 1)**. Do each row separately.',
    'The vector from A to B is **AB = b − a** (position of B minus position of A). **BA = −AB.**',
    'If AB = k × CD the lines are **parallel**. If they also share a point they are on **one straight line**.',
  ], calc('p = (2, 3) and q = (−1, 4). Find the sum of the two components of 3p − 2q.', 9, { formula: '3p − 2q = (8, 1)', steps: ['3p = (6, 9) and 2q = (−2, 8).', '3p − 2q = (8, 1), so 8 + 1 = 9.'] })),
  byte('Vector geometry', [
    'Write every route in terms of **a and b** using **OA = a**, **OB = b**. **AB = −a + b.**',
    'The **midpoint** M of AB: **OM = ½(a + b)**. A point P dividing AB in the ratio 1 : 2: **OP = a + ⅓(b − a)**.',
    'To prove **collinear**, show two vectors are multiples **and share a point**.',
  ], mc('O is the origin, OA = a and OB = b. M is the midpoint of AB. Which expression gives OM?', [
    ['½(a + b)', 'Correct: OM = OA + ½AB = a + ½(b − a).'],
    ['½(b − a)', 'This is the vector AM, not OM.'],
    ['a + ½b', 'This misses halving the vector a part of the journey.'],
    ['½a + b', 'M is halfway along AB, so both parts are halved.'],
  ], 0), { fig: { svg: 'vectorGeometry', caption: 'Vectors on a triangle' } }),
], [
  calc('Find the magnitude of the vector with components (6, −8).', 10, { formula: '√(36 + 64)', steps: ['√100 = 10.'] }),
  calc('A is the point (1, 2) and AB = (3, 4). Find the sum of the coordinates of B.', 10, { formula: 'B = A + AB', steps: ['B = (1 + 3, 2 + 4) = (4, 6).', '4 + 6 = 10.'] }),
  calc('(4, −6) = k(−2, 3). Find k.', -2, { formula: '4 ÷ (−2)', steps: ['4 = −2k gives k = −2.', 'Check: −6 = 3 × (−2).'] }),
  multi('Select ALL the true statements.', [['AB = b − a', 'Position of B minus position of A.', true], ['BA = −AB', 'Reversing direction reverses the sign.', true], ['|v| is always positive or zero', 'A magnitude is a length.', true], ['(2, 3) and (3, 2) are parallel', 'They are not multiples of each other.', false]], 'Think in components.'),
  exam('OA = a and OB = b. P is on AB so that AP : PB = 1 : 2. Find OP in terms of a and b.', 'Find', ['AB = b − a', 'AP = ⅓(b − a)', 'OP = a + ⅓(b − a) = ⅔a + ⅓b'], 'AP = ⅓AB = ⅓(b − a). OP = OA + AP = a + ⅓(b − a) = ⅔a + ⅓b.'),
]);

export const unit7 = {
  id: 'm7', number: 7, title: 'Transformations and Vectors', short: 'Vectors', emoji: '↗️', color: 'sky',
  submodules: [m71, m72],
  papers: [],
};

// Unit 8: Probability (C8, E8).

export const m81 = lesson('m8-prob', 'Probability basics', 'C8.1 to C8.3', [
  'Probability measures chance from 0 (impossible) to 1 (certain). For equally likely outcomes it is favourable ÷ total.',
], [
  byte('Calculating probability', [
    '**P(event) = number of favourable outcomes ÷ total outcomes** (equally likely). Probabilities lie between **0 and 1** and **add to 1** for all outcomes.',
    '**P(not A) = 1 − P(A).** List outcomes in a **sample space** table to avoid missing any.',
    'Two dice: 36 outcomes. P(sum is 7) = 6/36 = **1/6**. P(at least one six) = **11/36**.',
  ], calc('Two fair dice are rolled. Find the probability that at least one shows a six. Give your answer as a decimal to 3 decimal places.', 0.306, { formula: '11 ÷ 36', steps: ['There are 36 outcomes.', 'Outcomes with at least one six: 6 + 6 − 1 = 11.', '11/36 = 0.306.'], tol: 0.001 }), { fig: { svg: 'sampleSpace', caption: 'Sample space for two dice' }, eq: ['P(A) = favourable ÷ total', 'P(not A) = 1 − P(A)'] }),
  byte('Mutually exclusive and independent events', [
    '**Mutually exclusive:** cannot both happen. **P(A or B) = P(A) + P(B).**',
    '**Independent:** one does not affect the other. **P(A and B) = P(A) × P(B).**',
    'If not mutually exclusive: **P(A or B) = P(A) + P(B) − P(A and B).** With P(A) = 0.4, P(B) = 0.5, independent: 0.4 + 0.5 − 0.2 = **0.7**.',
  ], mc('Events A and B are independent with P(A) = 0.4 and P(B) = 0.5. What is P(A or B)?', [
    ['0.7', 'Correct: 0.4 + 0.5 − 0.2.'],
    ['0.9', 'This adds the probabilities and forgets to subtract the overlap.'],
    ['0.2', 'This is P(A and B).'],
    ['0.6', 'This is not a valid combination of the given probabilities.'],
  ], 0), { eq: ['P(A and B) = P(A) × P(B)', 'P(A or B) = P(A) + P(B) − P(A and B)'] }),
  byte('Relative frequency and expected number', [
    '**Relative frequency = frequency ÷ number of trials.** It **estimates** probability; more trials give a better estimate.',
    '**Expected number = probability × number of trials.**',
    'A spinner lands on red 18 times in 60 spins, so P(red) ≈ **0.3**; in 500 spins expect about **150** reds.',
  ], calc('A spinner lands on red 18 times in 60 spins. Estimate how many reds there will be in 500 spins.', 150, { formula: '18/60 × 500', steps: ['Relative frequency = 18/60 = 0.3.', '0.3 × 500 = 150.'] }), { eq: ['Expected = P × n'] }),
], [
  calc('P(blue) = 0.35. Find P(not blue).', 0.65, { formula: '1 − 0.35', steps: ['1 − 0.35 = 0.65.'], tol: 0.001 }),
  calc('A fair coin is tossed twice. Find the probability of two heads, as a decimal.', 0.25, { formula: '½ × ½', steps: ['The tosses are independent.', '½ × ½ = 0.25.'], tol: 0.001 }),
  calc('A bag has 3 red and 5 green counters. One is taken at random. Find P(red) as a decimal.', 0.375, { formula: '3 ÷ 8', steps: ['3 red out of 8 counters.', '3/8 = 0.375.'], tol: 0.001 }),
  multi('Select ALL the values that could be a probability.', [['0.5', 'Between 0 and 1.', true], ['1.2', 'Greater than 1.', false], ['−0.1', 'Negative.', false], ['1', 'Certain.', true], ['0', 'Impossible.', true]], 'A probability lies from 0 to 1 inclusive.'),
  def('What does “mutually exclusive” mean for two events?', ['The two events cannot happen at the same time', 'so P(A and B) = 0'], 'Two events are mutually exclusive when they cannot both occur at once.'),
  exam('A fair spinner has the numbers 1 to 5 and is spun twice. Find the probability that the sum of the two numbers is at least 9.', 'Find', ['Lists favourable outcomes (4, 5), (5, 4), (5, 5)', 'Total outcomes 25', 'Probability 3/25'], 'There are 5 × 5 = 25 equally likely outcomes. The sums of at least 9 are (4, 5), (5, 4) and (5, 5), so the probability is 3/25.'),
]);

export const m82 = lesson('m8-tree', 'Tree diagrams and Venn diagrams', 'C8.4, E8.1, E8.2', [
  'Tree diagrams multiply along branches and add between branches. Venn diagrams sort data into overlapping sets.',
], [
  byte('Tree diagrams: independent events', [
    'Multiply **along** the branches for “and”. **Add** the end results for “or”. Each pair of branches **adds to 1**.',
    '“At least one” is often quickest as **1 − P(none)**. P(at least one six in 3 rolls) = 1 − (5/6)³.',
    'P(rain on exactly one of two days) with P(rain) = 0.4: 0.4 × 0.6 + 0.6 × 0.4 = **0.48**.',
  ], calc('The probability of rain on any day is 0.4, independent from day to day. Find the probability of rain on exactly one of two days.', 0.48, { formula: '2 × 0.4 × 0.6', steps: ['Rain then dry: 0.4 × 0.6 = 0.24.', 'Dry then rain: 0.6 × 0.4 = 0.24.', 'Total = 0.48.'], tol: 0.001 }), { fig: { svg: 'treeDiagram', caption: 'Tree diagram for two independent days' } }),
  byte('Without replacement', [
    'When items are **not replaced**, the **second branch probabilities change**. The denominator goes **down by 1**.',
    '5 red and 3 blue counters, two taken without replacement: P(both red) = 5/8 × 4/7 = **5/14**.',
    'P(one of each colour) = 5/8 × 3/7 + 3/8 × 5/7 = **15/28**. Do not forget **both orders**.',
  ], mc('A bag has 5 red and 3 blue counters. Two are taken without replacement. What is the probability they are different colours?', [
    ['15/28', 'Correct: 2 × (5/8 × 3/7) = 30/56.'],
    ['15/32', 'This is the answer if the first counter were replaced.'],
    ['5/14', 'This is the probability that both are red.'],
    ['15/56', 'This counts only one of the two possible orders.'],
  ], 0)),
  byte('Venn diagrams and set notation', [
    '**A ∩ B** = in both. **A ∪ B** = in either or both. **A′** = not in A. **n(A)** = number of elements. **∅** = empty set.',
    '**n(A ∪ B) = n(A) + n(B) − n(A ∩ B).** Fill the **intersection first**, then the rest of each set.',
    '**Conditional probability** P(A | B) = n(A ∩ B) ÷ n(B): restrict to B first.',
  ], calc('Of 40 students, 25 like pizza (A), 18 like pasta (B) and 6 like neither. How many like both?', 9, { formula: '25 + 18 − 34', steps: ['34 like at least one (40 − 6).', 'n(A ∩ B) = 25 + 18 − 34 = 9.'] }), { fig: { svg: 'vennDiagram', caption: 'Two overlapping sets' }, eq: ['n(A ∪ B) = n(A) + n(B) − n(A ∩ B)'] }),
], [
  calc('A fair die is rolled 3 times. Find the probability of at least one six, as a decimal to 3 decimal places.', 0.421, { formula: '1 − (5/6)³', steps: ['P(no six in 3 rolls) = 125/216.', '1 − 0.5787 = 0.421.'], tol: 0.001 }),
  calc('A bag has 4 red and 6 blue counters. Two are taken without replacement. Find the probability they are different colours, as a decimal to 3 decimal places.', 0.533, { formula: '2 × 4/10 × 6/9', steps: ['Red then blue: 4/10 × 6/9 = 24/90.', 'Blue then red is the same.', '48/90 = 0.533.'], tol: 0.001 }),
  calc('In the pizza and pasta problem (40 students; 25 like pizza A; 18 like pasta B; 9 like both), find P(A | B) as a decimal.', 0.5, { formula: 'n(A ∩ B) ÷ n(B)', steps: ['9 of the 18 pasta-lovers also like pizza.', '9 ÷ 18 = 0.5.'], tol: 0.001 }),
  multi('Select ALL the correct set notation meanings.', [['A ∩ B means in both A and B', 'Intersection.', true], ['A ∪ B means in A or B or both', 'Union.', true], ['A′ means not in A', 'Complement.', true], ['n(A) means the list of elements of A', 'n(A) is the number of elements.', false]], 'Link each symbol to its meaning.'),
  exam('The probability that a bus is late is 0.2 on each of two days, independently. Draw out the possible outcomes and find the probability that the bus is late on exactly one day.', 'Calculate', ['Late then on time 0.2 × 0.8 = 0.16', 'On time then late 0.8 × 0.2 = 0.16', 'Total 0.32'], 'P = 0.2 × 0.8 + 0.8 × 0.2 = 0.16 + 0.16 = 0.32.'),
]);

export const unit8 = {
  id: 'm8', number: 8, title: 'Probability', short: 'Probability', emoji: '🎲', color: 'rose',
  submodules: [m81, m82],
  papers: [],
};

// Unit 9: Statistics (C9, E9).

export const m91 = lesson('m9-avg', 'Averages and spread', 'C9.3, E9.4', [
  'Averages describe the middle, spread describes variety. Choose the measure that suits the data.',
], [
  byte('Mean, median, mode and range', [
    '**Mean** = total ÷ number of values. **Median** = middle value when ordered (the mean of the two middle values if n is even). **Mode** = most common. **Range** = largest − smallest.',
    'The **mean** uses every value but is pulled by **outliers**. The **median** is better for **skewed data**.',
    'Data 3, 7, 7, 9, 12, 14: median = (7 + 9)/2 = **8**; mode 7; range 11.',
  ], calc('Find the median of 3, 7, 7, 9, 12, 14.', 8, { formula: '(7 + 9) ÷ 2', steps: ['There are 6 values; the middle two are 7 and 9.', '(7 + 9) ÷ 2 = 8.'] })),
  byte('Estimating the mean from grouped data', [
    'Use the **midpoint** of each class, multiply by the **frequency**, add, and divide by the total frequency.',
    'The result is an **estimate** because the exact data are not known. The **modal class** has the highest frequency.',
    'Classes 0–10, 10–20, 20–30 with frequencies 4, 6, 10: (5×4 + 15×6 + 25×10) ÷ 20 = **18**.',
  ], calc('Frequencies for the classes 0 < x ≤ 10, 10 < x ≤ 20 and 20 < x ≤ 30 are 4, 6 and 10. Estimate the mean.', 18, { formula: 'Σ(midpoint × f) ÷ Σf', steps: ['5 × 4 + 15 × 6 + 25 × 10 = 20 + 90 + 250 = 360.', '360 ÷ 20 = 18.'] })),
  byte('Quartiles and interquartile range', [
    'The **lower quartile Q₁** is the median of the lower half; **Q₃** the median of the upper half. **IQR = Q₃ − Q₁.** The IQR is not affected by outliers.',
    'For **cumulative frequency** read Q₁ at **n/4**, the median at **n/2**, Q₃ at **3n/4**.',
    '2, 4, 5, 7, 8, 10, 12: median 7, Q₁ = 4, Q₃ = 10, IQR = **6**.',
  ], calc('Find the interquartile range of 2, 4, 5, 7, 8, 10, 12.', 6, { formula: 'Q₃ − Q₁', steps: ['Median = 7; lower half 2, 4, 5 has median 4; upper half 8, 10, 12 has median 10.', 'IQR = 10 − 4 = 6.'] }), { fig: { svg: 'boxPlot', caption: 'Box plot showing the quartiles' }, eq: ['IQR = Q₃ − Q₁'] }),
], [
  calc('The mean of 5 numbers is 12. A sixth number, 18, is added. Find the new mean.', 13, { formula: '(5 × 12 + 18) ÷ 6', steps: ['Total of five = 60.', '(60 + 18) ÷ 6 = 13.'] }),
  calc('Values 1, 2, 3, 4 have frequencies 3, 5, 8, 4. Find the mean.', 2.65, { formula: 'Σfx ÷ Σf', steps: ['Σfx = 3 + 10 + 24 + 16 = 53.', 'Σf = 20.', '53 ÷ 20 = 2.65.'], tol: 0.01 }),
  calc('The lower quartile is 34 and the upper quartile is 51. Find the interquartile range.', 17, { formula: '51 − 34', steps: ['IQR = Q₃ − Q₁ = 17.'] }),
  multi('Select ALL the true statements.', [['The median is not affected much by an outlier', 'It depends only on the middle.', true], ['The mean uses every value', 'All values are added.', true], ['The mode must be a number', 'Mode can be a category, such as a colour.', false], ['The range is affected by extreme values', 'It uses the largest and smallest.', true]], 'Think about which values each measure uses.'),
  exam('The mean of four numbers is 7. Three of the numbers are 5, 6 and 12. Find the fourth number and the range of all four numbers.', 'Find', ['Total of four numbers = 28', 'Fourth number 28 − 23 = 5', 'Range 12 − 5 = 7'], 'Total = 28. The three given numbers add to 23, so the fourth is 5. The range is 12 − 5 = 7.'),
]);

export const m92 = lesson('m9-charts', 'Statistical diagrams', 'C9.2, E9.1 to E9.3', [
  'Choose the right diagram and read it carefully: pie charts by angle, histograms by area, cumulative frequency by running totals.',
], [
  byte('Pie charts and scatter graphs', [
    '**Pie chart angle = frequency ÷ total × 360°.** 45 of 120 gives 135°.',
    'A **scatter graph** shows the relationship between two variables: **positive** (both rise), **negative** (one rises as the other falls) or **none**. Correlation is **not proof of cause**.',
    'Draw a **line of best fit** through the mean point with roughly equal points above and below, and use it only **within the data range**.',
  ], calc('In a survey of 120 people, 45 chose tea. What angle represents tea on a pie chart, in degrees?', 135, { unit: '°', formula: '45 ÷ 120 × 360', steps: ['45 ÷ 120 = 0.375.', '0.375 × 360 = 135.'] }), { fig: { svg: 'scatterCorr', caption: 'Positive, negative and no correlation' } }),
  byte('Histograms', [
    'For **unequal class widths** use **frequency density = frequency ÷ class width** on the vertical axis. **Area of a bar = frequency.**',
    'Do **not** use bar heights as frequencies when classes differ in width.',
    'A class 10–30 with frequency 50: width 20, frequency density **2.5**.',
  ], calc('A histogram class from 10 to 30 has frequency 50. Find the frequency density.', 2.5, { formula: '50 ÷ 20', steps: ['Class width = 20.', '50 ÷ 20 = 2.5.'] }), { fig: { svg: 'histogramFD', caption: 'A histogram with unequal class widths' }, eq: ['Frequency density = frequency ÷ class width'] }),
  byte('Cumulative frequency graphs', [
    'Plot **cumulative frequency against the upper class boundary** and join with a smooth curve.',
    'With n values read the **median at n/2**, **lower quartile at n/4**, **upper quartile at 3n/4**. The **IQR** = Q₃ − Q₁.',
    'To find how many values are **above** a number, subtract the cumulative frequency from the total.',
  ], calc('A cumulative frequency graph has 120 values. At what cumulative frequency should you read the lower quartile?', 30, { formula: 'n ÷ 4', steps: ['n = 120.', '120 ÷ 4 = 30.'] }), { fig: { svg: 'cumFreq', caption: 'Reading the median and quartiles' } }),
], [
  calc('A pie chart shows 72 people. 18 chose swimming. Find the angle for swimming, in degrees.', 90, { unit: '°', formula: '18 ÷ 72 × 360', steps: ['18 ÷ 72 = 0.25.', '0.25 × 360 = 90.'] }),
  calc('A histogram bar has class width 5 and height (frequency density) 4.5. Find the frequency.', 22.5, { formula: 'density × width', steps: ['Frequency = 4.5 × 5 = 22.5.'] }),
  calc('A line of best fit passes through (10, 50) and (30, 20). Find its gradient.', -1.5, { formula: '(20 − 50) ÷ (30 − 10)', steps: ['−30 ÷ 20 = −1.5.'] }),
  multi('Select ALL the true statements about scatter graphs.', [['Negative correlation: one variable rises as the other falls', 'The line of best fit slopes down.', true], ['Correlation proves one variable causes the other', 'Correlation does not prove cause.', false], ['A line of best fit can be used to estimate within the data range', 'This is interpolation.', true], ['Extrapolating far beyond the data is reliable', 'It is unreliable.', false]], 'Describe the pattern, not the cause.'),
  exam('Explain why frequency density is used on the vertical axis of a histogram.', 'Explain', ['The class widths are unequal', 'So the area of each bar (not the height) represents frequency'], 'When class widths differ, bar heights would mislead. Frequency density makes the area of each bar equal to its frequency.'),
]);

export const unit9 = {
  id: 'm9', number: 9, title: 'Statistics', short: 'Statistics', emoji: '📊', color: 'teal',
  submodules: [m91, m92],
  papers: [],
};
