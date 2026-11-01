import { byte, lesson, mc, calc, fig } from '../helpers.js';
import { multi, match, cloze, short } from '../../../data/builders.js';

// Units 7 to 9: human nutrition, transport in plants, transport in animals
// (Cambridge IGCSE Biology 0610, syllabus for 2026, 2027 and 2028, topics 7 to 9).

const withPractice = (l, ...qs) => { l.challenges = qs; return l; };

/* ---------- 7 Human nutrition ---------- */
export const b71 = withPractice(lesson('b7-diet', 'Diet', '7.1', [
  'A balanced diet has the right amounts of carbohydrates, fats, proteins, vitamins, minerals, fibre and water. Lack of vitamin C causes scurvy and lack of vitamin D causes rickets.',
], [
  byte('A balanced diet and its parts', [
    'A **balanced diet** contains all the nutrients in the right amounts for a person’s age, size and activity.',
    '**Carbohydrates** (bread, rice, potatoes): energy. **Fats and oils** (butter, nuts, oily fish): energy store, insulation. **Proteins** (meat, fish, beans): growth and repair. **Fibre** (vegetables, wholemeal bread): keeps food moving through the gut. **Water:** a solvent and needed in all cells.',
  ], match('Match each nutrient to its main importance.', [
    ['Carbohydrates', 'A source of energy'],
    ['Proteins', 'Growth and repair of cells'],
    ['Fibre', 'Helps food move through the gut'],
    ['Fats', 'Energy store and insulation'],
  ])),
  byte('Vitamins and minerals', [
    '**Vitamin C** (citrus fruit): needed to make a protein that holds cells together; lack causes **scurvy** (bleeding gums, slow healing). **Vitamin D** (oily fish, sunlight on skin): helps the gut absorb calcium; lack causes **rickets** (soft, bent bones).',
    '**Calcium** (milk): strong bones and teeth. **Iron** (red meat): used to make haemoglobin; lack causes anaemia.',
  ], mc('A child with bent leg bones is found to be short of vitamin D. Why does lack of vitamin D lead to this?', [
    ['Less calcium is absorbed from the gut, so the bones do not harden properly', 'Correct.'],
    ['Less iron is absorbed from the gut, so the bones cannot make red blood cells', 'Iron is linked to anaemia, not rickets.'],
    ['Less protein is absorbed from the gut, so the muscles around the bones are weak', 'Not the cause of rickets.'],
    ['Less energy is released in respiration, so the bones cannot grow in length', 'Not the cause of rickets.'],
  ], 0)),
]),
  short('State the cause of scurvy.', { kind: 'Definition', points: ['A lack (deficiency) of vitamin C in the diet'], model: 'Scurvy is caused by a lack of vitamin C in the diet.' }),
  mc('Which food is the best source of iron?', [
    ['Red meat', 'Correct.'],
    ['Butter', 'A source of fat.'],
    ['White rice', 'A source of carbohydrate.'],
    ['Oranges', 'A source of vitamin C.'],
  ], 0),
);

export const b72 = withPractice(lesson('b7-digestive', 'The digestive system', '7.2', [
  'Food is ingested, digested, absorbed, assimilated and egested. The alimentary canal runs from mouth to anus; the salivary glands, liver, gall bladder and pancreas add secretions.',
], [
  byte('The five stages of nutrition', [
    '**Ingestion:** taking food and drink into the body. **Digestion:** breakdown of food. **Absorption:** nutrients move from the intestine into the blood. **Assimilation:** cells take up and use the nutrients. **Egestion:** removal of undigested food as faeces.',
  ], match('Match each stage to its meaning.', [
    ['Ingestion', 'Taking food into the body'],
    ['Absorption', 'Nutrients pass from the gut into the blood'],
    ['Assimilation', 'Cells take up and use nutrients'],
    ['Egestion', 'Removal of undigested food as faeces'],
  ])),
  byte('Organs of the digestive system', [
    '**Alimentary canal:** mouth, oesophagus, stomach, small intestine (duodenum and ileum), large intestine (colon, rectum), anus.',
    '**Associated organs:** **salivary glands** (saliva with amylase), **pancreas** (makes enzymes), **liver** (makes bile), **gall bladder** (stores bile).',
  ], fig({ svg: 'digestiveSystem' }, mc('In which organ is bile made, and where is it stored?', [
    ['Made in the liver and stored in the gall bladder', 'Correct.'],
    ['Made in the gall bladder and stored in the liver', 'Reversed.'],
    ['Made in the pancreas and stored in the stomach', 'The pancreas makes enzymes, not bile.'],
    ['Made in the stomach and stored in the duodenum', 'Not correct.'],
  ], 0)), { fig: { svg: 'digestiveSystem', caption: 'The human digestive system' } }),
]),
  short('Define “egestion”.', { kind: 'Definition', points: ['The removal of undigested food', 'from the body as faeces'], model: 'Egestion is the removal of undigested food from the body as faeces.' }),
  multi('Which of these are associated organs of the digestive system? Select all that apply.', [
    ['Liver', 'Makes bile.', true],
    ['Pancreas', 'Makes digestive enzymes.', true],
    ['Salivary glands', 'Make saliva.', true],
    ['Kidneys', 'Part of the excretory system.', false],
  ]),
);

