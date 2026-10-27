import { byte, lesson, mc, calc, tfd, fig } from '../helpers.js';

export const l15 = lesson('p1-forces', 'Forces & Newton’s laws', '1.5.1', [
  'Resultant force = overall force. No resultant force: stays at rest or moves at constant speed in a straight line. F = ma. Spring constant k = F ÷ x.',
  'Friction and drag oppose motion and produce heating.',
], [
  byte('Effects of forces', [
    'A **force** is a push or a pull. Forces can change the **size**, **shape**, **speed** or **direction** of an object.',
    'Forces are vectors: they have size (N) and direction.',
    'Forces along a straight line are added if in the same direction and subtracted if opposite to give the **resultant**.',
  ], calc('Two forces act on a box in a straight line: 12 N to the right and 5 N to the left. What is the resultant force to the right (N)?', 7, {
    unit: 'N', formula: 'resultant = 12 − 5', steps: ['12 − 5 = 7 N to the right'],
  })),
  byte('Newton’s first law: balanced forces', [
    'If the resultant force is **zero**, an object at rest stays at rest and a moving object keeps moving at **constant speed in a straight line**.',
    'A **resultant force** changes the velocity: it changes speed, direction, or both.',
    'A car cruising at constant speed has driving force equal to the resistive forces.',
  ], mc('A car moves at a constant 20 m/s along a straight, level road. What must be true?', [
    ['The driving force equals the total resistive force', 'Correct: the resultant force is zero, so the speed does not change.'],
    ['The driving force is greater than the resistive force', 'It would then accelerate.'],
    ['There are no forces on the car', 'Forces exist, but they are balanced.'],
    ['The driving force is less than the resistive force', 'It would then slow down.'],
  ], 0)),
  byte('Force, mass and acceleration', [
    '**F = ma**: the resultant force equals mass × acceleration. Force and acceleration are in the same direction.',
    'The larger the mass, the smaller the acceleration for the same force.',
    '1 newton gives a 1 kg mass an acceleration of 1 m/s².',
  ], calc('A resultant force of 60 N acts on a trolley of mass 15 kg. What is its acceleration (m/s²)?', 4, {
    unit: 'm/s²', formula: 'a = F ÷ m', steps: ['60 ÷ 15 = 4.0 m/s²'],
  }), { eq: ['F = m a'] }),
  byte('Friction and drag', [
    '**Friction** is the force between two solid surfaces that opposes motion and produces **heat**.',
    '**Drag** (fluid friction) acts on an object moving through a liquid or gas, including **air resistance**.',
    'Drag increases with speed. Streamlining reduces it.',
  ], mc('Why do the brakes on a bicycle become warm when they are used?', [
    ['Friction between the brake pads and the wheel transfers kinetic energy to heat', 'Correct: friction opposes the motion and heats the surfaces.'],
    ['Gravity heats them', 'Gravity does not heat surfaces.'],
    ['Air resistance cools them', 'Cooling would not make them warm.'],
    ['The brakes gain mass', 'Mass does not change.'],
  ], 0)),
  byte('Stretching and the spring constant', [
    'A force can change the shape of a spring. For small loads, **extension is proportional to load** (Hooke’s law).',
    '**Spring constant k** = force ÷ extension. Unit: N/m (or N/cm).',
    'Beyond the **limit of proportionality** the graph curves: extension is no longer proportional to force.',
  ], fig({ svg: 'loadExtension' }, calc('A spring extends by 0.050 m when a load of 4.0 N is hung from it. What is its spring constant (N/m)?', 80, {
    unit: 'N/m', formula: 'k = F ÷ x', steps: ['4.0 ÷ 0.050 = 80 N/m'],
  })), { fig: { svg: 'loadExtension', caption: 'Load–extension graph' }, eq: ['k = F ÷ x'] }),
  byte('Circular motion', [
    'An object moves in a circle only if a **resultant force** acts towards the centre, at right angles to its motion.',
    'For constant mass and radius, a larger force gives a **greater speed**.',
    'For constant speed and mass, a larger force gives a **smaller radius**. For constant speed and radius, a larger mass needs a larger force.',
  ], mc('A stone on a string is whirled in a horizontal circle. The string breaks. How does the stone move immediately afterwards?', [
    ['In a straight line along the tangent to the circle', 'Correct: with no resultant force it keeps moving in a straight line.'],
    ['Straight towards the centre', 'The force would be needed to pull it inwards.'],
    ['Straight outwards along the radius', 'It continues in the direction it was moving (the tangent).'],
    ['It stops', 'It has speed and keeps it when the force is removed.'],
  ], 0)),
]);

