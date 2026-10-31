import { byte, lesson, mc, calc, fig } from '../helpers.js';

// Unit 5: Metals and the environment (syllabus topics 9 and 10).

export const c91 = lesson('c9-props', 'Properties and uses of metals', '9.1–9.2', [
  'Metals conduct heat and electricity, are malleable and ductile, and usually have high melting points. Uses depend on these properties.',
], [
  byte('Physical and chemical properties of metals', [
    '**Physical:** good **conductors of heat and electricity**, **malleable** (hammered into shape), **ductile** (drawn into wires), **shiny**, usually **high melting points and densities**.',
    '**Chemical:** metals form **positive ions** by losing electrons. Metal oxides are usually **basic**, and many metals react with acids to give a salt and hydrogen.',
    'Non-metals are usually **poor conductors**, **brittle** when solid, and form **acidic oxides**.',
  ], mc('Which property is typical of a metal?', [
    ['It conducts electricity and can be drawn into a wire', 'Correct.'],
    ['It is brittle and breaks when hammered', 'This describes a non-metal solid.'],
    ['It forms acidic oxides', 'Metal oxides are usually basic.'],
    ['It has a very low melting point (for most metals)', 'Most metals have high melting points.'],
  ], 0)),
  byte('Uses of common metals', [
    '**Aluminium:** aircraft bodies and food containers (**low density** and **resistant to corrosion**); overhead power cables with a steel core (good conductor, low density).',
    '**Copper:** electrical wiring (**good conductor** and **ductile**) and pans (good conductor of heat).',
    '**Mild steel:** cars and machinery (strong and cheap). **Stainless steel:** cutlery and chemical plant (**resists corrosion**).',
  ], mc('Why is copper used for electrical wiring?', [
    ['It is an excellent electrical conductor and is ductile', 'Correct: it can be drawn into wires and carries current efficiently.'],
    ['It has the lowest density of all metals', 'Density is not the reason, and aluminium is less dense.'],
    ['It is magnetic', 'Copper is not magnetic.'],
    ['It reacts easily with air', 'It is chosen because it is not very reactive.'],
  ], 0)),
]);

export const c93 = lesson('c9-alloys', 'Alloys and their properties', '9.3', [
  'An alloy is a mixture of a metal with other elements. It is usually harder and stronger than the pure metal.',
], [
  byte('What is an alloy?', [
    'An **alloy** is a **mixture of a metal with one or more other elements** (often other metals). Examples: **brass** (copper and zinc), **stainless steel** (iron with chromium, nickel and carbon).',
    'Alloys are usually **harder and stronger** than the pure metals. In a pure metal the layers of identical atoms **slide easily**. In an alloy the **different-sized atoms disrupt the layers**, making it **harder for them to slide**.',
    'Alloys can be designed with the **properties needed** for a particular use.',
  ], mc('Why is an alloy harder than the pure metal?', [
    ['Atoms of different sizes stop the layers of atoms from sliding over each other easily', 'Correct.'],
    ['The alloy has no metallic bonding', 'Alloys still have metallic bonding.'],
    ['Alloys contain only one type of atom', 'Alloys are mixtures of different elements.'],
    ['The alloy has a regular lattice of identical atoms', 'The different-sized atoms make the lattice less regular.'],
  ], 0)),
]);

