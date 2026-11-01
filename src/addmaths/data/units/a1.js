import { byte, lesson, mc, calc, multi, fig, def, exam } from '../../../maths/data/helpers.js';

// Units 1 and 2: Functions, polynomials, inequalities, surds and logarithms (Cambridge IGCSE Additional Mathematics 0606).

export const a11 = lesson('a1-func', 'Functions', '0606 topic 1', [
  'A function maps each input to exactly one output. Know the domain and range, combine functions, find inverses and handle the modulus.',
], [
  byte('Domain, range and composite functions', [
    'The **domain** is the set of allowed inputs and the **range** the set of outputs. √(x − 4) needs x − 4 ≥ 0, so the domain is **x ≥ 4**; 1/(x − 3) needs **x ≠ 3**.',
    '**fg(x) = f(g(x))**: do g first. The domain of fg is limited by g **and** by what f can accept.',
    'A function must be **one-to-one** to have an inverse; restrict the domain if needed (x² with x ≥ 0).',
  ], mc('What is the largest set of real values of x for which f(x) = √(x − 4) is defined?', [
    ['x ≥ 4', 'Correct: x − 4 must not be negative, and zero is allowed.'],
    ['x > 4', 'x = 4 gives √0 = 0, which is defined.'],
    ['x ≤ 4', 'This makes x − 4 negative or zero; the root of a negative is undefined.'],
    ['x ≠ 4', 'Only a denominator forbids a single value.'],
  ], 0)),
  byte('Inverse functions', [
    'Write y = f(x), **swap x and y**, then make y the subject. The graph of f⁻¹ is the **reflection of f in y = x**; the domain of f⁻¹ is the **range of f**.',
    'f(x) = (2x + 1)/(x − 3): y(x − 3) = 2x + 1 gives x(y − 2) = 3y + 1, so **f⁻¹(x) = (3x + 1)/(x − 2)**.',
    'Check with f(f⁻¹(x)) = x.',
  ], calc('f(x) = (2x + 1)/(x − 3) for x ≠ 3. Use the inverse f⁻¹(x) = (3x + 1)/(x − 2) to find f⁻¹(4).', 6.5, { formula: '(3 × 4 + 1)/(4 − 2)', steps: ['f⁻¹(4) = 13/2 = 6.5.', 'Check: f(6.5) = 14/3.5 = 4.'] })),
  byte('The modulus function', [
    '**|x|** is the **positive** size of x. The graph of y = |ax + b| is a **V-shape** with the vertex on the x-axis.',
    '**|f(x)| = k** gives f(x) = k **or** f(x) = −k. **|x − a| < b** means **a − b < x < a + b**.',
    'Always **check** solutions of modulus equations in the original equation.',
  ], calc('Solve |2x − 3| = 5. Find the sum of the two solutions.', 3, { formula: '2x − 3 = 5 or 2x − 3 = −5', steps: ['2x − 3 = 5 gives x = 4.', '2x − 3 = −5 gives x = −1.', 'Sum = 3.'] }), { fig: { svg: 'modulusGraph', caption: 'y = |x − 2| and the line y = 3' } }),
], [
  calc('f(x) = 2x − 3 and g(x) = x² + 1. Find fg(2).', 7, { formula: 'f(g(2))', steps: ['g(2) = 5.', 'f(5) = 7.'] }),
  calc('f(x) = x² − 4x for x ≥ 2. Find f⁻¹(5).', 5, { formula: 'x² − 4x = 5', steps: ['x² − 4x − 5 = 0, so (x − 5)(x + 1) = 0.', 'x ≥ 2 means x = 5.'] }),
  calc('Solve |x − 1| = 2|x + 2|. Give the larger solution.', -1, { formula: 'x − 1 = ±2(x + 2)', steps: ['x − 1 = 2x + 4 gives x = −5.', 'x − 1 = −2x − 4 gives x = −1.', 'The larger solution is −1.'] }),
  multi('Select ALL the true statements.', [['A function must give exactly one output for each input', 'This is the definition.', true], ['The domain of f⁻¹ is the range of f', 'Inputs and outputs swap.', true], ['fg(x) = gf(x) for all functions', 'Order usually matters.', false], ['|x| is never negative', 'It is the positive size.', true]], 'Think about inputs and outputs.'),
  exam('f(x) = 3x/(x − 2) for x ≠ 2. Find an expression for f⁻¹(x).', 'Find', ['Writes y(x − 2) = 3x and expands', 'Collects x terms: x(y − 3) = 2y', 'f⁻¹(x) = 2x/(x − 3)'], 'y = 3x/(x − 2) gives yx − 2y = 3x, so x(y − 3) = 2y, so x = 2y/(y − 3). Hence f⁻¹(x) = 2x/(x − 3).'),
]);

