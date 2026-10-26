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
          stemTitle: 'Question 1: FreshSip',
          stem: 'FreshSip makes a popular orange juice, sold in supermarkets. Sales have been flat for three years and are now starting to fall as rivals launch healthier drinks. Its marketing manager is considering a new low-sugar version, a new pack design and a promotion campaign.',
          table: {
            caption: 'FreshSip sales',
            head: ['Year', 'FreshSip sales ($m)', 'Total market ($m)'],
            rows: [['Year 1', '7.2', '40'], ['Year 2', '6.8', '40'], ['Year 3', '6.0', '40']],
          },
          parts: [
            P('a', 'Define', '‘market share’.', 2,
              ['K|The percentage of total market sales (1)', 'K|held by one business or brand (e.g. FreshSip’s sales as a % of all juice sales) (1)'],
              '[[K|Market share is the percentage of total sales in a market]] [[K|that is held by one brand or business, for example a brand with $6m of a $40m market has 15%.]]'),
            P('b', 'Calculate', 'FreshSip’s market share in Year 3. Show your working.', 4,
              ['K|Correct formula: firm sales ÷ total market sales × 100 (1)', 'N|Uses correct figures from the table (6.0 and 40) (1)', 'N|Correct working: 6.0 ÷ 40 = 0.15 (1)', 'N|Correct answer with unit: 15% (1)'],
              '[[K|Market share = sales ÷ total market sales × 100.]] [[N|Year 3: 6.0 ÷ 40 = 0.15, so 0.15 × 100 = 15%.]] [[N|FreshSip’s market share in Year 3 is 15%, down from 18% in Year 1 (7.2 ÷ 40).]]'),
            P('c', 'Explain', 'two extension strategies FreshSip could use for its orange juice.', 6,
              ['K|Strategy 1: adapt the product (low-sugar version) (1)', 'A|Applied (orange juice / health-conscious customers / supermarkets) (1)', 'N|Analysis: appeals to customers wanting healthier drinks, so sales and market share rise (1)', 'K|Strategy 2: new packaging / more promotion / new markets (1)', 'A|Applied (supermarket shelves; cartons) (1)', 'N|Analysis: a new pack stands out, so more shoppers notice it, which increases sales (1)'],
              '[[K|FreshSip could adapt the product by launching a low-sugar version.]] [[A|Shoppers are moving from orange juice to healthier drinks,]] [[N|so a low-sugar juice would appeal to them, which would win back sales and market share.]] [[K|It could also change its packaging.]] [[A|A modern carton stands out on supermarket shelves,]] [[N|so more shoppers notice it and buy it, which increases sales.]]'),
            P('d', 'Justify', 'your answer: Do you think a promotion campaign alone will stop FreshSip’s sales falling?', 8,
              ['K|Benefit of promotion identified (raises awareness / short-term boost) (1)', 'A|Applied (orange juice; discounts in supermarkets) (1)', 'N|Analysis: more shoppers notice it, so sales rise in the short run (1)', 'K|Limitation identified (does not change the product) (1)', 'A|Applied (rivals’ healthier drinks; falling sales) (1)', 'N|Analysis: customers still prefer healthier drinks, so sales continue to fall after the promotion ends (1)', 'E|Decision justified for FreshSip (1)', 'E|Explains why promotion alone is less suitable than combining it with a product change (1)'],
              '[[K|Promotion raises awareness.]] [[A|Discounts or adverts for orange juice in supermarkets]] [[N|would make more shoppers notice FreshSip and give a short-term boost to sales.]] [[K|But promotion does not change the product.]] [[A|Customers are moving to rivals’ healthier drinks,]] [[N|so once the promotion ends sales would continue to fall.]] [[E|I do not think promotion alone will stop the fall; it should be combined with a low-sugar product.]] [[E|Promotion alone is less suitable because the reason for the falling sales is a change in what customers want, not a lack of awareness.]]'),
          ],
        },
        {
          stemTitle: 'Question 2: Aroha’s candles',
          stem: 'Aroha runs a small online shop selling handmade candles. She wants to find out whether to launch a new range of scented soaps. She has $500 to spend on research. Her options are an online questionnaire to her 800 email customers, a focus group in her town, or using government reports about household spending.',
          parts: [
            P('a', 'Define', '‘primary research’.', 2,
              ['K|Collecting new, first-hand information (1)', 'K|directly from customers/potential customers (e.g. questionnaire or interview) (1)'],
              '[[K|Primary research is collecting new, first-hand information]] [[K|directly from customers, for example by a questionnaire or interview.]]'),
            P('b', 'Outline', 'two advantages to Aroha of using an online questionnaire.', 4,
              ['K|Advantage 1: cheap / quick (1)', 'A|Applied (800 email customers; $500 budget) (1)', 'K|Advantage 2: specific results / easy to analyse (1)', 'A|Applied (scented soaps; her online shop) (1)'],
              'Way 1: [[K|it is cheap and quick]] [[A|so she can reach many of her 800 email customers within $500.]] Way 2: [[K|it gives specific, easy-to-analyse results]] [[A|about whether customers would buy her scented soaps.]]'),
            P('c', 'Explain', 'two factors that could affect the accuracy of Aroha’s research results.', 6,
              ['K|Factor 1: sample size (1)', 'A|Applied (800 customers; online questionnaire) (1)', 'N|Analysis: if only a few reply, results may not represent all customers, so she may launch soaps that do not sell (1)', 'K|Factor 2: biased sample / leading questions (1)', 'A|Applied (existing candle customers) (1)', 'N|Analysis: her customers already like her brand, so demand for soaps may be overestimated and she could waste money (1)'],
              '[[K|The sample size affects accuracy.]] [[A|If only 40 of her 800 candle customers answer,]] [[N|the results may not represent all her market, so she may launch soaps that do not sell.]] [[K|A biased sample can also matter.]] [[A|Existing candle customers already like her brand,]] [[N|so they may seem more positive about soaps than the wider public, which could lead her to overestimate demand and waste money.]]'),
            P('d', 'Justify', 'your answer: Is primary research better than secondary research for Aroha?', 8,
              ['K|Advantage of primary identified (specific and up to date) (1)', 'A|Applied (scented soaps; her customers) (1)', 'N|Analysis: she hears her own customers’ views, so can decide with less risk (1)', 'K|Secondary advantage/primary disadvantage identified (cheap, quick vs costly) (1)', 'A|Applied (government household spending reports; $500 budget) (1)', 'N|Analysis: general spending data is cheap but may not show whether her customers would buy soap (1)', 'E|Decision justified (1)', 'E|Rejects the alternative with a reason (1)'],
              '[[K|Primary research is specific and up to date.]] [[A|A questionnaire to her customers shows whether they would buy scented soaps,]] [[N|so she can decide with less risk of launching a failing range.]] [[K|Secondary research is cheaper and quicker.]] [[A|Government reports on household spending are free,]] [[N|but they only show general spending and may not show whether her customers want soap.]] [[E|I think primary research is better because the decision is about her own brand’s customers, and a $500 questionnaire is affordable.]] [[E|Secondary research is less suitable on its own because general data cannot show demand for this product; it can be used only as a cheap extra.]]'),
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
              ['K|Stage 1 identified: growth (1)', 'A|Evidence from data: sales rose from 2,000 to 15,000 in years 1–3 (1)', 'N|Analysis: more people became aware of the jacket, so sales rose rapidly (1)', 'N|Further analysis: profits grow and rivals may enter (1)', 'K|Stage 2 identified: maturity (1)', 'A|Evidence from data: sales levelled at about 20,000 in years 4–5 (1)', 'N|Analysis: most potential customers already own one, so growth slows (1)', 'N|Further analysis: sales then start to fall (19,000 in year 6), so ZestWear needs an extension strategy (1)'],
              '[[K|The jacket went through the growth stage.]] [[A|Sales rose from 2,000 to 15,000 units in years 1 to 3,]] [[N|as more people became aware of it and bought it,]] [[N|which raised profits and may have attracted competitors.]] [[K|It then reached maturity.]] [[A|Sales levelled around 20,000 in years 4 and 5,]] [[N|because most people who wanted one already owned one,]] [[N|and the fall to 19,000 in year 6 suggests decline is starting, so ZestWear needs an extension strategy.]]'),
            P('b', 'Justify', 'your recommendation: Consider three pricing methods ZestWear could use for the new waterproof jackets (penetration, competitive and price skimming). Recommend which one it should use.', 12,
              ['K|Identifies all three methods and what each involves (3)', 'N|Penetration analysed: advantage and disadvantage with impact (1)', 'N|Competitive pricing analysed: advantage and disadvantage with impact (1)', 'N|Price skimming analysed: advantage and disadvantage with impact (2)', 'A|Application in the analysis (e.g. waterproof jackets; new competitor’s lower price) (1)', 'A|Application in the conclusion (e.g. affordable sports clothing; 30 retailers) (1)', 'E|Decision made and justified (1)', 'E|Rejects the alternatives with reasons (1)', 'E|Further justification not a repeat (1)'],
              '[[K|Penetration pricing is a low price to win customers; competitive pricing matches rivals; price skimming is a high price at launch.]] [[N|Penetration would win customers quickly but profit per jacket would be low at first.]] [[N|Competitive pricing keeps ZestWear in line with the new rival but may squeeze margins.]] [[N|Skimming would earn high profit early, but few customers would pay it, and it could attract more competitors.]] [[A|A new competitor already sells a lower-priced running jacket.]] [[E|I recommend competitive pricing for the waterproof jackets.]] [[E|Skimming is not best because ZestWear is an affordable brand and customers can buy a cheaper rival jacket; penetration is not best because very low prices would damage margins.]] [[E|Competitive pricing protects market share against the rival while keeping the brand’s affordable image.]] [[A|It also suits sales through 30 retailers who compare prices.]]'),
          ],
        },
        {
          parts: [
            P('a', 'Explain', 'two advantages to ZestWear of using e-commerce (its online shop) for selling sports clothing.', 8,
              ['K|Advantage 1: wider market / open 24 hours (1)', 'N|Analysis: customers can buy at any time across the country, so more sales (1)', 'N|Further analysis: higher revenue and economies of scale (1)', 'A|Applied (sports clothing; running jackets) (1)', 'K|Advantage 2: lower overheads (1)', 'N|Analysis: fewer shops and staff, so lower costs (1)', 'N|Further analysis: higher profit margins or lower prices to compete (1)', 'A|Applied (online shop; 30 retailers) (1)'],
              '[[K|An online shop gives a wider market and is open 24 hours.]] [[N|Customers across the country can buy at any time,]] [[N|which increases sales and revenue.]] [[A|Sports clothing such as running jackets can be shown and delivered anywhere.]] [[K|E-commerce has lower overheads.]] [[N|ZestWear needs fewer shops and staff than selling only through its own stores,]] [[N|so costs fall, giving higher profit margins or lower prices against the new rival.]] [[A|Its own online shop avoids paying retailers a margin.]]'),
            P('b', 'Justify', 'your recommendation: Consider the advantages and disadvantages of ZestWear entering the neighbouring country’s market. Should the directors enter? Justify your answer.', 12,
              ['K|Identifies key advantages/disadvantages of entering new markets (2)', 'N|Advantages analysed with impact (more sales, spreads risk) (2)', 'N|Disadvantages analysed with impact (no local knowledge, cultural differences, legal costs) (2)', 'A|Application in the analysis (e.g. sports clothing popular there; new rival at home) (1)', 'A|Application in the conclusion (e.g. selling online first; running jackets) (1)', 'E|Clear decision justified (1)', 'E|Explains why the alternative (not entering) is less suitable (1)', 'E|Further justification not a repeat (e.g. reducing risk by testing online) (2)'],
              '[[K|Entering the neighbouring market could increase sales and spread risk, but ZestWear lacks local knowledge and may face cultural and legal differences.]] [[N|More customers would raise sales and reduce dependence on the home market, where a new rival threatens sales.]] [[N|Without local knowledge, products may not suit tastes and shipping and legal costs could be high, which would reduce profit.]] [[A|Sports clothing is popular there, and the running jacket is starting to decline at home.]] [[E|I recommend entering, but gradually.]] [[E|Not entering is less suitable because the home market for the jacket is now falling and the new competitor makes growth there harder.]] [[E|ZestWear can start by selling online and doing market research, which limits cost while it learns about the market.]] [[A|Its existing online shop makes this a low-risk first step for the running jackets.]]'),
          ],
        },
      ],
    },
  ],
};
