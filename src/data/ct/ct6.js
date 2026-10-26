import { mc, ord, scn, calc, tfd, ao } from '../builders.js';

export const ct6 = {
  'u6-business-cycle': {
    cards: [
      [ao(3, mc('A country’s output has fallen for two years, unemployment is 14% and demand is very weak. Which stage of the business cycle is the economy most likely in?', [
        ['Slump', 'Correct: the lowest point with very low output and high unemployment.'],
        ['Boom', 'Boom has high demand and employment.'],
        ['Growth', 'Output is rising in growth.'],
        ['Recession only', 'A recession is the fall; a slump is the deep low.'],
      ], 0))],
      [ao(4, mc('In a recession a luxury car dealer’s sales fall 40% while a budget supermarket’s sales rise 5%. Which explanation is best-supported?', [
        ['People cut spending on expensive non-essentials and trade down to cheaper goods', 'Correct.'],
        ['Everyone buys more luxury', 'Opposite.'],
        ['Supermarkets are in a boom', 'Not shown.'],
        ['Cars are essential', 'Luxury cars are not.'],
      ], 0))],
      [ao(4, scn('Unemployment in a town rises from 4% to 12% after a factory closes. A local café can (A) cut prices and add a cheap menu, or (B) keep premium prices and rely on regular customers. Which is best-justified?', [
        ['A: lower incomes cut demand, so a cheaper menu keeps customers while the economy is weak', 'Responds to the cause.', true],
        ['B because premium customers always stay', 'Many will cut spending.', false],
      ], 'Respond to changes in incomes and demand.'))],
      [ao(4, mc('Costs of ingredients rise 8% because of inflation. A restaurant fears customers will not pay more. Which statement is best justified?', [
        ['If it cannot raise prices, profit margins fall; it may look for efficiency savings or absorb part of the rise', 'Correct.'],
        ['Inflation has no effect on costs', 'It raises costs.'],
        ['Prices must be cut', 'Illogical.'],
        ['Profit rises automatically', 'Not so.'],
      ], 0))],
      [ao(4, mc('An economy is growing at 4% a year. Which is the best-justified effect for a furniture retailer?', [
        ['Incomes and demand rise, so sales may grow, but rival expansion and rising costs may offset gains', 'Correct.'],
        ['Sales must fall', 'Unlikely.'],
        ['There is no effect on retailers', 'Demand rises.'],
        ['Prices must be cut', 'Not necessarily.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A firm has $500,000 in cash in a boom. It can expand capacity by 30% (cost $400,000) or hold cash because forecasts suggest a recession in 18 months. Orders now exceed capacity by 20%. Which is best-justified?', [
        ['Expand partly (e.g. 15%) using retained profit and flexible leasing, to meet demand while limiting recession risk', 'Balances opportunity and risk.', true],
        ['Expand fully and borrow more', 'Raises risk if recession arrives.', false],
      ], 'Evaluate using timing and risk.')),
      ao(3, ord('Put the effects of a recession in a logical order.', [
        'Consumer spending falls',
        'Firms’ sales fall',
        'Firms cut jobs',
        'Unemployment rises and spending falls further',
      ], 'A downward spiral: lower demand → lower sales → job losses → lower incomes.')),
      ao(4, mc('Which business is MOST likely to benefit from a recession?', [
        ['A discount retailer selling cheap own-brand goods', 'Correct: people trade down.'],
        ['A luxury yacht builder', 'Hit hard.'],
        ['A five-star hotel', 'Hit hard.'],
        ['A jewellery firm selling diamonds', 'Hit hard.'],
      ], 0)),
      ao(3, calc('Prices rise 6% in a year. A worker’s pay rises 4%. By roughly how many percentage points has the worker’s real income changed?', -2, {
        unit: '%',
        formula: 'Real change ≈ pay increase − inflation',
        steps: ['4% − 6% = −2 percentage points', 'The worker’s real income has fallen, so spending power for the firm’s customers is lower.'],
      })),
      ao(3, tfd('Falling unemployment always increases profits for every business.', 'depends', 'It raises demand, but it can also raise wages and make recruitment harder, so profit effects vary by business.')),
      ao(4, scn('A clothes retailer sees sales fall 25% during a slump. It can cut staff by 20% or cut prices by 10% and run promotions. Margins are thin. Which approach is best-justified?', [
        ['Cut some costs (hours/stock) and use targeted promotions, because deep staff cuts harm service and price cuts erode margins', 'Balanced.', true],
        ['Cut staff by 20% only', 'Risks service.', false],
      ], 'Weigh cost cutting against sales effects.')),
      ao(3, mc('In a boom, which problem is most likely for a manufacturer?', [
        ['Rising wage and material costs and difficulty recruiting', 'Correct.'],
        ['Falling demand', 'Opposite.'],
        ['Rising unemployment', 'Opposite.'],
        ['Price deflation', 'Opposite.'],
      ], 0)),
      ao(4, mc('Which statement best justifies a business keeping a cash reserve during a boom?', [
        ['Booms are followed by downturns, and reserves protect against falling sales', 'Correct.'],
        ['Booms last forever', 'False.'],
        ['Cash earns more than any investment', 'Unsupported.'],
        ['Reserves are illegal', 'No.'],
      ], 0)),
    ],
  },

  'u6-government-policy': {
    cards: [
      [ao(4, calc('A company earns $300,000 profit. Corporation tax rises from 20% to 25%. How much less profit after tax does it keep, and what might it do?', 15000, {
        unit: '$',
        formula: 'Extra tax = profit × change in tax rate',
        steps: ['Old tax = $60,000; new tax = $75,000', 'Extra tax = $15,000 less retained profit', 'It may invest less or cut costs.'],
      }))],
      [ao(4, mc('Income tax rises and consumers have less spending power. Which business is likely to be affected most?', [
        ['A restaurant selling non-essential meals', 'Correct: demand for luxuries falls most.'],
        ['A bread seller', 'Essential goods fall less.'],
        ['A supermarket selling basics', 'Less affected.'],
        ['A utility company', 'Essential.'],
      ], 0))],
      [ao(4, mc('A government announces a $5bn programme to build roads and railways. Which firm benefits most directly?', [
        ['A construction company, through contracts, and its suppliers', 'Correct.'],
        ['A video-game maker', 'Not directly.'],
        ['A perfume brand', 'Not directly.'],
        ['A fashion retailer', 'Not directly.'],
      ], 0))],
      [ord('Put the effects of a rise in interest rates in a logical order.', [
        'Interest rates rise',
        'Loan repayments rise and borrowing falls',
        'Consumers spend less',
        'Business sales fall',
      ], 'Higher borrowing costs reduce spending and sales.')],
      [ao(4, scn('Interest rates fall from 8% to 5%. A firm planning to buy $600,000 of machinery would borrow the full amount. Which assessment is best-justified?', [
        ['Annual interest falls from $48,000 to $30,000, so borrowing becomes cheaper and investment more attractive', 'Uses figures.', true],
        ['Delay forever because interest rates change', 'Misses the saving.', false],
      ], 'Compare costs before and after.'))],
      // advantages / disadvantages cards
      [ao(4, mc('A business with a large variable-rate loan sees interest rates rise 2 percentage points. Which is the best-justified response?', [
        ['Reduce debt or fix interest and delay new borrowing, to limit rising repayments', 'Correct.'],
        ['Borrow more because rates are rising', 'Increases cost.'],
        ['Ignore the change', 'It increases costs.'],
        ['Increase advertising only', 'Does not address the cause.'],
      ], 0))],
      [ao(4, mc('A government cuts corporation tax from 25% to 15% hoping for more investment. Which condition would make this most effective?', [
        ['Firms use the extra retained profit to invest and expand rather than just pay dividends', 'Correct.'],
        ['Firms close down', 'Opposite.'],
        ['Demand falls', 'Reduces incentive.'],
        ['Interest rates rise sharply', 'Reduces incentive.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('Government policy: income tax up, interest rates up, spending cuts. A mid-priced restaurant chain with a large loan expects sales to fall. It can borrow to open a new site or hold back. Which is best-justified?', [
        ['Hold back and strengthen cash flow: higher rates raise loan costs while falling demand lowers sales', 'Uses the policy mix.', true],
        ['Open the site regardless', 'Double risk.', false],
      ], 'Combine policy effects in your judgement.')),
      ao(3, mc('Which policy is most likely to increase demand for builders?', [
        ['More government spending on housing and roads', 'Correct.'],
        ['Higher taxes on firms', 'Reduces investment.'],
        ['Higher interest rates', 'Increases cost of borrowing.'],
        ['Less public spending', 'Reduces demand.'],
      ], 0)),
      ao(4, mc('A government raises VAT on luxury goods by 10 percentage points. Which is the most likely result for a luxury handbag maker?', [
        ['Higher prices reduce demand and may force it to cut costs or prices', 'Correct.'],
        ['Demand rises', 'Unlikely.'],
        ['No effect at all', 'Prices rise.'],
        ['Corporation tax falls', 'Not linked.'],
      ], 0)),
      ao(3, calc('A firm borrows $200,000 at 6% simple interest. Interest rises to 8%. How much more interest per year does it pay?', 4000, {
        unit: '$',
        formula: 'Extra interest = loan × change in rate',
        steps: ['6% of 200,000 = $12,000; 8% = $16,000', 'Extra = $4,000 a year'],
      })),
      ao(3, tfd('A cut in income tax always increases demand for all businesses equally.', 'false', 'More disposable income raises demand, but mainly for normal and luxury goods; the effect depends on the product.')),
      ao(4, scn('A retailer with a $100,000 variable-rate loan has a profit of $40,000. If interest rises from 5% to 9% its interest cost rises by $4,000. Sales may fall 10%. Which response is best-justified?', [
        ['Reduce the loan or fix the rate and monitor costs, because rising rates and weaker demand both squeeze profit', 'Addresses both effects.', true],
        ['Increase borrowing', 'Raises exposure.', false],
      ], 'Use the numbers to assess exposure.')),
      ao(3, mc('Which is a business response to a rise in the minimum tax on profits?', [
        ['Reduce costs, adjust prices or delay investment', 'Correct.'],
        ['Hire more managers', 'Not a response.'],
        ['Ignore it', 'Costs rise.'],
        ['Close immediately', 'Unjustified.'],
      ], 0)),
      ao(4, mc('Which statement best evaluates a government decision to cut spending on infrastructure to reduce borrowing?', [
        ['It may cut the budget deficit but reduces demand for construction and related firms, risking jobs', 'Correct.'],
        ['It has no effect on firms', 'Contractors lose work.'],
        ['It improves every firm’s sales', 'Not so.'],
        ['It lowers all taxes', 'Not stated.'],
      ], 0)),
    ],
  },

  'u6-globalisation': {
    cards: [
      [ao(4, mc('A clothing firm designs in Italy, makes in Vietnam, sells online worldwide and uses cargo ships and the internet to coordinate. Which causes of globalisation does this reflect?', [
        ['Improved transport and communication technology', 'Correct.'],
        ['Higher import tariffs', 'Reduce trade.'],
        ['Slower shipping', 'Reduces trade.'],
        ['Less internet use', 'Reduces trade.'],
      ], 0))],
      [ao(4, scn('A local shoe maker faces cheap imports from a newly industrialised country. It can compete on price or focus on handcrafted quality. Which response is best-justified?', [
        ['Differentiate with high-quality handcrafted shoes and sell online to a wider market', 'Turns the threat into opportunity.', true],
        ['Cut price below cost to match imports', 'Unsustainable.', false],
      ], 'Respond to global competition by using strengths.'))],
      [ao(3, calc('A 20% tariff is added to $5,000 of imported materials. What is the new cost, and how does it affect a business using them?', 6000, {
        unit: '$',
        formula: 'New cost = price × (1 + tariff rate)',
        steps: ['Tariff = 0.20 × 5,000 = $1,000', 'New cost = $6,000', 'Costs rise 20%, reducing margins unless prices rise or other suppliers are found.'],
      }))],
      [ao(4, mc('A government introduces an import quota on steel. Which group benefits most, and who loses most?', [
        ['Domestic steel producers benefit; steel-using manufacturers and consumers may lose from higher prices', 'Correct.'],
        ['Foreign producers benefit most', 'They lose sales.'],
        ['Nobody is affected', 'Prices and supply change.'],
        ['Only consumers benefit', 'They face higher prices.'],
      ], 0))],
      [ao(4, mc('A multinational builds a factory in a country with a high import tariff on its goods. Which is the best-justified advantage?', [
        ['It avoids the tariff by producing locally and can serve the market at lower cost', 'Correct.'],
        ['It loses all customers', 'Not logical.'],
        ['It pays no taxes anywhere', 'Not true.'],
        ['It raises tariffs', 'Not its power.'],
      ], 0))],
      [ao(4, mc('A multinational factory employs 2,000 locals and exports 70% of its output. Which statement shows an advantage to the host country?', [
        ['Jobs, investment and export earnings', 'Correct.'],
        ['Profits sent abroad', 'A disadvantage.'],
        ['Pollution', 'A disadvantage.'],
        ['Closure of local firms', 'A disadvantage.'],
      ], 0))],
      [ao(4, mc('A host country finds that most of an MNC’s profit is sent back to its home country and the factory pollutes a river. Which two disadvantages are shown?', [
        ['Repatriation of profits and environmental damage', 'Correct.'],
        ['More jobs and investment', 'Advantages.'],
        ['Increased choice and lower prices', 'Advantages.'],
        ['Higher exports and tax', 'Advantages.'],
      ], 0))],
      [ao(4, mc('A country’s currency appreciates from $1 = 10 pesos to $1 = 8 pesos (the peso becomes stronger). Which firm is most likely to gain?', [
        ['A peso-based firm importing machinery priced in dollars', 'Correct: imports cost fewer pesos.'],
        ['A peso-based exporter selling in dollars', 'Exports become dearer.'],
        ['A tourism firm relying on foreign visitors', 'Becomes dearer for visitors.'],
        ['A firm with no foreign trade', 'Not affected.'],
      ], 0))],
      [ao(4, scn('Beema exports 30% of its shoes and imports its leather. Its currency depreciates 10%. Which assessment is best-justified?', [
        ['Exports become cheaper and may rise, but leather costs more, so the net effect depends on the shares of exports and imported inputs', 'Weighs both effects.', true],
        ['The depreciation only helps', 'Ignores higher import costs.', false],
      ], 'Consider both exporter and importer effects.'))],
      // advantages / disadvantages cards
      [ao(4, mc('A small local furniture firm fears globalisation. Which is the best-justified way to see an opportunity?', [
        ['Sell unique designs online to overseas customers and source materials more cheaply abroad', 'Correct.'],
        ['Refuse to change', 'Ignores the opportunity.'],
        ['Copy imports exactly', 'May not be competitive.'],
        ['Shut down immediately', 'Unjustified.'],
      ], 0))],
      [ao(4, mc('Which statement best evaluates multinational operations for a UK pharmaceutical firm opening a plant in India?', [
        ['Lower labour cost and new market access, but cultural, legal and management challenges', 'Correct.'],
        ['No benefits', 'Not true.'],
        ['No challenges', 'Not true.'],
        ['It becomes a sole trader', 'Not logical.'],
      ], 0))],
      [ao(4, mc('A tariff of 25% protects a country’s car industry. Which long-term risk is best-justified?', [
        ['Domestic firms may become less efficient without competition, and other countries may retaliate', 'Correct.'],
        ['Cars become cheaper', 'Prices usually rise.'],
        ['More imports arrive', 'Imports fall.'],
        ['No effect', 'There are effects.'],
      ], 0))],
      [ao(4, mc('The home currency depreciates 15%. A UK firm imports raw materials. Which is the best-justified response?', [
        ['Look for domestic suppliers or fix exchange rates in advance, to limit rising import costs', 'Correct.'],
        ['Buy more imports', 'Increases exposure.'],
        ['Ignore the change', 'Costs rise.'],
        ['Stop exporting', 'Unjustified.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('A garment maker produces in Country A and sells to Country B. B introduces a 25% tariff. The firm can absorb the tariff, raise prices 25%, or set up a factory in B costing $3m. B accounts for 40% of its $20m sales. Which is best-justified?', [
        ['Raise prices partly, absorb part and investigate a small factory; the 25% tariff on $8m sales costs $2m a year, so a $3m factory may pay back within two years', 'Uses figures.', true],
        ['Absorb the whole tariff', 'Would cut profit by $2m a year.', false],
      ], 'Quantify the tariff cost before choosing a response.')),
      ao(3, calc('An exporter sells 10,000 units at $20. Its currency strengthens so the same price now costs foreign buyers 8% more. If demand falls by 12%, what is the new quantity sold?', 8800, {
        unit: 'units',
        formula: 'New quantity = old quantity × (1 − % fall)',
        steps: ['10,000 × 0.88 = 8,800 units'],
      })),
      ao(4, mc('Which statement is the best-justified reason for a government to sign a free trade agreement with a neighbour?', [
        ['Lower trade barriers raise exports and give consumers more choice, though some industries may face stiffer competition', 'Correct.'],
        ['It removes all competition', 'Opposite.'],
        ['It stops trade', 'Opposite.'],
        ['It lowers all firms’ costs equally', 'Not so.'],
      ], 0)),
      ao(3, tfd('A weaker currency is always good for a country’s businesses.', 'depends', 'It helps exporters but raises import costs, so businesses relying on imports can be harmed.')),
      ao(4, scn('A country’s workers earn $4 an hour; an MNC pays $6. The MNC also sends most profits abroad and uses local rivers for waste. Which assessment is best-justified?', [
        ['Benefits (jobs, higher pay, investment) must be weighed against profit repatriation and environmental damage, so regulation and local requirements are important', 'Balanced.', true],
        ['MNCs are always good', 'Ignores harm.', false],
      ], 'Evaluate benefits and costs for the host country.')),
      ao(3, mc('An import quota limits the number of cars imported to 100,000 a year. Which is the most likely effect on prices?', [
        ['Higher prices because supply is restricted', 'Correct.'],
        ['Lower prices', 'Opposite.'],
        ['No change', 'Supply is limited.'],
        ['Prices disappear', 'Not logical.'],
      ], 0)),
      ao(4, mc('Which factor is least likely to explain faster globalisation?', [
        ['Higher import tariffs and quotas', 'Correct: they restrict trade.'],
        ['Cheaper shipping', 'Encourages trade.'],
        ['Faster internet', 'Encourages trade.'],
        ['Free trade agreements', 'Encourage trade.'],
      ], 0)),
      ao(3, mc('A UK firm selling in the euro area earns €1m. If the pound strengthens from €1.10 to €1.25 per pound, what happens to the pound value of its earnings?', [
        ['They fall (≈£909k to £800k)', 'Correct: 1,000,000 ÷ 1.10 ≈ £909,000; ÷ 1.25 = £800,000.'],
        ['They rise', 'Wrong direction.'],
        ['They stay the same', 'The rate changes.'],
        ['They double', 'No.'],
      ], 0)),
    ],
  },

  'u6-environment-ethics': {
    cards: [
      [ao(4, mc('A cement works makes 400 jobs and pays high local taxes, but its dust causes asthma among nearby children. Which pair of external effects is shown?', [
        ['External benefits (jobs, taxes) and external costs (dust and health)', 'Correct.'],
        ['Only benefits', 'Health costs exist.'],
        ['Only costs', 'Jobs are benefits.'],
        ['No external effects', 'Plenty are shown.'],
      ], 0))],
      [ao(4, mc('A paper company cuts down forests and releases chemicals into a river. Which two environmental effects does this show?', [
        ['Depletion of resources and pollution', 'Correct.'],
        ['Job creation only', 'Not an environmental harm.'],
        ['Recycling and sustainability', 'Opposite.'],
        ['Cheaper products only', 'Not an effect shown.'],
      ], 0))],
      [ao(4, mc('A business installs solar panels and sells recycled-material products. Which is the best-justified reason it did so?', [
        ['To improve reputation, win eco-conscious customers and cut long-run costs', 'Correct.'],
        ['To reduce sales', 'Opposite.'],
        ['To avoid all rules', 'No.'],
        ['To raise pollution', 'Opposite.'],
      ], 0))],
      [ao(4, mc('New law bans single-use plastic packaging. Which statement best evaluates its effect on a food producer?', [
        ['Costs may rise for new packaging, but the firm gains a cleaner image and avoids penalties', 'Correct.'],
        ['The law has no effect', 'Packaging changes.'],
        ['Costs fall automatically', 'Not so.'],
        ['The law only helps competitors', 'It applies to all.'],
      ], 0))],
      [ao(4, mc('A clothing firm discovers that a supplier uses child labour. Which is the best-justified decision?', [
        ['Switch to audited ethical suppliers, protecting reputation and meeting stakeholders’ expectations despite higher costs', 'Correct.'],
        ['Ignore it to keep costs low', 'Risks scandal and boycotts.'],
        ['Hide it', 'Unethical and risky.'],
        ['Increase child labour', 'Unacceptable.'],
      ], 0))],
      [ao(4, scn('Fairtrade-certified coffee costs 15% more. A café’s customers say they care about ethical sourcing but many are price-sensitive. Which choice is best-justified?', [
        ['Introduce it as a premium option first, testing demand, because it builds reputation without risking all sales', 'Balanced and evidence-led.', true],
        ['Switch everything immediately regardless of cost', 'Risks losing price-sensitive customers.', false],
      ], 'Balance ethics with commercial reality.'))],
      [ao(4, mc('A pressure group runs a social media campaign against a fast-fashion firm’s labour practices. Which result is the most likely effect on the firm?', [
        ['Bad publicity, falling sales and pressure to change policy', 'Correct.'],
        ['Guaranteed profit growth', 'Unlikely.'],
        ['No effect', 'Reputational risk exists.'],
        ['A tax cut', 'Unrelated.'],
      ], 0))],
      // advantages / disadvantages cards
      [ao(4, mc('A firm spends $400,000 on pollution controls to meet new rules. Which statement best evaluates the decision?', [
        ['It increases costs but avoids fines, protects its licence to operate and improves reputation', 'Correct.'],
        ['It has no benefit', 'Not true.'],
        ['It should ignore the rules', 'Illegal.'],
        ['It raises profit immediately', 'Not necessarily.'],
      ], 0))],
      [ao(4, mc('A business pays suppliers fair prices and its prices rise 4%. Customers value this but competitors are cheaper. Which is the best-supported risk?', [
        ['It may lose price-sensitive customers if it cannot justify the premium', 'Correct.'],
        ['It will certainly gain market share', 'Not guaranteed.'],
        ['Suppliers will leave', 'Unlikely.'],
        ['Costs fall', 'They rise.'],
      ], 0))],
      [ao(4, mc('A campaign group organises a boycott of a firm’s products. Which is the best-justified response by the firm?', [
        ['Engage, investigate the claims and change policy where justified, to protect its reputation', 'Correct.'],
        ['Ignore the group', 'Reputation may worsen.'],
        ['Pretend nothing happened', 'Not credible.'],
        ['Blame customers', 'Counterproductive.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('Clearwater Steel’s profit has fallen from $60m to $20m. A pressure group campaigns about river pollution; the estimated fine is $15m. A director suggests cutting wages and ignoring rules. Cleaner technology costs $30m. Which is best-justified?', [
        ['Invest in cleaner technology in stages: the fine and boycott risk threaten profit more than the investment, and ignoring the rules endangers survival', 'Uses the figures.', true],
        ['Ignore the rules and cut wages', 'Risks bigger losses and reputation.', false],
      ], 'Evaluate using costs, risks and survival.')),
      ao(3, mc('Which is an example of an external benefit of a new supermarket?', [
        ['Local jobs and more spending in nearby shops', 'Correct.'],
        ['Traffic congestion', 'External cost.'],
        ['Litter', 'External cost.'],
        ['Noise', 'External cost.'],
      ], 0)),
      ao(4, mc('Which statement best explains why some firms choose to be ethical even when it raises costs?', [
        ['A good reputation can build loyalty, attract staff and reduce the risk of boycotts and fines', 'Correct.'],
        ['Ethical firms never pay tax', 'Not true.'],
        ['Ethical firms never compete', 'Not true.'],
        ['It has no commercial benefit', 'Often has.'],
      ], 0)),
      ao(3, tfd('A business that follows environmental laws is always more profitable than one that does not.', 'depends', 'Compliance adds costs but avoids fines and protects reputation; profit effects vary and may take time.')),
      ao(4, scn('A coal company is campaigned against by an environmental group; local workers (1,500 jobs) fear closure. The company can invest in cleaner technology (cost $50m, reduces pollution 60%) or close. Which is best-justified?', [
        ['Invest in cleaner technology and phase changes, since it protects jobs and reduces harm; closure would harm the community too', 'Balances stakeholders.', true],
        ['Ignore both groups', 'Risks fines and conflict.', false],
      ], 'Weigh environmental and social effects.')),
      ao(3, mc('Which of the following is a method pressure groups use to influence business decisions?', [
        ['Social media campaigns and boycotts', 'Correct.'],
        ['Setting company prices', 'Not their power.'],
        ['Employing managers', 'Not their role.'],
        ['Printing money', 'No.'],
      ], 0)),
      ao(4, mc('A firm advertises itself as “green” but still dumps waste illegally. Which is the most likely result if discovered?', [
        ['Severe reputational damage and fines, outweighing the benefit of the green claim', 'Correct.'],
        ['Higher sales', 'Unlikely.'],
        ['No effect', 'Unlikely.'],
        ['Lower taxes', 'Unrelated.'],
      ], 0)),
      ao(3, mc('Which of these is an example of resource depletion?', [
        ['Fishing so heavily that fish stocks collapse', 'Correct.'],
        ['Planting new forests', 'Opposite.'],
        ['Recycling glass', 'Opposite.'],
        ['Using solar panels', 'Opposite.'],
      ], 0)),
    ],
  },
};
