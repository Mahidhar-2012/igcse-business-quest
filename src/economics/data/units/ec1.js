import { byte, lesson, mc, calc, fig } from '../helpers.js';

// Units 1 and 2: the basic economic problem and the allocation of resources
// (Cambridge IGCSE Economics 0455, syllabus for 2027, 2028 and 2029, topics 1 and 2).

export const e11 = lesson('e1-problem', 'The nature of the basic economic problem', '1.1', [
  'Wants are infinite but resources are finite, so there is scarcity and choices must be made about what, how and for whom to produce.',
], [
  byte('Finite resources and infinite wants', [
    'The **basic economic problem** is that people have **unlimited (infinite) wants** but the **resources** to satisfy them are **limited (finite)**.',
    '**Scarcity** means there is not enough of something to satisfy everyone’s wants. It forces **choices**.',
    'It affects **consumers** (limited income), **workers** (limited time), **producers** (limited resources and finance) and **governments** (limited tax revenue).',
  ], mc('Which statement best defines the basic economic problem?', [
    ['Unlimited wants but limited resources', 'Correct: scarcity forces choices.'],
    ['Too many goods and too few consumers', 'The problem is the opposite: wants exceed resources.'],
    ['Governments spending more than they earn', 'This is a budget deficit, not the basic economic problem.'],
    ['Prices rising too quickly', 'This is inflation.'],
  ], 0)),
  byte('The three basic economic questions', [
    'Because resources are scarce, every society must decide: **what to produce**, **how to produce it** (which methods and resources) and **who to produce for** (who gets the output).',
    'Different economic systems answer these questions in different ways (for example through prices in a market economy, or by the government).',
  ], mc('A government decides to build a hospital rather than a stadium. Which basic economic question is this?', [
    ['What to produce', 'Correct: it is a choice between goods and services to provide.'],
    ['How to produce', 'This concerns methods, such as labour-intensive or capital-intensive production.'],
    ['Who to produce for', 'This concerns who will receive the output.'],
    ['It is not an economic question', 'It is a resource allocation decision.'],
  ], 0)),
  byte('Economic goods and free goods', [
    '**Economic goods** are **scarce** and have an **opportunity cost**: resources are used to produce them and consumers must pay or give something up (cars, food, healthcare).',
    '**Free goods** are **not scarce** and have **no opportunity cost**, so nothing is given up to obtain them (for example air in many places, sunshine).',
  ], mc('Which of these is an economic good?', [
    ['A bottle of water sold in a shop', 'Correct: resources are used to produce and supply it, so it has an opportunity cost.'],
    ['Air in an open field', 'Air in an open field is a free good.'],
    ['Sunshine', 'Sunshine is a free good.'],
    ['Rainwater falling on a field', 'Rainfall itself is free, with no opportunity cost.'],
  ], 0)),
]);

export const e12 = lesson('e1-factors', 'Factors of production', '1.2', [
  'Land, labour, capital and enterprise are the factors of production. They earn rent, wages, interest and profit.',
], [
  byte('The four factors of production and their rewards', [
    '**Land:** natural resources (soil, minerals, water, forests). Reward: **rent**.',
    '**Labour:** the physical and mental effort of workers. Reward: **wages**.',
    '**Capital:** man-made goods used to produce other goods (machines, factories, tools). Reward: **interest**.',
    '**Enterprise:** the entrepreneur who organises the other factors and takes risks. Reward: **profit**.',
  ], mc('Which factor of production earns profit as its reward?', [
    ['Enterprise', 'Correct: the entrepreneur takes the risk of running the business.'],
    ['Land', 'Land earns rent.'],
    ['Labour', 'Labour earns wages.'],
    ['Capital', 'Capital earns interest.'],
  ], 0)),
  byte('Changes in the quantity and quality of factors', [
    '**Quantity of labour** rises with population growth, immigration and a higher retirement age; it can fall because of emigration, an ageing population or conflict.',
    '**Quality of labour** improves with **education, training and healthcare**. **Quality of capital** improves with **technology and investment**.',
    '**Land** changes through discovery of resources, new extraction methods, or damage and depletion.',
  ], mc('Which would increase the quality of the labour force?', [
    ['More investment in training and education', 'Correct.'],
    ['An increase in population', 'This raises the quantity, not necessarily the quality.'],
    ['Lower interest rates', 'This affects borrowing, not worker skills.'],
    ['Building more roads', 'This improves infrastructure, not the skills of workers directly.'],
  ], 0)),
]);

