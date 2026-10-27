import { byte, lesson, mc, calc, fig } from '../helpers.js';

export const l21 = lesson('p2-particles', 'Kinetic particle model', '2.1', [
  'Solids: fixed pattern, vibrate. Liquids: close, move past each other. Gases: far apart, move fast randomly. Gas pressure comes from particle collisions; pV is constant at constant temperature.',
], [
  byte('Solids, liquids and gases', [
    '**Solid:** particles in a fixed, regular pattern, close together, vibrating about fixed positions. Fixed shape and volume.',
    '**Liquid:** particles close together, irregular, able to move past each other. Fixed volume, no fixed shape.',
    '**Gas:** particles far apart, moving quickly in random directions. No fixed shape or volume; easily compressed.',
  ], fig({ svg: 'states' }, mc('Which statement about the particles of a liquid is correct?', [
    ['They are close together and can slide past each other', 'Correct: this explains why a liquid flows but is not easily compressed.'],
    ['They are far apart and move freely', 'This describes a gas.'],
    ['They are fixed in a regular pattern', 'This describes a solid.'],
    ['They are not moving', 'Particles in all states of matter are always moving or vibrating.'],
  ], 0)), { fig: { svg: 'states', caption: 'Particles in solids, liquids and gases' } }),
  byte('Changes of state', [
    'Melting (solid → liquid), freezing (liquid → solid), boiling (liquid → gas), **evaporation** (liquid → gas at the surface), condensation (gas → liquid), and **sublimation** (solid → gas).',
    'Evaporation happens at any temperature, from the surface only. Boiling happens at the boiling point, throughout the liquid.',
  ], mc('What is the main difference between boiling and evaporation?', [
    ['Boiling happens throughout the liquid at the boiling point; evaporation happens only at the surface at any temperature', 'Correct.'],
    ['Evaporation needs a heater but boiling does not', 'The opposite is the case.'],
    ['Boiling cools the liquid; evaporation heats it', 'Evaporation cools the remaining liquid.'],
    ['There is no difference', 'They are different processes.'],
  ], 0)),
  byte('Gas pressure and temperature', [
    'Gas particles **collide with the walls** of the container; the force of these collisions per unit area is the **gas pressure**.',
    'Heating a gas at constant volume makes the particles move faster, so they hit the walls **harder and more often**: pressure increases.',
    'The **kelvin** temperature is a scale starting at absolute zero (−273 °C): T (K) = θ (°C) + 273.',
  ], mc('Why does the pressure of a fixed volume of gas rise when its temperature rises?', [
    ['Particles move faster and hit the walls harder and more often', 'Correct.'],
    ['Particles get bigger', 'Their size does not change.'],
    ['Particles stop moving', 'They move faster, not slower.'],
    ['More particles appear', 'The number of particles is fixed.'],
  ], 0)),
  byte('Gas volume and pressure', [
    'At constant temperature, the **pressure and volume of a fixed mass of gas** are inversely proportional: **pV = constant**.',
    'So p₁V₁ = p₂V₂. Halving the volume doubles the pressure, because the particles hit the walls twice as often.',
  ], calc('A gas has a pressure of 100 kPa and a volume of 6.0 m³. It is compressed at constant temperature to 2.0 m³. What is the new pressure (kPa)?', 300, {
    unit: 'kPa', formula: 'p₁V₁ = p₂V₂', steps: ['100 × 6.0 = p₂ × 2.0', 'p₂ = 600 ÷ 2.0 = 300 kPa'],
  }), { eq: ['p₁V₁ = p₂V₂ (constant temperature)'] }),
  byte('Brownian motion', [
    '**Brownian motion** is the random jerky movement of small visible particles (such as smoke or pollen) in air or water.',
    'It is caused by **collisions** with fast-moving, invisible, much smaller **air or water molecules**.',
    'It is evidence that matter is made of moving particles.',
  ], mc('What causes the random movement of smoke particles seen under a microscope?', [
    ['Collisions with fast-moving air molecules', 'Correct.'],
    ['Convection currents of the particles themselves', 'The motion is random on a very small scale, not a current.'],
    ['Gravity pulling the smoke upwards', 'Gravity pulls downwards and is not random.'],
    ['The microscope light heating them', 'Heating is not the main cause.'],
  ], 0)),
]);

