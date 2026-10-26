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
          stemTitle: 'Question 1: Bruno’s hotel',
          stem: 'Bruno manages a seaside hotel. It is busy for seven months a year and quiet for five. The cash flow forecast below shows the expected cash position for the quiet months. Some bills, such as salaries and electricity, must still be paid every month.',
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
              ['K|An estimate of future cash inflows and outflows (1)', 'K|usually month by month, showing expected balances (1)'],
              '[[K|A cash flow forecast is an estimate of a business’s future cash inflows and outflows]] [[K|usually month by month, which shows the expected cash balance at the end of each month.]]'),
            P('b', 'Calculate', 'the missing opening balance for November (a) in the forecast and explain how you worked it out.', 4,
              ['K|Knows opening balance = previous month’s closing balance (1)', 'N|Selects October’s closing balance of $5,500 (1)', 'N|Checks with arithmetic: 5,500 + (−9,500) = −4,000 (1)', 'N|States answer $5,500 (1)'],
              '[[K|The opening balance for a month is the closing balance of the previous month.]] [[N|October’s closing balance is $5,500,]] [[N|and 5,500 − 9,500 = −4,000 matches November’s closing balance,]] [[N|so the missing figure (a) is $5,500.]]'),
            P('c', 'Explain', 'two ways Bruno could overcome the cash flow problem in the quiet months.', 6,
              ['K|Way 1: bank overdraft (1)', 'A|Applied (negative balances of –$4,000 and –$8,000 in Nov/Dec) (1)', 'N|Analysis: the overdraft covers the shortage so bills can still be paid, but interest is charged (1)', 'K|Way 2: delay payments to suppliers / ask customers to pay sooner (1)', 'A|Applied (hotel food supplier; guests) (1)', 'N|Analysis: cash stays in the hotel for longer, improving the balance, but suppliers may become unhappy (1)'],
              '[[K|Bruno could arrange a bank overdraft.]] [[A|The forecast shows balances of –$4,000 and –$8,000 in November and December,]] [[N|so an overdraft would let him pay salaries and electricity, although he would pay interest.]] [[K|He could delay payments to suppliers.]] [[A|The hotel buys food from suppliers every month,]] [[N|so cash stays in the business longer and the balance improves, but suppliers could become unhappy.]]'),
            P('d', 'Justify', 'your answer: Is a cash flow forecast enough to make sure the hotel’s finances are successful?', 8,
              ['K|Benefit identified: warns of shortages in advance (1)', 'A|Applied (negative balances forecast in Nov and Dec) (1)', 'N|Analysis: Bruno can arrange finance early, so bills can be paid on time (1)', 'K|Limitation identified: it is an estimate (1)', 'A|Applied (seven busy and five quiet months; guests) (1)', 'N|Analysis: if fewer guests come, the shortage is bigger than forecast, so the hotel could still run out of cash (1)', 'E|Decision justified (1)', 'E|Explains why the forecast alone is less suitable than combining it with other action (1)'],
              '[[K|A forecast warns Bruno of cash shortages in advance.]] [[A|It shows negative balances in November and December,]] [[N|so he can arrange finance early and keep paying staff and suppliers.]] [[K|But it is only an estimate.]] [[A|If fewer guests than expected come in the quiet months,]] [[N|the real shortage could be bigger and the hotel could still run out of cash.]] [[E|I do not think a forecast alone is enough; Bruno also needs actions such as an overdraft and monitoring actual cash.]] [[E|A forecast on its own cannot pay the bills; it only gives information, and the quiet months are very unpredictable.]]'),
          ],
        },
        {
          stemTitle: 'Question 2: Triton Foods',
          stem: 'Triton Foods is a private limited company. Extracts from its accounts are shown below.',
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
            ],
          },
          parts: [
            P('a', 'Define', '‘gross profit’.', 2,
              ['K|Revenue minus cost of sales (1)', 'K|before expenses are deducted (1)'],
              '[[K|Gross profit is revenue minus the cost of sales]] [[K|before expenses are deducted, for example $800,000 − $560,000.]]'),
            P('b', 'Calculate', 'Triton Foods’ profit for this year. Show your working.', 4,
              ['K|Correct formula: gross profit − expenses (1)', 'N|Gross profit = 800 − 560 = 240 (1)', 'N|Profit = 240 − 160 (1)', 'N|Correct answer with unit: $80,000 (1)'],
              '[[K|Profit = gross profit − expenses.]] [[N|Gross profit = 800 − 560 = $240,000.]] [[N|Profit = 240 − 160]] [[N|= $80,000.]]'),
            P('c', 'Explain', 'two possible limitations of using accounts and ratio analysis to judge Triton Foods.', 6,
              ['K|Limitation 1: uses past data (1)', 'A|Applied (this year and last year’s figures for the food business) (1)', 'N|Analysis: conditions may change, so last year’s ratios may not predict the future (1)', 'K|Limitation 2: ignores non-financial factors (1)', 'A|Applied (supermarket customers; food products) (1)', 'N|Analysis: e.g. customer loyalty or quality of managers are not shown, so the true prospects may be misjudged (1)'],
              '[[K|The accounts use past data.]] [[A|They show only this year’s and last year’s figures for Triton’s food business,]] [[N|so if market conditions change, the ratios may not predict future performance.]] [[K|Ratios also ignore non-financial factors.]] [[A|The quality of its food and relationships with supermarkets are not shown,]] [[N|so an investor might misjudge how successful Triton will be.]]'),
            P('d', 'Justify', 'your answer: Do you think Triton Foods’ financial performance improved this year? (Gross profit margin: 30% this year, 35% last year. Profit margin: 10% both years. Acid test: 0.86 this year, 0.90 last year.)', 8,
              ['K|Identifies relevant ratios (gross profit margin, profit margin, acid test) (1)', 'A|Applied: gross profit margin fell from 35% to 30% (1)', 'N|Analysis: cost of sales rose faster than revenue, so margins are squeezed (1)', 'N|Interprets profit margin unchanged at 10% only because expenses fell (1)', 'A|Applied: acid test fell from 0.90 to 0.86, below 1 (1)', 'N|Analysis: weaker ability to pay short-term debts, a liquidity risk (1)', 'E|Decision justified (performance did not improve overall) (1)', 'E|Explains why profit rising in dollars is less significant than weaker margins and liquidity (1)'],
              '[[K|Gross profit margin, profit margin and acid test ratio show profitability and liquidity.]] [[A|The gross profit margin fell from 35% to 30%,]] [[N|so cost of sales rose faster than revenue, squeezing margins; profit margin stayed at 10% only because expenses fell.]] [[A|The acid test ratio fell from 0.90 to 0.86, below 1,]] [[N|so Triton is less able to pay short-term debts from liquid assets.]] [[E|Overall performance did not improve.]] [[E|Profit rose in dollars, but weaker gross margin and liquidity are more significant because they show rising costs and a higher risk of cash problems.]]'),
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
              ['K|Reason 1: working capital (1)', 'N|Analysis: she must buy fabric before she is paid, so cash runs out (1)', 'N|Further analysis: without fabric she cannot make uniforms, so the order and revenue are lost (1)', 'A|Applied ($12,000 of fabric and thread; 400 uniforms) (1)', 'K|Reason 2: purchase of a non-current asset (1)', 'N|Analysis: a second sewing machine increases capacity (1)', 'N|Further analysis: she can meet the three-month deadline, protecting the hotel contract (1)', 'A|Applied ($3,000 machine; second machine) (1)'],
              '[[K|Michelle needs working capital.]] [[N|She must buy fabric before the hotel pays her, so without finance she runs out of cash,]] [[N|which means she cannot make the uniforms and loses the order and revenue.]] [[A|The fabric and thread cost $12,000 for 400 uniforms.]] [[K|She also needs finance for a non-current asset.]] [[N|A second sewing machine increases production capacity,]] [[N|so she can meet the three-month deadline and keep the hotel contract.]] [[A|The machine costs $3,000.]]'),
            P('b', 'Justify', 'your recommendation: Consider the advantages and disadvantages of a bank loan, a government grant and selling a share of the business to an investor. Recommend which Michelle should use.', 12,
              ['K|Identifies all three sources and their features (3)', 'N|Bank loan analysed: advantage and disadvantage with impact (1)', 'N|Grant analysed: advantage and disadvantage with impact (1)', 'N|Investor analysed: advantage and disadvantage with impact (2)', 'A|Application in the analysis using data (e.g. $8,000 maximum grant; $12,000 needed) (1)', 'A|Application in the conclusion (e.g. $10,000 profit on the uniform order) (1)', 'E|Decision made and justified (1)', 'E|Rejects the alternatives with reasons (1)', 'E|Further justification not a repeat (1)'],
              '[[K|A bank loan is borrowing that is repaid with interest; a grant is money that need not be repaid; an investor buys a share of the business.]] [[N|A loan gives the full sum and Michelle keeps ownership, but interest must be paid.]] [[N|A grant has no repayment but is not guaranteed.]] [[N|An investor needs no repayments but takes part of her profit and some control.]] [[A|She needs $12,000 but the maximum grant is $8,000.]] [[E|I recommend a bank loan.]] [[E|A grant is not best because it is not guaranteed and cannot cover $12,000 alone, and selling a share would give away part of her profit for ever.]] [[E|The order should make about $10,000 profit (30,000 − 12,000 − 6,000 − 2,000), enough to repay a loan.]] [[A|The hotel contract makes repayment likely.]]'),
          ],
        },
        {
          parts: [
            P('a', 'Explain', 'two reasons why Michelle’s cash flow could be a problem even though the uniform order is profitable. Use Appendix 1.', 8,
              ['K|Reason 1: costs paid before revenue is received (1)', 'N|Analysis: she pays $12,000 for fabric before the hotel pays, so cash balance goes negative (1)', 'N|Further analysis: she may be unable to pay the seamstress, delaying the order (1)', 'A|Applied ($12,000 fabric; $6,000 wages) (1)', 'K|Reason 2: heavy one-off spending on a non-current asset (1)', 'N|Analysis: the $3,000 machine uses cash that cannot be recovered quickly (1)', 'N|Further analysis: the cash shortage could last until the $30,000 is paid (1)', 'A|Applied ($3,000 machine; $30,000 revenue) (1)'],
              '[[K|Costs are paid before the money arrives.]] [[N|She pays $12,000 for fabric before the hotel pays her, so her balance could go negative,]] [[N|and she may be unable to pay the extra seamstress, delaying the order.]] [[A|Fabric costs $12,000 and wages are $6,000.]] [[K|Cash is also tied up in the machine.]] [[N|The $3,000 sewing machine uses cash that cannot be recovered quickly,]] [[N|so the shortage could last until the $30,000 revenue is received.]] [[A|The order is profitable at about $10,000 but only after payment.]]'),
            P('b', 'Justify', 'your recommendation: Consider ways Michelle could solve a short-term cash flow problem while making the uniforms (a bank overdraft, asking the hotel for a deposit, or delaying payment to the fabric supplier). Recommend the best option.', 12,
              ['K|Identifies all three options (3)', 'N|Overdraft analysed: advantage and disadvantage with impact (1)', 'N|Deposit analysed: advantage and disadvantage with impact (1)', 'N|Delaying supplier payment analysed: advantage and disadvantage with impact (2)', 'A|Application in the analysis (e.g. $12,000 of fabric; 400 uniforms) (1)', 'A|Application in the conclusion (e.g. large hotel contract) (1)', 'E|Decision made and justified (1)', 'E|Rejects alternatives with reasons (1)', 'E|Further justification not a repeat (1)'],
              '[[K|An overdraft is short-term borrowing, a deposit is part-payment in advance, and delaying payment means paying the supplier later.]] [[N|An overdraft is flexible and quick but costs interest.]] [[N|A deposit improves cash flow with no interest but the hotel may refuse.]] [[N|Delaying payment saves cash, but she needs the fabric on time and may lose goodwill or discounts.]] [[A|The $12,000 fabric must be paid for before 400 uniforms are delivered.]] [[E|I recommend asking the hotel for a deposit, with an overdraft as back-up.]] [[E|Delaying supplier payment is not best because she cannot risk late fabric, and an overdraft alone is costlier than a deposit.]] [[E|A deposit costs nothing and gives cash exactly when she needs it.]] [[A|The hotel chain is likely to agree because a large order of 400 uniforms shows she is a reliable supplier.]]'),
          ],
        },
      ],
    },
  ],
};