export const a12 = lesson('a1-quad', 'Quadratic functions', '0606 topic 2', [
  'The discriminant tells you how a line meets a curve; completing the square gives the vertex; roots obey sum and product rules.',
], [
  byte('Completing the square and the vertex', [
    '**a(x + p)² + q** has its vertex at **(−p, q)**. 2x² − 12x + 7 = 2(x − 3)² − 11, so the minimum is **−11 at x = 3**.',
    'If a is negative the vertex is a **maximum**: −x² + 6x + 1 = −(x − 3)² + 10 has maximum 10.',
    'The line of symmetry is x = −p, and the **range** starts or ends at q.',
  ], calc('Find the minimum value of 2x² − 12x + 7.', -11, { formula: '2(x − 3)² − 11', steps: ['2x² − 12x + 7 = 2(x² − 6x) + 7.', '= 2(x − 3)² − 18 + 7 = 2(x − 3)² − 11.', 'Minimum = −11.'] })),
  byte('The discriminant', [
    '**b² − 4ac > 0:** two distinct real roots (line cuts the curve twice). **= 0:** one repeated root (**tangent**). **< 0:** no real roots (line misses).',
    'For a line and a curve: **substitute**, rearrange to a quadratic = 0, then apply the discriminant.',
    'If ax² + bx + c > 0 for **all** x then a > 0 and b² − 4ac < 0.',
  ], calc('The line y = 2x + k is a tangent to the curve y = x² + 3. Find k.', 2, { formula: 'discriminant = 0', steps: ['x² + 3 = 2x + k gives x² − 2x + 3 − k = 0.', 'Discriminant: 4 − 4(3 − k) = 0, so 4k − 8 = 0.', 'k = 2.'] }), { fig: { svg: 'quadNature', caption: 'Two roots, one root, no roots' }, eq: ['b² − 4ac > 0, = 0, < 0'] }),
  byte('Sum and product of roots', [
    'For ax² + bx + c = 0 with roots α and β: **α + β = −b/a** and **αβ = c/a**.',
    'Then **α² + β² = (α + β)² − 2αβ**. Use these without solving the equation.',
    'To build an equation with roots α, β: **x² − (α + β)x + αβ = 0**.',
  ], calc('The roots of x² − 5x + 3 = 0 are α and β. Find α² + β².', 19, { formula: '(α + β)² − 2αβ', steps: ['α + β = 5 and αβ = 3.', '25 − 6 = 19.'] }), { eq: ['α + β = −b/a', 'αβ = c/a'] }),
], [
  calc('x² + kx + 9 = 0 has equal roots and k > 0. Find k.', 6, { formula: 'k² − 36 = 0', steps: ['Discriminant k² − 4(9) = 0.', 'k = 6 (k > 0).'] }),
  calc('Find the maximum value of y = −x² + 6x + 1.', 10, { formula: '−(x − 3)² + 10', steps: ['y = −(x² − 6x) + 1 = −(x − 3)² + 9 + 1.', 'Maximum = 10.'] }),
  calc('A quadratic has roots 2 and −3 and the coefficient of x² is 1. Find the value of 1 + b + c if the equation is x² + bx + c = 0.', -4, { formula: 'x² + x − 6', steps: ['Sum of roots −1 gives b = 1.', 'Product −6 gives c = −6.', '1 + 1 − 6 = −4.'] }),
  def('What does the discriminant tell you?', ['The number of real roots of a quadratic', 'b² − 4ac > 0 two roots, = 0 one root, < 0 none'], 'The discriminant b² − 4ac shows whether a quadratic has two, one or no real roots.'),
  exam('The line y = 3x + c is a tangent to the curve y = x² + 5x + 4. Find the value of c.', 'Find', ['Equates to get x² + 2x + 4 − c = 0', 'Sets the discriminant to zero: 4 − 4(4 − c) = 0', 'c = 3'], 'x² + 5x + 4 = 3x + c gives x² + 2x + (4 − c) = 0. Tangent: 4 − 4(4 − c) = 0, so c = 3.'),
]);

