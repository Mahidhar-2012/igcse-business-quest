import { byte, lesson, mc, calc, fig } from '../helpers.js';
import { multi, match, cloze, short } from '../../../data/builders.js';

// Units 1 and 2: living organisms, cells, and movement into and out of cells
// (Cambridge IGCSE Biology 0610, syllabus for 2026, 2027 and 2028, topics 1 to 3).
// Tests follow the hard-question standard: same-length options, misconception distractors, varied types.

const withPractice = (l, ...qs) => { l.challenges = qs; return l; };

export const b11 = withPractice(lesson('b1-characteristics', 'Characteristics of living organisms', '1.1', [
  'Living organisms move, respire, respond to stimuli, grow, reproduce, excrete and take in nutrition.',
], [
  byte('The seven characteristics of living things', [
    '**Movement:** an action by an organism or part of it that changes position or place.',
    '**Respiration:** chemical reactions in cells that break down nutrient molecules to release energy for metabolism.',
    '**Sensitivity:** detecting and responding to changes in the internal or external environment.',
    '**Growth:** a permanent increase in size and dry mass. **Reproduction:** making more of the same kind of organism.',
    '**Excretion:** removal of the waste products of metabolism and substances in excess of requirements. **Nutrition:** taking in materials for energy, growth and development.',
  ], match('Match each characteristic of life to its definition.', [
    ['Respiration', 'Chemical reactions that release energy from nutrient molecules'],
    ['Excretion', 'Removal of waste products of metabolism'],
    ['Sensitivity', 'Detecting and responding to changes in the environment'],
    ['Growth', 'A permanent increase in size and dry mass'],
  ], 'Remember that growth is a permanent increase in dry mass; a plant that takes up water has not necessarily grown.')),
  byte('Respiration, excretion and egestion are different', [
    '**Excretion** removes waste made by the cell’s own chemical reactions (for example carbon dioxide, urea).',
    '**Egestion** removes **undigested food** (faeces) that has never entered the body’s cells, so it is **not** excretion.',
    'Respiration is not breathing: breathing moves air in and out of the lungs; respiration happens in every living cell.',
  ], mc('Which process is an example of excretion?', [
    ['A person breathing out carbon dioxide made by respiring cells', 'Correct: a waste product of metabolism leaves the body.'],
    ['A person passing undigested fibre out of the body as faeces', 'This is egestion.'],
    ['A plant cell absorbing nitrate ions from the soil water', 'This is nutrition.'],
    ['A sprinter breathing deeply to bring oxygen to the muscles', 'This is breathing, which supports respiration.'],
  ], 0)),
]),
  short('Define the term “excretion”.', { kind: 'Definition', points: ['Removal of the waste products of metabolism', 'and substances in excess of requirements'], model: 'Excretion is the removal of the waste products of metabolism and substances in excess of requirements.' }),
  short('Define the term “growth”.', { kind: 'Definition', points: ['A permanent increase in size', 'and in dry mass'], model: 'Growth is a permanent increase in size and dry mass.' }),
  multi('Which of these are characteristics of all living organisms? Select all that apply.', [
    ['Reproduction', 'All living things make more of their kind.', true],
    ['Sensitivity', 'All detect and respond to changes.', true],
    ['Excretion', 'All remove waste products of metabolism.', true],
    ['Photosynthesis', 'Only plants and some other organisms photosynthesise.', false],
  ]),
);

