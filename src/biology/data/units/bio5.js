import { byte, lesson, mc, fig } from '../helpers.js';
import { multi, match, cloze, short } from '../../../data/builders.js';

// Units 16 to 18: reproduction, inheritance, variation and selection
// (Cambridge IGCSE Biology 0610, syllabus for 2026, 2027 and 2028, topics 16 to 18).

const withPractice = (l, ...qs) => { l.challenges = qs; return l; };

/* ---------- 16 Reproduction ---------- */
export const b161 = withPractice(lesson('b16-asexual', 'Asexual and sexual reproduction', '16.1 and 16.2', [
  'Asexual reproduction makes genetically identical offspring from one parent. Sexual reproduction fuses the nuclei of two gametes to make a zygote and gives genetically different offspring. Gametes are haploid and the zygote is diploid.',
], [
  byte('Asexual reproduction', [
    '**Asexual reproduction** produces **genetically identical offspring from one parent**. Examples: bacteria dividing, **runners** of strawberry plants, **bulbs** and **tubers**, yeast budding.',
    '**Advantages** (to wild populations and crops): only one parent is needed, it is fast, and good features are kept. **Disadvantages:** no variation, so a whole population can be wiped out by one disease or a change in conditions.',
  ], mc('A farmer grows potatoes from tubers instead of seeds. What is the main advantage and disadvantage?', [
    ['All the plants have the same good features, but all are equally likely to be killed by one disease', 'Correct.'],
    ['All the plants differ from each other, but they grow more slowly than plants from seed', 'Tubers give identical plants.'],
    ['Two parents are needed, but the plants are all equally resistant to disease', 'Only one parent is needed.'],
    ['The plants vary a lot, so some will resist any disease, but the crop is unpredictable', 'Asexual reproduction does not cause variation.'],
  ], 0)),
  byte('Sexual reproduction', [
    '**Sexual reproduction** is the **fusion of the nuclei of two gametes** (fertilisation) to form a **zygote**, giving offspring that are **genetically different** from each other and from the parents.',
    '**Gamete nuclei are haploid** (one set of chromosomes); the **zygote nucleus is diploid** (two sets).',
    '**Advantages:** variation, so some offspring may survive a change in the environment; useful features can be combined in crops. **Disadvantages:** needs two parents (or pollination), is slower, and good features may be lost.',
  ], match('Match each term to its meaning.', [
    ['Haploid nucleus', 'A single set of chromosomes'],
    ['Diploid nucleus', 'Two sets of chromosomes'],
    ['Fertilisation', 'Fusion of the nuclei of two gametes'],
    ['Zygote', 'The cell formed when gametes fuse'],
  ])),
]),
  short('Define “asexual reproduction”.', { kind: 'Definition', points: ['A process in which one parent produces offspring', 'that are genetically identical to the parent and to each other'], model: 'Asexual reproduction is a process resulting in the production of genetically identical offspring from one parent.' }),
  short('Explain one advantage of sexual reproduction to a wild population.', { command: 'Explain', points: ['It produces variation among offspring', 'So some may be better adapted and survive if the environment changes'], model: 'Sexual reproduction produces genetically different offspring, so if the environment changes some individuals are likely to be better adapted and survive.' }),
);

