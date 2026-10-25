import { mc, tfd, scn, pc } from '../builders.js';

// Advantages & disadvantages cards for Units 3-4.
export const pc2 = {
  'u3-market': [
    pc('Mass markets and niche markets', [
      ['Mass market', ['Very large sales; economies of scale', 'Wide customer base spreads risk'], ['Intense competition', 'Low prices and profit margins per unit']],
      ['Niche market', ['Less competition', 'Can charge higher prices', 'Loyal customers'], ['Small market and limited growth', 'Vulnerable if tastes change or a big firm enters']],
    ],
      mc('An ADVANTAGE of a niche market is…', [
        ['Less competition and the ability to charge higher prices', 'Correct.'],
        ['A huge customer base', 'That is a mass-market feature.'],
        ['Very low prices', 'Niche prices are often high.'],
        ['No risk', 'There are risks.'],
      ], 0)),
    pc('Market segmentation', [
      ['Segmenting a market (age, income, location, gender, lifestyle)', ['Marketing is targeted so less is wasted', 'Products fit customers’ needs better', 'Can raise sales and loyalty'], ['Extra research and product costs', 'Each segment is smaller', 'Risk of ignoring other segments']],
    ],
      mc('A DISADVANTAGE of market segmentation is…', [
        ['Extra costs of researching and adapting products for each segment', 'Correct.'],
        ['Customers’ needs are met less well', 'The opposite.'],
        ['Marketing is less targeted', 'The opposite.'],
        ['It removes the need for research', 'No.'],
      ], 0)),
  ],

  'u3-research': [
    pc('Primary research methods', [
      ['Questionnaires / surveys', ['Reach many people cheaply (esp. online)', 'Easy to analyse'], ['Low response rate; poorly designed questions bias results']],
      ['Interviews', ['Detailed, personal answers', 'Can probe responses'], ['Slow and costly', 'Interviewer bias']],
      ['Focus groups', ['In-depth views on why people think as they do'], ['Costly; small sample; group pressure']],
      ['Observation', ['Records actual behaviour'], ['Cannot explain why; time-consuming']],
    ],
      mc('An ADVANTAGE of focus groups is…', [
        ['They give in-depth views on why customers feel as they do', 'Correct.'],
        ['They are always cheap', 'They can be costly.'],
        ['They use huge samples', 'They are small.'],
        ['They remove bias', 'Group pressure can bias.'],
      ], 0)),
    pc('Primary vs secondary research and sampling', [
      ['Primary research', ['Specific to the firm’s needs', 'Up to date and original'], ['Costly and slow', 'May be biased']],
      ['Secondary research', ['Cheap and quick', 'Wide range of sources (government, reports, competitors)'], ['May be out of date', 'Collected for another purpose, so less specific']],
      ['Sampling', ['Cheaper and faster than asking everyone'], ['May be unrepresentative, so results may be inaccurate']],
    ],
      mc('A DISADVANTAGE of secondary research is…', [
        ['It may be out of date or not specific to the firm’s needs', 'Correct.'],
        ['It is very costly', 'It is usually cheap.'],
        ['It takes months to collect', 'It already exists.'],
        ['It is always biased', 'Not always.'],
      ], 0)),
  ],

  'u3-product-price': [
    pc('Developing new products', [
      ['Developing new products', ['Stay ahead of competitors', 'Replace declining products', 'Spread risk across a range'], ['High research and development costs', 'Risk of failure', 'Takes a long time']],
    ],
      mc('A DISADVANTAGE of developing new products is…', [
        ['High costs and the risk of failure', 'Correct.'],
        ['Reduced chance of growth', 'It usually helps growth.'],
        ['No need for research', 'More research is needed.'],
        ['Cheaper than extension strategies always', 'Not always.'],
      ], 0)),
    pc('Extension strategies', [
      ['New markets (e.g. overseas)', ['Fresh customers and sales'], ['Research and promotion costs', 'Different tastes/laws']],
      ['New uses for the product', ['Attracts new customers cheaply'], ['May not be credible or demanded']],
      ['Adapting product or packaging', ['Refreshes interest; low cost'], ['Customers may not notice or like change']],
      ['More advertising / sales promotion', ['Raises awareness and short-term sales'], ['Costly; effect may be only temporary']],
    ],
      mc('An ADVANTAGE of an extension strategy is…', [
        ['It can lengthen the life of a product more cheaply than a new product', 'Correct.'],
        ['It always stops decline completely', 'It may only delay it.'],
        ['It costs nothing', 'It costs money.'],
        ['It guarantees profit', 'No.'],
      ], 0)),
    pc('Pricing methods (1)', [
      ['Cost-plus', ['Simple; guarantees a mark-up over cost'], ['Ignores competitors and demand']],
      ['Competitive pricing', ['Stays in line with rivals; protects market share'], ['Profit margins may be squeezed', 'Needs close monitoring of rivals']],
      ['Penetration pricing', ['Wins customers and market share quickly'], ['Low profit at first', 'Customers may resist later price rises']],
    ],
      mc('A DISADVANTAGE of penetration pricing is…', [
        ['Low profit at first and difficulty raising prices later', 'Correct.'],
        ['It deters customers with a high price', 'That is skimming.'],
        ['It ignores rivals completely', 'No.'],
        ['It guarantees high profit', 'No.'],
      ], 0)),
    pc('Pricing methods (2)', [
      ['Price skimming', ['High profit per unit early on', 'Recovers development costs quickly', 'Gives a premium image'], ['Fewer customers buy', 'Attracts competitors']],
      ['Dynamic pricing', ['Raises revenue by matching price to demand', 'Fills spare capacity'], ['Customers may feel treated unfairly', 'Needs data and systems']],
    ],
      mc('An ADVANTAGE of price skimming is…', [
        ['High profit per unit early in the product’s life', 'Correct.'],
        ['It wins market share fastest', 'That is penetration.'],
        ['It deters all competitors', 'It often attracts them.'],
        ['It suits mass-market goods only', 'No.'],
      ], 0)),
  ],

  'u3-place-promotion': [
    pc('Distribution channels', [
      ['Direct to customers', ['Producer keeps all the profit', 'Control over brand and service'], ['Must handle delivery and marketing itself', 'Limited reach']],
      ['Through retailers', ['Wide reach to customers', 'Retailer handles selling and display'], ['Retailer takes a margin', 'Less control of how the product is sold']],
      ['Through wholesalers', ['Buy in bulk, so fewer deliveries for the producer', 'Wholesaler stores stock'], ['Extra margin raises prices', 'Less contact with customers']],
      ['Through agents', ['Local expertise and contacts', 'Paid only on commission'], ['Agent’s commission cuts profit', 'Less control; may sell rival products too']],
    ],
      mc('An ADVANTAGE of selling direct to customers is…', [
        ['The producer keeps the full profit margin', 'Correct.'],
        ['No delivery needed', 'The producer must deliver.'],
        ['Wide reach through shops', 'That is retail.'],
        ['Lower marketing needs', 'More marketing needed.'],
      ], 0)),
    pc('Sales promotion methods', [
      ['Vouchers / special offers / discounts', ['Quick boost in sales', 'Attract new customers'], ['Reduce profit margins', 'Short-lived; customers may wait for offers']],
      ['Reward (loyalty) schemes', ['Encourage repeat purchases and loyalty', 'Provide customer data'], ['Cost of rewards and running the scheme']],
      ['Competitions', ['Generate excitement and publicity'], ['Costly; may attract only prize hunters']],
    ],
      mc('A DISADVANTAGE of discounts is…', [
        ['They reduce profit margins and the boost may be short-lived', 'Correct.'],
        ['They lower sales', 'They usually raise sales.'],
        ['They build permanent loyalty', 'Not necessarily.'],
        ['They cost nothing', 'They cut revenue.'],
      ], 0)),
    pc('Advertising methods', [
      ['Social media', ['Cheap and well targeted', 'Interactive; can go viral'], ['Hard to control; negative comments']],
      ['Targeted emails', ['Low cost, personal, measurable'], ['May be treated as spam; needs email lists']],
      ['Leaflets', ['Cheap local targeting'], ['Often thrown away; limited reach']],
      ['Billboards', ['Visible to many people'], ['Expensive; not targeted; limited message']],
    ],
      mc('An ADVANTAGE of social media advertising is…', [
        ['It is cheap and can be well targeted', 'Correct.'],
        ['It is not interactive', 'It is interactive.'],
        ['It can never be shared', 'It can.'],
        ['It reaches no young people', 'It reaches many.'],
      ], 0)),
    pc('E-commerce', [
      ['For businesses', ['Wider market, even worldwide', 'Lower overheads (fewer shops/staff)', 'Open 24 hours'], ['Website and security costs', 'Intense competition and price comparison', 'Delivery and returns costs']],
      ['For customers', ['Convenient, 24-hour shopping', 'Easy price comparison and wider choice'], ['Cannot see or try products', 'Security and fraud risk', 'Delivery waits']],
    ],
      mc('A DISADVANTAGE of e-commerce for customers is…', [
        ['They cannot try or inspect the product, and there are security risks', 'Correct.'],
        ['Shops are closed at night', 'Online is open 24/7.'],
        ['Prices are hard to compare', 'Easy to compare.'],
        ['Travel is needed', 'Not needed.'],
      ], 0)),
  ],

  'u3-strategy-legal': [
    pc('Entering new markets abroad', [
      ['Entering overseas markets', ['Increased sales and profit', 'Spreads risk (not reliant on home market)', 'Economies of scale'], ['Cultural differences', 'Lack of knowledge of local market', 'Legal requirements and trade barriers; transport costs']],
    ],
      mc('A DISADVANTAGE of entering a new overseas market is…', [
        ['Cultural differences and lack of local knowledge', 'Correct.'],
        ['Spreads risk', 'An advantage.'],
        ['Increased sales', 'An advantage.'],
        ['Economies of scale', 'An advantage.'],
      ], 0)),
    pc('Legal controls on marketing', [
      ['Laws on misleading promotion and faulty goods', ['Protect customers and build trust', 'Fairer competition'], ['Higher costs of testing and compliance', 'Restricts advertising claims', 'Penalties and refunds if broken']],
    ],
      mc('How can legal controls be a DISADVANTAGE to a business?', [
        ['They raise costs and restrict what claims can be made', 'Correct.'],
        ['They remove all competitors', 'No.'],
        ['They reduce customer trust', 'They build it.'],
        ['They guarantee profit', 'No.'],
      ], 0)),
  ],

  'u4-efficiency-lean': [
    pc('Lean production methods', [
      ['Just-in-time (JIT)', ['Low stock; less storage space', 'Less waste and tied-up cash'], ['Late deliveries stop production', 'No buffer if demand jumps', 'Frequent ordering costs']],
      ['Kaizen', ['Many small improvements cut waste', 'Motivates employees'], ['Slow results', 'Needs commitment and training']],
    ],
      mc('A DISADVANTAGE of JIT is…', [
        ['Late deliveries can stop production', 'Correct.'],
        ['Very high storage costs', 'JIT reduces them.'],
        ['Large amounts of waste', 'JIT cuts waste.'],
        ['Cash is tied up in stock', 'JIT frees cash.'],
      ], 0)),
    pc('Holding inventory', [
      ['Holding high inventory', ['Meets sudden demand', 'Avoids production stoppages', 'Bulk-buy discounts'], ['Storage costs and risk of damage/obsolescence', 'Cash tied up']],
      ['Holding low inventory', ['Low storage costs and less waste', 'Cash freed for other uses'], ['Risk of stock-outs and lost sales']],
    ],
      mc('An ADVANTAGE of holding LOW inventory is…', [
        ['Lower storage costs and more cash available', 'Correct.'],
        ['No risk of stock-outs', 'Higher risk.'],
        ['Bulk discounts always', 'Needs larger orders.'],
        ['Better protection against delays', 'Higher inventory protects.'],
      ], 0)),
  ],

  'u4-methods-technology': [
    pc('Job, batch and flow production', [
      ['Job production', ['Unique, high-quality products', 'Flexible to customer needs', 'High prices possible'], ['Slow and labour-intensive', 'High cost per unit']],
      ['Batch production', ['Flexible; can change products', 'Some efficiency from repetition'], ['Machines must be reset between batches', 'Storage of work-in-progress']],
      ['Flow production', ['Lowest unit cost at high volume', 'Fast, consistent output'], ['Very high set-up cost', 'Inflexible', 'Breakdowns stop the whole line']],
    ],
      mc('An ADVANTAGE of flow production is…', [
        ['Lowest unit cost for large volumes', 'Correct.'],
        ['Can easily make unique products', 'That is job production.'],
        ['Very low set-up cost', 'Set-up is very high.'],
        ['Very flexible', 'It is inflexible.'],
      ], 0)),
    pc('Technology in production and services', [
      ['For businesses', ['Faster, more consistent output', 'Lower unit costs and fewer errors', 'Greater productivity (e.g. contactless payments)'], ['High capital costs', 'Breakdowns and cyber-risk', 'Need for retraining']],
      ['For employees', ['Safer, less repetitive work', 'New skills in demand'], ['Job losses (redundancy)', 'Need to retrain']],
    ],
      mc('A DISADVANTAGE of new technology for employees is…', [
        ['Possible job losses and the need to retrain', 'Correct.'],
        ['Safer working conditions', 'An advantage.'],
        ['Less repetitive tasks', 'An advantage.'],
        ['Faster output', 'A business benefit.'],
      ], 0)),
  ],

  'u4-break-even': [
    pc('Break-even analysis', [
      ['Using break-even analysis', ['Simple to understand and calculate', 'Shows the output needed to avoid a loss', 'Helps decisions on price, costs and loans'], ['Assumes all output is sold', 'Assumes constant price and variable cost per unit', 'Ignores changes in demand and other costs']],
    ],
      mc('A limitation of break-even analysis is…', [
        ['It assumes all units made are sold at a constant price', 'Correct.'],
        ['It cannot find break-even output', 'It can.'],
        ['It ignores fixed costs', 'It uses them.'],
        ['It guarantees profit', 'It does not.'],
      ], 0)),
  ],

  'u4-quality-sustainability-location': [
    pc('Quality control vs quality assurance', [
      ['Quality control', ['Catches faulty goods before customers get them', 'Simple to organise'], ['Faults already made, so waste', 'Cost of inspectors', 'Does not improve the process']],
      ['Quality assurance', ['Prevents faults at every stage', 'Less waste and fewer returns', 'Builds reputation and trust'], ['Training and system costs', 'Takes time to introduce']],
    ],
      mc('An ADVANTAGE of quality assurance is…', [
        ['It prevents faults throughout production and reduces waste', 'Correct.'],
        ['It only inspects finished goods', 'That is quality control.'],
        ['It needs no training', 'It needs training.'],
        ['It is always the cheapest', 'Not always.'],
      ], 0)),
    pc('Becoming more sustainable', [
      ['Sustainable production', ['Better reputation and more customers', 'Lower energy and waste costs over time', 'Meets laws'], ['High set-up costs (new equipment)', 'Prices may rise', 'Takes time to pay back']],
    ],
      mc('An ADVANTAGE of becoming more sustainable is…', [
        ['An improved reputation and possible cost savings', 'Correct.'],
        ['Lower set-up costs', 'Usually higher.'],
        ['Less customer interest', 'Often more interest.'],
        ['No effect on laws', 'It helps meet laws.'],
      ], 0)),
  ],
};