export const b12 = withPractice(lesson('b1-classification', 'Classification systems', '1.2', [
  'Organisms are classified by shared features. A species can breed to produce fertile offspring. The binomial system names organisms using genus and species. Dichotomous keys identify organisms. DNA base sequences show how closely related organisms are.',
], [
  byte('Species and the binomial system', [
    'A **species** is a group of organisms that can **reproduce to produce fertile offspring**.',
    'The **binomial system** gives every species a two-part Latin name: the **genus** (capital letter) then the **species** (small letter), for example *Homo sapiens*. It is agreed internationally so that scientists in all countries use the same name.',
  ], mc('A horse and a donkey can breed to produce a mule, which is infertile. What does this show?', [
    ['Horses and donkeys are different species, because their offspring are not fertile', 'Correct.'],
    ['Horses and donkeys are the same species, because they can breed together', 'The offspring must also be fertile.'],
    ['A mule is a new species, because it has features of two parents', 'A species must be able to reproduce.'],
    ['Horses and donkeys belong to different genera, because the mule is sterile', 'Different species can belong to the same genus.'],
  ], 0)),
  byte('Dichotomous keys', [
    'A **dichotomous key** is a series of paired statements. Each step has **two choices** about an observable feature, and each choice leads to another step or to the **name** of the organism.',
    'To construct a key, choose **clear, visible features** (such as number of legs or presence of wings) and make sure each organism ends up in a different place.',
  ], mc('Which pair of statements is the best step in a dichotomous key for a set of animals?', [
    ['“Has wings” or “has no wings”', 'Correct: a clear feature with only two possible answers.'],
    ['“Is large” or “is quite small”', 'Size words are not precise enough.'],
    ['“Is a nice colour” or “is a plain colour”', 'Opinion, not an observable feature.'],
    ['“Lives in the garden” or “lives in the wild”', 'Habitat is not always clear and animals move.'],
  ], 0)),
  byte('Classification and evolutionary relationships', [
    'Classification systems aim to reflect **evolutionary relationships**: organisms in the same group share a common ancestor.',
    '**DNA base sequences** are used to classify. Organisms that share a **more recent common ancestor** have base sequences that are **more similar** than those of organisms that only share a distant ancestor.',
  ], mc('The DNA of species P is 98% the same as species Q and 85% the same as species R. What is the best conclusion?', [
    ['P and Q share a more recent common ancestor than P and R do', 'Correct.'],
    ['P and R share a more recent common ancestor than P and Q do', 'More similar DNA means more closely related.'],
    ['P, Q and R must all belong to the same species', 'Species are defined by fertile breeding.'],
    ['P and Q look the same, but P and R do not', 'DNA similarity does not show appearance.'],
  ], 0)),
]),
  short('Define the term “species”.', { kind: 'Definition', points: ['A group of organisms', 'that can reproduce to produce fertile offspring'], model: 'A species is a group of organisms that can reproduce to produce fertile offspring.' }),
  cloze('Complete the sentence.', 'The scientific name of an organism has two parts: the ___ (written first, with a capital letter) and the ___ (written second, in lower case).', ['genus', 'species'], ['family', 'kingdom']),
  short('Explain why scientists use the binomial system.', { command: 'Explain', points: ['Every species has one agreed two-part name', 'This avoids confusion caused by different common names in different languages or places'], model: 'Each species has one internationally agreed two-part name, so scientists everywhere can be sure they are talking about the same organism, whatever local names are used.' }),
);

