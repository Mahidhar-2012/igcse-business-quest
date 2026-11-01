import { byte, lesson, mc, fig } from '../helpers.js';
import { multi, match, cloze, short } from '../../../data/builders.js';

// Units 19 to 21: organisms and their environment, human influences on ecosystems, biotechnology and genetic modification
// (Cambridge IGCSE Biology 0610, syllabus for 2026, 2027 and 2028, topics 19 to 21).

const withPractice = (l, ...qs) => { l.challenges = qs; return l; };

/* ---------- 19 Organisms and their environment ---------- */
export const b191 = withPractice(lesson('b19-energy', 'Energy flow and food chains', '19.1 and 19.2', [
  'The Sun is the main source of energy. Energy flows through food chains from producers to consumers, with much lost at each stage, so food chains are short. Pyramids show numbers, biomass or energy at each trophic level. Humans can affect food webs by overharvesting and introducing species.',
], [
  byte('Energy flow and food chains', [
    'The **Sun** is the principal source of energy for biological systems. A **food chain** shows the **transfer of energy** from one organism to the next, starting with a **producer** (makes its own food by photosynthesis). **Consumers** get energy by eating other organisms: **primary**, **secondary**, **tertiary** and **quaternary**. **Herbivores** eat plants; **carnivores** eat animals; **decomposers** feed on dead and waste material.',
  ], mc('In the food chain grass → rabbit → fox, which organism is the secondary consumer?', [
    ['The fox', 'Correct: it eats the primary consumer.'],
    ['The rabbit', 'The rabbit is the primary consumer.'],
    ['The grass', 'The grass is the producer.'],
    ['The decomposers', 'Decomposers are not part of the chain shown.'],
  ], 0)),
  byte('Food webs and human impact', [
    'A **food web** is a network of **interconnected food chains**. Humans can affect food webs by **overharvesting** a species (removing it faster than it can recover) and by **introducing foreign species**, which may eat or outcompete native species.',
  ], mc('Overfishing removes most of the large fish that eat small fish. What is the most likely effect on the small fish?', [
    ['Their numbers increase at first because there are fewer predators', 'Correct.'],
    ['Their numbers fall because they lose their source of food', 'Large fish are their predators, not their food.'],
    ['Their numbers stay the same because food webs are not affected by fishing', 'Food webs are affected.'],
    ['Their numbers fall because the water becomes colder', 'Not the effect.'],
  ], 0)),
  byte('Trophic levels and ecological pyramids', [
    'A **trophic level** is the **position of an organism in a food chain**: producers, primary consumers, secondary consumers and so on. **Pyramids of numbers** show how many organisms are at each level; **pyramids of biomass** show the mass of living material; **pyramids of energy** show energy available.',
    '**Pyramid of biomass** is better than numbers because the **size of organisms** does not distort it; **pyramid of energy** is better still as it is **never inverted**.',
  ], fig({ svg: 'energyPyramid' }, mc('A single large oak tree supports thousands of insects. Which pyramid is most likely to be inverted (wider at the top)?', [
    ['A pyramid of numbers', 'Correct: one producer supports many consumers.'],
    ['A pyramid of energy', 'This is never inverted.'],
    ['A pyramid of biomass for a pond in summer', 'Usually not inverted.'],
    ['None of them can be inverted', 'A pyramid of numbers can.'],
  ], 0)), { fig: { svg: 'energyPyramid', caption: 'A pyramid of energy' } }),
  byte('Energy efficiency of food chains', [
    'Energy transfer between trophic levels is **inefficient** (often about 10%): energy is **lost as heat in respiration**, in **waste (faeces and urine)**, and some parts are **not eaten**. So food chains rarely have **more than four or five trophic levels**.',
    'It is **more energy efficient for humans to eat crop plants** than animals fed on the crops, because **less energy is lost** when there are fewer trophic levels.',
  ], mc('Why are there rarely more than five trophic levels in a food chain?', [
    ['So much energy is lost at each level that too little remains to support more levels', 'Correct.'],
    ['Large carnivores cannot find enough water to survive at the highest levels', 'Not the reason.'],
    ['Decomposers break down all the organisms before a fifth level can form', 'Not the reason.'],
    ['Energy is created at each level so that the chain becomes too crowded', 'Energy is not created.'],
  ], 0)),
]),
  short('Define “trophic level”.', { kind: 'Definition', points: ['The position of an organism', 'in a food chain, food web or ecological pyramid'], model: 'A trophic level is the position of an organism in a food chain, food web or ecological pyramid.' }),
  short('Explain why energy is lost between trophic levels.', { command: 'Explain', points: ['Energy is lost as heat from respiration', 'Energy is lost in waste, and some parts of the organism are not eaten'], model: 'Energy is transferred as heat by respiration and lost in waste such as faeces and urine, and some parts of organisms are not eaten, so only a small proportion passes to the next level.' }),
  match('Match each term to its meaning.', [
    ['Producer', 'Makes its own organic nutrients by photosynthesis'],
    ['Herbivore', 'An animal that eats plants'],
    ['Carnivore', 'An animal that eats other animals'],
    ['Decomposer', 'Gets energy from dead or waste material'],
  ]),
);

