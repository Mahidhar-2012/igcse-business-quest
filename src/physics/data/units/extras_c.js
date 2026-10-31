import { byte, mc, calc } from '../helpers.js';

// Extra bytes added after the syllabus gap audit (nuclear and space physics). Keyed by lesson id.
export const extrasC = {
  'p5-atom': [
    byte('Ions', [
      'A neutral atom has equal numbers of protons and electrons.',
      'If an atom **loses electrons** it becomes a **positive ion**. If it **gains electrons** it becomes a **negative ion**.',
      'Only the **electrons** move: the number of protons (the proton number) never changes in this process.',
    ], mc('An atom of sodium has 11 protons and 11 electrons. It loses one electron. What is formed?', [
      ['A positive ion with 11 protons and 10 electrons', 'Correct: there is one more positive charge than negative.'],
      ['A negative ion with 12 electrons', 'It lost, not gained, an electron.'],
      ['A neutral atom with 10 protons', 'Protons are not lost in this process.'],
      ['A positive ion with 10 protons', 'The proton number does not change.'],
    ], 0)),
    byte('Relative charge and mass', [
      'Relative charge: **proton +1**, **neutron 0**, **electron −1**.',
      'The **proton number Z** decides the charge on the nucleus (+Z). The **nucleon number A** is the relative mass of the nucleus, because protons and neutrons each have a relative mass of about 1 and electrons are negligible.',
    ], mc('A nucleus has a proton number of 11 and a nucleon number of 23. What is its relative charge?', [
      ['+11', 'Correct: the charge equals the proton number.'],
      ['+23', 'This is the nucleon number, not the charge.'],
      ['+12', 'This is the neutron number.'],
      ['0', 'A nucleus has a positive charge because of its protons.'],
    ], 0)),
    byte('Fission and fusion equations', [
      'In nuclear equations the **nucleon numbers** and the **proton numbers** balance on both sides.',
      '**Fission:** a neutron splits a heavy nucleus, for example ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3 ¹₀n + energy. The products have slightly less mass: this mass is transferred as **energy**.',
      '**Fusion:** light nuclei join, for example ²₁H + ³₁H → ⁴₂He + ¹₀n + energy. Again the total mass decreases slightly and energy is released.',
    ], mc('In the fission reaction ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + x ¹₀n, how many neutrons (x) are released?', [
      ['3', 'Correct: 235 + 1 = 236 = 141 + 92 + x, so x = 3.'],
      ['1', '141 + 92 + 1 = 234, which does not balance 236.'],
      ['2', '141 + 92 + 2 = 235, which does not balance 236.'],
      ['0', '141 + 92 = 233, which does not balance 236.'],
    ], 0)),
  ],
  'p5-radioactivity': [
    byte('Deflection of radiation in electric and magnetic fields', [
      '**Alpha** (positive) and **beta** (negative) are **deflected in opposite directions** by electric and magnetic fields. **Gamma** has no charge and is **not deflected**.',
      'Beta particles are deflected **much more** than alpha particles because they have a far smaller mass.',
      'In an electric field between plates, alpha bends towards the **negative** plate and beta towards the **positive** plate.',
    ], mc('A beam of radiation passes between two charged plates. One part bends strongly towards the positive plate, one bends slightly towards the negative plate, and one is not deflected. Which is which?', [
      ['β, α, γ', 'Correct: β is negative and light, α is positive and heavy, and γ has no charge.'],
      ['α, β, γ', 'α would go towards the negative plate.'],
      ['γ, β, α', 'γ is never deflected.'],
      ['β, γ, α', 'The undeflected radiation must be γ.'],
    ], 0)),
    byte('Why the radiations ionise differently', [
      'Ionisation happens when radiation knocks electrons off atoms. It depends on the **kinetic energy** and **charge** of the radiation.',
      '**Alpha** particles have a large charge (+2) and a lot of energy transferred over a short distance, so they are the **most ionising** and are stopped quickly.',
      '**Gamma** rays have no charge and rarely interact, so they are the **least ionising** but the **most penetrating**.',
    ], mc('Why are alpha particles more ionising than beta particles?', [
      ['They have a greater charge and a larger mass, so they transfer energy to atoms more readily', 'Correct.'],
      ['They travel faster than light', 'Nothing travels faster than light.'],
      ['They have no charge', 'They carry +2 charge.'],
      ['They are electromagnetic waves', 'They are particles.'],
    ], 0)),
    byte('Decay equations', [
      '**Alpha decay:** nucleon number falls by 4 and proton number by 2, for example ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He.',
      '**Beta decay:** a neutron changes into a proton and an electron, so the proton number rises by 1 and the nucleon number is unchanged, for example ¹⁴₆C → ¹⁴₇N + ⁰₋₁e.',
      '**Gamma emission** changes neither number: the nucleus just loses energy.',
    ], calc('Americium-241 (proton number 95) decays by alpha emission. What is the nucleon number of the nucleus formed?', 237, {
      formula: 'α-decay: nucleon number falls by 4', steps: ['241 − 4 = 237'], tol: 0.001,
    })),
    byte('Choosing a radioactive source for a job', [
      'The **type of radiation** and the **half-life** decide which source is suitable.',
      '**Smoke alarm:** alpha emitter with a long half-life (such as americium-241). Smoke absorbs the weakly penetrating alpha particles, changing the current and triggering the alarm.',
      '**Thickness control for paper or foil:** beta emitter. Alpha would be stopped by the paper, gamma would pass through almost unchanged, and the beta count changes with thickness.',
      '**Medical tracer or cancer treatment:** gamma emitter. Gamma leaves the body; a **short half-life** means it does not stay active in the patient. **Sterilising** equipment also uses gamma.',
    ], mc('Which radiation is best for monitoring the thickness of aluminium foil on a production line?', [
      ['Beta', 'Correct: it is partly absorbed by thin foil, so the count rate changes with thickness.'],
      ['Alpha', 'It would be stopped completely by the foil.'],
      ['Gamma', 'It passes through almost unchanged, so the count rate hardly changes.'],
      ['Visible light', 'It is not nuclear radiation.'],
    ], 0)),
    byte('Why some nuclei are radioactive', [
      'A nucleus can be unstable because it has **too many neutrons** or is **too heavy**.',
      'Decay makes the nucleus **more stable**. In beta decay a neutron changes into a proton and an electron: **neutron → proton + electron**, so the number of excess neutrons falls.',
      'After alpha or beta decay the nucleus changes into a **different element**.',
    ], mc('What happens inside the nucleus during beta emission?', [
      ['A neutron changes into a proton and an electron', 'Correct: the electron is emitted as the beta particle.'],
      ['A proton changes into a neutron and an electron', 'This is the wrong way round.'],
      ['Two protons and two neutrons leave', 'That is alpha emission.'],
      ['Nothing changes in the nucleus', 'The proton number increases by one.'],
    ], 0)),
  ],
  'p6-earth': [
    byte('Phases of the Moon', [
      'The **Moon** orbits the Earth once in about **one month** (around 29.5 days) and shines by **reflected sunlight**.',
      'Half of the Moon is always lit by the Sun. As it orbits we see **different amounts of the lit half**: new Moon, crescent, first quarter, gibbous, full Moon and back again. This **cycle of phases** repeats about every month.',
    ], mc('Why does the Moon show phases?', [
      ['We see different amounts of its sunlit half as it orbits the Earth', 'Correct.'],
      ['The Earth’s shadow covers different parts of it each night', 'That causes a lunar eclipse, not the monthly phases.'],
      ['The Moon’s brightness changes', 'The Sun lights half of it at all times.'],
      ['The Moon spins very fast', 'The phases come from its orbit.'],
    ], 0)),
    byte('The Solar System in order', [
      'The Solar System has **one star**, the Sun, and **eight planets** in order: **Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune**.',
      'The four inner planets are **small and rocky**; the four outer planets are **large and gaseous**.',
      'It also contains **dwarf planets** (such as Pluto), **asteroids** (mainly in a belt between Mars and Jupiter), **moons** orbiting planets and **comets**.',
    ], mc('Which list gives the planets in order outwards from the Sun?', [
      ['Mercury, Venus, Earth, Mars, Jupiter', 'Correct.'],
      ['Venus, Mercury, Earth, Mars, Jupiter', 'Mercury is nearest the Sun.'],
      ['Earth, Mars, Venus, Mercury, Jupiter', 'The order is incorrect.'],
      ['Mercury, Venus, Mars, Earth, Jupiter', 'Earth comes before Mars.'],
    ], 0)),
    byte('How the Solar System formed', [
      'The **accretion model** says the Solar System formed from a **cloud of gas and dust** containing many elements.',
      '**Gravity** pulled the cloud together. As it collapsed, its **rotation** flattened it into an **accretion disc**, and material clumped to form the Sun and planets.',
      'Near the hot Sun only rock and metal could form solid grains, giving **small rocky inner planets**. Further out, **gas and ice** collected to form **large gas giants**.',
    ], mc('According to the accretion model, why are the four planets nearest the Sun small and rocky?', [
      ['Only rock and metal could condense close to the hot young Sun', 'Correct: gases and ices collected further out to form giant planets.'],
      ['They are made of gas pulled together by magnetism', 'Gravity, not magnetism, formed the planets.'],
      ['They are younger than the outer planets', 'The planets formed at around the same time.'],
      ['The Sun’s radiation blew away all matter', 'Rocky material remained to form the planets.'],
    ], 0)),
    byte('Gravity and orbits', [
      'The **gravitational field strength at a planet’s surface** depends on its **mass**. Around a planet, the field **decreases as you move away**.',
      'The **Sun contains most of the Solar System’s mass**, so its gravity keeps the planets in orbit. The Sun’s field weakens with distance, so **orbital speeds decrease** for planets further out.',
      'Orbits are **ellipses**. An object moves **faster when closer to the Sun**, because gravitational potential energy changes to kinetic energy (conservation of energy).',
    ], mc('A comet travels on an elliptical orbit around the Sun. Where is it moving fastest?', [
      ['Closest to the Sun', 'Correct: it has lost gravitational potential energy, which has become kinetic energy.'],
      ['Furthest from the Sun', 'It is slowest there.'],
      ['At the same speed everywhere', 'The speed varies along an elliptical orbit.'],
      ['It stops at the Sun', 'It does not reach the Sun.'],
    ], 0)),
    byte('Light travel time', [
      'Light travels at **3.0 × 10⁸ m/s**. Time = distance ÷ speed.',
      'The same calculation shows how long it takes light (or radio signals) to cross the Solar System.',
    ], calc('The Sun is 1.5 × 10¹¹ m from the Earth. How long does light take to travel from the Sun to the Earth (s)?', 500, {
      unit: 's', formula: 't = d ÷ c', steps: ['t = 1.5 × 10¹¹ ÷ 3.0 × 10⁸ = 500 s'], tol: 5,
    })),
    byte('Reading planetary data', [
      'As **orbital distance** from the Sun increases, the **orbital period gets longer** and the planet’s **surface temperature tends to fall**.',
      '**Density** shows the type of planet: small inner planets are **dense (rocky)**; the giant planets are **less dense** (mostly gas).',
      'The **surface gravitational field strength** depends on the planet’s mass (and radius).',
    ], mc('Which property generally gets larger for planets further from the Sun?', [
      ['Orbital period', 'Correct: Neptune takes far longer to orbit than Mercury.'],
      ['Surface temperature', 'This generally decreases with distance.'],
      ['Orbital speed', 'This decreases with distance.'],
      ['Gravitational pull from the Sun', 'The Sun’s field weakens with distance.'],
    ], 0)),
  ],
  'p6-stars': [
    byte('The Sun and its place in the Galaxy', [
      'The Sun is a **medium-sized star**, mostly **hydrogen and helium**, radiating mainly **infrared, visible and ultraviolet** radiation.',
      'It is one of billions of stars in the **Milky Way galaxy**, which is about **100 000 light-years** across. The other stars are **much further away** than the Sun.',
      'Stars are powered by **nuclear fusion**; in a stable star, hydrogen fuses to form helium.',
    ], mc('Which statement about the Sun is correct?', [
      ['It is a medium-sized star in the Milky Way, powered by fusion of hydrogen into helium', 'Correct.'],
      ['It is a planet that gives out light by burning coal', 'It is a star powered by fusion.'],
      ['It is the largest star in the Universe', 'It is of medium size.'],
      ['It is at the centre of the Milky Way', 'It is one star among billions in the galaxy.'],
    ], 0)),
    byte('The light-year', [
      'A **light-year** is the **distance light travels in a vacuum in one year**. It is a unit of **distance**, not time.',
      '**1 light-year = 9.5 × 10¹⁵ m.** Astronomical distances are often given in light-years.',
    ], calc('The nearest star beyond the Sun is 4.2 light-years away. How far is that in units of 10¹⁶ m? (1 light-year = 9.5 × 10¹⁵ m; give your answer as a number, e.g. 4.0 for 4.0 × 10¹⁶ m)', 3.99, {
      unit: '× 10¹⁶ m', formula: 'distance = 4.2 × 9.5 × 10¹⁵ m', steps: ['4.2 × 9.5 = 39.9', '39.9 × 10¹⁵ m = 3.99 × 10¹⁶ m'], tol: 0.05,
    })),
    byte('A stable star and the end of the hydrogen', [
      'A **protostar** forms when a cloud of gas and dust collapses under its own gravity and heats up. It becomes a **stable star** when the **inward force of gravity is balanced by an outward force** from the high temperature in the core.',
      'When most of the **hydrogen in the core has become helium**, the star expands: most stars become **red giants**, and more massive stars become **red supergiants**.',
      'The new stars and planets can form from the nebula left by a supernova, which contains **heavier elements** made in the star.',
    ], mc('What keeps a stable star from collapsing under its own gravity?', [
      ['The outward force from the high temperature in its core balances gravity', 'Correct.'],
      ['The Sun’s magnetic field', 'Balance between gravity and thermal pressure keeps it stable.'],
      ['The star’s rotation stops it', 'Thermal pressure from fusion is the key.'],
      ['Nothing: it is always collapsing', 'A stable star is in balance for millions or billions of years.'],
    ], 0)),
    byte('Cosmic microwave background radiation', [
      '**Cosmic microwave background radiation (CMBR)** is microwave radiation of a particular frequency observed **from all directions** in space.',
      'It was produced **shortly after the Big Bang**. As the Universe **expanded**, the wavelengths were **stretched** until they are now in the **microwave region**.',
      'It is key evidence for the Big Bang theory, along with the redshift of distant galaxies.',
    ], mc('What is the origin of the cosmic microwave background radiation?', [
      ['Radiation from soon after the Big Bang, stretched to microwave wavelengths by the expansion of the Universe', 'Correct.'],
      ['Microwaves from mobile phone masts', 'It comes from all directions in space, not from human devices.'],
      ['Radiation from the Sun only', 'It is observed in every direction, far beyond the Solar System.'],
      ['Light reflected from the Moon', 'The Moon does not produce it.'],
    ], 0)),
    byte('Redshift, speed, distance and the Hubble constant', [
      'The **speed** at which a galaxy moves away can be found from the **change in wavelength (redshift)** of its starlight.',
      'The **distance** of a far galaxy can be found from the **brightness of a supernova** in it (supernovae of one type have a known true brightness).',
      '**H₀ = v ÷ d**. The current estimate is **2.2 × 10⁻¹⁸ per second**. Then **1 ÷ H₀** estimates the **age of the Universe**.',
    ], calc('Use H₀ = 2.2 × 10⁻¹⁸ per second to estimate the age of the Universe in billions of years. (1 year = 3.15 × 10⁷ s)', 14.4, {
      unit: 'billion years', formula: 'age = 1 ÷ H₀', steps: ['1 ÷ 2.2 × 10⁻¹⁸ = 4.5 × 10¹⁷ s', '4.5 × 10¹⁷ ÷ 3.15 × 10⁷ = 1.44 × 10¹⁰ years = about 14.4 billion years'], tol: 0.4,
    }), { eq: ['H₀ = v ÷ d', 'age = 1 ÷ H₀'] }),
  ],
};
