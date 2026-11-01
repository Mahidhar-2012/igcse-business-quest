import { mc, multi, match, cloze, short, ao } from '../builders.js';

// Unit 4 (Operations management): harder replacements and extra question types.

export const h4 = {
  replace: {
    // ---------- Efficiency and lean production ----------
    'u4-efficiency-lean:2': ao(4, mc('A firm adopts kaizen but managers ignore the suggestions staff make. What is the most likely result?', [
      ['Staff lose motivation and the stream of improvements dries up', 'Correct: kaizen depends on the ideas of the people doing the work.'],
      ['Staff become more motivated because they no longer have extra duties', 'Ignored ideas demotivate people.'],
      ['Waste falls anyway because managers are now in complete control', 'Kaizen relies on staff input.'],
      ['Output per worker rises because decisions are made by fewer people', 'No reason to expect this.'],
    ], 0)),
    'u4-efficiency-lean:4': ao(4, mc('A retailer’s stock turnover is slow and cash is tight. Which action is best justified?', [
      ['Cut stock of slow sellers and reorder more often in smaller amounts', 'Correct: frees cash tied up in stock.'],
      ['Order larger batches of every product to get bigger bulk discounts', 'Ties up even more cash.'],
      ['Stop selling the fast-selling lines so that stock levels stay stable', 'Fast sellers earn the cash.'],
      ['Hold the same stock but raise the shop’s prices on all products', 'Does not fix cash tied up in stock.'],
    ], 0)),
    'u4-efficiency-lean:5': ao(3, mc('Which chain of reasoning is the most logical?', [
      ['Automation, then higher output per worker, then lower unit cost', 'Correct.'],
      ['Higher unit cost, then lower prices, then higher output per worker', 'Illogical order.'],
      ['Lower output per worker, then automation, then higher unit cost', 'Illogical order.'],
      ['Waste rises, then productivity improves, then costs fall at once', 'Illogical order.'],
    ], 0)),
    'u4-efficiency-lean:7': ao(3, mc('Which statement about lean production is best supported?', [
      ['It aims to remove waste of time, materials and effort without lowering quality', 'Correct.'],
      ['It aims to hold large stocks so that every order can be met at once', 'That is the opposite.'],
      ['It aims to raise the number of workers until all tasks are done twice', 'That adds waste.'],
      ['It aims to make as many goods as possible whether or not they are sold', 'Overproduction is waste.'],
    ], 0)),
    'u4-efficiency-lean:c1.0': ao(4, mc('A firm cuts its unit cost from $12 to $10 through efficiency. Rivals sell at $13. Which statement is most useful?', [
      ['It could cut its price to win customers or keep the wider margin', 'Correct: the saving gives it options.'],
      ['It must keep the price at $13, because customers will not accept less', 'Not true; it can choose.'],
      ['It must now raise the price above $13, since costs have fallen', 'Unrelated.'],
      ['It must reduce the quality of the product so that costs fall further', 'Not necessary.'],
    ], 0)),
    'u4-efficiency-lean:c3.0': ao(4, mc('A clothing firm wastes 15% of its fabric, holds large stock and often reworks faulty items. Which approach addresses all three?', [
      ['Lean production: cut waste, reduce stock and prevent defects', 'Correct.'],
      ['Mass marketing: advertise more widely to raise the sales of all stock', 'Does not fix waste.'],
      ['Price skimming: raise prices so that fewer items need to be made', 'Not an operations fix.'],
      ['Job production: make every garment to order using skilled tailors', 'Not designed to remove all three.'],
    ], 0)),
    'u4-efficiency-lean:c5.0': ao(3, mc('A factory sets up teams where operators suggest small improvements monthly, and after a year costs are down 6%. Which approach is this?', [
      ['Kaizen: continuous small improvements from those doing the job', 'Correct.'],
      ['Just-in-time: parts arrive exactly when they are needed on the line', 'Not described.'],
      ['Flow production: a continuous line making identical goods all day', 'Not described.'],
      ['Benchmarking: copying the best practice of a leading rival firm', 'Not described.'],
    ], 0)),
    'u4-efficiency-lean:c6.0': ao(4, mc('A bakery sells fresh bread; a firm sells frozen pizza. Which statement best explains why their stock levels differ?', [
      ['Shelf life differs: fresh bread spoils quickly, so little stock can be held', 'Correct.'],
      ['The bakery has no costs of holding stock, so it holds a lot of bread', 'It has costs and spoilage.'],
      ['Frozen pizza sells faster than bread, so pizza stocks are always low', 'Not stated.'],
      ['The law forbids bakeries from keeping any stock of products overnight', 'No such law.'],
    ], 0)),
    'u4-efficiency-lean:c8.0': ao(4, mc('A pharmacy holds six months of stock, costing $90,000 to hold, and some expires. Demand is stable and suppliers are reliable. Which action is best justified?', [
      ['Cut stock levels, since stable demand and reliable suppliers make big stocks unnecessary', 'Correct.'],
      ['Hold even more stock, since expired items prove that stocks are too low', 'Expiry shows the opposite.'],
      ['Change suppliers every month, to keep prices as low as possible', 'Not related.'],
      ['Keep the same stock, since holding costs do not affect a pharmacy', 'They do.'],
    ], 0)),

    // ---------- Production methods and technology ----------
    'u4-methods-technology:1': ao(3, mc('Which pair of products best matches flow production and job production in that order?', [
      ['Soft-drink bottles, then a custom-built yacht', 'Correct: identical high volume, then a one-off.'],
      ['A custom-built yacht, then soft-drink bottles', 'Reversed.'],
      ['Wedding cakes made to order, then a custom-built yacht', 'Both are job production.'],
      ['Soft-drink bottles, then identical plastic buckets', 'Both are flow production.'],
    ], 0)),
    'u4-methods-technology:2': ao(4, mc('A firm’s machine breaks down for two days and the whole line stops. Which type of production is this most typical of?', [
      ['Flow production, where all the stages depend on one another', 'Correct.'],
      ['Job production, where each product is made separately by hand', 'A breakdown affects only that job.'],
      ['Batch production, where each batch is independent of the next', 'Less affected.'],
      ['Craft production, where a single person makes each item', 'Less affected.'],
    ], 0)),
    'u4-methods-technology:4': ao(4, mc('Which statement best explains why 3D printing suits small custom orders more than mass production?', [
      ['It makes unique items without costly moulds, but it is slow and costly for volume', 'Correct.'],
      ['It makes millions of identical items cheaply, which suits custom orders', 'It is slow for volume.'],
      ['It needs no electricity or materials, so each unique item is cheap', 'It uses both.'],
      ['It always makes goods of lower quality than traditional methods', 'Not stated.'],
    ], 0)),
    'u4-methods-technology:7': ao(3, mc('Which service-sector technology most directly raises productivity?', [
      ['Contactless payments that speed up each transaction', 'Correct.'],
      ['A larger sign above the shop door to attract attention', 'Not productivity.'],
      ['A new logo on all staff uniforms and paper bags', 'Not productivity.'],
      ['A softer chair in the staff room for use at break times', 'Not productivity.'],
    ], 0)),
    'u4-methods-technology:c0.0': ao(3, mc('A tailor makes suits to each customer’s measurements, selling each for $1,200. Which method is it, and what is the trade-off?', [
      ['Job production, which is slow and costly per unit but meets individual needs', 'Correct.'],
      ['Flow production, which is quick and cheap per unit but cannot be tailored', 'Not flow.'],
      ['Batch production, which is flexible and cheap but gives uniform products', 'Not batch.'],
      ['Mass production, which is slow and costly per unit but highly standard', 'Wrong trade-off.'],
    ], 0)),
    'u4-methods-technology:c2.0': ao(3, mc('A plant makes five million identical bottles a year on a conveyor line with steady demand. Which method fits best, and why?', [
      ['Flow production, since high volume and identical products give a low cost per unit', 'Correct.'],
      ['Job production, since each bottle needs its own design and skilled worker', 'Not fitting.'],
      ['Batch production, since different bottles are made in small groups', 'Not fitting.'],
      ['Craft production, since the skill of one worker gives the lowest unit cost', 'Not fitting.'],
    ], 0)),
    'u4-methods-technology:c4.0': ao(4, mc('A factory buys a $250,000 robot to replace five workers paid $30,000 each. Which evaluation is best?', [
      ['It saves $150,000 a year, so it pays back in under two years, but jobs are lost', 'Correct: 250,000 ÷ 150,000 ≈ 1.7 years.'],
      ['It saves $30,000 a year, so it takes over eight years to pay back its cost', 'Only one worker’s pay.'],
      ['It saves $250,000 a year, so it pays back in the first year of use', 'Mixes up cost and saving.'],
      ['It saves nothing, because the robot costs more than the workers do', 'Compares the wrong totals.'],
    ], 0)),
    'u4-methods-technology:c5.0': ao(3, mc('A café adds contactless payment and the wait falls from 90 to 40 seconds. What is the most logical effect?', [
      ['More customers served per hour, so revenue rises without extra staff', 'Correct.'],
      ['Fewer customers served per hour, as the new system costs more time', 'It saves time.'],
      ['Higher wage costs, since contactless needs a larger number of staff', 'No reason.'],
      ['Lower quality of the coffee, because speed always reduces its taste', 'Not related.'],
    ], 0)),
    'u4-methods-technology:c7.0': ao(4, mc('A factory moves from batch to flow production. Which evaluation is best?', [
      ['Lower unit cost at high volume, but high set-up cost and less flexibility', 'Correct.'],
      ['Higher unit cost at high volume, but lower set-up cost and more flexibility', 'Reversed.'],
      ['Lower unit cost at low volume, but higher set-up cost and more flexibility', 'Flow is not flexible.'],
      ['The same unit cost at every volume, and lower set-up cost', 'Not true.'],
    ], 0)),
    'u4-methods-technology:c8.0': ao(4, mc('A call centre adds an AI chat tool that handles 60% of queries. Which pair best shows a benefit and a cost for the business?', [
      ['Lower cost per query; possible job losses and retraining needs', 'Correct.'],
      ['Higher cost per query; certain job growth with no retraining needs', 'Reversed.'],
      ['Lower cost per query; no effect on customers or on staff at all', 'Unlikely.'],
      ['Faster service for customers; an increase in the number of queries', 'Not a cost.'],
    ], 0)),

    // ---------- Costs and economies of scale ----------
    'u4-costs-scale:2': ao(4, mc('Which statement best explains why the average cost per unit usually falls as output rises?', [
      ['Fixed costs are spread over more units, and economies of scale may also apply', 'Correct.'],
      ['Variable costs per unit always fall to zero when output is high enough', 'They do not.'],
      ['Fixed costs fall in total whenever the firm produces more goods', 'Fixed in total.'],
      ['The selling price rises, which makes each unit cheaper to produce', 'Price is not cost.'],
    ], 0)),
    'u4-costs-scale:5': ao(3, mc('Which is an example of a technical economy of scale?', [
      ['A larger, more efficient machine that lowers the cost per unit', 'Correct.'],
      ['A bulk discount on raw materials from a large supplier', 'Purchasing economy.'],
      ['A cheaper bank loan because the firm has become larger', 'Financial economy.'],
      ['A specialist manager hired to run the sales department', 'Managerial economy.'],
    ], 0)),
    'u4-costs-scale:6': ao(4, mc('A café chain finds its average cost per coffee has risen 8% as it opens more sites. Which action is best justified?', [
      ['Improve communication and coordination between sites to reduce diseconomies', 'Correct.'],
      ['Open still more sites at once, so that costs are spread more widely', 'Likely to worsen it.'],
      ['Cut staff training at all sites, since training only adds cost', 'Would harm quality.'],
      ['Stop buying coffee beans in bulk, since size makes it more costly', 'Bulk buying lowers cost.'],
    ], 0)),
    'u4-costs-scale:7': ao(2, mc('A firm raises output by 20%. Which cost will rise?', [
      ['Raw materials', 'Correct: a variable cost.'],
      ['Factory rent', 'Fixed.'],
      ['Insurance for the building', 'Fixed.'],
      ['Annual salary of the managing director', 'Fixed.'],
    ], 0)),
    'u4-costs-scale:c0.0': ao(3, mc('A bakery pays $2,000 monthly rent, $1,500 salaries, $0.50 of flour per loaf and $0.10 per bag. Which costs are variable?', [
      ['Flour and bags', 'Correct: change with the number of loaves.'],
      ['Rent and salaries', 'Fixed.'],
      ['Flour and rent', 'Rent is fixed.'],
      ['Bags and salaries', 'Salaries are fixed.'],
    ], 0)),
    'u4-costs-scale:c3.0': ao(3, mc('A growing firm gets a 5% discount on bulk fabric and a cheaper bank loan. Which two economies of scale are these?', [
      ['Purchasing and financial', 'Correct.'],
      ['Technical and managerial', 'Not described.'],
      ['Marketing and risk-bearing', 'Not described.'],
      ['Managerial and purchasing', 'Only one matches.'],
    ], 0)),
    'u4-costs-scale:c4.0': ao(3, mc('A company’s average cost per unit rises after it doubles in size: departments argue, decisions are slow and staff feel distant. What is this?', [
      ['Diseconomies of scale', 'Correct.'],
      ['Economies of scale', 'These lower unit costs.'],
      ['Increasing returns to labour', 'Not described.'],
      ['Falling fixed costs', 'Not described.'],
    ], 0)),

    // ---------- Break-even ----------
    'u4-break-even:2': ao(4, mc('A café’s margin of safety is 150 cups a week. A new rival is expected to take 200 cups a week. What is the most likely outcome?', [
      ['Sales fall below break-even output, so the café makes a loss', 'Correct: 200 is greater than 150.'],
      ['Sales stay above break-even output, so the café still earns a profit', '200 > 150.'],
      ['The break-even output falls by 200, so the café earns more profit', 'Not how it works.'],
      ['The margin of safety rises to 350, so the café is much safer', 'Wrong direction.'],
    ], 0)),
    'u4-break-even:6': ao(4, mc('Which change would reduce the break-even output the most, other things equal?', [
      ['Cutting fixed costs from $60,000 to $40,000 at an unchanged contribution per unit', 'Correct.'],
      ['Cutting the number of units sold from 5,000 to 4,000 a month', 'This does not change break-even.'],
      ['Raising fixed costs from $60,000 to $70,000 at an unchanged price', 'Raises break-even.'],
      ['Cutting the selling price by $1 per unit with variable costs unchanged', 'Raises break-even.'],
    ], 0)),
    'u4-break-even:7': ao(2, mc('On a break-even chart, the gap between actual output and break-even output (when output is higher) shows…', [
      ['The margin of safety', 'Correct.'],
      ['The fixed costs of the business', 'Fixed costs are where total cost starts.'],
      ['The contribution per unit', 'This is price minus variable cost.'],
      ['The total revenue at break-even', 'Revenue is a line, not a gap in output.'],
    ], 0)),
    'u4-break-even:c0.0': ao(3, mc('A firm’s break-even output is 4,000 units and it sells 3,200. Which description is most accurate?', [
      ['It is below break-even and making a loss, 800 units short', 'Correct.'],
      ['It is above break-even and making a profit of 800 units', 'It is below.'],
      ['It is exactly at break-even, so profit and loss are both zero', 'Not at break-even.'],
      ['It has a margin of safety of 800 units and is making a profit', 'No margin of safety here.'],
    ], 0)),
    'u4-break-even:c3.0': ao(3, mc('On a break-even chart, the total cost line starts at $40,000 when output is zero. What does this show?', [
      ['Fixed costs of $40,000', 'Correct.'],
      ['Variable costs of $40,000', 'Variable costs start from zero.'],
      ['Profit of $40,000 at zero output', 'No sales means no profit.'],
      ['Revenue of $40,000 at zero output', 'No sales means no revenue.'],
    ], 0)),
    'u4-break-even:c4.0': ao(3, mc('A landlord raises factory rent by $12,000 a year. What happens on the break-even chart?', [
      ['The total cost line starts higher and break-even output rises', 'Correct.'],
      ['The revenue line becomes steeper and break-even output falls', 'Revenue is unchanged.'],
      ['The total cost line becomes steeper and break-even output rises', 'Rent is fixed so only the start rises.'],
      ['The fixed cost line falls and the break-even output stays the same', 'Fixed cost rises.'],
    ], 0)),
    'u4-break-even:c6.0': ao(4, mc('Break-even analysis says a restaurant needs 3,000 meals a month. Which limitation is most important if it offers discounts?', [
      ['It assumes a constant price, so discounts would make the real break-even higher', 'Correct.'],
      ['It assumes fixed costs of zero, so discounts do not change the result', 'Not an assumption.'],
      ['It assumes unlimited demand, so discounts would increase profit', 'Not the limitation.'],
      ['It assumes every meal is sold at cost, so profit would be zero', 'Not an assumption.'],
    ], 0)),
    'u4-break-even:c7.0': ao(4, mc('A start-up uses break-even analysis to support a loan application. Which statement is best supported?', [
      ['It shows the sales needed to avoid a loss, but relies on forecasts that may be wrong', 'Correct.'],
      ['It proves the firm will make a profit, since the figures are mathematical', 'It cannot prove this.'],
      ['It is useless to banks, since lenders ignore all sales forecasts', 'Banks do look at them.'],
      ['It shows actual past profits, since it uses the firm’s trading history', 'A start-up has no history.'],
    ], 0)),

    // ---------- Quality, sustainability and location ----------
    'u4-quality-sustainability-location:2': ao(4, mc('Which reason is best justified for locating the main factory next to the firm’s biggest customer?', [
      ['Lower transport costs and faster, more reliable deliveries', 'Correct.'],
      ['Cheaper land, since land near large customers is always the cheapest', 'Not true.'],
      ['More competitors nearby, which increases demand for the product', 'Competitors do not raise demand.'],
      ['Lower wages, since workers near customers accept lower pay', 'No reason.'],
    ], 0)),
    'u4-quality-sustainability-location:5': ao(2, mc('Which is a location factor for a service business such as a café?', [
      ['Customer footfall and accessibility', 'Correct.'],
      ['Closeness to a source of iron ore', 'Primary industry factor.'],
      ['Availability of heavy machinery suppliers', 'Manufacturing factor.'],
      ['Distance from the nearest port for exports', 'Manufacturing/trade factor.'],
    ], 0)),
    'u4-quality-sustainability-location:6': ao(4, mc('Why might a firm choose quality control rather than quality assurance for a low-risk, low-cost product?', [
      ['The cost of faults is low, so simple checks may be enough', 'Correct.'],
      ['Quality control prevents all faults before they happen in production', 'It checks for faults after.'],
      ['Quality assurance is illegal for goods that are low in cost', 'No such rule.'],
      ['Quality control needs no staff, so it is the cheapest of all methods', 'It needs inspectors.'],
    ], 0)),
    'u4-quality-sustainability-location:7': ao(4, mc('Political instability worries a manufacturer. What is the most likely effect on its location choice?', [
      ['It may reject that country despite lower wages, because of the risk to production', 'Correct.'],
      ['It will choose that country, because instability always lowers costs', 'Not logical.'],
      ['It will ignore the risk, because wages are the only factor that matters', 'Not logical.'],
      ['It will open in every country, to spread out any political risk', 'Not realistic.'],
    ], 0)),
    'u4-quality-sustainability-location:c0.0': ao(4, mc('A pizza chain switches to 100% recycled boxes and solar-powered ovens. Which benefit and cost fit best?', [
      ['Better reputation and lower long-run energy costs, but high set-up costs', 'Correct.'],
      ['Higher energy costs in the long run, but lower set-up costs', 'Reversed.'],
      ['A worse reputation, but lower costs in every year', 'Reversed.'],
      ['No effect on customers, but lower set-up costs', 'Unlikely.'],
    ], 0)),
    'u4-quality-sustainability-location:c2.0': ao(3, mc('A restaurant’s customers say food is sometimes cold or wrong. Which statement shows why quality matters?', [
      ['Poor quality leads to complaints and lost customers, harming sales', 'Correct.'],
      ['Poor quality helps the firm, since it reduces the cost of each meal', 'Short-term.'],
      ['Poor quality is the customers’ fault, so the firm need not respond', 'Not logical.'],
      ['Poor quality has no effect on a restaurant’s reputation or profit', 'It does.'],
    ], 0)),
    'u4-quality-sustainability-location:c3.0': ao(4, mc('A factory inspects only finished goods and finds 6% faulty. Which statement explains a weakness of this approach?', [
      ['Faults are found after they are made, so materials and time are already wasted', 'Correct.'],
      ['Inspection of finished goods prevents faults from being made at all', 'It detects, not prevents.'],
      ['Inspection finds no faults, because faults only appear in later use', 'It found 6%.'],
      ['Inspection is free, so there is no cost in checking every product', 'It costs time and money.'],
    ], 0)),
    'u4-quality-sustainability-location:c4.0': ao(4, mc('An aircraft-parts maker trains staff, agrees standards with suppliers and checks quality at every stage. Which approach is it, and why?', [
      ['Quality assurance, because faults could be dangerous and costly, so prevention matters', 'Correct.'],
      ['Quality control only, because checking finished parts is all that is needed', 'It prevents faults too.'],
      ['Lean production only, because the aim is to cut stock to a minimum', 'Not described.'],
      ['Kaizen only, because workers suggest small improvements each month', 'Not described.'],
    ], 0)),
    'u4-quality-sustainability-location:c6.0': ao(4, mc('A steel works needs iron ore, coal and heavy transport. Which location factor is most important, and why?', [
      ['Access to raw materials and transport, because they make up most of its costs', 'Correct.'],
      ['Closeness to shoppers, because steel is sold direct to the public', 'Not likely.'],
      ['Footfall in the city, because steel needs passing trade', 'Not relevant.'],
      ['Closeness to a university, because steel making needs graduates', 'Not the main factor.'],
    ], 0)),
    'u4-quality-sustainability-location:c7.0': ao(4, mc('A boutique café chooses between a quiet industrial estate (rent $800) and a busy high street (rent $3,500). Which comparison is best?', [
      ['Footfall and visibility against rent: the high street needs enough extra sales to pay for it', 'Correct.'],
      ['Rent only, since the cheapest site always gives the highest profit', 'Ignores sales.'],
      ['Footfall only, since a busy site is always worth any rent', 'Ignores cost.'],
      ['Neither matters, since cafés can sell the same on any street', 'Not true.'],
    ], 0)),
    'u4-quality-sustainability-location:c8.0': ao(4, mc('A clothing firm compares Country A (wages $900, stable) with Country B (wages $350, poor roads, some risk). Which statement is best?', [
      ['Lower wages in B must be weighed against delivery delays and risk', 'Correct.'],
      ['B is always the better choice, since low wages are what matter most', 'Ignores risk.'],
      ['A is always the better choice, since stable countries cost more to run', 'Ignores wage savings.'],
      ['Neither country can be used, since wages differ so much', 'They can be compared.'],
    ], 0)),
    'u4-quality-sustainability-location:c10.0': ao(4, mc('A drug manufacturer finds that batch testing catches faults too late; one faulty batch cost $500,000 to recall. Which action is best justified?', [
      ['Introduce quality assurance, because it prevents costly recalls and protects patients', 'Correct.'],
      ['Test fewer batches, since testing has already failed to find faults', 'Illogical.'],
      ['Stop making drugs in batches, since batches always contain faults', 'Not logical.'],
      ['Raise the price of the drug, so that recalls are paid for by customers', 'Does not fix quality.'],
    ], 0)),
    'u4-quality-sustainability-location:c11.0': ao(4, mc('A factory’s energy bill is $400,000. Switching to renewable energy costs $1.2m and saves $100,000 a year. Which statement is best?', [
      ['Payback is 12 years, so it needs long-term benefits such as reputation to be worthwhile', 'Correct: 1.2m ÷ 100k = 12.'],
      ['Payback is 3 years, so it is clearly the cheapest option for the firm', 'Calculation error.'],
      ['Payback is 4 years, so the firm should switch straight away', 'Calculation error.'],
      ['There is no payback, since renewable energy cannot save any money', 'It saves $100,000 a year.'],
    ], 0)),
  },

  add: {
    'u4-efficiency-lean': [
      match('Match each term to its meaning.', [
        ['Productivity', 'Output per worker or per unit of input'],
        ['Kaizen', 'Continuous small improvements by employees'],
        ['Just-in-time', 'Receiving stock only when it is needed'],
        ['Lean production', 'Cutting waste while keeping quality'],
      ]),
      short('Define the term “productivity”.', {
        kind: 'Definition',
        points: ['The amount of output produced', 'per unit of input (such as per worker or per hour)'],
        model: 'Productivity is the amount of output produced per unit of input, such as output per worker.',
      }),
      calcLike(),
    ],
    'u4-methods-technology': [
      match('Match each production method to its best example.', [
        ['Job production', 'A bespoke wedding dress'],
        ['Batch production', 'A bakery making 200 rolls, then 100 loaves'],
        ['Flow production', 'A car assembly line making one model'],
      ]),
      multi('Which are advantages of automation for a business? Select all that apply.', [
        ['Output can continue 24 hours a day', 'Machines can run continuously.', true],
        ['More consistent quality', 'Machines repeat tasks accurately.', true],
        ['No set-up or maintenance costs', 'Machines cost money to buy and maintain.', false],
        ['Greater flexibility for one-off orders', 'Automation suits repetitive output.', false],
      ]),
    ],
    'u4-costs-scale': [
      match('Match each term to its meaning.', [
        ['Fixed cost', 'Does not change when output changes'],
        ['Variable cost', 'Changes with the amount produced'],
        ['Average cost', 'Total cost divided by the number of units'],
        ['Economies of scale', 'Unit costs fall as the firm gets bigger'],
      ]),
      cloze('Complete the sentence.', 'Total cost = ___ costs + ___ costs.', ['fixed', 'variable'], ['average', 'marginal']),
    ],
    'u4-break-even': [
      cloze('Complete the sentence.', 'Break-even output = fixed costs ÷ ___ per unit, where this is the selling price minus the ___ cost per unit.', ['contribution', 'variable'], ['profit', 'fixed']),
      short('Explain one limitation of break-even analysis.', {
        command: 'Explain',
        points: ['States a limitation (for example it assumes costs and price stay constant)', 'Says why that matters (real break-even may differ, so the analysis can mislead)'],
        model: 'Break-even analysis assumes the price and costs stay constant. In practice discounts or rising costs change the break-even point, so the analysis can be misleading.',
      }),
    ],
    'u4-quality-sustainability-location': [
      multi('Which are likely benefits of a firm using quality assurance? Select all that apply.', [
        ['Fewer faulty products reach customers', 'Quality is built in.', true],
        ['Lower costs of waste, rework and recalls', 'Faults are prevented.', true],
        ['No training of staff is needed', 'Training is part of QA.', false],
        ['Quality checks only at the end of production', 'That is quality control.', false],
      ]),
      short('Explain one reason why a firm might locate close to its suppliers.', {
        command: 'Explain',
        points: ['Transport costs of raw materials are lower', 'Supplies are quicker and more reliable'],
        model: 'Being close to suppliers cuts transport costs for heavy raw materials and makes deliveries quicker and more reliable.',
      }),
    ],
  },
};

// A small numeric item for the efficiency lesson (kept inline so the file stays self-contained).
function calcLike() {
  return mc('A factory makes 9,000 units with 30 workers. After training, it makes 10,800 units with the same 30 workers. By what percentage has labour productivity risen?', [
    ['20%, because output per worker has risen from 300 to 360 units', 'Correct: (360 − 300) ÷ 300 = 20%.'],
    ['18%, because 1,800 more units is 18% of the 10,000 units made', 'Productivity compares output per worker, not the total.'],
    ['30%, because there are 30 workers in the factory in both cases', 'The number of workers is unchanged.'],
    ['60%, because each worker now makes 60 more units than before', '60 is the rise in units, not a percentage.'],
  ], 0);
}
