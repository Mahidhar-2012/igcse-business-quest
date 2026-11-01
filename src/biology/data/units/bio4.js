import { byte, lesson, mc, fig } from '../helpers.js';
import { multi, match, cloze, short } from '../../../data/builders.js';

// Units 10 to 15: diseases and immunity, gas exchange, respiration, excretion, coordination, drugs
// (Cambridge IGCSE Biology 0610, syllabus for 2026, 2027 and 2028, topics 10 to 15).

const withPractice = (l, ...qs) => { l.challenges = qs; return l; };

/* ---------- 10 Diseases and immunity ---------- */
export const b101 = withPractice(lesson('b10-disease', 'Pathogens and body defences', '10.1', [
  'A pathogen is a disease-causing organism. Transmissible diseases pass from host to host by direct contact or indirectly. The body has barriers and white blood cells. Hygiene, clean water, waste disposal and sewage treatment control spread.',
], [
  byte('Pathogens and transmission', [
    'A **pathogen** is a **disease-causing organism** (bacteria, viruses, fungi). A **transmissible disease** is one where the pathogen can pass from one host to another.',
    '**Direct contact:** touching, blood and other body fluids. **Indirect:** contaminated surfaces, food, water, animals (vectors) and the air (coughs and sneezes).',
  ], mc('Which is an example of indirect transmission of a pathogen?', [
    ['Eating food that has been contaminated with bacteria', 'Correct.'],
    ['Blood from an infected person entering a cut in another person', 'This is direct contact.'],
    ['Touching the infected skin of another person', 'This is direct contact.'],
    ['Receiving a blood transfusion from an infected donor', 'This is transmission through body fluids: direct.'],
  ], 0)),
  byte('Body defences', [
    'Barriers: **skin** (a physical barrier), **hairs and mucus in the nose** (trap particles and microbes), **stomach acid** (kills microbes in food). **White blood cells** destroy pathogens that get in by **phagocytosis** and by making **antibodies**.',
  ], match('Match each defence to how it protects the body.', [
    ['Skin', 'A physical barrier to pathogens'],
    ['Mucus and nose hairs', 'Trap pathogens and particles'],
    ['Stomach acid', 'Kills pathogens in food and drink'],
    ['White blood cells', 'Engulf pathogens and make antibodies'],
  ])),
  byte('Controlling the spread of disease', [
    '**Clean water supply** and **sewage treatment** stop water-borne diseases; **hygienic food preparation** and **good personal hygiene** (washing hands) reduce spread; **waste disposal** removes breeding sites for pests.',
  ], mc('Why does a safe, clean water supply help to control the spread of disease?', [
    ['It prevents pathogens in contaminated water from being swallowed by people', 'Correct.'],
    ['It stops the pathogens from being made inside the body in the first place', 'Pathogens come from outside.'],
    ['It gives people active immunity to all water-borne diseases', 'Immunity comes from infection or vaccination.'],
    ['It makes the white blood cells in the body produce more antibodies', 'Not the reason.'],
  ], 0)),
]),
  short('Define the term “pathogen”.', { kind: 'Definition', points: ['A disease-causing organism'], model: 'A pathogen is a disease-causing organism.' }),
  multi('Which of these are defences that stop pathogens entering the body? Select all that apply.', [
    ['Skin', 'A barrier.', true],
    ['Mucus in the nose and trachea', 'Traps microbes.', true],
    ['Stomach acid', 'Kills microbes.', true],
    ['Antibiotic tablets', 'These are medicines, not natural defences.', false],
  ]),
);