export const b163 = withPractice(lesson('b16-plants', 'Sexual reproduction in plants', '16.3', [
  'Flowers have sepals, petals, stamens (anthers and filaments) and carpels (stigma, style, ovary and ovules). Pollination is the transfer of pollen from anther to stigma. Fertilisation happens when a pollen nucleus fuses with an ovule nucleus. Seeds need water, oxygen and a suitable temperature to germinate.',
], [
  byte('Parts of a flower and their functions', [
    '**Sepals:** protect the bud. **Petals:** attract insects (bright, scented). **Stamen:** **anther** makes pollen, **filament** holds the anther. **Carpel:** **stigma** catches pollen, **style** joins stigma to ovary, **ovary** contains **ovules** (which become seeds).',
  ], fig({ svg: 'flower' }, mc('Which part of the flower makes pollen grains?', [
    ['The anther', 'Correct.'],
    ['The stigma', 'The stigma receives pollen.'],
    ['The ovary', 'The ovary contains ovules.'],
    ['The filament', 'The filament supports the anther.'],
  ], 0)), { fig: { svg: 'flower', caption: 'An insect-pollinated flower' } }),
  byte('Pollination and fertilisation', [
    '**Pollination** is the transfer of **pollen grains from an anther to a stigma**. **Self-pollination:** to the stigma of the same flower or plant. **Cross-pollination:** to a flower on a **different plant** of the same species.',
    '**Fertilisation:** a **pollen tube grows down the style** into the ovule, and the **pollen nucleus fuses with the ovule nucleus**. Cross-pollination gives more variation; self-pollination does not need a pollinator.',
  ], mc('Why does cross-pollination help a population to survive a change in the environment?', [
    ['It produces more genetic variation, so some offspring may be better adapted', 'Correct.'],
    ['It produces genetically identical offspring that are all equally well adapted', 'Self-pollination gives less variation.'],
    ['It removes the need for any pollinators such as insects or wind', 'Cross-pollination needs a pollinator.'],
    ['It makes the plants fertilise themselves more quickly than usual', 'It involves two plants.'],
  ], 0)),
  byte('Insect-pollinated and wind-pollinated flowers', [
    '**Insect-pollinated:** large, brightly coloured petals; scent and **nectar**; **sticky or spiky pollen**; stigma inside the flower. **Wind-pollinated:** small, dull petals; no scent or nectar; **large feathery stigmas** hanging outside; **anthers hang outside** on long filaments; **light, smooth pollen** in large amounts.',
  ], mc('A flower has small green petals, long dangling anthers and a feathery stigma. How is it pollinated?', [
    ['By wind', 'Correct.'],
    ['By insects', 'Insect-pollinated flowers are bright and scented.'],
    ['By self-pollination only', 'Wind pollination is the matching clue.'],
    ['By water', 'Not in the syllabus and not suggested.'],
  ], 0)),
  byte('Germination', [
    'Seeds need **water**, **oxygen** (for respiration) and a **suitable temperature** (warm enough for enzymes to work) to germinate. Light is not needed by most seeds.',
  ], mc('A seed does not germinate when kept at 2 °C with plenty of water and air. What is the best explanation?', [
    ['It is too cold for the enzymes needed for growth to work effectively', 'Correct.'],
    ['It has no water, because the cold has frozen all of the water in it', 'Water was available.'],
    ['It has no oxygen, because the cold has stopped oxygen dissolving', 'Air was available.'],
    ['It has no light, because seeds need light to germinate', 'Most seeds do not need light.'],
  ], 0)),
]),
  short('State the function of the stigma.', { kind: 'Definition', points: ['To receive (catch) pollen grains'], model: 'The stigma receives pollen grains.' }),
  short('Explain why wind-pollinated flowers produce large amounts of pollen.', { command: 'Explain', points: ['Wind carries pollen randomly', 'Most pollen is lost, so many grains are needed for some to reach a stigma'], model: 'Wind carries pollen at random, so most is wasted. A large amount is needed so that some grains reach a stigma.' }),
  multi('Which are features of an insect-pollinated flower? Select all that apply.', [
    ['Brightly coloured petals', 'Attract insects.', true],
    ['Nectar', 'A reward for insects.', true],
    ['Sticky pollen grains', 'Stick to insects.', true],
    ['Feathery stigma hanging outside the flower', 'Typical of wind-pollinated flowers.', false],
  ]),
);