export const e13 = lesson('e1-opportunity', 'Opportunity cost', '1.3', [
  'Opportunity cost is the next best alternative given up when a choice is made. It influences decisions of consumers, workers, firms and governments.',
], [
  byte('What is opportunity cost?', [
    '**Opportunity cost** is the **value of the next best alternative that is given up** when a choice is made. It is **not** the total of all the alternatives.',
    'Examples: if a student spends an evening studying instead of working for $30 or playing sport, the opportunity cost is the **next best** option they gave up.',
    'Governments also face it: money spent on defence cannot be spent on healthcare.',
  ], mc('A farmer uses a field to grow wheat. The alternatives were maize ($4 000), potatoes ($3 000) or leaving it empty. What is the opportunity cost?', [
    ['Maize, or $4 000, the next best alternative', 'Correct: the highest-valued alternative given up.'],
    ['$7 000, the total of the alternatives', 'Opportunity cost is only the next best alternative.'],
    ['Potatoes, or $3 000', 'The next best alternative is maize ($4 000).'],
    ['Nothing, because the field was available', 'Using the field for wheat means giving up the best alternative use.'],
  ], 0)),
  byte('Opportunity cost and decision-making', [
    '**Consumers** compare what else they could buy with limited income. **Workers** compare jobs, leisure and study time. **Firms** decide which products and methods to use. **Governments** decide where to spend limited tax revenue.',
    'Weighing the opportunity cost helps people **choose the option that gives the greatest benefit**.',
  ], mc('A government has $2 billion. It chooses to build schools rather than roads. What will be the opportunity cost of this decision?', [
    ['The roads that could have been built', 'Correct: the next best use of the money is what is given up.'],
    ['The $2 billion itself', 'The money is the cost in resources, but the opportunity cost is the best alternative benefit lost.'],
    ['The schools that are built', 'These are the benefit obtained.'],
    ['There is no opportunity cost for governments', 'Every choice has an opportunity cost.'],
  ], 0)),
]);

export const e14 = lesson('e1-ppc', 'Production possibility curves', '1.4', [
  'A PPC shows the maximum combinations of two goods an economy can produce with its resources. Points on it are efficient, inside it wasted, outside unattainable. It shifts with growth.',
], [
  byte('The production possibility curve', [
    'A **production possibility curve (PPC)** shows the **maximum combinations of two types of goods** that an economy can produce when **all resources are fully and efficiently used**.',
    'Points **on** the PPC show full, efficient use of resources. Points **inside** show **unemployed or wasted resources**. Points **outside** are **unattainable** with current resources.',
  ], fig({ svg: 'ppc' }, mc('On the diagram, what does point B (inside the PPC) show?', [
    ['Resources are not being fully or efficiently used', 'Correct: the economy could produce more of at least one good.'],
    ['The economy is producing as much as possible', 'That is a point on the curve.'],
    ['A point the economy cannot yet reach', 'That describes a point outside the curve (C).'],
    ['The economy has a surplus of resources forever', 'The point only shows unused or inefficiently used resources now.'],
  ], 0)), { fig: { svg: 'ppc', caption: 'A production possibility curve' } }),
  byte('Movements along a PPC and opportunity cost', [
    'Moving **along** the PPC means **switching resources** from one good to another. The extra of one good produced shows the **opportunity cost**: the amount of the other good **given up**.',
    'In the diagram, producing more consumer goods means giving up some capital goods.',
  ], mc('An economy moves along its PPC to produce more consumer goods. What happens to the production of capital goods?', [
    ['It falls; this is the opportunity cost', 'Correct: resources move from capital goods to consumer goods.'],
    ['It rises as well', 'On the PPC, resources are fully used, so more of one means less of the other.'],
    ['It stays the same', 'Resources are limited, so a trade-off is needed.'],
    ['It becomes impossible to produce', 'Production of capital goods falls but does not disappear.'],
  ], 0)),
  byte('Shifts of a PPC and economic growth', [
    'An **outward shift** of the PPC shows **economic growth**: more of both goods can now be produced.',
    '**Causes of an outward shift:** more resources (discovery, population, investment), **better quality resources** (education, training) and **improved technology**.',
    'An **inward shift** can be caused by **war, natural disasters, a loss of resources** or emigration of skilled workers.',
  ], fig({ svg: 'ppcShift' }, mc('Which change would be most likely to shift a country’s PPC outwards?', [
    ['An increase in spending on education and training of workers', 'Correct: better-quality labour allows more output.'],
    ['A rise in the price of oil', 'This changes prices, not the productive capacity directly.'],
    ['An earthquake destroying factories', 'This shifts the PPC inwards.'],
    ['Unemployment falling from 8% to 5%', 'This is a movement from inside the PPC towards the curve, not a shift of the curve.'],
  ], 0)), { fig: { svg: 'ppcShift', caption: 'An outward shift of the PPC' } }),
]);