export const b193 = withPractice(lesson('b19-cycles', 'Nutrient cycles', '19.3', [
  'The carbon cycle includes photosynthesis, respiration, feeding, decomposition, fossil fuel formation and combustion. In the nitrogen cycle, bacteria decompose proteins, convert ammonium to nitrate, fix nitrogen and return it to the air.',
], [
  byte('The carbon cycle', [
    '**Photosynthesis** removes carbon dioxide from the air. **Respiration** (plants, animals, decomposers) and **combustion** put it back. **Feeding** passes carbon compounds along food chains; **decomposition** returns carbon to the air; **fossil fuels** form from dead organisms over millions of years and release carbon dioxide when burned.',
  ], mc('Which process takes carbon dioxide out of the atmosphere?', [
    ['Photosynthesis', 'Correct.'],
    ['Respiration', 'Respiration releases carbon dioxide.'],
    ['Combustion', 'Combustion releases carbon dioxide.'],
    ['Decomposition', 'Decomposition releases carbon dioxide by respiration.'],
  ], 0)),
  byte('The nitrogen cycle', [
    '**Decomposition** of plant and animal protein by decomposers makes **ammonium ions**. **Nitrification** (bacteria) changes ammonium into **nitrate**. **Nitrogen fixation** (lightning and bacteria) changes nitrogen gas into compounds. Plants **absorb nitrate** to make **amino acids and proteins**; animals eat them; **deamination** makes urea. **Denitrification** (bacteria) returns nitrogen gas to the air.',
  ], match('Match each process in the nitrogen cycle to what happens.', [
    ['Nitrogen fixation', 'Nitrogen gas converted into nitrogen compounds'],
    ['Nitrification', 'Ammonium ions converted into nitrate ions'],
    ['Denitrification', 'Nitrate converted back into nitrogen gas'],
    ['Decomposition', 'Proteins in dead matter broken down into ammonium'],
  ])),
]),
  short('State the role of decomposers in nutrient cycles.', { kind: 'Definition', points: ['They break down dead organisms and waste', 'releasing nutrients (carbon dioxide or ammonium) for reuse'], model: 'Decomposers break down dead organisms and waste, releasing carbon dioxide and ammonium ions so the nutrients can be reused.' }),
  mc('Why do farmers rotate crops that include peas or beans?', [
    ['Their root bacteria fix nitrogen, which makes the soil more fertile for the next crop', 'Correct.'],
    ['Their roots release carbon dioxide, which acts as a fertiliser for other crops', 'Not the reason.'],
    ['Their leaves absorb nitrate from the air so that the soil does not need any', 'Plants absorb nitrate from the soil.'],
    ['Their roots kill the decomposers that would otherwise use up the nitrate', 'Decomposers help soil fertility.'],
  ], 0),
);