export const b164 = withPractice(lesson('b16-humans', 'Human reproduction', '16.4', [
  'Sperm are made in the testes and eggs in the ovaries. Fertilisation happens in the oviduct. The embryo implants in the uterus. The placenta and umbilical cord exchange substances between mother and fetus.',
], [
  byte('The reproductive systems', [
    '**Male:** **testes** (make sperm and testosterone) in the **scrotum**; **sperm ducts**; **prostate gland** (adds fluid); **urethra**; **penis**.',
    '**Female:** **ovaries** (make eggs and oestrogen); **oviducts** (where fertilisation occurs); **uterus** (where the fetus develops); **cervix** (ring of muscle); **vagina**.',
  ], match('Match each part to its function.', [
    ['Testes', 'Make sperm'],
    ['Ovaries', 'Make eggs'],
    ['Oviduct', 'Site of fertilisation'],
    ['Uterus', 'Where the fetus develops'],
  ])),
  byte('Gametes: adaptations and comparison', [
    '**Sperm:** small and **motile** (flagellum), **mitochondria** to release energy for swimming, **enzymes in the acrosome** to digest the egg’s jelly coat; made in huge numbers.',
    '**Egg cell:** much **larger**, not motile, **energy stores** in the cytoplasm, **jelly coat** that changes after fertilisation to stop other sperm entering; usually one released per month.',
  ], mc('Why does a sperm cell contain many mitochondria?', [
    ['They release energy by respiration for the swimming movement of the tail', 'Correct.'],
    ['They make the enzymes in the acrosome that digest the jelly coat', 'The acrosome contains enzymes made elsewhere.'],
    ['They store food for the embryo after fertilisation', 'The egg stores food.'],
    ['They carry the father’s genes into the egg cell', 'The nucleus carries the genes.'],
  ], 0)),
  byte('Development of the fetus', [
    'After fertilisation, the **zygote** divides to form an **embryo**, a ball of cells that **implants** in the **uterus lining**. The **amniotic sac** contains **amniotic fluid** that **protects** the fetus. The **placenta** and **umbilical cord** connect fetus and mother.',
    'The placenta lets **dissolved nutrients and oxygen** pass to the fetal blood and **carbon dioxide and urea** pass to the mother’s blood, **without the two bloods mixing**. Some **pathogens and toxins** can cross the placenta.',
  ], mc('Why should a pregnant woman avoid smoking and drinking alcohol?', [
    ['Harmful substances can cross the placenta and affect the fetus', 'Correct.'],
    ['These substances stop the umbilical cord from carrying carbon dioxide away', 'Not the main reason.'],
    ['These substances prevent the zygote from dividing to form an embryo', 'Not the main reason.'],
    ['These substances make the amniotic fluid too thick for the fetus to move', 'Not the reason.'],
  ], 0)),
]),
  short('Explain how the placenta is adapted for exchange between mother and fetus.', { command: 'Explain', points: ['A large surface area (many villi) with a thin barrier', 'A rich blood supply keeps concentration gradients steep for oxygen, nutrients and waste'], model: 'The placenta has a large surface area with a thin barrier and a rich blood supply, so oxygen and nutrients diffuse to the fetus and carbon dioxide and urea diffuse to the mother quickly.' }),
);

export const b165 = withPractice(lesson('b16-hormones', 'Sex hormones and STIs', '16.5 and 16.6', [
  'Testosterone and oestrogen control puberty. The menstrual cycle involves FSH, LH, oestrogen and progesterone. STIs are passed on by sexual contact; HIV can lead to AIDS.',
], [
  byte('Sex hormones and puberty', [
    '**Testosterone** (testes) and **oestrogen** (ovaries) control **secondary sexual characteristics** at puberty: for example testosterone causes a deeper voice and facial hair; oestrogen causes breast development and widening of the hips.',
  ], match('Match each hormone to its source.', [
    ['Testosterone', 'Testes'],
    ['Oestrogen', 'Ovaries'],
    ['Progesterone', 'Ovaries (and placenta in pregnancy)'],
  ])),
  byte('The menstrual cycle', [
    'The cycle lasts about **28 days**. A **menstrual period** (bleeding, uterus lining lost) is followed by the lining **rebuilding**; an **egg is released (ovulation) at about day 14**; if the egg is not fertilised the lining breaks down.',
    '**FSH** (from the pituitary) causes eggs to mature and the ovary to make oestrogen. **Oestrogen** causes the lining to repair and thicken. **LH** causes **ovulation**. **Progesterone** maintains the lining; during pregnancy it keeps the lining in place.',
  ], mc('Which hormone causes ovulation, the release of an egg from an ovary?', [
    ['LH (luteinising hormone)', 'Correct.'],
    ['FSH (follicle-stimulating hormone)', 'FSH makes eggs mature.'],
    ['Progesterone', 'Progesterone maintains the uterus lining.'],
    ['Testosterone', 'Testosterone is a male hormone.'],
  ], 0)),
  byte('Sexually transmitted infections', [
    'An **STI** is an infection transmitted by **sexual contact**. **HIV** is a **virus** that causes an STI and can lead to **AIDS**, in which the immune system is badly damaged.',
    '**HIV is transmitted** by sexual contact, sharing needles, blood transfusions and from mother to baby. Spread is controlled by **using condoms**, **testing and treatment**, not sharing needles and screening blood.',
  ], mc('Which action best reduces the spread of HIV?', [
    ['Using a condom during sexual intercourse', 'Correct.'],
    ['Taking antibiotics before sexual intercourse', 'Antibiotics do not affect viruses.'],
    ['Washing the hands after touching an infected person', 'HIV is not spread by casual touching.'],
    ['Drinking only boiled water in areas where HIV is common', 'HIV is not carried in drinking water.'],
  ], 0)),
]),
  short('State what HIV stands for and what disease it can lead to.', { kind: 'Definition', points: ['Human immunodeficiency virus', 'It can lead to AIDS'], model: 'HIV is the human immunodeficiency virus, which can lead to AIDS.' }),
  short('Describe the role of progesterone in pregnancy.', { kind: 'Exam question', command: 'Describe', points: ['It maintains the lining of the uterus', 'This prevents the lining from breaking down so the fetus can develop'], model: 'Progesterone maintains the lining of the uterus during pregnancy so that it is not lost and the fetus can develop.' }),
);

