import { byte, mc } from '../helpers.js';
import { multi, match, cloze, short } from '../../../data/builders.js';

// Syllabus audit (Cambridge IGCSE Biology 0610, 2026 to 2028): bytes for objectives the first pass covered thinly.
// Appended to the lesson with the matching id (see ../index.js). Tests follow the hard-question standard.

export const extras = {
  'b9-heart': [
    byte('The cardiac cycle', [
      'The **atria contract first**, forcing blood through the **atrioventricular (AV) valves** into the **ventricles**. Then the **ventricles contract**: the AV valves **close** (stopping backflow into the atria, heard as the first heart sound) and the **semilunar valves open**, so blood leaves through the **aorta** and **pulmonary artery**.',
      'The semilunar valves then **close** to stop blood flowing back into the ventricles. The **atria have thinner walls** than the ventricles because they only push blood a short distance into the ventricles.',
    ], mc('What stops blood flowing back from the aorta into the left ventricle after the ventricle has contracted?', [
      ['The semilunar valve closes', 'Correct.'],
      ['The atrioventricular valve closes', 'This stops blood flowing back into the atrium.'],
      ['The septum contracts', 'The septum separates the two sides and does not move blood.'],
      ['The coronary artery closes', 'Coronary arteries supply the heart muscle.'],
    ], 0)),
  ],

  'b13-excretion': [
    byte('Kidney structure and its blood supply', [
      'Each kidney has an outer **cortex** (where blood is filtered) and an inner **medulla** (where the loops of Henle and collecting ducts lie). Blood enters through the **renal artery** and leaves through the **renal vein**; **urine** leaves through the **ureter**.',
      'The **renal vein** carries blood with **much less urea** than the renal artery, because urea has been filtered out and excreted.',
    ], mc('How does blood in the renal vein differ from blood in the renal artery?', [
      ['It contains much less urea, because the kidney removes it', 'Correct.'],
      ['It contains more oxygen, because the kidney adds oxygen to the blood', 'The kidney uses oxygen.'],
      ['It contains more glucose, because the kidney makes glucose', 'All glucose is reabsorbed, not made.'],
      ['It contains more urea, because the kidney makes urea from amino acids', 'The liver makes urea.'],
    ], 0)),
  ],

  'b14-senses': [
    byte('Sense organs and receptors', [
      '**Sense organs** are groups of **receptor cells** that respond to **specific stimuli**: **light** (eye), **sound** (ear), **touch** (skin), **temperature** (skin) and **chemicals** (nose and tongue).',
      'Each receptor changes the stimulus into **electrical impulses** that travel along **sensory neurones** to the brain.',
    ], match('Match each sense organ to the stimulus it detects.', [
      ['Eye', 'Light'],
      ['Ear', 'Sound'],
      ['Skin', 'Touch and temperature'],
      ['Nose and tongue', 'Chemicals'],
    ])),
  ],

  'b16-hormones': [
    byte('Where sex hormones are made', [
      '**Oestrogen** is made by the **ovaries**; **progesterone** is made by the **ovaries** (the empty follicle after ovulation) and, in **pregnancy**, by the **placenta**. **FSH** and **LH** are made by the **pituitary gland** at the base of the brain.',
      'Pregnancy test and contraception ideas: high **progesterone** keeps the uterus lining; stopping **FSH** release prevents eggs from maturing.',
    ], mc('Which organ makes FSH and LH?', [
      ['The pituitary gland', 'Correct.'],
      ['The ovaries', 'The ovaries make oestrogen and progesterone.'],
      ['The testes', 'The testes make testosterone.'],
      ['The pancreas', 'The pancreas makes insulin and glucagon.'],
    ], 0)),
  ],
};