export const l22 = lesson('p2-thermal', 'Thermal properties & temperature', '2.2', [
  'Thermal expansion; thermometer calibration with fixed points; thermal capacity (E = mcΔT); melting and boiling need latent heat (E = ml).',
], [
  byte('Thermal expansion', [
    'When heated, solids, liquids and gases **expand**; when cooled they contract.',
    'Gases expand the most, then liquids, then solids.',
    'Reason: particles vibrate or move faster and push further apart (they do not get bigger). Engineers leave gaps in bridges and railway tracks.',
  ], mc('Why are small gaps left between sections of a steel railway track?', [
    ['So the track can expand in hot weather without buckling', 'Correct.'],
    ['To stop the wheels vibrating', 'Not the reason.'],
    ['Because steel contracts when heated', 'Steel expands when heated.'],
    ['To save steel', 'Not the reason.'],
  ], 0)),
  byte('Thermometers and fixed points', [
    'In a **liquid-in-glass thermometer**, the liquid expands up the narrow tube as temperature rises.',
    'Calibrate with two **fixed points**: **0 °C** (pure melting ice) and **100 °C** (pure boiling water at standard pressure). Divide the distance between into 100 equal steps.',
    'To make it **more sensitive**: use a larger bulb, a narrower tube. To increase **range**: use a longer tube. A thinner glass bulb makes it quicker to respond.',
  ], mc('Which change makes a liquid-in-glass thermometer more sensitive?', [
    ['A narrower tube', 'Correct: the same expansion makes the thread move further.'],
    ['A wider tube', 'The thread would move less.'],
    ['A smaller bulb', 'Less liquid expands, so the thread moves less.'],
    ['A longer stem only', 'This increases the range, not the sensitivity.'],
  ], 0)),
  byte('Thermal capacity and specific heat capacity', [
    '**Thermal capacity** is the energy needed to raise the temperature of an object by 1 °C.',
    '**Specific heat capacity c** is the energy needed to raise 1 kg of a material by 1 °C. Unit: J/(kg °C).',
    '**E = m c ΔT**. Water has a high c (4200 J/(kg °C)), so it heats and cools slowly.',
  ], calc('How much energy is needed to raise the temperature of 2.0 kg of water by 5.0 °C (c = 4200 J/(kg °C)) in J?', 42000, {
    unit: 'J', formula: 'E = m c ΔT', steps: ['2.0 × 4200 × 5.0 = 42 000 J'],
  }), { eq: ['E = m c ΔT', 'c = E ÷ (m ΔT)'] }),
  byte('Measuring specific heat capacity', [
    'Heat a block of known **mass** with an electrical **heater** of known power for a measured **time**. Measure the temperature rise with a thermometer.',
    'Energy supplied E = power × time. Then **c = E ÷ (m ΔT)**.',
    'Insulate the block to reduce energy loss; the result is usually too large because of that loss.',
  ], mc('In an experiment to find c, which set of measurements is needed?', [
    ['Mass, temperature rise, and energy supplied (power and time)', 'Correct: all three quantities appear in c = E ÷ (mΔT).'],
    ['Mass and volume only', 'Not enough to find c.'],
    ['Temperature and pressure only', 'Not relevant.'],
    ['Length and width of the block', 'Dimensions are not needed.'],
  ], 0)),
  byte('Melting, boiling and latent heat', [
    'During melting or boiling the **temperature stays constant**. The energy supplied breaks the **bonds** between particles rather than increasing their kinetic energy.',
    '**Specific latent heat** is the energy needed to change the state of 1 kg without changing temperature: **E = m l**.',
    'Fusion (melting) and vaporisation (boiling) have different values of l.',
  ], fig({ svg: 'heatingCurve' }, mc('On a temperature–time graph, why is there a flat section during melting?', [
    ['The energy supplied is breaking bonds, not raising the temperature', 'Correct.'],
    ['The heater has been switched off', 'Energy is still supplied.'],
    ['The particles have stopped moving', 'They never stop moving.'],
    ['The substance is cooling', 'It is still absorbing energy.'],
  ], 0)), { fig: { svg: 'heatingCurve', caption: 'Heating curve' }, eq: ['E = m l'] }),
  byte('Latent heat calculation', [
    'To find the energy to melt or boil a mass, use **E = m l**.',
    'If the substance must first be heated to its melting point, add E = m c ΔT for that stage.',
  ], calc('The specific latent heat of fusion of ice is 340 000 J/kg. How much energy is needed to melt 0.50 kg of ice at 0 °C (J)?', 170000, {
    unit: 'J', formula: 'E = m l', steps: ['0.50 × 340 000 = 170 000 J'],
  })),
]);

