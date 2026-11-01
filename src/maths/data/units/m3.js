import { byte, lesson, mc, calc, multi, match, fig, def, exam } from '../helpers.js';

// Unit 3: Coordinate geometry, graphs, functions and calculus (Cambridge IGCSE Mathematics 0580, topics C3, E3, C2.10 to E2.13).

export const m31 = lesson('m3-line', 'Straight lines and regions', 'C3.1 to C3.6, E3.1 to E3.5', [
  'A straight line has a gradient m and a y-intercept c. Parallel lines share m; perpendicular gradients multiply to −1.',
], [
  byte('Gradient and the equation of a line', [
    '**Gradient m = change in y ÷ change in x = (y₂ − y₁)/(x₂ − x₁).** A line sloping up to the right has positive m; sloping down has negative m.',
    'The equation is **y = mx + c**, where c is the **y-intercept**. Rearrange 3y + x = 6 to y = −⅓x + 2 to read off m.',
    'To find the equation from two points: find m, then substitute **one point** into y = mx + c to find c.',
  ], calc('A straight line passes through (2, 3) and (6, 11). Find its gradient.', 2, { formula: '(11 − 3) ÷ (6 − 2)', steps: ['Change in y = 8.', 'Change in x = 4.', 'Gradient = 8 ÷ 4 = 2.'] }), { fig: { svg: 'gradientLine', caption: 'Gradient is rise over run' }, eq: ['m = (y₂ − y₁)/(x₂ − x₁)', 'y = mx + c'] }),
  byte('Parallel and perpendicular lines', [
    '**Parallel** lines have the **same gradient**. y = 2x + 1 and y = 2x − 5 are parallel.',
    '**Perpendicular** lines have gradients with **product −1**: m₂ = **−1/m₁** (flip and change sign). The perpendicular to gradient 2 has gradient −½.',
    'Find a perpendicular line through a point: use the **new gradient** and substitute the point to find c.',
  ], mc('Which is the equation of the line perpendicular to y = 2x + 1 that passes through (4, 1)?', [
    ['y = −½x + 3', 'Correct: gradient −½, and 1 = −½(4) + c gives c = 3.'],
    ['y = ½x − 1', 'The gradient must be negative as well as flipped.'],
    ['y = −2x + 9', 'The gradient should be the negative reciprocal, −½, not −2.'],
    ['y = 2x − 7', 'This is parallel to the given line, not perpendicular.'],
  ], 0)),
  byte('Midpoint and length of a line segment', [
    '**Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)**: the mean of each coordinate.',
    '**Length = √((x₂ − x₁)² + (y₂ − y₁)²)**. This is Pythagoras with the horizontal and vertical differences.',
    'Draw a quick sketch to check the answer is sensible.',
  ], calc('Find the length of the line joining (1, 2) and (7, 10).', 10, { formula: '√(6² + 8²)', steps: ['Horizontal difference 6, vertical difference 8.', '√(36 + 64) = √100 = 10.'] }), { eq: ['Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2)', 'Length = √(Δx² + Δy²)'] }),
  byte('Regions defined by inequalities', [
    'Draw the **boundary line**. Use a **solid line for ≤ or ≥** and a **dashed line for < or >**.',
    '**Test a point** (such as (0, 0)) to see which side satisfies the inequality, then shade or mark the **wanted region** (often leave it unshaded and label R).',
    'For several inequalities, the answer is the region that satisfies **all** of them at once.',
  ], mc('Which point satisfies BOTH y ≥ x + 1 and x + y < 6?', [
    ['(1, 3)', 'Correct: 3 ≥ 2 and 1 + 3 = 4 < 6.'],
    ['(2, 4)', 'x + y = 6 is not less than 6; it lies on a dashed boundary.'],
    ['(3, 2)', 'y ≥ x + 1 needs 2 ≥ 4, which is false.'],
    ['(0, 0)', 'y ≥ x + 1 needs 0 ≥ 1, which is false.'],
  ], 0), { fig: { svg: 'inequalityRegion', caption: 'Region R: y ≥ x + 1 and x + y < 6' } }),
], [
  calc('A line passes through (0, −3) and (4, 5). Find the value of y when x = 10.', 17, { formula: 'y = mx + c', steps: ['Gradient = 8 ÷ 4 = 2 and c = −3.', 'y = 2x − 3.', 'When x = 10, y = 17.'] }),
  calc('The midpoint of A(−2, 5) and B(6, 1) is M. Find the sum of the two coordinates of M.', 5, { formula: '((−2 + 6)/2, (5 + 1)/2)', steps: ['M = (2, 3).', '2 + 3 = 5.'] }),
  calc('The line 3y + x = 6 has gradient m. A second line is perpendicular to it. Find the gradient of the second line.', 3, { formula: '3y = −x + 6, so m = −⅓', steps: ['m₁ = −1/3.', 'm₂ = −1 ÷ (−1/3) = 3.'] }),
  multi('Select ALL the lines that are parallel to y = 3x − 2.', [['y − 3x = 7', 'y = 3x + 7: gradient 3.', true], ['2y = 6x + 1', 'y = 3x + 0.5: gradient 3.', true], ['y = −3x + 2', 'Gradient −3.', false], ['y = x/3', 'Gradient 1/3.', false]], 'Parallel lines have equal gradients once written as y = mx + c.'),
  exam('A is (−1, 2) and B is (5, 10). Find the gradient of AB and the equation of the line AB.', 'Find', ['Gradient (10 − 2)/(5 + 1) = 4/3', 'Substitutes a point to find c', 'Equation y = 4x/3 + 10/3 (or 3y = 4x + 10)'], 'm = 8/6 = 4/3. Using A: 2 = 4/3(−1) + c so c = 10/3. y = 4x/3 + 10/3.'),
]);