export const a13 = lesson('a1-poly', 'Polynomials and the factor theorem', '0606 topic 3', [
  'The remainder when f(x) is divided by (x − a) is f(a). If f(a) = 0 then (x − a) is a factor, which lets you factorise cubics.',
], [
  byte('The remainder theorem', [
    'When f(x) is divided by **(x − a)** the **remainder is f(a)**. For (ax + b) use f(−b/a).',
    'f(x) = x³ − 2x² + 3x − 4 divided by (x − 2): f(2) = 8 − 8 + 6 − 4 = **2**.',
    'Use it to **find unknown coefficients**: put the root in and set equal to the remainder.',
  ], calc('Find the remainder when x³ − 2x² + 3x − 4 is divided by (x − 2).', 2, { formula: 'f(2)', steps: ['f(2) = 8 − 8 + 6 − 4 = 2.'] })),
  byte('The factor theorem and solving cubics', [
    '**(x − a) is a factor of f(x) if and only if f(a) = 0.** Try small integers (±1, ±2, ±3) that divide the constant term.',
    'Divide (long division or inspection) to get a quadratic, then factorise. x³ − 7x + 6: f(1) = 0, so (x − 1)(x² + x − 6) = (x − 1)(x + 3)(x − 2).',
    'The graph crosses the x-axis at each root; a **repeated root touches** the axis.',
  ], calc('Solve x³ − 7x + 6 = 0. Give the largest root.', 2, { formula: '(x − 1)(x − 2)(x + 3) = 0', steps: ['f(1) = 1 − 7 + 6 = 0, so (x − 1) is a factor.', 'x³ − 7x + 6 = (x − 1)(x² + x − 6) = (x − 1)(x − 2)(x + 3).', 'Roots 1, 2, −3; the largest is 2.'] }), { fig: { svg: 'cubicRoots', caption: 'y = x³ − 7x + 6 crosses the x-axis at −3, 1 and 2' } }),
  byte('Finding unknown coefficients', [
    'If **(x + 1)** is a factor of x³ + kx² − 5x − 6, then f(−1) = 0: −1 + k + 5 − 6 = 0, so **k = 2**.',
    'With two unknowns use **two conditions** (for example a factor and a remainder) and solve simultaneously.',
    'Check by dividing or by substituting a second root.',
  ], calc('(x + 1) is a factor of x³ + kx² − 5x − 6. Find k.', 2, { formula: 'f(−1) = 0', steps: ['f(−1) = −1 + k + 5 − 6.', 'k − 2 = 0, so k = 2.'] })),
], [
  calc('Find the remainder when 2x³ − x + 5 is divided by (x + 1).', 4, { formula: 'f(−1)', steps: ['f(−1) = −2 + 1 + 5 = 4.'] }),
  calc('f(x) = x³ − 6x² + 11x − 6. Given f(3) = 0, find the sum of all the roots.', 6, { formula: '−(−6)/1', steps: ['For a cubic the sum of the roots is −b/a = 6.', 'Check: roots 1, 2, 3 add to 6.'] }),
  multi('Select ALL the true statements about f(x) = x³ − 3x² − 4x + 12.', [['f(2) = 0', '8 − 12 − 8 + 12 = 0.', true], ['(x − 3) is a factor', 'f(3) = 27 − 27 − 12 + 12 = 0.', true], ['(x + 1) is a factor', 'f(−1) = −1 − 3 + 4 + 12 = 12.', false], ['The roots are 2, 3 and −2', 'Factorised as (x − 2)(x − 3)(x + 2).', true]], 'Test each value with the factor theorem.'),
  def('State the factor theorem.', ['(x − a) is a factor of f(x)', 'exactly when f(a) = 0'], '(x − a) is a factor of f(x) if and only if f(a) = 0.'),
  exam('Show that (x − 2) is a factor of x³ − 3x² − 4x + 12 and hence solve x³ − 3x² − 4x + 12 = 0.', 'Show that', ['Shows f(2) = 8 − 12 − 8 + 12 = 0', 'Factorises to (x − 2)(x² − x − 6)', 'Roots x = 2, 3 and −2'], 'f(2) = 0, so (x − 2) is a factor. Dividing gives (x − 2)(x − 3)(x + 2), so x = 2, 3 or −2.'),
]);