/* ---------- 17 Inheritance ---------- */
export const b171 = withPractice(lesson('b17-genes', 'Chromosomes, genes and proteins', '17.1', [
  'Chromosomes are made of DNA and contain genes. A gene is a length of DNA that codes for a protein; an allele is a form of a gene. The sequence of bases determines the sequence of amino acids. Sex is determined by X and Y chromosomes.',
], [
  byte('Chromosomes, genes and alleles', [
    '**Chromosomes** are made of **DNA** and carry **genes**. A **gene** is a **length of DNA that codes for a protein**. An **allele** is an **alternative form of a gene**. A **diploid** human cell has **23 pairs** of chromosomes (46); a **haploid** gamete has 23.',
  ], mc('Which statement about a gene is correct?', [
    ['It is a length of DNA that codes for a protein', 'Correct.'],
    ['It is a structure made of protein that carries DNA', 'This describes a chromosome incorrectly.'],
    ['It is a copy of DNA made in the cytoplasm', 'This is closer to mRNA.'],
    ['It is a single base in a DNA molecule', 'A gene is many bases long.'],
  ], 0)),
  byte('How DNA controls the cell', [
    'The **sequence of bases** in a gene determines the **sequence of amino acids** in a protein. Different sequences give **different shapes** to protein molecules, so different functions (enzymes, membrane carriers, receptors).',
    '**Making a protein:** the gene stays in the **nucleus**; an **mRNA copy** is made and moves to the **cytoplasm**; the mRNA passes through **ribosomes**, which assemble amino acids in the order set by the mRNA. Most body cells have the same genes, but each **expresses** only the ones it needs.',
  ], mc('Why does a cell need mRNA to make a protein?', [
    ['The gene stays in the nucleus, so an mRNA copy carries the instructions to the ribosomes', 'Correct.'],
    ['The gene is too small to be read by a ribosome, so mRNA makes it bigger', 'Not the reason.'],
    ['The ribosomes make the gene from amino acids, so mRNA starts the process', 'Ribosomes make proteins.'],
    ['The mRNA is the protein, so it leaves the nucleus to work in the cytoplasm', 'mRNA is not a protein.'],
  ], 0)),
  byte('Sex determination', [
    'Humans have one pair of sex chromosomes: **females are XX; males are XY**. Eggs all carry an X; sperm carry X or Y with equal chance, so the chance of a boy or girl is **50 : 50**.',
  ], mc('A father passes a Y chromosome to his child. What is the sex of the child?', [
    ['Male, because the child is XY', 'Correct.'],
    ['Female, because the child is XX', 'A female has no Y chromosome.'],
    ['It cannot be known, because both sexes can receive a Y chromosome', 'XY is male.'],
    ['Male, because the egg determines the sex of the child', 'The sperm determines the sex.'],
  ], 0)),
]),
  short('Define the term “allele”.', { kind: 'Definition', points: ['An alternative form of a gene'], model: 'An allele is an alternative form of a gene.' }),
  short('Explain how a gene controls the production of a protein.', { command: 'Explain', points: ['The sequence of bases in the gene is copied to mRNA', 'Ribosomes join amino acids in the order set by the mRNA bases'], model: 'The gene’s base sequence is copied into mRNA, which carries it to the ribosomes. The ribosomes assemble amino acids in the order determined by the mRNA base sequence.' }),
);