export const c94 = lesson('c9-reactivity', 'The reactivity series', '9.4', [
  'Metals can be placed in order of reactivity (K, Na, Ca, Mg, Al, Zn, Fe, Cu, Ag, Au). A more reactive metal displaces a less reactive one from its compounds.',
], [
  byte('The reactivity series', [
    'In order of **decreasing reactivity**: **potassium, sodium, calcium, magnesium, aluminium, (carbon), zinc, iron, (hydrogen), copper, silver, gold**.',
    'The more reactive a metal, the more **readily it loses electrons to form positive ions**.',
    'The order is found by comparing reactions with **water, dilute acids and oxygen**, and by **displacement reactions**.',
  ], fig({ svg: 'reactivitySeries' }, mc('Which of these metals is the most reactive?', [
    ['Calcium', 'Correct: it is above magnesium, zinc and iron in the series.'],
    ['Magnesium', 'Calcium is more reactive than magnesium.'],
    ['Zinc', 'Zinc is lower down the series.'],
    ['Copper', 'Copper is very low in the series.'],
  ], 0)), { fig: { svg: 'reactivitySeries', caption: 'The reactivity series' } }),
  byte('Reactions of metals with water and acids', [
    '**Potassium, sodium and calcium** react with **cold water** to form a metal hydroxide and hydrogen. **Magnesium** reacts very slowly with cold water but burns in **steam**, forming magnesium oxide and hydrogen. **Zinc and iron** react with steam.',
    'Metals **above hydrogen** (such as Mg, Zn and Fe) react with **dilute acids** to give a salt and hydrogen. **Copper, silver and gold** do **not** react with dilute acids.',
    'The reactions get **less vigorous** down the series.',
  ], mc('Which metal does not react with dilute hydrochloric acid?', [
    ['Copper', 'Correct: it is below hydrogen in the series.'],
    ['Zinc', 'Zinc reacts to give zinc chloride and hydrogen.'],
    ['Magnesium', 'Magnesium reacts vigorously.'],
    ['Iron', 'Iron reacts slowly to give iron(II) chloride and hydrogen.'],
  ], 0)),
  byte('Displacement reactions', [
    'A **more reactive metal displaces a less reactive metal** from a solution of its salt. Example: **Zn + CuSO₄ → ZnSO₄ + Cu** (zinc dissolves, brown copper is deposited, the blue colour fades).',
    'No reaction occurs if the metal added is **less reactive** than the metal in the solution.',
    'This is a **redox** reaction: zinc loses electrons (oxidised) and copper ions gain them (reduced).',
  ], mc('Iron nails are placed in copper(II) sulfate solution. What is observed?', [
    ['The nails become coated with brown copper and the blue colour fades', 'Correct: iron displaces copper.'],
    ['Nothing happens', 'Iron is more reactive than copper, so it displaces it.'],
    ['Zinc forms on the nails', 'There is no zinc in the reaction.'],
    ['The solution turns pink', 'The solution changes from blue to pale green.'],
  ], 0)),
  byte('Thermal decomposition of carbonates and hydroxides', [
    'Many metal **carbonates decompose on heating** to the **metal oxide and carbon dioxide**, for example **CuCO₃ → CuO + CO₂** (green solid turns black).',
    'The **more reactive the metal, the more stable the carbonate**: sodium and potassium carbonates do not decompose in a Bunsen flame, while copper carbonate decomposes easily.',
    'Metal **hydroxides** decompose to the oxide and water, for example Cu(OH)₂ → CuO + H₂O.',
  ], mc('What happens when copper(II) carbonate is strongly heated?', [
    ['It forms black copper(II) oxide and carbon dioxide', 'Correct.'],
    ['It forms copper metal and oxygen', 'Copper oxide, not copper metal, is produced.'],
    ['It does not change', 'Copper carbonate decomposes easily.'],
    ['It forms copper(II) hydroxide', 'This needs water, not heating.'],
  ], 0)),
]);

export const c95 = lesson('c9-corrosion', 'Corrosion of metals', '9.5', [
  'Iron rusts when exposed to oxygen and water. It can be protected by barriers, galvanising and sacrificial protection.',
], [
  byte('Rusting', [
    '**Rusting** is the corrosion of **iron or steel**. It needs **both oxygen (air) and water**. The product is **hydrated iron(III) oxide**.',
    'Salt (as on roads or by the sea) **speeds up rusting**. Rust is flaky and exposes more iron to attack.',
  ], mc('Which conditions will make an iron nail rust fastest?', [
    ['In air and salty water', 'Correct: oxygen and water are both present, and salt speeds it up.'],
    ['In a sealed tube of dry air', 'No water, so no rusting.'],
    ['In boiled water covered with oil', 'No dissolved oxygen, so little rusting.'],
    ['In a vacuum', 'No oxygen, so no rusting.'],
  ], 0)),
  byte('Preventing rusting', [
    '**Barrier methods** keep out air and water: **paint, oil or grease, plastic coating**.',
    '**Galvanising:** coating iron with **zinc**. Even if scratched, zinc protects the iron by **sacrificial protection**.',
    '**Sacrificial protection:** attach a **more reactive metal** (zinc or magnesium blocks on ship hulls and pipelines). It corrodes instead of the iron because it **loses electrons more readily**.',
    '**Alloying:** stainless steel contains chromium and resists rusting.',
  ], mc('Why do ship hulls have blocks of magnesium or zinc attached?', [
    ['The more reactive metal corrodes instead of the iron, protecting it', 'Correct: this is sacrificial protection.'],
    ['They make the ship heavier so it floats better', 'Weight is not the purpose.'],
    ['They paint the hull', 'The blocks protect through reactivity, not as a coating.'],
    ['They stop the ship reacting with salt', 'They react with the salt water instead of the iron.'],
  ], 0)),
]);

