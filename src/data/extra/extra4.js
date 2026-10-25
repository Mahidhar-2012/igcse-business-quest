import { mc, ord, scn, calc, tfd } from '../builders.js';

export const extra4 = {
  'u4-efficiency-lean': [
    calc('Labour productivity rises from 300 to 375 units per employee. What is the percentage increase?', 25, {
      unit: '%',
      formula: '% change = (new − old) ÷ old × 100',
      steps: ['Increase = 375 − 300 = 75', '75 ÷ 300 = 0.25', '0.25 × 100 = 25%'],
    }),
    mc('Firm A makes 9,000 units with 30 workers. Firm B makes 11,000 units with 40 workers. Which statement is correct?', [
      ['Firm A has higher labour productivity (300 vs 275 units per worker)', 'Correct: 9,000 ÷ 30 = 300; 11,000 ÷ 40 = 275.'],
      ['Firm B has higher productivity because output is greater', 'Total output is not productivity; divide by workers.'],
      ['They have the same productivity', 'They differ.'],
      ['Productivity cannot be compared', 'It can: output per employee.'],
    ], 0),
    mc('Which is an ADVANTAGE of JIT?', [
      ['Lower inventory holding costs and less waste', 'Correct.'],
      ['Protection against supplier delays', 'JIT increases exposure to delays.'],
      ['Higher storage space', 'JIT reduces it.'],
      ['Larger buffer stock', 'JIT minimises buffer stock.'],
    ], 0),
    tfd('Holding more inventory always makes a business better off.', 'depends', 'It reduces stock-outs but increases storage costs, risk of damage/obsolescence and ties up cash.'),
    mc('A requirement for lean production to work well is…', [
      ['Reliable suppliers and a skilled, flexible workforce', 'Correct.'],
      ['Large stocks of everything', 'That is the opposite.'],
      ['Ignoring staff suggestions', 'Kaizen relies on them.'],
      ['Infrequent deliveries', 'JIT needs frequent deliveries.'],
    ], 0),
  ],
  'u4-methods-technology': [
    scn('A fashion firm sells five seasonal designs. Demand for each is uncertain and varies by month.', [
      ['Flow production of one design all year', 'Inflexible; risks large unsold stock.', false],
      ['Batch production of each design in small runs', 'Flexible: can switch designs and match output to demand while keeping some unit-cost savings.', true],
    ], 'Batch production balances variety and efficiency when demand is uncertain.'),
    mc('Contactless payments improve productivity in the service sector mainly because…', [
      ['Customers are served faster, so more transactions per hour', 'Correct.'],
      ['They eliminate all staff', 'Staff are still needed.'],
      ['They increase the price of services', 'Not the mechanism.'],
      ['They reduce customer numbers', 'The opposite.'],
    ], 0),
    tfd('Flow production is very flexible and easy to change between products.', 'false', 'Flow lines are expensive and set up for one product, so they are inflexible.'),
    mc('A DISADVANTAGE of CAM (computer-aided manufacture) for employees is…', [
      ['Possible job losses and the need for retraining', 'Correct.'],
      ['Slower production', 'CAM usually speeds production.'],
      ['More errors in production', 'Usually fewer errors.'],
      ['Reduced safety', 'Usually improves safety.'],
    ], 0),
    mc('Which production method makes identical items in groups, moving through stages together?', [
      ['Batch production', 'Correct.'],
      ['Job production', 'Job is one-off items.'],
      ['Flow production', 'Flow is continuous.'],
      ['Kaizen', 'Kaizen is continuous improvement, not a method.'],
    ], 0),
  ],
  'u4-costs-scale': [
    calc('Total variable cost is $36,000 for 12,000 units. What is the variable cost per unit ($)?', 3, {
      unit: '$',
      formula: 'Variable cost per unit = total variable cost ÷ units',
      steps: ['36,000 ÷ 12,000 = $3'],
    }),
    calc('Fixed costs are $15,000 and variable cost is $2.50 per unit. What is total cost for 8,000 units ($)?', 35000, {
      unit: '$',
      formula: 'Total cost = fixed + (variable cost per unit × units)',
      steps: ['Variable = 2.50 × 8,000 = $20,000', '15,000 + 20,000 = $35,000'],
    }),
    scn('A firm needs 10,000 components. Supplier A charges $2.00 each but late deliveries cost $12,000 in lost output last year. Supplier B charges $2.30 and delivers on time.', [
      ['Choose Supplier A (cheaper unit price)', 'Saves $3,000 on price but risks $12,000 of disruption.', false],
      ['Choose Supplier B (reliable)', 'Costs $3,000 more but avoids larger disruption costs. Cost data should include hidden costs.', true],
    ], 'Cost data supports supplier choice, but reliability and quality can outweigh price.'),
    mc('Which is an example of a FINANCIAL economy of scale?', [
      ['Large firms get lower interest rates from banks', 'Correct.'],
      ['Bulk buying discounts', 'That is a purchasing economy.'],
      ['Using larger, more efficient machines', 'That is technical.'],
      ['Employing specialist managers', 'That is managerial.'],
    ], 0),
    mc('Which is a typical cause of DISECONOMIES of scale?', [
      ['Poor communication and weak coordination in a very large firm', 'Correct.'],
      ['Bulk discounts', 'That is an economy.'],
      ['Specialist managers', 'That is an economy.'],
      ['Larger machines', 'That is an economy.'],
    ], 0),
    tfd('Average cost per unit is the same as variable cost per unit.', 'false', 'Average cost includes fixed costs: total cost ÷ units.'),
  ],
  'u4-break-even': [
    calc('A product sells for $40 with variable cost of $24 per unit. Fixed costs are $48,000. What is break-even output (units)?', 3000, {
      unit: 'units',
      formula: 'Break-even = fixed costs ÷ (price − variable cost per unit)',
      steps: ['Contribution = 40 − 24 = $16', '48,000 ÷ 16 = 3,000 units'],
    }),
    calc('Using the same figures, the firm sells 3,500 units. What is the margin of safety (units)?', 500, {
      unit: 'units',
      formula: 'Margin of safety = actual sales − break-even sales',
      steps: ['3,500 − 3,000 = 500 units'],
    }),
    calc('Still using the same figures, what is profit when 3,500 units are sold ($)?', 8000, {
      unit: '$',
      formula: 'Profit = (contribution per unit × units) − fixed costs',
      steps: ['16 × 3,500 = $56,000', '56,000 − 48,000 = $8,000', 'Check: 500 units above break-even × $16 = $8,000'],
    }),
    calc('Variable cost rises to $28 (price still $40, fixed costs $48,000). What is the NEW break-even output (units)?', 4000, {
      unit: 'units',
      formula: 'Break-even = fixed costs ÷ new contribution',
      steps: ['New contribution = 40 − 28 = $12', '48,000 ÷ 12 = 4,000 units', 'Higher variable cost → higher break-even'],
    }),
    scn('A firm with spare capacity (price $40, variable cost $24) is offered a one-off order of 1,000 units at $30 each.', [
      ['Reject it because $30 is below the usual price', 'Misses $6,000 of extra contribution (1,000 × $6).', false],
      ['Accept it', 'Contribution per unit is $6, so profit rises by $6,000 if it does not damage normal sales or the brand.', true],
    ], 'With spare capacity, an order covering variable costs adds to profit. Consider the risk of lowering price expectations.'),
    mc('A limitation of break-even analysis is…', [
      ['It assumes all output is sold and costs and prices stay constant', 'Correct.'],
      ['It cannot calculate output', 'It can.'],
      ['It ignores fixed costs', 'Fixed costs are central.'],
      ['It guarantees profit', 'It only shows the point of no profit/loss.'],
    ], 0),
  ],
  'u4-quality-sustainability-location': [
    mc('A DISADVANTAGE of quality control (inspection) is that…', [
      ['Faults are found after production, so waste has already occurred', 'Correct.'],
      ['It prevents faults from arising', 'That is quality assurance.'],
      ['It needs no staff', 'Inspectors are needed.'],
      ['It improves worker training automatically', 'Not its role.'],
    ], 0),
    scn('A call-centre business must choose between a costly city-centre office and a cheaper town with a skilled local workforce and good broadband.', [
      ['City centre', 'High rent with no customer footfall needed — wasteful for a call centre.', false],
      ['The cheaper town', 'Lower rent and skilled labour; customers never visit, so location matters little for sales.', true],
    ], 'Service businesses that do not need customers on site can locate where costs and skills are best.'),
    mc('Which is a factor in choosing which COUNTRY to locate in?', [
      ['Political stability, wage levels and skills', 'Correct.'],
      ['Colour of the logo', 'Irrelevant.'],
      ['The owner’s favourite holiday', 'Irrelevant.'],
      ['Name of the product', 'Irrelevant.'],
    ], 0),
    tfd('A factory should always be located next to its raw materials.', 'depends', 'Matters for heavy/bulky inputs, but labour, transport and markets can matter more.'),
    mc('A DISADVANTAGE of switching to renewable energy is…', [
      ['High initial installation costs', 'Correct.'],
      ['Worse reputation', 'It usually improves it.'],
      ['Higher carbon emissions', 'It reduces them.'],
      ['It is illegal', 'It is encouraged.'],
    ], 0),
    mc('Why is quality important to a business?', [
      ['Reduces returns and builds reputation and customer loyalty', 'Correct.'],
      ['It lets the firm ignore customers', 'The opposite.'],
      ['It always lowers costs immediately', 'Quality can cost more at first.'],
      ['It is only needed for exporters', 'Needed by all.'],
    ], 0),
  ],
};
