import { mc, ord, scn, calc, tfd } from '../builders.js';

export const extra3 = {
  'u3-market': [
    calc('Last year a firm sold $3m in a $20m market. This year it sells $4.2m in a $24m market. What is its market share THIS year (%)?', 17.5, {
      unit: '%',
      formula: 'Market share = (firm sales ÷ total market sales) × 100',
      steps: ['4.2 ÷ 24 = 0.175', '0.175 × 100 = 17.5%', 'Last year: 3 ÷ 20 = 15%, so share has risen'],
    }),
    mc('A firm’s sales revenue rose 10% but its market share fell. What is the most likely explanation?', [
      ['The whole market grew faster than the firm’s sales', 'Correct: rivals or the market grew by more than 10%.'],
      ['The market shrank', 'If it shrank, share would likely rise.'],
      ['Prices fell for the whole market only', 'Cannot explain a share fall by itself.'],
      ['The firm exited the market', 'It still has sales.'],
    ], 0),
    mc('A key DISADVANTAGE of a niche market is…', [
      ['Small customer base, so the firm is vulnerable to changes or big new entrants', 'Correct.'],
      ['Intense price competition from many rivals', 'That is more typical of mass markets.'],
      ['Low prices must be charged', 'Niche products often command higher prices.'],
      ['No loyalty from customers', 'Niche customers are often loyal.'],
    ], 0),
    tfd('It is usually cheaper to keep existing customers loyal than to win new ones.', 'true', 'Loyal customers buy repeatedly and recommend the firm, so retention costs less than acquisition.'),
    mc('Which is a reason why consumer spending patterns may change?', [
      ['Rising incomes, changing fashions or higher unemployment', 'Correct.'],
      ['A firm choosing a new logo', 'This does not change market-wide spending.'],
      ['Stable prices and tastes', 'That would mean no change.'],
      ['Fixed production methods', 'Not a demand factor.'],
    ], 0),
  ],
  'u3-research': [
    mc('A firm surveys 50 shoppers outside a gym about healthy snacks and concludes that “most people want healthy snacks”. What is the main flaw?', [
      ['The sample is unrepresentative and biased', 'Correct: gym-goers are not typical of all consumers.'],
      ['Primary research is always inaccurate', 'It can be accurate if well designed.'],
      ['Surveys cannot ask about food', 'They can.'],
      ['The sample is too large', '50 is small, not too large.'],
    ], 0),
    mc('A main advantage of OBSERVATION as a research method is…', [
      ['It records what people actually do, not what they say they do', 'Correct.'],
      ['It explains why people buy', 'Observation cannot reveal motives.'],
      ['It is always cheap', 'Can be time-consuming.'],
      ['It uses a huge sample', 'Usually small.'],
    ], 0),
    calc('A survey of 400 people finds 28% prefer flavour A, 45% prefer flavour B and the rest prefer flavour C. How many people prefer flavour C?', 108, {
      unit: 'people',
      formula: 'Number = % × total respondents',
      steps: ['C = 100 − 28 − 45 = 27%', '0.27 × 400 = 108 people'],
    }),
    mc('A DISADVANTAGE of secondary research is…', [
      ['It may be out of date or collected for a different purpose', 'Correct.'],
      ['It is always very expensive', 'Usually cheaper.'],
      ['It takes months to collect', 'It already exists.'],
      ['It is always biased toward the firm', 'Not necessarily.'],
    ], 0),
    tfd('Secondary research is always cheaper than primary research.', 'depends', 'Usually cheaper, but detailed market reports can be expensive.'),
    scn('A supermarket tests demand for a new vegan range by surveying 100 customers who are already vegan, then plans a national launch.', [
      ['Launch nationally on the survey results', 'Sample is unrepresentative; demand among all shoppers is unknown, so heavy stock could go unsold.', false],
      ['Run a wider survey of all shopper types and a trial in a few stores first', 'More reliable evidence at lower risk.', true],
    ], 'Accuracy depends on a representative sample; test before committing big money.'),
  ],
  'u3-product-price': [
    mc('Sales of a soft drink have been flat for three years. Which extension strategy is MOST appropriate?', [
      ['Launch a low-sugar version in new packaging', 'Correct: adapting the product and packaging for new demand.'],
      ['Cut advertising to zero', 'Likely leads to decline.'],
      ['Stop selling and relaunch the same product', 'No change to attract customers.'],
      ['Raise price by 50%', 'Likely to reduce sales further.'],
    ], 0),
    calc('The unit cost is $8 and the firm adds a 75% mark-up (cost-plus). What is the selling price ($)?', 14, {
      unit: '$',
      formula: 'Price = cost + (cost × mark-up %)',
      steps: ['Mark-up = 8 × 0.75 = $6', '8 + 6 = $14'],
    }),
    mc('A DISADVANTAGE of price skimming is…', [
      ['High prices may deter customers and attract competitors', 'Correct.'],
      ['Profit per unit is very low', 'Skimming gives high profit per unit.'],
      ['Sales can only be made abroad', 'Not true.'],
      ['It cannot be used for new products', 'It is mainly for new products.'],
    ], 0),
    mc('Which is a DISADVANTAGE of developing new products?', [
      ['High development costs and the risk of failure', 'Correct.'],
      ['Reduced need for market research', 'More research is needed.'],
      ['Less dependence on existing products', 'This is an advantage.'],
      ['Lower promotion costs', 'Launch usually needs heavy promotion.'],
    ], 0),
    mc('Strong brand image helps a business mainly because…', [
      ['Customers will pay higher prices and stay loyal', 'Correct.'],
      ['It removes all competitors', 'Rivals still exist.'],
      ['It lowers production costs directly', 'No direct cost link.'],
      ['It makes market research unnecessary', 'Research is still needed.'],
    ], 0),
    mc('Which is a role of packaging?', [
      ['Protect the product, provide information and attract customers', 'Correct.'],
      ['Set the selling price', 'Price is separate.'],
      ['Reduce customer loyalty', 'Not a role.'],
      ['Replace advertising completely', 'Packaging supports but doesn’t replace.'],
    ], 0),
  ],
  'u3-place-promotion': [
    scn('A small artisan jam maker produces 500 jars per week and wants high margins and a strong brand image.', [
      ['Sell through national wholesalers', 'Wholesaler margins and loss of brand control; output is too small.', false],
      ['Sell direct online and through specialist local shops', 'Keeps the full margin and controls brand message; suits small output.', true],
    ], 'Channel choice depends on volume, margin and brand control.'),
    mc('An AGENT in a distribution channel…', [
      ['Arranges sales for a commission and does not take ownership of the goods', 'Correct.'],
      ['Buys goods in bulk and stores them', 'That is a wholesaler.'],
      ['Sells direct to customers from a shop', 'That is a retailer.'],
      ['Manufactures the product', 'That is the producer.'],
    ], 0),
    mc('Which is an advantage of using a WHOLESALER for a retailer?', [
      ['Can buy smaller quantities from a wide range of producers', 'Correct.'],
      ['Gets lower prices than the producer', 'Usually wholesaler adds a mark-up.'],
      ['Avoids all storage costs', 'Not necessarily.'],
      ['Gains full control over the brand', 'Brand control stays with the producer.'],
    ], 0),
    mc('“Buy one, get one free” is an example of…', [
      ['Sales promotion', 'Correct: a short-term incentive to buy.'],
      ['Advertising', 'Advertising informs/persuades through media such as billboards.'],
      ['Penetration pricing', 'A pricing method for new products.'],
      ['Market segmentation', 'A way of dividing markets.'],
    ], 0),
    tfd('A reward (loyalty) scheme can help build repeat purchases.', 'true', 'Points or discounts give customers a reason to keep returning.'),
    mc('A main ADVANTAGE of e-commerce for a BUSINESS is…', [
      ['Wider market reach and lower overheads than shops', 'Correct.'],
      ['No need for security', 'Security is critical.'],
      ['No competition', 'Online is highly competitive.'],
      ['Customers can touch the product', 'They cannot.'],
    ], 0),
  ],
  'u3-strategy-legal': [
    mc('A budget airline sells low-cost, no-frills flights online with discount promotions. Which element of the 4Ps is the MAIN competitive weapon?', [
      ['Price', 'Correct: low prices define its positioning.'],
      ['Product (luxury service)', 'It is no-frills.'],
      ['Place (exclusive agents)', 'Sales are online.'],
      ['Promotion only through luxury magazines', 'Not consistent with a budget image.'],
    ], 0),
    mc('Which is a possible DISADVANTAGE of entering a new overseas market?', [
      ['Cultural differences mean the product or name may not suit local tastes', 'Correct.'],
      ['Spreads risk', 'This is an advantage.'],
      ['Increases potential sales', 'This is an advantage.'],
      ['Avoids all competition', 'Local competitors exist.'],
    ], 0),
    tfd('Laws on faulty goods give customers the right to a refund, repair or replacement.', 'true', 'These laws protect customers and force firms to maintain quality.'),
    mc('How might legal controls on advertising affect a business?', [
      ['They limit exaggerated claims and may raise compliance costs, but build trust', 'Correct.'],
      ['They remove all advertising', 'They regulate it, not ban it.'],
      ['They guarantee higher sales', 'No guarantee.'],
      ['They only affect small firms', 'They affect all.'],
    ], 0),
    scn('A firm can enter a foreign market by exporting from home or by building a local factory (costly). It knows little about the market.', [
      ['Build the factory immediately', 'High cost and high risk with little market knowledge.', false],
      ['Start by exporting and research the market first', 'Lower cost, lets the firm learn, and keeps the option to expand later.', true],
    ], 'Match the entry method to risk, cost and knowledge.'),
  ],
};
