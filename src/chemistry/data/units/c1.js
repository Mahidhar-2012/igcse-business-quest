import { byte, lesson, mc, calc, fig } from '../helpers.js';

// Unit 1: Particles, atoms and bonding (syllabus topics 1 and 2, Cambridge IGCSE Chemistry 0620, 2026–2028).

export const c11 = lesson('c1-states', 'Solids, liquids and gases', '1.1', [
  'Particles in a solid vibrate in fixed positions; in a liquid they move past each other; in a gas they move quickly and randomly, far apart.',
  'Changes of state need energy to be supplied or removed. During a change of state the temperature stays constant.',
], [
  byte('Particles in solids, liquids and gases', [
    '**Solid:** particles are **close together** in a **regular pattern** and only **vibrate** about fixed positions. Fixed shape and volume.',
    '**Liquid:** particles are **close together** but **irregularly arranged** and **slide past each other**. Fixed volume, takes the shape of its container.',
    '**Gas:** particles are **far apart**, move **quickly in random directions** and fill the container. Gases are easily compressed.',
  ], fig({ svg: 'states' }, mc('In which state are the particles close together but able to move past each other?', [
    ['Liquid', 'Correct: close but irregular and free to slide.'],
    ['Solid', 'Solid particles only vibrate in fixed positions.'],
    ['Gas', 'Gas particles are far apart.'],
    ['All three states', 'The states differ in how the particles are arranged and move.'],
  ], 0)), { fig: { svg: 'states', caption: 'Particle arrangement in the three states' } }),
  byte('Changes of state', [
    '**Melting** (solid → liquid), **freezing** (liquid → solid), **boiling** and **evaporation** (liquid → gas), **condensation** (gas → liquid).',
    '**Sublimation** is solid → gas without becoming a liquid (for example iodine and solid carbon dioxide).',
    'Melting and boiling need **energy to overcome forces** between particles. Freezing and condensing **release** energy.',
    'On a heating curve the **temperature is constant** during melting and boiling, because the energy is used to separate particles, not to speed them up.',
  ], fig({ svg: 'heatingCurve' }, mc('Why does the temperature stay constant while ice melts at 0 °C?', [
    ['The energy supplied is used to overcome the forces between particles', 'Correct.'],
    ['The heater has been switched off', 'Energy is still being supplied.'],
    ['The particles have stopped moving', 'Particles never stop moving.'],
    ['The ice is losing energy to the air', 'The curve is flat while energy is absorbed to melt it.'],
  ], 0)), { fig: { svg: 'heatingCurve', caption: 'Heating curve: temperature against time' } }),
  byte('Gas pressure and temperature', [
    'Gas pressure is caused by particles **colliding with the walls** of the container.',
    'Heating a gas makes the particles move **faster**, so they hit the walls **harder and more often**: pressure rises (at constant volume).',
    'Compressing a gas into a smaller volume makes collisions **more frequent**, so the pressure rises (at constant temperature).',
  ], mc('Why does the pressure of a gas in a sealed container rise when it is heated?', [
    ['Particles move faster and hit the walls harder and more often', 'Correct.'],
    ['Particles get larger', 'Particle size does not change.'],
    ['More particles are created', 'The number of particles is fixed in a sealed container.'],
    ['Particles stop moving', 'They move faster, not slower.'],
  ], 0)),
]);

