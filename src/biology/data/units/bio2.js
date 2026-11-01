import { byte, lesson, mc, calc, fig } from '../helpers.js';
import { multi, match, cloze, short } from '../../../data/builders.js';

// Units 3 and 4: biological molecules and enzymes; plant nutrition
// (Cambridge IGCSE Biology 0610, syllabus for 2026, 2027 and 2028, topics 4 to 6).

const withPractice = (l, ...qs) => { l.challenges = qs; return l; };

export const b41 = withPractice(lesson('b4-molecules', 'Biological molecules', '4.1', [
  'Carbohydrates, fats and proteins are made of carbon, hydrogen and oxygen (proteins also contain nitrogen). Large molecules are built from small ones. Food tests use iodine, Benedict’s, biuret, ethanol and DCPIP. DNA is a double helix with paired bases.',
], [
  byte('Elements and building blocks', [
    '**Carbohydrates:** carbon, hydrogen and oxygen. **Fats:** carbon, hydrogen and oxygen. **Proteins:** carbon, hydrogen, oxygen and **nitrogen** (some also contain sulfur).',
    'Large molecules are made from smaller ones: **starch, glycogen and cellulose** from **glucose**; **proteins** from **amino acids**; **fats and oils** from **fatty acids and glycerol**.',
  ], match('Match each large molecule to the small molecules it is built from.', [
    ['Starch', 'Glucose'],
    ['Protein', 'Amino acids'],
    ['Fat', 'Fatty acids and glycerol'],
  ], 'Starch, glycogen and cellulose are all made of glucose but have different structures and functions.')),
  byte('Food tests', [
    '**Starch:** iodine solution turns from **orange-brown to blue-black**. **Reducing sugars:** heat with **Benedict’s solution**; blue turns to **green, yellow, orange or brick-red** depending on the amount.',
    '**Protein:** **biuret** test; blue turns to **purple (lilac)**. **Fats and oils:** **ethanol emulsion** test; a **cloudy white emulsion** forms when the ethanol solution is added to water. **Vitamin C:** **DCPIP** (blue) is **decolourised** to colourless.',
  ], match('Match each test to a positive result.', [
    ['Iodine solution', 'Blue-black colour with starch'],
    ['Benedict’s solution, heated', 'Brick-red precipitate with a reducing sugar'],
    ['Biuret solution', 'Purple colour with protein'],
    ['Ethanol then water', 'Cloudy white emulsion with fat'],
    ['DCPIP', 'Blue decolourised by vitamin C'],
  ])),
  byte('Interpreting food test results', [
    'A sample that gives **orange-brown with iodine** and **blue with Benedict’s** contains neither starch nor reducing sugar.',
    '**Sucrose is not a reducing sugar**, so Benedict’s stays blue until sucrose is first broken down by boiling with acid.',
  ], mc('A food gives a purple colour with biuret solution and a blue-black colour with iodine. What does it contain?', [
    ['Protein and starch', 'Correct.'],
    ['Protein only', 'Iodine shows starch as well.'],
    ['Starch and a reducing sugar', 'Biuret tests for protein, not sugar.'],
    ['Fat and protein', 'The fat test was not carried out and iodine does not test for fat.'],
  ], 0)),
  byte('The structure of DNA', [
    '**DNA** is a molecule with **two strands coiled together into a double helix**. Each strand contains chemicals called **bases**. **Bonds between pairs of bases** hold the strands together. The bases always pair the same way: **A with T** and **C with G**.',
  ], mc('One strand of DNA has the base sequence A T G C. What is the sequence of the matching strand?', [
    ['T A C G', 'Correct: A pairs with T and C pairs with G.'],
    ['A T G C', 'This is the same strand.'],
    ['C G T A', 'A pairs with T, not C.'],
    ['T A G C', 'G pairs with C, so the third base is C, then G.'],
  ], 0)),
]),
  short('Describe how to test a food sample for starch.', { kind: 'Exam question', command: 'Describe', points: ['Add iodine solution to the sample', 'A blue-black colour shows starch is present (it stays orange-brown if there is none)'], model: 'Add iodine solution to the food sample. If starch is present, the colour changes from orange-brown to blue-black.' }),
  mc('A student heats a sample with Benedict’s solution and it stays blue. Which conclusion is correct?', [
    ['It contains no reducing sugar, although it could still contain sucrose', 'Correct.'],
    ['It contains no sugar of any kind, so it cannot contain sucrose either', 'Sucrose is a non-reducing sugar and does not react.'],
    ['It contains starch, because blue is the colour that shows starch', 'Starch is tested with iodine.'],
    ['It contains protein, because blue is the starting colour of the test', 'Protein is tested with biuret.'],
  ], 0),
  short('State the base pairing rule in DNA.', { kind: 'Definition', points: ['A pairs with T', 'C pairs with G'], model: 'Adenine (A) pairs with thymine (T), and cytosine (C) pairs with guanine (G).' }),
);

