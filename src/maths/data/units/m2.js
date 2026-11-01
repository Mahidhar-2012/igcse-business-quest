import { byte, lesson, mc, calc, multi, match, fig, def, exam } from '../helpers.js';

// Unit 2: Algebra (Cambridge IGCSE Mathematics 0580, syllabus topics C2 and E2).

export const m21 = lesson('m2-expand', 'Expanding, factorising and algebraic fractions', 'C2.1 to C2.4, E2.2', [
  'Expanding multiplies out brackets; factorising reverses it. Both are needed to simplify algebraic fractions and solve quadratics.',
], [
  byte('Expanding brackets', [
    'Multiply **every term** in one bracket by **every term** in the other. (x + 3)(2x − 5) = 2x² − 5x + 6x − 15 = **2x² + x − 15**.',
    'Squares: **(x + a)² = x² + 2ax + a²**. The middle term is **not** missing: (x + 4)² ≠ x² + 16.',
    'Take care with **negative signs**: −2(x − 5) = −2x **+ 10**.',
  ], mc('Expand and simplify (x + 3)(2x − 5).', [
    ['2x² + x − 15', 'Correct: −5x + 6x = +x and 3 × (−5) = −15.'],
    ['2x² − x − 15', '+6x − 5x = +x, not −x.'],
    ['2x² + 11x − 15', 'The x terms are −5x and +6x, which combine to x.'],
    ['2x² + x + 15', '3 × (−5) = −15, not +15.'],
  ], 0), { fig: { svg: 'areaModel', caption: 'Area model for (x + 3)(2x − 5)' }, eq: ['(x + a)² = x² + 2ax + a²', '(x + a)(x − a) = x² − a²'] }),
  byte('Factorising', [
    'Always take out the **highest common factor** first. 3x² − 75 = **3**(x² − 25) = 3(x − 5)(x + 5).',
    '**Difference of two squares:** x² − a² = (x − a)(x + a). **Trinomials:** find two numbers that **multiply to c** and **add to b**: x² + 5x − 14 = (x + 7)(x − 2).',
    'For ax² + bx + c with a > 1 use **grouping** or trial and error. **Check by expanding.**',
  ], mc('Factorise 3x² − 75 completely.', [
    ['3(x − 5)(x + 5)', 'Correct: common factor 3, then difference of two squares.'],
    ['3(x² − 25)', 'This is not factorised fully; x² − 25 factorises again.'],
    ['(3x − 15)(x + 5)', 'This is not fully factorised; 3x − 15 still has a factor 3 and the answer should show 3 outside.'],
    ['3(x − 25)', 'The brackets must expand back to 3x² − 75, but this gives 3x − 75.'],
  ], 0)),
  byte('Algebraic fractions', [
    '**Simplify** by factorising top and bottom, then **cancel common factors** (never cancel terms that are added).',
    '**Add or subtract** with a **common denominator**: 1/x + 2/(x + 1) = (x + 1 + 2x)/(x(x + 1)) = (3x + 1)/(x(x + 1)).',
    'To **divide** by a fraction, **multiply by its reciprocal**.',
  ], mc('Simplify (x² − 9) / (x² + x − 6).', [
    ['(x − 3)/(x − 2)', 'Correct: (x − 3)(x + 3) over (x + 3)(x − 2).'],
    ['(x + 3)/(x − 2)', 'x² − 9 gives (x − 3), not (x + 3), once (x + 3) is cancelled.'],
    ['−9/(x − 6)', 'You cannot cancel the x² terms; they are part of sums.'],
    ['(x − 3)/(x + 2)', 'x² + x − 6 = (x + 3)(x − 2), so the leftover factor is (x − 2).'],
  ], 0)),
], [
  calc('(x + 4)² = x² + bx + 16. Find b.', 8, { formula: '2 × 4', steps: ['(x + 4)² = x² + 8x + 16.', 'b = 8.'] }),
  calc('Use (x + 7)(x − 7) = x² − 49 to work out 103 × 97.', 9991, { formula: '(100 + 3)(100 − 3) = 100² − 3²', steps: ['103 × 97 = (100 + 3)(100 − 3).', '= 10 000 − 9 = 9991.'] }),
  multi('Select ALL the correct factorisations of x² − 16.', [['(x − 4)(x + 4)', 'Difference of two squares.', true], ['(x − 8)(x + 2)', 'This expands to x² − 6x − 16.', false], ['(x − 4)²', 'This expands to x² − 8x + 16.', false], ['(x + 4)(x − 4)', 'The order of brackets does not matter.', true]], 'Difference of two squares: (x − 4)(x + 4).'),
  def('Define a factor of an expression.', ['A term or expression', 'that divides it exactly with no remainder'], 'A factor divides exactly into an expression leaving no remainder.'),
  exam('Factorise x² + 5x − 14.', 'Factorise', ['Finds numbers with product −14 and sum 5 (7 and −2)', 'Correct answer (x + 7)(x − 2)'], 'Pairs with product −14: 7 and −2 add to 5. So (x + 7)(x − 2).'),
]);

