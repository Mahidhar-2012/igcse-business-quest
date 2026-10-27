import { byte, lesson, mc, calc, fig } from '../helpers.js';

export const l51 = lesson('p5-atom', 'The nuclear model of the atom', '5.1', [
  'Atom: a tiny nucleus (protons and neutrons) surrounded by electrons. Proton number Z, nucleon number A. Isotopes have the same Z but different A.',
], [
  byte('Structure of the atom', [
    'An atom has a tiny, dense, positively charged **nucleus** made of **protons** (+) and **neutrons** (no charge), with **electrons** (−) orbiting it.',
    'Almost all the mass is in the nucleus; most of the atom is empty space. An atom is neutral because it has equal numbers of protons and electrons.',
  ], fig({ svg: 'atom' }, mc('Which particles are found in the nucleus of an atom?', [
    ['Protons and neutrons', 'Correct.'],
    ['Protons and electrons', 'Electrons are outside the nucleus.'],
    ['Neutrons and electrons', 'Electrons are outside the nucleus.'],
    ['Electrons only', 'Electrons orbit the nucleus.'],
  ], 0)), { fig: { svg: 'atom', caption: 'The nuclear model' } }),
  byte('The scattering experiment', [
    'In the **Geiger–Marsden experiment**, α-particles were fired at thin gold foil. **Most passed straight through**, a few were **deflected through large angles** and a very few **bounced back**.',
    'This showed that the atom is **mostly empty space** with a tiny, dense, positively charged **nucleus**.',
  ], mc('Why did a few α-particles bounce straight back from the gold foil?', [
    ['They hit a tiny, dense, positively charged nucleus', 'Correct: like charges repel and the nucleus is very massive.'],
    ['They hit an electron', 'Electrons are far too light to reflect them.'],
    ['The foil was too thick', 'Not the explanation.'],
    ['Gold atoms are radioactive', 'Not relevant.'],
  ], 0)),
  byte('Proton number, nucleon number and isotopes', [
    'The **proton number Z** is the number of protons. The **nucleon number A** is the number of protons plus neutrons.',
    'Neutrons = A − Z. A nuclide is written ᴬ_Z X, for example carbon-14.',
    '**Isotopes** are atoms of the same element (same Z) with different numbers of neutrons (different A). They have the same chemical properties.',
  ], calc('A nuclide has a nucleon number of 14 and a proton number of 6. How many neutrons does it contain?', 8, {
    formula: 'neutrons = A − Z', steps: ['14 − 6 = 8'], tol: 0.001,
  })),
]);