export const m32 = lesson('m3-graphs', 'Graphs of functions and motion', 'C3.7 to C3.9, E2.9, E3.7', [
  'The shape of a graph is set by its equation. Graphs of motion turn gradients into speed and areas into distance.',
], [
  byte('Quadratic and cubic graphs', [
    'A **quadratic** y = ax² + bx + c is a **parabola**: **U-shaped if a > 0**, **∩-shaped if a < 0**. It has a line of symmetry through the turning point.',
    'A **cubic** y = ax³ + … has an S-shape with up to two turning points. Plot a table of values and join with a **smooth curve**, never straight segments.',
    'The **y-intercept** is c. The x-intercepts are the **roots**. y = x² − 6x + 5 = (x − 3)² − 4 has its **minimum −4 at x = 3**.',
  ], calc('Find the minimum value of y = x² − 6x + 5.', -4, { formula: 'complete the square', steps: ['y = (x − 3)² − 4.', 'The smallest value of a square is 0, so the minimum is −4.'] }), { fig: { svg: 'graphShapes', caption: 'Standard graph shapes' } }),
  byte('Reciprocal and exponential graphs', [
    '**y = a/x** has **two branches** and **asymptotes** on both axes: the curve gets closer to the axis but never touches it.',
    '**y = aˣ** (a > 1) passes through **(0, 1)** and grows faster and faster; as x becomes very negative, it approaches the x-axis but never reaches 0.',
    'A graph cannot cross its asymptote. The reciprocal graph is **not defined at x = 0**.',
  ], mc('A curve passes through (0, 1), (1, 2) and (3, 8). Which equation could it be?', [
    ['y = 2ˣ', 'Correct: 2⁰ = 1, 2¹ = 2, 2³ = 8.'],
    ['y = x² + 1', 'This gives 10 when x = 3.'],
    ['y = x + 1', 'This gives 4 when x = 3.'],
    ['y = 2x', 'This passes through (0, 0), not (0, 1).'],
  ], 0)),
  byte('Solving equations using graphs', [
    'To solve **f(x) = 0**, read the **x-intercepts**. To solve **f(x) = k**, draw the **horizontal line y = k** and read the x-values where it crosses the curve.',
    'To solve **f(x) = g(x)**, find the **x-coordinates of the points of intersection** of the two graphs.',
    'If the curve y = x² − 2x − 3 is given, then x² − 2x − 8 = 0 is the same as x² − 2x − 3 = 5, so draw y = 5.',
  ], calc('The graph of y = x² − 2x − 3 is drawn. Use it to solve x² − 2x − 3 = 5. Give the larger solution.', 4, { formula: 'x² − 2x − 8 = 0', steps: ['x² − 2x − 3 = 5 gives x² − 2x − 8 = 0.', '(x − 4)(x + 2) = 0.', 'The larger solution is 4.'] })),
  byte('Distance–time and speed–time graphs', [
    '**Distance–time:** gradient = **speed**; a horizontal line means **stationary**; a steeper line is faster.',
    '**Speed–time:** gradient = **acceleration**; a horizontal line is **constant speed**; **area under the graph = distance travelled**.',
    'Split the area into **triangles, rectangles and trapezia**. Use the **same units** on both axes.',
  ], calc('A train’s speed rises steadily from 0 to 20 m/s in 10 s, stays at 20 m/s for 30 s, then falls to 0 in 10 s. How far does it travel, in metres?', 800, { unit: 'm', formula: 'area under the graph', steps: ['Trapezium with parallel sides 50 s and 30 s and height 20.', 'Area = ½ × (50 + 30) × 20 = 800.'] }), { fig: { svg: 'motionGraphs', caption: 'Distance–time and speed–time graphs' }, eq: ['Speed = gradient of distance–time', 'Distance = area under speed–time'] }),
], [
  calc('A car’s speed rises from 4 m/s to 16 m/s in 3 s at a steady rate. Find its acceleration in m/s².', 4, { unit: 'm/s²', formula: 'gradient of the speed–time graph', steps: ['Change in speed = 12 m/s.', '12 ÷ 3 = 4 m/s².'] }),
  calc('A distance–time graph is a straight line from (0, 0) to (1.5, 90), with distance in km and time in hours. Find the speed in km/h.', 60, { unit: 'km/h', formula: 'gradient', steps: ['90 ÷ 1.5 = 60.'] }),
  calc('Work out the value of y = 2ˣ when x = −1.', 0.5, { formula: '2⁻¹', steps: ['2⁻¹ = 1/2 = 0.5.'] }),
  multi('Select ALL the true statements about y = 1/x.', [['It has two branches', 'The graph has one branch for x > 0 and one for x < 0.', true], ['The x-axis is an asymptote', 'The curve approaches the axis but never touches it.', true], ['It crosses the y-axis at (0, 1)', 'It is not defined at x = 0.', false], ['It is symmetrical about y = x', 'Swapping x and y gives the same equation.', true]], 'Reciprocal graphs have asymptotes on both axes.'),
  exam('Describe the motion shown by a horizontal line on a distance–time graph.', 'Describe', ['The distance is not changing', 'So the object is stationary (speed 0)'], 'The distance stays constant as time passes, so the object is not moving.'),
]);