export const m22 = lesson('m2-solve', 'Equations, inequalities and formulae', 'C2.5 to C2.8, E2.4', [
  'Keep an equation balanced: do the same to both sides. Inequalities work the same way, but the sign flips when you multiply or divide by a negative.',
], [
  byte('Solving linear equations', [
    'Clear fractions first by multiplying **every term** by the common denominator. (3x − 1)/4 = (x + 5)/2 gives 3x − 1 = 2(x + 5).',
    'Expand brackets, collect x terms on one side and numbers on the other, then divide.',
    '**Substitute back** to check: 3(11) − 1 = 32 and 32/4 = 8; (11 + 5)/2 = 8.',
  ], calc('Solve (3x − 1)/4 = (x + 5)/2.', 11, { formula: 'multiply by 4: 3x − 1 = 2(x + 5)', steps: ['3x − 1 = 2x + 10.', 'x = 11.'] })),
  byte('Inequalities', [
    'Solve like an equation. **Multiplying or dividing by a negative reverses the inequality sign.** −2x < −8 gives **x > 4**.',
    'On a number line use an **open circle** for < or > and a **filled circle** for ≤ or ≥.',
    'A double inequality such as −3 ≤ 2x + 1 < 9 is solved in **all three parts at once**: −2 ≤ x < 4.',
  ], calc('Find the smallest integer x that satisfies 5 − 2x < −3.', 5, { formula: '5 − 2x < −3, so −2x < −8, so x > 4', steps: ['−2x < −8.', 'Divide by −2 and reverse the sign: x > 4.', 'The smallest integer greater than 4 is 5.'] })),
  byte('Rearranging formulae', [
    'The **subject** is the letter on its own. Undo operations in **reverse order**, doing the same to both sides.',
    'If the subject appears **more than once**, collect those terms on one side and **factorise** to take the subject out: y(x − 1) = 3x + 2 gives x(y − 3) = y + 2.',
    'Roots and squares: undo a square with a **square root** (give ± only if the context allows it).',
  ], mc('Make x the subject of y = (3x + 2)/(x − 1).', [
    ['x = (y + 2)/(y − 3)', 'Correct: yx − y = 3x + 2, so x(y − 3) = y + 2.'],
    ['x = (y − 2)/(y − 3)', 'Moving −y across gives +y, so the numerator is y + 2.'],
    ['x = (y + 2)/(3 − y)', 'The x terms are yx − 3x = x(y − 3), not x(3 − y).'],
    ['x = (3y + 2)/(y − 1)', 'The subject cannot be rearranged by replacing x with y; it needs factorising.'],
  ], 0)),
], [
  calc('Solve 3(2x − 1) = 2(x + 5) + 1.', 3.5, { formula: '6x − 3 = 2x + 11', steps: ['6x − 3 = 2x + 10 + 1.', '4x = 14.', 'x = 3.5.'] }),
  calc('How many integers satisfy −3 ≤ 2x + 1 < 9?', 6, { formula: 'solve all three parts', steps: ['−4 ≤ 2x < 8.', '−2 ≤ x < 4.', 'The integers are −2, −1, 0, 1, 2, 3, which is 6.'] }),
  calc('V = πr²h. Find r when V = 150 and h = 6. Give your answer to 2 decimal places.', 2.82, { unit: 'cm', formula: 'r = √(V ÷ πh)', steps: ['r² = 150 ÷ (6π) = 7.9577.', 'r = 2.8209.', 'r ≈ 2.82.'] }),
  def('What is the subject of a formula?', ['The variable on its own', 'on one side of the equals sign'], 'The subject is the letter written on its own on one side, for example F in F = ma.'),
  exam('Make x the subject of y = 5 − 2x/3.', 'Rearrange', ['Multiplies through or isolates the x term (3y = 15 − 2x)', 'Rearranges to 2x = 15 − 3y', 'Correct answer x = (15 − 3y)/2'], '3y = 15 − 2x, so 2x = 15 − 3y, and x = (15 − 3y)/2.'),
]);

