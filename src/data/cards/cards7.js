import { mc, ord, scn, calc, tfd, ao, card } from '../builders.js';

// Unit 7 · Exam Technique. Strategies are based on the Cambridge IGCSE Business 0264 syllabus (assessment objectives)
// and the exam-technique playlist you shared, rewritten in my own words with new examples.
export const cards7 = {
  'u7-aos': [
    card('The four assessment objectives (AOs)', [
      '**AO1 Knowledge and understanding** — know business terms/concepts and use correct business terminology. About 35% of the qualification.',
      '**AO2 Application** — apply what you know to the GIVEN business. About 30%.',
      '**AO3 Analysis** — select, organise and interpret data; analyse information (explain the impact). About 22%.',
      '**AO4 Evaluation** — make justified decisions, conclusions and recommendations based on evidence. About 13%.',
    ],
      ao(2, mc('A student always writes accurate definitions and explains theory well, but never uses any detail from the business in the question. Which objective costs them the most marks?', [
        ['AO1 knowledge — their definitions are accurate', 'Their knowledge is secure, so they are not losing marks here.'],
        ['AO2 application — nothing links the theory to the given business', 'Correct: application marks come only from using the case (what it sells, what it does, numbers).'],
        ['AO3 analysis — explanations are good', 'They explain theory well, so analysis is not the main gap.'],
        ['AO4 evaluation — they never make a decision', 'Possible, but the stem says the clearest gap is the missing business detail.'],
      ], 1))),
    card('Weightings change between the two papers', [
      '**Paper 1** (80 marks): AO1 40%, AO2 30%, AO3 20%, AO4 10%.',
      '**Paper 2** (80 marks): AO1 30%, AO2 30%, AO3 25%, AO4 15%.',
      'Paper 2 asks for more analysis and evaluation; both papers reward application equally.',
    ],
      ao(3, calc('Paper 1 is worth 80 marks and AO1 is 40% of it. How many marks in Paper 1 test pure knowledge and understanding?', 32, {
        unit: 'marks',
        formula: 'AO1 marks = 80 × 40%',
        steps: ['40% = 0.40', '80 × 0.40 = 32 marks', 'That is why learning definitions and key terms first is the safest foundation.'],
      }))),
    card('Paper 1: four questions, each with four parts', [
      'Paper 1 has **four compulsory questions of 20 marks**. Each has a short stem and sometimes data (a table or graph).',
      'The parts are worth **2, 4, 6 and 8 marks**, getting harder as you go.',
      'Marks build up: (a) AO1 only → (b) AO1 + AO2 → (c) AO1 + AO2 + AO3 → (d) AO1 + AO2 + AO3 + AO4.',
    ],
      ao(3, mc('In a Paper 1 question, part (d) is worth 8 marks. Which description is the best match for how those 8 marks are split?', [
        ['All 8 marks are for knowledge', 'Knowledge is only part of the 8; (d) is where you also need analysis and evaluation.'],
        ['2 knowledge, 2 application, 2 analysis and 2 evaluation marks', 'Correct: part (d) is the only part that includes evaluation marks.'],
        ['4 knowledge and 4 evaluation marks', 'Application and analysis are also required.'],
        ['8 evaluation marks', 'Evaluation is only 2 of the 8 marks.'],
      ], 1))),
    card('Paper 2: one case study, four questions', [
      'Paper 2 gives a **case study insert** with appendices (tables, graphs, newspaper extracts, adverts). **Four compulsory questions of 20 marks**.',
      'Each question has part **(a) for 8 marks** (an applied explain question) and part **(b) for 12 marks** (marked in levels: knowledge, analysis, evaluation).',
      'Any appendix or paragraph in the insert can give you application points.',
    ],
      ao(2, mc('Which statement about Paper 2 is correct?', [
        ['Part (b) is marked in levels and is worth 12 marks', 'Correct: (b) uses level-of-response marking.'],
        ['Part (a) is worth 12 marks', '(a) is worth 8 marks.'],
        ['Only the first paragraph of the case can be used for application', 'Any part of the case, including appendices, can be used.'],
        ['Questions are chosen from a list of six', 'All four questions are compulsory.'],
      ], 0))),
    card('Where marks are won — and lost', [
      '**Knowledge first:** without the right terms you cannot earn application, analysis or evaluation marks.',
      '**Application is the quickest gain:** a few well-chosen case details in every part.',
      '**Analysis and evaluation separate the top grades** from the middle ones.',
    ],
      ao(3, calc('In a Paper 1 question (20 marks) a student scores full marks for AO1 and AO2 but writes no analysis or evaluation. AO1 = 8 marks and AO2 = 6 marks per question. What is their question total?', 14, {
        unit: 'marks',
        formula: 'Total = AO1 marks + AO2 marks',
        steps: ['AO1 = 8, AO2 = 6', '8 + 6 = 14 out of 20', 'That is 70% — you can reach the top grades on knowledge and application alone if you do them perfectly, but analysis and evaluation make it safer.'],
      }))),
  ],

  'u7-command': [
    card('Define: a precise meaning plus a safety example', [
      'A definition question is worth **2 marks (AO1)**: one for the core meaning, one for the extra precision.',
      'Don’t use vague words (e.g. “misbehaving”) — the examiner may only give 1 mark.',
      '**Add a short example** after every definition so a vague definition can still score the second mark.',
    ],
      ao(1, mc('Define ‘dismissal’. Which answer is most likely to score 2/2?', [
        ['Getting fired for misbehaving', 'Vague: “misbehaving” is not specific, so only 1 mark is likely.'],
        ['When an employer ends an employee’s job, usually because of failure to follow the contract, e.g. repeated poor performance', 'Correct: clear meaning plus a specific example.'],
        ['When a worker leaves their job', 'This describes resignation, not dismissal.'],
        ['A dismissal is a dismissal of an employee', 'Circular: it uses the word in its own definition.'],
      ], 1))),
    card('Identify and State: name it, nothing more', [
      'Command words **Identify** and **State** need only the point itself — each correct point earns **1 AO1 mark**.',
      'Explaining earns **no extra marks** and wastes time you need for the 6- and 8-mark parts.',
    ],
      ao(1, mc('Identify two methods of written communication. Which answer is the most efficient use of time?', [
        ['Email and letter', 'Correct: two named methods, 2 marks, no wasted time.'],
        ['Email, which is fast and can reach many people, and letter, which is formal and gives a record', 'Explanations add no marks here and cost time.'],
        ['Meetings and phone calls', 'These are verbal, not written.'],
        ['Communication', 'Too general — it names no method.'],
      ], 0))),
    card('Calculate: formula, working, answer with unit', [
      'Write the **formula**, show the **working** and give the **answer with units** (e.g. units, %, $).',
      'Marks are often awarded for method even if the final answer is wrong.',
      'Use the formula sheet in the syllabus: market share, labour productivity, break-even, margin of safety, profit, margin ratios, current/acid test ratio.',
    ],
      ao(3, mc('A student calculates break-even output as 1,800 units but the correct answer is 1,500. They wrote: contribution = $20 − $8 = $12, fixed costs ÷ contribution = 18,000 ÷ 10. What is most likely?', [
        ['0 marks — the answer is wrong', 'Marks for method are usually available.'],
        ['They gain the formula and contribution marks but lose the final accuracy marks', 'Correct: showing correct formula and contribution earns method marks; the slip (÷10) loses the later marks.'],
        ['Full marks — the contribution was right', 'The final division was wrong, so not full marks.'],
        ['Marks only for the answer', 'Method marks exist because working is credited.'],
      ], 1))),
    card('Outline (4 marks): knowledge + application, per way', [
      '“Outline two ways…” is worth **4 marks: 2 AO1 + 2 AO2**.',
      'For each way write the **knowledge point** and one **detail from the business**. No explanation is needed — it just has to make sense.',
    ],
      ao(2, mc('Outline two benefits to a bakery of well-motivated staff. Which answer earns all four marks?', [
        ['Staff are happy and the business is better', 'Vague, no case detail.'],
        ['Higher productivity, so more loaves are made; lower labour turnover, so fewer bakers have to be replaced', 'Correct: each way has a knowledge point and a bakery detail.'],
        ['Motivation leads to higher profit, which helps shareholders', 'One idea, no business detail and no second way.'],
        ['Higher productivity and lower labour turnover', 'Two knowledge points but no application, so only 2 marks.'],
      ], 1))),
    card('Explain (6 marks): knowledge → application → analysis, twice', [
      '“Explain two ways…” is worth **6 marks: 2 AO1 + 2 AO2 + 2 AO3**.',
      'For each way: **point** (knowledge) → **business detail** (application) → **impact** (analysis: what → how → effect).',
    ],
      ao(3, mc('Explain one way a café could reduce waste. Which answer would earn the full 3 marks for this way?', [
        ['Use fresh ingredients in smaller batches.', 'Only a knowledge point.'],
        ['The café could order smaller batches of cakes; this reduces the amount thrown away.', 'Knowledge plus a basic impact but little business detail.'],
        ['The café could bake smaller batches of cakes each morning, so fewer unsold cakes are thrown away, which lowers costs and raises profit.', 'Correct: point + café detail + chain of reasoning to the effect.'],
        ['Waste is bad for the environment and for profit.', 'No clear way is identified.'],
      ], 2))),
    card('Consider / Do you think / Justify: weigh up, then decide', [
      '**Consider** = look at all the information and weigh up. **Justify** = support a decision with evidence.',
      'These command words trigger **evaluation**: you must make a **decision** and explain why it is best (and why the alternative is not).',
      'A balanced answer shows advantages AND disadvantages before the decision.',
    ],
      ao(4, mc('“Do you think the advantages of external recruitment are greater than the disadvantages?” Which answer shape earns the most marks?', [
        ['Only advantages of external recruitment', 'Not balanced; there is no evaluation.'],
        ['An advantage with impact, a disadvantage with impact, then a justified decision explaining why one outweighs the other', 'Correct: this covers analysis and both evaluation marks.'],
        ['I think external recruitment is better.', 'A decision with no justification earns nothing for evaluation.'],
        ['A list of four advantages of internal recruitment', 'This answers a different question.'],
      ], 1))),
    card('Read the command, the numbers and the “which is best?”', [
      'Before writing, underline: the **command word**, the **number of ways**, the **business topic** and any **“which is best?”**.',
      'A question like “Explain two factors… Which is the most important? Justify your answer” has **2 marks of evaluation** hidden in the last sentence.',
      'Missing the second half of the question is the most common way to lose easy marks.',
    ],
      ao(4, mc('“Explain two factors a business should consider when choosing a source of finance. Which factor is the most important? Justify your answer.” How many of the 8 marks are for the “most important” part?', [
        ['0 — it is only a opinion', 'It is evaluation (AO4), which earns marks.'],
        ['2 — one for a justified choice and one for rejecting the other factor', 'Correct: 2 AO4 marks.'],
        ['4 — half the question', 'Too many; the explanations earn the rest.'],
        ['8 — it is the whole question', 'The explanations earn the rest.'],
      ], 1))),
  ],

  'u7-application': [
    card('What application really is', [
      '**Application** means using **details from the case** so your theory is about THIS business, not any business.',
      'It is worth about **30% of the marks** — and it is the fastest improvement for many students.',
      'A statement that could be written about any business earns knowledge marks but **no application marks**.',
    ],
      ao(2, mc('Which sentence is applied to a business that makes handmade candles?', [
        ['A business can raise its prices to raise added value.', 'This could be about any business — knowledge only.'],
        ['Setting higher prices for its handmade candles increases the gap between price and the cost of wax and wicks.', 'Correct: the details (handmade candles, wax, wicks) tie it to this business.'],
        ['Added value is price minus the cost of inputs.', 'This is a definition, not application.'],
        ['Higher prices are good for owners.', 'Generic and unfinished.'],
      ], 1))),
    card('The five-point case checklist', [
      'Scan the case for: **1) what the business sells; 2) type of ownership; 3) what it does/plans to do (activities); 4) its sector or type; 5) numbers/data.**',
      'Five details are usually available; you only need about two per question.',
    ],
      ao(2, mc('Case: “A private limited company manufactures chocolate in a factory with 80 employees. It plans horizontal integration.” Which is NOT a valid application point for a question about the effects of expanding?', [
        ['Chocolate', 'Valid: what it sells.'],
        ['80 employees', 'Valid: numerical data.'],
        ['Factory', 'Valid: the type of business/activity.'],
        ['The name of the company', 'Correct: business names and owners’ names earn no application marks.'],
      ], 3))),
    card('Four rules that protect your application marks', [
      '1) **No business name** and 2) **no owner’s name** — they never score.',
      '3) **If the detail is already in the question, it won’t score** (including closely related words).',
      '4) **Don’t repeat the same application point within one question** (e.g. “chocolate” twice in part (c)).',
    ],
      ao(2, mc('Question: “Explain two ways the business could use leaflets to advertise.” Which detail will NOT earn an application mark?', [
        ['Nursery', 'Valid if the business is a nursery and the word is not in the question.'],
        ['Children aged 1 to 3', 'Valid: a specific detail from the case.'],
        ['Leaflets', 'Correct: the word is already in the question, so it cannot be credited as application.'],
        ['Parents who live nearby', 'Valid, if the case describes the customers.'],
      ], 2))),
    card('Reuse the same details across different questions', [
      'You may use the **same application point in parts (b), (c) and (d)** — the rule is only “not twice in the same part”.',
      'Pick the **two or three strongest details** (what it sells + one activity/number) and reuse them. This saves time and still earns the marks.',
    ],
      ao(2, scn('Case: a start-up flower shop plans to use dynamic pricing and has 2 part-time workers. You answer parts (b), (c) and (d) of the same question.', [
        ['Use three different details in each part, hunting through the case every time', 'It works but wastes minutes you need for analysis and evaluation.', false],
        ['Pick “flowers” and “part-time workers” and use them again in each part, once per part', 'Efficient and fully allowed because each part counts separately.', true],
        ['Use “flowers” three times inside part (c)', 'Repeating the same application inside one part earns it only once.', false],
      ], 'Reusing strong details across parts is allowed and quick; repeating within the same part is not rewarded.'))),
    card('Calculations and numbers are application too', [
      'In calculation questions the **figures you use count as application** — so show them.',
      'In a **12-mark Paper 2 (b)** question there are only **2 application marks in total**: one in your analysis and one in your conclusion.',
      'Don’t waste paragraph after paragraph adding extra application — put one in the body and one in the final decision.',
    ],
      ao(2, calc('In a Paper 2 12-mark part (b), how many application marks are available in total?', 2, {
        unit: 'marks',
        formula: 'Application marks = 1 (analysis) + 1 (conclusion)',
        steps: ['One application mark is available within the analysis section', 'One is available for application within the final evaluation', '1 + 1 = 2 marks — so make sure your conclusion is applied too.'],
      }))),
    card('General words: use related examples', [
      'If the case says something general like “clothing” or “food”, you can use **specific related examples** (t-shirts, dresses, sweaters; pasta, bread).',
      'This makes your application clearer and shows you understand the business.',
    ],
      ao(2, mc('A business sells ‘clothing’. For application in a question about training, which is the strongest detail?', [
        ['Clothing', 'Valid but very general; related examples are safer and clearer.'],
        ['Dresses and sweaters', 'Correct: specific, related and clearly connected to what it sells.'],
        ['The company name', 'Never creditable.'],
        ['Things', 'Meaningless.'],
      ], 1))),
  ],

  'u7-analysis': [
    card('Analysis is a chain of reasoning', [
      'Analysis = explaining the **impact** of a point. Build a chain: **WHAT** (the knowledge point) → **HOW** (the direct impact) → **EFFECT** (the final result).',
      'Each link must lead logically to the next.',
    ],
      ao(3, ord('Put the chain of reasoning for autocratic leadership in order.', [
        'Autocratic leaders give clear direction',
        'so decisions are made quickly',
        'which leads to efficiency gains for the business',
      ], 'What (clear direction) → how (decisions made quickly) → effect (efficiency gains). Without the middle “how” the answer feels vague.'))),
    card('Why answers feel “vague”: the missing HOW', [
      'Examiner comments such as “too vague”, “not developed” usually mean the **HOW** is missing.',
      '“Cost-plus pricing leads to higher profit margins” jumps from what to effect. Add the how: **“…ensures every product sold covers its costs, so profit margins rise.”**',
    ],
      ao(3, mc('Which sentence is missing the “how” in its analysis?', [
        ['Fair trade materials fit customers who care about ethics, so the brand’s reputation improves.', 'Complete: what → how → effect.'],
        ['Fair trade materials improve the brand’s reputation.', 'Correct: it jumps from the point to the effect without explaining how.'],
        ['Training reduces mistakes, so less stock is wasted, which lowers costs.', 'Complete chain.'],
        ['Franchising expands market presence quickly, which increases sales and competitiveness.', 'A short but complete chain.'],
      ], 1))),
    card('Ready-made effects you can link to', [
      'Almost any knowledge point can be linked to one of these effects: **profit / profit margins; reputation and brand image; efficiency and competitiveness; working capital and cash flow; customer loyalty and sales**.',
      'Choose the one that follows logically from the HOW.',
    ],
      ao(3, mc('A business introduces just-in-time stock control. Which effect is the most logical end of the chain?', [
        ['Lower inventory holding costs, so working capital increases', 'Correct: little stock held → less cash tied up → more working capital.'],
        ['Higher advertising costs', 'Does not follow from JIT.'],
        ['Stronger customer loyalty', 'Not a direct result of JIT.'],
        ['Higher labour turnover', 'No logical link.'],
      ], 0))),
    card('Link phrases show your reasoning', [
      'Use connectors to make each link visible: **“this means that…”, “which leads to…”, “as a result…”, “so…”, “resulting in…”**.',
      'Further analysis adds another link: “…this means that fewer customers return, resulting in lower sales.”',
    ],
      ao(3, mc('Which answer shows further analysis (a second step in the chain)?', [
        ['Delegation frees managers’ time.', 'One point only.'],
        ['Delegation frees managers’ time, which means they can focus on planning, resulting in better decisions and higher efficiency.', 'Correct: several linked steps.'],
        ['Delegation is good because it frees time.', 'The reason is stated but not extended.'],
        ['Delegation, training and motivation are all useful.', 'A list of points with no impact.'],
      ], 1))),
    card('Analysis doesn’t need the case — application does', [
      'AO3 analysis marks come from the **direct impact** of the knowledge point.',
      'AO2 application marks come from the **case detail**. Do both: a case detail in the sentence AND a complete chain.',
    ],
      ao(3, tfd('You must mention the business’s product in every analysis sentence to earn the analysis mark.', 'false', 'Analysis marks reward the logical chain; application marks reward case detail. They are separate marks, so add both.'))),
    card('Analysis + further analysis for 12-mark questions', [
      'In Paper 2 (b) a level-2 paragraph needs a **point and its impact** and, for the best marks, a **further impact**.',
      'When advantages/disadvantages don’t fit (e.g. “roles of marketing”), use **analysis then further analysis** instead.',
    ],
      ao(3, mc('For the role “maintaining customer loyalty” of a theatre, which paragraph shows analysis AND further analysis?', [
        ['Maintaining loyalty is important for the theatre.', 'A statement, not analysis.'],
        ['Loyal customers do not switch to rivals, so there is assured demand, which means shows are fully booked and revenue and profit rise.', 'Correct: point → impact → further impact.'],
        ['Loyalty means customers like the theatre.', 'Restates the point only.'],
        ['The theatre should keep customers because customers are important.', 'Circular and unanalysed.'],
      ], 1))),
  ],

  'u7-evaluation': [
    card('What evaluation is', [
      'Evaluation (AO4) = **a decision supported by evidence**: say which is best AND justify why for THIS business.',
      'It is worth about 13% of the course; it is what moves students from a B to an A or A*.',
      'Evaluation is not a summary of what you already wrote.',
    ],
      ao(4, mc('Which sentence is evaluation rather than summary?', [
        ['In summary, there are advantages and disadvantages.', 'A summary with no decision.'],
        ['Off-the-job training is best because staff learn from specialists, avoiding mistakes with customers.', 'Correct: a decision plus a reason that fits the business.'],
        ['On-the-job and off-the-job training are both types of training.', 'A knowledge statement.'],
        ['Training costs money.', 'A basic fact, no decision.'],
      ], 1))),
    card('Four rules of evaluation', [
      '1) **Make a clear decision.** 2) **Reject the alternative(s).** 3) **Don’t repeat points** you already made (no extra marks). 4) **Avoid new knowledge** — justify using what is already in your answer and the case.',
    ],
      ao(4, mc('Which conclusion breaks the evaluation rules?', [
        ['Off-the-job training is best because it keeps staff focused on a specialist. On-the-job training is less suitable because it passes on bad habits.', 'Follows the rules: decision plus rejection.'],
        ['Training is important and helps businesses in many ways.', 'Correct: no decision and no rejection, just repeating what training is.'],
        ['I recommend Option A because it earns $2,000 more profit than Option B.', 'Decision with evidence.'],
        ['The first factor is most important because without it the business cannot operate; the second is less important because it only changes timing.', 'Clear decision and rejection.'],
      ], 1))),
    card('Two ways to reject the alternative', [
      '**Method 1:** pick a way and justify why it is best (1st mark), then justify why the other way is NOT the best (2nd mark).',
      '**Method 2:** pick a way and justify why it is **better than the other** (a comparison is also a rejection).',
      'The second mark needs a **reason**, not just “the other one is worse”.',
    ],
      ao(4, mc('A student writes: “Planning is the most important function because without a plan the business has no direction. Controlling is less important because it can only check results after the plan exists.” How many evaluation marks does this earn?', [
        ['0', 'There is a decision and a reason, so marks are available.'],
        ['1', 'The decision is justified, but the rejection is also justified.'],
        ['2', 'Correct: a justified decision and a justified rejection of the alternative.'],
        ['3', 'Only two evaluation marks are available in a Paper 1 (d) question.'],
      ], 2))),
    card('Paper 1 part (d): the 8-mark pattern', [
      'For “Explain two… Which is best? Justify” do **K + A + N for each way** (6 marks), then **2 evaluation marks**: the decision with reasons, and the rejection of the alternative.',
      'For “Do you think the advantages are greater than the disadvantages?” do one advantage and one disadvantage (K + A + N each), then evaluate which outweighs.',
    ],
      ao(4, scn('Part (d): “Explain two factors a business should consider when choosing a source of finance. Which is likely to be most important? Justify.” You have written both factors with analysis. What next?', [
        ['Write a third factor with more analysis', 'Extra factors earn nothing; the marks left are evaluation.', false],
        ['State which factor is most important and why; then explain why the other is less important', 'Earns both evaluation marks (decision + rejection).', true],
        ['Summarise both factors in one sentence', 'Repeating points earns no marks.', false],
      ], 'Always leave time for the final two marks; they come from a clear decision and a justified rejection.'))),
    card('Make the justification fit the business', [
      'Your reason should depend on **this business’s situation** (size, objectives, numbers).',
      'E.g. “Off-the-job training is best for a fashion shop because staff learn current trends from specialists” — the reason mentions the context.',
    ],
      ao(4, mc('Which justification is best linked to the case (a small start-up with $5,000 savings)?', [
        ['A loan is the best source because loans are common.', 'Generic: ignores the case.'],
        ['Owner’s savings are best because the business is a start-up with $5,000 of its own funds and wants to avoid interest.', 'Correct: the reason relies on the business’s situation.'],
        ['Share capital is best for every business.', 'Over-generalised.'],
        ['The cheapest source is always the best.', 'A rule with no connection to this business.'],
      ], 1))),
    card('Common evaluation mistakes', [
      '“**It depends**” with no decision earns nothing. **Summarising** earns nothing. **Repeating** the analysis earns nothing.',
      '**Introducing brand-new knowledge** in the conclusion can lose the mark — justify with what you already explained.',
    ],
      ao(4, tfd('Ending with “It depends on the situation” is enough to earn evaluation marks.', 'false', 'You must still make a decision and justify it with reasons for this business. “It depends” can only be part of a justified decision.'))),
  ],

  'u7-paper2': [
    card('Part (a): three styles of 8-mark question', [
      '**Generic** (no case in the question): about **4 knowledge + 4 analysis**.',
      '**Applied** (case in the question): about **4 knowledge + 4 application**; still explain well.',
      '**Two reasons** (each reason): **1 knowledge + 2 analysis + 1 application**.',
    ],
      ao(3, mc('“Explain two reasons why the business wants to expand into new markets” is a two-reasons question. How should each reason be built to earn its 4 marks?', [
        ['Knowledge only for both reasons', 'Misses the analysis and application marks.'],
        ['Reason (knowledge) → two steps of analysis → one case detail', 'Correct: 1K + 2N + 1A for each reason.'],
        ['One long paragraph about one reason', 'You need two reasons.'],
        ['Four case details per reason', 'Application is limited to one per reason.'],
      ], 1))),
    card('Part (b): the 12-mark levels', [
      '**Level 1 (1–4)**: knowledge — e.g. three methods identified + one application.',
      '**Level 2 (5–8)**: analysis of at least one option; each extra analysed option adds a mark; plus application.',
      '**Level 3 (9–12)**: needs **at least two level-2 analyses** first, then an evaluation that rejects alternatives and justifies the best.',
    ],
      ao(3, calc('A student writes three well-analysed level-2 paragraphs (with application) but no conclusion at all. What is the maximum mark band they can reach?', 8, {
        unit: 'marks',
        formula: 'Level 2 maximum = 8 marks',
        steps: ['Without evaluation, the answer cannot access level 3', 'Level 2 ranges from 5 to 8 marks', 'The top of level 2 is 8 marks — the last 4 marks are only available through justified evaluation.'],
      }))),
    card('Writing a level-2 paragraph', [
      'For each option: **advantage with its impact AND disadvantage with its impact** (when the question says “consider the advantages and disadvantages”).',
      'You don’t need long paragraphs: a clear **point + impact** for the advantage and again for the disadvantage is enough for level 2.',
    ],
      ao(3, mc('Consider advantages and disadvantages of television advertising for a rug company. Which is a level-2 paragraph?', [
        ['TV is expensive.', 'Knowledge only.'],
        ['TV lets customers see the full range of rugs, so they can make an informed choice. However it is only seen at set times, so it can be missed, wasting the advertising budget.', 'Correct: advantage and disadvantage, each with its impact.'],
        ['TV, billboards and sponsorship are advertising methods.', 'A list of knowledge.'],
        ['Television is the best advertising method.', 'A decision with no analysis.'],
      ], 1))),
    card('Level 3: the conclusion that earns the top marks', [
      'A level-3 conclusion has **three evaluation points**: **reject option 1** with a reason, **reject option 2** with a reason, **justify the best** with a reason.',
      'Add **one application** here (case detail) — it is the second application mark.',
      'Don’t repeat earlier points or add new knowledge.',
    ],
      ao(4, mc('Which conclusion is closest to a full level 3?', [
        ['In conclusion, television is the best.', 'A decision with no reasons.'],
        ['Billboards are not best because drivers focus on the road; sponsorship is not best because it ties the brand to a team’s results; television is best because it shows the rug patterns to the target new market.', 'Correct: two justified rejections, one justified choice, and a case detail (rug patterns, new market).'],
        ['All three methods have good and bad points so the business should decide.', 'No decision.'],
        ['Television is best because it is expensive but works.', 'A reason that contradicts itself.'],
      ], 1))),
    card('When “advantages and disadvantages” does not fit', [
      'For questions like “three roles of marketing” or “which factor is most important”, **use analysis then further analysis** for each item.',
      'Each paragraph: point → impact → further impact. Then reject two and justify one in the conclusion.',
    ],
      ao(3, scn('The question lists three roles of marketing (identifying needs, satisfying needs, maintaining loyalty). You cannot sensibly give a disadvantage of a role. What should each paragraph contain?', [
        ['One sentence naming the role', 'Knowledge only: level 1 at best.', false],
        ['The role, its impact and a further impact (e.g. increased demand → more revenue)', 'Level-2 quality analysis even without advantages and disadvantages.', true],
        ['Invented disadvantages to fit the usual pattern', 'Forced and often illogical.', false],
      ], 'Use analysis plus further analysis when the question’s content does not suit advantage/disadvantage paragraphs.'))),
    card('Calculation questions in 12 marks', [
      'Usually two options to compare. The best calculations: **profit, profit margin, gross profit, gross profit margin, current ratio, acid test, break-even output, margin of safety**.',
      '**One calculation per option** (with a sentence of meaning) can earn a level-2 paragraph each.',
      'Keep a **new calculation for the conclusion** — e.g. the difference between the options — as your justification. Do not use all your calculations in the analysis.',
    ],
      ao(4, calc('Option A has a gross profit margin of 75% and option B has 83.33%. As your level-3 justification you calculate how much higher option B’s margin is. What is the difference (percentage points, to 2 d.p.)?', 8.33, {
        unit: '%',
        tol: 0.01,
        formula: 'Difference = 83.33% − 75%',
        steps: ['83.33 − 75 = 8.33', 'Writing “option B’s margin is 8.33% higher, so it is better” is a new calculation that justifies your choice.'],
      }))),
    card('Time and checklist', [
      '90 minutes for 80 marks ≈ **about 1.1 minutes per mark**: a 12-mark answer takes about 13 minutes.',
      'Read the case and underline application points first. Use the appendices. Attempt every part — a blank answer is 0.',
      'Final 2 minutes: did I answer every sentence of the question, reject alternatives, and use one application in my conclusion?',
    ],
      ao(3, calc('Using about 1.1 minutes per mark, roughly how many minutes should you spend on a 12-mark part (b)? (Round to the nearest whole number.)', 13, {
        unit: 'minutes',
        tol: 0.6,
        formula: 'Time = marks × 1.1 minutes',
        steps: ['12 × 1.1 = 13.2', 'About 13 minutes — leave the last two for your conclusion check.'],
      }))),
  ],
};