export const l152 = lesson('p1-moments', 'Moments & centre of mass', '1.5.2–1.5.3', [
  'Moment = force × perpendicular distance from the pivot. In equilibrium: no resultant force and sum of clockwise moments = sum of anticlockwise moments.',
  'Centre of mass: the point where the weight acts. A low centre of mass and wide base give stability.',
], [
  byte('The moment of a force', [
    'The **moment** of a force is its **turning effect** about a pivot.',
    '**Moment = force × perpendicular distance from the pivot.** Unit: N m (or N cm).',
    'Everyday examples: opening a door, using a spanner, a see-saw. A longer spanner gives a larger moment for the same force.',
  ], calc('A force of 20 N is applied 0.30 m from a pivot at right angles to the lever. What is the moment (N m)?', 6, {
    unit: 'N m', formula: 'moment = F × d', steps: ['20 × 0.30 = 6.0 N m'],
  }), { eq: ['moment = F × d'] }),
  byte('The principle of moments', [
    'When an object is balanced, the **sum of the clockwise moments = the sum of the anticlockwise moments**.',
    'Choose the pivot as the point you are taking moments about. The weight of a uniform beam acts at its **centre**.',
  ], fig({ svg: 'momentsBeam' }, calc('A see-saw balances. A 300 N child sits 2.0 m on the left of the pivot. At what distance on the right must a 400 N child sit (m)?', 1.5, {
    unit: 'm', formula: 'clockwise moment = anticlockwise moment', steps: ['300 × 2.0 = 400 × d', 'd = 600 ÷ 400 = 1.5 m'],
  })), { fig: { svg: 'momentsBeam', caption: 'Principle of moments' } }),
  byte('Equilibrium', [
    'An object is in **equilibrium** when there is **no resultant force and no resultant moment**.',
    'Upward forces equal downward forces, and the clockwise and anticlockwise moments are equal.',
    'A balanced beam may still be pushed up by the pivot with a force equal to the total downward load.',
  ], mc('A uniform 60 N beam rests on a single pivot at its centre with a 20 N weight at one end. What upward force must the pivot supply for the beam to stay at rest?', [
    ['80 N', 'Correct: the upward force equals the total downward force.'],
    ['60 N', 'This ignores the extra 20 N weight.'],
    ['20 N', 'The pivot supports both the beam and the weight.'],
    ['40 N', 'No reason for half the total.'],
  ], 0)),
  byte('Centre of mass', [
    'The **centre of mass** (centre of gravity) is the point where the whole weight of an object seems to act.',
    'A symmetrical uniform object has its centre of mass at its geometric centre.',
    'To find it for an **irregular lamina**: hang it from a pin at different points with a plumb line; mark the vertical line each time; they cross at the centre of mass.',
  ], mc('When finding the centre of mass of a flat card by hanging it, why must it hang freely from the pin?', [
    ['So it can swing until its centre of mass is directly below the pin', 'Correct: the weight then acts along the vertical line through the pin.'],
    ['So it is cooled by the air', 'Not relevant.'],
    ['So the pin carries no weight', 'The pin supports the whole weight.'],
    ['So the plumb line stays short', 'Not relevant.'],
  ], 0)),
  byte('Stability', [
    'An object is more **stable** if its centre of mass is **low** and its **base is wide**.',
    'It topples when the vertical line from the centre of mass falls outside the base.',
    'A double-decker bus is tested by tilting: the line from the centre of mass must stay inside the wheels.',
  ], mc('Which change would make a tall free-standing bookcase more stable?', [
    ['Place the heavy books on the bottom shelf', 'Correct: this lowers the centre of mass.'],
    ['Place the heavy books on the top shelf', 'This raises the centre of mass and makes it easier to topple.'],
    ['Make the base narrower', 'A narrower base reduces stability.'],
    ['Remove its feet to raise it', 'Raising it makes it less stable.'],
  ], 0)),
]);

