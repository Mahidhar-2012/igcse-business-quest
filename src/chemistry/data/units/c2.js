import { byte, lesson, mc, calc, fig } from '../helpers.js';

// Unit 2: Quantities and electrochemistry (syllabus topics 3 and 4).

export const c31 = lesson('c3-formulae', 'Formulae and equations', '3.1', [
  'Formulae show the atoms in a substance. Balanced equations obey the conservation of mass. Ionic equations show only the particles that change.',
], [
  byte('Reading a chemical formula', [
    'A **formula** uses element symbols and **subscripts** to show how many atoms of each element are in one unit. H₂SO₄ has 2 H, 1 S and 4 O.',
    'A number in **brackets** multiplies everything inside: Ca(OH)₂ has 1 Ca, 2 O and 2 H.',
    'A large number **in front** of a formula multiplies the whole formula: 3H₂O means 3 molecules of water.',
  ], mc('How many atoms in total are shown in the formula Ca(OH)₂?', [
    ['5', 'Correct: 1 Ca + 2 O + 2 H = 5.'],
    ['4', 'The H atoms are also inside the brackets, so there are two of them.'],
    ['3', 'This counts the elements, not the atoms.'],
    ['6', 'There is only one Ca, two O and two H.'],
  ], 0)),
  byte('Balancing equations', [
    'Atoms are **not created or destroyed** in a reaction, so a balanced equation has the **same number of each atom on both sides**.',
    'Balance by putting **numbers in front of formulae**, never by changing the subscripts.',
    'Example: Mg + O₂ → MgO becomes **2Mg + O₂ → 2MgO**.',
  ], mc('Which is the balanced equation for the formation of water?', [
    ['2H₂ + O₂ → 2H₂O', 'Correct: 4 H and 2 O on both sides.'],
    ['H₂ + O₂ → H₂O', 'The oxygen atoms do not balance (2 and 1).'],
    ['H₂ + O₂ → H₂O₂', 'This is hydrogen peroxide, a different compound.'],
    ['2H + O → H₂O', 'Hydrogen and oxygen are diatomic molecules (H₂ and O₂).'],
  ], 0)),
  byte('State symbols and ionic equations', [
    'State symbols: **(s)** solid, **(l)** liquid, **(g)** gas, **(aq)** dissolved in water.',
    'An **ionic equation** shows only the ions that react. The ions that appear unchanged on both sides are **spectator ions**.',
    'Example: silver nitrate + sodium chloride: **Ag⁺(aq) + Cl⁻(aq) → AgCl(s)**. Na⁺ and NO₃⁻ are the spectator ions.',
  ], mc('In the reaction AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq), which ions are spectator ions?', [
    ['Na⁺ and NO₃⁻', 'Correct: they are unchanged and stay in solution.'],
    ['Ag⁺ and Cl⁻', 'These ions combine to form the precipitate.'],
    ['Ag⁺ and Na⁺', 'Silver ions take part in the precipitation.'],
    ['There are no spectator ions', 'Na⁺ and NO₃⁻ are spectators.'],
  ], 0)),
]);

export const c32 = lesson('c3-masses', 'Relative masses of atoms and molecules', '3.2', [
  'Relative atomic mass Aᵣ is the average mass of an atom compared with 1/12 of carbon-12. Mᵣ is the sum of the Aᵣ values in a formula.',
], [
  byte('Relative atomic mass and relative molecular mass', [
    '**Relative atomic mass (Aᵣ)** is the **average mass of the atoms of an element compared with 1/12 of the mass of an atom of carbon-12**.',
    '**Relative molecular mass (Mᵣ)** is the **sum of the relative atomic masses** of all the atoms in the molecule. For ionic compounds the same sum is called the **relative formula mass**.',
    'They are ratios, so they have **no units**.',
  ], calc('Calculate the relative formula mass (Mᵣ) of sulfuric acid, H₂SO₄. (Aᵣ: H = 1, S = 32, O = 16)', 98, {
    formula: 'Mᵣ = (2 × 1) + 32 + (4 × 16)', steps: ['2 + 32 + 64 = 98'], tol: 0.001,
  })),
  byte('Percentage by mass of an element', [
    '**Percentage of an element in a compound = (Aᵣ × number of atoms of that element) ÷ Mᵣ × 100.**',
    'Use it to compare the iron content of ores or the nitrogen content of fertilisers.',
  ], calc('Calculate the percentage by mass of iron in iron(III) oxide, Fe₂O₃. (Aᵣ: Fe = 56, O = 16)', 70, {
    unit: '%', formula: '(2 × 56) ÷ 160 × 100', steps: ['Mᵣ of Fe₂O₃ = 112 + 48 = 160', '112 ÷ 160 × 100 = 70%'], tol: 0.1,
  })),
]);