export const e21 = lesson('e2-markets', 'How markets work', '2.1', [
  'A market is where buyers and sellers meet, in person or online, to trade goods, services or resources.',
], [
  byte('Markets, buyers and sellers', [
    'A **market** is any place or system where **buyers and sellers come together** to exchange goods, services or resources. It can be a street market or an online platform.',
    'Examples: markets for food, housing, labour, foreign currencies and shares.',
    '**Buyers** (consumers) want goods at a low price; **sellers** (producers) want to sell at a high price. Their interaction determines **prices and quantities traded**.',
  ], mc('Which of these is an example of a market?', [
    ['An online shopping website where sellers and buyers trade', 'Correct: buyers and sellers come together without needing a physical location.'],
    ['A government tax office', 'This is not a place where buyers and sellers exchange goods.'],
    ['A factory production line', 'This is part of production, not a market.'],
    ['A family kitchen', 'This is not a market.'],
  ], 0)),
]);

export const e22 = lesson('e2-demand', 'Demand', '2.2', [
  'Demand is the quantity buyers are willing and able to buy at each price. The demand curve slopes downwards. A price change causes a movement along it; other factors shift it.',
], [
  byte('Individual and market demand', [
    '**Demand** is the **quantity of a good or service that consumers are willing and able to buy at different prices** during a given period.',
    '**Market demand** is the **sum of all individual demands** at each price. A demand **curve slopes downwards**: **as price falls, quantity demanded rises**.',
  ], fig({ svg: 'demandCurve' }, mc('Which statement describes a typical demand curve?', [
    ['As price falls, quantity demanded rises', 'Correct: the curve slopes downwards.'],
    ['As price falls, quantity demanded falls', 'This is the pattern for a supply curve.'],
    ['Quantity demanded does not depend on price', 'Demand curves show how quantity depends on price.'],
    ['As price rises, quantity demanded rises', 'This describes a supply curve.'],
  ], 0)), { fig: { svg: 'demandCurve', caption: 'A demand curve and movements along it' } }),
  byte('Movements along a demand curve', [
    'A **change in the price of the good itself** causes a **movement along** the same demand curve.',
    'A **fall in price** causes an **extension** of demand; a **rise in price** causes a **contraction** of demand.',
    'The curve itself does not move: only the point on the curve changes.',
  ], mc('The price of coffee rises and fewer cups are bought. How is this shown on a demand diagram?', [
    ['A contraction: a movement up along the demand curve', 'Correct: the price of the good itself changed.'],
    ['A shift of the demand curve to the left', 'A shift is caused by factors other than the good’s own price.'],
    ['An extension of demand', 'An extension follows a price fall.'],
    ['A shift of the demand curve to the right', 'The curve does not shift for a change in the good’s own price.'],
  ], 0)),
  byte('Shifts of the demand curve', [
    'The whole curve **shifts** when a factor **other than the price of the good** changes.',
    '**Increase in demand (shift right):** higher incomes, a rise in the price of a **substitute**, a fall in the price of a **complement**, successful advertising, a rise in population, a change in tastes in favour of the good, expectations of higher prices.',
    '**Decrease in demand (shift left):** the opposite changes.',
  ], fig({ svg: 'demandShift' }, mc('Which of these would shift the demand curve for tea to the right?', [
    ['A rise in the price of coffee, a substitute', 'Correct: consumers switch from coffee to tea.'],
    ['A fall in the price of tea', 'This causes a movement along the demand curve.'],
    ['A fall in consumers’ incomes (tea is a normal good)', 'This would shift the demand curve to the left.'],
    ['A rise in the price of a complement such as milk', 'This would reduce demand for tea, shifting the curve to the left.'],
  ], 0)), { fig: { svg: 'demandShift', caption: 'Shifts of the demand curve' } }),
]);

