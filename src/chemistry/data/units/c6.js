import { byte, lesson, mc, calc, fig } from '../helpers.js';

// Unit 6: Organic chemistry and experimental techniques (syllabus topics 11 and 12).

export const c111 = lesson('c11-intro', 'Formulae, functional groups and terminology', '11.1', [
  'A homologous series is a family of compounds with the same functional group and general formula. Alkanes are saturated; alkenes are unsaturated.',
], [
  byte('Homologous series and general formulae', [
    'A **homologous series** is a **family of organic compounds with the same functional group, the same general formula and similar chemical properties**. Physical properties change gradually along the series.',
    'General formulae: **alkanes CₙH₂ₙ₊₂**, **alkenes CₙH₂ₙ**, **alcohols CₙH₂ₙ₊₁OH**, **carboxylic acids CₙH₂ₙ₊₁COOH**.',
    'Each member differs from the next by a **CH₂** group.',
  ], calc('An alkane has 6 carbon atoms. How many hydrogen atoms are in one molecule? (general formula CₙH₂ₙ₊₂)', 14, {
    formula: 'H = 2n + 2 = 2(6) + 2', steps: ['2 × 6 + 2 = 14, so the formula is C₆H₁₄'], tol: 0.001,
  })),
  byte('Types of formula', [
    '**Molecular formula** shows the number of each atom (C₂H₆O). **Structural formula** shows the arrangement without every bond (CH₃CH₂OH). **Displayed formula** shows **all atoms and all bonds**. **General formula** is for a whole series.',
    '**Isomers** are compounds with the **same molecular formula but different structures**, for example butane and methylpropane (both C₄H₁₀).',
  ], fig({ svg: 'organicFormulae' }, mc('Which pair are isomers?', [
    ['Butane and methylpropane (both C₄H₁₀)', 'Correct: the same molecular formula with different structures.'],
    ['Ethane and ethene', 'They have different molecular formulae (C₂H₆ and C₂H₄).'],
    ['Methane and ethane', 'They have different molecular formulae.'],
    ['Ethanol and ethanoic acid', 'They have different molecular formulae.'],
  ], 0)), { fig: { svg: 'organicFormulae', caption: 'Displayed formulae of some organic compounds' } }),
  byte('Functional groups and saturation', [
    'A **functional group** is the atom or group of atoms that **determines the chemical properties** of a compound: **C=C** in alkenes, **–OH** in alcohols, **–COOH** in carboxylic acids.',
    '**Saturated** compounds have **only single carbon–carbon bonds** (alkanes). **Unsaturated** compounds contain at least one **C=C double bond** (alkenes).',
    '**Hydrocarbons** are compounds of **carbon and hydrogen only**.',
  ], mc('What is the functional group in an alkene?', [
    ['A carbon–carbon double bond, C=C', 'Correct.'],
    ['A hydroxyl group, –OH', 'This is the functional group of an alcohol.'],
    ['A carboxyl group, –COOH', 'This is the functional group of a carboxylic acid.'],
    ['A carbon–carbon single bond only', 'Alkanes have only single bonds.'],
  ], 0)),
]);

export const c112 = lesson('c11-naming', 'Naming organic compounds', '11.2', [
  'Names come from the number of carbon atoms (meth, eth, prop, but, pent, hex) and the ending: -ane, -ene, -ol, -oic acid.',
], [
  byte('Naming alkanes, alkenes, alcohols and acids', [
    'The **stem** shows the number of carbons: **meth-** (1), **eth-** (2), **prop-** (3), **but-** (4), **pent-** (5), **hex-** (6).',
    'The **ending** shows the type: **-ane** (alkane, C–C single bonds), **-ene** (alkene, C=C), **-ol** (alcohol), **-oic acid** (carboxylic acid).',
    'Examples: **CH₃CH₂CH₃ is propane**, **C₂H₄ is ethene**, **CH₃CH₂OH is ethanol**, **CH₃COOH is ethanoic acid**, **CH₃CH₂CH₂COOH is butanoic acid**.',
  ], mc('What is the name of the compound with the formula CH₃CH₂CH₂OH?', [
    ['Propanol', 'Correct: 3 carbons and an –OH group.'],
    ['Propane', 'Propane is the alkane C₃H₈ with no –OH group.'],
    ['Ethanol', 'Ethanol has two carbons.'],
    ['Propanoic acid', 'This would contain a –COOH group.'],
  ], 0)),
]);