export const b172 = withPractice(lesson('b17-division', 'Mitosis and meiosis', '17.2 and 17.3', [
  'Mitosis makes genetically identical cells for growth, repair, replacement and asexual reproduction. Meiosis halves the chromosome number to make genetically different gametes. Stem cells divide by mitosis and can become specialised.',
], [
  byte('Mitosis', [
    '**Mitosis** is nuclear division giving **genetically identical cells**. Chromosomes are **copied exactly** before mitosis, then the copies **separate**, so each daughter cell has the same number of chromosomes as the parent.',
    '**Roles:** **growth**, **repair** of damaged tissue, **replacement** of cells and **asexual reproduction**. **Stem cells** are unspecialised cells that divide by mitosis and can become specialised.',
  ], mc('A skin cell with 46 chromosomes divides by mitosis. How many chromosomes does each daughter cell have?', [
    ['46, and they are genetically identical to the parent cell', 'Correct.'],
    ['23, and they are genetically different from the parent cell', 'This describes meiosis.'],
    ['92, because the chromosomes are copied before division', 'The copies are shared out.'],
    ['46, but each cell has different alleles from the parent', 'Mitosis gives identical cells.'],
  ], 0)),
  byte('Meiosis', [
    '**Meiosis** is involved in making **gametes**. It is a **reduction division**: the chromosome number is **halved from diploid to haploid**, and the cells produced are **genetically different**.',
    'At fertilisation two haploid gametes fuse, restoring the **diploid** number.',
  ], match('Match each type of division to its features.', [
    ['Mitosis', 'Two identical diploid cells; growth and repair'],
    ['Meiosis', 'Haploid, genetically different gametes'],
    ['Fertilisation', 'Fusion of two haploid gametes'],
  ])),
]),
  short('State two uses of mitosis in a multicellular organism.', { kind: 'Definition', points: ['Growth', 'Repair of damaged tissue (or replacement of cells, or asexual reproduction)'], model: 'Mitosis is used for growth and for the repair of damaged tissues.' }),
  mc('Why must gametes be made by meiosis and not by mitosis?', [
    ['Meiosis halves the chromosome number, so fertilisation restores the diploid number', 'Correct.'],
    ['Meiosis makes identical gametes, so every offspring is the same', 'Meiosis makes different gametes.'],
    ['Mitosis halves the chromosome number, which would be too small for a zygote', 'Mitosis keeps the number the same.'],
    ['Mitosis cannot happen in the ovaries and testes of an adult', 'It can; it is the wrong division for gametes.'],
  ], 0),
);

