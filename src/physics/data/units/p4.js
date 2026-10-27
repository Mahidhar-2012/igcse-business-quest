import { byte, lesson, mc, calc, fig } from '../helpers.js';

export const l41 = lesson('p4-magnetism', 'Magnetism', '4.1', [
  'Like poles repel, unlike attract. Magnetic materials: iron, steel, cobalt, nickel. Field lines run from N to S. Soft iron is easily magnetised and demagnetised; steel keeps its magnetism.',
], [
  byte('Magnets and magnetic materials', [
    '**Like poles repel; unlike poles attract.** Magnets attract iron, steel, cobalt and nickel (magnetic materials).',
    '**Magnetisation** by stroking with a magnet or putting in a coil carrying current. **Demagnetise** by heating, hammering or a decreasing alternating current.',
    '**Soft iron** is easily magnetised and demagnetised (electromagnets, cores). **Steel** is hard to magnetise but keeps its magnetism (permanent magnets).',
  ], mc('Which material would be best for the core of an electromagnet that is switched on and off?', [
    ['Soft iron', 'Correct: it magnetises and demagnetises easily.'],
    ['Steel', 'It would stay magnetised when the current is off.'],
    ['Copper', 'Copper is not magnetic.'],
    ['Plastic', 'Plastic is not magnetic.'],
  ], 0)),
  byte('Magnetic fields', [
    'A **magnetic field** is a region where a magnetic pole experiences a force.',
    'Field lines point **from the north pole to the south pole**. The closer the lines, the stronger the field.',
    'Plotting compasses show the direction of the field at a point. A compass needle’s north end points along the field.',
  ], fig({ svg: 'magnetField' }, mc('What is the direction of a magnetic field line outside a bar magnet?', [
    ['From the north pole to the south pole', 'Correct.'],
    ['From the south pole to the north pole', 'This is the wrong way round.'],
    ['Round the magnet in circles', 'Field lines are not circles centred on the magnet’s middle.'],
    ['Straight away from both poles', 'They loop from N to S.'],
  ], 0)), { fig: { svg: 'magnetField', caption: 'Field of a bar magnet' } }),
]);

export const l42 = lesson('p4-elecq', 'Electrical quantities', '4.2', [
  'Charge Q = It. Current I (A) is the rate of flow of charge. p.d. V = energy per unit charge; e.m.f. is energy supplied per unit charge. R = V ÷ I. E = IVt.',
], [
  byte('Electric charge', [
    'There are **positive and negative** charges. **Like charges repel, unlike charges attract.** Rubbing can transfer **electrons**, charging objects (a plastic rod rubbed with cloth).',
    'Electrons are negative; they move, protons do not. An object that gains electrons becomes negative.',
    'An **electric field** is a region where an electric charge experiences a force.',
  ], mc('A plastic rod becomes negatively charged when rubbed with a cloth. What has happened?', [
    ['The rod has gained electrons', 'Correct: electrons are transferred onto the rod.'],
    ['The rod has lost protons', 'Protons do not move in rubbing.'],
    ['The cloth has gained electrons', 'The cloth lost them.'],
    ['The rod has gained protons', 'Protons stay in the nucleus.'],
  ], 0)),
  byte('Charging by induction and earthing', [
    'A charged object near a conductor makes charges **separate** (induction). If the far side is **earthed**, electrons flow to or from the earth, leaving the conductor with a net charge opposite to the object.',
    'Insulators hold charge; conductors let it flow away.',
    'Lightning and static shocks are discharges of built-up charge.',
  ], mc('A negative rod is held near a metal sphere which is earthed. What charge does the sphere end up with?', [
    ['Positive', 'Correct: electrons are repelled to earth, leaving a positive sphere.'],
    ['Negative', 'The rod pushes electrons away.'],
    ['Neutral', 'The earth wire removes some electrons, leaving net positive charge.'],
    ['It depends on the earth wire’s length', 'Not relevant.'],
  ], 0)),
  byte('Current, charge and e.m.f.', [
    '**Current** is the rate of flow of charge: **I = Q ÷ t**. Unit: ampere (A). Conventional current flows from + to −; electrons flow the opposite way.',
    '**e.m.f.** is the electrical work done by a source in moving unit charge round a complete circuit. **Potential difference (p.d.)** is the work done by unit charge passing through a component. Both are measured in **volts (V)**.',
    'An **ammeter** is connected in series; a **voltmeter** in parallel.',
  ], calc('A charge of 30 C flows past a point in 6.0 s. What is the current (A)?', 5, {
    unit: 'A', formula: 'I = Q ÷ t', steps: ['30 ÷ 6.0 = 5.0 A'],
  }), { eq: ['I = Q ÷ t', 'V = E ÷ Q'] }),
  byte('Resistance', [
    '**Resistance** is the opposition to current: **R = V ÷ I**. Unit: ohm (Ω).',
    'Resistance of a wire increases with **length** and decreases with **cross-sectional area** (thicker wire has lower resistance).',
    'Metals resistance rises with temperature. A **thermistor’s** resistance falls as it gets hotter; an **LDR’s** falls in brighter light.',
  ], calc('A resistor has 12 V across it and a current of 3.0 A. What is its resistance (Ω)?', 4, {
    unit: 'Ω', formula: 'R = V ÷ I', steps: ['12 ÷ 3.0 = 4.0 Ω'],
  }), { eq: ['R = V ÷ I'] }),
  byte('Current–voltage graphs', [
    '**Ohmic resistor:** straight line through the origin: current is proportional to p.d., constant resistance.',
    '**Filament lamp:** curve flattening: resistance increases as the filament gets hotter.',
    '**Diode:** conducts in one direction only, with very high resistance in the reverse direction.',
  ], fig({ svg: 'ivGraphs' }, mc('Which component has a current–voltage graph that is a straight line through the origin?', [
    ['A fixed resistor at constant temperature', 'Correct: this is an ohmic conductor.'],
    ['A filament lamp', 'Its graph is curved.'],
    ['A diode', 'It only conducts in one direction.'],
    ['A thermistor', 'Its resistance changes with temperature, giving a curve.'],
  ], 0)), { fig: { svg: 'ivGraphs', caption: 'I–V characteristics' } }),
  byte('Electrical energy and power', [
    '**Electrical power P = I V** (watts). **Energy E = I V t** (joules).',
    'The kilowatt-hour (kWh) is a larger unit of energy: power in kW × time in hours.',
    'Higher power means energy is transferred faster.',
  ], calc('A 12 V lamp carries a current of 2.0 A for 10 s. How much energy does it transfer (J)?', 240, {
    unit: 'J', formula: 'E = I V t', steps: ['2.0 × 12 × 10 = 240 J'],
  }), { eq: ['P = I V', 'E = I V t'] }),
]);