export const c113 = lesson('c11-fuels', 'Fuels and petroleum', '11.3', [
  'Fossil fuels are coal, natural gas and petroleum. Petroleum is separated by fractional distillation into fractions with different boiling points.',
], [
  byte('Fossil fuels', [
    'The three main **fossil fuels** are **coal**, **natural gas (mainly methane)** and **petroleum (crude oil)**. They formed from the remains of living things over millions of years and are **finite resources**.',
    'Petroleum is a **mixture of hydrocarbons**. Methane is the main component of natural gas.',
    'Burning fossil fuels releases **carbon dioxide**, contributing to climate change.',
  ], mc('What is the main component of natural gas?', [
    ['Methane', 'Correct.'],
    ['Ethane', 'Ethane is a minor component.'],
    ['Hydrogen', 'Natural gas is mainly a hydrocarbon.'],
    ['Carbon dioxide', 'This is a combustion product, not the fuel.'],
  ], 0)),
  byte('Fractional distillation of petroleum', [
    'Petroleum is **heated and the vapour enters a fractionating column**, which is **hotter at the bottom and cooler at the top**. Hydrocarbons rise until they **condense at their boiling point range** and are collected as **fractions**.',
    'Fractions from top to bottom: **refinery gases**, **petrol (gasoline)**, **naphtha**, **kerosene (paraffin)**, **diesel oil**, **fuel oil**, **bitumen**.',
    'As the **chain length increases**: **boiling point rises**, the liquid becomes **more viscous (thicker)**, **less flammable** and **darker**.',
  ], fig({ svg: 'fractionalDistillation' }, mc('Which fraction has the molecules with the longest carbon chains?', [
    ['Bitumen', 'Correct: it leaves at the bottom of the column with the highest boiling point.'],
    ['Petrol', 'Petrol has shorter chains and leaves nearer the top.'],
    ['Refinery gases', 'These have the shortest chains.'],
    ['Kerosene', 'Kerosene is in the middle of the column.'],
  ], 0)), { fig: { svg: 'fractionalDistillation', caption: 'Fractional distillation of petroleum' } }),
  byte('Uses of the fractions', [
    '**Refinery gases:** domestic heating and cooking (LPG). **Petrol:** fuel for cars. **Naphtha:** raw material for the chemical industry. **Kerosene:** jet fuel. **Diesel oil:** fuel for lorries and trains.',
    '**Fuel oil:** fuel for ships and for heating. **Bitumen:** road surfaces and roofing.',
  ], mc('Which fraction of petroleum is used for making road surfaces?', [
    ['Bitumen', 'Correct.'],
    ['Kerosene', 'Kerosene is used as jet fuel.'],
    ['Diesel oil', 'Diesel is a fuel.'],
    ['Refinery gases', 'These are used for heating and cooking.'],
  ], 0)),
]);

export const c114 = lesson('c11-alkanes', 'Alkanes', '11.4', [
  'Alkanes are saturated hydrocarbons that burn and can undergo substitution with chlorine in ultraviolet light.',
], [
  byte('Alkanes and substitution reactions', [
    '**Alkanes** are **saturated hydrocarbons** (only single bonds), fairly **unreactive**, and burn to give **carbon dioxide and water**.',
    'In **ultraviolet light** they react with chlorine in a **substitution reaction**: a hydrogen atom is **replaced** by a chlorine atom. **CH₄ + Cl₂ → CH₃Cl + HCl**.',
    'UV light provides the energy to break the Cl–Cl bond.',
  ], mc('Methane reacts with chlorine in sunlight. What type of reaction is this?', [
    ['Substitution', 'Correct: a hydrogen atom is replaced by chlorine.'],
    ['Addition', 'Addition happens with unsaturated compounds (alkenes).'],
    ['Neutralisation', 'No acid and base are involved.'],
    ['Polymerisation', 'No long chain is formed.'],
  ], 0)),
]);