export const c33 = lesson('c3-mole', 'The mole and the Avogadro constant', '3.3', [
  'One mole contains 6.02 × 10²³ particles. n = mass ÷ Mᵣ. Gases: 24 dm³ per mole at room temperature and pressure. Concentration = moles ÷ volume.',
], [
  byte('The mole and the Avogadro constant', [
    'The **mole** is the unit for the **amount of substance**. One mole contains **6.02 × 10²³** particles (atoms, molecules or ions). This number is the **Avogadro constant**.',
    'The **mass of one mole** of a substance in grams equals its relative mass (Aᵣ or Mᵣ): one mole of carbon-12 atoms has a mass of 12 g.',
    'Number of particles = moles × 6.02 × 10²³.',
  ], calc('How many molecules are in 0.50 mol of water? (Give your answer as a number multiplied by 10²³, e.g. 3.0)', 3.01, {
    unit: '× 10²³ molecules', formula: 'particles = n × 6.02 × 10²³', steps: ['0.50 × 6.02 × 10²³ = 3.01 × 10²³'], tol: 0.05,
  })),
  byte('Moles, mass and relative mass', [
    '**Amount in moles = mass in g ÷ Mᵣ (or Aᵣ).** Rearrange to find mass = moles × Mᵣ.',
    'Always write the **units** and the **formula** you use. Mᵣ of CO₂ = 12 + (2 × 16) = 44.',
  ], calc('How many moles are in 4.4 g of carbon dioxide, CO₂? (Aᵣ: C = 12, O = 16)', 0.1, {
    unit: 'mol', formula: 'n = m ÷ Mᵣ', steps: ['Mᵣ = 44', '4.4 ÷ 44 = 0.10 mol'], tol: 0.005,
  }), { eq: ['moles = mass ÷ Mᵣ'] }),
  byte('Gas volumes', [
    'One mole of **any gas** occupies **24 dm³ (24 000 cm³)** at **room temperature and pressure (r.t.p.)**.',
    '**Volume of gas = moles × 24 dm³.**',
  ], calc('What volume does 0.50 mol of oxygen occupy at room temperature and pressure (dm³)?', 12, {
    unit: 'dm³', formula: 'V = n × 24', steps: ['0.50 × 24 = 12 dm³'], tol: 0.1,
  }), { eq: ['volume (dm³) = moles × 24'] }),
  byte('Concentration of solutions', [
    '**Concentration** is the amount of solute in a given volume. It can be in **mol/dm³** or **g/dm³**.',
    '**Concentration (mol/dm³) = moles ÷ volume (dm³).** To convert cm³ to dm³, divide by 1000.',
    'To change between the two units: g/dm³ = mol/dm³ × Mᵣ.',
  ], calc('0.25 mol of sodium hydroxide is dissolved to make 500 cm³ of solution. What is its concentration in mol/dm³?', 0.5, {
    unit: 'mol/dm³', formula: 'c = n ÷ V', steps: ['500 cm³ = 0.500 dm³', '0.25 ÷ 0.500 = 0.50 mol/dm³'], tol: 0.01,
  }), { eq: ['concentration = moles ÷ volume (dm³)'] }),
  byte('Reacting masses from equations', [
    'The **coefficients** in a balanced equation give the **ratio of moles**: 2Mg + O₂ → 2MgO means 2 mol Mg gives 2 mol MgO.',
    'Method: **mass → moles → use the ratio → moles of the other substance → mass**.',
  ], calc('What mass of magnesium oxide forms when 4.8 g of magnesium burns completely? (2Mg + O₂ → 2MgO; Aᵣ: Mg = 24, O = 16)', 8, {
    unit: 'g', formula: 'n(Mg) = 4.8 ÷ 24', steps: ['n(Mg) = 0.20 mol', 'Ratio 1:1, so n(MgO) = 0.20 mol', 'Mᵣ(MgO) = 40, mass = 0.20 × 40 = 8.0 g'], tol: 0.05,
  })),
  byte('Percentage yield and purity', [
    '**Percentage yield = actual mass obtained ÷ maximum (theoretical) mass × 100.** Yields are less than 100% because of incomplete reactions, losses and side reactions.',
    '**Percentage purity = mass of pure substance ÷ total mass of sample × 100.**',
  ], calc('A reaction should give a maximum of 8.0 g of product. The actual mass obtained is 7.2 g. What is the percentage yield?', 90, {
    unit: '%', formula: '7.2 ÷ 8.0 × 100', steps: ['7.2 ÷ 8.0 = 0.90', '× 100 = 90%'], tol: 0.1,
  })),
  byte('Empirical formula and limiting reactant', [
    'The **empirical formula** is the **simplest whole-number ratio of atoms** in a compound. Find it by converting each mass (or percentage) to moles and dividing by the smallest.',
    'The **limiting reactant** is the reactant that is **completely used up** and so decides how much product forms. The other reactant is **in excess**.',
  ], mc('A compound contains 40.0% carbon, 6.7% hydrogen and 53.3% oxygen by mass. What is its empirical formula? (Aᵣ: C = 12, H = 1, O = 16)', [
    ['CH₂O', 'Correct: moles are 3.33 : 6.7 : 3.33, which simplifies to 1 : 2 : 1.'],
    ['C₂H₄O₂', 'This is a multiple of the empirical formula (the molecular formula could be this).'],
    ['CHO', 'The hydrogen ratio is 2, not 1.'],
    ['C₂HO', 'The ratio is 1 : 2 : 1, not 2 : 1 : 1.'],
  ], 0)),
]);