export const l43 = lesson('p4-circuits', 'Electric circuits', '4.3', [
  'Series: same current; p.d. shared. Parallel: same p.d.; current splits. Series R: R = R₁ + R₂. Parallel R is less than the smallest. Potential dividers share p.d.',
], [
  byte('Circuit symbols', [
    'Learn the symbols for **cell, battery, switch, lamp, resistor, variable resistor, ammeter, voltmeter, diode, LDR, thermistor, fuse and relay**.',
    'In a circuit diagram, an **ammeter** is in series and a **voltmeter** is connected in parallel across the component.',
  ], mc('How should a voltmeter be connected to measure the p.d. across a lamp?', [
    ['In parallel with the lamp', 'Correct.'],
    ['In series with the lamp', 'That is where an ammeter goes.'],
    ['In series with the cell', 'This measures nothing useful.'],
    ['Anywhere; it does not matter', 'Placement matters.'],
  ], 0), { fig: { svg: 'circuitSymbols', caption: 'Circuit symbols' } }),
  byte('Series and parallel circuits', [
    '**Series:** one path. The **current is the same** everywhere. The p.d. of the supply is **shared** between components. If one component fails, the circuit is broken.',
    '**Parallel:** branches. The **p.d. is the same across each branch**. The total current **splits** between branches and the branch currents add. One branch can fail without affecting the others (home lighting is parallel).',
  ], fig({ svg: 'seriesParallel' }, mc('Two identical lamps in series are connected to a 12 V battery. What is the p.d. across each lamp?', [
    ['6 V', 'Correct: the 12 V is shared equally.'],
    ['12 V', 'This would be the case in parallel.'],
    ['24 V', 'It cannot exceed the supply voltage.'],
    ['0 V', 'There is a p.d. across a working lamp.'],
  ], 0)), { fig: { svg: 'seriesParallel', caption: 'Series and parallel circuits' } }),
  byte('Resistors in series and parallel', [
    '**In series:** total resistance **R = R₁ + R₂ + …**',
    '**In parallel:** 1/R = 1/R₁ + 1/R₂ + … The total is **less than the smallest resistance** because there are more paths.',
    'Adding a resistor in parallel decreases the total resistance; in series it increases it.',
  ], calc('A 6.0 Ω and a 3.0 Ω resistor are connected in parallel. What is the total resistance (Ω)?', 2, {
    unit: 'Ω', formula: '1/R = 1/6 + 1/3', steps: ['1/R = 1/6 + 2/6 = 3/6', 'R = 6/3 = 2.0 Ω'],
  }), { eq: ['series: R = R₁ + R₂', 'parallel: 1/R = 1/R₁ + 1/R₂'] }),
  byte('Current and p.d. in circuits', [
    'In **series**: I is the same, V total = V₁ + V₂.',
    'In **parallel**: V is the same, I total = I₁ + I₂.',
    'Use R = V ÷ I for each part of the circuit.',
  ], calc('A 12 V battery is connected to a 4.0 Ω and a 2.0 Ω resistor in series. What is the current (A)?', 2, {
    unit: 'A', formula: 'R = 4.0 + 2.0 = 6.0 Ω; I = V ÷ R', steps: ['Total R = 6.0 Ω', 'I = 12 ÷ 6.0 = 2.0 A'],
  })),
  byte('Potential dividers and sensors', [
    'A **potential divider** is two (or more) resistors in series that share the supply p.d. The larger resistor gets the larger share.',
    'A **variable resistor** or a sensor (**LDR**, **thermistor**) can change the output voltage. In bright light an LDR’s resistance is low, so its share of the p.d. falls.',
    'Used in light-sensing circuits, temperature controls and volume controls.',
  ], mc('In a potential divider the LDR’s resistance falls as the light gets brighter. What happens to the p.d. across the LDR?', [
    ['It decreases', 'Correct: a smaller resistance takes a smaller share of the supply voltage.'],
    ['It increases', 'The opposite is true.'],
    ['It stays the same', 'The resistance has changed so the share changes.'],
    ['It becomes the supply voltage', 'It would only if the other resistor had zero resistance.'],
  ], 0)),
  byte('Other components', [
    'A **relay** is an electromagnetic switch: a small current in a coil closes contacts in a second circuit carrying a large current.',
    'A **diode** allows current in one direction only. An **LED** is a diode that gives out light.',
    'A **fuse** melts if the current is too large.',
  ], mc('What is the main use of a relay?', [
    ['A small current switches a circuit carrying a much larger current', 'Correct.'],
    ['To store electric charge', 'That is a capacitor.'],
    ['To change the voltage', 'That is a transformer.'],
    ['To measure current', 'That is an ammeter.'],
  ], 0)),
]);

