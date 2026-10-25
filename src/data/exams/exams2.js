import { P } from './helpers.js';

export const exams2 = {
  u2: [
    {
      id: 'u2-paper1',
      unitId: 'u2',
      paper: 1,
      title: 'Unit 2 · Paper 1 style questions',
      questions: [
        {
          stem: 'Tanvir owns a furniture factory with 40 workers. They are paid piece-rate, so output is high, but customers complain about poor finish and 12 workers left last year. Tanvir believes ‘money is all that matters’, but a manager says the workers want more responsibility and recognition.',
          parts: [
            P('a', 'Define', '‘labour turnover’.', 2,
              ['The rate/number at which employees leave a business', 'and have to be replaced (as a % of the workforce)'],
              'Labour turnover is the rate at which employees leave a business and need to be replaced, usually shown as a percentage of the total workforce.'),
            P('b', 'Identify', 'two financial methods of motivation Tanvir could use apart from piece-rate.', 2,
              ['Salary / time rate', 'Bonus / commission / profit sharing / fringe benefits (any two, 1 mark each)'],
              'A bonus for good quality and profit sharing.'),
            P('c', 'Outline', 'two benefits to Tanvir of having a well-motivated workforce.', 4,
              ['Higher productivity/output per worker (1) which lowers cost per unit (1)', 'Lower labour turnover (1) so less recruitment and training cost (1)', 'Fewer absences / better quality (1+1)', 'Greater willingness to accept change (1+1)'],
              'Well-motivated workers produce more per person, which lowers costs. They also stay longer, so Tanvir spends less on recruiting and training replacements.'),
            P('d', 'Explain', 'how Herzberg’s theory could help Tanvir to motivate his workers.', 6,
              ['Hygiene factors (pay, conditions) prevent dissatisfaction but do not motivate (2)', 'Motivators such as recognition, responsibility and achievement actually motivate (2)', 'Applied: give workers responsibility for finish/quality or recognition (2)'],
              'Herzberg says pay and conditions are hygiene factors that only stop dissatisfaction. The workers already get piece-rate pay, so more money will not motivate them. Real motivation comes from motivators like responsibility and recognition, so Tanvir could let teams check their own work quality and praise good craftsmanship, which would improve finish and cut turnover.'),
            P('e', 'Justify', 'your answer: Do you think changing from piece-rate to a monthly salary would improve motivation?', 6,
              ['Benefit of salary applied (more security so less rushing; focus on quality) (2)', 'Drawback applied (no reward for output so productivity may fall; wage cost fixed) (2)', 'Judgement (1)', 'Justification (e.g. other non-financial methods also needed) (1)'],
              'A salary would give security and remove the rush that damages finish, so quality could improve. However there is no direct reward for output, so some workers may slow down and costs would be fixed whatever is made. I think salary alone would not solve the problem; combining it with a quality bonus and more responsibility would work better, because the workers say they want recognition, not just pay.'),
          ],
        },
        {
          stem: 'Zara manages a 60-employee hotel. She makes all decisions herself (autocratic). Messages from Zara pass through five levels of management before reaching cleaners and kitchen staff. Guests have complained that room requests are not carried out and that staff seem confused by instructions.',
          parts: [
            P('a', 'Define', '‘span of control’.', 2,
              ['The number of subordinates', 'who report directly to a manager'],
              'The span of control is the number of subordinates who report directly to one manager.'),
            P('b', 'Identify', 'two barriers to communication that might exist at the hotel.', 2,
              ['Long chain of command / too many levels', 'Language differences / jargon / poor medium / information overload (any two, 1 mark each)'],
              'A long chain of command and unclear instructions (jargon).'),
            P('c', 'Outline', 'two problems of a tall organisational structure for the hotel.', 4,
              ['Slow communication (1) because messages pass through many levels (1)', 'Messages distorted (1) leading to mistakes (1)', 'High management costs (1+1)', 'Narrow spans mean staff are over-supervised (1+1)'],
              'In a tall structure, messages pass through many levels so communication is slow and instructions may be changed on the way. There are also many managers to pay, which raises costs.'),
            P('d', 'Explain', 'two ways Zara could reduce the communication barriers in the hotel.', 6,
              ['Shorten the chain of command / flatter structure (1) developed: fewer people pass messages so less distortion (2)', 'Use feedback / the right medium / simple language (1) developed: staff confirm they understood room requests (2)'],
              'Zara could remove some levels of management to create a flatter structure. Then instructions reach staff faster and with less change, so fewer guest requests are missed. She could also ask for feedback, for example staff repeating instructions or confirming by a short email, which shows the message was understood.'),
            P('e', 'Justify', 'your answer: Do you think Zara should change to a democratic leadership style?', 6,
              ['Advantage of democratic applied (staff ideas improve service, motivation) (2)', 'Disadvantage applied (slower decisions; guests need fast action) (2)', 'Judgement (1)', 'Justification (1)'],
              'A democratic style would let cleaners and kitchen staff suggest improvements and would motivate them, which should reduce confusion. But decisions might take longer in a busy hotel. I think Zara should move to a democratic style for non-urgent decisions because the problems come from staff not feeling involved, though she can still give direct orders in emergencies such as a fire.'),
          ],
        },
      ],
    },
    {
      id: 'u2-paper2',
      unitId: 'u2',
      paper: 2,
      title: 'Unit 2 · Paper 2 style case study: Lakeside Cycles',
      intro: {
        title: 'Lakeside Cycles',
        paragraphs: [
          'Lakeside Cycles is a private limited company that sells and repairs bicycles. It employs 12 staff in a shop and workshop. The owners, Chidi and Mara, are expanding and need a workshop manager. They have also bought a new electronic diagnostic machine and must train staff to use it.',
          'Mara’s note: ‘We need someone who can lead the workshop, improve repair quality and get on with staff. The last manager was dismissed for being rude to staff. We must follow the law on contracts and safety.’',
        ],
        table: {
          caption: 'Appendix 1: Two shortlisted applicants for workshop manager',
          head: ['', 'Applicant A: Ben (external)', 'Applicant B: Sita (internal)'],
          rows: [
            ['Experience', '8 years managing a workshop at a large cycle chain', '5 years as senior mechanic at Lakeside Cycles'],
            ['Qualifications', 'Management certificate', 'Mechanic’s certificate; no management training'],
            ['Pay requested', '$38,000', '$32,000'],
            ['Leadership style', 'Autocratic', 'Democratic'],
            ['References', 'Good; left because of redundancy', 'Excellent; respected by colleagues'],
          ],
        },
      },
      questions: [
        {
          parts: [
            P('a', 'Explain', 'two benefits to Lakeside Cycles of providing induction training for the new workshop manager and other new starters.', 8,
              ['Benefit identified (e.g. settles quickly / knows safety rules) (1)', 'Developed and applied to the workshop (e.g. fewer accidents when using tools) (3)', 'Second benefit identified (e.g. reduces labour turnover / meets staff) (1)', 'Developed and applied (new manager understands the team, avoids repeating the rudeness problem) (3)'],
              'Induction training teaches new starters safety rules, so in a workshop with tools and machinery there are fewer accidents and less costly downtime. It also introduces staff to colleagues and the firm’s way of working, so a new manager settles faster and is less likely to leave or clash with the team, reducing labour turnover.'),
            P('b', 'Justify', 'your choice: Compare Ben and Sita and decide which applicant Chidi and Mara should employ.', 12,
              ['Ben strengths using data (8 years’ experience, management certificate) (3)', 'Ben weaknesses (costs $6,000 more, autocratic style may demotivate, external so unknown) (3)', 'Sita strengths (internal, democratic, excellent references, cheaper $32,000, knows machines) (3)', 'Sita weaknesses (no management training) (2)', 'Clear decision (1)'],
              'Ben has the most management experience and a qualification, but he asks for $6,000 more and his autocratic style may demotivate staff after the last manager was dismissed for rudeness. Sita is cheaper, knows the business, is respected and has a democratic style that suits Mara’s wish for someone who gets on with staff, though she lacks management training. I recommend Sita because she fits the leadership and cost needs and can be given management training, while an external manager is a bigger risk.'),
          ],
        },
        {
          parts: [
            P('a', 'Explain', 'two effects of legal controls over employment (for example unfair dismissal laws and the minimum wage) on Lakeside Cycles and its employees.', 8,
              ['Effect on employer identified (higher costs / more careful procedures) (1)', 'Developed (must pay at least the minimum wage and follow dismissal procedures, so cost and paperwork rise) (3)', 'Effect on employees identified (protection / fairer pay) (1)', 'Developed (staff cannot be sacked unfairly, so job security and motivation rise) (3)'],
              'Laws such as the minimum wage raise Lakeside’s labour costs, and it must follow fair procedures before dismissing staff, which takes time. For employees, the laws give protection from unfair dismissal and a minimum pay level, so they feel more secure and motivated, which can improve repairs and customer service.'),
            P('b', 'Justify', 'your recommendation: Consider on-the-job training and off-the-job training for staff using the new diagnostic machine. Recommend which method Lakeside Cycles should use.', 12,
              ['On-the-job advantage applied (cheap, learn on real bikes, immediate use) (3)', 'On-the-job disadvantage applied (workshop slowed, trainer may not know machine well) (3)', 'Off-the-job advantage applied (specialist trainers from manufacturer, wider understanding) (3)', 'Off-the-job disadvantage applied (cost, staff away from a 12-person firm) (2)', 'Recommendation with justification (1)'],
              'On-the-job training is cheap and staff learn on real repairs, but it can slow the workshop and the trainer may not fully understand the new machine. Off-the-job training by the manufacturer gives expert instruction, but it costs money and takes staff away from a small team of 12. I recommend off-the-job training for one or two key mechanics, who can then train the others on the job, because the machine is expensive and complex, so expert training is worth the cost.'),
          ],
        },
      ],
    },
  ],
};
