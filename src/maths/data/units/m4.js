import { byte, lesson, mc, calc, multi, def, exam } from '../helpers.js';

// Unit 4: Geometry (Cambridge IGCSE Mathematics 0580, topics C4 and E4) and Unit 5: Mensuration (C5, E5).

export const m41 = lesson('m4-angles', 'Angles and polygons', 'C4.3, C4.4, C4.6', [
  'Angles on a line add to 180°, around a point to 360°, in a triangle to 180°. Parallel lines create equal and supplementary angle pairs.',
], [
  byte('Angle rules and parallel lines', [
    'Angles on a **straight line** add to **180°**; round a **point** to **360°**; **vertically opposite** angles are **equal**; the angles of a **triangle** add to **180°**.',
    'With parallel lines: **alternate** (Z) angles are **equal**; **corresponding** (F) angles are **equal**; **co-interior** (C) angles add to **180°**.',
    'Always give a **reason** with each angle: “alternate angles”, “angles on a straight line”.',
  ], mc('Two parallel lines are cut by a transversal. One angle is 65°. What is the co-interior angle?', [
    ['115°', 'Correct: co-interior angles add to 180°.'],
    ['65°', 'Alternate and corresponding angles are equal; co-interior angles are not.'],
    ['25°', 'This is 90° − 65°, which is not a rule for parallel lines.'],
    ['295°', 'This is 360° − 65°, angles around a point.'],
  ], 0), { fig: { svg: 'parallelAngles', caption: 'Alternate, corresponding and co-interior angles' } }),
  byte('Triangles and quadrilaterals', [
    'An **isosceles** triangle has two equal sides and the **base angles are equal**. An **equilateral** triangle has three angles of 60°.',
    'The **exterior angle** of a triangle equals the **sum of the two opposite interior angles**. Angles in a **quadrilateral** add to **360°**.',
    'A **parallelogram** has opposite angles equal; a **kite** has one pair of equal angles; a **trapezium** has a pair of parallel sides.',
  ], calc('An isosceles triangle has an apex angle of 40°. Find one base angle, in degrees.', 70, { unit: '°', formula: '(180 − 40) ÷ 2', steps: ['The two base angles are equal and the angles add to 180°.', '(180 − 40) ÷ 2 = 70.'] })),
  byte('Interior and exterior angles of polygons', [
    'Sum of interior angles = **(n − 2) × 180°**. Sum of exterior angles of **any** polygon = **360°**.',
    'For a **regular** n-sided polygon each exterior angle = **360° ÷ n**, and **interior + exterior = 180°**.',
    'A regular decagon (n = 10) has exterior angle 36° and interior angle **144°**.',
  ], calc('Each exterior angle of a regular polygon is 24°. How many sides does it have?', 15, { formula: '360 ÷ 24', steps: ['Exterior angles add to 360°.', '360 ÷ 24 = 15 sides.'] }), { fig: { svg: 'polygonAngles', caption: 'Exterior angles add to 360°' }, eq: ['Interior sum = (n − 2) × 180°', 'Exterior angle = 360° ÷ n'] }),
], [
  calc('Find the sum of the interior angles of a heptagon, in degrees.', 900, { unit: '°', formula: '(7 − 2) × 180', steps: ['5 × 180 = 900.'] }),
  calc('Find the size of an exterior angle of a regular octagon, in degrees.', 45, { unit: '°', formula: '360 ÷ 8', steps: ['360 ÷ 8 = 45.'] }),
  calc('An exterior angle of a triangle is 130°. One of the opposite interior angles is 50°. Find the other opposite interior angle, in degrees.', 80, { unit: '°', formula: '130 − 50', steps: ['Exterior angle = sum of the two opposite interior angles.', '130 − 50 = 80.'] }),
  multi('Select ALL the true statements about parallel lines cut by a transversal.', [['Alternate angles are equal', 'The Z-shape gives equal angles.', true], ['Co-interior angles add to 180°', 'The C-shape gives supplementary angles.', true], ['Corresponding angles add to 180°', 'Corresponding angles are equal.', false], ['Vertically opposite angles are equal', 'Opposite angles at a crossing are equal.', true]], 'Remember Z, F and C.'),
  def('What is an exterior angle of a polygon?', ['The angle between one side', 'and the extension of the adjacent side'], 'An exterior angle is formed by one side and the extended adjacent side, outside the polygon.'),
  exam('Each interior angle of a regular polygon is 156°. Work out the number of sides.', 'Work out', ['Exterior angle 180 − 156 = 24°', 'Uses 360 ÷ exterior angle', 'n = 15'], 'Exterior angle = 24°, so n = 360 ÷ 24 = 15.'),
]);