export const e23 = lesson('e2-supply', 'Supply', '2.3', [
  'Supply is the quantity producers are willing and able to sell at each price. The supply curve slopes upwards. Changes in cost, technology, taxes and other factors shift it.',
], [
  byte('Individual and market supply', [
    '**Supply** is the **quantity of a good or service that producers are willing and able to sell at different prices** during a given period.',
    '**Market supply** is the **sum of all firms’ supplies**. A supply **curve slopes upwards**: **as price rises, quantity supplied rises**, because higher prices make production more profitable.',
  ], mc('Why does a supply curve slope upwards?', [
    ['A higher price makes it more profitable to supply more', 'Correct.'],
    ['Consumers want more at a higher price', 'This does not explain the supply curve.'],
    ['Costs of production always fall as price rises', 'Costs do not determine the slope directly.'],
    ['The government sets the quantity', 'Firms respond to prices.'],
  ], 0)),
  byte('Movements along a supply curve', [
    'A **change in the price of the good itself** causes a **movement along** the supply curve.',
    'A **rise in price** causes an **extension** of supply; a **fall in price** causes a **contraction** of supply.',
  ], mc('The price of wheat rises and farmers supply more wheat. This is…', [
    ['An extension of supply (a movement along the curve)', 'Correct.'],
    ['An increase in supply (a shift to the right)', 'A shift requires a change in a factor other than the good’s own price.'],
    ['A contraction of supply', 'A contraction follows a price fall.'],
    ['A decrease in supply', 'A decrease is a shift left caused by non-price factors.'],
  ], 0)),
  byte('Shifts of the supply curve', [
    '**Increase in supply (shift right):** lower costs of production (cheaper raw materials or wages), improved **technology**, a **subsidy**, good weather for crops, more firms entering the market.',
    '**Decrease in supply (shift left):** higher costs, an **indirect tax**, bad weather, fewer firms.',
  ], fig({ svg: 'supplyCurve' }, mc('Which of these would shift the supply curve for cars to the left?', [
    ['An increase in the price of steel used to make cars', 'Correct: higher costs reduce supply at every price.'],
    ['A new technology that makes cars faster to produce', 'This shifts supply to the right.'],
    ['A government subsidy for car makers', 'A subsidy shifts supply to the right.'],
    ['A rise in the price of cars', 'This is a movement along the supply curve.'],
  ], 0)), { fig: { svg: 'supplyCurve', caption: 'Shifts of the supply curve' } }),
]);

export const e24 = lesson('e2-price', 'Price determination', '2.4', [
  'The price mechanism allocates resources. Equilibrium is where demand equals supply. Above it there is a surplus and below it a shortage.',
], [
  byte('The price mechanism', [
    'In a market the **price mechanism** answers the three basic questions: **what** to produce (goods in demand have high prices and profits), **how** to produce (firms choose low-cost methods) and **for whom** (goods go to those willing and able to pay).',
    'Prices act as **signals and incentives** to consumers and producers.',
  ], mc('How does the price mechanism help to decide what is produced?', [
    ['Rising prices signal high demand, encouraging firms to produce more', 'Correct: higher profits attract resources into that product.'],
    ['The government orders firms what to make', 'This is not the price mechanism.'],
    ['Firms always produce the same goods', 'Firms respond to price signals.'],
    ['Consumers choose the technology used', 'Producers choose the method of production.'],
  ], 0)),
  byte('Market equilibrium', [
    '**Market equilibrium** is where **quantity demanded equals quantity supplied**. The **equilibrium price (Pe)** clears the market and the **equilibrium quantity (Qe)** is traded.',
    'On a diagram it is where the **demand and supply curves cross**.',
    'With schedules, find the price at which quantity demanded equals quantity supplied.',
  ], fig({ svg: 'equilibrium' }, mc('A market has these schedules: at $4 demand is 80 and supply is 40; at $6 demand is 60 and supply is 60; at $8 demand is 40 and supply is 80. What is the equilibrium price?', [
    ['$6', 'Correct: quantity demanded equals quantity supplied at 60.'],
    ['$4', 'At $4 demand exceeds supply: a shortage.'],
    ['$8', 'At $8 supply exceeds demand: a surplus.'],
    ['$60', '60 is the equilibrium quantity, not the price.'],
  ], 0)), { fig: { svg: 'equilibrium', caption: 'Market equilibrium' } }),
  byte('Disequilibrium: shortages and surpluses', [
    '**Disequilibrium** is when quantity demanded and quantity supplied are **not equal** at the current price.',
    'A price **below** equilibrium creates a **shortage** (demand exceeds supply); a price **above** equilibrium creates a **surplus** (supply exceeds demand).',
    'Market forces normally push the price back towards equilibrium: **up** for a shortage and **down** for a surplus.',
  ], fig({ svg: 'disequilibrium' }, mc('At a price above the equilibrium price, what will happen in a free market?', [
    ['A surplus appears, which tends to push the price down', 'Correct: sellers cut prices to clear unsold stock.'],
    ['A shortage appears, which pushes the price up', 'A shortage appears when the price is below equilibrium.'],
    ['Quantity demanded equals quantity supplied', 'This happens only at the equilibrium price.'],
    ['The demand curve shifts left', 'A price change does not shift the curve; it moves along it.'],
  ], 0)), { fig: { svg: 'disequilibrium', caption: 'Surplus and shortage' } }),
]);