export const b102 = withPractice(lesson('b10-immunity', 'Immunity and vaccination', '10.2', [
  'Antibodies are proteins with shapes complementary to a pathogen’s antigens. Active immunity follows infection or vaccination and makes memory cells. Passive immunity is short-term and comes from another person. Cholera toxin causes diarrhoea by osmosis.',
], [
  byte('Antigens, antibodies and active immunity', [
    'Each pathogen has its own **antigens** with specific shapes. **Lymphocytes** make **antibodies**, proteins that **bind to antigens** because their shape is **complementary**. This destroys pathogens directly or marks them for **phagocytes**.',
    '**Active immunity:** defence by making your own antibodies, gained after **infection** or by **vaccination**. It is **long lasting** because **memory cells** are made.',
  ], mc('Why is an antibody specific to one pathogen?', [
    ['Its shape is complementary to the shape of that pathogen’s antigens', 'Correct.'],
    ['It contains the DNA of the pathogen, so it recognises only that pathogen', 'Antibodies are proteins, not DNA.'],
    ['It is made by phagocytes, which only engulf one kind of pathogen', 'Lymphocytes make antibodies.'],
    ['It dissolves the cell wall of every bacterium that it meets', 'Antibodies bind to antigens.'],
  ], 0)),
  byte('Vaccination', [
    '**Vaccination:** a **weakened or dead pathogen**, or its **antigens**, is put into the body. The antigens **stimulate lymphocytes to make antibodies** and **memory cells**. If the real pathogen enters later, memory cells respond **faster and in larger numbers**.',
    'If enough people are vaccinated, the spread of the disease is **controlled** because fewer people can pass it on.',
  ], mc('Why does a person who has been vaccinated fight the real pathogen faster?', [
    ['Memory cells are already present and make large amounts of antibody quickly', 'Correct.'],
    ['The vaccine contains the antibodies that destroy the real pathogen at once', 'The vaccine stimulates the person to make their own.'],
    ['The vaccine kills all the pathogens in the body before the person is infected', 'Vaccines work by stimulating immunity.'],
    ['The white blood cells have been changed so that they no longer need antibodies', 'Not the explanation.'],
  ], 0)),
  byte('Passive immunity', [
    '**Passive immunity** is **short-term** defence by **antibodies from another individual**, for example across the **placenta** and in **breast milk**. **No memory cells** are produced, so protection fades.',
    'Breast-feeding gives a baby antibodies while its own immune system develops.',
  ], match('Match each type of immunity to its description.', [
    ['Active immunity', 'Own antibodies and memory cells; long lasting'],
    ['Passive immunity', 'Antibodies from another person; short term'],
    ['Vaccination', 'Gives antigens to stimulate an immune response'],
  ])),
  byte('Cholera', [
    '**Cholera** is caused by a **bacterium** spread in **contaminated water**. It makes a **toxin** that causes **chloride ions to be secreted into the small intestine**. Water then moves into the gut by **osmosis**, causing **diarrhoea**, **dehydration** and loss of ions from the blood.',
  ], mc('Why does cholera cause severe diarrhoea?', [
    ['The toxin makes chloride ions enter the gut, so water follows by osmosis', 'Correct.'],
    ['The bacteria digest the lining of the gut, so water leaks out of the blood vessels', 'The toxin acts on ion secretion.'],
    ['The bacteria use up the water in the gut for their own respiration', 'Not the mechanism.'],
    ['The toxin blocks the kidneys, so water is lost from the intestine instead', 'The kidneys are not involved.'],
  ], 0)),
]),
  short('Describe how a vaccine gives long-term protection.', { kind: 'Exam question', command: 'Describe', points: ['A weakened pathogen or its antigens is given', 'Lymphocytes make antibodies', 'Memory cells are produced, which respond quickly if the pathogen returns'], model: 'A vaccine contains weakened pathogens or antigens. These stimulate lymphocytes to make antibodies and memory cells, which respond rapidly if the real pathogen enters the body later.' }),
  short('Explain why breast-feeding helps a young baby to avoid infections.', { command: 'Explain', points: ['Breast milk contains antibodies from the mother', 'These give the baby passive immunity while its own immune system develops'], model: 'Breast milk contains antibodies from the mother, which give the baby passive immunity while its own immune system is developing.' }),
);