export const m33 = lesson('m3-funcs', 'Functions', 'E2.13', [
  'A function is a rule with one output for each input. Composite functions apply two rules in order; the inverse undoes a function.',
], [
  byte('Function notation', [
    'f(x) = 3x − 2 means **“the function f takes x and gives 3x − 2”**. f(4) = 3(4) − 2 = **10**.',
    'The **domain** is the set of allowed inputs; the **range** is the set of outputs. Each input gives **exactly one** output.',
    'Substitute in **brackets**, especially for negatives: if f(x) = x² − 3x then f(−2) = (−2)² − 3(−2) = **10**.',
  ], mc('f(x) = x² − 3x. Find f(−2).', [
    ['10', 'Correct: 4 + 6 = 10.'],
    ['−2', 'This takes −3x as 6, but −3 × (−2) = +6.'],
    ['−10', 'The square of −2 is +4, not −4.'],
    ['4', 'The −3x term is missing.'],
  ], 0), { fig: { svg: 'functionMachine', caption: 'A function machine' } }),
  byte('Composite functions', [
    '**fg(x) means f(g(x))**: apply **g first**, then f. If f(x) = 3x − 2 and g(x) = x², then fg(3) = f(9) = **25**.',
    '**gf(3) = g(7) = 49.** So fg and gf are usually **not equal**.',
    'To find fg(x) as an expression, **replace x in f with the whole of g(x)**: fg(x) = 3x² − 2.',
  ], calc('f(x) = 3x − 2 and g(x) = x². Find fg(3).', 25, { formula: 'f(g(3)) = f(9)', steps: ['g(3) = 9.', 'f(9) = 3 × 9 − 2 = 25.'] })),
  byte('Inverse functions', [
    'The **inverse f⁻¹** undoes f. To find it: write y = f(x), **swap x and y**, then rearrange to make y the subject.',
    'f(x) = 3x − 2: x = 3y − 2 gives **f⁻¹(x) = (x + 2)/3**, so f⁻¹(10) = 4. Also **f⁻¹(f(x)) = x**.',
    'The graph of f⁻¹ is the **reflection of f in the line y = x**. f⁻¹ is not 1/f.',
  ], mc('f(x) = (2x + 1)/5. Find f⁻¹(x).', [
    ['(5x − 1)/2', 'Correct: x = (2y + 1)/5 so 5x − 1 = 2y.'],
    ['(5x + 1)/2', 'Subtract 1 before dividing by 2.'],
    ['5/(2x + 1)', 'The inverse is not the reciprocal.'],
    ['(2x − 1)/5', 'Swapping the numbers is not the same as undoing the operations in reverse order.'],
  ], 0)),
], [
  calc('f(x) = 2x + 3 and g(x) = x² − 1. Find gf(2).', 48, { formula: 'g(f(2))', steps: ['f(2) = 7.', 'g(7) = 49 − 1 = 48.'] }),
  calc('f(x) = x + 6 and g(x) = x². Solve f(x) = g(x). Give the larger solution.', 3, { formula: 'x² = x + 6', steps: ['x² − x − 6 = 0.', '(x − 3)(x + 2) = 0.', 'The larger solution is 3.'] }),
  calc('f(x) = 2x + 1. Find ff(3).', 15, { formula: 'f(f(3))', steps: ['f(3) = 7.', 'f(7) = 15.'] }),
  multi('Select ALL the true statements.', [['f⁻¹(f(x)) = x', 'The inverse undoes the function.', true], ['The graph of f⁻¹ is the reflection of f in y = x', 'Swapping x and y reflects in y = x.', true], ['fg(x) = gf(x) for every pair of functions', 'Usually the order matters.', false], ['The range of f is the domain of f⁻¹', 'The outputs of f are the inputs of f⁻¹.', true]], 'Compare outputs and inputs carefully.'),
  exam('f(x) = 2x − 5 and g(x) = x². Find gf(x) and solve gf(x) = 9.', 'Find', ['gf(x) = (2x − 5)²', 'Solves 2x − 5 = 3 or 2x − 5 = −3', 'x = 4 and x = 1'], 'gf(x) = (2x − 5)². (2x − 5)² = 9 gives 2x − 5 = ±3, so x = 4 or x = 1.'),
]);