export const b13 = withPractice(lesson('b1-features', 'Features of organisms', '1.3', [
  'Animals, plants, fungi, protoctists and prokaryotes are the five kingdoms. Vertebrates and arthropods are divided into groups by features. Viruses have a protein coat and genetic material.',
], [
  byte('The five kingdoms', [
    '**Animals:** many cells, no cell walls or chloroplasts, feed on other organisms. **Plants:** many cells with **cell walls and chloroplasts**, make food by photosynthesis.',
    '**Fungi:** cell walls made of chitin, feed on dead or living matter using **hyphae** (threads) and **extracellular digestion**. **Protoctists:** mostly single-celled with a nucleus (for example *Amoeba*). **Prokaryotes:** single-celled, **no nucleus** (for example bacteria).',
  ], match('Match each kingdom to a feature.', [
    ['Plants', 'Cells with cell walls and chloroplasts'],
    ['Fungi', 'Body made of threads called hyphae'],
    ['Prokaryotes', 'Single-celled with no nucleus'],
    ['Protoctists', 'Mostly single-celled with a nucleus'],
  ])),
  byte('Vertebrate groups', [
    '**Mammals:** hair or fur, give birth to live young, feed young on milk from mammary glands. **Birds:** feathers, wings, beak, lay hard-shelled eggs.',
    '**Reptiles:** dry scaly skin, lay soft-shelled eggs on land. **Amphibians:** moist skin, lay jelly-covered eggs in water, adults live on land and in water. **Fish:** scales and gills, fins, lay soft eggs in water.',
  ], mc('An animal has a backbone, moist skin and lays jelly-covered eggs in water. To which group does it belong?', [
    ['Amphibian', 'Correct.'],
    ['Reptile', 'Reptiles have dry scaly skin and lay shelled eggs on land.'],
    ['Fish', 'Fish have scales and gills as adults.'],
    ['Mammal', 'Mammals have hair and feed young on milk.'],
  ], 0)),
  byte('Arthropod groups', [
    'All **arthropods** have an **exoskeleton** and **jointed legs**. They are split by the number of legs and body parts.',
    '**Insects:** 3 pairs of legs, 3 body parts, usually wings. **Arachnids:** 4 pairs of legs, 2 body parts, no antennae. **Crustaceans:** 5 or more pairs of legs, 2 pairs of antennae. **Myriapods:** many legs on a long body of many segments.',
  ], mc('An arthropod has 8 legs, two body parts and no antennae. To which group does it belong?', [
    ['Arachnid', 'Correct.'],
    ['Insect', 'Insects have 6 legs and 3 body parts.'],
    ['Crustacean', 'Crustaceans have antennae and 5 or more pairs of legs.'],
    ['Myriapod', 'Myriapods have many body segments.'],
  ], 0)),
  byte('Plant groups and viruses', [
    '**Ferns:** have leaves called fronds, reproduce by **spores**, no flowers or seeds. **Flowering plants:** reproduce by seeds in flowers.',
    '**Monocotyledons:** one seed leaf, parallel leaf veins. **Dicotyledons:** two seed leaves, a network of veins.',
    '**Viruses** are not made of cells. They have a **protein coat** around **genetic material** and can only reproduce inside living cells.',
  ], multi('Which statements about viruses are correct? Select all that apply.', [
    ['They have a protein coat', 'Correct.', true],
    ['They contain genetic material', 'DNA or RNA.', true],
    ['They can reproduce only inside a host cell', 'They have no metabolism of their own.', true],
    ['They are made of one cell with a nucleus', 'They are not cells.', false],
  ])),
]),
  short('State two features of all arthropods.', { kind: 'Definition', points: ['An exoskeleton', 'Jointed legs'], model: 'All arthropods have an exoskeleton and jointed legs.' }),
  mc('A leaf has parallel veins and the seed has a single seed leaf. What is the plant?', [
    ['A monocotyledon', 'Correct.'],
    ['A dicotyledon', 'Dicotyledons have a network of veins.'],
    ['A fern', 'Ferns have fronds and spores, not seeds.'],
    ['A gymnosperm', 'Not in the syllabus, and not matched by the clues.'],
  ], 0),
);