export const m42 = lesson('m4-similar', 'Congruence and similarity', 'C4.2, E4.2', [
  'Congruent shapes are identical. Similar shapes are enlargements: lengths scale by k, areas by k², volumes by k³.',
], [
  byte('Congruent triangles', [
    'Two triangles are **congruent** if one is an exact copy (rotation, reflection, translation). Conditions: **SSS**, **SAS** (the angle between the two sides), **ASA** (or AAS) and **RHS** (right angle, hypotenuse, side).',
    '**AAA is not enough**: it only makes the triangles **similar**. SSA is not enough either.',
    'In proofs, state **each pair of equal parts with a reason**, then the condition used.',
  ], mc('Which condition does NOT prove that two triangles are congruent?', [
    ['Three equal angles (AAA)', 'Correct: AAA gives similar triangles of any size.'],
    ['Three equal sides (SSS)', 'SSS fixes the triangle exactly.'],
    ['Two sides and the angle between them (SAS)', 'SAS fixes the triangle exactly.'],
    ['Two angles and a corresponding side (AAS)', 'AAS fixes the triangle exactly.'],
  ], 0)),
  byte('Similar shapes', [
    'Similar shapes have **equal angles** and **corresponding sides in the same ratio** (the **scale factor k**).',
    'Scale factor k = **new length ÷ old length**. Match corresponding sides carefully (opposite equal angles).',
    'Sides 8 and 20 correspond, so k = 2.5. A side 12 on the small triangle becomes **30** on the large one.',
  ], calc('Two triangles are similar. Sides of 8 cm and 20 cm correspond. A third side of the smaller triangle is 12 cm. Find the matching side on the larger triangle, in cm.', 30, { unit: 'cm', formula: 'k = 20 ÷ 8 = 2.5', steps: ['k = 20 ÷ 8 = 2.5.', '12 × 2.5 = 30.'] }), { fig: { svg: 'similarTriangles', caption: 'Corresponding sides in the ratio k' } }),
  byte('Area and volume scale factors', [
    'If lengths scale by **k**, **areas scale by k²** and **volumes by k³**.',
    'Ratios: lengths a : b gives areas **a² : b²** and volumes **a³ : b³**. Areas 4 : 9 means lengths 2 : 3 and volumes **8 : 27**.',
    'For **mass or capacity** of similar solids use the **volume** factor.',
  ], mc('Two similar solids have surface areas in the ratio 4 : 9. What is the ratio of their volumes?', [
    ['8 : 27', 'Correct: lengths 2 : 3, so volumes 2³ : 3³.'],
    ['2 : 3', 'This is the ratio of the lengths.'],
    ['4 : 9', 'This is the ratio of the areas.'],
    ['16 : 81', 'This squares the area ratio instead of cubing the length ratio.'],
  ], 0), { eq: ['Area factor = k²', 'Volume factor = k³'] }),
], [
  calc('A shape has area 50 cm². It is enlarged by scale factor 3. Find the new area, in cm².', 450, { unit: 'cm²', formula: '50 × 3²', steps: ['Area factor = 9.', '50 × 9 = 450.'] }),
  calc('Two similar bottles have heights 10 cm and 15 cm. The larger holds 810 ml. How much does the smaller hold, in ml?', 240, { unit: 'ml', formula: '810 × (10/15)³', steps: ['Length factor from large to small = 2/3.', 'Volume factor = 8/27.', '810 × 8/27 = 240.'] }),
  calc('The volumes of two similar solids are in the ratio 27 : 64. The smaller has surface area 18 cm². Find the surface area of the larger, in cm².', 32, { unit: 'cm²', formula: 'lengths 3 : 4, areas 9 : 16', steps: ['Length ratio 3 : 4, so area ratio 9 : 16.', '18 ÷ 9 × 16 = 32.'] }),
  multi('Select ALL the conditions that prove two triangles are congruent.', [['SSS', 'Three equal sides.', true], ['SAS', 'Two sides and the included angle.', true], ['RHS', 'Right angle, hypotenuse and a side.', true], ['AAA', 'This only proves similarity.', false], ['SSA in general', 'This can give two different triangles.', false]], 'Congruence needs enough information to fix the triangle.'),
  exam('Two similar cones have heights 8 cm and 12 cm. The surface area of the smaller cone is 120 cm². Calculate the surface area of the larger cone.', 'Calculate', ['Length scale factor 12 ÷ 8 = 1.5', 'Area factor 1.5² = 2.25', '120 × 2.25 = 270 cm²'], 'k = 1.5, area factor k² = 2.25, so 120 × 2.25 = 270 cm².'),
]);