export const b194 = withPractice(lesson('b19-populations', 'Populations and ecosystems', '19.4', [
  'A population is one species in one area. A community is all the populations in an ecosystem. Population growth is limited by food, competition, predation and disease, giving a sigmoid curve with lag, exponential, stationary and death phases.',
], [
  byte('Populations, communities and ecosystems', [
    'A **population** is a group of **one species**, living in the **same area** at the **same time**. A **community** is **all the populations** of different species in an ecosystem. An **ecosystem** is a unit made up of the **community** and its **environment**, interacting.',
    'The rate of population growth is affected by **food supply, competition, predation and disease**.',
  ], match('Match each term to its meaning.', [
    ['Population', 'One species in one area at one time'],
    ['Community', 'All the populations in an ecosystem'],
    ['Ecosystem', 'The community and its environment, interacting'],
  ])),
  byte('Population growth curve', [
    'A population in an environment with **limited resources** follows a **sigmoid curve**: **lag phase** (slow, few reproducing), **exponential (log) phase** (rapid growth, plenty of food, little competition), **stationary phase** (births equal deaths; limited by food, space, disease, predation) and **death phase** (resources run out).',
  ], fig({ svg: 'populationCurve' }, mc('In which phase is the population growing fastest?', [
    ['The exponential (log) phase', 'Correct: resources are plentiful.'],
    ['The lag phase', 'Growth is slow while a few individuals build up.'],
    ['The stationary phase', 'Births equal deaths.'],
    ['The death phase', 'Deaths exceed births.'],
  ], 0)), { fig: { svg: 'populationCurve', caption: 'A population growth curve' } }),
]),
  short('Explain why the population stops growing in the stationary phase.', { command: 'Explain', points: ['Limiting factors (food, space, disease or predation) increase', 'So the birth rate equals the death rate'], model: 'Limiting factors such as food shortage, competition, predation and disease have increased, so the number of births equals the number of deaths and the population stays level.' }),
  mc('A few rabbits are released onto an island with plenty of food and no predators. What happens first?', [
    ['Slow growth in the lag phase, followed by rapid exponential growth', 'Correct.'],
    ['Immediate rapid growth with no lag phase at all', 'A few animals reproduce slowly at first.'],
    ['A fall in numbers as competition for food increases', 'Competition comes later.'],
    ['No change, because the number of rabbits is too small to measure', 'The population grows.'],
  ], 0),
);

/* ---------- 20 Human influences on ecosystems ---------- */
export const b201 = withPractice(lesson('b20-food', 'Food supply', '20.1', [
  'Humans have increased food production with machinery, fertilisers, insecticides, herbicides and selective breeding. Monocultures and intensive livestock farming have advantages and disadvantages.',
], [
  byte('Increasing food production', [
    '**Machinery:** farm larger areas faster and more efficiently. **Chemical fertilisers:** supply nitrate, phosphate and potassium for better yields. **Insecticides:** kill pests, improving quality and yield. **Herbicides:** kill weeds that compete for light, water and nutrients. **Selective breeding:** crops and livestock with higher yield and disease resistance.',
  ], match('Match each method to how it increases food production.', [
    ['Fertilisers', 'Supply mineral ions to improve yield'],
    ['Herbicides', 'Reduce competition from weeds'],
    ['Insecticides', 'Kill pests that damage crops'],
    ['Selective breeding', 'Produces high-yielding varieties'],
  ])),
  byte('Monocultures and intensive livestock farming', [
    '**Monoculture** (one crop over a large area): **advantages** — efficient planting and harvesting, high yield. **Disadvantages** — pests and diseases spread easily, fertiliser needed, **reduced biodiversity**, soil depletion.',
    '**Intensive livestock production:** **advantages** — large amounts of cheap food, controlled conditions. **Disadvantages** — animal welfare concerns, spread of disease, pollution from waste, use of antibiotics.',
  ], mc('Why can a disease spread very quickly through a large field of a single crop variety?', [
    ['All the plants are genetically identical and equally susceptible', 'Correct.'],
    ['The plants are too crowded to take in any water from the soil', 'Not the reason.'],
    ['The herbicides used in the field help the pathogens to grow', 'Not the reason.'],
    ['The plants produce too little chlorophyll to resist the pathogens', 'Not the reason.'],
  ], 0)),
]),
  short('Explain one disadvantage of using chemical fertilisers.', { command: 'Explain', points: ['Excess fertiliser is washed into rivers and lakes', 'Causing eutrophication and damage to aquatic life'], model: 'Excess fertiliser can be washed into rivers and lakes by rain, causing eutrophication that damages aquatic life.' }),
);