export const m34 = lesson('m3-diff', 'Differentiation', 'E2.13, E3.8', [
  'The derivative gives the gradient of a curve. It is zero at turning points and gives velocity from displacement.',
], [
  byte('Differentiating powers of x', [
    'For y = axⁿ the **derivative dy/dx = naxⁿ⁻¹**: multiply by the power, then reduce the power by 1. d/dx(x³) = 3x².',
    'A **constant** differentiates to **0** and **kx** differentiates to **k**. Differentiate each term separately.',
    'The gradient of y = x³ − 3x at x = 2: dy/dx = 3x² − 3 = 3(4) − 3 = **9**.',
  ], calc('Find the gradient of the curve y = x³ − 3x at the point where x = 2.', 9, { formula: 'dy/dx = 3x² − 3', steps: ['dy/dx = 3x² − 3.', 'At x = 2: 3(4) − 3 = 9.'] }), { eq: ['d/dx (axⁿ) = naxⁿ⁻¹'] }),
  byte('Turning points', [
    'At a **stationary (turning) point dy/dx = 0**. Solve for x, then substitute into y.',
    'Decide its nature: the sign of the **second derivative** (positive means a minimum, negative a maximum), or look at the **gradient either side**.',
    'y = x³ − 12x: dy/dx = 3x² − 12 = 0 gives x = ±2. At x = 2, y = −16 and d²y/dx² = 6x = 12 > 0, so a **minimum**.',
  ], mc('y = x³ − 12x. Which statement is correct?', [
    ['There is a minimum of −16 at x = 2', 'Correct: d²y/dx² = 12 > 0 at x = 2.'],
    ['There is a maximum of −16 at x = 2', 'The second derivative is positive, so it is a minimum.'],
    ['There is a minimum of −8 at x = 2', 'y = 8 − 24 = −16, not −8.'],
    ['There is a minimum of −16 at x = 4', 'The turning points are at x = ±2.'],
  ], 0), { fig: { svg: 'tangentCurve', caption: 'Tangent and turning point on a curve' } }),
  byte('Tangents and rates of change', [
    'The **gradient of the tangent** at a point equals dy/dx there. Tangent: **y − y₁ = m(x − x₁)**.',
    'If s is displacement and t is time, **velocity v = ds/dt** and **acceleration a = dv/dt**.',
    'Tangent to y = x² at x = 3: gradient 6, point (3, 9), so y = 6x − 9; the **y-intercept is −9**.',
  ], calc('Find the y-intercept of the tangent to y = x² at the point (3, 9).', -9, { formula: 'y − 9 = 6(x − 3)', steps: ['dy/dx = 2x = 6 at x = 3.', 'y − 9 = 6(x − 3), so y = 6x − 9.', 'When x = 0, y = −9.'] })),
], [
  calc('y = 4x³ − 5x² + 7. Find the value of dy/dx when x = 1.', 2, { formula: 'dy/dx = 12x² − 10x', steps: ['dy/dx = 12x² − 10x.', 'At x = 1: 12 − 10 = 2.'] }),
  calc('A particle’s displacement is s = 2t³ + t metres after t seconds. Find its velocity at t = 2, in m/s.', 25, { unit: 'm/s', formula: 'ds/dt = 6t² + 1', steps: ['v = 6t² + 1.', 'At t = 2: 24 + 1 = 25.'] }),
  calc('Find the x-coordinate of the minimum point of y = x² − 8x + 3.', 4, { formula: 'dy/dx = 2x − 8 = 0', steps: ['dy/dx = 2x − 8.', 'Set to 0: x = 4.'] }),
  multi('Select ALL the correct derivatives.', [['y = x⁴ gives dy/dx = 4x³', 'Multiply by the power, reduce it by 1.', true], ['y = 5 gives dy/dx = 0', 'A constant has zero gradient.', true], ['y = 3x gives dy/dx = 3', 'The gradient of a straight line is its coefficient.', true], ['y = 1/x gives dy/dx = 1', 'y = x⁻¹ gives dy/dx = −x⁻².', false]], 'Write roots and reciprocals as powers first.'),
  def('What does dy/dx represent geometrically?', ['The gradient of the curve', 'at a point (the gradient of the tangent there)'], 'dy/dx is the gradient of the tangent to the curve at a given point.'),
  exam('Use calculus to find the coordinates of the turning point of y = x² − 6x + 5 and state whether it is a minimum or maximum.', 'Find', ['dy/dx = 2x − 6 set equal to 0 gives x = 3', 'y = −4, so the point is (3, −4)', 'States minimum, because d²y/dx² = 2 > 0 (or the coefficient of x² is positive)'], 'dy/dx = 2x − 6 = 0, so x = 3 and y = 9 − 18 + 5 = −4. d²y/dx² = 2 > 0, so it is a minimum at (3, −4).'),
]);

export const unit3 = {
  id: 'm3', number: 3, title: 'Graphs, Functions and Calculus', short: 'Graphs', emoji: '📈', color: 'teal',
  submodules: [m31, m32, m33, m34],
  papers: [],
};
