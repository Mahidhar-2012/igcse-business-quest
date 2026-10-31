import { byte, lesson, mc, calc, fig } from '../helpers.js';

// Unit 4: Acids, bases, salts and the Periodic Table (syllabus topics 7 and 8).

export const c71 = lesson('c7-acids', 'Acids and bases', '7.1', [
  'Acids have pH below 7, bases above 7. Acids react with bases, carbonates and metals to make salts. Strong acids ionise completely; weak acids only partially.',
], [
  byte('Acids, alkalis and the pH scale', [
    'An **acid** is a substance that forms **H⁺ ions in water**; a **base** is a substance that neutralises an acid; an **alkali** is a **soluble base**, forming **OH⁻ ions** in water.',
    'The **pH scale** runs from 0 to 14: **below 7 acidic**, **7 neutral**, **above 7 alkaline**. **Universal indicator** shows red (strong acid) → yellow → green (neutral) → blue → purple (strong alkali).',
    'Litmus is **red in acid and blue in alkali**. Methyl orange is **red in acid and yellow in alkali**. Thymolphthalein is **colourless in acid and blue in alkali**.',
  ], fig({ svg: 'phScale' }, mc('A solution turns blue litmus paper red and universal indicator orange. What is its likely pH?', [
    ['About 3', 'Correct: orange universal indicator shows a weak-to-moderate acid.'],
    ['About 7', 'Neutral solutions turn universal indicator green.'],
    ['About 10', 'Alkaline solutions turn litmus blue.'],
    ['About 14', 'This is a strong alkali, giving a purple colour.'],
  ], 0)), { fig: { svg: 'phScale', caption: 'The pH scale and universal indicator colours' } }),
  byte('Reactions of acids', [
    '**Acid + base (or alkali) → salt + water**. This is **neutralisation**: **H⁺(aq) + OH⁻(aq) → H₂O(l)**.',
    '**Acid + metal carbonate → salt + water + carbon dioxide.** **Acid + reactive metal → salt + hydrogen.**',
    'Examples: HCl + NaOH → NaCl + H₂O; 2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂; H₂SO₄ + Mg → MgSO₄ + H₂.',
  ], mc('What are the products when hydrochloric acid reacts with calcium carbonate?', [
    ['Calcium chloride, water and carbon dioxide', 'Correct.'],
    ['Calcium chloride and hydrogen', 'Hydrogen forms when an acid reacts with a metal, not a carbonate.'],
    ['Calcium oxide and chlorine', 'This is not what happens in this reaction.'],
    ['Calcium hydroxide and water', 'A carbonate gives CO₂ with an acid.'],
  ], 0)),
  byte('Strong and weak acids; proton transfer', [
    'A **strong acid** is **completely ionised** (dissociated) in water, for example **hydrochloric acid** (HCl → H⁺ + Cl⁻). A **weak acid** is only **partially ionised**, for example **ethanoic acid**, and the reaction is reversible.',
    'At the same concentration a strong acid has a **lower pH**, **conducts better** and reacts **faster**.',
    'An acid is a **proton (H⁺) donor** and a base is a **proton acceptor**.',
  ], mc('Why does 0.1 mol/dm³ ethanoic acid have a higher pH than 0.1 mol/dm³ hydrochloric acid?', [
    ['Ethanoic acid is only partially ionised, so it produces fewer H⁺ ions', 'Correct.'],
    ['Ethanoic acid has more H⁺ ions', 'It produces fewer, because it is a weak acid.'],
    ['Hydrochloric acid is a weak acid', 'Hydrochloric acid is a strong acid.'],
    ['Ethanoic acid is an alkali', 'It is an acid.'],
  ], 0)),
]);

