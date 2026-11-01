import { mc, multi, match, cloze, short, ao } from '../builders.js';

// Unit 5 (Finance): harder replacements and extra question types.

export const h5 = {
  replace: {
    // ---------- Sources of finance ----------
    'u5-finance:2': ao(4, mc('Which is the best-justified disadvantage of trade credit as a source of finance?', [
      ['Suppliers may withdraw credit or lose goodwill if payments are late', 'Correct.'],
      ['Interest is charged from the first day, which makes it expensive', 'Trade credit is usually interest-free.'],
      ['The firm must give up a share of its ownership to the supplier', 'No shares are involved.'],
      ['It can only be used for buying land and buildings for the business', 'It is short-term credit for stock.'],
    ], 0)),
    'u5-finance:4': ao(4, mc('A company can sell shares to the public or only to existing investors. Which comparison is best?', [
      ['A public sale can raise more but risks losing control and outside takeover', 'Correct.'],
      ['A public sale raises less, but gives owners complete and lasting control', 'Reversed.'],
      ['Both raise the same amount, but only the public sale needs repayment', 'Shares are never repaid.'],
      ['Both leave control unchanged, because shares carry no voting rights', 'Ordinary shares usually have votes.'],
    ], 0)),
    'u5-finance:5': ao(3, mc('A sole trader wants to raise $40,000 by selling shares. What is the main obstacle?', [
      ['A sole trader is not a company, so it cannot issue shares', 'Correct.'],
      ['Shares can only be sold by a business that has made a loss', 'Not true.'],
      ['Shares must be repaid with interest, so the cost would be too high', 'Shares are not repaid.'],
      ['The bank has to approve every share that the owner sells', 'Not required.'],
    ], 0)),
    'u5-finance:7': ao(2, mc('Which is an INTERNAL source of finance?', [
      ['Sale of unwanted assets', 'Correct.'],
      ['A bank loan taken for five years', 'External.'],
      ['Trade credit from a supplier', 'External.'],
      ['Issuing new shares to the public', 'External.'],
    ], 0)),
    'u5-finance:c0.0': ao(2, mc('A bakery’s oven breaks down and cannot be repaired. Which reason for needing finance does this show?', [
      ['Replacing a non-current asset', 'Correct.'],
      ['Starting up a new business', 'The bakery already exists.'],
      ['Financing day-to-day working capital', 'An oven is a long-term asset.'],
      ['Expanding into a second location', 'The oven is a replacement.'],
    ], 0)),
    'u5-finance:c1.0': ao(3, mc('A shop needs $3,000 for stock for a two-week sale and $80,000 for a new building. Which finance fits each need?', [
      ['A short-term overdraft or trade credit for stock; a long-term loan or mortgage for the building', 'Correct.'],
      ['A long-term mortgage for stock; an overdraft for the building', 'Reversed.'],
      ['Sale of shares for stock; trade credit for the building', 'Mismatched.'],
      ['Retained profit for both, since it is the only source that works for all needs', 'Unlikely to cover $80,000.'],
    ], 0)),
    'u5-finance:c3.0': ao(4, mc('A sole trader can reinvest $5,000 of profit in the business. Which statement best evaluates retained profit as a source of finance?', [
      ['No interest or repayment and no loss of control, but the amount is limited', 'Correct.'],
      ['Interest must be paid, but the owner keeps full control of the firm', 'No interest on retained profit.'],
      ['A large amount can be raised at once, but control must be shared', 'Retained profit is limited.'],
      ['It must be repaid within a year, but the amount is unlimited', 'Not repaid.'],
    ], 0)),
    'u5-finance:c4.0': ao(4, mc('A growing company needs $2m for a factory. Which external source is best justified if it wants to avoid heavy interest costs?', [
      ['Share capital, since there is no interest and no repayment', 'Correct.'],
      ['A bank overdraft, since it is a long-term and low-cost source', 'Overdrafts are short-term and costly.'],
      ['Trade credit, since suppliers are able to lend very large amounts', 'Short-term and limited.'],
      ['Retained profit, since external finance is not needed for it', 'It is internal and likely too small.'],
    ], 0)),
    'u5-finance:c5.0': ao(4, mc('A café wants a $9,000 coffee machine, has little cash and a short trading history. Which option best reduces the up-front cost?', [
      ['Leasing, with regular payments and usually maintenance included', 'Correct.'],
      ['Buying outright with an overdraft that must be repaid at once', 'High cost now.'],
      ['Issuing shares to the public through the stock exchange', 'Not possible for a small café.'],
      ['Delaying the purchase until it has saved the full amount in cash', 'Does not meet the need.'],
    ], 0)),
    'u5-finance:c8.0': ao(4, mc('Which is the best-justified disadvantage of using only internal finance for a fast-growing firm?', [
      ['Amounts are limited, so growth may be slower than that of competitors', 'Correct.'],
      ['Interest must be paid every month, which raises its costs a lot', 'No interest on internal finance.'],
      ['Ownership must be shared with new investors who control decisions', 'It does not dilute ownership.'],
      ['It must be repaid in full within one year of being used', 'No repayment.'],
    ], 0)),
    'u5-finance:c9.0': ao(4, mc('A business uses retained profit and owner savings for years. Which risk is most important?', [
      ['The owner’s own money is at risk, and growth is limited by profit', 'Correct.'],
      ['The bank may take the business over if repayments are missed', 'No bank is involved.'],
      ['Shareholders may vote to replace the owner as head of the firm', 'No shareholders are involved.'],
      ['Interest rates may rise, which would increase the repayments', 'No loan.'],
    ], 0)),
    'u5-finance:c11.0': ao(4, mc('A start-up raises $50,000 from a venture capitalist for 30% ownership. Which evaluation is best?', [
      ['It brings money and expertise with no repayments, but gives up control and profit share', 'Correct.'],
      ['It brings money but must be repaid with interest within one year', 'Equity is not repaid.'],
      ['It brings no expertise, but the owner keeps full control and all profit', 'Wrong; ownership is shared.'],
      ['It is cheaper than any loan, since the investor takes no share of profit', 'The investor takes 30%.'],
    ], 0)),
    'u5-finance:c12.0': ao(3, mc('A farmer receives a $6,000 government grant provided two jobs are created. Which statement best shows an advantage and a limitation?', [
      ['No repayment, but conditions apply and grants are hard to get', 'Correct.'],
      ['Repayment with low interest, but no conditions are attached', 'Grants are not repaid.'],
      ['Unlimited amounts, but the grant must be repaid in full', 'Grants are limited.'],
      ['Quick and automatic, but the amount is always very small', 'Not automatic.'],
    ], 0)),

    // ---------- Cash flow ----------
    'u5-cash-flow:2': ao(3, mc('Which change would improve a business’s cash flow the fastest?', [
      ['Cutting the credit given to customers from 60 days to 30 days', 'Correct: cash arrives sooner.'],
      ['Raising the selling price, which only helps cash after later sales', 'Slower effect.'],
      ['Buying a new machine, which will pay for itself in later years', 'Cash goes out first.'],
      ['Paying suppliers earlier in order to build up their goodwill', 'Cash goes out sooner.'],
    ], 0)),
    'u5-cash-flow:5': ao(2, mc('Which would be a cash outflow in a cash flow forecast?', [
      ['Wages paid to staff', 'Correct.'],
      ['Cash received from a customer', 'Inflow.'],
      ['A bank loan received', 'Inflow.'],
      ['Proceeds from selling an old van', 'Inflow.'],
    ], 0)),
    'u5-cash-flow:6': ao(3, mc('A business has an overdraft limit of $5,000 and forecasts a −$7,500 balance. Which conclusion is best justified?', [
      ['It will exceed the limit by $2,500, so it needs more finance or action to cut outflows', 'Correct.'],
      ['It is within the limit, as the overdraft is below $10,000', 'The limit is $5,000.'],
      ['It will have $2,500 spare, since the limit is greater than the balance', 'Misread the figures.'],
      ['It will make a $7,500 profit once all customers have paid in full', 'A negative balance is not profit.'],
    ], 0)),
    'u5-cash-flow:7': ao(3, mc('What does a negative net cash flow in one month mean?', [
      ['More cash left the business than entered it in that month', 'Correct.'],
      ['The business made a loss in the profit and loss account', 'Cash flow is not profit.'],
      ['The business has no money in the bank at the end of the month', 'The balance could still be positive.'],
      ['The business must close within the next three months', 'Not necessarily.'],
    ], 0)),
    'u5-cash-flow:c0.0': ao(4, mc('A building firm made $120,000 profit this year but cannot pay wages next month, because clients pay after 90 days. What does this show?', [
      ['Profit is not the same as cash: delayed payments have created a cash flow problem', 'Correct.'],
      ['The profit figure must be wrong, since profitable firms always have cash', 'Not true.'],
      ['The firm needs to hire fewer workers, which will increase its profit', 'Does not solve the timing.'],
      ['Wages should be paid after profit is received, whenever that happens', 'Staff must be paid on time.'],
    ], 0)),
    'u5-cash-flow:c1.0': ao(3, mc('A bank asks a start-up for a cash flow forecast before agreeing an overdraft. What is the best reason?', [
      ['It shows whether the firm can meet payments and when it may run short', 'Correct.'],
      ['It proves the firm will make a profit in its first year of trading', 'A forecast cannot prove this.'],
      ['It replaces the need for any security or business plan', 'Banks ask for these too.'],
      ['It lists all the firm’s assets and liabilities at one date', 'That is a statement of financial position.'],
    ], 0)),
    'u5-cash-flow:c4.0': ao(4, mc('A forecast shows a closing balance of −$8,000 in month 4 caused by a $20,000 equipment purchase. Which action is best justified?', [
      ['Delay the purchase or arrange finance such as an overdraft or lease', 'Correct.'],
      ['Ignore it, since the balance will fix itself without any action', 'May not.'],
      ['Cancel the forecast, because forecasts that show losses are wrong', 'Forecasts are tools.'],
      ['Increase the equipment spending, so profits grow faster next year', 'Makes it worse.'],
    ], 0)),
    'u5-cash-flow:c6.0': ao(4, mc('A forecast showed healthy cash, but a major customer then went bankrupt. What does this show about forecasts?', [
      ['They are estimates, and unexpected events can make them inaccurate', 'Correct.'],
      ['They are exact, so the bankruptcy must have been included', 'Forecasts are estimates.'],
      ['They are useless, since no firm can predict its future cash', 'They remain useful.'],
      ['They only matter to banks and never to the firm’s managers', 'Managers use them.'],
    ], 0)),
    'u5-cash-flow:c7.0': ao(4, mc('A firm short of cash delays paying its main supplier and loses a 3% prompt-payment discount. Which statement is best?', [
      ['It helps cash in the short term but loses the discount and may harm the supplier relationship', 'Correct.'],
      ['It has no effect on the firm, since discounts are never worth taking', 'Discounts have value.'],
      ['It permanently solves the cash shortage, so no other action is needed', 'Temporary.'],
      ['It guarantees that the supplier will offer better terms next year', 'Unlikely.'],
    ], 0)),

    // ---------- Profit and loss ----------
    'u5-profit-loss:2': ao(4, mc('A firm’s revenue rose 12% but its profit fell. Which explanation is best supported?', [
      ['Costs rose by more than revenue did', 'Correct.'],
      ['Costs fell by more than revenue rose', 'That would raise profit.'],
      ['Sales volume fell, so revenue could not have risen', 'Revenue rose.'],
      ['Profit and revenue always move together, so the figures are wrong', 'They do not.'],
    ], 0)),
    'u5-profit-loss:5': ao(3, mc('Which item is NOT part of the cost of sales for a bakery?', [
      ['Shop rent', 'Correct: an expense, not a direct cost.'],
      ['Flour used to make bread', 'Direct cost.'],
      ['Packaging for each loaf sold', 'Direct cost.'],
      ['Wages of the bakers making the bread', 'Direct labour cost.'],
    ], 0)),
    'u5-profit-loss:6': ao(4, mc('Why might a profitable private company keep some profit in the business instead of paying it all as dividends?', [
      ['To fund growth and reduce its reliance on borrowing', 'Correct.'],
      ['To avoid paying any corporation tax on its profit', 'Retained profit is still taxed.'],
      ['To make sure shareholders never receive any return', 'Not the aim.'],
      ['To raise the cost of sales shown in the accounts', 'Not related.'],
    ], 0)),
    'u5-profit-loss:7': ao(3, mc('Gross profit is $90,000 and expenses are $105,000. What is the result?', [
      ['A loss of $15,000', 'Correct: 90,000 − 105,000.'],
      ['A profit of $15,000', 'Wrong sign.'],
      ['A loss of $195,000', 'The figures were added.'],
      ['A profit of $90,000', 'Expenses ignored.'],
    ], 0)),
    'u5-profit-loss:c0.0': ao(3, mc('A shop has revenue $200,000, cost of sales $120,000 and expenses $90,000. Which statement is correct?', [
      ['It made a loss of $10,000, because 200 − 120 − 90 = −10 (in $000s)', 'Correct.'],
      ['It made a profit of $10,000, because revenue is above cost of sales', 'Expenses are also deducted.'],
      ['It made a gross profit of $110,000, because 200 − 90 = 110', 'Gross profit uses cost of sales: $80,000.'],
      ['It made a loss of $210,000, because all figures are added together', 'Not how profit is calculated.'],
    ], 0)),
    'u5-profit-loss:c1.0': ao(4, mc('Owners of a company usually want profit, not just survival. Which reason is best justified?', [
      ['Profit rewards risk, can be reinvested to grow, and may be paid out as returns', 'Correct.'],
      ['Profit removes all costs from the business, so it can never fail', 'Costs remain.'],
      ['Profit is required by law for every company that is formed', 'Not required.'],
      ['Profit makes customers pay a lower price for the same product', 'Not logical.'],
    ], 0)),

    // ---------- Statement of financial position ----------
    'u5-financial-position:2': ao(4, mc('A firm’s inventory has grown from $20,000 to $70,000 while sales stay flat. What is the most likely concern?', [
      ['Cash is tied up in unsold stock, which could cause liquidity problems', 'Correct.'],
      ['Profit has risen, since larger stocks always bring higher profit', 'Not true.'],
      ['Costs have fallen, since stock is bought at the lowest prices', 'Not logical.'],
      ['Sales will rise, since having more stock increases customer demand', 'Not necessarily.'],
    ], 0)),
    'u5-financial-position:5': ao(2, mc('Which item would appear as a non-current liability?', [
      ['A 15-year mortgage', 'Correct.'],
      ['Money owed to a supplier due next month', 'Current liability.'],
      ['A bank overdraft', 'Current liability.'],
      ['Cash held in the bank', 'Current asset.'],
    ], 0)),
    'u5-financial-position:6': ao(4, mc('Why might a lender refuse a loan to a firm with negative working capital?', [
      ['It may be unable to pay short-term debts, so repayment is at risk', 'Correct.'],
      ['It has too many non-current assets for a bank to value them', 'Not the reason.'],
      ['Negative working capital means the firm is making a large profit', 'Not related.'],
      ['Banks are not permitted to lend to any firm with current liabilities', 'No such rule.'],
    ], 0)),
    'u5-financial-position:7': ao(2, mc('Capital employed is equal to…', [
      ['Total assets minus current liabilities', 'Correct.'],
      ['Current assets minus current liabilities', 'That is working capital.'],
      ['Non-current assets plus current liabilities', 'Wrong combination.'],
      ['Total liabilities minus total assets', 'Not the formula.'],
    ], 0)),
    'u5-financial-position:c0.0': ao(3, mc('A taxi company has 12 cars, $14,000 in the bank, fuel stock worth $3,000 and customers owing $5,000. Which are current assets?', [
      ['The bank balance, fuel stock and the amounts owed by customers', 'Correct.'],
      ['The 12 cars, the fuel stock and the bank balance', 'The cars are non-current.'],
      ['The 12 cars and the amounts owed by customers', 'The cars are non-current.'],
      ['Only the bank balance, since it is the only cash', 'Stock and receivables are also current.'],
    ], 0)),
    'u5-financial-position:c1.0': ao(3, mc('A firm has a 10-year bank loan of $80,000 and owes suppliers $12,000 due next month. Which is a current liability?', [
      ['The $12,000 owed to suppliers', 'Correct: due within a year.'],
      ['The $80,000 ten-year bank loan', 'Non-current.'],
      ['Both, because both are debts of the business', 'Only the short-term one.'],
      ['Neither, because liabilities are always non-current', 'Not true.'],
    ], 0)),
    'u5-financial-position:c3.0': ao(4, mc('Which working capital position best suggests a liquidity risk?', [
      ['Current assets $40,000 with current liabilities $55,000', 'Correct: negative working capital.'],
      ['Current assets $60,000 with current liabilities $30,000', 'Healthy.'],
      ['Current assets $50,000 with current liabilities $50,000', 'Borderline but not negative.'],
      ['Current assets $90,000 with current liabilities $20,000', 'Healthy.'],
    ], 0)),

    // ---------- Ratios ----------
    'u5-ratios:2': ao(4, mc('A business has a current ratio of 3.5 and holds a lot of cash and stock that it is not using. Which evaluation is best?', [
      ['Liquidity is very strong, but assets may be under-used rather than earning a return', 'Correct.'],
      ['Liquidity is weak, since a high current ratio shows it cannot pay debts', 'High ratio is strong.'],
      ['Profitability is high, since a high current ratio is a measure of profit', 'It measures liquidity.'],
      ['Nothing can be said, since a ratio is of no use without a rival’s figures', 'It can still be evaluated.'],
    ], 0)),
    'u5-ratios:5': ao(2, mc('Which ratio would a shareholder most directly use to judge the return on money invested in the business?', [
      ['Return on capital employed (ROCE)', 'Correct.'],
      ['Current ratio', 'Liquidity.'],
      ['Acid test ratio', 'Liquidity.'],
      ['Gross profit margin', 'Profitability of sales only.'],
    ], 0)),
    'u5-ratios:6': ao(4, mc('Which is the best-justified limitation of comparing ratios of two firms in different countries?', [
      ['Different accounting rules, inflation and markets can make the comparison misleading', 'Correct.'],
      ['Ratios are always calculated in a different way in every country', 'Overstated.'],
      ['Ratios cannot be calculated for firms that operate overseas', 'They can.'],
      ['Foreign firms never publish any accounts, so ratios are impossible', 'Many do.'],
    ], 0)),
    'u5-ratios:7': ao(2, mc('Which statement best describes the acid test ratio?', [
      ['A stricter test of liquidity that excludes inventory', 'Correct.'],
      ['A measure of profit as a percentage of revenue', 'Profit margin.'],
      ['A measure of return on money invested in the business', 'ROCE.'],
      ['A comparison of non-current assets and non-current liabilities', 'Not a standard ratio.'],
    ], 0)),
    'u5-ratios:c3.0': ao(4, mc('Gross profit margin is steady at 35% but profit margin falls from 12% to 7%. Which explanation is best supported?', [
      ['Expenses have risen as a share of revenue', 'Correct: the gap is below gross profit.'],
      ['The cost of sales has risen as a share of revenue', 'Gross margin is steady.'],
      ['Revenue has fallen to zero, so there is no profit', 'Not shown.'],
      ['The firm has sold more shares, so profit has fallen', 'Not shown.'],
    ], 0)),
    'u5-ratios:c7.0': ao(3, mc('Which user of accounts is most interested in whether a firm can repay its loan?', [
      ['The bank that lent the money', 'Correct.'],
      ['A customer buying a single product', 'Less interested.'],
      ['A job applicant who has never met the firm', 'Less interested.'],
      ['A competitor looking at its pricing', 'Less interested.'],
    ], 0)),
    'u5-ratios:c8.0': ao(4, mc('Firm A is a risky start-up with a 25% margin; firm B is established with 10%. What is the main limitation of using only these ratios to choose?', [
      ['Ratios use past data and ignore risk and non-financial factors', 'Correct.'],
      ['Ratios cannot be calculated for start-ups or for established firms', 'They can.'],
      ['Profit margin is the only ratio that matters to every investor', 'Not true.'],
      ['A higher ratio always shows the safer firm to invest in', 'Not true.'],
    ], 0)),
    'u5-ratios:c9.0': ao(4, mc('A firm’s ROCE is 8% and the industry average is 14%. Which conclusion is best justified?', [
      ['It suggests weaker profitability than rivals, so it should look for ways to improve', 'Correct.'],
      ['It suggests the firm is the most successful in its industry', 'Below average.'],
      ['It suggests liquidity is poor, since ROCE measures cash held', 'ROCE is profitability.'],
      ['It suggests nothing, since averages cannot be compared with one firm', 'Benchmarking is useful.'],
    ], 0)),
  },

  add: {
    'u5-finance': [
      match('Match each source of finance to its type.', [
        ['Retained profit', 'Internal, long term'],
        ['Bank overdraft', 'External, short term'],
        ['Mortgage', 'External, long term'],
        ['Selling unwanted assets', 'Internal'],
      ]),
      multi('Which are external sources of finance? Select all that apply.', [
        ['Bank loan', 'Comes from outside the business.', true],
        ['Issuing shares', 'Raised from investors outside.', true],
        ['Retained profit', 'From inside the business.', false],
        ['Owner’s own savings put into the firm', 'Internal to the owners.', false],
      ]),
      short('Define the term “working capital”.', {
        kind: 'Definition',
        points: ['Current assets minus current liabilities', 'the money available for the firm’s day-to-day running'],
        model: 'Working capital is current assets minus current liabilities. It shows the money available to run the business day to day.',
      }),
    ],
    'u5-cash-flow': [
      cloze('Complete the sentence.', 'Closing balance = opening balance + cash ___ − cash ___. A forecast helps a firm plan for periods when the closing balance is ___.', ['inflows', 'outflows', 'negative'], ['profits', 'costs']),
      short('Explain why a profitable firm might still run out of cash.', {
        command: 'Explain',
        points: ['Customers may take a long time to pay (or stock is built up)', 'Cash goes out for costs before it comes in', 'So bills fall due when there is not enough cash even though profit is positive'],
        model: 'A firm may pay for materials and wages now but wait weeks for customers to pay. Even though it makes a profit, it may not have enough cash to pay its bills when they are due.',
      }),
    ],
    'u5-profit-loss': [
      match('Match each term to its meaning.', [
        ['Revenue', 'Money from sales'],
        ['Cost of sales', 'Direct cost of the goods sold'],
        ['Gross profit', 'Revenue minus cost of sales'],
        ['Profit for the year', 'Gross profit minus expenses'],
      ]),
      short('Define the term “gross profit”.', {
        kind: 'Definition',
        points: ['Revenue minus the cost of sales'],
        model: 'Gross profit is revenue minus the cost of sales.',
      }),
    ],
    'u5-financial-position': [
      match('Match each item to the correct category.', [
        ['Machinery', 'Non-current asset'],
        ['Inventory', 'Current asset'],
        ['Trade payables', 'Current liability'],
        ['Long-term loan', 'Non-current liability'],
      ]),
    ],
    'u5-ratios': [
      match('Match each ratio to what it measures.', [
        ['Gross profit margin', 'Profit on sales before expenses'],
        ['ROCE', 'Return on money invested'],
        ['Current ratio', 'Ability to pay short-term debts'],
        ['Acid test ratio', 'Liquidity excluding inventory'],
      ]),
      short('Explain why a firm with a high profit margin can still have poor liquidity.', {
        command: 'Explain',
        points: ['Profit margin measures profit in relation to sales, not cash', 'Cash may be tied up in stock or unpaid bills', 'So the firm may be unable to pay short-term debts'],
        model: 'Profit margin shows profit as a share of sales, not cash. If cash is tied up in stock or customers pay late, the firm may be unable to pay short-term debts.',
      }),
    ],
  },
};