export const b174 = withPractice(lesson('b17-monohybrid', 'Monohybrid inheritance', '17.4', [
  'A genotype is the alleles present; a phenotype is the observable feature. A dominant allele is always expressed; a recessive allele only when two copies are present. Genetic diagrams and Punnett squares predict ratios such as 3 : 1 and 1 : 1. Codominance and sex linkage are special cases.',
], [
  byte('Genetic terms', [
    '**Genotype:** the alleles present. **Phenotype:** the observable feature. **Homozygous:** two identical alleles (pure-breeding). **Heterozygous:** two different alleles (not pure-breeding). **Dominant allele:** expressed if present. **Recessive allele:** expressed only when no dominant allele is present.',
  ], match('Match each term to its meaning.', [
    ['Genotype', 'The alleles an organism has'],
    ['Phenotype', 'The feature that can be observed'],
    ['Homozygous', 'Two identical alleles of a gene'],
    ['Heterozygous', 'Two different alleles of a gene'],
  ])),
  byte('Predicting monohybrid crosses', [
    'Use a **genetic diagram** or **Punnett square**: write the parents’ genotypes, their gametes, then all fertilisation combinations.',
    '**Heterozygous × heterozygous (Tt × Tt)** gives **1 TT : 2 Tt : 1 tt**, a **3 : 1** phenotype ratio. **Heterozygous × homozygous recessive (Tt × tt)** gives **1 Tt : 1 tt**, a **1 : 1** ratio.',
  ], mc('Two heterozygous tall pea plants (Tt) are crossed. Tall (T) is dominant. What proportion of the offspring are expected to be short?', [
    ['One quarter (25%)', 'Correct: only tt is short.'],
    ['One half (50%)', 'This is for Tt × tt.'],
    ['Three quarters (75%)', 'This is the proportion that are tall.'],
    ['None, because both parents are tall', 'The short allele is recessive but still inherited.'],
  ], 0)),
  byte('Pedigrees and test crosses', [
    'In a **pedigree diagram**, two parents with the same feature who have a child **without** it show that the feature is **dominant** (both parents are heterozygous).',
    'A **test cross** (crossing an organism of unknown genotype with a homozygous recessive) identifies the genotype: **all offspring show the dominant feature** if the unknown is TT; **about half show the recessive feature** if it is Tt.',
  ], mc('A black-furred rabbit of unknown genotype (B is dominant) is crossed with a brown rabbit (bb). Half the offspring are brown. What is the genotype of the black rabbit?', [
    ['Bb', 'Correct: a bb parent gives a b to each offspring, so brown offspring need a b from the black parent.'],
    ['BB', 'All offspring would be black.'],
    ['bb', 'The black rabbit shows the dominant phenotype.'],
    ['It cannot be determined', 'The ratio shows it.'],
  ], 0)),
  byte('Codominance, blood groups and sex linkage', [
    '**Codominance:** both alleles contribute to the phenotype of a heterozygote. **ABO blood groups:** alleles **Iᴬ, Iᴮ** (codominant) and **Iᵒ** (recessive); genotype IᴬIᴮ is group **AB**; IᴬIᵒ is group A; IᴮIᵒ is B; IᵒIᵒ is O.',
    '**Sex-linked** characteristics (for example **red-green colour blindness**) are controlled by genes on the **sex chromosomes** (the X chromosome), so they are **more common in males**, who have only one X.',
  ], mc('Why is red-green colour blindness more common in males than in females?', [
    ['The allele is on the X chromosome and males have only one X, so one recessive allele is expressed', 'Correct.'],
    ['The allele is on the Y chromosome, which only males have', 'The gene is on the X chromosome.'],
    ['Males make more of the recessive allele than females do', 'Not the explanation.'],
    ['Females cannot inherit the allele from either parent', 'Females can inherit it but need two copies.'],
  ], 0)),
]),
  short('Define “dominant allele”.', { kind: 'Definition', points: ['An allele that is expressed', 'if it is present in the genotype (even with a different allele)'], model: 'A dominant allele is an allele that is expressed if it is present in the genotype.' }),
  mc('A man with blood group A (IᴬIᵒ) and a woman with blood group B (IᴮIᵒ) have a child. Which blood group is NOT possible for the child?', [
    ['It is possible for all four groups, A, B, AB and O', 'Correct: the child can inherit IᴬIᴮ, IᴬIᵒ, IᴮIᵒ or IᵒIᵒ, so none is ruled out.'],
    ['Group AB is not possible', 'IᴬIᴮ is possible.'],
    ['Group O is not possible', 'IᵒIᵒ is possible.'],
    ['Groups A and B are not possible', 'Both are possible.'],
  ], 0),
  short('Explain why a heterozygous individual is not pure-breeding.', { command: 'Explain', points: ['It has two different alleles', 'So it can pass on either allele and produce offspring with different genotypes or phenotypes'], model: 'A heterozygous individual has two different alleles, so its gametes carry different alleles and its offspring can show different features.' }),
);

