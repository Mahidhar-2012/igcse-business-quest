import { mc, fig } from './helpers.js';
import { multi, match, cloze, short } from '../../data/builders.js';

// Economics: harder replacements and extra question types, keyed by question id (see src/data/overlay.js).
// Options are written to the same length and shape, and most wrong options are common mistakes.

export const hard = {
  replace: {
    // ---------- 1 The basic economic problem ----------
    'e1-problem:c0.0': mc('Which situation is the clearest example of scarcity?', [
      ['A government cannot afford to build every school and hospital that people want', 'Correct: wants exceed the resources available.'],
      ['A shop has too many unsold goods in its warehouse after a poor season', 'That is a surplus in one market, not scarcity.'],
      ['A country imports more goods than it exports in a particular year', 'That is a trade deficit.'],
      ['A farmer sells a harvest at a lower price than in the year before', 'That is a price change.'],
    ], 0),
    'e1-problem:c1.0': mc('A government spends $2bn on a new railway instead of cutting income tax. Which basic economic question does this decision mainly answer?', [
      ['What to produce, because resources go to transport rather than to private spending', 'Correct.'],
      ['How to produce, because the railway must use either workers or machines', 'The choice is between goods, not methods.'],
      ['Who to produce for, because rail passengers will be the only people to benefit', 'The question is about the use of scarce resources.'],
      ['None of them, because tax decisions are not an economic matter at all', 'Every allocation decision answers these questions.'],
    ], 0),
    'e1-problem:c2.0': mc('Which of these is an economic good, not a free good?', [
      ['Tap water supplied to homes through a pipe', 'Correct: resources are used to collect, clean and deliver it.'],
      ['Rain falling on a field during a storm', 'Rainfall itself has no opportunity cost.'],
      ['Sunlight reaching a garden in the summer', 'No resources are used to provide it.'],
      ['Wind blowing across an open beach', 'No resources are used to provide it.'],
    ], 0),
    'e1-factors:c0.0': mc('A café owner takes the risk of opening a restaurant, hires staff and buys equipment. Which statement is correct?', [
      ['The owner supplies enterprise and earns profit; the staff supply labour and earn wages', 'Correct.'],
      ['The owner supplies capital and earns interest; the staff supply enterprise', 'Capital is the equipment, and enterprise is the risk-taking.'],
      ['The owner supplies labour and earns wages; the equipment earns profit', 'Equipment earns interest as capital, not profit.'],
      ['The owner supplies land and earns rent; the staff supply capital and earn interest', 'Land is natural resources.'],
    ], 0),
    'e1-factors:c1.0': mc('Which change would raise the quality, rather than the quantity, of a country’s labour force?', [
      ['A national programme of apprenticeships and technical training', 'Correct: skills improve.'],
      ['A rise in the retirement age from 65 to 68 years old', 'More workers, not better workers.'],
      ['More immigrants arriving to work in the country’s industries', 'More workers, not better workers.'],
      ['A rise in the birth rate over the next twenty years', 'More people, not better skills.'],
    ], 0),
    'e1-opportunity:c0.0': mc('A farmer can use a field for wheat ($4,000 profit), potatoes ($3,000) or to rent out ($3,500). He grows wheat. What is the opportunity cost?', [
      ['$3,500, the rent he could have received', 'Correct: the highest-valued alternative given up.'],
      ['$3,000, the profit from the potatoes he could have grown', 'Not the next best alternative.'],
      ['$6,500, the value of the potatoes and the rent added together', 'Only the single next best alternative counts.'],
      ['$4,000, the profit he earns from the wheat he decided to grow', 'This is the benefit of the chosen use.'],
    ], 0),
    'e1-opportunity:c1.0': mc('A government has $2 billion and can build schools (benefit 100) or roads (benefit 80) or a stadium (benefit 60). It builds schools. What is the opportunity cost?', [
      ['The roads that could have been built, the next best use of the money', 'Correct.'],
      ['The $2 billion that was spent, since this is the cost of the decision', 'That is the resource cost, not the opportunity cost.'],
      ['The roads and the stadium together, since neither was built', 'Only the next best alternative is counted.'],
      ['The stadium, since it was the least valuable of the three choices', 'The next best is roads.'],
    ], 0),
    'e1-ppc:c0.0': fig({ svg: 'ppc' }, mc('A country is at point B, inside its PPC. Which statement is correct?', [
      ['Some resources are unemployed or used inefficiently, so more could be produced', 'Correct.'],
      ['It is producing as much as possible, using every resource fully', 'That describes a point on the curve.'],
      ['It has too few resources to move to any point on the curve', 'It can move to the curve without more resources.'],
      ['It has achieved growth because it is producing less of both goods', 'Producing less is not growth.'],
    ], 0)),
    'e1-ppc:c1.0': mc('An economy on its PPC produces 100 cars and 40 tonnes of food. It moves to 110 cars and 30 tonnes of food. What is the opportunity cost of the extra 10 cars?', [
      ['10 tonnes of food', 'Correct: the food given up.'],
      ['110 cars, which is the new number of cars produced', 'Opportunity cost is the amount of the other good given up.'],
      ['30 tonnes of food, which is the amount still produced', 'It is the fall, not the new level.'],
      ['Nothing, since all resources are still being fully used', 'Moving along the PPC has a cost.'],
    ], 0),
    'e1-ppc:c2.0': fig({ svg: 'ppcShift' }, mc('Which event would most likely shift a country’s PPC outwards?', [
      ['Discovery of a large oil field and the adoption of new technology', 'Correct: more resources and better technology.'],
      ['A fall in unemployment from 9% to 5% during a period of recovery', 'A move towards the curve, not a shift of it.'],
      ['A move from producing more food to producing more cars', 'A movement along the curve.'],
      ['A temporary rise in the price of oil on world markets', 'A price change, not a change in capacity.'],
    ], 0)),

    // ---------- 2 The allocation of resources ----------
    'e2-markets:c0.0': mc('Which is the best example of a market for a factor of production?', [
      ['A job-search website where firms advertise vacancies to workers', 'Correct: the labour market.'],
      ['A supermarket where households buy their weekly groceries', 'A market for goods.'],
      ['A food stall that sells sandwiches to office workers', 'A market for goods.'],
      ['A cinema that sells tickets to families at the weekend', 'A market for services.'],
    ], 0),
    'e2-demand:c0.0': fig({ svg: 'demandCurve' }, mc('Why does a demand curve slope downwards?', [
      ['At lower prices more people are willing and able to buy', 'Correct.'],
      ['At lower prices firms are willing to supply a larger quantity', 'That explains the supply curve.'],
      ['At lower prices consumers have a smaller income to spend', 'Price changes do not change income.'],
      ['At lower prices the quality of the good is higher for buyers', 'Not a reason.'],
    ], 0)),
    'e2-demand:c1.0': mc('The price of coffee rises and fewer cups are sold. How should this be shown on a demand diagram?', [
      ['A movement up along the same demand curve (a contraction)', 'Correct.'],
      ['A shift of the whole demand curve to the left (a decrease in demand)', 'Own price causes movement, not a shift.'],
      ['A shift of the whole demand curve to the right (an increase in demand)', 'Wrong direction and wrong cause.'],
      ['A movement down along the same demand curve (an extension)', 'An extension follows a price fall.'],
    ], 0),
    'e2-demand:c2.0': fig({ svg: 'demandShift' }, mc('Which change would shift the demand curve for tea to the right?', [
      ['A rise in the price of coffee, which is a substitute for tea', 'Correct.'],
      ['A fall in the price of tea, which makes it cheaper to buy', 'A movement along the curve.'],
      ['A rise in the price of milk, which is a complement for tea', 'Would reduce demand for tea.'],
      ['A fall in consumers’ incomes, when tea is a normal good', 'Would reduce demand for tea.'],
    ], 0)),
    'e2-supply:c0.0': mc('Why does a supply curve slope upwards?', [
      ['A higher price makes it profitable to supply more, and may cover rising costs', 'Correct.'],
      ['A higher price makes consumers want to buy a larger quantity', 'That would be demand.'],
      ['A higher price makes the costs of production fall for every firm', 'Costs are not caused by price.'],
      ['A higher price makes the government increase the quantity supplied', 'Firms respond to prices.'],
    ], 0),
    'e2-supply:c1.0': mc('The price of wheat rises and farmers supply more. How is this described?', [
      ['An extension of supply (movement along the curve)', 'Correct.'],
      ['An increase in supply (shift of the curve to the right)', 'A shift needs a non-price cause.'],
      ['A contraction of supply (movement down the curve)', 'A contraction follows a price fall.'],
      ['A decrease in supply (shift of the curve to the left)', 'Wrong cause and direction.'],
    ], 0),
    'e2-supply:c2.0': fig({ svg: 'supplyCurve' }, mc('Which change would shift the supply curve for cars to the left?', [
      ['A rise in the price of steel, which raises the cost of making cars', 'Correct.'],
      ['A new technology that makes cars faster to produce in factories', 'Shifts supply to the right.'],
      ['A government subsidy paid to car makers for each car produced', 'Shifts supply to the right.'],
      ['A rise in the price of cars, which makes producing them more profitable', 'A movement along the curve.'],
    ], 0)),
    'e2-price:c0.0': mc('Which statement best describes how the price mechanism helps to answer “what to produce”?', [
      ['Rising prices and profits in one market attract resources into producing it', 'Correct.'],
      ['The government tells every firm which goods and how many to make', 'That is central planning.'],
      ['Firms produce the same goods every year, whatever consumers choose', 'Firms respond to price signals.'],
      ['Consumers decide the production methods used by each firm', 'Producers decide methods.'],
    ], 0),
    'e2-price:c1.0': fig({ svg: 'equilibrium' }, mc('At $4 demand is 80 and supply is 40; at $6 demand is 60 and supply is 60; at $8 demand is 40 and supply is 80. What happens at $8?', [
      ['There is a surplus of 40, which tends to push the price down', 'Correct: supply exceeds demand.'],
      ['There is a shortage of 40, which tends to push the price up', 'That happens at $4.'],
      ['The market is in equilibrium, so there is no pressure on price', 'Equilibrium is at $6.'],
      ['There is a surplus of 80, which tends to push the price up', 'The surplus is 40 and pushes price down.'],
    ], 0)),
    'e2-price:c2.0': fig({ svg: 'disequilibrium' }, mc('At a price below the equilibrium price, what will happen in a free market?', [
      ['A shortage appears, and competition between buyers pushes the price up', 'Correct.'],
      ['A surplus appears, and competition between sellers pushes the price down', 'That follows a price above equilibrium.'],
      ['Quantity demanded equals quantity supplied, so the price stays the same', 'Only at equilibrium.'],
      ['The supply curve shifts to the left until the shortage disappears', 'The price moves; the curve does not shift.'],
    ], 0)),
    'e2-pricechange:c0.0': fig({ svg: 'priceChange' }, mc('Bad weather destroys part of the orange harvest. What happens to the equilibrium price and quantity of oranges?', [
      ['Price rises and quantity falls, as the supply curve shifts left', 'Correct.'],
      ['Price falls and quantity rises, as the supply curve shifts right', 'That follows an increase in supply.'],
      ['Price rises and quantity rises, as the demand curve shifts right', 'That follows an increase in demand.'],
      ['Price falls and quantity falls, as the demand curve shifts left', 'That follows a decrease in demand.'],
    ], 0)),
    'e2-pricechange:c1.0': mc('New competitors enter the smartphone market and supply increases. Which result is most likely?', [
      ['Price falls and quantity traded rises, as the supply curve shifts right', 'Correct.'],
      ['Price rises and quantity traded falls, as the supply curve shifts left', 'Opposite.'],
      ['Price falls and quantity traded falls, as the demand curve shifts left', 'Demand has not changed.'],
      ['Price is unchanged, since supply changes never affect market prices', 'Supply changes move the equilibrium.'],
    ], 0),
    'e2-ped:c1.0': fig({ svg: 'pedCurves' }, mc('Which demand curve shows perfectly inelastic demand?', [
      ['A vertical line: quantity demanded does not change when price changes', 'Correct.'],
      ['A horizontal line: any price rise cuts quantity demanded to zero', 'That is perfectly elastic.'],
      ['A steep downward-sloping line with PED between 0 and 1', 'That is inelastic, not perfectly inelastic.'],
      ['A curve along which total revenue is the same at every price', 'That is unitary elasticity.'],
    ], 0)),
    'e2-ped:c2.0': mc('Which good is most likely to have inelastic demand?', [
      ['Petrol for a worker who commutes by car and has no other way to get to work', 'Correct: a necessity with no close substitute.'],
      ['A particular brand of chocolate bar sold in every supermarket and shop', 'Many substitutes: elastic.'],
      ['A holiday abroad booked well in advance by a family', 'A luxury with substitutes: elastic.'],
      ['A new fashion item that has just become popular this month', 'Not essential, with many substitutes.'],
    ], 0),
    'e2-ped:c4.0': mc('A government raises the tax on cigarettes by 20% and the quantity sold falls by only 4%. What does this show, and what happens to government revenue?', [
      ['PED is 0.2 (inelastic), so tax revenue rises', 'Correct: 4 ÷ 20 = 0.2.'],
      ['PED is 5 (elastic), so tax revenue rises', 'Mixed up the numerator and denominator.'],
      ['PED is 0.2 (inelastic), so tax revenue falls', 'Quantity falls proportionally less, so revenue rises.'],
      ['PED is 24 (elastic), so tax revenue falls', 'Added the two percentages.'],
    ], 0),
    'e2-pes:c1.0': mc('Which supply is most likely to be inelastic in the short run?', [
      ['New houses, because building takes time and sites are limited', 'Correct.'],
      ['A song sold as a digital download, since copies cost almost nothing to make', 'Elastic.'],
      ['A haircut offered by a salon with several empty chairs', 'Spare capacity: elastic.'],
      ['Tinned food held in large stocks in a warehouse', 'Stocks: elastic.'],
    ], 0),
    'e2-system:c0.0': mc('Which is a weakness of a market economic system?', [
      ['Goods that cannot be charged for, such as street lighting, may not be provided', 'Correct: the market fails to provide public goods.'],
      ['Producers have an incentive to respond quickly to changes in demand', 'A strength.'],
      ['Competition between firms often keeps prices low and quality high', 'A strength.'],
      ['Consumers are able to choose from a wide range of goods', 'A strength.'],
    ], 0),
    'e2-failure:c0.0': mc('A factory pollutes a river and local fishermen lose income. The loss to the fishermen is…', [
      ['An external cost, because it falls on third parties', 'Correct.'],
      ['A private cost, because the factory has to pay it in its accounts', 'The factory does not pay it.'],
      ['An external benefit, because the factory creates jobs nearby', 'It is a cost, not a benefit.'],
      ['A merit good, because the river is worth more to the community', 'A merit good is a type of product.'],
    ], 0),
    'e2-failure:c1.0': mc('Why are private firms unlikely to provide street lighting?', [
      ['People cannot be stopped from using it, so firms cannot charge them', 'Correct: non-excludable.'],
      ['Demand for street lighting is perfectly elastic at all prices', 'Not the reason.'],
      ['Street lighting is a demerit good that harms those who use it', 'It is a public good.'],
      ['It has no benefit for the people who walk or drive past it', 'It has large benefits.'],
    ], 0),
    'e2-mixed:c0.0': mc('Which feature describes a mixed economic system?', [
      ['Private firms and the government both provide goods and services', 'Correct.'],
      ['The government owns all resources and decides all production', 'A planned economy.'],
      ['Prices are set by the market and the state does not take part', 'A pure market economy.'],
      ['There is no taxation, so the state has no income for services', 'Mixed economies tax.'],
    ], 0),
    'e2-mixed:c1.0': fig({ svg: 'maxMinPrice' }, mc('A maximum price is set below the equilibrium price. What is the most likely result?', [
      ['A shortage, because quantity demanded exceeds quantity supplied', 'Correct.'],
      ['A surplus, because quantity supplied exceeds quantity demanded', 'That follows a minimum price above equilibrium.'],
      ['Equilibrium, because both sides are made to agree on the price', 'The cap blocks equilibrium.'],
      ['A rise in quantity supplied, because sellers receive a lower price', 'A lower price reduces supply.'],
    ], 0)),
    'e2-mixed:c2.0': fig({ svg: 'indirectTax' }, mc('A government imposes an indirect tax on a good. What happens to the supply curve and the market price?', [
      ['Supply shifts to the left (upwards) and the price paid by consumers rises', 'Correct.'],
      ['Supply shifts to the right (downwards) and the price paid by consumers falls', 'That follows a subsidy.'],
      ['Demand shifts to the left and the price paid by consumers falls', 'The tax acts on supply.'],
      ['Neither curve shifts, but the quantity sold rises as tax revenue rises', 'A tax shifts supply.'],
    ], 0)),
    'e2-mixed:c3.0': fig({ svg: 'subsidy' }, mc('A government pays a subsidy to producers of electric cars. What happens?', [
      ['Supply shifts to the right, the price falls and the quantity sold rises', 'Correct.'],
      ['Supply shifts to the left, the price rises and the quantity sold falls', 'That follows a tax.'],
      ['Demand shifts to the right, the price rises and the quantity sold rises', 'The subsidy acts on supply.'],
      ['The price rises by the amount of the subsidy and the quantity is unchanged', 'The price falls.'],
    ], 0)),
    'e2-mixed:c4.0': mc('A government sells a state-owned airline to private investors. What is this called, and what is a likely aim?', [
      ['Privatisation, aiming to raise efficiency and income for the government', 'Correct.'],
      ['Nationalisation, aiming to raise efficiency and income for the government', 'Nationalisation is the reverse.'],
      ['Privatisation, aiming to give the state complete control of the airline', 'It transfers control away from the state.'],
      ['Regulation, aiming to protect consumers from unsafe flights', 'Regulation is rules, not sales.'],
    ], 0),

    // ---------- 3 Microeconomic decision-makers ----------
    'e3-money:c0.0': mc('Prices in a shop are all shown in dollars, so shoppers can compare the cost of a pair of shoes and a bag. Which function of money is this?', [
      ['Unit of account', 'Correct.'],
      ['Medium of exchange', 'This is paying for goods.'],
      ['Store of value', 'This is saving purchasing power.'],
      ['Standard of deferred payment', 'This is settling debts later.'],
    ], 0),
    'e3-money:c1.0': mc('Which is a role of a country’s central bank?', [
      ['Lending to commercial banks when they cannot find funds elsewhere', 'Correct: lender of last resort.'],
      ['Accepting small deposits from households and giving them mortgages', 'A commercial bank role.'],
      ['Setting the wages of workers in every private firm in the economy', 'Not its role.'],
      ['Selling goods and services to households in competition with shops', 'Not its role.'],
    ], 0),
    'e3-households:c0.0': mc('Interest rates rise from 3% to 6%. What is the most likely effect on household behaviour?', [
      ['Saving becomes more attractive and borrowing for spending falls', 'Correct.'],
      ['Saving becomes less attractive and borrowing for spending rises', 'Opposite.'],
      ['Both saving and borrowing rise, as households have more to spend', 'Not logical.'],
      ['There is no change, since interest rates do not affect households', 'They do.'],
    ], 0),
    'e3-workers:c0.0': mc('Why do heart surgeons usually earn more than shop assistants?', [
      ['Few people have the skills and qualifications, so the supply of labour is small', 'Correct.'],
      ['Surgeons work more hours than shop assistants in a typical week', 'Not the reason.'],
      ['Shops do not need assistants, so the demand for them is zero', 'Demand is not zero; supply is large.'],
      ['The government fixes every surgeon’s pay above the market rate', 'Not the usual cause.'],
    ], 0),
    'e3-workers:c1.0': fig({ svg: 'labourMarket' }, mc('A minimum wage is set above the equilibrium wage. What is the most likely result?', [
      ['Some workers lose jobs, as the quantity of labour demanded falls', 'Correct.'],
      ['A shortage of workers appears, as firms try to hire more people', 'That happens if the wage is below equilibrium.'],
      ['Unemployment falls, as every worker is now paid a higher wage', 'Employment is more likely to fall.'],
      ['Labour supply falls to zero, as workers move to other countries', 'Supply rises at higher wages.'],
    ], 0)),
    'e3-workers:c2.0': mc('A worker is paid for each unit produced. What is this called, and what is a likely risk?', [
      ['Piece rate, which may reduce quality if workers rush', 'Correct.'],
      ['Time rate, which may reduce quality if workers rush', 'Time rate is pay per hour.'],
      ['Salary, which may reduce the incentive to work quickly', 'A salary is fixed per year.'],
      ['Commission, which may reduce the pay of workers who sell more', 'Commission is a share of sales.'],
    ], 0),
    'e3-firms:c0.0': mc('A firm that builds cars is in which sector, and who owns it if it is a private limited company?', [
      ['The secondary sector, owned by private shareholders', 'Correct.'],
      ['The primary sector, owned by private shareholders', 'Primary firms extract raw materials.'],
      ['The tertiary sector, owned by the government', 'Manufacturing is secondary.'],
      ['The secondary sector, owned by the government', 'A private company is not state-owned.'],
    ], 0),
    'e3-firms:c1.0': mc('Which is an example of an economy of scale?', [
      ['A large firm gets a discount for buying materials in bulk', 'Correct: average cost falls as output rises.'],
      ['A firm finds it hard to coordinate a large workforce on many sites', 'A diseconomy of scale.'],
      ['A firm pays higher wages to attract workers from its rivals', 'Not linked to scale.'],
      ['A firm receives a subsidy from the government to produce more', 'An external payment, not an economy of scale.'],
    ], 0),
    'e3-production:c1.0': mc('Which would be the most likely way to raise labour productivity?', [
      ['Training workers and giving them better machinery to use', 'Correct.'],
      ['Cutting the number of hours worked while keeping output targets', 'Unlikely to help.'],
      ['Raising the selling price of the product the workers make', 'Does not change output per worker.'],
      ['Reducing the size of the market in which the firm sells', 'Not related to productivity.'],
    ], 0),
    'e3-costs:c1.0': fig({ svg: 'atcCurve' }, mc('Which statement best explains the shape of a short-run average total cost curve?', [
      ['It falls as fixed costs are spread over more units, then rises as diseconomies appear', 'Correct: U-shaped.'],
      ['It rises all the time, because every extra unit costs more to produce', 'It falls at first.'],
      ['It falls all the time, because fixed costs fall as output rises', 'Fixed costs do not fall in total.'],
      ['It stays flat, because average cost never changes with output', 'It changes with output.'],
    ], 0)),
    'e3-markets:c0.0': mc('Which statement is most likely to be true of a market with strong competition?', [
      ['Firms must keep prices low and improve quality in order to keep customers', 'Correct.'],
      ['One firm sets the price, since customers have nowhere else to buy', 'That is a monopoly.'],
      ['Barriers to entry are high, so new firms find it hard to start', 'Competitive markets have low barriers.'],
      ['Firms have little incentive to innovate, as profits are guaranteed', 'Competition drives innovation.'],
    ], 0),

    // ---------- 4 Government and the macroeconomy ----------
    'e4-aims:c0.0': mc('Which pair of macroeconomic aims is most likely to conflict?', [
      ['Fast economic growth and protection of the environment', 'Correct: expansion can raise pollution.'],
      ['Low unemployment and higher incomes for workers', 'These usually go together.'],
      ['Low inflation and stable prices over time', 'These are the same aim.'],
      ['Economic growth and rising living standards', 'These usually go together.'],
    ], 0),
    'e4-fiscal:c0.0': mc('Which tax is an indirect tax?', [
      ['Value added tax (VAT) on goods and services', 'Correct: paid on spending.'],
      ['Income tax on wages and salaries earned by workers', 'Direct tax.'],
      ['Corporation tax on the profits of companies', 'Direct tax.'],
      ['Inheritance tax on property passed on after death', 'Direct tax.'],
    ], 0),
    'e4-fiscal:c1.0': mc('A government cuts income tax. Which is the most likely effect on the economy?', [
      ['Disposable income and spending rise, which raises demand and output', 'Correct.'],
      ['Disposable income falls, so demand and output fall in the short run', 'Opposite.'],
      ['The government’s budget moves into surplus without any other change', 'Lower tax revenue moves it towards deficit.'],
      ['Unemployment rises immediately, because firms receive less tax', 'Higher demand usually cuts unemployment.'],
    ], 0),
    'e4-monetary:c0.0': mc('A central bank raises interest rates. Which is the most likely effect?', [
      ['Borrowing and consumer spending fall, which helps to reduce inflation', 'Correct.'],
      ['Borrowing and consumer spending rise, which helps to reduce inflation', 'Spending would not rise.'],
      ['Borrowing falls, but inflation rises as firms have lower costs', 'Not logical.'],
      ['The economy grows faster, because saving is more attractive', 'Higher rates slow demand.'],
    ], 0),
    'e4-supplyside:c0.0': mc('Which policy is a supply-side policy?', [
      ['Spending more on training for unemployed workers', 'Correct: raises the quality of labour.'],
      ['Cutting interest rates to encourage households to spend', 'Monetary policy.'],
      ['Raising government spending on state benefits only', 'Fiscal policy mainly affecting demand.'],
      ['Printing more money to pay for public spending', 'Not a supply-side policy.'],
    ], 0),
    'e4-growth:c0.0': fig({ svg: 'businessCycle' }, mc('What is a recession?', [
      ['A fall in real GDP for two or more quarters in a row', 'Correct.'],
      ['A rise in the general price level over a number of years', 'That is inflation.'],
      ['A period in which real GDP grows faster than the long-run trend', 'That is a boom.'],
      ['A fall in the value of a currency against other currencies', 'That is depreciation.'],
    ], 0)),
    'e4-unemployment:c1.0': mc('Workers in a declining coal industry cannot find jobs because they lack the skills needed in new industries. What type of unemployment is this?', [
      ['Structural unemployment', 'Correct.'],
      ['Cyclical unemployment', 'This comes from a fall in overall demand.'],
      ['Frictional unemployment', 'This is the short gap between jobs.'],
      ['Seasonal unemployment', 'This depends on the time of year.'],
    ], 0),
    'e4-inflation:c1.0': mc('The world price of oil rises sharply, raising firms’ costs and prices. What type of inflation is this?', [
      ['Cost-push inflation', 'Correct.'],
      ['Demand-pull inflation', 'This comes from excess spending.'],
      ['Disinflation', 'A fall in the rate of inflation.'],
      ['Deflation', 'A fall in the general price level.'],
    ], 0),

    // ---------- 5 Economic development ----------
    'e5-living:c0.0': mc('Which three components make up the Human Development Index?', [
      ['Income per head, life expectancy and years of schooling', 'Correct.'],
      ['Inflation, unemployment and the growth rate of GDP', 'Macroeconomic indicators, not HDI.'],
      ['Exports, imports and the exchange rate of the currency', 'Trade measures.'],
      ['Population, land area and the number of hospitals', 'Not the HDI components.'],
    ], 0),
    'e5-living:c1.0': mc('Why might real GDP per head give a misleading picture of living standards?', [
      ['It is an average, so it hides inequality and ignores things like health and the environment', 'Correct.'],
      ['It is always lower than the figure in the Human Development Index', 'Not true.'],
      ['It includes only education and health spending in a country', 'It measures income.'],
      ['It cannot be calculated for countries with a growing population', 'It can.'],
    ], 0),
    'e5-poverty:c0.0': mc('A family can afford food and shelter, but has far less income than most families in its country. What is this called?', [
      ['Relative poverty', 'Correct.'],
      ['Absolute poverty', 'Basic needs cannot be met.'],
      ['Structural unemployment', 'A type of unemployment.'],
      ['Deflation', 'A fall in prices.'],
    ], 0),
    'e5-population:c1.0': mc('Which is a likely consequence of an ageing population?', [
      ['Higher government spending on healthcare and pensions', 'Correct.'],
      ['A larger share of the population of working age', 'It usually shrinks.'],
      ['Lower demand for healthcare and care services', 'It usually rises.'],
      ['Fewer retired people claiming pensions', 'More claimants.'],
    ], 0),
    'e5-development:c0.0': mc('Which policy would most directly help to raise labour productivity in a developing country?', [
      ['Improving access to schools and basic healthcare', 'Correct.'],
      ['Putting high tariffs on all imported goods', 'Protects industries but does not train workers.'],
      ['Cutting spending on roads, ports and electricity supply', 'Would lower productivity.'],
      ['Encouraging a rapid rise in the birth rate', 'Not a direct way.'],
    ], 0),

    // ---------- 6 International trade and globalisation ----------
    'e6-trade:c0.0': mc('Which is a benefit of specialisation by countries?', [
      ['Higher total output and lower costs of production', 'Correct.'],
      ['A guarantee of full employment in every industry', 'Can cause structural unemployment.'],
      ['Less trade between countries, as each makes less', 'It increases trade.'],
      ['Lower productivity, as workers do the same task each day', 'It usually raises productivity.'],
    ], 0),
    'e6-trade:c1.0': mc('A government places a 15% tax on imported steel. Which statement is correct?', [
      ['It is a tariff, which raises the price of imported steel and protects domestic producers', 'Correct.'],
      ['It is a quota, which raises the price of imported steel and protects domestic producers', 'A quota limits quantity.'],
      ['It is a subsidy, which lowers the price of steel and raises demand for imports', 'A subsidy is a payment.'],
      ['It is a devaluation, which lowers the price of exports and raises demand', 'Not a trade tax.'],
    ], 0),
    'e6-global:c0.0': mc('Which is a possible benefit to a developing country of a multinational setting up a factory there?', [
      ['New jobs and the transfer of technology and skills', 'Correct.'],
      ['All profits stay in the country and none go abroad', 'Profits are often sent home.'],
      ['Local firms face less competition for workers and customers', 'Often more competition.'],
      ['The government receives no tax from the multinational', 'MNCs usually pay some tax.'],
    ], 0),
    'e6-fx:c0.0': fig({ svg: 'fxRate' }, mc('Foreigners increase their demand for a country’s exports and so for its currency. What happens to the exchange rate?', [
      ['It appreciates, as the demand curve for the currency shifts right', 'Correct.'],
      ['It depreciates, as the supply curve for the currency shifts right', 'That follows more supply of the currency.'],
      ['It stays the same, because exchange rates are always fixed', 'Floating rates move.'],
      ['It falls to zero, because exports are paid for in foreign currency', 'Not logical.'],
    ], 0)),
    'e6-bop:c1.0': mc('A country has a persistent current account deficit. Which policy would help to reduce it?', [
      ['Supply-side measures that make its goods more competitive', 'Correct.'],
      ['Encouraging households to buy more imported goods', 'Worsens the deficit.'],
      ['Raising the exchange rate sharply to make exports cheaper', 'A higher rate makes exports dearer.'],
      ['Cutting spending on education and training for workers', 'Reduces competitiveness.'],
    ], 0),
  },

  add: {
    'e1-problem': [
      short('Define the term “scarcity”.', { kind: 'Definition', points: ['There are not enough resources', 'to satisfy all of people’s wants (so choices have to be made)'], model: 'Scarcity is when there are not enough resources to satisfy all of people’s wants, so choices have to be made.' }),
      match('Match each term to its meaning.', [
        ['Scarcity', 'Limited resources and unlimited wants'],
        ['Opportunity cost', 'The next best alternative given up'],
        ['Free good', 'A good with no opportunity cost'],
        ['Economic good', 'A scarce good that costs resources to produce'],
      ]),
    ],
    'e1-factors': [
      match('Match each factor of production to its reward.', [
        ['Land', 'Rent'],
        ['Labour', 'Wages'],
        ['Capital', 'Interest'],
        ['Enterprise', 'Profit'],
      ]),
      multi('Which of these are examples of capital? Select all that apply.', [
        ['A tractor on a farm', 'Man-made equipment used to produce.', true],
        ['A factory building', 'Man-made and used to produce.', true],
        ['A forest that was never planted by anyone', 'A natural resource: land.', false],
        ['The skills of a trained nurse', 'Labour.', false],
      ]),
    ],
    'e1-opportunity': [
      short('Define the term “opportunity cost”.', { kind: 'Definition', points: ['The next best alternative', 'that is given up when a choice is made'], model: 'Opportunity cost is the next best alternative given up when a choice is made.' }),
    ],
    'e1-ppc': [
      short('Explain why a point inside a PPC shows inefficiency.', { command: 'Explain', points: ['Some resources are unemployed or not fully used', 'So more of at least one good could be produced without giving up any of the other'], model: 'A point inside the PPC means some resources are unemployed or wasted. More of at least one good could be produced without giving up any of the other.' }),
      short('Explain two causes of an outward shift of a PPC.', { command: 'Explain', points: ['A cause such as more or better resources (for example more capital or discovery)', 'A second cause such as improved technology or better education and training', 'Each is linked to a rise in the maximum output that can be produced'], model: 'A PPC shifts outward when resources increase, for example by investing in more capital, and when technology or education improve productivity. Both raise the maximum output the economy can produce.' }),
    ],
    'e2-demand': [
      short('Define the term “demand”.', { kind: 'Definition', points: ['The quantity of a good or service that consumers are willing and able to buy', 'at a given price in a given period'], model: 'Demand is the quantity of a good or service that consumers are willing and able to buy at a given price in a given period.' }),
      multi('Which of these would shift the demand curve for a good to the right? Select all that apply.', [
        ['A rise in consumers’ incomes (for a normal good)', 'More can be afforded at every price.', true],
        ['A successful advertising campaign', 'Tastes shift towards the good.', true],
        ['A fall in the price of the good itself', 'A movement along the curve.', false],
        ['A rise in the price of a complement', 'Reduces demand.', false],
      ]),
      match('Match each term to its meaning.', [
        ['Extension of demand', 'Quantity demanded rises because the price has fallen'],
        ['Contraction of demand', 'Quantity demanded falls because the price has risen'],
        ['Increase in demand', 'The whole demand curve shifts right'],
        ['Decrease in demand', 'The whole demand curve shifts left'],
      ]),
    ],
    'e2-supply': [
      short('Define the term “supply”.', { kind: 'Definition', points: ['The quantity of a good or service that producers are willing and able to sell', 'at a given price in a given period'], model: 'Supply is the quantity of a good or service that producers are willing and able to sell at a given price in a given period.' }),
      multi('Which of these would shift the supply curve to the right? Select all that apply.', [
        ['A fall in the price of raw materials', 'Lower costs.', true],
        ['A new technology that makes production cheaper', 'Lower costs.', true],
        ['A rise in the price of the good itself', 'A movement along the curve.', false],
        ['A new indirect tax on the good', 'Shifts supply left.', false],
      ]),
    ],
    'e2-price': [
      short('Explain how an equilibrium price is reached after a rise in demand.', { command: 'Explain', points: ['Demand rises, so at the old price demand is greater than supply (a shortage)', 'Competition between buyers pushes the price up', 'Quantity supplied rises until it equals quantity demanded at the new, higher price'], model: 'When demand rises there is a shortage at the old price. Buyers compete and the price rises, which encourages firms to supply more until quantity supplied equals quantity demanded at the new equilibrium.' }),
    ],
    'e2-ped': [
      short('Define “price elasticity of demand” and state how it is calculated.', { kind: 'Definition', points: ['A measure of how responsive quantity demanded is to a change in price', 'PED = % change in quantity demanded ÷ % change in price'], model: 'Price elasticity of demand measures how responsive quantity demanded is to a price change. PED = percentage change in quantity demanded ÷ percentage change in price.' }),
      short('Explain why a firm selling a product with inelastic demand might raise its price.', { command: 'Explain', points: ['A rise in price leads to a proportionately smaller fall in quantity demanded', 'So total revenue (price × quantity) rises'], model: 'If demand is inelastic, a price rise causes a smaller percentage fall in quantity demanded. Total revenue therefore rises.' }),
      multi('Which of these tend to make demand for a good more elastic? Select all that apply.', [
        ['There are many close substitutes', 'Buyers can switch easily.', true],
        ['The good is a luxury', 'It can be done without.', true],
        ['The good is an addictive necessity', 'Makes demand inelastic.', false],
        ['The good takes up a very small part of income', 'Makes demand inelastic.', false],
      ]),
    ],
    'e2-mixed': [
      short('Explain one disadvantage of a maximum price.', { command: 'Explain', points: ['The price is held below equilibrium, so quantity demanded is greater than quantity supplied', 'This causes a shortage (and may lead to a black market)'], model: 'A maximum price below equilibrium makes quantity demanded greater than quantity supplied, so there is a shortage and a black market may develop.' }),
      short('Explain how a subsidy to producers affects the market for a good.', { command: 'Explain', points: ['Costs of production fall so supply shifts right', 'The price falls and the quantity sold rises'], model: 'A subsidy lowers producers’ costs, so supply shifts to the right. The market price falls and the quantity sold rises.' }),
    ],
    'e3-costs': [
      cloze('Complete the formulae.', 'Total cost = ___ cost + ___ cost. Profit = total ___ − total cost.', ['fixed', 'variable', 'revenue'], ['average', 'marginal']),
      match('Match each cost to its type.', [
        ['Factory rent', 'Fixed cost'],
        ['Raw materials', 'Variable cost'],
        ['Total fixed cost ÷ output', 'Average fixed cost'],
        ['Total cost ÷ output', 'Average total cost'],
      ]),
    ],
    'e4-fiscal': [
      short('Explain one possible disadvantage of an increase in government spending to boost the economy.', { command: 'Explain', points: ['Spending is funded by borrowing or higher taxes (a larger budget deficit)', 'Higher demand may cause inflation, or crowd out private spending'], model: 'Higher government spending may be funded by borrowing, which widens the budget deficit. It may also push up demand too fast and cause inflation.' }),
    ],
    'e4-inflation': [
      short('Define “inflation”.', { kind: 'Definition', points: ['A sustained rise', 'in the general price level over time'], model: 'Inflation is a sustained rise in the general price level over time.' }),
    ],
    'e6-fx': [
      short('Explain how a depreciation of a country’s currency affects its exporters.', { command: 'Explain', points: ['Exports become cheaper for foreign buyers', 'So quantity demanded and sales of exports are likely to rise'], model: 'A fall in the value of the currency makes the country’s exports cheaper for foreign buyers, so export sales are likely to rise.' }),
    ],
  },
};