export const c12 = lesson('c1-diffusion', 'Diffusion', '1.2', [
  'Diffusion is the net movement of particles from a region of higher concentration to lower concentration, due to their random motion.',
  'Lighter particles and higher temperatures diffuse faster. Diffusion is evidence that matter is made of moving particles.',
], [
  byte('What is diffusion?', [
    '**Diffusion** is the **net movement of particles from a region of higher concentration to a region of lower concentration**, caused by their **random motion**.',
    'It happens in **gases and liquids**, where particles can move freely. It is **evidence** that matter is made of particles that are always moving.',
    'Examples: a smell spreading through a room; a drop of ink spreading in water.',
  ], mc('A drop of purple dye is placed in still water. After some hours the water is evenly purple. This is because…', [
    ['The dye particles moved from a higher to a lower concentration by random motion', 'Correct: this is diffusion.'],
    ['The water particles stopped moving', 'Particles never stop moving.'],
    ['The dye was chemically changed into water', 'No reaction is needed for diffusion.'],
    ['Gravity mixed the liquids', 'Mixing happens even without stirring or gravity differences.'],
  ], 0)),
  byte('Diffusion of ammonia and hydrogen chloride', [
    'Cotton wool soaked in **ammonia solution** (NH₃) is placed at one end of a tube and cotton wool with **hydrochloric acid** (HCl) at the other end.',
    'The gases diffuse towards each other and **react to form white ammonium chloride**: NH₃ + HCl → NH₄Cl.',
    'The white ring forms **closer to the HCl end**, because **NH₃ is lighter** (Mr 17) than HCl (Mr 36.5) and so diffuses **faster**.',
  ], fig({ svg: 'diffusionTube' }, mc('In the tube experiment, the white ring forms nearer the hydrochloric acid end. What does this show?', [
    ['Ammonia particles diffuse faster than hydrogen chloride particles', 'Correct: the lighter particles travel further in the same time.'],
    ['Hydrogen chloride particles diffuse faster', 'If they did, the ring would form nearer the ammonia end.'],
    ['Both gases diffuse at the same rate', 'The ring would then form in the middle.'],
    ['Neither gas diffuses', 'They must diffuse to meet and react.'],
  ], 0)), { fig: { svg: 'diffusionTube', caption: 'Diffusion of ammonia and hydrogen chloride' } }),
  byte('Factors that affect the rate of diffusion', [
    '**Temperature:** particles move **faster** at a higher temperature, so diffusion is **faster**.',
    '**Mass of the particles:** **lighter** particles move faster at the same temperature, so they **diffuse faster**.',
    'Diffusion is **much faster in gases** than in liquids because the particles are further apart and move more freely.',
  ], mc('Which gas diffuses fastest at the same temperature?', [
    ['Hydrogen (Mr 2)', 'Correct: it has the lowest relative molecular mass.'],
    ['Oxygen (Mr 32)', 'Heavier than hydrogen, so it diffuses more slowly.'],
    ['Carbon dioxide (Mr 44)', 'Heavier, so it diffuses more slowly.'],
    ['Chlorine (Mr 71)', 'The heaviest of these, so it diffuses most slowly.'],
  ], 0)),
]);

export const c21 = lesson('c2-substances', 'Elements, compounds and mixtures', '2.1', [
  'An element has one type of atom; a compound is chemically bonded atoms of different elements in fixed proportions; a mixture is not chemically combined and can be separated physically.',
], [
  byte('Elements, compounds and mixtures', [
    'An **element** is a substance made of **one type of atom** and cannot be broken down chemically (for example Fe, O₂, Cl₂).',
    'A **compound** is a substance made of **two or more elements chemically bonded** together in **fixed proportions** (for example H₂O, NaCl, CO₂).',
    'A **mixture** contains **two or more substances not chemically combined**, in **any proportion** (for example air, sea water, alloys).',
  ], mc('Which of these is a compound?', [
    ['Carbon dioxide', 'Correct: carbon and oxygen are chemically bonded in a fixed ratio.'],
    ['Air', 'Air is a mixture of gases.'],
    ['Oxygen', 'Oxygen is an element.'],
    ['Sea water', 'Sea water is a mixture.'],
  ], 0)),
  byte('How compounds differ from mixtures', [
    'In a **compound** the elements are **chemically combined**, so its **properties differ** from those of its elements: sodium (a reactive metal) and chlorine (a poisonous gas) form harmless sodium chloride.',
    'A compound has a **fixed composition** and can only be separated into its elements by a **chemical reaction**.',
    'A **mixture** keeps the properties of its parts and can be separated by **physical methods** such as filtering and distillation.',
  ], mc('Iron filings and sulfur are stirred together. How can the iron be separated again?', [
    ['With a magnet, because it is only a mixture', 'Correct: iron is magnetic and has not reacted with the sulfur.'],
    ['Only by a chemical reaction', 'If they had been heated to react, a compound would have formed.'],
    ['It cannot be separated', 'Mixtures can be separated by physical methods.'],
    ['By distillation', 'Both are solids, so distillation is not suitable.'],
  ], 0)),
]);

