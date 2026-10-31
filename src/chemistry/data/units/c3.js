import { byte, lesson, mc, calc, fig } from '../helpers.js';

// Unit 3: Energy changes and chemical reactions (syllabus topics 5 and 6).

export const c51 = lesson('c5-energetics', 'Exothermic and endothermic reactions', '5.1', [
  'Exothermic reactions release energy to the surroundings (temperature rises). Endothermic reactions absorb energy (temperature falls). Bond breaking absorbs energy; bond making releases it.',
], [
  byte('Exothermic and endothermic reactions', [
    'An **exothermic** reaction **transfers energy to the surroundings**, so the temperature of the surroundings **rises**. Examples: combustion, neutralisation, respiration.',
    'An **endothermic** reaction **takes in energy from the surroundings**, so the temperature **falls**. Examples: thermal decomposition, photosynthesis, dissolving ammonium nitrate.',
    'The energy change is shown as ΔH: **negative** for exothermic, **positive** for endothermic.',
  ], mc('A student mixes two solutions and the temperature of the mixture falls from 22 °C to 15 °C. What type of reaction is this?', [
    ['Endothermic, because it takes in energy from the surroundings', 'Correct.'],
    ['Exothermic, because the temperature changed', 'Exothermic reactions raise the temperature.'],
    ['Neither: temperature does not change in reactions', 'Most reactions change the temperature.'],
    ['Exothermic, because energy is lost', 'Energy is gained by the reaction from the surroundings.'],
  ], 0)),
  byte('Reaction profile diagrams', [
    'A **reaction profile** shows the energy of the reactants, the **activation energy** (the minimum energy needed to start the reaction) and the energy of the products.',
    'In an **exothermic** reaction the products are **lower in energy** than the reactants. In an **endothermic** reaction the products are **higher**.',
    'The **difference** in energy between reactants and products is the **overall energy change**.',
  ], fig({ svg: 'reactionProfile' }, mc('On a reaction profile, the products are at a lower energy level than the reactants. The reaction is…', [
    ['Exothermic', 'Correct: energy is released to the surroundings.'],
    ['Endothermic', 'In an endothermic reaction the products are at a higher energy.'],
    ['Neither exothermic nor endothermic', 'Any reaction with an energy difference is one or the other.'],
    ['Impossible without a catalyst', 'Many exothermic reactions happen without a catalyst.'],
  ], 0)), { fig: { svg: 'reactionProfile', caption: 'Reaction profiles' } }),
  byte('Bond energies and energy changes', [
    '**Breaking bonds is endothermic** (energy is taken in). **Making bonds is exothermic** (energy is released).',
    '**Energy change = energy needed to break bonds − energy released when making bonds.** A negative result means the reaction is **exothermic**.',
    'Bond energies are in **kJ/mol**.',
  ], calc('Calculate the energy change for H₂ + Cl₂ → 2HCl. Bond energies in kJ/mol: H–H 436, Cl–Cl 242, H–Cl 431. (Give a negative number for an exothermic reaction.)', -184, {
    unit: 'kJ/mol', formula: 'energy in − energy out', steps: ['Bonds broken: 436 + 242 = 678 kJ', 'Bonds made: 2 × 431 = 862 kJ', '678 − 862 = −184 kJ/mol (exothermic)'], tol: 0.5,
  })),
]);

export const c61 = lesson('c6-changes', 'Physical and chemical changes', '6.1', [
  'A chemical change makes new substances and is hard to reverse; a physical change does not make a new substance.',
], [
  byte('Physical changes and chemical changes', [
    'In a **physical change** no new substance forms (melting, boiling, dissolving, mixing). It is usually **easy to reverse**.',
    'In a **chemical change** (a chemical reaction) **new substances form**. Signs: a gas given off, a colour change, a precipitate, a temperature change, a flame or light. It is usually **hard to reverse**.',
  ], mc('Which of these is a chemical change?', [
    ['Magnesium burning in air', 'Correct: a new substance, magnesium oxide, forms.'],
    ['Ice melting', 'This is a physical change of state.'],
    ['Salt dissolving in water', 'This is a physical change that can be reversed by evaporating the water.'],
    ['Water boiling', 'Water is still water; this is a change of state.'],
  ], 0)),
]);