export const l44 = lesson('p4-safety', 'Electrical safety', '4.4', [
  'Dangers: damaged insulation, overheating, damp conditions. Fuse and circuit breaker protect circuits; earth wire; live, neutral, earth; double insulation.',
], [
  byte('Dangers of electricity', [
    'Electric shocks can cause injury or death. Hazards include **damaged insulation**, **overheating cables**, **damp conditions** and **overloaded sockets**.',
    'Never touch electrical appliances with wet hands. Keep water away from sockets.',
  ], mc('Which situation is most likely to cause an electric shock?', [
    ['A cable with its insulation worn through', 'Correct: bare live wire can be touched.'],
    ['A new plug with a fuse in it', 'Properly fitted fuses make it safer.'],
    ['An appliance with a switch', 'Switches are normal.'],
    ['A battery-powered torch', 'Low voltage, little risk.'],
  ], 0)),
  byte('Fuses, circuit breakers and earth wires', [
    'A **fuse** melts and breaks the circuit if too much current flows. It is placed in the **live** wire. Use a fuse slightly above the normal current.',
    'A **circuit breaker** is an electromagnetic switch that opens when the current is too large and can be reset.',
    'The **earth wire** connects the metal case to the ground. If the live wire touches the case, a large current flows to earth and blows the fuse.',
  ], mc('Why is the fuse placed in the live wire?', [
    ['So that when it blows, the appliance is disconnected from the high voltage', 'Correct.'],
    ['Because the live wire carries the least current', 'This is not true.'],
    ['Because the neutral wire is dangerous', 'The live wire is the dangerous one.'],
    ['So the earth wire is protected', 'Not the reason.'],
  ], 0)),
  byte('Mains wiring', [
    'The three wires in a plug: **live (brown)**, **neutral (blue)** and **earth (green and yellow)**.',
    'Double-insulated appliances (plastic casings) do not need an earth wire. The fuse rating should be slightly higher than the normal current (P = IV).',
  ], calc('An iron has a power of 1150 W on a 230 V supply. What is its normal current (A)?', 5, {
    unit: 'A', formula: 'I = P ÷ V', steps: ['1150 ÷ 230 = 5.0 A'],
  })),
]);