export const b73 = withPractice(lesson('b7-physical', 'Physical digestion and teeth', '7.3', [
  'Physical digestion breaks food into smaller pieces and increases its surface area for enzymes. Teeth chew food; the stomach churns it; bile emulsifies fats.',
], [
  byte('Teeth and physical digestion', [
    '**Physical digestion** breaks food into smaller pieces **without chemical change**, which **increases the surface area** for enzymes.',
    '**Incisors:** cut and bite. **Canines:** tear. **Premolars and molars:** crush and grind. Teeth have **enamel** (hard outer layer), **dentine**, **pulp** (nerves and blood vessels) and **cement** that fixes the tooth in the jaw bone.',
  ], mc('Which type of tooth is mainly used to crush and grind food?', [
    ['Molar', 'Correct.'],
    ['Incisor', 'Incisors cut and bite.'],
    ['Canine', 'Canines tear food.'],
    ['Premolar and canine together', 'Canines do not crush.'],
  ], 0)),
  byte('The stomach and bile', [
    'The **stomach** churns food with its muscular wall, mixing it with gastric juice (physical digestion).',
    '**Bile** (made in the liver) **emulsifies fats**: it breaks large fat droplets into smaller ones, **increasing the surface area** for **lipase**. It is **alkaline**, so it neutralises acid from the stomach.',
  ], mc('How does bile help the digestion of fats?', [
    ['It breaks large fat droplets into smaller droplets, which increases the surface area for lipase', 'Correct.'],
    ['It breaks the chemical bonds in fat to form fatty acids and glycerol', 'This is done by lipase, not bile.'],
    ['It makes the stomach acid stronger so that fat is digested faster', 'Bile is alkaline.'],
    ['It carries the digested fat from the gut into the blood', 'Bile does not transport nutrients.'],
  ], 0)),
]),
  short('Explain why food is chewed before it is swallowed.', { command: 'Explain', points: ['Chewing breaks food into smaller pieces', 'This increases the surface area, so enzymes can act faster'], model: 'Chewing breaks food into smaller pieces, which increases its surface area so that enzymes can digest it faster.' }),
);