/* ---------- 11 Gas exchange in humans ---------- */
export const b111 = withPractice(lesson('b11-gas', 'Gas exchange in humans', '11.1', [
  'Gas exchange surfaces are large, thin, well supplied with blood and well ventilated. Breathing uses the ribs, intercostal muscles and diaphragm. Expired air has less oxygen and more carbon dioxide and water vapour. Exercise increases breathing rate and depth.',
], [
  byte('Features of a gas exchange surface', [
    'Human gas exchange surfaces (the **alveoli**) have a **large surface area**, a **thin wall** (short diffusion distance), a **good blood supply** (keeps gradients steep) and **good ventilation** with air.',
    'Parts of the breathing system: **trachea** (with rings of **cartilage** to keep it open), **bronchi**, **bronchioles**, **alveoli**, **lungs**, **ribs**, **intercostal muscles** and **diaphragm**.',
  ], mc('Why is a good blood supply to the alveoli important for gas exchange?', [
    ['It carries oxygen away and brings carbon dioxide, which keeps the concentration gradients steep', 'Correct.'],
    ['It makes the alveolus walls thicker so that gases cannot leak out of the lungs', 'Walls must be thin.'],
    ['It brings extra air into the alveoli when the diaphragm contracts', 'Air comes in through the airways.'],
    ['It supplies glucose so that the alveoli can respire anaerobically', 'Not the purpose.'],
  ], 0)),
  byte('Ventilating the lungs', [
    '**Breathing in:** the **external intercostal muscles contract** to raise the ribs up and out; the **diaphragm contracts** and flattens. The **volume of the thorax increases** and the **pressure falls**, so air is drawn in.',
    '**Breathing out:** the **external intercostals relax** and the ribs fall; the **diaphragm relaxes** and rises. Thorax volume decreases, pressure rises and air is forced out. In **forced breathing** the **internal intercostal muscles** contract to pull the ribs down.',
  ], mc('Which changes occur when you breathe in?', [
    ['The diaphragm contracts and flattens, the ribs move up and out, and the pressure in the thorax falls', 'Correct.'],
    ['The diaphragm relaxes and rises, the ribs move down and in, and the pressure in the thorax falls', 'These are the changes when breathing out, apart from the pressure.'],
    ['The diaphragm contracts and flattens, the ribs move down and in, and the pressure in the thorax rises', 'Wrong rib movement and pressure.'],
    ['The diaphragm relaxes and rises, the ribs move up and out, and the pressure in the thorax rises', 'Mixed up.'],
  ], 0)),
  byte('Inspired and expired air, and exercise', [
    '**Inspired air** has more **oxygen** and less **carbon dioxide** and **water vapour** than **expired air** (about 21% oxygen and 0.04% carbon dioxide breathed in; about 16% oxygen and 4% carbon dioxide breathed out). Limewater goes cloudy more quickly with expired air.',
    '**Exercise** increases the **rate and depth of breathing**: respiring muscles make more carbon dioxide, which raises its concentration in the blood; this is **detected by the brain**, which increases the breathing rate.',
  ], mc('What is detected by the brain to make you breathe faster during exercise?', [
    ['A higher concentration of carbon dioxide in the blood', 'Correct.'],
    ['A lower concentration of oxygen in the alveoli', 'The main trigger is carbon dioxide.'],
    ['A higher concentration of lactic acid in the stomach', 'Not detected in this way.'],
    ['A lower concentration of carbon dioxide in the muscles', 'Muscles make more carbon dioxide.'],
  ], 0)),
  byte('Protecting the airways', [
    '**Goblet cells** make **mucus** that traps dust and pathogens. **Ciliated cells** have cilia that **sweep the mucus upwards** towards the throat, where it is swallowed, protecting the lungs from infection and particles.',
  ], mc('How do ciliated cells in the trachea protect the lungs?', [
    ['They sweep mucus containing trapped particles and microbes away from the lungs', 'Correct.'],
    ['They make the mucus that traps the dust and the bacteria', 'Goblet cells make mucus.'],
    ['They digest the pathogens that become trapped in the mucus', 'They move mucus; they do not digest.'],
    ['They absorb oxygen from the air and pass it to the blood vessels', 'Alveoli absorb oxygen.'],
  ], 0)),
]),
  short('Explain why the alveoli walls are only one cell thick.', { command: 'Explain', points: ['A thin wall gives a short diffusion distance', 'So oxygen and carbon dioxide diffuse quickly'], model: 'Walls one cell thick give a short diffusion distance so oxygen and carbon dioxide can diffuse quickly between the air and the blood.' }),
  short('Describe the differences between inspired and expired air.', { kind: 'Exam question', command: 'Describe', points: ['Expired air has less oxygen', 'Expired air has more carbon dioxide', 'Expired air has more water vapour'], model: 'Expired air contains less oxygen, more carbon dioxide and more water vapour than inspired air.' }),
);

/* ---------- 12 Respiration ---------- */
export const b121 = withPractice(lesson('b12-respiration', 'Aerobic and anaerobic respiration', '12.1 to 12.3', [
  'Respiration releases energy for muscle contraction, protein synthesis, cell division, active transport, growth, nerve impulses and keeping warm. Aerobic respiration uses oxygen; anaerobic respiration does not and releases much less energy.',
], [
  byte('Uses of energy', [
    'Energy released by respiration is used for **muscle contraction**, **protein synthesis**, **cell division**, **active transport**, **growth**, the **passage of nerve impulses** and the **maintenance of a constant body temperature**.',
  ], multi('Which of these processes use energy from respiration? Select all that apply.', [
    ['Active transport of ions into root hair cells', 'Needs energy.', true],
    ['Muscle contraction', 'Needs energy.', true],
    ['Making proteins from amino acids', 'Needs energy.', true],
    ['Diffusion of oxygen into a cell', 'Uses the kinetic energy of the molecules.', false],
  ])),
  byte('Aerobic respiration', [
    '**Aerobic respiration** uses **oxygen** to break down nutrient molecules and release energy. Word equation: **glucose + oxygen → carbon dioxide + water.** Balanced equation: **C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O.**',
  ], cloze('Complete the equation for aerobic respiration.', 'C₆H₁₂O₆ + ___ → ___ + 6H₂O, releasing energy.', ['6O₂', '6CO₂'], ['6H₂', '12CO₂']), { eq: ['C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O'] }),
  byte('Anaerobic respiration', [
    '**Anaerobic respiration** breaks down nutrient molecules to release energy **without oxygen**. It releases **much less energy** per glucose than aerobic respiration.',
    '**In yeast:** glucose → alcohol (ethanol) + carbon dioxide, **C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.** **In muscles during vigorous exercise:** glucose → **lactic acid**.',
  ], mc('Which products are made when yeast respires anaerobically?', [
    ['Ethanol and carbon dioxide', 'Correct.'],
    ['Lactic acid only', 'This is anaerobic respiration in muscles.'],
    ['Carbon dioxide and water', 'This is aerobic respiration.'],
    ['Ethanol and water', 'Carbon dioxide is also made.'],
  ], 0)),
  byte('Oxygen debt', [
    'During vigorous exercise **lactic acid builds up** in the muscles and blood, causing an **oxygen debt**. After exercise it is removed by **continued fast heart rate** (carries lactic acid to the liver), **deep fast breathing** (supplies oxygen) and **aerobic respiration of lactic acid in the liver**.',
  ], mc('Why does a runner keep breathing deeply for several minutes after finishing a sprint?', [
    ['To supply oxygen for the aerobic breakdown of lactic acid and so repay the oxygen debt', 'Correct.'],
    ['To make more lactic acid in the muscles so that energy can be stored', 'Lactic acid is a waste product.'],
    ['To remove the oxygen that built up in the blood during the sprint', 'There was an oxygen shortage, not a surplus.'],
    ['To stop the muscles respiring aerobically, so that they can rest', 'Muscles continue to respire.'],
  ], 0)),
]),
  short('State the word equation for aerobic respiration.', { kind: 'Definition', points: ['Glucose + oxygen', '→ carbon dioxide + water'], model: 'Glucose + oxygen → carbon dioxide + water (releasing energy).' }),
  short('Explain why anaerobic respiration releases less energy than aerobic respiration.', { command: 'Explain', points: ['Glucose is only partly broken down in anaerobic respiration', 'The products (ethanol or lactic acid) still contain stored chemical energy'], model: 'In anaerobic respiration glucose is only partly broken down, and the products, such as lactic acid or ethanol, still contain chemical energy, so less energy is released.' }),
);