export const b51 = withPractice(lesson('b5-enzymes', 'Enzymes', '5.1', [
  'Enzymes are proteins that act as biological catalysts. Their active site is complementary to their substrate. Rate rises with temperature up to the optimum, then the enzyme is denatured. Each enzyme has an optimum pH.',
], [
  byte('Enzymes as biological catalysts', [
    'A **catalyst** increases the rate of a chemical reaction and is **not changed** by it. **Enzymes** are **proteins** that act as **biological catalysts** in all metabolic reactions.',
    'They are important because without them reactions in cells would be **too slow** to sustain life at body temperature.',
  ], mc('Why is an enzyme described as a biological catalyst?', [
    ['It speeds up a chemical reaction in a cell and is not used up', 'Correct.'],
    ['It supplies energy to a reaction in a cell and is used up as it works', 'Enzymes are not used up.'],
    ['It slows down a reaction so that cells do not overheat', 'Enzymes increase rates.'],
    ['It changes into the product as the reaction proceeds', 'The substrate becomes the product, not the enzyme.'],
  ], 0)),
  byte('How an enzyme works', [
    'Each enzyme has an **active site** with a shape **complementary** to its **substrate**. The substrate binds to form an **enzyme-substrate complex**, the reaction occurs and the **products** leave. The enzyme is unchanged and can be used again.',
    'Enzymes are **specific**: only a substrate with the right shape fits the active site.',
  ], fig({ svg: 'enzymeAction' }, mc('Why can amylase break down starch but not protein?', [
    ['The shape of its active site is complementary to starch, not to protein', 'Correct.'],
    ['Starch is a smaller molecule than protein, so it fits more easily', 'Fit depends on shape, not just size.'],
    ['Protein is changed into starch by amylase, so it cannot be digested', 'Not what happens.'],
    ['Amylase is denatured by protein, so it cannot work on it', 'Specificity is the reason.'],
  ], 0)), { fig: { svg: 'enzymeAction', caption: 'Enzyme action and denaturation' } }),
  byte('Temperature and enzyme activity', [
    'As temperature rises, **kinetic energy** increases, so enzyme and substrate molecules collide more often and the **rate increases** up to the **optimum temperature**.',
    'Above the optimum, the enzyme molecule vibrates so much that its **shape changes**: the **active site** no longer fits the substrate. The enzyme is **denatured** and the change is **permanent**.',
  ], mc('The rate of an enzyme-controlled reaction falls sharply above 45 °C. Which is the best explanation?', [
    ['The shape of the active site changes, so the substrate no longer fits (denaturation)', 'Correct.'],
    ['The substrate molecules run out because the reaction was faster at lower temperatures', 'The substrate has not changed.'],
    ['The enzyme molecules move more slowly, so collisions become less frequent', 'Higher temperature means faster movement.'],
    ['The enzyme is digested by the substrate, so there is less enzyme to react', 'Not the explanation.'],
  ], 0)),
  byte('pH and enzyme activity', [
    'Each enzyme has an **optimum pH** at which it works best (for example **pepsin** in the stomach works best at pH 2; **amylase** in the mouth works best at about pH 7).',
    'A pH that is too high or too low changes the shape of the **active site** and **denatures** the enzyme.',
  ], match('Match each enzyme to its approximate optimum condition.', [
    ['Pepsin in the stomach', 'Acid pH (about 2)'],
    ['Salivary amylase in the mouth', 'About neutral pH'],
    ['Enzymes in the human body in general', 'Around 37 °C'],
  ])),
]),
  short('Define the term “denatured”.', { kind: 'Definition', points: ['The shape of the enzyme (its active site) is permanently changed', 'so the substrate no longer fits and the enzyme cannot work'], model: 'An enzyme is denatured when its shape, including the shape of its active site, is permanently changed by heat or pH, so the substrate no longer fits.' }),
  short('Explain why enzymes work faster at 37 °C than at 10 °C.', { command: 'Explain', points: ['Molecules have more kinetic energy at 37 °C', 'So enzyme and substrate collide more often with enough energy, making more enzyme-substrate complexes'], model: 'At 37 °C molecules have more kinetic energy, so enzyme and substrate molecules collide more often and more successfully, forming more enzyme-substrate complexes per second.' }),
  multi('Which statements about enzymes are correct? Select all that apply.', [
    ['They are proteins', 'Yes.', true],
    ['They are not used up in the reaction', 'They are catalysts.', true],
    ['They have an active site with a specific shape', 'Yes.', true],
    ['They work equally well at every temperature', 'They have an optimum.', false],
  ]),
);

