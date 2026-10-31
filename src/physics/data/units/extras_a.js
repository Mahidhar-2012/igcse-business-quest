import { byte, mc, calc, fig } from '../helpers.js';

// Extra bytes added after the syllabus gap audit (thermal physics and waves). Keyed by lesson id.
export const extrasA = {
  'p2-thermal': [
    byte('Evaporation and cooling', [
      '**Evaporation** is the escape of the **most energetic particles** from the surface of a liquid. It happens at any temperature.',
      'The particles that leave carry away more than the average energy, so the **average kinetic energy of the remaining liquid falls: it cools**.',
      'Evaporation is faster with **higher temperature**, **larger surface area** and **moving air** over the surface.',
      'This is why sweat cools the body and why a wet cloth around a bottle keeps it cool.',
    ], mc('Which wet towel dries fastest?', [
      ['A towel spread out flat in a warm breeze', 'Correct: a larger surface area, a higher temperature and moving air all speed up evaporation.'],
      ['A towel folded up in a cool cupboard', 'Small exposed area, low temperature and still air all slow evaporation.'],
      ['A towel rolled into a ball in a cool room', 'Little surface is exposed to the air.'],
      ['A towel in a sealed plastic bag', 'The particles cannot escape into the air, so it stays wet.'],
    ], 0)),
  ],
  'p2-transfer': [
    byte('Radiation balance and temperature', [
      'An object stays at a **constant temperature** when it **transfers energy away at the same rate as it receives energy**.',
      'If it receives energy **faster** than it loses it, its temperature **rises**. If it receives energy **more slowly**, its temperature **falls**.',
      'The Earth is warmed by incoming radiation from the Sun and loses energy by emitting infrared radiation. Gases such as carbon dioxide absorb some of the outgoing infrared, so a **rise in these gases tends to raise the Earth’s temperature**.',
    ], mc('The Sun’s radiation reaching a field stays the same, but the field starts to lose energy more slowly than before. What happens to its temperature?', [
      ['It rises until losses again match the energy received', 'Correct: more energy arrives than leaves, so the temperature climbs until the rates balance.'],
      ['It falls', 'Less energy is leaving, so it cannot cool.'],
      ['It stays exactly the same forever', 'Constant temperature needs equal rates, and here they are unequal.'],
      ['It falls to absolute zero', 'There is no reason for the temperature to fall.'],
    ], 0)),
    byte('How much an object radiates', [
      'The **rate of emission** of infrared radiation is greater for a **hotter** surface and for a surface with a **larger area**.',
      'A dull black surface emits more than a shiny one at the same temperature and area.',
      'Cooling fins on a radiator or engine give a large area, so more energy is transferred to the surroundings.',
    ], mc('Which cup of tea loses energy by radiation fastest at first?', [
      ['A wide, dull black cup of very hot tea', 'Correct: hot, a large area and a dull black surface all increase emission.'],
      ['A narrow, shiny silver cup of warm tea', 'Cooler, smaller in area and shiny, so it radiates least.'],
      ['A narrow, dull black cup of warm tea', 'Dull black helps, but it is cooler and smaller than the first cup.'],
      ['A wide, shiny silver cup of very hot tea', 'Hot and wide, but a shiny surface is a poor emitter.'],
    ], 0)),
    byte('Experiments on thermal energy transfer', [
      '**Conduction:** heat one end of rods of different metals, each with wax holding a pin. The pins fall off first along the best conductor.',
      '**Convection:** drop a crystal of potassium permanganate into water in a beaker and heat one side gently: the colour shows the circulating water.',
      '**Radiation:** place identical cans (one dull black, one shiny) filled with hot water. The thermometer in the dull black can falls faster, showing it is the better **emitter**. Hold each can at the same distance from a heater: the dull black can warms faster, showing it is the better **absorber**.',
    ], mc('In the cooling-cans experiment, which factors must be kept the same to make it a fair test?', [
      ['Volume and starting temperature of the water, and the size and position of the cans', 'Correct: only the surface colour (dull black or shiny) should differ.'],
      ['The colour of the cans', 'Colour is the variable being investigated and must differ.'],
      ['Nothing: results always agree', 'Uncontrolled variables can change the result.'],
      ['Only the type of thermometer', 'Other variables such as volume and temperature also matter.'],
    ], 0)),
    byte('Everyday applications with more than one process', [
      '**A fire burning wood or coal:** hot gases rise by **convection** (drawing fresh air in), you are warmed mainly by **radiation** from the glowing fuel, and the poker or pan gets hot by **conduction**.',
      '**A car radiator:** hot coolant carries energy by **convection** (and a pump), it is **conducted** through the thin metal of the radiator, and air passing through the **fins** carries energy away. Fins give a **large surface area**.',
    ], mc('Why does a car radiator have many thin metal fins?', [
      ['They give a large surface area so energy transfers to the air faster', 'Correct: more area means a greater rate of energy transfer.'],
      ['They make the radiator heavier so it stays still', 'Weight is not the purpose.'],
      ['They stop the coolant from conducting', 'The metal must conduct energy well.'],
      ['They block infrared radiation', 'The aim is to lose energy, not trap it.'],
    ], 0)),
  ],
  'p3-waves': [
    byte('The ripple tank', [
      'A **ripple tank** is a shallow tray of water with a vibrating bar or dipper making waves. A lamp above shows the **wavefronts** as bright and dark lines on a screen below.',
      '**Reflection:** waves bounce off a straight barrier. **Refraction:** waves slow down and bend as they pass over a **shallower** region (a glass plate). **Diffraction:** waves spread out after passing through a **gap** or round the **edge** of a barrier.',
    ], mc('How is refraction shown in a ripple tank?', [
      ['Waves pass over a shallower region, slow down and change direction', 'Correct: a change in depth changes the wave speed.'],
      ['Waves hit a straight barrier and bounce back', 'That is reflection.'],
      ['Waves pass through a narrow gap and spread out', 'That is diffraction.'],
      ['The frequency of the dipper is doubled', 'That changes the wavelength but does not show refraction.'],
    ], 0)),
    byte('Diffraction and the size of the gap', [
      'Diffraction through a gap is **greatest when the gap is about the same size as the wavelength**.',
      'A **narrower** gap gives **more spreading**. If the gap is much wider than the wavelength, the waves pass through almost unchanged and only the edges curve slightly.',
      'At an **edge**, waves of **longer wavelength diffract more**.',
    ], mc('Water waves with a wavelength of 2 cm meet a gap. Which gap gives the most noticeable spreading?', [
      ['A gap 2 cm wide', 'Correct: the gap is about one wavelength wide.'],
      ['A gap 20 cm wide', 'Much wider than the wavelength, so there is little spreading.'],
      ['A gap 50 cm wide', 'Far wider than the wavelength, so almost no spreading.'],
      ['No gap at all', 'Without a gap there is no diffraction through it.'],
    ], 0)),
    byte('Seismic waves', [
      'Earthquakes produce **P-waves** (primary), which are **longitudinal**, and **S-waves** (secondary), which are **transverse**.',
      'P-waves travel faster, so they arrive first. S-waves can be modelled as transverse waves.',
    ], mc('Which statement about seismic waves is correct?', [
      ['S-waves are transverse and P-waves are longitudinal', 'Correct.'],
      ['Both are longitudinal', 'S-waves are transverse.'],
      ['Both are transverse', 'P-waves are longitudinal.'],
      ['S-waves are longitudinal and P-waves are transverse', 'The wrong way round.'],
    ], 0)),
  ],
  'p3-light': [
    byte('Image in a plane mirror', [
      'A plane mirror forms an **image** that is the **same size** as the object, as **far behind the mirror** as the object is in front, and **virtual**.',
      'A **virtual image** cannot be projected on a screen: the light only **appears** to come from behind the mirror.',
      'To construct it, draw rays reflecting with angle of incidence = angle of reflection and extend the reflected rays **backwards** (dashed) to where they meet.',
    ], fig({ svg: 'planeMirror' }, mc('A person stands 2.0 m in front of a plane mirror. How far is she from her image?', [
      ['4.0 m', 'Correct: the image is 2.0 m behind the mirror, so the distance to the image is 2.0 + 2.0 = 4.0 m.'],
      ['2.0 m', 'This is the distance to the mirror only.'],
      ['1.0 m', 'The image is not halfway.'],
      ['It cannot be found', 'The distance follows from the image being as far behind the mirror as the object is in front.'],
    ], 0)), { fig: { svg: 'planeMirror', caption: 'Image formed by a plane mirror' } }),
    byte('Refraction by a glass block', [
      'Shine a ray through a **rectangular glass block** and mark the entering and emerging rays with pins. Draw the normal and measure the angles.',
      'Entering the glass, the ray bends **towards** the normal; leaving, it bends **away**. The emerging ray is **parallel** to the entering ray but **shifted sideways**.',
      'Other shapes, such as semicircular and triangular blocks, show the same bending at each boundary (only boundaries between two materials are considered).',
    ], mc('A ray enters a glass block along the normal. What happens to its direction?', [
      ['It does not change direction', 'Correct: along the normal the angle of incidence is 0°, so there is no bending (though it slows down).'],
      ['It bends towards the normal', 'There is no bending at 0° incidence.'],
      ['It bends away from the normal', 'There is no bending at 0° incidence.'],
      ['It is totally internally reflected', 'This needs a dense-to-less-dense boundary at a large angle.'],
    ], 0)),
    byte('Calculating the critical angle', [
      'At the critical angle **c**, **sin c = 1 ÷ n**. For glass with n = 1.5, c is about 42°.',
      'Light is totally internally reflected when it travels from the **denser** material and the angle of incidence is **greater than c**.',
      'Use the inverse sine (sin⁻¹) button on a calculator.',
    ], calc('A transparent plastic has a refractive index of 1.6. Calculate its critical angle (degrees, to 1 decimal place).', 38.7, {
      unit: '°', formula: 'sin c = 1 ÷ n', steps: ['sin c = 1 ÷ 1.6 = 0.625', 'c = sin⁻¹(0.625) = 38.7°'], tol: 0.2,
    })),
    byte('Optical fibres', [
      'An **optical fibre** is a thin glass strand. Light entering one end hits the wall at an angle bigger than the critical angle, so it is **totally internally reflected** again and again until it leaves the other end.',
      'Optical fibres carry **telecommunications**, cable television and broadband as pulses of light, and are used in medical **endoscopes**.',
      'Glass is transparent to visible light and some infrared, and short-wavelength infrared can carry **high rates of data**.',
    ], mc('Why does light stay inside an optical fibre?', [
      ['It is totally internally reflected at the walls', 'Correct: the angle of incidence at the wall is greater than the critical angle.'],
      ['The fibre is coated in a mirror that absorbs light', 'The reflection is internal, not from an added mirror.'],
      ['The light is refracted out and back again', 'If it refracted out, the signal would be lost.'],
      ['The fibre is opaque', 'It is transparent.'],
    ], 0)),
    byte('Real images from a converging lens', [
      'Describe an image using three pairs: **enlarged / same size / diminished**, **upright / inverted** and **real / virtual**.',
      'For an object **beyond 2F** the image is **between F and 2F**, **diminished, inverted and real**. A **real image** can be projected onto a screen.',
      'Two rays locate the image: a ray **parallel to the axis** is bent through the principal focus, and a ray through the **centre of the lens** passes straight on.',
    ], fig({ svg: 'lensImage' }, mc('Which words describe the image formed by a converging lens when the object is beyond 2F?', [
      ['Real, inverted and diminished', 'Correct.'],
      ['Virtual, upright and enlarged', 'That describes a magnifying glass (object inside F).'],
      ['Real, upright and diminished', 'A real image from a single converging lens is inverted.'],
      ['Virtual, inverted and diminished', 'A virtual image from a single converging lens is upright.'],
    ], 0)), { fig: { svg: 'lensImage', caption: 'Real image formed by a converging lens' } }),
    byte('Virtual images and the magnifying glass', [
      'A **virtual image** is formed where **diverging rays are extrapolated backwards**. It cannot be projected on a screen.',
      'If the object is **closer to a converging lens than its focal length**, the image is **upright, enlarged and virtual** and on the same side as the object. This is how a **magnifying glass** works.',
    ], mc('You hold a magnifying glass 3 cm from a coin and see it enlarged and upright. The focal length of the lens is 8 cm. The image is…', [
      ['Virtual', 'Correct: the object is inside the focal length.'],
      ['Real', 'A real image would be inverted and projectable.'],
      ['Inverted', 'The image through a magnifying glass is upright.'],
      ['Diminished', 'It is enlarged, which is why the lens is used for magnifying.'],
    ], 0)),
    byte('Diverging lenses and correcting eyesight', [
      'A **diverging lens** spreads a parallel beam so the rays appear to come from a point behind the lens. It always gives an **upright, diminished, virtual** image.',
      '**Long-sightedness** (near objects blurred) is corrected with a **converging** lens. **Short-sightedness** (distant objects blurred) is corrected with a **diverging** lens.',
    ], mc('A short-sighted person cannot see distant objects clearly. Which lens corrects this?', [
      ['A diverging lens', 'Correct: it spreads the light slightly so that the eye can focus it on the retina.'],
      ['A converging lens', 'That corrects long-sightedness.'],
      ['A plane mirror', 'A mirror does not correct vision.'],
      ['No lens can help', 'Corrective lenses are the standard solution.'],
    ], 0)),
  ],
  'p3-em': [
    byte('Satellite communication', [
      'Communication with **artificial satellites** is mainly by **microwaves**, which pass through the atmosphere.',
      'A **geostationary** satellite orbits above the equator once every 24 hours, so it stays above the same place. It is used for **satellite television** and some phones, so dishes can point at a fixed spot.',
      'Some satellite phones use **low-orbit** satellites that move across the sky.',
    ], mc('Why can a satellite television dish be fixed in one position?', [
      ['The satellite is geostationary, so it stays above the same point on Earth', 'Correct: its orbit takes 24 hours, matching Earth’s rotation.'],
      ['Satellites never move', 'Satellites orbit; geostationary ones match Earth’s spin.'],
      ['The dish rotates with the Sun', 'Dishes on houses are fixed.'],
      ['Microwaves bend round the Earth', 'They travel in straight lines.'],
    ], 0)),
    byte('Choosing the right wave for communication', [
      '**Mobile phones and wireless internet** use **microwaves**: they can pass through some walls and need only a **short aerial**.',
      '**Bluetooth** uses **radio waves**: they pass through walls but are weakened.',
      '**Optical fibres** carry **visible light or infrared** for cable television and broadband: glass is transparent, and short wavelengths carry high data rates.',
    ], mc('Why do mobile phones use microwaves?', [
      ['Microwaves pass through some walls and need only a short aerial', 'Correct.'],
      ['Microwaves are not electromagnetic waves', 'They are part of the electromagnetic spectrum.'],
      ['Microwaves travel faster than other waves', 'All electromagnetic waves travel at the same speed in a vacuum.'],
      ['Microwaves are ionising and kill bacteria', 'This is not the reason for their use in phones.'],
    ], 0)),
  ],
  'p3-sound': [
    byte('Measuring the speed of sound in air', [
      'Stand a measured distance from a large wall, make a sharp sound and time the **echo**. The sound travels there and back: **speed = 2 × distance ÷ time**.',
      'Alternatively, two people stand a large measured distance apart. One fires a starting pistol; the other starts a stopwatch when the flash is seen and stops it when the bang is heard.',
      '**Repeat and average** the times to reduce the effect of reaction time. Longer distances reduce the percentage error.',
    ], calc('A student stands 165 m from a wall and times the echo of a clap as 1.0 s. What speed of sound does this give (m/s)?', 330, {
      unit: 'm/s', formula: 'speed = 2d ÷ t', steps: ['Total distance = 2 × 165 = 330 m', 'speed = 330 ÷ 1.0 = 330 m/s'],
    })),
    byte('Sonar and other uses of ultrasound', [
      '**Sonar** sends out an ultrasound pulse and times the echo from the sea bed or a shoal of fish. **Depth = speed × time ÷ 2**, because the pulse travels down and back.',
      '**Non-destructive testing:** ultrasound is reflected by cracks inside metal, so flaws can be found without cutting the material.',
      '**Medical scanning of soft tissue:** echoes from the boundaries of organs build up an image, for example of an unborn baby.',
    ], calc('A sonar pulse takes 0.40 s to return from the sea bed. Sound travels at 1500 m/s in sea water. How deep is the water (m)?', 300, {
      unit: 'm', formula: 'depth = (v × t) ÷ 2', steps: ['Total distance = 1500 × 0.40 = 600 m', 'depth = 600 ÷ 2 = 300 m'],
    })),
  ],
};
