import { byte, lesson, mc, calc, fig } from '../helpers.js';

export const l31 = lesson('p3-waves', 'General properties of waves', '3.1', [
  'Waves transfer energy without transferring matter. Wave speed v = fλ. Reflection, refraction and diffraction. Transverse: vibration at right angles; longitudinal: parallel.',
], [
  byte('Describing a wave', [
    '**Amplitude:** the maximum displacement from the rest position. **Wavelength (λ):** distance between two neighbouring identical points (crest to crest). **Frequency (f):** number of waves per second, in hertz (Hz). **Period (T):** time for one wave = 1 ÷ f.',
    'A **wavefront** is a line joining points that are in step (such as all the crests). Waves transfer **energy** without transferring matter.',
  ], fig({ svg: 'waveParts' }, mc('Which of these is the amplitude of the wave?', [
    ['The height from the rest line to a crest', 'Correct.'],
    ['The distance from crest to crest', 'This is the wavelength.'],
    ['The height from trough to crest', 'This is twice the amplitude.'],
    ['The number of crests per second', 'This is the frequency.'],
  ], 0)), { fig: { svg: 'waveParts', caption: 'A transverse wave' } }),
  byte('The wave equation', [
    '**v = f λ**: wave speed (m/s) = frequency (Hz) × wavelength (m).',
    'If the speed is fixed, doubling the frequency halves the wavelength.',
    'The speed depends on the medium; the frequency is set by the source and does not change when the wave changes medium.',
  ], calc('A wave has a frequency of 50 Hz and a wavelength of 0.40 m. What is its speed (m/s)?', 20, {
    unit: 'm/s', formula: 'v = f λ', steps: ['50 × 0.40 = 20 m/s'],
  }), { eq: ['v = f λ'] }),
  byte('Transverse and longitudinal waves', [
    '**Transverse:** the vibrations are at **right angles** to the direction of travel. Examples: light, all electromagnetic waves, water waves, waves on a rope.',
    '**Longitudinal:** the vibrations are **parallel** to the direction of travel, forming **compressions** and **rarefactions**. Example: sound.',
  ], fig({ svg: 'longitudinal' }, mc('Which type of wave is sound?', [
    ['Longitudinal', 'Correct: air particles vibrate along the direction the sound travels.'],
    ['Transverse', 'Sound is not transverse.'],
    ['Electromagnetic', 'Sound is a mechanical wave and needs a medium.'],
    ['It depends on the pitch', 'All sound is longitudinal.'],
  ], 0)), { fig: { svg: 'longitudinal', caption: 'A longitudinal wave' } }),
  byte('Reflection, refraction and diffraction', [
    '**Reflection:** a wave bounces off a surface. Speed, wavelength and frequency do not change.',
    '**Refraction:** a wave changes speed (and wavelength) when it enters a new medium, so it changes direction. The frequency does not change. In shallow water waves slow down and bend towards the normal.',
    '**Diffraction:** waves spread out when they pass through a gap or round an edge. It is most noticeable when the gap is about **one wavelength wide**.',
  ], mc('A water wave enters shallower water, where it travels more slowly. What happens to its frequency and wavelength?', [
    ['Frequency stays the same, wavelength decreases', 'Correct: v = fλ with v smaller and f fixed.'],
    ['Both decrease', 'The frequency is set by the source.'],
    ['Frequency decreases, wavelength stays the same', 'The frequency does not change.'],
    ['Both stay the same', 'The wavelength must decrease if the speed does.'],
  ], 0)),
]);