export const e25 = lesson('e2-pricechange', 'Price changes', '2.5', [
  'Price changes are caused by shifts in demand or supply. A rise in demand raises price and quantity; a rise in supply lowers price and raises quantity.',
], [
  byte('Causes of price changes', [
    '**Prices change when demand or supply shift**, creating a new equilibrium.',
    '**Increase in demand:** price **rises** and quantity **rises**. **Decrease in demand:** price **falls** and quantity **falls**.',
    '**Increase in supply:** price **falls** and quantity **rises**. **Decrease in supply:** price **rises** and quantity **falls**.',
  ], fig({ svg: 'priceChange' }, mc('A cold winter destroys part of the orange harvest. What happens to the equilibrium price and quantity of oranges?', [
    ['Price rises and quantity falls', 'Correct: supply decreases (shifts left).'],
    ['Price falls and quantity rises', 'That follows an increase in supply.'],
    ['Price rises and quantity rises', 'That follows an increase in demand.'],
    ['Price and quantity do not change', 'A fall in supply changes the equilibrium.'],
  ], 0)), { fig: { svg: 'priceChange', caption: 'A rise in demand' } }),
  byte('Consequences of price changes', [
    'Price changes affect **sales and revenue**, **producers’ profits** and what consumers can **afford**.',
    'A **higher price** encourages producers to supply more and consumers to buy less or switch to **substitutes**. A **lower price** has the opposite effect.',
    'Use **diagrams** to show how a change in market conditions leads to a new equilibrium price and quantity.',
  ], mc('The price of a smartphone falls after new competitors enter the market. Which effect is most likely?', [
    ['Quantity demanded rises, and some firms earn lower profit per phone', 'Correct.'],
    ['Quantity demanded falls', 'Lower prices normally increase quantity demanded.'],
    ['Quantity supplied rises for all firms', 'Existing firms may supply less at a lower price.'],
    ['The demand curve shifts left', 'A price fall causes a movement along, not a shift.'],
  ], 0)),
]);

