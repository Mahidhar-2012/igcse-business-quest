import { mc, ord, scn, calc, tfd, card } from '../builders.js';

export const cards5 = {
  'u5-finance': [
    card('Why businesses need finance', [
      'Start-up capital, **expansion**, **replacing non-current assets**, **investing in new technology** and **working capital** (day-to-day cash).',
    ],
      mc('Which is a main reason a business needs finance?', [
        ['To replace worn-out machinery', 'Correct.'],
        ['To avoid paying staff', 'Not a reason.'],
        ['To reduce sales', 'Not a reason.'],
        ['To close the business', 'Not a reason.'],
      ], 0)),
    card('Short-term and long-term finance', [
      '**Short-term** (under about a year): day-to-day needs such as stock and wages → overdraft, trade credit.',
      '**Long-term**: buying machinery, expanding → loans, shares, retained profit.',
    ],
      mc('Which finance best suits buying a factory building?', [
        ['A long-term bank loan or share capital', 'Correct.'],
        ['A short-term overdraft', 'Too short-term and costly.'],
        ['Trade credit', 'Short-term.'],
        ['Delaying wages', 'Not sensible.'],
      ], 0)),
    card('Working capital', [
      '**Working capital = current assets − current liabilities**.',
      'It pays day-to-day bills. Too little → can’t pay debts on time; too much → idle resources.',
    ],
      calc('Current assets are $52,000 and current liabilities are $40,000. What is working capital ($)?', 12000, {
        unit: '$',
        formula: 'Working capital = current assets − current liabilities',
        steps: ['52,000 − 40,000 = $12,000'],
      })),
    card('Internal sources of finance', [
      '**Owner’s investment** (savings), **retained profit** (profit kept in the business), **sale of unwanted assets**.',
      '+ No interest, no outside control. − Limited amount; slower; owner’s risk.',
    ],
      mc('Profit kept in the business and reinvested is…', [
        ['Retained profit', 'Correct.'],
        ['Venture capital', 'Outside investors.'],
        ['An overdraft', 'Bank borrowing.'],
        ['A grant', 'Government money.'],
      ], 0)),
    card('External sources of finance (1)', [
      '**Share capital**: selling shares (companies only). **Venture capital**: investors take a stake in risky, growing firms.',
      '**Bank overdraft**: short-term borrowing up to a limit (flexible, high interest). **Bank loan**: fixed sum repaid with interest over time.',
    ],
      mc('Which is a flexible, short-term way to cover a temporary cash shortage?', [
        ['A bank overdraft', 'Correct.'],
        ['Issuing shares', 'Long-term.'],
        ['Selling a factory', 'Drastic.'],
        ['A 10-year loan', 'Long-term.'],
      ], 0)),
    card('External sources of finance (2)', [
      '**Leasing**: rent equipment, spread cost. **Hire purchase**: pay in instalments and own it at the end.',
      '**Trade credit**: delay paying suppliers. **Government grants**: money that need not be repaid. **Crowdfunding**: many people give small sums, often online.',
    ],
      mc('A firm pays for equipment in monthly instalments and owns it after the last payment. This is…', [
        ['Hire purchase', 'Correct.'],
        ['Leasing', 'You never own it.'],
        ['Trade credit', 'Delayed payment to suppliers.'],
        ['Crowdfunding', 'Many small investors.'],
      ], 0)),
    card('Internal vs external finance', [
      '**Internal** +: no interest, no new owners. −: limited amount.',
      '**External** +: large amounts available quickly. −: interest, repayments, loss of control (shares), conditions.',
    ],
      mc('A disadvantage of EXTERNAL finance is…', [
        ['Interest and repayments or loss of ownership', 'Correct.'],
        ['No access to large sums', 'Large sums are available.'],
        ['It is always free', 'It costs.'],
        ['It needs no approval', 'Lenders check.'],
      ], 0)),
    card('Choosing a source of finance', [
      'Consider **size and legal form of business, amount needed, length of time, existing loans, cost, purpose**.',
      'e.g. a sole trader cannot issue shares; a short gap needs an overdraft.',
    ],
      scn('A small sole trader needs $2,000 for three weeks to cover a late customer payment.', [
        ['Bank overdraft', 'Short-term, flexible, matches the need.', true],
        ['Issue shares to the public', 'Impossible for a sole trader and wrong time scale.', false],
      ], 'Match source to amount, time and legal form.')),
  ],

  'u5-cash-flow': [
    card('Why cash matters', [
      'Cash pays **wages, suppliers, rent and bills**. Without it a business becomes **insolvent**, even if profitable.',
      '**Cash is not the same as profit.**',
    ],
      tfd('A profitable business cannot run out of cash.', 'false', 'Timing matters: it can be profitable on paper yet short of cash if customers pay late.')),
    card('The cash flow forecast', [
      'A **cash flow forecast** estimates cash coming in and going out over future months.',
      'Importance: spots shortages early, supports loan applications, helps planning.',
    ],
      mc('A cash flow forecast is mainly used to…', [
        ['Predict shortages of cash in advance', 'Correct.'],
        ['Measure total assets', 'That is another statement.'],
        ['Guarantee profit', 'No.'],
        ['Replace the business plan', 'No.'],
      ], 0)),
    card('Features of a cash flow forecast', [
      '**Cash inflows** (sales receipts, loans), **cash outflows** (wages, materials, rent), **net cash flow** (inflows − outflows), **opening balance**, **closing balance**.',
      'Closing balance = opening balance + net cash flow; it becomes next month’s opening balance.',
    ],
      mc('This month’s closing balance becomes…', [
        ['Next month’s opening balance', 'Correct.'],
        ['Next month’s net cash flow', 'No.'],
        ['This month’s inflow', 'No.'],
        ['The profit figure', 'No.'],
      ], 0)),
    card('Completing a forecast', [
      '**Net cash flow = inflows − outflows**.',
      '**Closing balance = opening balance + net cash flow**.',
      'A negative net cash flow reduces the balance.',
    ],
      calc('Opening balance $1,000, inflows $6,000, outflows $7,500. What is the closing balance ($)? (Use a minus sign if negative.)', -500, {
        unit: '$',
        formula: 'Closing = opening + inflows − outflows',
        steps: ['Net cash flow = 6,000 − 7,500 = −1,500', '1,000 − 1,500 = −$500'],
      })),
    card('Interpreting a forecast', [
      'Look for **negative closing balances**, months of heavy outflows and the overall trend.',
      'A negative balance means the business needs to act (e.g. arrange an overdraft).',
    ],
      mc('A forecast shows a negative closing balance in month 4. What is the key message?', [
        ['The business may need extra funds or action in month 4', 'Correct.'],
        ['The business is highly profitable', 'Not indicated.'],
        ['The forecast is useless', 'It is a warning.'],
        ['No action is needed', 'Action is needed.'],
      ], 0)),
    card('Solving short-term cash problems', [
      '**Overdraft**, **delay payments to suppliers**, **ask customers to pay sooner**, **delay buying non-current assets**.',
      'Each has a cost: overdraft interest, supplier goodwill, customer relations.',
    ],
      mc('Which action helps a short-term cash flow problem?', [
        ['Asking customers to pay more quickly', 'Correct.'],
        ['Buying more machinery now', 'Worsens cash.'],
        ['Giving customers longer credit', 'Worsens cash.'],
        ['Paying suppliers early', 'Worsens cash.'],
      ], 0)),
  ],

  'u5-profit-loss': [
    card('What is profit?', [
      '**Profit = total revenue − total costs**. If costs are higher, it is a **loss**.',
    ],
      mc('If total revenue is $50,000 and total costs are $55,000, the result is…', [
        ['A loss of $5,000', 'Correct.'],
        ['A profit of $5,000', 'Wrong direction.'],
        ['A profit of $105,000', 'Wrong operation.'],
        ['Break-even', 'Only if equal.'],
      ], 0)),
    card('Why profit is important', [
      'For private sector firms, profit is a **reward for risk-taking**, a **source of finance** (retained profit), a **measure of success** and helps **attract investors**.',
    ],
      mc('Which is a reason profit is important to private sector businesses?', [
        ['It rewards risk-taking and can fund growth', 'Correct.'],
        ['It reduces tax to zero', 'No.'],
        ['It removes competition', 'No.'],
        ['It guarantees loyalty', 'No.'],
      ], 0)),
    card('Layout of a statement of profit or loss', [
      'Revenue − cost of sales = **gross profit**; gross profit − expenses = **profit**.',
      '**Cost of sales** = direct cost of goods sold (materials). **Expenses** = running costs (rent, advertising, salaries).',
    ],
      ord('Order the statement of profit or loss from top to bottom.', [
        'Revenue',
        'Cost of sales',
        'Gross profit',
        'Expenses',
        'Profit',
      ], 'Revenue less cost of sales gives gross profit; less expenses gives profit.')),
    card('Calculations from a statement', [
      '**Revenue = price × units sold**.',
      '**Gross profit = revenue − cost of sales**.',
      '**Profit = gross profit − expenses**.',
    ],
      calc('Revenue is $80,000, cost of sales $52,000 and expenses $18,000. What is profit ($)?', 10000, {
        unit: '$',
        formula: 'Profit = (revenue − cost of sales) − expenses',
        steps: ['Gross profit = 80,000 − 52,000 = $28,000', '28,000 − 18,000 = $10,000'],
      })),
    card('Decisions from a statement', [
      'High expenses → cut overheads. Low gross profit → cheaper materials or higher prices. Falling revenue → review marketing or prices.',
      'Compare with previous years and rivals.',
    ],
      scn('A shop’s revenue is steady and gross profit is healthy, but profit has fallen because rent and advertising rose sharply.', [
        ['Review and reduce expenses', 'Targets the cause.', true],
        ['Cut prices of every product', 'Reduces gross profit.', false],
      ], 'Find the cause in the statement before acting.')),
  ],

  'u5-financial-position': [
    card('Non-current and current assets', [
      '**Non-current assets**: kept over a year (land, buildings, machinery).',
      '**Current assets**: turned into cash within a year (**inventory, trade receivables, cash**).',
    ],
      mc('Which is a CURRENT asset?', [
        ['Inventory', 'Correct.'],
        ['Machinery', 'Non-current.'],
        ['Factory building', 'Non-current.'],
        ['Delivery van', 'Non-current.'],
      ], 0)),
    card('Non-current and current liabilities', [
      '**Non-current liabilities**: due after more than a year (long-term bank loans).',
      '**Current liabilities**: due within a year (**trade payables, overdraft**).',
    ],
      mc('Which is a CURRENT liability?', [
        ['Trade payables', 'Correct.'],
        ['A 10-year bank loan', 'Non-current.'],
        ['Machinery', 'Asset.'],
        ['Cash', 'Asset.'],
      ], 0)),
    card('Total assets, total liabilities and capital employed', [
      '**Total assets = non-current assets + current assets**.',
      '**Total liabilities = current + non-current liabilities**.',
      '**Capital employed = total assets − current liabilities**.',
    ],
      calc('Total assets are $150,000 and current liabilities are $40,000. What is capital employed ($)?', 110000, {
        unit: '$',
        formula: 'Capital employed = total assets − current liabilities',
        steps: ['150,000 − 40,000 = $110,000'],
      })),
    card('Working capital from the statement', [
      '**Working capital = current assets − current liabilities**.',
      'Positive → can meet short-term debts. Negative → liquidity risk.',
    ],
      mc('A firm’s current liabilities are larger than its current assets. This suggests…', [
        ['A risk it cannot pay short-term debts', 'Correct.'],
        ['Very strong liquidity', 'Opposite.'],
        ['No debts', 'No.'],
        ['High profit', 'Not shown.'],
      ], 0)),
    card('Decisions from a statement of financial position', [
      'Lenders check **liquidity and debts**; investors check **assets, borrowing and growth potential**; managers check whether they hold too much stock or have too little cash.',
    ],
      mc('A bank sees a firm with large debts and little cash. How might it respond?', [
        ['Be cautious about lending more', 'Correct.'],
        ['Lend a huge extra amount without checks', 'Unlikely.'],
        ['Ignore the statement', 'Lenders use it.'],
        ['Buy the firm automatically', 'No.'],
      ], 0)),
  ],

  'u5-ratios': [
    card('Gross profit margin', [
      '**Profitability** = how well a business turns revenue into profit.',
      '**Gross profit margin = (gross profit ÷ revenue) × 100**.',
    ],
      calc('Gross profit is $18,000 and revenue is $60,000. What is the gross profit margin (%)?', 30, {
        unit: '%',
        formula: 'GPM = (gross profit ÷ revenue) × 100',
        steps: ['18,000 ÷ 60,000 = 0.3', '0.3 × 100 = 30%'],
      })),
    card('Profit margin', [
      '**Profit margin = (profit ÷ revenue) × 100**. Shows profit per $100 of sales after all expenses.',
    ],
      calc('Profit is $6,000 and revenue is $60,000. What is the profit margin (%)?', 10, {
        unit: '%',
        formula: 'Profit margin = (profit ÷ revenue) × 100',
        steps: ['6,000 ÷ 60,000 = 0.1', '0.1 × 100 = 10%'],
      })),
    card('Return on capital employed (ROCE)', [
      '**ROCE = (profit ÷ capital employed) × 100**.',
      'Shows the return on the money invested; compare with previous years, rivals or bank interest.',
    ],
      calc('Profit is $15,000 and capital employed is $100,000. What is ROCE (%)?', 15, {
        unit: '%',
        formula: 'ROCE = (profit ÷ capital employed) × 100',
        steps: ['15,000 ÷ 100,000 = 0.15', '0.15 × 100 = 15%'],
      })),
    card('Interpreting profitability', [
      'Higher is better. Compare over time and with competitors.',
      'Improve by **raising prices**, **cutting costs** or **increasing sales**. If gross margin is steady but profit margin falls → expenses are rising.',
    ],
      mc('Gross profit margin is steady, but profit margin falls. What does this suggest?', [
        ['Expenses are rising', 'Correct.'],
        ['Cost of sales is rising', 'Gross margin would fall.'],
        ['Revenue has fallen to zero', 'Not indicated.'],
        ['Liquidity has improved', 'Not related.'],
      ], 0)),
    card('Current ratio', [
      '**Liquidity** = ability to pay short-term debts.',
      '**Current ratio = current assets ÷ current liabilities** (e.g. 1.5 : 1).',
    ],
      calc('Current assets are $84,000 and current liabilities are $60,000. What is the current ratio (as a number)?', 1.4, {
        unit: ': 1',
        formula: 'Current ratio = current assets ÷ current liabilities',
        steps: ['84,000 ÷ 60,000 = 1.4 (1.4 : 1)'],
      })),
    card('Acid test ratio', [
      '**Acid test = (current assets − inventory) ÷ current liabilities**.',
      'It ignores inventory because stock is the **least liquid** current asset.',
    ],
      calc('Current assets $84,000, inventory $24,000, current liabilities $60,000. What is the acid test ratio (as a number)?', 1, {
        unit: ': 1',
        formula: 'Acid test = (current assets − inventory) ÷ current liabilities',
        steps: ['84,000 − 24,000 = 60,000', '60,000 ÷ 60,000 = 1.0'],
      })),
    card('Interpreting liquidity', [
      'Rule of thumb: current ratio around **1.5–2**; acid test around **1 or more**.',
      'Below 1 → liquidity danger. Far too high → idle cash/stock not used productively.',
    ],
      mc('A firm has a current ratio of 0.7 : 1. What does this suggest?', [
        ['It may struggle to pay short-term debts', 'Correct.'],
        ['Excellent liquidity', 'Opposite.'],
        ['Very high profit', 'Not liquidity.'],
        ['No liabilities', 'Not true.'],
      ], 0)),
    card('Users of accounts', [
      '**Internal**: owners, managers, employees (job security, pay).',
      '**External**: suppliers (will they be paid?), government (tax), lenders/banks (can they repay?), investors.',
      'They use accounts to decide whether to **lend to, invest in or trade with** a business.',
    ],
      mc('Which user is MOST interested in whether a firm can repay a loan?', [
        ['The bank', 'Correct.'],
        ['A customer', 'Cares about product.'],
        ['The local community', 'Cares about jobs/environment.'],
        ['A competitor', 'Not a main user.'],
      ], 0)),
    card('Limitations of accounts and ratios', [
      'Use **past data**, ignore **non-financial factors** (staff morale, reputation), can be affected by **window dressing**, accounting policies differ, inflation distorts comparisons.',
    ],
      tfd('Ratio analysis can perfectly predict a firm’s future.', 'false', 'It uses historical data and ignores non-financial factors.')),
  ],
};