export const l16 = lesson('p1-momentum', 'Momentum', '1.6', [
  'Momentum p = mv. Impulse = FΔt = Δ(mv). In a collision, total momentum is conserved. F = Δp ÷ Δt.',
], [
  byte('What is momentum?', [
    '**Momentum** = mass × velocity (p = mv). Unit: kg m/s. It is a vector: it has direction.',
    'A heavy lorry has far more momentum than a bicycle at the same speed.',
  ], calc('A 1200 kg car travels at 15 m/s. What is its momentum (kg m/s)?', 18000, {
    unit: 'kg m/s', formula: 'p = m v', steps: ['1200 × 15 = 18 000 kg m/s'],
  }), { eq: ['p = m v'] }),
  byte('Conservation of momentum', [
    'In a collision or explosion with no external force, **total momentum before = total momentum after**.',
    'Take one direction as positive and the opposite direction as negative.',
    'Total kinetic energy may be lost (as heat and sound) even though momentum is conserved.',
  ], calc('A 2.0 kg trolley moving at 3.0 m/s hits a stationary 1.0 kg trolley and they stick together. What is their speed after the collision (m/s)?', 2, {
    unit: 'm/s', formula: 'm₁u₁ = (m₁ + m₂)v', steps: ['2.0 × 3.0 = 6.0 kg m/s before', '6.0 = 3.0 × v', 'v = 2.0 m/s'],
  })),
  byte('Impulse and force', [
    '**Impulse** = force × time for which it acts = change in momentum: FΔt = Δ(mv).',
    'The **resultant force** = change in momentum ÷ time taken: F = Δp ÷ Δt.',
    'Crumple zones, airbags and padding increase the collision time, so the force on a person is smaller.',
  ], mc('Why does a crumple zone reduce injuries in a collision?', [
    ['It increases the time over which the car stops, so the force is smaller', 'Correct: same change in momentum over a longer time means a smaller force (F = Δp ÷ Δt).'],
    ['It reduces the momentum of the car to zero', 'The change in momentum is the same; the time is longer.'],
    ['It increases the car’s mass', 'Mass is not increased.'],
    ['It makes the collision shorter', 'It makes the collision longer, which is the point.'],
  ], 0), { eq: ['F = Δp ÷ Δt', 'impulse = F Δt = Δ(mv)'] }),
]);

