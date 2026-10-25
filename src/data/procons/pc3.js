import { mc, tfd, scn, pc } from '../builders.js';

// Advantages & disadvantages cards for Units 5-6.
export const pc3 = {
  'u5-finance': [
    pc('Internal vs external finance', [
      ['Internal sources', ['No interest to pay', 'No new owners or loss of control', 'Quick and easy to use'], ['Limited amounts available', 'Owners’ own money is at risk', 'Opportunity cost of using retained profit']],
      ['External sources', ['Large sums can be raised', 'Can fund fast growth'], ['Interest and repayments', 'Loss of control or ownership (shares)', 'Lenders may require security']],
    ],
      mc('A DISADVANTAGE of external finance compared with internal finance is…', [
        ['Interest and repayments, or loss of ownership', 'Correct.'],
        ['Limited amounts available', 'That is internal.'],
        ['No access to large sums', 'External gives large sums.'],
        ['No conditions attached', 'Often has conditions.'],
      ], 0)),
    pc('Internal sources of finance', [
      ['Owner’s investment', ['No interest', 'Owner keeps control'], ['Limited by owner’s wealth', 'Owner’s savings are at risk']],
      ['Retained profit', ['Free of interest', 'No outside control'], ['Only available if profit is made', 'Less paid to owners']],
      ['Sale of unwanted assets', ['Quick cash; no interest', 'Frees space'], ['One-off; asset may be sold below value', 'Loss of the asset’s use']],
    ],
      mc('An ADVANTAGE of retained profit is…', [
        ['No interest to pay and no loss of control', 'Correct.'],
        ['It is available even in loss-making years', 'Only if profit is made.'],
        ['Large unlimited amounts', 'Limited by profit.'],
        ['Shareholders take more control', 'No.'],
      ], 0)),
    pc('External sources of finance (1)', [
      ['Bank overdraft', ['Flexible; pay interest only on amount used', 'Quick to arrange'], ['High interest', 'Can be withdrawn at short notice; short-term only']],
      ['Bank loan', ['Large sums for fixed periods', 'Repayments are predictable'], ['Interest cost and security required', 'Must be repaid whatever profits are']],
      ['Trade credit', ['Delays payment, often interest-free', 'Improves cash flow'], ['May lose discounts or supplier goodwill', 'Only short-term']],
    ],
      mc('A DISADVANTAGE of an overdraft is…', [
        ['High interest and it can be withdrawn at short notice', 'Correct.'],
        ['It is too inflexible', 'It is flexible.'],
        ['It is only for large long-term purchases', 'It is short-term.'],
        ['It needs no repayment', 'It must be repaid.'],
      ], 0)),
    pc('External sources of finance (2)', [
      ['Share capital (issuing shares)', ['Large sums; no repayment or interest', 'Raises long-term finance'], ['Dilutes ownership and control', 'Dividends must be paid; only for companies']],
      ['Venture capital', ['Large investment and business expertise', 'Suitable for risky growth firms'], ['Investors take a share and some control', 'Expect high returns']],
      ['Crowdfunding', ['Raises money from many people without a bank', 'Tests market interest'], ['May not reach the target', 'Time and effort; rewards or shares to give']],
    ],
      mc('A DISADVANTAGE of issuing shares is…', [
        ['Ownership is shared, which dilutes control', 'Correct.'],
        ['The money must be repaid with interest', 'Shares need no repayment.'],
        ['Only small sums can be raised', 'Large sums possible.'],
        ['Available to sole traders', 'Only companies can issue shares.'],
      ], 0)),
    pc('External sources of finance (3)', [
      ['Leasing', ['No large up-front cost', 'Maintenance often included'], ['Never own the asset', 'Total cost can be higher']],
      ['Hire purchase', ['Spreads cost; own the asset at the end', 'Use the asset immediately'], ['Interest costs make it dearer', 'Asset can be repossessed if payments stop']],
      ['Government grants', ['Need not be repaid', 'Cheap finance for start-ups'], ['Competitive, conditions attached', 'Limited availability']],
    ],
      mc('An ADVANTAGE of a government grant is…', [
        ['It does not have to be repaid', 'Correct.'],
        ['It is available to everyone', 'Limited availability.'],
        ['It comes with no conditions', 'Often has conditions.'],
        ['It must be repaid with interest', 'That is a loan.'],
      ], 0)),
  ],

  'u5-cash-flow': [
    pc('Cash flow forecasts', [
      ['Using a cash flow forecast', ['Spots cash shortages early', 'Supports loan applications', 'Helps timing of big payments'], ['Based on estimates that may be wrong', 'Unexpected events can make it inaccurate', 'Takes time to prepare']],
    ],
      mc('A limitation of a cash flow forecast is…', [
        ['It is based on estimates that may be inaccurate', 'Correct.'],
        ['It shows past actual results only', 'It is about the future.'],
        ['It cannot show shortages', 'It is designed to.'],
        ['It removes the need to plan', 'No.'],
      ], 0)),
    pc('Ways to overcome a short-term cash problem', [
      ['Bank overdraft', ['Quick and flexible'], ['Interest is high']],
      ['Delay paying suppliers', ['Keeps cash in the business for longer'], ['Loses discounts and supplier goodwill']],
      ['Ask customers to pay faster', ['Cash arrives sooner'], ['May upset customers or lose sales']],
      ['Delay buying non-current assets', ['Saves cash now'], ['Efficiency and growth may suffer']],
    ],
      mc('A DISADVANTAGE of delaying payments to suppliers is…', [
        ['It can lose discounts and harm supplier relationships', 'Correct.'],
        ['It uses more cash now', 'It saves cash now.'],
        ['It always lowers prices', 'No.'],
        ['It improves quality', 'No.'],
      ], 0)),
  ],

  'u5-ratios': [
    pc('Ratio analysis and accounts', [
      ['Using ratio analysis', ['Compare performance over time and with rivals', 'Helps lenders, investors and managers decide', 'Shows strengths and weaknesses'], ['Uses past data, not the future', 'Ignores non-financial factors', 'Accounting policies and window dressing can distort ratios; inflation affects comparisons']],
    ],
      mc('A limitation of ratio analysis is…', [
        ['It uses historical data and ignores non-financial factors', 'Correct.'],
        ['It cannot compare firms', 'It can.'],
        ['It predicts the future perfectly', 'It cannot.'],
        ['It is only for banks', 'Many users.'],
      ], 0)),
  ],

  'u6-government-policy': [
    pc('Higher vs lower interest rates', [
      ['Higher interest rates', ['Savers and some banks gain', 'May reduce inflation'], ['Loan costs rise', 'Consumers spend less', 'Firms delay investment']],
      ['Lower interest rates', ['Cheaper borrowing for firms and consumers', 'Higher spending and investment'], ['May raise inflation', 'Lower returns for savers']],
    ],
      mc('How does a rise in interest rates act as a DISADVANTAGE for a business?', [
        ['Loan repayments rise and customers spend less', 'Correct.'],
        ['It makes loans cheaper', 'The opposite.'],
        ['It increases spending', 'It reduces it.'],
        ['It has no effect on profits', 'It reduces profits.'],
      ], 0)),
    pc('Higher vs lower taxes', [
      ['Higher taxes (corporation tax, income tax, indirect tax)', ['Government can spend more on public services (and contracts)'], ['Lower retained profit for firms', 'Lower disposable income so lower demand', 'Higher prices (indirect taxes)']],
      ['Lower taxes', ['More profit retained and invested', 'More disposable income, so higher demand'], ['Less government spending', 'May lead to higher borrowing']],
    ],
      mc('A DISADVANTAGE of higher corporation tax for a business is…', [
        ['Less retained profit to invest', 'Correct.'],
        ['Customers have more disposable income', 'That is lower income tax.'],
        ['Lower costs', 'No.'],
        ['Cheaper loans', 'Unrelated.'],
      ], 0)),
  ],

  'u6-globalisation': [
    pc('Globalisation: opportunities and threats', [
      ['Globalisation', ['Bigger markets and more sales', 'Cheaper production and supplies abroad', 'Economies of scale'], ['Stronger foreign competition', 'Complex supply chains', 'Exchange-rate and legal risks']],
    ],
      mc('A THREAT of globalisation for a local firm is…', [
        ['More competition from foreign firms', 'Correct.'],
        ['Bigger markets', 'An opportunity.'],
        ['Cheaper inputs', 'An opportunity.'],
        ['Economies of scale', 'An opportunity.'],
      ], 0)),
    pc('Multinational companies (MNCs)', [
      ['For the MNC', ['Access to new markets and sales', 'Lower costs (labour, materials)', 'Avoids trade barriers by producing locally'], ['Complex to manage', 'Cultural and legal differences', 'Risk of bad publicity']],
      ['For the host country', ['Jobs and investment', 'Exports and more choice', 'New skills and technology'], ['Competition harms local firms', 'Environmental damage and resource exploitation', 'Profits repatriated abroad']],
    ],
      mc('Which is a DISADVANTAGE of an MNC for the host country?', [
        ['Profits sent back to the home country', 'Correct.'],
        ['New jobs', 'An advantage.'],
        ['New investment', 'An advantage.'],
        ['Increased choice', 'An advantage.'],
      ], 0)),
    pc('Import tariffs and quotas', [
      ['Tariffs and quotas', ['Protect domestic firms from cheap imports', 'Tariffs raise government revenue'], ['Raise prices for consumers and importers', 'Other countries may retaliate', 'Domestic firms may become less efficient']],
    ],
      mc('A DISADVANTAGE of an import tariff for a business that imports materials is…', [
        ['Higher costs', 'Correct.'],
        ['More competition from imports', 'Tariffs reduce imports.'],
        ['Lower prices for imported goods', 'Tariffs raise them.'],
        ['No effect', 'It raises costs.'],
      ], 0)),
    pc('Exchange rate changes', [
      ['Appreciation (stronger currency)', ['Imports and raw materials are cheaper'], ['Exports are dearer, so less competitive']],
      ['Depreciation (weaker currency)', ['Exports are cheaper and more competitive'], ['Imports and raw materials cost more']],
    ],
      mc('A DISADVANTAGE of currency depreciation for an importer is…', [
        ['Higher import costs', 'Correct.'],
        ['Exports become dearer', 'Depreciation makes exports cheaper.'],
        ['Cheaper raw materials', 'The opposite.'],
        ['More competitive exports', 'That is an advantage.'],
      ], 0)),
  ],

  'u6-environment-ethics': [
    pc('Being environmentally responsible', [
      ['Responding to environmental issues', ['Improved reputation and sales', 'Long-term cost savings (energy, waste)', 'Meets laws; attracts staff'], ['Higher costs (equipment, materials)', 'Prices may rise', 'Benefits may take time']],
      ['Legal controls on the environment', ['Protect the environment and fair competition'], ['Raise costs; restrict how, what and where firms produce or sell']],
    ],
      mc('A DISADVANTAGE of environmental legal controls for a business is…', [
        ['Higher costs and restrictions on production', 'Correct.'],
        ['Improved reputation', 'An advantage.'],
        ['Lower costs', 'Usually higher.'],
        ['No effect', 'There are effects.'],
      ], 0)),
    pc('Being ethical', [
      ['Acting ethically (fair wages, fair prices, no child labour)', ['Better reputation and customer loyalty', 'Motivated staff; stable supply', 'Fewer scandals'], ['Higher costs and prices', 'May lose cost advantage', 'Harder to find suitable suppliers']],
    ],
      mc('An ADVANTAGE of being ethical is…', [
        ['A better reputation and loyal customers', 'Correct.'],
        ['Always lower costs', 'Costs may rise.'],
        ['No need to follow laws', 'Laws still apply.'],
        ['Guaranteed profit', 'No guarantee.'],
      ], 0)),
    pc('Pressure groups', [
      ['Pressure groups', ['Highlight issues and push firms to behave responsibly', 'Can improve working conditions and the environment'], ['Can damage a firm’s reputation and sales', 'Boycotts and protests may cost the firm', 'Actions may be one-sided']],
    ],
      mc('How can pressure groups be a DISADVANTAGE to a business?', [
        ['Boycotts and bad publicity can cut sales', 'Correct.'],
        ['They guarantee higher sales', 'No.'],
        ['They set the firm’s prices', 'No.'],
        ['They reduce competition', 'No.'],
      ], 0)),
  ],
};
