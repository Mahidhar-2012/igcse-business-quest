import { mc, ord, scn, calc, tfd } from '../builders.js';

export const extra5 = {
  'u5-finance': [
    mc('Venture capital is…', [
      ['Money from investors who take a share in a risky, growing business', 'Correct: usually in return for part ownership.'],
      ['A short-term overdraft from a bank', 'That is a bank overdraft.'],
      ['Profit kept in the business', 'That is retained profit.'],
      ['Delayed payment to suppliers', 'That is trade credit.'],
    ], 0),
    scn('A new café needs a $8,000 coffee machine. It has no savings and little credit history.', [
      ['Use leasing', 'Spreads the cost into regular payments with no large up-front sum, easier to obtain for a new business.', true],
      ['Issue shares to the public', 'Impossible for a new café; costly and complex.', false],
    ], 'Match the source of finance to the business’s size, legal form, amount and cost.'),
    mc('Trade credit as a source of finance means…', [
      ['Delaying payment to suppliers, usually free of interest in the short term', 'Correct.'],
      ['Borrowing from a bank for 10 years', 'That is a loan.'],
      ['Selling shares to the public', 'That is share capital.'],
      ['Receiving a government grant', 'That is a grant.'],
    ], 0),
    tfd('A bank loan is always a cheaper source of finance than issuing shares.', 'depends', 'Loans cost interest and must be repaid; shares have no repayment but dilute ownership and require dividends.'),
    calc('Current assets are $38,000 and current liabilities are $46,000. What is working capital ($)? (Use a minus sign if negative.)', -8000, {
      unit: '$',
      formula: 'Working capital = current assets − current liabilities',
      steps: ['38,000 − 46,000 = −$8,000', 'Negative working capital means the firm may struggle to pay short-term debts'],
    }),
    mc('Crowdfunding involves…', [
      ['Raising small amounts from many people, often online', 'Correct.'],
      ['One bank lending a large sum', 'That is a bank loan.'],
      ['The owner investing personal savings', 'That is owner’s investment.'],
      ['Selling a building', 'That is sale of assets.'],
    ], 0),
  ],
  'u5-cash-flow': [
    calc('January: opening balance $2,000, inflows $15,000, outflows $12,500. February: inflows $14,000, outflows $18,000. What is the CLOSING balance in February ($)?', 500, {
      unit: '$',
      formula: 'Closing = opening + inflows − outflows (each month)',
      steps: ['Jan net = 15,000 − 12,500 = +2,500', 'Jan closing = 2,000 + 2,500 = 4,500 (Feb opening)', 'Feb net = 14,000 − 18,000 = −4,000', 'Feb closing = 4,500 − 4,000 = $500'],
    }),
    calc('A month’s opening balance is $5,000, inflows are $9,000 and the closing balance is $3,200. What were the outflows ($)?', 10800, {
      unit: '$',
      formula: 'Outflows = opening + inflows − closing',
      steps: ['5,000 + 9,000 = 14,000', '14,000 − 3,200 = $10,800'],
    }),
    mc('A forecast shows a negative closing balance in March. What should the manager do?', [
      ['Arrange an overdraft or speed up customer payments before March', 'Correct: act early to avoid running out of cash.'],
      ['Ignore it, because profit is positive', 'Profit does not equal cash.'],
      ['Buy new machinery', 'Worsens the cash position.'],
      ['Remove the forecast', 'The forecast is a warning tool.'],
    ], 0),
    tfd('Delaying payments to suppliers has no possible downside.', 'false', 'Suppliers may withdraw credit, charge penalties or refuse to supply.'),
    mc('A cash flow forecast helps a business mainly by…', [
      ['Identifying shortages early and supporting loan applications', 'Correct.'],
      ['Guaranteeing profit', 'It forecasts cash, not profit guarantees.'],
      ['Reducing the need for finance', 'It identifies needs.'],
      ['Replacing the statement of financial position', 'Different purpose.'],
    ], 0),
    scn('A firm faces a cash shortage in two months. It could delay buying a new van or delay paying a key supplier who offers a 5% early-payment discount.', [
      ['Delay buying the van', 'Protects cash with no loss of supplier goodwill or discount.', true],
      ['Delay paying the key supplier', 'Loses the 5% discount and risks the relationship.', false],
    ], 'Delaying non-urgent purchases usually harms the business less than delaying supplier payments.'),
  ],
  'u5-profit-loss': [
    calc('A firm sells 8,000 units at $25. Cost of sales is $120,000 and expenses are $45,000. What is profit ($)?', 35000, {
      unit: '$',
      formula: 'Revenue = price × units; GP = revenue − COS; Profit = GP − expenses',
      steps: ['Revenue = 25 × 8,000 = $200,000', 'GP = 200,000 − 120,000 = $80,000', 'Profit = 80,000 − 45,000 = $35,000'],
    }),
    calc('Total revenue is $90,000 and total costs are $97,500. What is the profit/loss ($)? (Use a minus sign for a loss.)', -7500, {
      unit: '$',
      formula: 'Profit = total revenue − total costs',
      steps: ['90,000 − 97,500 = −$7,500 (a loss)'],
    }),
    mc('Which action would directly INCREASE gross profit?', [
      ['Negotiating cheaper raw materials from suppliers', 'Correct: cost of sales falls.'],
      ['Increasing the advertising budget', 'This is an expense and lowers profit unless it raises sales.'],
      ['Paying managers higher salaries', 'An expense that reduces profit.'],
      ['Renting a bigger office', 'An expense.'],
    ], 0),
    mc('Revenue increased from $200,000 to $250,000, but profit fell from $40,000 to $25,000. What is the most likely cause?', [
      ['Costs (cost of sales and/or expenses) rose faster than revenue', 'Correct.'],
      ['Revenue fell', 'It increased.'],
      ['Profit must be cash', 'Unrelated.'],
      ['Tax was removed', 'No information.'],
    ], 0),
    tfd('A business that makes a profit can never have liquidity problems.', 'false', 'Profit does not ensure cash is available when bills fall due.'),
  ],
  'u5-financial-position': [
    calc('Inventory $12,000, receivables $8,000, cash $5,000. Trade payables $15,000, overdraft $5,000. What is working capital ($)?', 5000, {
      unit: '$',
      formula: 'Working capital = current assets − current liabilities',
      steps: ['Current assets = 12,000 + 8,000 + 5,000 = $25,000', 'Current liabilities = 15,000 + 5,000 = $20,000', '25,000 − 20,000 = $5,000'],
    }),
    calc('Non-current assets $60,000, current assets $25,000, current liabilities $20,000. What is capital employed ($)?', 65000, {
      unit: '$',
      formula: 'Capital employed = total assets − current liabilities',
      steps: ['Total assets = 60,000 + 25,000 = $85,000', '85,000 − 20,000 = $65,000'],
    }),
    mc('A bank overdraft is classified as a…', [
      ['Current liability', 'Correct: repayable on demand/within a year.'],
      ['Non-current asset', 'It is owed, not owned.'],
      ['Current asset', 'It is owed.'],
      ['Non-current liability', 'It is short-term.'],
    ], 0),
    mc('A firm’s current liabilities exceed its current assets. How might a lender view this?', [
      ['As a liquidity risk: the firm may struggle to repay short-term debts', 'Correct.'],
      ['As proof of strong profitability', 'Not related.'],
      ['As a reason to lend more with no checks', 'Lenders become cautious.'],
      ['As irrelevant', 'It is central to risk assessment.'],
    ], 0),
    tfd('Capital employed is the same thing as total liabilities.', 'false', 'Capital employed = total assets − current liabilities (the long-term funding of the business).'),
  ],
  'u5-ratios': [
    calc('Revenue is $400,000, cost of sales $260,000 and expenses $100,000. What is the profit margin (%)?', 10, {
      unit: '%',
      formula: 'Profit margin = (profit ÷ revenue) × 100',
      steps: ['GP = 400,000 − 260,000 = $140,000', 'Profit = 140,000 − 100,000 = $40,000', '40,000 ÷ 400,000 × 100 = 10%'],
    }),
    calc('Using the same figures, what is the gross profit margin (%)?', 35, {
      unit: '%',
      formula: 'Gross profit margin = (gross profit ÷ revenue) × 100',
      steps: ['GP = $140,000', '140,000 ÷ 400,000 × 100 = 35%'],
    }),
    calc('Profit is $45,000 and capital employed is $250,000. What is ROCE (%)?', 18, {
      unit: '%',
      formula: 'ROCE = (profit ÷ capital employed) × 100',
      steps: ['45,000 ÷ 250,000 = 0.18', '0.18 × 100 = 18%'],
    }),
    mc('Gross profit margin stayed at 35% but profit margin fell from 12% to 8%. What does this suggest?', [
      ['Expenses have risen as a percentage of revenue', 'Correct: the gap between GP and profit has widened.'],
      ['Cost of sales has risen', 'GPM is unchanged, so cost of sales is under control.'],
      ['Revenue has doubled', 'Not indicated.'],
      ['Liquidity has improved', 'Unrelated to these ratios.'],
    ], 0),
    mc('A firm has a current ratio of 0.6 : 1. What does this suggest?', [
      ['Possible liquidity problems: current assets do not cover current liabilities', 'Correct.'],
      ['Strong liquidity', 'A ratio below 1 is a warning sign.'],
      ['High profitability', 'It measures liquidity, not profit.'],
      ['Too much cash', 'No evidence.'],
    ], 0),
    scn('A bank can lend to one firm. Firm A: current ratio 2.1, acid test 1.4, ROCE 14%. Firm B: current ratio 0.8, acid test 0.3, ROCE 20%.', [
      ['Lend to Firm B (higher ROCE)', 'Profitable, but poor liquidity means it may be unable to repay on time.', false],
      ['Lend to Firm A', 'Strong liquidity suggests it can repay, and ROCE is still healthy.', true],
    ], 'Lenders prioritise ability to repay (liquidity) alongside profitability.'),
    mc('Why does the acid test ratio exclude inventory?', [
      ['Inventory is the least liquid current asset and may not be sold quickly', 'Correct.'],
      ['Inventory is not an asset', 'It is a current asset.'],
      ['Inventory always has zero value', 'It has value.'],
      ['Inventory is a liability', 'It is an asset.'],
    ], 0),
  ],
};