export const c22 = lesson('c2-atoms', 'Atomic structure and the Periodic Table', '2.2', [
  'Atoms have a nucleus of protons (+1) and neutrons (0) surrounded by electrons (−1) in shells. Proton number = number of protons; nucleon number = protons + neutrons.',
  'Groups = outer electrons; periods = number of shells.',
], [
  byte('Inside the atom', [
    'An atom has a tiny **nucleus** containing **protons** and **neutrons**, with **electrons** in shells around it.',
    '**Proton:** relative mass 1, charge **+1**. **Neutron:** relative mass 1, charge **0**. **Electron:** relative mass about 1/1840 (negligible), charge **−1**.',
    'An atom is **neutral** because it has equal numbers of protons and electrons.',
  ], mc('Which particle has a relative charge of −1?', [
    ['Electron', 'Correct.'],
    ['Proton', 'The proton has a charge of +1.'],
    ['Neutron', 'The neutron has no charge.'],
    ['Nucleus', 'The nucleus is positively charged overall.'],
  ], 0)),
  byte('Proton number and nucleon number', [
    '**Proton number (atomic number)** is the **number of protons**. It identifies the element and orders the Periodic Table.',
    '**Nucleon number (mass number)** is the **number of protons plus neutrons**.',
    'Number of neutrons = **nucleon number − proton number**.',
  ], calc('An atom of potassium has a proton number of 19 and a nucleon number of 39. How many neutrons does it have?', 20, {
    formula: 'neutrons = nucleon number − proton number', steps: ['39 − 19 = 20'], tol: 0.001,
  })),
  byte('Electronic configuration', [
    'Electrons are arranged in **shells**. The first shell holds up to **2** electrons, the second up to **8**, and the third is filled to **8** before the fourth starts (for the first 20 elements).',
    'Write the configuration as numbers, for example sodium (11 electrons) is **2,8,1** and chlorine (17) is **2,8,7**.',
    'Fill the inner shells first, then place the remaining electrons in the outer shell.',
  ], fig({ svg: 'bohrModels' }, mc('What is the electronic configuration of magnesium (proton number 12)?', [
    ['2,8,2', 'Correct: 2 + 8 + 2 = 12 electrons.'],
    ['2,8,1', 'This adds to 11 and is sodium.'],
    ['2,10', 'The second shell holds a maximum of 8 electrons.'],
    ['2,2,8', 'Inner shells fill first: 2, then 8, then the rest.'],
  ], 0)), { fig: { svg: 'bohrModels', caption: 'Electron shells of four atoms' } }),
  byte('Groups and periods', [
    'The Periodic Table is arranged in order of **proton number**.',
    'The **group number** (I to VIII, or 1 to 18 in modern numbering) gives the number of **outer electrons** for the main groups. A **period** is a horizontal row; the **period number** equals the **number of shells** used.',
    'Elements in the same group have **similar chemical properties** because they have the same number of outer electrons.',
  ], mc('An atom has the electronic configuration 2,8,3. In which group and period is it?', [
    ['Group III, period 3', 'Correct: 3 outer electrons and 3 shells.'],
    ['Group II, period 3', 'The group number equals the outer electrons (3).'],
    ['Group III, period 2', 'It has three shells, so it is in period 3.'],
    ['Group VIII, period 3', 'A noble gas would have a full outer shell.'],
  ], 0)),
]);