/* ---------- 13 Excretion ---------- */
export const b131 = withPractice(lesson('b13-excretion', 'Excretion in humans', '13.1', [
  'Carbon dioxide is excreted by the lungs; the kidneys excrete urea, excess water and ions. The kidney’s nephrons filter blood and reabsorb useful substances. The liver makes urea by deamination of excess amino acids.',
], [
  byte('Excretory organs', [
    '**Lungs** excrete **carbon dioxide**. **Kidneys** excrete **urea**, excess **water** and excess **ions**. The urinary system: **kidneys → ureters → bladder → urethra**. A kidney has an outer **cortex** and an inner **medulla**.',
  ], match('Match each organ to its role.', [
    ['Kidney', 'Filters blood and makes urine'],
    ['Ureter', 'Carries urine to the bladder'],
    ['Bladder', 'Stores urine'],
    ['Urethra', 'Carries urine out of the body'],
  ])),
  byte('The nephron', [
    'A **nephron** begins with the **glomerulus**, a knot of capillaries. **Ultrafiltration:** under high pressure, **water, glucose, urea and ions** are filtered from the blood into the nephron. Along the tubule **all glucose, some ions and most water are reabsorbed** into the blood. The remainder is **urine**: urea, excess water and excess ions.',
  ], mc('Which substance should never be found in the urine of a healthy person, because it is all reabsorbed?', [
    ['Glucose', 'Correct.'],
    ['Urea', 'Urea is excreted in the urine.'],
    ['Water', 'Excess water is excreted.'],
    ['Salts (ions)', 'Excess ions are excreted.'],
  ], 0)),
  byte('The liver, deamination and urea', [
    'The liver converts excess **amino acids** into proteins (**assimilation**). Excess amino acids are broken down by **deamination**: the **nitrogen-containing part is removed** and made into **urea**. The rest is used for energy.',
    'Urea is **toxic** if it builds up, so it must be **excreted** by the kidneys.',
  ], mc('Where is urea made, and where is it removed from the body?', [
    ['Made in the liver and removed by the kidneys in urine', 'Correct.'],
    ['Made in the kidneys and removed by the liver in bile', 'Reversed.'],
    ['Made in the lungs and removed by the lungs when breathing out', 'Lungs excrete carbon dioxide.'],
    ['Made in the stomach and removed in the faeces from the large intestine', 'Urea is not made in the stomach.'],
  ], 0)),
]),
  short('Define the term “deamination”.', { kind: 'Definition', points: ['The removal of the nitrogen-containing part of amino acids', 'to form urea (in the liver)'], model: 'Deamination is the removal of the nitrogen-containing part of amino acids to form urea in the liver.' }),
  short('Explain why excretion of urea is important.', { command: 'Explain', points: ['Urea is toxic (poisonous)', 'It would damage cells if it built up, so it is removed in urine'], model: 'Urea is toxic and would harm cells if it built up, so it is removed from the body by the kidneys.' }),
);