export const b202 = withPractice(lesson('b20-habitats', 'Habitat destruction', '20.2', [
  'Biodiversity is the number of different species in an area. Habitats are destroyed for housing, farming and resource extraction, and by pollution. Deforestation reduces biodiversity and causes extinction, soil loss, flooding and a rise in carbon dioxide.',
], [
  byte('Biodiversity and the reasons for habitat destruction', [
    '**Biodiversity** is the **number of different species** that live in an area. Habitats are destroyed to make room for **housing**, **crop and livestock production**, to **extract natural resources**, and by **freshwater and marine pollution**.',
  ], mc('Which is the best definition of biodiversity?', [
    ['The number of different species that live in an area', 'Correct.'],
    ['The total number of individual organisms in an area', 'This is population size.'],
    ['The mass of living material in an area', 'This is biomass.'],
    ['The number of different habitats in a country', 'Habitat number is not biodiversity.'],
  ], 0)),
  byte('Effects of deforestation', [
    'Undesirable effects of **deforestation:** **reduced biodiversity** and **extinction** (habitat lost); **loss of soil** (no roots to hold it, so it is washed away); **flooding** (less water taken up and held); more **carbon dioxide** in the air (fewer trees to photosynthesise and burning releases it).',
  ], mc('Why does deforestation increase the risk of flooding?', [
    ['Fewer trees take up water, and the soil is washed into rivers', 'Correct.'],
    ['Trees release large amounts of water vapour that falls as rain on the river', 'Trees reduce runoff.'],
    ['Soil is blown away by the wind so rivers cannot hold the water', 'Water erodes soil.'],
    ['More carbon dioxide in the air makes rain fall more heavily', 'Not the explanation.'],
  ], 0)),
]),
  short('Describe two undesirable effects of deforestation.', { kind: 'Exam question', command: 'Describe', points: ['Reduced biodiversity and possible extinction of species', 'Soil loss, flooding or more carbon dioxide in the atmosphere'], model: 'Deforestation reduces biodiversity and can cause extinction, and it leads to loss of soil, flooding and a rise in atmospheric carbon dioxide.' }),
);