export const c23 = lesson('c2-isotopes', 'Isotopes', '2.3', [
  'Isotopes are atoms of the same element with the same proton number but different numbers of neutrons.',
  'Relative atomic mass is a weighted average of the isotopes.',
], [
  byte('What are isotopes?', [
    '**Isotopes** are **atoms of the same element with the same number of protons but different numbers of neutrons**, so they have different nucleon numbers.',
    'Isotopes of an element have the **same chemical properties** because they have the **same number of electrons**. Their physical properties (such as density) differ slightly.',
    'Example: carbon-12 (6 protons, 6 neutrons) and carbon-14 (6 protons, 8 neutrons).',
  ], mc('Which pair are isotopes of the same element?', [
    ['¹²C and ¹⁴C', 'Correct: the same proton number (6), different nucleon numbers.'],
    ['¹⁴C and ¹⁴N', 'Different proton numbers, so different elements.'],
    ['¹²C and ¹²C', 'These are identical atoms, not different isotopes.'],
    ['¹⁶O and ¹⁸F', 'Different elements.'],
  ], 0)),
  byte('Relative atomic mass from isotopes', [
    'The **relative atomic mass (Aᵣ)** of an element is the **average mass of its isotopes, taking their abundances into account**, compared with 1/12 of the mass of a carbon-12 atom.',
    'Aᵣ = (mass₁ × %₁ + mass₂ × %₂) ÷ 100.',
    'This is why Aᵣ of chlorine is **35.5**, not a whole number.',
  ], calc('Chlorine has two isotopes: chlorine-35 (75%) and chlorine-37 (25%). Calculate the relative atomic mass of chlorine.', 35.5, {
    formula: 'Aᵣ = (35 × 75 + 37 × 25) ÷ 100', steps: ['35 × 75 = 2625', '37 × 25 = 925', '(2625 + 925) ÷ 100 = 35.5'], tol: 0.01,
  })),
  byte('Uses of radioactive isotopes', [
    'Some isotopes are **radioactive**: their nuclei are unstable and emit radiation.',
    '**Medical:** cobalt-60 gives gamma rays to treat cancer and sterilise equipment; radioactive **tracers** help diagnose illness.',
    '**Industrial:** radioactive tracers detect leaks in pipes, and radiation thickness gauges control the thickness of materials.',
  ], mc('Why is a radioactive isotope with a short half-life used as a medical tracer?', [
    ['It stops being radioactive quickly, so it does not stay active in the patient', 'Correct.'],
    ['It never emits radiation', 'A tracer must emit radiation to be detected.'],
    ['It is a different element from the one in the body', 'The point is the short half-life, not the element.'],
    ['It reacts violently with water', 'This is not a reason for choosing a tracer.'],
  ], 0)),
]);

export const c24 = lesson('c2-ionic', 'Ions and ionic bonds', '2.4', [
  'Atoms gain or lose electrons to form ions with full outer shells. Oppositely charged ions attract in an ionic bond, forming a giant lattice.',
], [
  byte('Forming ions', [
    'An **ion** is a charged particle formed when an atom **loses or gains electrons**.',
    '**Metal atoms lose electrons** to form **positive ions** (cations). **Non-metal atoms gain electrons** to form **negative ions** (anions).',
    'Atoms do this to get a **full outer shell**, like a noble gas. Charges follow the group: Group I **+1**, Group II **+2**, Group III **+3**, Group VI **−2**, Group VII **−1**.',
  ], mc('A magnesium atom (2,8,2) forms an ion. What is the charge and electronic configuration of the ion?', [
    ['2+, 2,8', 'Correct: it loses 2 outer electrons.'],
    ['2−, 2,8,4', 'Metals lose electrons; magnesium does not gain two.'],
    ['+, 2,8,1', 'Magnesium loses two electrons, not one.'],
    ['0, 2,8,2', 'An ion is charged; this is the atom.'],
  ], 0)),
  byte('Ionic bonding', [
    'An **ionic bond** is the **strong electrostatic attraction between oppositely charged ions**. It forms when electrons are **transferred** from a metal to a non-metal.',
    'In sodium chloride, Na loses one electron (becoming Na⁺) and Cl gains one (becoming Cl⁻). In magnesium oxide, Mg loses two electrons and O gains two (Mg²⁺ and O²⁻).',
    'In a dot-and-cross diagram show **only the outer shell**, with brackets and the charge on each ion.',
  ], fig({ svg: 'dotCrossIonic' }, mc('What happens when magnesium reacts with oxygen to form magnesium oxide?', [
    ['Each magnesium atom transfers two electrons to an oxygen atom', 'Correct: this gives Mg²⁺ and O²⁻.'],
    ['Magnesium and oxygen share two pairs of electrons', 'That describes covalent bonding.'],
    ['Each oxygen atom transfers two electrons to a magnesium atom', 'Metals lose electrons.'],
    ['No electrons move', 'Ionic bonding needs electron transfer.'],
  ], 0)), { fig: { svg: 'dotCrossIonic', caption: 'Dot-and-cross diagrams for NaCl and MgO' } }),
  byte('Properties of ionic compounds', [
    'Ionic compounds form a **giant lattice** of alternating positive and negative ions held by strong electrostatic forces.',
    '**High melting and boiling points:** a lot of energy is needed to break the strong attractions.',
    '**They conduct electricity when molten or dissolved** because the ions are free to move, but **not when solid** because the ions are fixed in place.',
    'They are **brittle** and many **dissolve in water**.',
  ], mc('Why does solid sodium chloride not conduct electricity, but molten sodium chloride does?', [
    ['In the solid the ions cannot move, but in the liquid they are free to move', 'Correct: moving ions carry the charge.'],
    ['Solid sodium chloride contains no ions', 'It is made of Na⁺ and Cl⁻ ions in a lattice.'],
    ['Free electrons move in the liquid but not in the solid', 'The charge is carried by ions, not free electrons.'],
    ['Molten sodium chloride is a metal', 'It is an ionic compound.'],
  ], 0)),
  byte('Writing ionic formulae', [
    'The **total positive charge must equal the total negative charge**, so the compound is neutral.',
    'Calcium chloride: Ca²⁺ needs two Cl⁻, so **CaCl₂**. Aluminium oxide: two Al³⁺ (6+) balance three O²⁻ (6−), so **Al₂O₃**.',
    'Use brackets for compound ions, for example **Mg(OH)₂** and **(NH₄)₂SO₄**.',
  ], mc('What is the formula of aluminium oxide? (Al³⁺ and O²⁻)', [
    ['Al₂O₃', 'Correct: 2 × 3+ = 6+ and 3 × 2− = 6−.'],
    ['AlO', 'The charges do not balance (3+ and 2−).'],
    ['Al₃O₂', 'The numbers are the wrong way round: 9+ and 4−.'],
    ['Al₂O₂', '6+ and 4− do not balance.'],
  ], 0)),
]);

