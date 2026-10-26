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
          stemTitle: 'Question 1: Mwangi’s wooden toys',
          stem: 'Mwangi makes and sells wooden toys. Each toy sells for $20. The variable cost per toy is $8. His fixed costs are $18,000 a year. He currently sells 2,000 toys a year. He is considering cutting the price to $18 to try to sell 3,000 toys a year.',
          parts: [
            P('a', 'Define', '‘break-even’.', 2,
              ['K|The output/sales level where total revenue equals total costs (1)', 'K|so the business makes no profit and no loss (1)'],
              '[[K|Break-even is the level of output where total revenue equals total costs,]] [[K|so the business makes neither a profit nor a loss.]]'),
            P('b', 'Calculate', 'Mwangi’s break-even output at the current price of $20. Show your working.', 4,
              ['K|Correct formula: fixed costs ÷ contribution per unit (1)', 'N|Contribution = 20 − 8 = $12 (1)', 'N|18,000 ÷ 12 working shown (1)', 'N|Correct answer with unit: 1,500 toys (1)'],
              '[[K|Break-even output = fixed costs ÷ contribution per unit.]] [[N|Contribution per toy = $20 − $8 = $12.]] [[N|Break-even = $18,000 ÷ $12]] [[N|= 1,500 toys.]]'),
            P('c', 'Explain', 'two limitations of break-even analysis for Mwangi.', 6,
              ['K|Limitation 1: assumes all output is sold (1)', 'A|Applied (3,000 wooden toys at $18) (1)', 'N|Analysis: if he does not sell all 3,000, real profit is lower than calculated, so he could make a loss (1)', 'K|Limitation 2: assumes price and variable cost stay constant (1)', 'A|Applied (wood prices; toys) (1)', 'N|Analysis: if wood costs rise or he gives discounts, break-even output rises, so profit forecasts are wrong (1)'],
              '[[K|Break-even analysis assumes every unit made is sold.]] [[A|If Mwangi makes 3,000 wooden toys but only sells 2,000,]] [[N|his actual profit would be far lower than the calculation suggests and he could make a loss.]] [[K|It also assumes price and variable costs stay constant.]] [[A|If the price of wood rises or he gives discounts on toys,]] [[N|his break-even output would increase, so the forecast would be inaccurate.]]'),
            P('d', 'Justify', 'your answer: Do you think Mwangi should cut the price to $18? Use calculations.', 8,
              ['K|Identifies advantage of cutting price: higher sales volume (1)', 'A|Applied: sells 3,000 toys at $18 (1)', 'N|Calculation: profit at $18 = 10 × 3,000 − 18,000 = $12,000 vs $6,000 now (1)', 'K|Identifies disadvantage/risk: lower contribution, demand uncertain (1)', 'A|Applied: break-even rises to 1,800 toys (18,000 ÷ 10) (1)', 'N|Analysis: if sales stay at 2,000, profit falls to $2,000 (1)', 'E|Decision justified using the figures (1)', 'E|Explains why the alternative (keeping $20) is less suitable, or conditions needed (1)'],
              '[[K|Cutting the price could increase sales volume.]] [[A|If he sells 3,000 toys at $18 the contribution is $10,]] [[N|so profit = 10 × 3,000 − 18,000 = $12,000, double the current $6,000 (12 × 2,000 − 18,000).]] [[K|But the lower price reduces contribution and demand is uncertain.]] [[A|Break-even rises to 1,800 toys (18,000 ÷ 10),]] [[N|and if he still sells only 2,000 toys, profit would fall to $2,000.]] [[E|I think he should cut the price if research shows demand will reach about 3,000, because profit could double.]] [[E|Keeping $20 is less attractive because it caps profit at $6,000; the risk can be reduced by testing the lower price first.]]'),
          ],
        },
        {
          stemTitle: 'Question 2: Delmar Shoes',
          stem: 'Delmar Shoes makes 50,000 pairs of flip-flops a week on a production line and sells them to supermarkets. Inspectors check the flip-flops at the end of the line. Last year 5% of pairs were returned by customers because of faults, and supermarkets are threatening to switch to another supplier.',
          parts: [
            P('a', 'Define', '‘quality control’.', 2,
              ['K|Checking/inspecting products (1)', 'K|to find faults, usually at the end of production (1)'],
              '[[K|Quality control is checking or inspecting products]] [[K|to find faults, usually at the end of the production process using inspectors.]]'),
            P('b', 'Outline', 'two benefits to Delmar Shoes of reducing the number of faulty flip-flops returned.', 4,
              ['K|Benefit 1: lower cost of refunds/replacements (1)', 'A|Applied (5% of 50,000 pairs returned) (1)', 'K|Benefit 2: better reputation / keep supermarket customers (1)', 'A|Applied (supermarkets threatening to switch) (1)'],
              'Way 1: [[K|lower cost of replacing or refunding faulty goods]] [[A|as 5% of 50,000 pairs a week are currently returned.]] Way 2: [[K|a better reputation]] [[A|so supermarkets do not switch to another supplier.]]'),
            P('c', 'Explain', 'two advantages to Delmar Shoes of introducing quality assurance.', 6,
              ['K|Advantage 1: faults prevented at each stage (1)', 'A|Applied (production line; flip-flops) (1)', 'N|Analysis: fewer faulty pairs are made, so less waste and lower cost per pair (1)', 'K|Advantage 2: builds reputation / customer trust (1)', 'A|Applied (supermarkets; 5% returns) (1)', 'N|Analysis: supermarkets receive reliable products, so they keep ordering and revenue is protected (1)'],
              '[[K|Quality assurance prevents faults at every stage of production.]] [[A|Problems in materials or moulding on the flip-flop line are caught early,]] [[N|so fewer faulty pairs are made, which reduces waste and cost per pair.]] [[K|It also builds reputation.]] [[A|With fewer than 5% returns the supermarkets see Delmar as reliable,]] [[N|so they keep ordering, protecting revenue.]]'),
            P('d', 'Justify', 'your answer: Is quality assurance a better choice than quality control for Delmar Shoes?', 8,
              ['K|QA advantage identified: prevents faults (1)', 'A|Applied (50,000 pairs a week; supermarkets) (1)', 'N|Analysis: fewer faults and returns, so lower costs and a stronger reputation (1)', 'K|QA disadvantage or QC advantage identified (training/system costs; QC simple) (1)', 'A|Applied (flip-flops; inspectors already used) (1)', 'N|Analysis: QA costs time and money to set up, so profit may fall in the short term (1)', 'E|Decision justified (1)', 'E|Rejects the alternative with a reason (1)'],
              '[[K|Quality assurance prevents faults.]] [[A|With 50,000 pairs a week even a small fault rate wastes a lot,]] [[N|so preventing faults cuts returns and protects the supermarket contracts.]] [[K|However, QA needs training and new systems.]] [[A|Delmar already has inspectors, which is simple to run,]] [[N|but QA costs time and money to introduce so short-term profit may fall.]] [[E|I think quality assurance is better.]] [[E|Quality control is less suitable because it only finds faults after they are made, leaving the 5% return problem and wasted materials.]]'),
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
              ['K|Way 1: use recycled materials / reduce waste (1)', 'N|Analysis: less new raw material is used, so resources are conserved (1)', 'N|Further analysis: lower material costs and a better reputation (1)', 'A|Applied (cardboard packaging for food companies) (1)', 'K|Way 2: renewable energy (1)', 'N|Analysis: lowers energy costs over time and cuts pollution (1)', 'N|Further analysis: appeals to customers wanting green packaging, so sales rise (1)', 'A|Applied (factory with 180 workers; automated line) (1)'],
              '[[K|GreenLoop could use recycled cardboard.]] [[N|This reduces the use of new raw materials and waste,]] [[N|which lowers costs and improves its reputation.]] [[A|It makes cardboard packaging for food companies.]] [[K|It could fit solar panels to use renewable energy.]] [[N|This lowers energy bills over time and reduces pollution,]] [[N|which attracts customers wanting environmentally friendly packaging, increasing sales.]] [[A|A large factory with 180 workers and an automated line uses a lot of energy.]]'),
            P('b', 'Justify', 'your recommendation: Consider the advantages and disadvantages of locating the second factory in Country A or Country B. Recommend one and justify your choice.', 12,
              ['K|Identifies relevant location factors (wages, skills, transport, stability, incentives) (2)', 'N|Country A analysed: advantages and disadvantages with impact (skilled, near customers, stable; higher wages) (2)', 'N|Country B analysed: advantages and disadvantages with impact (low wages and tax holiday; poor transport, low skills, unrest) (2)', 'A|Application in the analysis using data (e.g. $900 vs $350 wages; 5 days transport) (1)', 'A|Application in the conclusion (e.g. food customers need fast delivery) (1)', 'E|Clear decision justified (1)', 'E|Rejects Country B with a reason (1)', 'E|Further justification, e.g. new calculation: wages $550 a month higher in A (2)'],
              '[[K|Location depends on wages, skills, transport, stability and incentives.]] [[N|Country A has skilled workers, excellent transport and stability, but higher wages, so labour costs are higher.]] [[N|Country B has very low wages and a tax holiday, but low skills, slow transport and unrest, which could delay deliveries and reduce quality.]] [[A|Wages are $900 a month in A and $350 in B, but transport to customers takes five days from B.]] [[E|I recommend Country A.]] [[E|Country B is less suitable because five-day transport could make deliveries to food companies late and unrest risks production.]] [[E|Although wages are $550 a month higher in A, skilled workers produce higher quality and the factory is near customers.]] [[A|Food customers need reliable, fast delivery of packaging.]]'),
          ],
        },
        {
          parts: [
            P('a', 'Explain', 'two economies of scale GreenLoop might gain if it grows.', 8,
              ['K|Economy 1: purchasing (1)', 'N|Analysis: buying cardboard in bulk gets discounts, so lower cost per box (1)', 'N|Further analysis: higher profit margins or lower prices (1)', 'A|Applied (cardboard; food packaging) (1)', 'K|Economy 2: technical / financial / managerial (1)', 'N|Analysis: a large automated line produces boxes at lower unit cost (1)', 'N|Further analysis: lower average cost improves competitiveness (1)', 'A|Applied (new automated line; 180 workers) (1)'],
              '[[K|GreenLoop could gain purchasing economies of scale.]] [[N|Buying large amounts of cardboard earns bulk discounts, so cost per box falls,]] [[N|which raises profit margins or allows lower prices.]] [[A|Cardboard is its main raw material for food packaging.]] [[K|It could gain technical economies.]] [[N|A large automated line produces boxes at a lower cost per unit,]] [[N|so average costs fall and it becomes more competitive.]] [[A|The new automated line replaces slower batch production among 180 workers.]]'),
            P('b', 'Justify', 'your recommendation: Consider the advantages and disadvantages of changing from batch to flow production. Should GreenLoop make the change?', 12,
              ['K|Identifies features of batch and flow production (2)', 'N|Flow analysed: advantages with impact (low unit cost, consistent quality) (2)', 'N|Flow disadvantages with impact (high set-up cost, inflexible, job losses) (2)', 'A|Application in the analysis (e.g. standard boxes for food companies; 180 workers) (1)', 'A|Application in the conclusion (e.g. special orders; growth) (1)', 'E|Clear decision justified (1)', 'E|Rejects the alternative (full change or no change) with a reason (1)', 'E|Further justification not a repeat (2)'],
              '[[K|Batch makes boxes in groups; flow is a continuous automated line.]] [[N|Flow gives the lowest cost per box and consistent quality for large orders, so GreenLoop could cut costs and grow.]] [[N|But the automated line is expensive, cannot easily switch box sizes and could cause job losses, which may lower morale.]] [[A|Food companies order standard boxes in large quantities, and the factory has 180 workers.]] [[E|I recommend a partial move to flow production for standard boxes.]] [[E|Changing everything is not best because customers with special sizes would be lost, while staying with batch production wastes the chance to cut costs as the firm grows.]] [[E|Keeping batch for special orders gives flexibility while flow lowers unit cost.]] [[A|This lets GreenLoop meet growing demand for packaging without losing small customers.]]'),
          ],
        },
      ],
    },
  ],
};