export const m23 = lesson('m2-quad', 'Quadratic equations', 'E2.5, E2.6', [
  'A quadratic has up to two solutions. Choose factorising when it factorises, the formula when it does not, and completing the square to find turning points.',
], [
  byte('Solving by factorising', [
    'Rearrange to **= 0**, factorise, then set **each bracket to zero**. 2x² − 7x + 3 = 0 gives (2x − 1)(x − 3) = 0, so x = **½** or **3**.',
    'You must have **zero** on one side before factorising: (x − 2)(x − 3) = 6 does **not** give x = 8 or 9.',
    'The solutions are the **x-intercepts** (roots) of the graph y = ax² + bx + c.',
  ], calc('Solve x² − 5x − 14 = 0. Give the larger root.', 7, { formula: '(x − 7)(x + 2) = 0', steps: ['Numbers with product −14 and sum −5: −7 and +2.', '(x − 7)(x + 2) = 0.', 'x = 7 or x = −2; the larger is 7.'] }), { fig: { svg: 'quadraticGraph', caption: 'Roots, y-intercept and turning point of a quadratic' } }),
  byte('The quadratic formula', [
    'For ax² + bx + c = 0: **x = (−b ± √(b² − 4ac)) / 2a**. Put brackets round negative numbers.',
    'The **discriminant b² − 4ac** decides the number of roots: **> 0** two roots, **= 0** one repeated root, **< 0** no real roots.',
    'Use the formula when asked for answers to **decimal places or significant figures** (the equation will not factorise).',
  ], calc('Solve x² − 4x − 3 = 0 using the formula. Give the positive root to 2 decimal places.', 4.65, { formula: 'x = (4 ± √(16 + 12))/2', steps: ['a = 1, b = −4, c = −3.', 'x = (4 ± √28)/2 = 2 ± √7.', 'Positive root 2 + 2.6458 = 4.65.'], tol: 0.01 }), { eq: ['x = (−b ± √(b² − 4ac)) / 2a', 'Discriminant = b² − 4ac'] }),
  byte('Completing the square', [
    'Write x² + bx + c as **(x + b/2)² − (b/2)² + c**. x² + 6x − 7 = (x + 3)² − 9 − 7 = **(x + 3)² − 16**.',
    'The **turning point** of y = (x + p)² + q is **(−p, q)**. Here the minimum is **−16 at x = −3**.',
    'Solve by completing the square: (x + 3)² = 16 gives x + 3 = ±4, so x = 1 or −7.',
  ], mc('Write x² + 6x − 7 in the form (x + a)² + b.', [
    ['(x + 3)² − 16', 'Correct: (x + 3)² = x² + 6x + 9, so subtract 16 to get −7.'],
    ['(x + 3)² + 2', 'Subtract 9 and also 7: −9 − 7 = −16.'],
    ['(x + 6)² − 43', 'a is half of 6, not 6.'],
    ['(x + 3)² − 7', 'The 9 added by squaring must be subtracted as well.'],
  ], 0)),
], [
  calc('A rectangle has length (x + 3) cm and width x cm. Its area is 40 cm². Find x.', 5, { unit: 'cm', formula: 'x(x + 3) = 40', steps: ['x² + 3x − 40 = 0.', '(x + 8)(x − 5) = 0.', 'x = 5 (length cannot be negative).'] }),
  calc('Work out the discriminant of 2x² + 3x + 5.', -31, { formula: 'b² − 4ac', steps: ['b² − 4ac = 9 − 4(2)(5) = 9 − 40 = −31.', 'Negative, so there are no real roots.'] }),
  multi('Select ALL the equations that have two different real roots.', [['x² − 4x + 1 = 0', 'Discriminant 16 − 4 = 12 > 0.', true], ['x² + 2x + 5 = 0', 'Discriminant 4 − 20 < 0, so no real roots.', false], ['x² − 6x + 9 = 0', 'Discriminant 0, so one repeated root.', false], ['2x² − x − 3 = 0', 'Discriminant 1 + 24 > 0.', true]], 'Two different roots need a positive discriminant.'),
  def('What is a root of a quadratic equation?', ['A value of x that makes the expression equal to zero', 'where the graph crosses the x-axis'], 'A root is a value of x for which ax² + bx + c = 0, so the graph meets the x-axis there.'),
  exam('Solve 3x² + 5x − 4 = 0. Give your answers correct to 2 decimal places.', 'Solve', ['Substitutes a = 3, b = 5, c = −4 into the formula', 'Correct simplification (−5 ± √73)/6', 'x = 0.59 and x = −2.26'], 'x = (−5 ± √(25 + 48))/6 = (−5 ± √73)/6. √73 ≈ 8.544, so x ≈ 0.59 or x ≈ −2.26.'),
]);