export const b203 = withPractice(lesson('b20-pollution', 'Pollution', '20.3', [
  'Untreated sewage and excess fertiliser cause eutrophication. Non-biodegradable plastics harm aquatic and land ecosystems. Methane and carbon dioxide cause the enhanced greenhouse effect and climate change.',
], [
  byte('Water pollution and eutrophication', [
    '**Untreated sewage** adds microbes and nutrients; **excess fertiliser** adds **nitrate and other ions**.',
    '**Eutrophication:** (1) more nitrate means **faster growth of producers (algae)**; (2) the algae die and are **decomposed**; (3) **decomposers respire aerobically** and increase in number; (4) **dissolved oxygen falls**; (5) **fish and other organisms that need oxygen die**.',
  ], mc('Why do fish die in a pond after fertiliser runs off a nearby field?', [
    ['Decomposers use up the dissolved oxygen as they break down the dead algae', 'Correct.'],
    ['The fertiliser is poisonous to fish so they die as soon as they take it in', 'The main cause is oxygen shortage.'],
    ['Algae use up all the carbon dioxide so the fish cannot respire', 'Fish need oxygen, not carbon dioxide.'],
    ['The fish cannot find any food because the algae have blocked the light', 'Not the main reason.'],
  ], 0)),
  byte('Plastics and air pollution', [
    '**Non-biodegradable plastics** do not break down: they harm **aquatic animals** (entanglement, swallowing) and clog soil and landfill on **land**.',
    '**Methane** (from cattle, rice fields, waste) and **carbon dioxide** (from burning fuels) are **greenhouse gases**: they trap thermal energy, causing the **enhanced greenhouse effect** and **climate change**.',
  ], mc('Which pair of gases contribute most to the enhanced greenhouse effect?', [
    ['Carbon dioxide and methane', 'Correct.'],
    ['Oxygen and nitrogen', 'Not greenhouse gases.'],
    ['Nitrogen and argon', 'Not greenhouse gases.'],
    ['Oxygen and carbon dioxide', 'Oxygen is not a greenhouse gas.'],
  ], 0)),
]),
  short('Explain the process of eutrophication.', { command: 'Explain', points: ['Extra nitrate causes rapid growth of algae (producers)', 'Their death leads to increased decomposition and aerobic respiration by decomposers', 'Dissolved oxygen falls, so organisms that need it die'], model: 'Extra nitrate makes algae grow rapidly. When they die, decomposers multiply and use up dissolved oxygen in aerobic respiration, so fish and other organisms die.' }),
);

export const b204 = withPractice(lesson('b20-conservation', 'Conservation', '20.4', [
  'A sustainable resource is produced as fast as it is removed. Forests and fish stocks can be managed sustainably. Organisms become endangered through habitat loss, hunting, pollution and climate change. Conservation uses protection, education, captive breeding and seed banks.',
], [
  byte('Sustainable resources', [
    'A **sustainable resource** is **produced as rapidly as it is removed** so that it does not run out. **Forests** can be conserved by **education, protected areas, quotas and replanting**; **fish stocks** by **closed seasons, protected areas, controlled net types and mesh size, quotas and monitoring**.',
  ], mc('Why does a larger mesh size in fishing nets help to conserve fish stocks?', [
    ['Small, young fish escape and can grow and breed', 'Correct.'],
    ['More fish are caught, so the population is monitored more easily', 'This would overfish.'],
    ['The nets are cheaper, so more boats can fish at the same time', 'Not conservation.'],
    ['Larger fish cannot escape, so the population becomes younger', 'Larger mesh lets small fish escape.'],
  ], 0)),
  byte('Endangered species and conservation', [
    '**Why species become endangered or extinct:** **climate change, habitat destruction, hunting, overharvesting, pollution and introduced species**.',
    '**Conservation methods:** **monitoring and protecting** species and habitats, **education**, **captive breeding programmes** (with **artificial insemination and IVF**) and **seed banks**. **Reasons:** maintain **biodiversity**, reduce extinction, protect vulnerable ecosystems and keep ecosystem functions (nutrient cycling, food, drugs, fuel, genes).',
    'A **small population** has **low genetic variation**, so it is less able to survive disease or change.',
  ], mc('Why is a species with a very small population at greater risk of extinction?', [
    ['Low genetic variation means fewer individuals may survive a new disease or change', 'Correct.'],
    ['Small populations always have a higher birth rate than large populations', 'Not true.'],
    ['Individuals in small populations cannot respire aerobically', 'Not related.'],
    ['Small populations are more likely to be eaten by decomposers', 'Not related.'],
  ], 0)),
]),
  short('Define a “sustainable resource”.', { kind: 'Definition', points: ['A resource that is produced as rapidly as it is removed', 'so it does not run out'], model: 'A sustainable resource is one that is produced as rapidly as it is removed from the environment, so it does not run out.' }),
  multi('Which of these are methods of conserving an endangered species? Select all that apply.', [
    ['Captive breeding programmes', 'Increase numbers.', true],
    ['Seed banks', 'Store seeds for the future.', true],
    ['Protecting its habitat', 'Keeps the species’ environment.', true],
    ['Hunting it for trophies', 'Reduces numbers.', false],
  ]),
);