export const c72 = lesson('c7-oxides', 'Oxides', '7.2', [
  'Metal oxides are usually basic; non-metal oxides are usually acidic; some oxides (such as aluminium oxide and zinc oxide) are amphoteric.',
], [
  byte('Acidic, basic and amphoteric oxides', [
    '**Acidic oxides** are **non-metal** oxides, for example **CO₂ and SO₂**. They react with bases to make salts and dissolve in water to give acidic solutions.',
    '**Basic oxides** are **metal oxides**, for example **CuO and MgO**. They react with acids to form a salt and water.',
    '**Amphoteric oxides**, such as **aluminium oxide (Al₂O₃)** and **zinc oxide (ZnO)**, react with **both acids and bases**.',
  ], mc('Which oxide reacts with both hydrochloric acid and sodium hydroxide?', [
    ['Aluminium oxide', 'Correct: it is amphoteric.'],
    ['Copper(II) oxide', 'This is a basic oxide and reacts only with acids.'],
    ['Sulfur dioxide', 'This is an acidic oxide and reacts with bases only.'],
    ['Carbon dioxide', 'This is an acidic oxide.'],
  ], 0)),
]);

export const c73 = lesson('c7-salts', 'Preparation of salts', '7.3', [
  'Soluble salts are made from acids using excess solid (filter and crystallise) or by titration with an alkali. Insoluble salts are made by precipitation.',
], [
  byte('Soluble salt from an insoluble base, carbonate or metal', [
    'Add the **solid in excess** to the **warm acid** until no more reacts (bubbling stops or solid remains).',
    '**Filter** to remove the excess solid, then **heat the filtrate** to evaporate some water until crystals start to form (the point of crystallisation), leave to cool, **filter the crystals**, wash and dry.',
    'The excess ensures **all the acid is used**, so the salt is not contaminated with acid.',
  ], mc('Why is an excess of copper(II) oxide added when making copper(II) sulfate from sulfuric acid?', [
    ['To make sure all the acid reacts', 'Correct: the unreacted oxide is then simply filtered off.'],
    ['To make the solution acidic', 'The aim is to use up the acid.'],
    ['To speed up crystallisation', 'The excess does not affect crystallisation.'],
    ['Because copper(II) oxide is soluble', 'It is insoluble, which is why it can be filtered off.'],
  ], 0)),
  byte('Soluble salt by titration', [
    'To make a salt from a **soluble base (alkali)** and an acid, both are soluble, so you cannot filter off an excess.',
    '**Titrate** to find the exact volume of acid that neutralises a known volume of alkali (using an indicator). **Repeat without the indicator** using that volume, then **evaporate and crystallise**.',
  ], mc('Why is the titration repeated without the indicator when making a salt?', [
    ['So that the salt crystals are not contaminated with indicator', 'Correct.'],
    ['Because indicators speed up neutralisation', 'Indicators do not speed up reactions.'],
    ['To check the pH of water', 'The aim is a pure salt.'],
    ['Because the acid is no longer needed', 'The acid is still needed in the same volume.'],
  ], 0)),
  byte('Insoluble salts by precipitation', [
    'Mix **two soluble solutions** that contain the ions of the insoluble salt. The salt forms as a **precipitate**.',
    '**Filter**, **wash the residue** with distilled water to remove soluble impurities, then **dry** it.',
    'Example: **barium chloride(aq) + sodium sulfate(aq) → barium sulfate(s) + sodium chloride(aq)**; ionic equation Ba²⁺ + SO₄²⁻ → BaSO₄.',
  ], mc('Which pair of solutions could be mixed to make a precipitate of lead(II) iodide?', [
    ['Lead(II) nitrate and potassium iodide', 'Correct: both are soluble and combine to give insoluble PbI₂.'],
    ['Lead(II) sulfate and potassium nitrate', 'Lead(II) sulfate is insoluble, so it is not a solution.'],
    ['Lead(II) nitrate and sodium nitrate', 'No iodide ions are present.'],
    ['Potassium nitrate and sodium iodide', 'No lead ions are present.'],
  ], 0)),
  byte('Solubility rules', [
    '**All nitrates** and the salts of **sodium, potassium and ammonium** are **soluble**.',
    '**Chlorides** are soluble **except silver and lead(II) chloride**. **Sulfates** are soluble **except barium, calcium and lead(II) sulfate**.',
    '**Carbonates and hydroxides** are **insoluble except those of sodium, potassium and ammonium** (calcium hydroxide is slightly soluble).',
  ], mc('Which of these compounds is insoluble in water?', [
    ['Barium sulfate', 'Correct: barium sulfate is an insoluble sulfate.'],
    ['Sodium nitrate', 'All nitrates are soluble.'],
    ['Potassium carbonate', 'Potassium salts are soluble.'],
    ['Magnesium chloride', 'Most chlorides are soluble.'],
  ], 0)),
]);

