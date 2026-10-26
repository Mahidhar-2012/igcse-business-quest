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
          stemTitle: 'Question 1: Tanvir’s furniture factory',
          stem: 'Tanvir owns a furniture factory with 40 workers. They are paid piece-rate, so output is high, but customers complain about poor finish and 12 workers left last year. Tanvir believes ‘money is all that matters’, but a manager says the workers want more responsibility and recognition.',
          parts: [
            P('a', 'Define', '‘labour turnover’.', 2,
              ['K|The rate/number at which employees leave a business (1)', 'K|and need to be replaced (e.g. shown as a % of the workforce) (1)'],
              '[[K|Labour turnover is the rate at which employees leave a business]] [[K|and have to be replaced, usually shown as a percentage of the total workforce, for example 12 of 40 workers leaving in a year.]]'),
            P('b', 'Outline', 'two benefits to Tanvir’s factory of having a well-motivated workforce.', 4,
              ['K|Benefit 1: higher productivity / output per worker (1)', 'A|Applied (furniture, workers making tables/chairs) (1)', 'K|Benefit 2: lower labour turnover / less recruitment cost (1)', 'A|Applied (12 workers left last year; factory) (1)'],
              'Way 1: [[K|higher labour productivity]] [[A|so more furniture is made per worker.]] Way 2: [[K|lower labour turnover]] [[A|so fewer of the 40 workers have to be replaced, as 12 left last year.]]'),
            P('c', 'Explain', 'two ways Herzberg’s theory could help Tanvir to motivate his workers.', 6,
              ['K|Way 1: motivators such as responsibility / recognition (1)', 'A|Applied (workers want more responsibility; customers complain about finish) (1)', 'N|Analysis: giving them responsibility for quality makes them take more care, so finish improves and complaints fall (1)', 'K|Way 2: hygiene factors (pay/conditions) only prevent dissatisfaction (1)', 'A|Applied (piece-rate pay already provided; 12 workers left) (1)', 'N|Analysis: more money will not motivate them, so Tanvir should spend on motivators, which reduces turnover (1)'],
              '[[K|Herzberg says motivators such as responsibility and recognition create motivation.]] [[A|The workers want more responsibility and customers complain about the finish,]] [[N|so letting them check their own quality would make them take more care, which improves finish and cuts complaints.]] [[K|Pay and conditions are hygiene factors that only prevent dissatisfaction.]] [[A|The workers already earn piece-rate pay but 12 left,]] [[N|so more money would not motivate them, so using motivators instead would reduce turnover.]]'),
            P('d', 'Justify', 'your answer: Do you think changing from piece-rate to a monthly salary would improve motivation at the factory?', 8,
              ['K|Advantage of salary identified (security / less rushing) (1)', 'A|Applied (poor finish caused by rushing; furniture) (1)', 'N|Analysis: less pressure means more care, which improves quality and reputation (1)', 'K|Disadvantage identified (no reward for output) (1)', 'A|Applied (40 workers; output currently high) (1)', 'N|Analysis: output may fall, so sales and profit could fall as wage costs stay fixed (1)', 'E|Decision justified for this factory (1)', 'E|Rejects the alternative / explains why it is less suitable (1)'],
              '[[K|A salary gives workers security,]] [[A|so they no longer need to rush furniture to earn money,]] [[N|which should improve finish and the factory’s reputation.]] [[K|However there is no direct reward for output,]] [[A|so the 40 workers may produce less than now,]] [[N|which would reduce sales and profit while wages stay the same.]] [[E|I think a salary alone would not improve motivation enough; adding a quality bonus and more responsibility is better.]] [[E|Pay is a hygiene factor, and the manager says the workers want recognition, so a salary alone would not solve their dissatisfaction.]]'),
          ],
        },
        {
          stemTitle: 'Question 2: Zara’s hotel',
          stem: 'Zara manages a 60-employee hotel. She makes all decisions herself (autocratic). Messages from Zara pass through five levels of management before reaching cleaners and kitchen staff. Guests have complained that room requests are not carried out and that staff seem confused by instructions.',
          parts: [
            P('a', 'Define', '‘span of control’.', 2,
              ['K|The number of subordinates (1)', 'K|who report directly to a manager (1)'],
              '[[K|The span of control is the number of subordinates]] [[K|who report directly to one manager, for example a head chef supervising eight cooks.]]'),
            P('b', 'Outline', 'two problems of a tall organisational structure for the hotel.', 4,
              ['K|Problem 1: slow communication (1)', 'A|Applied (five levels; hotel messages) (1)', 'K|Problem 2: messages distorted / high management cost (1)', 'A|Applied (cleaners, kitchen staff, guests’ requests) (1)'],
              'Way 1: [[K|slow communication]] [[A|because messages pass through five levels before reaching cleaners.]] Way 2: [[K|messages become distorted]] [[A|so kitchen staff are confused by instructions.]]'),
            P('c', 'Explain', 'two ways Zara could reduce the communication barriers in the hotel.', 6,
              ['K|Way 1: shorten the chain of command / flatter structure (1)', 'A|Applied (five levels; 60 employees) (1)', 'N|Analysis: fewer people pass the message, so there is less distortion and guest requests are carried out (1)', 'K|Way 2: use feedback / the right medium (1)', 'A|Applied (room requests; cleaners and kitchen staff) (1)', 'N|Analysis: staff confirm they understood, so mistakes fall and guest complaints reduce (1)'],
              '[[K|Zara could remove levels of management to shorten the chain of command.]] [[A|At present messages pass through five levels in a 60-employee hotel,]] [[N|so fewer people would pass on instructions, causing less distortion, so more room requests would be carried out.]] [[K|She could use feedback.]] [[A|Cleaners and kitchen staff could repeat the instruction or confirm by message,]] [[N|which shows it was understood, so mistakes fall and guest complaints reduce.]]'),
            P('d', 'Justify', 'your answer: Do you think Zara should change to a democratic leadership style?', 8,
              ['K|Advantage of democratic identified (staff involved / ideas) (1)', 'A|Applied (kitchen staff confused; cleaners) (1)', 'N|Analysis: staff understand decisions, so they are more motivated and make fewer mistakes (1)', 'K|Disadvantage identified (slower decisions) (1)', 'A|Applied (guests’ urgent requests; 60 employees) (1)', 'N|Analysis: delays may annoy guests, which harms the hotel’s reputation (1)', 'E|Decision justified (1)', 'E|Rejects autocratic / explains why it is less suitable (1)'],
              '[[K|A democratic style involves staff in decisions,]] [[A|so kitchen staff and cleaners who are confused would be able to say what is unclear,]] [[N|which means they understand instructions and make fewer mistakes with guests.]] [[K|However decisions are slower,]] [[A|and guests often want quick action on requests,]] [[N|so delays could harm the hotel’s reputation.]] [[E|Overall Zara should move to a democratic style for non-urgent decisions because the problems come from staff not being involved.]] [[E|Autocratic leadership is less suitable because it caused the communication problems and kept all decisions with her; she can still give direct orders in emergencies such as a fire.]]'),
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
              ['K|Benefit 1: new staff settle quickly / know safety rules (1)', 'N|Analysis: they learn workshop safety, so fewer accidents (1)', 'N|Further analysis: less downtime and lower costs of injuries (1)', 'A|Applied (workshop, tools, bicycle repair) (1)', 'K|Benefit 2: lower labour turnover / meet colleagues (1)', 'N|Analysis: new manager understands the team, so avoids conflict as with the last manager (1)', 'N|Further analysis: staff stay longer, so recruitment and training costs fall (1)', 'A|Applied (12 staff; shop) (1)'],
              '[[K|Induction training teaches new starters safety rules and procedures.]] [[N|In a workshop with tools, this means fewer accidents,]] [[N|which means less downtime and lower costs from injuries.]] [[A|Bicycle repairs involve tools and machinery]] [[K|Induction also introduces the new manager to colleagues, which lowers labour turnover.]] [[N|The new manager will understand the team and avoid conflict like the previous rude manager,]] [[N|so staff stay longer, reducing recruitment and training costs.]] [[A|With only 12 staff, losing one person is very disruptive.]]'),
            P('b', 'Justify', 'your choice: Compare Ben and Sita and decide which applicant Chidi and Mara should employ.', 12,
              ['K|Identifies key differences (internal vs external, experience, pay, leadership) (2)', 'N|Ben analysed: strengths and weaknesses with impact (experience improves repairs; autocratic style could demotivate staff) (2)', 'N|Sita analysed: strengths and weaknesses with impact (knows team and machines; lacks management training) (2)', 'A|Application using data in the analysis (e.g. $38,000 vs $32,000; 8 years vs 5 years) (1)', 'A|Application in the conclusion (e.g. last manager dismissed for being rude) (1)', 'E|Clear decision justified (1)', 'E|Rejects the other applicant with a reason (1)', 'E|Further justification that is not a repeat (e.g. new calculation: Sita is $6,000 cheaper) (2)'],
              '[[K|Ben is external with 8 years’ management experience; Sita is internal with 5 years as senior mechanic.]] [[N|Ben’s experience and certificate should improve repair quality, but his autocratic style may demotivate staff.]] [[N|Sita knows the team, is respected and has a democratic style, but she has no management training, which may cause early mistakes.]] [[A|Ben asks for $38,000 and Sita $32,000.]] [[E|I recommend Sita.]] [[E|Ben is less suitable because his autocratic style could repeat the problem of the last manager who was rude to staff.]] [[E|Sita is $6,000 cheaper each year and can be sent on management training.]] [[A|This matches Mara’s wish for someone who gets on with staff after the last manager was dismissed.]]'),
          ],
        },
        {
          parts: [
            P('a', 'Explain', 'two effects of legal controls over employment (for example unfair dismissal laws and the minimum wage) on Lakeside Cycles and its employees.', 8,
              ['K|Effect on the employer: higher costs (minimum wage) / must follow procedures (1)', 'N|Analysis: wage bill rises, so profit margins fall (1)', 'N|Further analysis: it may need to raise prices, reducing competitiveness (1)', 'A|Applied (12 staff; bicycle shop/workshop) (1)', 'K|Effect on employees: protection from unfair dismissal / fair pay (1)', 'N|Analysis: staff feel more secure, so motivation rises (1)', 'N|Further analysis: better repairs and customer service, so sales increase (1)', 'A|Applied (workshop mechanics) (1)'],
              '[[K|Laws such as the minimum wage raise Lakeside’s labour costs.]] [[N|A higher wage bill reduces profit margins,]] [[N|so the firm may have to raise prices, which could reduce its competitiveness.]] [[A|It has 12 staff in a shop and workshop.]] [[K|For employees, laws protect them from unfair dismissal and set a minimum level of pay.]] [[N|They feel more secure, so they are more motivated,]] [[N|which leads to better repairs and customer service and higher sales.]] [[A|Mechanics in the workshop benefit from this.]]'),
            P('b', 'Justify', 'your recommendation: Consider on-the-job training and off-the-job training for staff using the new diagnostic machine. Recommend which method Lakeside Cycles should use.', 12,
              ['K|Identifies both methods and what they involve (2)', 'N|On-the-job analysed: advantage and disadvantage with impact (cheap, learn on real bikes; slows workshop/trainer may not know machine) (2)', 'N|Off-the-job analysed: advantage and disadvantage with impact (expert trainers; costly, staff away from a small team) (2)', 'A|Application in the analysis (e.g. electronic diagnostic machine; 12 staff) (1)', 'A|Application in the conclusion (e.g. bicycle repairs; workshop) (1)', 'E|Decision made and justified (1)', 'E|Rejects the alternative with a reason (1)', 'E|Further justification not repeating earlier points (e.g. train a few key mechanics then share knowledge) (2)'],
              '[[K|On-the-job training is learning while working; off-the-job is training away from work, for example by the manufacturer.]] [[N|On-the-job is cheap and staff learn on real bicycles, but the workshop slows down and the trainer may not understand the new machine fully.]] [[N|Off-the-job gives expert instruction, but it costs money and takes staff away from a small team.]] [[A|The electronic diagnostic machine is complex, and with 12 staff each absence matters.]] [[E|I recommend off-the-job training for one or two key mechanics.]] [[E|On-the-job alone is not best because untrained trainers could pass on mistakes with an expensive machine.]] [[E|The trained mechanics can then show the others on the job, spreading the knowledge at low cost.]] [[A|This keeps the workshop repairing bicycles while the machine is introduced.]]'),
          ],
        },
      ],
    },
  ],
};
