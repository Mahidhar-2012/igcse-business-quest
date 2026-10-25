import { P } from './helpers.js';

export const exams4 = {
  u4: [
    {
      id: 'u4-paper1',
      unitId: 'u4',
      paper: 1,
      title: 'Unit 4 · Paper 1 style questions',
      questions: [
        {
          stem: 'Mwangi makes and sells wooden toys. Each toy sells for $20. The variable cost per toy is $8. His fixed costs are $18,000 a year. He currently sells 2,000 toys a year. He is considering cutting the price to $18 to try to sell 3,000 toys a year.',
          parts: [
            P('a', 'Define', '‘break-even’.', 2,
              ['The level of output/sales', 'at which total revenue equals total costs (no profit, no loss)'],
              'Break-even is the output at which total revenue equals total costs, so the business makes neither a profit nor a loss.'),
            P('b', 'Calculate', 'Mwangi’s break-even output at the current price of $20. Show your working.', 2,
              ['Contribution = 20 − 8 = $12 (1)', 'Break-even = 18,000 ÷ 12 = 1,500 toys (1)'],
              'Contribution per toy = $20 − $8 = $12. Break-even output = fixed costs ÷ contribution = $18,000 ÷ $12 = 1,500 toys.'),
            P('c', 'Outline', 'two ways Mwangi could reduce his break-even output.', 4,
              ['Raise the selling price (1) which increases contribution per unit (1)', 'Reduce variable cost per toy, e.g. cheaper wood (1) which increases contribution (1)', 'Reduce fixed costs, e.g. cheaper rent (1+1)'],
              'He could raise the price, which increases the contribution per toy so fewer toys need to be sold to cover fixed costs. He could also reduce fixed costs such as rent, which means there is less to recover before break-even.'),
            P('d', 'Explain', 'two limitations of break-even analysis for Mwangi.', 6,
              ['Limitation 1 identified (assumes all output is sold) (1)', 'Developed (he may make 3,000 toys but not sell them all) (2)', 'Limitation 2 identified (assumes price and variable costs stay constant) (1)', 'Developed (wood prices may rise or he may offer discounts, so break-even changes) (2)'],
              'Break-even analysis assumes every toy made is sold, but Mwangi might not sell all 3,000, so the calculation overstates profit. It also assumes price and costs stay constant; if wood prices rise or he gives discounts for bulk orders, the real break-even output would be different.'),
            P('e', 'Justify', 'your answer: Do you think Mwangi should cut the price to $18? (Use calculations.)', 6,
              ['New contribution $10 and break-even 1,800 toys (2)', 'Profit now: 12 × 2,000 − 18,000 = $6,000; at $18 and 3,000 toys: 10 × 3,000 − 18,000 = $12,000 (2)', 'Risk: demand may not reach 3,000, so profit could be lower (1)', 'Judgement with justification (1)'],
              'At $18 contribution falls to $10 and break-even rises to 1,800 toys. Currently profit is $12 × 2,000 − $18,000 = $6,000. If he sells 3,000 toys at $18, profit would be $10 × 3,000 − $18,000 = $12,000, double the current profit. However, demand may not rise to 3,000 and at only 2,000 sales at $18 profit would be just $2,000. I think he should cut the price if market research shows a big demand increase, because the potential gain is large, but there is a risk if sales do not rise.'),
          ],
        },
        {
          stem: 'Delmar Shoes makes 50,000 pairs of flip-flops a week on a production line and sells them to supermarkets. Inspectors check the flip-flops at the end of the line. Last year 5% of pairs were returned by customers because of faults, and supermarkets are threatening to switch to another supplier.',
          parts: [
            P('a', 'Define', '‘quality control’.', 2,
              ['Checking/inspecting products', 'at the end (or stages) of production to find faults'],
              'Quality control is the checking of products, usually at the end of production, using inspectors to find and remove faulty items.'),
            P('b', 'Identify', 'two methods of production, other than flow production.', 2,
              ['Job production', 'Batch production (1 mark each)'],
              'Job production and batch production.'),
            P('c', 'Outline', 'two benefits to Delmar Shoes of reducing the number of faulty flip-flops returned.', 4,
              ['Lower cost of replacing/refunding faulty goods (1) improving profit (1)', 'Better reputation with supermarkets (1) reducing risk of losing them (1)', 'Less waste of materials (1+1)'],
              'It would cost less to replace or refund returned flip-flops, which improves profit. It would also keep the supermarkets happy, so Delmar would be less likely to lose its main customers.'),
            P('d', 'Explain', 'two advantages to Delmar Shoes of introducing quality assurance.', 6,
              ['Advantage 1 identified (faults prevented at each stage) (1)', 'Developed (fewer faulty pairs reach the end of the line, cutting waste) (2)', 'Advantage 2 identified (builds reputation/customer trust) (1)', 'Developed (supermarkets see reliable quality and keep ordering) (2)'],
              'Quality assurance checks quality throughout production, so faults in materials or moulding are stopped early, meaning fewer wasted pairs. It also gives supermarkets confidence in Delmar’s supply, so they are more likely to keep ordering and the firm can charge fair prices.'),
            P('e', 'Justify', 'your answer: Is quality assurance a better choice than quality control for Delmar Shoes?', 6,
              ['QA advantage applied (prevents faults and returns) (2)', 'QA disadvantage or QC advantage applied (training and set-up costs; QC simple and cheap) (2)', 'Judgement (1)', 'Justification (1)'],
              'Quality assurance would stop faults being made, reducing the 5% returns and waste. However it needs training and new systems, which cost money, whereas quality control is simple but only finds faults after they are made. I think QA is better because Delmar makes 50,000 pairs a week, so even a small fault rate wastes a lot, and the risk of losing supermarkets is serious.'),
          ],
        },
      ],
    },
    {
      id: 'u4-paper2',
      unitId: 'u4',
      paper: 2,
      title: 'Unit 4 · Paper 2 style case study: GreenLoop Packaging',
      intro: {
        title: 'GreenLoop Packaging',
        paragraphs: [
          'GreenLoop is a private limited company that makes cardboard packaging for food companies. It uses batch production at one factory in the capital city, employs 180 workers and has grown quickly. Customers increasingly ask for environmentally friendly packaging.',
          'The directors are considering moving to flow production on a new automated line and want to open a second factory in a different country. Appendix 1 compares two possible locations.',
        ],
        table: {
          caption: 'Appendix 1: Possible locations for the second factory',
          head: ['', 'Country A', 'Country B'],
          rows: [
            ['Average monthly wage', '$900', '$350'],
            ['Skills of workers', 'High', 'Low; training needed'],
            ['Transport to main customers', 'Excellent, near customers', 'Poor; 5 days by road'],
            ['Political stability', 'Stable', 'Some unrest'],
            ['Government incentives', 'None', '5-year tax holiday'],
          ],
        },
      },
      questions: [
        {
          parts: [
            P('a', 'Explain', 'two ways in which GreenLoop could make its production more sustainable.', 8,
              ['Method 1 identified (e.g. use recycled card / reduce waste) (1)', 'Explained in context (using recycled cardboard cuts the use of new resources) (3)', 'Method 2 identified (e.g. renewable energy / recycle waste) (1)', 'Explained (solar panels on the factory reduce energy cost and carbon, and appeal to eco-conscious customers) (3)'],
              'GreenLoop could use recycled cardboard, which reduces the use of new raw materials and cuts waste, and food companies who want green packaging would be more likely to buy. It could also fit solar panels to the factory, which uses renewable energy, lowers long-term energy bills and improves its environmental reputation.'),
            P('b', 'Justify', 'your recommendation: Consider the advantages and disadvantages of locating the second factory in Country A or Country B. Recommend one and justify your choice.', 12,
              ['Country A advantages with data (skilled workers, near customers, stable) (3)', 'Country A disadvantages (higher wages $900, no incentives) (2)', 'Country B advantages with data (wages $350, tax holiday) (3)', 'Country B disadvantages (low skills, poor transport, unrest) (3)', 'Recommendation (1)'],
              'Country A has skilled workers, excellent transport to customers and political stability, but wages are $900 a month and there are no incentives. Country B has very low wages of $350 and a five-year tax holiday, but workers need training, transport takes five days and there is unrest. I recommend Country A because GreenLoop supplies food companies that need fast, reliable delivery, and skilled workers help it maintain quality; the lower wages in B could be outweighed by delays and risk.'),
          ],
        },
        {
          parts: [
            P('a', 'Explain', 'two economies of scale GreenLoop might gain if it grows.', 8,
              ['Economy 1 identified (purchasing) (1)', 'Explained in context (bulk discounts on cardboard) (3)', 'Economy 2 identified (technical/marketing/financial/managerial) (1)', 'Explained (a larger automated line lowers cost per unit; or banks give cheaper loans to large firms) (3)'],
              'GreenLoop could get purchasing economies by buying large quantities of cardboard at a discount, lowering the cost per box. It could also gain technical economies by using a large automated line that produces boxes at a lower cost per unit than smaller machines.'),
            P('b', 'Justify', 'your recommendation: Consider the advantages and disadvantages of changing from batch to flow production. Should GreenLoop make the change?', 12,
              ['Flow advantage applied (lowest unit cost, high output for large orders) (3)', 'Flow advantage 2 (consistent quality, automated) (2)', 'Flow disadvantage applied (high set-up cost, inflexible for different box sizes) (3)', 'Flow disadvantage 2 (job losses/retraining, breakdown stops the line) (2)', 'Decision with justification (2)'],
              'Flow production would lower unit costs and make large volumes of identical boxes with consistent quality, which suits GreenLoop’s growth. However the automated line is expensive, cannot easily switch between box sizes for different customers and could cause job losses among 180 workers. I recommend a limited move to flow production for its high-volume standard boxes while keeping batch production for special orders, because that captures cost savings while keeping flexibility.'),
          ],
        },
      ],
    },
  ],
};