export const b21 = withPractice(lesson('b2-cells', 'Cell structure', '2.1', [
  'Plant and animal cells have a nucleus, cytoplasm, membrane, mitochondria and ribosomes. Plant cells also have a cell wall, a large vacuole and chloroplasts. Bacteria have no nucleus: they have circular DNA and plasmids. Specialised cells are adapted to their function.',
], [
  byte('Animal cells', [
    'An **animal cell** has a **cell membrane** (controls what enters and leaves), **cytoplasm** (where reactions happen), a **nucleus** (contains DNA and controls the cell), **mitochondria** (release energy by respiration) and **ribosomes** (make proteins).',
  ], fig({ svg: 'animalCell' }, mc('In which structure is most of the energy released by aerobic respiration?', [
    ['Mitochondria', 'Correct.'],
    ['Ribosomes', 'Ribosomes make proteins.'],
    ['Nucleus', 'The nucleus contains the DNA.'],
    ['Cytoplasm', 'Some reactions occur here but the main stage is in mitochondria.'],
  ], 0)), { fig: { svg: 'animalCell', caption: 'An animal cell' } }),
  byte('Plant cells', [
    'A **plant cell** has all the structures of an animal cell plus a **cell wall** (cellulose; supports and protects the cell), a large permanent **vacuole** (cell sap, keeps the cell firm) and **chloroplasts** (contain chlorophyll; photosynthesis).',
    'Not all plant cells have chloroplasts: root cells, for example, are underground and have none.',
  ], fig({ svg: 'plantCell' }, mc('Which pair of structures is found in a plant cell but not in an animal cell?', [
    ['Cell wall and chloroplasts', 'Correct.'],
    ['Cell membrane and nucleus', 'Both cell types have these.'],
    ['Mitochondria and ribosomes', 'Both cell types have these.'],
    ['Cytoplasm and cell membrane', 'Both cell types have these.'],
  ], 0)), { fig: { svg: 'plantCell', caption: 'A plant cell' } }),
  byte('Bacterial cells', [
    'A **bacterial cell** has a **cell wall**, **cell membrane**, **cytoplasm** and **ribosomes**, but **no nucleus**. Its DNA is a **single circular chromosome** in the cytoplasm, and it may also have small rings of DNA called **plasmids**.',
  ], fig({ svg: 'bacterialCell' }, mc('How does the DNA in a bacterial cell differ from the DNA in an animal cell?', [
    ['It is a circular loop in the cytoplasm and is not enclosed by a nucleus', 'Correct.'],
    ['It is a linear chromosome that is enclosed by a nuclear membrane', 'That is an animal cell.'],
    ['It is found only in plasmids and not as a chromosome', 'Bacteria also have a main circular chromosome.'],
    ['It is found in mitochondria, which bacteria use to store genes', 'Bacteria have no mitochondria.'],
  ], 0)), { fig: { svg: 'bacterialCell', caption: 'A bacterial cell' } }),
  byte('Functions of cell structures', [
    '**Cell wall:** strengthens and supports the cell. **Cell membrane:** controls the movement of substances in and out. **Nucleus:** contains DNA and controls the cell’s activities.',
    '**Cytoplasm:** where many chemical reactions happen. **Mitochondria:** site of aerobic respiration. **Ribosomes:** make proteins. **Vacuole:** stores cell sap and helps to keep the cell firm. **Chloroplasts:** photosynthesis.',
  ], match('Match each structure to its function.', [
    ['Ribosome', 'Makes proteins'],
    ['Mitochondrion', 'Releases energy by respiration'],
    ['Cell membrane', 'Controls what enters and leaves the cell'],
    ['Chloroplast', 'Absorbs light for photosynthesis'],
    ['Nucleus', 'Contains DNA and controls the cell'],
  ])),
  byte('Specialised cells', [
    '**Ciliated cells:** hair-like cilia move mucus in the trachea and bronchi. **Root hair cells:** long extension gives a large surface area for absorbing water and ions. **Palisade cells:** many chloroplasts for photosynthesis. **Neurones:** long, with branches, to carry electrical impulses. **Red blood cells:** no nucleus, contain haemoglobin to carry oxygen. **Sperm and egg cells (gametes):** involved in reproduction.',
  ], mc('A root hair cell has a long thin extension. How does this help the plant?', [
    ['It gives a large surface area for absorbing water and mineral ions', 'Correct.'],
    ['It gives a large number of chloroplasts for making glucose', 'Root cells have no chloroplasts.'],
    ['It allows the cell to move through the soil towards water', 'Root hair cells do not move.'],
    ['It allows the cell to carry electrical impulses along the root', 'This is the role of neurones in animals.'],
  ], 0)),
  byte('Levels of organisation', [
    'A **cell** is the basic unit of life. A **tissue** is a group of similar cells working together (for example muscle tissue). An **organ** is made of different tissues (for example the stomach). An **organ system** is a group of organs with a common function (for example the digestive system). An **organism** is made of organ systems working together.',
    'New cells are made by the **division of existing cells**.',
  ], mc('Which list shows the levels of organisation from smallest to largest?', [
    ['Cell, tissue, organ, organ system, organism', 'Correct.'],
    ['Cell, organ, tissue, organ system, organism', 'A tissue is made of cells; an organ is made of tissues.'],
    ['Tissue, cell, organ, organism, organ system', 'A cell is smaller than a tissue.'],
    ['Cell, tissue, organ system, organ, organism', 'An organ system is made of organs.'],
  ], 0)),
]),
  short('State the function of ribosomes.', { kind: 'Definition', points: ['To make proteins (protein synthesis)'], model: 'Ribosomes make proteins.' }),
  multi('Which structures are found in a bacterial cell? Select all that apply.', [
    ['Cell wall', 'Bacteria have cell walls.', true],
    ['Plasmids', 'Small rings of DNA.', true],
    ['Ribosomes', 'To make proteins.', true],
    ['Nucleus', 'Bacteria have no nucleus.', false],
  ]),
  short('Describe how a palisade cell is adapted for photosynthesis.', { kind: 'Exam question', command: 'Describe', points: ['It contains many chloroplasts', 'which contain chlorophyll to absorb light', 'It is tall and positioned near the top of the leaf where light is strongest'], model: 'A palisade cell contains many chloroplasts with chlorophyll to absorb light, and it is tall and close to the upper surface of the leaf where it receives the most light.' }),
);