export const b74 = withPractice(lesson('b7-chemical', 'Chemical digestion', '7.4', [
  'Enzymes break large insoluble molecules into small soluble ones: amylase (starch to maltose), proteases (protein to amino acids), lipase (fats to fatty acids and glycerol). Hydrochloric acid kills microbes and gives pepsin its acid pH. Bile neutralises the acid.',
], [
  byte('Digestive enzymes', [
    '**Chemical digestion** breaks **large insoluble molecules into small soluble molecules** that can be absorbed.',
    '**Amylase** breaks **starch** into maltose (made in salivary glands and pancreas; acts in mouth and small intestine). **Proteases** break **protein** into **amino acids** (**pepsin** in the stomach; **trypsin** in the small intestine). **Lipase** breaks **fats** into **fatty acids and glycerol** (pancreas; acts in the small intestine).',
    '**Maltase** (on the lining of the small intestine) breaks **maltose into glucose**.',
  ], match('Match each enzyme to the food it digests and the product.', [
    ['Amylase', 'Starch to maltose'],
    ['Maltase', 'Maltose to glucose'],
    ['Protease', 'Protein to amino acids'],
    ['Lipase', 'Fats to fatty acids and glycerol'],
  ])),
  byte('Hydrochloric acid, pH and bile', [
    '**Hydrochloric acid** in gastric juice **kills harmful microorganisms** in food and gives the **acidic pH (about 2)** that **pepsin** needs.',
    '**Trypsin** works best in the **alkaline** conditions of the small intestine. **Bile**, an alkaline mixture, **neutralises** the acidic food from the stomach so that the pH is suitable.',
  ], mc('Food mixed with gastric juice enters the duodenum. Why does bile need to be added?', [
    ['It neutralises the acid so that enzymes in the small intestine can work at their optimum pH', 'Correct.'],
    ['It adds enzymes that digest protein in the acid conditions of the small intestine', 'Bile has no enzymes.'],
    ['It kills the bacteria that survived the acid in the stomach juices', 'This is the job of the acid.'],
    ['It makes the acid stronger so that protein is digested more quickly', 'Bile is alkaline.'],
  ], 0)),
]),
  short('Explain why digestion is needed before nutrients can be absorbed.', { command: 'Explain', points: ['Food molecules such as starch and protein are large and insoluble', 'Digestion breaks them into small soluble molecules that can pass through the gut wall into the blood'], model: 'Starch and protein are large and insoluble and cannot cross the gut wall. Digestion breaks them down into small, soluble molecules such as glucose and amino acids that can be absorbed into the blood.' }),
  mc('Pepsin is added to a solution of protein at pH 8 and nothing happens. What is the best explanation?', [
    ['Pepsin works best in acid conditions and is denatured at pH 8', 'Correct.'],
    ['Pepsin only digests starch, not protein', 'Pepsin is a protease.'],
    ['Protein is too small to fit the active site of pepsin', 'Protein is large.'],
    ['Pepsin needs bile before it can act on the protein', 'Pepsin does not need bile.'],
  ], 0),
);

export const b75 = withPractice(lesson('b7-absorption', 'Absorption', '7.5', [
  'Most nutrients and water are absorbed in the small intestine. Villi and microvilli give a huge surface area; capillaries carry glucose and amino acids, and lacteals carry fatty acids and glycerol.',
], [
  byte('Where absorption happens', [
    'The **small intestine** is where **nutrients are absorbed**. Most **water** is absorbed in the small intestine and some in the **colon**.',
    'The lining has many **villi** (finger-like projections) with **microvilli** on the surface cells, giving a **very large internal surface area**.',
  ], mc('Why is the lining of the small intestine covered in villi?', [
    ['They give a large surface area so that absorption is faster and more efficient', 'Correct.'],
    ['They make the lining thicker so that nutrients are held in the gut for longer', 'Villi make the exchange surface thinner and larger.'],
    ['They produce the enzymes that digest starch, protein and fat', 'Not their main function.'],
    ['They push food along the small intestine by contracting the muscles', 'This is peristalsis.'],
  ], 0)),
  byte('Structure of a villus', [
    'A villus has a **wall one cell thick** (short diffusion distance), a **network of blood capillaries** (carries away glucose and amino acids and keeps a steep concentration gradient) and a **lacteal** (a lymph vessel that carries **fatty acids and glycerol**).',
  ], fig({ svg: 'villus' }, mc('Which structure in a villus carries away fatty acids and glycerol?', [
    ['The lacteal', 'Correct.'],
    ['The capillary network', 'Capillaries carry glucose and amino acids.'],
    ['The epithelium', 'This is the surface layer of cells.'],
    ['The microvilli', 'These increase the surface area of each cell.'],
  ], 0)), { fig: { svg: 'villus', caption: 'A villus in the small intestine' } }),
]),
  short('Describe how a villus is adapted for absorption.', { kind: 'Exam question', command: 'Describe', points: ['A thin wall (one cell thick) gives a short diffusion distance', 'A rich blood supply of capillaries maintains a steep concentration gradient', 'A large surface area (villi and microvilli)', 'A lacteal carries fats away'], model: 'A villus has a wall only one cell thick for a short diffusion distance, a network of capillaries that carry nutrients away and keep a steep concentration gradient, and microvilli that increase the surface area. A lacteal carries away fatty acids and glycerol.' }),
);

