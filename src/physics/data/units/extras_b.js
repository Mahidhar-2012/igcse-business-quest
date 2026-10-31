import { byte, mc, calc, fig } from '../helpers.js';

// Extra bytes added after the syllabus gap audit (electricity and magnetism). Keyed by lesson id.
export const extrasB = {
  'p4-magnetism': [
    byte('Induced magnetism', [
      'A magnetic material such as iron becomes a magnet when it is **placed near or touching a magnet**. This is **induced magnetism**.',
      'The end of the iron **nearest** the magnet becomes the **opposite pole**, so the iron is attracted. That is why a magnet can pick up a chain of paper clips.',
      '**Soft iron** loses its magnetism quickly (a **temporary magnet**). **Steel** keeps it (a **permanent magnet**).',
    ], mc('The north pole of a magnet is brought near a steel nail. What pole is induced at the end of the nail nearest the magnet?', [
      ['A south pole', 'Correct: the induced pole nearest is opposite, so the nail is attracted.'],
      ['A north pole', 'Like poles would repel, but magnetic materials are attracted.'],
      ['No pole', 'Iron and steel become magnetised by induction.'],
      ['Both poles at the same end', 'Each end of the nail has the opposite pole to the other.'],
    ], 0)),
    byte('Uses of permanent magnets and electromagnets', [
      '**Permanent magnets:** fridge door seals, compasses, loudspeakers, motors and catches on cupboards.',
      '**Electromagnets** can be **switched on and off** and their strength changed. Uses: scrapyard cranes, electric bells, relays and circuit breakers.',
      'Electromagnets use a **soft iron core**, so they lose their magnetism when the current stops.',
    ], mc('Why is an electromagnet used in a scrapyard crane rather than a permanent magnet?', [
      ['It can be switched off to release the scrap', 'Correct: the load is dropped when the current is turned off.'],
      ['It is always stronger than any permanent magnet', 'Strength is not the reason; control is.'],
      ['It attracts all metals including aluminium', 'It attracts only magnetic materials.'],
      ['It needs no electricity', 'It needs a current.'],
    ], 0)),
    byte('Plotting magnetic field lines', [
      'Place a **plotting compass** near a magnet. Mark the positions of the needle’s two ends with dots, then move the compass so one end sits on the last dot. Join the dots to draw a field line.',
      '**Iron filings** sprinkled on card over a magnet line up along the field and show the pattern.',
      'The **direction of the field** at a point is the direction of the force on the **N pole** of a magnet there, so the compass needle’s north end points along the field.',
    ], mc('A plotting compass is placed near the S pole of a bar magnet. The north end of the needle points…', [
      ['Towards the S pole of the bar magnet', 'Correct: field lines enter the S pole, and the compass N points along the field.'],
      ['Away from the S pole', 'This would be the case near the N pole.'],
      ['At right angles to the field line', 'The needle lines up along the field.'],
      ['In a random direction', 'It lines up with the field.'],
    ], 0)),
  ],
  'p4-elecq': [
    byte('Conductors, insulators and the electron model', [
      '**Metals** have **free (delocalised) electrons** that move through the metal, so they conduct electricity well.',
      'In **insulators** (plastic, rubber, glass) the electrons are held tightly to their atoms, so almost no charge can flow.',
      'To test a material, put it in a simple circuit with a cell and a lamp: if the lamp lights, it is a conductor.',
    ], mc('Why does copper conduct electricity but plastic does not?', [
      ['Copper has free electrons that can move; plastic’s electrons are held in place', 'Correct.'],
      ['Copper has more protons that move', 'Protons stay fixed in the nucleus.'],
      ['Plastic has no electrons', 'All atoms have electrons.'],
      ['Copper is hotter than plastic', 'Temperature is not the reason.'],
    ], 0)),
    byte('Electric field patterns', [
      'An **electric field** is a region where a charge experiences a force. Its **direction** is the direction of the force on a **positive charge**.',
      'Around a **positive point charge** (or sphere) the lines point **outwards**; around a **negative** charge they point **inwards**.',
      'Between **oppositely charged parallel plates** the field is **uniform**: straight, parallel lines from the **positive plate to the negative plate**.',
    ], fig({ svg: 'electricFields' }, mc('Which way do electric field lines point between a positively charged plate and a negatively charged plate?', [
      ['From the positive plate to the negative plate', 'Correct: the direction is that of the force on a positive charge.'],
      ['From the negative plate to the positive plate', 'This is the direction of the force on an electron.'],
      ['Along the plates', 'Lines run across the gap between the plates.'],
      ['They have no direction', 'Field lines are drawn with arrows.'],
    ], 0)), { fig: { svg: 'electricFields', caption: 'Electric field patterns' } }),
    byte('The cost of using electricity', [
      'The **kilowatt-hour (kW h)** is the energy used by a **1 kW** appliance in **1 hour**.',
      '**Energy (kW h) = power (kW) × time (h)**, and **cost = energy in kW h × price per kW h**.',
      'Convert watts to kilowatts by dividing by 1000.',
    ], calc('A 2.0 kW heater is used for 3.0 hours. Electricity costs 15 cents per kW h. What is the cost in cents?', 90, {
      unit: 'cents', formula: 'energy = P × t; cost = energy × price', steps: ['Energy = 2.0 × 3.0 = 6.0 kW h', 'Cost = 6.0 × 15 = 90 cents'],
    })),
    byte('Meters and their ranges', [
      'An **ammeter** (in series) measures current; a **voltmeter** (in parallel) measures p.d. Both can be **analogue** (pointer on a scale) or **digital** (number display).',
      'Meters have **ranges**: choose the range that is just above the value expected, to read as precisely as possible.',
      'On an analogue meter read with your eye straight in front of the pointer to avoid **parallax error**.',
    ], mc('You expect a current of about 0.3 A. Which ammeter range gives the most precise reading?', [
      ['0 to 0.5 A', 'Correct: the smallest range that includes the expected value.'],
      ['0 to 10 A', 'The pointer would barely move, so the reading is imprecise.'],
      ['0 to 100 A', 'Far too large a range for 0.3 A.'],
      ['It makes no difference', 'A suitable range increases precision.'],
    ], 0)),
  ],
  'p4-circuits': [
    byte('Current at a junction', [
      'In a parallel circuit, **the current entering a junction equals the total current leaving it**: charge is not lost or created.',
      'The current from the source is **larger than the current in each branch**, and the branch currents add up to it.',
    ], calc('A current of 3.0 A reaches a junction and splits between two branches. One branch carries 1.2 A. What is the current in the other branch (A)?', 1.8, {
      unit: 'A', formula: 'I in = I out', steps: ['3.0 − 1.2 = 1.8 A'],
    })),
    byte('Cells in series', [
      'The **combined e.m.f. of cells connected in series** (all facing the same way) is the **sum** of their e.m.f.s.',
      'A battery is several cells connected in series.',
    ], calc('Three 1.5 V cells are connected in series, all the same way round. What is the combined e.m.f. (V)?', 4.5, {
      unit: 'V', formula: 'E = E₁ + E₂ + E₃', steps: ['1.5 + 1.5 + 1.5 = 4.5 V'],
    })),
    byte('The potential divider equation', [
      'Two resistors in series share the supply p.d. in the **ratio of their resistances**: **R₁ ÷ R₂ = V₁ ÷ V₂**.',
      'The larger resistor gets the larger p.d. For a fixed current, the p.d. across a conductor **increases as its resistance increases**.',
    ], calc('A 6.0 V supply is connected across a 2.0 kΩ and a 4.0 kΩ resistor in series. What is the p.d. across the 4.0 kΩ resistor (V)?', 4, {
      unit: 'V', formula: 'V₂ ÷ V₁ = R₂ ÷ R₁ = 2', steps: ['Total resistance = 6.0 kΩ', 'Share of the 4.0 kΩ resistor = 4/6 of 6.0 V', 'V = 4.0 V'],
    }), { eq: ['R₁ ÷ R₂ = V₁ ÷ V₂'] }),
    byte('Why lamps in a house are in parallel', [
      'Each lamp in **parallel** has the **full mains p.d.**, so every lamp is at normal brightness.',
      'Each lamp can be **switched on and off independently**.',
      'If one lamp **fails**, the others stay on. In series, one failure would break the whole circuit.',
    ], mc('What is one advantage of wiring the lamps in a house in parallel?', [
      ['If one lamp breaks, the others still work', 'Correct: the other branches still form complete circuits.'],
      ['The total current is smaller', 'The total current is larger because there are more paths.'],
      ['Every lamp shares the p.d. between them', 'That describes a series circuit.'],
      ['They use no energy', 'All lamps use energy.'],
    ], 0)),
  ],
  'p4-safety': [
    byte('The switch goes in the live wire', [
      'The **live** wire is at a high p.d. relative to earth; the **neutral** wire is near 0 V.',
      'A switch must be in the **live** wire. If it were in the neutral wire, the appliance would be **live even when switched off**, and touching a fault inside could give a lethal shock.',
    ], mc('Why must a switch be connected to the live wire?', [
      ['So that when it is off, the appliance is disconnected from the high p.d.', 'Correct.'],
      ['Because the neutral wire carries no current', 'The neutral wire does carry the return current.'],
      ['So the earth wire stays connected', 'The earth wire is unaffected by the switch.'],
      ['To make the appliance more efficient', 'This has nothing to do with efficiency.'],
    ], 0)),
    byte('Earth wires, double insulation and trip switches', [
      'A metal casing must be **earthed**. If the live wire touches the casing, a large current flows through the earth wire, the fuse **melts**, and the appliance is made safe.',
      'A **double-insulated** appliance has a non-conducting (plastic) casing, so it needs no earth wire. A **fuse** still protects the circuit and cables.',
      'A **trip switch** (circuit breaker) opens when the current is too large and can be reset.',
    ], mc('Why does a metal-cased kettle need an earth wire?', [
      ['If the live wire touches the case, current flows to earth and blows the fuse', 'Correct: this stops the case becoming live.'],
      ['It makes the water boil faster', 'It has no effect on heating.'],
      ['It carries the normal current to the kettle', 'The normal current flows in the live and neutral wires.'],
      ['It stops the kettle from getting hot', 'Its purpose is safety, not cooling.'],
    ], 0)),
    byte('Choosing a fuse', [
      'Choose a fuse rated **just above** the normal working current. Common ratings are 3 A, 5 A and 13 A.',
      'Normal current = **power ÷ voltage** (I = P ÷ V).',
      'Too low a rating and the fuse blows in normal use; too high and it will not protect the cable.',
    ], mc('A 920 W heater is plugged into the 230 V mains. Which fuse is most suitable?', [
      ['5 A', 'Correct: I = 920 ÷ 230 = 4.0 A, so a 5 A fuse is just above.'],
      ['3 A', 'This is below the normal current and would blow immediately.'],
      ['13 A', 'This is much larger than needed and gives poor protection.'],
      ['No fuse is needed', 'All mains appliances need protection.'],
    ], 0)),
  ],
  'p4-em': [
    byte('Direction of an induced e.m.f.', [
      'The direction of an induced e.m.f. (and current) is such that it **opposes the change that causes it**.',
      'Pushing the N pole of a magnet **into** a coil induces a current that makes the end of the coil a **N pole**, repelling the magnet. Pulling the magnet **out** induces a S pole, attracting it back.',
      'This follows from the conservation of energy: you must do work to move the magnet.',
    ], mc('A magnet is pushed N pole first towards a coil. The induced current makes the nearer end of the coil…', [
      ['A north pole, which repels the magnet', 'Correct: the effect opposes the change (the approaching magnet).'],
      ['A south pole, which attracts the magnet', 'That would help the motion, giving free energy.'],
      ['Neutral: no pole at all', 'A current in a coil makes it behave as a magnet.'],
      ['A south pole, which repels the magnet', 'Opposite poles attract.'],
    ], 0)),
    byte('The force on a current-carrying wire', [
      'A wire carrying a current in a magnetic field experiences a **force** at right angles to both the field and the current.',
      '**Fleming’s left-hand rule:** thumb = **motion (force)**, first finger = **field** (N to S), second finger = **conventional current** (+ to −).',
      'Reversing **either** the current **or** the field reverses the force. Reversing **both** leaves it unchanged.',
    ], mc('The current in a wire in a magnetic field is reversed and the field is also reversed. What happens to the force?', [
      ['It stays in the same direction', 'Correct: two reversals cancel.'],
      ['It reverses', 'Reversing only one would reverse it.'],
      ['It becomes zero', 'The wire still carries a current in a field.'],
      ['It doubles', 'The size is unchanged.'],
    ], 0)),
    byte('Graph of the output of an a.c. generator', [
      'A generator turns a **coil in a magnetic field** (or a magnet inside a coil). **Slip rings and brushes** connect the rotating coil to the outside circuit.',
      'The e.m.f. is **zero** when the coil is **flat on to the field** (not cutting field lines) and at a **peak or trough** when the coil is **edge-on** (cutting lines fastest).',
      'Faster rotation gives a **higher peak** and a **shorter period** (higher frequency).',
    ], fig({ svg: 'acGraph' }, mc('When is the e.m.f. from a simple a.c. generator zero?', [
      ['When the coil is perpendicular to the field and not cutting field lines', 'Correct.'],
      ['When the coil is parallel to the field, cutting lines at the greatest rate', 'This gives the maximum e.m.f.'],
      ['Only when the generator stops turning', 'It passes through zero twice every turn while turning.'],
      ['Never', 'It is zero at the start of each half-turn.'],
    ], 0)), { fig: { svg: 'acGraph', caption: 'E.m.f. of an a.c. generator' } }),
    byte('Magnetic field of a wire and a solenoid', [
      'A **straight wire** has circular field lines around it. A **solenoid** has a field like a **bar magnet**: strong and straight inside, with N and S ends.',
      'The field is **stronger** with a **larger current**, **more turns** or an **iron core**. It is **weaker further away**.',
      'Reversing the current **reverses the direction** of the field.',
    ], mc('How can the magnetic field of a solenoid be made weaker?', [
      ['Reduce the current', 'Correct: field strength depends on current.'],
      ['Add an iron core', 'This makes the field stronger.'],
      ['Add more turns', 'This makes the field stronger.'],
      ['Move closer to the coil', 'The field is stronger close to the coil.'],
    ], 0)),
    byte('Relays and loudspeakers', [
      'A **relay** is an electromagnetic switch: a small current in a coil attracts an iron armature and closes contacts in a separate circuit carrying a large current.',
      'A **loudspeaker** has a coil attached to a cone in a magnetic field. The **varying current** from the amplifier makes the coil move to and fro, moving the cone and making sound waves.',
    ], mc('How does a loudspeaker produce sound?', [
      ['A varying current in a coil in a magnetic field makes the cone vibrate', 'Correct: the force on the coil moves the cone to and fro.'],
      ['A steady direct current heats the cone', 'Heating does not make sound.'],
      ['A magnet spins inside a coil', 'That describes a generator.'],
      ['Light shines on the cone', 'Light is not involved.'],
    ], 0)),
    byte('Charged particles in a magnetic field', [
      'A **beam of charged particles** (such as electrons) moving in a magnetic field is like a current, so it experiences a **force perpendicular to its velocity**.',
      'The force changes the **direction** but not the **speed**, so the beam follows a curved path.',
      'Remember that **conventional current** is opposite to the motion of **electrons**, so use the left-hand rule with the current opposite to the electron’s motion.',
    ], mc('An electron moves in a magnetic field at right angles to it. What happens to its speed?', [
      ['It stays the same; only the direction changes', 'Correct: the force is always perpendicular to the motion.'],
      ['It increases', 'No force acts along the motion to speed it up.'],
      ['It decreases to zero', 'No force acts along the motion to slow it down.'],
      ['It oscillates', 'The path simply curves.'],
    ], 0)),
  ],
};
