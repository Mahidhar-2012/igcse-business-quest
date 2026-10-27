import { byte, lesson, mc, calc, tfd, fig } from '../helpers.js';

export const l11 = lesson('p1-measure', 'Measurements & vectors', '1.1', [
  'Rulers measure length, measuring cylinders measure volume, clocks and timers measure time. Repeat and average to reduce error.',
  'A scalar has size only; a vector has size and direction. Resultant of two perpendicular vectors: Pythagoras.',
], [
  byte('Measuring length, volume and time', [
    'A **ruler** measures length. Read at eye level, perpendicular to the scale, to avoid **parallax error**.',
    'A **measuring cylinder** measures the volume of a liquid: read the bottom of the curved surface (the **meniscus**) with your eye level with it.',
    'A **stopwatch** or digital timer measures time. Your reaction time adds an error of about 0.2 s.',
  ], mc('Which action best reduces the effect of reaction time when timing a short event?', [
    ['Time many repeats and use the average', 'Correct: random errors in starting and stopping partly cancel out.'],
    ['Use a ruler with smaller divisions', 'This helps length readings, not timing.'],
    ['Press stop sooner than you think', 'This guess does not remove the error; it only changes it.'],
    ['Time with the eyes closed', 'Not relevant to the error.'],
  ], 0)),
  byte('Averaging small quantities', [
    'To find a **small distance** (such as the thickness of a sheet of paper), measure a large number and divide: thickness = total ÷ number.',
    'To find a **short time** (such as one swing of a pendulum), time many swings and divide by the number of swings.',
    'The **period** T of a pendulum is the time for one complete swing (to and fro).',
  ], calc('A pendulum makes 20 complete oscillations in 31 s. What is its period (s)?', 1.55, {
    unit: 's', formula: 'period = total time ÷ number of oscillations', steps: ['31 ÷ 20 = 1.55 s'], tol: 0.01,
  })),
  byte('Scalars and vectors', [
    'A **scalar** has magnitude (size) only. Scalars: distance, speed, time, mass, energy, temperature.',
    'A **vector** has magnitude and direction. Vectors: force, weight, velocity, acceleration, momentum, field strengths.',
    'Speed is scalar; **velocity** is speed in a given direction, so it is a vector.',
  ], mc('A runner completes one lap of a circular track and returns to the start. Which quantity is zero for the whole lap?', [
    ['Displacement (a vector)', 'Correct: she ends where she started, so her overall change in position is zero.'],
    ['Distance', 'She ran a full lap, so the distance is not zero.'],
    ['Average speed', 'Distance ÷ time is not zero.'],
    ['Time taken', 'Time is clearly not zero.'],
  ], 0)),
  byte('Resultant of two vectors at right angles', [
    'Draw the two vectors head to tail. The **resultant** is the single vector from the start to the end.',
    'For two perpendicular forces or velocities, use **Pythagoras**: resultant² = a² + b².',
    'Find the direction using a scale drawing (or trigonometry).',
  ], calc('Two forces of 3.0 N and 4.0 N act at right angles. What is the size of the resultant force (N)?', 5, {
    unit: 'N', formula: 'R² = 3.0² + 4.0²', steps: ['R² = 9 + 16 = 25', 'R = 5.0 N'],
  })),
]);