export const c41 = lesson('c4-electrolysis', 'Electrolysis', '4.1', [
  'Electrolysis is the decomposition of an ionic compound, molten or dissolved, by electricity. Anode (+): oxidation. Cathode (−): reduction.',
], [
  byte('The electrolysis cell', [
    '**Electrolysis** is the **breakdown of an ionic compound, when molten or in aqueous solution, by an electric current**.',
    'The **electrolyte** is the liquid that conducts and is decomposed. The **electrodes** are the rods that carry the current: the **anode** is the **positive** electrode and the **cathode** is the **negative** electrode.',
    '**Positive ions (cations) move to the cathode** and **negative ions (anions) move to the anode**. Electrons flow in the wires from the anode to the cathode through the power supply.',
  ], fig({ svg: 'electrolysis' }, mc('Which electrode do negative ions move towards during electrolysis?', [
    ['The anode, which is positive', 'Correct: opposite charges attract.'],
    ['The cathode, which is negative', 'Negative ions are repelled by the negative electrode.'],
    ['Both electrodes equally', 'Ions move to the oppositely charged electrode.'],
    ['Neither: ions stay where they are', 'Moving ions carry the current.'],
  ], 0)), { fig: { svg: 'electrolysis', caption: 'Electrolysis of molten lead(II) bromide' } }),
  byte('Electrolysis of molten compounds', [
    'In a **molten binary ionic compound** the products are the **metal at the cathode** and the **non-metal at the anode**.',
    'Molten lead(II) bromide: **lead** forms at the cathode (Pb²⁺ + 2e⁻ → Pb) and **bromine** at the anode (2Br⁻ → Br₂ + 2e⁻).',
    'Use inert (unreactive) electrodes such as graphite or platinum.',
  ], mc('What is formed at the cathode when molten zinc chloride is electrolysed?', [
    ['Zinc', 'Correct: Zn²⁺ ions gain electrons at the negative electrode.'],
    ['Chlorine', 'Chlorine forms at the anode.'],
    ['Hydrogen', 'There is no water in a molten compound.'],
    ['Oxygen', 'There is no oxygen source in molten zinc chloride.'],
  ], 0)),
  byte('Electrolysis of aqueous solutions', [
    'Water also contains ions (H⁺ and OH⁻). At the **cathode** the product is **hydrogen** unless the metal is **less reactive than hydrogen** (such as copper or silver), in which case the **metal** forms.',
    'At the **anode** the product is a **halogen** (chlorine, bromine, iodine) if halide ions are present; otherwise **oxygen** forms from OH⁻ ions.',
    '**Concentrated sodium chloride (brine):** H₂ at the cathode, Cl₂ at the anode, and **sodium hydroxide solution** left behind. **Dilute sulfuric acid:** H₂ and O₂ (2:1 by volume).',
  ], mc('What are the products at the cathode and anode when concentrated aqueous sodium chloride is electrolysed?', [
    ['Hydrogen at the cathode, chlorine at the anode', 'Correct: sodium is more reactive than hydrogen; chloride ions are halide ions.'],
    ['Sodium at the cathode, chlorine at the anode', 'Sodium is too reactive to form in water; hydrogen forms instead.'],
    ['Hydrogen at the cathode, oxygen at the anode', 'Chlorine forms because chloride ions are present at high concentration.'],
    ['Sodium at the cathode, oxygen at the anode', 'Neither product is correct.'],
  ], 0)),
  byte('Half-equations', [
    'A **half-equation** shows what happens at one electrode. Electrons are included and charges must balance.',
    '**Cathode (reduction):** Cu²⁺ + 2e⁻ → Cu, 2H⁺ + 2e⁻ → H₂.',
    '**Anode (oxidation):** 2Cl⁻ → Cl₂ + 2e⁻, 4OH⁻ → 2H₂O + O₂ + 4e⁻.',
  ], mc('Which half-equation correctly shows chlorine forming at the anode?', [
    ['2Cl⁻ → Cl₂ + 2e⁻', 'Correct: electrons are lost, so charge is balanced.'],
    ['Cl₂ + 2e⁻ → 2Cl⁻', 'This is the reverse reaction (reduction).'],
    ['Cl⁻ → Cl + e', 'Chlorine forms diatomic molecules, Cl₂.'],
    ['2Cl⁺ → Cl₂ + 2e⁻', 'Chloride ions are negative, Cl⁻.'],
  ], 0)),
  byte('Electroplating and purifying copper', [
    '**Electroplating:** the object to be plated is the **cathode**, the plating metal is the **anode**, and the electrolyte contains ions of the plating metal. The metal deposits as a thin coating (for protection or appearance).',
    '**Purifying copper:** the **impure copper is the anode** and a **thin pure copper strip is the cathode**, in copper(II) sulfate solution. Copper dissolves from the anode (Cu → Cu²⁺ + 2e⁻) and pure copper deposits on the cathode (Cu²⁺ + 2e⁻ → Cu).',
  ], mc('A student wants to copper-plate a key. How should the cell be set up?', [
    ['The key as the cathode and a copper anode in copper(II) sulfate solution', 'Correct: copper ions plate onto the negative key.'],
    ['The key as the anode and a copper cathode', 'The copper would be removed from the copper electrode and the key would not be plated.'],
    ['Both electrodes made of the key metal in water', 'There are no copper ions to plate.'],
    ['The key in molten copper', 'A solution of copper ions is used.'],
  ], 0)),
]);

