import { P } from './helpers.js';

// Unit 1 written exam practice. Scenarios are original, written in the style and mark pattern of
// Paper 1 (short answer / data response) and Paper 2 (case study).
export const exams1 = {
  u1: [
    {
      id: 'u1-paper1',
      unitId: 'u1',
      paper: 1,
      title: 'Unit 1 · Paper 1 style questions',
      questions: [
        {
          stem: 'Priya plans to start a mobile phone repair business using her own savings of $6,000. She is a skilled repair technician but has never run a business. She has not decided whether to be a sole trader or to take in a friend as a partner. She needs to rent a small shop and buy tools and parts.',
          parts: [
            P('a', 'Define', '‘entrepreneur’.', 2,
              ['A person who organises resources to set up a business', 'and takes the risk of making a loss / profit'],
              'An entrepreneur is a person who organises the factors of production and takes the risk of starting and running a new business venture in the hope of making a profit.'),
            P('b', 'Identify', 'two factors of production that Priya will need for her new business.', 2,
              ['Capital (tools, shop equipment) – 1 mark', 'Labour (her own repair skills / any staff) – 1 mark', 'Land / enterprise accepted if applied (shop premises, risk-taking)'],
              'Capital (tools, parts and shop fittings) and labour (her own technical skills).'),
            P('c', 'Outline', 'two benefits to Priya of writing a business plan before she starts.', 4,
              ['Helps her set clear objectives/targets (1) so she knows what she is working towards (1)', 'Shows a bank or investor the idea is viable (1) so she may get a loan she needs for the shop (1)', 'Forces her to check finance / market research, identifying problems early (1+1)'],
              'A business plan makes Priya set clear objectives, so she knows how many repairs she must do each month to survive. It also helps her persuade a bank to lend extra money, because it shows the expected costs, revenue and cash flow.'),
            P('d', 'Explain', 'one advantage and one disadvantage to Priya of being a sole trader.', 6,
              ['Advantage identified (full control / keeps all profit / easy to set up) (1)', 'Developed and applied to Priya (e.g. she can choose prices and hours herself) (2)', 'Disadvantage identified (unlimited liability / limited capital / no one to share workload) (1)', 'Developed and applied (e.g. her home could be at risk if the shop fails, her savings are only $6,000) (2)'],
              'Advantage: Priya keeps all the profit and makes all decisions herself, so she can change prices quickly to attract customers. Disadvantage: as a sole trader she has unlimited liability, so if the shop fails and has debts, her personal assets such as her home could be used to pay them.'),
            P('e', 'Justify', 'your answer: Do you think Priya’s business will be successful?', 6,
              ['Reason for success applied (skilled technician / strong demand for repairs) (2)', 'Reason it might fail applied (little finance, no management experience, competition) (2)', 'Judgement reached (1)', 'Justification linked to the evidence (1)'],
              'It could succeed because Priya has a rare skill and repairs are in demand, so she can win customers on quality. However, she has only $6,000, no experience of managing cash or marketing and may face established repair chains. Overall it is likely to succeed if she researches the market and writes a plan, because her skills are the key factor; without that planning, lack of finance could make her fail.'),
          ],
        },
        {
          stem: 'Kofi Sweets is a private limited company that makes chocolate bars in a factory with 150 employees. It buys cocoa from other businesses. Sales have grown by 4% a year, but the directors want faster growth. They are considering a takeover of a cocoa farm that supplies the factory.',
          parts: [
            P('a', 'Define', '‘vertical integration’.', 2,
              ['When one business joins with/takes over another in the same industry', 'at a different stage of production (forward or backward)'],
              'Vertical integration is when one business merges with or takes over another business in the same industry but at a different stage of production, such as a supplier or a retailer.'),
            P('b', 'Identify', 'two ways of measuring the size of Kofi Sweets.', 2,
              ['Number of employees (150)', 'Value or volume of sales / output', 'Capital employed (any two, 1 mark each)'],
              'Number of employees and value of sales.'),
            P('c', 'Outline', 'two reasons why the owners of Kofi Sweets might want the business to grow.', 4,
              ['More profit (1) because higher sales spread over more units (1)', 'Economies of scale / lower unit cost (1) such as bulk buying (1)', 'Greater market share (1) making the firm less vulnerable to competitors (1)'],
              'Growth can raise profits because more chocolate is sold. It can also give economies of scale, for example buying cocoa in bulk at a discount, so average costs fall.'),
            P('d', 'Explain', 'two problems that Kofi Sweets might face because of growth.', 6,
              ['Problem 1 identified (e.g. diseconomies of scale / communication) (1)', 'Developed with application (more sites or staff make decisions slower) (2)', 'Problem 2 identified (e.g. need for more finance / loss of control) (1)', 'Developed with application (takeover is expensive, so loans/interest or risk of failing to repay) (2)'],
              'One problem is poorer communication: if Kofi Sweets takes over a farm it must manage another site and more staff, so decisions take longer and mistakes occur. Another problem is finance: buying the farm is costly, so Kofi may borrow heavily, and if sales fall it could struggle to repay.'),
            P('e', 'Justify', 'your answer: Do you think a takeover of the cocoa farm is a good decision for Kofi Sweets?', 6,
              ['Advantage applied (secures supply of cocoa / controls costs and quality) (2)', 'Disadvantage applied (cost, unfamiliar farming business) (2)', 'Judgement (1)', 'Justified with evidence (e.g. growth slow at 4%, reliance on suppliers) (1)'],
              'A takeover is likely to be a good decision because it secures a reliable supply of cocoa and gives the firm more control over costs and quality, which supports faster growth than the current 4%. But it will be expensive and the directors have no farming experience, so it carries risk. On balance it is worthwhile if it can be financed without too much debt, as supply security is vital to a chocolate maker.'),
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
            P('a', 'Explain', 'two reasons why the employees of Harbour Bakes and its customers are interested in Naseem’s plan to expand (one reason for each stakeholder group).', 8,
              ['Employees identified as an internal stakeholder (1)', 'Interested in job security / possible more hours or promotion if bakery grows (3)', 'Customers identified as external stakeholder (1)', 'Interested in quality, price and convenience, e.g. new bakery closer to them, or fear of lower quality if Naseem is stretched (3)'],
              'Employees are internal stakeholders. They are interested in the expansion because a second bakery could give them more hours or promotion, but if it fails they could lose their jobs. Customers are external stakeholders. They want the bread to stay good quality and reasonably priced, and a second bakery could be more convenient, though they may worry quality falls if Naseem has less time at each shop.'),
            P('b', 'Justify', 'your recommendation: Consider the advantages and disadvantages of Naseem buying the Crusty’s franchise instead of opening her own second bakery. Which option should she choose?', 12,
              ['Franchise advantage with application (e.g. established brand, training, national advertising, higher expected sales $140,000 vs $90,000) (3)', 'Franchise disadvantage with application (higher cost $80,000 against $20,000 savings, 5% of sales and $10,000 fee, must follow rules) (3)', 'Own bakery advantage with application (cheaper $45,000, full control, keeps all profit) (3)', 'Own bakery disadvantage with application (no support, lower sales, more risk of failure) (2)', 'Clear recommendation (1)'],
              'A Crusty’s franchise gives Naseem a trusted brand, training and national advertising, so expected sales are higher at $140,000. But it costs $80,000, far more than her $20,000 savings, and she must pay $10,000 and 5% of sales every year and follow Crusty’s rules. Her own second bakery costs $45,000, lets her keep all profit and decide products, but has lower expected sales and no support. I recommend the own second bakery because it is cheaper and easier to finance, and Harbour Bakes already has a local reputation; the franchise looks too expensive and its fees would cut profit.'),
          ],
        },
        {
          parts: [
            P('a', 'Explain', 'two ways in which a government might support Naseem if she expands her business.', 8,
              ['First way identified (e.g. grant / low-cost loan / advice / training) (1)', 'Explained how it helps Naseem (e.g. a low-cost loan reduces the interest on the extra $25,000 she needs) (3)', 'Second way identified (1)', 'Explained with application (e.g. free advice and training help her manage two bakeries) (3)'],
              'A government could give a low-cost loan. Naseem needs at least $25,000 more than she has saved for her own second bakery, and cheaper interest means lower repayments and less risk. A government could also offer advice and training schemes, which would help Naseem manage two sites and recruit staff, making failure less likely.'),
            P('b', 'Justify', 'your recommendation: Consider whether Naseem should stay a sole trader, form a partnership or form a private limited company when she expands. Recommend one and justify your choice.', 12,
              ['Sole trader advantage and disadvantage applied (control; unlimited liability with bigger debts) (3)', 'Partnership advantage and disadvantage applied (more capital/skills; disagreements, still unlimited liability) (3)', 'Private limited company advantage and disadvantage applied (limited liability, can raise capital by selling shares; more legal formalities/shares shared) (3)', 'Recommendation (1)', 'Justification linked to the case (2)'],
              'As a sole trader Naseem keeps full control, but with a second bakery her debts are larger and her home is at risk because of unlimited liability. A partner would bring extra capital and skills but may disagree and also has unlimited liability. A private limited company gives limited liability and lets her sell shares to raise money while she controls who owns them, though it needs more paperwork. I recommend a private limited company because she is borrowing more money and wants to protect her personal assets; the extra legal work is worth it for the security.'),
          ],
        },
      ],
    },
  ],
};