/* ---------- 14 Coordination and response ---------- */
export const b141 = withPractice(lesson('b14-nervous', 'The nervous system and reflexes', '14.1', [
  'Neurones carry electrical impulses. The CNS is the brain and spinal cord; the PNS is the nerves outside. A reflex arc is receptor, sensory neurone, relay neurone, motor neurone and effector. At a synapse, neurotransmitter molecules diffuse across the gap.',
], [
  byte('The nervous system', [
    '**Electrical impulses** travel along **neurones**. The **central nervous system (CNS)** is the **brain and spinal cord**; the **peripheral nervous system (PNS)** is the **nerves outside** them. The nervous system **coordinates and regulates** body functions.',
    '**Sensory neurones** carry impulses from receptors to the CNS; **relay neurones** connect neurones in the CNS; **motor neurones** carry impulses to effectors (muscles and glands).',
  ], mc('Which neurone carries impulses from the spinal cord to a muscle?', [
    ['A motor neurone', 'Correct.'],
    ['A sensory neurone', 'This carries impulses to the spinal cord.'],
    ['A relay neurone', 'This links neurones inside the CNS.'],
    ['A receptor neurone', 'Receptors are cells that detect stimuli.'],
  ], 0)),
  byte('The reflex arc', [
    'A **reflex action** is an **automatic, rapid** response that does not involve thinking. The pathway is: **stimulus → receptor → sensory neurone → relay neurone (CNS) → motor neurone → effector → response.**',
    'Reflexes protect the body (for example moving a hand from a hot surface) by **automatically and rapidly coordinating stimuli with the response of effectors**.',
  ], fig({ svg: 'reflexArc' }, mc('What is the effector in a reflex action in which a person moves their hand away from a hot object?', [
    ['The muscles in the arm', 'Correct.'],
    ['The receptors in the skin of the finger', 'These detect the stimulus.'],
    ['The relay neurone in the spinal cord', 'This passes the impulse on in the CNS.'],
    ['The sensory neurone in the arm', 'This carries impulses to the CNS.'],
  ], 0)), { fig: { svg: 'reflexArc', caption: 'A simple reflex arc' } }),
  byte('Synapses', [
    'A **synapse** is a **junction between two neurones**. When an impulse arrives, **vesicles release neurotransmitter molecules** into the **synaptic gap**; they **diffuse across** the gap and **bind to receptor proteins** on the next neurone, which starts a new impulse. Synapses make sure impulses travel in **one direction only**.',
  ], mc('Why do impulses travel in one direction only across a synapse?', [
    ['Only the first neurone releases neurotransmitter and only the second has receptors for it', 'Correct.'],
    ['The impulse cannot jump across a gap unless the gap has been closed by a muscle', 'Not the mechanism.'],
    ['Neurotransmitter molecules are too large to diffuse back across the gap', 'It is the receptors and vesicle location that matter.'],
    ['The motor neurone is longer than the sensory neurone in every reflex', 'Length is not the reason.'],
  ], 0)),
]),
  cloze('Complete the reflex arc.', 'stimulus → receptor → ___ neurone → relay neurone → ___ neurone → effector.', ['sensory', 'motor'], ['spinal', 'cranial']),
  short('Describe what happens at a synapse.', { kind: 'Exam question', command: 'Describe', points: ['An impulse causes vesicles to release neurotransmitter into the gap', 'The neurotransmitter diffuses across the gap', 'It binds to receptor proteins on the next neurone, which starts a new impulse'], model: 'An impulse arrives and vesicles release neurotransmitter into the synaptic gap. The molecules diffuse across and bind to receptor proteins on the next neurone, which starts an impulse in it.' }),
);