export const l23 = lesson('p2-transfer', 'Transfer of thermal energy', '2.3', [
  'Conduction in solids (vibrations and free electrons in metals), convection in fluids (hot fluid rises), radiation as infra-red (needs no medium). Dull black surfaces absorb and emit best.',
], [
  byte('Conduction', [
    '**Conduction** is the transfer of thermal energy through a material **without the material moving**.',
    'In all solids, **vibrating particles** pass energy to their neighbours. In **metals**, **free electrons** also carry energy, making them good conductors.',
    '**Insulators** (wood, plastic, air, wool) are poor conductors. Gases and liquids are poor conductors because particles are far apart.',
  ], mc('Why are metals better thermal conductors than non-metals?', [
    ['They contain free electrons that carry energy through the metal', 'Correct: this adds to the transfer by vibrations.'],
    ['They have more protons', 'Protons stay in the nucleus.'],
    ['Metal atoms are lighter', 'Not the reason.'],
    ['Metals have no particles', 'All materials are made of particles.'],
  ], 0)),
  byte('Convection', [
    '**Convection** is the transfer of thermal energy in **liquids and gases** by the movement of the fluid itself.',
    'The heated fluid **expands**, becomes **less dense** and rises. Cooler, denser fluid sinks to take its place, forming a **convection current**.',
    'Convection cannot happen in a solid or a vacuum.',
  ], fig({ svg: 'convection' }, mc('Why does warm air rise?', [
    ['It expands and becomes less dense than the cooler air around it', 'Correct.'],
    ['The particles become heavier', 'Their mass is unchanged.'],
    ['It is attracted to the ceiling', 'There is no such attraction.'],
    ['Gravity does not act on warm air', 'Gravity acts on all matter.'],
  ], 0)), { fig: { svg: 'convection', caption: 'A convection current' } }),
  byte('Thermal radiation', [
    '**Thermal radiation** is infra-red electromagnetic waves emitted by all objects. It needs **no medium**, so it can cross a vacuum (e.g. Sun to Earth).',
    '**Dull black surfaces** are the best absorbers and emitters; **shiny white or silver** surfaces are the poorest absorbers and emitters (the best reflectors).',
    'Hotter objects emit more radiation. Radiation travels at the speed of light.',
  ], mc('Why is a hot-water tank often covered with shiny foil?', [
    ['Shiny surfaces emit little infra-red radiation, so less energy is lost', 'Correct.'],
    ['Black surfaces would lose too little heat', 'Black surfaces lose more heat, which is why they are not used.'],
    ['The foil conducts heat to the water', 'The foil is for reducing losses.'],
    ['It makes the tank heavier', 'Not the aim.'],
  ], 0)),
  byte('Applications and reducing energy loss', [
    '**Vacuum flask:** a vacuum stops conduction and convection; silvered walls reduce radiation; a stopper reduces convection and evaporation.',
    '**Home insulation:** loft insulation and cavity-wall foam trap air (a poor conductor) and reduce convection.',
    '**Heaters at the bottom, coolers at the top:** hot air rises and cool air sinks, so the whole room circulates.',
  ], mc('Why is the freezing compartment of a fridge placed at the top?', [
    ['Cold air sinks and sets up a convection current that cools the whole fridge', 'Correct.'],
    ['Cold air rises, so it fills the fridge', 'Cold air is denser and sinks.'],
    ['It is easier to reach', 'The reason is physical.'],
    ['Radiation is stronger at the top', 'Convection is the key process.'],
  ], 0)),
]);