export const c115 = lesson('c11-alkenes', 'Alkenes', '11.5', [
  'Alkenes are unsaturated hydrocarbons made by cracking. They undergo addition reactions and decolourise bromine water.',
], [
  byte('Cracking', [
    '**Cracking** breaks **long-chain alkanes** into **shorter alkanes and alkenes**, using **heat and a catalyst** (or high temperature).',
    'Example: **C₁₀H₂₂ → C₈H₁₈ + C₂H₄**. It produces **useful short-chain fuels** and **alkenes** for making plastics.',
    'Alkenes are **more reactive** than alkanes because of the C=C double bond.',
  ], mc('Why is cracking carried out in oil refineries?', [
    ['To turn long, less useful hydrocarbons into short fuels and alkenes', 'Correct.'],
    ['To make the long hydrocarbons burn faster', 'The purpose is to make more useful products.'],
    ['To remove sulfur from petroleum', 'This is done separately.'],
    ['To make carbon dioxide', 'Cracking produces hydrocarbons.'],
  ], 0)),
  byte('Addition reactions of alkenes', [
    'In an **addition reaction** the C=C bond opens and **atoms add across it**, forming a **single product**.',
    '**With bromine:** C₂H₄ + Br₂ → C₂H₄Br₂ (the orange-brown bromine water becomes colourless: the **test for unsaturation**).',
    '**With hydrogen** (nickel catalyst, about 150 °C): ethene → ethane. **With steam** (phosphoric acid catalyst, high temperature and pressure): ethene → ethanol.',
  ], mc('Which result shows that a hydrocarbon is an alkene?', [
    ['Bromine water changes from orange-brown to colourless', 'Correct: the bromine adds across the double bond.'],
    ['It burns in air', 'Alkanes also burn.'],
    ['It turns litmus paper red', 'Alkenes are not acidic.'],
    ['It dissolves in water', 'Hydrocarbons do not dissolve well in water.'],
  ], 0)),
]);

export const c116 = lesson('c11-alcohols', 'Alcohols', '11.6', [
  'Ethanol is made by fermentation of glucose or by hydration of ethene. It is used as a solvent and fuel.',
], [
  byte('Making ethanol by fermentation', [
    '**Fermentation:** yeast converts **glucose** to ethanol and carbon dioxide: **C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂**.',
    'Conditions: **about 25–35 °C**, **no oxygen (anaerobic)**, and **yeast** (its enzymes are the catalyst).',
    'Fermentation uses a **renewable resource** (sugars from plants) but is **slow**, gives **dilute ethanol** and needs a **batch** process.',
  ], mc('What are the conditions for the fermentation of glucose to ethanol?', [
    ['Yeast, about 30 °C and no oxygen', 'Correct.'],
    ['Phosphoric acid and 300 °C', 'These are the conditions for hydration of ethene.'],
    ['Nickel catalyst and 150 °C', 'These are the conditions for hydrogenation.'],
    ['A high concentration of oxygen', 'Oxygen would make ethanoic acid or CO₂ and water.'],
  ], 0)),
  byte('Making ethanol from ethene', [
    '**Hydration of ethene:** ethene reacts with **steam** at **about 300 °C and 60–70 atmospheres** with a **phosphoric acid catalyst**: **C₂H₄ + H₂O → C₂H₅OH**.',
    'This is **fast**, gives **pure ethanol** and is **continuous**, but it uses **crude oil** (a finite resource) and needs a lot of energy.',
    'Ethanol is used as a **solvent** and as a **fuel**.',
  ], mc('Which is an advantage of making ethanol by hydration of ethene instead of by fermentation?', [
    ['It is faster and gives pure ethanol', 'Correct.'],
    ['It uses a renewable resource', 'Ethene comes from crude oil, which is finite.'],
    ['It happens at room temperature', 'It needs about 300 °C.'],
    ['It needs no catalyst', 'A phosphoric acid catalyst is used.'],
  ], 0)),
]);