export const b22 = withPractice(lesson('b2-magnification', 'Size of specimens', '2.2', [
  'Magnification = image size ÷ actual size. Convert between millimetres and micrometres (1 mm = 1 000 μm).',
], [
  byte('Calculating magnification', [
    '**Magnification = image size ÷ actual size.** Both measurements must be in the **same units** before dividing. Magnification has no unit.',
    'To find the actual size: **actual size = image size ÷ magnification.**',
  ], calc('A drawing of a cell is 45 mm long. The actual cell is 0.03 mm long. What is the magnification?', 1500, {
    formula: 'magnification = image size ÷ actual size', steps: ['45 ÷ 0.03 = 1 500', 'Magnification is ×1 500'], tol: 0.5,
  }), { eq: ['magnification = image size ÷ actual size'] }),
  byte('Millimetres and micrometres', [
    '**1 mm = 1 000 μm.** To change mm to μm **multiply by 1 000**; to change μm to mm **divide by 1 000**.',
    'Most cells are measured in micrometres because they are so small.',
  ], calc('A red blood cell has an actual diameter of 7 μm. A photograph shows it with a diameter of 35 mm. What is the magnification?', 5000, {
    formula: 'convert to the same units, then divide', steps: ['Image = 35 mm = 35 000 μm', 'Magnification = 35 000 ÷ 7 = 5 000'], tol: 0.5,
  })),
]),
  calc('A plant cell is drawn 60 mm long at a magnification of ×400. What is the actual length of the cell in mm?', 0.15, {
    unit: 'mm', formula: 'actual size = image size ÷ magnification', steps: ['60 ÷ 400 = 0.15 mm'], tol: 0.001,
  }),
  mc('An image of a specimen is 12 mm across and the actual size is 80 μm. Which calculation gives the magnification?', [
    ['12 000 ÷ 80, after changing mm to μm', 'Correct: same units, then divide.'],
    ['80 ÷ 12, because the actual size comes first', 'Image size is divided by actual size.'],
    ['12 ÷ 80, without changing any units', 'The units must match.'],
    ['12 × 1 000 × 80, because both values are multiplied', 'Magnification is a ratio, not a product.'],
  ], 0),
);

export const b31 = withPractice(lesson('b3-diffusion', 'Diffusion', '3.1', [
  'Diffusion is the net movement of particles down a concentration gradient due to their random movement. It needs no energy from the cell. It is faster with a larger surface area, higher temperature, steeper gradient and shorter distance.',
], [
  byte('What is diffusion?', [
    '**Diffusion** is the **net movement of particles from a region of higher concentration to a region of lower concentration** (down a **concentration gradient**), as a result of their **random movement**.',
    'The energy comes from the **kinetic energy of the random movement** of the particles themselves, so the cell does not use energy. Gases and dissolved substances can diffuse through the **cell membrane**.',
  ], mc('Oxygen moves from the air in the alveoli into the blood. Which statement about this movement is correct?', [
    ['It is diffusion, using the kinetic energy of the oxygen molecules, down a concentration gradient', 'Correct.'],
    ['It is diffusion, using energy from respiration, down a concentration gradient', 'Diffusion does not need energy from respiration.'],
    ['It is active transport, using energy from respiration, against a concentration gradient', 'Oxygen moves down its gradient.'],
    ['It is osmosis, because water is moving through a partially permeable membrane', 'Osmosis is the movement of water.'],
  ], 0)),
  byte('Factors affecting the rate of diffusion', [
    'Diffusion is **faster** when the **surface area** is larger, the **temperature** is higher (particles move faster), the **concentration gradient** is steeper, and the **distance** is shorter.',
    'These factors explain adaptations: thin gas exchange surfaces, large surface areas, and good blood supply that keeps the gradient steep.',
  ], multi('Which changes would increase the rate of diffusion across a membrane? Select all that apply.', [
    ['A steeper concentration gradient', 'More net movement.', true],
    ['A higher temperature', 'Particles move faster.', true],
    ['A thinner membrane', 'Shorter distance.', true],
    ['A smaller surface area', 'Fewer places for particles to cross.', false],
  ])),
  byte('Why diffusion matters to living things', [
    'Gases such as **oxygen** and **carbon dioxide** move into and out of cells by diffusion. **Solutes** such as digested food molecules diffuse from the gut into the blood. Unicellular organisms exchange all their materials by diffusion across the cell surface.',
  ], mc('Why can an amoeba (a single-celled organism) exchange gases by diffusion alone, while a large animal needs a transport system?', [
    ['An amoeba has a large surface area compared with its volume, so diffusion distances are short', 'Correct.'],
    ['An amoeba uses less oxygen than any large animal, so active transport is not needed', 'The reason is about surface area and distance.'],
    ['An amoeba has a cell wall that allows gases to diffuse at a faster rate', 'Not the reason.'],
    ['A large animal has a higher temperature, which makes diffusion too fast to control', 'Not the reason.'],
  ], 0)),
]),
  short('Define “diffusion”.', { kind: 'Definition', points: ['The net movement of particles from a region of higher concentration to a region of lower concentration', 'as a result of their random movement'], model: 'Diffusion is the net movement of particles from a region of higher concentration to a region of lower concentration, as a result of their random movement.' }),
  short('Explain why the lining of the alveoli is very thin.', { command: 'Explain', points: ['A thin surface gives a short diffusion distance', 'So oxygen and carbon dioxide diffuse across quickly (the rate is faster)'], model: 'A very thin lining means gases have only a short distance to diffuse, so oxygen and carbon dioxide cross quickly.' }),
);