export const b61 = withPractice(lesson('b6-photosynthesis', 'Photosynthesis', '6.1', [
  'Photosynthesis makes glucose from carbon dioxide and water using light energy absorbed by chlorophyll in chloroplasts. Glucose is used for respiration or stored as starch, or made into cellulose, sucrose and nectar. Nitrate and magnesium ions are needed. The rate depends on light, carbon dioxide and temperature, and the scarcest of these is the limiting factor.',
], [
  byte('The photosynthesis equation', [
    '**Photosynthesis** is the process by which plants **make carbohydrates from raw materials using energy from light**.',
    'Word equation: **carbon dioxide + water → glucose + oxygen** (in the presence of **light** and **chlorophyll**). Balanced equation: **6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.**',
    '**Chlorophyll** is a green pigment in **chloroplasts**; it **transfers light energy into chemical energy** for making carbohydrates.',
  ], cloze('Complete the equation for photosynthesis.', '6CO₂ + ___ → C₆H₁₂O₆ + ___, using energy from light absorbed by chlorophyll.', ['6H₂O', '6O₂'], ['6H₂', '12O₂']), { eq: ['6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂'] }),
  byte('Uses of glucose made in photosynthesis', [
    '**Starch:** an insoluble **energy store**. **Cellulose:** used to build **cell walls**. **Glucose:** used in **respiration** to release energy. **Sucrose:** the soluble form in which carbohydrate is **transported in the phloem**. **Nectar:** sugar solution that **attracts insects** for pollination.',
    'Nitrate ions are needed to make **amino acids** (for proteins); magnesium ions are needed to make **chlorophyll**.',
  ], match('Match each substance to its use in a plant.', [
    ['Starch', 'Energy store'],
    ['Cellulose', 'Builds cell walls'],
    ['Sucrose', 'Transported in the phloem'],
    ['Nitrate ions', 'Used to make amino acids'],
    ['Magnesium ions', 'Used to make chlorophyll'],
  ])),
  byte('Investigating photosynthesis', [
    '**Need for chlorophyll:** a variegated (green and white) leaf tested for starch only goes blue-black where it was green. **Need for light:** a leaf covered with foil has no starch underneath. **Need for carbon dioxide:** a plant in soda lime has no starch.',
    '**Starch test on a leaf:** boil in water (to kill and soften), boil in ethanol (to remove chlorophyll), rinse, add **iodine solution**. Always use a **control**.',
  ], mc('Why is a leaf boiled in ethanol before it is tested with iodine?', [
    ['To remove the chlorophyll so the colour change can be seen', 'Correct.'],
    ['To kill the leaf so that it stops making starch', 'That is the first boiling in water.'],
    ['To dissolve the starch so that it can react with the iodine', 'Starch is not dissolved by ethanol.'],
    ['To soften the leaf so that iodine can enter the cells', 'Boiling in water does this.'],
  ], 0)),
  byte('Factors that affect the rate of photosynthesis', [
    'The rate increases with **light intensity**, **carbon dioxide concentration** and **temperature**, up to a limit. At high temperature **enzymes are denatured** and the rate falls.',
    'A **limiting factor** is the factor in shortest supply that stops the rate rising further. If light is the limiting factor, adding carbon dioxide will not increase the rate; adding more light will.',
  ], mc('A greenhouse plant is in bright light at 25 °C. Its rate of photosynthesis does not rise when the temperature is increased to 30 °C but does rise when carbon dioxide is added. What is the limiting factor?', [
    ['Carbon dioxide concentration', 'Correct.'],
    ['Light intensity', 'Light is already bright.'],
    ['Temperature', 'Raising the temperature made no difference.'],
    ['Chlorophyll concentration', 'Not tested and not changed.'],
  ], 0)),
  byte('Gas exchange in an aquatic plant', [
    'Hydrogencarbonate indicator is **red/orange** at normal carbon dioxide levels, **yellow** when carbon dioxide is **high** and **purple** when it is **low**.',
    'In **light** an aquatic plant uses carbon dioxide in photosynthesis faster than it makes it in respiration, so the indicator goes **purple**. In the **dark** only respiration happens, carbon dioxide builds up and the indicator goes **yellow**.',
  ], mc('A pond plant in a tube of hydrogencarbonate indicator is kept in the dark for two hours. What colour change is expected, and why?', [
    ['Red to yellow, because respiration releases carbon dioxide and there is no photosynthesis', 'Correct.'],
    ['Red to purple, because photosynthesis removes carbon dioxide from the solution', 'No photosynthesis happens in the dark.'],
    ['Red to yellow, because photosynthesis releases carbon dioxide in the dark', 'Photosynthesis uses carbon dioxide.'],
    ['No change, because the plant does not respire in the dark', 'Plants respire all the time.'],
  ], 0)),
]),
  short('State the word equation for photosynthesis.', { kind: 'Definition', points: ['Carbon dioxide + water', '→ glucose + oxygen', 'in the presence of light and chlorophyll'], model: 'Carbon dioxide + water → glucose + oxygen, in the presence of light and chlorophyll.' }),
  short('Explain why a plant needs nitrate ions.', { command: 'Explain', points: ['Nitrate ions provide nitrogen', 'which is needed to make amino acids and so proteins'], model: 'Nitrate ions provide the nitrogen needed to make amino acids, which are joined to make proteins.' }),
  multi('Which of these are used or made in photosynthesis? Select all that apply.', [
    ['Carbon dioxide is used', 'A raw material.', true],
    ['Light energy is used', 'Absorbed by chlorophyll.', true],
    ['Oxygen is released', 'A product.', true],
    ['Glucose is used as a raw material', 'Glucose is the product.', false],
  ]),
);

