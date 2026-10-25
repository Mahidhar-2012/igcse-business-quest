import { mc, ord, scn, calc, tfd } from '../builders.js';

export const unit3 = {
  id: 'u3',
  number: 3,
  title: 'Marketing',
  short: 'Marketing',
  emoji: '📣',
  color: 'rose',
  submodules: [
    {
      id: 'u3-market',
      title: 'Role of Marketing & the Market',
      syllabus: '3.1',
      microConcept: [
        'Marketing identifies, satisfies and anticipates customer needs, builds loyalty and relationships.',
        'Market share = firm’s sales ÷ total market sales × 100.',
        'Mass market: many customers, low prices, high competition. Niche: small specialised segment, higher prices, less competition. Segment by age, income, location, gender, lifestyle.',
      ],
      challenges: [
        calc('A firm has sales of $1.2m in a market worth $8m. What is its market share (%)?', 15, {
          unit: '%',
          formula: 'Market share = (firm sales ÷ total market sales) × 100',
          steps: ['1.2 ÷ 8 = 0.15', '0.15 × 100 = 15%'],
        }),
        mc('Handmade vegan leather bags sold to eco-conscious buyers is an example of…', [
          ['A mass market', 'Mass markets target very large groups with standard products.'],
          ['A niche market', 'Correct: small, specialised segment.'],
          ['Primary research', 'That is a research method, not a market.'],
          ['A joint venture', 'Unrelated.'],
        ], 1),
        tfd('Niche markets generally face less competition than mass markets.', 'true', 'Few rivals serve a specialised segment, so firms can charge higher prices — but the market is small.'),
        mc('Splitting customers into students, professionals and retirees is segmentation by…', [
          ['Age/lifestyle', 'Correct: these groups differ by life stage.'],
          ['Location', 'Location would split by region or city.'],
          ['Income only', 'Possibly related, but the grouping is by life stage.'],
          ['Gender', 'Not the basis here.'],
        ], 0),
        scn('A new competitor enters your market and a customer trend shifts to healthier products.', [
          ['Do nothing and cut your marketing budget', 'You lose share and fall behind changing customer needs.', false],
          ['Research the trend and launch a healthier range with promotion', 'Anticipates needs and defends market share.', true],
        ], 'Marketing’s role is to anticipate and respond to changing needs and competition.'),
        calc('A firm’s sales are $1m and its market share is 20%. What is the total market size ($ million)?', 5, {
          unit: '$m',
          formula: 'Total market = firm sales ÷ market share',
          steps: ['20% = 0.20', '1 ÷ 0.20 = $5m'],
        }),
      ],
    },
    {
      id: 'u3-research',
      title: 'Market Research',
      syllabus: '3.2',
      microConcept: [
        'Primary (field) research: surveys, interviews, focus groups, observation — specific and up to date, but slow and costly. Secondary (desk): existing data — cheap and quick but may be outdated or not specific.',
        'Sampling: asking a representative part of the market to save time and cost. Accuracy depends on sample size, bias and representativeness.',
      ],
      challenges: [
        mc('Reading a government report on population trends is…', [
          ['Primary research', 'Primary means collecting new data yourself.'],
          ['Secondary research', 'Correct: the data already exists.'],
          ['A focus group', 'A focus group is a primary method.'],
          ['Sampling', 'Sampling is a way of selecting who to ask.'],
        ], 1),
        tfd('A bigger sample always guarantees accurate research results.', 'depends', 'Size helps, but the sample must also be representative and free of bias.'),
        calc('Of 200 respondents, 65% say they would buy the product. How many respondents is that?', 130, {
          unit: 'people',
          formula: 'Number = % × total respondents',
          steps: ['65% = 0.65', '0.65 × 200 = 130'],
        }),
        mc('A key advantage of focus groups is…', [
          ['They reveal WHY customers feel as they do', 'Correct: in-depth opinions.'],
          ['They are always cheaper than desk research', 'Usually more expensive.'],
          ['They use huge samples', 'Focus groups are small.'],
          ['They are unbiased', 'Group influence can introduce bias.'],
        ], 0),
        scn('A start-up drinks firm has a small budget and needs market data quickly.', [
          ['Commission a $30,000 survey of 5,000 people', 'Very reliable but unaffordable for a small start-up.', false],
          ['Desk research plus a questionnaire to 100 target customers', 'Cheap, fast and good enough to guide early decisions.', true],
        ], 'Choose research methods based on budget, time and accuracy needed.'),
      ],
    },
    {
      id: 'u3-product-price',
      title: 'Product & Price',
      syllabus: '3.3.1 – 3.3.2',
      microConcept: [
        'Product life cycle: introduction → growth → maturity → decline. Extension strategies: new markets, new uses, adapt product/packaging, more promotion.',
        'Pricing: cost-plus (cost + mark-up), competitive (match rivals), penetration (low to win share), skimming (high at launch), dynamic (changes with demand/time).',
      ],
      challenges: [
        ord('Order the product life cycle.', [
          'Introduction',
          'Growth',
          'Maturity',
          'Decline',
        ], 'Sales are low at launch, rise in growth, level off in maturity, then fall in decline.'),
        calc('A product costs $12 to make. The firm adds a 50% mark-up (cost-plus). What is the selling price ($)?', 18, {
          unit: '$',
          formula: 'Price = cost + (cost × mark-up %)',
          steps: ['Mark-up = 12 × 0.50 = $6', '12 + 6 = $18'],
        }),
        mc('Sales are rising quickly, profits are growing and competitors are entering. Which stage?', [
          ['Introduction', 'Sales are low and slow at introduction.'],
          ['Growth', 'Correct: rapid sales growth attracts competitors.'],
          ['Maturity', 'Sales are flat in maturity.'],
          ['Decline', 'Sales fall in decline.'],
        ], 1),
        scn('A firm launches a streaming service in a crowded market with powerful rivals.', [
          ['Price skimming', 'A high launch price will deter new subscribers in a crowded market.', false],
          ['Penetration pricing', 'Low prices attract subscribers quickly and win market share; raise prices later.', true],
        ], 'Skimming suits new, unique products; penetration suits competitive markets where share matters.'),
        tfd('Dynamic pricing means the price never changes.', 'false', 'Dynamic pricing changes prices with demand, time or customer data (e.g. airline tickets).'),
        mc('A product in decline is repackaged and sold in a new country. This is an…', [
          ['Extension strategy', 'Correct: it prolongs the product’s life.'],
          ['Induction', 'That is HR training.'],
          ['Quality control', 'Unrelated.'],
          ['Cost-plus price', 'That is a pricing method.'],
        ], 0),
      ],
    },
    {
      id: 'u3-place-promotion',
      title: 'Place, Promotion & E-commerce',
      syllabus: '3.3.3 – 3.3.5',
      microConcept: [
        'Distribution: direct to customer (keep all profit), via retailers, wholesalers (buy in bulk, break bulk) or agents.',
        'Promotion informs, persuades and reminds. Sales promotion = vouchers, rewards, competitions, discounts. Advertising = social media, email, leaflets, billboards.',
        'E-commerce: wider market and lower overheads for firms, but security risk and fierce competition.',
      ],
      challenges: [
        ord('Order the traditional chain of distribution.', [
          'Producer',
          'Wholesaler',
          'Retailer',
          'Consumer',
        ], 'Wholesalers buy in bulk from producers and sell smaller amounts to retailers.'),
        mc('A main advantage of selling DIRECT to customers is…', [
          ['The producer keeps the full profit margin', 'Correct: no middleman takes a cut.'],
          ['No storage or delivery needed', 'The producer handles those.'],
          ['Wider reach than retailers', 'Retail networks usually reach more people.'],
          ['No marketing needed', 'Direct selling needs strong marketing.'],
        ], 0),
        mc('A cheap, effective way to reach teenagers is…', [
          ['National TV adverts', 'Expensive and not well targeted.'],
          ['Social media advertising', 'Correct: targeted, low cost and where teens spend time.'],
          ['Newspaper adverts', 'Teens read few newspapers.'],
          ['Billboards on a motorway', 'Not targeted.'],
        ], 1),
        tfd('Sales promotions give a long-lasting increase in sales.', 'depends', 'They usually give a short-term boost; lasting effect needs good products and loyalty.'),
        scn('A local bakery wants to reach residents within 3 km on a tiny budget.', [
          ['National TV campaign', 'Reaches millions who can never visit; far too costly.', false],
          ['Leaflets through local doors and a social media post', 'Cheap and reaches exactly the right people.', true],
        ], 'Choose promotion that matches target audience and budget.'),
        mc('A disadvantage of online shopping for CUSTOMERS is…', [
          ['Can’t touch or try the product, and security risks', 'Correct.'],
          ['Open 24 hours', 'This is an advantage.'],
          ['Easy price comparison', 'This is an advantage.'],
          ['No travel needed', 'This is an advantage.'],
        ], 0),
      ],
    },
    {
      id: 'u3-strategy-legal',
      title: 'Strategy, New Markets & Legal Controls',
      syllabus: '3.3.6 – 3.4',
      microConcept: [
        'The 4Ps (product, price, place, promotion) must fit the target market and each other, e.g. luxury product → high price, exclusive outlets, premium promotion.',
        'Entering overseas markets: more sales and spread risk, but cultural differences, lack of knowledge and legal requirements.',
        'Laws protect customers from misleading promotion and faulty goods; they raise costs but build trust.',
      ],
      challenges: [
        mc('Which marketing mix is most consistent for a luxury watch?', [
          ['Premium product, high price, exclusive stores, glossy magazine ads', 'Correct: every P reinforces the brand.'],
          ['Basic product, low price, supermarket shelves, discount vouchers', 'Contradicts a luxury image.'],
          ['Premium product, very low price, vending machines', 'Price and place damage the image.'],
          ['Cheap product, high price, no promotion', 'Inconsistent and unconvincing.'],
        ], 0),
        scn('A snack brand wants to enter a new country with different tastes and food laws.', [
          ['Launch immediately with the home-market product', 'Cultural mismatch and legal breaches could waste money.', false],
          ['Research local tastes and legal rules first', 'Costs time but reduces the risk of failure.', true],
        ], 'Overseas growth needs local research on culture, law and competition.'),
        mc('An advert claims a cream removes wrinkles in 2 days with no evidence. This is…', [
          ['Misleading promotion', 'Correct: false claims break consumer protection law.'],
          ['Penetration pricing', 'That is a pricing method.'],
          ['Niche marketing', 'A segment strategy, not a legal issue.'],
          ['Extension strategy', 'A product life-cycle tactic.'],
        ], 0),
        tfd('Legal controls on marketing only create costs for businesses.', 'depends', 'They raise compliance costs but also protect reputation and build customer trust.'),
        mc('How does ‘spreading risk’ work when a firm sells in several countries?', [
          ['A downturn in one market is offset by sales elsewhere', 'Correct.'],
          ['Costs are shared with the government', 'Not what the term means.'],
          ['The firm avoids all competition', 'Competition still exists.'],
          ['Prices are the same everywhere', 'Not related.'],
        ], 0),
      ],
    },
  ],
};