export const c96 = lesson('c9-extraction', 'Extraction of metals', '9.6', [
  'Metals less reactive than carbon are extracted by heating with carbon. More reactive metals, such as aluminium, are extracted by electrolysis of the molten ore.',
], [
  byte('Ores and the method of extraction', [
    'An **ore** is a rock containing enough metal compound to be worth extracting. The **method depends on the position in the reactivity series**.',
    '**Unreactive metals** such as gold occur **native** (uncombined). Metals **below carbon** (zinc, iron, copper) are extracted by **reduction with carbon** (or carbon monoxide). Metals **above carbon** (aluminium, sodium, calcium) need **electrolysis** of the molten compound.',
  ], mc('Why is aluminium extracted by electrolysis instead of heating with carbon?', [
    ['Aluminium is more reactive than carbon, so carbon cannot reduce its oxide', 'Correct.'],
    ['Aluminium is less reactive than carbon', 'Aluminium is above carbon in the series.'],
    ['Carbon is too expensive', 'The chemistry is the reason: carbon is not reactive enough.'],
    ['Aluminium ore is a liquid', 'The ore is a solid and is melted for electrolysis.'],
  ], 0)),
  byte('The blast furnace: extracting iron', [
    'Raw materials: **iron ore (haematite, Fe₂O₃)**, **coke (carbon)**, **limestone (CaCO₃)** and **hot air**.',
    '**Coke burns:** C + O₂ → CO₂ (gives heat). **Carbon monoxide forms:** CO₂ + C → 2CO. **Iron oxide is reduced:** **Fe₂O₃ + 3CO → 2Fe + 3CO₂**.',
    '**Limestone** removes impurities: CaCO₃ → CaO + CO₂, then CaO + SiO₂ → CaSiO₃ (**slag**). Molten iron and slag run out at the bottom.',
  ], fig({ svg: 'blastFurnace' }, mc('What is the role of limestone in the blast furnace?', [
    ['It removes acidic impurities such as sand by forming slag', 'Correct: calcium oxide reacts with silicon dioxide to make calcium silicate.'],
    ['It reduces the iron oxide to iron', 'Carbon monoxide does this.'],
    ['It burns to give heat', 'Coke burns to supply heat.'],
    ['It supplies the iron', 'Iron comes from the ore.'],
  ], 0)), { fig: { svg: 'blastFurnace', caption: 'The blast furnace' } }),
  byte('Extracting aluminium by electrolysis', [
    'Aluminium oxide (from **bauxite**) is **dissolved in molten cryolite**, which **lowers the melting point** and saves energy.',
    '**Cathode (graphite):** Al³⁺ + 3e⁻ → Al, molten aluminium collects at the bottom. **Anode (graphite):** 2O²⁻ → O₂ + 4e⁻. The oxygen **burns the graphite anodes**, forming carbon dioxide, so they must be **replaced regularly**.',
    'The process uses a **large amount of electricity**, so smelters are often near cheap power.',
  ], mc('Why are the carbon anodes in aluminium extraction replaced regularly?', [
    ['The oxygen formed at the anode reacts with the hot carbon and burns it away', 'Correct.'],
    ['They dissolve in cryolite', 'They are consumed by reaction with oxygen.'],
    ['They become coated in aluminium', 'Aluminium forms at the cathode.'],
    ['They melt at the operating temperature', 'Graphite does not melt; it burns.'],
  ], 0)),
]);

export const c101 = lesson('c10-water', 'Water', '10.1', [
  'Anhydrous copper(II) sulfate (white to blue) tests for water. Water for drinking is treated by filtration and chlorination.',
], [
  byte('Testing for water and treating it', [
    '**Test for water:** **anhydrous copper(II) sulfate** turns from **white to blue**; **cobalt(II) chloride paper** turns from **blue to pink**. These only show that water is present, not that it is pure. **Pure water** melts at 0 °C and boils at 100 °C.',
    '**Water treatment:** water is **filtered** (through gravel and sand) to remove solids, then **chlorinated** to kill microbes.',
    'Water has uses in **homes, agriculture and industry**.',
  ], mc('Why is chlorine added to the water supply?', [
    ['To kill harmful microorganisms', 'Correct.'],
    ['To remove dissolved salts', 'Chlorine does not remove salts.'],
    ['To make water boil at a lower temperature', 'It is not added for that.'],
    ['To make the water colourless', 'Chlorine is added to disinfect water.'],
  ], 0)),
]);

export const c102 = lesson('c10-fertilisers', 'Fertilisers', '10.2', [
  'Fertilisers provide nitrogen, phosphorus and potassium. Too much can run into water and cause eutrophication.',
], [
  byte('Fertilisers and NPK', [
    'Plants need **nitrogen (N), phosphorus (P) and potassium (K)** for healthy growth. **Fertilisers** supply these elements to the soil.',
    'Examples: **ammonium nitrate** (N), **ammonium phosphate** (N and P), **potassium nitrate** (N and K). **NPK fertilisers** contain all three.',
    'Excess fertiliser washed into streams and rivers causes **eutrophication**: algae grow quickly, then die and decay, using up oxygen so fish die.',
  ], mc('Which element in a fertiliser helps plants to make proteins for growth?', [
    ['Nitrogen', 'Correct.'],
    ['Oxygen', 'Plants obtain this from air and water.'],
    ['Carbon', 'Plants obtain this from the air as carbon dioxide.'],
    ['Chlorine', 'It is not one of the three main fertiliser elements.'],
  ], 0)),
]);

