import { mc, ord, scn, calc, tfd } from '../builders.js';

export const unit1 = {
  id: 'u1',
  number: 1,
  title: 'Understanding Business Activity',
  short: 'Business Activity',
  emoji: '🏭',
  color: 'emerald',
  submodules: [
    {
      id: 'u1-activity-sectors',
      title: 'Business Activity & Sectors',
      syllabus: '1.1 – 1.2',
      microConcept: [
        'Factors of production: land, labour, capital, enterprise. Added value = selling price − cost of inputs.',
        'Opportunity cost = the next best alternative given up when you make a choice.',
        'Primary = extracts raw materials; secondary = manufactures/builds; tertiary = services. Public sector = government-owned; private = owned by individuals.',
      ],
      challenges: [
        mc('A farmer buys a tractor. Which factor of production is the tractor?', [
          ['Land', 'Land means natural resources (soil, minerals, water) — a tractor is man-made.'],
          ['Labour', 'Labour is the human effort/skills of workers, not equipment.'],
          ['Capital', 'Correct: capital is man-made resources (machines, tools, buildings) used to produce goods.'],
          ['Enterprise', 'Enterprise is the risk-taking and organising by the entrepreneur.'],
        ], 2),
        calc('A café sells a sandwich for $6.50. The ingredients cost $2.10. How much value is added per sandwich ($)?', 4.4, {
          unit: '$',
          formula: 'Added value = selling price − cost of inputs',
          steps: ['Selling price = $6.50', 'Cost of inputs = $2.10', '6.50 − 2.10 = $4.40'],
        }),
        tfd('Opportunity cost is the money paid for a product.', 'false', 'Opportunity cost is the NEXT BEST ALTERNATIVE you give up, not the price paid.'),
        ord('Order this supply chain from the first sector to the last.', [
          'Iron ore is mined (primary)',
          'Steel is manufactured into car parts (secondary)',
          'Cars are assembled (secondary)',
          'Dealership sells and services the car (tertiary)',
        ], 'Primary extracts → secondary processes/manufactures → tertiary provides services to the customer.'),
        scn('A bakery sells bread for $2.00 (cost $1.50). The owner wants to raise added value.', [
          ['Add branded packaging and a premium range, selling at $3.50 (cost $2.00)', 'Added value rises from $0.50 to $1.50 per loaf. Branding, packaging and quality let you charge more than the extra cost.', true],
          ['Switch to cheaper flour and keep the $2.00 price', 'Added value rises a little ($0.50 → $0.70) but quality may fall and customers could leave.', false],
        ], 'Added value goes up by raising price more than cost rises (brand, design, quality) or by cutting input cost without harming quality.'),
        tfd('A government-owned hospital is part of the private sector.', 'false', 'Government-owned = public sector. Private sector = owned by individuals or companies.'),
      ],
    },
    {
      id: 'u1-enterprise',
      title: 'Enterprise & Business Plans',
      syllabus: '1.3.1',
      microConcept: [
        'Successful entrepreneurs: risk-taker, creative, determined, hard-working, confident, good leader.',
        'Business plan sections: summary, objectives, resources, market research, marketing, finance, people, operations. It sets direction and persuades lenders.',
        'Governments back start-ups (grants, advice, low-cost loans, training) to create jobs, growth and tax revenue.',
      ],
      challenges: [
        mc('Which is NOT a normal section of a business plan?', [
          ['Market research', 'This is a standard section.'],
          ['Finance', 'This is a standard section (cash flow, funding needs).'],
          ['Owner’s favourite hobbies', 'Correct: personal hobbies are irrelevant to a business plan.'],
          ['Operations', 'This is a standard section (production, suppliers, location).'],
        ], 2),
        scn('Sana wants a $20,000 bank loan for a café. She has no written plan.', [
          ['Apply now without a plan', 'The bank cannot judge the risk, so it declines the loan. No evidence of demand or cash flow.', false],
          ['Write a plan with market research and a cash flow forecast first', 'The bank sees evidence of demand and ability to repay. Approval is far more likely.', true],
        ], 'A business plan reduces risk, shows lenders the idea is viable and gives the owner a roadmap.'),
        tfd('A business plan guarantees success.', 'false', 'It improves the odds and clarity but cannot remove risk — markets and costs can still change.'),
        ord('Order the start-up process.', [
          'Entrepreneur spots a gap in the market',
          'Market research checks demand',
          'Business plan is written',
          'Finance is secured',
          'Business launches',
        ], 'Research validates the idea, the plan organises it, finance pays for it, then you launch.'),
        mc('Why do governments support start-ups?', [
          ['To control all prices in the economy', 'Price control is not the reason for start-up support.'],
          ['To create jobs and increase tax revenue', 'Correct: new firms employ people and later pay taxes.'],
          ['To reduce the number of competitors', 'Governments usually want MORE competition, not less.'],
          ['To make imports cheaper', 'Unrelated to start-up support.'],
        ], 1),
      ],
    },
    {
      id: 'u1-size-growth',
      title: 'Business Size & Growth',
      syllabus: '1.3.2 – 1.3.4',
      microConcept: [
        'Size is measured by employees, value or volume of sales/output, capital employed. Profit is NOT a size measure.',
        'Internal (organic) growth: new products/markets. External: merger/takeover — horizontal (same stage) or vertical (forwards/backwards).',
        'Some firms stay small: niche or personal service, owner wants control, little finance.',
      ],
      challenges: [
        tfd('Profit is a good way to measure the size of a business.', 'false', 'Size uses employees, sales, output or capital employed. Profit measures performance, not size.'),
        mc('A bakery merges with another bakery. This is…', [
          ['Horizontal integration', 'Correct: both firms are at the same stage of production in the same industry.'],
          ['Vertical backward integration', 'That would mean buying a supplier, e.g. a flour mill.'],
          ['Vertical forward integration', 'That would mean buying a retailer/distributor.'],
          ['Organic growth', 'Organic growth is internal; a merger is external growth.'],
        ], 0),
        mc('A car maker buys its steel supplier. This is…', [
          ['Horizontal integration', 'The firms are at different stages of the chain.'],
          ['Vertical backward integration', 'Correct: buying a supplier moves backward in the supply chain.'],
          ['Vertical forward integration', 'Forward = buying a distributor or retailer.'],
          ['A joint venture', 'A takeover/merger gives ownership; a joint venture shares a project.'],
        ], 1),
        mc('An oil refinery earns $2bn sales with only 300 staff. Why can measuring size by employees mislead?', [
          ['Profit is too high', 'Profit is not a size measure at all.'],
          ['Capital-intensive firms use machines, so few employees understates size', 'Correct: automation means headcount hides true scale.'],
          ['Employees are always paid the same', 'Not relevant to the measurement problem.'],
          ['Sales cannot be counted', 'Sales can be counted, and would show the larger scale.'],
        ], 1),
        scn('A small sports-shoe brand can either launch a new range itself or take over a rival.', [
          ['Organic growth: launch a new range', 'Slower and lower risk. Keeps control and culture; no big finance needed.', false],
          ['Takeover of the rival', 'Instant market share but expensive, and culture clashes or diseconomies may follow. Best when finance is available and speed matters.', true],
        ], 'External growth is faster but riskier and costlier; internal growth is slower but controlled. Both are valid — justify using the context.'),
        mc('Which is a reason a business may choose to remain small?', [
          ['It offers a niche personal service', 'Correct: personal/niche services often work best at small scale.'],
          ['It wants to lose market share', 'Few owners want this.'],
          ['Economies of scale are guaranteed', 'Economies of scale come with growth.'],
          ['Competition has disappeared', 'No link to staying small.'],
        ], 0),
      ],
    },
    {
      id: 'u1-organisations',
      title: 'Types of Business Organisation',
      syllabus: '1.4',
      microConcept: [
        'Sole trader: one owner, unlimited liability, keeps all profit. Partnership: shared decisions, usually unlimited liability. Ltd: limited liability, private shares. PLC: shares on stock exchange, most finance but most regulation.',
        'Franchise: pay fees/royalties to use a brand. Joint venture: two firms share a project, cost and risk. Social enterprise: social aims, profits reinvested.',
      ],
      challenges: [
        mc('Limited liability means…', [
          ['Owners can lose only what they invested in the company', 'Correct: personal assets are protected.'],
          ['The business can only trade in one country', 'Unrelated to liability.'],
          ['Owners can be forced to sell their homes to pay debts', 'That is UNLIMITED liability (sole traders/partners).'],
          ['The firm cannot borrow', 'Limited liability does not stop borrowing.'],
        ], 0),
        tfd('A private limited company can sell its shares to the public on the stock exchange.', 'false', 'Only a PLC can. A Ltd sells shares privately (e.g. to family or friends).'),
        scn('Two friends will invest $200,000 in a gym and worry about losing their homes if it fails.', [
          ['Partnership', 'Usually unlimited liability, so their homes could be at risk if debts exceed assets.', false],
          ['Private limited company', 'Limited liability protects their personal assets; shares stay with the two of them.', true],
        ], 'When owners want to limit personal risk and keep control, a private limited company fits best.'),
        mc('Which is an advantage of a franchise for the FRANCHISEE?', [
          ['Keeps all profit with no fees', 'Franchisees pay fees/royalties.'],
          ['Established brand and support', 'Correct: proven brand, training and marketing reduce risk.'],
          ['Complete freedom to change the products', 'The franchisor sets rules and standards.'],
          ['No start-up costs', 'There are usually significant fees and set-up costs.'],
        ], 1),
        mc('What is the main aim of a social enterprise?', [
          ['Maximise dividends for shareholders', 'That is typical of private-sector companies.'],
          ['Achieve social/environmental goals while earning revenue', 'Correct: profits are mainly reinvested for social aims.'],
          ['Avoid all taxes', 'Not an aim.'],
          ['Be owned by the government', 'That would be public sector.'],
        ], 1),
        tfd('Shareholders in a limited company can lose more than they invested.', 'false', 'Limited liability caps losses at the amount invested in shares.'),
      ],
    },
    {
      id: 'u1-objectives-stakeholders',
      title: 'Objectives & Stakeholders',
      syllabus: '1.5',
      microConcept: [
        'Objectives: survival, growth, profit, market share. They give direction and let the firm measure success; they change over time.',
        'Internal stakeholders: owners, managers, employees. External: customers, suppliers, lenders, government, community.',
        'Stakeholder aims can conflict, e.g. owners want profit, employees want higher pay.',
      ],
      challenges: [
        mc('Which stakeholder group is EXTERNAL?', [
          ['Managers', 'Managers work inside the business.'],
          ['Employees', 'Employees are internal stakeholders.'],
          ['Lenders/banks', 'Correct: lenders are outside the business but affected by it.'],
          ['Owners', 'Owners are internal.'],
        ], 2),
        mc('A new start-up’s most likely FIRST objective is…', [
          ['Survival', 'Correct: new firms must first stay in business.'],
          ['Becoming a multinational', 'Too ambitious at the start.'],
          ['Maximum market share', 'Comes after surviving.'],
          ['Paying large dividends', 'There is usually no spare cash yet.'],
        ], 0),
        scn('A factory plans to expand. Owners want more profit; the local community fears more noise and traffic.', [
          ['Expand and ignore the community', 'Profit rises but protests, bad publicity and planning problems may follow.', false],
          ['Expand with noise barriers and a traffic plan, and consult the community', 'Costs more, but reduces conflict and protects reputation while still growing.', true],
        ], 'Stakeholder conflicts are managed by compromise. Justify which stakeholder matters most in the context.'),
        tfd('All stakeholders share the same objectives.', 'false', 'Objectives often conflict — e.g. customers want low prices, owners want high profit.'),
        mc('Employees’ main objective is usually…', [
          ['Good pay and job security', 'Correct.'],
          ['Maximum dividends', 'That is a shareholder aim.'],
          ['Low prices', 'That is a customer aim.'],
          ['Reducing government tax', 'Not a typical employee aim.'],
        ], 0),
      ],
    },
  ],
};