/* ---------- 8 Transport in plants ---------- */
export const b81 = withPractice(lesson('b8-vessels', 'Xylem and phloem', '8.1', [
  'Xylem carries water and mineral ions and supports the plant; phloem carries sucrose and amino acids. Xylem vessels are dead, hollow tubes with lignin in their walls.',
], [
  byte('Functions of xylem and phloem', [
    '**Xylem:** transports **water and mineral ions** from the roots to the leaves, and gives **support**. **Phloem:** transports **sucrose and amino acids** around the plant.',
    'In a root the xylem is in the centre; in a stem the vascular bundles are in a ring near the outside; in a leaf the bundles form the veins, with xylem above phloem.',
  ], match('Match each vessel to what it transports.', [
    ['Xylem', 'Water and mineral ions'],
    ['Phloem', 'Sucrose and amino acids'],
  ].concat([['Xylem (extra role)', 'Support for the plant']]))),
  byte('Adaptations of xylem vessels', [
    'Xylem vessels have **thick walls strengthened with lignin** (waterproof and strong), **no cell contents** (nothing blocks the flow) and are joined **end to end with no cross walls**, forming a **long continuous tube**.',
  ], mc('Why can water flow easily through xylem vessels?', [
    ['The cells are dead with no contents and no end walls, forming a hollow tube', 'Correct.'],
    ['The cells are alive and use energy to pump the water upwards', 'Xylem cells are dead; movement is passive.'],
    ['The walls are thin so that water passes through them rapidly', 'The walls are thick with lignin.'],
    ['The cells have sieve plates that let the water through slowly', 'Sieve plates are in phloem.'],
  ], 0)),
]),
  short('State the function of the phloem.', { kind: 'Definition', points: ['Transports sucrose', 'and amino acids around the plant'], model: 'The phloem transports sucrose and amino acids around the plant.' }),
);

export const b82 = withPractice(lesson('b8-uptake', 'Water uptake', '8.2', [
  'Root hair cells have a large surface area for absorbing water and ions. Water passes from root hair cells through the cortex into the xylem, then up to the leaf mesophyll cells.',
], [
  byte('Root hair cells and the pathway of water', [
    '**Root hair cells** have a long, thin extension that gives a **large surface area** for absorbing **water (by osmosis)** and **mineral ions (by active transport)**.',
    'Pathway of water: **root hair cells → root cortex cells → xylem → mesophyll cells** in the leaf.',
  ], mc('Which list shows the correct pathway taken by water in a plant?', [
    ['Root hair cell, cortex, xylem, leaf mesophyll', 'Correct.'],
    ['Root hair cell, xylem, cortex, leaf mesophyll', 'Water crosses the cortex before it reaches the xylem.'],
    ['Cortex, root hair cell, xylem, leaf mesophyll', 'Water enters through the root hair cell first.'],
    ['Root hair cell, phloem, cortex, leaf mesophyll', 'Water travels in the xylem, not the phloem.'],
  ], 0)),
]),
  short('Explain how root hairs help a plant to absorb water.', { command: 'Explain', points: ['They give a large surface area', 'so more water can be absorbed by osmosis'], model: 'Root hairs give the root a very large surface area, so more water is absorbed by osmosis.' }),
);

