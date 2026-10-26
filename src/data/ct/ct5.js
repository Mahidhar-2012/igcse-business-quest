import { mc, ord, scn, calc, tfd, ao } from '../builders.js';

export const ct5 = {
  'u5-finance': {
    cards: [
      [ao(3, mc('A bakery’s oven breaks down and cannot be repaired. Which reason for needing finance does this show?', [
        ['Replacing a non-current asset', 'Correct.'],
        ['Start-up capital', 'The business already exists.'],
        ['Working capital', 'Not day-to-day costs.'],
        ['Investing in a new product line', 'Not stated.'],
      ], 0))],
      [ao(4, mc('A shop needs $3,000 to buy extra stock for a two-week sale, and separately $80,000 to buy a new building. Which pairing of finance is best-justified?', [
        ['Short-term (overdraft/trade credit) for stock; long-term (loan/share capital) for the building', 'Correct: match finance length to purpose.'],
        ['Overdraft for the building', 'Short-term finance for a long-term asset is risky and expensive.'],
        ['Long-term loan for the stock', 'Over-commitment for a short need.'],
        ['Both from a grant', 'Not guaranteed.'],
      ], 0))],
      [ao(4, calc('A business has inventory $18,000, trade receivables $9,000 and cash $4,000. It owes trade payables $20,000 and an overdraft of $8,000. What is its working capital, and what does it suggest?', 3000, {
        unit: '$',
        formula: 'Working capital = current assets − current liabilities',
        steps: ['Current assets = 18,000 + 9,000 + 4,000 = $31,000', 'Current liabilities = 20,000 + 8,000 = $28,000', '31,000 − 28,000 = $3,000', 'It is positive but small: a slight delay in customer payments could cause a cash problem.'],
      }))],
      [ao(4, mc('A sole trader has $5,000 in profit she could reinvest or use to repay a customer’s complaint refund. Which statement best shows why retained profit is attractive?', [
        ['It has no interest or repayment and no loss of control, but limits how much can be raised', 'Correct.'],
        ['It is unlimited', 'Limited by profit.'],
        ['It needs a bank’s approval', 'Not required.'],
        ['It is paid back with interest', 'No.'],
      ], 0))],
      [ao(4, mc('A growing company needs $2m for a factory. Which external source is best-justified if it wants to avoid heavy interest and the owners accept sharing ownership?', [
        ['Share capital (issuing shares)', 'Correct.'],
        ['A bank overdraft', 'Short-term and expensive.'],
        ['Trade credit', 'Too small and short-term.'],
        ['Sale of unwanted assets', 'Unlikely to raise $2m.'],
      ], 0))],
      [ao(4, mc('A café wants a $9,000 coffee machine but has little cash and a short trading history. Which option best reduces upfront cost and risk?', [
        ['Leasing, with regular payments and maintenance usually included', 'Correct.'],
        ['Buying with cash it does not have', 'Not possible.'],
        ['Issuing shares to the public', 'Not possible for a small café.'],
        ['Waiting for a grant with no guarantee', 'Uncertain.'],
      ], 0))],
      [ao(4, scn('A firm can use $60,000 of retained profit (limited and slows other plans) or borrow $60,000 at 8% (cost $4,800 a year plus repayments). It has stable profits of $90,000. Which is best-justified?', [
        ['A mix: use some retained profit and borrow the rest, balancing cost and liquidity', 'Reduces both interest cost and cash strain.', true],
        ['Borrow everything because borrowing is always cheaper', 'Ignores interest.', false],
      ], 'Weigh cost against effect on cash and control.'))],
      [ao(4, scn('A small sole-trader bakery needs $2,000 for three weeks to cover a late customer payment. Which source is best-justified?', [
        ['Bank overdraft: short-term, flexible and matches the need', 'Fits amount and time.', true],
        ['Issue shares to the public', 'Not available to a sole trader and not short-term.', false],
      ], 'Match source to amount, time and legal form.'))],
      // advantages / disadvantages cards
      [ao(4, mc('Which is the best-justified disadvantage of using only internal finance for a fast-growing firm?', [
        ['Amounts are limited, so growth may be slower than competitors’', 'Correct.'],
        ['It must be repaid with interest', 'Not for internal finance.'],
        ['It gives lenders control', 'No.'],
        ['It requires a legal agreement', 'Not needed.'],
      ], 0))],
      [ao(4, mc('A business uses retained profit and owner savings for years. Which risk is most important?', [
        ['The owner’s own money is at risk and growth is limited by profits', 'Correct.'],
        ['Interest costs are high', 'No interest.'],
        ['Lenders take control', 'No lenders.'],
        ['Share prices fall', 'Not relevant.'],
      ], 0))],
      [ao(4, scn('A firm with $40,000 sales a month needs $10,000 for six weeks. A bank loan takes 3 weeks to arrange; an overdraft is available at once at 14%. Which is best-justified?', [
        ['Use the overdraft: it is fast and the interest for six weeks is small', 'About $10,000 × 14% × 6/52 ≈ $160.', true],
        ['Use only a 5-year loan', 'Too slow and too long for a six-week need.', false],
      ], 'Match speed, length and cost to the need.'))],
      [ao(4, mc('A start-up raises $50,000 from venture capital in exchange for 30% ownership. Which statement best evaluates this?', [
        ['It provides finance and expertise without repayments but gives away a share of profit and some control', 'Correct.'],
        ['It must be repaid in 12 months with interest', 'Venture capital is not a loan.'],
        ['It has no cost', 'The cost is ownership.'],
        ['It guarantees success', 'No.'],
      ], 0))],
      [ao(4, mc('A farmer receives a government grant of $6,000 conditional on creating two jobs. Which statement best shows an advantage and a limitation?', [
        ['No repayment, but conditions and limited availability', 'Correct.'],
        ['Must be repaid with interest', 'Not for grants.'],
        ['Unlimited and unconditional', 'Not so.'],
        ['Available to every firm', 'Limited.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A restaurant needs $120,000 for a kitchen refurbishment. Its profits are $50,000 a year. Options: (A) bank loan at 7% over 5 years; (B) lease the equipment at $2,400 a month; (C) crowdfunding with a 60% chance of reaching $120,000. Which is best-justified?', [
        ['A: certain funds and affordable repayments relative to profits (about $2,400 interest a year for year one on the average balance plus repayments)', 'Certainty and affordability.', true],
        ['C: because crowdfunding is free', 'Not certain and has a time cost.', false],
      ], 'Weigh certainty, cost and affordability.')),
      ao(3, calc('A loan of $50,000 charges 6% simple interest per year for 3 years. What is the total interest paid?', 9000, {
        unit: '$',
        formula: 'Interest = principal × rate × years',
        steps: ['50,000 × 0.06 = $3,000 per year', '× 3 years = $9,000'],
      })),
      ao(4, mc('Which is the best-justified disadvantage of trade credit as a source of finance?', [
        ['Suppliers may withdraw credit or lose goodwill if payment is late', 'Correct.'],
        ['It requires bank approval', 'Usually not.'],
        ['It has high interest', 'Often free.'],
        ['It lasts for decades', 'Short-term.'],
      ], 0)),
      ao(3, tfd('Bank overdrafts are a suitable way to fund the purchase of a factory.', 'false', 'Overdrafts are short-term, can be withdrawn at short notice and cost more interest; long-term assets need long-term finance.')),
      ao(4, mc('A company can sell shares to the public or to existing investors only. Which statement best compares the two?', [
        ['Public sale can raise more but risks loss of control and takeover; private sale limits both the amount and risk of takeover', 'Correct.'],
        ['Public sale never changes ownership', 'It does.'],
        ['Private sale raises unlimited money', 'Limited.'],
        ['There is no difference', 'Differences exist.'],
      ], 0)),
      ao(3, mc('A sole trader wants to raise $40,000 by selling shares. What is the main obstacle?', [
        ['A sole trader is not a company and cannot issue shares', 'Correct.'],
        ['Shares cost nothing', 'Not the issue.'],
        ['Banks forbid it', 'Not the issue.'],
        ['The amount is too small', 'Not the obstacle.'],
      ], 0)),
      ao(4, scn('A small manufacturer has a poor credit record and no spare assets for security. It needs $30,000 for a machine that will earn $12,000 extra profit a year. Which source is best-justified?', [
        ['Hire purchase or leasing, because the machine itself provides security and payments are spread', 'Overcomes lack of security.', true],
        ['An unsecured bank loan', 'Unlikely to be granted.', false],
      ], 'Choose finance that fits the firm’s circumstances.')),
      ao(3, mc('Which of these is an INTERNAL source of finance?', [
        ['Sale of unwanted assets', 'Correct.'],
        ['Bank loan', 'External.'],
        ['Venture capital', 'External.'],
        ['Crowdfunding', 'External.'],
      ], 0)),
    ],
  },

  'u5-cash-flow': {
    cards: [
      [ao(4, mc('A building firm shows a $120,000 profit this year but cannot pay wages next month because clients pay 90 days late. Which statement is most accurate?', [
        ['Profit is not cash: delayed payments created a cash flow problem', 'Correct.'],
        ['Profit and cash are the same', 'False.'],
        ['The firm must be loss-making', 'It has a profit.'],
        ['Wages are not a cost', 'They are.'],
      ], 0))],
      [ao(4, mc('A bank asks a start-up for a cash flow forecast before agreeing an overdraft. Which is the best reason?', [
        ['It shows whether the business can meet payments and when cash shortages are likely', 'Correct.'],
        ['It guarantees repayment', 'It does not.'],
        ['It replaces accounts', 'It does not.'],
        ['It shows past profit', 'It looks forward.'],
      ], 0))],
      [ao(3, calc('A month starts with $6,000 in the bank. Inflows are $14,500 and outflows $17,000. What is the closing balance, and what does it mean for next month’s opening balance?', 3500, {
        unit: '$',
        formula: 'Closing = opening + inflows − outflows',
        steps: ['Net cash flow = 14,500 − 17,000 = −$2,500', '6,000 − 2,500 = $3,500 closing', 'The same $3,500 is next month’s opening balance.'],
      }))],
      [ao(4, calc('Opening balance: $2,000. Inflows $9,000. Outflows $12,500. Next month: inflows $11,000, outflows $11,500. What is the closing balance after the second month? (Use a minus sign if negative.)', -2000, {
        unit: '$',
        formula: 'Closing = opening + inflows − outflows (each month)',
        steps: ['Month 1 closing = 2,000 + 9,000 − 12,500 = −$1,500', 'Month 2 closing = −1,500 + 11,000 − 11,500 = −$2,000', 'Correct answer: −$2,000 (negative balance throughout).'],
        tol: 0.01,
      }))],
      [ao(4, mc('A forecast shows a negative closing balance of −$8,000 in month 4 caused by a $20,000 equipment purchase. Which action is best-justified?', [
        ['Delay the purchase or arrange finance such as an overdraft/lease before month 4', 'Correct.'],
        ['Ignore it because profit is positive', 'Profit is not cash.'],
        ['Buy more equipment', 'Worsens cash.'],
        ['Hide the forecast', 'Unhelpful.'],
      ], 0))],
      [ao(4, scn('A firm expects a cash shortage in two months because customers take 90 days to pay. It can ask customers to pay in 30 days with a 2% discount, or arrange an overdraft costing 14%. Turnover from credit customers is $200,000 a year. Which is best-justified?', [
        ['Offer the discount: cost is $4,000 a year, likely lower than overdraft interest on the shortfall, and it improves cash permanently', 'Compares costs.', true],
        ['Use only an overdraft because discounts lose revenue', 'Ignores the larger interest cost.', false],
      ], 'Compare the cost of each solution.'))],
      // advantages / disadvantages cards
      [ao(4, mc('A forecast showed healthy cash but a major customer then went bankrupt. What does this show about forecasts?', [
        ['They are estimates and unexpected events can make them inaccurate', 'Correct.'],
        ['Forecasts are useless', 'Overstated.'],
        ['Forecasts guarantee cash', 'No.'],
        ['Forecasts only measure profit', 'They measure cash.'],
      ], 0))],
      [ao(4, mc('A firm with a cash shortage delays paying its main supplier and loses a 3% prompt-payment discount. Which statement best evaluates the action?', [
        ['It helps cash in the short term but loses the discount and may damage the supplier relationship', 'Correct.'],
        ['It has no downside', 'Loses discount.'],
        ['It always improves profit', 'Not necessarily.'],
        ['It increases inflows', 'It reduces outflows temporarily.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A toy retailer’s cash flow shows large negative balances from January to October and a big positive in November–December. It needs finance for ten months. Which approach is best-justified?', [
        ['An arranged overdraft or seasonal loan sized to the forecast, with careful stock buying', 'Matches the seasonal pattern.', true],
        ['Ignore the problem until December', 'The business could run out of cash.', false],
      ], 'Match finance to the forecast pattern.')),
      ao(3, calc('A forecast shows: opening $4,000; inflows $13,000; outflows $15,500 in March. April: inflows $12,000, outflows $10,000. What is the April closing balance?', 3500, {
        unit: '$',
        formula: 'Closing = opening + inflows − outflows',
        steps: ['March closing = 4,000 + 13,000 − 15,500 = $1,500', 'April closing = 1,500 + 12,000 − 10,000 = $3,500'],
      })),
      ao(4, mc('Which change would improve a business’s cash flow the fastest?', [
        ['Reducing credit terms for customers from 60 to 30 days', 'Correct: cash arrives sooner.'],
        ['Buying a larger building', 'Cash outflow.'],
        ['Extending supplier payment to 5 days', 'Shortens credit and worsens cash.'],
        ['Increasing stock', 'Ties up cash.'],
      ], 0)),
      ao(3, tfd('A profitable business never needs a cash flow forecast.', 'false', 'Profit does not guarantee cash is available when bills fall due, so a forecast is still essential.')),
      ao(4, scn('A café’s forecast shows it can pay all bills only if sales rise 15%. The owner wants to buy a $10,000 van now. Which is best-justified?', [
        ['Delay the van until cash flow improves, because the plan relies on uncertain sales growth', 'Protects cash.', true],
        ['Buy the van immediately', 'Raises the risk of running out of cash.', false],
      ], 'Avoid non-essential outflows when cash is uncertain.')),
      ao(3, mc('Which of the following would be a cash outflow in a forecast?', [
        ['Wages paid to staff', 'Correct.'],
        ['Sales receipts', 'Inflow.'],
        ['Loan received', 'Inflow.'],
        ['Customer deposit received', 'Inflow.'],
      ], 0)),
      ao(4, mc('A business has an overdraft limit of $5,000 and forecasts a −$7,500 balance. What is the best-justified conclusion?', [
        ['It exceeds the limit by $2,500, so it needs more finance or must cut outflows', 'Correct.'],
        ['It is fine', 'Over the limit.'],
        ['It should ignore the forecast', 'Unwise.'],
        ['It should increase stock', 'Worsens cash.'],
      ], 0)),
      ao(3, mc('What does a negative net cash flow in one month mean?', [
        ['More cash left the business than entered in that month', 'Correct.'],
        ['The business made a loss', 'Not necessarily.'],
        ['The business has no assets', 'Not necessarily.'],
        ['Profit is negative', 'Not necessarily.'],
      ], 0)),
    ],
  },

  'u5-profit-loss': {
    cards: [
      [ao(4, mc('A shop has revenue $200,000, cost of sales $120,000 and expenses $90,000. Which statement is correct?', [
        ['It made a loss of $10,000, because profit = 200 − 120 − 90 = −10', 'Correct.'],
        ['It made a profit of $80,000', 'That is gross profit.'],
        ['It broke even', 'It made a loss.'],
        ['It made a profit of $110,000', 'Wrong.'],
      ], 0))],
      [ao(4, mc('Owners of a company usually want profit rather than just survival. Which reason is the best-justified?', [
        ['Profit rewards risk-taking, can be reinvested to grow and attracts investors', 'Correct.'],
        ['Profit has no effect on investors', 'Investors look at profit.'],
        ['Profit only matters to tax authorities', 'Not true.'],
        ['Profit prevents competition', 'No.'],
      ], 0))],
      [ord('Put this statement of profit or loss in order from top to bottom.', [
        'Revenue',
        'Cost of sales',
        'Gross profit',
        'Expenses',
        'Profit',
      ], 'Revenue less cost of sales gives gross profit; less expenses gives profit.')],
      [ao(3, calc('Revenue $450,000, cost of sales $270,000, expenses $120,000. What is the profit, and by how much did expenses reduce gross profit?', 60000, {
        unit: '$',
        formula: 'Profit = revenue − cost of sales − expenses',
        steps: ['Gross profit = 450,000 − 270,000 = $180,000', 'Profit = 180,000 − 120,000 = $60,000', 'Expenses took 120,000 ÷ 180,000 = two-thirds of gross profit.'],
      }))],
      [ao(4, scn('A shop’s revenue is stable and its gross profit margin is 40%. Profit has fallen because rent and advertising rose sharply. Which action is best-justified?', [
        ['Review and reduce expenses such as unnecessary advertising or move to cheaper premises', 'Targets the cause shown in the statement.', true],
        ['Cut prices for all products', 'Reduces gross profit too.', false],
      ], 'Use the statement to find the cause before acting.'))],
    ],
    pool: [
      ao(4, scn('Two shops: A has revenue $500,000, gross profit $200,000, profit $60,000. B has revenue $400,000, gross profit $180,000, profit $70,000. Which statement best compares them?', [
        ['B is more efficient: lower revenue but higher profit and gross margin (45% vs 40%), and profit margin 17.5% vs 12%', 'Correct comparison using margins.', true],
        ['A is better because it has higher revenue', 'Ignores profit and margins.', false],
      ], 'Use margins, not just revenue.')),
      ao(3, calc('A business sells 6,000 units at $45. Cost of sales is $150,000 and expenses are $60,000. What is its profit?', 60000, {
        unit: '$',
        formula: 'Revenue = price × units; profit = revenue − cost of sales − expenses',
        steps: ['Revenue = 45 × 6,000 = $270,000', 'Gross profit = 270,000 − 150,000 = $120,000', 'Profit = 120,000 − 60,000 = $60,000'],
      })),
      ao(4, mc('A firm’s revenue rose 12% but profit fell. Which is the best-supported explanation?', [
        ['Costs rose faster than revenue', 'Correct.'],
        ['Revenue and profit are the same thing', 'False.'],
        ['The accounts are wrong', 'No evidence.'],
        ['Profit cannot fall if revenue rises', 'It can.'],
      ], 0)),
      ao(3, tfd('A business that makes a profit has plenty of cash.', 'false', 'Profit and cash are different: a business can be profitable but short of cash if customers pay late or it has bought assets.')),
      ao(4, scn('A café must choose: increase prices 5% (revenue +$12,000 but expected loss of 5% of customers) or cut expenses by $10,000 by reducing opening hours (expected loss of $4,000 contribution). Which is best-justified?', [
        ['Cutting expenses gives a net $6,000 gain and avoids price-driven customer loss', '10,000 − 4,000 = 6,000.', true],
        ['Raise prices because revenue rises', 'Ignores customer loss.', false],
      ], 'Compare net effects.')),
      ao(3, mc('Which item is NOT part of the cost of sales for a bakery?', [
        ['Shop rent', 'Correct: an expense.'],
        ['Flour', 'Cost of sales.'],
        ['Yeast', 'Cost of sales.'],
        ['Packaging bags', 'Cost of sales.'],
      ], 0)),
      ao(4, mc('Why might a profit-making private company reinvest profit rather than pay it all as dividends?', [
        ['To fund growth and reduce reliance on borrowing', 'Correct.'],
        ['To avoid recording profit', 'Not valid.'],
        ['Because dividends are illegal', 'Untrue.'],
        ['Because profit cannot be used', 'Untrue.'],
      ], 0)),
      ao(3, mc('Gross profit is $90,000 and expenses are $105,000. What is the result?', [
        ['A loss of $15,000', 'Correct.'],
        ['A profit of $15,000', 'Wrong sign.'],
        ['Break-even', 'Not equal.'],
        ['A profit of $195,000', 'Wrong.'],
      ], 0)),
    ],
  },

  'u5-financial-position': {
    cards: [
      [ao(3, mc('A taxi company has 12 cars, $14,000 in the bank, fuel stock worth $3,000 and customers owing $5,000. Which items are current assets?', [
        ['The bank balance, fuel stock and customers’ debts', 'Correct.'],
        ['The cars only', 'Non-current.'],
        ['All items', 'Cars are non-current.'],
        ['None', 'Several are current.'],
      ], 0))],
      [ao(3, mc('A firm has a 10-year bank loan of $80,000 and owes suppliers $12,000 due next month. Which is a current liability?', [
        ['The $12,000 owed to suppliers', 'Correct: trade payables due within a year.'],
        ['The $80,000 loan', 'Non-current liability.'],
        ['Both', 'Only the supplier debt.'],
        ['Neither', 'The supplier debt is current.'],
      ], 0))],
      [ao(4, calc('Non-current assets $120,000; current assets $45,000; current liabilities $30,000; non-current liabilities $50,000. What is capital employed, and what is its relationship to total assets?', 135000, {
        unit: '$',
        formula: 'Capital employed = total assets − current liabilities',
        steps: ['Total assets = 120,000 + 45,000 = $165,000', 'Capital employed = 165,000 − 30,000 = $135,000', 'Capital employed is funded by non-current liabilities ($50,000) plus the owners’ funds ($85,000).'],
      }))],
      [ao(4, mc('Which working-capital position best suggests a liquidity risk?', [
        ['Current assets $40,000, current liabilities $55,000', 'Correct: negative working capital.'],
        ['Current assets $80,000, current liabilities $40,000', 'Healthy.'],
        ['Current assets $50,000, current liabilities $25,000', 'Healthy.'],
        ['Current assets $60,000, current liabilities $20,000', 'Healthy.'],
      ], 0))],
      [ao(4, scn('A bank compares two borrowers. A: working capital +$30,000, non-current liabilities $20,000. B: working capital −$10,000, non-current liabilities $80,000. Which is the stronger lending candidate?', [
        ['A: it can pay short-term bills and has less existing debt', 'Uses both measures.', true],
        ['B because it has more assets', 'Higher debt and weak liquidity.', false],
      ], 'Lenders look at liquidity and existing debt.'))],
    ],
    pool: [
      ao(4, scn('Statement extract: inventory $60,000, receivables $15,000, cash $3,000, trade payables $55,000, overdraft $20,000. The firm wants to buy a $40,000 machine using its cash and overdraft. Which assessment is best?', [
        ['Current assets are $78,000 against current liabilities $75,000; with only $3,000 cash, borrowing more on overdraft is risky, so it should arrange long-term finance', 'Uses the figures.', true],
        ['Go ahead because assets are larger than liabilities', 'Liquidity is very thin.', false],
      ], 'Check liquidity before committing cash.')),
      ao(3, calc('A firm has non-current assets $200,000, current assets $70,000, current liabilities $40,000 and non-current liabilities $90,000. What is working capital?', 30000, {
        unit: '$',
        formula: 'Working capital = current assets − current liabilities',
        steps: ['70,000 − 40,000 = $30,000'],
      })),
      ao(4, mc('A firm’s inventory has grown from $20,000 to $70,000 while sales are flat. What is the most likely concern?', [
        ['Cash is tied up in unsold stock, which could cause liquidity problems', 'Correct.'],
        ['The firm has too little stock', 'Opposite.'],
        ['Sales have risen', 'Flat.'],
        ['Liabilities have disappeared', 'No.'],
      ], 0)),
      ao(3, tfd('A firm with a lot of non-current assets must have good liquidity.', 'false', 'Non-current assets cannot easily be turned into cash, so liquidity depends on current assets and liabilities.')),
      ao(4, scn('A company’s overdraft rises from $10,000 to $60,000 while cash falls to $1,000. Which action is best-justified?', [
        ['Reduce stock and chase customer debts to raise cash and replace some overdraft with longer-term finance', 'Targets the liquidity problem.', true],
        ['Increase the overdraft limit only', 'Costly and risky.', false],
      ], 'Fix the cause of weak liquidity.')),
      ao(3, mc('Which item would appear as a non-current liability?', [
        ['A 15-year mortgage', 'Correct.'],
        ['Amounts owed to suppliers next month', 'Current.'],
        ['An overdraft', 'Current.'],
        ['Tax due this month', 'Current.'],
      ], 0)),
      ao(4, mc('Which statement best explains why a lender might refuse a loan to a business with negative working capital?', [
        ['It may be unable to pay its short-term debts, so repayment is uncertain', 'Correct.'],
        ['Negative working capital means high profit', 'Not true.'],
        ['The lender dislikes the business', 'Not a reason.'],
        ['Negative working capital reduces risk', 'Increases risk.'],
      ], 0)),
      ao(3, mc('Capital employed equals:', [
        ['Total assets − current liabilities', 'Correct.'],
        ['Current assets + current liabilities', 'Wrong.'],
        ['Non-current liabilities only', 'Part of it.'],
        ['Revenue − costs', 'Profit.'],
      ], 0)),
    ],
  },

  'u5-ratios': {
    cards: [
      [ao(3, calc('A business has revenue $400,000, cost of sales $280,000. What is the gross profit margin, and is it healthy if the industry average is 25%?', 30, {
        unit: '%',
        formula: 'GPM = gross profit ÷ revenue × 100',
        steps: ['Gross profit = 400,000 − 280,000 = $120,000', '120,000 ÷ 400,000 = 30%', 'It is above the 25% industry average, so it controls direct costs well.'],
      }))],
      [ao(4, calc('Last year profit margin was 12%. This year revenue is $500,000 and profit is $45,000. What is this year’s profit margin, and what is the trend?', 9, {
        unit: '%',
        formula: 'Profit margin = profit ÷ revenue × 100',
        steps: ['45,000 ÷ 500,000 = 9%', 'Down from 12%: costs have risen faster than revenue.'],
      }))],
      [ao(4, scn('A firm earned $30,000 profit on capital employed of $250,000. A bank savings account pays 4%. Which assessment is best?', [
        ['ROCE is 12%, much higher than 4%, so the investment is worthwhile, though the business is riskier than a bank account', '30,000 ÷ 250,000 = 12%.', true],
        ['ROCE is 3%, so it is poor', 'Miscalculated.', false],
      ], 'Compare ROCE with alternatives and risk.'))],
      [ao(4, mc('Gross profit margin is steady at 35% but profit margin falls from 12% to 7%. Which explanation is best-supported?', [
        ['Expenses have risen as a share of revenue', 'Correct.'],
        ['Cost of sales has risen', 'GPM would fall.'],
        ['Revenue has doubled', 'Not indicated.'],
        ['Liquidity has improved', 'Not related.'],
      ], 0))],
      [ao(4, calc('A firm has current assets $90,000 and current liabilities $60,000. What is the current ratio, and does it suggest liquidity problems?', 1.5, {
        unit: ': 1',
        formula: 'Current ratio = current assets ÷ current liabilities',
        steps: ['90,000 ÷ 60,000 = 1.5', 'A ratio of 1.5 : 1 is generally acceptable: assets cover liabilities one and a half times.'],
      }))],
      [ao(4, calc('Current assets $120,000, of which inventory is $70,000. Current liabilities $50,000. What is the acid test ratio, and what does it reveal?', 1, {
        unit: ': 1',
        formula: 'Acid test = (current assets − inventory) ÷ current liabilities',
        steps: ['(120,000 − 70,000) ÷ 50,000 = 1.0', 'The current ratio is 2.4 but the acid test is 1.0: much of its liquidity depends on selling stock.'],
      }))],
      [ao(4, scn('Firm A: current ratio 0.7, acid test 0.3. Firm B: current ratio 2.0, acid test 1.2. A short-term supplier must decide whom to allow 60-day credit. Which is best-justified?', [
        ['Firm B: its liquid assets cover short-term debts, so payment is more likely', 'Uses both ratios.', true],
        ['Firm A because low ratios mean cheap credit', 'Nonsense.', false],
      ], 'Suppliers focus on liquidity.'))],
      [ao(4, mc('Which user of accounts is most interested in whether a firm can repay its loan?', [
        ['The bank', 'Correct.'],
        ['A customer', 'Cares about product.'],
        ['The local community', 'Cares about jobs/environment.'],
        ['A competitor', 'Not a main user.'],
      ], 0))],
      [ao(4, mc('An investor sees two firms: A has a profit margin of 25% but is a start-up in a risky market; B has 10% but a 30-year record. Which is the best-justified reason to be cautious about relying only on ratios?', [
        ['Ratios use past data and ignore risk and non-financial factors', 'Correct.'],
        ['Ratios predict exactly what happens', 'They do not.'],
        ['Ratios are illegal', 'No.'],
        ['Ratios measure only liquidity', 'They measure several things.'],
      ], 0))],
      // advantages / disadvantages card
      [ao(4, mc('A firm uses ratio analysis and finds its ROCE is 8% (industry 14%). Which statement is the best-justified conclusion?', [
        ['It suggests weaker profitability than rivals, so it should investigate costs and capital use, but ratios alone do not explain why', 'Correct.'],
        ['It proves the firm will fail', 'Overstated.'],
        ['It proves the firm is the best', 'Opposite.'],
        ['It shows all costs are fixed', 'Not shown.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('Data: Year 1: revenue $600,000, cost of sales $360,000, expenses $180,000. Year 2: revenue $720,000, cost of sales $468,000, expenses $190,000. Which statement is best-supported?', [
        ['Gross margin fell from 40% to 35% and profit margin from 10% to about 8.6%: revenue growth came with rising direct costs', 'Y1: GP 240 (40%), profit 60 (10%). Y2: GP 252 (35%), profit 62 (about 8.6%).', true],
        ['Performance improved because revenue grew 20%', 'Margins worsened.', false],
      ], 'Compare ratios across years, not just revenue.')),
      ao(3, calc('Profit is $36,000, capital employed $240,000. What is ROCE?', 15, {
        unit: '%',
        formula: 'ROCE = profit ÷ capital employed × 100',
        steps: ['36,000 ÷ 240,000 = 0.15 → 15%'],
      })),
      ao(4, mc('A business has a current ratio of 3.5 and holds lots of cash and stock it is not using. Which is the best-justified conclusion?', [
        ['Liquidity is very strong, but assets may be underused rather than invested in growth', 'Correct.'],
        ['The firm will fail immediately', 'Not shown.'],
        ['The ratio is too low', 'It is high.'],
        ['The firm has no liabilities', 'Not shown.'],
      ], 0)),
      ao(3, tfd('A high profit margin means a business has good liquidity.', 'false', 'Profit margin measures profitability; liquidity depends on current assets, inventory and current liabilities.')),
      ao(4, scn('A firm’s acid test ratio is 0.4 and current ratio 1.3. Large inventory is slow-moving. Which action is best-justified?', [
        ['Reduce stock and chase receivables to improve the acid test ratio', 'Targets liquid assets.', true],
        ['Buy more stock', 'Worsens it.', false],
      ], 'Address the cause of weak liquidity.')),
      ao(3, mc('Which ratio would a shareholder most directly use to judge the return on money invested in the business?', [
        ['ROCE', 'Correct.'],
        ['Current ratio', 'Liquidity.'],
        ['Acid test', 'Liquidity.'],
        ['Gross profit margin', 'Margin on sales.'],
      ], 0)),
      ao(4, mc('Which is the best-justified limitation of comparing two firms’ ratios from different countries?', [
        ['Different accounting rules, inflation and markets can make comparisons unreliable', 'Correct.'],
        ['Ratios are identical everywhere', 'Not true.'],
        ['Countries do not matter', 'They do.'],
        ['Ratios cannot be calculated abroad', 'They can.'],
      ], 0)),
      ao(3, mc('Which statement best describes the acid test ratio?', [
        ['A stricter test of liquidity that excludes inventory', 'Correct.'],
        ['A profitability ratio', 'No.'],
        ['A ratio measuring sales growth', 'No.'],
        ['A ratio of profit to revenue', 'No.'],
      ], 0)),
    ],
  },
};
