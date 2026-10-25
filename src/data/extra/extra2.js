import { mc, ord, scn, calc, tfd } from '../builders.js';

export const extra2 = {
  'u2-recruitment': [
    scn('A supermarket needs a supervisor by Monday after one resigned. Staff already know the systems and two are keen to be promoted.', [
      ['Recruit externally through an agency', 'Slow, costly, and new staff need training on the systems.', false],
      ['Promote an internal candidate', 'Quick and cheap; they know the business and promotion motivates others (though a vacancy appears below).', true],
    ], 'Internal recruitment suits urgent roles where existing knowledge matters.'),
    mc('Which selection method is MOST reliable for checking a candidate’s past behaviour?', [
      ['References from a previous employer', 'Correct: independent evidence.'],
      ['CV', 'Written by the candidate, so may be exaggerated.'],
      ['Application form', 'Also self-reported.'],
      ['Job advert', 'Written by the employer, not about the candidate.'],
    ], 0),
    mc('A DISADVANTAGE of using interviews is…', [
      ['They are time-consuming and may suffer from interviewer bias', 'Correct.'],
      ['They cannot assess personality', 'They are good at this.'],
      ['They are done without meeting candidates', 'They are face-to-face or virtual.'],
      ['They are free', 'They cost staff time.'],
    ], 0),
    tfd('A job description lists the qualifications and personal qualities needed.', 'false', 'That is the person specification. The job description lists duties and responsibilities.'),
    mc('Using an employment agency to recruit is…', [
      ['Faster and expert-led, but fee-charging', 'Correct.'],
      ['Always free', 'Agencies charge fees.'],
      ['Only for internal vacancies', 'Agencies find external applicants.'],
      ['Guaranteed to find the best candidate', 'No method guarantees this.'],
    ], 0),
  ],
  'u2-contracts-training': [
    calc('Off-the-job training costs $400 per employee for 25 employees. Each employee also loses 2 working days worth $120 per day. What is the TOTAL cost of the training ($)?', 16000, {
      unit: '$',
      formula: 'Total cost = course fees + lost output',
      steps: ['Course fees = 400 × 25 = $10,000', 'Lost output = 25 × 2 × 120 = $6,000', '10,000 + 6,000 = $16,000'],
    }),
    mc('Which is most likely to be UNFAIR dismissal?', [
      ['Sacked after complaining about unsafe machinery', 'Correct: dismissing someone for a legitimate safety complaint is unfair.'],
      ['Sacked after repeated theft proven and warned', 'This is a fair reason.'],
      ['Contract ends as agreed', 'Not dismissal.'],
      ['Redundancy after the factory closes, with proper process', 'A legitimate reason followed correctly.'],
    ], 0),
    scn('A small firm wants to save money by skipping induction training for new starters.', [
      ['Skip induction to save cost', 'New staff are confused, make errors, risk accidents and may leave quickly, costing more.', false],
      ['Provide a short, structured induction', 'Small up-front cost; staff become productive and safe sooner and stay longer.', true],
    ], 'Induction training reduces mistakes and labour turnover.'),
    mc('A likely effect of stricter health and safety laws on an employer is…', [
      ['Higher costs for equipment and training, but fewer accidents', 'Correct.'],
      ['Lower costs with no other effect', 'Compliance costs money.'],
      ['More dismissals', 'No such link.'],
      ['No effect', 'It changes costs and behaviour.'],
    ], 0),
    tfd('Employment contracts only benefit the employer.', 'false', 'They give employees clarity on pay, hours and rights, and employers on duties and expectations.'),
  ],
  'u2-organisation-management': [
    mc('A company chart: CEO → 3 directors; the marketing director → 4 managers; each manager → 5 staff. What is the marketing director’s span of control?', [
      ['3', 'That is the CEO’s span.'],
      ['4', 'Correct: four managers report directly to the marketing director.'],
      ['5', 'That is each manager’s span.'],
      ['20', 'That is staff under the director in total, not direct reports.'],
    ], 1),
    mc('Using the same chart, how many LEVELS of hierarchy are there from CEO to staff?', [
      ['3', 'One level short.'],
      ['4', 'Correct: CEO, directors, managers, staff.'],
      ['5', 'One too many.'],
      ['12', 'Not a count of levels.'],
    ], 1),
    calc('A factory has 36 employees and 4 supervisors who each manage an equal number. What is each supervisor’s span of control?', 9, {
      unit: 'employees',
      formula: 'Span of control = employees ÷ supervisors',
      steps: ['36 ÷ 4 = 9 employees per supervisor'],
    }),
    mc('A DISADVANTAGE of a tall organisational structure is…', [
      ['Slow communication and decisions, and high management costs', 'Correct.'],
      ['Wide spans of control', 'Tall structures have narrow spans.'],
      ['A short chain of command', 'Tall = long chain.'],
      ['Faster promotion for everyone', 'Not necessarily.'],
    ], 0),
    scn('A team of highly skilled, motivated designers wants freedom to decide how to complete projects.', [
      ['Autocratic leadership with tight orders', 'Demotivates skilled staff who want freedom; creativity suffers.', false],
      ['Laissez-faire leadership', 'Matches their skill and motivation; they work independently and creatively.', true],
    ], 'Laissez-faire works with skilled, self-motivated staff; autocratic suits unskilled staff or emergencies.'),
    tfd('Redundancy is the same as dismissal for misconduct.', 'false', 'Redundancy happens because the job is no longer needed, not because of the employee’s behaviour.'),
    mc('A manager sets next year’s sales targets. Which management function is this?', [
      ['Planning', 'Correct: deciding goals and how to reach them.'],
      ['Controlling', 'Controlling checks performance against targets.'],
      ['Commanding', 'Commanding is giving instructions.'],
      ['Coordinating', 'Coordinating links activities of different departments.'],
    ], 0),
  ],
  'u2-communication': [
    mc('Best method to discuss a time-critical issue in real time with an overseas supplier?', [
      ['Phone or virtual meeting', 'Correct: immediate two-way discussion.'],
      ['Letter', 'Far too slow.'],
      ['Noticeboard', 'Not external or two-way.'],
      ['Poster', 'Not suitable.'],
    ], 0),
    mc('A letter sent to a customer is an example of…', [
      ['External written communication', 'Correct: outside the business, in writing.'],
      ['Internal communication', 'Customers are external.'],
      ['Verbal communication', 'It is written.'],
      ['A communication barrier', 'It is a method.'],
    ], 0),
    ord('Build the chain of reasoning for poor communication.', [
      'Poor communication between sales and production',
      'Orders are delayed',
      'Deliveries are late',
      'Customers lose trust and go elsewhere',
      'Sales fall',
    ], 'Communication failures flow through the business to customers and revenue.'),
    tfd('Feedback from the receiver helps reduce communication barriers.', 'true', 'It confirms the message was understood so errors can be corrected.'),
    mc('A multinational has staff who speak different languages. Which solution reduces this barrier?', [
      ['Use simple language, translations and visuals', 'Correct.'],
      ['Use more technical jargon', 'This worsens the barrier.'],
      ['Use longer chains of command', 'More chances for distortion.'],
      ['Remove feedback', 'Feedback helps.'],
    ], 0),
  ],
  'u2-motivation': [
    calc('A salesperson earns a $1,200 salary plus 4% commission on sales. Sales this month were $45,000. What is total pay ($)?', 3000, {
      unit: '$',
      formula: 'Pay = salary + (commission % × sales)',
      steps: ['Commission = 0.04 × 45,000 = $1,800', '1,200 + 1,800 = $3,000'],
    }),
    calc('An employee is paid time-rate at $9.50 per hour and works 38 hours. What is their pay ($)?', 361, {
      unit: '$',
      formula: 'Time-rate pay = hourly rate × hours worked',
      steps: ['9.50 × 38 = $361'],
    }),
    scn('Workers say pay is low and the factory is cold and unsafe. Turnover is high.', [
      ['Only give praise and “employee of the month” awards', 'Praise does not fix pay and conditions; dissatisfaction remains.', false],
      ['Improve pay and working conditions first, then add recognition', 'Fixes the hygiene factors that cause dissatisfaction (Herzberg) before motivators can work.', true],
    ], 'Herzberg: remove dissatisfaction (hygiene factors) first, then motivate with recognition and responsibility.'),
    mc('An employee has job security and good friends at work but wants recognition. Which Maslow need is this?', [
      ['Esteem needs', 'Correct: status and recognition.'],
      ['Safety needs', 'Already satisfied by job security.'],
      ['Social needs', 'Already satisfied by friends.'],
      ['Physiological needs', 'Already satisfied by pay.'],
    ], 0),
    mc('A drawback of profit sharing is…', [
      ['Payouts depend on profit, so it may not motivate if profits are low', 'Correct.'],
      ['It reduces teamwork', 'It usually encourages teamwork.'],
      ['It is illegal', 'It is legal.'],
      ['It guarantees high output', 'No guarantee.'],
    ], 0),
    tfd('Job rotation and job enrichment mean the same thing.', 'false', 'Rotation moves staff between similar tasks; enrichment gives more responsibility and challenge.'),
  ],
};