export const c117 = lesson('c11-acids', 'Carboxylic acids', '11.7', [
  'Carboxylic acids such as ethanoic acid are weak acids made by oxidising alcohols. They react with alcohols to form esters.',
], [
  byte('Ethanoic acid', [
    '**Ethanoic acid (CH₃COOH)** is a **weak acid**. It reacts like other acids with **metals** (giving hydrogen), **carbonates** (giving carbon dioxide) and **bases**.',
    'It can be made by **oxidising ethanol**: with **acidified potassium manganate(VII)** or by **bacterial oxidation** in air, which is how wine turns to **vinegar**.',
  ], mc('How can ethanoic acid be made from ethanol?', [
    ['By oxidation, for example with acidified potassium manganate(VII)', 'Correct.'],
    ['By reduction with hydrogen', 'Reduction would not produce a carboxylic acid.'],
    ['By adding water', 'Water is not enough to oxidise ethanol.'],
    ['By cracking', 'Cracking breaks alkanes.'],
  ], 0)),
  byte('Esters', [
    'A carboxylic acid reacts with an alcohol, using a **small amount of concentrated sulfuric acid as a catalyst**, to make an **ester** and water: **ethanoic acid + ethanol → ethyl ethanoate + water**.',
    'Esters have **sweet, fruity smells** and are used in **perfumes and food flavourings**. The name comes from the alcohol (ethyl) and the acid (ethanoate).',
  ], mc('What is formed when ethanoic acid reacts with ethanol in the presence of a little concentrated sulfuric acid?', [
    ['Ethyl ethanoate and water', 'Correct: an ester forms.'],
    ['Ethanol and carbon dioxide', 'This is not the reaction.'],
    ['Ethene and water', 'Ethanol would need dehydration for this.'],
    ['Sodium ethanoate and water', 'This would need sodium hydroxide.'],
  ], 0)),
]);

export const c118 = lesson('c11-polymers', 'Polymers', '11.8', [
  'Addition polymers form from alkenes. Condensation polymers such as nylon and PET form from two different monomers with loss of water. Proteins are natural polyamides.',
], [
  byte('Addition polymerisation', [
    'A **polymer** is a **long molecule made of many repeating units (monomers)**. In **addition polymerisation**, many **unsaturated monomers** such as ethene join together by their C=C bonds, with **no other product**.',
    '**n C₂H₄ → (–CH₂–CH₂–)ₙ** (poly(ethene)). Poly(ethene) is used for **bags and bottles**; poly(propene) for ropes and crates; **poly(chloroethene) (PVC)** for pipes and cables.',
    'The **repeat unit** is drawn in brackets with an **n** and **extension bonds** at each end.',
  ], fig({ svg: 'polymerisation' }, mc('What is the monomer used to make poly(ethene)?', [
    ['Ethene', 'Correct.'],
    ['Ethane', 'Ethane is saturated and cannot polymerise by addition.'],
    ['Ethanol', 'Ethanol is not the monomer.'],
    ['Methane', 'Methane is a saturated hydrocarbon with one carbon.'],
  ], 0)), { fig: { svg: 'polymerisation', caption: 'Addition polymerisation of ethene' } }),
  byte('Condensation polymers', [
    '**Condensation polymerisation** joins monomers with **two functional groups** each and **loses a small molecule (water)** at every link.',
    '**Nylon** is a **polyamide** made from a **diamine** and a **dicarboxylic acid** (amide link). **PET** is a **polyester** made from a **diol** and a **dicarboxylic acid** (ester link).',
    '**Proteins** are **natural polyamides** made from amino acids. PET can be converted back to its monomers, so it can be **recycled**.',
  ], mc('What small molecule is lost when nylon forms?', [
    ['Water', 'Correct: a molecule of water is lost at each amide link.'],
    ['Carbon dioxide', 'This is not released in condensation polymerisation.'],
    ['Hydrogen', 'This is not the small molecule lost.'],
    ['Nothing is lost', 'In addition polymerisation nothing is lost; in condensation, water is.'],
  ], 0)),
  byte('Plastics and the environment', [
    'Most **addition polymers are not biodegradable**: they are not broken down by microbes. They **build up in landfill** and can harm wildlife and oceans.',
    '**Burning plastics** can release **toxic gases** (such as hydrogen chloride from PVC) and **carbon dioxide**. **Recycling** and **reducing use** help.',
  ], mc('Why is the disposal of many plastics a problem?', [
    ['They are not biodegradable and remain in the environment', 'Correct.'],
    ['They dissolve quickly in sea water', 'Most plastics do not dissolve.'],
    ['They break down into harmless gases in landfill', 'They persist for a very long time.'],
    ['They are all made from renewable resources', 'Most are made from crude oil.'],
  ], 0)),
]);