export const b32 = withPractice(lesson('b3-osmosis', 'Osmosis', '3.2', [
  'Osmosis is the net movement of water molecules from a region of higher water potential to a region of lower water potential through a partially permeable membrane. Plant cells become turgid in dilute solutions and plasmolysed in concentrated ones. Water is also an important solvent.',
], [
  byte('Water as a solvent and osmosis', [
    'Water is the **solvent** in cells and body fluids: it dissolves substances for **digestion**, **excretion** (for example urea in urine) and **transport** (blood plasma, xylem).',
    '**Osmosis** is the net movement of **water molecules** from a region of **higher water potential** (a dilute solution) to a region of **lower water potential** (a concentrated solution) through a **partially permeable membrane**.',
  ], mc('A partially permeable membrane separates pure water from a sugar solution. In which direction is there net movement of water?', [
    ['From the pure water into the sugar solution, because the water has a higher water potential', 'Correct.'],
    ['From the sugar solution into the pure water, because the sugar solution has more particles', 'Water moves towards the lower water potential.'],
    ['Water does not move, because sugar molecules cannot cross the membrane', 'Water molecules can cross.'],
    ['From the pure water into the sugar solution, because sugar diffuses the other way', 'Sugar cannot cross the membrane.'],
  ], 0)),
  byte('Osmosis in plant tissue', [
    'In a **dilute** solution (higher water potential than the cell), water enters plant cells by osmosis, and tissue **gains mass and becomes firm**.',
    'In a **concentrated** solution, water leaves plant cells by osmosis, so tissue **loses mass and becomes soft**. At one concentration there is **no change**; this equals the concentration of the cell sap.',
  ], mc('A potato cylinder is left in a concentrated sugar solution and its mass decreases. What is the best explanation?', [
    ['Water left the cells by osmosis, because the solution had a lower water potential', 'Correct.'],
    ['Water entered the cells by osmosis, because the solution had a higher water potential', 'That would increase the mass.'],
    ['Sugar left the cells by diffusion, because the cells contained more sugar', 'The key movement is water.'],
    ['The cells used up the water in respiration, because they were in the solution', 'Not the explanation.'],
  ], 0)),
  byte('Turgid, flaccid and plasmolysed cells', [
    'A **turgid** cell is full of water and the cell membrane pushes against the wall, creating **turgor pressure**; this supports plants. A **flaccid** cell has lost some water and is not firm (wilting). A **plasmolysed** cell has lost so much water that the cytoplasm and membrane shrink away from the cell wall.',
  ], fig({ svg: 'osmosisCells' }, mc('A plant cell in a very concentrated solution has its membrane pulled away from the cell wall. What is this called?', [
    ['Plasmolysis', 'Correct.'],
    ['Turgor', 'Turgor is the pressure of a full cell.'],
    ['Flaccidity', 'Flaccid cells are limp but the membrane is still against the wall.'],
    ['Diffusion', 'The process that moved the water is osmosis.'],
  ], 0)), { fig: { svg: 'osmosisCells', caption: 'Plant cells in different solutions' } }),
]),
  short('Explain why a plant wilts when it is not watered.', { command: 'Explain', points: ['Water is lost from the cells (by transpiration) and not replaced', 'The cells lose turgor pressure and become flaccid, so the plant is no longer supported'], model: 'Water is lost by transpiration but not replaced from the soil, so the cells lose water and turgor pressure and become flaccid. The plant is no longer supported, so it wilts.' }),
  cloze('Complete the sentence.', 'Osmosis is the net movement of ___ molecules through a ___ membrane from a region of ___ water potential to a region of lower water potential.', ['water', 'partially permeable', 'higher'], ['sugar', 'fully permeable', 'lower']),
);

