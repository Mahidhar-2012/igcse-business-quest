import { mc, ord, scn, calc, tfd, ao } from '../builders.js';

export const ct2 = {
  'u2-recruitment': {
    cards: [
      [ao(3, ord('A supermarket needs a new baker. Put the steps in a sensible order.', [
        'Vacancy identified',
        'Job description and person specification written',
        'Vacancy advertised',
        'Applicants shortlisted and interviewed',
        'Best candidate appointed',
      ], 'Defining the job and the person comes before advertising; selection follows applications.'))],
      [ao(3, mc('An advert says: “Must have 5 years’ experience, a food hygiene certificate and good teamwork skills.” An applicant asks what they would actually do each day. Which document should answer that?', [
        ['The job description (duties and responsibilities)', 'Correct: the advert’s requirements come from the person specification; duties are in the job description.'],
        ['The person specification', 'This lists the qualities needed, not the duties.'],
        ['The employment contract', 'Comes after appointment.'],
        ['A reference', 'Written by someone else about the candidate.'],
      ], 0))],
      [ao(4, mc('A small shop needs one cashier quickly and has a $200 budget. Which method is best-justified?', [
        ['A noticeboard or low-cost local online advert because it is cheap and reaches nearby applicants', 'Correct: matches budget and need.'],
        ['A national newspaper advert', 'Too costly for one cashier.'],
        ['An expensive recruitment agency', 'Fee is likely higher than the budget.'],
        ['No advert at all', 'No applicants can be attracted.'],
      ], 0))],
      [ao(4, mc('A firm must choose a safe forklift driver. Which selection method gives the most reliable evidence of ability?', [
        ['A practical skills test, then a reference', 'Correct: tests the real skill and checks past behaviour.'],
        ['The CV alone', 'Self-reported and may be exaggerated.'],
        ['An interview about hobbies', 'Not relevant to the skill.'],
        ['The application form only', 'Self-reported.'],
      ], 0))],
      [ao(4, scn('A hotel’s head chef has resigned. The sous-chef is loyal but has never managed a kitchen. An outside chef has led a larger kitchen. Which choice is best-justified if the hotel needs a new menu quickly?', [
        ['External recruitment: the experience and ideas are needed quickly, though cost and fit are uncertain', 'Matches the need for new ideas.', true],
        ['Internal recruitment because it is always cheaper', '“Always” ignores the need for new ideas.', false],
      ], 'Match the method to the business need.'))],
      [ao(4, mc('A bakery compares two applicants for an assistant job. A is cheaper ($8/hr) with no experience; B ($9.50/hr) has two years’ experience and the bakery is opening in a week. Which is best-justified?', [
        ['B, because experience reduces training time and mistakes during the busy launch', 'Correct: uses the situation.'],
        ['A, because the cheapest option is always best', '“Always” is unsupported.'],
        ['Neither, since both are applicants', 'Not an answer.'],
        ['A, because $1.50 is large', 'The cost is small compared with the benefit.'],
      ], 0))],
      [ao(4, mc('An employer wants to hire a graduate for a role needing high interpersonal skills. Which statement best evaluates using only a CV to choose?', [
        ['It is cheap and quick but cannot show personality or teamwork, so interviews or tests are needed too', 'Correct: weighs the method’s strengths and weaknesses.'],
        ['A CV is enough because it shows everything', 'A CV is self-reported and limited.'],
        ['A CV is useless', 'It is useful for shortlisting.'],
        ['A CV measures personality precisely', 'It does not.'],
      ], 0))],
      [ao(4, mc('A busy gym hires internally for a manager. Which statement is the most significant disadvantage?', [
        ['A vacancy is created elsewhere and no new ideas are brought in', 'Correct.'],
        ['The candidate does not know the gym', 'Internal candidates know the business.'],
        ['The process is slower than external recruitment', 'Usually faster.'],
        ['It is more expensive', 'Usually cheaper.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A software firm needs a data analyst who can start in two weeks. An internal programmer wants the job and has basic analytics skills; an external applicant has five years’ experience but wants a 30% higher salary. Which is best-justified?', [
        ['External: the experience is needed immediately and the higher pay is smaller than the cost of errors', 'Uses the urgency and skill need.', true],
        ['Internal because it is cheaper', 'Ignores the skills gap.', false],
      ], 'Evaluate using skills, cost and timing.')),
      ao(3, mc('An advert states the job but not the pay. Which is the most likely effect?', [
        ['Fewer suitable applicants apply, because they cannot judge if the job is worth it', 'Correct.'],
        ['More applicants apply', 'Unlikely.'],
        ['The advert becomes a job description', 'No.'],
        ['Selection is no longer needed', 'It is still needed.'],
      ], 0)),
      ao(4, mc('Which statement best supports using an assessment centre for choosing a team leader?', [
        ['It tests teamwork and leadership in realistic tasks, giving evidence beyond what applicants say', 'Correct.'],
        ['It is the cheapest method', 'It is usually expensive.'],
        ['It only shows qualifications', 'It shows skills.'],
        ['It removes bias completely', 'Bias can still exist.'],
      ], 0)),
      ao(3, tfd('A person specification and a job description are the same document.', 'false', 'The job description lists duties; the person specification lists the skills, qualifications and qualities needed.')),
      ao(4, mc('A shop owner has hired three people after only reading CVs. Two left within a month. What is the most likely cause?', [
        ['The selection process did not test fit or skills, so poor matches were hired', 'Correct.'],
        ['CVs always lie', 'Not always.'],
        ['The job was too easy', 'No evidence.'],
        ['Interviews are illegal', 'Untrue.'],
      ], 0)),
      ao(3, calc('A firm receives 120 applications. 25% are shortlisted and 20% of those are offered the job. How many people are offered the job?', 6, {
        unit: 'people',
        formula: 'Shortlisted = 120 × 25%; offers = shortlisted × 20%',
        steps: ['120 × 0.25 = 30 shortlisted', '30 × 0.20 = 6 offers'],
      })),
      ao(4, scn('A charity needs a fundraiser. An internal volunteer knows the cause but has no fundraising experience; an external candidate has proven success but asks for a high salary. The charity’s income is falling. Which is best-justified?', [
        ['Recruit externally on a trial basis, because falling income needs proven skills while salary can be linked to results', 'Balances need and cost.', true],
        ['Promote the volunteer because they care most', 'Passion alone may not fix falling income.', false],
      ], 'Weigh the problem (falling income) against cost.')),
      ao(3, mc('A job advert is placed on a website used mainly by young adults, but the vacancy is for an experienced manager. What is the most likely result?', [
        ['The advert may not reach the right candidates, wasting money', 'Correct.'],
        ['Many experienced managers apply', 'Unlikely.'],
        ['No job description is needed', 'It is still needed.'],
        ['The advert becomes cheaper', 'No.'],
      ], 0)),
    ],
  },

  'u2-contracts-training': {
    cards: [
      [ao(3, mc('A new employee says: “Nobody told me how many holiday days I get.” Which contract content was probably missing or unclear?', [
        ['Holiday entitlement', 'Correct.'],
        ['Duties and responsibilities', 'Not the issue stated.'],
        ['Sick pay', 'Not the issue stated.'],
        ['Working hours', 'Not the issue stated.'],
      ], 0))],
      [ao(4, mc('A manager wants to remove a clause on working hours so staff can be called in at any time. Which statement best explains why employees may object?', [
        ['The contract protects their rights, and changing it without agreement removes clear limits on their working time', 'Correct.'],
        ['Contracts are only for employers', 'They protect both sides.'],
        ['Contracts cannot be changed', 'They can, by agreement.'],
        ['Employees prefer unclear hours', 'Not supported.'],
      ], 0))],
      [ao(3, mc('A shop sacks a worker immediately after she complained that a machine was unsafe. Which employment issue is most clearly involved?', [
        ['Unfair dismissal and possibly health and safety law', 'Correct.'],
        ['Minimum wage', 'Not the issue.'],
        ['Discrimination only', 'Not stated.'],
        ['Induction', 'Not relevant.'],
      ], 0))],
      [ao(4, mc('The legal minimum wage rises 10%. A cleaning firm has 20 staff paid at the minimum for 40 hours a week at $10 an hour. By how much does its weekly wage bill rise, and what is the most likely effect?', [
        ['$800 a week; profit margins fall unless prices rise or productivity improves', 'Correct: 20 × 40 × $1 = $800.'],
        ['$80 a week; no effect', 'Miscalculated.'],
        ['$8,000 a week; the firm closes', 'Miscalculated.'],
        ['$0; wage rises do not affect wage bills', 'Wage rates change the wage bill.'],
      ], 0))],
      [ao(4, mc('A factory with high labour turnover spends little on training. Which statement is best justified?', [
        ['Training could raise skills and loyalty, reducing turnover and recruitment costs, although it costs money first', 'Correct: weighs short-term cost against benefit.'],
        ['Training always reduces profit', '“Always” is unsupported.'],
        ['Training has no effect on turnover', 'It often improves loyalty.'],
        ['Training is only for managers', 'Not true.'],
      ], 0))],
      [ao(4, mc('Two new bank clerks make cash-handling mistakes in week one. The bank had no induction. Which is the best analysis?', [
        ['Without induction they were unsure of procedures, so errors rose and customers lost confidence', 'Correct: a clear chain of reasoning.'],
        ['Mistakes are always caused by laziness', 'Unsupported.'],
        ['Induction is for managers only', 'Induction is for new starters.'],
        ['The mistakes show the bank needs no training', 'The opposite.'],
      ], 0))],
      [ao(4, scn('A hotel must train 10 staff to use a new booking system within two weeks. On-the-job training will slow service; off-the-job training costs $400 each. Peak season starts in three weeks. Which is best-justified?', [
        ['Train 2 key staff off-the-job, who then train the others on-the-job, balancing cost and speed', 'Balances cost, quality and timing.', true],
        ['Send all 10 off-the-job regardless of cost', 'May cost $4,000 and disrupt service.', false],
      ], 'Evaluate using timing, cost and effectiveness.'))],
      [ao(4, mc('A firm’s employees need to learn a new legal procedure. The trainer would be the only expert, and staff cannot leave the site. Which training is best-justified?', [
        ['Bring in a specialist to train on site, as off-the-job expertise without travel', 'Correct: fits the constraint.'],
        ['On-the-job training with the least experienced colleague', 'May pass on errors.'],
        ['No training', 'Risk of breaking the law.'],
        ['Induction training only', 'Induction is for new starters.'],
      ], 0))],
      // advantages / disadvantages cards
      [ao(4, mc('A call centre hires many new staff each month and has high turnover. Which training type should come first, and why?', [
        ['Induction, because it quickly orients new staff and reduces early mistakes and leaving', 'Correct.'],
        ['Off-the-job degree', 'Too slow and costly.'],
        ['No training', 'Likely to increase turnover.'],
        ['Management training', 'Not relevant to new starters.'],
      ], 0))],
      [ao(4, mc('A café owner argues: “Employment law only costs me money.” Which reply is best-supported?', [
        ['It raises costs but also reduces accidents, unfair dismissal claims and staff leaving, which can save money', 'Correct: balanced and evidence-based.'],
        ['She is right; laws have no benefits', 'Ignores benefits.'],
        ['Laws are for employees only', 'They also protect employers.'],
        ['Laws cannot be broken', 'They can be, with penalties.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A fast-food chain trains new staff only on the job. Mistakes are common and food safety inspections found two problems. Safety training costs $50 per person; fines are $5,000 per breach. Which is best-justified?', [
        ['Introduce formal induction on food safety for all new starters, because the cost is far smaller than potential fines', 'Uses the cost evidence.', true],
        ['Keep the system to save money', 'Risks much larger fines.', false],
      ], 'Compare cost of the action with cost of the problem.')),
      ao(3, calc('Off-the-job training costs $350 per employee for 12 employees. Each loses 1 day’s output worth $90. What is the total cost?', 5280, {
        unit: '$',
        formula: 'Total = course fees + lost output',
        steps: ['Fees = 350 × 12 = $4,200', 'Lost output = 90 × 12 = $1,080', '4,200 + 1,080 = $5,280'],
      })),
      ao(4, mc('A firm is accused of unfair dismissal after sacking a worker who was often late but was never warned. Which statement best explains the problem?', [
        ['Procedure: a fair reason AND fair process (warnings) are needed', 'Correct.'],
        ['Employers can sack without notice', 'Illegal in many cases.'],
        ['Lateness is never a reason', 'It can be, with proper process.'],
        ['Only contracts matter', 'Process matters too.'],
      ], 0)),
      ao(3, tfd('A written employment contract protects only the employee.', 'false', 'It also protects the employer by setting clear duties, hours and expectations.')),
      ao(4, mc('A business has trained staff who then leave for rivals. Which conclusion is best-supported?', [
        ['Training raises costs but may not pay off unless it is combined with reasons to stay, such as pay progression', 'Correct.'],
        ['Training is useless', 'Overstated.'],
        ['Staff should not be trained', 'Not justified.'],
        ['Rivals do not exist', 'Not stated.'],
      ], 0)),
      ao(3, mc('Which law is most directly designed to protect workers in a dangerous factory?', [
        ['Health and safety law', 'Correct.'],
        ['Minimum wage law', 'Pay, not safety.'],
        ['Discrimination law', 'Fair treatment.'],
        ['Unfair dismissal law', 'Job protection.'],
      ], 0)),
      ao(4, scn('A small bakery with 6 staff must choose between training all staff in customer service (cost $1,800, one-day closure) or training one supervisor and having them coach staff. Turnover is high. Which is best-justified?', [
        ['Train the supervisor and coach staff on the job: cheaper, no closure, and builds a lasting skill', 'Balances cost and effect.', true],
        ['Train everyone off-site', 'Costly and disruptive for a small firm.', false],
      ], 'A small business must weigh cost and disruption.')),
      ao(3, mc('Which is the most logical effect of an induction programme that clearly explains rules and safety?', [
        ['New staff make fewer mistakes and feel settled, reducing early resignations', 'Correct.'],
        ['Staff receive higher pay automatically', 'No.'],
        ['The business no longer needs contracts', 'No.'],
        ['Managers have more work and no benefit', 'Not supported.'],
      ], 0)),
    ],
  },

  'u2-organisation-management': {
    cards: [
      [ao(3, mc('A firm’s marketing department wants a bigger promotion budget while finance wants spending cuts. Which management function is most needed to resolve this?', [
        ['Coordinating', 'Correct: linking departments’ activities.'],
        ['Commanding', 'Giving instructions.'],
        ['Planning only', 'Planning sets goals but does not resolve the clash.'],
        ['Controlling', 'Checking results.'],
      ], 0))],
      [ao(3, calc('A hotel has a general manager, 3 department heads and 24 staff (8 per head). What is each department head’s span of control, and how many levels are there from top to bottom?', 8, {
        unit: 'staff per head',
        formula: 'Span of control = number of direct subordinates',
        steps: ['Each head supervises 8 staff → span of control = 8', 'Levels: general manager → heads → staff = 3 levels', 'Enter the span (8).'],
      }))],
      [ao(4, mc('A 400-employee firm has 9 levels of management. Messages often arrive late and altered. Which restructuring is best-justified?', [
        ['Remove some levels to create a flatter structure, speeding up communication, though managers’ spans widen', 'Correct: addresses the cause and recognises the trade-off.'],
        ['Add more levels', 'Worsens the problem.'],
        ['Reduce spans to 1', 'Makes it taller.'],
        ['Do nothing', 'The problem persists.'],
      ], 0))],
      [ao(3, mc('An organisation chart shows a director with three managers below, and each manager with five staff. Which statement is correct?', [
        ['The director’s span is 3 and there are three levels', 'Correct.'],
        ['The director’s span is 15', 'That is total staff, not direct reports.'],
        ['The director’s span is 5', 'That is each manager’s span.'],
        ['There are five levels', 'Only three levels.'],
      ], 0))],
      [ao(4, mc('A retailer has long quiet periods and a busy December. Which staffing choice is best-justified?', [
        ['A core of full-time staff plus part-time or flexible staff for peaks, to control cost while keeping service', 'Correct.'],
        ['Full-time staff only', 'Costly in quiet periods.'],
        ['Part-time staff only with no core', 'May lose consistency.'],
        ['No staff in December', 'Loses sales.'],
      ], 0))],
      [ao(3, mc('A manager compares last month’s sales with the target and orders extra promotion when sales are 15% below target. Which management function is this mainly?', [
        ['Controlling', 'Correct: checking results against plans and acting.'],
        ['Planning', 'Setting targets.'],
        ['Organising', 'Arranging resources.'],
        ['Commanding', 'Giving instructions.'],
      ], 0))],
      [ao(4, mc('A busy owner delegates payroll to an untrained assistant, who makes errors. Which statement is best justified?', [
        ['Delegation frees time but needs training and checking; the owner remains accountable for errors', 'Correct.'],
        ['The assistant alone is responsible', 'The manager remains accountable.'],
        ['Delegation should never be used', 'Unjustified.'],
        ['Delegation removes all risk', 'False.'],
      ], 0))],
      [ao(4, scn('A team of experienced doctors in a clinic must decide how to organise shifts. The manager can decide alone or consult the doctors. Which style is best-justified?', [
        ['Democratic: skilled staff have useful ideas and will follow decisions they helped make', 'Fits skilled professionals.', true],
        ['Autocratic: decisions are faster', 'May demotivate skilled staff when no emergency exists.', false],
      ], 'Match leadership style to people and situation.'))],
      [ao(4, mc('An airline cuts 300 jobs because demand has fallen 25%. Which is the best-justified way to choose who goes?', [
        ['Use clear criteria such as skills needed and roles no longer required, while following the law', 'Correct: fair and defensible.'],
        ['Choose staff the manager dislikes', 'Unfair and possibly illegal.'],
        ['Choose randomly with no criteria', 'May lose critical skills.'],
        ['Avoid any redundancy even if the firm fails', 'May threaten survival.'],
      ], 0))],
      [ao(4, mc('Workers in a factory want protection from a planned pay freeze. Which action by a trade union is most likely to help?', [
        ['Collective bargaining with management on behalf of all members', 'Correct.'],
        ['Setting product prices', 'Not its role.'],
        ['Hiring directors', 'Not its role.'],
        ['Printing company accounts', 'Not its role.'],
      ], 0))],
      // advantages / disadvantages cards
      [ao(4, mc('A start-up with 15 staff has 5 levels of management. Which change is most likely to improve speed and cut costs?', [
        ['A flatter structure, but managers must handle wider spans of control', 'Correct.'],
        ['More levels of hierarchy', 'Slower and costlier.'],
        ['Narrower spans with the same levels', 'Costly.'],
        ['No managers at all', 'Unrealistic.'],
      ], 0))],
      [ao(4, mc('A restaurant needs staff mainly at weekends. Which is the strongest argument FOR part-time staff?', [
        ['They give flexible cover at lower cost when it is quiet', 'Correct.'],
        ['They are always more experienced', 'Not necessarily.'],
        ['They never need training', 'They do.'],
        ['They guarantee loyalty', 'No guarantee.'],
      ], 0))],
      [ao(4, mc('A senior manager delegates all customer complaints to junior staff and later finds many unresolved. Which is the most likely cause?', [
        ['Staff were not trained or given authority, so delegation failed', 'Correct.'],
        ['Delegation always works', 'Not so.'],
        ['The staff were too motivated', 'Unlikely.'],
        ['Complaints do not exist', 'They do.'],
      ], 0))],
      [ao(4, mc('A factory has a fire alarm in a crowded building. Which style is best-justified at that moment?', [
        ['Autocratic: clear, fast instructions to protect people', 'Correct.'],
        ['Laissez-faire: let staff decide', 'Dangerous in an emergency.'],
        ['Democratic: hold a vote', 'Too slow.'],
        ['No leadership needed', 'Not true.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A marketing agency’s staff are creative and experienced and complain that the manager checks every detail. Output is slow and two designers have resigned. Which change is best-justified?', [
        ['Move toward a democratic or laissez-faire style with clear goals, giving skilled staff freedom', 'Addresses demotivation and turnover using the case.', true],
        ['Increase checking', 'Likely to worsen turnover.', false],
      ], 'Match style to skill and motivation.')),
      ao(3, mc('A firm increases a manager’s span of control from 5 to 15 without extra training or support. Which outcome is the most likely?', [
        ['Less supervision per person, risking mistakes unless staff are skilled and motivated', 'Correct.'],
        ['Faster promotion for all staff', 'Not necessarily.'],
        ['Narrower communication', 'Spans are wider.'],
        ['No effect', 'Supervision changes.'],
      ], 0)),
      ao(4, mc('A company wants to cut labour costs. Which option is best-justified if it wants to keep service quality?', [
        ['Automate repetitive tasks and retrain staff for customer-facing roles', 'Correct: reduces cost while protecting quality.'],
        ['Sack the most experienced staff', 'Risks quality.'],
        ['Stop training', 'Risks quality and morale.'],
        ['Cut all supervisors', 'Risks control.'],
      ], 0)),
      ao(3, tfd('A flat structure is always better than a tall structure.', 'depends', 'Flat structures give faster communication and lower cost, but tall structures allow closer supervision. The best choice depends on the business.')),
      ao(4, scn('A business can make 20 redundant (saving $400,000, but paying $80,000 in redundancy pay and risking morale) or reduce hours across all staff by 10%. Demand has fallen 15% and is expected to stay low. Which is best-justified?', [
        ['Redundancies, because demand is permanently lower and savings far exceed redundancy costs, with support for those leaving', 'Uses the evidence about demand and cost.', true],
        ['Reduce hours forever', 'Does not match permanent lower demand and may lose skilled staff.', false],
      ], 'Compare costs, benefits and the length of the problem.')),
      ao(3, mc('Which statement about trade unions is most accurate?', [
        ['They represent employees in negotiations on pay and conditions', 'Correct.'],
        ['They make all management decisions', 'No.'],
        ['They are owned by the employer', 'Independent.'],
        ['They guarantee no redundancies', 'No.'],
      ], 0)),
      ao(4, mc('A manager who delegates a task keeps which responsibility?', [
        ['Accountability for the outcome', 'Correct.'],
        ['None', 'Accountability stays.'],
        ['Payroll for the subordinate', 'Not relevant.'],
        ['Hiring the subordinate', 'Not relevant.'],
      ], 0)),
      ao(3, mc('Which statement is best supported by an organisation chart showing two levels below the director?', [
        ['The chain of command is short, so decisions pass quickly', 'Correct.'],
        ['The structure is very tall', 'Two levels is short.'],
        ['The span of control must be 1', 'Not shown.'],
        ['There are no subordinates', 'There are.'],
      ], 0)),
    ],
  },

  'u2-communication': {
    cards: [
      [ao(4, mc('A hospital’s new patient system is not explained to nurses. Errors increase. Which statement is the best analysis?', [
        ['Poor communication left nurses unsure of the procedure, so mistakes rose, risking patient safety and reputation', 'Correct: a chain with consequences.'],
        ['Communication has no effect on errors', 'Unsupported.'],
        ['Nurses always know systems', 'Not so.'],
        ['The patients caused the errors', 'Not stated.'],
      ], 0))],
      [ao(4, mc('A manager must tell 300 staff about a new safety rule today. Which method is best-justified?', [
        ['Email to all with a brief team talk, because it is fast, reaches everyone and allows questions', 'Correct.'],
        ['Letters posted to homes', 'Too slow.'],
        ['A single poster in one corridor', 'Does not reach all staff.'],
        ['A private meeting with each person', 'Too slow.'],
      ], 0))],
      [ao(4, mc('Which statement best evaluates using text messages to tell a worker about disciplinary action?', [
        ['It is quick but impersonal, unsuitable for sensitive matters, and lacks a clear record; a meeting is better', 'Correct.'],
        ['It is ideal because it is cheap', 'Cost is not the key issue.'],
        ['It is a formal method with a full record', 'Informal and limited.'],
        ['It guarantees understanding', 'No.'],
      ], 0))],
      [ao(3, mc('A business writes to a supplier to dispute an invoice. Which classification is correct?', [
        ['External, written communication', 'Correct.'],
        ['Internal, verbal communication', 'Suppliers are external and it is written.'],
        ['Internal, written communication', 'Suppliers are external.'],
        ['External, verbal communication', 'It is written.'],
      ], 0))],
      [ao(4, scn('A company is announcing redundancies to 40 staff. Options: send an email to all, hold a face-to-face meeting then follow up in writing, or post a notice. Which is best-justified?', [
        ['Meeting then written confirmation: sensitive, allows questions and provides a record', 'Meets sensitivity, understanding and legal needs.', true],
        ['Email only because it is fast', 'Impersonal for such news.', false],
        ['A notice', 'Public and inappropriate.', false],
      ], 'Choose the method by importance, sensitivity and need for a record.'))],
      [ao(3, mc('A factory’s instructions are written in technical language. New staff misuse a machine. Which barrier is most likely?', [
        ['Jargon', 'Correct.'],
        ['Short chain of command', 'Not a barrier.'],
        ['Feedback', 'Reduces barriers.'],
        ['Informal tone', 'Not the issue.'],
      ], 0))],
      [ao(4, mc('A business has frequent misunderstandings between head office and branches. Which reform is best-justified?', [
        ['Shorter chain of command plus a feedback step where branches confirm instructions', 'Correct: tackles distortion and confirms understanding.'],
        ['More levels of management', 'Increases distortion.'],
        ['Longer messages with technical terms', 'Worsens understanding.'],
        ['No communication', 'Worse.'],
      ], 0))],
      // advantages / disadvantages cards
      [ao(4, mc('A manager emails complex instructions to 50 staff and receives no replies. Which analysis is best?', [
        ['Email gave a record but no feedback, so understanding was not checked; a brief meeting could confirm it', 'Correct.'],
        ['Emails guarantee understanding', 'They do not.'],
        ['No instructions are needed', 'Not true.'],
        ['Staff dislike records', 'Not supported.'],
      ], 0))],
      [ao(4, mc('A small café wants to advertise a daily special to customers walking past. Which medium is best-justified for communicating it?', [
        ['A poster or board outside, because it is cheap and seen by passers-by', 'Correct.'],
        ['A formal letter to each resident', 'Costly and slow.'],
        ['A TV advert', 'Too expensive.'],
        ['A private phone call to every person', 'Impractical.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A global firm’s managers in different countries use different languages and jargon. Project deadlines are being missed. Which solution is best-justified?', [
        ['Agree a simple common language, use summaries and confirm key instructions with feedback', 'Targets the barrier and verifies understanding.', true],
        ['Send longer technical emails', 'Increases misunderstanding.', false],
      ], 'Address the actual barrier.')),
      ao(3, ord('Put the chain of reasoning for poor communication in order.', [
        'A long chain of command passes the message through many people',
        'The message becomes distorted',
        'Staff misunderstand instructions',
        'Errors occur and customers complain',
      ], 'Each link follows from the last.')),
      ao(4, mc('A manager prefers face-to-face meetings for everything. Which statement best evaluates this practice?', [
        ['Good for sensitive or complex issues, but slow and costly for routine information that email could handle', 'Correct.'],
        ['Meetings are always the best method', 'Over-generalised.'],
        ['Meetings are never useful', 'Untrue.'],
        ['Meetings cannot be two-way', 'They are two-way.'],
      ], 0)),
      ao(3, tfd('Feedback from the receiver helps to reduce communication barriers.', 'true', 'It confirms the message was received and understood so errors can be corrected.')),
      ao(4, mc('A retailer must tell customers about a product recall quickly. Which approach is best-justified?', [
        ['Email and social media for speed, plus in-store notices for those not online', 'Correct: reaches different audiences quickly.'],
        ['A letter only', 'Too slow.'],
        ['An annual report', 'Far too late.'],
        ['Waiting for complaints', 'Unsafe.'],
      ], 0)),
      ao(3, mc('Which is the most likely effect of information overload from too many emails?', [
        ['Important messages are missed or ignored', 'Correct.'],
        ['Communication becomes more effective', 'Opposite.'],
        ['Staff always read everything', 'Unlikely.'],
        ['Meetings are no longer needed', 'Not necessarily.'],
      ], 0)),
      ao(4, scn('A company’s CEO wants to inform 5,000 employees about a new bonus scheme and also needs their questions answered. Which approach is best-justified?', [
        ['Email announcement plus a live virtual Q&A session', 'Combines reach, record and two-way feedback.', true],
        ['Notice board only', 'One-way and may be missed.', false],
      ], 'Combine methods to match the audience and need.')),
      ao(3, mc('A letter to customers is best described as which type of communication?', [
        ['External and written', 'Correct.'],
        ['Internal and verbal', 'Wrong on both counts.'],
        ['Informal and instant', 'Letters are formal and slow.'],
        ['One that always gets feedback', 'Not necessarily.'],
      ], 0)),
    ],
  },

  'u2-motivation': {
    cards: [
      [ao(3, mc('A bank clerk says: “I stay in this job mainly because I enjoy helping customers and my team is friendly.” Which reason for working does this show?', [
        ['Job satisfaction and social needs, not only money', 'Correct.'],
        ['Money only', 'Not what she says.'],
        ['Fear of unemployment', 'Not stated.'],
        ['Government support', 'Not stated.'],
      ], 0))],
      [ao(4, mc('A firm has high absenteeism and 40% labour turnover. Which statement is best justified?', [
        ['Low motivation is likely raising costs through absences and recruitment, so improving motivation could improve productivity', 'Correct.'],
        ['High turnover reduces costs', 'It raises recruitment cost.'],
        ['Absenteeism improves productivity', 'No.'],
        ['Motivation has no effect', 'Unsupported.'],
      ], 0))],
      [ao(3, mc('A factory worker has a secure job and good pay but is isolated and says she has no friends at work. According to Maslow, which need is likely unmet?', [
        ['Social', 'Correct: belonging and friendship.'],
        ['Physiological', 'Pay covers this.'],
        ['Safety', 'Job is secure.'],
        ['Self-actualisation', 'Higher level.'],
      ], 0))],
      [ao(4, mc('A call centre uses strict targets, close supervision and pay per call. Which theory is it applying, and what is a likely weakness?', [
        ['Taylor; workers may be demotivated by pressure and lack of other rewards', 'Correct.'],
        ['Herzberg; workers become more creative', 'Not Herzberg.'],
        ['Maslow; workers focus on self-actualisation', 'Not Maslow.'],
        ['Laissez-faire; no targets', 'Opposite.'],
      ], 0))],
      [ao(4, mc('A company raises pay 5% but staff still complain about boring work and no recognition. Which analysis fits Herzberg?', [
        ['Pay is a hygiene factor; it reduces dissatisfaction but does not create motivation, which needs recognition and responsibility', 'Correct.'],
        ['Pay is the only motivator', 'Taylor’s view, not Herzberg’s.'],
        ['Recognition is a hygiene factor', 'Recognition is a motivator.'],
        ['Complaints prove staff are lazy', 'Unjustified.'],
      ], 0))],
      [ao(4, scn('A sales firm’s average pay is good but sales staff are not selling more. Management wants to link pay to results. Which method is best-justified?', [
        ['Commission on sales, because pay is directly linked to the output management wants', 'Fits sales roles.', true],
        ['Time-based pay only', 'No direct link to sales.', false],
      ], 'Match the pay method to the job.'))],
      [ao(4, mc('A hospital cleaner is bored and doing the same task for years. Which non-financial method is best-justified?', [
        ['Job rotation or enrichment, adding variety or responsibility', 'Correct: addresses boredom.'],
        ['A one-off bonus only', 'Does not fix boredom.'],
        ['Piece-rate pay', 'May not suit the job.'],
        ['Less training', 'Worsens it.'],
      ], 0))],
      [ao(4, scn('Two firms: (A) a car-seat factory with output counted per worker; (B) a law firm with highly skilled lawyers. Which motivation method is best matched?', [
        ['A: piece-rate; B: salary with promotion opportunities', 'Matches measurable output and professional careers.', true],
        ['A: salary only; B: piece-rate', 'Poor fit for each.', false],
      ], 'Match methods to jobs and people.'))],
      // advantages / disadvantages cards
      [ao(4, mc('A factory introduces piece-rate pay and defect rates rise. Which analysis is best?', [
        ['Workers rush to make more units, so quality falls; a quality bonus could balance this', 'Correct.'],
        ['Piece-rate always improves quality', 'Not supported.'],
        ['Defects are unrelated to pay', 'Pay affects behaviour.'],
        ['Workers should be paid for hours only', 'Not necessarily.'],
      ], 0))],
      [ao(4, mc('A firm cannot afford pay rises but needs to improve motivation. Which package is best-justified?', [
        ['Training, praise and promotion opportunities, because they cost little and meet higher-level needs', 'Correct.'],
        ['A large bonus for everyone', 'Not affordable.'],
        ['Cut pay and hope', 'Demotivating.'],
        ['No action', 'Does not solve the problem.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A restaurant’s waiters are paid a fixed wage and many leave after six months. The owner can raise wages 8% (cost $24,000 a year) or introduce training, a tips-share and employee-of-the-month (cost $6,000). Turnover costs $20,000 in replacement and training. Which is best-justified?', [
        ['The non-financial package, because it costs less and tackles recognition and development, which pay alone does not', 'Uses cost and theory.', true],
        ['The 8% rise because money is all that matters', 'Taylor-style assumption, costly.', false],
      ], 'Evaluate cost against likely benefit.')),
      ao(3, calc('A worker is paid $0.80 per unit. In a week she makes 520 units. What is her weekly pay, and if the time-rate alternative is $9 an hour for 40 hours, which is higher?', 416, {
        unit: '$',
        formula: 'Piece-rate pay = rate per unit × units',
        steps: ['0.80 × 520 = $416', 'Time rate: 9 × 40 = $360', 'Piece-rate gives $56 more this week — but only if she can maintain output.'],
      })),
      ao(4, mc('Which is the best-supported disadvantage of profit sharing as a motivator?', [
        ['Payouts depend on company profit, which staff cannot fully control, and rewards are delayed', 'Correct.'],
        ['It always motivates', 'Not always.'],
        ['It reduces teamwork', 'It usually increases it.'],
        ['It is illegal', 'Untrue.'],
      ], 0)),
      ao(3, tfd('According to Herzberg, a pay rise is the best way to create long-term motivation.', 'false', 'Pay is a hygiene factor that prevents dissatisfaction; real motivation comes from recognition, responsibility and achievement.')),
      ao(4, mc('A manager rotates warehouse staff between packing, loading and stock checking. Which is the most significant risk?', [
        ['Staff may need extra training and productivity can dip while they learn', 'Correct.'],
        ['Boredom increases', 'Rotation usually reduces it.'],
        ['Pay stops', 'Not related.'],
        ['The warehouse closes', 'Unsupported.'],
      ], 0)),
      ao(3, mc('Which employee is most likely to be motivated by the opportunity for promotion?', [
        ['A graduate who has secure pay and wants to develop a career', 'Correct: higher-level needs.'],
        ['A person whose priority is any job to pay for food', 'Basic needs first.'],
        ['A worker about to retire', 'Less likely.'],
        ['A volunteer with no career plans', 'Less likely.'],
      ], 0)),
      ao(4, scn('A firm has an autocratic manager and 35% staff turnover. Management wants to raise motivation cheaply within six months. Which action is best-justified?', [
        ['Give staff more responsibility in decisions affecting their work and recognise achievements', 'Targets motivators at low cost.', true],
        ['Add more supervisors', 'Increases control and cost.', false],
      ], 'Choose actions that address the cause at an affordable cost.')),
      ao(3, mc('A company offers free gym membership, a car and private health care to senior staff. These are examples of:', [
        ['Fringe benefits', 'Correct.'],
        ['Piece rate', 'Pay per unit.'],
        ['Commission', 'Pay per sale.'],
        ['Time rate', 'Pay per hour.'],
      ], 0)),
    ],
  },
};