export const m43 = lesson('m4-circle', 'Circle theorems', 'E4.5', [
  'Circle theorems link angles to arcs, chords and tangents. Always name the theorem when you use it.',
], [
  byte('Angle at the centre and in a semicircle', [
    'The **angle at the centre is twice the angle at the circumference** on the same arc.',
    'The **angle in a semicircle is 90°** (the chord is a diameter). **Angles in the same segment are equal.**',
    'Radii are equal, so triangles that join two radii are **isosceles**: use this to find more angles.',
  ], calc('Angle AOB at the centre of a circle is 118°. Find the angle at the circumference standing on the same arc AB, in degrees.', 59, { unit: '°', formula: '118 ÷ 2', steps: ['The angle at the circumference is half the angle at the centre.', '118 ÷ 2 = 59.'] }), { fig: { svg: 'circleThm1', caption: 'Angle at the centre and angle in a semicircle' } }),
  byte('Cyclic quadrilaterals and tangents', [
    '**Opposite angles of a cyclic quadrilateral add to 180°.**',
    'A **tangent is perpendicular to the radius** at the point of contact (90°). **Two tangents from one point are equal in length.**',
    'The line from the centre to the external point **bisects** the angle between the tangents.',
  ], mc('ABCD is a cyclic quadrilateral. Angle ABC is 112°. What is angle ADC?', [
    ['68°', 'Correct: opposite angles add to 180°.'],
    ['112°', 'Opposite angles in a cyclic quadrilateral add to 180°, they are not equal.'],
    ['56°', 'This halves the angle, which is the centre–circumference rule.'],
    ['248°', 'This is 360° − 112°, which is not the rule for cyclic quadrilaterals.'],
  ], 0), { fig: { svg: 'circleThm2', caption: 'Cyclic quadrilateral and tangent' } }),
  byte('Alternate segment theorem and chords', [
    'The angle between a **tangent and a chord** equals the angle in the **alternate segment**.',
    'A line from the centre **perpendicular to a chord bisects** the chord. This gives right-angled triangles for Pythagoras.',
    'Equal chords are the same distance from the centre.',
  ], calc('A chord of length 16 cm is in a circle of radius 10 cm. Find the perpendicular distance from the centre to the chord, in cm.', 6, { unit: 'cm', formula: '√(10² − 8²)', steps: ['The perpendicular from the centre bisects the chord: half is 8 cm.', 'Distance = √(100 − 64) = √36 = 6.'] })),
], [
  calc('AB is a diameter and C is on the circle. Angle CAB is 35°. Find angle ABC, in degrees.', 55, { unit: '°', formula: '180 − 90 − 35', steps: ['Angle ACB is 90° (angle in a semicircle).', '180 − 90 − 35 = 55.'] }),
  calc('PT is a tangent and O is the centre. Angle OPT is 28° and T is the point of contact. Find angle POT, in degrees.', 62, { unit: '°', formula: '180 − 90 − 28', steps: ['Angle OTP = 90°.', '180 − 90 − 28 = 62.'] }),
  calc('Angle ABC at the circumference is 41°. Find the reflex angle AOC at the centre, in degrees.', 278, { unit: '°', formula: '360 − 2 × 41', steps: ['Angle AOC = 82°.', 'Reflex angle = 360 − 82 = 278.'] }),
  multi('Select ALL the true circle facts.', [['A tangent is perpendicular to the radius at the point of contact', 'The angle is 90°.', true], ['Opposite angles in a cyclic quadrilateral are equal', 'They add to 180°.', false], ['The angle in a semicircle is 90°', 'The diameter subtends a right angle.', true], ['The angle at the centre is twice the angle at the circumference', 'This applies to the same arc.', true]], 'Name the theorem for each fact.'),
  exam('ABCD is a cyclic quadrilateral. Angle ADC is 70°. Find angle ABC and give a reason.', 'Find', ['Angle ABC = 110°', 'Reason: opposite angles of a cyclic quadrilateral add to 180°'], '180° − 70° = 110°, because opposite angles of a cyclic quadrilateral add to 180°.'),
]);