export const c62 = lesson('c6-rate', 'Rate of reaction', '6.2', [
  'Reactions happen when particles collide with enough energy. Higher concentration, temperature, surface area and catalysts increase the rate.',
], [
  byte('Measuring the rate of reaction', [
    'The **rate** is how fast reactants are used or products are formed. It can be followed by measuring the **volume of gas** produced over time, the **loss in mass** as a gas escapes, or the **time taken** for a change such as a cross to disappear.',
    '**Rate = amount of product ÷ time** (or amount of reactant used ÷ time).',
    'Repeat and average results to reduce errors.',
  ], mc('Which measurement could be used to follow the rate of reaction between calcium carbonate and hydrochloric acid?', [
    ['The volume of carbon dioxide gas collected over time', 'Correct: CO₂ is produced as the reaction proceeds.'],
    ['The colour of the calcium carbonate at the end', 'This does not give a rate.'],
    ['The mass of the beaker only', 'The loss in mass of the whole flask could be used, not the empty beaker.'],
    ['The pH of the acid before it is added', 'This does not give a rate.'],
  ], 0)),
  byte('Factors that change the rate', [
    '**Increase the concentration** of a solution, the **pressure** of a gas, the **temperature**, or the **surface area** of a solid (smaller pieces), or add a **catalyst**: the rate goes up.',
    'Powdered marble reacts faster with acid than marble chips because **more surface area** is exposed to the acid.',
    'These changes are described using the **collision theory** (next byte).',
  ], mc('Why does powdered calcium carbonate react faster with acid than the same mass of large lumps?', [
    ['The powder has a larger surface area, so there are more collisions per second', 'Correct.'],
    ['The powder has a higher activation energy', 'Activation energy is unchanged.'],
    ['The powder is a different chemical', 'It is the same substance with different particle size.'],
    ['The powder contains more atoms', 'The mass, and so the number of atoms, is the same.'],
  ], 0)),
  byte('Collision theory', [
    'A reaction needs particles to **collide** with **at least the activation energy** (the minimum energy needed). These are **successful collisions**.',
    '**Higher concentration or pressure** → particles closer together → **more frequent collisions**.',
    '**Higher temperature** → particles move faster → collisions are **more frequent** and **more of them have enough energy** (the second effect matters more).',
  ], mc('Why does increasing the temperature increase the rate of reaction?', [
    ['More collisions per second, and a greater proportion have at least the activation energy', 'Correct.'],
    ['The activation energy decreases', 'Only a catalyst lowers the activation energy.'],
    ['The particles become larger', 'The size of particles does not change.'],
    ['The reactants become more concentrated', 'Heating does not change the concentration.'],
  ], 0)),
  byte('Rate graphs', [
    'On a graph of **volume of gas against time**, the **steeper** the curve, the **faster** the reaction. The curve **levels off** when the limiting reactant is used up.',
    'A faster reaction (higher concentration, higher temperature, powder) has a **steeper curve** but gives the **same final volume** if the amount of the limiting reactant is the same.',
  ], fig({ svg: 'rateGraph' }, mc('On the graph, curve X is steeper than curve Y but both end at the same volume. What does this show?', [
    ['X is the faster reaction, with the same amount of product formed', 'Correct.'],
    ['X is the slower reaction', 'A steeper curve means a faster rate.'],
    ['X produced more product than Y', 'Both end at the same volume.'],
    ['Y has a catalyst and X does not', 'The steeper curve (X) is the faster one.'],
  ], 0)), { fig: { svg: 'rateGraph', caption: 'Gas volume against time' } }),
  byte('Catalysts and enzymes', [
    'A **catalyst** **speeds up a reaction** without being **used up**. It provides an **alternative pathway with a lower activation energy**, so more collisions are successful.',
    'A catalyst is **chemically unchanged** at the end and can be used again. **Enzymes** are **biological catalysts** made of protein.',
    'Examples: iron in the Haber process, manganese(IV) oxide for decomposing hydrogen peroxide.',
  ], mc('What does a catalyst do to the activation energy of a reaction?', [
    ['It lowers it', 'Correct: it provides an alternative pathway.'],
    ['It raises it', 'That would slow the reaction.'],
    ['It has no effect on it', 'It lowers the activation energy; that is how it works.'],
    ['It removes the need for any energy', 'Some energy is still needed.'],
  ], 0)),
  byte('Photochemical reactions', [
    'A **photochemical reaction** is a reaction that **uses light energy**. Examples: **photosynthesis** (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ in the presence of chlorophyll) and the **darkening of silver bromide** in photographic film: 2AgBr → 2Ag + Br₂.',
    'A greater **light intensity** gives a faster rate.',
  ], mc('What is the energy source for photosynthesis?', [
    ['Light, absorbed by chlorophyll', 'Correct.'],
    ['Heat from burning', 'Photosynthesis uses light.'],
    ['Electricity', 'Plants do not use electricity.'],
    ['The chemical energy in oxygen', 'Oxygen is a product, not the energy source.'],
  ], 0)),
]);