export const c103 = lesson('c10-air', 'Air quality and climate', '10.3', [
  'Air is mainly nitrogen and oxygen. Pollutants include CO, SO₂, nitrogen oxides and particulates. Carbon dioxide and methane are greenhouse gases that contribute to climate change.',
], [
  byte('The composition of clean dry air', [
    'Clean dry air is about **78% nitrogen**, **21% oxygen**, about **1% argon** and **0.04% carbon dioxide**, with traces of other gases.',
    'The **proportion of oxygen** can be found by passing air over heated copper in a syringe: the volume falls by about **one fifth**.',
  ], mc('Which gas makes up about 78% of clean dry air?', [
    ['Nitrogen', 'Correct.'],
    ['Oxygen', 'Oxygen is about 21%.'],
    ['Carbon dioxide', 'Carbon dioxide is only about 0.04%.'],
    ['Argon', 'Argon is about 1%.'],
  ], 0)),
  byte('Air pollutants and their effects', [
    '**Carbon monoxide** (incomplete combustion of fuels) is **toxic**: it stops blood carrying oxygen.',
    '**Sulfur dioxide** (burning fossil fuels containing sulfur) causes **acid rain** and breathing problems. **Oxides of nitrogen** (from car engines at high temperatures, and lightning) cause **acid rain** and respiratory problems.',
    '**Particulates** (soot) from burning fuels harm the lungs.',
  ], mc('Which pollutant is produced by the incomplete combustion of fuels?', [
    ['Carbon monoxide', 'Correct.'],
    ['Sulfur dioxide', 'This comes from sulfur impurities in fuels.'],
    ['Nitrogen dioxide', 'This forms when nitrogen and oxygen react at high temperature.'],
    ['Water vapour', 'This is a harmless combustion product.'],
  ], 0)),
  byte('Reducing pollution: catalytic converters', [
    'A **catalytic converter** in a car exhaust contains **platinum or rhodium** catalysts. It converts harmful gases into less harmful ones: **2CO + 2NO → 2CO₂ + N₂**.',
    '**Sulfur dioxide** emissions can be reduced by removing sulfur from fuels or by treating waste gases from power stations.',
  ], mc('What does a catalytic converter change carbon monoxide and nitrogen monoxide into?', [
    ['Carbon dioxide and nitrogen', 'Correct: 2CO + 2NO → 2CO₂ + N₂.'],
    ['Carbon and oxygen', 'This is not the reaction.'],
    ['Sulfur dioxide and water', 'No sulfur is involved.'],
    ['More carbon monoxide', 'The converter reduces carbon monoxide.'],
  ], 0)),
  byte('Greenhouse gases and climate change', [
    '**Carbon dioxide and methane** are **greenhouse gases**. They **absorb infrared radiation** emitted by the Earth’s surface and re-emit some of it, which **traps energy** and warms the atmosphere.',
    '**Carbon dioxide** is released by **burning fossil fuels** and **deforestation**. **Methane** comes from **cattle, rice fields and waste decomposing**.',
    'Increasing levels contribute to **climate change**: rising temperatures, melting ice, sea-level rise and changing weather.',
  ], mc('Why do greenhouse gases cause warming of the atmosphere?', [
    ['They absorb infrared radiation from the Earth and re-emit it, trapping energy', 'Correct.'],
    ['They absorb all ultraviolet radiation from the Sun', 'That describes ozone, not the greenhouse effect.'],
    ['They produce heat by reacting with oxygen', 'They warm by absorbing infrared radiation.'],
    ['They reflect all sunlight back into space', 'They trap outgoing infrared.'],
  ], 0)),
  byte('Fossil fuels and combustion', [
    'Burning a **hydrocarbon fuel completely** in plenty of air gives **carbon dioxide and water**. With **limited oxygen**, **carbon monoxide** and **carbon (soot)** form.',
    'For example **CH₄ + 2O₂ → CO₂ + 2H₂O**. Combustion is **exothermic**.',
  ], mc('What are the products of the complete combustion of methane?', [
    ['Carbon dioxide and water', 'Correct.'],
    ['Carbon monoxide and water', 'This needs limited oxygen (incomplete combustion).'],
    ['Carbon and hydrogen', 'The products are oxides.'],
    ['Carbon dioxide only', 'Water is also formed.'],
  ], 0)),
]);

export const unit5 = {
  id: 'c5', number: 5, title: 'Metals and the Environment', short: 'Metals', emoji: '⛏️', color: 'violet',
  submodules: [c91, c93, c94, c95, c96, c101, c102, c103],
  papers: [],
};