export const unit1 = {
  id: 'a1', number: 1, title: 'Functions and Polynomials', short: 'Functions', emoji: '🔣', color: 'sky',
  submodules: [a11, a12, a13],
  papers: [],
};

export const a21 = lesson('a2-ineq', 'Inequalities and the modulus', '0606 topic 3', [
  'Quadratic inequalities are solved from a sketch; modulus inequalities become double inequalities.',
], [
  byte('Quadratic inequalities', [
    'Find the roots, **sketch** the parabola, then read the answer. x² − 5x + 6 < 0 has roots 2, 3: **2 < x < 3** (below the axis).',
    'For **> 0** with a positive x² the answer is **outside** the roots: x < a **or** x > b. Never write a < x < b for an “outside” region.',
    'Write the answer as inequalities or in set notation.',
  ], mc('Solve x² − x − 12 > 0.', [
    ['x < −3 or x > 4', 'Correct: roots are −3 and 4, and the curve is above the axis outside them.'],
    ['−3 < x < 4', 'This is the region below the axis, where the expression is negative.'],
    ['x < −4 or x > 3', 'The roots are the opposite signs: (x + 3)(x − 4).'],
    ['x > 4', 'The other region, x < −3, also gives a positive value.'],
  ], 0)),
  byte('Modulus inequalities', [
    '**|x − a| < b** means **a − b < x < a + b**. **|x − a| > b** means **x < a − b or x > a + b**.',
    'For |ax + b| < c solve the **double inequality** −c < ax + b < c.',
    'A sketch of y = |f(x)| against a horizontal line is a good check.',
  ], calc('How many integers satisfy |2x − 1| < 7?', 6, { formula: '−7 < 2x − 1 < 7', steps: ['−6 < 2x < 8, so −3 < x < 4.', 'The integers are −2, −1, 0, 1, 2, 3, which is 6.'] })),
  byte('Conditions that hold for all x', [
    'x² + kx + 4 > 0 for **all** x needs **no real roots**: k² − 16 < 0, so **−4 < k < 4**.',
    'Use the discriminant, then solve the new quadratic inequality in k.',
    'For ≥ 0 for all x the discriminant may equal zero (touching the axis).',
  ], calc('x² + kx + 4 > 0 for all real x. How many integer values of k are possible?', 7, { formula: 'k² − 16 < 0', steps: ['Discriminant k² − 16 < 0, so −4 < k < 4.', 'Integers −3, −2, −1, 0, 1, 2, 3: 7 values.'] })),
], [
  calc('Find the smallest integer x with x > 0 that satisfies x² + 3x − 10 > 0.', 3, { formula: '(x + 5)(x − 2) > 0', steps: ['Roots −5 and 2.', 'x > 2, so the smallest integer is 3.'] }),
  calc('Solve |x + 1| = |2x − 3|. Give the larger solution.', 4, { formula: 'x + 1 = ±(2x − 3)', steps: ['x + 1 = 2x − 3 gives x = 4.', 'x + 1 = −2x + 3 gives x = 2/3.', 'The larger is 4.'] }),
  calc('How many integers satisfy x² − 2x − 8 ≤ 0?', 7, { formula: '(x − 4)(x + 2) ≤ 0', steps: ['−2 ≤ x ≤ 4.', 'Integers −2 to 4 give 7 values.'] }),
  def('What is the solution set of |x − a| < b?', ['All x between a − b and a + b', 'written a − b < x < a + b'], '|x − a| < b means that x is within b of a: a − b < x < a + b.'),
  exam('Solve 2x² − x − 6 ≤ 0.', 'Solve', ['Factorises (2x + 3)(x − 2)', 'Roots −3/2 and 2', 'Writes −1.5 ≤ x ≤ 2'], '(2x + 3)(x − 2) ≤ 0 has roots −3/2 and 2. The parabola is below or on the axis between them, so −1.5 ≤ x ≤ 2.'),
]);

