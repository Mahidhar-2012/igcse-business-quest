import { paperQuestions } from '../paperHelpers.js';

export const circuitsPaper = paperQuestions('circuits', 'Electric circuits', [
  ['C', 'The resistors are in parallel, so each has the full 6.0 V across it. Current in the 8.0 Ω resistor = V ÷ R = 6.0 ÷ 8.0 = 0.75 A.'],
  ['C', 'A coil beside a switch (the coil operates the switch contacts) is the symbol for a relay.'],
  ['B', 'The variable resistor symbol is a resistor box with an arrow through it. D is a thermistor, and C is a fixed resistor with a different style of symbol.'],
  ['B', 'P and R are in the main circuit, so they carry the total current and read the same. Q is in only one of the parallel branches, so it reads less than P and R.'],
  ['A', 'When the light on an LDR gets brighter its resistance decreases. Its share of the supply voltage (the potential divider rule) then decreases, so the voltmeter across it reads less.'],
  ['B', 'Lamps work at normal brightness when each has the full 230 V across it. That needs every lamp in its own parallel branch (B). In A, C and D lamps are in series with others and share the voltage.'],
  ['B', 'A voltmeter must be connected in parallel across the component. In B it is directly across the resistor.'],
  ['C', 'The lamp needs switches 1 and 2 closed, and the bell needs 1 and 3. Switch 4 is a wire back to the battery with no component, so closing it would short-circuit the supply.'],
  null,
  ['C', 'The slider only changes how the resistance PQ is shared. The lamp is in series with the whole of PQ, so the total resistance, current and lamp brightness do not change. The voltmeter is across the lamp plus the part of PQ between the slider and Q, which gets smaller as the slider moves towards Q, so its reading decreases.'],
  ['D', 'X = two in parallel (R/2, the smallest), Y = two in series (2R), Z = three in series (3R, the largest). From largest to smallest: Z → Y → X.'],
  ['C', 'When the resistance of the variable resistor increases, it takes a larger share of the supply voltage, so the reading on P (across it) increases and the reading on Q (across the fixed resistor) decreases.'],
  ['B', 'The ammeter goes in series with the resistor and the voltmeter goes in parallel (across the resistor). Only B has both connected correctly.'],
  ['A', 'In A each lamp has its own switch and the two lamps are in parallel branches. D has a main switch in the supply, so it switches both lamps off together. B and C are series circuits.'],
  ['A', 'In parallel, the combined resistance is always less than the smaller of the individual resistances.'],
]);
