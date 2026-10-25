import { mc, ord, scn, calc, tfd, card } from '../builders.js';

export const cards6 = {
  'u6-business-cycle': [
    card('Stages of the business cycle', [
      '**Growth** (output and demand rising) → **boom** (peak, high demand, high employment) → **recession** (output falls, unemployment rises) → **slump** (lowest point, very low demand).',
    ],
      mc('Which stage has the highest demand and employment?', [
        ['Boom', 'Correct.'],
        ['Slump', 'Lowest.'],
        ['Recession', 'Falling.'],
        ['Growth', 'Rising but not at peak.'],
      ], 0)),
    card('How each stage affects business', [
      '**Growth/boom**: rising sales, expansion, higher prices, recruiting problems.',
      '**Recession/slump**: falling sales, falling profit, job cuts, price cuts, some firms fail.',
      'Luxury and non-essential goods are hit hardest; essentials hold up.',
    ],
      mc('In a recession, which is likely to suffer MOST?', [
        ['Luxury holidays', 'Correct.'],
        ['Basic bread', 'Essential.'],
        ['Electricity supply', 'Essential.'],
        ['Budget supermarkets', 'Often resilient.'],
      ], 0)),
    card('Employment levels', [
      '**High employment** → more spending, higher demand, but wages and recruitment costs rise.',
      '**High unemployment** → less spending and demand, but easier to recruit at lower wages.',
    ],
      tfd('Rising unemployment usually reduces consumer spending.', 'true', 'Fewer people earning means lower demand.')),
    card('Inflation', [
      '**Inflation** = a general rise in prices.',
      'Effects: higher **costs** (materials, wages), lower **purchasing power** for customers, uncertainty. Firms may pass costs on, but demand can fall.',
    ],
      mc('High inflation reduces consumers’ purchasing power because…', [
        ['The same money buys fewer goods', 'Correct.'],
        ['Prices fall', 'Opposite.'],
        ['Wages always rise faster', 'Not always.'],
        ['Taxes disappear', 'No.'],
      ], 0)),
    card('Economic growth', [
      '**Economic growth** = rising total output and incomes.',
      'It raises demand and profits, encourages expansion and jobs; risks include rising costs and capacity limits.',
    ],
      mc('Strong economic growth is most likely to…', [
        ['Raise demand for many businesses’ products', 'Correct.'],
        ['Cut all prices', 'No.'],
        ['Cause unemployment to soar', 'Usually the opposite.'],
        ['Reduce incomes', 'Opposite.'],
      ], 0)),
  ],

  'u6-government-policy': [
    card('Taxes on business', [
      '**Corporation tax** is charged on company profit. Higher → less retained profit to invest. Lower → more profit to invest or pay out.',
      'Sales taxes (e.g. VAT) raise selling prices and can lower demand.',
    ],
      calc('A firm earns $200,000 profit before tax. Corporation tax is 20%. What is profit after tax ($)?', 160000, {
        unit: '$',
        formula: 'Profit after tax = profit − (profit × tax rate)',
        steps: ['Tax = 0.20 × 200,000 = $40,000', '200,000 − 40,000 = $160,000'],
      })),
    card('Taxes on people’s income', [
      '**Income tax up** → less disposable income → lower demand (especially for non-essentials).',
      '**Income tax down** → more disposable income → higher demand.',
    ],
      mc('If income tax is cut, demand for a restaurant is likely to…', [
        ['Rise', 'Correct: more spending money.'],
        ['Fall', 'Opposite.'],
        ['Stay at zero', 'No.'],
        ['Be unaffected always', 'Usually affected.'],
      ], 0)),
    card('Government spending', [
      'More spending on roads, hospitals and schools gives contracts to **construction firms and suppliers** and creates jobs.',
      'Cuts in spending reduce demand for those firms.',
    ],
      mc('Which type of firm benefits MOST from big government road-building?', [
        ['Construction companies', 'Correct.'],
        ['Video game makers', 'Not directly.'],
        ['Cosmetics retailers', 'Not directly.'],
        ['Fashion brands', 'Not directly.'],
      ], 0)),
    card('Interest rates', [
      '**Interest rate up** → borrowing costs more, loan repayments rise, consumers spend less, firms delay investment.',
      '**Interest rate down** → cheaper borrowing, more spending and investment, but lower returns for savers.',
    ],
      ord('Order the effects of an interest rate rise.', [
        'Interest rates rise',
        'Loan repayments rise',
        'Consumers spend less',
        'Business sales fall',
      ], 'Higher borrowing costs reduce demand and profits.')),
    card('How businesses respond', [
      'Tax rises: cut costs, adjust prices or products, target different customers.',
      'Interest rate rises: delay borrowing or expansion, pay off debt, offer discounts to boost sales.',
      'Interest rate falls: borrow to invest and expand.',
    ],
      scn('Interest rates fall and a firm wants to buy new machinery with a loan.', [
        ['Borrow now to invest', 'Cheaper repayments make investment more attractive.', true],
        ['Wait until rates rise', 'Misses the cheap borrowing.', false],
      ], 'Lower interest rates encourage borrowing and investment.')),
  ],

  'u6-globalisation': [
    card('Reasons for globalisation', [
      '**Improved transport links**, **technological change** (communication, internet), **free trade agreements**, and **newly industrialised countries** (e.g. growing manufacturing nations).',
    ],
      mc('Which is a cause of globalisation?', [
        ['Improved transport and communication technology', 'Correct.'],
        ['Higher import taxes', 'Reduce trade.'],
        ['Banning exports', 'Reduces trade.'],
        ['Slower shipping', 'Reduces trade.'],
      ], 0)),
    card('Opportunities and threats', [
      '**Opportunities**: bigger markets, cheaper production abroad, more suppliers, economies of scale.',
      '**Threats**: stronger foreign competition, imports undercut prices, supply chains across countries.',
    ],
      mc('Which is a THREAT of globalisation for a local firm?', [
        ['Cheaper imported competitors', 'Correct.'],
        ['Access to a bigger market', 'Opportunity.'],
        ['Cheaper foreign inputs', 'Opportunity.'],
        ['More customers abroad', 'Opportunity.'],
      ], 0)),
    card('Import tariffs and quotas', [
      '**Tariff** = a tax on imported goods. **Quota** = a limit on the quantity of imports.',
      'Both protect domestic producers by making imports dearer or scarcer.',
    ],
      calc('A 20% import tariff applies to goods costing $2,500. What is the cost after the tariff ($)?', 3000, {
        unit: '$',
        formula: 'Cost after tariff = price × (1 + tariff %)',
        steps: ['Tariff = 0.20 × 2,500 = $500', '2,500 + 500 = $3,000'],
      })),
    card('Effects of tariffs and quotas on businesses', [
      '**Importers**: higher costs/less supply → raise prices or find new suppliers.',
      '**Domestic producers**: less foreign competition, can sell more.',
      '**Exporters**: other countries may retaliate with their own tariffs.',
    ],
      mc('Who is MOST likely to benefit from import tariffs?', [
        ['Domestic producers of the same goods', 'Correct.'],
        ['Foreign exporters', 'They are hit.'],
        ['Importing firms', 'Costs rise.'],
        ['Consumers of imported goods', 'Prices rise.'],
      ], 0)),
    card('Advantages of becoming a multinational (MNC)', [
      'An **MNC** operates in several countries.',
      '+ New markets, **lower costs** (labour, materials), **avoiding trade barriers** by producing locally, spreading risk.',
    ],
      mc('Producing inside a country to avoid its import tariffs is an advantage of…', [
        ['Becoming a multinational', 'Correct.'],
        ['Sole trading', 'No.'],
        ['Franchising only', 'No.'],
        ['Job rotation', 'No.'],
      ], 0)),
    card('MNCs: advantages for the host country', [
      '**Jobs**, **investment**, **exports**, increased **choice**, new skills and technology, more tax.',
    ],
      mc('Which is an advantage of an MNC for the host country?', [
        ['New jobs and investment', 'Correct.'],
        ['Profits sent abroad', 'Disadvantage.'],
        ['Damage to local firms', 'Disadvantage.'],
        ['Resource depletion', 'Disadvantage.'],
      ], 0)),
    card('MNCs: disadvantages for the host country', [
      'Increased **competition** for local firms, **environmental damage**, **exploitation of natural resources**, **repatriation of profits**, possible low wages.',
    ],
      mc('“Repatriation of profits” means…', [
        ['Profits are sent back to the MNC’s home country', 'Correct.'],
        ['Profits stay in the host country', 'Opposite.'],
        ['Profits are taxed twice', 'No.'],
        ['Profits are shared with all staff', 'No.'],
      ], 0)),
    card('Exchange rates: appreciation and depreciation', [
      '**Appreciation**: the currency becomes stronger → **exports dearer**, **imports cheaper**.',
      '**Depreciation**: currency weaker → **exports cheaper** (more competitive), **imports dearer**.',
    ],
      mc('The home currency depreciates. Which business benefits most?', [
        ['An exporter', 'Correct: its goods are cheaper abroad.'],
        ['An importer of raw materials', 'Costs rise.'],
        ['A foreign holiday firm', 'Overseas holidays cost more.'],
        ['No business is affected', 'Many are.'],
      ], 0)),
    card('Exchange rate effects on competitiveness', [
      'Appreciation hurts exporters’ competitiveness but cuts import costs.',
      'Depreciation boosts export competitiveness but raises import costs (inflation).',
      'Exchange-rate calculations are not assessed.',
    ],
      tfd('A stronger home currency makes the country’s exports more competitive.', 'false', 'A stronger currency makes exports more expensive abroad, so less competitive.')),
  ],

  'u6-environment-ethics': [
    card('External costs and benefits', [
      '**External costs**: borne by third parties (pollution, noise, congestion).',
      '**External benefits**: gained by third parties (jobs, better roads, more local spending).',
    ],
      mc('Noise and traffic from a factory affecting nearby residents is an…', [
        ['External cost', 'Correct.'],
        ['External benefit', 'Opposite.'],
        ['Internal benefit', 'No.'],
        ['Economy of scale', 'No.'],
      ], 0)),
    card('How business harms the environment', [
      '**Pollution** (air, water, noise, waste) and **depletion of resources** (using up forests, oil, minerals).',
    ],
      mc('Cutting down forests for timber is an example of…', [
        ['Resource depletion', 'Correct.'],
        ['Recycling', 'No.'],
        ['Reuse', 'No.'],
        ['Renewable energy', 'No.'],
      ], 0)),
    card('Why and how businesses respond', [
      'Why: **improved reputation**, **more sales**, attract staff, avoid fines and bad publicity.',
      'How: **recycle**, use **renewable energy**, cut waste, eco-friendly packaging and products.',
    ],
      mc('A reason a business may respond to environmental issues is…', [
        ['To improve its reputation and win customers', 'Correct.'],
        ['To lower its reputation', 'No.'],
        ['To raise pollution', 'No.'],
        ['To avoid change', 'No.'],
      ], 0)),
    card('Legal controls on the environment', [
      'Laws can control **how** (clean methods), **what** (ban harmful products), and **where** (restrict locations) firms produce or sell.',
      'Effect: **higher costs** (equipment, fines), but fairer competition and a cleaner environment.',
    ],
      mc('A ban on single-use plastic bags is a legal control on…', [
        ['What a business can sell or use', 'Correct.'],
        ['The exchange rate', 'No.'],
        ['Interest rates', 'No.'],
        ['Staff holidays', 'No.'],
      ], 0)),
    card('Ethical issues', [
      'Examples: **child labour**, paying **fair wages**, paying **fair prices to suppliers**, using suppliers that do not damage the environment.',
    ],
      mc('Which is an ethical issue for a business?', [
        ['Using child labour in its supply chain', 'Correct.'],
        ['Choosing a logo colour', 'Not ethical issue.'],
        ['Setting opening hours', 'Not primarily ethical.'],
        ['Buying office pens', 'Not ethical issue.'],
      ], 0)),
    card('Responding to ethics: pros and cons', [
      'Responses: audit suppliers, pay fair wages, adopt a code of conduct.',
      '+ Better reputation, loyal customers and staff. − Higher costs and prices, may lose cost advantage.',
    ],
      tfd('Being ethical always increases a firm’s profit.', 'depends', 'It can build loyalty but costs can rise; the net effect varies.')),
    card('Pressure groups', [
      '**Pressure groups** campaign to change business or government behaviour.',
      'Methods: **publicity and social media, petitions, boycotts, lobbying, protests**. Businesses may change policy to protect their reputation.',
    ],
      mc('Which is a way pressure groups influence businesses?', [
        ['Organising a customer boycott', 'Correct.'],
        ['Setting the firm’s prices', 'No.'],
        ['Owning the firm', 'No.'],
        ['Hiring staff', 'No.'],
      ], 0)),
  ],
};