export const a22 = lesson('a2-surd', 'Surds', '0606 topic 4', [
  'Surds stay exact. Rationalise denominators using the conjugate and always check solutions of equations that involve roots.',
], [
  byte('Rationalising denominators', [
    'Multiply top and bottom by the **conjugate**: for **a + √b** use **a − √b**, because **(a + √b)(a − √b) = a² − b**.',
    '4/(3 − √5) = 4(3 + √5)/(9 − 5) = **3 + √5**.',
    'Simplify each surd first (√50 = 5√2) and collect like surds.',
  ], mc('Rationalise the denominator of 4/(3 − √5).', [
    ['3 + √5', 'Correct: 4(3 + √5) ÷ (9 − 5).'],
    ['3 − √5', 'The conjugate has the opposite sign in the numerator.'],
    ['12 + 4√5', 'The denominator 9 − 5 = 4 has not been divided out.'],
    ['(3 + √5)/4', 'The numerator is 4(3 + √5), not 3 + √5.'],
  ], 0)),
  byte('Expanding and simplifying with surds', [
    '(2 + √3)² = 4 + 4√3 + 3 = **7 + 4√3**. (5 + √2)(5 − √2) = 25 − 2 = **23**.',
    'Equate **rational** and **irrational** parts: if p + q√3 = 7 + 4√3 (p, q rational) then p = 7 and q = 4.',
    '√a × √b = √(ab) and √a ÷ √b = √(a/b).',
  ], calc('(2 + √3)² = a + b√3. Find a + b.', 11, { formula: '4 + 4√3 + 3', steps: ['(2 + √3)² = 7 + 4√3.', 'a = 7 and b = 4, so a + b = 11.'] })),
  byte('Equations involving roots', [
    'Isolate the root, **square both sides**, solve, then **check** each answer in the original equation.',
    '√(x + 3) = x − 3: x + 3 = x² − 6x + 9 gives x² − 7x + 6 = 0, so x = 1 or 6. Only **x = 6** works (x = 1 gives 2 = −2).',
    'Squaring can introduce **extra (false) solutions**.',
  ], calc('Solve √(x + 3) = x − 3.', 6, { formula: 'x + 3 = (x − 3)²', steps: ['x² − 7x + 6 = 0 gives x = 1 or x = 6.', 'x = 1: √4 = 2 but x − 3 = −2, false.', 'x = 6: √9 = 3 = 3, true.'] })),
], [
  calc('Write √50 + √18 − √8 in the form k√2. Find k.', 6, { formula: '5√2 + 3√2 − 2√2', steps: ['√50 = 5√2, √18 = 3√2, √8 = 2√2.', '5 + 3 − 2 = 6.'] }),
  calc('Work out (5 + √2)(5 − √2).', 23, { formula: '25 − 2', steps: ['Difference of two squares: 25 − 2 = 23.'] }),
  calc('1/(2 − √3) = a + b√3. Find a + b.', 3, { formula: '(2 + √3)/(4 − 3)', steps: ['Multiply by the conjugate: (2 + √3)/1.', 'a = 2 and b = 1, so a + b = 3.'] }),
  def('What is the conjugate of a + √b?', ['a − √b', 'it gives a rational product a² − b'], 'The conjugate of a + √b is a − √b; their product is a² − b, a rational number.'),
  exam('Show that 1/(3 + √5) + 1/(3 − √5) = 3/2.', 'Show that', ['Uses a common denominator (3 + √5)(3 − √5) = 4', 'Numerator (3 − √5) + (3 + √5) = 6', 'Simplifies 6/4 = 3/2'], 'Common denominator 9 − 5 = 4. The numerator is (3 − √5) + (3 + √5) = 6, so the sum is 6/4 = 3/2.'),
]);