export const c63 = lesson('c6-equilibrium', 'Reversible reactions and equilibrium', '6.3', [
  'In a reversible reaction products can react to re-form reactants (⇌). At equilibrium, in a closed system, forward and reverse rates are equal and concentrations stay constant.',
], [
  byte('Reversible reactions', [
    'In a **reversible reaction** the products can react to form the reactants again. The equation uses the sign **⇌**.',
    '**Hydrated copper(II) sulfate (blue)** ⇌ **anhydrous copper(II) sulfate (white)** + water. Heating drives the water off; adding water to the white solid turns it **blue** and **releases energy**.',
    'This reaction is used as a **test for water**.',
  ], mc('White anhydrous copper(II) sulfate turns blue when a liquid is added. What does this show?', [
    ['The liquid contains water', 'Correct: this is the chemical test for water.'],
    ['The liquid is pure water only', 'The test shows water is present, not that it is pure.'],
    ['The liquid is an acid', 'The test is for water, not acids.'],
    ['The liquid contains copper', 'The copper is already in the solid.'],
  ], 0)),
  byte('Dynamic equilibrium', [
    '**Equilibrium** is reached in a **closed system** (nothing escapes) when the **rate of the forward reaction equals the rate of the reverse reaction**.',
    'It is **dynamic**: both reactions are still happening, but the **concentrations stay constant**.',
  ], mc('Which statement describes a system at equilibrium?', [
    ['The forward and reverse reactions occur at the same rate, and concentrations are constant', 'Correct.'],
    ['All reactions have stopped', 'At equilibrium both reactions continue.'],
    ['Only the forward reaction is happening', 'The reverse reaction is also happening.'],
    ['The reactants have all been used up', 'Both reactants and products are present.'],
  ], 0)),
  byte('Changing the position of equilibrium', [
    'The **position of equilibrium** moves to **oppose a change** made to the system.',
    '**Temperature:** raising the temperature favours the **endothermic** direction; lowering it favours the **exothermic** direction.',
    '**Pressure (gases):** raising the pressure favours the side with **fewer moles of gas**.',
    'A **catalyst** speeds up both reactions equally, so it does **not change the position** of equilibrium but makes it be reached faster.',
  ], mc('For N₂ + 3H₂ ⇌ 2NH₃ the forward reaction is exothermic. What happens to the yield of ammonia if the temperature is raised?', [
    ['It decreases, because the endothermic reverse reaction is favoured', 'Correct.'],
    ['It increases, because heat speeds up reactions', 'Speed is not the same as position; the equilibrium moves towards the endothermic side.'],
    ['It stays the same', 'The position shifts when temperature changes.'],
    ['Ammonia can no longer form', 'It still forms but the yield is lower.'],
  ], 0)),
  byte('The Haber process', [
    'The **Haber process** makes **ammonia**: **N₂ + 3H₂ ⇌ 2NH₃**. The nitrogen comes from the air and the hydrogen from natural gas.',
    'Conditions: **about 450 °C**, **about 200 atmospheres**, and an **iron catalyst**.',
    'A **compromise**: a higher temperature would give a faster rate but a lower yield; a high pressure increases the yield but is expensive.',
  ], mc('Why is a temperature of about 450 °C used in the Haber process?', [
    ['It is a compromise between a reasonable rate and a reasonable yield', 'Correct: lower temperature gives more ammonia but too slowly.'],
    ['It gives the highest possible yield', 'A lower temperature would give a higher yield.'],
    ['It is needed to melt the iron catalyst', 'The iron stays solid.'],
    ['Ammonia only forms above 450 °C', 'It forms at other temperatures too, just at different rates and yields.'],
  ], 0)),
  byte('The Contact process', [
    'The **Contact process** makes **sulfuric acid**. The key step is **2SO₂ + O₂ ⇌ 2SO₃**, using **about 450 °C**, **about 2 atmospheres** and a **vanadium(V) oxide (V₂O₅) catalyst**.',
    'The sulfur trioxide is dissolved in **concentrated sulfuric acid** to make oleum, which is then diluted with water to give sulfuric acid.',
    'The sulfur dioxide comes from burning sulfur or roasting sulfide ores.',
  ], mc('Which catalyst is used in the Contact process?', [
    ['Vanadium(V) oxide', 'Correct.'],
    ['Iron', 'Iron is the catalyst in the Haber process.'],
    ['Nickel', 'Nickel is used in the hydrogenation of alkenes.'],
    ['Platinum', 'Platinum is used in catalytic converters.'],
  ], 0)),
]);