export const b142 = withPractice(lesson('b14-senses', 'Sense organs and the eye', '14.2', [
  'Sense organs are groups of receptor cells. The cornea refracts light, the iris controls the size of the pupil, the lens focuses light on the retina, and the optic nerve carries impulses to the brain. The pupil reflex protects the retina. Accommodation changes the shape of the lens. Rods work in dim light; cones detect colour.',
], [
  byte('Parts of the eye', [
    '**Cornea:** refracts light. **Iris:** controls how much light enters the pupil. **Pupil:** the opening. **Lens:** focuses light onto the retina. **Retina:** contains light receptors (rods and cones). **Optic nerve:** carries impulses to the brain. The **blind spot** has no receptors, where the optic nerve leaves.',
  ], fig({ svg: 'eye' }, mc('Which part of the eye contains the light receptors?', [
    ['The retina', 'Correct.'],
    ['The cornea', 'The cornea refracts light.'],
    ['The iris', 'The iris controls the size of the pupil.'],
    ['The optic nerve', 'The optic nerve carries impulses to the brain.'],
  ], 0)), { fig: { svg: 'eye', caption: 'The human eye' } }),
  byte('The pupil reflex', [
    'In **bright light** the **circular muscles of the iris contract** and the **radial muscles relax**, so the **pupil gets smaller**, protecting the retina. In **dim light** the **radial muscles contract** and the **circular muscles relax**, so the pupil gets larger. The two sets of muscles are **antagonistic**.',
  ], mc('What happens to the pupil in bright light?', [
    ['The circular muscles contract and the pupil gets smaller', 'Correct.'],
    ['The radial muscles contract and the pupil gets larger', 'This happens in dim light.'],
    ['The circular muscles contract and the pupil gets larger', 'Contracting circular muscles makes it smaller.'],
    ['The radial muscles contract and the pupil gets smaller', 'Radial contraction makes it larger.'],
  ], 0)),
  byte('Accommodation', [
    '**To view a near object:** the **ciliary muscles contract**, the **suspensory ligaments slacken**, the **lens becomes fatter (more curved)** and refracts the light more. **To view a distant object:** the **ciliary muscles relax**, the **suspensory ligaments are pulled tight**, the **lens becomes thinner**.',
  ], mc('When looking at a near object, what happens to the ciliary muscles and the lens?', [
    ['The ciliary muscles contract and the lens becomes fatter', 'Correct.'],
    ['The ciliary muscles relax and the lens becomes thinner', 'This is for a distant object.'],
    ['The ciliary muscles contract and the lens becomes thinner', 'The lens becomes fatter.'],
    ['The ciliary muscles relax and the lens becomes fatter', 'Contraction makes the lens fatter.'],
  ], 0)),
  byte('Rods and cones', [
    '**Rods** are **more sensitive** to dim light (night vision) and are spread over the retina. **Cones** are of **three kinds**, sensitive to **red, green or blue** light, giving **colour vision**. The **fovea** is the part of the retina with the **most cones**, giving **sharp vision**.',
  ], mc('Why is it hard to see colours in very dim light?', [
    ['Cones need brighter light to work, and rods do not detect colour', 'Correct.'],
    ['Rods are damaged by dim light and so stop responding to it', 'Rods are more sensitive in dim light.'],
    ['The lens cannot focus the light on the fovea when the light is dim', 'Not the reason.'],
    ['The pupil becomes smaller in dim light, so no light enters the eye', 'The pupil becomes larger.'],
  ], 0)),
]),
  short('State the function of the iris.', { kind: 'Definition', points: ['Controls the amount of light entering the eye', '(by changing the size of the pupil)'], model: 'The iris controls how much light enters the eye by changing the size of the pupil.' }),
  match('Match each part of the eye to its function.', [
    ['Cornea', 'Refracts light'],
    ['Lens', 'Focuses light on the retina'],
    ['Retina', 'Contains light receptors'],
    ['Optic nerve', 'Carries impulses to the brain'],
  ]),
);

export const b143 = withPractice(lesson('b14-hormones', 'Hormones', '14.3', [
  'A hormone is a chemical made by a gland and carried in the blood to target organs. Adrenaline prepares the body for fight or flight. Hormonal control is slower and lasts longer than nervous control.',
], [
  byte('Hormones and the endocrine glands', [
    'A **hormone** is a **chemical substance, produced by a gland and carried by the blood, which alters the activity of one or more target organs.**',
    '**Adrenal glands:** adrenaline. **Pancreas:** insulin (and glucagon). **Testes:** testosterone. **Ovaries:** oestrogen.',
  ], match('Match each gland to the hormone it secretes.', [
    ['Adrenal glands', 'Adrenaline'],
    ['Pancreas', 'Insulin'],
    ['Testes', 'Testosterone'],
    ['Ovaries', 'Oestrogen'],
  ])),
  byte('Adrenaline', [
    '**Adrenaline** is secreted in **“fight or flight”** situations. Effects: **increased breathing rate, increased heart rate, wider pupils**, and a **rise in blood glucose** concentration, giving the muscles more energy.',
  ], mc('Why does adrenaline increase the heart rate and blood glucose concentration?', [
    ['It supplies more oxygen and glucose to the muscles for energy', 'Correct.'],
    ['It removes lactic acid from the muscles faster than normal', 'Not the purpose.'],
    ['It lowers the body temperature so the muscles do not overheat', 'Not the purpose.'],
    ['It stops the muscles respiring so that they can rest', 'The opposite.'],
  ], 0)),
  byte('Nervous and hormonal control compared', [
    '**Nervous:** **very fast** (electrical impulses), effects **short-lived**. **Hormonal:** **slower** (carried by the blood), effects **last longer**.',
  ], match('Match each feature to the type of control.', [
    ['Very fast response, short-lasting', 'Nervous control'],
    ['Slower response, longer-lasting', 'Hormonal control'],
    ['Carried by the blood', 'Hormones'],
    ['Electrical impulses along neurones', 'Nervous system'],
  ])),
]),
  short('Define the term “hormone”.', { kind: 'Definition', points: ['A chemical substance made by a gland', 'carried by the blood, which alters the activity of target organs'], model: 'A hormone is a chemical substance produced by a gland and carried in the blood, which alters the activity of one or more target organs.' }),
);