export const c121 = lesson('c12-design', 'Experimental design', '12.1', [
  'Choose apparatus for the accuracy needed. In a fair test only the independent variable changes; the dependent variable is measured and the control variables are kept the same.',
], [
  byte('Apparatus and measurements', [
    'Common apparatus: **thermometer** (temperature), **balance** (mass), **stopwatch** (time), **measuring cylinder** (approximate volume), **pipette** (fixed volume, accurately), **burette** (variable volume, accurately), **gas syringe** (volume of gas).',
    'A **burette or pipette is more accurate** than a measuring cylinder.',
    'Reading a scale: look **level with the meniscus** (the bottom of the curve) to avoid parallax error.',
  ], mc('Which apparatus should be used to measure exactly 25.0 cm³ of an alkali for a titration?', [
    ['A pipette', 'Correct: it delivers a fixed volume accurately.'],
    ['A beaker', 'A beaker is not accurate.'],
    ['A measuring cylinder', 'A measuring cylinder is less accurate than a pipette.'],
    ['A conical flask', 'A conical flask is not a measuring instrument.'],
  ], 0)),
  byte('Variables and fair tests', [
    'The **independent variable** is the one you **change**. The **dependent variable** is the one you **measure**. **Control variables** are kept **constant** so the test is fair.',
    'Repeat the experiment and calculate a **mean** to improve reliability. Do not include **anomalous results** (outliers) in the mean.',
  ], mc('In an experiment on how temperature affects the rate of a reaction, what is the dependent variable?', [
    ['The rate of reaction, for example the time taken', 'Correct: this is what is measured.'],
    ['The temperature', 'Temperature is the independent variable.'],
    ['The concentration of the acid', 'This is a control variable, kept constant.'],
    ['The volume of acid', 'This is a control variable, kept constant.'],
  ], 0)),
]);

export const c122 = lesson('c12-titration', 'Acid–base titrations', '12.2', [
  'A titration finds the exact volume of one solution that reacts with a fixed volume of another, using an indicator. Concentration is calculated from the equation.',
], [
  byte('Carrying out a titration', [
    'A **pipette** measures a **fixed volume of alkali** into a **conical flask**. Add a few drops of **indicator**. Add the **acid from a burette**, swirling, until the indicator **just changes colour** (the **end-point**).',
    'Do a **rough titration** first, then **repeat accurately** until two results are within **0.10 cm³**, and take the mean.',
    'Use **methyl orange** or **phenolphthalein** (thymolphthalein) as an indicator; read the burette at the **bottom of the meniscus**.',
  ], fig({ svg: 'titration' }, mc('Why is the titration repeated until two results agree closely?', [
    ['To make sure the result is accurate and reliable', 'Correct: concordant results show the end-point was judged consistently.'],
    ['To use up all the acid', 'The aim is a reliable titre.'],
    ['Because the indicator wears out', 'The indicator does not wear out.'],
    ['To make the solution more concentrated', 'Titrating does not change the concentration.'],
  ], 0)), { fig: { svg: 'titration', caption: 'Titration apparatus' } }),
  byte('Calculating concentration from a titration', [
    'Method: **moles of the known solution = concentration × volume (dm³)** → use the **mole ratio** from the equation → **concentration of the unknown = moles ÷ volume (dm³)**.',
    'Check the units: **cm³ ÷ 1000 = dm³**.',
  ], calc('25.0 cm³ of sodium hydroxide solution is neutralised by 20.0 cm³ of 0.100 mol/dm³ hydrochloric acid (NaOH + HCl → NaCl + H₂O). What is the concentration of the sodium hydroxide in mol/dm³?', 0.08, {
    unit: 'mol/dm³', formula: 'n(HCl) = 0.100 × 0.0200', steps: ['n(HCl) = 0.00200 mol', 'Ratio 1 : 1, so n(NaOH) = 0.00200 mol', 'c = 0.00200 ÷ 0.0250 = 0.0800 mol/dm³'], tol: 0.002,
  })),
]);

