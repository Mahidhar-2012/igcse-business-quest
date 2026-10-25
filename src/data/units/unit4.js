import { mc, ord, scn, calc, tfd } from '../builders.js';

export const unit4 = {
  id: 'u4',
  number: 4,
  title: 'Operations Management',
  short: 'Operations',
  emoji: '⚙️',
  color: 'amber',
  submodules: [
    {
      id: 'u4-efficiency-lean',
      title: 'Efficiency, Lean & Inventory',
      syllabus: '4.1.1',
      microConcept: [
        'Labour productivity = output ÷ number of employees. Efficiency lowers cost per unit (automation, better skills).',
        'Lean production cuts waste: JIT (inputs arrive exactly when needed) and Kaizen (continuous small improvements by everyone).',
        'Firms hold inventory to meet demand and avoid stock-outs; amount depends on shelf life, storage cost, demand and supplier reliability.',
      ],
      challenges: [
        calc('A factory makes 12,000 units a month with 40 employees. What is labour productivity (units per employee)?', 300, {
          unit: 'units/employee',
          formula: 'Labour productivity = output ÷ number of employees',
          steps: ['Output = 12,000', 'Employees = 40', '12,000 ÷ 40 = 300 units per employee'],
        }),
        mc('A key risk of just-in-time (JIT) is…', [
          ['Supplier delays can stop production', 'Correct: with almost no buffer stock, any late delivery halts output.'],
          ['High storage costs', 'JIT REDUCES storage costs.'],
          ['More waste from old stock', 'JIT reduces stock waste.'],
          ['Slower response to customers', 'Not the main risk.'],
        ], 0),
        tfd('Kaizen means one big innovation introduced by senior managers.', 'false', 'Kaizen = continuous, small improvements suggested by all employees.'),
        mc('Which factor would make a firm hold LESS inventory?', [
          ['Very perishable products', 'Correct: stock would go off, so hold less.'],
          ['Unreliable suppliers', 'This makes firms hold MORE.'],
          ['Seasonal peak demand', 'This makes firms hold more.'],
          ['Cheap storage', 'This would let firms hold more.'],
        ], 0),
        scn('A firm adopts JIT, but its main supplier is overseas and often late.', [
          ['Keep zero stock to stay lean', 'Production stops whenever a delivery is late, losing orders and goodwill.', false],
          ['Hold a small buffer stock or find a local supplier', 'Costs a little more but protects production.', true],
        ], 'JIT works best with reliable, close suppliers. Justify using the context.'),
        calc('After training, the same 40 employees make 15,000 units. What is the new labour productivity (units per employee)?', 375, {
          unit: 'units/employee',
          formula: 'Labour productivity = output ÷ number of employees',
          steps: ['15,000 ÷ 40 = 375 units per employee', 'Up from 300 — an increase of 75 units per worker'],
        }),
      ],
    },
    {
      id: 'u4-methods-technology',
      title: 'Production Methods & Technology',
      syllabus: '4.1.2, 4.2',
      microConcept: [
        'Job: one-off, bespoke (wedding dress). Batch: groups of identical items, flexible (bakery). Flow: continuous, mass-produced, automated (cars, bottles) — lowest unit cost but high set-up cost and inflexible.',
        'Technology (automation, CAM, 3D printing, contactless payments) raises speed and consistency; costs capital and may cut jobs.',
      ],
      challenges: [
        mc('Which production method suits one-off custom wedding cakes?', [
          ['Job production', 'Correct: each item is made to the customer’s order.'],
          ['Flow production', 'Flow is for identical mass-produced items.'],
          ['Batch production', 'Batch makes groups of identical products.'],
          ['Just-in-time', 'JIT is an inventory approach, not a production method.'],
        ], 0),
        scn('A toy firm will make 500,000 identical plastic toys a year.', [
          ['Job production', 'Very slow and expensive per unit for identical goods.', false],
          ['Flow production', 'Automated continuous line gives the lowest unit cost at this volume.', true],
        ], 'High-volume identical products suit flow production despite the high set-up cost.'),
        ord('Build the chain of reasoning for automation.', [
          'Automation is introduced',
          'Output rises and unit cost falls',
          'Price can be lowered',
          'Sales and market share increase',
        ], 'Technology can improve productivity and competitiveness, but also costs money and jobs.'),
        tfd('Automation always reduces the number of jobs in a business.', 'depends', 'It removes some roles but can create new technical ones and growth may add jobs.'),
        mc('A benefit of 3D printing for a business is…', [
          ['Quick low-cost prototypes and customised items', 'Correct.'],
          ['Lowest cost for millions of identical items', 'Flow production is cheaper at that scale.'],
          ['No need for design skills', 'Design is still needed.'],
          ['Zero capital cost', '3D printers cost money.'],
        ], 0),
      ],
    },
    {
      id: 'u4-costs-scale',
      title: 'Costs & Economies of Scale',
      syllabus: '4.4.1 – 4.4.2',
      microConcept: [
        'Fixed costs (rent, salaries) don’t change with output; variable costs (materials) do. Total cost = fixed + variable. Average cost = total cost ÷ units.',
        'Economies of scale (average cost falls as output rises): purchasing, marketing, financial, managerial, technical. Diseconomies: poor communication, low morale, weak coordination, loss of control.',
      ],
      challenges: [
        calc('Fixed costs are $20,000. Variable cost is $4 per unit. What is the total cost of producing 5,000 units ($)?', 40000, {
          unit: '$',
          formula: 'Total cost = fixed costs + (variable cost per unit × units)',
          steps: ['Variable cost = 4 × 5,000 = $20,000', '20,000 + 20,000 = $40,000'],
        }),
        calc('Using the total cost of $40,000 for 5,000 units, what is the average cost per unit ($)?', 8, {
          unit: '$',
          formula: 'Average cost = total cost ÷ number of units',
          steps: ['40,000 ÷ 5,000 = $8 per unit'],
        }),
        mc('Factory rent is a…', [
          ['Fixed cost', 'Correct: it stays the same however many units are made.'],
          ['Variable cost', 'Variable costs change with output.'],
          ['Cost of sales only', 'Rent is an overhead, not directly output-linked.'],
          ['Revenue', 'Revenue is income, not cost.'],
        ], 0),
        mc('A bulk-buying discount on raw materials is a…', [
          ['Purchasing economy of scale', 'Correct.'],
          ['Technical economy of scale', 'Technical = larger, more efficient machinery.'],
          ['Diseconomy of scale', 'Diseconomies RAISE average costs.'],
          ['Managerial economy of scale', 'Managerial = specialist managers.'],
        ], 0),
        tfd('A bigger business always has lower average costs.', 'depends', 'Economies of scale lower costs, but diseconomies (poor communication, weak control) can push costs up again.'),
        scn('Product B earns $50,000 revenue, with $40,000 variable costs. Allocated fixed costs are $30,000, so it shows a $20,000 loss on paper. Fixed costs would exist anyway.', [
          ['Stop making Product B', 'Business loses the $10,000 it contributes toward fixed costs, so the total loss grows.', false],
          ['Continue making Product B for now', 'It covers variable costs and contributes $10,000 to fixed costs that must be paid anyway.', true],
        ], 'Use cost data carefully: a product covering its variable costs still contributes to fixed costs. Review long term.'),
      ],
    },
    {
      id: 'u4-break-even',
      title: 'Break-even Analysis',
      syllabus: '4.4.3',
      microConcept: [
        'Contribution per unit = selling price − variable cost per unit. Break-even output = fixed costs ÷ contribution per unit.',
        'Margin of safety = actual sales − break-even sales. On a chart, break-even is where total revenue crosses total costs.',
        'Limits: assumes every unit sells, constant price and costs.',
      ],
      challenges: [
        calc('Selling price is $25 and variable cost per unit is $10. What is the contribution per unit ($)?', 15, {
          unit: '$',
          formula: 'Contribution = selling price − variable cost per unit',
          steps: ['25 − 10 = $15'],
        }),
        calc('Fixed costs are $30,000 and contribution is $15 per unit. What is the break-even output (units)?', 2000, {
          unit: 'units',
          formula: 'Break-even = fixed costs ÷ contribution per unit',
          steps: ['30,000 ÷ 15 = 2,000 units'],
        }),
        calc('Break-even is 2,000 units. The firm actually sells 2,600 units. What is the margin of safety (units)?', 600, {
          unit: 'units',
          formula: 'Margin of safety = actual sales − break-even sales',
          steps: ['2,600 − 2,000 = 600 units'],
        }),
        calc('The firm raises its price to $30 (variable cost still $10, fixed costs $30,000). What is the NEW break-even output (units)?', 1500, {
          unit: 'units',
          formula: 'Break-even = fixed costs ÷ (new price − variable cost)',
          steps: ['New contribution = 30 − 10 = $20', '30,000 ÷ 20 = 1,500 units', 'Higher price → lower break-even'],
        }),
        mc('On a break-even chart, the break-even point is where…', [
          ['Total revenue line crosses total cost line', 'Correct: revenue equals costs, so no profit or loss.'],
          ['Fixed cost line starts', 'That is the starting level of costs.'],
          ['Variable cost line crosses the axis', 'No such significance.'],
          ['Margin of safety is greatest', 'Margin of safety is measured from break-even to actual output.'],
        ], 0),
        tfd('A negative margin of safety means the firm is making a profit.', 'false', 'Negative means actual sales are below break-even — a loss.'),
      ],
    },
    {
      id: 'u4-quality-sustainability-location',
      title: 'Quality, Sustainability & Location',
      syllabus: '4.3, 4.5, 4.6',
      microConcept: [
        'Quality control inspects output to find defects; quality assurance prevents defects at every stage (systems, training).',
        'Sustainability: renewable energy, less waste, recycling, eco-packaging — better reputation, but extra cost.',
        'Location: manufacturers weigh land, labour, transport, raw materials, incentives. Services weigh footfall, accessibility, rent.',
      ],
      challenges: [
        mc('Quality ASSURANCE differs from quality CONTROL because it…', [
          ['Prevents faults throughout production, not just checks at the end', 'Correct: it builds quality into every stage.'],
          ['Only inspects finished goods', 'That describes quality control.'],
          ['Is cheaper in all cases', 'It often needs more training and system costs.'],
          ['Removes the need for staff', 'Staff are central to QA.'],
        ], 0),
        scn('A pacemaker manufacturer cannot tolerate any defects.', [
          ['Quality control only: inspect at the end', 'Faulty parts might be found too late and waste materials.', false],
          ['Quality assurance: prevent defects at each stage', 'Higher up-front cost but protects lives and reputation.', true],
        ], 'Where defects are costly or dangerous, prevention (QA) is justified.'),
        tfd('Becoming more sustainable always lowers profit.', 'depends', 'It can raise costs short term but may cut energy and waste costs, improve reputation and win customers.'),
        mc('Most important location factor for a city-centre café is likely…', [
          ['Footfall (customer passing trade)', 'Correct: customers must walk past.'],
          ['Proximity to raw materials', 'Matters for manufacturers.'],
          ['Cheap land for a huge factory', 'Not relevant to a café.'],
          ['Export tax incentives', 'Not a café factor.'],
        ], 0),
        scn('A clothing firm weighs moving factories overseas where wages are 70% lower but workers are less skilled and transport is slower.', [
          ['Move overseas immediately', 'Labour cost falls but quality and delivery times may suffer.', false],
          ['Compare skills, transport, stability and total costs first', 'A balanced decision avoids hidden costs.', true],
        ], 'Evaluate location using multiple factors: cost, skills, transport, political stability, market access.'),
        mc('A benefit of using recycled packaging is…', [
          ['Improved reputation with environmentally aware customers', 'Correct.'],
          ['It always costs less', 'Not always.'],
          ['It removes legal duties', 'Laws still apply.'],
          ['It increases waste', 'It reduces waste.'],
        ], 0),
      ],
    },
  ],
};