export const l32 = lesson('p3-light', 'Light', '3.2', [
  'Reflection: angle i = angle r. Refraction: n = sin i ÷ sin r. Critical angle and total internal reflection. Converging lenses form real or virtual images.',
], [
  byte('Reflection of light', [
    'For reflection at a plane mirror, the **angle of incidence = the angle of reflection**, both measured from the **normal**.',
    'The image in a plane mirror is **virtual** (cannot be projected onto a screen), the same size as the object, and as far behind the mirror as the object is in front.',
  ], fig({ svg: 'reflection' }, mc('A ray hits a plane mirror at 30° to the mirror surface. What is the angle of reflection (measured from the normal)?', [
    ['60°', 'Correct: the angle to the normal = 90° − 30° = 60°, and the angle of reflection equals the angle of incidence.'],
    ['30°', 'This is the angle to the surface, not the normal.'],
    ['90°', 'Not possible.'],
    ['120°', 'Not the angle to the normal.'],
  ], 0)), { fig: { svg: 'reflection', caption: 'Reflection at a plane mirror' } }),
  byte('Refraction of light', [
    '**Refraction** is the change of direction of light when it passes from one transparent material to another because its **speed changes**.',
    'Entering glass or water from air, light slows down and bends **towards the normal**. Leaving, it speeds up and bends **away from the normal**.',
    'Light travelling along the normal is not deviated.',
  ], fig({ svg: 'refraction' }, mc('Light travels from air into glass. What happens to its speed and direction?', [
    ['It slows down and bends towards the normal', 'Correct.'],
    ['It speeds up and bends away from the normal', 'This happens when leaving glass.'],
    ['It slows down and bends away from the normal', 'It bends towards the normal.'],
    ['It keeps the same speed and direction', 'Its speed changes at the boundary.'],
  ], 0)), { fig: { svg: 'refraction', caption: 'Refraction at an air–glass boundary' } }),
  byte('Refractive index', [
    'The **refractive index n** of a material = **sin i ÷ sin r** (i in air, r in the material).',
    'A larger n means the light bends more and slows down more. Glass has n ≈ 1.5.',
    'n is also the ratio speed of light in air (vacuum) ÷ speed of light in the material.',
  ], calc('A ray in air hits glass with an angle of incidence of 45° and the angle of refraction is 28°. Calculate the refractive index (1 d.p.).', 1.5, {
    formula: 'n = sin i ÷ sin r', steps: ['sin 45° = 0.707', 'sin 28° = 0.469', 'n = 0.707 ÷ 0.469 = 1.5'], tol: 0.02,
  }), { eq: ['n = sin i ÷ sin r'] }),
  byte('Critical angle and total internal reflection', [
    'When light passes from a **dense to a less dense** material, the angle of refraction is larger than the angle of incidence.',
    'At the **critical angle c** the refracted ray travels along the boundary. If the angle of incidence is **greater than c**, there is **total internal reflection**.',
    'sin c = 1 ÷ n. Used in **optical fibres** and **prisms**.',
  ], fig({ svg: 'totalInternal' }, mc('What two conditions are needed for total internal reflection?', [
    ['Light goes from a denser to a less dense material and the angle of incidence is greater than the critical angle', 'Correct.'],
    ['Light goes from a less dense to a denser material at a large angle', 'The ray would be refracted, not totally reflected.'],
    ['Light hits at exactly 0° to the normal', 'It passes straight through.'],
    ['The material must be a metal', 'Total internal reflection needs transparent materials.'],
  ], 0)), { fig: { svg: 'totalInternal', caption: 'Critical angle' }, eq: ['sin c = 1 ÷ n'] }),
  byte('Converging lenses', [
    'A **converging lens** bends parallel rays so they meet at the **principal focus F**. The distance from the lens to F is the **focal length f**.',
    'The image is **real** if the object is beyond the focal length (it can be projected on a screen) and **virtual** (magnifying glass) if the object is within the focal length.',
    'Rays through the lens centre pass straight through; rays parallel to the axis pass through F.',
  ], fig({ svg: 'lens' }, mc('Parallel rays of light hit a converging lens. Where do they go after the lens?', [
    ['They pass through the principal focus', 'Correct.'],
    ['They spread out as if from the focus', 'That describes a diverging lens.'],
    ['They remain parallel', 'A converging lens focuses them.'],
    ['They are reflected back', 'They pass through a lens.'],
  ], 0)), { fig: { svg: 'lens', caption: 'Converging lens' } }),
  byte('Dispersion and colours', [
    '**Dispersion** is the splitting of white light into its colours by a prism, because each colour is refracted by a different amount.',
    'The colours, in order: red, orange, yellow, green, blue, indigo, violet. Red bends the least, violet the most.',
    '**Monochromatic** light has a single frequency (one colour).',
  ], mc('Which colour of visible light is refracted most by a glass prism?', [
    ['Violet', 'Correct: it has the shortest wavelength and the greatest deviation.'],
    ['Red', 'Red is deviated least.'],
    ['Green', 'Green is in the middle.'],
    ['All colours equally', 'Different colours are refracted by different amounts, hence dispersion.'],
  ], 0)),
]);

