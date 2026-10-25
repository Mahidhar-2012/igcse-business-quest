import { mc, ord, scn, calc, tfd, card } from '../builders.js';

export const cards4 = {
  'u4-efficiency-lean': [
    card('Labour productivity', [
      '**Labour productivity = output per period ÷ number of employees** (units per employee).',
      'Higher productivity = more output per worker.',
    ],
      calc('A firm makes 5,000 units a month with 20 employees. What is labour productivity (units per employee)?', 250, {
        unit: 'units/employee',
        formula: 'Labour productivity = output ÷ employees',
        steps: ['5,000 ÷ 20 = 250 units per employee'],
      })),
    card('Why efficiency matters', [
      'Efficient firms use **fewer resources per unit**: lower costs, lower prices or higher profit, less waste, better competitiveness.',
    ],
      mc('Which is a benefit of greater efficiency?', [
        ['Lower cost per unit', 'Correct.'],
        ['More waste', 'Opposite.'],
        ['Higher cost per unit', 'Opposite.'],
        ['Fewer sales', 'Not a benefit.'],
      ], 0)),
    card('How to increase efficiency', [
      '**Automation and technology**, **training to improve labour skills**, better layout, better equipment and motivated staff.',
    ],
      mc('Which is a way to improve efficiency?', [
        ['Train workers and use more automation', 'Correct.'],
        ['Cut maintenance of machines to zero', 'Likely more breakdowns.'],
        ['Hire unskilled workers only', 'Unlikely to help.'],
        ['Stop using technology', 'Unlikely to help.'],
      ], 0)),
    card('Lean production', [
      '**Lean production** cuts **waste** of time, materials and space.',
      'Two main methods: **just-in-time (JIT)** and **Kaizen**.',
    ],
      mc('What is the main aim of lean production?', [
        ['Reduce waste', 'Correct.'],
        ['Increase stock levels', 'Opposite.'],
        ['Make more defects', 'Opposite.'],
        ['Raise costs', 'Opposite.'],
      ], 0)),
    card('Just-in-time (JIT)', [
      'Materials and components arrive **exactly when needed**.',
      '+ Low stock, less storage space, less waste, cash not tied up in stock.',
      '− Late deliveries stop production; no buffer for sudden demand; frequent ordering.',
    ],
      mc('A major risk of JIT is…', [
        ['Supplier delays stop production', 'Correct.'],
        ['High storage costs', 'JIT reduces storage.'],
        ['Too much stock', 'JIT minimises it.'],
        ['Obsolete stock', 'JIT reduces this.'],
      ], 0)),
    card('Kaizen', [
      '**Kaizen** = continuous improvement through many small changes suggested by all employees (often in teams).',
      '+ Motivates staff, lowers costs, improves quality. − Slow results; needs commitment and training.',
    ],
      mc('Kaizen involves…', [
        ['Small continuous improvements by all employees', 'Correct.'],
        ['One big change from top managers', 'Not Kaizen.'],
        ['Holding large stocks', 'Not Kaizen.'],
        ['Stopping suggestions', 'Opposite.'],
      ], 0)),
    card('Holding inventory', [
      'Why: meet demand, avoid **stock-outs**, bulk-buy discounts, keep production flowing.',
      'Amount depends on **shelf life, storage costs, demand patterns, supplier reliability, cash available**.',
    ],
      mc('Which firm should hold the LEAST stock?', [
        ['A bakery selling fresh bread', 'Correct: short shelf life.'],
        ['A tinned-food factory', 'Long shelf life.'],
        ['A firm with unreliable suppliers', 'Holds more.'],
        ['A firm expecting a seasonal peak', 'Holds more.'],
      ], 0)),
  ],

  'u4-methods-technology': [
    card('Job production', [
      'One-off, made to order (wedding dress, bridge, bespoke furniture).',
      '+ Unique, high prices, flexible, high quality. − Slow, skilled and expensive labour, high unit cost.',
    ],
      mc('Which is made by job production?', [
        ['A custom-built yacht', 'Correct.'],
        ['Bottles of water', 'Flow.'],
        ['Standard phone cases', 'Flow/batch.'],
        ['Bread rolls in groups', 'Batch.'],
      ], 0)),
    card('Batch production', [
      'Products made in **groups (batches)**, each stage completed for the whole batch (bakery, clothing).',
      '+ Flexible, some efficiency, can change products between batches. − Machines must be reset, work-in-progress storage, idle time.',
    ],
      mc('A bakery bakes 200 loaves, then 150 cakes with the same oven. This is…', [
        ['Batch production', 'Correct.'],
        ['Job production', 'One-off items.'],
        ['Flow production', 'Continuous.'],
        ['JIT', 'Inventory method.'],
      ], 0)),
    card('Flow production', [
      '**Continuous**, often automated production of identical products on a line (cars, bottles).',
      '+ Lowest unit cost, high output, consistent quality. − Very high set-up cost, inflexible, boring work, breakdowns stop the whole line.',
    ],
      mc('A disadvantage of flow production is…', [
        ['High set-up cost and lack of flexibility', 'Correct.'],
        ['Very high unit cost', 'Lowest unit cost.'],
        ['It only suits one-off goods', 'Suits identical goods.'],
        ['Slow output', 'High output.'],
      ], 0)),
    card('Recommending a production method', [
      'Consider **demand level, variety, customer needs, finance and skills**.',
      'One-off bespoke → **job**. Several varied products in groups → **batch**. Large, steady demand for identical goods → **flow**.',
    ],
      scn('A firm expects steady demand for 2 million identical plastic bottles a year.', [
        ['Flow production', 'High volume and identical items give the lowest unit cost.', true],
        ['Job production', 'Far too slow and costly.', false],
      ], 'Match production method to volume and variety.')),
    card('How technology is changing production', [
      '**Automation** (machines do tasks without people), **mechanisation** (machines assist workers), **CAM** (computer-aided manufacture), **robots**, **3D printing** (prototypes and custom items).',
    ],
      mc('Using a computer to control machines in manufacturing is…', [
        ['Computer-aided manufacture (CAM)', 'Correct.'],
        ['Job rotation', 'HR.'],
        ['Penetration pricing', 'Pricing.'],
        ['Franchising', 'Business form.'],
      ], 0)),
    card('Technology in the service sector', [
      'Examples: **contactless payments**, self-checkouts, online booking, apps.',
      'They speed up service, so **more customers are served per hour** and productivity rises.',
    ],
      mc('Contactless payments mainly improve productivity by…', [
        ['Making each transaction faster', 'Correct.'],
        ['Removing all customers', 'No.'],
        ['Increasing prices', 'No.'],
        ['Slowing queues', 'Opposite.'],
      ], 0)),
    card('Pros and cons of technology', [
      '**Business** +: speed, consistency, lower unit costs, 24/7 production. −: high capital cost, breakdowns, retraining.',
      '**Employees** +: safer, less boring work, new skills. −: **job losses**, retraining needed.',
    ],
      tfd('New technology always benefits both businesses and employees equally.', 'false', 'Businesses may gain efficiency, but some employees lose jobs or need retraining.')),
  ],

  'u4-costs-scale': [
    card('Fixed and variable costs', [
      '**Fixed costs** stay the same whatever the output (rent, salaries, insurance).',
      '**Variable costs** change with output (raw materials, packaging, piece-rate wages).',
    ],
      mc('Which is a VARIABLE cost?', [
        ['Raw materials', 'Correct.'],
        ['Factory rent', 'Fixed.'],
        ['Insurance', 'Fixed.'],
        ['Manager’s annual salary', 'Fixed.'],
      ], 0)),
    card('Total cost and average cost', [
      '**Total cost = fixed costs + total variable costs**.',
      '**Total variable cost = variable cost per unit × units**.',
      '**Average cost = total cost ÷ number of units**.',
    ],
      calc('Fixed costs are $10,000 and variable cost is $3 per unit. What is total cost for 2,000 units ($)?', 16000, {
        unit: '$',
        formula: 'Total cost = fixed costs + (variable cost per unit × units)',
        steps: ['Variable = 3 × 2,000 = $6,000', '10,000 + 6,000 = $16,000'],
      })),
    card('Using cost data for decisions', [
      'Cost information helps decide **which product to make, whether to continue or stop production, what price to set, and which supplier to choose**.',
      'Compare revenue with variable costs (does it contribute?) and total costs (does it make a profit?).',
    ],
      mc('A product covers its variable costs and contributes to fixed costs that exist anyway. Should it be stopped immediately?', [
        ['No — it still contributes to fixed costs (review longer term)', 'Correct.'],
        ['Yes, always', 'Losing the contribution makes things worse.'],
        ['Yes, because it has fixed costs', 'Fixed costs remain anyway.'],
        ['Only if sales are high', 'Not logical.'],
      ], 0)),
    card('Economies of scale', [
      'Average cost **falls** as output rises, because of:',
      '**Purchasing** (bulk discounts), **marketing** (spread adverts), **financial** (cheaper loans), **managerial** (specialist managers), **technical** (larger, efficient machines).',
    ],
      mc('Employing specialist managers as a firm grows is a…', [
        ['Managerial economy of scale', 'Correct.'],
        ['Purchasing economy', 'Bulk discounts.'],
        ['Technical economy', 'Machines.'],
        ['Financial economy', 'Cheaper loans.'],
      ], 0)),
    card('Diseconomies of scale', [
      'Average cost **rises** when a firm is too big, because of **poor communication, lack of commitment/loyalty from employees, weak coordination, lack of control**.',
    ],
      mc('Which is a cause of diseconomies of scale?', [
        ['Weak coordination between many departments', 'Correct.'],
        ['Bulk-buying discounts', 'Economy.'],
        ['Cheaper bank loans', 'Economy.'],
        ['Larger machines', 'Economy.'],
      ], 0)),
  ],

  'u4-break-even': [
    card('The concept of break-even', [
      '**Break-even** is the output where **total revenue = total costs**: no profit and no loss.',
      'Above break-even output → profit; below → loss.',
    ],
      mc('At the break-even point…', [
        ['Total revenue equals total cost', 'Correct.'],
        ['Profit is maximum', 'Not necessarily.'],
        ['Fixed costs are zero', 'Never.'],
        ['The firm has no sales', 'Not so.'],
      ], 0)),
    card('Contribution and break-even output', [
      '**Contribution per unit = selling price − variable cost per unit**.',
      '**Break-even output = fixed costs ÷ contribution per unit**.',
    ],
      calc('Price $12, variable cost $7 per unit, fixed costs $20,000. What is break-even output (units)?', 4000, {
        unit: 'units',
        formula: 'Break-even = fixed costs ÷ (price − variable cost)',
        steps: ['Contribution = 12 − 7 = $5', '20,000 ÷ 5 = 4,000 units'],
      })),
    card('Margin of safety', [
      '**Margin of safety = actual sales − break-even sales**.',
      'It shows how far sales could fall before a loss is made.',
    ],
      calc('Break-even is 4,000 units. Actual sales are 5,000 units. What is the margin of safety (units)?', 1000, {
        unit: 'units',
        formula: 'Margin of safety = actual sales − break-even sales',
        steps: ['5,000 − 4,000 = 1,000 units'],
      })),
    card('The break-even chart', [
      'Axes: **output** (x) and **costs/revenue** ($, y).',
      '**Fixed cost line**: horizontal. **Total cost line**: starts at the fixed cost level and rises. **Revenue line**: starts at zero and rises more steeply.',
      '**Break-even** = where revenue crosses total cost. Loss to the left, profit to the right; margin of safety = gap between actual output and break-even.',
    ],
      mc('On a break-even chart, which line starts at the origin (zero)?', [
        ['Total revenue', 'Correct: no sales, no revenue.'],
        ['Total cost', 'Starts at fixed costs.'],
        ['Fixed cost', 'Starts at fixed costs.'],
        ['Margin of safety', 'Not a line.'],
      ], 0)),
    card('Completing or amending a chart', [
      '**Price rises** → revenue line steeper → break-even moves left (lower).',
      '**Fixed costs rise** → cost line starts higher → break-even moves right (higher).',
      '**Variable cost per unit rises** → total cost line steeper → break-even higher.',
    ],
      mc('A firm’s fixed costs rise. What happens to break-even output?', [
        ['It rises', 'Correct.'],
        ['It falls', 'Opposite.'],
        ['It stays the same', 'Fixed costs enter the formula.'],
        ['It becomes zero', 'No.'],
      ], 0)),
    card('Using break-even to make decisions', [
      'Test **what if** the price changes, fixed costs change or variable cost per unit changes.',
      'Useful for pricing, new-product decisions and loan applications.',
    ],
      mc('A firm raises its price but costs stay the same. What happens to break-even output?', [
        ['It falls', 'Correct: higher contribution per unit.'],
        ['It rises', 'Opposite.'],
        ['It stays the same', 'Contribution changes.'],
        ['It is unaffected by price', 'Price affects contribution.'],
      ], 0)),
    card('Limitations of break-even analysis', [
      'Assumes **all output is sold**, prices and variable costs per unit **stay constant** (no bulk discounts), ignores changes in demand, and is only as accurate as the data.',
    ],
      tfd('Break-even analysis guarantees that a firm will make a profit.', 'false', 'It only shows the no-profit-no-loss point, based on assumptions that may not hold.')),
  ],

  'u4-quality-sustainability-location': [
    card('Sustainable production', [
      'Ways: **renewable energy, fewer resources and less waste, reusing, recycling, eco-friendly products, eco-friendly packaging**.',
    ],
      mc('Which is a way a business can be more sustainable?', [
        ['Using solar power and recycling waste', 'Correct.'],
        ['Using more raw materials', 'Less sustainable.'],
        ['Ignoring waste', 'Less sustainable.'],
        ['Using more plastic packaging', 'Less sustainable.'],
      ], 0)),
    card('Advantages and disadvantages of sustainability', [
      '+ Better **reputation**, more customers, lower waste/energy costs, meets laws.',
      '− Higher **set-up costs**, new equipment, prices may rise.',
    ],
      mc('A disadvantage of switching to sustainable production is…', [
        ['Higher initial costs', 'Correct.'],
        ['Worse reputation', 'Usually better.'],
        ['Higher pollution', 'Lower pollution.'],
        ['Fewer legal compliance', 'Helps compliance.'],
      ], 0)),
    card('What quality means', [
      'Quality = products that are **fit for purpose** and meet customer expectations.',
      'Good quality means fewer returns, stronger reputation and loyal customers.',
    ],
      mc('Why is quality important for a business?', [
        ['It protects reputation and reduces returns', 'Correct.'],
        ['It lets firms ignore customers', 'No.'],
        ['It always lowers costs immediately', 'Not necessarily.'],
        ['It is only for exporters', 'Needed by all.'],
      ], 0)),
    card('Quality control', [
      '**Quality control** = inspecting and testing products during/after production to **find defects**.',
      '+ Catches faulty goods before customers get them. − Costly (inspectors), waste from rejected items, faults already made.',
    ],
      mc('Quality control mainly…', [
        ['Checks products to find defects', 'Correct.'],
        ['Prevents defects at every stage', 'That is quality assurance.'],
        ['Sets prices', 'No.'],
        ['Hires staff', 'No.'],
      ], 0)),
    card('Quality assurance', [
      '**Quality assurance** = systems that **prevent** defects at every stage (training, agreed standards, supplier checks).',
      '+ Less waste, customer trust, fewer returns. − Training and system costs, takes time to set up.',
    ],
      mc('Quality assurance focuses on…', [
        ['Preventing faults throughout production', 'Correct.'],
        ['Only checking finished goods', 'That is quality control.'],
        ['Reducing staff training', 'Needs training.'],
        ['Ignoring customers', 'No.'],
      ], 0)),
    card('Recommending QC or QA', [
      'Where defects are dangerous or very costly (medical devices, aircraft) → **quality assurance**.',
      'Simple, low-cost goods where final checks are enough → **quality control** may be adequate.',
    ],
      scn('A firm makes aircraft parts where one fault could cost lives.', [
        ['Quality assurance throughout production', 'Prevents faults at every stage.', true],
        ['Only inspect a sample at the end', 'Too risky for safety-critical parts.', false],
      ], 'High-risk products justify prevention.')),
    card('Location: manufacturing businesses', [
      'Factors: **cost of land, labour supply and skills, transport links, raw materials, closeness to customers, government incentives**.',
    ],
      mc('A heavy-steel factory would most likely locate close to…', [
        ['Raw materials and good transport links', 'Correct.'],
        ['City-centre shops', 'Not needed.'],
        ['Tourist attractions', 'Not relevant.'],
        ['Universities only', 'Not relevant.'],
      ], 0)),
    card('Location: service businesses', [
      'Factors: **customers/footfall, accessibility, rent, parking, competitors**.',
      'Online services can locate wherever costs and skills suit best.',
    ],
      mc('A café’s most important location factor is probably…', [
        ['Footfall (passing customers)', 'Correct.'],
        ['Distance from raw materials', 'Not key.'],
        ['Cheap factory land', 'Not relevant.'],
        ['Export tax incentives', 'Not relevant.'],
      ], 0)),
    card('Choosing a country for operations', [
      'Factors: **wage levels, skills, political stability, taxes, infrastructure, exchange rates, access to markets, laws**.',
    ],
      mc('Which factor matters when choosing which country to locate in?', [
        ['Political stability and labour costs', 'Correct.'],
        ['The owner’s favourite sport', 'No.'],
        ['The colour of the logo', 'No.'],
        ['Staff birthdays', 'No.'],
      ], 0)),
    card('Recommending a location', [
      'Weigh several factors and **justify**. Cheaper labour abroad may be offset by transport costs, lower skills or instability.',
    ],
      scn('A clothing firm compares a home site (higher wages, skilled workers, close to customers) with an overseas site (much lower wages, little training, long shipping).', [
        ['Compare total costs, skills and delivery time before deciding', 'Balanced decision using all factors.', true],
        ['Always choose the cheapest wages', 'Ignores quality, delivery and hidden costs.', false],
      ], 'Justify location with several factors, not one.')),
  ],
};