export const m44 = lesson('m4-construct', 'Constructions, loci and symmetry', 'C4.1, C4.5, E4.1', [
  'A locus is the path of a point that follows a rule. Constructions with compasses give exact bisectors.',
], [
  byte('Constructions', [
    'Use a **ruler and compasses** and **keep your construction arcs**. A **perpendicular bisector** of AB: arcs from A and B with the same radius, joined.',
    'An **angle bisector**: an arc cuts both arms, then equal arcs from those points cross.',
    'A **triangle from three sides**: draw one side, then arcs from each end meet at the third vertex.',
  ], mc('Which construction gives all the points the same distance from two fixed points A and B?', [
    ['The perpendicular bisector of AB', 'Correct: every point on it is equidistant from A and B.'],
    ['The bisector of the angle at A', 'This is equidistant from two lines, not two points.'],
    ['A circle centred on the midpoint of AB', 'This gives points a fixed distance from one point.'],
    ['A line parallel to AB through its midpoint', 'Points on a parallel line are not equidistant from A and B.'],
  ], 0)),
  byte('Loci', [
    '**Fixed distance from a point:** a **circle**. **Equidistant from two points:** the **perpendicular bisector**. **Equidistant from two lines:** the **angle bisector**.',
    '**Fixed distance from a line segment:** a **“racetrack”** (two parallel lines with semicircles at the ends).',
    'For “within” or “less than”, shade the **region**. Use a **dashed** line if the boundary is not included.',
  ], calc('A goat is tied by a 6 m rope to the corner of a rectangular shed, outside the shed. The shed is bigger than the rope. What area can it graze, in m²? Give your answer to 1 decimal place.', 84.8, { unit: 'm²', formula: '¾ × π × 6²', steps: ['The goat can reach three quarters of a circle.', '¾ × π × 36 = 27π = 84.8.'], tol: 0.1 }), { fig: { svg: 'locusRegions', caption: 'Common loci' } }),
  byte('Symmetry and scale drawings', [
    '**Line symmetry:** a mirror line. **Rotational symmetry:** the **order** is the number of times a shape fits on itself in a full turn. A regular n-gon has n lines and order n.',
    '**Scale 1 : n** means 1 cm on the drawing is n cm in real life. **Always convert units**: 1 : 25 000 means 1 cm represents 250 m.',
    'On a map, **actual distance = map distance × scale**; to find the scale, divide.',
  ], calc('A map has scale 1 : 25 000. Two towns are 8 cm apart on the map. How far apart are they in real life, in km?', 2, { unit: 'km', formula: '8 × 25 000 cm', steps: ['8 × 25 000 = 200 000 cm.', '200 000 cm = 2000 m = 2 km.'] })),
], [
  calc('How many lines of symmetry does a regular hexagon have?', 6, { formula: 'regular n-gon has n lines', steps: ['A regular hexagon has 6 lines of symmetry.'] }),
  calc('A plan has scale 1 : 200. A room is 6 m long. How long is it on the plan, in cm?', 3, { unit: 'cm', formula: '600 ÷ 200', steps: ['6 m = 600 cm.', '600 ÷ 200 = 3.'] }),
  multi('Select ALL the correct locus descriptions.', [['Points 3 cm from a fixed point: a circle of radius 3 cm', 'Fixed distance from a point is a circle.', true], ['Points equidistant from two points: a perpendicular bisector', 'The perpendicular bisector of the line joining them.', true], ['Points equidistant from two lines: a circle', 'It is the angle bisector.', false], ['Points 2 cm from a line segment: two lines and two semicircles', 'This forms a racetrack shape.', true]], 'Match each rule to its shape.'),
  def('What is a locus?', ['A set of points', 'that obey a given rule'], 'A locus is the path or set of all points that satisfy a given condition.'),
  exam('Describe fully the locus of points that are exactly 3 cm from a fixed point P.', 'Describe', ['A circle', 'Centred on P with radius 3 cm'], 'It is a circle with centre P and radius 3 cm.'),
]);

export const unit4 = {
  id: 'm4', number: 4, title: 'Geometry', short: 'Geometry', emoji: '📐', color: 'amber',
  submodules: [m41, m42, m43, m44],
  papers: [],
};