export const l12 = lesson('p1-motion', 'Motion', '1.2', [
  'speed = distance ÷ time; acceleration = change in velocity ÷ time. Gradient of a distance–time graph = speed; gradient of a speed–time graph = acceleration; area under a speed–time graph = distance.',
  'Free fall: constant acceleration g ≈ 9.8 m/s² near Earth, until air resistance builds up to terminal velocity.',
], [
  byte('Speed and velocity', [
    '**Speed** = distance travelled ÷ time taken. Unit: m/s.',
    '**Average speed** = total distance ÷ total time (including stops).',
    '**Velocity** is speed in a given direction.',
  ], mc('A car travels 60 km in the first hour and 20 km in the second hour. What is its average speed over the two hours?', [
    ['40 km/h', 'Correct: 80 km ÷ 2 h = 40 km/h.'],
    ['30 km/h', 'This subtracts rather than adding the distances.'],
    ['80 km/h', 'This is the total distance, not divided by time.'],
    ['60 km/h', 'This is only the speed during the first hour.'],
  ], 0), { eq: ['v = s ÷ t', 'average speed = total distance ÷ total time'] }),
  byte('Distance–time graphs', [
    'Gradient of a **distance–time graph** = speed.',
    'A **horizontal line** = at rest. A **straight sloping line** = constant speed. A **curve getting steeper** = accelerating; **flattening** = decelerating.',
    'A steeper line means faster. Calculate speed using gradient = change in distance ÷ change in time.',
  ], fig({ svg: 'distanceTime' }, mc('On this distance–time graph, which section shows the object at rest?', [
    ['The horizontal middle section', 'Correct: distance is not changing, so speed is zero.'],
    ['The steep first section', 'This shows constant speed, not rest.'],
    ['The final curved section', 'The gradient is increasing: the object is accelerating.'],
    ['None: a graph cannot show rest', 'A flat line on a distance–time graph shows rest.'],
  ], 0)), { fig: { svg: 'distanceTime', caption: 'Distance–time graph' } }),
  byte('Acceleration', [
    '**Acceleration** = change in velocity ÷ time taken. Unit: m/s².',
    'Slowing down is **deceleration**, a negative acceleration.',
    'On a **speed–time graph**, the gradient gives acceleration.',
  ], calc('A car speeds up from 5.0 m/s to 17 m/s in 4.0 s. What is its acceleration (m/s²)?', 3, {
    unit: 'm/s²', formula: 'a = (v − u) ÷ t', steps: ['(17 − 5.0) ÷ 4.0 = 12 ÷ 4.0 = 3.0 m/s²'],
  }), { eq: ['a = Δv ÷ Δt'] }),
  byte('Speed–time graphs', [
    'A **horizontal line** = constant speed. A **sloping upward line** = constant acceleration. **Sloping down** = deceleration.',
    'The **gradient** = acceleration. The **area under the graph** = distance travelled.',
    'A curve means the acceleration is changing.',
  ], fig({ svg: 'speedTime' }, mc('On this speed–time graph, what does the shaded area represent?', [
    ['The distance travelled', 'Correct: area = speed × time = distance.'],
    ['The acceleration', 'Acceleration is the gradient, not the area.'],
    ['The average speed', 'Average speed is distance ÷ time.'],
    ['The time taken', 'Time is on the horizontal axis.'],
  ], 0)), { fig: { svg: 'speedTime', caption: 'Speed–time graph' } }),
  byte('Distance from a speed–time graph', [
    'For a **triangle**: area = ½ × base × height. For a **rectangle**: base × height.',
    'For a trapezium graph, split it into a triangle, rectangle and triangle and add the areas.',
  ], calc('A car accelerates uniformly from rest to 12 m/s in 5.0 s. What distance does it travel in this time (m)?', 30, {
    unit: 'm', formula: 'distance = area under graph = ½ × base × height', steps: ['½ × 5.0 × 12 = 30 m'],
  })),
  byte('Free fall and terminal velocity', [
    'Near the Earth’s surface, all objects in free fall (no air resistance) accelerate at the same rate: **g ≈ 9.8 m/s²**.',
    'With air resistance, drag grows as speed increases. When **drag = weight**, the resultant force is zero and the object falls at **terminal velocity**.',
    'A parachutist reaches a lower terminal velocity once the parachute opens (larger area, more drag).',
  ], fig({ svg: 'terminal' }, mc('Why does a skydiver stop accelerating and fall at a steady speed?', [
    ['Air resistance has grown until it equals the weight', 'Correct: the forces balance, so the resultant force and acceleration are zero.'],
    ['Gravity stops acting at high speed', 'Gravity keeps acting all the time.'],
    ['The skydiver’s mass decreases', 'Mass does not change.'],
    ['Air resistance becomes bigger than weight at once', 'If drag exceeded weight the skydiver would slow down.'],
  ], 0)), { fig: { svg: 'terminal', caption: 'Falling with air resistance' } }),
]);