export const b144 = withPractice(lesson('b14-homeostasis', 'Homeostasis', '14.4', [
  'Homeostasis maintains a constant internal environment by negative feedback. Insulin lowers and glucagon raises blood glucose. Body temperature is controlled by the brain using sweating, shivering, and vasodilation or vasoconstriction.',
], [
  byte('Homeostasis and negative feedback', [
    '**Homeostasis** is the **maintenance of a constant internal environment**. It works by **negative feedback**: a change away from the **set point** is detected and corrected, bringing the value back.',
  ], mc('A person’s blood glucose rises above the set point and the body responds so that it falls. What is this an example of?', [
    ['Negative feedback', 'Correct.'],
    ['Positive feedback', 'This would make the change bigger.'],
    ['A reflex arc', 'No neurone pathway is described.'],
    ['Passive immunity', 'Unrelated.'],
  ], 0)),
  byte('Control of blood glucose', [
    'After a meal glucose rises: the **pancreas secretes insulin**, which causes the **liver to convert glucose into glycogen** for storage, so blood glucose **falls**. If glucose falls too low, the pancreas secretes **glucagon**, which causes the liver to **convert glycogen back into glucose**, raising blood glucose.',
    '**Type 1 diabetes:** the pancreas does not make enough insulin; it is treated with **insulin injections** (and control of diet).',
  ], mc('A person has not eaten for many hours and their blood glucose falls. Which hormone is secreted and what does it do?', [
    ['Glucagon, which makes the liver convert glycogen into glucose', 'Correct.'],
    ['Insulin, which makes the liver convert glucose into glycogen', 'This lowers blood glucose.'],
    ['Adrenaline, which makes the pancreas release stored glucose', 'The liver stores glycogen; adrenaline acts differently.'],
    ['Glucagon, which makes the liver convert glucose into glycogen', 'This would lower glucose further.'],
  ], 0)),
  byte('Temperature control in mammals', [
    'The **brain** detects blood temperature. **If too hot:** **sweat glands** secrete sweat (evaporation cools); **vasodilation** (arterioles widen) increases blood flow to the skin so **more energy is radiated**; hair erector muscles relax so hairs lie flat.',
    '**If too cold:** **shivering** (muscle contractions release energy by respiration); **vasoconstriction** (arterioles narrow) reduces blood flow to the skin surface; hairs are raised to trap an insulating layer of air. **Fatty tissue** insulates.',
  ], mc('On a cold day, what happens to the arterioles supplying the skin surface capillaries?', [
    ['They narrow (vasoconstriction), so less energy is lost from the skin', 'Correct.'],
    ['They widen (vasodilation), so more energy is lost from the skin', 'This happens when it is hot.'],
    ['They widen (vasodilation), so more blood reaches the muscles', 'The skin blood supply decreases.'],
    ['They narrow (vasoconstriction), so more sweat is made on the skin', 'Sweating is not increased.'],
  ], 0)),
]),
  short('Define “homeostasis”.', { kind: 'Definition', points: ['The maintenance of a constant internal environment'], model: 'Homeostasis is the maintenance of a constant internal environment.' }),
  short('Explain how the body reduces its temperature when it is too hot.', { command: 'Explain', points: ['Sweat is made and its evaporation cools the skin', 'Vasodilation brings more blood close to the surface so more energy is lost'], model: 'Sweat glands release sweat, and evaporation takes energy from the skin. Arterioles to the skin widen (vasodilation), so more blood flows near the surface and more energy is transferred to the surroundings.' }),
);

export const b145 = withPractice(lesson('b14-tropisms', 'Tropic responses', '14.5', [
  'Plants respond to light (phototropism) and gravity (gravitropism). Auxin, made in the shoot tip, is unevenly distributed and makes cells on the shaded or lower side elongate.',
], [
  byte('Phototropism and gravitropism', [
    '**Phototropism:** growth towards (shoots) or away from (roots) the direction of **light**. **Gravitropism:** growth towards (roots) or away from (shoots) **gravity**.',
    'Shoots are **positively phototropic** and **negatively gravitropic**; roots are **positively gravitropic**.',
  ], mc('A seedling is placed on its side in the dark. What happens to the root and the shoot?', [
    ['The root grows downwards and the shoot grows upwards', 'Correct.'],
    ['The root grows upwards and the shoot grows downwards', 'Reversed.'],
    ['Both the root and the shoot grow downwards', 'Shoots are negatively gravitropic.'],
    ['Both the root and the shoot continue to grow horizontally', 'Both respond to gravity.'],
  ], 0)),
  byte('Auxin', [
    '**Auxin** is made in the **shoot tip** and **diffuses** through the plant. It is **unequally distributed** in response to light and gravity. In a shoot it **stimulates cell elongation**: more auxin on the **shaded side** makes those cells elongate more, so the shoot **bends towards the light**.',
  ], mc('Light shines from the right onto a shoot. Where is there more auxin, and what happens?', [
    ['On the left (shaded) side, where it makes cells elongate more so the shoot bends right', 'Correct.'],
    ['On the right (lit) side, where it makes cells elongate more so the shoot bends left', 'Auxin collects on the shaded side.'],
    ['On the right side, where it stops cells elongating so the shoot bends right', 'Auxin stimulates elongation.'],
    ['Equally on both sides, so the shoot grows straight upwards', 'Auxin is unevenly distributed.'],
  ], 0)),
]),
  short('Define “phototropism”.', { kind: 'Definition', points: ['A response in which parts of a plant grow towards or away from', 'the direction of the light source'], model: 'Phototropism is a response in which parts of a plant grow towards or away from the direction of a light source.' }),
  short('Explain how auxin makes a shoot grow towards light.', { command: 'Explain', points: ['Auxin made in the tip moves to the shaded side', 'It makes cells on the shaded side elongate more, so the shoot bends towards the light'], model: 'Auxin from the shoot tip builds up on the shaded side and makes those cells elongate more, so the shoot bends towards the light.' }),
);