export const c25 = lesson('c2-covalent', 'Simple molecules and covalent bonds', '2.5', [
  'A covalent bond is a shared pair of electrons between non-metal atoms. Simple molecules have strong bonds inside the molecule but weak forces between molecules.',
], [
  byte('The covalent bond', [
    'A **covalent bond** is a **shared pair of electrons** between two atoms, usually non-metals. Each atom gains a **full outer shell**.',
    'A **single** bond is one shared pair (H–H), a **double** bond two pairs (O=O), a **triple** bond three pairs (N≡N).',
    'The result is a **molecule**: a group of atoms held together by covalent bonds.',
  ], fig({ svg: 'dotCrossCovalent' }, mc('How many pairs of electrons are shared between the two nitrogen atoms in N₂?', [
    ['3', 'Correct: nitrogen has 5 outer electrons and shares 3 pairs, forming a triple bond.'],
    ['1', 'One shared pair would be a single bond.'],
    ['2', 'Two shared pairs would be a double bond.'],
    ['0', 'Covalent bonds involve shared pairs.'],
  ], 0)), { fig: { svg: 'dotCrossCovalent', caption: 'Covalent bonding in H₂O, CH₄ and N₂' } }),
  byte('Common simple molecules', [
    '**H₂, Cl₂, O₂, N₂** are diatomic elements. **HCl** has one bond. **H₂O**: two O–H bonds and two lone pairs on oxygen. **NH₃**: three N–H bonds and one lone pair. **CH₄**: four C–H bonds.',
    '**CO₂** has two **double bonds** (O=C=O). **C₂H₄** has a C=C double bond. **CH₃OH** has C–H, C–O and O–H bonds.',
    'Pairs of electrons not used in bonding are called **lone pairs**.',
  ], mc('Which molecule contains a double bond between the central atom and each outer atom?', [
    ['Carbon dioxide, CO₂', 'Correct: O=C=O.'],
    ['Water, H₂O', 'Water has two single O–H bonds.'],
    ['Methane, CH₄', 'Methane has four single C–H bonds.'],
    ['Ammonia, NH₃', 'Ammonia has three single N–H bonds.'],
  ], 0)),
  byte('Properties of simple molecular substances', [
    'Simple molecular substances have **low melting and boiling points**. This is because the **forces between molecules (intermolecular forces) are weak** and little energy is needed to overcome them.',
    'Breaking a **covalent bond inside** a molecule is **not** needed when it melts or boils.',
    'They **do not conduct electricity**, because the molecules are neutral and have no free ions or electrons.',
  ], mc('Methane has a very low boiling point (−162 °C). Why?', [
    ['The forces between methane molecules are weak', 'Correct: little energy is needed to separate the molecules.'],
    ['The C–H covalent bonds are weak', 'The covalent bonds are strong and do not break when it boils.'],
    ['Methane is an ionic compound', 'It is made of molecules with covalent bonds.'],
    ['Methane has delocalised electrons', 'It has no free electrons.'],
  ], 0)),
]);

