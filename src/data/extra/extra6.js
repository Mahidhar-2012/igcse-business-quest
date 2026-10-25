import { mc, ord, scn, calc, tfd } from '../builders.js';

export const extra6 = {
  'u6-business-cycle': [
    scn('The economy is entering a recession. A mid-priced clothing retailer sees falling sales.', [
      ['Launch an expensive luxury range', 'Demand for non-essentials falls in a recession; heavy investment is risky.', false],
      ['Offer value ranges, control costs and promote discounts', 'Matches reduced spending power and protects cash flow.', true],
    ], 'In a recession, firms focus on value, costs and cash flow rather than expansion.'),
    mc('Higher employment in the economy is MOST likely to…', [
      ['Increase demand for goods, but make recruitment harder and wages rise', 'Correct.'],
      ['Reduce demand for all products', 'More people earning raises demand.'],
      ['Cause immediate deflation', 'Not directly.'],
      ['Have no effect on business', 'It affects demand and labour costs.'],
    ], 0),
    tfd('Economic growth always means higher profits for every business.', 'depends', 'Growth raises demand, but firms may face rising costs, competition or capacity limits.'),
    ord('Build the chain of reasoning for a recession.', [
      'Consumer spending falls',
      'Business sales fall',
      'Firms cut jobs',
      'Unemployment rises',
      'Spending falls even further',
    ], 'A downward spiral: lower demand → job losses → lower incomes → lower demand.'),
    mc('When inflation is high, consumers’ purchasing power…', [
      ['Falls, as the same money buys fewer goods', 'Correct.'],
      ['Rises', 'The opposite.'],
      ['Stays unchanged', 'Prices are rising.'],
      ['Is unaffected if wages are fixed', 'Fixed wages lose value.'],
    ], 0),
  ],
  'u6-government-policy': [
    scn('The government raises sales tax on luxury goods. A jewellery maker’s sales fall 15%.', [
      ['Ignore the change and keep prices the same', 'Higher final price reduces demand further.', false],
      ['Develop a lower-priced range and promote value', 'Keeps customers who can no longer afford premium prices.', true],
    ], 'Firms respond to tax changes by adjusting products, prices and promotion.'),
    mc('A cut in corporation tax is likely to…', [
      ['Leave firms with more retained profit to invest', 'Correct.'],
      ['Reduce investment', 'More profit usually raises investment.'],
      ['Raise income tax', 'Different tax.'],
      ['Reduce profits after tax', 'It raises them.'],
    ], 0),
    calc('A firm earns $200,000 profit before tax. Corporation tax is 20%. What is profit after tax ($)?', 160000, {
      unit: '$',
      formula: 'Profit after tax = profit − (profit × tax rate)',
      steps: ['Tax = 0.20 × 200,000 = $40,000', '200,000 − 40,000 = $160,000'],
    }),
    mc('A firm has a large variable-rate bank loan. Interest rates rise. What happens?', [
      ['Loan repayments rise, reducing profit and cash flow', 'Correct.'],
      ['Repayments fall', 'The opposite.'],
      ['The loan is cancelled', 'Not an effect.'],
      ['Nothing changes', 'Variable rates change with interest rates.'],
    ], 0),
    tfd('Higher government spending on healthcare only benefits the health sector.', 'false', 'Suppliers of equipment, construction firms and even food suppliers can benefit.'),
    mc('Which is a sensible response by a business to higher interest rates?', [
      ['Delay expansion funded by borrowing and reduce debt', 'Correct.'],
      ['Borrow more for expansion', 'Costs are rising.'],
      ['Ignore it', 'It affects cost and demand.'],
      ['Lay off all staff', 'Excessive and unrelated.'],
    ], 0),
  ],
  'u6-globalisation': [
    calc('A 20% import tariff applies to goods that cost $2,500 before the tariff. What is the cost to the importer after the tariff ($)?', 3000, {
      unit: '$',
      formula: 'Cost after tariff = price + (price × tariff %)',
      steps: ['Tariff = 0.20 × 2,500 = $500', '2,500 + 500 = $3,000'],
    }),
    scn('A furniture importer faces a 20% tariff on goods from Country X.', [
      ['Absorb the tariff and keep prices unchanged', 'Profit margin shrinks sharply.', false],
      ['Source from a country without the tariff or negotiate with local producers', 'Avoids extra cost and protects margin.', true],
    ], 'Tariffs raise import costs; firms can switch suppliers, raise prices or absorb the cost.'),
    mc('Import quotas help domestic producers because…', [
      ['They limit foreign supply, reducing competition', 'Correct.'],
      ['They tax exports', 'No.'],
      ['They increase imports', 'The opposite.'],
      ['They lower prices for consumers', 'They usually raise prices.'],
    ], 0),
    mc('An advantage of becoming an MNC is…', [
      ['Producing locally to avoid trade barriers and access new markets', 'Correct.'],
      ['Facing less competition always', 'Often more.'],
      ['Reduced transport', 'Not necessarily.'],
      ['Fewer laws to obey', 'More laws in different countries.'],
    ], 0),
    tfd('A currency appreciation helps businesses that import raw materials.', 'true', 'Imports become cheaper in domestic currency, lowering costs.'),
    mc('Newly industrialised countries have increased globalisation partly because…', [
      ['They produce goods cheaply, increasing global competition and trade', 'Correct.'],
      ['They ban exports', 'No.'],
      ['They avoid all trade', 'The opposite.'],
      ['They reduce transport links', 'No.'],
    ], 0),
  ],
  'u6-environment-ethics': [
    scn('A pressure group runs a social media campaign claiming a firm’s palm-oil suppliers damage rainforests. Sales are falling.', [
      ['Deny the claims and do nothing', 'Reputation worsens and boycotts may spread.', false],
      ['Audit suppliers, switch to certified sustainable sources and publicise it', 'Responds credibly and rebuilds trust; costs more but protects sales.', true],
    ], 'Firms respond to pressure groups by changing practices and communicating honestly.'),
    mc('A ban on single-use plastics is an example of…', [
      ['A legal control that may raise costs but changes how firms produce and package', 'Correct.'],
      ['A subsidy for plastic', 'No.'],
      ['A tariff', 'A tax on imports.'],
      ['An exchange rate change', 'Unrelated.'],
    ], 0),
    tfd('Businesses respond to environmental issues only because the law forces them to.', 'false', 'Many also act for reputation, customer demand and cost savings.'),
    mc('Paying suppliers a fair price is an ethical issue. A likely BENEFIT is…', [
      ['More stable supply and stronger supplier loyalty', 'Correct.'],
      ['Lower costs immediately', 'Usually costs rise.'],
      ['No effect on reputation', 'It improves it.'],
      ['Less need for suppliers', 'Not logical.'],
    ], 0),
    mc('Which is a way pressure groups influence business decisions?', [
      ['Petitions, publicity, lobbying and boycotts', 'Correct.'],
      ['Setting company prices directly', 'They cannot.'],
      ['Buying the company', 'Not their method.'],
      ['Changing exchange rates', 'No.'],
    ], 0),
    mc('A new factory creates 200 local jobs but pollutes the river. The pollution is an…', [
      ['External cost borne by the community', 'Correct.'],
      ['External benefit', 'Jobs are the benefit.'],
      ['Internal cost to the factory', 'The community bears it.'],
      ['Economy of scale', 'Unrelated.'],
    ], 0),
  ],
};