/* ---------- 18 Variation and selection ---------- */
export const b181 = withPractice(lesson('b18-variation', 'Variation and mutation', '18.1', [
  'Variation is the difference between individuals of a species. Continuous variation (such as height) is caused by genes and environment; discontinuous variation (such as blood group) is usually caused by genes only. Mutation creates new alleles and is more likely with ionising radiation and some chemicals.',
], [
  byte('Continuous and discontinuous variation', [
    '**Continuous variation:** a **range of phenotypes** between two extremes (body length, mass); caused by **genes and the environment**. **Discontinuous variation:** a **limited number of phenotypes with no intermediates** (ABO blood groups, seed shape, seed colour); usually caused by **genes only**.',
  ], match('Match each feature to the type of variation.', [
    ['Human height', 'Continuous variation'],
    ['ABO blood group', 'Discontinuous variation'],
    ['Seed colour in peas', 'Discontinuous variation (genes only)'],
  ].concat([['Body mass', 'Continuous variation (genes and environment)']]))),
  byte('Mutation and sources of variation', [
    '**Mutation** is a **genetic change**, the way **new alleles** are formed. A **gene mutation** is a **random change in the base sequence** of DNA. **Ionising radiation** (such as X-rays, UV) and some **chemicals** increase the rate of mutation.',
    'Sources of genetic variation: **mutation, meiosis, random mating and random fertilisation**.',
  ], mc('Which of these is NOT a source of genetic variation in a population?', [
    ['Mitosis of body cells in the skin', 'Correct: mitosis produces identical cells.'],
    ['Mutation of a gene in a gamete', 'A source of new alleles.'],
    ['Meiosis forming different gametes', 'A source of variation.'],
    ['Random fertilisation of eggs by sperm', 'A source of variation.'],
  ], 0)),
]),
  short('Define “mutation”.', { kind: 'Definition', points: ['A genetic change', 'such as a random change in the base sequence of DNA'], model: 'A mutation is a genetic change, for example a random change in the base sequence of DNA. It is the way new alleles are formed.' }),
  mc('Which factor would increase the rate of mutation?', [
    ['Exposure to ionising radiation', 'Correct.'],
    ['An increase in the level of exercise', 'Does not alter DNA.'],
    ['A diet rich in vitamin C', 'Does not alter DNA.'],
    ['Cooling the cells to 5 °C', 'Does not alter DNA.'],
  ], 0),
);

export const b182 = withPractice(lesson('b18-adaptive', 'Adaptive features', '18.2', [
  'An adaptive feature is an inherited feature that helps an organism survive and reproduce in its environment. Hydrophytes are adapted to living in water and xerophytes to dry conditions.',
], [
  byte('Adaptive features', [
    'An **adaptive feature** is an **inherited** feature that helps an organism to **survive and reproduce** in its environment. Examples: a **polar bear’s** thick fur and fat for insulation; a **cactus’s** spines and thick stem for storing water.',
  ], mc('A desert mammal has large ears with many blood vessels. How could this feature be adaptive?', [
    ['It helps the animal lose excess thermal energy and so avoid overheating', 'Correct.'],
    ['It helps the animal trap thermal energy so that it stays warm at night', 'Large ears radiate energy.'],
    ['It helps the animal to hold more water in its body for long periods', 'Not the function.'],
    ['It helps the animal to dig into the sand to find shelter underground', 'Not the function.'],
  ], 0)),
  byte('Hydrophytes and xerophytes', [
    '**Hydrophytes** (water plants such as water lilies): **thin or no cuticle**, **many stomata on the upper surface** of floating leaves, **large air spaces** to float and store gases, and **weak stems** supported by water.',
    '**Xerophytes** (dry-habitat plants such as cacti and marram grass): **thick waxy cuticle**, **few or sunken stomata**, **rolled or reduced leaves (spines)** to reduce surface area, **hairs** to trap humid air, and **deep or wide roots** — all of which **reduce water loss**.',
  ], mc('A plant has leaves rolled up with stomata sunk in pits. What is the most likely habitat and the reason for these features?', [
    ['A dry habitat, because they reduce water loss by transpiration', 'Correct.'],
    ['A watery habitat, because they allow more gas exchange through the stomata', 'These features reduce gas exchange.'],
    ['A shaded habitat, because they increase the absorption of light', 'Not the reason.'],
    ['A cold habitat, because they increase the loss of thermal energy', 'Not the reason.'],
  ], 0)),
]),
  short('Define “adaptive feature”.', { kind: 'Definition', points: ['An inherited feature', 'that helps an organism to survive and reproduce in its environment'], model: 'An adaptive feature is an inherited feature that helps an organism to survive and reproduce in its environment.' }),
  short('Describe two ways in which a xerophyte is adapted to reduce water loss.', { kind: 'Exam question', command: 'Describe', points: ['A thick waxy cuticle', 'Sunken or few stomata, or rolled leaves or reduced leaf surface area'], model: 'A xerophyte may have a thick waxy cuticle and sunken stomata or rolled leaves, which reduce the rate of water loss by transpiration.' }),
);