export const l45 = lesson('p4-em', 'Electromagnetic effects', '4.5', [
  'A current has a magnetic field. A conductor in a field can experience a force (motor). A changing field induces an e.m.f. (generator, transformer).',
], [
  byte('Electromagnetic induction', [
    '**Electromagnetic induction:** a voltage (e.m.f.) is induced in a conductor when it **cuts magnetic field lines** or when the magnetic field through a coil **changes**.',
    'The induced e.m.f. is larger with a **faster movement**, a **stronger magnet** and **more turns**.',
    'If the conductor is part of a complete circuit, a current flows.',
  ], mc('A magnet is pushed into a coil connected to a sensitive meter. When is the largest reading seen?', [
    ['When the magnet moves quickly', 'Correct: faster change of field gives a larger e.m.f.'],
    ['When the magnet is held still inside the coil', 'No change of field means no induced e.m.f.'],
    ['When the magnet is far away and still', 'No induced e.m.f.'],
    ['It makes no difference how the magnet moves', 'Speed matters.'],
  ], 0)),
  byte('The a.c. generator', [
    'A **generator** rotates a coil in a magnetic field, inducing an alternating e.m.f. (**a.c.**).',
    'The e.m.f. is larger if the coil rotates **faster**, has **more turns**, or the field is **stronger**.',
    '**Direct current (d.c.)** flows one way (from a cell). **Alternating current (a.c.)** keeps changing direction.',
  ], mc('How could the e.m.f. produced by a simple generator be increased?', [
    ['Rotate the coil faster', 'Correct (also more turns or a stronger magnet).'],
    ['Rotate the coil more slowly', 'This reduces the e.m.f.'],
    ['Use fewer turns', 'This reduces the e.m.f.'],
    ['Use a weaker magnet', 'This reduces the e.m.f.'],
  ], 0)),
  byte('Magnetic effect of a current', [
    'A **current-carrying wire** creates a circular magnetic field around it. A **solenoid** (coil) produces a field like a bar magnet.',
    'Increase the field strength by **more current**, **more turns**, or a **soft-iron core**.',
    'Electromagnets are used in cranes, relays and loudspeakers.',
  ], mc('How can the strength of an electromagnet be increased?', [
    ['Increase the current, add turns or add an iron core', 'Correct.'],
    ['Decrease the current', 'This weakens it.'],
    ['Use fewer turns', 'This weakens it.'],
    ['Use a plastic core', 'It would have no effect.'],
  ], 0)),
  byte('Force on a current-carrying conductor and the d.c. motor', [
    'A conductor carrying current in a magnetic field experiences a **force**. Reverse the current or the field and the force reverses.',
    'In a **d.c. motor** a coil in a magnetic field is turned by the forces; the **commutator** reverses the current every half-turn to keep it turning the same way.',
    'The force is larger with a larger current or stronger field.',
  ], mc('What is the purpose of the commutator in a d.c. motor?', [
    ['To reverse the current each half-turn so the coil keeps turning', 'Correct.'],
    ['To make the magnet stronger', 'Not its function.'],
    ['To convert a.c. to d.c. in the supply', 'It switches the current in the coil.'],
    ['To cool the motor', 'Not its function.'],
  ], 0)),
  byte('Transformers', [
    'A **transformer** changes an alternating voltage. Two coils (primary and secondary) are wound on a **soft-iron core**. The changing field from the primary induces an e.m.f. in the secondary.',
    '**Vp ÷ Vs = Np ÷ Ns.** A **step-up** transformer has more turns on the secondary (voltage rises); **step-down** has fewer.',
    'For an ideal transformer, **power in = power out**: Vp Ip = Vs Is.',
  ], fig({ svg: 'transformer' }, calc('A transformer has 200 turns on its primary coil and 1000 turns on its secondary coil. The primary voltage is 12 V. What is the secondary voltage (V)?', 60, {
    unit: 'V', formula: 'Vp ÷ Vs = Np ÷ Ns', steps: ['12 ÷ Vs = 200 ÷ 1000', 'Vs = 12 × 1000 ÷ 200 = 60 V'],
  })), { fig: { svg: 'transformer', caption: 'A transformer' }, eq: ['Vp ÷ Vs = Np ÷ Ns', 'Vp Ip = Vs Is'] }),
  byte('Why electricity is transmitted at high voltage', [
    'Power lines use **very high voltage** so that the **current is low** for the same power (P = IV).',
    'Heating loss in the cables is **I² R**, so a low current means much less energy wasted.',
    'Step-up transformers raise the voltage at the power station; step-down transformers reduce it near homes.',
  ], mc('Why are power lines run at very high voltage?', [
    ['The current is lower, so less energy is wasted as heat in the cables', 'Correct.'],
    ['The cables conduct better at high voltage', 'The resistance is unchanged.'],
    ['It makes the power station more efficient', 'The aim is to reduce cable losses.'],
    ['High voltage is safer', 'It is more dangerous; the cables are high up.'],
  ], 0)),
]);