export const e26 = lesson('e2-ped', 'Price elasticity of demand (PED)', '2.6', [
  'PED = % change in quantity demanded ÷ % change in price. Demand is elastic if PED > 1 and inelastic if PED < 1. It affects the revenue from price changes.',
], [
  byte('Definition and calculation of PED', [
    '**Price elasticity of demand (PED)** measures **how responsive quantity demanded is to a change in price**.',
    '**PED = % change in quantity demanded ÷ % change in price.** The sign is usually ignored.',
    '**PED = 0:** perfectly inelastic. **0 < PED < 1:** inelastic. **PED = 1:** unitary. **PED > 1:** elastic. **PED = ∞:** perfectly elastic.',
  ], calc('The price of a good rises by 10% and the quantity demanded falls by 25%. Calculate the PED (ignore the sign).', 2.5, {
    formula: 'PED = 25% ÷ 10%', steps: ['PED = 25 ÷ 10 = 2.5', '2.5 > 1, so demand is elastic'], tol: 0.01,
  }), { eq: ['PED = % change in quantity demanded ÷ % change in price'] }),
  byte('PED diagrams', [
    '**Perfectly inelastic:** a vertical demand curve (quantity does not change with price). **Inelastic:** a steep curve. **Unitary:** a curved (rectangular hyperbola) curve. **Elastic:** a flatter curve. **Perfectly elastic:** a horizontal curve.',
    'The **steeper** the straight demand curve, the **less elastic** (more inelastic) demand is in general.',
  ], fig({ svg: 'pedCurves' }, mc('Which demand curve shows perfectly elastic demand?', [
    ['A horizontal line', 'Correct: any price rise above the line reduces quantity demanded to zero.'],
    ['A vertical line', 'A vertical line shows perfectly inelastic demand.'],
    ['A steep downward line', 'This shows inelastic demand.'],
    ['A curve from top left to bottom right showing equal percentage changes', 'This is unitary elasticity.'],
  ], 0)), { fig: { svg: 'pedCurves', caption: 'Demand curves with different PED' } }),
  byte('Determinants of PED', [
    'Demand is **more elastic** when there are **many substitutes**, when the good is a **luxury**, when it takes a **large share of income**, and over a **longer time**.',
    'Demand is **more inelastic** for **necessities**, **addictive** goods (such as tobacco) and goods with **few substitutes**, and when the item is a **small part of income**.',
  ], mc('Which good is most likely to have inelastic demand?', [
    ['Petrol for a person who commutes by car with no alternative', 'Correct: a necessity with few substitutes.'],
    ['A particular brand of chocolate bar', 'There are many substitutes, so demand is elastic.'],
    ['A holiday abroad', 'A luxury with substitutes: demand is elastic.'],
    ['A new fashion item', 'There are close substitutes and it is not essential.'],
  ], 0)),
  byte('PED, consumer spending and firm revenue', [
    '**Total revenue = price × quantity sold.**',
    'If demand is **inelastic**, a **price rise increases revenue** (quantity falls proportionally less). If demand is **elastic**, a **price rise reduces revenue**, and a **price cut increases** it.',
    'Consumer expenditure on a good equals the firm’s revenue from it.',
  ], calc('A firm sells 200 units at $5. It raises the price to $6 and sells 180 units. What is the change in total revenue ($)?', 80, {
    unit: '$', formula: 'new revenue − old revenue', steps: ['Old: 5 × 200 = $1 000', 'New: 6 × 180 = $1 080', 'Change = +$80 (demand is inelastic: revenue rose)'], tol: 0.5,
  })),
  byte('Why PED matters to decision-makers', [
    '**Firms:** with **inelastic** demand they can raise prices to increase revenue; with **elastic** demand, cutting prices may raise revenue.',
    '**Governments:** taxes on goods with inelastic demand (such as tobacco or fuel) **raise a lot of revenue** because quantity falls little.',
    '**Consumers and workers** also respond to relative price changes.',
  ], mc('Why do governments often place high taxes on cigarettes?', [
    ['Demand is inelastic, so quantity falls little and revenue rises', 'Correct.'],
    ['Demand is elastic, so smoking falls greatly', 'Demand for cigarettes is typically inelastic because they are addictive.'],
    ['Supply is perfectly elastic', 'The key reason is the inelastic demand.'],
    ['Taxes make cigarettes cheaper', 'Taxes raise the price.'],
  ], 0)),
]);

export const e27 = lesson('e2-pes', 'Price elasticity of supply (PES)', '2.7', [
  'PES = % change in quantity supplied ÷ % change in price. It depends on spare capacity, stocks, time and ease of switching resources.',
], [
  byte('Definition and calculation of PES', [
    '**Price elasticity of supply (PES)** measures **how responsive quantity supplied is to a change in price**.',
    '**PES = % change in quantity supplied ÷ % change in price.** PES is **positive** because supply curves slope upwards. The same scale as PED applies: 0, <1, 1, >1, ∞.',
    'A **vertical** supply curve is perfectly inelastic; a **horizontal** one is perfectly elastic; a straight line **through the origin** has unitary PES.',
  ], calc('The price of a product rises by 5% and quantity supplied rises by 15%. Calculate PES.', 3, {
    formula: 'PES = 15% ÷ 5%', steps: ['15 ÷ 5 = 3', '3 > 1, so supply is elastic'], tol: 0.01,
  }), { eq: ['PES = % change in quantity supplied ÷ % change in price'] }),
  byte('Determinants of PES', [
    'Supply is **more elastic** when firms have **spare capacity**, large **stocks**, **easy and quick** production, and when **factors can easily be switched** or more obtained, and over a **longer time period**.',
    'Supply is **less elastic** for goods that take a **long time to produce** (such as agricultural goods or houses), when firms are at **full capacity**, or when raw materials are scarce.',
  ], mc('Which supply is most likely to be inelastic in the short run?', [
    ['The supply of new houses', 'Correct: building takes time and land is limited.'],
    ['The supply of a digitally downloaded song', 'It can be supplied almost instantly at little cost: elastic.'],
    ['The supply of a service using spare capacity', 'Spare capacity makes supply elastic.'],
    ['The supply of goods held in large stocks', 'Stocks make supply elastic.'],
  ], 0)),
]);