export const b183 = withPractice(lesson('b18-selection', 'Natural and artificial selection', '18.3', [
  'Natural selection: variation, many offspring, a struggle for survival, survival of the better adapted, and passing on their alleles. Selective breeding is carried out by humans over many generations. Antibiotic resistance is an example of natural selection.',
], [
  byte('Natural selection', [
    '**Natural selection:** (1) there is **genetic variation** in a population; (2) **more offspring are produced than can survive**; (3) there is a **struggle for survival** (competition for food, mates, space); (4) individuals **better adapted** are **more likely to survive and reproduce**; (5) they **pass on their alleles** to the next generation.',
    '**Adaptation** is the process by which populations become better suited to their environment over many generations. **Antibiotic resistance** in bacteria (for example MRSA) is an example.',
  ], mc('A population of beetles contains green and brown beetles on brown soil. Birds eat more green beetles. After many generations, most beetles are brown. Which statement best explains this?', [
    ['Brown beetles were more likely to survive and reproduce, passing on their alleles', 'Correct.'],
    ['The green beetles changed colour to brown so that they were less visible', 'Individuals do not change their alleles on demand.'],
    ['The brown beetles produced more offspring because they were hungrier', 'Not the explanation.'],
    ['Birds caused a mutation that made the beetles brown', 'Birds do not cause the mutation.'],
  ], 0)),
  byte('Selective breeding', [
    '**Selective breeding (artificial selection):** humans **select individuals with desirable features**, **cross** them, then **select offspring** showing those features, repeating over **many generations**. Used to improve **crop plants** (yield, disease resistance) and **domestic animals** (milk yield, meat).',
    '**Natural vs artificial selection:** in natural selection the **environment** decides which survive and it is **slow**; in artificial selection **humans** choose and it can be **faster**, but it reduces genetic variation.',
  ], mc('How does selective breeding differ from natural selection?', [
    ['Humans choose which individuals breed, based on features they want', 'Correct.'],
    ['The environment chooses which individuals survive and reproduce', 'This is natural selection.'],
    ['It does not need variation within the population to work', 'Variation is needed for both.'],
    ['It only works once, in a single generation', 'It is repeated over many generations.'],
  ], 0)),
]),
  short('Describe how selective breeding could be used to produce a cow that gives more milk.', { kind: 'Exam question', command: 'Describe', points: ['Select cows (and bulls) with the highest milk yield', 'Breed them together', 'Select offspring with high milk yield and repeat over many generations'], model: 'Choose cows and bulls with a high milk yield and breed them together. Select the offspring that give the most milk to breed again, and repeat over many generations.' }),
  short('Explain how antibiotic-resistant bacteria are an example of natural selection.', { command: 'Explain', points: ['A random mutation gives some bacteria resistance', 'The antibiotic kills the others, so the resistant survive, reproduce and pass on the allele'], model: 'Mutation gives some bacteria resistance. The antibiotic kills the non-resistant ones, so the resistant bacteria survive and reproduce and pass on the resistance allele, so the population becomes resistant.' }),
);

export const unit16 = { id: 'b16', number: 16, title: 'Reproduction', short: 'Reproduction', emoji: '🌸', color: 'rose', submodules: [b161, b163, b164, b165], papers: [] };
export const unit17 = { id: 'b17', number: 17, title: 'Inheritance', short: 'Genetics', emoji: '🧬', color: 'violet', submodules: [b171, b172, b174], papers: [] };
export const unit18 = { id: 'b18', number: 18, title: 'Variation and Selection', short: 'Selection', emoji: '🦎', color: 'teal', submodules: [b181, b182, b183], papers: [] };