export const l52 = lesson('p5-radioactivity', 'Radioactivity', '5.2', [
  'Radioactive decay is random and spontaneous. α, β, γ differ in ionising and penetrating power. Half-life: time for the activity (or number of nuclei) to halve. Safety: distance, time, shielding.',
], [
  byte('Background radiation', [
    '**Background radiation** is radiation present all around: from the **air (radon)**, **rocks and soil**, **cosmic rays**, **food** and medical sources.',
    'A Geiger–Müller tube measures the **count rate** (counts per second). Always subtract the background count rate to find the count from a source.',
  ], mc('A Geiger counter measures 55 counts/min with a source and 15 counts/min with no source present. What is the corrected count rate?', [
    ['40 counts/min', 'Correct: 55 − 15.'],
    ['55 counts/min', 'This includes the background.'],
    ['70 counts/min', 'Do not add the background.'],
    ['15 counts/min', 'This is the background only.'],
  ], 0)),
  byte('α, β and γ radiation', [
    '**α-particle:** 2 protons + 2 neutrons (helium nucleus), +2 charge, strongest ionising, stopped by paper or a few cm of air.',
    '**β-particle:** a fast electron from the nucleus, −1 charge, medium ionising, stopped by a few mm of aluminium.',
    '**γ-ray:** an electromagnetic wave, no charge, weakest ionising, most penetrating, reduced by thick lead.',
    'In a magnetic or electric field α and β bend in opposite directions; γ is not deflected.',
  ], fig({ svg: 'penetration' }, mc('Which radiation is stopped by a sheet of paper?', [
    ['Alpha particles', 'Correct.'],
    ['Beta particles', 'They pass through paper.'],
    ['Gamma rays', 'They pass through paper and aluminium.'],
    ['All three', 'Only alpha is stopped.'],
  ], 0)), { fig: { svg: 'penetration', caption: 'Penetration of α, β and γ' } }),
  byte('Radioactive decay', [
    'Decay is **random** (cannot predict when a nucleus will decay) and **spontaneous** (not affected by temperature or pressure).',
    '**α-decay:** nucleon number falls by 4 and proton number by 2. **β-decay:** a neutron becomes a proton; proton number rises by 1, nucleon number unchanged. **γ-decay:** no change in nucleon or proton numbers.',
  ], calc('A nucleus with proton number 88 and nucleon number 226 emits an α-particle. What is the new proton number?', 86, {
    formula: 'α-decay: Z falls by 2', steps: ['88 − 2 = 86'], tol: 0.001,
  })),
  byte('Half-life', [
    'The **half-life** is the time for the **activity** (or the number of undecayed nuclei) of a sample to halve.',
    'After n half-lives, the fraction remaining is (½)ⁿ.',
    'Find it from a decay curve: read the time for the activity to fall from A to A/2.',
  ], fig({ svg: 'decayCurve' }, calc('A source has an activity of 800 counts/s and a half-life of 3 hours. What is its activity after 9 hours (counts/s)?', 100, {
    unit: 'counts/s', formula: '9 h = 3 half-lives', steps: ['800 → 400 → 200 → 100 counts/s'],
  })), { fig: { svg: 'decayCurve', caption: 'Decay curve and half-life' } }),
  byte('Uses of radioactivity', [
    '**Smoke detectors** (α), **thickness gauges** (β through paper or foil), **medical tracers** and **sterilising equipment** (γ), **radiotherapy** (γ) and **radioactive dating** (carbon-14).',
    'A source for a medical tracer needs a short half-life so it does not stay in the body; a source for thickness control needs a long half-life.',
  ], mc('Why is a γ source used to sterilise medical equipment?', [
    ['γ-rays penetrate packaging and kill bacteria', 'Correct.'],
    ['γ-rays are not ionising', 'They are ionising, which is why they kill microbes.'],
    ['γ-rays are stopped by paper', 'They are very penetrating.'],
    ['γ-rays make equipment radioactive', 'Sterilising does not make objects radioactive.'],
  ], 0)),
  byte('Safety with radiation', [
    'Ionising radiation can **damage cells** and cause cancer. Reduce the risk by keeping **distance** (tongs), limiting **time** of exposure, and using **shielding** (lead).',
    'Store sources in **lead-lined boxes**. Temperature does not alter the emission.',
  ], mc('Which action will NOT reduce the amount of radiation a worker receives from a γ source?', [
    ['Warming the source', 'Correct: decay is spontaneous and unaffected by temperature.'],
    ['Standing further away', 'This reduces exposure.'],
    ['Working for a shorter time', 'This reduces exposure.'],
    ['Placing a thick lead screen in the way', 'This absorbs radiation.'],
  ], 0)),
  byte('Fission and fusion', [
    '**Nuclear fission:** a heavy nucleus (uranium-235) is split by a neutron into two smaller nuclei, releasing neutrons and energy. A **chain reaction** can follow.',
    '**Nuclear fusion:** light nuclei (hydrogen) join to form a heavier one, releasing energy. It powers the Sun and requires very high temperature and pressure.',
  ], mc('Which process takes place in the Sun to release energy?', [
    ['Nuclear fusion', 'Correct: hydrogen nuclei fuse to form helium.'],
    ['Nuclear fission', 'Fission is used in power stations.'],
    ['Combustion', 'The Sun is not burning.'],
    ['Radioactive decay of uranium', 'Not the Sun’s source.'],
  ], 0)),
]);

export const l61 = lesson('p6-earth', 'The Earth and the Solar System', '6.1', [
  'Earth orbits the Sun in a year, spins on its axis in a day; the Moon orbits Earth in about a month. Orbital speed v = 2πr ÷ T. Planets orbit in ellipses.',
], [
  byte('Earth, Moon and the seasons', [
    'The **Earth rotates** on its axis once every **24 hours**, giving day and night. It **orbits the Sun** once every **365¼ days**.',
    'The Earth’s axis is **tilted**, so the Sun’s rays hit different parts at different angles over the year: this causes **seasons**.',
    'The **Moon** orbits the Earth in about **one month** and is seen by reflected sunlight.',
  ], mc('What causes the seasons on Earth?', [
    ['The tilt of the Earth’s axis as it orbits the Sun', 'Correct.'],
    ['The Earth being closer to the Sun in summer', 'Distance is not the main cause.'],
    ['The Moon’s orbit', 'It does not cause seasons.'],
    ['The speed of the Earth’s rotation', 'This causes day and night, not seasons.'],
  ], 0)),
  byte('The Solar System', [
    'The **Sun** is a star at the centre. Eight **planets** orbit it (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune) in elliptical orbits, together with **dwarf planets**, **asteroids** and **comets**.',
    'The planets nearer the Sun move faster and have shorter orbit times. Planets are visible by reflected light.',
    'The Sun’s **gravity** provides the force that keeps the planets in orbit.',
  ], mc('What force keeps the planets in orbit around the Sun?', [
    ['Gravity', 'Correct.'],
    ['Friction', 'There is nothing to cause friction in space.'],
    ['Magnetism', 'Not the main force.'],
    ['Air resistance', 'There is no air in space.'],
  ], 0)),
  byte('Orbital speed', [
    'For a roughly circular orbit, the **orbital speed v = 2πr ÷ T** (distance round the orbit ÷ time for one orbit).',
    'A planet nearer the Sun has a smaller orbit and a shorter time period.',
  ], calc('The Earth is 1.5 × 10¹¹ m from the Sun and takes 3.2 × 10⁷ s to orbit it. What is its orbital speed (m/s)? (Give your answer as a number, e.g. 29000)', 29452, {
    unit: 'm/s', formula: 'v = 2πr ÷ T', steps: ['2 × π × 1.5 × 10¹¹ = 9.42 × 10¹¹ m', '÷ 3.2 × 10⁷ = about 29 500 m/s'], tol: 600,
  }), { eq: ['v = 2πr ÷ T'] }),
]);