export const c123 = lesson('c12-chromatography', 'Chromatography', '12.3', [
  'Chromatography separates substances in a mixture by how far they travel with a solvent. Rf = distance moved by substance ÷ distance moved by solvent.',
], [
  byte('Paper chromatography', [
    'Draw a **pencil baseline** (pencil does not dissolve). Place a **spot of each sample** on it. Stand the paper in a **solvent below the line** so the solvent **moves up** the paper.',
    'Substances that are **more soluble in the solvent** travel **further**. A **pure substance** gives **one spot**; a **mixture** gives **more than one spot**. Compare spots with known substances to identify them.',
    '**Colourless** substances can be located using a **locating agent** (a chemical that makes them visible).',
  ], fig({ svg: 'chromatography' }, mc('Why is the baseline on a chromatogram drawn in pencil instead of ink?', [
    ['Ink would dissolve in the solvent and run up the paper', 'Correct: pencil is insoluble and does not interfere.'],
    ['Pencil is a stronger colour than ink', 'The reason is about solubility.'],
    ['Pencil dries faster', 'Drying speed is not the reason.'],
    ['Ink does not mark paper', 'Ink marks paper, but it can dissolve in the solvent.'],
  ], 0)), { fig: { svg: 'chromatography', caption: 'Paper chromatography' } }),
  byte('Retention factor (Rf)', [
    '**Rf = distance moved by the substance ÷ distance moved by the solvent front.** Measure both from the **baseline**.',
    'Rf values are **between 0 and 1** with **no units**. A given substance has the **same Rf value in the same solvent**, so Rf values help identify substances.',
  ], calc('On a chromatogram a spot moves 3.2 cm and the solvent front moves 8.0 cm from the baseline. What is the Rf value?', 0.4, {
    formula: 'Rf = 3.2 ÷ 8.0', steps: ['3.2 ÷ 8.0 = 0.40'], tol: 0.01,
  }), { eq: ['Rf = distance moved by substance ÷ distance moved by solvent'] }),
]);

export const c124 = lesson('c12-separation', 'Separation and purification', '12.4', [
  'Methods include filtration, crystallisation, simple and fractional distillation. A pure substance has a sharp melting point and boiling point.',
], [
  byte('Choosing a separation method', [
    '**Filtration:** separates an **insoluble solid** from a liquid. **Crystallisation:** obtains a **dissolved solid** by evaporating some solvent and cooling.',
    '**Simple distillation:** separates a **solvent from a solution** (for example pure water from salt water). **Fractional distillation:** separates **liquids with different boiling points** (ethanol from water; the fractions of crude oil).',
    'In **distillation** the liquid is **boiled**, the vapour is **condensed** in a condenser, and the distillate is collected.',
  ], fig({ svg: 'distillation' }, mc('Which method would you use to obtain pure water from salt water?', [
    ['Simple distillation', 'Correct: water evaporates and is condensed, leaving the salt behind.'],
    ['Filtration', 'Salt is dissolved and passes through the filter paper.'],
    ['Chromatography', 'Chromatography separates coloured substances.'],
    ['Crystallisation', 'Crystallisation would obtain the salt, not the water.'],
  ], 0)), { fig: { svg: 'distillation', caption: 'Simple distillation' } }),
  byte('Purity and melting and boiling points', [
    'A **pure substance** melts and boils at **fixed, sharp temperatures**. An **impure substance** melts over a **range** and at a **lower** temperature, and boils at a **higher** temperature.',
    'Pure water melts at **0 °C** and boils at **100 °C** at standard pressure.',
    'Purity matters for **food, drugs and fuels**, which must be free from harmful impurities.',
  ], mc('A sample melts gradually between 78 °C and 84 °C. What does this suggest?', [
    ['It is an impure substance', 'Correct: a pure substance has a sharp melting point.'],
    ['It is a pure substance', 'A pure substance melts at one temperature.'],
    ['It is an element', 'Both elements and compounds can be pure or impure.'],
    ['It is a gas', 'The sample is melting, so it is a solid.'],
  ], 0)),
]);

