import { P } from './helpers.js';

export const exams5 = {
  u5: [
    {
      id: 'u5-paper1',
      unitId: 'u5',
      paper: 1,
      title: 'Unit 5 · Paper 1 style questions',
      questions: [
        {
          stem: 'Bruno manages a seaside hotel. The hotel is busy for seven months a year and quiet for five. The cash flow forecast below shows the expected cash position for the quiet months. Some bills, such as salaries and electricity, must still be paid every month.',
          table: {
            caption: 'Hotel cash flow forecast ($)',
            head: ['', 'Oct', 'Nov', 'Dec'],
            rows: [
              ['Opening balance', '8,000', '(a) ?', '–4,000'],
              ['Cash inflows', '14,000', '9,500', '10,000'],
              ['Cash outflows', '16,500', '19,000', '14,000'],
              ['Net cash flow', '–2,500', '–9,500', '–4,000'],
              ['Closing balance', '5,500', '–4,000', '–8,000'],
            ],
          },
          parts: [
            P('a', 'Define', '‘cash flow forecast’.', 2,
              ['An estimate of future cash inflows and outflows', 'usually month by month, showing expected cash balances'],
              'A cash flow forecast is an estimate of a business’s future cash inflows and outflows, usually on a month-by-month basis, which shows the expected cash balance at the end of each month.'),
            P('b', 'Calculate', 'the missing opening balance for November (a) in the forecast.', 2,
              ['The opening balance equals October’s closing balance (1)', '$5,500 (1)'],
              'November’s opening balance is October’s closing balance: $5,500.'),
            P('c', 'Outline', 'two reasons why Bruno’s hotel needs a cash flow forecast.', 4,
              ['Shows when cash shortages will occur (1) so he can plan action in advance (1)', 'Needed by a bank to support a loan/overdraft request (1) as evidence of ability to repay (1)', 'Helps plan timing of big purchases (1+1)'],
              'The forecast shows that closing balances are negative in November and December, so Bruno can arrange finance before he runs out of cash. A bank may also ask to see it before agreeing an overdraft, as evidence that the hotel can repay.'),
            P('d', 'Explain', 'two ways Bruno could overcome the cash flow problem in the quiet months.', 6,
              ['Method 1 identified (e.g. bank overdraft) (1)', 'Explained in context (covers the forecast negative balance (down to –$8,000 in December) for a short time; interest is paid only while used) (2)', 'Method 2 identified (e.g. delay payments to suppliers / reduce outflows / more promotions to raise inflows) (1)', 'Explained in context (delaying food supplier payments keeps cash in the hotel, although it may harm relations) (2)'],
              'Bruno could arrange a bank overdraft, which lets the account go below zero to cover the forecast shortage in November and December; he only pays interest while it is used. He could also delay paying suppliers, such as the food supplier, which keeps cash in the hotel for longer, although suppliers could become unhappy.'),
            P('e', 'Justify', 'your answer: Is a cash flow forecast enough to make sure the hotel’s finances are successful?', 6,
              ['Benefit applied (warns of shortages) (2)', 'Limitation applied (forecast is an estimate; unexpected costs, fewer guests) (2)', 'Judgement (1)', 'Justification (1)'],
              'A forecast warns Bruno of shortages and lets him act early. But it is based on estimates, so if there are fewer guests or costs rise, the real figures could be worse. I do not think a forecast alone is enough; he also needs to monitor actual cash and keep an overdraft available, because the quiet months make cash very unpredictable.'),
          ],
        },
        {
          stem: 'Triton Foods is a private limited company. Extracts from its accounts for last year are shown below.',
          table: {
            caption: 'Triton Foods: extracts from accounts ($000)',
            head: ['Item', 'This year', 'Last year'],
            rows: [
              ['Revenue', '800', '700'],
              ['Cost of sales', '560', '455'],
              ['Expenses', '160', '175'],
              ['Current assets', '210', '190'],
              ['  of which inventory', '90', '100'],
              ['Current liabilities', '140', '100'],
              ['Capital employed', '500', '480'],
            ],
          },
          parts: [
            P('a', 'Define', '‘gross profit’.', 2,
              ['Revenue minus cost of sales', '(profit before expenses are deducted)'],
              'Gross profit is revenue minus the cost of sales, before expenses are deducted.'),
            P('b', 'Calculate', 'Triton Foods’ profit for this year. Show your working.', 2,
              ['Gross profit = 800 − 560 = 240 (1)', 'Profit = 240 − 160 = $80,000 (1)'],
              'Gross profit = 800 − 560 = $240,000. Profit = 240 − 160 = $80,000.'),
            P('c', 'Outline', 'two users of Triton Foods’ accounts and one reason each might use them.', 4,
              ['User identified e.g. bank/lender (1) uses accounts to decide whether it can repay a loan (1)', 'User identified e.g. shareholders/investors (1) uses them to see profit and return on investment (1)', 'Suppliers, managers, employees or government accepted with a sensible reason (1+1)'],
              'A bank would use the accounts to decide whether Triton can repay a loan. Shareholders would use them to see how profitable the business is and decide whether to keep their investment.'),
            P('d', 'Explain', 'two possible limitations of using accounts and ratio analysis to judge Triton Foods.', 6,
              ['Limitation 1 identified (uses past data) (1)', 'Explained (conditions may change, so last year’s figures may not predict the future) (2)', 'Limitation 2 identified (ignores non-financial factors) (1)', 'Explained (staff morale, reputation or competitors not shown) (2)'],
              'The accounts show last year and this year, not the future, so changes in the market may make the ratios less useful. Ratios also ignore non-financial factors such as customer loyalty or the quality of managers, which can affect the future success of Triton Foods.'),
            P('e', 'Justify', 'your answer: Using ratios (gross profit margin, profit margin and acid test), do you think Triton Foods’ financial performance improved this year? (Gross profit margin: this year 30%, last year 35%; profit margin: this year 10%, last year 10%; acid test: this year 0.86, last year 0.90.)', 6,
              ['Gross profit margin fell from 35% to 30% (cost of sales rose faster than revenue) (2)', 'Profit margin stayed at 10% because expenses fell (1)', 'Acid test fell from 0.90 to 0.86, below 1, so liquidity is weaker (2)', 'Judgement and justification (1)'],
              'Gross profit margin fell from 35% to 30%, so cost of sales rose faster than revenue. Profit margin stayed at 10% only because expenses were cut. The acid test ratio fell from 0.90 to 0.86, which is below 1, suggesting weaker ability to pay short-term debts. Overall performance did not improve: profit rose in dollars but margins and liquidity are weaker, so Triton should look at its costs and cash.'),
          ],
        },
      ],
    },
    {
      id: 'u5-paper2',
      unitId: 'u5',
      paper: 2,
      title: 'Unit 5 · Paper 2 style case study: Michelle’s Designs',
      intro: {
        title: 'Michelle’s Designs',
        paragraphs: [
          'Michelle lost her job when a sugar factory closed. She started Michelle’s Designs, which designs and makes clothes. She used $5,000 of her own savings and her business is growing. A hotel chain has asked her to make 400 staff uniforms within three months, but she needs $12,000 to buy fabric and a second sewing machine.',
          'She can borrow from a bank, use a government grant for small businesses (maximum $8,000, not guaranteed), or sell a share of the business to an investor.',
        ],
        table: {
          caption: 'Appendix 1: Michelle’s expected figures for the uniform order ($)',
          head: ['Item', 'Amount'],
          rows: [
            ['Revenue from order', '30,000'],
            ['Fabric and thread (cost of sales)', '12,000'],
            ['Wages for extra seamstress', '6,000'],
            ['Other expenses', '2,000'],
            ['Cost of new sewing machine', '3,000'],
          ],
        },
      },
      questions: [
        {
          parts: [
            P('a', 'Explain', 'two reasons why Michelle needs finance for this order.', 8,
              ['Reason 1 identified (working capital to buy fabric before she is paid) (1)', 'Developed (fabric costs $12,000 months before the hotel pays) (3)', 'Reason 2 identified (buy a non-current asset: second sewing machine / expansion) (1)', 'Developed (machine costs $3,000 and allows faster production to meet the three-month deadline) (3)'],
              'Michelle needs working capital to buy $12,000 of fabric and thread before the hotel pays her, otherwise she cannot start the order. She also needs finance for a second sewing machine, a non-current asset costing $3,000, because she cannot produce 400 uniforms in three months with one machine.'),
            P('b', 'Justify', 'your recommendation: Consider the advantages and disadvantages of a bank loan, a government grant and selling a share of the business to an investor. Recommend which Michelle should use.', 12,
              ['Bank loan advantage and disadvantage applied (large sum quickly, keeps ownership vs interest/repayments and risk) (3)', 'Grant advantage and disadvantage applied (no repayment vs maximum $8,000, uncertain) (3)', 'Investor advantage and disadvantage applied (no repayments, expertise vs lose part of ownership/profit) (3)', 'Recommendation (1)', 'Justification using Appendix 1 (profit from the order is about $10,000) (2)'],
              'A bank loan could give the full $12,000 and Michelle would keep ownership, but she would pay interest and risk repayment problems. A grant needs no repayment, but the maximum is $8,000 and it is not guaranteed. An investor means no repayments but Michelle would give away part of her business and profit. Appendix 1 shows the order should make about $10,000 profit (30,000 − 12,000 − 6,000 − 2,000), so she can afford interest. I recommend a bank loan, perhaps with a grant if she gets one, because it keeps control and the order is large and secure enough to repay.'),
          ],
        },
        {
          parts: [
            P('a', 'Calculate', 'the profit Michelle should make on the uniform order and explain why her cash flow could still be a problem. (Use Appendix 1.)', 8,
              ['Gross profit = 30,000 − 12,000 = 18,000 (2)', 'Profit = 18,000 − 6,000 − 2,000 = 10,000 (2)', 'Cash flow problem identified (fabric and wages paid before payment) (1)', 'Explained with application (the hotel may pay only after delivery; she pays $12,000 for fabric earlier) (3)'],
              'Gross profit = $30,000 − $12,000 = $18,000. Profit = $18,000 − $6,000 wages − $2,000 other expenses = $10,000 (ignoring the machine, which is a non-current asset). But Michelle pays for fabric and wages over the three months while the hotel might pay only when the uniforms are delivered, so she could run out of cash even though the order is profitable.'),
            P('b', 'Justify', 'your recommendation: Consider ways Michelle could solve a short-term cash flow problem while making the uniforms. Recommend the best option.', 12,
              ['Overdraft advantage and disadvantage applied (flexible vs interest) (3)', 'Asking the hotel to pay a deposit/faster payment advantage and disadvantage applied (improves cash vs hotel may refuse) (3)', 'Delaying payment to fabric supplier / delaying machine purchase advantage and disadvantage (keeps cash vs supplier goodwill/slower production) (3)', 'Recommendation (1)', 'Justification (2)'],
              'An overdraft is flexible and quick but costs interest. Asking the hotel for a deposit improves cash flow with no interest, but the hotel may refuse. Delaying payment to the fabric supplier saves cash but may damage the relationship and Michelle needs the fabric on time. I recommend asking for a 30% deposit, with an overdraft as back-up, because a deposit is cheap, and this large order makes the hotel likely to accept; the overdraft covers any gap.'),
          ],
        },
      ],
    },
  ],
};