export const m24 = lesson('m2-simul', 'Simultaneous equations', 'C2.9, E2.7', [
  'Two unknowns need two equations. Eliminate one variable, or substitute when one equation is a quadratic.',
], [
  byte('Linear simultaneous equations', [
    '**Elimination:** make the coefficients of one letter equal, then add or subtract. **Substitution:** rearrange one equation to y = … and put it into the other.',
    '**Same signs subtract, different signs add.** Always find the second variable by substituting back, then check in both equations.',
    'Graphically, the solution is the point where the two **lines cross**.',
  ], calc('Solve 2x + 3y = 12 and 4x − y = 10. Find x + y.', 5, { formula: 'y = 4x − 10', steps: ['From the second equation y = 4x − 10.', '2x + 3(4x − 10) = 12, so 14x = 42 and x = 3.', 'y = 2, so x + y = 5.'] })),
  byte('Linear and quadratic simultaneous equations', [
    'Rearrange the **linear** equation to y = … (or x = …), **substitute into the quadratic**, and solve the resulting quadratic. There are usually **two** solutions.',
    'Each x-value gives a **matching y-value** from the linear equation. Write them as coordinate pairs.',
    'Geometrically: a **line meets a curve (or circle)** at 0, 1 or 2 points.',
  ], calc('Solve y = x + 1 and x² + y² = 25. What is the sum of the two x-values?', -1, { formula: 'x² + (x + 1)² = 25', steps: ['2x² + 2x + 1 = 25, so x² + x − 12 = 0.', '(x + 4)(x − 3) = 0, so x = 3 or x = −4.', 'Sum = 3 + (−4) = −1.'] })),
  byte('Forming equations from words', [
    'Define letters clearly (let p = price of a pen in dollars). Write **one equation per fact**, then solve.',
    '2 pens and 3 books cost $12.50, and 4 pens and 1 book cost $10. Then 2p + 3b = 12.5 and 4p + b = 10, giving p = 1.75 and b = 3.',
    'Check the answer **makes sense** (a price cannot be negative, a length cannot be negative).',
  ], calc('2 pens and 3 books cost $12.50. 4 pens and 1 book cost $10. Find the cost of one pen and one book together, in dollars.', 4.75, { unit: '$', formula: '2p + 3b = 12.5 and 4p + b = 10', steps: ['b = 10 − 4p.', '2p + 30 − 12p = 12.5, so p = 1.75.', 'b = 3, so p + b = 4.75.'] })),
], [
  calc('Solve 3x − 2y = 7 and x + 2y = 5. Find y.', 1, { formula: 'add the equations', steps: ['4x = 12, so x = 3.', '3 + 2y = 5, so y = 1.'] }),
  calc('x + y = 7 and xy = 12. Find the larger value of x.', 4, { formula: 'x(7 − x) = 12', steps: ['7x − x² = 12, so x² − 7x + 12 = 0.', '(x − 3)(x − 4) = 0.', 'The larger value of x is 4.'] }),
  match('Match each pair of equations to its solution.', [['x + y = 10 and x − y = 2', 'x = 6, y = 4'], ['x + y = 7 and x − y = 1', 'x = 4, y = 3'], ['2x + y = 8 and x = 2', 'x = 2, y = 4'], ['x + y = 5 and y = 2x − 1', 'x = 2, y = 3']], 'Substitute each pair back into both equations.'),
  def('What does it mean to solve two equations simultaneously?', ['Find values of the unknowns', 'that satisfy both equations at the same time'], 'It means finding the values of both unknowns that make both equations true together.'),
  exam('Solve y = 2x − 1 and y = x² − 4. Write the solutions as coordinates.', 'Solve', ['Equates to get x² − 2x − 3 = 0', 'Factorises (x − 3)(x + 1) = 0', 'Finds both points (3, 5) and (−1, −3)'], 'x² − 4 = 2x − 1 gives x² − 2x − 3 = 0, so x = 3 or x = −1. Then y = 5 or y = −3: (3, 5) and (−1, −3).'),
]);