export const c125 = lesson('c12-tests', 'Identification of ions and gases', '12.5', [
  'Flame tests, sodium hydroxide and ammonia solutions identify cations. Specific tests identify anions and gases.',
], [
  byte('Flame tests', [
    'Dip a clean wire loop in the sample and hold it in a **hot flame**. The flame colour identifies the metal ion.',
    '**Lithium (Li⁺): red.** **Sodium (Na⁺): yellow.** **Potassium (K⁺): lilac.** **Calcium (Ca²⁺): orange-red.** **Copper(II) (Cu²⁺): blue-green.**',
  ], mc('A compound gives a lilac flame in a flame test. Which metal ion does it contain?', [
    ['Potassium', 'Correct.'],
    ['Sodium', 'Sodium gives a yellow flame.'],
    ['Lithium', 'Lithium gives a red flame.'],
    ['Copper(II)', 'Copper(II) gives a blue-green flame.'],
  ], 0)),
  byte('Testing for cations with sodium hydroxide and ammonia', [
    'Add **aqueous sodium hydroxide** (a few drops, then excess). **Copper(II): light blue precipitate**, insoluble in excess. **Iron(II): green precipitate.** **Iron(III): red-brown precipitate.**',
    '**Aluminium, zinc and calcium** give **white precipitates**. The **aluminium and zinc** precipitates **dissolve in excess** sodium hydroxide; **calcium does not**.',
    'With **aqueous ammonia** the same precipitates form. In **excess** the **zinc** precipitate **dissolves**, but **aluminium** and **calcium** do not (calcium gives little or no precipitate).',
    '**Ammonium ions:** warm with sodium hydroxide: **ammonia** is given off, which turns **damp red litmus paper blue**.',
  ], mc('A white precipitate forms when sodium hydroxide is added to a solution. It dissolves in excess sodium hydroxide, and also dissolves in excess ammonia solution. Which ion is present?', [
    ['Zinc, Zn²⁺', 'Correct: zinc hydroxide dissolves in excess of both reagents.'],
    ['Aluminium, Al³⁺', 'The aluminium precipitate dissolves in excess sodium hydroxide but not in excess ammonia.'],
    ['Calcium, Ca²⁺', 'The calcium precipitate does not dissolve in excess sodium hydroxide.'],
    ['Copper(II), Cu²⁺', 'Copper(II) gives a blue precipitate.'],
  ], 0)),
  byte('Testing for anions', [
    '**Carbonate:** add dilute acid; **carbon dioxide** is given off (turns limewater milky). **Chloride, bromide, iodide:** add **dilute nitric acid then silver nitrate**: **white (Cl⁻), cream (Br⁻), yellow (I⁻)** precipitates.',
    '**Sulfate:** add **dilute hydrochloric acid then barium chloride** (or barium nitrate): a **white precipitate** of barium sulfate.',
    '**Nitrate:** add **sodium hydroxide and aluminium foil** and warm: **ammonia** is given off (turns damp red litmus blue).',
  ], mc('Dilute nitric acid and silver nitrate solution are added to a solution and a cream precipitate forms. Which ion is present?', [
    ['Bromide', 'Correct: silver bromide is cream.'],
    ['Chloride', 'Silver chloride is white.'],
    ['Iodide', 'Silver iodide is yellow.'],
    ['Sulfate', 'Sulfate is tested with barium chloride.'],
  ], 0)),
  byte('Testing for gases', [
    '**Hydrogen:** a lit splint gives a **squeaky pop**. **Oxygen:** a **glowing splint relights**. **Carbon dioxide:** turns **limewater milky**.',
    '**Ammonia:** turns **damp red litmus paper blue**. **Chlorine:** **bleaches damp litmus paper** (first turning it red).',
  ], mc('A gas relights a glowing splint. What is the gas?', [
    ['Oxygen', 'Correct.'],
    ['Hydrogen', 'Hydrogen gives a squeaky pop with a lit splint.'],
    ['Carbon dioxide', 'Carbon dioxide turns limewater milky and would put out a flame.'],
    ['Ammonia', 'Ammonia turns damp red litmus blue.'],
  ], 0)),
]);

export const unit6 = {
  id: 'c6', number: 6, title: 'Organic Chemistry and Analysis', short: 'Organic', emoji: '🧬', color: 'indigo',
  submodules: [c111, c112, c113, c114, c115, c116, c117, c118, c121, c122, c123, c124, c125],
  papers: [],
};