/* ---------- 21 Biotechnology and genetic modification ---------- */
export const b211 = withPractice(lesson('b21-biotechnology', 'Biotechnology', '21.1 and 21.2', [
  'Bacteria are useful because they reproduce quickly, make complex molecules, have few ethical concerns and contain plasmids. Yeast, pectinase, lactase and fermenters are used in industry.',
], [
  byte('Why bacteria are useful', [
    'Bacteria are useful in biotechnology and genetic modification because they **reproduce rapidly**, can **make complex molecules** (such as human proteins), cause **few ethical concerns** when manipulated, and contain **plasmids** that can carry new genes.',
  ], mc('Why are bacteria useful for making human insulin?', [
    ['They reproduce rapidly and can be given a human gene on a plasmid', 'Correct.'],
    ['They are the same species as humans and so share the same DNA', 'Bacteria are very different from humans.'],
    ['They cannot reproduce, so the insulin stays pure', 'They reproduce rapidly.'],
    ['They are large cells that can store a lot of insulin', 'Bacteria are tiny.'],
  ], 0)),
  byte('Yeast, enzymes and fermenters', [
    '**Yeast** respires **anaerobically** to make **ethanol** for **biofuels** and **carbon dioxide** that makes **bread rise**. **Pectinase** breaks down plant cell walls, so more **fruit juice** is released and the juice is clearer. **Lactase** converts **lactose into glucose and galactose** to make **lactose-free milk**. **Biological washing powders** contain enzymes (proteases, lipases) that work at low temperatures.',
    '**Fermenters** make **insulin, penicillin and mycoprotein** on a large scale; conditions controlled: **temperature, pH, oxygen, nutrient supply and waste**.',
  ], match('Match each biotechnology product to the organism or enzyme used.', [
    ['Bread rising', 'Yeast respiring anaerobically'],
    ['Clear fruit juice', 'Pectinase'],
    ['Lactose-free milk', 'Lactase'],
    ['Penicillin', 'Fungus grown in a fermenter'],
  ])),
  byte('Conditions in a fermenter', [
    'Temperature must be at the **optimum for the enzymes** of the microorganism; **pH** must be kept constant; **oxygen** is supplied for aerobic respiration; **nutrients** are supplied; **waste products** are removed because they can poison the culture.',
  ], mc('Why is the temperature of a fermenter carefully controlled?', [
    ['So that enzymes in the microorganisms work at their optimum rate without being denatured', 'Correct.'],
    ['So that the microorganisms are killed before the product is collected', 'This would end production.'],
    ['So that the nutrient supply never needs to be topped up', 'Not the reason.'],
    ['So that oxygen dissolves less easily in the culture', 'Not the reason.'],
  ], 0)),
]),
  short('Explain why yeast is used in bread-making.', { command: 'Explain', points: ['Yeast respires anaerobically to make carbon dioxide', 'The gas forms bubbles that make the dough rise'], model: 'Yeast respires anaerobically and produces carbon dioxide, which forms bubbles in the dough and makes it rise.' }),
  short('State the role of lactase in the production of lactose-free milk.', { kind: 'Definition', points: ['Lactase breaks down lactose', 'into glucose and galactose'], model: 'Lactase breaks down lactose into glucose and galactose.' }),
);

