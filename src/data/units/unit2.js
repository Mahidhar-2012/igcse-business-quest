import { mc, ord, scn, calc, tfd } from '../builders.js';

export const unit2 = {
  id: 'u2',
  number: 2,
  title: 'People in Business',
  short: 'People',
  emoji: '🧑‍🤝‍🧑',
  color: 'sky',
  submodules: [
    {
      id: 'u2-recruitment',
      title: 'Recruitment & Selection',
      syllabus: '2.1.1',
      microConcept: [
        'Job description = tasks and responsibilities of the job. Person specification = skills, qualifications and qualities needed. Then advertise (agency, online).',
        'Selection tools: CV, application form, references, tests/assessment centres, interviews.',
        'Internal: cheaper and faster, known staff, but creates another vacancy. External: fresh skills and ideas, but costlier and slower.',
      ],
      challenges: [
        mc('Which document lists the QUALITIES and qualifications an ideal candidate needs?', [
          ['Job description', 'This lists the duties and responsibilities of the job.'],
          ['Person specification', 'Correct: it describes the ideal person.'],
          ['Employment contract', 'This is signed after the offer.'],
          ['Reference', 'A reference is written by a previous employer or teacher.'],
        ], 1),
        ord('Order the recruitment process.', [
          'Vacancy identified',
          'Job description and person specification written',
          'Job advertised',
          'Applicants shortlisted from CVs/forms',
          'Interviews and tests held',
          'Best candidate appointed',
        ], 'Define the job first, attract applicants, filter, test, then appoint.'),
        tfd('Internal recruitment is always better than external recruitment.', 'depends', 'Internal is cheaper and motivating, but external brings new skills and ideas. The better choice depends on the situation.'),
        scn('A firm needs a manager to lead a move to online sales. Nobody on staff has digital skills.', [
          ['Promote a loyal long-serving employee', 'Cheap and motivating, but lacks the digital skills, so the project may fail.', false],
          ['Recruit externally', 'Costs more and takes longer, but brings the missing skills and fresh ideas.', true],
        ], 'Recommend using the context: when the needed skills do not exist inside the business, external recruitment is justified.'),
        mc('A benefit of recruiting online is…', [
          ['It reaches a wide pool of applicants quickly and cheaply', 'Correct.'],
          ['It guarantees the best candidate', 'No method guarantees this.'],
          ['It removes the need for interviews', 'Selection is still needed.'],
          ['It only attracts local candidates', 'Online reaches beyond the local area.'],
        ], 0),
      ],
    },
    {
      id: 'u2-contracts-training',
      title: 'Contracts, Laws & Training',
      syllabus: '2.1.2 – 2.1.3',
      microConcept: [
        'Employment contract: duties, hours, holiday, sick pay. Protects both sides. Laws cover unfair dismissal, discrimination, health & safety, minimum wage.',
        'Training: induction (new starters), on-the-job (learn while working, cheap, may be disruptive), off-the-job (outside experts, costly, time away).',
      ],
      challenges: [
        mc('Which training suits a brand-new employee on day one?', [
          ['Induction training', 'Correct: introduces the firm, rules, safety and colleagues.'],
          ['Off-the-job degree', 'Too advanced and too long for day one.'],
          ['Leadership course', 'Premature for a new starter.'],
          ['No training needed', 'New staff always need orientation.'],
        ], 0),
        calc('The legal minimum wage is $8 per hour. A firm employs 10 workers for 40 hours a week each at minimum wage. What is the weekly wage bill ($)?', 3200, {
          unit: '$',
          formula: 'Wage bill = hourly rate × hours × number of workers',
          steps: ['Hours in total = 10 × 40 = 400', '400 × $8 = $3,200'],
        }),
        ord('Build the chain of reasoning for training.', [
          'Training is implemented',
          'Worker skills improve',
          'Error rates drop',
          'Customer returns decline',
        ], 'Better skills → fewer mistakes → fewer faulty goods → fewer returns.'),
        tfd('A legal minimum wage can raise costs for employers.', 'true', 'It raises labour costs, though it protects workers and may improve motivation.'),
        scn('A factory buys an expensive CNC machine and needs staff to operate it safely within two weeks.', [
          ['On-the-job training from the supplier’s engineer', 'Quick and practical on the real machine, with no travel cost, though output dips while staff learn.', true],
          ['Send everyone on a month-long off-the-job course', 'Thorough but slow and costly; production loses workers for a month.', false],
        ], 'On-the-job is quick and cheap; off-the-job is thorough but costly. Match the choice to urgency and complexity.'),
        mc('Which is NOT usually in an employment contract?', [
          ['Working hours', 'This is a standard term.'],
          ['Holiday entitlement', 'This is a standard term.'],
          ['The company’s annual profit forecast', 'Correct: profit forecasts are not contract terms.'],
          ['Sick pay', 'This is a standard term.'],
        ], 2),
      ],
    },
    {
      id: 'u2-organisation-management',
      title: 'Organisation & Management',
      syllabus: '2.2',
      microConcept: [
        'Span of control = people a manager supervises. Tall structure: many levels, long chain of command, narrow spans. Flat: few levels, short chain, wide spans, faster communication.',
        'Management functions: planning, organising, coordinating, commanding, controlling. Styles: autocratic (boss decides), democratic (consults), laissez-faire (free rein).',
        'Downsizing may follow automation or falling demand. Trade unions represent employees on pay and conditions.',
      ],
      challenges: [
        mc('A manager directly supervises 12 employees. This is a…', [
          ['Narrow span of control', 'Narrow would be a small number of subordinates.'],
          ['Wide span of control', 'Correct: many subordinates means a wide span.'],
          ['Long chain of command', 'Chain length is about levels, not headcount.'],
          ['Tall hierarchy', 'Tall refers to the number of levels.'],
        ], 1),
        tfd('A flat organisational structure usually allows faster communication.', 'true', 'Fewer levels means messages pass through fewer people.'),
        scn('A fire breaks out in a factory. The manager must evacuate 200 people immediately.', [
          ['Hold a team vote on the evacuation route', 'Wastes critical time and creates confusion.', false],
          ['Give clear, direct orders (autocratic)', 'Fast and unambiguous — lives are protected.', true],
        ], 'Autocratic leadership suits emergencies and low-skilled urgent tasks; democratic suits creativity and skilled teams.'),
        mc('Which is a benefit of delegation?', [
          ['Managers free time for strategic work and staff gain motivation', 'Correct.'],
          ['Managers lose all responsibility', 'Ultimate accountability stays with the manager.'],
          ['It removes the need for training', 'Delegation needs trained staff.'],
          ['It always speeds up decisions', 'Poorly trained staff can slow or worsen decisions.'],
        ], 0),
        mc('A firm automates its production line and reduces staff. This is…', [
          ['Downsizing', 'Correct: reducing the size of the workforce, often via redundancy.'],
          ['Delegation', 'Delegation means passing authority down.'],
          ['Induction', 'Induction is training for new starters.'],
          ['Job rotation', 'Rotation moves staff between tasks.'],
        ], 0),
        mc('A benefit to employees of joining a trade union is…', [
          ['Collective bargaining for better pay and conditions', 'Correct.'],
          ['Guaranteed promotion', 'No union can guarantee this.'],
          ['No need to follow contracts', 'Contracts still apply.'],
          ['Higher shareholder dividends', 'Not a union function.'],
        ], 0),
      ],
    },
    {
      id: 'u2-communication',
      title: 'Communication',
      syllabus: '2.3',
      microConcept: [
        'Methods: meetings, email, text, social media, phone, letters, posters/noticeboards. Choose by speed, cost, privacy, record and audience.',
        'Barriers: jargon, language, wrong medium, long chains, information overload. Reduce by simplifying, feedback, shorter chains and the right medium.',
      ],
      challenges: [
        mc('Best method to discuss a sensitive disciplinary matter with ONE employee?', [
          ['Noticeboard', 'Public — the opposite of private.'],
          ['Face-to-face meeting', 'Correct: private, allows two-way discussion and tone.'],
          ['Social media post', 'Totally inappropriate and public.'],
          ['Group text message', 'Not private and easily misread.'],
        ], 1),
        ord('Build the chain of reasoning for a communication barrier.', [
          'Long chain of command',
          'Message is distorted as it passes along',
          'Staff misunderstand instructions',
          'Mistakes are made',
          'Customer complaints rise',
        ], 'Each extra layer adds distortion, which leads to errors and unhappy customers.'),
        tfd('Email is always the best way to communicate with staff.', 'depends', 'It is quick and records evidence, but not private enough or personal enough for every message.'),
        mc('Which is a communication barrier?', [
          ['Using technical jargon the receiver does not understand', 'Correct: the message is not understood.'],
          ['Giving feedback', 'Feedback helps overcome barriers.'],
          ['Using a short chain of command', 'This reduces barriers.'],
          ['Choosing the right medium', 'This reduces barriers.'],
        ], 0),
        scn('A firm must change staff contracts. Choose how to tell 50 staff.', [
          ['Send a text message', 'Quick, but too informal and complex terms get misunderstood; no chance to ask questions.', false],
          ['Hold meetings and follow up with a written letter', 'Allows questions and gives a written record; slower but clear.', true],
        ], 'For important or complex information, use a two-way method plus written confirmation.'),
      ],
    },
    {
      id: 'u2-motivation',
      title: 'Motivating Employees',
      syllabus: '2.4',
      microConcept: [
        'A motivated workforce: higher productivity, less absenteeism, lower labour turnover, more willing to accept change.',
        'Maslow: physiological → safety → social → esteem → self-actualisation. Taylor: money motivates. Herzberg: hygiene factors (pay, conditions) prevent dissatisfaction; motivators (recognition, responsibility) motivate.',
        'Financial: piece-rate, salary, bonus, commission, profit sharing. Non-financial: job enrichment, rotation, training, promotion, praise.',
      ],
      challenges: [
        ord('Order Maslow’s hierarchy from bottom (first needs) to top.', [
          'Physiological (food, pay for survival)',
          'Safety (job security)',
          'Social (teamwork, belonging)',
          'Esteem (status, recognition)',
          'Self-actualisation (reaching potential)',
        ], 'Lower needs must be satisfied before higher ones become strong motivators.'),
        calc('Workers are paid piece-rate: $0.50 per unit. A worker makes 640 units in a week. What is their pay ($)?', 320, {
          unit: '$',
          formula: 'Piece-rate pay = rate per unit × units made',
          steps: ['Rate = $0.50 per unit', '640 × 0.50 = $320'],
        }),
        mc('According to Herzberg, which is a HYGIENE factor?', [
          ['Pay and working conditions', 'Correct: they prevent dissatisfaction but do not truly motivate.'],
          ['Recognition for good work', 'This is a motivator.'],
          ['Chance of promotion', 'This is a motivator.'],
          ['More responsibility', 'This is a motivator.'],
        ], 0),
        tfd('Taylor believed money is the main motivator for workers.', 'true', 'Taylor (scientific management) argued pay linked to output drives performance.'),
        scn('A call-centre pays above-market wages but staff leave due to boredom doing identical calls.', [
          ['Raise pay again', 'Pay is already above market; this treats a hygiene factor and boredom remains.', false],
          ['Job enrichment: give staff more responsibility and varied tasks', 'Addresses the real cause. Staff feel challenged; turnover falls.', true],
        ], 'Match the method to the cause. Here the problem is lack of challenge, not pay (Herzberg).'),
        mc('Piece-rate pay best suits…', [
          ['Factory workers whose output can be counted', 'Correct: pay is linked to measurable units.'],
          ['A teacher', 'Output is hard to count.'],
          ['A security guard', 'Time-based pay suits this.'],
          ['A manager', 'Salary or bonus is more suitable.'],
        ], 0),
      ],
    },
  ],
};
