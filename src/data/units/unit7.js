import { mc, ord, scn, calc, tfd, ao } from '../builders.js';

// Unit 7: Exam Technique. The knowledge bytes are in ../cards/cards7.js; this file holds the recap
// bullets and the practice pool (critical-thinking questions: spot, fix and score sample answers).
export const unit7 = {
  id: 'u7',
  number: 7,
  title: 'Exam Technique: How to Answer Questions',
  short: 'Exam Technique',
  emoji: '🎯',
  color: 'indigo',
  submodules: [
    {
      id: 'u7-aos',
      title: 'Assessment Objectives & Paper Structure',
      syllabus: 'Section 2',
      microConcept: [
        'Four assessment objectives: AO1 knowledge, AO2 application, AO3 analysis, AO4 evaluation (35 / 30 / 22 / 13 % of the qualification).',
        'Paper 1: four questions of 20 marks with parts 2, 4, 6, 8. Paper 2: case study, four questions each with (a) 8 marks and (b) 12 marks.',
        'Knowledge first, then application, then analysis and evaluation.',
      ],
      challenges: [
        ao(2, mc('Two students both know the theory perfectly. Student X mentions the business’s product and numbers in every answer; Student Y writes general statements. Which objective explains the difference in their marks?', [
          ['AO1 knowledge', 'Both know the theory equally, so AO1 does not separate them.'],
          ['AO2 application', 'Correct: X applies knowledge to the given business; Y does not.'],
          ['AO3 analysis', 'The stem does not say analysis differs.'],
          ['AO4 evaluation', 'Not what the stem describes.'],
        ], 1)),
        ao(3, mc('A student spends 20 minutes on a 2-mark definition and has no time for part (d). Which statement best explains why this is poor technique?', [
          ['Definitions are not worth any marks', 'They are worth 2 AO1 marks.'],
          ['Time should match the marks: the 8-mark part (d) contains analysis and evaluation that cannot be earned in a short answer', 'Correct: about one minute per mark is a good guide.'],
          ['Part (a) is the hardest part', 'Part (a) is the easiest part.'],
          ['Examiners ignore part (a)', 'They mark all parts.'],
        ], 1)),
        ao(3, calc('Paper 2 is worth 80 marks. AO3 analysis is 25% of Paper 2. How many marks are for analysis?', 20, {
          unit: 'marks',
          formula: 'AO3 marks = 80 × 25%',
          steps: ['25% = 0.25', '80 × 0.25 = 20 marks'],
        })),
        ao(4, mc('Which statement about the difference between Paper 1 and Paper 2 is best supported by the weightings (P1: 40/30/20/10; P2: 30/30/25/15)?', [
          ['Paper 2 has more knowledge marks than Paper 1', 'Paper 1 has the higher AO1 share.'],
          ['Paper 2 has a higher share of analysis and evaluation than Paper 1', 'Correct: AO3 rises from 20% to 25% and AO4 from 10% to 15%.'],
          ['Paper 1 contains no application marks', 'AO2 is 30% in both papers.'],
          ['Both papers are identical in weighting', 'They differ in AO1, AO3 and AO4.'],
        ], 1)),
        ao(2, tfd('Because Paper 1 questions are short, you can answer them without using any detail from the stem.', 'false', 'Each Paper 1 question uses stimulus material, and application is 30% of the marks.')),
        ao(3, scn('Question (c) is worth 6 marks: “Explain two ways…”. You have 8 minutes left for it. What is the best plan?', [
          ['Write one very detailed way', 'You need two ways; one way earns at most 3 marks.', false],
          ['Write two ways, each with a point, a case detail and an impact', 'Matches the 2 AO1 + 2 AO2 + 2 AO3 structure: about 4 minutes per way.', true],
          ['Write a list of four short points', 'Without impact you will miss the analysis marks.', false],
        ], 'The mark allocation tells you the structure and the time per part.')),
      ],
    },
    {
      id: 'u7-command',
      title: 'Command Words & Paper 1 Parts',
      syllabus: 'Section 4',
      microConcept: [
        'Define = meaning + example. Identify/State = name only. Calculate = formula, working, units. Outline = knowledge + application per way.',
        'Explain = knowledge → application → analysis per way. Consider/Justify = weigh up, decide and reject the alternative.',
        'Always read the last sentence: “Which is best?” means evaluation marks.',
      ],
      challenges: [
        ao(1, mc('Define ‘opportunity cost’. Which answer scores 2/2?', [
          ['The cost of making a choice', 'Too vague.'],
          ['The next best alternative given up when a choice is made, e.g. choosing a new van instead of a new oven', 'Correct: precise meaning plus example.'],
          ['Money lost in a bad choice', 'Wrong idea.'],
          ['Opportunity cost is the cost of an opportunity', 'Circular.'],
        ], 1)),
        ao(2, mc('Outline two ways an economic boom could affect a florist. Which earns all four marks?', [
          ['A boom is good for business.', 'Vague, no ways.'],
          ['Higher demand for flowers; more competition from new florists', 'Correct: two knowledge points, each with business context (flowers, florists).'],
          ['Higher demand and more competition', 'Knowledge only: 2 of 4 marks.'],
          ['It increases output', 'Not a developed way.'],
        ], 1)),
        ao(3, mc('“Explain two ways a business could increase added value.” Which answer is the best 3-mark way?', [
          ['It could set higher prices.', 'Knowledge only.'],
          ['A bakery could add premium packaging and charge higher prices; the extra income exceeds the packaging cost, so added value per loaf rises.', 'Correct: way + bakery detail + impact.'],
          ['Added value is selling price minus costs.', 'A definition, not a way.'],
          ['Cutting costs and raising prices.', 'Two ways named, no application or impact.'],
        ], 1)),
        ao(2, calc('A question says “Calculate the labour productivity” and gives output of 9,000 units and 30 employees. A student writes only “300”. Using the formula (output ÷ employees), what should they have written as the answer with its unit?', 300, {
          unit: 'units per employee',
          formula: 'Labour productivity = output ÷ number of employees',
          steps: ['9,000 ÷ 30 = 300', 'Write the formula, the working and the unit “units per employee” to secure all the marks.'],
        })),
        ao(4, mc('Which part of the question is the evaluation trigger? “Explain two methods of training. Which is likely to be the best method to use? Justify your answer.”', [
          ['“Explain two methods of training”', 'This part asks for knowledge, application and analysis.'],
          ['“Which is likely to be the best method to use? Justify your answer.”', 'Correct: this demands a decision and justification (AO4).'],
          ['The word “training”', 'It names the topic only.'],
          ['None — evaluation is not required', 'It is required here.'],
        ], 1)),
        ao(1, tfd('For an “Identify” question, adding an explanation after each answer will earn extra marks.', 'false', 'Identify marks are for naming only. Explanation earns nothing extra and costs time.')),
        ao(3, scn('Part (c): “Explain two ways…”. A student writes two excellent knowledge points with analysis but uses no case detail. What is the likely result?', [
          ['Full marks, because analysis is the hardest objective', 'Application marks are missing.', false],
          ['They lose both application marks (up to 2 of 6)', 'Correct: each way needs a business detail to earn AO2.', true],
          ['They lose all marks', 'Knowledge and analysis marks are still available.', false],
        ], 'The part (c) pattern is 2 K + 2 A + 2 N, so missing the case detail costs the application marks.')),
        ao(1, mc('A student is asked to “State two reasons why consumer spending patterns might change”. Which answer is best?', [
          ['People change because of lots of reasons.', 'Names no reason.'],
          ['Higher incomes; changes in price', 'Correct: two clear reasons, nothing wasted.'],
          ['Spending patterns are patterns of spending.', 'Circular.'],
          ['Businesses sell more', 'Not a reason.'],
        ], 1)),
      ],
    },
    {
      id: 'u7-application',
      title: 'Application: Using the Case',
      syllabus: 'AO2',
      microConcept: [
        'Use details from the case: what it sells, ownership, activities, sector/type, numbers.',
        'No business or owner names; not words already in the question; no repeat within one part. Reuse across parts is allowed.',
        'In calculations your numbers count; Paper 2 (b) has two application marks.',
      ],
      challenges: [
        ao(2, mc('Case: “A nursery cares for children aged 1 to 3 and advertises with leaflets. The owner, Oscar, is a sole trader.” Question: “Explain one disadvantage of using leaflets.” Which phrase can score application?', [
          ['Oscar', 'The owner’s name never scores.'],
          ['Children aged 1 to 3', 'Correct: a case detail not in the question.'],
          ['Leaflets', 'Already in the question, so it cannot score.'],
          ['The business', 'Too general.'],
        ], 1)),
        ao(2, scn('Case: a bakery sells bread and cakes, employs 12 staff and is a private limited company. Question (d) is about whether it should use social media advertising. Pick the strongest use of application.', [
          ['“A business should use social media because it is cheap.”', 'No case detail at all.', false],
          ['“Posting photos of its cakes lets the bakery reach local customers cheaply, so cake sales rise.”', 'A relevant case detail (cakes) built into a chain of reasoning.', true],
          ['“Bakery Ltd should use social media.”', 'The business name earns nothing.', false],
        ], 'Application works best when it is woven into the reasoning, not tacked on.')),
        ao(2, mc('In part (b), a student writes “gold” as their application. In part (c) of the SAME question they write “gold” again. What happens?', [
          ['“Gold” earns application in both parts', 'Correct: repeating across different parts is allowed.'],
          ['“Gold” earns nothing in either part', 'It is allowed to be used in each part.'],
          ['“Gold” earns application only in part (b)', 'Each part is marked separately.'],
          ['“Gold” is not application', 'It is a valid detail about what the business sells.'],
        ], 0)),
        ao(2, calc('In a Paper 1 question, how many marks are for application in part (d)? (Parts: 2 K + 2 A + 2 N + 2 E.)', 2, {
          unit: 'marks',
          formula: 'Count AO2 marks in part (d)',
          steps: ['Part (d) has 2 AO2 marks', 'One application detail per way, so choose two different case details.'],
        })),
        ao(3, mc('Which statement is TRUE about application in calculation questions?', [
          ['No application marks are given', 'The numbers you use can count.'],
          ['The numbers you take from the data and use in your working count as application', 'Correct.'],
          ['Only words from the case count', 'Numbers also count.'],
          ['Application only appears in evaluation', 'It appears in every part except the simple knowledge ones.'],
        ], 1)),
        ao(2, tfd('If the case says “ice cream”, a student can use “ice cream” in part (c) and again in part (d) of the same question.', 'true', 'Each part is marked separately; only repeating inside one part is not credited twice.')),
        ao(4, mc('A student’s Paper 2 12-mark answer has application in every paragraph but none in the conclusion. What is the likely effect?', [
          ['No loss because application appears many times', 'Only two application marks exist; the second is awarded for the conclusion.'],
          ['They lose one application mark, which is awarded for application in the evaluation', 'Correct: one in the analysis, one in the conclusion.'],
          ['They lose all application marks', 'The mark in the analysis can still be awarded.'],
          ['They lose evaluation marks', 'Evaluation marks are separate.'],
        ], 1)),
      ],
    },
    {
      id: 'u7-analysis',
      title: 'Analysis: Chains of Reasoning',
      syllabus: 'AO3',
      microConcept: [
        'Analysis is a chain: WHAT (knowledge) → HOW (direct impact) → EFFECT (e.g. profit, reputation, efficiency).',
        'Vague answers miss the HOW. Use link phrases: this means that, which leads to, as a result.',
        'Further analysis adds another link; use it in Paper 2 (b).',
      ],
      challenges: [
        ao(3, ord('Order the chain for “using fair trade materials”.', [
          'The business uses fair trade materials',
          'This aligns with customers who care about ethics',
          'As a result, its reputation and brand image improve',
        ], 'What (fair trade materials) → how (aligns with ethical customers) → effect (reputation).')),
        ao(3, mc('Which sentence completes the missing “how”: “Cost-plus pricing leads to higher profit margins”?', [
          ['… because prices are high.', 'Not a mechanism.'],
          ['… because every product sold covers its costs plus a mark-up.', 'Correct: it explains how the price produces the margin.'],
          ['… because it is a pricing method.', 'Circular.'],
          ['… because customers like it.', 'Not related to cost-plus.'],
        ], 1)),
        ao(3, mc('Which chain is most logical?', [
          ['Training → lower rent → higher advertising', 'The links do not follow.'],
          ['Training improves skills → fewer errors → less waste → lower costs', 'Correct: each step follows from the one before.'],
          ['Training → shareholders → profit', 'Missing the mechanism.'],
          ['Training is good → the business is good', 'Too vague.'],
        ], 1)),
        ao(3, mc('A student writes: “Higher prices increase profit.” What is missing for analysis?', [
          ['The knowledge point', 'The knowledge point is present.'],
          ['The how: higher prices raise revenue per unit sold, but demand could fall', 'Correct: the mechanism and a consequence are missing.'],
          ['A definition of price', 'Not required.'],
          ['A numerical example', 'Not required.'],
        ], 1)),
        ao(3, tfd('The words “this means that” help you add a further step of analysis.', 'true', 'Link phrases show the reader each new step in the chain.')),
        ao(3, mc('Which effect is the best end of the chain “a business automates its factory”?', [
          ['Higher labour costs', 'Automation usually reduces labour costs.'],
          ['Lower unit costs and greater efficiency, so it can price competitively', 'Correct: a typical effect (efficiency/competitiveness).'],
          ['Lower output', 'Automation usually raises output.'],
          ['Lower quality only', 'Not a typical effect.'],
        ], 1)),
        ao(3, scn('Question: “Explain one benefit of delegation to a manager.” Choose the best analysis.', [
          ['Delegation is a good thing.', 'No chain.', false],
          ['Delegation frees the manager’s time, so she can focus on planning, which improves decisions and raises efficiency.', 'Complete chain with further analysis.', true],
          ['Delegation passes tasks to subordinates.', 'A definition only.', false],
        ], 'Aim for point → impact → effect, joined with link phrases.')),
        ao(3, mc('Which of these is NOT an analysis mark?', [
          ['“…so fewer customers return, reducing sales.”', 'This is an impact.'],
          ['“Off-the-job training is training away from work.”', 'Correct: this is knowledge/definition, not analysis.'],
          ['“…which means costs fall and profit margins rise.”', 'This is an effect.'],
          ['“…resulting in a better reputation.”', 'This is an effect.'],
        ], 1)),
      ],
    },
    {
      id: 'u7-evaluation',
      title: 'Evaluation: Decide, Reject, Justify',
      syllabus: 'AO4',
      microConcept: [
        'Evaluation = a clear decision, justified for this business, with the alternative rejected for a reason.',
        'Don’t repeat earlier points; avoid brand-new knowledge; “it depends” alone earns nothing.',
        'Paper 1 (d): 2 evaluation marks. Paper 2 (b): three level-3 points + one application.',
      ],
      challenges: [
        ao(4, mc('Which is the best evaluation for: “Which is more important, the amount of finance needed or the legal form?”', [
          ['Both are important.', 'No decision.'],
          ['The amount needed is most important because without enough funds the start-up cannot begin; legal form is less important because high interest only matters after trading starts.', 'Correct: a decision, a reason and a justified rejection.'],
          ['The legal form is important because it is the legal form.', 'Circular.'],
          ['It depends on the business.', 'No decision.'],
        ], 1)),
        ao(4, mc('A student concludes: “In conclusion, there are many advantages and disadvantages.” How many evaluation marks are likely?', [
          ['0 — no decision and no justification', 'Correct: a summary is not evaluation.'],
          ['1', 'There is no decision.'],
          ['2', 'No justification or rejection.'],
          ['3', 'Not possible.'],
        ], 0)),
        ao(4, scn('You wrote analysis for external and internal recruitment. For the final “Do you think external recruitment is better?” what is the strongest finish?', [
          ['Repeat the advantages of external recruitment to remind the examiner', 'Repetition earns nothing extra.', false],
          ['“External recruitment is better because it brings new skills the firm lacks; internal recruitment is not best because it cannot supply those skills.”', 'A decision plus rejection, both justified for the situation.', true],
          ['“Internal recruitment is cheaper, so it depends.”', 'No decision.', false],
        ], 'Evaluation compares and decides; it does not repeat.')),
        ao(4, mc('Which sentence breaks the “no new knowledge” rule in a conclusion?', [
          ['“A loan is best because the repayments are fixed, which helps cash flow already explained above.”', 'Uses earlier analysis.'],
          ['“Crowdfunding is also a source of finance that has not been mentioned and could be better.”', 'Correct: brings in a brand-new point instead of evaluating.'],
          ['“Option A is best because it has $5,000 more profit.”', 'Uses evidence.'],
          ['“Training is less suitable because it costs the firm time already described.”', 'Uses earlier points.'],
        ], 1)),
        ao(4, mc('How many evaluation marks are available in a Paper 1 part (d)?', [
          ['1', 'Two are available.'],
          ['2', 'Correct: 2 AO4 marks.'],
          ['4', 'Too many.'],
          ['8', 'The whole part is 8 marks.'],
        ], 1)),
        ao(4, tfd('A conclusion that explains why the chosen option is better than the other counts as a rejection of the alternative.', 'true', 'Comparing and showing the chosen option is better is an accepted way to reject the alternative.')),
        ao(4, mc('Which justification uses the case best? (Business: a new bakery with a $10,000 budget.)', [
          ['Television adverts are the best because they reach many people.', 'Ignores the $10,000 budget.'],
          ['Leaflets are best because a new bakery with $10,000 needs low-cost local advertising; TV is too expensive for the budget.', 'Correct: the reason depends on the budget and rejects TV.'],
          ['Advertising is important.', 'No decision.'],
          ['Social media is modern.', 'Generic reasoning.'],
        ], 1)),
      ],
    },
    {
      id: 'u7-paper2',
      title: 'Paper 2: 8-mark and 12-mark Answers',
      syllabus: 'Paper 2',
      microConcept: [
        'Part (a) 8 marks: 4K+4N (generic), 4K+4A (case), or two reasons each K + N + N + A.',
        'Part (b) 12 marks: L1 knowledge, L2 analysis (need two to unlock L3), L3 reject two alternatives and justify the best, with one application in the analysis and one in the conclusion.',
        'Calculation questions: two calculations (one per option), keep a new calculation (difference) for the conclusion.',
      ],
      challenges: [
        ao(3, mc('A student analyses only one of three options in a 12-mark question and then makes a strong decision. What is the most likely issue?', [
          ['None — only the conclusion is marked', 'Level 3 needs at least two level-2 analyses.'],
          ['They cannot reach level 3 because they did not analyse at least two options', 'Correct: two level-2 analyses are needed to unlock level 3.'],
          ['They automatically score 12', 'Not without the required analysis.'],
          ['They lose knowledge marks', 'The issue is access to level 3.'],
        ], 1)),
        ao(4, mc('Question: “Consider three types of promotion. Which should the business use?” Which conclusion should earn the three level-3 points?', [
          ['“Sponsorship is best because it is good.”', 'No reason and no rejection.'],
          ['“Billboards are not best because they are easily missed; sponsorship is not best because it takes too long to build awareness; TV is best because it shows the whole product range to a wide audience.”', 'Correct: two rejections and a justified choice.'],
          ['“All three methods work in different ways.”', 'No decision.'],
          ['“TV is best, as stated before.”', 'Repetition earns nothing.'],
        ], 1)),
        ao(3, scn('The question: “Consider the three roles of marketing. Which is most important?” You cannot write advantages and disadvantages. What should you do?', [
          ['Write nothing', 'You would get 0.', false],
          ['Analyse each role with impact and further impact, then decide', 'Level-2 analysis works without advantages/disadvantages.', true],
          ['Write a definition of marketing', 'Knowledge only.', false],
        ], 'Adapt the paragraph pattern to the question: analysis + further analysis, then evaluation.')),
        ao(3, calc('Option A’s profit is $8,000 and option B’s profit is $12,500. What new calculation (difference) could you use as a level-3 justification?', 4500, {
          unit: '$',
          formula: 'Difference = profit B − profit A',
          steps: ['12,500 − 8,000 = 4,500', 'State: “Option B earns $4,500 more profit, so it is the better option.” Keep this for the conclusion; don’t use it earlier.'],
        })),
        ao(4, mc('Which of these calculations would NOT be a strong choice for a ratio-type 12-mark question?', [
          ['Profit margin', 'Common and accepted.'],
          ['Gross profit margin', 'Common and accepted.'],
          ['Margin of safety', 'Common and accepted.'],
          ['Counting the letters in the business name', 'Correct: not a business calculation.'],
        ], 3)),
        ao(3, mc('A part (a) question with no case words in it (a generic question) is worth 8 marks. Where do the marks mainly come from?', [
          ['4 knowledge and 4 analysis', 'Correct: no application is needed for generic questions.'],
          ['8 application', 'Application depends on the case in the question.'],
          ['8 evaluation', 'Evaluation is not required.'],
          ['4 evaluation and 4 application', 'Not the pattern.'],
        ], 0)),
        ao(4, tfd('In a two-option 12-mark calculation question, you should use every available calculation inside the analysis paragraphs.', 'false', 'Hold one new calculation back (e.g. the difference between the options) so your level-3 justification is not just a repeat.')),
        ao(3, calc('Paper 2 is 90 minutes for 80 marks. About how many minutes should you give to a 12-mark part (b)? (Use 1.1 minutes per mark; round to the nearest minute.)', 13, {
          unit: 'minutes',
          tol: 0.6,
          formula: 'Time = marks × 1.1',
          steps: ['12 × 1.1 = 13.2 → about 13 minutes'],
        })),
      ],
    },
  ],
};
