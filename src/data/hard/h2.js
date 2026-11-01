import { mc, multi, match, cloze, short, ao } from '../builders.js';

// Unit 2 (People in business): harder replacements and extra question types.

export const h2 = {
  replace: {
    // ---------- Recruitment and selection ----------
    'u2-recruitment:1': ao(3, mc('A job advert gives the duties and hours but leaves out the pay. What is the most likely effect?', [
      ['Strong candidates may not apply, because they cannot judge if the job is worth it', 'Correct: applicants usually compare pay before applying.'],
      ['More applicants apply, because they assume the pay must be above average', 'Missing pay normally puts people off.'],
      ['The firm saves on interview costs, because every applicant accepts the same pay', 'The pay is still unknown to applicants and will be negotiated.'],
      ['The advert becomes illegal, because pay must appear in every advert by law', 'Not usually required by law.'],
    ], 0)),
    'u2-recruitment:2': ao(4, mc('Which reason best supports using an assessment centre to choose a team leader?', [
      ['Realistic group tasks show leadership and teamwork that an interview cannot', 'Correct: observes behaviour, not just answers.'],
      ['It costs less than an interview, because several people are assessed at once', 'Assessment centres usually cost more than interviews.'],
      ['It removes the need for references, because all applicants are tested together', 'References are still normally taken up.'],
      ['It guarantees the best applicant is chosen, because many tests are used', 'No method guarantees this.'],
    ], 0)),
    'u2-recruitment:4': ao(4, mc('A shop owner hires three people after reading CVs only. Two leave within a month. What is the most likely cause?', [
      ['Selection did not test skills or fit, so the match to the job was poor', 'Correct: CVs alone do not show how people work or fit in.'],
      ['The job description was too accurate, so the staff found the job too easy', 'Accurate descriptions help staff know what to expect.'],
      ['CVs are illegal for small shops, so the hires were not on proper contracts', 'No such rule.'],
      ['Internal recruitment was used, so the hires already knew the shop too well', 'The hires were from outside, via CVs.'],
    ], 0)),
    'u2-recruitment:7': ao(3, mc('An advert for an experienced manager is placed on a website used mainly by young adults. What is the main problem?', [
      ['It may not reach suitable candidates, so the cost of the advert is wasted', 'Correct: the medium does not match the target audience.'],
      ['It will attract too many applicants, so shortlisting takes much longer', 'The audience is wrong, so the opposite is likely.'],
      ['It must break the law, because adverts cannot target an age group', 'The issue is reach, not legality.'],
      ['It makes internal candidates ineligible, because adverts are for outsiders only', 'Internal staff can see adverts too.'],
    ], 0)),
    'u2-recruitment:c1.0': ao(2, mc('An advert says: “Must have 5 years’ experience, a food hygiene certificate and good teamwork skills.” What is this part of an advert drawn from?', [
      ['The person specification, which lists qualities needed', 'Correct: qualifications, experience and skills.'],
      ['The job description, which lists duties and responsibilities', 'That describes what the job involves.'],
      ['The contract of employment, which lists the pay and holiday', 'That is agreed after selection.'],
      ['The induction plan, which lists training for new staff', 'That comes after being hired.'],
    ], 0)),
    'u2-recruitment:c2.0': ao(4, mc('A small shop needs a cashier quickly and has $200 for advertising. Which method is best justified?', [
      ['A low-cost local online advert and a shop-window notice, because it is cheap and reaches local people', 'Correct: fits the budget and the area.'],
      ['A national newspaper advert, because it reaches the most potential candidates', 'Too expensive for a $200 budget.'],
      ['A recruitment agency, because the shop can leave all of the work to them', 'Agencies charge high fees.'],
      ['An assessment centre of three days, because it finds the most suitable person', 'Too slow and costly for one cashier.'],
    ], 0)),
    'u2-recruitment:c3.0': ao(3, mc('A firm must choose a safe forklift driver. Which selection method gives the most reliable evidence of ability?', [
      ['A practical test on a forklift, followed by a check of references', 'Correct: tests the actual skill.'],
      ['A short telephone chat about previous work, followed by a handshake', 'Does not test ability.'],
      ['A long application form with detailed questions on interests and hobbies', 'Hobbies say little about driving skill.'],
      ['A group discussion about safety, followed by a written personality quiz', 'Does not show driving skill.'],
    ], 0)),
    'u2-recruitment:c5.0': ao(4, mc('Applicant A costs $8 an hour and has no experience; B costs $9.50 and has two years’ experience. Which choice is best supported?', [
      ['B, because experience may cut training time and errors in the first months', 'Correct: weighs the extra cost against the benefits.'],
      ['A, because the cheaper wage always gives the lower cost per unit of output', 'Low pay may lead to training costs and mistakes.'],
      ['A, because untrained workers are always more motivated than experienced ones', 'Not supported.'],
      ['B, because a higher wage means the person is certain to stay long term', 'No certainty.'],
    ], 0)),
    'u2-recruitment:c6.0': ao(4, mc('An employer wants a graduate for a role needing strong interpersonal skills and decides to use only a written application. Which evaluation is best?', [
      ['It is cheap and quick, but cannot show personality or teamwork', 'Correct.'],
      ['It is slow and costly, but gives the clearest picture of how people work', 'A written form is not slow or costly.'],
      ['It is fair and complete, because the same questions are asked of everyone', 'It still misses interpersonal skills.'],
      ['It is unnecessary, because graduates always have good interpersonal skills', 'No such guarantee.'],
    ], 0)),
    'u2-recruitment:c7.0': ao(4, mc('A busy gym fills a manager’s job with an existing member of staff. Which is the most significant disadvantage?', [
      ['A vacancy appears elsewhere in the gym and no fresh ideas come from outside', 'Correct: the gap moves and there are no outside ideas.'],
      ['The advert has to be paid for in a national newspaper to find the candidate', 'Internal recruitment is usually cheaper.'],
      ['The new manager needs a long induction, as they do not know the business', 'They already know it.'],
      ['The firm must give the person a higher wage than the job was worth', 'Not necessarily.'],
    ], 0)),

    // ---------- Contracts and training ----------
    'u2-contracts-training:2': ao(4, mc('A firm sacks a worker who was often late, but never gave a warning. A tribunal is likely to say that the dismissal was…', [
      ['Unfair because the process was not followed, even if the reason was fair', 'Correct: a fair reason and a fair procedure are both needed.'],
      ['Fair because lateness is always enough to justify dismissal at once', 'Procedure (warnings) is also required.'],
      ['Unfair because the worker was not paid for the final week of notice', 'The scenario is about the lack of warnings.'],
      ['Fair because the worker would have had to agree to the dismissal first', 'Agreement is not required.'],
    ], 0)),
    'u2-contracts-training:4': ao(4, mc('A business trains staff who then leave for rivals. Which conclusion is best supported?', [
      ['Training raises costs and only pays off if it is combined with reasons to stay', 'Correct.'],
      ['Training is a waste for every business, because workers will always leave', 'Too general.'],
      ['Training should stop at once, because skilled staff are never cheaper', 'Skilled staff may add value.'],
      ['The rivals must pay the firm back, because they have gained trained staff', 'No such rule.'],
    ], 0)),
    'u2-contracts-training:5': ao(2, mc('Which law is designed most directly to protect workers using dangerous machinery?', [
      ['Health and safety law', 'Correct.'],
      ['Minimum wage law', 'This sets a minimum rate of pay.'],
      ['Consumer protection law', 'This protects customers.'],
      ['Competition law', 'This controls business behaviour in markets.'],
    ], 0)),
    'u2-contracts-training:7': ao(3, mc('A new induction programme explains the rules and safety on day one. Which effect is most logical?', [
      ['New staff make fewer mistakes and settle sooner, so early leaving falls', 'Correct.'],
      ['Experienced staff become more skilled at specialised tasks within a week', 'Induction is for new staff.'],
      ['The firm no longer needs any further training for these workers', 'Induction is only the start.'],
      ['Wage costs fall at once, because induction replaces paid working hours', 'Induction takes paid time.'],
    ], 0)),
    'u2-contracts-training:c0.0': ao(2, mc('A new employee says: “Nobody told me how many days of holiday I get.” Which part of the contract was probably missing or unclear?', [
      ['Holiday entitlement', 'Correct.'],
      ['Probation period', 'This is a trial period.'],
      ['Dress code', 'This covers uniform, not leave.'],
      ['Job title', 'This names the role.'],
    ], 0)),
    'u2-contracts-training:c1.0': ao(3, mc('A manager wants to delete the working hours clause so that staff can be called in at any time. Which statement is best?', [
      ['The contract protects the staff’s rights, and changing it needs agreement', 'Correct.'],
      ['Managers can change any contract wording they like, without telling staff', 'Changes need agreement.'],
      ['The clause only protects the firm, so deleting it harms nobody else', 'It protects employees.'],
      ['Only government officials may change an employment contract’s wording', 'Not true.'],
    ], 0)),
    'u2-contracts-training:c2.0': ao(3, mc('A shop sacks a worker straight after she said a machine was unsafe. Which issue is most relevant?', [
      ['Unfair dismissal, and possibly breaking health and safety law', 'Correct.'],
      ['A fair dismissal, because staff must not criticise machinery', 'Raising safety concerns is protected.'],
      ['A redundancy, because the firm no longer needs her work', 'Her job did not disappear.'],
      ['A resignation, because she chose to speak out about the machine', 'She was sacked.'],
    ], 0)),
    'u2-contracts-training:c3.0': ao(3, mc('The minimum wage rises 10%. A cleaner firm has 20 staff on $10 an hour for 40 hours a week. How much more does its weekly wage bill become, and what is the effect?', [
      ['$800 a week more; margins fall unless prices or productivity rise', 'Correct: 20 × 40 × $1 = $800.'],
      ['$80 a week more; margins fall unless prices or productivity rise', 'Calculation error: it is $800, not $80.'],
      ['$800 a week more; margins rise because workers are better motivated', 'Cost rises first; benefits are uncertain.'],
      ['$8,000 a week more; margins fall unless prices or productivity rise', 'Calculation error: ten times too large.'],
    ], 0)),
    'u2-contracts-training:c4.0': ao(4, mc('A factory has high labour turnover and spends little on training. Which statement is best justified?', [
      ['Training might raise skills and loyalty, cutting the cost of replacing staff', 'Correct.'],
      ['Training would raise turnover, because skilled staff are always more mobile', 'Not always.'],
      ['Training is only useful for new staff in their first week', 'It also helps existing staff.'],
      ['Turnover has no cost to a business, because new staff are cheaper', 'Replacement has costs.'],
    ], 0)),
    'u2-contracts-training:c5.0': ao(3, mc('Two new bank clerks make cash-handling errors in week one; the bank gave no induction. Which analysis is best?', [
      ['Without induction they were unsure of procedures, so errors were likely', 'Correct.'],
      ['Cash handling cannot be taught, so the errors were bound to happen', 'It can be taught.'],
      ['Off-the-job training would have caused the errors to rise even more', 'Not supported.'],
      ['The clerks must be dismissed, because errors show they are unsuitable', 'Premature.'],
    ], 0)),
    'u2-contracts-training:c7.0': ao(4, mc('A firm’s staff must learn a new legal procedure. The trainer is the only expert, and the firm cannot spare staff for a week. Which is best?', [
      ['A specialist trainer on site, as off-the-job expertise is needed without lost days', 'Correct.'],
      ['Learning by watching colleagues, since nobody else knows the procedure', 'No one in the firm knows it.'],
      ['No training at all, because staff will learn the law by making mistakes', 'Risky for legal compliance.'],
      ['A week at a distant college for every employee at the same time', 'Cannot spare staff.'],
    ], 0)),
    'u2-contracts-training:c8.0': ao(4, mc('A call centre hires many new staff every month and has high turnover. Which type of training should come first?', [
      ['Induction, because it orients new staff and helps them settle quickly', 'Correct.'],
      ['Off-the-job leadership courses, because every new starter needs them', 'Not for new starters.'],
      ['Retirement planning courses, because turnover is mainly an age problem', 'Not relevant.'],
      ['No training, because staff who leave would waste the money spent', 'Induction is low-cost.'],
    ], 0)),
    'u2-contracts-training:c9.0': ao(4, mc('A café owner says: “Employment law only costs me money.” Which reply is best supported?', [
      ['It raises costs, but it also cuts accidents, disputes and staff leaving', 'Correct: balanced.'],
      ['It only costs money for large firms, so small cafés are not affected', 'It applies to small firms too.'],
      ['It has no effect on costs, because the government pays all the extra', 'Firms bear the costs.'],
      ['It is optional, so the owner can ignore any rule that costs money', 'Compliance is legally required.'],
    ], 0)),

    // ---------- Organisation and management ----------
    'u2-organisation-management:1': ao(3, mc('A manager’s span of control rises from 5 to 15 with no extra training or support. Which outcome is most likely?', [
      ['Less supervision per person, so mistakes may rise unless staff are skilled', 'Correct.'],
      ['More supervision per person, because the manager meets staff more often', 'It is the reverse.'],
      ['A taller structure, because more levels of management are being added', 'A wider span usually makes it flatter.'],
      ['A shorter chain of command, so the manager keeps total control', 'Chain length is not directly affected.'],
    ], 0)),
    'u2-organisation-management:2': ao(4, mc('A firm wants to cut labour costs but keep service quality. Which option is best justified?', [
      ['Automate repetitive tasks and retrain staff for customer-facing work', 'Correct.'],
      ['Cut all customer-facing staff and rely on a recorded telephone message', 'Quality would fall.'],
      ['Freeze pay and training together so that costs stop rising at once', 'May reduce motivation and skills.'],
      ['Replace every skilled worker with the cheapest labour available', 'Quality is likely to fall.'],
    ], 0)),
    'u2-organisation-management:5': ao(2, mc('Which statement about trade unions is most accurate?', [
      ['They represent employees when negotiating pay and conditions with employers', 'Correct.'],
      ['They set the minimum wage and decide employers’ dismissal procedures', 'The government sets the minimum wage.'],
      ['They manage the firm and take the decisions about production for owners', 'Not their role.'],
      ['They are owned by employers and report to the firm’s shareholders', 'They represent employees.'],
    ], 0)),
    'u2-organisation-management:6': ao(2, mc('A manager delegates a task to an assistant. Which does the manager still hold?', [
      ['Accountability for the outcome', 'Correct: responsibility can be passed on, accountability cannot.'],
      ['Authority to decide how the assistant does every step', 'Authority is passed on.'],
      ['The right to avoid answering to senior managers', 'No.'],
      ['Responsibility for the work the assistant now does', 'Responsibility is delegated.'],
    ], 0)),
    'u2-organisation-management:7': ao(3, mc('An organisation chart shows only two levels below the director. Which is best supported?', [
      ['The chain of command is short, so decisions can pass quickly', 'Correct.'],
      ['The structure is tall, so decisions will be slow and often distorted', 'Two levels is flat.'],
      ['The director has a narrow span of control over all employees', 'Not shown.'],
      ['There is no delegation in the firm, because there are few levels', 'Not shown.'],
    ], 0)),
    'u2-organisation-management:c0.0': ao(3, mc('Marketing wants a larger promotion budget while finance wants cuts. Which management role resolves this?', [
      ['Coordinating', 'Correct: bringing departments together.'],
      ['Planning', 'Setting future targets.'],
      ['Controlling', 'Measuring results against targets.'],
      ['Commanding', 'Giving instructions.'],
    ], 0)),
    'u2-organisation-management:c2.0': ao(4, mc('A 400-employee firm has nine levels of management and messages arrive late and changed. Which restructuring is most justified?', [
      ['Remove some levels to give a flatter structure with wider spans', 'Correct.'],
      ['Add further levels so that every manager has only two staff', 'Makes the problem worse.'],
      ['Stop all written messages and use only verbal ones for speed', 'Does not fix the structure.'],
      ['Move the chain of command outside the business to a consultant', 'Not suitable.'],
    ], 0)),
    'u2-organisation-management:c3.0': ao(3, mc('A director has three managers, each with five staff. Which statement is correct?', [
      ['The director’s span is 3 and there are three levels', 'Correct.'],
      ['The director’s span is 15 and there are two levels', 'The director has 3 direct reports.'],
      ['The director’s span is 5 and there are four levels', 'Span 5 belongs to each manager.'],
      ['The director’s span is 18 and there are three levels', 'Adds incorrectly.'],
    ], 0)),
    'u2-organisation-management:c4.0': ao(4, mc('A retailer has quiet periods and a busy December. Which staffing choice is best justified?', [
      ['A core of full-time staff plus part-time or seasonal staff for peaks', 'Correct.'],
      ['Only full-time staff on permanent contracts all year round', 'Costly in quiet months.'],
      ['No staff in quiet periods and a double wage in December', 'Not realistic.'],
      ['Only unpaid volunteers at the busiest times in December', 'Unreliable.'],
    ], 0)),
    'u2-organisation-management:c5.0': ao(3, mc('A manager compares sales with target and orders extra promotion when sales are 15% below. Which function is this?', [
      ['Controlling', 'Correct: monitoring and correcting.'],
      ['Planning', 'Setting targets in advance.'],
      ['Organising', 'Arranging resources.'],
      ['Delegating', 'Passing tasks to others.'],
    ], 0)),
    'u2-organisation-management:c6.0': ao(4, mc('An owner delegates payroll to an untrained assistant who makes errors. Which statement is best justified?', [
      ['Delegation saves time but needs training and checking; the owner remains accountable', 'Correct.'],
      ['Delegation was wrong in principle, because owners must do all tasks', 'Delegation is useful.'],
      ['The assistant alone is accountable, since they made the errors', 'Accountability stays with the delegator.'],
      ['Payroll can never be delegated by a small business at all', 'It can.'],
    ], 0)),
    'u2-organisation-management:c8.0': ao(4, mc('An airline must cut 300 jobs because demand has fallen 25%. Which way of choosing who goes is best justified?', [
      ['Clear criteria such as skills needed and roles no longer required', 'Correct: fair and defensible.'],
      ['Dismiss the newest staff only, whatever their skills', 'Ignores needs.'],
      ['Let the managers choose people they personally dislike', 'Unfair and unlawful.'],
      ['Ask all staff to resign and then rehire the cheapest', 'Unfair.'],
    ], 0)),
    'u2-organisation-management:c9.0': ao(3, mc('Workers want protection from a planned pay freeze. Which union action is most likely to help?', [
      ['Collective bargaining with management on behalf of all members', 'Correct.'],
      ['Setting the new pay rate by law on behalf of the government', 'The union cannot do this.'],
      ['Transferring all members to a competing employer', 'Not their role.'],
      ['Closing the business until the owners agree to leave', 'Not a union power.'],
    ], 0)),
    'u2-organisation-management:c10.0': ao(4, mc('A start-up with 15 staff has five levels of management. Which change would most likely improve speed and cut cost?', [
      ['A flatter structure, though managers will have wider spans of control', 'Correct.'],
      ['Another two levels, so that every worker has a personal supervisor', 'Slower and costlier.'],
      ['A narrower span of control with more middle managers', 'Taller structure.'],
      ['No structure at all, with every decision voted on by staff', 'Not practical.'],
    ], 0)),
    'u2-organisation-management:c11.0': ao(4, mc('A restaurant needs staff mainly at weekends. Which is the strongest argument for using part-time staff?', [
      ['They give flexible cover and cost less when business is quiet', 'Correct.'],
      ['They are always more experienced than full-time employees', 'Not necessarily.'],
      ['They never need any training or induction', 'They still need it.'],
      ['They cannot leave the firm, because they work fewer hours', 'Not true.'],
    ], 0)),
    'u2-organisation-management:c12.0': ao(4, mc('A senior manager delegates every customer complaint to juniors, and many remain unresolved. What is the most likely cause?', [
      ['Staff lacked training and authority, so the delegation could not work', 'Correct.'],
      ['Customers complain more when a firm uses delegation at all', 'Not supported.'],
      ['Juniors should have refused tasks, as senior staff must handle complaints', 'Not the issue.'],
      ['The firm is too flat, because complaints never reach managers', 'Not shown.'],
    ], 0)),
    'u2-organisation-management:c13.0': ao(3, mc('There is a fire alarm in a crowded building. Which leadership style is best at that moment?', [
      ['Autocratic: quick, clear instructions to protect people', 'Correct.'],
      ['Democratic: ask everyone for their opinion on what to do next', 'Too slow.'],
      ['Laissez-faire: leave staff to decide for themselves', 'Risky.'],
      ['Paternalistic: wait until everyone agrees on the decision', 'Too slow.'],
    ], 0)),

    // ---------- Communication ----------
    'u2-communication:2': ao(4, mc('A manager insists on face-to-face meetings for everything. Which evaluation is best?', [
      ['Good for complex or sensitive matters, but slow and costly for routine news', 'Correct.'],
      ['Always the quickest method, since nothing is written down at all', 'Meetings take time.'],
      ['Useful only for external communication with customers or suppliers', 'Used internally too.'],
      ['Cheaper than email, because it needs no equipment or time', 'Meetings cost time.'],
    ], 0)),
    'u2-communication:4': ao(4, mc('A retailer must tell customers about a product recall quickly. Which approach is best justified?', [
      ['Email and social media for speed, plus in-store notices for others', 'Correct.'],
      ['A letter sent in the post to each customer, as it is more formal', 'Too slow.'],
      ['A line in the next monthly newsletter, to save postage', 'Too slow for a safety issue.'],
      ['Tell staff to mention it only if a customer asks about it', 'Too passive.'],
    ], 0)),
    'u2-communication:5': ao(3, mc('Which is the most likely effect of information overload from too many emails?', [
      ['Important messages are missed or ignored', 'Correct.'],
      ['All messages are read carefully and answered quickly', 'Overload reduces attention.'],
      ['Communication costs fall because fewer people are involved', 'Not likely.'],
      ['Feedback from receivers becomes more accurate', 'Quality falls.'],
    ], 0)),
    'u2-communication:7': ao(2, mc('A letter sent by a firm to its customers is best described as which type of communication?', [
      ['External and written', 'Correct.'],
      ['Internal and written', 'Customers are outside the firm.'],
      ['External and verbal', 'The letter is written.'],
      ['Internal and verbal', 'Neither fits.'],
    ], 0)),
    'u2-communication:c0.0': ao(3, mc('A new hospital system is not explained to nurses and errors rise. What is the best analysis?', [
      ['Poor communication left nurses unsure of the procedure, so mistakes followed', 'Correct.'],
      ['The nurses were not skilled enough, so no communication could help', 'Unsupported.'],
      ['Written communication is always worse than verbal for hospitals', 'Not supported.'],
      ['The system itself must be broken, as all new systems cause errors', 'Not supported.'],
    ], 0)),
    'u2-communication:c1.0': ao(4, mc('A manager must tell 300 staff about a safety rule today. Which method is best justified?', [
      ['Email to all, with brief team talks, as it is fast and leaves a record', 'Correct.'],
      ['A note on the noticeboard of one department only', 'Misses most staff.'],
      ['A letter posted to every employee’s home address', 'Too slow.'],
      ['Ask each manager to mention it when they next see a worker', 'Unreliable.'],
    ], 0)),
    'u2-communication:c2.0': ao(4, mc('Which evaluation best fits using text messages to tell a worker about disciplinary action?', [
      ['Quick, but impersonal and unsuitable for a sensitive matter', 'Correct.'],
      ['Slow, but personal and suitable for a sensitive matter', 'Texts are quick, not personal.'],
      ['Cheap, and the best way to prove what was said in court', 'A formal letter is better.'],
      ['Formal, and the standard method for all disciplinary actions', 'Not standard.'],
    ], 0)),
    'u2-communication:c3.0': ao(2, mc('A business writes to a supplier to dispute an invoice. Which classification is correct?', [
      ['External, written communication', 'Correct.'],
      ['Internal, written communication', 'A supplier is external.'],
      ['External, verbal communication', 'It is written.'],
      ['Internal, verbal communication', 'Neither.'],
    ], 0)),
    'u2-communication:c5.0': ao(3, mc('Instructions for a factory machine use technical language. New staff misuse it. Which barrier is most relevant?', [
      ['Jargon', 'Correct.'],
      ['Distance between sender and receiver', 'Not the issue.'],
      ['Noise from the machines', 'Possible, but the stem points to language.'],
      ['Information overload', 'Not the issue.'],
    ], 0)),
    'u2-communication:c6.0': ao(4, mc('A business has frequent misunderstandings between head office and branches. Which reform is best justified?', [
      ['A shorter chain of command and a feedback step so branches confirm they understood', 'Correct.'],
      ['More levels of management, so messages are checked repeatedly', 'Messages become slower and more distorted.'],
      ['Fewer meetings and no written messages at all', 'Does not solve it.'],
      ['Close all branches and rely on head office staff', 'Extreme.'],
    ], 0)),
    'u2-communication:c7.0': ao(4, mc('A manager emails complex instructions to 50 staff and receives no replies. Which analysis is best?', [
      ['Email gives a record but no feedback, so understanding is not confirmed', 'Correct.'],
      ['No replies show that everyone understood and agreed', 'Silence is not confirmation.'],
      ['Email cannot be used for instructions in any business', 'It can.'],
      ['The staff should be dismissed for not replying', 'Too extreme.'],
    ], 0)),
    'u2-communication:c8.0': ao(3, mc('A small café wants to advertise a daily special to people walking past. Which medium is best justified?', [
      ['A board outside, because it is cheap and seen by passers-by', 'Correct.'],
      ['A television advert, because it reaches the largest audience', 'Too costly and not local.'],
      ['A national newspaper advert, so that more people are told', 'Too costly and not local.'],
      ['A letter to every household in the country', 'Too costly and not local.'],
    ], 0)),

    // ---------- Motivation ----------
    'u2-motivation:2': ao(4, mc('Which is the best-supported disadvantage of profit sharing as a motivator?', [
      ['Payouts depend on profit that staff cannot fully control, so the link to effort is weak', 'Correct.'],
      ['It reduces the profit paid to staff when they make extra effort', 'Not necessarily.'],
      ['It is illegal for firms that do not pay shareholders dividends', 'Not true.'],
      ['It is paid every day, so staff stop valuing it over time', 'It is usually annual.'],
    ], 0)),
    'u2-motivation:4': ao(3, mc('A manager rotates warehouse staff between packing, loading and stock checking. Which is the most significant risk?', [
      ['Staff need extra training and output may dip while they learn the new tasks', 'Correct.'],
      ['Staff will be given more authority and decision-making power', 'That is job enrichment.'],
      ['Staff will do the same task more often, and so become bored', 'Rotation is meant to prevent boredom.'],
      ['Staff pay will fall, since the tasks are now less skilled', 'Not implied.'],
    ], 0)),
    'u2-motivation:5': ao(3, mc('Which employee is most likely to be motivated by the chance of promotion?', [
      ['A graduate whose pay is secure and who wants to build a career', 'Correct: higher-level needs.'],
      ['A student working weekends only to save a little money', 'Not career-minded.'],
      ['A retired person doing a short seasonal job for company', 'Not career-minded.'],
      ['A worker about to emigrate who needs a final payment', 'Not career-minded.'],
    ], 0)),
    'u2-motivation:7': ao(2, mc('A company offers free gym membership, a car and private healthcare to senior staff. These are examples of…', [
      ['Fringe benefits', 'Correct.'],
      ['Piece rates', 'Pay per unit of output.'],
      ['Commission', 'A share of sales value.'],
      ['Profit sharing', 'A share of company profit.'],
    ], 0)),
    'u2-motivation:c0.0': ao(3, mc('A bank clerk says: “I stay mainly because I enjoy helping customers and my team is friendly.” Which motivation is shown?', [
      ['Job satisfaction and social needs, not only money', 'Correct.'],
      ['Piece rate pay as the main reward for the work', 'No mention of pay.'],
      ['Fear of dismissal, which is why staff stay in jobs', 'Not mentioned.'],
      ['Physiological needs, such as food and shelter', 'Not the point.'],
    ], 0)),
    'u2-motivation:c1.0': ao(4, mc('A firm has high absenteeism and 40% labour turnover. Which statement is best justified?', [
      ['Low motivation is probably raising costs through absence and recruitment', 'Correct.'],
      ['High turnover shows that pay is too high for the work done', 'Not supported.'],
      ['Absence has no cost, because absent workers are not paid', 'It disrupts work and costs money.'],
      ['The firm should recruit fewer staff to reduce turnover', 'Not logical.'],
    ], 0)),
    'u2-motivation:c2.0': ao(3, mc('A factory worker has a secure job and good pay but is isolated and has no friends at work. According to Maslow, which need is unmet?', [
      ['Social', 'Correct.'],
      ['Physiological', 'Met by pay.'],
      ['Safety', 'Met by security.'],
      ['Self-actualisation', 'Higher than the one missing.'],
    ], 0)),
    'u2-motivation:c3.0': ao(4, mc('A call centre uses strict targets, close supervision and pay per call. Which theorist is it applying, and what is the risk?', [
      ['Taylor; workers may become demotivated by pressure and lack of control', 'Correct.'],
      ['Herzberg; workers may become bored by too much recognition', 'Herzberg stresses motivators.'],
      ['Maslow; workers may lose their need for safety and security', 'Not the match.'],
      ['Mayo; workers may be less keen to work in teams', 'Not the match.'],
    ], 0)),
    'u2-motivation:c4.0': ao(4, mc('A company raises pay 5% but staff still complain of boring work and no recognition. Which analysis fits Herzberg?', [
      ['Pay is a hygiene factor; it removes dissatisfaction but does not motivate by itself', 'Correct.'],
      ['Pay is a motivator and should motivate the staff for a long time', 'Pay is a hygiene factor.'],
      ['Recognition is a hygiene factor, so it should not be provided', 'Recognition is a motivator.'],
      ['Boring work is a motivator, so it cannot be improved', 'Interesting work is the motivator.'],
    ], 0)),
    'u2-motivation:c6.0': ao(4, mc('A hospital cleaner has done the same task for years and is bored. Which non-financial method is best justified?', [
      ['Job rotation or enrichment, adding variety or responsibility', 'Correct.'],
      ['A larger bonus paid each year for staying in the same job', 'Financial.'],
      ['Closer supervision, to be sure the cleaner works hard', 'May reduce motivation.'],
      ['Piece-rate pay linked to the number of rooms cleaned', 'Financial.'],
    ], 0)),
    'u2-motivation:c8.0': ao(4, mc('A factory introduces piece-rate pay and defect rates rise. Which analysis is best?', [
      ['Workers rush to make more units, so quality falls; a quality check is needed', 'Correct.'],
      ['Piece rate always raises quality because workers care about each unit', 'It rewards speed, not quality.'],
      ['Defects rose because the factory paid its staff too much', 'Not shown.'],
      ['Workers made more units but lost interest in the money', 'Not shown.'],
    ], 0)),
    'u2-motivation:c9.0': ao(4, mc('A firm cannot afford pay rises but needs to improve motivation. Which package is best justified?', [
      ['Training, praise and promotion chances, because they cost little and meet higher needs', 'Correct.'],
      ['Free cars for senior managers only, since they set the example', 'Costly.'],
      ['A pay cut for all staff, to push them to work harder', 'Demotivating.'],
      ['Stricter rules and closer supervision of every worker', 'Likely to demotivate.'],
    ], 0)),
  },

  add: {
    'u2-recruitment': [
      match('Match each term to the correct description.', [
        ['Job description', 'Lists the duties and responsibilities of a job'],
        ['Person specification', 'Lists the skills and qualifications needed'],
        ['Internal recruitment', 'Filling a vacancy from existing staff'],
        ['Shortlist', 'The best applicants chosen for interview'],
      ]),
      multi('Which are advantages of external recruitment? Select all that apply.', [
        ['Fresh ideas and skills enter the business', 'People from outside bring new experience.', true],
        ['A wider choice of candidates', 'More people can apply.', true],
        ['The cost is usually lower than for internal recruitment', 'Advertising and selection usually cost more.', false],
        ['New staff already know the firm’s culture', 'Internal candidates are more likely to.', false],
      ]),
      short('Define the term “recruitment”.', {
        kind: 'Definition',
        points: ['The process of finding', 'and attracting people to apply for a job vacancy'],
        model: 'Recruitment is the process of identifying a vacancy and attracting suitable people to apply for it.',
      }),
    ],
    'u2-contracts-training': [
      cloze('Complete the sentences.', '___ training takes place at the workplace while the person does the job. ___ training takes place away from the workplace, often with a specialist.', ['On-the-job', 'Off-the-job'], ['Induction', 'Distance']),
      short('Explain one benefit to a firm of training its staff.', {
        command: 'Explain',
        points: ['Staff gain skills (productivity rises)', 'Output rises or mistakes and waste fall', 'Link to a business gain such as lower unit cost, or staff stay longer'],
        model: 'Training gives workers more skills, so they produce more with fewer mistakes. That lowers the cost of each unit and may help the firm keep its staff.',
      }),
    ],
    'u2-organisation-management': [
      match('Match each term to its meaning.', [
        ['Span of control', 'Number of people a manager is directly responsible for'],
        ['Chain of command', 'The line of authority from top to bottom'],
        ['Delegation', 'Passing authority for a task to a subordinate'],
        ['Delayering', 'Removing levels of management'],
      ]),
      short('Define the term “span of control”.', {
        kind: 'Definition',
        points: ['The number of subordinates', 'who report directly to one manager'],
        model: 'Span of control is the number of subordinates who report directly to one manager.',
      }),
    ],
    'u2-communication': [
      multi('Which of these are barriers to effective communication? Select all that apply.', [
        ['Use of jargon the receiver does not know', 'Language that is not understood blocks the message.', true],
        ['Noise or distraction in the workplace', 'The message may not be received.', true],
        ['Feedback from the receiver', 'Feedback helps overcome barriers.', false],
        ['A clear and short message', 'Clarity helps.', false],
      ]),
      cloze('Complete the sentence.', 'In the communication process the ___ sends a message through a ___, and the ___ gives feedback to show it has been understood.', ['sender', 'channel', 'receiver'], ['manager', 'barrier']),
    ],
    'u2-motivation': [
      match('Match each theorist to the idea.', [
        ['Taylor', 'Workers are motivated mainly by pay'],
        ['Maslow', 'A hierarchy of needs from basic to self-fulfilment'],
        ['Herzberg', 'Hygiene factors and motivators'],
        ['Mayo', 'Social needs and team belonging matter'],
      ]),
      short('Explain why paying a piece rate might reduce quality.', {
        command: 'Explain',
        points: ['Pay depends on the number of units made', 'Workers may rush', 'So mistakes or defects increase and quality falls'],
        model: 'With piece rate, pay depends on how many units are produced, so workers may rush. This leads to more mistakes and defects, so quality falls.',
      }),
    ],
  },
};