export const c81 = lesson('c8-table', 'Arrangement of elements', '8.1', [
  'The Periodic Table orders elements by proton number. Group number gives outer electrons; elements change from metallic to non-metallic across a period.',
], [
  byte('Layout and trends across a period', [
    'Elements are arranged in order of **increasing proton number**. A **group** is a vertical column of elements with **similar properties** and the **same number of outer electrons**. A **period** is a horizontal row.',
    'Across a period the elements change from **metals** (left) to **non-metals** (right). Oxides change from **basic** to **acidic**.',
    '**Metals** are on the left and centre, **non-metals** on the right, and the line between them includes elements with intermediate properties.',
  ], mc('Which statement about the Periodic Table is correct?', [
    ['Elements in the same group have the same number of outer electrons', 'Correct, which is why they have similar properties.'],
    ['Elements in the same period have the same number of outer electrons', 'Elements in a period have the same number of shells.'],
    ['The elements are arranged by relative atomic mass only', 'They are arranged by proton number.'],
    ['Metals are on the right and non-metals on the left', 'It is the other way round.'],
  ], 0)),
]);

export const c82 = lesson('c8-group1', 'Group I: the alkali metals', '8.2', [
  'Group I metals (Li, Na, K) are soft, low-density metals with low melting points. They react vigorously with water to give hydrogen and an alkaline hydroxide, and reactivity increases down the group.',
], [
  byte('Properties of the alkali metals', [
    'Lithium, sodium and potassium are **soft** (cut with a knife), have **low densities** (Li, Na and K float on water) and **low melting points**.',
    'Going **down the group** the **melting point decreases** (lithium about 181 °C, potassium about 63 °C).',
    'They form **+1 ions** and their compounds are white or colourless.',
  ], mc('How do the melting points of the Group I metals change down the group?', [
    ['They decrease', 'Correct: lithium melts at about 181 °C and potassium at about 63 °C.'],
    ['They increase', 'The trend in Group I is downwards.'],
    ['They stay the same', 'They change down the group.'],
    ['They first increase then decrease', 'The trend is a steady decrease.'],
  ], 0)),
  byte('Reactions with water and reactivity', [
    'Group I metals react with water to give **hydrogen** and a **hydroxide** that forms an **alkaline solution**: **2Na + 2H₂O → 2NaOH + H₂**.',
    '**Lithium** fizzes gently, **sodium** melts into a ball and moves quickly, and **potassium** burns with a lilac flame. The reactions become **more vigorous down the group**.',
    'Reactivity increases because the **outer electron is further from the nucleus and more shielded**, so it is **lost more easily**.',
  ], mc('Which metal reacts most vigorously with water?', [
    ['Potassium', 'Correct: it is lowest of the three in the group, so it loses its outer electron most easily.'],
    ['Sodium', 'Sodium is less reactive than potassium.'],
    ['Lithium', 'Lithium is the least reactive of the three.'],
    ['They all react at the same rate', 'The reactivity increases down the group.'],
  ], 0)),
]);