export const m51 = lesson('m5-area', 'Area, circles, arcs and sectors', 'C5.1 to C5.4', [
  'Learn the area formulas and the proportion rule for arcs and sectors: a fraction θ/360 of the whole circle.',
], [
  byte('Areas of 2D shapes', [
    '**Triangle ½bh**, **parallelogram bh**, **trapezium ½(a + b)h**, **rectangle lw**. The height is the **perpendicular** height.',
    'Break compound shapes into basic shapes and **add or subtract** areas.',
    'Trapezium with parallel sides 7 and 11 and height 6: ½(7 + 11) × 6 = **54**.',
  ], calc('A trapezium has parallel sides 7 cm and 11 cm, and the distance between them is 6 cm. Find its area, in cm².', 54, { unit: 'cm²', formula: '½ × (7 + 11) × 6', steps: ['½ × 18 × 6 = 54.'] }), { fig: { svg: 'areaFormulas', caption: 'Area formulas' }, eq: ['Triangle: ½ × base × height', 'Trapezium: ½(a + b)h', 'Parallelogram: base × height'] }),
  byte('Circles, arcs and sectors', [
    '**Circumference C = 2πr = πd**; **area A = πr²**.',
    '**Arc length = (θ/360) × 2πr**; **sector area = (θ/360) × πr²**. θ is the angle at the centre.',
    'Sector perimeter = **arc + 2 radii**. Leave answers in terms of π if asked, otherwise use the π key.',
  ], calc('A sector has radius 12 cm and angle 150°. Find its area, in cm², to 1 decimal place.', 188.5, { unit: 'cm²', formula: '(150/360) × π × 12²', steps: ['150/360 × π × 144 = 60π.', '60π = 188.5.'], tol: 0.1 }), { fig: { svg: 'sectorArc', caption: 'Arc and sector' }, eq: ['Arc = θ/360 × 2πr', 'Sector = θ/360 × πr²'] }),
  byte('Compound shapes and unit conversion', [
    'Break the shape into **rectangles, triangles and sectors**, work each out, then add (or subtract the part cut out).',
    'Area units: **1 m² = 10 000 cm²** and 1 km² = 1 000 000 m². Square the **length** conversion factor.',
    'Check the answer is sensible: a bigger shape cannot have a smaller area.',
  ], calc('Convert 2.5 m² to cm².', 25000, { unit: 'cm²', formula: '× 100²', steps: ['1 m = 100 cm, so 1 m² = 10 000 cm².', '2.5 × 10 000 = 25 000.'] })),
], [
  calc('A circle has circumference 20π cm. Find its radius, in cm.', 10, { unit: 'cm', formula: 'C = 2πr', steps: ['2πr = 20π.', 'r = 10.'] }),
  calc('Find the arc length of a sector with radius 9 cm and angle 80°. Give your answer to 2 decimal places.', 12.57, { unit: 'cm', formula: '(80/360) × 2π × 9', steps: ['80/360 × 18π = 4π.', '4π = 12.57.'], tol: 0.01 }),
  calc('A rectangle 10 cm by 6 cm has a semicircle of diameter 6 cm on one of its 6 cm sides. Find the total area, in cm², to 2 decimal places.', 74.14, { unit: 'cm²', formula: '60 + ½π(3²)', steps: ['Rectangle: 10 × 6 = 60.', 'Semicircle: ½ × π × 9 = 14.137.', 'Total = 74.14.'], tol: 0.01 }),
  multi('Select ALL the correct formulae.', [['Area of a circle = πr²', 'Correct.', true], ['Circumference = 2πr', 'Correct.', true], ['Area of a trapezium = ½(a + b)h', 'Correct.', true], ['Area of a triangle = bh', 'It is ½bh.', false]], 'Check each formula.'),
  exam('A sector has radius 8 cm and angle 135°. Calculate the perimeter of the sector.', 'Calculate', ['Arc length 135/360 × 2π × 8 = 6π ≈ 18.85 cm', 'Adds the two radii (16 cm)', 'Perimeter ≈ 34.85 cm'], 'Arc = 135/360 × 16π = 6π = 18.85 cm. Perimeter = 18.85 + 8 + 8 = 34.85 cm.'),
]);