export const l17a = lesson('p1-energy', 'Energy & work', '1.7.1–1.7.2', [
  'Energy is stored as kinetic, gravitational potential, chemical, elastic, nuclear, electrostatic and internal (thermal) and is conserved. Ek = ½mv², ΔEp = mgΔh, W = Fd.',
], [
  byte('Stores of energy', [
    'Energy is stored as **kinetic**, **gravitational potential**, **chemical**, **elastic (strain)**, **nuclear**, **electrostatic** and **internal (thermal)**.',
    'Energy is measured in **joules (J)**.',
    'The **conservation of energy**: energy cannot be created or destroyed, only transferred between stores.',
  ], mc('A ball is dropped and bounces to a lower height each time. Where has the missing energy gone?', [
    ['Into thermal (internal) energy of the ball, the ground and the air', 'Correct: energy is conserved; it is transferred to the surroundings.'],
    ['It has been destroyed', 'Energy cannot be destroyed.'],
    ['Into chemical energy of the ball', 'There is no chemical change.'],
    ['Into nuclear energy', 'No nuclear change takes place.'],
  ], 0)),
  byte('Energy transfers', [
    'Energy is transferred **by forces** (mechanical work), **by electric current** (electrical work), **by heating**, and **by waves** (electromagnetic, sound).',
    'A flow diagram shows the stores and the transfers between them.',
  ], mc('A battery-powered motor lifts a load. Which sequence shows the main energy transfers?', [
    ['chemical → electrical → kinetic → gravitational potential', 'Correct: the battery gives electrical energy to the motor, which lifts the load.'],
    ['chemical → thermal → nuclear', 'Not what happens.'],
    ['electrical → chemical → elastic', 'The motor does not produce chemical energy.'],
    ['kinetic → chemical → electrical', 'The wrong way round.'],
  ], 0)),
  byte('Kinetic energy', [
    '**Kinetic energy** is the energy of a moving object: **Ek = ½ m v²**.',
    'Doubling the speed makes the kinetic energy **four times** larger.',
  ], calc('What is the kinetic energy of a 2.0 kg trolley moving at 3.0 m/s (J)?', 9, {
    unit: 'J', formula: 'Ek = ½ m v²', steps: ['½ × 2.0 × 3.0² = ½ × 2.0 × 9.0 = 9.0 J'],
  }), { eq: ['Ek = ½ m v²'] }),
  byte('Gravitational potential energy', [
    'Raising an object stores **gravitational potential energy**: **ΔEp = m g Δh**.',
    'When it falls, this energy transfers to kinetic energy (ignoring air resistance).',
  ], calc('A 5.0 kg box is lifted 2.0 m. Taking g = 10 N/kg, what gravitational potential energy does it gain (J)?', 100, {
    unit: 'J', formula: 'ΔEp = m g Δh', steps: ['5.0 × 10 × 2.0 = 100 J'],
  }), { eq: ['ΔEp = m g Δh'] }),
  byte('Work done', [
    '**Work done** by a force = the energy transferred: **W = F d = ΔE**.',
    'The distance d is measured in the direction of the force. Unit: joule (J).',
    'Work done against friction is transferred as thermal energy.',
  ], calc('A force of 40 N moves a crate 6.0 m in the direction of the force. How much work is done (J)?', 240, {
    unit: 'J', formula: 'W = F × d', steps: ['40 × 6.0 = 240 J'],
  }), { eq: ['W = F d'] }),
  byte('Sankey diagrams', [
    'A **Sankey diagram** shows how energy flows. The **width** of each arrow is proportional to the amount of energy.',
    'The input arrow splits into **useful output** and **wasted** energy. Total input = useful + wasted.',
  ], mc('In a Sankey diagram for a lamp, the input arrow is 100 J and the useful light arrow is 10 J. How much energy is wasted?', [
    ['90 J', 'Correct: 100 − 10 = 90 J, shown as thermal energy.'],
    ['10 J', 'This is the useful output.'],
    ['110 J', 'Wasted energy cannot be more than the input.'],
    ['0 J', 'Energy not usefully transferred is wasted.'],
  ], 0), { fig: { svg: 'sankey', caption: 'Sankey diagram' } }),
]);