export const b33 = withPractice(lesson('b3-active', 'Active transport', '3.3', [
  'Active transport moves particles through a membrane against a concentration gradient using energy from respiration. Protein carriers do the work. Root hair cells use it to take up ions.',
], [
  byte('Active transport', [
    '**Active transport** is the movement of particles through a cell membrane from a region of **lower concentration to a region of higher concentration** (**against** the concentration gradient), using **energy from respiration**.',
    '**Protein carriers** in the membrane pick up the molecules or ions and move them across.',
    'It is important for **ion uptake by root hairs** (soil nitrate and magnesium concentration is lower than in the root cell) and for absorbing glucose in the gut.',
  ], mc('Root hair cells take up nitrate ions although the concentration of nitrate is higher inside the cell than in the soil. Which process is this, and why?', [
    ['Active transport, because ions move against a concentration gradient using energy from respiration', 'Correct.'],
    ['Diffusion, because ions move down a concentration gradient using kinetic energy', 'The movement is against the gradient.'],
    ['Osmosis, because the ions move from a dilute to a concentrated solution', 'Osmosis is about water.'],
    ['Active transport, because ions move down a concentration gradient using energy', 'Active transport moves against the gradient.'],
  ], 0)),
  byte('Diffusion, osmosis and active transport compared', [
    '**Diffusion:** any particles, **down** a gradient, **no energy** from the cell. **Osmosis:** **water only**, through a partially permeable membrane, no energy from the cell. **Active transport:** ions or molecules, **against** a gradient, **energy from respiration** and **protein carriers**.',
    'A cell that is **poisoned so that it cannot respire** stops active transport but diffusion and osmosis continue.',
  ], match('Match each process to the correct description.', [
    ['Diffusion', 'Net movement down a concentration gradient with no energy from the cell'],
    ['Osmosis', 'Net movement of water through a partially permeable membrane'],
    ['Active transport', 'Movement against a concentration gradient using energy from respiration'],
  ])),
]),
  mc('A cell is given a poison that stops respiration. Which process will stop first?', [
    ['Active transport, because it needs energy from respiration', 'Correct.'],
    ['Diffusion, because it needs energy from respiration', 'Diffusion does not need energy from the cell.'],
    ['Osmosis, because it needs energy from respiration', 'Osmosis does not need energy from the cell.'],
    ['All three at the same time, because they all use protein carriers', 'Only active transport uses protein carriers and energy.'],
  ], 0),
  short('Explain why root hair cells contain many mitochondria.', { command: 'Explain', points: ['Mitochondria release energy by aerobic respiration', 'The energy is needed for active transport of mineral ions into the cell'], model: 'Mitochondria release energy by respiration. Root hair cells need this energy for the active transport of mineral ions into the cell against a concentration gradient.' }),
);

export const unit1 = {
  id: 'b1', number: 1, title: 'Characteristics and Classification', short: 'Life', emoji: '🐾', color: 'emerald',
  submodules: [b11, b12, b13],
  papers: [],
};

export const unit2 = {
  id: 'b2', number: 2, title: 'Organisation of the Organism', short: 'Cells', emoji: '🔬', color: 'teal',
  submodules: [b21, b22],
  papers: [],
};

export const unit3 = {
  id: 'b3', number: 3, title: 'Movement into and out of Cells', short: 'Transport', emoji: '💧', color: 'sky',
  submodules: [b31, b32, b33],
  papers: [],
};