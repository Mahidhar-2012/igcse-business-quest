import { P } from './helpers.js';

export const exams6 = {
  u6: [
    {
      id: 'u6-paper1',
      unitId: 'u6',
      paper: 1,
      title: 'Unit 6 · Paper 1 style questions',
      questions: [
        {
          stem: 'The economy of Country A is growing quickly. Unemployment is falling, incomes are rising, but inflation has increased to 8% and the central bank is expected to raise interest rates. Many business owners are unsure whether to expand or to wait.',
          parts: [
            P('a', 'Define', '‘inflation’.', 2,
              ['A general/average rise in prices', 'over a period of time'],
              'Inflation is a general rise in the average level of prices of goods and services over a period of time.'),
            P('b', 'Identify', 'two stages of the business cycle.', 2,
              ['Growth / boom', 'Recession / slump (any two, 1 mark each)'],
              'Boom and recession.'),
            P('c', 'Outline', 'two ways a growing economy with falling unemployment might benefit a business.', 4,
              ['Higher incomes (1) mean more demand for its products (1)', 'More employment (1) means more people to buy goods and services (1)', 'Confidence to expand/invest (1+1)'],
              'When incomes rise, customers can afford to buy more, so demand and sales rise. Falling unemployment also means more people are earning, which supports spending.'),
            P('d', 'Explain', 'two ways a rise in interest rates could affect a business in Country A.', 6,
              ['Effect 1 identified (higher cost of borrowing) (1)', 'Developed (loan repayments increase, so profit falls or expansion plans are delayed) (2)', 'Effect 2 identified (consumers spend less) (1)', 'Developed (mortgages and loans cost more, so less disposable income and falling sales) (2)'],
              'Higher interest rates make business loans more expensive, so repayments rise and firms may delay expansion plans. They also reduce consumer spending because borrowing for houses and cars costs more, so sales for many businesses could fall.'),
            P('e', 'Justify', 'your answer: Should a business owner in Country A expand now? Justify your answer.', 6,
              ['Reason to expand applied (growing demand, rising incomes) (2)', 'Reason to wait applied (inflation raising costs, higher interest rates expected) (2)', 'Judgement (1)', 'Justification (1)'],
              'Expanding now could take advantage of rising incomes and strong demand. But inflation at 8% raises costs and a higher interest rate will make borrowing for expansion more expensive and could reduce demand. I think a cautious expansion is sensible, funded by retained profit rather than loans, because the economy is growing but the risks of rising costs and rates are real.'),
          ],
        },
        {
          stem: 'Beema makes shoes in Country B. It imports leather and machines and exports 30% of its output. Recently the currency of Country B has fallen in value (depreciated) against other currencies, and a neighbouring country has introduced a 20% import tariff on shoes. Beema also plans to open a factory in another country to become a multinational company.',
          parts: [
            P('a', 'Define', '‘import tariff’.', 2,
              ['A tax', 'placed on imported goods'],
              'An import tariff is a tax placed on goods that are imported into a country.'),
            P('b', 'Identify', 'two possible advantages to Beema of becoming a multinational company.', 2,
              ['New markets / more sales', 'Lower costs (labour, materials) / avoids trade barriers / spreads risk (any two, 1 mark each)'],
              'Access to new markets and lower production costs.'),
            P('c', 'Outline', 'two effects of the depreciation of Country B’s currency on Beema.', 4,
              ['Exports become cheaper abroad (1) so sales of exports may rise (1)', 'Imported leather and machines become more expensive (1) raising costs (1)'],
              'Beema’s shoes become cheaper for foreign buyers, so export sales may increase. But the leather and machines it imports cost more in its own currency, which raises its costs.'),
            P('d', 'Explain', 'two ways the 20% import tariff in the neighbouring country could affect Beema.', 6,
              ['Effect 1 identified (shoes become more expensive in that country) (1)', 'Developed (price rises 20%, so customers buy fewer/prefer local shoes, so sales fall) (2)', 'Effect 2 identified (Beema may need to cut price or lose profit) (1)', 'Developed (absorbing the tariff reduces profit; or it may switch to other markets) (2)'],
              'A 20% tariff makes Beema’s shoes 20% more expensive in the neighbouring country, so customers may buy cheaper local shoes and Beema’s sales will fall. To stay competitive it may have to cut its prices and accept lower profit, or look for other export markets.'),
            P('e', 'Justify', 'your answer: Do you think becoming a multinational company is a good decision for Beema?', 6,
              ['Advantage applied (avoid tariffs by producing locally, lower costs) (2)', 'Disadvantage applied (high cost, unfamiliar laws/culture, management difficulty) (2)', 'Judgement (1)', 'Justification (1)'],
              'By producing in another country Beema could avoid the 20% tariff, reach new customers and perhaps lower its labour costs. However, setting up a factory is expensive, and it must cope with different laws and cultures. I think it is a good decision if it chooses a country with a stable economy and a large market, because the tariff is harming exports, but it needs careful research first.'),
          ],
        },
      ],
    },
    {
      id: 'u6-paper2',
      unitId: 'u6',
      paper: 2,
      title: 'Unit 6 · Paper 2 style case study: Clearwater Steel',
      intro: {
        title: 'Clearwater Steel',
        paragraphs: [
          'Clearwater Steel is a large steel-making company. Sales and profits have fallen because of competition from cheap imported steel. The directors are under pressure from shareholders to raise profits.',
          'The factory has released waste into a nearby river, and a pressure group has started a social media campaign against the company. One director suggests cutting costs by employing workers on low pay and ignoring environmental rules. Another proposes investing in cleaner technology.',
        ],
        table: {
          caption: 'Appendix 1: Clearwater Steel financial information ($m)',
          head: ['', 'Year 1', 'Year 2', 'Year 3'],
          rows: [
            ['Revenue', '500', '460', '420'],
            ['Profit', '60', '35', '20'],
            ['Cost of clean-up if river pollution is proved', '–', '–', '15 (estimated fine and clean-up)'],
          ],
        },
      },
      questions: [
        {
          parts: [
            P('a', 'Explain', 'two ways in which the pressure group’s campaign could affect Clearwater Steel.', 8,
              ['Effect 1 identified (damage to reputation/bad publicity) (1)', 'Developed (customers/builders may stop buying from a polluter, so sales fall) (3)', 'Effect 2 identified (pressure to change policies / legal action) (1)', 'Developed (the company may have to invest in cleaner methods or pay a fine of $15m, hurting profit) (3)'],
              'The campaign may damage Clearwater’s reputation, so customers could buy from rivals and sales, already falling, could fall further. It could also force the company to change its methods or face a fine and clean-up costs of about $15 million, which would greatly reduce its profit of $20 million.'),
            P('b', 'Justify', 'your recommendation: Consider the advantages and disadvantages of Clearwater Steel investing in cleaner technology. Should the directors do this? Justify your answer.', 12,
              ['Advantage applied (better reputation, avoids fine of $15m, meets laws) (3)', 'Advantage 2 (long-term cost savings, new customers who want green steel) (2)', 'Disadvantage applied (high cost when profit is only $20m) (3)', 'Disadvantage 2 (may raise prices vs cheap imports; benefits take time) (2)', 'Decision (1)', 'Justification (1)'],
              'Cleaner technology would improve Clearwater’s reputation and avoid the estimated $15 million fine, and it could save energy costs over time. But it is expensive when profit has fallen to $20 million and it might raise prices while competing with cheap imports. I recommend investing, perhaps in stages, because the fine and boycott risk threaten profit more than the investment cost, and being legal and responsible protects the business in the long term.'),
          ],
        },
        {
          parts: [
            P('a', 'Explain', 'two effects of an external cost and an external benefit of Clearwater Steel’s activity on the local community.', 8,
              ['External cost identified (river pollution / noise) (1)', 'Developed (the community must pay for clean-up, residents suffer health problems/fishing harmed) (3)', 'External benefit identified (jobs / local spending) (1)', 'Developed (workers’ wages are spent locally and the factory supports other local firms) (3)'],
              'An external cost is the river pollution, which harms local fishing and may cost the community in health and clean-up bills. An external benefit is the jobs the steel factory provides, so wages are spent in local shops, supporting other local businesses.'),
            P('b', 'Justify', 'your recommendation: One director suggests paying low wages and ignoring environmental rules. Consider the advantages and disadvantages of Clearwater Steel being ethical, then recommend what it should do.', 12,
              ['Ethical advantage applied (reputation, loyal staff/customers, avoids fines) (3)', 'Ethical advantage 2 (attracts investors/pressure groups less) (2)', 'Ethical disadvantage applied (higher costs and prices vs cheap imports) (3)', 'Ethical disadvantage 2 (profit may fall in the short run) (2)', 'Recommendation and justification (2)'],
              'Being ethical, by paying fair wages and obeying environmental laws, gives Clearwater a better reputation, more loyal workers and avoids fines and pressure group campaigns. But it raises costs and could make Clearwater less competitive against cheap imports, reducing short-term profit. I recommend behaving ethically because ignoring the rules risks fines, a boycott and bad publicity, which would harm profits more than the extra costs; ethical behaviour also protects long-term survival.'),
          ],
        },
      ],
    },
  ],
};