export const c26 = lesson('c2-giant', 'Giant covalent structures', '2.6', [
  'Diamond, graphite and silicon(IV) oxide are giant covalent structures: huge networks of atoms joined by strong covalent bonds.',
], [
  byte('Diamond and silicon(IV) oxide', [
    'In **diamond** every carbon atom is bonded to **four** others in a **rigid tetrahedral** network. **Silicon(IV) oxide** (silica, sand) has a similar structure with Si and O atoms.',
    'They have **very high melting points** (many strong covalent bonds must be broken), are **very hard**, and **do not conduct** electricity (no free electrons or ions).',
    'Uses: diamond for **cutting tools and drill tips**; silica as sand in glass and concrete.',
  ], fig({ svg: 'giantStructures' }, mc('Why is diamond very hard with a very high melting point?', [
    ['Each carbon atom is held to four others by strong covalent bonds throughout the structure', 'Correct.'],
    ['Its molecules are held by weak forces', 'Diamond is not made of separate molecules.'],
    ['It contains delocalised electrons', 'Diamond has no free electrons.'],
    ['It contains positive and negative ions', 'It is made of carbon atoms only.'],
  ], 0)), { fig: { svg: 'giantStructures', caption: 'Diamond and graphite' } }),
  byte('Graphite', [
    'In **graphite** each carbon atom is bonded to **three** others in **flat layers** of hexagons. The layers are held together by **weak forces**.',
    'The layers **slide over each other**, so graphite is **soft and slippery** (used as a lubricant and in pencils).',
    'Each carbon has one spare outer electron that becomes **delocalised**, so graphite **conducts electricity** (used for electrodes). It has a **high melting point** because the covalent bonds in each layer are strong.',
  ], mc('Why can graphite be used as an electrode?', [
    ['It has delocalised electrons that can move and carry charge', 'Correct: each carbon contributes one free electron.'],
    ['It contains positive and negative ions', 'Graphite is made of carbon atoms, not ions.'],
    ['Its layers are held by strong covalent bonds', 'The bonds between layers are weak; conduction is due to delocalised electrons.'],
    ['It has a very low melting point', 'It has a very high melting point.'],
  ], 0)),
]);

export const c27 = lesson('c2-metallic', 'Metallic bonding', '2.7', [
  'Metals have a lattice of positive ions in a sea of delocalised electrons. This explains their conductivity, malleability and high melting points.',
], [
  byte('The metallic bond', [
    '**Metallic bonding** is the **strong electrostatic attraction between positive metal ions and a sea of delocalised electrons**.',
    'The outer electrons of the metal atoms are **free to move** throughout the structure, and the positive ions are arranged in a regular lattice.',
  ], fig({ svg: 'metallic' }, mc('What are the particles in a metal lattice?', [
    ['Positive ions surrounded by delocalised electrons', 'Correct.'],
    ['Negative ions in a sea of protons', 'Metals form positive ions.'],
    ['Small molecules held by weak forces', 'Metals are giant structures.'],
    ['Neutral atoms with no free electrons', 'Metals have delocalised electrons.'],
  ], 0)), { fig: { svg: 'metallic', caption: 'Metallic bonding' } }),
  byte('Properties of metals explained', [
    '**Good electrical conductors:** the delocalised electrons carry charge through the metal. **Good thermal conductors:** they also pass on energy.',
    '**Malleable and ductile:** the layers of ions can **slide over each other** without breaking the bonding, because the electrons still hold them together.',
    '**High melting and boiling points** (usually): the electrostatic attraction between ions and electrons is strong.',
  ], mc('Why can a metal be hammered into shape without shattering?', [
    ['The layers of positive ions can slide while the delocalised electrons keep them bonded', 'Correct.'],
    ['The ions repel each other strongly', 'The ions are held together by the electron sea.'],
    ['Metals contain weak forces between molecules', 'Metals are not made of molecules.'],
    ['The electrons are fixed in place', 'The electrons are free to move.'],
  ], 0)),
]);

export const unit1 = {
  id: 'c1', number: 1, title: 'Particles, Atoms and Bonding', short: 'Particles', emoji: '⚛️', color: 'sky',
  submodules: [c11, c12, c21, c22, c23, c24, c25, c26, c27],
  papers: [],
};