export const m25 = lesson('m2-seq', 'Sequences', 'C2.13, E2.13', [
  'A rule for the nth term lets you jump to any term. Linear sequences have a constant first difference; quadratic sequences have a constant second difference.',
], [
  byte('Linear sequences and the nth term', [
    'For a sequence with common difference d, the nth term is **dn + (first term − d)**. 3, 7, 11, 15 … has d = 4, so **4n − 1**.',
    'To test whether a number is in the sequence, **solve** 4n − 1 = value; n must be a **positive whole number**.',
    'The 100th term of 4n − 1 is 4(100) − 1 = **399**.',
  ], calc('The nth term of a sequence is 4n − 1. Find the 100th term.', 399, { formula: '4 × 100 − 1', steps: ['4 × 100 = 400.', '400 − 1 = 399.'] })),
  byte('Quadratic sequences', [
    'If the **second difference** is constant, the sequence is quadratic and the nth term starts with **(second difference ÷ 2) n²**.',
    'Subtract that n² part from the sequence; what is left is a **linear** sequence. 5, 9, 15, 23: first differences 4, 6, 8; second 2; so n² + … The remainder 4, 5, 6, 7 is n + 3. The rule is **n² + n + 3**.',
    'Check with n = 1: 1 + 1 + 3 = 5 ✓.',
  ], calc('A sequence starts 5, 9, 15, 23, … and has nth term n² + n + 3. Find the 10th term.', 113, { formula: '10² + 10 + 3', steps: ['10² = 100.', '100 + 10 + 3 = 113.'] })),
  byte('Geometric and special sequences', [
    'In a **geometric** sequence you multiply by a constant **ratio r**. The nth term is **a × rⁿ⁻¹**. For 2, 6, 18, 54 the rule is 2 × 3ⁿ⁻¹.',
    'Know the **special sequences**: squares 1, 4, 9, 16; cubes 1, 8, 27; triangular numbers 1, 3, 6, 10 (**n(n + 1)/2**); **Fibonacci** 1, 1, 2, 3, 5, 8 (add the two previous terms).',
    'A decreasing sequence has a **negative** coefficient of n: 20, 17, 14 is −3n + 23.',
  ], calc('Find the 8th term of the geometric sequence 2, 6, 18, 54, …', 4374, { formula: '2 × 3⁷', steps: ['a = 2 and r = 3.', '8th term = 2 × 3⁷ = 2 × 2187 = 4374.'] })),
], [
  calc('The nth term of a sequence is 5n + 2. Which term has the value 97?', 19, { formula: '5n + 2 = 97', steps: ['5n = 95.', 'n = 19.'] }),
  calc('The first differences of a quadratic sequence are 4, 10, 16. What is the second difference?', 6, { formula: 'difference of the differences', steps: ['10 − 4 = 6 and 16 − 10 = 6.', 'The second difference is 6.'] }),
  multi('The nth term of a sequence is 4n − 3. Select ALL the numbers that are in the sequence.', [['5', 'n = 2 gives 5.', true], ['9', 'n = 3 gives 9.', true], ['14', '4n = 17 has no whole-number solution.', false], ['17', 'n = 5 gives 17.', true], ['20', '4n = 23 has no whole-number solution.', false]], 'Solve 4n − 3 = value and check n is a positive integer.'),
  def('What is the nth term of a sequence?', ['A formula for the term in position n', 'in terms of n'], 'The nth term is a rule that gives the value of the term in position n.'),
  exam('Find the nth term of the sequence 2, 5, 8, 11, …', 'Find', ['Identifies a common difference of 3', 'Correct nth term 3n − 1'], 'The difference is 3, so the rule starts 3n. 3(1) = 3 and the first term is 2, so subtract 1: 3n − 1.'),
]);

export const unit2 = {
  id: 'm2', number: 2, title: 'Algebra', short: 'Algebra', emoji: '🔤', color: 'violet',
  submodules: [m21, m22, m23, m24, m25],
  papers: [],
};
