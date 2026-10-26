import { mc, ord, scn, calc, tfd, ao } from '../builders.js';

export const ct4 = {
  'u4-efficiency-lean': {
    cards: [
      [ao(3, calc('Factory A makes 12,000 units with 40 workers. Factory B makes 15,000 units with 60 workers. What is the labour productivity of the MORE productive factory (units per worker)?', 300, {
        unit: 'units/worker',
        formula: 'Labour productivity = output ÷ workers',
        steps: ['A: 12,000 ÷ 40 = 300', 'B: 15,000 ÷ 60 = 250', 'A is more productive even though B makes more in total.'],
      }))],
      [ao(4, mc('A firm cuts the cost per unit from $12 to $10 through efficiency. Competitors price at $13. Which is the most likely benefit?', [
        ['It can lower its price to win customers or keep the extra margin as profit', 'Correct.'],
        ['It must raise prices', 'Not required.'],
        ['Efficiency has no effect on competitiveness', 'It does.'],
        ['Costs fall but profit must fall too', 'Illogical.'],
      ], 0))],
      [ao(4, scn('A factory with unskilled workers and old machines wants to raise efficiency within 12 months. It has $200,000. Which is best-justified?', [
        ['Invest part in training and part in new equipment so workers can use it well', 'Combines the two stated weaknesses.', true],
        ['Buy equipment only and ignore training', 'Unskilled staff may waste it.', false],
      ], 'Address both causes of low efficiency.'))],
      [ao(4, mc('A clothing firm wastes 15% of fabric, holds large stock and often reworks faulty items. Which approach best addresses all three?', [
        ['Lean production: cut waste, reduce stock and prevent defects', 'Correct.'],
        ['Hold more inventory', 'Increases waste.'],
        ['Reduce training', 'Increases defects.'],
        ['Buy more fabric in bulk', 'May increase waste.'],
      ], 0))],
      [ao(4, scn('A restaurant uses just-in-time fresh ingredients. One supplier is often late, so some dishes are unavailable. Which response is best-justified?', [
        ['Keep a small buffer of critical ingredients and agree penalties or change suppliers', 'Reduces JIT’s weakness.', true],
        ['Remove all stock completely', 'Increases failures.', false],
      ], 'JIT works best with reliable suppliers and a minimal buffer.'))],
      [ao(4, mc('A factory introduces suggestion teams where operators propose small improvements monthly. After a year costs are 6% lower. Which concept is this and why does it work?', [
        ['Kaizen: continuous small improvements from those doing the job add up to large savings', 'Correct.'],
        ['JIT: it removes stock', 'Not described.'],
        ['Flow production', 'Not described.'],
        ['Job rotation', 'Not described.'],
      ], 0))],
      [ao(4, mc('A bakery sells fresh bread, a freezer-based firm sells frozen pizza. Which statement best explains why they hold different stock levels?', [
        ['Shelf life differs: fresh goods spoil quickly so little stock is held; frozen goods last longer', 'Correct.'],
        ['Bakeries have no demand', 'Not stated.'],
        ['Frozen pizza never sells', 'Not stated.'],
        ['Stock levels are chosen randomly', 'Not logical.'],
      ], 0))],
      // advantages / disadvantages cards
      [ao(4, scn('A car maker introduces JIT. Stock holding cost falls from $2m to $0.5m, but a supplier strike stops production for 3 days, losing $4m. Which assessment is best?', [
        ['JIT saves $1.5m a year but can expose the firm to large losses if supply fails, so supplier reliability is crucial', 'Uses the figures.', true],
        ['JIT is always worse', 'Not supported.', false],
      ], 'Compare savings with potential losses.'))],
      [ao(4, mc('A pharmacy holds 6 months of stock; stock costs $90,000 to hold and some expires. Demand is stable and suppliers are reliable. Which is the best-justified change?', [
        ['Reduce stock levels, since reliable suppliers and stable demand allow less buffer', 'Correct.'],
        ['Increase stock further', 'Unjustified.'],
        ['Stop ordering', 'Impossible.'],
        ['Hold only expired products', 'Illogical.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A factory’s output per worker is 280 units; the industry average is 350. Raising productivity by 25% would cost $90,000 in training and machines. Sales are 100,000 units at a $3 contribution. If the same output could be made with 20% fewer workers saving $150,000 a year, which decision is best-justified?', [
        ['Invest: the $150,000 annual saving exceeds the $90,000 one-off cost, repaying it within a year', 'Uses the numbers.', true],
        ['Do not invest because productivity does not matter', 'Contradicted by the savings.', false],
      ], 'Compare cost and payback.')),
      ao(3, calc('A business raises output from 8,000 to 9,600 units with the same 32 workers. By what percentage did labour productivity rise?', 20, {
        unit: '%',
        formula: '% change in productivity = (new − old) ÷ old × 100',
        steps: ['Old: 8,000 ÷ 32 = 250', 'New: 9,600 ÷ 32 = 300', '(300 − 250) ÷ 250 = 20%'],
      })),
      ao(4, mc('A firm adopts kaizen but managers ignore staff suggestions. What is the most likely result?', [
        ['Staff lose motivation and improvements stop', 'Correct.'],
        ['Costs fall automatically', 'Kaizen needs action on suggestions.'],
        ['Efficiency increases rapidly', 'Not without action.'],
        ['The firm becomes lean', 'Not without action.'],
      ], 0)),
      ao(3, tfd('Holding more inventory always protects a business from lost sales.', 'depends', 'It reduces stock-outs but raises storage cost and risk of obsolescence; the best level depends on demand, shelf life and supplier reliability.')),
      ao(4, mc('A retailer’s stock turnover is slow and cash is tight. Which action is best-justified?', [
        ['Reduce stock of slow sellers and adopt a leaner reorder system to free cash', 'Correct.'],
        ['Order more of everything', 'Worsens cash.'],
        ['Stop selling', 'Unjustified.'],
        ['Hold only expensive items', 'Not justified.'],
      ], 0)),
      ao(3, mc('Which pair is most likely to be linked in a chain of reasoning?', [
        ['Automation → higher output per worker → lower unit cost', 'Correct.'],
        ['Automation → higher rent → more competition', 'No link.'],
        ['Training → lower sales → less stock', 'No link.'],
        ['Stock → advertising → shareholders', 'No link.'],
      ], 0)),
      ao(4, scn('A café wants to cut waste. Option A: smaller batches baked more often (more oven use, less waste). Option B: reduce menu choice. Waste is $400 a week; Option A saves 60% but adds $60 extra energy; Option B saves 30% and may lose customers. Which is best-justified?', [
        ['Option A: net saving $180 a week and no loss of choice', '60% of $400 = $240 − $60 = $180.', true],
        ['Option B because less choice is simpler', 'Saves only $120 and risks sales.', false],
      ], 'Quantify net savings and customer impact.')),
      ao(3, mc('Which statement about lean production is best-supported?', [
        ['It aims to remove waste of time, materials and effort, and works best with skilled staff and reliable suppliers', 'Correct.'],
        ['It means holding large stocks', 'Opposite.'],
        ['It ignores quality', 'Quality is central.'],
        ['It is only for service firms', 'It applies to manufacturing too.'],
      ], 0)),
    ],
  },

  'u4-methods-technology': {
    cards: [
      [ao(4, mc('A tailor makes suits to each customer’s measurements and sells each for $1,200. Which method is it, and what is the key limitation?', [
        ['Job production; slow and costly per unit', 'Correct.'],
        ['Flow production; low unit cost', 'Not bespoke.'],
        ['Batch production; reset costs', 'Not made in groups.'],
        ['JIT; no stock', 'Not a method.'],
      ], 0))],
      [ao(4, scn('A bakery bakes 300 rolls, then 200 croissants in the same oven, then 150 loaves. Which method is this and what is a drawback?', [
        ['Batch production; time lost cleaning and resetting between batches', 'Fits the description.', true],
        ['Flow production; no flexibility', 'Not continuous.', false],
        ['Job production; one item only', 'Items made in groups.', false],
      ], 'Batch production balances variety and efficiency.'))],
      [ao(4, mc('A bottling plant produces 5 million identical bottles a year on a conveyor line with constant demand. Which method is best-justified?', [
        ['Flow production, since high volume and identical products give the lowest unit cost', 'Correct.'],
        ['Job production', 'Too slow and costly.'],
        ['Batch production with frequent changes', 'Unnecessary.'],
        ['No production method', 'Not possible.'],
      ], 0))],
      [ao(4, scn('A fashion firm will sell five seasonal designs; demand for each is uncertain. Which method is best-justified?', [
        ['Batch production: flexible runs for each design, matching output to demand', 'Fits uncertain demand.', true],
        ['Flow production of one design', 'Inflexible and risks unsold stock.', false],
      ], 'Match production to variety and uncertainty.'))],
      [ao(4, mc('A factory installs a robot costing $250,000 that replaces 5 workers earning $30,000 each. Which statement best evaluates payback?', [
        ['Savings of $150,000 a year give payback in under two years, ignoring maintenance and retraining', 'Correct: 250 ÷ 150 ≈ 1.7 years.'],
        ['The robot never pays back', 'Not supported by the figures.'],
        ['The robot saves $30,000 only', 'Five workers = $150,000.'],
        ['Payback is immediate', 'No.'],
      ], 0))],
      [ao(4, mc('A café installs contactless payments and customer wait times fall from 90 to 40 seconds. Which is the most logical benefit?', [
        ['More customers served per hour, raising revenue without extra staff', 'Correct.'],
        ['Higher wage costs', 'Not stated.'],
        ['Fewer customers', 'Opposite.'],
        ['Slower service', 'Opposite.'],
      ], 0))],
      [ao(4, tfd('New technology always benefits both a business and its employees.', 'false', 'Technology can cut cost and improve quality, but may cause job losses, need retraining and cost money.'))],
      // advantages / disadvantages cards
      [ao(4, mc('A factory moves from batch to flow production. Which statement best evaluates the change?', [
        ['Lower unit cost at high volume, but high set-up cost and less flexibility', 'Correct.'],
        ['It lowers all costs including set-up', 'Set-up is high.'],
        ['It increases flexibility', 'It reduces flexibility.'],
        ['It removes the need for maintenance', 'Maintenance matters.'],
      ], 0))],
      [ao(4, mc('A call centre introduces AI chat that handles 60% of queries. Which pair best shows the benefit for the business and the risk for employees?', [
        ['Lower cost per query; possible job losses and retraining needs', 'Correct.'],
        ['Higher cost per query; job security', 'Opposite.'],
        ['No change to either', 'Unrealistic.'],
        ['More staff needed; no risk', 'Not logical.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A furniture maker sells 400 tables a year at $900 using job production with 6 skilled workers. A competitor uses flow production to sell similar tables at $400. The firm can invest $300,000 in a production line. Which decision is best-justified?', [
        ['Move to a mixed approach: keep bespoke designs at premium prices, and introduce batch/flow for standard tables, because $400 competitors threaten the standard range', 'Uses the competitor evidence.', true],
        ['Do nothing because job production is best', 'Ignores the price threat.', false],
      ], 'Evaluate using competition and costs.')),
      ao(3, mc('Which pair of products best matches flow production and job production?', [
        ['Soft drink bottles; a custom-built yacht', 'Correct.'],
        ['A custom-built yacht; soft drink bottles', 'Reversed.'],
        ['Wedding cakes; bolts', 'Wedding cakes are job; bolts flow — reversed here.'],
        ['Bridges; matchboxes', 'Bridges job, matchboxes flow — reversed.'],
      ], 0)),
      ao(4, mc('A firm’s CAM machine breaks down for two days and the whole production line stops. Which type of production is this most likely?', [
        ['Flow production, where all stages depend on each other', 'Correct.'],
        ['Job production', 'Not all stages linked.'],
        ['Batch production only', 'Less dependent.'],
        ['None', 'Not logical.'],
      ], 0)),
      ao(3, calc('A robot costs $180,000 and saves $60,000 a year in wages but costs $12,000 a year to maintain. How many years to repay its cost from net savings?', 3.75, {
        unit: 'years',
        tol: 0.05,
        formula: 'Payback = cost ÷ annual net saving',
        steps: ['Net saving = 60,000 − 12,000 = $48,000', '180,000 ÷ 48,000 = 3.75 years'],
      })),
      ao(4, mc('Which statement best explains why 3D printing suits small, custom orders more than mass production?', [
        ['It makes unique items without costly moulds, but is slow and expensive per unit at large volume', 'Correct.'],
        ['It is the cheapest for millions of units', 'Not at scale.'],
        ['It needs no design skills', 'Designs are needed.'],
        ['It replaces all other methods', 'Not true.'],
      ], 0)),
      ao(3, tfd('A business that automates always cuts its workforce.', 'depends', 'Automation often reduces labour per unit, but growth in output and new technical roles can keep employment stable or rising.')),
      ao(4, scn('A supermarket introduces self-checkouts. Staff numbers at tills fall, but theft rises 15% and some customers struggle. Cost saving is $90,000 and theft cost is $60,000. Which assessment is best-justified?', [
        ['Net gain of $30,000, but customer service and theft control must be improved or the saving may disappear', 'Uses the figures and risks.', true],
        ['Self-checkouts are a failure', 'Net saving remains positive.', false],
      ], 'Calculate the net effect before judging.')),
      ao(3, mc('Which service-sector technology most directly raises productivity?', [
        ['Contactless payments that speed up transactions', 'Correct.'],
        ['Fewer opening hours', 'Not technology.'],
        ['Larger signs', 'Not productivity.'],
        ['Slower software', 'Reduces productivity.'],
      ], 0)),
    ],
  },

  'u4-costs-scale': {
    cards: [
      [ao(3, mc('A bakery pays $2,000 monthly rent, $1,500 salaries, $0.50 of flour per loaf and $0.10 per bag. Which costs are variable?', [
        ['Flour and bags', 'Correct: change with output.'],
        ['Rent and salaries', 'Fixed.'],
        ['All of them', 'Rent and salaries are fixed.'],
        ['None of them', 'Flour and bags vary.'],
      ], 0))],
      [ao(4, calc('Fixed costs are $20,000 and variable cost is $3 per unit. At 8,000 units, what is the average cost per unit, and what does it show about producing more?', 5.5, {
        unit: '$',
        formula: 'Average cost = (fixed + variable per unit × units) ÷ units',
        steps: ['Total cost = 20,000 + 3 × 8,000 = $44,000', 'Average = 44,000 ÷ 8,000 = $5.50', 'At 10,000 units the average would be $5.00: spreading fixed cost lowers average cost.'],
      }))],
      [ao(4, scn('Product B earns $60,000 revenue and has $48,000 variable costs. An allocated share of fixed costs ($24,000) makes it look loss-making. The fixed costs exist whatever the firm does. Which decision is best-justified?', [
        ['Keep producing it: it contributes $12,000 towards fixed costs that must be paid anyway; review long term', 'Uses contribution logic.', true],
        ['Stop it immediately because it shows a loss', 'Would lose the $12,000 contribution.', false],
      ], 'Use contribution, not allocated costs, for short-term decisions.'))],
      [ao(4, mc('A growing firm gets a 5% discount on bulk fabric and a cheaper loan from its bank. Which two economies of scale are shown?', [
        ['Purchasing and financial', 'Correct.'],
        ['Technical and managerial', 'Not described.'],
        ['Marketing and technical', 'Not described.'],
        ['None', 'Both are economies.'],
      ], 0))],
      [ao(4, mc('A company’s average cost per unit rises after it doubles its size: departments argue, decisions are slow and staff feel unimportant. Which concept does this show?', [
        ['Diseconomies of scale', 'Correct: poor communication, weak coordination and low commitment.'],
        ['Economies of scale', 'Costs would fall.'],
        ['Break-even', 'Not about size.'],
        ['Lean production', 'Not described.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A supplier offers materials at $5.00 per unit but delivers late 30% of the time, costing about $2,000 a month in stoppages. Another supplier charges $5.20 and is always on time. The firm buys 10,000 units a month. Which is best-justified?', [
        ['The reliable supplier: extra cost $2,000 equals the stoppage cost, but reliability protects customers', 'Costs are equal; reliability decides.', true],
        ['The cheaper supplier because price is always most important', 'Ignores reliability costs.', false],
      ], 'Include hidden costs in supplier decisions.')),
      ao(3, calc('Fixed costs are $30,000. Variable cost is $4 per unit. The firm makes 15,000 units. What is the total cost, and what is the average cost per unit? (Enter the average cost.)', 6, {
        unit: '$',
        formula: 'Average cost = total cost ÷ units',
        steps: ['Total = 30,000 + 4 × 15,000 = $90,000', 'Average = 90,000 ÷ 15,000 = $6'],
      })),
      ao(4, mc('Which statement best explains why average cost per unit usually falls as output rises?', [
        ['Fixed costs are spread over more units, and economies of scale may reduce variable costs', 'Correct.'],
        ['Variable costs are zero', 'They are not.'],
        ['Fixed costs rise with output', 'They do not.'],
        ['Total cost falls', 'Total cost rises.'],
      ], 0)),
      ao(3, tfd('A larger business will always have lower average costs than a smaller one.', 'false', 'Economies of scale can lower costs, but diseconomies (poor communication, weak control) can raise them.')),
      ao(4, scn('A firm’s cost data: selling price $25, variable cost $18, fixed costs $14,000. It can accept a one-off order of 3,000 units at $22 using spare capacity. Existing sales are unaffected. Which decision is best-justified?', [
        ['Accept: contribution is $4 × 3,000 = $12,000 extra profit with no extra fixed costs', 'Uses contribution.', true],
        ['Reject because $22 is below the normal price', 'Misses extra profit.', false],
      ], 'Special orders can add profit if they cover variable costs and do not damage regular sales.')),
      ao(3, mc('Which is an example of a technical economy of scale?', [
        ['Using a larger, more efficient machine that lowers cost per unit', 'Correct.'],
        ['A bulk discount on materials', 'Purchasing.'],
        ['A cheaper bank loan', 'Financial.'],
        ['Appointing a specialist manager', 'Managerial.'],
      ], 0)),
      ao(4, mc('A rapidly growing café chain finds that its average cost per coffee has risen 8% as it adds sites. Which action is best-justified?', [
        ['Improve communication and coordination between sites, since they are likely causes of diseconomies', 'Correct.'],
        ['Open more sites immediately', 'May worsen it.'],
        ['Cut quality only', 'Not addressing the cause.'],
        ['Ignore it', 'Costs keep rising.'],
      ], 0)),
      ao(3, mc('Which of these costs would rise if a firm increases output by 20%?', [
        ['Raw materials', 'Correct: variable cost.'],
        ['Annual factory rent', 'Fixed.'],
        ['Insurance', 'Fixed.'],
        ['Managers’ annual salaries', 'Fixed.'],
      ], 0)),
    ],
  },

  'u4-break-even': {
    cards: [
      [ao(3, mc('A firm’s break-even is 4,000 units. It sells 3,200. What is the most accurate description of its position?', [
        ['It is below break-even and making a loss', 'Correct.'],
        ['It is making a profit', 'Sales are below break-even.'],
        ['It has a positive margin of safety', 'Margin of safety is negative.'],
        ['It has no fixed costs', 'Not shown.'],
      ], 0))],
      [ao(3, calc('Price $30, variable cost $18, fixed costs $54,000. What is break-even output?', 4500, {
        unit: 'units',
        formula: 'Break-even = fixed costs ÷ (price − variable cost)',
        steps: ['Contribution = 30 − 18 = $12', '54,000 ÷ 12 = 4,500 units'],
      }))],
      [ao(4, calc('Break-even is 4,500 units. The firm forecasts sales of 5,400 units. What is the margin of safety, and what does it mean?', 900, {
        unit: 'units',
        formula: 'Margin of safety = actual sales − break-even sales',
        steps: ['5,400 − 4,500 = 900 units', 'Sales could fall by 900 units (about 17%) before a loss is made.'],
      }))],
      [ao(3, mc('On a break-even chart, a firm’s total cost line starts at $40,000 when output is 0. What does this show?', [
        ['Fixed costs of $40,000', 'Correct.'],
        ['Variable costs of $40,000', 'Variable costs rise with output.'],
        ['Revenue of $40,000', 'Revenue starts at zero.'],
        ['Profit of $40,000', 'No profit at zero output.'],
      ], 0))],
      [ao(4, mc('A firm’s landlord raises the factory rent by $12,000 a year. On its break-even chart, what happens?', [
        ['The total cost line starts higher and break-even output rises', 'Correct.'],
        ['Revenue line becomes steeper', 'Revenue is unaffected.'],
        ['Break-even falls', 'It rises.'],
        ['Nothing changes', 'Fixed costs enter the calculation.'],
      ], 0))],
      [ao(4, scn('A product has price $50, variable cost $30, fixed costs $60,000, and sales of 4,000. The firm considers a 10% price cut expected to raise sales to 5,000. Which decision is best-justified?', [
        ['Calculate: now profit = 20 × 4,000 − 60,000 = $20,000. At $45: contribution $15 × 5,000 − 60,000 = $15,000, so the cut reduces profit and should be rejected', 'Uses the figures.', true],
        ['Cut the price because sales rise', 'Profit falls.', false],
      ], 'Test price decisions with contribution, not sales alone.'))],
      [ao(4, mc('Break-even analysis says a restaurant needs 3,000 meals a month. Which limitation is most important if the restaurant plans to offer discounts when quiet?', [
        ['It assumes a constant price, so discounts would make the real break-even higher', 'Correct.'],
        ['It ignores fixed costs', 'It includes them.'],
        ['It cannot find break-even', 'It can.'],
        ['It guarantees profit', 'It does not.'],
      ], 0))],
      // advantages / disadvantages card
      [ao(4, mc('A start-up uses break-even analysis to obtain a loan. Which statement is best-supported?', [
        ['It shows the sales needed to avoid losses, but relies on forecasts that may be wrong', 'Correct.'],
        ['It guarantees repayment', 'No.'],
        ['It replaces market research', 'No.'],
        ['It ignores costs', 'It uses them.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('Option A: price $40, variable cost $24, fixed costs $48,000, forecast sales 3,500. Option B: price $36, variable cost $18, fixed costs $72,000, forecast sales 4,500. Which is best-justified?', [
        ['A: break-even 3,000 and profit $8,000; B: break-even 4,000 and profit $9,000 — B has slightly higher profit but a smaller margin of safety (500 vs 500) and higher fixed costs; A is lower risk', 'Both break-even and margin of safety computed; A has equal safety with lower fixed cost.', true],
        ['B because profit is higher so it is certainly best', 'Ignores risk from higher fixed costs.', false],
      ], 'Compare profit and risk using break-even and margin of safety.')),
      ao(3, calc('Price $25, variable cost $15, fixed costs $40,000. How many units must be sold to earn a profit of $10,000?', 5000, {
        unit: 'units',
        formula: 'Units = (fixed costs + target profit) ÷ contribution',
        steps: ['Contribution = $10', '(40,000 + 10,000) ÷ 10 = 5,000 units'],
      })),
      ao(4, mc('A café’s margin of safety is 150 cups a week. A new rival is expected to take 200 cups a week. What is the most likely outcome?', [
        ['The café would fall below break-even and make a loss', 'Correct: 150 − 200 = −50.'],
        ['The café stays profitable', 'The margin disappears.'],
        ['Break-even output falls', 'Not caused by this.'],
        ['Fixed costs fall', 'Not caused by this.'],
      ], 0)),
      ao(3, tfd('If a firm sells above break-even output, it is certain to make a profit next year.', 'false', 'Break-even analysis relies on constant price and costs and on sales forecasts; changes can turn a profit into a loss.')),
      ao(4, scn('A firm’s variable cost per unit rises from $10 to $12 (price $20, fixed costs $40,000). Which action is best-justified to keep the same break-even output of 4,000 units?', [
        ['Raise the price to $22, since the contribution must stay at $10', 'Contribution = 22 − 12 = $10; 40,000 ÷ 10 = 4,000.', true],
        ['Keep the price at $20', 'Break-even rises to 5,000 units.', false],
      ], 'Contribution per unit determines break-even.')),
      ao(3, calc('A firm’s break-even is 2,500 units and it sells 3,000. What is its margin of safety as a percentage of actual sales (to one decimal place)?', 16.7, {
        unit: '%',
        tol: 0.1,
        formula: 'Margin of safety % = (actual − break-even) ÷ actual × 100',
        steps: ['3,000 − 2,500 = 500', '500 ÷ 3,000 = 16.7%'],
      })),
      ao(4, mc('Which change would reduce break-even output the most, other things equal?', [
        ['Cutting fixed costs from $60,000 to $40,000 with contribution $10', 'Break-even falls from 6,000 to 4,000.'],
        ['Raising variable cost by $1', 'Raises break-even.'],
        ['Cutting price by $1', 'Raises break-even.'],
        ['Raising fixed costs by $10,000', 'Raises break-even.'],
      ], 0)),
      ao(3, mc('On a chart, the gap between actual output and break-even output (when output is higher) shows:', [
        ['The margin of safety', 'Correct.'],
        ['Total fixed cost', 'No.'],
        ['The contribution per unit', 'No.'],
        ['The variable cost', 'No.'],
      ], 0)),
    ],
  },

  'u4-quality-sustainability-location': {
    cards: [
      [ao(4, mc('A pizza chain moves to 100% recycled boxes and solar-powered ovens. Which is the best-justified benefit and cost?', [
        ['Improved reputation and lower long-run energy costs, but high set-up costs', 'Correct.'],
        ['No cost and no benefit', 'Unrealistic.'],
        ['Lower reputation', 'Opposite.'],
        ['Immediate profit increases', 'Not guaranteed.'],
      ], 0))],
      [ao(4, scn('A firm can spend $200,000 on solar panels that cut electricity costs by $30,000 a year and improve its green image. It must also repair its roof first ($40,000). Which assessment is best?', [
        ['Payback is about 8 years ($240,000 ÷ $30,000); the green image may add sales, so it is worthwhile for a long-term firm', 'Uses the figures.', true],
        ['It is worthless because payback is long', 'Ignores wider benefits.', false],
      ], 'Weigh payback and non-financial benefits.'))],
      [ao(4, mc('A restaurant’s customers complain that food is sometimes cold or wrong. Which statement shows why quality matters most?', [
        ['Poor quality leads to complaints and lost customers, harming reputation and sales', 'Correct.'],
        ['Quality has no effect on sales', 'False.'],
        ['Customers do not care about food', 'Unlikely.'],
        ['Quality only matters in factories', 'It matters everywhere.'],
      ], 0))],
      [ao(4, mc('A factory inspects only finished goods and finds 6% faulty. Which statement best explains a weakness of this approach?', [
        ['Faults are found after they are made, so materials and time are already wasted', 'Correct.'],
        ['It prevents faults at every stage', 'That is quality assurance.'],
        ['It costs nothing', 'Inspectors cost money.'],
        ['It improves staff training', 'Not its purpose.'],
      ], 0))],
      [ao(4, mc('An aircraft-parts maker trains staff, agrees standards with suppliers and checks quality at each stage. Which approach is this, and why is it appropriate?', [
        ['Quality assurance; faults could be dangerous and costly, so prevention is justified', 'Correct.'],
        ['Quality control; faults are acceptable', 'Not described.'],
        ['Kaizen only', 'Not the best label.'],
        ['JIT', 'Not described.'],
      ], 0))],
      [ao(4, scn('A low-cost mug maker with a 1% defect rate considers an expensive QA programme ($300,000). Defects cost $20,000 a year. Which choice is best-justified?', [
        ['Do not introduce the expensive programme; keep simple quality control since costs of faults are small', 'Compares cost with benefit.', true],
        ['Introduce it because quality is always worth any cost', 'Unjustified at this scale.', false],
      ], 'Match quality systems to the cost of failure.'))],
      [ao(4, mc('A steel works needs iron ore, coal and heavy transport. Which location factor is the most important, and why?', [
        ['Access to raw materials and transport, because they make up a large share of costs', 'Correct.'],
        ['Fashionable city-centre shops', 'Irrelevant.'],
        ['Tourist attractions', 'Irrelevant.'],
        ['Student housing', 'Irrelevant.'],
      ], 0))],
      [ao(4, mc('A boutique café chooses between a quiet industrial estate (rent $800) and a busy high street (rent $3,500). Which factor is the key trade-off?', [
        ['Footfall and visibility against rent', 'Correct.'],
        ['Raw material access', 'Not relevant.'],
        ['Tax holidays', 'Not stated.'],
        ['Factory space', 'Not needed.'],
      ], 0))],
      [ao(4, mc('A clothing firm compares two countries: Country A wages $900 and stable; Country B wages $350, poor roads, some unrest. Which statement is best justified?', [
        ['Lower wages in B must be weighed against delivery delays and risk of disruption', 'Correct.'],
        ['B is always better because wages are lower', 'Ignores risks.'],
        ['A is always better', 'Ignores cost.'],
        ['Wages do not matter', 'They matter.'],
      ], 0))],
      [ao(4, scn('A call-centre business can locate in a costly city centre or a cheaper town with skilled workers and fast internet. Customers never visit. Which is best-justified?', [
        ['The cheaper town: customers do not visit, so city-centre rent adds no value', 'Fits the service type.', true],
        ['The city centre because it looks good', 'Adds cost with no benefit.', false],
      ], 'Locate where costs and skills best match the business.'))],
      // advantages / disadvantages cards
      [ao(4, mc('A drug manufacturer finds that batch testing catches faults too late; one faulty batch cost $500,000 to recall. A new QA system costs $60,000. Which is the best-justified decision?', [
        ['Introduce QA, because it prevents costly recalls and protects reputation', 'Correct.'],
        ['Keep only inspection', 'Higher risk.'],
        ['Stop testing', 'Dangerous.'],
        ['Reduce quality checks to save money', 'Risky.'],
      ], 0))],
      [ao(4, mc('A garment factory’s energy bill is $400,000. Switching to renewable energy costs $1.2m and saves $100,000 a year. Which statement best evaluates the decision?', [
        ['Payback is 12 years, so it needs long-term benefits such as reputation to justify it', 'Correct.'],
        ['It pays back in 1 year', 'Miscalculated.'],
        ['It should never be done', 'Overstated.'],
        ['It has no benefits', 'Wrong.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A food factory’s customers (supermarkets) will drop it if defects exceed 1%. Defect rate is 3%. It can hire 10 extra inspectors ($240,000 a year) or improve processes and train staff ($180,000 one-off, expected to cut defects to 0.8%). Which is best-justified?', [
        ['Process improvement and training: it costs less after year one and prevents defects, meeting the 1% target', 'Compares cost and target.', true],
        ['Hire inspectors because inspection is always best', 'Does not prevent defects and costs more long term.', false],
      ], 'Prevention can beat inspection on cost and effectiveness.')),
      ao(3, calc('A firm makes 50,000 items. The defect rate is 4% and each defect wastes $6 of materials. If quality improvements cut defects to 1%, how much waste is saved?', 9000, {
        unit: '$',
        formula: 'Saving = (old defects − new defects) × cost per defect',
        steps: ['Old defects = 2,000; new = 500', 'Saved defects = 1,500', '1,500 × $6 = $9,000'],
      })),
      ao(4, mc('Which is the best-justified reason for a firm to locate its main factory near its biggest customer?', [
        ['Lower transport cost and faster, more reliable delivery', 'Correct.'],
        ['Customers like to see the factory', 'Weak reason.'],
        ['It removes all costs', 'Not true.'],
        ['The owner lives nearby', 'Not a business reason.'],
      ], 0)),
      ao(3, tfd('A business that becomes more sustainable will always lose profit.', 'depends', 'It may have high set-up costs, but can reduce energy and waste costs and improve reputation; the net effect depends on the case.')),
      ao(4, scn('A bakery’s packaging is plastic. Eco-conscious customers complain. A switch to compostable bags raises cost by $0.03 per bag; it sells 200,000 bags a year. Surveys suggest 5% more customers would buy if it switched, adding $40,000 contribution. Which is best-justified?', [
        ['Switch: extra cost is $6,000 but the expected contribution is $40,000', 'Uses figures.', true],
        ['Do not switch because costs rise', 'Ignores benefits.', false],
      ], 'Compare cost with expected benefit.')),
      ao(3, mc('Which is a service-business location factor?', [
        ['Customer footfall and accessibility', 'Correct.'],
        ['Proximity to iron ore', 'Manufacturing.'],
        ['A coal mine', 'Manufacturing.'],
        ['Port for raw cotton', 'Manufacturing.'],
      ], 0)),
      ao(4, mc('Which statement best explains why a firm would choose quality control rather than QA for a low-risk, low-cost product?', [
        ['The cost of faults is low, so simple checks may be adequate and cheaper', 'Correct.'],
        ['QA is illegal', 'Untrue.'],
        ['QC always prevents faults', 'It finds them.'],
        ['QA never works', 'Unsupported.'],
      ], 0)),
      ao(3, mc('A country’s political instability is a concern for a manufacturer. Which is the most likely effect on its location decision?', [
        ['It may reject that country despite lower wages because of risk of disruption', 'Correct.'],
        ['It ignores stability', 'A key factor.'],
        ['It chooses the unstable country automatically', 'Not logical.'],
        ['Instability lowers all costs', 'No.'],
      ], 0)),
    ],
  },
};