export const b62 = withPractice(lesson('b6-leaf', 'Leaf structure', '6.2', [
  'Leaves are broad and thin to absorb light and let gases diffuse. The palisade layer has many chloroplasts. Stomata with guard cells let gases in and out. The spongy layer has air spaces. Veins carry water and sucrose.',
], [
  byte('Leaf adaptations for photosynthesis', [
    'Most leaves have a **large surface area** (absorbs more light) and are **thin** (short diffusion distance for gases, light reaches all cells).',
    'Structures: **cuticle** (waxy, reduces water loss), **upper epidermis** (transparent so light passes through), **palisade mesophyll** (many chloroplasts, packed near the top), **spongy mesophyll** (air spaces for gas diffusion), **lower epidermis with stomata and guard cells**, and **vascular bundles** (xylem brings water; phloem carries away sucrose).',
  ], fig({ svg: 'leafSection' }, mc('Which feature of the upper epidermis helps photosynthesis?', [
    ['It is transparent, so light passes through to the palisade cells', 'Correct.'],
    ['It contains many chloroplasts for absorbing the light', 'The palisade layer has most of the chloroplasts.'],
    ['It has many stomata, so carbon dioxide can enter from above', 'Most stomata are in the lower epidermis.'],
    ['It is thick, so it prevents all loss of water vapour from the leaf', 'It is thin and transparent; the cuticle reduces water loss.'],
  ], 0)), { fig: { svg: 'leafSection', caption: 'Section through a leaf' } }),
  byte('Stomata, air spaces and veins', [
    '**Stomata** are pores in the lower epidermis; **guard cells** open and close them. Carbon dioxide **diffuses in** and oxygen and water vapour diffuse out.',
    'The **air spaces** in the spongy mesophyll give a **large internal surface area** for gas exchange with the cells. **Xylem** brings water for photosynthesis; **phloem** takes away sucrose.',
  ], mc('Why are there air spaces between the cells in the spongy mesophyll?', [
    ['They allow gases to diffuse quickly to and from the cells', 'Correct.'],
    ['They store water for the cells to use in the dark', 'Not their function.'],
    ['They allow the cells to move to catch more light', 'Cells do not move.'],
    ['They hold chloroplasts in the correct position', 'Chloroplasts are inside the cells.'],
  ], 0)),
]),
  short('Describe two ways in which a leaf is adapted for photosynthesis.', { kind: 'Exam question', command: 'Describe', points: ['Large surface area absorbs more light', 'Thin, so gases diffuse a short distance and light reaches the cells', 'Many chloroplasts in the palisade layer (or stomata allow gas entry)'], model: 'A leaf has a large surface area to absorb light and is thin so that carbon dioxide has a short distance to diffuse and light reaches all cells. The palisade layer contains many chloroplasts.' }),
  match('Match each part of the leaf to its function.', [
    ['Guard cells', 'Open and close the stomata'],
    ['Palisade mesophyll', 'Most photosynthesis'],
    ['Xylem', 'Brings water to the leaf'],
    ['Phloem', 'Carries sucrose away from the leaf'],
  ]),
);

export const unit3 = {
  id: 'b3', number: 3, title: 'Biological Molecules and Enzymes', short: 'Molecules', emoji: '🧬', color: 'violet',
  submodules: [b41, b51],
  papers: [],
};

export const unit4 = {
  id: 'b4', number: 4, title: 'Plant Nutrition', short: 'Plants', emoji: '🌱', color: 'amber',
  submodules: [b61, b62],
  papers: [],
};