export const e28 = lesson('e2-system', 'Market economic system', '2.8', [
  'In a market economic system, private individuals and firms own resources and the price mechanism allocates them.',
], [
  byte('The market economic system', [
    'In a **market economic system** resources are **privately owned** and decisions about what, how and for whom to produce are made by **individuals and firms** through the **price mechanism**, with little government intervention.',
    '**Advantages:** **efficient** allocation as firms respond to prices, **wide choice**, **competition** encourages low prices and innovation, **profit incentive**.',
    '**Disadvantages:** **inequality** (those without money cannot buy), **public goods** may not be provided, **external costs** are ignored, **monopolies** may form, and unemployment can occur.',
  ], mc('Which is a disadvantage of a market economic system?', [
    ['It can lead to inequality and under-provision of public goods', 'Correct.'],
    ['Resources are allocated by price signals', 'This is how the system works, not a disadvantage.'],
    ['There is a wide choice of goods', 'This is an advantage.'],
    ['Firms have an incentive to be efficient', 'This is an advantage.'],
  ], 0)),
]);

export const e29 = lesson('e2-failure', 'Market failure', '2.9', [
  'Market failure is when the market misallocates resources. Causes include public goods, merit and demerit goods, external costs and benefits and monopoly power.',
], [
  byte('Defining market failure and key terms', [
    '**Market failure** occurs when the **price mechanism fails to allocate resources efficiently**, so the **wrong quantity** of a good is produced and consumed.',
    '**Private costs** are paid by the producer or consumer; **external costs** are borne by third parties (such as pollution). **Social cost = private cost + external cost.** **Social benefit = private benefit + external benefit.**',
    '**Public goods** are non-excludable and non-rival (street lighting). **Merit goods** give benefits to society (education, vaccinations). **Demerit goods** harm consumers or society (tobacco). A **monopoly** has a single or dominant seller.',
  ], mc('A factory pollutes a river and local fishermen lose income. What is the loss to the fishermen called?', [
    ['An external cost', 'Correct: a cost suffered by third parties, not by the factory or its customers.'],
    ['A private benefit', 'The loss is a cost, not a benefit.'],
    ['A private cost of the factory', 'The cost is borne by others.'],
    ['A merit good', 'A merit good is a type of good, not a cost.'],
  ], 0)),
  byte('Causes and consequences of market failure', [
    '**Public goods:** private firms cannot charge users, so they are **not provided** by the market.',
    '**Merit goods and goods with external benefits** are **under-consumed** (education, healthcare). **Demerit goods and goods with external costs** are **over-consumed** (smoking, polluting production).',
    '**Monopoly:** with no competition a firm may **restrict supply and charge higher prices**.',
  ], mc('Why would private firms be unlikely to provide street lighting?', [
    ['They cannot easily charge those who use it, so it is a public good', 'Correct: non-excludability means people can benefit without paying.'],
    ['Street lighting has no benefits', 'It has large benefits to society.'],
    ['Demand for street lighting is perfectly elastic', 'The issue is non-excludability, not elasticity.'],
    ['It is a demerit good', 'It is a public good.'],
  ], 0)),
]);