export const b83 = withPractice(lesson('b8-transpiration', 'Transpiration', '8.3', [
  'Transpiration is the loss of water vapour from leaves. Water evaporates from mesophyll cells into air spaces and diffuses out through the stomata. Evaporation creates a transpiration pull that draws water up the xylem. Heat, wind and low humidity increase the rate.',
], [
  byte('What transpiration is', [
    '**Transpiration** is the **loss of water vapour from leaves**. Water **evaporates** from the surfaces of the mesophyll cells into the **air spaces**, then **diffuses out through the stomata**.',
    'The large internal surface area of the spongy mesophyll, and the size and number of stomata, affect how much water vapour is lost.',
  ], mc('Through which structures does most water vapour leave a leaf?', [
    ['The stomata', 'Correct.'],
    ['The xylem vessels', 'Xylem carries liquid water into the leaf.'],
    ['The palisade cells', 'These carry out photosynthesis.'],
    ['The phloem tubes', 'Phloem carries sucrose.'],
  ], 0)),
  byte('The transpiration pull', [
    'As water evaporates from the leaf, more water is **pulled up the xylem** as a continuous column. Water molecules are **held together by forces of attraction** (cohesion), so the column does not break. This is called the **transpiration pull**.',
    'Wilting happens when water is lost faster than it is absorbed: cells lose **turgor** and the plant droops.',
  ], mc('Which explanation of how water rises in the xylem is correct?', [
    ['Evaporation from the leaf pulls a column of water upwards, held together by attraction between water molecules', 'Correct.'],
    ['Root cells pump water up the xylem using energy from respiration', 'Xylem vessels are dead; there is no pumping.'],
    ['Sucrose in the phloem draws water upwards through the stem', 'Phloem does not move water up.'],
    ['Water vapour rises through the air spaces to the roots', 'The pull acts on liquid water in the xylem.'],
  ], 0)),
  byte('Factors affecting the rate of transpiration', [
    'Transpiration is **faster** when it is **hot** (faster evaporation), **windy** (removes humid air near the leaf, keeping the gradient steep), **dry** (low humidity) and **bright** (stomata open). It is **slower** in humid, still, cool or dark conditions.',
  ], mc('On which day will a plant lose water vapour fastest?', [
    ['Hot, dry and windy', 'Correct.'],
    ['Hot, humid and still', 'Humid, still air reduces the gradient.'],
    ['Cool, dry and windy', 'Cool air slows evaporation.'],
    ['Cool, humid and still', 'All three conditions slow transpiration.'],
  ], 0)),
]),
  short('Define “transpiration”.', { kind: 'Definition', points: ['The loss of water vapour', 'from the leaves (through the stomata)'], model: 'Transpiration is the loss of water vapour from the leaves, mainly through the stomata.' }),
  short('Explain why a plant wilts on a hot, windy day.', { command: 'Explain', points: ['Water is lost by transpiration faster than it is absorbed', 'Cells lose water and turgor pressure and become flaccid'], model: 'On a hot, windy day water evaporates from the leaves faster than the roots can replace it, so the cells lose water and turgor and become flaccid, and the plant wilts.' }),
);

export const b84 = withPractice(lesson('b8-translocation', 'Translocation', '8.4', [
  'Translocation is the movement of sucrose and amino acids in the phloem from sources (where they are made or released) to sinks (where they are used or stored). A part can be a source at one time and a sink at another.',
], [
  byte('Sources and sinks', [
    '**Translocation:** movement of **sucrose and amino acids** in the **phloem** from **sources** to **sinks**.',
    'A **source** releases sucrose or amino acids (for example a leaf in summer). A **sink** uses or stores them (for example growing roots, fruits, buds). A **potato tuber** is a sink in summer (stores starch) and a source in spring (releases sucrose to the shoots).',
  ], mc('A bean plant’s growing shoot tip uses sucrose for growth. In translocation, the shoot tip is…', [
    ['A sink, because it uses sucrose', 'Correct.'],
    ['A source, because it contains cells', 'A source releases sucrose.'],
    ['A source, because sucrose is made there by photosynthesis in older leaves', 'Mature leaves are the source.'],
    ['Neither, because only the xylem transports sucrose', 'Sucrose is transported in the phloem.'],
  ], 0)),
]),
  short('Explain why a storage root can be both a sink and a source at different times of year.', { command: 'Explain', points: ['In summer it stores sucrose or starch made by the leaves (a sink)', 'In spring it releases sucrose to supply the growing shoots (a source)'], model: 'In summer the root stores sugars made by the leaves, so it is a sink. In spring it releases sucrose to the growing shoots, so it is a source.' }),
);

/* ---------- 9 Transport in animals ---------- */
export const b91 = withPractice(lesson('b9-circulation', 'Circulatory systems', '9.1', [
  'The circulatory system is blood vessels with a pump and valves for one-way flow. A fish has a single circulation; a mammal has a double circulation, which keeps oxygenated and deoxygenated blood apart and allows higher pressure to the body.',
], [
  byte('Circulatory systems', [
    'A **circulatory system** is a system of **blood vessels with a pump (heart) and valves** to ensure **one-way flow** of blood.',
    '**Single circulation (fish):** blood passes through the heart **once** per circuit (heart → gills → body → heart). **Double circulation (mammal):** blood passes through the heart **twice** per circuit (heart → lungs → heart → body → heart).',
    '**Advantage of double circulation:** blood returns to the heart after the lungs and is pumped again, so it reaches the body at **higher pressure** and oxygenated and deoxygenated blood are **kept separate**.',
  ], mc('Why is a double circulation better than a single circulation for a mammal?', [
    ['Blood can be pumped to the body at higher pressure after it has passed through the lungs', 'Correct.'],
    ['Blood passes through the heart once, so it travels more quickly around the body', 'A double circulation passes through the heart twice.'],
    ['Blood is pumped to the lungs and body together, so the pressure is the same in both', 'The two circuits are separate.'],
    ['Blood does not need valves, because it can only flow in one direction', 'Valves are still needed.'],
  ], 0)),
]),
  match('Match each animal to its type of circulation.', [
    ['Fish', 'Single circulation'],
    ['Mammal', 'Double circulation'],
    ['Heart', 'The pump'],
  ]),
);

