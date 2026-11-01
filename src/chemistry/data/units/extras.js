import { byte, mc } from '../helpers.js';
import { multi, match, cloze, short } from '../../../data/builders.js';

// Syllabus audit (Cambridge IGCSE Chemistry 0620, 2026 to 2028): bytes for objectives the first pass did not cover.
// Appended to the lesson with the matching id (see ../index.js). Tests follow the hard-question standard.

export const extras = {
  'c1-states': [
    byte('Gas volume, temperature and pressure', [
      'At **constant pressure**, heating a gas makes the particles move faster and hit the walls harder, so the gas **expands**: its volume **increases** with temperature.',
      'At **constant temperature**, squeezing a gas into a smaller volume makes the particles hit the walls **more often**, so the pressure **increases**: volume and pressure change in opposite directions.',
    ], mc('A gas in a syringe is compressed to half its volume without changing its temperature. What happens, and why?', [
      ['Pressure rises, because particles hit the walls more often in the smaller space', 'Correct.'],
      ['Pressure rises, because the particles move faster in the smaller space', 'Temperature is constant, so their speed is unchanged.'],
      ['Pressure falls, because the particles are closer together in the smaller space', 'More frequent collisions raise pressure.'],
      ['Pressure stays the same, because the number of particles has not changed', 'Collision frequency has changed.'],
    ], 0)),
  ],

  'c2-isotopes': [
    byte('Isotopes and chemical properties', [
      'Isotopes of the same element have the **same number of electrons**, so the **same electronic configuration** and the **same chemical properties**.',
      'They differ in **mass** (different numbers of neutrons) and so in **physical properties** such as density, and some are radioactive.',
    ], mc('Why do chlorine-35 and chlorine-37 react in the same way?', [
      ['They have the same electronic configuration because they have the same number of electrons', 'Correct.'],
      ['They have the same mass because they are both chlorine atoms', 'The masses differ.'],
      ['They have the same number of neutrons because they are the same element', 'The neutrons differ.'],
      ['They have the same nucleon number because the protons are identical', 'The nucleon numbers differ.'],
    ], 0)),
  ],

  'c4-electrolysis': [
    byte('Electrolysis of dilute sulfuric acid', [
      'With **inert electrodes**, dilute sulfuric acid gives **hydrogen** at the cathode and **oxygen** at the anode.',
      'The volume of hydrogen is **twice** the volume of oxygen, because water is being decomposed: 2H₂O → 2H₂ + O₂. The acid becomes more concentrated.',
    ], mc('Dilute sulfuric acid is electrolysed using platinum electrodes. Which statement is correct?', [
      ['Hydrogen forms at the cathode and oxygen at the anode, in a 2 : 1 volume ratio', 'Correct.'],
      ['Oxygen forms at the cathode and hydrogen at the anode, in a 2 : 1 volume ratio', 'Hydrogen forms at the negative electrode.'],
      ['Hydrogen forms at the cathode and sulfur at the anode, in a 1 : 1 volume ratio', 'Sulfur does not form.'],
      ['Hydrogen forms at the cathode and oxygen at the anode, in a 1 : 1 volume ratio', 'The ratio is 2 : 1.'],
    ], 0)),
    byte('Copper(II) sulfate solution: carbon or copper electrodes', [
      '**Carbon (inert) electrodes:** **copper** forms at the cathode (brown solid) and **oxygen** at the anode. The blue colour fades as copper ions are used up.',
      '**Copper electrodes:** copper **dissolves** from the anode (Cu → Cu²⁺ + 2e⁻) and copper is **deposited** at the cathode (Cu²⁺ + 2e⁻ → Cu). The blue colour stays the same and the anode gets smaller.',
    ], multi('Copper(II) sulfate solution is electrolysed using copper electrodes. Which statements are correct? Select all that apply.', [
      ['The cathode gains a coating of copper', 'Copper ions gain electrons.', true],
      ['The anode loses mass', 'Copper atoms lose electrons and dissolve.', true],
      ['Oxygen gas forms at the anode', 'This happens with inert electrodes.', false],
      ['The blue colour of the solution fades', 'Ions are replaced as fast as they are used.', false],
    ])),
    byte('Predicting products from halide solutions', [
      'In a **concentrated** solution of a halide (such as NaCl), the **halogen** forms at the anode. In a **dilute** solution, **oxygen** forms at the anode instead.',
      'At the cathode, **hydrogen** forms if the metal is more reactive than hydrogen (such as sodium); the metal forms if it is less reactive (such as copper).',
    ], mc('Dilute aqueous sodium chloride is electrolysed with inert electrodes. Which products are most likely?', [
      ['Hydrogen at the cathode and oxygen at the anode', 'Correct.'],
      ['Sodium at the cathode and chlorine at the anode', 'Sodium is too reactive and the solution is dilute.'],
      ['Hydrogen at the cathode and chlorine at the anode', 'This happens with a concentrated solution.'],
      ['Sodium at the cathode and oxygen at the anode', 'Sodium is not formed from solution.'],
    ], 0)),
  ],

  'c6-rate': [
    byte('Evaluating methods of following a reaction', [
      '**Gas syringe:** measures the volume of gas given off over time. Accurate, but a gas that dissolves or a leaky syringe causes errors.',
      '**Loss of mass:** the mass of the flask falls as gas escapes. Simple, but it is not suitable for a gas with a very low mass, such as hydrogen, because the change is too small to measure accurately.',
    ], mc('Which is the best reason for using a gas syringe rather than a mass balance to follow the reaction of magnesium with acid?', [
      ['Hydrogen has a very small mass, so the mass loss is hard to measure accurately', 'Correct.'],
      ['Hydrogen is heavier than air, so it does not escape from an open flask', 'Hydrogen is much lighter than air.'],
      ['A balance cannot measure changes that happen in less than a minute', 'Not the reason.'],
      ['Magnesium reacts too slowly for the mass to be measured', 'The reaction is fast.'],
    ], 0)),
  ],

  'c6-redox': [
    byte('Colour tests for oxidising and reducing agents', [
      '**Acidified potassium manganate(VII)** is a strong oxidising agent: it changes from **purple to colourless** when it is **reduced** (so a reducing agent is present).',
      '**Aqueous potassium iodide** is colourless; if an oxidising agent is present, iodide is **oxidised to iodine** and the solution turns **brown**.',
    ], match('Match each observation to what it shows.', [
      ['Purple manganate(VII) becomes colourless', 'A reducing agent is present'],
      ['Colourless iodide becomes brown', 'An oxidising agent is present'],
      ['Iodide ions I⁻ change to iodine I₂', 'Oxidation'],
      ['Manganate(VII) ions gain electrons', 'Reduction'],
    ])),
  ],

  'c7-acids': [
    byte('Indicators, alkalis and ions', [
      '**Litmus:** red in acid, blue in alkali. **Methyl orange:** red in acid, yellow in alkali. **Thymolphthalein:** colourless in acid, blue in alkali.',
      'Aqueous acids contain **H⁺ ions** and aqueous alkalis contain **OH⁻ ions**. Neutralisation: H⁺(aq) + OH⁻(aq) → H₂O(l).',
      'A base reacts with an **ammonium salt** on warming to give a salt, water and **ammonia** gas.',
    ], match('Match each indicator to its colour in alkali.', [
      ['Litmus', 'Blue'],
      ['Methyl orange', 'Yellow'],
      ['Thymolphthalein', 'Blue, but colourless in acid'],
      ['Universal indicator', 'Blue or purple'],
    ])),
  ],

  'c7-salts': [
    byte('Hydrated and anhydrous substances', [
      'A **hydrated** substance is chemically combined with water; an **anhydrous** substance contains no water.',
      '**Water of crystallisation** is the water in hydrated crystals, for example blue **CuSO₄•5H₂O** and pink **CoCl₂•6H₂O**. Heating drives it off, leaving white anhydrous copper(II) sulfate or blue anhydrous cobalt(II) chloride.',
    ], mc('Blue copper(II) sulfate crystals are heated gently and turn white. What has happened?', [
      ['The water of crystallisation has been driven off, leaving anhydrous copper(II) sulfate', 'Correct.'],
      ['The copper has been reduced to the metal, leaving white copper(II) oxide', 'No reduction takes place.'],
      ['The salt has dissolved in its own water, leaving a white solution', 'It is still a solid.'],
      ['The crystals have been oxidised, leaving white copper(II) sulfate hydrate', 'Hydrate means water is still present.'],
    ], 0)),
  ],

  'c8-table': [
    byte('Group number, ion charge and predicting properties', [
      'Metals in **Groups I, II and III** form ions with charge **+1, +2 and +3** (the group number). Non-metals in Groups **V, VI and VII** form ions with charge **−3, −2 and −1** (8 − group number).',
      '**Across a period** the elements change from **metallic to non-metallic**. Because elements in a group share the same outer electron number, their position in the table can be used to **predict** their properties and trends.',
    ], mc('An element X is in Group II. What is the most likely formula of its chloride, and why?', [
      ['XCl₂, because X forms X²⁺ ions', 'Correct.'],
      ['XCl, because X forms X⁺ ions', 'Group II ions are 2+.'],
      ['X₂Cl, because X forms X⁻ ions', 'Group II metals form positive ions.'],
      ['XCl₃, because X forms X³⁺ ions', 'That is Group III.'],
    ], 0)),
  ],

  'c9-reactivity': [
    byte('The apparent unreactivity of aluminium', [
      'Aluminium is above zinc in the reactivity series, yet it seems unreactive. It is covered by a thin, tough layer of **aluminium oxide** that stops water, oxygen and acids reaching the metal.',
      'If the oxide layer is removed (for example by mercury or strong acid), aluminium reacts quickly.',
    ], mc('Why does aluminium appear unreactive with water, although it is high in the reactivity series?', [
      ['A thin layer of aluminium oxide protects the metal underneath', 'Correct.'],
      ['Aluminium is below hydrogen in the reactivity series', 'It is above it.'],
      ['Aluminium has a very high melting point, so reactions are slow', 'Melting point does not control reactivity here.'],
      ['Aluminium forms a layer of hydrogen gas that protects it', 'Not the reason.'],
    ], 0)),
  ],

  'c10-water': [
    byte('Substances in natural water', [
      '**Beneficial:** dissolved **oxygen** (for fish and other aquatic life) and some **metal compounds** (essential minerals).',
      '**Harmful:** toxic **metal compounds**, **plastics** that harm aquatic life, **sewage** (harmful microbes cause disease), and **nitrates and phosphates** from fertilisers and detergents, which lead to **deoxygenation** and damage to aquatic life.',
    ], multi('Which substances in natural water can be harmful? Select all that apply.', [
      ['Sewage containing harmful microbes', 'Causes disease.', true],
      ['Nitrates and phosphates from fertilisers', 'Lead to deoxygenation.', true],
      ['Plastics', 'Harm aquatic life.', true],
      ['Dissolved oxygen', 'Beneficial for aquatic life.', false],
    ])),
    byte('Treating the domestic water supply', [
      '**Sedimentation and filtration** remove solid particles; **carbon** removes tastes and odours; **chlorination** kills microbes.',
      'Laboratories use **distilled water** because tap water contains dissolved impurities that can interfere with results. Purity of water can be tested by its **melting and boiling points** (pure water melts at 0 °C and boils at 100 °C).',
    ], match('Match each treatment stage to its purpose.', [
      ['Sedimentation and filtration', 'Remove solid particles'],
      ['Carbon', 'Remove tastes and odours'],
      ['Chlorination', 'Kill microbes'],
    ])),
  ],

  'c10-air': [
    byte('Reducing the effects of air pollution', [
      '**Climate change:** plant trees, reduce livestock farming, use less fossil fuel, and use **hydrogen and renewable energy** (wind, solar).',
      '**Acid rain:** use **catalytic converters** in vehicles and cut sulfur dioxide with **low-sulfur fuels** and **flue gas desulfurisation** (the gas reacts with **calcium oxide**).',
      '**Oxides of nitrogen** form in car engines where high temperatures make nitrogen and oxygen react; they cause **acid rain, photochemical smog and breathing problems**.',
    ], match('Match each pollution problem to a strategy that reduces it.', [
      ['Global warming', 'Plant trees and use renewable energy'],
      ['Sulfur dioxide from power stations', 'Flue gas desulfurisation using calcium oxide'],
      ['Oxides of nitrogen from cars', 'Catalytic converters'],
    ])),
    byte('Photosynthesis', [
      'Plants make glucose by **photosynthesis**, using **energy from light** absorbed by **chlorophyll**.',
      'Word equation: **carbon dioxide + water → glucose + oxygen.** Symbol equation: **6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.**',
      'Photosynthesis removes carbon dioxide from the air, which is why planting trees helps to reduce climate change.',
    ], cloze('Complete the equation for photosynthesis.', '6CO₂ + 6H₂O → C₆H₁₂O₆ + ___, requiring ___ and chlorophyll.', ['6O₂', 'light'], ['6H₂', 'heat']),
    ),
  ],

  'c11-alcohols': [
    byte('Uses and combustion of ethanol', [
      'Ethanol is used as a **solvent** and as a **fuel**. It burns completely to give carbon dioxide and water: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.',
      '**Fermentation** uses a renewable resource at a low temperature but is slow and gives an impure product. **Hydration of ethene** is fast and gives pure ethanol but uses a non-renewable raw material and more energy.',
    ], mc('Which products are formed when ethanol burns completely in oxygen?', [
      ['Carbon dioxide and water', 'Correct.'],
      ['Carbon monoxide and water', 'This is incomplete combustion.'],
      ['Carbon dioxide and hydrogen', 'Hydrogen burns to give water.'],
      ['Ethene and water', 'Not a combustion product.'],
    ], 0)),
  ],

  'c11-acids': [
    byte('Reactions of ethanoic acid', [
      'Ethanoic acid reacts as an acid. With **metals** it forms **ethanoate salts** and hydrogen (for example magnesium ethanoate); with **bases** it forms a salt and water; with **carbonates** it forms a salt, water and carbon dioxide.',
      'Vinegar is made by the **bacterial oxidation** of ethanol.',
    ], mc('Ethanoic acid is added to sodium carbonate. Which products form?', [
      ['Sodium ethanoate, water and carbon dioxide', 'Correct.'],
      ['Sodium ethanoate and hydrogen', 'This is the reaction with a metal.'],
      ['Sodium ethanoate and water only', 'This is the reaction with a base.'],
      ['Sodium chloride, water and carbon dioxide', 'The acid gives an ethanoate, not a chloride.'],
    ], 0)),
  ],

  'c11-polymers': [
    byte('PET and proteins', [
      '**PET** is a **polyester** made from a dicarboxylic acid and a diol; it can be converted back to its monomers and **re-polymerised** (recycled).',
      '**Proteins** are natural **polyamides** made from **amino acid** monomers, each with an amine group and a carboxylic acid group, joined by amide links. Nylon is a synthetic polyamide.',
    ], match('Match each polymer to its type.', [
      ['PET', 'Polyester'],
      ['Nylon', 'Synthetic polyamide'],
      ['Protein', 'Natural polyamide'],
      ['Poly(ethene)', 'Addition polymer'],
    ])),
  ],

  'c12-design': [
    byte('Solutions and separation terms', [
      'A **solvent** dissolves a **solute** to make a **solution**. A **saturated solution** contains the maximum concentration of solute at a given temperature.',
      'A **residue** is what remains after filtration, evaporation or distillation. A **filtrate** is the liquid that passes through the filter.',
    ], match('Match each term to its meaning.', [
      ['Solute', 'The substance that is dissolved'],
      ['Solvent', 'The substance that does the dissolving'],
      ['Residue', 'The solid left on the filter paper'],
      ['Filtrate', 'The liquid that passes through the filter'],
    ])),
  ],

  'c12-chromatography': [
    byte('Colourless substances and interpreting chromatograms', [
      '**Colourless substances** are made visible with a **locating agent** sprayed onto the paper after the run.',
      'On a chromatogram: **a pure substance gives one spot**; an impure substance gives several. An unknown is identified by matching its spots (same distance, same Rf) with known substances run on the same paper.',
    ], mc('A chromatogram of a sample shows three spots, and two of them line up with spots from known dyes P and Q. Which conclusion is correct?', [
      ['The sample is a mixture that contains P and Q', 'Correct.'],
      ['The sample is a pure substance made only of P and Q', 'Three spots means at least three substances.'],
      ['The sample contains only dye P', 'It also matches Q.'],
      ['The sample is pure because it contains known dyes', 'Several spots show a mixture.'],
    ], 0)),
  ],

  'c12-tests': [
    byte('Tests for carbonate, nitrate, sulfate and sulfite', [
      '**Carbonate:** add dilute acid; carbon dioxide fizzes and turns **limewater cloudy**. **Nitrate:** add sodium hydroxide and **aluminium foil** and warm; **ammonia** is given off (turns damp red litmus blue).',
      '**Sulfate:** acidify with dilute nitric acid, add barium nitrate; a **white precipitate**. **Sulfite:** warm with acidified potassium manganate(VII); it turns from **purple to colourless**.',
    ], match('Match each ion to its test result.', [
      ['Carbonate', 'Gas turns limewater cloudy with acid'],
      ['Sulfate', 'White precipitate with barium nitrate and nitric acid'],
      ['Nitrate', 'Ammonia gas with sodium hydroxide and aluminium foil'],
      ['Sulfite', 'Decolourises acidified potassium manganate(VII)'],
    ])),
    byte('Tests for ammonium and for gases', [
      '**Ammonium ions:** add sodium hydroxide and warm; **ammonia** turns damp red litmus paper **blue**. **Ammonia gas** has a sharp smell.',
      '**Sulfur dioxide** turns **acidified potassium manganate(VII)** from purple to colourless. **Chlorine** bleaches damp litmus paper. **Hydrogen** gives a squeaky pop; **oxygen** relights a glowing splint; **carbon dioxide** turns limewater cloudy.',
    ], mc('A colourless gas turns acidified potassium manganate(VII) from purple to colourless. Which gas is it?', [
      ['Sulfur dioxide', 'Correct.'],
      ['Carbon dioxide', 'It turns limewater cloudy.'],
      ['Chlorine', 'It bleaches damp litmus.'],
      ['Ammonia', 'It turns damp red litmus blue.'],
    ], 0)),
  ],
};
