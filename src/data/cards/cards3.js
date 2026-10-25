import { mc, ord, scn, calc, tfd, card } from '../builders.js';

export const cards3 = {
  'u3-market': [
    card('The role of marketing', [
      '**Identify** customer needs, **satisfy** them, **maintain loyalty**, **build relationships**, and **anticipate** changing needs.',
    ],
      mc('Predicting what customers will want next year is part of marketing’s role to…', [
        ['Anticipate changes in customer needs', 'Correct.'],
        ['Maintain production only', 'Not marketing’s role.'],
        ['Reduce competition', 'Not the point.'],
        ['Set tax rates', 'Not marketing.'],
      ], 0)),
    card('Why markets change', [
      '**Spending patterns change** with incomes, fashion/tastes, technology, prices and population.',
      '**Markets get more competitive** from globalisation, online selling and new entrants.',
    ],
      mc('Which could change consumer spending patterns?', [
        ['A rise in incomes or a change in fashion', 'Correct.'],
        ['A firm’s office colour', 'No effect.'],
        ['A change in staff uniforms', 'No effect.'],
        ['The owner’s age', 'No effect.'],
      ], 0)),
    card('Responding to change and competition', [
      'Develop **new products**, adjust **prices**, improve **promotion** and **customer service**, use **market research** to spot trends.',
    ],
      mc('A new rival undercuts a café’s prices. Which is a sensible response?', [
        ['Improve quality and service and run loyalty offers', 'Correct.'],
        ['Ignore customers', 'Loses share.'],
        ['Cut marketing to zero', 'Loses share.'],
        ['Close early every day', 'Not a strategy.'],
      ], 0)),
    card('Calculating market share', [
      '**Market share = (firm’s sales ÷ total market sales) × 100**.',
      'It shows how big a firm is compared with the whole market.',
    ],
      calc('A firm sells $600,000 in a market worth $3,000,000. What is its market share (%)?', 20, {
        unit: '%',
        formula: 'Market share = (firm sales ÷ total market sales) × 100',
        steps: ['600,000 ÷ 3,000,000 = 0.2', '0.2 × 100 = 20%'],
      })),
    card('Mass markets and niche markets', [
      '**Mass market**: very large number of customers, standard products, low prices, high competition, economies of scale.',
      '**Niche market**: a small, specialised segment, often premium prices and less competition, but a small customer base and risk if tastes change.',
    ],
      tfd('Niche market firms usually face fewer competitors than mass market firms.', 'true', 'Specialised segments attract fewer rivals, though they are small.')),
    card('Market segmentation', [
      'Dividing a market into groups by **age, income, location, gender or lifestyle**.',
      '+ Targeted marketing, better fit, higher sales. − Extra cost of tailoring products, smaller groups.',
    ],
      mc('A firm sells different products in cities and rural areas. This is segmentation by…', [
        ['Location', 'Correct.'],
        ['Age', 'Not the basis.'],
        ['Gender', 'Not the basis.'],
        ['Income', 'Not the basis.'],
      ], 0)),
  ],

  'u3-research': [
    card('Why businesses use market research', [
      'Reduces **risk**, finds out customer **needs and opinions**, tests new products, identifies competitors, and helps set prices and promotion.',
    ],
      mc('Why would a firm research the market before launching a product?', [
        ['To reduce the risk of failure', 'Correct.'],
        ['To avoid making a profit', 'Not the aim.'],
        ['To increase tax', 'Not the aim.'],
        ['To avoid competition', 'Not the aim.'],
      ], 0)),
    card('Primary research', [
      'Collecting **new, first-hand data**: **questionnaires/surveys, interviews, focus groups, observation**.',
      '+ Specific, up to date, owned by the firm. − Costly, slow, may be biased.',
    ],
      mc('A group of customers discussing a new product with a researcher is a…', [
        ['Focus group', 'Correct.'],
        ['Observation', 'Watching behaviour.'],
        ['Government report', 'Secondary data.'],
        ['Trade magazine', 'Secondary data.'],
      ], 0)),
    card('Sampling', [
      'A **sample** is a smaller group chosen to represent the whole market.',
      'It saves time and cost, but results are reliable only if the sample is large enough and **representative**.',
    ],
      mc('Why do firms use sampling?', [
        ['It is quicker and cheaper than asking everyone', 'Correct.'],
        ['It is always 100% accurate', 'Not guaranteed.'],
        ['It avoids bias completely', 'Bias is still possible.'],
        ['It is secondary data', 'It is a technique within primary research.'],
      ], 0)),
    card('Secondary research', [
      'Using **existing data**: competitor websites, government statistics, market reports, trade magazines.',
      '+ Cheap, quick. − May be out of date, not specific, collected for another purpose.',
    ],
      mc('A firm uses government population statistics. This is…', [
        ['Secondary research', 'Correct.'],
        ['Primary research', 'It already existed.'],
        ['A focus group', 'No.'],
        ['Observation', 'No.'],
      ], 0)),
    card('Factors affecting accuracy', [
      '**Sample size**, **how representative** it is, **biased or leading questions**, honesty of respondents, and how **recent** the data is.',
    ],
      mc('Which question is likely to give BIASED results?', [
        ['“Don’t you agree our amazing product is great?”', 'Correct: leading question.'],
        ['“How would you rate this product, 1 to 5?”', 'Neutral.'],
        ['“How often do you buy snacks?”', 'Neutral.'],
        ['“What flavours do you prefer?”', 'Neutral.'],
      ], 0)),
    card('Analysing simple market research data', [
      'Convert % to numbers: **% × total respondents**.',
      'Look for the highest/lowest, compare groups, and decide what the data suggests for the business.',
    ],
      calc('Of 600 people surveyed, 40% prefer the new design. How many people is that?', 240, {
        unit: 'people',
        formula: 'Number = % × total respondents',
        steps: ['0.40 × 600 = 240'],
      })),
  ],

  'u3-product-price': [
    card('Brand image', [
      'A brand = name, logo, reputation. A strong **brand image** lets a firm **charge higher prices**, build loyalty and stand out.',
    ],
      mc('A strong brand image helps a business…', [
        ['Charge higher prices and keep customer loyalty', 'Correct.'],
        ['Avoid paying wages', 'No.'],
        ['Remove all rivals', 'No.'],
        ['Stop market research', 'No.'],
      ], 0)),
    card('The role of packaging', [
      'Packaging **protects** the product, **informs** (ingredients, instructions), **attracts** customers and supports the brand.',
      'Environmentally friendly packaging can improve reputation.',
    ],
      mc('Which is a role of packaging?', [
        ['Protect and provide information', 'Correct.'],
        ['Set the price', 'Not packaging.'],
        ['Recruit staff', 'No.'],
        ['Reduce quality', 'No.'],
      ], 0)),
    card('Developing new products', [
      '+ Stay ahead of rivals, replace declining products, spread risk across a range.',
      '− Costly research and development, may fail, takes time.',
    ],
      mc('A disadvantage of developing a new product is…', [
        ['High cost and the risk it fails', 'Correct.'],
        ['It always sells', 'Not guaranteed.'],
        ['It removes competition', 'No.'],
        ['It reduces choice', 'No.'],
      ], 0)),
    card('The product life cycle', [
      '**Introduction**: low sales, high costs, heavy promotion.',
      '**Growth**: rapid sales rise, profits grow, rivals appear.',
      '**Maturity**: sales peak and level off.',
      '**Decline**: sales fall (tastes change, new products).',
    ],
      ord('Order the stages of the product life cycle.', ['Introduction', 'Growth', 'Maturity', 'Decline'], 'Sales rise, peak, then fall.')),
    card('Interpreting a product life cycle diagram', [
      'Read the **sales curve**: steep rise = growth, flat top = maturity, downward = decline.',
      'Extension strategies appear as the curve being lifted again.',
    ],
      mc('On a life-cycle graph, sales have levelled off at their highest point. Which stage is this?', [
        ['Maturity', 'Correct.'],
        ['Introduction', 'Sales are low then.'],
        ['Growth', 'Sales still rising.'],
        ['Decline', 'Sales falling.'],
      ], 0)),
    card('Extension strategies', [
      'Keep a product going: **new markets, new uses, adapt the product or packaging, more advertising/sales promotion**.',
      '+ Cheaper than a new product, extends profits. − Costs money, may only delay decline.',
    ],
      mc('A firm sells its declining snack in a new country. This extension strategy is…', [
        ['Entering new markets', 'Correct.'],
        ['New uses', 'Not applicable.'],
        ['Cutting the price to zero', 'Not a strategy.'],
        ['Stopping promotion', 'Would speed decline.'],
      ], 0)),
    card('Recommending an extension strategy', [
      'Choose by situation: strong overseas demand → **new markets**; product could be used differently → **new uses**; customers want change → **adapt product/packaging**; weak awareness → **more promotion**.',
    ],
      scn('A brand of cough sweets sells less each year at home, but people abroad like its taste and nobody there sells it.', [
        ['Launch in new overseas markets', 'Exploits unmet foreign demand and revives sales.', true],
        ['Stop all promotion', 'Speeds decline.', false],
      ], 'Match the strategy to the evidence.')),
    card('Pricing methods', [
      '**Cost-plus**: cost + mark-up. **Competitive**: match rivals. **Penetration**: low price to gain share. **Skimming**: high price at launch. **Dynamic**: changes with demand/time.',
      'Each has advantages and disadvantages: e.g. skimming earns high profit but may deter customers and attract rivals.',
    ],
      mc('A firm launches a unique new gadget at a very high price to earn big profits early. This is…', [
        ['Price skimming', 'Correct.'],
        ['Penetration pricing', 'Low price.'],
        ['Cost-plus', 'Cost + mark-up.'],
        ['Competitive pricing', 'Match rivals.'],
      ], 0)),
    card('Recommending a pricing method', [
      'New unique product → **skimming**. Crowded market, want share → **penetration**. Many similar rivals → **competitive**. Simple, safe → **cost-plus**. Demand changes quickly → **dynamic**.',
    ],
      scn('A new budget airline enters a market with several established rivals and wants passengers quickly.', [
        ['Penetration pricing', 'Low fares attract passengers and build share.', true],
        ['Price skimming', 'High fares deter passengers in a crowded market.', false],
      ], 'Penetration suits a competitive market where share matters.')),
  ],

  'u3-place-promotion': [
    card('Distribution channels', [
      '**Direct** (producer → customer), via **retailers**, via **wholesalers** (buy in bulk, sell smaller quantities), via **agents** (arrange sales for commission).',
    ],
      ord('Order the traditional chain of distribution.', ['Producer', 'Wholesaler', 'Retailer', 'Consumer'], 'Wholesalers sit between producers and retailers.')),
    card('Advantages and disadvantages of channels', [
      '**Direct**: keeps all profit, controls the brand / handles delivery and marketing itself.',
      '**Retailer**: wide reach / takes a margin. **Wholesaler**: bulk orders, less work for producer / extra margin. **Agent**: local expertise / commission, less control.',
    ],
      mc('A producer sells direct to customers online. A key advantage is…', [
        ['It keeps the full profit margin', 'Correct.'],
        ['No delivery needed', 'Delivery is its job.'],
        ['No marketing needed', 'Marketing is essential.'],
        ['Lower risk than all other channels', 'Not guaranteed.'],
      ], 0)),
    card('Reasons for promotion', [
      '**Inform** customers, **persuade** them to buy, **remind** them, build **brand image**, increase **sales**, and compete with rivals.',
    ],
      mc('A reminder advert for a well-known drink has the aim to…', [
        ['Keep the brand in customers’ minds', 'Correct.'],
        ['Introduce a brand new product', 'That is informing.'],
        ['Reduce sales', 'No.'],
        ['Cut costs', 'No.'],
      ], 0)),
    card('Methods of sales promotion', [
      'Short-term boosts: **vouchers, reward/loyalty schemes, competitions, special offers and discounts** (e.g. buy one get one free).',
    ],
      mc('A supermarket gives points that can be exchanged for rewards. This is a…', [
        ['Reward (loyalty) scheme', 'Correct.'],
        ['Billboard advert', 'Advertising.'],
        ['Penetration price', 'Pricing.'],
        ['Focus group', 'Research.'],
      ], 0)),
    card('Methods of advertising', [
      '**Social media**, **direct/targeted emails**, **leaflets**, **billboards** (also TV, radio, newspapers).',
      'Choose by audience, reach, cost and message.',
    ],
      mc('The cheapest way for a local gym to reach nearby homes is likely…', [
        ['Leaflets through local doors', 'Correct.'],
        ['National TV adverts', 'Too costly.'],
        ['Motorway billboards', 'Not targeted.'],
        ['Global magazine adverts', 'Not targeted.'],
      ], 0)),
    card('Recommending promotion', [
      'Match to the **target audience, budget, product and message**: teens → social media; local → leaflets; mass market → TV; short-term sales boost → discounts.',
    ],
      scn('A luxury watch brand wants to reach wealthy adults with a prestige image.', [
        ['Glossy magazine and targeted online adverts', 'Matches audience and brand image.', true],
        ['Flyers and heavy discounts', 'Damages a prestige image.', false],
      ], 'Promotion must fit the product and the target audience.')),
    card('E-commerce', [
      'Examples: **online shopping, mobile/internet banking, online ticketing**.',
      'Business +: wider market, 24/7, lower overheads. −: website and security costs, fierce competition.',
      'Customers +: convenience, price comparison. −: fraud risk, can’t touch or try goods, delivery waits.',
    ],
      mc('A disadvantage of e-commerce for CUSTOMERS is…', [
        ['Security and fraud risks and not seeing the product in person', 'Correct.'],
        ['Shops open 24 hours', 'Advantage.'],
        ['Easy price comparison', 'Advantage.'],
        ['No travel needed', 'Advantage.'],
      ], 0)),
  ],

  'u3-strategy-legal': [
    card('The marketing mix and strategy', [
      'The 4Ps: **product, price, place, promotion**.',
      'They must work **together and fit the target market**; the importance of each differs (e.g. price matters most for budget goods, brand and product for luxury).',
    ],
      mc('Why must the 4Ps be consistent?', [
        ['Mixed messages confuse customers and weaken the brand', 'Correct.'],
        ['It lowers production costs directly', 'No.'],
        ['It removes competition', 'No.'],
        ['It avoids market research', 'No.'],
      ], 0)),
    card('Recommending a marketing mix', [
      '**Budget** product: low price, wide distribution, discount promotions.',
      '**Luxury** product: premium price, exclusive outlets, prestige promotion.',
    ],
      scn('A firm launches an organic, premium skincare range.', [
        ['High price, specialist retailers, premium advertising', 'Consistent with a premium image.', true],
        ['Cheap price and heavy discounts in discount shops', 'Contradicts a premium image.', false],
      ], 'All four Ps should support the same image.')),
    card('Entering new markets abroad', [
      '+ **More sales**, **spreads risk**, economies of scale, new customers.',
      '− **Cultural differences**, **lack of knowledge**, **legal requirements**, transport costs and exchange-rate risk.',
    ],
      mc('A reason to enter overseas markets is to…', [
        ['Increase sales and spread risk', 'Correct.'],
        ['Avoid all competition', 'Not guaranteed.'],
        ['Reduce the customer base', 'No.'],
        ['Avoid research', 'No.'],
      ], 0)),
    card('Legal controls on marketing', [
      'Laws protect customers from **misleading promotion** (false claims) and **faulty goods** (must be as described and fit for purpose).',
    ],
      mc('An advert falsely claims a drink contains no sugar. This is…', [
        ['Misleading promotion', 'Correct.'],
        ['Price skimming', 'Pricing.'],
        ['Segmentation', 'Not relevant.'],
        ['An extension strategy', 'Not relevant.'],
      ], 0)),
    card('Effects of legal controls', [
      'Costs: compliance, testing, penalties/refunds.',
      'Benefits: honest marketing, **customer trust**, fairer competition.',
      'They limit how products can be described and promoted.',
    ],
      tfd('Laws on faulty goods can force a business to refund, repair or replace.', 'true', 'This protects customers and pushes firms to maintain quality.')),
  ],
};