export const l13 = lesson('p1-mass', 'Mass & weight', '1.3', [
  'Mass (kg) is the amount of matter and does not change. Weight (N) is the gravitational force on a mass: W = mg, with g = 10 N/kg on Earth (about 9.8).',
  'A balance compares masses (or weights); a spring balance measures weight.',
], [
  byte('Mass and weight are different', [
    '**Mass** is the amount of matter in an object. It is measured in **kilograms** and is the same everywhere.',
    '**Weight** is the force of gravity on a mass. It is measured in **newtons** and depends on the gravitational field strength.',
    'A **balance** compares masses; a **newtonmeter (spring balance)** measures weight.',
  ], mc('An astronaut goes from Earth to the Moon. What happens to her mass and her weight?', [
    ['Mass unchanged, weight decreases', 'Correct: the Moon’s gravity is weaker, but she contains the same amount of matter.'],
    ['Both decrease', 'Mass is not affected by location.'],
    ['Mass decreases, weight unchanged', 'The other way round.'],
    ['Both unchanged', 'Weight depends on the gravitational field strength, which is smaller on the Moon.'],
  ], 0)),
  byte('Gravitational field strength g', [
    '**Gravitational field strength g** = weight ÷ mass (force per unit mass), in N/kg.',
    'On Earth g is about **10 N/kg** (9.8 N/kg more precisely). This is also the free-fall acceleration.',
    'g is smaller on the Moon (about 1.6 N/kg) and larger on Jupiter.',
  ], calc('What is the weight of a 3.0 kg bag of sugar on Earth, taking g = 10 N/kg (N)?', 30, {
    unit: 'N', formula: 'W = m × g', steps: ['3.0 × 10 = 30 N'],
  }), { eq: ['W = m g', 'g = W ÷ m'] }),
  byte('Comparing masses on a balance', [
    'A **beam balance** is balanced when the weights on each side are equal, so the masses are equal. This works on any planet.',
    'A **spring balance** shows a smaller reading on the Moon because weight changes with g.',
  ], mc('A beam balance is in equilibrium on Earth with a rock on one side and 2.0 kg of masses on the other. It is taken to the Moon. What happens?', [
    ['It stays balanced', 'Correct: both sides are pulled by the same weaker gravity, so the weights are still equal.'],
    ['The rock side goes up', 'The weights on both sides fall by the same factor.'],
    ['The rock side goes down', 'The weights on both sides fall by the same factor.'],
    ['It can no longer be used', 'It still works; a beam balance compares masses.'],
  ], 0)),
]);

export const l14 = lesson('p1-density', 'Density', '1.4', [
  'Density ρ = mass ÷ volume (kg/m³ or g/cm³). Find volume of an irregular solid by displacement.',
  'An object floats if its density is less than the fluid it is in.',
], [
  byte('What is density?', [
    '**Density** is mass per unit volume. A dense material packs a lot of mass into a small volume.',
    'ρ = m ÷ V. Units: **g/cm³** or **kg/m³** (1 g/cm³ = 1000 kg/m³).',
    'Water has a density of 1.0 g/cm³ (1000 kg/m³).',
  ], calc('A metal block has a mass of 240 g and a volume of 30 cm³. What is its density (g/cm³)?', 8, {
    unit: 'g/cm³', formula: 'ρ = m ÷ V', steps: ['240 ÷ 30 = 8.0 g/cm³'],
  }), { eq: ['ρ = m ÷ V'] }),
  byte('Measuring density of a regular solid and a liquid', [
    '**Regular solid:** measure the mass with a balance; find the volume from length × width × height (or πr²h for a cylinder).',
    '**Liquid:** measure the mass of an empty measuring cylinder, add liquid, read its volume, then measure the new mass. Density = (mass of liquid) ÷ volume.',
  ], mc('When finding the density of a liquid with a measuring cylinder and balance, why is the empty cylinder measured first?', [
    ['To subtract its mass and find only the mass of the liquid', 'Correct: mass of liquid = total mass − mass of cylinder.'],
    ['To calibrate the cylinder’s volume scale', 'Not the reason.'],
    ['To find the weight of the liquid', 'Weight is not asked for.'],
    ['It is not needed', 'Without it the density would be too large.'],
  ], 0)),
  byte('Density of an irregular solid', [
    'Find the volume by **displacement**: put the solid in a measuring cylinder of water. Volume = new level − starting level.',
    'Or use a **eureka (displacement) can** and collect the displaced water.',
    'Then ρ = mass ÷ volume. This works for a solid that sinks.',
  ], calc('A stone of mass 150 g raises the water level in a measuring cylinder from 40 cm³ to 100 cm³. What is its density (g/cm³)?', 2.5, {
    unit: 'g/cm³', formula: 'volume = 100 − 40 = 60 cm³; ρ = m ÷ V', steps: ['V = 60 cm³', '150 ÷ 60 = 2.5 g/cm³'],
  })),
  byte('Floating and sinking', [
    'An object **floats** if its density is **less** than the density of the liquid; it **sinks** if its density is greater.',
    'A liquid floats on another liquid (that it does not mix with) if it is **less dense**.',
    'Oil (0.9 g/cm³) floats on water (1.0 g/cm³); mercury (13.6 g/cm³) sinks in water.',
  ], mc('A block of density 0.8 g/cm³ is placed in water (1.0 g/cm³) and in oil (0.9 g/cm³). What happens?', [
    ['It floats in both', 'Correct: it is less dense than both liquids.'],
    ['It sinks in both', 'It is less dense than both, so it floats.'],
    ['It floats in water and sinks in oil', 'Its density is below that of oil as well.'],
    ['It sinks in water and floats in oil', 'Its density is below that of water as well.'],
  ], 0)),
]);