export const a23 = lesson('a2-log', 'Logarithms and exponentials', '0606 topic 4', [
  'Logarithms undo powers. Use the laws to combine terms, take logs to solve exponential equations, and use ln and e for natural growth.',
], [
  byte('Laws of logarithms', [
    '**log_a x + log_a y = log_a(xy)**; **log_a x − log_a y = log_a(x/y)**; **n log_a x = log_a(xⁿ)**. Also **log_a a = 1** and **log_a 1 = 0**.',
    '**Change of base:** log_a b = log_c b ÷ log_c a. So log₉ 27 = 3/2.',
    'log₂ 8 + log₂ 4 − log₂ 2 = 3 + 2 − 1 = **4**. There is no law for log(x + y).',
  ], calc('Work out log₂ 8 + log₂ 4 − log₂ 2.', 4, { formula: '3 + 2 − 1', steps: ['log₂ 8 = 3, log₂ 4 = 2, log₂ 2 = 1.', '3 + 2 − 1 = 4.'] }), { eq: ['log_a x + log_a y = log_a (xy)', 'log_a x − log_a y = log_a (x/y)', 'log_a b = log_c b ÷ log_c a'] }),
  byte('Solving exponential and logarithmic equations', [
    '**aˣ = b**: take logs of both sides, **x = log b ÷ log a**. 5ˣ = 20 gives x = ln 20 ÷ ln 5 = **1.86**.',
    '**Log equations:** combine into one log, rewrite as a power, solve, and **check the arguments are positive**.',
    'log₂ x + log₂(x − 2) = 3 gives x(x − 2) = 8, so x = 4 (reject −2).',
  ], calc('Solve log₂ x + log₂(x − 2) = 3.', 4, { formula: 'x(x − 2) = 2³', steps: ['x² − 2x − 8 = 0, so (x − 4)(x + 2) = 0.', 'x = 4 (x = −2 makes the logs undefined).'] })),
  byte('Natural logarithms and e', [
    '**ln x = log_e x** is the inverse of **eˣ**. **ln(eᵏ) = k** and **e^(ln k) = k**.',
    'The graph of y = eˣ passes through **(0, 1)**; y = ln x passes through **(1, 0)**; they are **reflections in y = x**.',
    'e^(2x) = 9 gives 2x = ln 9, so x = ln 3 = **1.10**.',
  ], calc('Solve e^(2x) = 9. Give x to 2 decimal places.', 1.1, { formula: 'x = ½ ln 9 = ln 3', steps: ['2x = ln 9.', 'x = ln 3 = 1.0986.', 'To 2 d.p. this is 1.10.'], tol: 0.01 }), { fig: { svg: 'logGraph', caption: 'y = eˣ and y = ln x are reflections in y = x' } }),
], [
  calc('Solve 2^(x + 1) = 3ˣ. Give x to 2 decimal places.', 1.71, { formula: '(x + 1) ln 2 = x ln 3', steps: ['x(ln 3 − ln 2) = ln 2.', 'x = 0.6931 ÷ 0.4055 = 1.71.'], tol: 0.01 }),
  calc('Solve log₁₀ x = −2.', 0.01, { formula: 'x = 10⁻²', steps: ['x = 10⁻² = 0.01.'], tol: 0.0001 }),
  calc('Work out log₉ 27.', 1.5, { formula: '(3 log 3) ÷ (2 log 3)', steps: ['27 = 3³ and 9 = 3².', 'log₉ 27 = 3/2 = 1.5.'], tol: 0.001 }),
  def('What is a logarithm?', ['The power to which the base must be raised', 'to give a number: log_a b = c means aᶜ = b'], 'log_a b = c means aᶜ = b, so a logarithm is an index.'),
  exam('Solve log₃(2x + 1) = 2 + log₃(x − 1).', 'Solve', ['Combines to log₃((2x + 1)/(x − 1)) = 2', 'Writes (2x + 1) = 9(x − 1)', 'x = 10/7 (check it is greater than 1)'], 'log₃((2x + 1)/(x − 1)) = 2, so 2x + 1 = 9x − 9, so x = 10/7, which is greater than 1.'),
]);

export const unit2 = {
  id: 'a2', number: 2, title: 'Inequalities, Surds and Logarithms', short: 'Logs', emoji: '🧮', color: 'violet',
  submodules: [a21, a22, a23],
  papers: [],
};