export const c42 = lesson('c4-fuelcell', 'Hydrogen–oxygen fuel cells', '4.2', [
  'A hydrogen–oxygen fuel cell produces electricity from hydrogen and oxygen, with only water as the product.',
], [
  byte('The hydrogen–oxygen fuel cell', [
    'A **fuel cell** uses a **fuel and oxygen** to produce **electricity** directly, without burning. Hydrogen and oxygen are fed continuously to separate electrodes.',
    'The **overall reaction** is **2H₂ + O₂ → 2H₂O**. The product is **water**.',
    'At the hydrogen electrode, H₂ loses electrons; at the oxygen electrode, O₂ gains electrons and forms water. The electrons flow through the **external circuit** as the current.',
  ], fig({ svg: 'fuelCell' }, mc('What is the only product of a hydrogen–oxygen fuel cell?', [
    ['Water', 'Correct: 2H₂ + O₂ → 2H₂O.'],
    ['Carbon dioxide', 'There is no carbon in the reactants.'],
    ['Hydrogen peroxide', 'The product is water.'],
    ['Ammonia', 'There is no nitrogen in the reactants.'],
  ], 0)), { fig: { svg: 'fuelCell', caption: 'A hydrogen–oxygen fuel cell' } }),
  byte('Advantages and disadvantages of fuel cells', [
    '**Advantages:** the only product is water, so **no carbon dioxide or pollution** at the point of use; **more efficient** than burning fuel; **no recharging** needed while fuel is supplied.',
    '**Disadvantages:** hydrogen is a **flammable gas that is hard to store and transport** and is mostly made from fossil fuels; fuel cells are **expensive**; the refuelling network is limited.',
  ], mc('Which is a disadvantage of using hydrogen fuel cells in cars?', [
    ['Hydrogen is difficult to store safely and to distribute', 'Correct.'],
    ['They produce carbon dioxide', 'A hydrogen fuel cell produces only water.'],
    ['They need burning of petrol', 'They run on hydrogen and oxygen.'],
    ['They make no electricity', 'They produce electricity directly.'],
  ], 0)),
]);

export const unit2 = {
  id: 'c2', number: 2, title: 'Quantities and Electrochemistry', short: 'Moles', emoji: '⚖️', color: 'teal',
  submodules: [c31, c32, c33, c41, c42],
  papers: [],
};
