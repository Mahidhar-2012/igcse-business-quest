import { P } from './helpers.js';

// Unit 1 written exam practice in the Cambridge IGCSE Business 0264 format.
// Paper 1: parts (a) 2 marks AO1, (b) 4 marks AO1+AO2, (c) 6 marks AO1+AO2+AO3, (d) 8 marks AO1+AO2+AO3+AO4.
// Paper 2: part (a) 8 marks, part (b) 12 marks (levels: knowledge, analysis, evaluation + application).
export const exams1 = {
  u1: [
    {
      id: 'u1-paper1',
      unitId: 'u1',
      paper: 1,
      title: 'Unit 1 · Paper 1 style questions',
      questions: [
        {
          stemTitle: 'Question 1: Priya’s phone repairs',
          stem: 'Priya plans to start a mobile phone repair business using her own savings of $6,000. She is a skilled repair technician but has never run a business. She has not decided whether to be a sole trader or to take in a friend as a partner. She needs to rent a small shop and buy tools and parts.',
          parts: [
            P('a', 'Define', '‘entrepreneur’.', 2,
              ['K|A person who organises resources / starts a business (1)', 'K|and takes the risk (of making a loss or profit) (1)'],
              '[[K|An entrepreneur is a person who organises the factors of production and starts a new business]] [[K|and takes the risk of making a loss, in the hope of earning a profit, for example someone who opens a repair shop.]]'),
            P('b', 'Outline', 'two benefits to Priya of writing a business plan before she starts.', 4,
              ['K|Benefit 1 identified: sets clear objectives / targets (1)', 'A|Applied (e.g. repairs per month she must make, phone repairs, her $6,000 savings) (1)', 'K|Benefit 2 identified: helps get a loan / shows viability to a bank (1)', 'A|Applied (e.g. to rent the shop and buy tools and parts) (1)'],
              'Way 1: [[K|a business plan sets objectives]] [[A|such as the number of phone repairs she needs each month.]] Way 2: [[K|it helps her get a bank loan]] [[A|to rent the shop and buy tools and parts.]]'),
            P('c', 'Explain', 'two disadvantages to Priya of being a sole trader.', 6,
              ['K|Disadvantage 1 identified: unlimited liability (1)', 'A|Applied (e.g. her $6,000 / her home at risk if the shop fails; phone repair stock) (1)', 'N|Analysis: debts can be paid from personal assets, so she could lose her savings and home (1)', 'K|Disadvantage 2 identified: limited finance / no one to share workload (1)', 'A|Applied (e.g. only $6,000 for tools, parts and shop rent) (1)', 'N|Analysis: she cannot afford enough stock, so she may turn customers away and lose revenue (1)'],
              '[[K|As a sole trader Priya has unlimited liability.]] [[A|If her repair shop fails and has debts,]] [[N|she may have to use her own $6,000 savings and home to pay them, so she could lose everything.]] [[K|Another disadvantage is limited finance.]] [[A|She only has $6,000 for tools, parts and rent,]] [[N|so she may be unable to hold enough phone parts, which means she turns customers away and loses sales.]]'),
            P('d', 'Explain', 'two factors Priya should consider when choosing between being a sole trader and having a partner. Which factor is most important? Justify your answer.', 8,
              ['K|Factor 1 identified (e.g. amount of capital / liability) (1)', 'A|Applied to Priya (phone repair; $6,000) (1)', 'N|Analysis: what → how → effect (e.g. a partner adds capital, so she can buy more parts and serve more customers) (1)', 'K|Factor 2 identified (e.g. control / skills) (1)', 'A|Applied (1)', 'N|Analysis: a partner with business skills could manage money while she repairs, which reduces the risk of failure (1)', 'E|Decision: states the most important factor and justifies why it is best for Priya (1)', 'E|Rejects the other factor: explains why it is less important (1)'],
              '[[K|One factor is the amount of capital needed.]] [[A|Priya only has $6,000 for phone repair tools and parts,]] [[N|so a partner’s money would let her buy more stock, which allows more repairs and higher revenue.]] [[K|Another factor is skills.]] [[A|Priya is a good technician but has never run a business,]] [[N|so a partner with business skills could control costs, which reduces the risk of failure.]] [[E|The most important factor is capital, because without enough money she cannot even rent the shop and start repairing phones.]] [[E|Skills are less important because she can learn to manage the business over time or get advice, but she cannot trade at all without funds.]]'),
          ],
        },
        {
          stemTitle: 'Question 2: Kofi Sweets',
          stem: 'Kofi Sweets is a private limited company that makes chocolate bars in a factory with 150 employees. It buys cocoa from other businesses. Sales have grown by 4% a year, but the directors want faster growth. They are considering a takeover of a cocoa farm that supplies the factory.',
          parts: [
            P('a', 'Define', '‘vertical integration’.', 2,
              ['K|One business merges with / takes over another in the same industry (1)', 'K|at a different stage of production (forward or backward) (1)'],
              '[[K|Vertical integration is when one business joins with or takes over another in the same industry]] [[K|but at a different stage of production, for example a chocolate maker buying a cocoa farm.]]'),
            P('b', 'Outline', 'two reasons why the owners of Kofi Sweets might want the business to grow.', 4,
              ['K|Reason 1: more profit / higher sales (1)', 'A|Applied (e.g. selling more chocolate bars) (1)', 'K|Reason 2: economies of scale / lower unit costs (1)', 'A|Applied (e.g. buying cocoa in bulk for the factory) (1)'],
              'Way 1: [[K|to increase profit]] [[A|by selling more chocolate bars.]] Way 2: [[K|to gain economies of scale]] [[A|such as bulk discounts when buying cocoa for the factory.]]'),
            P('c', 'Explain', 'two problems that Kofi Sweets might face because of growth.', 6,
              ['K|Problem 1: diseconomies of scale / poor communication (1)', 'A|Applied (150 employees, factory, a second site such as the farm) (1)', 'N|Analysis: decisions slow down and mistakes occur, which raises average costs (1)', 'K|Problem 2: need for more finance / borrowing (1)', 'A|Applied (buying a cocoa farm is costly) (1)', 'N|Analysis: interest repayments reduce profit and cash flow, which could make it harder to repay if sales fall (1)'],
              '[[K|Diseconomies of scale could occur.]] [[A|If Kofi manages a farm as well as a factory with 150 employees,]] [[N|communication becomes slower and mistakes happen, which raises average cost.]] [[K|Another problem is finance.]] [[A|Buying a cocoa farm is expensive,]] [[N|so Kofi may borrow, and the interest reduces profit and could make repayments difficult if sales fall.]]'),
            P('d', 'Justify', 'your answer: Do you think the advantages to Kofi Sweets of taking over the cocoa farm are greater than the disadvantages?', 8,
              ['K|Advantage identified (secure supply of cocoa) (1)', 'A|Applied (chocolate / the factory) (1)', 'N|Analysis: supply is more reliable, so production does not stop, which protects sales and profit (1)', 'K|Disadvantage identified (cost / unfamiliar business) (1)', 'A|Applied (150 employees; directors know chocolate not farming) (1)', 'N|Analysis: poor farm management could raise cocoa costs, which reduces profit margins (1)', 'E|Decision with justification (e.g. the advantages are greater because reliable supply supports faster growth than 4%) (1)', 'E|Explains why the disadvantage is less significant / can be managed (1)'],
              '[[K|An advantage is a secure supply of cocoa.]] [[A|The chocolate factory then has the materials it needs,]] [[N|so production does not stop, which protects sales and profit.]] [[K|A disadvantage is the cost and lack of experience.]] [[A|The directors know chocolate and have 150 employees to manage, not farm workers,]] [[N|so poor farm management could raise cocoa costs and reduce profit margins.]] [[E|I think the advantages are greater because a guaranteed supply of cocoa lets the firm grow faster than its current 4% a year.]] [[E|The disadvantage matters less because the directors can hire an experienced farm manager, whereas without cocoa the firm cannot make chocolate at all.]]'),
          ],
        },
      ],
    },
    {
      id: 'u1-paper2',
      unitId: 'u1',
      paper: 2,
      title: 'Unit 1 · Paper 2 style case study: Harbour Bakes',
      intro: {
        title: 'Harbour Bakes',
        paragraphs: [
          'Naseem has run Harbour Bakes, a small bakery, as a sole trader for four years. She employs three part-time assistants. Her objective was survival at first; now she wants to grow. She has $20,000 saved.',
          'Naseem can either open a second bakery in her own name or buy a franchise of a well-known bakery chain, ‘Crusty’s’. Appendix 1 compares the options.',
        ],
        table: {
          caption: 'Appendix 1: Naseem’s two options',
          head: ['', 'Own second bakery', 'Crusty’s franchise'],
          rows: [
            ['Start-up cost', '$45,000', '$80,000'],
            ['Fees', 'None', '$10,000 licence + 5% of sales every year'],
            ['Expected sales in year 1', '$90,000', '$140,000'],
            ['Support provided', 'None', 'Training, national advertising, recipes'],
            ['Decisions on products/prices', 'Naseem decides', 'Crusty’s rules apply'],
          ],
        },
      },
      questions: [
        {
          parts: [
            P('a', 'Explain', 'two reasons why the employees and customers of Harbour Bakes are interested in Naseem’s plan to expand (one reason for each stakeholder group).', 8,
              ['K|Employees identified as an internal stakeholder interested in job security / hours / promotion (1)', 'N|Analysis: a bigger business may give more hours or promotion, but if it fails they lose jobs (1)', 'N|Further analysis: (e.g. leads to higher/lower income and motivation) (1)', 'A|Applied (part-time assistants / bakery) (1)', 'K|Customers identified as an external stakeholder interested in quality, price, convenience (1)', 'N|Analysis: a second bakery could be more convenient, but quality may fall if Naseem is stretched (1)', 'N|Further analysis: lower quality could lead to lost customers and sales (1)', 'A|Applied (bread, cakes, local shops) (1)'],
              '[[K|Employees are internal stakeholders and want job security.]] [[N|A second bakery could give them more hours or promotion, but if it fails they could lose their jobs, which would cut their income and motivation.]] [[A|Her three part-time assistants]] may want more hours. [[K|Customers are external stakeholders interested in quality and convenience.]] [[N|A second bakery could be closer to them, but if Naseem has less time at each shop the quality of bread could fall, which could lead customers to buy elsewhere and reduce sales.]] [[A|Customers buying her bread and cakes]] will notice any decline.'),
            P('b', 'Justify', 'your recommendation: Consider the advantages and disadvantages of Naseem buying the Crusty’s franchise instead of opening her own second bakery. Which option should she choose?', 12,
              ['K|Identifies franchise and own bakery options / key features (e.g. brand, fees, control) (2)', 'N|Franchise analysed: advantage and disadvantage with impact (brand and training raise sales; fees and rules cut profit and freedom) (2)', 'N|Own bakery analysed: advantage and disadvantage with impact (cheaper and full control; no support so higher risk of failure) (2)', 'A|Application in the analysis, using data (e.g. $140,000 vs $90,000 sales; $80,000 vs $45,000 cost) (1)', 'A|Application in the conclusion (e.g. $20,000 savings) (1)', 'E|Decision made and justified (e.g. own bakery is best because she can finance it) (1)', 'E|Rejects the franchise with a reason (e.g. $80,000 cost far above her $20,000 savings, plus 5% fees) (1)', 'E|Further justification that is not a repeat (e.g. new calculation: the franchise costs $35,000 more) (2)'],
              '[[K|A franchise gives Naseem a trusted brand and training; the own bakery means she decides everything.]] [[N|The franchise should raise sales because of national advertising, but the licence fee and 5% of sales reduce profit and she must follow Crusty’s rules.]] [[N|Her own bakery is cheaper and lets her keep all profit, but she has no support, so mistakes could lead to failure.]] [[A|Expected sales are $140,000 for the franchise against $90,000, but it costs $80,000 compared with $45,000.]] [[E|I recommend her own second bakery because it is more affordable and she can still decide her products.]] [[E|The franchise is not best because the $80,000 cost is far above her savings and the fees reduce profit every year.]] [[E|It costs $35,000 more to start, which would require a large loan.]] [[A|With only $20,000 saved, she can fund her own bakery with a smaller loan.]]'),
          ],
        },
        {
          parts: [
            P('a', 'Explain', 'two ways in which a government might support Naseem if she expands her business.', 8,
              ['K|Way 1 identified (e.g. low-cost loan / grant) (1)', 'N|Analysis: lower interest or no repayment reduces cost, so lower repayments (1)', 'N|Further analysis: lower risk of failure / more cash for growth (1)', 'A|Applied (e.g. she needs $25,000+ more than her $20,000 savings) (1)', 'K|Way 2 identified (e.g. advice / training scheme) (1)', 'N|Analysis: helps her manage two sites and recruit staff (1)', 'N|Further analysis: fewer mistakes, so higher efficiency and profit (1)', 'A|Applied (second bakery / part-time assistants) (1)'],
              '[[K|A government could give a low-cost loan.]] [[N|Cheaper interest lowers repayments, which reduces her costs and risk of failure.]] [[A|She needs at least $25,000 more than her $20,000 savings for a second bakery.]] [[K|It could also provide advice and training.]] [[N|This helps her manage two sites and recruit staff, which means fewer mistakes and higher efficiency.]] [[A|Her three part-time assistants could be trained for the second bakery.]]'),
            P('b', 'Justify', 'your recommendation: Consider whether Naseem should stay a sole trader, form a partnership or form a private limited company. Recommend one and justify your choice.', 12,
              ['K|Identifies all three forms with features (liability, control, capital) (3)', 'N|Sole trader analysed: control vs unlimited liability with bigger debts (1)', 'N|Partnership analysed: more capital/skills vs disagreements, unlimited liability (1)', 'N|Private limited company analysed: limited liability / capital vs paperwork/shared ownership (2)', 'A|Application in the analysis (e.g. her home is at risk with debts of $45,000) (1)', 'A|Application in the conclusion (e.g. expanding with a loan) (1)', 'E|Decision (private limited company) justified (1)', 'E|Rejects sole trader and partnership with reasons (1)', 'E|Final justification linked to the case, not a repeat (1)'],
              '[[K|A sole trader keeps control but has unlimited liability; a partnership shares capital and skills but also usually has unlimited liability; a private limited company has limited liability.]] [[N|As a sole trader her debts could be paid from her personal assets.]] [[N|A partner would bring capital and skills but may disagree about decisions.]] [[N|A private limited company protects her personal assets and lets her raise money by selling shares to people she chooses, but needs more legal paperwork.]] [[A|If a second bakery costing $45,000 failed, her home could be at risk as a sole trader.]] [[E|I recommend a private limited company.]] [[E|Sole trader is not best because of unlimited liability on larger debts, and a partnership would also risk her assets and bring disagreements.]] [[E|Because she is borrowing more for expansion, the legal protection is worth the extra paperwork.]] [[A|It also lets her bring in investors for the franchise or second bakery if she needs more than $20,000.]]'),
          ],
        },
      ],
    },
  ],
};