export const b92 = withPractice(lesson('b9-heart', 'The heart', '9.2', [
  'The heart is a muscular pump with four chambers, valves and a septum. Arteries carry blood away from the heart and veins return it. Coronary heart disease is caused by blocked coronary arteries. Exercise raises heart rate.',
], [
  byte('Structure of the mammalian heart', [
    'The heart has a **muscular wall**, a **septum** separating the left and right sides, two **atria** (receive blood) and two **ventricles** (pump blood out), **one-way valves** (atrioventricular and semilunar) and **coronary arteries** supplying the heart muscle with blood.',
    'The **left ventricle has a thicker muscle wall** than the right because it pumps blood to the whole body at high pressure; the right ventricle pumps only to the nearby lungs. The **septum** keeps oxygenated and deoxygenated blood apart.',
  ], fig({ svg: 'heart' }, mc('Why is the wall of the left ventricle thicker than the wall of the right ventricle?', [
    ['It pumps blood at high pressure around the whole body, not just to the lungs', 'Correct.'],
    ['It receives blood from the lungs, so it needs thicker walls to hold it', 'The atria receive blood.'],
    ['It must stop the blood flowing backwards into the left atrium', 'Valves do this.'],
    ['It pumps deoxygenated blood, which is thicker and harder to move', 'The left ventricle pumps oxygenated blood.'],
  ], 0)), { fig: { svg: 'heart', caption: 'The mammalian heart' } }),
  byte('Heartbeat, exercise and coronary heart disease', [
    'Heart activity can be monitored by **ECG**, **pulse rate** and listening to the **valves closing**. **Physical activity raises heart rate** to supply more oxygen and glucose to muscles and remove carbon dioxide.',
    '**Coronary heart disease:** coronary arteries become **blocked** (fatty deposits), so the heart muscle is short of oxygen. **Risk factors:** poor diet, lack of exercise, stress, smoking, genetic predisposition, age and sex. A diet low in saturated fat and regular exercise reduce the risk.',
  ], mc('Why does heart rate rise during exercise?', [
    ['Muscles need more oxygen and glucose and must lose more carbon dioxide, so blood must flow faster', 'Correct.'],
    ['Muscles make less carbon dioxide, so the blood has to flow faster to keep them warm', 'Muscles make more carbon dioxide.'],
    ['The heart muscle needs to rest more often, so it beats faster but more weakly', 'Not the reason.'],
    ['The blood volume increases quickly, so the heart has to beat faster to move it', 'Blood volume does not change quickly.'],
  ], 0)),
]),
  multi('Which are risk factors for coronary heart disease? Select all that apply.', [
    ['Smoking', 'Damages arteries.', true],
    ['A diet high in saturated fat', 'Fatty deposits build up.', true],
    ['Lack of exercise', 'Raises the risk.', true],
    ['A diet high in fibre', 'Fibre lowers the risk.', false],
  ]),
  short('Explain the function of valves in the heart.', { command: 'Explain', points: ['Valves open to let blood flow forward', 'They close to stop blood flowing backwards, ensuring one-way flow'], model: 'Valves open to let blood flow in one direction and close to prevent it flowing backwards, ensuring one-way flow through the heart.' }),
);