export const l33 = lesson('p3-em', 'Electromagnetic spectrum', '3.3', [
  'Radio, microwaves, infra-red, visible, ultraviolet, X-rays, γ-rays: increasing frequency. All transverse, all travel at 3.0 × 10⁸ m/s in a vacuum.',
], [
  byte('The spectrum in order', [
    'In order of **increasing frequency** (decreasing wavelength): radio waves, microwaves, infra-red, visible light, ultraviolet, X-rays, gamma rays.',
    'All are **transverse** waves that travel at the **same speed in a vacuum** (3.0 × 10⁸ m/s).',
    'Visible light runs from red (longest wavelength) to violet (shortest).',
  ], fig({ svg: 'spectrum' }, mc('Which type of electromagnetic wave has the highest frequency?', [
    ['Gamma rays', 'Correct.'],
    ['Radio waves', 'Radio waves have the lowest frequency.'],
    ['Infra-red', 'Lower than visible light.'],
    ['Ultraviolet', 'Lower than X-rays and gamma rays.'],
  ], 0)), { fig: { svg: 'spectrum', caption: 'The electromagnetic spectrum' } }),
  byte('Uses of electromagnetic waves', [
    '**Radio waves:** broadcasting and communications. **Microwaves:** satellite TV, mobile phones, cooking. **Infra-red:** remote controls, heaters, night vision, intruder alarms.',
    '**Visible light:** vision, optical fibres, photography. **Ultraviolet:** security marking, sterilising water, fluorescent lamps. **X-rays:** medical imaging and security scans. **Gamma rays:** sterilising equipment and treating cancer.',
  ], mc('Which radiation is used by an infra-red remote control for a television?', [
    ['Infra-red', 'Correct.'],
    ['Microwaves', 'Not used in remote controls.'],
    ['X-rays', 'Harmful and not used.'],
    ['Gamma rays', 'Harmful and not used.'],
  ], 0)),
  byte('Dangers of electromagnetic radiation', [
    '**Microwaves:** internal heating of body cells. **Infra-red:** skin burns. **Ultraviolet:** skin cancer and eye damage.',
    '**X-rays and gamma rays:** damage cells, causing cancer and mutations. Doses should be kept low and exposure time short.',
    'Higher-frequency radiation carries more energy per photon and is generally more dangerous (it can ionise).',
  ], mc('Which pair of radiations can cause cell mutations and cancer?', [
    ['X-rays and gamma rays', 'Correct: they are ionising.'],
    ['Radio waves and microwaves', 'These have low energy.'],
    ['Infra-red and visible light', 'These are not ionising.'],
    ['Only radio waves', 'Radio waves have the lowest energy.'],
  ], 0)),
  byte('Communication with waves', [
    '**Analogue** signals vary continuously; **digital** signals use only two values (on/off, 1/0).',
    'Digital signals can be **regenerated** without noise, carry more information and can be stored and processed easily. Analogue signals pick up noise that is amplified with the signal.',
    'Optical fibres carry digital signals as pulses of light by total internal reflection.',
  ], mc('Why are digital signals better than analogue signals for long-distance communication?', [
    ['Noise can be removed by regenerating the signal', 'Correct.'],
    ['They need no energy', 'They still need energy.'],
    ['They travel faster than light', 'Nothing travels faster than light.'],
    ['They use no waves', 'They are carried by waves.'],
  ], 0)),
]);

export const l34 = lesson('p3-sound', 'Sound', '3.4', [
  'Sound is a longitudinal wave from vibrations; needs a medium; speed about 330 m/s in air. Pitch ↔ frequency, loudness ↔ amplitude. Echoes: d = vt ÷ 2. Humans hear 20 Hz–20 kHz.',
], [
  byte('How sound travels', [
    'Sound is made by **vibrating** objects. It travels as a **longitudinal wave** of compressions and rarefactions.',
    'It needs a **medium**: it cannot travel through a vacuum.',
    'Speed: slowest in gases (about 330 m/s in air), faster in liquids (about 1500 m/s in water), fastest in solids (about 5000 m/s in steel).',
  ], mc('Why can astronauts not hear each other directly in space?', [
    ['There is no medium (air) to carry sound waves', 'Correct.'],
    ['Space is too cold', 'Sound needs particles, not warmth.'],
    ['Sound waves are electromagnetic', 'They are mechanical waves.'],
    ['Space has too much light', 'Light has no effect on sound.'],
  ], 0)),
  byte('Pitch and loudness', [
    '**Pitch** depends on **frequency**: higher frequency = higher pitch.',
    '**Loudness** depends on **amplitude**: larger amplitude = louder sound.',
    'The human ear hears frequencies from about **20 Hz to 20 000 Hz**. Higher than 20 kHz is **ultrasound**.',
  ], mc('A louder note of the same pitch is played. Which property of the sound wave has increased?', [
    ['Amplitude', 'Correct.'],
    ['Frequency', 'The pitch would change.'],
    ['Wavelength', 'The same pitch means the same wavelength.'],
    ['Speed', 'The speed depends on the medium.'],
  ], 0)),
  byte('Echoes and speed of sound', [
    'An **echo** is a reflection of sound. If you time how long an echo takes to return, the sound has travelled **there and back**.',
    'Distance to the wall = speed × time ÷ 2.',
    'The speed of sound in air is about **330 m/s**.',
  ], calc('A man hears the echo of his shout 0.60 s later. How far away is the wall (speed of sound = 330 m/s) in m?', 99, {
    unit: 'm', formula: 'd = (v × t) ÷ 2', steps: ['330 × 0.60 = 198 m there and back', '198 ÷ 2 = 99 m'],
  })),
  byte('Ultrasound', [
    '**Ultrasound** has a frequency above 20 000 Hz. It is partly reflected at boundaries between materials.',
    'Uses: **scanning unborn babies**, cleaning delicate objects, and detecting flaws in metal. Echo-sounding measures the depth of the sea.',
    'It is non-ionising, so it is safe for imaging soft tissue.',
  ], mc('Why is ultrasound used instead of X-rays to scan an unborn baby?', [
    ['It does not ionise or damage cells', 'Correct.'],
    ['It travels faster than light', 'It does not.'],
    ['It is a transverse wave', 'Ultrasound is longitudinal.'],
    ['It has a higher frequency than X-rays', 'X-rays have a far higher frequency.'],
  ], 0)),
]);