export const m52 = lesson('m5-volume', 'Volume and surface area', 'C5.5, E5.4', [
  'Prisms use area × length. Pyramids and cones take a third of the prism. Spheres use 4/3 πr³.',
], [
  byte('Prisms and cylinders', [
    '**Volume of a prism = cross-sectional area × length.** **Cylinder: V = πr²h.**',
    'The cross-section is the face that stays the **same all the way through**.',
    'Cylinder r = 4, h = 10: V = π × 16 × 10 = 160π = **502.65 cm³**.',
  ], calc('A cylinder has radius 4 cm and height 10 cm. Find its volume in cm³ to 2 decimal places.', 502.65, { unit: 'cm³', formula: 'πr²h', steps: ['π × 4² × 10 = 160π.', '160π = 502.65.'], tol: 0.01 }), { eq: ['Prism: V = area × length', 'Cylinder: V = πr²h'] }),
  byte('Pyramids, cones and spheres', [
    '**Pyramid: V = ⅓ × base area × h.** **Cone: V = ⅓πr²h.** **Sphere: V = 4/3 πr³.** **Hemisphere** is half a sphere.',
    'Use the **perpendicular height**, not the slant height, in volume formulae.',
    'Cone r = 5, h = 12: V = ⅓ × π × 25 × 12 = 100π = **314.16 cm³**.',
  ], calc('A cone has base radius 5 cm and vertical height 12 cm. Find its volume in cm³ to 2 decimal places.', 314.16, { unit: 'cm³', formula: '⅓πr²h', steps: ['⅓ × π × 25 × 12 = 100π.', '100π = 314.16.'], tol: 0.01 }), { fig: { svg: 'solids3d', caption: 'Cylinder, cone and sphere' }, eq: ['Cone: V = ⅓πr²h', 'Sphere: V = 4/3 πr³', 'Pyramid: V = ⅓ × base × h'] }),
  byte('Surface area', [
    '**Sphere: 4πr².** **Cylinder: 2πr² + 2πrh** (two circles and the curved surface). **Cone curved surface: πrl** where **l is the slant height** √(r² + h²).',
    'For a closed cone add the base: total = πrl + πr².',
    'Cone r = 5, h = 12 has slant height √(25 + 144) = 13, so curved area = 65π ≈ **204.2 cm²**.',
  ], mc('A sphere has its radius doubled. What happens to its volume?', [
    ['It is multiplied by 8', 'Correct: volume scales with r³ and 2³ = 8.'],
    ['It is multiplied by 2', 'This would be for a length, not a volume.'],
    ['It is multiplied by 4', 'This is the factor for surface area.'],
    ['It is multiplied by 6', 'There is no 6 in the scale factors; volume uses the cube.'],
  ], 0), { eq: ['Sphere surface area = 4πr²', 'Cone curved area = πrl'] }),
], [
  calc('Find the volume of a sphere with radius 3 cm in cm³ to 1 decimal place.', 113.1, { unit: 'cm³', formula: '4/3 × π × 3³', steps: ['4/3 × π × 27 = 36π.', '36π = 113.1.'], tol: 0.1 }),
  calc('A cuboid is 6 cm by 5 cm by 4 cm. Find its total surface area, in cm².', 148, { unit: 'cm²', formula: '2(lw + lh + wh)', steps: ['2(30 + 24 + 20) = 148.'] }),
  calc('A triangular prism has a right-angled triangle cross-section with base 6 cm and height 8 cm. It is 10 cm long. Find its volume, in cm³.', 240, { unit: 'cm³', formula: 'area × length', steps: ['Area = ½ × 6 × 8 = 24.', 'Volume = 24 × 10 = 240.'] }),
  multi('Select ALL the correct formulae.', [['Volume of a cone = ⅓πr²h', 'Correct.', true], ['Volume of a sphere = 4/3 πr³', 'Correct.', true], ['Surface area of a sphere = 4πr²', 'Correct.', true], ['Volume of a pyramid = base × height', 'It is ⅓ × base × height.', false]], 'Check each formula.'),
  exam('A solid cone has base radius 6 cm and vertical height 8 cm. Calculate its volume and its total surface area, in terms of π.', 'Calculate', ['Volume ⅓π(6²)(8) = 96π cm³', 'Slant height √(36 + 64) = 10 cm', 'Total surface area π(6)(10) + π(6²) = 96π cm²'], 'V = ⅓ × π × 36 × 8 = 96π. l = 10. Total area = 60π + 36π = 96π cm².'),
]);

export const unit5 = {
  id: 'm5', number: 5, title: 'Mensuration', short: 'Mensuration', emoji: '📏', color: 'rose',
  submodules: [m51, m52],
  papers: [],
};
