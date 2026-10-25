import { mc, ord, scn, calc, tfd, card } from '../builders.js';

export const cards2 = {
  'u2-recruitment': [
    card('The recruitment process', [
      'Steps: **identify vacancy → job description → person specification → advertise → shortlist → select (test/interview) → appoint**.',
      'Recruitment = attracting applicants. Selection = choosing the best one.',
    ],
      ord('Put the recruitment steps in order.', [
        'Vacancy identified',
        'Job description and person specification written',
        'Job advertised',
        'Applicants shortlisted',
        'Interviews held and candidate appointed',
      ], 'You must define the job before you can advertise it and choose someone.')),
    card('Job description vs person specification', [
      '**Job description**: job title, duties, responsibilities, who the job reports to.',
      '**Person specification**: qualifications, experience, skills and personal qualities needed.',
    ],
      mc('“Must have 3 years’ experience and fluent Spanish” would appear in the…', [
        ['Person specification', 'Correct: describes the ideal person.'],
        ['Job description', 'Lists duties.'],
        ['Employment contract', 'Comes after appointment.'],
        ['Reference', 'Written by a previous employer.'],
      ], 0)),
    card('Advertising vacancies', [
      '**Internal**: noticeboard, intranet, email.',
      '**External**: newspapers, online job sites, **employment agencies** (find and screen candidates, but charge a fee).',
      'Online ads reach many people cheaply and quickly.',
    ],
      mc('A benefit of an employment agency is that it…', [
        ['Saves the firm time by finding and screening candidates', 'Correct, though it charges a fee.'],
        ['Is always free', 'Fees apply.'],
        ['Only finds internal staff', 'Agencies find external staff.'],
        ['Guarantees the perfect hire', 'No guarantee.'],
      ], 0)),
    card('Selection methods', [
      '**CV / application form**: first filter for shortlisting.',
      '**References**: independent evidence from past employers.',
      '**Tests / assessment centres**: show practical skills and teamwork.',
      '**Interviews**: judge personality and communication (but time-consuming, may be biased).',
    ],
      mc('To check a candidate’s actual practical skills, the best method is a…', [
        ['Skills test or assessment centre', 'Correct.'],
        ['CV only', 'Self-reported.'],
        ['Job advert', 'Written by the employer.'],
        ['Reference only', 'Opinion of past behaviour.'],
      ], 0)),
    card('Internal vs external recruitment', [
      '**Internal** +: cheaper, quicker, known staff, motivates others. −: limited choice, creates another vacancy, no new ideas.',
      '**External** +: new skills and ideas, wider choice. −: costlier, slower, unknown fit.',
    ],
      mc('A disadvantage of INTERNAL recruitment is…', [
        ['A vacancy is created elsewhere and fresh ideas are limited', 'Correct.'],
        ['It costs far more', 'Usually cheaper.'],
        ['It takes the longest', 'Usually quicker.'],
        ['Nobody knows the candidate', 'The firm knows them.'],
      ], 0)),
    card('Recommending who to employ', [
      'Compare each candidate with the **job description and person specification**.',
      'Weigh experience, skills, cost, urgency and fit with the team.',
      'Always **justify** using evidence from the situation.',
    ],
      scn('A shop needs a cashier next week. Candidate A: 2 years’ experience, wants $9/hr. Candidate B: no experience, $8/hr, very keen.', [
        ['Candidate A', 'Experienced and productive immediately; the small pay difference is outweighed by less training and fewer errors.', true],
        ['Candidate B', 'Cheaper but needs training time when the shop needs someone quickly.', false],
      ], 'Justify with the situation: urgency and experience favour A.')),
  ],

  'u2-contracts-training': [
    card('The employment contract', [
      'A legal agreement between employer and employee.',
      'Main contents: **duties and responsibilities, working hours, holiday entitlement, sick pay** (plus pay and notice period).',
    ],
      mc('Which is a normal term of an employment contract?', [
        ['Holiday entitlement', 'Correct.'],
        ['The firm’s profit forecast', 'Not a term.'],
        ['Competitors’ prices', 'Not a term.'],
        ['Customer list', 'Not a term.'],
      ], 0)),
    card('Benefits of contracts', [
      '**Employer**: clear expectations, legal protection, fewer disputes.',
      '**Employee**: job security, clear rights and pay, proof of terms.',
    ],
      tfd('Employment contracts benefit both employers and employees.', 'true', 'They make rights and duties clear for both sides.')),
    card('Legal controls on employment', [
      '**Unfair dismissal**: employees cannot be sacked without a fair reason and process.',
      '**Discrimination**: no unfair treatment because of gender, age, race, disability, religion.',
      '**Health and safety**: a safe workplace.',
      '**Legal minimum wage**: the lowest hourly pay allowed.',
    ],
      mc('A firm refuses to promote a woman because of her gender. Which law is likely broken?', [
        ['Discrimination law', 'Correct.'],
        ['Minimum wage law', 'Not about pay level.'],
        ['Health and safety law', 'Not about safety.'],
        ['Tariff rules', 'Unrelated.'],
      ], 0)),
    card('Effects of legal controls', [
      '**Employers**: higher costs (wages, safety equipment, admin) but fewer accidents, better reputation and morale.',
      '**Employees**: protection, fair pay, safer conditions, security.',
    ],
      mc('A likely effect of a higher minimum wage on employers is…', [
        ['Higher labour costs', 'Correct.'],
        ['Lower labour costs', 'The opposite.'],
        ['No effect on costs', 'Wages are a cost.'],
        ['More unfair dismissals', 'No link.'],
      ], 0)),
    card('Why training matters', [
      '**Business**: higher productivity and quality, fewer errors, flexible staff, better retention.',
      '**Employees**: new skills, confidence, promotion chances, job security.',
    ],
      mc('Which is a benefit of training to a BUSINESS?', [
        ['Higher quality and fewer errors', 'Correct.'],
        ['Lower wages automatically', 'Not guaranteed.'],
        ['No need for managers', 'Not true.'],
        ['Guaranteed profit', 'No guarantee.'],
      ], 0)),
    card('Induction training', [
      'For **new starters**: introduces the business, rules, health and safety, and colleagues.',
      '+ Settles staff quickly, reduces mistakes and turnover. − Takes time and costs money.',
    ],
      mc('Induction training is for…', [
        ['New employees', 'Correct.'],
        ['Staff about to retire', 'Not the aim.'],
        ['Customers', 'Not employees.'],
        ['Directors only', 'For new starters.'],
      ], 0)),
    card('On-the-job training', [
      'Learning **while working**, usually from an experienced colleague.',
      '+ Cheap, relevant, no travel. − Output falls while learning; trainer may pass on bad habits; may not suit complex skills.',
    ],
      mc('A disadvantage of on-the-job training is…', [
        ['Productivity may fall and the trainer may pass on bad habits', 'Correct.'],
        ['It is very costly', 'It is usually cheap.'],
        ['It teaches irrelevant skills', 'Usually very relevant.'],
        ['It needs travel', 'It happens at work.'],
      ], 0)),
    card('Off-the-job training', [
      'Training **away from the workplace** (college, specialist course).',
      '+ Expert trainers, wider skills. − Costly, staff away from work, skills may not match the job.',
    ],
      mc('A key advantage of off-the-job training is…', [
        ['Specialist trainers and wider skills', 'Correct.'],
        ['It is cheaper than on-the-job', 'Usually costlier.'],
        ['No lost working time', 'Staff are away from work.'],
        ['It is always perfectly relevant', 'Not always.'],
      ], 0)),
  ],

  'u2-organisation-management': [
    card('Functional areas', [
      '**Operations** (production), **marketing**, **finance**, **human resources**.',
      'Each department specialises, and they must coordinate.',
    ],
      mc('Which department handles recruitment and training?', [
        ['Human resources', 'Correct.'],
        ['Finance', 'Money.'],
        ['Marketing', 'Promotion and customers.'],
        ['Operations', 'Production.'],
      ], 0)),
    card('Hierarchy, chain of command and span of control', [
      '**Hierarchy**: levels of authority from top to bottom.',
      '**Chain of command**: the route orders pass down.',
      '**Span of control**: number of subordinates a manager directly supervises.',
    ],
      calc('A manager directly supervises 7 staff. What is their span of control?', 7, {
        unit: 'staff',
        formula: 'Span of control = number of direct subordinates',
        steps: ['The span of control is the number reporting directly: 7'],
      })),
    card('Tall vs flat structures', [
      '**Tall**: many levels, long chain of command, narrow spans. + close supervision, promotion steps. − slow communication, high management cost.',
      '**Flat**: few levels, short chain, wide spans. + fast communication, cheaper. − heavy workload for managers, less supervision.',
    ],
      mc('Which describes a FLAT structure?', [
        ['Few levels and wide spans of control', 'Correct.'],
        ['Many levels and narrow spans', 'That is tall.'],
        ['Long chain of command', 'Tall.'],
        ['Slow communication', 'Tall.'],
      ], 0)),
    card('Reading organisational charts', [
      'Each box is a job; lines show who reports to whom.',
      'Count **levels** top to bottom; count the **boxes directly below** a manager for span of control.',
    ],
      mc('On a chart, a director has 3 managers directly below, each with 4 staff. What is the director’s span of control?', [
        ['3', 'Correct: three direct reports.'],
        ['4', 'That is each manager’s span.'],
        ['12', 'Total staff, not direct reports.'],
        ['7', 'Incorrect.'],
      ], 0)),
    card('Flexible working and staffing', [
      '**Flexible working**: home working, flexible hours. + happier staff, lower office costs. − harder to supervise.',
      '**Part-time**: flexible, fits busy periods; less commitment, more admin. **Full-time**: committed and skilled; costly when business is quiet.',
    ],
      mc('A reason a business might use part-time staff is…', [
        ['Flexibility to cover busy periods at lower cost', 'Correct.'],
        ['They always have higher skill', 'Not always.'],
        ['They never need training', 'They do.'],
        ['They are cheaper in every case', 'Not always.'],
      ], 0)),
    card('Functions of management', [
      '**Planning** (set goals), **organising** (arrange resources), **coordinating** (link departments), **commanding** (give instructions), **controlling** (check results against plans).',
    ],
      mc('Comparing actual sales with targets and taking corrective action is…', [
        ['Controlling', 'Correct.'],
        ['Planning', 'Setting goals.'],
        ['Commanding', 'Giving instructions.'],
        ['Organising', 'Arranging resources.'],
      ], 0)),
    card('Delegation', [
      '**Delegation** = passing authority and tasks to a subordinate (the manager keeps accountability).',
      '+ Frees managers, motivates and develops staff. − Loss of control, mistakes, needs trained staff.',
    ],
      tfd('When a manager delegates, they stop being responsible for the outcome.', 'false', 'Authority is passed down, but the manager remains accountable.')),
    card('Leadership styles', [
      '**Autocratic**: leader decides alone. + fast, clear (good in emergencies). − demotivating.',
      '**Democratic**: consults staff. + motivating, better ideas. − slower.',
      '**Laissez-faire**: staff decide themselves. + freedom for skilled staff. − lack of direction.',
    ],
      mc('A manager consults the team before making a decision. This is…', [
        ['Democratic leadership', 'Correct.'],
        ['Autocratic leadership', 'Leader decides alone.'],
        ['Laissez-faire', 'Leader leaves decisions to staff.'],
        ['Delegation only', 'Not a style.'],
      ], 0),
      scn('A new, inexperienced team must finish an urgent task with strict safety rules.', [
        ['Autocratic leadership', 'Clear instructions, fast decisions and safety control suit inexperienced staff and urgency.', true],
        ['Laissez-faire leadership', 'Inexperienced staff without direction risk mistakes and accidents.', false],
      ], 'Match style to context: urgency and low skill → autocratic.')),
    card('Downsizing and redundancy', [
      '**Downsizing** = reducing the size of the workforce. Reasons: **automation, falling demand, need to cut costs**.',
      '**Redundancy** = a job is no longer needed (not the employee’s fault). Costs: redundancy pay, low morale, loss of skills.',
      'To choose who goes, consider skills needed, performance and cost.',
    ],
      mc('A firm installs robots and no longer needs 20 assembly jobs. This is…', [
        ['Redundancy due to automation', 'Correct.'],
        ['Dismissal for misconduct', 'The workers did nothing wrong.'],
        ['Induction', 'Training for new starters.'],
        ['Delegation', 'Passing authority.'],
      ], 0)),
    card('Trade unions', [
      'A **trade union** is an organisation of workers that represents their interests.',
      'Benefits to members: **collective bargaining** over pay and conditions, legal support, a stronger voice.',
    ],
      mc('A trade union mainly helps employees by…', [
        ['Negotiating collectively for pay and conditions', 'Correct.'],
        ['Setting company prices', 'Not its role.'],
        ['Hiring managers', 'Not its role.'],
        ['Guaranteeing profit', 'Not its role.'],
      ], 0)),
  ],

  'u2-communication': [
    card('Why communication matters', [
      'Passes clear **instructions**, coordinates departments, motivates staff and keeps customers informed.',
      'Poor communication causes mistakes, delays and lost customers.',
    ],
      mc('Which is a benefit of good communication?', [
        ['Fewer mistakes and better coordination', 'Correct.'],
        ['More barriers', 'The opposite.'],
        ['Lower motivation', 'The opposite.'],
        ['Longer chains of command', 'Not a benefit.'],
      ], 0)),
    card('Methods of communication', [
      '**Meetings** (face-to-face or virtual), **email**, **text messages**, **social media**, **phone calls**, **letters**, **posters and noticeboards**.',
    ],
      mc('Which method is best for a quick message to all staff in a canteen with no computers?', [
        ['Noticeboard or poster', 'Correct: visible to everyone cheaply.'],
        ['Letter to each employee', 'Slow and costly.'],
        ['Virtual meeting', 'Needs equipment.'],
        ['Social media advert', 'Not suitable.'],
      ], 0)),
    card('Advantages and disadvantages of methods', [
      '**Meetings**: two-way, personal / time-consuming. **Email**: fast, record / overload, impersonal.',
      '**Phone**: immediate / no record. **Letters**: formal record / slow. **Social media**: wide reach / not private. **Notices**: cheap / one-way.',
    ],
      mc('A disadvantage of a phone call is that…', [
        ['There is no written record', 'Correct.'],
        ['It is slow', 'It is immediate.'],
        ['It is one-way only', 'It is two-way.'],
        ['It cannot be personal', 'It can be personal.'],
      ], 0)),
    card('Internal and external communication', [
      '**Internal**: inside the business (memos, meetings, intranet).',
      '**External**: with customers, suppliers, lenders and the public (letters, email, website, adverts).',
    ],
      mc('An email to a supplier about a late delivery is…', [
        ['External communication', 'Correct.'],
        ['Internal communication', 'Suppliers are outside.'],
        ['A barrier', 'It is a method.'],
        ['A noticeboard', 'No.'],
      ], 0)),
    card('Choosing the right method', [
      'Consider **urgency, cost, confidentiality, need for a record, size of audience and complexity**.',
      'Always justify using the situation.',
    ],
      scn('A manager must tell one employee confidential news about a promotion.', [
        ['Private face-to-face meeting', 'Confidential and personal, allows questions.', true],
        ['Notice on the staff noticeboard', 'Public and not confidential.', false],
      ], 'Match method to confidentiality and personal nature.')),
    card('Communication barriers', [
      'Examples: **jargon, language differences, noise/distance, wrong medium, information overload, long chains of command, poor listening**.',
      'Reasons: poor skills, cultural differences, technology failure, lack of feedback.',
    ],
      mc('Which is a communication barrier?', [
        ['Using technical jargon the receiver does not understand', 'Correct.'],
        ['Giving feedback', 'Reduces barriers.'],
        ['A short chain of command', 'Reduces barriers.'],
        ['Using clear language', 'Reduces barriers.'],
      ], 0)),
    card('Problems and solutions', [
      'Problems: **mistakes, delays, low morale, lost customers**.',
      'Solutions: **simple language, feedback, right medium, shorter chains, training**.',
    ],
      mc('Which action helps reduce communication barriers?', [
        ['Asking for feedback to confirm understanding', 'Correct.'],
        ['Using more jargon', 'Worsens it.'],
        ['Adding extra layers of management', 'Lengthens the chain.'],
        ['Removing all meetings', 'Removes two-way contact.'],
      ], 0)),
  ],

  'u2-motivation': [
    card('Why people work', [
      'Money, **security**, social contact, status, job satisfaction and a sense of purpose.',
      'Different people value different things, so one method does not fit all.',
    ],
      mc('Which is a reason people work, apart from money?', [
        ['Social contact and job satisfaction', 'Correct.'],
        ['To pay no tax', 'Not a reason.'],
        ['To avoid colleagues', 'Not a reason.'],
        ['To reduce productivity', 'Not a reason.'],
      ], 0)),
    card('Benefits of a motivated workforce', [
      '**Higher labour productivity**, **less absenteeism**, **lower labour turnover** and greater **willingness to accept change**.',
    ],
      mc('Which is a benefit of a well-motivated workforce?', [
        ['Lower labour turnover', 'Correct.'],
        ['More absenteeism', 'Opposite.'],
        ['Lower productivity', 'Opposite.'],
        ['Resistance to change', 'Opposite.'],
      ], 0)),
    card('Maslow’s hierarchy of needs', [
      'Five levels, lowest first: **physiological → safety → social → esteem → self-actualisation**.',
      'Workplace examples: pay → job security → teamwork → recognition/status → challenge and growth.',
      'People are motivated by the next unmet level.',
    ],
      mc('A worker already has pay and job security and now wants teamwork and friendship. Which need is this?', [
        ['Social', 'Correct.'],
        ['Physiological', 'Already met.'],
        ['Safety', 'Already met.'],
        ['Self-actualisation', 'Higher level, later.'],
      ], 0)),
    card('Taylor: scientific management', [
      'Taylor believed **money is the main motivator**.',
      'Tasks broken into simple steps, close supervision, **piece-rate pay**.',
      'Criticism: ignores non-financial needs; work becomes boring.',
    ],
      mc('Which method fits Taylor’s approach?', [
        ['Piece-rate pay linked to output', 'Correct.'],
        ['Job enrichment', 'Non-financial (Herzberg).'],
        ['Praise only', 'Non-financial.'],
        ['Job rotation', 'Non-financial.'],
      ], 0)),
    card('Herzberg: two-factor theory', [
      '**Hygiene factors** (pay, conditions, security, supervision): remove dissatisfaction but do NOT truly motivate.',
      '**Motivators** (achievement, recognition, responsibility, interesting work): create real motivation.',
    ],
      mc('According to Herzberg, which is a MOTIVATOR?', [
        ['Recognition and responsibility', 'Correct.'],
        ['Pay', 'Hygiene.'],
        ['Working conditions', 'Hygiene.'],
        ['Company rules', 'Hygiene.'],
      ], 0)),
    card('Financial methods of motivation', [
      '**Time-based** (per hour), **piece-rate** (per unit), **salary** (fixed per year), **bonus** (extra for results), **commission** (% of sales), **profit sharing**, **fringe benefits** (car, health care).',
    ],
      mc('Which pay method rewards a salesperson with a percentage of sales?', [
        ['Commission', 'Correct.'],
        ['Time-rate', 'Pay per hour.'],
        ['Salary', 'Fixed pay.'],
        ['Piece-rate', 'Pay per unit made.'],
      ], 0)),
    card('Non-financial methods of motivation', [
      '**Job enrichment** (more challenge/responsibility), **job rotation** (varied tasks), **training**, **promotion opportunities**, **praise/recognition**, **employee of the month**.',
    ],
      mc('Moving an employee between different tasks to reduce boredom is…', [
        ['Job rotation', 'Correct.'],
        ['Job enrichment', 'Adds responsibility.'],
        ['Commission', 'Financial.'],
        ['Piece-rate', 'Financial.'],
      ], 0)),
    card('Recommending a method', [
      'Match the method to the **job and the staff**: sales → commission; factory output → piece-rate; repetitive work → rotation or enrichment; skilled professionals → salary plus promotion and training.',
    ],
      scn('Office staff do the same data entry all day; pay is fair but they feel bored and turnover is rising.', [
        ['Job enrichment or rotation', 'Adds variety and challenge, addressing the real cause.', true],
        ['Piece-rate pay', 'Pressure on output may worsen boredom.', false],
      ], 'Match the method to the cause of demotivation.')),
  ],
};
