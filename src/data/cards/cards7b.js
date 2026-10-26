import { card, worked } from '../builders.js';

// Unit 7 · Exam Technique, part 2: A* model answers for every type of Paper 1 and Paper 2 question, plus the exam-day playbook.
// All scenarios are original. Colours: yellow = AO1 knowledge, blue = AO2 application, green = AO3 analysis, orange = AO4 evaluation.
export const cards7b = {
  /* =========================== PAPER 1 =========================== */
  'u7-paper1': [
    card('How to use these model answers', [
      'Each example shows the **case**, the **question**, the **mark map** and an **A* answer** coloured by objective.',
      'Read the **question first**, cover the answer, and try to plan your own. Then compare: did you get a yellow, blue, green and orange piece in the right places?',
      'Notice that **every coloured piece is short**. A* answers are tight, not long.',
    ]),
    worked('A* Paper 1 (a): Define [2 marks]', {
      question: 'Define ‘working capital’.',
      marks: 2,
      map: '2 × AO1 (knowledge)',
      answer: '[[K|Working capital is the finance a business needs to pay its day-to-day costs,]] [[K|worked out as current assets minus current liabilities, for example $30,000 − $18,000 = $12,000.]]',
      notes: [
        'First part gives the **core meaning** (what it is for).',
        'Second part adds **precision** with the formula and a short example, which protects the second mark.',
        'No case details are needed: part (a) is pure knowledge.',
      ],
    }),
    worked('A* Paper 1 (a): another definition [2 marks]', {
      question: 'Define ‘economies of scale’.',
      marks: 2,
      map: '2 × AO1 (knowledge)',
      answer: '[[K|Economies of scale are the reductions in average cost per unit]] [[K|that a business gains as it grows larger, for example buying materials in bulk at a discount.]]',
      notes: [
        'It says **average cost per unit** and **as it grows** — the two ideas the examiner wants.',
        'The example (bulk buying) is a **specific type** of economy, so the answer cannot be called vague.',
      ],
    }),
    worked('A* Paper 1 (a)/(b): Identify [2 marks]', {
      question: 'Identify two reasons why consumer spending patterns might change.',
      marks: 2,
      map: '2 × AO1 (knowledge): 1 mark per correct reason',
      answer: '[[K|Higher incomes.]] [[K|Changes in prices.]]',
      notes: [
        '**Name them and stop.** Explaining would earn nothing extra.',
        'Other acceptable points: changes in fashion, population changes, interest rates, advertising.',
      ],
    }),
    worked('A* Paper 1 (b): Outline two ways [4 marks]', {
      stem: 'Maple Beds is a private limited company that makes wooden beds in a factory with 120 employees. It sells to shops in its own country.',
      question: 'Outline two ways a recession might affect Maple Beds.',
      marks: 4,
      map: '2 × AO1 + 2 × AO2 (one knowledge and one application per way)',
      answer: 'Way 1: [[K|Lower demand]] [[A|for its wooden beds, because customers delay large purchases.]] Way 2: [[K|It may have to reduce its workforce]] [[A|among its 120 factory employees to cut costs.]]',
      notes: [
        'Each way = **knowledge point + one case detail** (wooden beds; 120 employees).',
        '**No explanation** is needed, so the answer is short but earns all four marks.',
        'The business name is not used for credit; “wooden beds” and “120 employees” are.',
      ],
    }),
    worked('A* Paper 1 (b): Calculate [4 marks]', {
      stem: 'Dalia makes leather bags. Each bag sells for $60 and the variable cost is $24. Her fixed costs are $36,000 a year.',
      question: 'Calculate Dalia’s break-even output. Show your working.',
      marks: 4,
      map: '1 × AO1 (formula) + 3 × AO3 (selecting figures, working, correct answer)',
      answer: '[[K|Break-even output = fixed costs ÷ contribution per unit.]] [[N|Contribution per bag = $60 − $24 = $36.]] [[N|Break-even = $36,000 ÷ $36]] [[N|= 1,000 bags.]]',
      notes: [
        'Write the **formula first**: it earns a mark even if you slip later.',
        'Show **each step** and finish with the answer **and its unit** (bags).',
        'In calculation questions the numbers you select count as application in some questions; always use the case figures.',
      ],
    }),
    worked('A* Paper 1 (c): Explain two ways [6 marks]', {
      stem: 'A bakery sells bread and cakes to local shops, employs 12 staff and bakes in large batches each morning. Many unsold cakes are thrown away.',
      question: 'Explain two ways the bakery could reduce waste.',
      marks: 6,
      map: '2 × AO1 + 2 × AO2 + 2 × AO3',
      answer: [
        '[[K|The bakery could bake in smaller batches.]] [[A|Making fewer cakes at a time for local shops]] [[N|means fewer unsold cakes are thrown away, which lowers ingredient costs and raises profit.]]',
        '[[K|It could use just-in-time ordering.]] [[A|Flour and butter would arrive when its 12 staff need them,]] [[N|so less stock goes out of date, which saves money and keeps more cash in the business.]]',
      ],
      notes: [
        'Each way follows **K → A → N**: point, case detail, chain of reasoning.',
        'The analysis includes a **how** (“means fewer unsold cakes are thrown away”) before the **effect** (“lowers costs, raises profit”).',
        'Different application details in each way (cakes/local shops; 12 staff) so neither is repeated.',
      ],
    }),
    worked('A* Paper 1 (c): another “explain two” [6 marks]', {
      stem: 'A copper mine in Country Y employs 2,500 workers and uses heavy machinery to extract ore for export.',
      question: 'Explain two ways the mine’s activities could harm the environment.',
      marks: 6,
      map: '2 × AO1 + 2 × AO2 + 2 × AO3',
      answer: [
        '[[K|Air pollution.]] [[A|The heavy machinery at the copper mine produces dust and fumes,]] [[N|which can damage the health of people living nearby and lead to future health problems for the community.]]',
        '[[K|Depletion of natural resources.]] [[A|As the mine extracts more copper,]] [[N|there is less ore left for other uses and for future generations.]]',
      ],
      notes: [
        'The **analysis** is the direct impact of the knowledge point (health problems; fewer resources).',
        '**Copper** and **heavy machinery** are application details not found in the question wording.',
      ],
    }),
    worked('A* Paper 1 (d): Explain two factors, then decide [8 marks]', {
      stem: 'Oscar plans to open a nursery for children aged 1 to 3. He will be a sole trader with $5,000 of savings and needs $40,000 to refurbish the premises.',
      question: 'Explain two factors Oscar should consider when choosing a source of finance. Which factor is likely to be most important? Justify your answer.',
      marks: 8,
      map: '2 × AO1 + 2 × AO2 + 2 × AO3 + 2 × AO4',
      answer: [
        '[[K|One factor is the cost of the finance.]] [[A|If the interest on the $40,000 for the nursery refurbishment is high,]] [[N|expenses rise, which leaves less money for staff and toys and lowers profit.]]',
        '[[K|Another factor is the amount required.]] [[A|Oscar has only $5,000 of savings against a $40,000 need,]] [[N|so a source that provides too little means he cannot refurbish and cannot open to earn any revenue.]]',
        '[[E|The amount required is most important, because without enough funds the nursery cannot start at all.]] [[E|Cost is less important because high interest only matters once the nursery is open and earning, and it can be managed by comparing lenders.]]',
      ],
      notes: [
        'Two complete K → A → N chains (6 marks).',
        'The **first evaluation mark**: a clear decision (“amount required is most important”) with a reason linked to the case.',
        'The **second evaluation mark**: the other factor is rejected with a **reason**, and no new knowledge is introduced.',
      ],
    }),
    worked('A* Paper 1 (d): Do you think advantages are greater than disadvantages? [8 marks]', {
      stem: 'Brightline is a private limited company that makes bicycles in a factory with 90 employees. Its directors plan to take over a rival bicycle maker.',
      question: 'Do you think the advantages of horizontal integration to Brightline are greater than the disadvantages? Justify your answer.',
      marks: 8,
      map: '2 × AO1 + 2 × AO2 + 2 × AO3 + 2 × AO4',
      answer: [
        '[[K|An advantage is economies of scale.]] [[A|Buying steel for more bicycles in bulk]] [[N|lowers the cost of each bicycle, which raises profit margins.]]',
        '[[K|A disadvantage is that the two firms may have different ways of working.]] [[A|Brightline’s 90 employees could feel uncertain about the takeover,]] [[N|which demotivates them and lowers the quality of the bicycles, damaging the brand’s reputation.]]',
        '[[E|The disadvantage is greater, because a damaged reputation means fewer customers, which removes the benefit of lower costs.]] [[E|The lower cost per bicycle matters little if buyers no longer trust the brand.]]',
      ],
      notes: [
        'One **advantage** and one **disadvantage**, each as K → A → N.',
        'The evaluation makes a **decision** and justifies it by showing why the disadvantage **outweighs** the advantage.',
        'The second evaluation point **builds on** the first idea rather than repeating it.',
      ],
    }),
    worked('A* Paper 1 (d): Which method is best? [8 marks]', {
      stem: 'A clothing retailer sells dresses and sweaters through 40 shops and employs 600 people. It wants its staff to give better customer service.',
      question: 'Explain two methods of training the retailer could use. Which method is likely to be best? Justify your answer.',
      marks: 8,
      map: '2 × AO1 + 2 × AO2 + 2 × AO3 + 2 × AO4',
      answer: [
        '[[K|Off-the-job training]] [[A|would teach shop staff up-to-date knowledge about dresses and sweaters,]] [[N|so they give more informed advice, which increases customer satisfaction and sales.]]',
        '[[K|On-the-job training]] [[A|lets the 600 employees learn while serving customers in their shops,]] [[N|so there is no lost working time, but the trainer may pass on bad habits that lead to mistakes.]]',
        '[[E|Off-the-job training is best because specialists focus only on training, so there are fewer mistakes with customers.]] [[E|On-the-job training is less suitable because bad habits can spread across 40 shops, harming service quality.]]',
      ],
      notes: [
        'The answer uses **different application** in each way (dresses and sweaters; 600 employees; 40 shops).',
        'The evaluation makes a decision and **rejects the alternative with a reason**.',
      ],
    }),
    worked('A* Paper 1: data response with calculations [8 marks]', {
      stem: 'A shop’s results: Year 1 — revenue $80,000, cost of sales $50,000, expenses $20,000. Year 2 — revenue $90,000, cost of sales $60,000, expenses $28,000.',
      question: 'Do you think the shop’s performance improved in Year 2? Justify your answer using calculations.',
      marks: 8,
      map: 'knowledge (formula) · application and analysis (figures and what they show) · evaluation (decision and justification)',
      answer: [
        '[[K|Profit = revenue − cost of sales − expenses.]] [[A|In Year 1 profit was $80,000 − $50,000 − $20,000 = $10,000, and in Year 2 it was $90,000 − $60,000 − $28,000 = $2,000.]]',
        '[[N|Profit margin fell from 12.5% to about 2.2%, because cost of sales and expenses grew faster than revenue, so every $1 of sales now earns much less profit.]]',
        '[[E|Performance did not improve: revenue rose by $10,000 but profit fell by $8,000.]] [[E|Revenue growth is less important than margin here, so the shop must control its costs before it grows further.]]',
      ],
      notes: [
        '**Numbers from the table** are used in the working: this is the application in a calculation question.',
        'The analysis **interprets** the calculation (what the margin means), not just states it.',
        'The evaluation uses **one new comparison** (revenue +$10,000 vs profit −$8,000) as justification.',
      ],
    }),
    card('Strategy: the “safe four out of six”', [
      'In a 6-mark **“Explain two ways…”** question, you can bank **4 marks quickly** by giving, for each way, the **knowledge point** and its **direct impact** (analysis).',
      'Example (way 1): “[[K|Smaller batches]] [[N|mean fewer unsold cakes, which lowers costs.]]” Then **add a case detail** to make it six.',
      'It works only if you know the theory: **knowledge is the engine**.',
    ]),
    card('Strategy: short answers for “Outline”', [
      'In a 4-mark **Outline** question you can score all four marks in **under 25 words**: two knowledge points, two case details.',
      'Do not explain. If you write more than you need, you spend time you will want for part (d).',
      'This is why knowing the theory well gives you a strong score in parts (a) to (c) with very little effort.',
    ]),
  ],

  /* =========================== PAPER 2 =========================== */
  'u7-paper2': [
    card('How the Paper 2 examples are laid out', [
      'Each example shows a **short case**, the **question**, the **mark map** and an **A* answer** coloured by objective.',
      'For 12-mark questions, the notes show the **levels**: where level 1, 2 and 3 are earned and where the **two application marks** sit.',
      'Real Paper 2 questions use a longer insert; here the case is shortened so you can see the structure clearly.',
    ]),
    worked('A* Paper 2 (a): generic question [8 marks]', {
      question: 'Explain four barriers to communication in a business.',
      marks: 8,
      map: 'A generic question (no business in the question): 4 × AO1 + 4 × AO3. No application is needed.',
      answer: [
        '[[K|Using the wrong medium]] [[N|means an urgent message, such as a change in delivery, may arrive too late, so work is delayed.]]',
        '[[K|A lack of feedback]] [[N|means the sender cannot tell whether the message was understood, so mistakes go unnoticed.]]',
        '[[K|A long chain of command]] [[N|distorts the message as it passes through many people, so staff receive different instructions from those intended.]]',
        '[[K|Language differences]] [[N|can cause misunderstandings, which leads to incorrect work and wasted time.]]',
      ],
      notes: [
        'Four separate **knowledge points** (one per barrier), each with its **impact**.',
        'No case details: the question does not mention the business, so application is not credited.',
        'Short, parallel structure: **point → impact**, four times.',
      ],
    }),
    worked('A* Paper 2 (a): applied question [8 marks]', {
      stem: 'BrightBrew is a chain of 25 coffee shops that sells coffee and cakes. Its directors are considering selling franchises to expand quickly.',
      question: 'Explain two advantages and two disadvantages to BrightBrew of selling franchises.',
      marks: 8,
      map: 'Applied question: 4 × AO1 + 4 × AO2. (Explain each point well, but the marks are for the point and the case detail.)',
      answer: [
        'Advantage 1: [[K|rapid expansion.]] [[A|Franchisees’ money opens new coffee shops quickly,]] so the brand reaches more towns without BrightBrew borrowing.',
        'Advantage 2: [[K|fee income.]] [[A|Each franchisee pays a royalty on sales of coffee and cakes,]] giving BrightBrew a steady extra income.',
        'Disadvantage 1: [[K|less control over quality.]] [[A|A franchisee could serve poor-quality coffee,]] which damages the whole brand’s reputation.',
        'Disadvantage 2: [[K|shared profit.]] [[A|Part of the income from each new shop goes to the franchisee,]] so BrightBrew earns less than if it opened the shop itself.',
      ],
      notes: [
        'Each of the **four points** earns a knowledge mark and a different **application** mark (coffee shops, coffee and cakes, brand, new shop).',
        'The explanations are included because they make the application **clear**, even though the marks are for the point and the detail.',
        'Always check: **does the question mention the business?** If so, apply.',
      ],
    }),
    worked('A* Paper 2 (a): two reasons [8 marks]', {
      stem: 'FastBite is a fast food chain with 60 restaurants selling burgers and fries in Country A. Its home market is crowded and sales growth has slowed.',
      question: 'Explain two reasons why FastBite might want to expand into other countries.',
      marks: 8,
      map: 'Each reason: 1 × AO1 + 2 × AO3 + 1 × AO2 (total 8)',
      answer: [
        '[[K|Reason 1: to increase sales.]] [[N|Entering new countries gives FastBite access to many more customers,]] [[N|which raises revenue even though its home market is crowded,]] [[A|and burgers are popular worldwide.]]',
        '[[K|Reason 2: to spread risk.]] [[N|If sales fall in Country A,]] [[N|sales in other countries can make up the difference, so total revenue is more stable.]] [[A|With 60 restaurants at home, FastBite is heavily reliant on one market.]]',
      ],
      notes: [
        'Each reason follows **K → N → N → A**: point, two steps of analysis, one case detail.',
        'The two analysis marks come from a **chain of two links**, not from two separate ideas.',
        'Application can sit **at the end** — what matters is that it is a case detail not already in the question.',
      ],
    }),
    worked('A* Paper 2 (b): three options [12 marks]', {
      stem: 'StrideRight sells affordable running shoes online and through 30 shops. It wants to promote a new range to young adults. Its marketing budget is $50,000.',
      question: 'Consider the advantages and disadvantages of three methods of promotion StrideRight could use: social media, billboards and sponsorship of a local running club. Which method should it use? Justify your answer.',
      marks: 12,
      map: 'Level 1 knowledge (3 methods) · Level 2 analysis (≥2 paragraphs) · Level 3 evaluation (reject two, justify best) · 2 application marks',
      answer: [
        '[[K|Social media advertising]] [[N|reaches young adults cheaply and can show the shoes in action, so more potential buyers see the range. However, posts can be ignored among other content, so some of the budget is wasted.]] [[A|It suits an online shop.]]',
        '[[K|Billboards]] [[N|are seen by many commuters, which raises awareness of the new range, but they are expensive and cannot show much information, so many viewers will not know where to buy.]]',
        '[[K|Sponsorship of a local running club]] [[N|links the shoes to people who run, which builds credibility and loyalty, but only reaches the club’s members, so total awareness stays limited.]]',
        '[[E|Social media is best because it targets young adults directly at a low cost per viewer within the $50,000 budget.]] [[E|Billboards are not best because they reach everyone, including people who do not run, so money is wasted.]] [[E|Sponsorship is not best because its audience is too small for a national range sold through 30 shops.]] [[A|It also drives visitors straight to the online shop.]]',
      ],
      notes: [
        '**Level 1:** three methods named (3 knowledge). **Level 2:** three paragraphs, each with an advantage **and** a disadvantage with impact — that opens level 3.',
        '**Level 3:** three evaluation points: reject billboards (with a reason), reject sponsorship (with a reason), justify social media (with a reason).',
        '**Application:** one in the analysis (online shop) and one in the conclusion (drives visitors to the online shop). No more are needed.',
      ],
    }),
    worked('A* Paper 2 (b): two options [12 marks]', {
      stem: 'PackPro fills bottles for drinks companies using three semi-automatic machines. Output is at maximum and orders are growing. It can buy one new automated line ($60,000) or two more machines of the same type ($45,000).',
      question: 'Consider the advantages and disadvantages of PackPro buying the automated line or two more existing machines. Which should it choose? Justify your answer.',
      marks: 12,
      map: 'Two options: Level 1 (2 knowledge) · Level 2 analysis of both options · Level 3 evaluation (extra justification point because there are only two options) · 2 application marks',
      answer: [
        '[[K|An automated line]] [[N|fills bottles faster with fewer workers, which lowers cost per bottle and raises capacity. However, it costs $60,000 and may need technical staff, so repayments increase expenses.]] [[A|It would let the factory meet growing orders.]]',
        '[[K|Buying more of the same machines]] [[N|is cheaper at $45,000 and staff already know how to operate them, so there is little disruption. However, each machine needs workers and space, so labour costs and unit costs stay high.]]',
        '[[E|The automated line is best because it lowers cost per bottle, which keeps PackPro competitive as orders grow.]] [[E|More existing machines are not best because they need more workers and floor space, so costs rise as output rises.]] [[E|Over time the extra $15,000 for the line is recovered through lower labour costs.]] [[A|This matters for a factory already at maximum output.]]',
      ],
      notes: [
        'Two level-2 paragraphs (one per option) unlock **level 3**.',
        'With only two options there are fewer rejections, so the conclusion adds a **further justification point** (payback) that is **not a repeat**.',
        'Two application marks: one in the analysis (growing orders) and one in the conclusion (maximum output).',
      ],
    }),
    worked('A* Paper 2 (b): three roles, analysis and further analysis [12 marks]', {
      stem: 'FitHub is a gym with 800 members. Membership has dropped by 10% this year.',
      question: 'Consider the following roles of marketing for FitHub: identifying customer needs, satisfying customer needs, and maintaining customer loyalty. Which role is most important for FitHub’s success? Justify your answer.',
      marks: 12,
      map: 'Level 1 knowledge (3 roles) · Level 2 analysis with further analysis · Level 3 conclusion · 2 application marks',
      answer: [
        '[[K|Identifying customer needs]] [[N|lets FitHub find out what members want, such as classes or opening hours, which means it can plan offers that attract customers, increasing membership and revenue.]]',
        '[[K|Satisfying customer needs]] [[N|means providing the classes and equipment members want, which makes them enjoy their visits, so they stay and recommend the gym, raising income.]] [[A|It would help win back the members lost this year.]]',
        '[[K|Maintaining customer loyalty]] [[N|stops members moving to other gyms, which keeps monthly fees coming in, and loyal members bring friends, so membership grows.]]',
        '[[E|Identifying customer needs is the most important role because FitHub cannot satisfy members or keep them loyal unless it first knows what they want.]] [[E|Satisfying needs is less important because it is impossible without that information, and loyalty is less important because it only keeps customers it already understands.]] [[A|With 800 members and a 10% fall, understanding why 80 left is the first step.]]',
      ],
      notes: [
        'The question gives **roles**, not options with advantages and disadvantages, so each paragraph uses **analysis + further analysis**.',
        'The conclusion **rejects two roles with reasons** and justifies the most important, and applies the 800 / 10% numbers.',
        'Notice the **link words**: “which means”, “so”, “increasing”.',
      ],
    }),
    worked('A* Paper 2 (b): calculation question [12 marks]', {
      stem: 'A theatre can stage its first show in two ways. Option 1: 100 tickets at $25, costs $2,000. Option 2: 120 tickets at $20, costs $1,700.',
      question: 'Use the information to consider which option the theatre should choose. Justify your answer using suitable calculations.',
      marks: 12,
      map: 'Two options: Level 2 per option (one calculation each with meaning) · Level 3 with a new calculation · 2 application marks (numbers from the case)',
      answer: [
        '[[K|Option 1 profit = revenue − costs.]] [[A|Revenue is 100 × $25 = $2,500.]] [[N|Profit = $2,500 − $2,000 = $500, a profit margin of 20% ($500 ÷ $2,500 × 100), so each $1 of sales earns 20 cents of profit.]]',
        '[[K|Option 2 profit = revenue − costs.]] [[N|Revenue is 120 × $20 = $2,400, so profit = $2,400 − $1,700 = $700, a profit margin of about 29.2%, so each $1 of sales earns nearly 30 cents.]]',
        '[[E|Option 2 is best because it earns $200 more profit ($700 − $500) and a higher margin on lower sales.]] [[E|Option 1 is less suitable because although its ticket price is higher, its higher costs reduce profit.]] [[A|With 120 people attending, the theatre also builds a bigger audience for later shows.]]',
      ],
      notes: [
        'Each option has a **calculation and what it means** (profit and profit margin): that is a level-2 paragraph per option.',
        '**Keep one new calculation for the conclusion**: the **$200 difference** is the justification. Using it earlier would make the conclusion a repeat.',
        'The numbers used from the case count towards the **application** marks.',
      ],
    }),
    worked('A* Paper 2 (b): ratios and financial position [12 marks]', {
      stem: 'Year 1: current assets $90,000, inventory $40,000, current liabilities $30,000. Year 2: current assets $120,000, inventory $70,000, current liabilities $80,000.',
      question: 'Do you think the business’s liquidity improved in Year 2? Justify your answer using calculations.',
      marks: 12,
      map: 'Two level-2 analyses (current ratio, acid test) · Level 3 evaluation with a new calculation · 2 application marks',
      answer: [
        '[[K|Current ratio = current assets ÷ current liabilities.]] [[A|Year 1: $90,000 ÷ $30,000 = 3.0; Year 2: $120,000 ÷ $80,000 = 1.5.]] [[N|The ratio has halved, so the business has much less cover for its short-term debts.]]',
        '[[K|Acid test = (current assets − inventory) ÷ current liabilities.]] [[N|Year 1: $50,000 ÷ $30,000 = 1.67; Year 2: $50,000 ÷ $80,000 = 0.63. A figure below 1 means liquid assets no longer cover current liabilities, which could cause problems paying suppliers.]]',
        '[[E|Liquidity did not improve; it got worse.]] [[E|Although current assets rose by $30,000, all of this rise was inventory, which is harder to turn into cash, while current liabilities rose by $50,000.]] [[A|The business now has $0.63 of liquid assets for every $1 it owes.]]',
      ],
      notes: [
        'Two ratios = two **level-2 paragraphs**, each with the formula, the figures and what they mean.',
        'The conclusion makes a decision and justifies it with **new comparisons** (rise in assets vs rise in liabilities).',
        'The evaluation uses numbers **from the case**, so it does not introduce new knowledge.',
      ],
    }),
  ],

  /* =========================== PLAYBOOK =========================== */
  'u7-playbook': [
    card('Before you write: the first five minutes', [
      'Skim the **whole paper** so nothing surprises you. In Paper 2, **read the case and appendices first** and underline application points.',
      'Plan roughly: **Paper 1 ≈ 22 minutes per question; Paper 2 ≈ 22 minutes per question**.',
      'Write the **time you will finish each question** in the margin so you can check.',
    ]),
    card('A routine for every question', [
      '**1)** Circle the command word. **2)** Note the number of ways/options. **3)** Note the business topic. **4)** Check for “which is best?”.',
      '**5)** Pick two or three **application details** from the case that are not in the question.',
      '**6)** Write: **K → A → N** for each way, then **E** if the question asks you to choose.',
    ]),
    card('Pick your application details first', [
      'Before part (a), jot down **two or three case details** at the side of the paper: what it sells, one activity, one number.',
      'Then reuse them across (b), (c) and (d) as long as each detail does not appear **in that question’s wording** and is not repeated **within one part**.',
      'This keeps you from hunting through the case every time.',
    ]),
    card('A routine for 12-mark questions', [
      '**1)** Name each option or method (**level 1**). **2)** For each: advantage + impact, disadvantage + impact (**level 2**). Do at least two.',
      '**3)** Conclusion: **reject** the alternatives with reasons; **justify** the best with a reason (**level 3**).',
      '**4)** Make sure **one application** appears in the analysis and **one in the conclusion**.',
    ]),
    card('Calculations: a checklist', [
      '**Write the formula** → **substitute the numbers** → **calculate** → **write the unit** (units, $, %, ratio).',
      'The best calculations to know for Paper 2: **profit, profit margin, gross profit, gross profit margin, current ratio, acid test ratio, break-even output, margin of safety**.',
      'In 12-mark questions, use one calculation per option, then keep **one new calculation** (such as the difference) for the conclusion.',
    ]),
    card('If you are running out of time', [
      'Secure the **easy marks first**: knowledge points and short applications. Leave long analysis for later.',
      'In an 8- or 12-mark answer, **write the decision and one reason** rather than leaving the evaluation blank.',
      'Never leave a part empty — even one correct point earns a mark.',
    ]),
    card('The two-minute final check', [
      'Did I answer **every sentence** of the question (including “which is best?”)?',
      'Did I **reject the alternative** and give a reason?',
      'Is there a **case detail** in each “way” and **one in the conclusion**?',
      'Did I include **units** and **show working** in calculations?',
    ]),
    card('The most common ways students lose marks', [
      'Explaining an **Identify** question instead of naming points.',
      '**Vague** definitions with no example.',
      '**No application**: answers that could be about any business.',
      '**Missing “how”** in the analysis chain.',
      'No **decision** or no **rejection** in the evaluation.',
      '**Running out of time** on the last question.',
    ]),
    card('How to use this app to prepare', [
      'Work through **Units 1–6**: each lesson teaches in bites, then tests you with critical-thinking questions.',
      'Take each **Mega Quiz**, then the **Paper 1 and Paper 2 exam practice**; write real answers and compare with the colour-coded models.',
      'Use the **Mistake Bank** daily, and re-read the **A* model answers** in this unit before every full practice paper.',
    ]),
    card('What top candidates do differently', [
      'They **know the theory cold**, so knowledge and short outlines take minutes, not tens of minutes.',
      'They **tie every point to the case** with a different detail in each part.',
      'They write **short chains** (what → how → effect) instead of long paragraphs.',
      'They always finish with a **decision, a rejection and a reason** — and they never repeat themselves.',
    ]),
  ],
};