export const l17b = lesson('p1-resources', 'Energy resources, efficiency & power', '1.7.3–1.7.4', [
  'Renewable resources can be replaced; non-renewable run out. Efficiency = useful output ÷ total input × 100%. Power = work (or energy) ÷ time.',
], [
  byte('Energy resources', [
    '**Non-renewable:** fossil fuels (coal, oil, gas) and nuclear fuel. They will run out.',
    '**Renewable:** biofuels, hydroelectric, waves, tides, geothermal, solar, wind.',
    'In power stations (fossil fuel, biofuel, nuclear, geothermal) a **boiler** makes steam, which turns a **turbine** and **generator**.',
  ], mc('Which resource does not need a turbine and generator to produce electricity?', [
    ['Solar cells', 'Correct: they convert light directly into electricity.'],
    ['Wind', 'A wind turbine drives a generator.'],
    ['Hydroelectric', 'Falling water turns a turbine.'],
    ['Nuclear', 'Steam turbines are used.'],
  ], 0)),
  byte('Advantages and disadvantages of resources', [
    '**Fossil fuels:** reliable and cheap, but release CO₂, cause pollution and run out.',
    '**Nuclear:** huge energy from little fuel, no CO₂, but radioactive waste and accident risk.',
    '**Wind and solar:** renewable and clean, but depend on weather and take space.',
    '**Hydroelectric/tidal:** reliable, but disrupt habitats and cost a lot to build.',
  ], mc('Which is the main disadvantage of wind turbines for electricity supply?', [
    ['They only work when the wind blows', 'Correct: output is unreliable and depends on the weather.'],
    ['They produce carbon dioxide', 'They produce none when operating.'],
    ['They use up a non-renewable fuel', 'Wind is renewable.'],
    ['They need a boiler', 'No boiler is needed.'],
  ], 0)),
  byte('Where does energy come from?', [
    'The **Sun’s radiation** is the main source of energy for nearly all resources: fossil fuels, biofuels, wind, waves, hydro and solar.',
    'The exceptions are **geothermal, nuclear and tidal** energy.',
    'The Sun releases energy by **nuclear fusion** of hydrogen into helium. Fusion research aims to make it a large-scale electricity source.',
  ], mc('Which energy resource does NOT ultimately get its energy from the Sun?', [
    ['Geothermal', 'Correct: its energy comes from heat produced inside the Earth.'],
    ['Wind', 'Winds are caused by the Sun heating the atmosphere.'],
    ['Fossil fuels', 'They store energy from sunlight captured long ago.'],
    ['Hydroelectric', 'Rainfall comes from the Sun’s heating of water.'],
  ], 0)),
  byte('Efficiency', [
    '**Efficiency** = useful energy output ÷ total energy input × 100%.',
    'The same formula works for power: useful power output ÷ total power input × 100%.',
    'No device is 100% efficient because some energy is always wasted (often as heat).',
  ], calc('A motor takes in 500 J of electrical energy and gives 350 J of useful kinetic energy. What is its efficiency (%)?', 70, {
    unit: '%', formula: 'efficiency = (useful ÷ total) × 100%', steps: ['350 ÷ 500 = 0.70', '× 100 = 70%'],
  }), { eq: ['efficiency = useful output ÷ total input × 100%'] }),
  byte('Power', [
    '**Power** is the rate of doing work or transferring energy: **P = W ÷ t = ΔE ÷ t**.',
    'Unit: **watt (W)** = 1 joule per second.',
  ], calc('A machine does 4500 J of work in 30 s. What is its power (W)?', 150, {
    unit: 'W', formula: 'P = W ÷ t', steps: ['4500 ÷ 30 = 150 W'],
  }), { eq: ['P = W ÷ t', 'P = ΔE ÷ t'] }),
]);

export const l18 = lesson('p1-pressure', 'Pressure', '1.8', [
  'Pressure p = F ÷ A (N/m² = Pa). Liquid pressure increases with depth and density: Δp = ρgΔh.',
], [
  byte('Pressure', [
    '**Pressure** = force ÷ area (p = F ÷ A). Unit: **pascal (Pa)** = N/m².',
    'The same force on a smaller area gives a larger pressure: knives are sharp, skis are wide.',
  ], calc('A box exerts a force of 600 N on an area of 0.20 m². What pressure does it exert (Pa)?', 3000, {
    unit: 'Pa', formula: 'p = F ÷ A', steps: ['600 ÷ 0.20 = 3000 Pa'],
  }), { eq: ['p = F ÷ A'] }),
  byte('Pressure in everyday situations', [
    '**Increase pressure:** reduce area (sharp knife, drawing pin, stiletto heel).',
    '**Reduce pressure:** increase area (wide tyres, snow shoes, a broad foundation for a building).',
  ], mc('Why do snowshoes help a person walk on soft snow?', [
    ['They increase the area, so the pressure on the snow is smaller', 'Correct: the same weight is spread over a larger area.'],
    ['They reduce the person’s weight', 'Weight is unchanged.'],
    ['They increase the pressure on the snow', 'That would make the person sink.'],
    ['They remove friction', 'Not the main reason.'],
  ], 0)),
  byte('Pressure in liquids', [
    'The pressure beneath the surface of a liquid **increases with depth** and with the **density** of the liquid.',
    'The pressure change is **Δp = ρ g Δh**.',
    'Pressure at a given depth acts equally in all directions.',
  ], calc('What is the increase in pressure 10 m below the surface of water (density 1000 kg/m³, g = 10 N/kg) in Pa?', 100000, {
    unit: 'Pa', formula: 'Δp = ρ g Δh', steps: ['1000 × 10 × 10 = 100 000 Pa'],
  }), { eq: ['Δp = ρ g Δh'] }),
]);