export const l62 = lesson('p6-stars', 'Stars and the Universe', '6.2', [
  'Stars form from nebulae by gravity; fusion in the core; life cycle depends on mass. Galaxies contain billions of stars; the Universe began with the Big Bang and is expanding (red-shift). Hubble: v = H₀d.',
], [
  byte('The Sun and stars', [
    'The Sun is a **star**: a ball of mostly hydrogen producing energy by **nuclear fusion** in its core. Stars are in **galaxies**; our galaxy is the **Milky Way**, containing billions of stars.',
    'A **light-year** is the distance light travels in one year. The Sun is one of the stars in the galaxy.',
  ], mc('Where does the Sun get its energy from?', [
    ['Nuclear fusion of hydrogen to helium', 'Correct.'],
    ['Burning coal', 'The Sun is not on fire.'],
    ['Nuclear fission of uranium', 'Fission powers reactors, not the Sun.'],
    ['Friction in its atmosphere', 'Not the source.'],
  ], 0)),
  byte('The life cycle of a star', [
    'A star forms from a cloud of dust and gas (**nebula**) pulled together by gravity into a **protostar**. When it is hot enough for fusion, it becomes a stable **main-sequence** star.',
    'When the hydrogen runs low, a star like the Sun swells into a **red giant**, then sheds its outer layers and shrinks to a **white dwarf**.',
    'A star much more massive than the Sun becomes a **red supergiant**, then explodes as a **supernova**, leaving a **neutron star** or a **black hole**.',
  ], fig({ svg: 'solar' }, mc('What happens to a star of similar mass to the Sun at the end of its life?', [
    ['It becomes a red giant, then a white dwarf', 'Correct.'],
    ['It explodes as a supernova and becomes a black hole', 'This is for much more massive stars.'],
    ['It turns directly into a planet', 'Stars do not become planets.'],
    ['It stays unchanged forever', 'Stars change over millions of years.'],
  ], 0)), { fig: { svg: 'solar', caption: 'Life cycles of stars' } }),
  byte('The expanding Universe', [
    'The **Big Bang** theory: the Universe began about **13.8 billion years ago** from a very small, hot, dense state, and has been expanding since.',
    'Light from distant galaxies is **red-shifted**: its wavelength is longer, showing the galaxies are moving away. The further away, the faster they recede.',
    '**Cosmic microwave background radiation (CMBR)** is the left-over radiation from the early Universe: evidence for the Big Bang.',
  ], mc('What does the red-shift of light from distant galaxies show?', [
    ['The galaxies are moving away from us', 'Correct: light waves are stretched to longer wavelengths.'],
    ['The galaxies are moving towards us', 'That would give a blue-shift.'],
    ['The galaxies are cooling down', 'Not what red-shift shows.'],
    ['The galaxies are stationary', 'Red-shift shows they move.'],
  ], 0)),
  byte('Hubble’s law and the age of the Universe', [
    '**Hubble constant H₀:** the recession speed of a galaxy is proportional to its distance: **v = H₀ d**.',
    'Since H₀ = v ÷ d, the time since the Big Bang is approximately **1 ÷ H₀**.',
    'The more distant the galaxy, the larger the red-shift.',
  ], mc('Two galaxies show different red-shifts. Galaxy X has a larger red-shift than galaxy Y. What can be concluded?', [
    ['X is moving away faster, so it is further away', 'Correct: speed of recession is proportional to distance.'],
    ['X is nearer than Y', 'The larger red-shift means it is further away.'],
    ['X is moving towards us', 'Red-shift means moving away.'],
    ['X and Y are the same distance away', 'Different red-shifts mean different speeds and distances.'],
  ], 0), { eq: ['v = H₀ d'] }),
]);
