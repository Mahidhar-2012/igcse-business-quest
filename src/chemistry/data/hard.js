import { mc, fig } from './helpers.js';
import { multi, match, cloze, short } from '../../data/builders.js';

// Chemistry: harder replacements and extra question types, keyed by question id (see src/data/overlay.js).
// Wrong options are common misconceptions and are written to the same length and shape as the right one.

export const hard = {
  replace: {
    // ---------- Topic 1: particles ----------
    'c1-states:c0.0': fig({ svg: 'states' }, mc('Which description fits the particles in a liquid?', [
      ['Close together in an irregular arrangement, sliding over one another', 'Correct.'],
      ['Close together in a regular arrangement, vibrating about fixed positions', 'That describes a solid.'],
      ['Far apart in a random arrangement, moving quickly in all directions', 'That describes a gas.'],
      ['Close together in an irregular arrangement, vibrating about fixed positions', 'Liquid particles can slide past each other.'],
    ], 0)),
    'c1-states:c1.0': fig({ svg: 'heatingCurve' }, mc('Ice is heated steadily. Why is the temperature constant at 0 °C while it melts?', [
      ['The energy is used to overcome the forces between particles, not to speed them up', 'Correct.'],
      ['The energy is used to make the particles vibrate faster while the ice melts', 'That would raise the temperature.'],
      ['The heater switches off automatically until all of the ice has turned to water', 'Energy keeps being supplied.'],
      ['The particles stop moving while the solid structure is broken down into a liquid', 'Particles never stop moving.'],
    ], 0)),
    'c1-states:c2.0': mc('A sealed syringe of gas is heated at constant volume. Why does its pressure rise?', [
      ['Particles move faster, so they hit the walls harder and more often', 'Correct.'],
      ['Particles expand and so take up more of the space inside the syringe', 'Particles do not change size.'],
      ['More gas particles are produced as the temperature of the gas goes up', 'The number is fixed.'],
      ['Particles hit the walls harder, but less often because there is less space', 'The volume is unchanged and collisions are more frequent.'],
    ], 0),
    'c1-diffusion:c0.0': mc('A drop of purple dye is placed in still water and, hours later, the water is evenly coloured. Which statement explains this best?', [
      ['Dye particles moved from a region of higher concentration to lower concentration by random motion', 'Correct: diffusion.'],
      ['Water particles pushed the dye particles away from the centre by flowing steadily outwards', 'Random motion, not a push.'],
      ['The dye particles sank to the bottom and spread out evenly across the base of the beaker', 'Not an explanation.'],
      ['Dye particles moved from a region of lower concentration to higher concentration', 'Net movement is down the gradient.'],
    ], 0),
    'c1-diffusion:c1.0': fig({ svg: 'diffusionTube' }, mc('Ammonia and hydrogen chloride gases are released at opposite ends of a tube. A white ring forms nearer the HCl end. What does this show?', [
      ['NH₃ (Mr 17) particles diffuse faster than HCl (Mr 36.5) particles because they are lighter', 'Correct.'],
      ['HCl (Mr 36.5) particles diffuse faster than NH₃ (Mr 17) particles because they are heavier', 'Heavier particles move more slowly.'],
      ['NH₃ and HCl particles diffuse at the same speed, so the ring forms in the middle', 'The ring is not in the middle.'],
      ['NH₃ particles are more reactive, so the reaction happens before the gases mix', 'Diffusion rate depends on mass.'],
    ], 0)),
    'c1-diffusion:c2.0': mc('Which gas will diffuse fastest at room temperature?', [
      ['Hydrogen, Mr 2', 'Correct: lowest relative molecular mass.'],
      ['Helium, Mr 4', 'Light, but heavier than hydrogen.'],
      ['Oxygen, Mr 32', 'Heavier.'],
      ['Carbon dioxide, Mr 44', 'The heaviest of the four.'],
    ], 0),

    // ---------- Topic 2: atoms and bonding ----------
    'c2-substances:c0.0': mc('Which of these is a compound?', [
      ['Carbon dioxide', 'Correct: two elements chemically bonded.'],
      ['Diamond', 'An element: carbon only.'],
      ['Air', 'A mixture of gases.'],
      ['Brass', 'An alloy, which is a mixture of metals.'],
    ], 0),
    'c2-substances:c1.0': mc('Iron filings and sulfur powder are stirred together. Which statement about the result is correct?', [
      ['It is a mixture, so a magnet can still separate the iron', 'Correct.'],
      ['It is a compound, so a magnet can no longer separate the iron', 'Mixing does not make a compound.'],
      ['It is a compound, so the iron and sulfur have lost their own properties', 'No reaction has happened.'],
      ['It is a mixture, so the iron and sulfur are now chemically bonded', 'A mixture is not bonded.'],
    ], 0),
    'c2-atoms:c0.0': mc('Which particle has a relative charge of −1 and a negligible relative mass?', [
      ['Electron', 'Correct.'],
      ['Proton', 'Charge +1, mass 1.'],
      ['Neutron', 'Charge 0, mass 1.'],
      ['Positron', 'Not part of an atom, and charge +1.'],
    ], 0),
    'c2-atoms:c2.0': fig({ svg: 'bohrModels' }, mc('What is the electronic configuration of magnesium (proton number 12)?', [
      ['2,8,2', 'Correct.'],
      ['2,8,1', 'That is sodium (11).'],
      ['2,10', 'The second shell holds only 8 electrons.'],
      ['2,6,4', 'The shells fill 2, then 8.'],
    ], 0)),
    'c2-atoms:c3.0': mc('An atom has the electronic configuration 2,8,3. Which statement is correct?', [
      ['It is in Group III and period 3', 'Correct: 3 outer electrons, 3 shells.'],
      ['It is in Group III and period 2', 'Period equals the number of shells, which is 3.'],
      ['It is in Group 3 and period 8', 'Period is not the number of electrons in a shell.'],
      ['It is in Group VIII and period 3', 'Group number equals the outer electrons.'],
    ], 0),
    'c2-isotopes:c0.0': mc('Which pair are isotopes of the same element?', [
      ['¹²C and ¹⁴C', 'Correct: same proton number, different neutrons.'],
      ['¹⁴C and ¹⁴N', 'Same nucleon number but different elements.'],
      ['¹²C and ¹²C²⁻', 'Same isotope; one is an ion.'],
      ['¹⁶O and ¹⁸F', 'Different elements.'],
    ], 0),
    'c2-isotopes:c2.0': mc('Why is an isotope with a short half-life chosen as a medical tracer?', [
      ['It stops being radioactive quickly, so it does not stay active in the body for long', 'Correct.'],
      ['It stays radioactive for years, so doctors can track it for a long time', 'That would be harmful.'],
      ['It releases more radiation than any other isotope, so scans are clearer', 'Not the reason.'],
      ['It is chemically different from the element, so the body does not absorb it', 'Isotopes behave chemically the same.'],
    ], 0),
    'c2-ionic:c0.0': mc('A magnesium atom (2,8,2) forms an ion. What are the charge and electronic configuration of the ion?', [
      ['2+ and 2,8', 'Correct: loses two outer electrons.'],
      ['2− and 2,8,4', 'Metals lose electrons.'],
      ['2+ and 2,8,2', 'The configuration changes when electrons are lost.'],
      ['2+ and 2,8,4', 'It loses, not gains, electrons.'],
    ], 0),
    'c2-ionic:c1.0': fig({ svg: 'dotCrossIonic' }, mc('What happens when magnesium reacts with oxygen to form magnesium oxide?', [
      ['Each magnesium atom transfers two electrons to an oxygen atom', 'Correct.'],
      ['Each oxygen atom transfers two electrons to a magnesium atom', 'Metals lose electrons.'],
      ['Magnesium and oxygen atoms share two pairs of electrons equally', 'That is covalent bonding.'],
      ['Each magnesium atom transfers one electron to each of two oxygen atoms', 'Mg gives two electrons to one O atom.'],
    ], 0)),
    'c2-ionic:c2.0': mc('Why does solid sodium chloride not conduct electricity, but molten sodium chloride does?', [
      ['In the solid the ions are fixed in place, but in the liquid they are free to move', 'Correct.'],
      ['In the solid there are no ions, but in the liquid ions are formed on melting', 'The ions exist in the solid.'],
      ['In the solid the electrons are fixed, but in the liquid delocalised electrons move', 'Ionic compounds carry charge by ions.'],
      ['In the solid the ions are too small to carry charge, but in the liquid they grow', 'Not an explanation.'],
    ], 0),
    'c2-ionic:c3.0': mc('What is the formula of aluminium oxide? (Ions: Al³⁺ and O²⁻)', [
      ['Al₂O₃', 'Correct: 2 × 3+ balances 3 × 2−.'],
      ['Al₃O₂', 'Subscripts are the wrong way round.'],
      ['AlO', 'The charges do not balance.'],
      ['Al₂O₂', 'Charges are 6+ and 4−.'],
    ], 0),
    'c2-covalent:c0.0': fig({ svg: 'dotCrossCovalent' }, mc('How many pairs of electrons are shared between the two nitrogen atoms in N₂?', [
      ['3 pairs, making a triple bond', 'Correct: each N needs 3 more electrons.'],
      ['2 pairs, making a double bond', 'That would leave each atom short of eight.'],
      ['1 pair, making a single bond', 'Too few to complete the shells.'],
      ['5 pairs, using all of the outer electrons', 'Each N has five outer electrons, but only three are shared.'],
    ], 0)),
    'c2-covalent:c1.0': mc('Which molecule contains a double bond between the central atom and each outer atom?', [
      ['Carbon dioxide, CO₂', 'Correct: O=C=O.'],
      ['Methane, CH₄', 'Four single bonds.'],
      ['Water, H₂O', 'Two single bonds.'],
      ['Ammonia, NH₃', 'Three single bonds.'],
    ], 0),
    'c2-covalent:c2.0': mc('Methane has a boiling point of −162 °C. Which statement explains this?', [
      ['Forces between methane molecules are weak, so little energy is needed to separate them', 'Correct.'],
      ['The covalent bonds inside each methane molecule are weak and easily broken', 'Covalent bonds are strong; they are not broken.'],
      ['Methane forms a giant structure that is held together by weak covalent bonds', 'Methane is simple molecular.'],
      ['Forces between methane molecules are strong, but there are very few molecules', 'The forces are weak.'],
    ], 0),
    'c2-giant:c0.0': fig({ svg: 'giantStructures' }, mc('Why does diamond have a very high melting point and is very hard?', [
      ['Each carbon atom is held to four others by strong covalent bonds in a giant lattice', 'Correct.'],
      ['Each carbon atom is held to three others by strong bonds in layers', 'That is graphite.'],
      ['Positive carbon ions are held in a lattice by delocalised electrons', 'That is metallic bonding.'],
      ['Strong forces between small molecules of carbon hold them in place', 'Diamond is not simple molecular.'],
    ], 0)),
    'c2-giant:c1.0': mc('Why can graphite be used as an electrode?', [
      ['It has delocalised electrons that can move and carry charge', 'Correct.'],
      ['It has free ions that move through the solid and carry charge', 'It has no ions.'],
      ['It is very hard, so it does not wear away when current flows through it', 'Graphite is soft; hardness is not the reason.'],
      ['It has a very high melting point, so it conducts at all temperatures', 'Melting point does not explain conduction.'],
    ], 0),
    'c2-metallic:c0.0': fig({ svg: 'metallic' }, mc('Which particles are present in a metal lattice?', [
      ['Positive ions surrounded by delocalised electrons', 'Correct.'],
      ['Positive and negative ions held by strong attraction', 'That is an ionic compound.'],
      ['Neutral atoms joined by shared pairs of electrons', 'That is a covalent structure.'],
      ['Negative ions surrounded by delocalised protons', 'Protons are in nuclei and do not move.'],
    ], 0)),
    'c2-metallic:c1.0': mc('Why can a metal be hammered into shape without shattering?', [
      ['Layers of positive ions can slide while delocalised electrons keep them bonded', 'Correct.'],
      ['Layers of ions slide until like charges meet, so the lattice repels and breaks', 'That explains why ionic solids shatter.'],
      ['The delocalised electrons freeze in place, which stops the layers from sliding', 'They remain mobile.'],
      ['The ions form covalent bonds with their neighbours, which re-form as they move', 'Metals are not covalent.'],
    ], 0),

    // ---------- Topic 3: chemical reactions and quantities ----------
    'c3-formulae:c0.0': mc('How many atoms in total are shown in the formula Ca(OH)₂?', [
      ['5', 'Correct: 1 Ca + 2 O + 2 H.'],
      ['4', 'The bracket multiplies both O and H.'],
      ['3', 'Counts the three elements, not atoms.'],
      ['6', 'Counts the bracket 2 as an extra atom.'],
    ], 0),
    'c3-formulae:c1.0': mc('Which is the correctly balanced equation for the formation of water?', [
      ['2H₂ + O₂ → 2H₂O', 'Correct.'],
      ['H₂ + O₂ → H₂O', 'Oxygen atoms not balanced.'],
      ['2H + O → 2HO', 'Wrong formulae.'],
      ['H₂ + O₂ → H₂O₂', 'Makes hydrogen peroxide, not water.'],
    ], 0),
    'c3-formulae:c2.0': mc('In AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq), which ions are spectator ions?', [
      ['Na⁺ and NO₃⁻', 'Correct: they stay dissolved and do not change.'],
      ['Ag⁺ and Cl⁻', 'They form the precipitate.'],
      ['Ag⁺ and NO₃⁻', 'Silver ions react.'],
      ['Na⁺ and Cl⁻', 'Chloride ions react.'],
    ], 0),
    'c3-mole:c6.0': mc('A compound contains 40.0% C, 6.7% H and 53.3% O by mass. What is its empirical formula? (Aᵣ: C = 12, H = 1, O = 16)', [
      ['CH₂O', 'Correct: ratios 3.33 : 6.7 : 3.33 simplify to 1 : 2 : 1.'],
      ['C₂H₄O₂', 'This is the molecular formula, not the simplest ratio.'],
      ['CHO', 'Hydrogen should be twice carbon.'],
      ['C₃H₇O₃', 'Percentages were not divided by Aᵣ.'],
    ], 0),

    // ---------- Topic 4: electrochemistry ----------
    'c4-electrolysis:c0.0': fig({ svg: 'electrolysis' }, mc('During electrolysis, which electrode do negative ions move towards, and why?', [
      ['The anode, because it is positive', 'Correct: opposite charges attract.'],
      ['The cathode, because it is positive', 'The cathode is negative.'],
      ['The anode, because it is negative', 'The anode is positive.'],
      ['The cathode, because it is negative', 'Negative ions are repelled by the cathode.'],
    ], 0)),
    'c4-electrolysis:c1.0': mc('Molten zinc chloride is electrolysed. What forms at each electrode?', [
      ['Zinc at the cathode and chlorine at the anode', 'Correct.'],
      ['Chlorine at the cathode and zinc at the anode', 'Metals form at the cathode.'],
      ['Hydrogen at the cathode and chlorine at the anode', 'There is no water in a molten salt.'],
      ['Zinc at the cathode and oxygen at the anode', 'No oxygen is available.'],
    ], 0),
    'c4-electrolysis:c2.0': mc('Concentrated aqueous sodium chloride is electrolysed. Which products form at the cathode and anode?', [
      ['Hydrogen at the cathode and chlorine at the anode', 'Correct.'],
      ['Sodium at the cathode and chlorine at the anode', 'Sodium is more reactive than hydrogen.'],
      ['Hydrogen at the cathode and oxygen at the anode', 'Chloride ions are discharged when concentrated.'],
      ['Sodium at the cathode and oxygen at the anode', 'Neither product is correct here.'],
    ], 0),
    'c4-electrolysis:c3.0': mc('Which half-equation correctly shows chlorine forming at the anode?', [
      ['2Cl⁻ → Cl₂ + 2e⁻', 'Correct: oxidation, electrons lost.'],
      ['Cl₂ + 2e⁻ → 2Cl⁻', 'Reduction; electrons gained.'],
      ['Cl⁻ → Cl + e⁻', 'Chlorine forms as Cl₂ molecules.'],
      ['2Cl⁻ + 2e⁻ → Cl₂', 'The electrons must be on the right.'],
    ], 0),
    'c4-electrolysis:c4.0': mc('A student wants to copper-plate a key. How should the cell be set up?', [
      ['The key as the cathode and a copper anode in copper(II) sulfate solution', 'Correct.'],
      ['The key as the anode and a copper cathode in copper(II) sulfate solution', 'Copper deposits on the cathode.'],
      ['The key as the cathode and a carbon anode in sodium sulfate solution', 'The solution must contain copper ions.'],
      ['The key as the anode and a carbon cathode in copper(II) sulfate solution', 'The key would dissolve.'],
    ], 0),
    'c4-fuelcell:c0.0': fig({ svg: 'fuelCell' }, mc('What is the only product of a hydrogen–oxygen fuel cell?', [
      ['Water', 'Correct.'],
      ['Carbon dioxide', 'No carbon is involved.'],
      ['Hydrogen peroxide', 'Not the product.'],
      ['Steam and carbon monoxide', 'No carbon is involved.'],
    ], 0)),
    'c4-fuelcell:c1.0': mc('Which is a disadvantage of hydrogen fuel cells in cars?', [
      ['Hydrogen is difficult to store safely and to distribute', 'Correct.'],
      ['The only waste product is carbon dioxide from the exhaust', 'The waste product is water.'],
      ['The fuel cell has to be recharged by plugging it in for hours', 'It is refuelled with hydrogen.'],
      ['The car produces more pollution at the exhaust than a petrol car', 'Fuel cells produce no pollutant at the exhaust.'],
    ], 0),

    // ---------- Topic 5: chemical energetics ----------
    'c5-energetics:c0.0': mc('Two solutions are mixed and the temperature falls from 22 °C to 15 °C. What type of reaction is this?', [
      ['Endothermic, as energy is taken in from the surroundings', 'Correct.'],
      ['Exothermic, as energy is taken in from the surroundings', 'Exothermic reactions release energy.'],
      ['Endothermic, as energy is released to the surroundings', 'Energy is absorbed.'],
      ['Exothermic, as energy is released and the mixture cools', 'Releasing energy warms the surroundings.'],
    ], 0),
    'c5-energetics:c1.0': fig({ svg: 'reactionProfile' }, mc('On a reaction profile the products are at a lower energy than the reactants. Which statement is correct?', [
      ['The reaction is exothermic, and ΔH is negative', 'Correct.'],
      ['The reaction is endothermic, and ΔH is negative', 'Endothermic has positive ΔH.'],
      ['The reaction is exothermic, and ΔH is positive', 'Exothermic has negative ΔH.'],
      ['The reaction is endothermic, and ΔH is positive', 'Products are lower in energy.'],
    ], 0)),

    // ---------- Topic 6: chemical reactions ----------
    'c6-changes:c0.0': mc('Which of these is a chemical change?', [
      ['Magnesium burning in air', 'Correct: a new substance forms.'],
      ['Ice melting on a warm day', 'A physical change.'],
      ['Salt dissolving in water', 'A physical change.'],
      ['Water boiling in a kettle', 'A physical change.'],
    ], 0),
    'c6-rate:c0.0': mc('Which measurement could be used to follow the rate of reaction between calcium carbonate and hydrochloric acid?', [
      ['The volume of carbon dioxide collected over time', 'Correct.'],
      ['The mass of calcium carbonate left, measured only at the end', 'One reading does not give a rate.'],
      ['The final colour of the solution once the reaction has stopped', 'Colour does not change.'],
      ['The temperature of the room during the experiment', 'Not a measure of rate.'],
    ], 0),
    'c6-rate:c1.0': mc('Why does powdered calcium carbonate react faster with acid than the same mass of lumps?', [
      ['A larger surface area means more collisions per second', 'Correct.'],
      ['Powder particles have more energy, so a larger fraction of collisions are successful', 'Energy of the particles is unchanged.'],
      ['Powder has a lower activation energy than lumps of the same substance', 'Activation energy does not change.'],
      ['There are more calcium carbonate particles in the same mass of powder', 'The same mass has the same number of particles.'],
    ], 0),
    'c6-rate:c2.0': mc('Why does increasing the temperature increase the rate of reaction?', [
      ['More frequent collisions, and a greater proportion with at least the activation energy', 'Correct.'],
      ['More frequent collisions only, as each collision has the same chance of success', 'A larger fraction also becomes successful.'],
      ['A lower activation energy, so more collisions result in a reaction', 'Temperature does not change activation energy.'],
      ['More particles in the same volume, so there are more collisions per second', 'Temperature does not change the number of particles.'],
    ], 0),
    'c6-rate:c3.0': fig({ svg: 'rateGraph' }, mc('On a graph, curve X is steeper than curve Y but both finish at the same volume. What does this show?', [
      ['X is faster, and the same total amount of product forms', 'Correct.'],
      ['X is faster, and more product forms than in Y', 'The final volumes match.'],
      ['X is slower, and the same total amount of product forms', 'A steeper line means faster.'],
      ['X uses more reactant, and so forms more product', 'Same final volume.'],
    ], 0)),
    'c6-rate:c4.0': mc('What does a catalyst do to a reaction?', [
      ['It provides an alternative pathway with a lower activation energy and is not used up', 'Correct.'],
      ['It raises the temperature of the mixture so that more collisions are successful', 'It does not heat the mixture.'],
      ['It is used up in the reaction, but increases the amount of product formed', 'It is not used up and does not change yield.'],
      ['It lowers the energy of the reactants so the reaction becomes less exothermic', 'It does not change ΔH.'],
    ], 0),
    'c6-rate:c5.0': mc('Which statement about photosynthesis is correct?', [
      ['Light is absorbed by chlorophyll and used to make glucose and oxygen', 'Correct.'],
      ['Heat is absorbed by chlorophyll and used to make carbon dioxide', 'Wrong energy and products.'],
      ['Light is released by chlorophyll as glucose is broken down', 'That is the reverse.'],
      ['Chlorophyll is made from the glucose which the plant takes in through roots', 'Plants make glucose.'],
    ], 0),
    'c6-equilibrium:c0.0': mc('White anhydrous copper(II) sulfate turns blue when a liquid is added. What does this show?', [
      ['The liquid contains water, but it may not be pure water', 'Correct.'],
      ['The liquid is pure water, as it is the only liquid that gives this change', 'It shows water is present, not purity.'],
      ['The liquid is an acid, as acids make copper compounds change colour', 'The test is for water.'],
      ['The liquid is a salt solution, as the blue colour is from the dissolved salt', 'The test is for water.'],
    ], 0),
    'c6-equilibrium:c1.0': mc('Which statement describes a system at equilibrium?', [
      ['Forward and reverse reactions occur at the same rate, so concentrations stay constant', 'Correct.'],
      ['The reactions have stopped, so the concentrations of all substances are equal', 'Reactions continue.'],
      ['The forward reaction is faster, so the concentration of products keeps rising', 'That is not equilibrium.'],
      ['Forward and reverse reactions occur at the same rate, so reactants and products are equal in amount', 'Amounts do not have to be equal.'],
    ], 0),
    'c6-equilibrium:c2.0': mc('For N₂ + 3H₂ ⇌ 2NH₃ the forward reaction is exothermic. What happens to the yield of ammonia if the temperature is raised?', [
      ['It decreases, because the endothermic reverse reaction is favoured', 'Correct.'],
      ['It increases, because the exothermic forward reaction is favoured', 'Raising temperature favours the endothermic direction.'],
      ['It stays the same, because the temperature does not affect equilibrium', 'It does shift the position.'],
      ['It increases, because particles collide with more energy', 'Rate rises but yield falls.'],
    ], 0),
    'c6-equilibrium:c3.0': mc('Why is a temperature of about 450 °C used in the Haber process?', [
      ['It is a compromise between a reasonable rate and a reasonable yield', 'Correct.'],
      ['It gives the highest possible yield of ammonia at equilibrium', 'Lower temperatures give a higher yield.'],
      ['It is the temperature at which the iron catalyst melts and works best', 'The catalyst stays solid.'],
      ['It is needed to make the reaction exothermic in the forward direction', 'The reaction is already exothermic.'],
    ], 0),
    'c6-equilibrium:c4.0': mc('Which catalyst is used in the Contact process?', [
      ['Vanadium(V) oxide', 'Correct.'],
      ['Iron', 'The Haber process.'],
      ['Nickel', 'Used in hydrogenation.'],
      ['Platinum', 'Used in catalytic converters.'],
    ], 0),
    'c6-redox:c0.0': mc('In Mg + Cu²⁺ → Mg²⁺ + Cu, which species is oxidised and why?', [
      ['Magnesium, because it loses electrons', 'Correct.'],
      ['Copper ions, because they lose electrons', 'Copper ions gain electrons.'],
      ['Magnesium, because it gains electrons', 'Oxidation is loss of electrons.'],
      ['Copper ions, because they gain electrons', 'They are reduced, not oxidised.'],
    ], 0),
    'c6-redox:c2.0': mc('Acidified potassium manganate(VII) changes from purple to colourless. What does this show?', [
      ['It has been reduced, so a reducing agent is present', 'Correct.'],
      ['It has been oxidised, so a reducing agent is present', 'It gains electrons: reduction.'],
      ['It has been reduced, so an oxidising agent is present', 'The agent is a reducing agent.'],
      ['It has been oxidised, so an oxidising agent is present', 'Wrong in both parts.'],
    ], 0),
    'c6-redox:c3.0': mc('In Fe₂O₃ + 3CO → 2Fe + 3CO₂, which substance is the reducing agent?', [
      ['Carbon monoxide, because it removes oxygen and is oxidised', 'Correct.'],
      ['Iron(III) oxide, because it loses oxygen and is reduced', 'It is the oxidising agent.'],
      ['Carbon dioxide, because it is the product containing oxygen', 'A product is not a reducing agent.'],
      ['Iron, because it is the element which is formed', 'Iron is the product.'],
    ], 0),

    // ---------- Topic 7: acids, bases and salts ----------
    'c7-acids:c0.0': fig({ svg: 'phScale' }, mc('A solution turns blue litmus red and universal indicator orange. What is its likely pH?', [
      ['About 3, a weak or dilute acid', 'Correct.'],
      ['About 7, a neutral solution', 'Neutral does not turn litmus red.'],
      ['About 10, a weak alkali', 'Alkalis turn red litmus blue.'],
      ['About 13, a strong alkali', 'Alkalis turn red litmus blue.'],
    ], 0)),
    'c7-acids:c1.0': mc('Hydrochloric acid reacts with calcium carbonate. What are the products?', [
      ['Calcium chloride, water and carbon dioxide', 'Correct.'],
      ['Calcium chloride and hydrogen', 'That is acid with a metal.'],
      ['Calcium chloride and water only', 'That is acid with a base.'],
      ['Calcium hydroxide, water and carbon dioxide', 'The acid gives a chloride.'],
    ], 0),
    'c7-acids:c2.0': mc('Why does 0.1 mol/dm³ ethanoic acid have a higher pH than 0.1 mol/dm³ hydrochloric acid?', [
      ['Ethanoic acid is only partially ionised, so fewer H⁺ ions are produced', 'Correct.'],
      ['Ethanoic acid is more concentrated, so it produces fewer H⁺ ions', 'The concentrations are equal.'],
      ['Ethanoic acid is fully ionised, so it produces more H⁺ ions per mole', 'It is a weak acid.'],
      ['Ethanoic acid has no H⁺ ions, so the solution is close to neutral', 'It does have some H⁺ ions.'],
    ], 0),
    'c7-oxides:c0.0': mc('Which oxide reacts with both hydrochloric acid and sodium hydroxide?', [
      ['Aluminium oxide, which is amphoteric', 'Correct.'],
      ['Magnesium oxide, which is basic', 'Reacts with acids only.'],
      ['Sulfur dioxide, which is acidic', 'Reacts with alkalis only.'],
      ['Carbon monoxide, which is neutral', 'Reacts with neither.'],
    ], 0),
    'c7-salts:c0.0': mc('Why is an excess of copper(II) oxide added to sulfuric acid when making copper(II) sulfate?', [
      ['To make sure all of the acid has reacted', 'Correct: the excess solid is then filtered off.'],
      ['To make sure all of the copper(II) oxide has reacted', 'It is deliberately in excess.'],
      ['To raise the temperature of the mixture so that crystals form', 'Not the reason.'],
      ['To make the solution more acidic before crystals are formed', 'The excess base neutralises the acid.'],
    ], 0),
    'c7-salts:c1.0': mc('A salt is made by titration. Why is the titration repeated without the indicator?', [
      ['So the salt crystals are not contaminated with indicator', 'Correct.'],
      ['So the indicator can be used again in the next experiment', 'Not the reason.'],
      ['So the acid and alkali react more completely than before', 'The indicator does not affect reaction.'],
      ['So the solution becomes neutral without any excess of either reagent', 'It was already neutral at the end point.'],
    ], 0),
    'c7-salts:c2.0': mc('Which pair of solutions could be mixed to make a precipitate of lead(II) iodide?', [
      ['Lead(II) nitrate and potassium iodide', 'Correct: both soluble, product insoluble.'],
      ['Lead(II) carbonate and potassium iodide', 'Lead carbonate is insoluble.'],
      ['Lead(II) nitrate and potassium nitrate', 'No iodide ions.'],
      ['Lead(II) sulfate and sodium iodide', 'Lead sulfate is insoluble.'],
    ], 0),
    'c7-salts:c3.0': mc('Which of these compounds is insoluble in water?', [
      ['Barium sulfate', 'Correct.'],
      ['Sodium chloride', 'All sodium salts are soluble.'],
      ['Potassium nitrate', 'All nitrates are soluble.'],
      ['Ammonium chloride', 'All ammonium salts are soluble.'],
    ], 0),

    // ---------- Topic 8: the Periodic Table ----------
    'c8-table:c0.0': mc('Which statement about the Periodic Table is correct?', [
      ['Elements in the same group have the same number of outer electrons', 'Correct.'],
      ['Elements in the same period have the same number of outer electrons', 'Period equals the number of shells.'],
      ['Elements in the same group have the same number of electron shells', 'Same group, same outer electrons.'],
      ['Elements are arranged in order of increasing relative atomic mass only', 'They are ordered by proton number.'],
    ], 0),
    'c8-group1:c0.0': mc('How do the melting points of the Group I metals change down the group?', [
      ['They decrease', 'Correct.'],
      ['They increase', 'This is Group VII.'],
      ['They stay about the same', 'They change noticeably.'],
      ['They increase and then decrease', 'A steady trend.'],
    ], 0),
    'c8-group1:c1.0': mc('Which metal reacts most vigorously with water?', [
      ['Potassium', 'Correct: the most reactive in Group I.'],
      ['Lithium', 'The least reactive in the group.'],
      ['Sodium', 'Reactive, but less than potassium.'],
      ['Calcium', 'Group II, less reactive than potassium.'],
    ], 0),
    'c8-group7:c0.0': mc('What is the physical state of bromine at room temperature?', [
      ['A red-brown liquid', 'Correct.'],
      ['A pale green gas', 'Chlorine.'],
      ['A grey-black solid', 'Iodine.'],
      ['A colourless gas', 'Not a halogen.'],
    ], 0),
    'c8-group7:c1.0': mc('Chlorine is bubbled through potassium bromide solution. What happens?', [
      ['The solution turns orange-brown as bromine is displaced', 'Correct.'],
      ['The solution turns pale green as chlorine dissolves', 'Chlorine displaces bromine.'],
      ['The solution turns purple as iodine is displaced', 'No iodide present.'],
      ['Nothing happens because bromine is more reactive than chlorine', 'Chlorine is more reactive.'],
    ], 0),
    'c8-transition:c0.0': mc('Which property is typical of a transition element but not of a Group I metal?', [
      ['It forms coloured compounds and has several oxidation states', 'Correct.'],
      ['It is a good conductor of electricity and heat', 'Both conduct.'],
      ['It has a low density and is stored under oil', 'That is a Group I property.'],
      ['It reacts vigorously with cold water to give hydrogen', 'That is a Group I property.'],
    ], 0),
    'c8-noble:c0.0': mc('Why is argon used inside filament light bulbs?', [
      ['It is unreactive, so it stops the hot filament reacting with oxygen', 'Correct.'],
      ['It is a good conductor, so it passes current to the hot filament', 'It does not conduct.'],
      ['It reacts with the filament and forms a protective coating', 'It does not react.'],
      ['It glows when current flows, so it lights the bulb for us', 'The filament glows.'],
    ], 0),

    // ---------- Topic 9: metals ----------
    'c9-props:c0.0': mc('Which property is typical of a metal?', [
      ['It conducts electricity and can be drawn into a wire', 'Correct.'],
      ['It is brittle and breaks easily when hit with a hammer', 'Metals are malleable.'],
      ['It has a low melting point and a low boiling point', 'Most have high melting points.'],
      ['It forms acidic oxides when it burns in air', 'Metal oxides are basic.'],
    ], 0),
    'c9-props:c1.0': mc('Why is copper used for electrical wiring?', [
      ['It is an excellent electrical conductor and is ductile', 'Correct.'],
      ['It is the cheapest metal available and conducts better than any other', 'Silver conducts better; cost is not the reason given.'],
      ['It is magnetic, so the wire stays in place around a circuit', 'Copper is not magnetic.'],
      ['It is a poor conductor of heat, so the wire stays cool', 'Copper conducts heat well.'],
    ], 0),
    'c9-alloys:c0.0': mc('Why is an alloy harder than the pure metal?', [
      ['Atoms of different sizes stop the layers of atoms from sliding over each other', 'Correct.'],
      ['Atoms of the same size pack so closely that the layers cannot slide', 'An alloy has different-sized atoms.'],
      ['Extra delocalised electrons make the bonds between layers stronger', 'The electron arrangement is not the reason.'],
      ['The alloy forms covalent bonds that join the layers of atoms together', 'Alloys are still metallic.'],
    ], 0),
    'c9-reactivity:c0.0': fig({ svg: 'reactivitySeries' }, mc('Which of these metals is the most reactive?', [
      ['Calcium', 'Correct.'],
      ['Magnesium', 'Less reactive than calcium.'],
      ['Zinc', 'Much less reactive.'],
      ['Iron', 'Much less reactive.'],
    ], 0)),
    'c9-reactivity:c1.0': mc('Which metal does not react with dilute hydrochloric acid?', [
      ['Copper', 'Correct: below hydrogen in the series.'],
      ['Zinc', 'Reacts to give hydrogen.'],
      ['Iron', 'Reacts slowly to give hydrogen.'],
      ['Magnesium', 'Reacts vigorously.'],
    ], 0),
    'c9-reactivity:c2.0': mc('Iron nails are placed in blue copper(II) sulfate solution. What is observed?', [
      ['The nails become coated with brown copper and the blue colour fades', 'Correct: iron displaces copper.'],
      ['The nails become coated with grey iron and the blue colour gets darker', 'The nails are iron already.'],
      ['The nails dissolve completely and a green gas is given off', 'No gas is made.'],
      ['Nothing happens because copper is more reactive than iron', 'Iron is more reactive.'],
    ], 0),
    'c9-reactivity:c3.0': mc('What happens when copper(II) carbonate is strongly heated?', [
      ['It forms black copper(II) oxide and carbon dioxide', 'Correct.'],
      ['It forms copper metal and carbon dioxide', 'Copper does not form on heating.'],
      ['It forms blue copper(II) sulfate and water', 'No sulfate is present.'],
      ['Nothing happens because carbonates are stable to heat', 'Copper carbonate decomposes.'],
    ], 0),
    'c9-corrosion:c0.0': mc('Which conditions will make an iron nail rust fastest?', [
      ['Air and salty water', 'Correct.'],
      ['Dry air only', 'Water is needed.'],
      ['Boiled (air-free) water with a layer of oil', 'No oxygen.'],
      ['Air and distilled water', 'Slower than with salt.'],
    ], 0),
    'c9-corrosion:c1.0': mc('Why do ship hulls have blocks of magnesium or zinc attached?', [
      ['The more reactive metal corrodes instead of the iron, protecting it', 'Correct: sacrificial protection.'],
      ['The blocks form a waterproof coating which keeps the water off the hull', 'They do not coat the hull.'],
      ['The blocks make the hull less dense, so the ship floats higher in water', 'Not the reason.'],
      ['The less reactive metal corrodes first, which protects the iron', 'The more reactive metal corrodes.'],
    ], 0),
    'c9-extraction:c0.0': mc('Why is aluminium extracted by electrolysis rather than by heating with carbon?', [
      ['Aluminium is more reactive than carbon, so carbon cannot reduce its oxide', 'Correct.'],
      ['Aluminium is less reactive than carbon, so electrolysis is cheaper', 'It is more reactive.'],
      ['Aluminium oxide has a low melting point, so it is easy to electrolyse', 'It has a very high melting point.'],
      ['Aluminium ore is rare, so a method with no waste has to be used', 'Not the reason.'],
    ], 0),
    'c9-extraction:c1.0': fig({ svg: 'blastFurnace' }, mc('What is the role of limestone in the blast furnace?', [
      ['It removes acidic impurities such as sand by forming slag', 'Correct.'],
      ['It reduces iron ore to iron by removing oxygen from it', 'Carbon monoxide is the reducing agent.'],
      ['It burns to give the heat needed to reach the furnace temperature', 'Coke burns.'],
      ['It reacts with carbon dioxide to make the carbon monoxide needed', 'Carbon and carbon dioxide make CO.'],
    ], 0)),
    'c9-extraction:c2.0': mc('Why must the carbon anodes in aluminium extraction be replaced regularly?', [
      ['Oxygen formed at the anode reacts with the hot carbon and burns it away', 'Correct.'],
      ['The carbon dissolves in the molten cryolite and becomes part of the aluminium', 'It burns away as carbon dioxide.'],
      ['The aluminium plates onto the anodes and makes them too heavy', 'Aluminium forms at the cathode.'],
      ['Carbon is reduced at the anode, so it is used up in the reaction', 'Oxidation happens at the anode.'],
    ], 0),

    // ---------- Topic 10: chemistry of the environment ----------
    'c10-water:c0.0': mc('Why is chlorine added to the water supply?', [
      ['To kill harmful microorganisms', 'Correct.'],
      ['To remove dissolved salts from the water', 'Not what chlorine does.'],
      ['To make the water softer for washing', 'Not what chlorine does.'],
      ['To remove solid particles from the water', 'Filtration does this.'],
    ], 0),
    'c10-fertilisers:c0.0': mc('Which element in a fertiliser helps plants to make proteins for growth?', [
      ['Nitrogen', 'Correct.'],
      ['Phosphorus', 'Helps roots and energy transfer.'],
      ['Potassium', 'Helps flowering and fruiting.'],
      ['Sulfur', 'Not one of the main three.'],
    ], 0),
    'c10-air:c0.0': mc('Which gas makes up about 78% of clean dry air?', [
      ['Nitrogen', 'Correct.'],
      ['Oxygen', 'About 21%.'],
      ['Argon', 'About 1%.'],
      ['Carbon dioxide', 'About 0.04%.'],
    ], 0),
    'c10-air:c1.0': mc('Which pollutant is produced by the incomplete combustion of fuels?', [
      ['Carbon monoxide', 'Correct.'],
      ['Sulfur dioxide', 'From sulfur impurities.'],
      ['Nitrogen dioxide', 'From high-temperature engines.'],
      ['Methane', 'Not a combustion pollutant.'],
    ], 0),
    'c10-air:c2.0': mc('What does a catalytic converter change carbon monoxide and nitrogen monoxide into?', [
      ['Carbon dioxide and nitrogen', 'Correct.'],
      ['Carbon and nitrogen dioxide', 'Not the products.'],
      ['Carbon dioxide and nitrogen dioxide', 'Nitrogen dioxide is itself a pollutant.'],
      ['Carbon and oxygen', 'Not the products.'],
    ], 0),
    'c10-air:c3.0': mc('Why do greenhouse gases cause warming of the atmosphere?', [
      ['They absorb infrared radiation from the Earth and re-emit it, trapping energy', 'Correct.'],
      ['They absorb ultraviolet radiation from the Sun before it reaches the surface', 'That is the ozone layer.'],
      ['They reflect all of the Sun’s incoming radiation back into space', 'That would cool the Earth.'],
      ['They react with oxygen in the air and release heat during the reaction', 'Not the mechanism.'],
    ], 0),
    'c10-air:c4.0': mc('What are the products of the complete combustion of methane?', [
      ['Carbon dioxide and water', 'Correct.'],
      ['Carbon monoxide and water', 'Incomplete combustion.'],
      ['Carbon and water', 'Incomplete combustion.'],
      ['Carbon dioxide and hydrogen', 'Hydrogen burns to water.'],
    ], 0),

    // ---------- Topic 11: organic chemistry ----------
    'c11-intro:c1.0': fig({ svg: 'organicFormulae' }, mc('Which pair are isomers?', [
      ['Butane and methylpropane, both C₄H₁₀', 'Correct: same formula, different structures.'],
      ['Ethane and ethene, C₂H₆ and C₂H₄', 'Different formulae.'],
      ['Propane and propene, C₃H₈ and C₃H₆', 'Different formulae.'],
      ['Methane and ethane, CH₄ and C₂H₆', 'Different formulae.'],
    ], 0)),
    'c11-intro:c2.0': mc('What is the functional group in an alkene?', [
      ['A carbon–carbon double bond, C=C', 'Correct.'],
      ['A carbon–carbon single bond, C–C', 'That is in alkanes.'],
      ['A hydroxyl group, –OH', 'That is in alcohols.'],
      ['A carboxyl group, –COOH', 'That is in carboxylic acids.'],
    ], 0),
    'c11-naming:c0.0': mc('What is the name of the compound with the formula CH₃CH₂CH₂OH?', [
      ['Propan-1-ol (propanol)', 'Correct: three carbons and an –OH group.'],
      ['Propanoic acid', 'That would contain –COOH.'],
      ['Propene', 'No double bond.'],
      ['Ethanol', 'Only two carbons.'],
    ], 0),
    'c11-fuels:c0.0': mc('What is the main component of natural gas?', [
      ['Methane', 'Correct.'],
      ['Ethane', 'A minor component.'],
      ['Propane', 'A minor component.'],
      ['Butane', 'A minor component.'],
    ], 0),
    'c11-fuels:c1.0': fig({ svg: 'fractionalDistillation' }, mc('Which fraction of crude oil has the longest carbon chains?', [
      ['Bitumen', 'Correct: collected at the bottom.'],
      ['Petrol (gasoline)', 'Short chains.'],
      ['Kerosene', 'Medium chains.'],
      ['Diesel oil', 'Longer than petrol, shorter than bitumen.'],
    ], 0)),
    'c11-fuels:c2.0': mc('Which fraction of petroleum is used for making road surfaces?', [
      ['Bitumen', 'Correct.'],
      ['Diesel oil', 'A fuel for engines.'],
      ['Kerosene', 'Aircraft fuel.'],
      ['Lubricating oil', 'Used in engines and machinery.'],
    ], 0),
    'c11-alkanes:c0.0': mc('Methane reacts with chlorine in sunlight. What type of reaction is this?', [
      ['Substitution', 'Correct: a hydrogen atom is replaced by chlorine.'],
      ['Addition', 'This happens with alkenes.'],
      ['Combustion', 'No burning takes place.'],
      ['Polymerisation', 'Not a polymer-forming reaction.'],
    ], 0),
    'c11-alkenes:c0.0': mc('Why is cracking carried out in oil refineries?', [
      ['To turn long, less useful hydrocarbons into short fuels and alkenes', 'Correct.'],
      ['To join short hydrocarbons into long ones that are more useful', 'That is polymerisation.'],
      ['To remove sulfur from crude oil before it is separated by distillation', 'That is desulfurisation.'],
      ['To separate crude oil into fractions with different boiling points', 'That is fractional distillation.'],
    ], 0),
    'c11-alkenes:c1.0': mc('Which result shows that a hydrocarbon is an alkene?', [
      ['Bromine water changes from orange-brown to colourless', 'Correct.'],
      ['Bromine water stays orange-brown', 'This shows an alkane.'],
      ['Limewater turns cloudy when the hydrocarbon is burned', 'All hydrocarbons make carbon dioxide.'],
      ['Universal indicator turns red when the hydrocarbon is added', 'Hydrocarbons are neutral.'],
    ], 0),
    'c11-alcohols:c0.0': mc('What are the conditions for fermentation of glucose to ethanol?', [
      ['Yeast, about 30 °C and no oxygen', 'Correct.'],
      ['Yeast, about 30 °C and plenty of oxygen', 'Oxygen would produce carbon dioxide and water.'],
      ['Phosphoric acid, 300 °C and high pressure', 'That is hydration of ethene.'],
      ['Yeast, about 100 °C and no oxygen', 'Yeast is killed at high temperature.'],
    ], 0),
    'c11-alcohols:c1.0': mc('Which is an advantage of making ethanol by hydration of ethene rather than by fermentation?', [
      ['It is faster and gives pure ethanol', 'Correct.'],
      ['It uses a renewable raw material that grows each year', 'Ethene comes from crude oil.'],
      ['It happens at room temperature without needing a catalyst', 'It needs a catalyst and high temperature.'],
      ['It uses less energy than any other method of making ethanol', 'It uses more energy.'],
    ], 0),
    'c11-acids:c0.0': mc('How can ethanoic acid be made from ethanol?', [
      ['By oxidation, for example with acidified potassium manganate(VII)', 'Correct.'],
      ['By reduction, for example with hydrogen and a nickel catalyst', 'That would give an alkane or alcohol.'],
      ['By hydration with steam and a phosphoric acid catalyst', 'That makes ethanol from ethene.'],
      ['By addition of bromine water at room temperature', 'That tests for alkenes.'],
    ], 0),
    'c11-acids:c1.0': mc('Ethanoic acid reacts with ethanol with a little concentrated sulfuric acid. What is formed?', [
      ['Ethyl ethanoate and water', 'Correct: an ester.'],
      ['Ethanol and carbon dioxide', 'Not the products.'],
      ['Ethyl ethanoate and hydrogen', 'Water forms, not hydrogen.'],
      ['Ethane and water', 'Not the products.'],
    ], 0),
    'c11-polymers:c0.0': fig({ svg: 'polymerisation' }, mc('Which monomer is used to make poly(ethene)?', [
      ['Ethene', 'Correct.'],
      ['Ethane', 'Saturated, cannot polymerise.'],
      ['Propene', 'Makes poly(propene).'],
      ['Ethanol', 'An alcohol, not the monomer.'],
    ], 0)),
    'c11-polymers:c1.0': mc('What small molecule is lost when nylon forms?', [
      ['Water', 'Correct: condensation polymerisation.'],
      ['Hydrogen', 'Not lost.'],
      ['Carbon dioxide', 'Not lost.'],
      ['Ammonia', 'Not lost.'],
    ], 0),
    'c11-polymers:c2.0': mc('Why is the disposal of many plastics a problem?', [
      ['They are not biodegradable, so they remain in the environment', 'Correct.'],
      ['They release large amounts of oxygen as they slowly decay in landfill', 'Not true.'],
      ['They dissolve quickly in water and pollute rivers with toxic acids', 'Most do not dissolve.'],
      ['They are made from metals which are rare and cannot be replaced', 'Plastics are made from oil.'],
    ], 0),

    // ---------- Topic 12: experimental techniques ----------
    'c12-design:c0.0': mc('Which apparatus should be used to measure exactly 25.0 cm³ of an alkali for a titration?', [
      ['A pipette', 'Correct: accurate fixed volume.'],
      ['A measuring cylinder', 'Less accurate.'],
      ['A beaker', 'Only approximate.'],
      ['A burette', 'Used for the variable volume of the acid.'],
    ], 0),
    'c12-design:c1.0': mc('In an experiment on how temperature affects rate of reaction, what is the dependent variable?', [
      ['The rate of reaction, for example the time taken', 'Correct.'],
      ['The temperature of the mixture', 'This is the independent variable.'],
      ['The volume and concentration of the acid', 'These are control variables.'],
      ['The mass of the solid reactant used', 'A control variable.'],
    ], 0),
    'c12-titration:c0.0': fig({ svg: 'titration' }, mc('Why is a titration repeated until two results agree closely?', [
      ['To make sure the result is reliable and the average is accurate', 'Correct.'],
      ['To use up all of the acid and alkali in the flask and burette', 'Not the reason.'],
      ['To allow the indicator to reach its end-point colour', 'Not the reason.'],
      ['To make sure the solutions have mixed completely before reading', 'Swirling does that.'],
    ], 0)),
    'c12-chromatography:c0.0': fig({ svg: 'chromatography' }, mc('Why is the baseline on a chromatogram drawn in pencil, not ink?', [
      ['Ink would dissolve in the solvent and run up the paper', 'Correct.'],
      ['Pencil marks are easier to see against the paper at the end', 'Not the reason.'],
      ['Pencil dissolves in the solvent and so reveals the separated dyes', 'Pencil does not dissolve.'],
      ['Ink would react with the dyes and change their colour on the paper', 'It would run, not react.'],
    ], 0)),
    'c12-separation:c0.0': fig({ svg: 'distillation' }, mc('Which method would you use to obtain pure water from salt water?', [
      ['Simple distillation', 'Correct.'],
      ['Filtration', 'Salt is dissolved, so it passes through.'],
      ['Fractional distillation', 'For liquids with close boiling points.'],
      ['Chromatography', 'Used for dyes.'],
    ], 0)),
    'c12-separation:c1.0': mc('A sample melts gradually between 78 °C and 84 °C. What does this suggest?', [
      ['It is impure, because a pure substance has a sharp melting point', 'Correct.'],
      ['It is pure, because it melts over a narrow range of temperatures', 'A pure substance melts at one temperature.'],
      ['It is a mixture of gases that has condensed', 'It is a solid melting.'],
      ['It is an element, because compounds melt over a range', 'Both element and compound melt sharply when pure.'],
    ], 0),
    'c12-tests:c0.0': mc('A compound gives a lilac flame in a flame test. Which metal ion does it contain?', [
      ['Potassium', 'Correct.'],
      ['Sodium', 'Yellow.'],
      ['Calcium', 'Orange-red.'],
      ['Copper', 'Blue-green.'],
    ], 0),
    'c12-tests:c1.0': mc('A white precipitate forms with sodium hydroxide, dissolves in excess, and also forms with ammonia but dissolves in excess ammonia. Which ion is present?', [
      ['Zinc, Zn²⁺', 'Correct.'],
      ['Aluminium, Al³⁺', 'Aluminium hydroxide does not dissolve in excess ammonia.'],
      ['Calcium, Ca²⁺', 'Calcium hydroxide does not dissolve in excess sodium hydroxide.'],
      ['Copper(II), Cu²⁺', 'Copper gives a blue precipitate.'],
    ], 0),
    'c12-tests:c2.0': mc('Dilute nitric acid and silver nitrate solution are added to a solution and a cream precipitate forms. Which ion is present?', [
      ['Bromide', 'Correct.'],
      ['Chloride', 'White precipitate.'],
      ['Iodide', 'Yellow precipitate.'],
      ['Sulfate', 'Tested with barium ions.'],
    ], 0),
    'c12-tests:c3.0': mc('A gas relights a glowing splint. Which gas is it?', [
      ['Oxygen', 'Correct.'],
      ['Hydrogen', 'Gives a squeaky pop with a lit splint.'],
      ['Carbon dioxide', 'Turns limewater milky.'],
      ['Chlorine', 'Bleaches damp litmus paper.'],
    ], 0),
  },

  add: {
    'c1-states': [
      match('Match each change of state to its description.', [
        ['Melting', 'Solid to liquid'],
        ['Freezing', 'Liquid to solid'],
        ['Condensation', 'Gas to liquid'],
        ['Sublimation', 'Solid straight to gas'],
      ]),
      short('Describe the arrangement and movement of particles in a gas.', { kind: 'Exam question', command: 'Describe', points: ['Particles are far apart', 'Particles move randomly at high speed', 'Particles are in no regular arrangement'], model: 'In a gas the particles are far apart, in no regular arrangement, and move quickly in random directions.' }),
    ],
    'c1-diffusion': [
      short('Define “diffusion”.', { kind: 'Definition', points: ['The net movement of particles', 'from a region of higher concentration to a region of lower concentration'], model: 'Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, as a result of their random motion.' }),
    ],
    'c2-atoms': [
      match('Match each particle to its relative charge.', [
        ['Proton', '+1'],
        ['Neutron', '0'],
        ['Electron', '−1'],
      ]),
      short('Define the term “isotopes”.', { kind: 'Definition', points: ['Atoms of the same element (same number of protons)', 'with different numbers of neutrons'], model: 'Isotopes are atoms of the same element with the same number of protons but different numbers of neutrons.' }),
    ],
    'c2-ionic': [
      cloze('Complete the sentence.', 'Ionic bonds form between a ___ and a non-metal. The metal atom ___ electrons to form a positive ion.', ['metal', 'loses'], ['gas', 'gains']),
    ],
    'c2-covalent': [
      short('Describe how a covalent bond forms.', { kind: 'Exam question', command: 'Describe', points: ['Between two non-metal atoms', 'A shared pair of electrons', 'Each atom gains a full outer shell (is attracted to the shared electrons)'], model: 'A covalent bond forms between non-metal atoms that share a pair of electrons, so each atom achieves a full outer shell.' }),
    ],
    'c4-electrolysis': [
      short('Define “electrolysis”.', { kind: 'Definition', points: ['The breakdown of an ionic compound', 'when molten or in solution, by passing an electric current through it'], model: 'Electrolysis is the breakdown of an ionic compound, when molten or in solution, by passing an electric current through it.' }),
      multi('Which statements about electrolysis are correct? Select all that apply.', [
        ['Positive ions move to the cathode', 'Opposite charges attract.', true],
        ['Reduction happens at the cathode', 'Electrons are gained.', true],
        ['The anode is negative', 'The anode is positive.', false],
        ['Solid ionic compounds can be electrolysed', 'Ions must be free to move.', false],
      ]),
    ],
    'c5-energetics': [
      match('Match each term to its meaning.', [
        ['Exothermic', 'Releases energy to the surroundings'],
        ['Endothermic', 'Takes in energy from the surroundings'],
        ['Activation energy', 'The minimum energy needed for a reaction to start'],
        ['Catalyst', 'Speeds up a reaction and is not used up'],
      ]),
    ],
    'c6-rate': [
      multi('Which of these increase the rate of a reaction? Select all that apply.', [
        ['Raising the temperature', 'More frequent, more energetic collisions.', true],
        ['Using a powder instead of lumps', 'Greater surface area.', true],
        ['Adding a catalyst', 'Lower activation energy.', true],
        ['Using a smaller volume of the same concentration', 'The concentration is the same.', false],
      ]),
      short('Explain why increasing the concentration of a reactant increases the rate of reaction.', { command: 'Explain', points: ['More particles in the same volume', 'So more frequent collisions between particles', 'Therefore more successful collisions per second'], model: 'A higher concentration has more particles in the same volume, so collisions happen more often and there are more successful collisions per second.' }),
    ],
    'c7-acids': [
      match('Match each reactant pair to the products.', [
        ['Acid + metal', 'Salt + hydrogen'],
        ['Acid + base', 'Salt + water'],
        ['Acid + carbonate', 'Salt + water + carbon dioxide'],
      ]),
      short('Define a base and an alkali.', { kind: 'Definition', points: ['A base is a substance that neutralises an acid (a metal oxide or hydroxide)', 'An alkali is a base that dissolves in water'], model: 'A base is a substance that neutralises an acid, such as a metal oxide. An alkali is a base that dissolves in water.' }),
    ],
    'c8-group1': [
      short('Explain why potassium is more reactive than lithium.', { command: 'Explain', points: ['Potassium’s outer electron is further from the nucleus', 'It is held less strongly, so it is lost more easily'], model: 'In potassium the outer electron is further from the nucleus and held less strongly, so it is lost more easily than in lithium.' }),
    ],
    'c9-reactivity': [
      short('Explain, using the reactivity series, why zinc displaces copper from copper(II) sulfate solution.', { command: 'Explain', points: ['Zinc is more reactive than copper', 'Zinc atoms lose electrons to form zinc ions, and copper ions gain electrons to form copper'], model: 'Zinc is more reactive than copper. Zinc atoms lose electrons to form zinc ions and copper ions gain them to form copper metal, so zinc displaces copper.' }),
    ],
    'c10-air': [
      multi('Which of these are greenhouse gases? Select all that apply.', [
        ['Carbon dioxide', 'Absorbs infrared radiation.', true],
        ['Methane', 'Absorbs infrared radiation.', true],
        ['Nitrogen', 'Does not absorb infrared.', false],
        ['Argon', 'Does not absorb infrared.', false],
      ]),
    ],
    'c11-alkenes': [
      match('Match each reaction to its description.', [
        ['Cracking', 'Breaking long alkanes into shorter alkanes and alkenes'],
        ['Addition', 'An alkene reacts and the double bond is lost'],
        ['Substitution', 'An atom in an alkane is replaced by another atom'],
        ['Polymerisation', 'Many monomers join to make a long chain'],
      ]),
    ],
    'c12-tests': [
      match('Match each test to the gas it identifies.', [
        ['Lit splint gives a squeaky pop', 'Hydrogen'],
        ['Limewater turns milky', 'Carbon dioxide'],
        ['Glowing splint relights', 'Oxygen'],
        ['Damp litmus paper is bleached', 'Chlorine'],
      ]),
    ],
  },
};