export const b213 = withPractice(lesson('b21-gm', 'Genetic modification', '21.3', [
  'Genetic modification changes an organism’s genetic material by removing, changing or inserting genes. Human genes are inserted into bacteria using restriction enzymes and ligase. Crops can be modified for resistance or improved nutrition.',
], [
  byte('What genetic modification is', [
    '**Genetic modification** is **changing the genetic material of an organism by removing, changing or inserting individual genes.**',
    '**Examples:** inserting **human genes into bacteria** to make human proteins (insulin); inserting genes into **crop plants** to give **resistance to herbicides**, **resistance to insect pests** or **improved nutritional quality** (for example golden rice).',
  ], mc('Which is an example of genetic modification?', [
    ['Inserting a human insulin gene into a bacterium', 'Correct.'],
    ['Crossing two tall plants to produce taller plants', 'This is selective breeding.'],
    ['Treating a crop with herbicide to kill weeds', 'This is not a change to the genes.'],
    ['Growing bacteria in a fermenter at a controlled temperature', 'This is biotechnology, not gene transfer.'],
  ], 0)),
  byte('Making human insulin in bacteria', [
    '(1) The **human insulin gene** is cut out of human DNA using **restriction enzymes**, leaving **sticky ends**. (2) The **bacterial plasmid** is cut with the **same enzyme**, giving **complementary sticky ends**. (3) The gene is joined into the plasmid by **DNA ligase**, forming a **recombinant plasmid**. (4) The plasmid is put into bacteria. (5) The bacteria **multiply**. (6) They **express** the gene and make **human insulin**.',
  ], mc('What is the role of DNA ligase in genetic modification?', [
    ['It joins the human gene into the cut plasmid to make a recombinant plasmid', 'Correct.'],
    ['It cuts the human gene out of the chromosome to leave sticky ends', 'Restriction enzymes cut DNA.'],
    ['It copies the gene so that the bacteria can make mRNA', 'Not its role.'],
    ['It carries the new gene into the bacterial cell', 'The plasmid is the vector.'],
  ], 0)),
  byte('Genetically modified crops', [
    '**Advantages:** higher yield, **less pesticide** needed, **improved nutrition** (vitamin-rich rice), crops that grow in poor conditions. **Disadvantages:** possible harm to **other species** or biodiversity, genes **spreading to wild plants**, higher **seed cost**, and concerns about **safety and ethics**.',
  ], mc('Which is a possible disadvantage of growing genetically modified crops such as soya or maize?', [
    ['The modified genes might spread to wild plants and harm biodiversity', 'Correct.'],
    ['The crop will always produce a lower yield than unmodified varieties', 'The aim is usually a higher yield.'],
    ['The crop can no longer carry out photosynthesis', 'Not an effect.'],
    ['The crop will need more pesticide than a normal crop', 'Insect-resistant crops often need less.'],
  ], 0)),
]),
  short('Describe how a gene for a human protein can be inserted into bacteria.', { kind: 'Exam question', command: 'Describe', points: ['Cut out the gene with restriction enzymes', 'Cut the plasmid with the same enzyme', 'Join the gene into the plasmid with ligase and put the recombinant plasmid into bacteria'], model: 'The human gene is cut out using restriction enzymes. The bacterial plasmid is cut with the same enzyme and the gene is joined in with DNA ligase. The recombinant plasmids are put into bacteria, which multiply and make the protein.' }),
  short('Define “genetic modification”.', { kind: 'Definition', points: ['Changing the genetic material of an organism', 'by removing, changing or inserting individual genes'], model: 'Genetic modification is changing the genetic material of an organism by removing, changing or inserting individual genes.' }),
);

export const unit19 = { id: 'b19', number: 19, title: 'Organisms and their Environment', short: 'Ecology', emoji: '🌍', color: 'emerald', submodules: [b191, b193, b194], papers: [] };
export const unit20 = { id: 'b20', number: 20, title: 'Human Influences on Ecosystems', short: 'Humans', emoji: '🏭', color: 'amber', submodules: [b201, b202, b203, b204], papers: [] };
export const unit21 = { id: 'b21', number: 21, title: 'Biotechnology and Genetic Modification', short: 'Biotech', emoji: '🧪', color: 'indigo', submodules: [b211, b213], papers: [] };