export const e210 = lesson('e2-mixed', 'Mixed economic system and government intervention', '2.10', [
  'A mixed economy has both a private sector and a public sector. Governments can intervene with maximum and minimum prices, taxes, subsidies, regulation, privatisation, nationalisation, direct provision and quotas.',
], [
  byte('The mixed economic system', [
    'A **mixed economic system** combines **private enterprise** with **government provision and regulation**. Most economies are mixed.',
    '**Advantages:** can **provide public and merit goods**, **correct market failure**, protect consumers and redistribute income. **Disadvantages:** government can be **inefficient**, taxes may reduce **incentives**, and intervention can create **new distortions**.',
  ], mc('Which is a feature of a mixed economic system?', [
    ['Both the private sector and government provide goods and services', 'Correct.'],
    ['All resources are owned by the government', 'That is a planned economic system.'],
    ['There is no government involvement', 'That describes a purely market system.'],
    ['Prices never change', 'Prices change in response to demand and supply even in mixed economies.'],
  ], 0)),
  byte('Maximum and minimum prices', [
    'A **maximum price** is a **legal ceiling** below the equilibrium price (for example on rents or basic foods), intended to make goods **affordable**. It causes a **shortage** and may lead to a black market.',
    'A **minimum price** is a **legal floor** above equilibrium (for example a minimum price for farmers’ crops), intended to **protect producers’ incomes**. It causes a **surplus**.',
  ], fig({ svg: 'maxMinPrice' }, mc('A maximum price is set below the equilibrium price. What is the most likely result?', [
    ['A shortage', 'Correct: quantity demanded exceeds quantity supplied at the capped price.'],
    ['A surplus', 'A surplus follows a minimum price above equilibrium.'],
    ['Equilibrium is reached', 'The cap prevents the price rising to equilibrium.'],
    ['Quantity supplied increases', 'A lower price reduces quantity supplied.'],
  ], 0)), { fig: { svg: 'maxMinPrice', caption: 'Maximum and minimum prices' } }),
  byte('Indirect taxes', [
    'An **indirect tax** is a tax on spending (for example VAT, a tax on cigarettes) paid to the government by the seller, who usually passes some to consumers.',
    'It **shifts the supply curve upward** by the amount of the tax. The **price rises** and the **quantity falls**.',
    '**Advantages:** raises **revenue** and can **reduce consumption** of demerit goods. **Disadvantages:** raises prices, can be **regressive**, and may encourage tax avoidance.',
  ], fig({ svg: 'indirectTax' }, mc('What happens to equilibrium price and quantity when an indirect tax is placed on a good?', [
    ['Price rises and quantity falls', 'Correct: supply shifts to the left (upwards).'],
    ['Price falls and quantity rises', 'That follows a subsidy.'],
    ['Price and quantity both rise', 'A tax reduces supply, so quantity falls.'],
    ['Neither changes', 'The tax changes the equilibrium.'],
  ], 0)), { fig: { svg: 'indirectTax', caption: 'The effect of an indirect tax' } }),
  byte('Subsidies', [
    'A **subsidy** is a **payment by the government to producers** to lower their costs. It **shifts the supply curve down (to the right)** by the amount of the subsidy.',
    'The **price falls** and the **quantity rises**. **Advantages:** encourages **production and consumption** of merit goods and protects jobs. **Disadvantages:** has an **opportunity cost** (tax revenue), can encourage inefficiency, and costs more if demand is inelastic.',
  ], fig({ svg: 'subsidy' }, mc('A government subsidy is given to producers of electric cars. What is the effect on the market?', [
    ['The supply curve shifts right, the price falls and the quantity rises', 'Correct.'],
    ['The supply curve shifts left, the price rises', 'That would follow a tax.'],
    ['The demand curve shifts left', 'A subsidy to producers does not directly shift demand.'],
    ['The price and quantity do not change', 'A subsidy lowers costs, changing the equilibrium.'],
  ], 0)), { fig: { svg: 'subsidy', caption: 'The effect of a subsidy' } }),
  byte('Other government policies', [
    '**Regulation:** laws and rules (for example pollution limits, safety standards). **Privatisation:** sale of state-owned firms to the private sector. **Nationalisation:** taking private firms into state ownership. **Direct provision:** the government provides goods and services itself (education, healthcare). **Quotas:** limits on the quantity that may be extracted or produced (for example fish catches).',
    'Each has **advantages** (correcting failures, protecting consumers or resources) and **disadvantages** (cost, possible inefficiency, reduced incentives, enforcement difficulties).',
  ], mc('A government sells a state-owned airline to private investors. What is this called?', [
    ['Privatisation', 'Correct: ownership transfers to the private sector.'],
    ['Nationalisation', 'This is the opposite: the state takes ownership.'],
    ['Regulation', 'Regulation is the use of rules and laws.'],
    ['Direct provision', 'Direct provision means the government supplies the service itself.'],
  ], 0)),
]);

export const unit1 = {
  id: 'e1', number: 1, title: 'The Basic Economic Problem', short: 'Basics', emoji: '⚖️', color: 'sky',
  submodules: [e11, e12, e13, e14],
  papers: [],
};

export const unit2 = {
  id: 'e2', number: 2, title: 'The Allocation of Resources', short: 'Markets', emoji: '📈', color: 'teal',
  submodules: [e21, e22, e23, e24, e25, e26, e27, e28, e29, e210],
  papers: [],
};