/* ---------- 15 Drugs ---------- */
export const b151 = withPractice(lesson('b15-drugs', 'Drugs and antibiotics', '15.1', [
  'A drug modifies chemical reactions in the body. Antibiotics kill bacteria but not viruses. Overuse of antibiotics makes bacteria resistant, for example MRSA.',
], [
  byte('Drugs and antibiotics', [
    'A **drug** is any **substance taken into the body that modifies or affects chemical reactions** in the body.',
    '**Antibiotics** (for example penicillin) **kill bacteria** and treat **bacterial infections**, but they have **no effect on viruses**.',
  ], mc('A doctor does not prescribe antibiotics for a patient with influenza. Why not?', [
    ['Influenza is caused by a virus, and antibiotics do not affect viruses', 'Correct.'],
    ['Influenza is caused by a fungus, and antibiotics only work on bacteria', 'Influenza is viral.'],
    ['Influenza is not transmissible, so there is nothing to treat', 'It is transmissible.'],
    ['Antibiotics are digested in the stomach before they reach the infection', 'Not the reason.'],
  ], 0)),
  byte('Antibiotic resistance', [
    'Some bacteria are **resistant** to antibiotics, which makes the antibiotic less effective. **Natural selection:** random mutation makes a resistant bacterium; antibiotics kill the non-resistant ones; the resistant bacteria survive, reproduce and pass on the resistance allele.',
    'Using antibiotics **only when essential** limits the development of resistant strains such as **MRSA**.',
  ], mc('Why should antibiotics be used only when essential?', [
    ['Overuse selects for resistant bacteria, such as MRSA, which then spread', 'Correct.'],
    ['Overuse causes the antibiotics to turn into viruses inside the body', 'Not true.'],
    ['Overuse makes a patient’s own cells resistant to every future infection', 'Bacteria, not human cells, become resistant.'],
    ['Overuse stops the body from ever making its own white blood cells', 'Not true.'],
  ], 0)),
]),
  short('Define the term “drug”.', { kind: 'Definition', points: ['Any substance taken into the body', 'that modifies or affects chemical reactions in the body'], model: 'A drug is any substance taken into the body that modifies or affects chemical reactions in the body.' }),
  short('Explain how antibiotic-resistant bacteria develop.', { command: 'Explain', points: ['A random mutation gives some bacteria resistance', 'The antibiotic kills non-resistant bacteria, so the resistant ones survive and reproduce, passing on the allele'], model: 'A mutation gives a bacterium resistance. The antibiotic kills the non-resistant bacteria, so the resistant ones survive, reproduce and pass on the resistance allele; the population becomes resistant.' }),
);

export const unit10 = { id: 'b10', number: 10, title: 'Diseases and Immunity', short: 'Immunity', emoji: '🦠', color: 'rose', submodules: [b101, b102], papers: [] };
export const unit11 = { id: 'b11', number: 11, title: 'Gas Exchange in Humans', short: 'Gas exchange', emoji: '🫁', color: 'sky', submodules: [b111], papers: [] };
export const unit12 = { id: 'b12', number: 12, title: 'Respiration', short: 'Respiration', emoji: '⚡', color: 'amber', submodules: [b121], papers: [] };
export const unit13 = { id: 'b13', number: 13, title: 'Excretion in Humans', short: 'Excretion', emoji: '💧', color: 'teal', submodules: [b131], papers: [] };
export const unit14 = { id: 'b14', number: 14, title: 'Coordination and Response', short: 'Coordination', emoji: '🧠', color: 'violet', submodules: [b141, b142, b143, b144, b145], papers: [] };
export const unit15 = { id: 'b15', number: 15, title: 'Drugs', short: 'Drugs', emoji: '💊', color: 'indigo', submodules: [b151], papers: [] };
