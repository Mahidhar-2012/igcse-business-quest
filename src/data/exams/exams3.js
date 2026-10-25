import { P } from './helpers.js';

export const exams3 = {
  u3: [
    {
      id: 'u3-paper1',
      unitId: 'u3',
      paper: 1,
      title: 'Unit 3 · Paper 1 style questions',
      questions: [
        {
          stem: 'FreshSip makes a popular orange juice, sold in supermarkets. Sales have been flat for three years and are now starting to fall as rivals launch healthier drinks. FreshSip’s market share has fallen from 18% to 15% of a market worth $40 million. Its marketing manager is considering a new low-sugar version, a new pack design and a promotion campaign.',
          table: {
            caption: 'FreshSip sales (3 years)',
            head: ['Year', 'FreshSip sales ($m)', 'Total market ($m)'],
            rows: [['Year 1', '7.2', '40'], ['Year 2', '6.8', '40'], ['Year 3', '6.0', '40']],
          },
          parts: [
            P('a', 'Define', '‘market share’.', 2,
              ['The percentage of total market sales', 'held by one business or brand'],
              'Market share is the percentage of total sales in a market that is held by one business or brand.'),
            P('b', 'Calculate', 'FreshSip’s market share in Year 3 using the table. Show your working.', 2,
              ['Correct formula (sales ÷ total market × 100) (1)', 'Correct answer 15% (1)'],
              'Market share = 6.0 ÷ 40 × 100 = 15%.'),
            P('c', 'Outline', 'two reasons why the market for juice is becoming more competitive.', 4,
              ['New competitors/healthier brands entering (1) offering similar products (1)', 'Supermarkets’ own brands at lower prices (1) so customers switch (1)', 'Online selling and globalisation making it easier to enter (1+1)'],
              'More firms are launching healthier drinks, so customers have more choice. Supermarkets also sell own-brand juice at lower prices, so FreshSip loses customers.'),
            P('d', 'Explain', 'two extension strategies FreshSip could use for its orange juice.', 6,
              ['Strategy 1 identified (e.g. adapt product — low-sugar version) (1)', 'Explained in context (appeals to health-conscious customers, restoring sales) (2)', 'Strategy 2 identified (e.g. new packaging / new markets / more promotion) (1)', 'Explained in context (a new pack attracts attention in supermarkets) (2)'],
              'FreshSip could launch a low-sugar version, which adapts the product to what customers now want and could win back lost sales. It could also redesign the packaging so the product stands out on supermarket shelves and looks fresh and modern, which may attract new buyers.'),
            P('e', 'Justify', 'your answer: Do you think a promotion campaign alone will stop FreshSip’s sales falling?', 6,
              ['Benefit of promotion applied (raises awareness, short-term boost) (2)', 'Limitation applied (does not change the product when customers want healthier drinks) (2)', 'Judgement (1)', 'Justification (1)'],
              'A promotion could raise awareness and give a short-term boost, for example with discounts. But customers are moving to healthier drinks, so promotion alone does not solve the underlying problem. I do not think it will work by itself; combining promotion with a low-sugar product is likely to be more effective because it addresses the reason sales are falling.'),
          ],
        },
        {
          stem: 'Aroha runs a small online shop selling handmade candles. She wants to find out whether to launch a new range of scented soaps. She has $500 to spend on research and has several options: an online questionnaire to her 800 email customers, a focus group in her town, or using government reports about household spending.',
          parts: [
            P('a', 'Define', '‘primary research’.', 2,
              ['Collecting new, first-hand information', 'directly from customers or potential customers (field research)'],
              'Primary research is collecting new, original data directly from existing or potential customers, such as by questionnaire or interview.'),
            P('b', 'Identify', 'two examples of secondary research Aroha could use.', 2,
              ['Government statistics / reports', 'Competitor websites / market reports / trade magazines (any two, 1 mark each)'],
              'Government reports on household spending and competitors’ websites.'),
            P('c', 'Outline', 'two advantages of using an online questionnaire for Aroha.', 4,
              ['Cheap (1) can reach many of her 800 customers quickly (1)', 'Easy to analyse results (1) because answers can be summarised automatically (1)', 'Specific to her own product and customers (1+1)'],
              'An online questionnaire is cheap and quick, so she can reach many of her 800 customers within her $500 budget. It also gives specific data about her soap idea that is easy to analyse.'),
            P('d', 'Explain', 'two factors that could affect the accuracy of Aroha’s research results.', 6,
              ['Factor 1 identified (e.g. sample size) (1)', 'Explained in context (only 40 replies from 800 customers may not represent everyone) (2)', 'Factor 2 identified (e.g. biased/leading questions or unrepresentative sample) (1)', 'Explained in context (asking only existing candle fans may overstate demand) (2)'],
              'Sample size matters: if only a few customers answer, results may not represent all her market. The sample may also be biased because existing customers already like her products, so they might be more positive about soap than the general public. Leading questions would make this worse.'),
            P('e', 'Justify', 'your answer: Is primary research better than secondary research for Aroha?', 6,
              ['Primary advantage applied (specific, up to date) (2)', 'Primary disadvantage or secondary advantage applied (costly; secondary cheap and quick) (2)', 'Judgement (1)', 'Justification (1)'],
              'Primary research gives Aroha specific, current opinions about her soap idea from her own customers. Secondary research is cheaper and faster but would only show general household spending, not whether her customers would buy soaps. I think primary research is better because the decision is specific to her brand, and a $500 questionnaire is affordable; she could use secondary research as a cheap supplement.'),
          ],
        },
      ],
    },
    {
      id: 'u3-paper2',
      unitId: 'u3',
      paper: 2,
      title: 'Unit 3 · Paper 2 style case study: ZestWear',
      intro: {
        title: 'ZestWear',
        paragraphs: [
          'ZestWear is a private limited company selling affordable sports clothing through its own online shop and through 30 retailers. Its best-selling item is a running jacket, which was launched six years ago. A new competitor has just entered with a similar jacket at a lower price.',
          'The directors want to enter the market in a neighbouring country where sports clothing is popular but they have no local knowledge. They are also considering which pricing method to use for a new range of waterproof jackets.',
        ],
        table: {
          caption: 'Appendix 1: Sales of the running jacket (units)',
          head: ['Year', '1', '2', '3', '4', '5', '6'],
          rows: [['Sales', '2,000', '8,000', '15,000', '20,000', '20,500', '19,000']],
        },
      },
      questions: [
        {
          parts: [
            P('a', 'Explain', 'two stages of the product life cycle that the running jacket has passed through, using Appendix 1.', 8,
              ['Stage identified (introduction / growth) (1)', 'Evidence from data (sales rose from 2,000 to 15,000 in years 1–3: growth) (3)', 'Second stage identified (maturity) (1)', 'Evidence (sales levelled near 20,000 in years 4–5, now beginning to fall in year 6) (3)'],
              'In years 1 to 3 sales grew rapidly from 2,000 to 15,000 units, which is the growth stage, as the jacket became known and more people bought it. In years 4 and 5 sales levelled at about 20,000, which is maturity. The fall to 19,000 in year 6 suggests the start of decline, so ZestWear needs an extension strategy.'),
            P('b', 'Justify', 'your recommendation: Consider three pricing methods ZestWear could use for the new waterproof jackets and recommend which one it should use.', 12,
              ['Penetration pricing advantage and disadvantage applied (win customers quickly vs low profit) (3)', 'Competitive pricing advantage and disadvantage applied (matches rivals vs squeezed margins) (3)', 'Price skimming or cost-plus advantage and disadvantage applied (high early profit vs few buyers; cost-plus ignores rivals) (3)', 'Recommendation (1)', 'Justification linked to ZestWear (new competitor, affordable brand image) (2)'],
              'Penetration pricing would win customers fast and build market share, but profits would be low at first. Competitive pricing keeps ZestWear in line with the new rival but may squeeze margins. Price skimming would earn high profit early but ZestWear is an affordable brand and a new competitor already exists, so few would pay. I recommend competitive pricing because it protects market share against the lower-priced rival while keeping the brand’s affordable image.'),
          ],
        },
        {
          parts: [
            P('a', 'Explain', 'two advantages of ZestWear using e-commerce (its online shop) for selling sports clothing.', 8,
              ['Advantage 1 identified (wider market / 24 hours / lower overheads) (1)', 'Developed in context (customers across the country can buy at any time, more sales) (3)', 'Advantage 2 identified (1)', 'Developed (fewer shops/staff, so lower costs; easy to show new products) (3)'],
              'An online shop lets customers across the country and abroad buy at any time, so ZestWear can reach more customers than 30 retailers alone. It also has lower overheads than running its own shops because it needs fewer staff and no expensive high-street rent, so profit margins can be higher.'),
            P('b', 'Justify', 'your recommendation: Consider the advantages and disadvantages of ZestWear entering the neighbouring country’s market. Should the directors enter? Justify your answer.', 12,
              ['Advantage applied (new customers, increased sales, spreads risk) (3)', 'Advantage 2 applied (economies of scale / popular sports market) (2)', 'Disadvantage applied (no local knowledge, cultural differences) (3)', 'Disadvantage 2 applied (legal requirements, transport/tariff costs) (2)', 'Decision (1)', 'Justification (1)'],
              'Entering the neighbouring market could give ZestWear many new customers, raise sales and spread risk away from the home market where a new rival is hurting sales. However the directors have no local knowledge, tastes and laws may differ, and shipping costs may be high. I recommend entering, but first carrying out market research and selling online to test demand, because the home market is declining and expansion offers growth at low initial risk.'),
          ],
        },
      ],
    },
  ],
};
