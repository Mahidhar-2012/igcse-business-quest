import { mc, multi, match, cloze, short, ao } from '../builders.js';

// Unit 6 (External influences on business): harder replacements and extra question types.

export const h6 = {
  replace: {
    // ---------- The business cycle ----------
    'u6-business-cycle:2': ao(4, mc('Which business is most likely to gain customers during a recession?', [
      ['A discount retailer selling basic own-brand goods at low prices', 'Correct: households trade down.'],
      ['A luxury yacht builder selling highly priced custom boats', 'Luxuries suffer.'],
      ['A premium holiday firm selling long trips to far-off islands', 'Holidays are cut first.'],
      ['A designer fashion house selling limited-edition clothes', 'Luxuries suffer.'],
    ], 0)),
    'u6-business-cycle:6': ao(3, mc('In a boom, which problem is most likely for a manufacturer?', [
      ['Rising wage and material costs, and difficulty recruiting staff', 'Correct.'],
      ['Falling demand for its products, and a need to cut jobs', 'That is a recession.'],
      ['Falling prices for raw materials, and unused factory space', 'Unlikely in a boom.'],
      ['Falling interest rates, and difficulty in finding any customers', 'Unlikely in a boom.'],
    ], 0)),
    'u6-business-cycle:7': ao(4, mc('Which statement best justifies a firm keeping a cash reserve during a boom?', [
      ['Booms are followed by downturns, and reserves protect against falling sales', 'Correct.'],
      ['Booms last for ever, so reserves are the best way to raise profits', 'Booms end.'],
      ['Reserves earn the highest return of any possible use of the money', 'Not true.'],
      ['The law requires firms to hold cash equal to their yearly sales', 'No such law.'],
    ], 0)),
    'u6-business-cycle:c0.0': ao(2, mc('Output has fallen for two years, unemployment is 14% and demand is very weak. Which stage of the business cycle is this?', [
      ['Slump (deep recession)', 'Correct.'],
      ['Boom', 'High output.'],
      ['Early recovery', 'Output would be starting to rise.'],
      ['Peak', 'Output would be at its highest.'],
    ], 0)),
    'u6-business-cycle:c1.0': ao(4, mc('In a recession a luxury car dealer’s sales fall 40% while a budget supermarket’s rise 5%. Which explanation is best?', [
      ['People cut spending on expensive non-essentials and trade down to cheaper goods', 'Correct.'],
      ['People spend more on luxuries when their incomes are under pressure', 'Opposite.'],
      ['Supermarkets must have cut prices by 40% to win these extra customers', 'Not stated.'],
      ['Car dealers always have weaker marketing than supermarket chains do', 'Not supported.'],
    ], 0)),
    'u6-business-cycle:c3.0': ao(4, mc('Ingredient costs rise 8% through inflation. A restaurant fears customers will not pay more. Which statement is best?', [
      ['If it cannot raise prices, margins fall; it may need to cut other costs or adjust the menu', 'Correct.'],
      ['Profit margins are unaffected, since customers always accept price rises', 'Not true.'],
      ['Margins rise, because higher ingredient costs mean more is spent per meal', 'Not true.'],
      ['The restaurant must close, since inflation always forces firms out of business', 'Too extreme.'],
    ], 0)),
    'u6-business-cycle:c4.0': ao(4, mc('An economy grows at 4% a year. Which effect is best justified for a furniture retailer?', [
      ['Incomes and demand rise so sales may grow, but rivals may also expand', 'Correct.'],
      ['Demand falls, since people buy less furniture when incomes are rising', 'Normally the opposite.'],
      ['Sales are unaffected, since furniture is never linked to incomes', 'Furniture sales respond to incomes.'],
      ['Costs fall automatically, since growth lowers prices of materials', 'Not necessarily.'],
    ], 0)),

    // ---------- Government policy ----------
    'u6-government-policy:1': ao(3, mc('Which government policy is most likely to increase demand for builders?', [
      ['More government spending on housing and roads', 'Correct.'],
      ['Higher interest rates on mortgages and business loans', 'Reduces demand.'],
      ['Higher taxes on companies’ profits from building work', 'Reduces demand.'],
      ['Cuts in public spending on schools and hospitals', 'Reduces demand.'],
    ], 0)),
    'u6-government-policy:2': ao(4, mc('A government raises VAT on luxury goods by 10 percentage points. What is the most likely result for a luxury retailer?', [
      ['Higher prices reduce demand, which may force it to cut costs or margins', 'Correct.'],
      ['Higher prices raise demand, since luxury customers do not mind price rises', 'Not likely.'],
      ['Prices are unchanged, since VAT is paid only by the government', 'VAT raises prices.'],
      ['The retailer gains, since VAT revenue is passed on to businesses', 'Not true.'],
    ], 0)),
    'u6-government-policy:6': ao(3, mc('Which is a likely business response to a rise in corporation tax?', [
      ['Reduce costs, adjust prices or delay investment', 'Correct.'],
      ['Increase its profit before tax by ignoring all of its costs', 'Not logical.'],
      ['Stop paying tax, since businesses may choose not to pay it', 'Illegal.'],
      ['Pay shareholders more from before-tax profit than the firm earns', 'Not logical.'],
    ], 0)),
    'u6-government-policy:7': ao(4, mc('Which statement best evaluates a decision to cut infrastructure spending to reduce borrowing?', [
      ['It may cut the budget deficit but reduces demand for construction firms', 'Correct.'],
      ['It raises demand for construction firms and also cuts the deficit', 'Contradictory.'],
      ['It has no effect on any business, since public spending is separate', 'It affects contractors.'],
      ['It increases the deficit, since lower spending always raises borrowing', 'Opposite.'],
    ], 0)),
    'u6-government-policy:c1.0': ao(3, mc('Income tax rises and consumers have less spending power. Which business is likely to be affected most?', [
      ['A restaurant selling non-essential meals', 'Correct.'],
      ['A supplier of basic food staples to households', 'Essentials hold up.'],
      ['A water company supplying homes with a basic need', 'Essentials hold up.'],
      ['A pharmacy supplying prescribed medicines', 'Essentials hold up.'],
    ], 0)),
    'u6-government-policy:c2.0': ao(3, mc('A government announces a $5bn programme to build roads and railways. Which firm benefits most directly?', [
      ['A construction company, through contracts, and its suppliers', 'Correct.'],
      ['An online clothing retailer selling only to overseas buyers', 'Indirect at best.'],
      ['A luxury restaurant that opens only in the evenings', 'Indirect at best.'],
      ['A holiday firm that sells flights from foreign airports', 'Indirect at best.'],
    ], 0)),
    'u6-government-policy:c5.0': ao(4, mc('A business with a large variable-rate loan sees interest rates rise by 2 percentage points. Which response is best justified?', [
      ['Reduce debt or fix the interest rate, and delay new borrowing, to limit costs', 'Correct.'],
      ['Borrow more at once, since higher rates mean cheaper repayments', 'Opposite.'],
      ['Ignore the change, since interest has no effect on business costs', 'It does.'],
      ['Stop paying interest until rates fall back to their earlier level', 'Not allowed.'],
    ], 0)),
    'u6-government-policy:c6.0': ao(4, mc('A government cuts corporation tax from 25% to 15% hoping for more investment. Which condition would make this most successful?', [
      ['Firms use the extra retained profit to invest and expand rather than only pay dividends', 'Correct.'],
      ['Firms pay the extra profit as dividends and invest nothing in new projects', 'Does not meet the aim.'],
      ['Firms move abroad, since a lower tax rate makes the country unattractive', 'Opposite.'],
      ['Firms cut staff to keep the tax saving as extra profit for owners', 'Does not meet the aim.'],
    ], 0)),

    // ---------- Globalisation and trade ----------
    'u6-globalisation:2': ao(4, mc('Which is the best-justified reason for a government to sign a free trade agreement with a neighbour?', [
      ['Lower trade barriers can raise exports and give consumers more choice', 'Correct.'],
      ['Higher tariffs on neighbours’ goods protect all the country’s industries', 'Opposite.'],
      ['Imports fall to zero, so domestic firms face no competition at all', 'Opposite.'],
      ['Import prices rise, since the agreement removes competition between firms', 'Opposite.'],
    ], 0)),
    'u6-globalisation:5': ao(4, mc('A quota limits car imports to 100,000 a year. What is the most likely effect on prices?', [
      ['Higher prices, because supply is restricted', 'Correct.'],
      ['Lower prices, because imports are cheaper under a quota', 'Opposite.'],
      ['No change in prices, because the quota affects only exports', 'Quotas limit imports.'],
      ['Higher prices, but only for cars made in the importing country', 'Not the main effect.'],
    ], 0)),
    'u6-globalisation:6': ao(3, mc('Which factor is least likely to explain faster globalisation?', [
      ['Higher import tariffs and quotas', 'Correct: barriers slow trade.'],
      ['Cheaper and faster transport of goods', 'Speeds globalisation.'],
      ['Wider use of the internet for communication', 'Speeds globalisation.'],
      ['Growth of multinational companies in many countries', 'Speeds globalisation.'],
    ], 0)),
    'u6-globalisation:7': ao(4, mc('A firm earns €1m from the euro area. The pound rises from €1.10 to €1.25. What happens to the pound value of the earnings?', [
      ['They fall, from about £909,000 to £800,000', 'Correct: 1m ÷ 1.10 and 1m ÷ 1.25.'],
      ['They rise, from about £800,000 to £909,000', 'Reversed.'],
      ['They stay the same, as the euro amount is unchanged', 'The pound value changes.'],
      ['They rise, from £1.10m to £1.25m', 'Mixes up the units.'],
    ], 0)),
    'u6-globalisation:c0.0': ao(3, mc('A clothing firm designs in Italy, makes in Vietnam and sells online worldwide using cargo ships and the internet. Which factor explains this most?', [
      ['Better transport and communication technology', 'Correct.'],
      ['Higher tariffs between countries', 'Barriers slow globalisation.'],
      ['Falling world population', 'Not relevant.'],
      ['Strict limits on foreign investment', 'Barriers slow globalisation.'],
    ], 0)),
    'u6-globalisation:c3.0': ao(4, mc('A government introduces an import quota on steel. Who benefits most, and who loses most?', [
      ['Domestic steel producers benefit; steel-using manufacturers lose from higher prices', 'Correct.'],
      ['Steel-using manufacturers benefit; domestic steel producers lose sales', 'Reversed.'],
      ['Foreign producers benefit; domestic steel producers lose most', 'Foreign producers are restricted.'],
      ['Everyone benefits equally, because the quota has no effect on prices', 'Not true.'],
    ], 0)),
    'u6-globalisation:c4.0': ao(4, mc('A multinational builds a factory in a country with a high import tariff on its goods. Which reason is best justified?', [
      ['It avoids the tariff by producing locally and can serve the market more cheaply', 'Correct.'],
      ['It wants to pay the tariff on every unit, to help the host economy', 'Not logical.'],
      ['It plans to export nothing, because tariffs forbid local production', 'Not logical.'],
      ['It wants higher costs, so that its brand seems more exclusive', 'Not logical.'],
    ], 0)),
    'u6-globalisation:c5.0': ao(3, mc('A multinational factory employs 2,000 local people and exports 70% of its output. Which pair is an advantage to the host country?', [
      ['Jobs, investment and export earnings', 'Correct.'],
      ['Pollution, profit repatriation and lost jobs', 'Disadvantages.'],
      ['Lower wages, fewer exports and less investment', 'Not advantages.'],
      ['Job losses, lower tax and more imports', 'Not advantages.'],
    ], 0)),
    'u6-globalisation:c6.0': ao(3, mc('A host country finds most of a multinational’s profit is sent home and the factory pollutes a river. Which two problems is this?', [
      ['Repatriation of profits and environmental damage', 'Correct.'],
      ['Job creation and technology transfer', 'Advantages.'],
      ['Higher exports and extra tax revenue', 'Advantages.'],
      ['Lower unemployment and better infrastructure', 'Advantages.'],
    ], 0)),
    'u6-globalisation:c7.0': ao(4, mc('A currency appreciates from $1 = 10 pesos to $1 = 8 pesos, so the peso is stronger. Which firm is most likely to gain?', [
      ['A peso-based firm importing machinery priced in dollars', 'Correct: imports cost fewer pesos.'],
      ['A peso-based firm exporting goods priced in pesos to the US', 'Exports become dearer.'],
      ['A US firm importing goods that are priced in pesos', 'Each peso now costs more dollars, so its imports become dearer.'],
      ['A peso-based firm earning dollars from foreign tourists', 'Dollar earnings are now worth fewer pesos.'],
    ], 0)),
    'u6-globalisation:c9.0': ao(4, mc('A small local furniture firm fears globalisation. Which approach is best justified as an opportunity?', [
      ['Sell unique designs online to overseas customers and source cheaper materials abroad', 'Correct.'],
      ['Lower the quality to compete only on price with the large importers', 'Weak response.'],
      ['Close the business, since no small firm can ever compete', 'Too extreme.'],
      ['Ask the government to stop all imports of furniture permanently', 'Not under the firm’s control.'],
    ], 0)),
    'u6-globalisation:c10.0': ao(4, mc('Which statement best evaluates a UK pharmaceutical firm opening a plant in India?', [
      ['Lower labour costs and new market access, but cultural, legal and communication challenges', 'Correct.'],
      ['Higher labour costs and a smaller market, but no cultural challenges at all', 'Opposite.'],
      ['No effect on costs or markets, since location does not matter to firms', 'Location matters.'],
      ['Certain profit, since overseas plants never face any legal difficulties', 'No such certainty.'],
    ], 0)),
    'u6-globalisation:c11.0': ao(4, mc('A 25% tariff protects a country’s car industry. Which long-term risk is best justified?', [
      ['Domestic firms may become less efficient without competition', 'Correct.'],
      ['Domestic firms will certainly become more efficient with no rivals', 'Not certain.'],
      ['Consumers will pay lower prices, since imports are now cheaper', 'Prices rise.'],
      ['The tariff will earn no revenue, because nobody will import cars', 'Some will.'],
    ], 0)),
    'u6-globalisation:c12.0': ao(4, mc('The home currency depreciates 15% and a UK firm imports its raw materials. Which response is best justified?', [
      ['Look for domestic suppliers or fix exchange rates in advance', 'Correct.'],
      ['Buy even more imports, since a weaker currency makes imports cheaper', 'Imports get dearer.'],
      ['Ignore it, since exchange rates have no effect on importers’ costs', 'They do.'],
      ['Raise export prices by 15% to cover the extra import costs', 'Does not tackle the cause.'],
    ], 0)),

    // ---------- Environment and ethics ----------
    'u6-environment-ethics:1': ao(3, mc('Which is an example of an external benefit of a new supermarket?', [
      ['Local jobs and more spending in nearby shops', 'Correct: benefits to third parties.'],
      ['The profit earned by the supermarket’s owners', 'A private benefit.'],
      ['Wages paid to the supermarket’s own staff', 'Private cost of the firm.'],
      ['The money customers save on their weekly shop', 'A private benefit to customers.'],
    ], 0)),
    'u6-environment-ethics:2': ao(4, mc('Which statement best explains why some firms choose to be ethical even when it raises costs?', [
      ['A good reputation can build loyalty, attract staff and reduce risk of boycotts', 'Correct.'],
      ['Ethical behaviour always lowers costs in the short run for any firm', 'Not true.'],
      ['The law forbids firms from making any profit if they are ethical', 'Not true.'],
      ['Ethical firms are exempt from all taxes and regulations', 'Not true.'],
    ], 0)),
    'u6-environment-ethics:5': ao(3, mc('Which is a method pressure groups use to influence business decisions?', [
      ['Social media campaigns and boycotts', 'Correct.'],
      ['Setting the firm’s prices for it', 'Not a power.'],
      ['Appointing the firm’s directors directly', 'Not a power.'],
      ['Paying the firm’s workers each month', 'Not a power.'],
    ], 0)),
    'u6-environment-ethics:6': ao(4, mc('A firm advertises itself as “green” but is found dumping waste illegally. What is the most likely result?', [
      ['Severe reputational damage and fines that outweigh any savings', 'Correct.'],
      ['Higher sales, since customers prefer firms that advertise as green', 'Not once discovered.'],
      ['No change, since advertising claims cannot be checked by anyone', 'They can.'],
      ['Lower costs for good, since the waste no longer has to be treated', 'Fines and damage outweigh it.'],
    ], 0)),
    'u6-environment-ethics:7': ao(2, mc('Which of these is an example of resource depletion?', [
      ['Fishing so heavily that fish stocks collapse', 'Correct.'],
      ['A factory releasing smoke into the air', 'Pollution.'],
      ['A river being polluted with waste', 'Pollution.'],
      ['Noise from a nearby airport', 'Noise pollution.'],
    ], 0)),
    'u6-environment-ethics:c0.0': ao(4, mc('A cement works provides 400 jobs and high local taxes, but its dust causes asthma among nearby children. Which pair describes this?', [
      ['External benefits (jobs, taxes) and external costs (dust and health)', 'Correct.'],
      ['Private benefits only, since the dust affects nobody outside the works', 'Third parties are affected.'],
      ['External costs only, since the jobs are paid for by the works itself', 'Jobs are an external benefit too.'],
      ['Private costs only, since the works pays all of the costs itself', 'Others bear costs.'],
    ], 0)),
    'u6-environment-ethics:c1.0': ao(3, mc('A paper company cuts down forests and releases chemicals into a river. Which two environmental effects does this show?', [
      ['Depletion of resources and pollution', 'Correct.'],
      ['Job creation and tax payments', 'Not environmental effects.'],
      ['Higher exports and lower prices', 'Not environmental effects.'],
      ['Better reputation and loyal customers', 'Not environmental effects.'],
    ], 0)),
    'u6-environment-ethics:c2.0': ao(4, mc('A business installs solar panels and sells recycled-material products. Which reason is best justified?', [
      ['To improve reputation, win eco-conscious customers and cut long-run energy costs', 'Correct.'],
      ['To raise its costs in every year, so that rivals cannot compete', 'Not logical.'],
      ['To avoid every tax that is due on the firm’s profits', 'Not logical.'],
      ['To stop customers from buying its products from other shops', 'Not logical.'],
    ], 0)),
    'u6-environment-ethics:c3.0': ao(4, mc('A new law bans single-use plastic packaging. Which statement best evaluates the effect on a food producer?', [
      ['Costs may rise for new packaging, but the firm may gain a cleaner image', 'Correct.'],
      ['Costs must fall, since the law reduces the cost of all packaging', 'Not necessarily.'],
      ['There is no effect, since laws on packaging do not apply to food', 'They do apply.'],
      ['The firm may ignore the law, since small food firms are exempt', 'Not allowed.'],
    ], 0)),
    'u6-environment-ethics:c4.0': ao(4, mc('A clothing firm finds that a supplier uses child labour. Which decision is best justified?', [
      ['Switch to audited ethical suppliers, protecting its reputation and long-term sales', 'Correct.'],
      ['Keep the supplier quiet, since lower costs matter more than ethics', 'Risky.'],
      ['Ask customers to pay more but make no change to its suppliers', 'Does not solve the problem.'],
      ['Close all of its shops, since it can no longer be sure of its stock', 'Extreme.'],
    ], 0)),
    'u6-environment-ethics:c6.0': ao(4, mc('A pressure group runs a social media campaign against a fast-fashion firm’s labour practices. Which result is most likely?', [
      ['Bad publicity, falling sales and pressure to change policy', 'Correct.'],
      ['Higher sales, since all publicity is good for a firm’s brand', 'Not for negative stories.'],
      ['No effect, since social media has no influence on customers', 'It can influence.'],
      ['A fall in the firm’s costs, since labour rules are removed', 'Not likely.'],
    ], 0)),
    'u6-environment-ethics:c7.0': ao(4, mc('A firm spends $400,000 on pollution controls to meet new rules. Which statement best evaluates the decision?', [
      ['It raises costs but avoids fines, protects its licence to operate and its image', 'Correct.'],
      ['It lowers costs in every year, since pollution controls pay for themselves', 'Not necessarily.'],
      ['It has no benefit, since firms are free to ignore all new rules', 'Not true.'],
      ['It guarantees higher profit, since customers prefer all clean firms', 'No guarantee.'],
    ], 0)),
    'u6-environment-ethics:c8.0': ao(4, mc('A business pays suppliers fair prices and its own prices rise 4%. Customers value this but rivals are cheaper. Which statement is best?', [
      ['It may lose price-sensitive customers if it cannot justify the higher prices', 'Correct.'],
      ['It will certainly keep every customer, since ethics always outweigh price', 'Not certain.'],
      ['It will lose all customers at once, since rivals always charge less', 'Overstated.'],
      ['It will gain, since all customers ignore price when ethics are shown', 'Not true.'],
    ], 0)),
    'u6-environment-ethics:c9.0': ao(4, mc('A campaign group organises a boycott of a firm’s products. Which response is best justified?', [
      ['Engage with the group, investigate the claims and change policy where justified', 'Correct.'],
      ['Ignore the boycott entirely and hope that it ends of its own accord', 'Risky.'],
      ['Threaten legal action against every customer who joins the boycott', 'Damaging.'],
      ['Raise prices, since customers who remain will accept higher costs', 'Not logical.'],
    ], 0)),
  },

  add: {
    'u6-business-cycle': [
      match('Match each stage of the business cycle to its description.', [
        ['Boom', 'Output and employment are high; costs and prices rise'],
        ['Recession', 'Output falls and unemployment rises'],
        ['Slump', 'Very low output and high unemployment'],
        ['Recovery', 'Output begins to rise again'],
      ]),
      short('Explain one way a recession might affect a business.', {
        command: 'Explain',
        points: ['Demand or sales fall as consumers have less to spend', 'Revenue and profit fall, so the firm may cut costs or jobs'],
        model: 'In a recession people have less to spend, so demand for the firm’s products falls. Revenue and profit decline, and the firm may need to cut costs or jobs.',
      }),
    ],
    'u6-government-policy': [
      multi('Which of these are likely effects of an increase in interest rates for a business with a loan? Select all that apply.', [
        ['The cost of repaying the loan rises', 'Interest is a cost of borrowing.', true],
        ['Consumers may spend less, so demand can fall', 'Borrowing becomes dearer for households too.', true],
        ['The firm’s loan is reduced automatically', 'The principal is unchanged.', false],
        ['The firm’s exports always rise', 'Not directly linked.', false],
      ]),
      short('Define the term “corporation tax”.', {
        kind: 'Definition',
        points: ['A tax on the profits', 'of companies'],
        model: 'Corporation tax is a tax on the profits made by companies.',
      }),
    ],
    'u6-globalisation': [
      match('Match each term to its meaning.', [
        ['Tariff', 'A tax on imported goods'],
        ['Quota', 'A limit on the quantity of imports'],
        ['Multinational', 'A business that operates in more than one country'],
        ['Exchange rate', 'The price of one currency in terms of another'],
      ]),
      short('Explain one way a stronger currency could harm an exporter.', {
        command: 'Explain',
        points: ['Foreign buyers need more of their own currency to pay the same price', 'Exports become dearer, so demand and sales may fall'],
        model: 'When the currency rises, foreign buyers must pay more of their own currency for the same goods. Exports become more expensive, so sales may fall.',
      }),
    ],
    'u6-environment-ethics': [
      match('Match each term to an example.', [
        ['External cost', 'Noise and dust suffered by nearby residents'],
        ['External benefit', 'Local shops gaining from a new factory’s workers'],
        ['Pressure group', 'An organisation campaigning against pollution'],
        ['Ethical behaviour', 'Paying fair prices to suppliers'],
      ]),
      short('Explain one benefit to a business of acting ethically.', {
        command: 'Explain',
        points: ['Gives an ethical action (for example fair treatment of staff or suppliers)', 'Builds reputation, loyalty or staff commitment, which supports sales'],
        model: 'A firm that treats staff and suppliers fairly builds a good reputation. Customers may be more loyal and staff more committed, which helps sales.',
      }),
    ],
  },
};