export const c64 = lesson('c6-redox', 'Redox', '6.4', [
  'Oxidation is loss of electrons (gain of oxygen, increase in oxidation state); reduction is gain of electrons. An oxidising agent is reduced; a reducing agent is oxidised.',
], [
  byte('Oxidation and reduction', [
    '**Oxidation** is **gain of oxygen**, **loss of electrons** or an **increase in oxidation state**. **Reduction** is **loss of oxygen**, **gain of electrons** or a **decrease in oxidation state**.',
    'Remember **OIL RIG**: Oxidation Is Loss (of electrons), Reduction Is Gain.',
    'A **redox reaction** has both reduction and oxidation happening together.',
  ], mc('In the reaction Mg + Cu²⁺ → Mg²⁺ + Cu, which species is oxidised?', [
    ['Magnesium, because it loses electrons', 'Correct: Mg → Mg²⁺ + 2e⁻.'],
    ['Copper ions, because they lose electrons', 'Cu²⁺ gains electrons, so it is reduced.'],
    ['Neither is oxidised', 'Magnesium is oxidised.'],
    ['Both are oxidised', 'One substance is oxidised and the other reduced.'],
  ], 0)),
  byte('Oxidation states', [
    'The **oxidation state** is a number showing how many electrons an atom has gained or lost. **Uncombined elements: 0.** Simple ions: the **charge** (Na⁺ is +1). **Oxygen is usually −2**, **hydrogen +1** in compounds.',
    'The oxidation states in a compound add up to its **overall charge**.',
    'Roman numerals in names give the oxidation state, for example **iron(III)** oxide contains Fe³⁺.',
  ], calc('What is the oxidation state of manganese in the permanganate ion, MnO₄⁻?', 7, {
    formula: 'x + 4(−2) = −1', steps: ['x − 8 = −1', 'x = +7'], tol: 0.001,
  })),
  byte('Oxidising and reducing agents', [
    'An **oxidising agent** **oxidises another substance** by **accepting electrons**, and is itself **reduced**. A **reducing agent** **donates electrons** and is itself **oxidised**.',
    '**Acidified potassium manganate(VII)** is an oxidising agent: it changes from **purple to colourless** when reduced.',
    '**Potassium iodide** is a reducing agent: it turns from **colourless to brown** as iodide ions are oxidised to iodine, showing that an oxidising agent is present.',
  ], mc('Acidified potassium manganate(VII) changes from purple to colourless. What does this show?', [
    ['It has been reduced, so a reducing agent is present', 'Correct.'],
    ['It has been oxidised', 'The change to colourless is a reduction (Mn⁷⁺ → Mn²⁺).'],
    ['It has been neutralised', 'The colour change is a redox change.'],
    ['It has been heated', 'The colour change is chemical, not due to heat.'],
  ], 0)),
  byte('Recognising redox in equations', [
    'Look for a change in oxidation state. In **Fe₂O₃ + 3CO → 2Fe + 3CO₂**, iron goes from +3 to 0 (**reduced**) and carbon goes from +2 to +4 (**oxidised**).',
    'The substance reduced is the **oxidising agent** (Fe₂O₃); the substance oxidised is the **reducing agent** (CO).',
  ], mc('In Fe₂O₃ + 3CO → 2Fe + 3CO₂, which substance is the reducing agent?', [
    ['Carbon monoxide', 'Correct: it is oxidised and removes oxygen from the iron oxide.'],
    ['Iron(III) oxide', 'Iron(III) oxide is reduced, so it is the oxidising agent.'],
    ['Iron', 'Iron is the product.'],
    ['Carbon dioxide', 'Carbon dioxide is a product.'],
  ], 0)),
]);

export const unit3 = {
  id: 'c3', number: 3, title: 'Energy and Chemical Reactions', short: 'Reactions', emoji: '🔥', color: 'rose',
  submodules: [c51, c61, c62, c63, c64],
  papers: [],
};