export const c83 = lesson('c8-group7', 'Group VII: the halogens', '8.3', [
  'The halogens are diatomic non-metals whose colour deepens and melting point rises down the group. Reactivity decreases down the group, so a more reactive halogen displaces a less reactive one.',
], [
  byte('Properties of the halogens', [
    '**Chlorine** is a **pale yellow-green gas**, **bromine** a **red-brown liquid** and **iodine** a **grey-black solid** (giving a purple vapour).',
    'They exist as **diatomic molecules** (Cl₂, Br₂, I₂). Going down the group the **colour gets darker** and the **melting and boiling points increase**.',
    'Halogens form **−1 ions** (halides) and are **poisonous**.',
  ], mc('What is the physical state of bromine at room temperature?', [
    ['A red-brown liquid', 'Correct.'],
    ['A pale yellow-green gas', 'This describes chlorine.'],
    ['A grey-black solid', 'This describes iodine.'],
    ['A colourless gas', 'No common halogen is colourless.'],
  ], 0)),
  byte('Reactivity and displacement reactions', [
    '**Reactivity decreases down the group**: fluorine and chlorine are more reactive than bromine and iodine, because the outer shell is further from the nucleus so it **gains an electron less easily**.',
    'A **more reactive halogen displaces a less reactive halogen** from a solution of its halide: **Cl₂ + 2KBr → 2KCl + Br₂** (the solution turns orange-brown).',
    'Iodine does **not** displace chlorine or bromine.',
  ], mc('Chlorine is bubbled through potassium bromide solution. What happens?', [
    ['The solution turns orange-brown as bromine is displaced', 'Correct: chlorine is more reactive than bromine.'],
    ['Nothing happens', 'Chlorine can displace bromine.'],
    ['Potassium chloride and iodine are formed', 'No iodide is present.'],
    ['Chlorine is displaced by bromide ions', 'Bromine is less reactive than chlorine, so it cannot displace it.'],
  ], 0)),
]);

export const c84 = lesson('c8-transition', 'Transition elements', '8.4', [
  'Transition elements are hard, dense metals with high melting points that form coloured compounds, have variable oxidation states and act as catalysts.',
], [
  byte('Properties of transition elements', [
    'Transition elements (such as iron, copper and nickel) are **typical metals**: **high densities**, **high melting points**, **good conductors** and **strong**.',
    'They form **coloured compounds** (Cu²⁺ blue, Fe²⁺ green, Fe³⁺ orange-brown) and often have **more than one oxidation state**, for example iron(II) and iron(III).',
    'Many are useful **catalysts**: iron in the Haber process, nickel in margarine manufacture, vanadium(V) oxide in the Contact process.',
  ], mc('Which property is typical of a transition element but not of a Group I metal?', [
    ['It forms coloured compounds and has several oxidation states', 'Correct.'],
    ['It is a good conductor of electricity', 'All metals conduct electricity.'],
    ['It is soft and floats on water', 'This describes Group I metals.'],
    ['It reacts violently with cold water', 'Group I metals do this; transition elements are far less reactive.'],
  ], 0)),
]);

export const c85 = lesson('c8-noble', 'Noble gases', '8.5', [
  'Noble gases are unreactive monatomic gases because they have full outer shells.',
], [
  byte('The noble gases', [
    'The **noble gases** (helium, neon, argon, krypton, xenon) are in **Group VIII (0)**. They are **colourless, monatomic gases**.',
    'They are **unreactive** because they have a **full outer shell** of electrons, so they do not need to gain, lose or share electrons.',
    '**Uses:** helium in balloons and airships (low density and non-flammable); argon in filament lamps and as an inert atmosphere for welding; neon in advertising signs.',
  ], mc('Why is argon used inside filament light bulbs?', [
    ['It is unreactive, so it stops the hot filament reacting with oxygen', 'Correct.'],
    ['It reacts with the filament to give light', 'It is inert and does not react.'],
    ['It is lighter than air', 'Helium is the very light gas; argon is denser than air.'],
    ['It is a good conductor of electricity', 'It is used as an insulating inert gas.'],
  ], 0)),
]);

export const unit4 = {
  id: 'c4', number: 4, title: 'Acids, Salts and the Periodic Table', short: 'Acids', emoji: '🧪', color: 'amber',
  submodules: [c71, c72, c73, c81, c82, c83, c84, c85],
  papers: [],
};
