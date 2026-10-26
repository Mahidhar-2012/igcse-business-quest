import { mc, ord, scn, calc, tfd, ao } from '../builders.js';

export const ct3 = {
  'u3-market': {
    cards: [
      [ao(4, mc('A toy shop notices customers asking for eco-friendly toys. It orders them before rivals do and promotes them to families. Which marketing role is best shown?', [
        ['Anticipating and satisfying changing customer needs', 'Correct.'],
        ['Reducing production costs', 'Not marketing’s role here.'],
        ['Recruiting staff', 'Not marketing.'],
        ['Setting tax rates', 'Not marketing.'],
      ], 0))],
      [ao(3, mc('A town’s population is ageing and a new budget supermarket opens nearby. Which consequences for a local grocer are most likely?', [
        ['Spending patterns shift toward different products and prices, and competition increases', 'Correct.'],
        ['Demand is unchanged', 'Both factors change demand and competition.'],
        ['Competition falls', 'A new rival raises competition.'],
        ['The grocer becomes a monopoly', 'No.'],
      ], 0))],
      [ao(4, scn('A café’s sales fall after a rival opens. Customers say the rival is faster and cheaper. The café has loyal regulars and a small marketing budget. Which response is best-justified?', [
        ['Improve service speed and launch a loyalty card, because it protects regulars at modest cost', 'Targets the stated reasons within budget.', true],
        ['Launch a national TV campaign', 'Unaffordable.', false],
        ['Cut quality to cut price below the rival', 'Risks losing the loyalty it has.', false],
      ], 'Respond to the cause using resources available.'))],
      [ao(3, calc('A firm’s sales were $9m in a market worth $60m. The market grows to $80m and the firm’s sales to $11m. What is its NEW market share, and did it rise or fall?', 13.75, {
        unit: '%',
        formula: 'Market share = firm sales ÷ market sales × 100',
        steps: ['Old share: 9 ÷ 60 = 15%', 'New share: 11 ÷ 80 = 13.75%', 'Sales rose, but share fell because the market grew faster.'],
      }))],
      [ao(4, mc('A luxury watch brand sells 5,000 watches a year at $4,000 to a small high-income group. A mass-market brand sells 2m watches at $30. Which statement best evaluates the niche strategy?', [
        ['Higher profit per item and less competition, but a small customer base and vulnerability if tastes change', 'Correct.'],
        ['It will always be more profitable than mass markets', '“Always” is unsupported.'],
        ['It has the largest competition', 'Niche markets have fewer rivals.'],
        ['It needs no marketing', 'Still needed.'],
      ], 0))],
      [ao(4, mc('A gym offers a student membership at half price, a senior daytime membership and an executive 24-hour membership. Which concept is this, and what is a risk?', [
        ['Market segmentation; extra cost and complexity of offering several products', 'Correct.'],
        ['Mass marketing; no extra cost', 'It targets segments.'],
        ['A niche market only', 'Several segments are served.'],
        ['Price skimming', 'Not what is described.'],
      ], 0))],
      // advantages / disadvantages cards
      [ao(4, scn('A small organic chocolate maker is deciding whether to sell through supermarkets (mass market) or stay as a niche online seller. Its costs are high and customers are loyal. Which is best-justified?', [
        ['Stay niche: high prices cover high costs and loyal customers value quality; supermarkets would demand low prices', 'Uses cost and customer evidence.', true],
        ['Enter supermarkets because mass sales are always better', '“Always” unsupported and ignores costs.', false],
      ], 'Evaluate using the business’s costs and customers.'))],
      [ao(4, mc('A clothes retailer targets different campaigns at teenagers and older women. Which is the most significant drawback of this segmentation?', [
        ['Different campaigns and products raise marketing costs', 'Correct.'],
        ['It reduces customer understanding', 'It improves it.'],
        ['It makes advertising less targeted', 'It makes it more targeted.'],
        ['It removes competition', 'No.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A mobile phone company has 22% market share in a market growing slowly. A rival launches a cheaper model. The company can cut prices 10% (profit per phone falls $15 but it expects 20% more sales) or add new features at the same price. It sells 100,000 phones at $150 with $60 variable cost. Which option is best-justified?', [
        ['Compare: now profit contribution = 100,000 × $90 = $9m. After a 10% price cut: price $135, contribution $75 × 120,000 = $9m — no gain, so improving features is better unless the cut stops losses', 'The calculation shows no profit gain; so product improvement is better justified.', true],
        ['Cut price because lower prices always win customers', 'The figures show no gain.', false],
      ], 'Use numbers to test the decision.')),
      ao(3, mc('Which statement about a rise in the total market size from $50m to $60m is best supported if a firm’s sales stay at $10m?', [
        ['Its market share falls from 20% to about 16.7%', 'Correct: 10 ÷ 50 = 20%; 10 ÷ 60 ≈ 16.7%.'],
        ['Its market share rises', 'It falls.'],
        ['Its market share stays at 20%', 'It changes.'],
        ['Its revenue falls', 'Revenue is unchanged.'],
      ], 0)),
      ao(4, mc('A business serving a very specialised market (left-handed musical instruments) is considering a mass-market product. Which is the best-justified risk?', [
        ['It could lose its specialist reputation and face large competitors', 'Correct.'],
        ['It will certainly gain loyal customers', 'No certainty.'],
        ['There is no change in competition', 'There is more.'],
        ['Its costs will fall automatically', 'Not necessarily.'],
      ], 0)),
      ao(3, tfd('A firm with a growing market share is always becoming more profitable.', 'depends', 'Higher share can raise sales, but profit also depends on prices and costs; buying share with big discounts may reduce profit.')),
      ao(4, mc('A supermarket segments customers by income and location. Which result is the most logical?', [
        ['Different ranges and prices in each store to match local customers', 'Correct.'],
        ['Identical stores everywhere', 'Opposite.'],
        ['Fewer products', 'Not implied.'],
        ['No promotion', 'Not implied.'],
      ], 0)),
      ao(3, mc('Which is the best example of anticipating customer needs?', [
        ['A food company launching vegan products before demand peaks', 'Correct.'],
        ['Waiting for complaints before changing', 'Reactive.'],
        ['Ignoring social trends', 'Opposite.'],
        ['Copying prices only', 'Not anticipation.'],
      ], 0)),
      ao(4, scn('A business can invest $50,000 either to keep existing customers loyal (expected to save $80,000 of sales) or to win new customers (expected $60,000 sales). Loyal customers also recommend the business. Which is best-justified?', [
        ['Retention: higher expected return and lower cost than winning new customers', 'Uses the numbers and extra benefit.', true],
        ['New customers because growth is more exciting', 'Opinion only.', false],
      ], 'Compare returns and the wider benefits.')),
      ao(3, mc('A firm that sells to a niche market of professional divers is most at risk from:', [
        ['A small total market that limits growth', 'Correct.'],
        ['Too many customers', 'Opposite.'],
        ['Low prices', 'Niche prices are usually high.'],
        ['Mass-production savings', 'Not typical.'],
      ], 0)),
    ],
  },

  'u3-research': {
    cards: [
      [ao(4, mc('A company plans to spend $500,000 launching a new snack. Which statement best justifies spending $20,000 on market research first?', [
        ['The research cost is small compared with the potential loss, and it reduces the risk of launching something customers do not want', 'Correct: compares cost with risk.'],
        ['Research guarantees success', 'No guarantee.'],
        ['Research is always cheaper than the product', 'Not stated.'],
        ['Research removes competitors', 'No.'],
      ], 0))],
      [ao(4, mc('A café wants to understand why customers prefer a rival. Which primary method is best-justified?', [
        ['A focus group, because it explores reasons and feelings in depth', 'Correct.'],
        ['Government statistics', 'Secondary and not specific.'],
        ['Counting competitor sales online', 'Does not give reasons.'],
        ['A trade magazine', 'Secondary and general.'],
      ], 0))],
      [ao(3, mc('A researcher interviews 30 people at a city-centre gym about healthy snacks and concludes most people want them. What is the most significant weakness?', [
        ['The sample is small and unrepresentative of all consumers', 'Correct.'],
        ['Primary research is never accurate', 'It can be accurate if well designed.'],
        ['Interviews cannot cover food', 'They can.'],
        ['The sample is too large', '30 is small.'],
      ], 0))],
      [ao(4, mc('A start-up with a $300 budget must estimate demand for a new app. Which choice is best-justified?', [
        ['Secondary research (competitor sites, reports) plus a short free online questionnaire', 'Correct: cheap, quick and gives some direct evidence.'],
        ['A $5,000 consultant survey', 'Over budget.'],
        ['No research', 'Risky.'],
        ['Asking the owner’s family only', 'Biased sample.'],
      ], 0))],
      [ao(3, mc('A survey asks: “Do you agree our excellent customer service is outstanding?” Which problem does the question show?', [
        ['A leading question, producing biased answers', 'Correct.'],
        ['A random sample', 'Not shown.'],
        ['Too many options', 'Not shown.'],
        ['Secondary data', 'Not shown.'],
      ], 0))],
      [ao(3, calc('A survey of 500 customers finds 36% prefer flavour A, 28% flavour B and the rest flavour C. The firm produces 60,000 units. If production matches preferences, how many units of flavour C should it make?', 21600, {
        unit: 'units',
        formula: 'Flavour C % = 100 − 36 − 28 = 36%; units = 36% × 60,000',
        steps: ['C = 100 − 36 − 28 = 36%', '0.36 × 60,000 = 21,600 units', 'Note flavours A and C are equally popular (both 36%).'],
      }))],
      // advantages / disadvantages cards
      [ao(4, mc('A coffee chain interviewed 40 people and found most prefer cold brew. It then stocked 20,000 cold-brew bottles; only 3,000 sold. Which is the best explanation using evidence quality?', [
        ['A small sample and possible bias led to unreliable demand evidence', 'Correct.'],
        ['Interviews never work', 'Overstated.'],
        ['Secondary data causes failures', 'Not stated.'],
        ['Cold brew is not a product', 'Irrelevant.'],
      ], 0))],
      [ao(4, scn('A firm needs quick, cheap, broad evidence about market size, then specific evidence on its own customers’ views. Which research mix is best-justified?', [
        ['Secondary research first, then a targeted primary survey', 'Efficient and complementary.', true],
        ['Primary research only', 'Slower and costlier for broad data.', false],
      ], 'Combine methods to fit the question and budget.'))],
    ],
    pool: [
      ao(4, scn('A bakery owner surveys 50 regular customers and 90% say they would buy a vegan range. Regulars make up 20% of her sales and the area has few vegans. She plans to spend $15,000 on vegan equipment. Which conclusion is best-justified?', [
        ['The evidence is biased toward regular customers; she should test with a small trial or wider survey before spending $15,000', 'Questions sample bias and cost.', true],
        ['Go ahead because 90% is overwhelming', 'Ignores unrepresentative evidence.', false],
      ], 'Judge research on how representative it is.')),
      ao(3, mc('Which method gives the most reliable evidence about how shoppers actually behave in a store layout?', [
        ['Observation', 'Correct: records real behaviour.'],
        ['A questionnaire about intentions', 'People may not act as they say.'],
        ['Government statistics', 'Not specific.'],
        ['A trade magazine', 'General.'],
      ], 0)),
      ao(4, mc('A firm relies on a 5-year-old market report to price a new product. Which is the biggest risk?', [
        ['The data may be out of date and no longer reflect customers or competitors', 'Correct.'],
        ['Secondary research is always illegal', 'Untrue.'],
        ['It was too cheap', 'Cost is not the issue.'],
        ['It is first-hand data', 'It is secondary.'],
      ], 0)),
      ao(3, calc('A random sample of 400 people is taken. 25% say they would buy a new product. The market has 80,000 potential customers. Assuming the sample is representative, how many might buy?', 20000, {
        unit: 'people',
        formula: 'Estimate = % × market size',
        steps: ['0.25 × 80,000 = 20,000 potential buyers', 'Treat as an estimate: the sample may not be perfectly representative.'],
      })),
      ao(3, tfd('A larger sample always gives more accurate results.', 'depends', 'Bigger samples reduce chance error, but they must also be representative and free from biased questions.')),
      ao(4, mc('Which research plan is best-justified for a firm deciding where to open a new shop?', [
        ['Use secondary population and income data, then observe footfall at shortlisted sites', 'Correct: efficient and evidence-based.'],
        ['Ask the owner’s friends', 'Biased and too small.'],
        ['Pick the cheapest site without data', 'No evidence.'],
        ['Rely on competitors’ adverts', 'Not evidence of location demand.'],
      ], 0)),
      ao(3, mc('A questionnaire has many open questions, so results are slow to analyse. What is the best change to speed up analysis?', [
        ['Use more closed questions with fixed options', 'Correct: easier to count and compare.'],
        ['Ask fewer people but no questions', 'Not possible.'],
        ['Use only observation', 'Different method.'],
        ['Remove the sample', 'Not logical.'],
      ], 0)),
      ao(4, scn('A firm could spend $8,000 on a focus group (rich detail, 10 people) or $2,000 on an online survey of 500 customers. It wants to know how many people would buy at $20 and why they feel as they do. Which is best-justified?', [
        ['The online survey first for demand numbers, then a small focus group if results show a puzzle', 'Efficient use of budget.', true],
        ['The focus group only', 'Too small to size demand.', false],
      ], 'Match the method to the question and budget.')),
    ],
  },

  'u3-product-price': {
    cards: [
      [ao(4, mc('Two identical bottles of water: one in a plain bottle at $1, another with a premium brand at $2.50 that sells equally well. Which statement best explains the difference?', [
        ['Brand image lets the firm charge more and builds loyalty, adding more value per bottle', 'Correct.'],
        ['The cost of water is higher', 'Not stated.'],
        ['Brand names have no effect', 'Contradicted by sales.'],
        ['Packaging does not matter', 'It matters.'],
      ], 0))],
      [ao(4, mc('A chocolate firm switches to recyclable packaging. Which is the best-justified reason?', [
        ['It may improve reputation with eco-conscious customers, though costs may rise', 'Correct.'],
        ['It always lowers production costs', 'Not always.'],
        ['It removes the need for a brand', 'No.'],
        ['It is a legal requirement for all firms', 'Not stated.'],
      ], 0))],
      [ao(4, mc('A drinks company spends $2m developing a new product; one in three new products fail. Which statement is best-evaluated?', [
        ['New products help growth but are costly and risky, so research and testing are needed', 'Correct.'],
        ['New products always succeed', 'False.'],
        ['The cost is irrelevant', 'False.'],
        ['It should never develop new products', 'Overstated.'],
      ], 0))],
      [ao(3, mc('A smartphone’s sales were: Year 1: 5k, Year 2: 40k, Year 3: 120k, Year 4: 125k, Year 5: 110k. Which stage is it in at Year 5?', [
        ['Decline beginning', 'Correct: sales peaked and are falling.'],
        ['Introduction', 'Sales are high.'],
        ['Growth', 'Growth ended in Year 4.'],
        ['Maturity with rising sales', 'Sales are falling.'],
      ], 0))],
      [ao(4, mc('A graph shows a product’s sales rising slowly, then rapidly, then levelling. The firm is considering heavy advertising now. At which stage is heavy advertising most likely to be an extension strategy?', [
        ['Maturity or early decline, to prolong sales', 'Correct.'],
        ['Before the product exists', 'Not an extension strategy.'],
        ['During rapid growth only', 'Extension strategies prolong life.'],
        ['Never', 'It can help.'],
      ], 0))],
      [ao(4, scn('Sales of a breakfast cereal have plateaued. The firm can (A) launch a low-sugar version, (B) sell it in a new country, (C) cut advertising to save money. Customers want healthier food. Which is best-justified?', [
        ['A: adapts the product to current demand and extends its life', 'Uses the stated customer trend.', true],
        ['C: reduces costs', 'Likely accelerates decline.', false],
        ['B regardless of demand', 'Ignores the stated trend.', false],
      ], 'Match the extension strategy to the evidence.'))],
      [ao(4, mc('A cough sweet sells less each year at home, but people abroad like its taste and no rival sells it there. Which strategy is best-justified?', [
        ['Enter the overseas market', 'Correct: uses unmet foreign demand.'],
        ['Stop all promotion', 'Speeds decline.'],
        ['Cut quality', 'Risky.'],
        ['Do nothing', 'Sales continue to fall.'],
      ], 0))],
      [ao(4, mc('A firm launches a unique new gadget with no rivals. Which pricing strategy is best-justified, and why?', [
        ['Price skimming: unique products can earn high profit early from buyers who value novelty', 'Correct.'],
        ['Penetration: because every new product needs low prices', 'Not for a unique product.'],
        ['Cost-plus with no mark-up', 'No profit.'],
        ['Competitive pricing', 'There are no competitors to match.'],
      ], 0))],
      [ao(4, scn('A new budget airline enters a market with strong rivals. Passengers compare prices online. Which is best-justified?', [
        ['Penetration or competitive pricing to attract passengers and win market share', 'Matches the competitive market.', true],
        ['Price skimming', 'High fares deter passengers who can compare.', false],
      ], 'Match pricing to market conditions.'))],
      // advantages / disadvantages cards
      [ao(4, mc('A toy firm has no new product for five years while rivals launch new toys every year. Which is the most likely result?', [
        ['Sales decline as customers move to new products', 'Correct.'],
        ['Sales rise automatically', 'Unlikely.'],
        ['Costs vanish', 'No.'],
        ['The firm becomes a monopoly', 'No.'],
      ], 0))],
      [ao(4, mc('A firm launches a new-use version of an old product at a cost of $100,000 and expects $400,000 extra sales over two years. Which statement is best?', [
        ['The extension looks worthwhile if the sales forecast is reliable and costs are controlled', 'Correct: compares cost with benefit.'],
        ['It is wasteful because extensions never work', 'Overstated.'],
        ['It is free', 'It costs $100,000.'],
        ['Extension strategies create new products from nothing', 'They modify existing ones.'],
      ], 0))],
      [ao(4, mc('A company uses penetration pricing for six months, then raises prices. Which is the most likely risk?', [
        ['Customers may leave when prices rise, reducing the share gained', 'Correct.'],
        ['Customers will pay more happily', 'Not guaranteed.'],
        ['Profits are always highest at the start', 'They are low at the start.'],
        ['Competitors cannot respond', 'They can.'],
      ], 0))],
      [ao(4, mc('An airline raises fares when flights are nearly full and cuts them for empty flights. Which pricing method is this, and what is the benefit?', [
        ['Dynamic pricing, raising revenue by matching price to demand', 'Correct.'],
        ['Cost-plus; fixed prices', 'Prices change.'],
        ['Penetration pricing', 'Not described.'],
        ['Price skimming', 'Not described.'],
      ], 0))],
    ],
    pool: [
      ao(3, calc('A product costs $24 to make. The firm adds a 60% mark-up (cost-plus) and sells 5,000 units. What is the total mark-up profit?', 72000, {
        unit: '$',
        formula: 'Mark-up per unit = cost × mark-up %; total = mark-up × units',
        steps: ['24 × 0.60 = $14.40 per unit', '14.40 × 5,000 = $72,000'],
      })),
      ao(4, scn('A soft drink in maturity has sales of $40m, flat for three years. A firm can spend $5m on (A) a new flavour or (B) a promotion expected to give a short boost. Surveys show customers want variety. Which is best-justified?', [
        ['New flavour (A), because it addresses customers’ wish for variety and may extend the life longer than a short promotion', 'Uses the evidence.', true],
        ['Promotion (B), because it is cheaper', 'Both cost $5m.', false],
      ], 'Evaluate by cause and duration of effect.')),
      ao(3, mc('Which statement about the product life cycle is best-supported?', [
        ['Extension strategies aim to lift or prolong sales before decline', 'Correct.'],
        ['All products follow exactly the same graph', 'Shapes vary.'],
        ['Decline cannot be delayed', 'It can.'],
        ['Growth is the longest stage', 'Not necessarily.'],
      ], 0)),
      ao(4, mc('A luxury perfume brand starts selling at discounts in supermarkets. Which is the most likely risk?', [
        ['Damage to its prestige brand image, reducing its ability to charge high prices', 'Correct.'],
        ['Higher profit per bottle', 'Lower prices reduce it.'],
        ['Fewer customers', 'Likely more but lower-value ones.'],
        ['No effect', 'Brand image changes.'],
      ], 0)),
      ao(3, tfd('Penetration pricing guarantees a high market share.', 'false', 'It can attract customers, but competitors may respond, and customers may leave when prices rise.')),
      ao(4, scn('A phone maker can price its new model using cost-plus ($300 cost + 50% = $450) or competitive pricing ($399, matching rivals). Rivals’ phones have similar specifications. Which is best-justified?', [
        ['Competitive pricing at $399, since similar rivals mean customers will compare prices and $450 would lose sales', 'Uses the market evidence.', true],
        ['Cost-plus because it guarantees a margin', 'Ignores competition.', false],
      ], 'Prices must reflect the market, not just costs.')),
      ao(3, mc('Which packaging change most directly supports a premium brand image?', [
        ['High-quality materials and elegant design', 'Correct.'],
        ['Thin cheap plastic', 'Lowers perceived value.'],
        ['No label', 'Removes information.'],
        ['Hard-to-open containers', 'Frustrating.'],
      ], 0)),
      ao(4, mc('A firm’s market research shows a product is liked but too expensive for most customers. Which response is best-justified?', [
        ['Test a lower price or cheaper version, since price is the identified barrier', 'Correct.'],
        ['Raise the price', 'Worsens the barrier.'],
        ['Stop researching', 'No.'],
        ['Increase packaging cost', 'Raises price.'],
      ], 0)),
    ],
  },

  'u3-place-promotion': {
    cards: [
      [ord('Order the chain of distribution for a product sold through a wholesaler and a retailer.', [
        'Producer',
        'Wholesaler',
        'Retailer',
        'Consumer',
      ], 'Wholesalers buy in bulk from producers and sell smaller quantities to retailers.')],
      [ao(4, scn('A small jam maker produces 400 jars a week and wants a high margin and a strong brand. Which channel is best-justified?', [
        ['Direct online and specialist local shops: keeps the margin and controls the brand', 'Fits small volume and brand aims.', true],
        ['National wholesalers', 'Margins and brand control are lost; volume is too small.', false],
      ], 'Match the channel to volume, margin and control.'))],
      [ao(4, mc('A company wants to remind customers of a well-known brand rather than tell them about a new product. Which promotion aim is this?', [
        ['Reminding', 'Correct.'],
        ['Informing', 'For new products.'],
        ['Persuading new customers', 'Not the aim.'],
        ['Reducing costs', 'Not promotion.'],
      ], 0))],
      [ao(4, mc('A café gives a free coffee after 9 purchases. Which statement best evaluates this scheme?', [
        ['It encourages repeat visits and gives customer data, but the free coffees reduce margins', 'Correct.'],
        ['It always increases profit', '“Always” unsupported.'],
        ['It has no cost', 'Free coffees cost money.'],
        ['It attracts no repeat customers', 'It is designed to.'],
      ], 0))],
      [ao(4, mc('A firm with $500 must reach students at a nearby university. Which advertising is best-justified?', [
        ['Social media posts and posters on campus', 'Correct: cheap and targeted.'],
        ['A national TV advert', 'Far too expensive.'],
        ['Motorway billboards', 'Not targeted.'],
        ['A full-page national newspaper advert', 'Too costly.'],
      ], 0))],
      [ao(4, scn('A luxury watch brand wants to reach wealthy adults with a prestige image. Which promotion is best-justified?', [
        ['Glossy magazines and targeted online adverts', 'Matches audience and image.', true],
        ['Flyers and heavy discounts', 'Damages a premium image.', false],
      ], 'Promotion must match audience and brand.'))],
      [ao(4, mc('A boutique sells only in its shop. A friend suggests also selling online. Which is the best-justified benefit and cost?', [
        ['A wider market and longer opening hours, but website, delivery and security costs', 'Correct.'],
        ['No cost at all', 'There are costs.'],
        ['Customers can try items on', 'Not online.'],
        ['Less competition', 'More competition online.'],
      ], 0))],
      // advantages / disadvantages cards
      [ao(4, mc('A producer sells direct online and handles delivery itself. It finds delivery costs are cutting its margin. Which statement is most accurate?', [
        ['Direct selling keeps the middleman’s profit but the firm takes on distribution cost and work', 'Correct.'],
        ['Direct selling removes all costs', 'It adds distribution costs.'],
        ['The firm cannot use direct selling', 'It can.'],
        ['Retailers always cost less', 'Not necessarily.'],
      ], 0))],
      [ao(4, mc('A bakery offers 50% off in January, sales jump, then return to normal in February. Which analysis is best?', [
        ['The discount gave a short-term boost but not lasting loyalty, and cut margin', 'Correct.'],
        ['Discounts always create loyal customers', 'Not supported.'],
        ['The discount raised margins', 'It cut them.'],
        ['Sales promotion has no effect', 'It had a temporary effect.'],
      ], 0))],
      [ao(4, mc('Which is the strongest drawback of billboards for a small local café?', [
        ['High cost and low targeting for local customers', 'Correct.'],
        ['Cannot be seen', 'They can.'],
        ['They are interactive', 'They are not.'],
        ['They reach too few people', 'They reach many but not targeted.'],
      ], 0))],
      [ao(4, mc('A customer wants to buy a sofa but is unsure about the colour and size. Which is the most significant e-commerce disadvantage for this customer?', [
        ['Inability to see and test the product in person', 'Correct.'],
        ['Shops being closed at night', 'Online is open.'],
        ['Price comparison being difficult', 'It is easy online.'],
        ['Travel needed', 'Not needed.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A farm sells vegetables and has $1,000 for promotion. It can (A) buy a local radio advert, (B) hand out leaflets in the nearby village and run a Facebook page. Most customers live within 5 km. Which is best-justified?', [
        ['B: cheap and targeted at nearby customers', 'Matches budget and audience.', true],
        ['A: radio reaches a wide audience', 'Mostly outside its customer area and costly.', false],
      ], 'Match the promotion to audience and budget.')),
      ao(3, mc('A firm sells through agents who earn commission. Which statement is the most accurate?', [
        ['Agents use local contacts and are paid only when they sell, but they reduce the firm’s margin and control', 'Correct.'],
        ['Agents buy and own the stock', 'They do not own goods.'],
        ['Agents are the producer', 'They are intermediaries.'],
        ['Agents are always cheaper than direct selling', 'Not necessarily.'],
      ], 0)),
      ao(4, mc('A producer sells to a wholesaler at $5 a unit; the wholesaler sells to retailers at $6.50; the retailer sells at $9. Which statement is best-supported?', [
        ['The longer the chain, the more margins are added, raising the final price compared with selling direct', 'Correct.'],
        ['The wholesaler earns more than the retailer', 'The retailer earns $2.50, the wholesaler $1.50.'],
        ['The producer sets the final price', 'Not shown.'],
        ['Chains reduce prices', 'They add margins.'],
      ], 0)),
      ao(3, tfd('Social media advertising is always cheaper and more effective than TV advertising.', 'depends', 'It can be cheaper and well targeted, but TV can reach a larger audience; the best choice depends on target market and budget.')),
      ao(4, scn('An online retailer faces many returns because customers cannot try clothes on. Returns cost $12 each and are 18% of 10,000 orders. Which action is best-justified?', [
        ['Improve size guides and photos to reduce returns, since 1,800 returns cost $21,600', 'Uses the cost evidence.', true],
        ['Ignore it because online is cheap', 'The cost is large.', false],
      ], 'Quantify the problem before deciding.')),
      ao(3, calc('A promotion gives 20% off a $50 item. The firm’s variable cost is $30. What is the contribution per item at the discounted price?', 10, {
        unit: '$',
        formula: 'Contribution = price − variable cost',
        steps: ['Discounted price = 50 × 0.80 = $40', '40 − 30 = $10 contribution (down from $20)', 'The discount halves the unit contribution, so it needs to double sales to break even on this item.'],
      })),
      ao(4, mc('Which statement best evaluates a loyalty scheme for a supermarket with many rivals nearby?', [
        ['It can increase repeat purchases and data, but rivals may copy it and rewards cost money', 'Correct.'],
        ['It guarantees profit', 'No.'],
        ['It stops competition', 'No.'],
        ['It has no costs', 'Rewards cost money.'],
      ], 0)),
      ao(3, mc('Which is the clearest example of informative advertising?', [
        ['An advert explaining the features and price of a new phone', 'Correct.'],
        ['A discount coupon', 'Sales promotion.'],
        ['A competition with prizes', 'Sales promotion.'],
        ['A loyalty card', 'Sales promotion.'],
      ], 0)),
    ],
  },

  'u3-strategy-legal': {
    cards: [
      [ao(4, mc('A budget furniture brand sells quality flat-pack items at low prices in large out-of-town stores with bold adverts. Which statement best shows a consistent mix?', [
        ['All four Ps support a value-for-money image', 'Correct.'],
        ['The price conflicts with the product', 'They are consistent.'],
        ['The place conflicts with the promotion', 'They are consistent.'],
        ['The mix has no strategy', 'It does.'],
      ], 0))],
      [ao(4, scn('A firm launches premium organic skincare. Which marketing mix is best-justified?', [
        ['High price, specialist retailers, premium advertising', 'Consistent with a premium image.', true],
        ['Cheap price and heavy discounts in discount shops', 'Contradicts the premium image.', false],
      ], 'All four Ps must support the same image.'))],
      [ao(4, mc('A UK sports brand wants to enter Japan where it has no experience. Which is the best-justified first step?', [
        ['Research culture, laws and competitors, and test with a small launch', 'Correct: reduces risk.'],
        ['Launch everywhere immediately', 'High risk.'],
        ['Copy its UK adverts exactly', 'May not suit the culture.'],
        ['Avoid research to save time', 'Increases risk.'],
      ], 0))],
      [ao(4, mc('An advert claims a product is “100% natural” but tests show artificial additives. Which is the most likely consequence?', [
        ['Legal action or fines and damage to trust', 'Correct.'],
        ['Higher profits with no risk', 'Illegal claims carry risk.'],
        ['No effect', 'Unlikely.'],
        ['A new law is created', 'Not relevant.'],
      ], 0))],
      [ao(4, mc('A firm must test every batch of toys for safety under new law, adding $0.40 per toy. Which statement best evaluates this?', [
        ['It raises costs but protects customers and the firm’s reputation, and avoids penalties', 'Correct.'],
        ['It only costs money', 'Ignores benefits.'],
        ['It has no costs', 'It adds $0.40.'],
        ['It helps competitors only', 'No.'],
      ], 0))],
      // advantages / disadvantages cards
      [ao(4, scn('A UK bakery chain can enter a new country by opening shops or by exporting online first. It knows little about local tastes and the laws. Which is best-justified?', [
        ['Export online first to test demand and learn, then open shops if successful', 'Limits risk while learning.', true],
        ['Open ten shops immediately', 'High risk without knowledge.', false],
      ], 'Use a staged approach when knowledge is low.'))],
      [ao(4, mc('A cosmetics firm claims, “Proven to remove wrinkles in 7 days” with no evidence. Consumer-protection law requires evidence. How does this law protect customers AND affect the firm?', [
        ['Customers are protected from false claims; the firm must test and prove claims, adding cost', 'Correct.'],
        ['It only protects the firm', 'Customers are protected.'],
        ['It removes the need to advertise', 'No.'],
        ['It reduces the firm’s costs', 'Testing adds costs.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A snack brand finds that in a new country consumers prefer spicy flavours, there is a 25% import tariff and local brands are cheap. It can export (cost $3 per unit after tariff) or build a local plant ($5m). Sales forecast: 200,000 units a year at $4. Which is best-justified?', [
        ['Start by exporting or licensing: a $5m plant against annual sales of $800k is risky, and exporting tests demand', 'Uses the figures.', true],
        ['Build the plant immediately', 'Payback would be very long.', false],
      ], 'Compare investment size with expected returns.')),
      ao(3, mc('A firm sells baby food with a label that omits an allergy warning. Which statement is most accurate?', [
        ['It may breach consumer-protection law and risk fines, recalls and loss of trust', 'Correct.'],
        ['It is legal because labels are optional', 'Not for allergens.'],
        ['It lowers costs only', 'Risks are large.'],
        ['It improves reputation', 'Opposite.'],
      ], 0)),
      ao(4, mc('A business changes only its price (lower) but keeps its premium packaging and exclusive stores. What is the most likely issue?', [
        ['Mixed messages confuse customers and weaken the brand image', 'Correct.'],
        ['Customers will be more loyal', 'Not supported.'],
        ['The mix is perfectly consistent', 'It is inconsistent.'],
        ['The promotion no longer matters', 'It does.'],
      ], 0)),
      ao(3, tfd('Entering foreign markets always increases profit because there are more customers.', 'false', 'Extra customers help, but costs, cultural differences, legal issues and competition can outweigh the gains.')),
      ao(4, scn('A firm has a faulty-goods complaint. A customer demands a refund. The cost is $80. If refused, the customer could post bad reviews and take legal action. Which decision is best-justified?', [
        ['Refund and investigate the fault, because the cost is small compared with legal costs and reputation', 'Uses the cost comparison.', true],
        ['Refuse to avoid a precedent', 'Higher risk.', false],
      ], 'Compare short-term cost with possible long-term harm.')),
      ao(3, mc('Which is a likely benefit of consumer-protection laws for honest businesses?', [
        ['Dishonest rivals cannot gain an unfair advantage by making false claims', 'Correct.'],
        ['They remove all competition', 'No.'],
        ['They stop advertising', 'No.'],
        ['They guarantee profit', 'No.'],
      ], 0)),
      ao(4, mc('A firm uses the same advert worldwide; in one country the slogan translates into an offensive phrase. Which weakness does this show?', [
        ['Lack of knowledge of cultural and language differences', 'Correct.'],
        ['Too many customers', 'Not the issue.'],
        ['Excess profit', 'Not the issue.'],
        ['Too much research', 'The opposite.'],
      ], 0)),
      ao(3, mc('A company exports to five countries. One country’s economy falls sharply, but total sales fall only 5%. Which benefit of expanding abroad does this show?', [
        ['Spreading risk', 'Correct.'],
        ['Cultural advantages', 'Not the benefit shown.'],
        ['Higher tariffs', 'Not a benefit.'],
        ['Lower competition always', 'Not shown.'],
      ], 0)),
    ],
  },
};