export const b93 = withPractice(lesson('b9-vessels', 'Blood vessels', '9.3', [
  'Arteries carry blood away from the heart at high pressure and have thick, elastic walls and a narrow lumen. Veins return blood at low pressure and have thin walls, a wide lumen and valves. Capillaries have walls one cell thick for exchange.',
], [
  byte('Arteries, veins and capillaries', [
    '**Arteries:** carry blood **away from the heart** at **high pressure**; **thick, muscular, elastic walls** and a **narrow lumen**. **Veins:** carry blood **back to the heart** at **low pressure**; **thin walls**, **wide lumen** and **valves** to stop backflow. **Capillaries:** **walls one cell thick**, a very narrow lumen, link arteries to veins and allow **exchange** of substances with tissues.',
  ], match('Match each vessel to a correct feature.', [
    ['Artery', 'Thick elastic wall for high pressure'],
    ['Vein', 'Valves to stop backflow'],
    ['Capillary', 'Wall one cell thick for exchange'],
  ])),
  byte('Main blood vessels', [
    '**Heart:** vena cava (into the right atrium), aorta (out of the left ventricle), pulmonary artery (to the lungs) and pulmonary vein (from the lungs). **Kidney:** renal artery and renal vein. **Liver:** hepatic artery, hepatic vein and **hepatic portal vein** (brings blood from the gut).',
  ], mc('Which vessel carries oxygenated blood from the lungs to the heart?', [
    ['Pulmonary vein', 'Correct.'],
    ['Pulmonary artery', 'This carries deoxygenated blood to the lungs.'],
    ['Aorta', 'This carries blood from the heart to the body.'],
    ['Vena cava', 'This carries deoxygenated blood from the body to the heart.'],
  ], 0)),
]),
  short('Explain why capillary walls are only one cell thick.', { command: 'Explain', points: ['A short distance for diffusion', 'So oxygen, nutrients and waste can pass quickly between blood and body cells'], model: 'A wall one cell thick gives a very short diffusion distance, so oxygen, nutrients and waste substances can pass quickly between the blood and the cells.' }),
);

export const b94 = withPractice(lesson('b9-blood', 'Blood', '9.4', [
  'Blood has red cells (carry oxygen using haemoglobin), white cells (phagocytes and lymphocytes), platelets (clotting) and plasma (transports cells, ions, nutrients, urea, hormones and carbon dioxide). Clotting converts fibrinogen to fibrin.',
], [
  byte('Components of blood', [
    '**Red blood cells:** carry **oxygen** using **haemoglobin**; biconcave, no nucleus. **White blood cells:** **phagocytes** engulf pathogens (**phagocytosis**); **lymphocytes** make **antibodies**. **Platelets:** help the blood to **clot**. **Plasma:** liquid that carries blood cells, ions, nutrients, **urea**, hormones and **carbon dioxide**.',
  ], match('Match each blood component to its function.', [
    ['Red blood cells', 'Carry oxygen'],
    ['Phagocytes', 'Engulf pathogens'],
    ['Lymphocytes', 'Make antibodies'],
    ['Plasma', 'Carries ions, urea, hormones and carbon dioxide'],
  ])),
  byte('Blood clotting', [
    'When a vessel is damaged, **platelets** help to form a clot: soluble **fibrinogen** is converted to insoluble **fibrin**, which forms a **mesh** across the wound.',
    'Clotting **prevents blood loss** and stops **pathogens** from entering the body.',
  ], mc('What happens to fibrinogen during blood clotting?', [
    ['It is converted into insoluble fibrin, which forms a mesh', 'Correct.'],
    ['It is converted into haemoglobin, which carries oxygen to the wound', 'Not correct.'],
    ['It is engulfed by phagocytes, which seal the wound', 'Phagocytes engulf pathogens.'],
    ['It is converted into antibodies, which destroy bacteria', 'Lymphocytes make antibodies.'],
  ], 0)),
]),
  short('State two functions of blood clotting.', { kind: 'Definition', points: ['Prevents blood loss', 'Prevents the entry of pathogens'], model: 'Clotting prevents the loss of blood and stops pathogens entering the body.' }),
  short('Explain how red blood cells are adapted to carry oxygen.', { command: 'Explain', points: ['They contain haemoglobin, which binds oxygen', 'They have no nucleus, leaving more space for haemoglobin (and a biconcave shape gives a large surface area)'], model: 'Red blood cells contain haemoglobin, which binds oxygen. They have no nucleus, which leaves more room for haemoglobin, and their biconcave shape gives a large surface area.' }),
);

export const unit7 = { id: 'b7', number: 7, title: 'Human Nutrition', short: 'Nutrition', emoji: '🍎', color: 'rose', submodules: [b71, b72, b73, b74, b75], papers: [] };
export const unit8 = { id: 'b8', number: 8, title: 'Transport in Plants', short: 'Plant transport', emoji: '🌿', color: 'emerald', submodules: [b81, b82, b83, b84], papers: [] };
export const unit9 = { id: 'b9', number: 9, title: 'Transport in Animals', short: 'Circulation', emoji: '❤️', color: 'red', submodules: [b91, b92, b93, b94], papers: [] };
