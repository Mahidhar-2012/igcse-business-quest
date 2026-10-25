import { mc, ord, scn, calc, tfd } from '../builders.js';

export const unit5 = {
  id: 'u5',
  number: 5,
  title: 'Financial Information & Decisions',
  short: 'Finance',
  emoji: '💰',
  color: 'violet',
  submodules: [
    {
      id: 'u5-finance',
      title: 'Business Finance',
      syllabus: '5.1',
      microConcept: [
        'Finance is needed for start-up, expansion, replacing assets, technology and working capital (current assets − current liabilities).',
        'Internal: owner’s funds, retained profit, sale of assets. External: shares, venture capital, overdraft, leasing, hire purchase, loans, trade credit, grants, crowdfunding.',
        'Short-term needs → overdraft/trade credit. Long-term → loans/shares.',
      ],
      challenges: [
        calc('Current assets are $45,000 and current liabilities are $30,000. What is working capital ($)?', 15000, {
          unit: '$',
          formula: 'Working capital = current assets − current liabilities',
          steps: ['45,000 − 30,000 = $15,000'],
        }),
        mc('Best source for a SHORT-term cash shortage?', [
          ['Bank overdraft', 'Correct: flexible short-term borrowing.'],
          ['Issuing shares', 'Long-term and complex.'],
          ['Sale of the head office', 'Drastic and permanent.'],
          ['10-year bank loan', 'Too long-term for a short gap.'],
        ], 0),
        tfd('Retained profit is an internal source of finance with no interest to pay.', 'true', 'It is profit kept in the business — no lender, interest or new owners.'),
        mc('Why can a sole trader NOT issue shares?', [
          ['Only companies can issue shares', 'Correct: a sole trader is not a company.'],
          ['Shares are illegal', 'Shares are legal for companies.'],
          ['Sole traders earn too much', 'Not relevant.'],
          ['Shares are only for banks', 'Not true.'],
        ], 0),
        scn('A firm must buy $500,000 of machinery that will last 10 years.', [
          ['Use an overdraft', 'Short-term, expensive and can be withdrawn — mismatch with a long-lived asset.', false],
          ['Take a long-term bank loan', 'Repayments spread over the asset’s life; matches finance to purpose.', true],
        ], 'Match the length and cost of finance to the purpose.'),
        mc('Selling an unused warehouse to raise money is…', [
          ['An internal source of finance', 'Correct: the firm sells its own assets.'],
          ['External finance', 'Nobody lends or invests.'],
          ['A grant', 'A grant comes from the government.'],
          ['Trade credit', 'Trade credit is delayed payment to suppliers.'],
        ], 0),
      ],
    },
    {
      id: 'u5-cash-flow',
      title: 'Cash Flow Forecast',
      syllabus: '5.2',
      microConcept: [
        'Net cash flow = inflows − outflows. Closing balance = opening balance + net cash flow; this becomes next month’s opening balance.',
        'Cash is not profit: profitable firms can still run out of cash. Fixes: overdraft, delay supplier payments, speed up customer payments, delay asset purchases.',
      ],
      challenges: [
        calc('A month has cash inflows of $18,000 and outflows of $21,500. What is net cash flow ($)? (Use a minus sign for negative.)', -3500, {
          unit: '$',
          formula: 'Net cash flow = cash inflow − cash outflow',
          steps: ['18,000 − 21,500 = −$3,500'],
        }),
        calc('Opening balance is $5,000 and net cash flow is −$3,500. What is the closing balance ($)?', 1500, {
          unit: '$',
          formula: 'Closing balance = opening balance + net cash flow',
          steps: ['5,000 + (−3,500) = $1,500'],
        }),
        calc('Next month: opening balance $1,500 (from last month), inflow $20,000, outflow $24,000. What is the closing balance ($)?', -2500, {
          unit: '$',
          formula: 'Closing = opening + inflow − outflow',
          steps: ['Net cash flow = 20,000 − 24,000 = −4,000', '1,500 − 4,000 = −$2,500', 'Negative balance → needs an overdraft or other action'],
        }),
        tfd('A profitable business can never run out of cash.', 'false', 'Profit ≠ cash. Slow-paying customers or heavy asset purchases can create cash shortages.'),
        scn('A firm forecasts a negative balance in two months because customers take 90 days to pay.', [
          ['Ask customers to pay sooner and negotiate a short overdraft', 'Speeds inflows and covers the gap.', true],
          ['Buy new machinery now', 'Heavy outflows worsen the shortage.', false],
        ], 'Fix short-term cash flow problems with overdrafts, delayed payments or faster customer payments — not new spending.'),
      ],
    },
    {
      id: 'u5-profit-loss',
      title: 'Profit & the Statement of Profit or Loss',
      syllabus: '5.3',
      microConcept: [
        'Revenue = price × units sold. Gross profit = revenue − cost of sales. Profit = gross profit − expenses.',
        'Profit rewards risk-taking, provides finance, measures success and attracts investors.',
      ],
      challenges: [
        calc('A firm sells 3,500 units at $12 each. What is revenue ($)?', 42000, {
          unit: '$',
          formula: 'Revenue = selling price × units sold',
          steps: ['12 × 3,500 = $42,000'],
        }),
        calc('Revenue is $120,000 and cost of sales is $70,000. What is gross profit ($)?', 50000, {
          unit: '$',
          formula: 'Gross profit = revenue − cost of sales',
          steps: ['120,000 − 70,000 = $50,000'],
        }),
        calc('Gross profit is $50,000 and expenses are $32,000. What is profit ($)?', 18000, {
          unit: '$',
          formula: 'Profit = gross profit − expenses',
          steps: ['50,000 − 32,000 = $18,000'],
        }),
        mc('Which is part of COST OF SALES?', [
          ['Raw materials used in making the goods', 'Correct: direct costs of the goods sold.'],
          ['Office rent', 'This is an expense (overhead).'],
          ['Advertising', 'This is an expense.'],
          ['Manager’s salary', 'This is an expense.'],
        ], 0),
        tfd('Profit and cash are the same thing.', 'false', 'Profit is revenue minus costs over a period; cash is actual money held, affected by timing of payments.'),
        scn('A shop’s gross profit is steady but profit has fallen because expenses rose 30%.', [
          ['Review and reduce expenses such as energy and advertising waste', 'Targets the actual cause.', true],
          ['Cut the price of every product', 'Reduces gross profit too, worsening the problem.', false],
        ], 'Read the statement of profit or loss to find the cause before deciding.'),
      ],
    },
    {
      id: 'u5-financial-position',
      title: 'Statement of Financial Position',
      syllabus: '5.4',
      microConcept: [
        'Non-current assets: property, machinery. Current assets: inventory, receivables, cash. Non-current liabilities: long-term loans. Current liabilities: payables, overdraft.',
        'Total assets = non-current + current assets. Total liabilities = current + non-current liabilities. Capital employed = total assets − current liabilities.',
      ],
      challenges: [
        calc('Non-current assets are $80,000 and current assets are $30,000. What are total assets ($)?', 110000, {
          unit: '$',
          formula: 'Total assets = non-current assets + current assets',
          steps: ['80,000 + 30,000 = $110,000'],
        }),
        calc('Current liabilities are $20,000 and non-current liabilities are $35,000. What are total liabilities ($)?', 55000, {
          unit: '$',
          formula: 'Total liabilities = current + non-current liabilities',
          steps: ['20,000 + 35,000 = $55,000'],
        }),
        calc('Total assets are $110,000 and current liabilities are $20,000. What is capital employed ($)?', 90000, {
          unit: '$',
          formula: 'Capital employed = total assets − current liabilities',
          steps: ['110,000 − 20,000 = $90,000'],
        }),
        mc('Trade payables (money owed to suppliers within a year) are a…', [
          ['Current liability', 'Correct: due within 12 months.'],
          ['Current asset', 'Assets are what the firm owns or is owed.'],
          ['Non-current asset', 'Not owned property or equipment.'],
          ['Non-current liability', 'Not long-term borrowing.'],
        ], 0),
        tfd('Inventory is a current liability.', 'false', 'Inventory (stock) is a current ASSET.'),
        mc('Machinery used for 10 years is a…', [
          ['Non-current asset', 'Correct: used over the long term.'],
          ['Current asset', 'Current assets are converted to cash within a year.'],
          ['Current liability', 'It is owned, not owed.'],
          ['Non-current liability', 'It is owned, not owed.'],
        ], 0),
      ],
    },
    {
      id: 'u5-ratios',
      title: 'Ratio Analysis',
      syllabus: '5.5',
      microConcept: [
        'Gross profit margin = GP ÷ revenue × 100. Profit margin = profit ÷ revenue × 100. ROCE = profit ÷ capital employed × 100.',
        'Current ratio = CA ÷ CL. Acid test = (CA − inventory) ÷ CL. Limits: past data, ignores non-financial factors, accounting differences.',
      ],
      challenges: [
        calc('Gross profit is $30,000 and revenue is $150,000. What is the gross profit margin (%)?', 20, {
          unit: '%',
          formula: 'Gross profit margin = (gross profit ÷ revenue) × 100',
          steps: ['30,000 ÷ 150,000 = 0.2', '0.2 × 100 = 20%'],
        }),
        calc('Profit is $12,000 and revenue is $150,000. What is the profit margin (%)?', 8, {
          unit: '%',
          formula: 'Profit margin = (profit ÷ revenue) × 100',
          steps: ['12,000 ÷ 150,000 = 0.08', '0.08 × 100 = 8%'],
        }),
        calc('Profit is $24,000 and capital employed is $200,000. What is ROCE (%)?', 12, {
          unit: '%',
          formula: 'ROCE = (profit ÷ capital employed) × 100',
          steps: ['24,000 ÷ 200,000 = 0.12', '0.12 × 100 = 12%'],
        }),
        calc('Current assets are $90,000 and current liabilities are $60,000. What is the current ratio (answer as a number)?', 1.5, {
          unit: ': 1',
          formula: 'Current ratio = current assets ÷ current liabilities',
          steps: ['90,000 ÷ 60,000 = 1.5 (or 1.5 : 1)'],
        }),
        calc('Current assets $90,000, inventory $30,000, current liabilities $60,000. What is the acid test ratio (as a number)?', 1, {
          unit: ': 1',
          formula: 'Acid test = (current assets − inventory) ÷ current liabilities',
          steps: ['90,000 − 30,000 = 60,000', '60,000 ÷ 60,000 = 1.0 (1 : 1)'],
        }),
        tfd('Ratio analysis uses past data, so it cannot perfectly predict the future.', 'true', 'This is a key limitation, alongside ignoring non-financial factors.'),
      ],
    },
  ],
};
