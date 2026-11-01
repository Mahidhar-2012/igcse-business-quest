import { byte, mc, calc, fig } from '../helpers.js';
import { multi, match, cloze, short } from '../../../data/builders.js';

// Syllabus audit (topics 1 to 3): bytes for objectives the first pass did not cover.
// Appended to the lesson with the matching id (see ../index.js). Tests follow the hard-question standard.

export const extrasA = {
  'e1-problem': [
    byte('The basic economic problem for each decision-maker', [
      '**Consumers:** limited **income** means they cannot buy everything they want, so they choose between goods.',
      '**Workers:** limited **time** means they must choose between work, leisure and study.',
      '**Producers (firms):** limited **finance, land, labour and capital** means they must choose what and how much to produce.',
      '**Governments:** limited **tax revenue** means they must choose between spending on health, education, defence and so on.',
    ], match('Match each decision-maker to the scarce resource that creates their problem.', [
      ['Consumer', 'Limited income'],
      ['Worker', 'Limited time'],
      ['Firm', 'Limited finance and inputs'],
      ['Government', 'Limited tax revenue'],
    ], 'In each case wants are greater than the resources available, so a choice has to be made.')),
  ],

  'e2-demand': [
    byte('Individual demand and market demand', [
      '**Individual demand** is the quantity one consumer is willing and able to buy at each price.',
      '**Market demand** is the **sum of all individual demands** at each price.',
      'On a diagram, the market demand curve is found by adding the quantities for each price. More consumers in the market moves the market demand curve to the right.',
    ], calc('At a price of $5, Ana demands 4 units, Ben demands 6 units and Cara demands 10 units. These are the only buyers. What is market demand at $5?', 20, {
      unit: 'units', formula: 'market demand = sum of individual demands', steps: ['4 + 6 + 10 = 20 units'], tol: 0.01,
    })),
  ],

  'e2-supply': [
    byte('Individual supply and market supply', [
      '**Individual supply** is the quantity one firm is willing and able to sell at each price.',
      '**Market supply** is the **sum of all firms’ supplies** at each price.',
      'More firms entering the market shifts the market supply curve to the right; firms leaving shifts it to the left.',
    ], mc('Two firms in a market supply 300 and 500 units at $8. A third firm enters and supplies 200 units at $8. What happens?', [
      ['Market supply at $8 rises to 1 000 units and the supply curve shifts right', 'Correct: 300 + 500 + 200.'],
      ['Market supply at $8 rises to 500 units because only the largest firm counts', 'Market supply is the sum of all firms.'],
      ['Market supply at $8 stays at 800 units but quantity demanded rises', 'The new firm adds to supply.'],
      ['Market supply at $8 rises to 1 000 units and the demand curve shifts right', 'Supply, not demand, changes.'],
    ], 0)),
  ],

  'e2-pricechange': [
    byte('Price changes and sales revenue', [
      'A change in price affects the **quantity sold** and so the **revenue** of firms (revenue = price × quantity).',
      'When **demand rises** (curve shifts right) the equilibrium price and quantity both rise, so revenue rises.',
      'When **supply falls** (curve shifts left) the price rises but the quantity falls; the effect on revenue depends on the elasticity of demand.',
    ], mc('Equilibrium price rises from $10 to $12 and quantity falls from 500 to 450 units after supply decreases. What happens to revenue?', [
      ['It rises from $5 000 to $5 400', 'Correct: 12 × 450 = 5 400 and 10 × 500 = 5 000.'],
      ['It falls from $5 000 to $4 500 because quantity has fallen', 'The price rise has not been taken into account.'],
      ['It stays at $5 000 because price and quantity changed together', 'Calculate both figures.'],
      ['It rises from $5 000 to $6 000 because price rose by $2', 'The new quantity is 450, not 500.'],
    ], 0)),
  ],

  'e2-pes': [
    byte('PES diagrams', [
      '**Perfectly inelastic supply (PES = 0):** a **vertical** supply curve. Quantity supplied does not change when price changes.',
      '**Inelastic (PES < 1):** a **steep** curve that meets the quantity axis side of the origin. **Unitary (PES = 1):** a straight line through the **origin**. **Elastic (PES > 1):** a flatter line that meets the price axis. **Perfectly elastic (PES = ∞):** a **horizontal** line.',
    ], match('Match each supply curve to its elasticity.', [
      ['Vertical line', 'Perfectly inelastic'],
      ['Horizontal line', 'Perfectly elastic'],
      ['Straight line through the origin', 'Unitary'],
      ['Flatter line that meets the price axis', 'Elastic'],
    ], 'The slope of a straight-line supply curve and where it cuts the axes decide its PES.')),
  ],

  'e2-failure': [
    byte('Private, external and social costs and benefits', [
      '**Private cost:** paid by the producer or buyer. **External cost:** suffered by third parties (such as pollution). **Social cost = private cost + external cost.**',
      '**Private benefit:** gained by the buyer or producer. **External benefit:** gained by third parties (such as a healthier community). **Social benefit = private benefit + external benefit.**',
      'Markets only take account of **private** costs and benefits, so goods with external costs are over-produced and goods with external benefits are under-produced.',
    ], calc('A factory’s private cost of producing a tonne of chemicals is $80. Pollution costs local people $30 per tonne. What is the social cost per tonne ($)?', 110, {
      unit: '$', formula: 'social cost = private cost + external cost', steps: ['80 + 30 = $110 per tonne'], tol: 0.01,
    })),
    byte('Consequences of market failure', [
      '**Demerit goods and goods with external costs** are **over-consumed** because buyers ignore the harm to others.',
      '**Merit goods and goods with external benefits** are **under-consumed** because buyers ignore the benefit to others.',
      '**Public goods** may not be provided at all (non-provision). A **monopoly** restricts supply, so prices are higher.',
    ], multi('Which of these are consequences of market failure? Select all that apply.', [
      ['Too much of a good with external costs is consumed', 'Buyers ignore the harm to others.', true],
      ['Too little of a merit good is consumed', 'Buyers undervalue the benefits.', true],
      ['A monopoly may charge higher prices by restricting supply', 'Lack of competition.', true],
      ['Public goods are always over-provided by private firms', 'They are not provided at all.', false],
    ], 'Resources are misallocated: the quantity the market produces differs from the quantity that is best for society.')),
  ],

  'e2-mixed': [
    byte('Advantages and disadvantages of the mixed system', [
      '**Advantages:** public and merit goods can be provided, **market failure can be corrected**, income can be **redistributed**, and consumers and workers can be protected.',
      '**Disadvantages:** government may be **inefficient**, higher taxes can reduce **incentives**, and decisions may be influenced by politics rather than by costs and benefits.',
    ], mc('Which is a disadvantage of a mixed economic system?', [
      ['Higher taxes to pay for state services may weaken incentives to work and invest', 'Correct.'],
      ['Merit goods and public goods may not be provided for everyone', 'This is a problem in a pure market system.'],
      ['Consumers have no choice about which goods and services they buy', 'Consumers still have choice.'],
      ['Prices are never set by demand and supply in any market', 'Many prices are market determined.'],
    ], 0)),
    byte('Regulation and direct provision', [
      '**Regulation:** laws and rules to control firms (for example pollution limits and safety standards). **Advantages:** protects consumers, workers and the environment. **Disadvantages:** costs of enforcing and complying; firms may avoid the rules.',
      '**Direct provision:** the government provides goods and services itself (for example schools and hospitals). **Advantages:** available to all, whatever their income. **Disadvantages:** paid for from taxes, with an **opportunity cost**, and may be less efficient.',
    ], mc('A government builds and runs free public libraries. Which is the best description of this policy and one of its costs?', [
      ['Direct provision, with an opportunity cost because the money could have been used elsewhere', 'Correct.'],
      ['Regulation, with an opportunity cost because firms must follow new library rules', 'Regulation sets rules; it does not supply.'],
      ['Privatisation, with an opportunity cost because the libraries are sold to private firms', 'The government keeps ownership.'],
      ['A subsidy, with an opportunity cost because libraries receive a payment per book sold', 'A subsidy is a payment to producers.'],
    ], 0)),
    byte('Privatisation and nationalisation', [
      '**Privatisation:** selling a state-owned firm to the private sector. **Advantages:** profit motive can raise efficiency, and the government raises money. **Disadvantages:** loss of public control, possible job cuts, and prices may rise.',
      '**Nationalisation:** taking a private firm into state ownership. **Advantages:** the government can protect jobs and essential services. **Disadvantages:** possible inefficiency, losses paid by taxpayers, and compensation costs.',
    ], match('Match each policy to a likely advantage.', [
      ['Privatisation', 'Profit motive may raise efficiency'],
      ['Nationalisation', 'The state can protect an essential service'],
      ['Regulation', 'Firms are stopped from harming consumers'],
      ['Direct provision', 'Everyone can use the service whatever their income'],
    ])),
    byte('Quotas on natural resources', [
      'A **quota** is a limit on the quantity of a good that can be produced or extracted (for example a limit on tonnes of fish caught).',
      '**Advantages:** protects resources and the environment for the future. **Disadvantages:** supply falls so the price rises, workers may lose income, and quotas are hard to police.',
    ], short('Explain one advantage and one disadvantage of a quota on the quantity of fish that may be caught.', {
      command: 'Explain',
      points: ['Advantage: fish stocks are protected so they can recover (sustainability)', 'Disadvantage: supply falls, so fishing incomes fall and the price rises'],
      model: 'A quota protects fish stocks so that they can recover and the industry lasts. However, less fish is supplied, so fishing workers may lose income and the price of fish rises.',
    })),
  ],

  'e3-money': [
    byte('Forms and characteristics of money', [
      '**Forms of money:** coins and notes, bank deposits (electronic money), cheques and cards, and mobile or digital payments.',
      '**Characteristics of good money:** **acceptable**, **durable**, **portable**, **divisible**, **scarce** (limited supply, so it holds value) and **uniform** (all units are the same).',
    ], multi('Which of these are characteristics of good money? Select all that apply.', [
      ['It is generally acceptable as payment', 'People must be willing to take it.', true],
      ['It can be divided into smaller units', 'So prices can match values.', true],
      ['It is easy to carry or transfer', 'Portable.', true],
      ['It is in unlimited supply', 'It must be scarce to keep its value.', false],
    ])),
  ],

  'e3-households': [
    byte('Age, culture and confidence', [
      '**Age:** young adults tend to spend or borrow more; people in middle age save for retirement; older people may spend savings.',
      '**Culture:** attitudes to saving and debt differ between countries and communities, so spending and saving patterns differ.',
      '**Confidence:** if households expect good times and secure jobs they spend more; if they expect job losses they save more and borrow less.',
    ], mc('Households fear job losses in a coming recession. Which change in behaviour is most likely?', [
      ['They save more and borrow less, so spending on goods falls', 'Correct.'],
      ['They borrow more and save less, so spending on goods rises', 'The opposite of caution.'],
      ['They spend the same amount, because confidence does not affect behaviour', 'Confidence strongly influences spending.'],
      ['They cut saving but also cut spending, so incomes rise', 'Not logical.'],
    ], 0)),
  ],

  'e3-workers': [
    byte('Choosing an occupation: wage and non-wage factors', [
      '**Wage factors:** the pay on offer, bonuses and overtime.',
      '**Non-wage factors:** **job security**, hours and holidays, working conditions, **promotion prospects**, job satisfaction, location, and **fringe benefits** such as a pension.',
      'A worker may accept a lower wage in a job with better non-wage benefits.',
    ], multi('Which of these are non-wage factors that influence a worker’s choice of occupation? Select all that apply.', [
      ['Job security', 'Not about pay.', true],
      ['Promotion prospects', 'Not about pay.', true],
      ['Hourly rate of pay', 'A wage factor.', false],
      ['Overtime payments', 'A wage factor.', false],
    ])),
    byte('Reasons for differences in wages', [
      '**Demand and supply of labour:** skills that are scarce and in demand earn more. **Bargaining strength:** strong trade unions can raise wages.',
      '**Discrimination:** some groups (for example women) may be paid less for the same work. **Government policy:** a national minimum wage raises the lowest pay.',
      'Wages also vary by **sector** (tertiary and high-skill jobs often pay more than primary) and between the **public and private** sectors.',
    ], mc('Two workers do the same job with the same skills, but one is paid 15% less because of their gender. Which reason for the wage difference is this?', [
      ['Discrimination', 'Correct.'],
      ['Differences in the supply of labour', 'Skills and supply are the same.'],
      ['Differences in trade union bargaining power', 'Both do the same job.'],
      ['A national minimum wage', 'A minimum wage sets a floor, not a gap.'],
    ], 0)),
    byte('Mobility of labour', [
      '**Occupational mobility:** how easily workers can change from one type of job to another. **Geographical mobility:** how easily workers can move to a different area for work.',
      '**Mobility rises** with education and training, good transport, information about jobs, and help with moving costs. **It falls** with family ties, high house prices elsewhere and a lack of skills.',
      'Higher mobility reduces unemployment and fills vacancies; low mobility leaves workers unemployed in areas where industries are declining.',
    ], mc('A steelworker loses their job but cannot take a vacancy in a software firm because they lack the skills. Which mobility is limited?', [
      ['Occupational mobility', 'Correct: changing type of job.'],
      ['Geographical mobility', 'The problem is skills, not location.'],
      ['Mobility of capital', 'This is about workers.'],
      ['Mobility of enterprise', 'This is about workers.'],
    ], 0)),
    byte('Division of labour', [
      '**Division of labour (worker specialisation):** dividing production into separate tasks, each done by a different worker.',
      '**Advantages:** workers get faster and more skilled at one task, so **productivity rises** and unit costs fall.',
      '**Disadvantages:** work can be **boring**, workers may lose wider skills, and if one stage stops, the whole process stops.',
    ], mc('Which is a disadvantage of division of labour?', [
      ['Repetitive work may reduce motivation and cause workers to lose wider skills', 'Correct.'],
      ['Workers become faster at their task so that output per worker rises', 'This is an advantage.'],
      ['Unit costs fall because workers specialise in tasks they do best', 'This is an advantage.'],
      ['Workers can be trained quickly to do one simple task well', 'This is an advantage.'],
    ], 0)),
  ],

  'e3-firms': [
    byte('Small and large firms', [
      '**Small firms:** **advantages** include personal service, flexibility and owner control; **disadvantages** include higher unit costs, difficulty raising finance and limited ability to survive downturns.',
      '**Large firms:** **advantages** include **economies of scale**, easier finance and a stronger market position; **disadvantages** include possible **diseconomies of scale**, slower decisions and less personal contact.',
    ], multi('Which statements about small firms are correct? Select all that apply.', [
      ['They can often offer more personal service', 'An advantage.', true],
      ['They can find it harder to raise finance', 'A disadvantage.', true],
      ['They always benefit from economies of scale', 'Large firms do.', false],
      ['They cannot be flexible when customers’ needs change', 'They are often more flexible.', false],
    ])),
    byte('Mergers: horizontal, vertical and conglomerate', [
      '**Horizontal merger:** firms at the **same stage** of production in the same industry join (two car makers).',
      '**Vertical merger:** firms at **different stages** of the same industry join (a car maker and a tyre supplier).',
      '**Conglomerate merger:** firms in **different industries** join (a car maker and a food company).',
      '**Advantages:** economies of scale, bigger market share (horizontal), secure supplies (vertical), spreading risk (conglomerate). **Disadvantages:** diseconomies of scale, job losses and less competition.',
    ], match('Match each merger to its example.', [
      ['Horizontal', 'A supermarket buys another supermarket'],
      ['Vertical', 'A brewery buys a hop farm'],
      ['Conglomerate', 'A car maker buys a hotel chain'],
    ])),
    byte('Internal and external economies and diseconomies of scale', [
      '**Internal economies** come from the growth of the firm itself: for example bulk buying, specialist managers, cheaper finance, technical economies.',
      '**External economies** come from the growth of the **whole industry** in an area: for example skilled workers, specialist suppliers and good transport links.',
      '**Internal diseconomies:** the firm becomes too big to manage well. **External diseconomies:** industry growth causes congestion, higher land costs and a shortage of workers.',
    ], mc('Many software firms locate in one city and a pool of skilled programmers develops, lowering every firm’s costs. What is this?', [
      ['An external economy of scale', 'Correct: it comes from the growth of the industry.'],
      ['An internal economy of scale', 'It benefits all firms in the area, not one firm’s growth.'],
      ['An external diseconomy of scale', 'Costs fall, not rise.'],
      ['An internal diseconomy of scale', 'Costs fall, not rise.'],
    ], 0)),
  ],

  'e3-production': [
    byte('Demand for factors of production', [
      'The demand for a factor (such as labour) is a **derived demand**: it depends on the demand for the product it makes.',
      'It also depends on the **price of the factor**, the **price of other factors** that could replace it, its **availability** and its **productivity**.',
    ], mc('Demand for new houses rises sharply. What is the most likely effect on the demand for bricklayers?', [
      ['It rises, because labour demand is derived from the demand for the product', 'Correct.'],
      ['It falls, because workers become more expensive when houses are in demand', 'The derived demand rises.'],
      ['It stays the same, because factor demand does not depend on product demand', 'It does.'],
      ['It rises only if the price of bricks falls at the same time', 'Product demand is the main influence.'],
    ], 0)),
    byte('Labour-intensive and capital-intensive production', [
      '**Labour-intensive:** uses a lot of labour compared with capital (for example hairdressing, farming by hand). **Capital-intensive:** uses a lot of machinery (for example car factories).',
      'A firm chooses on **relative cost** and the type of product. **Capital-intensive** methods: lower unit costs at high output, consistent quality, but high set-up costs and job losses. **Labour-intensive** methods: flexible and personal, but higher labour costs and less consistent quality.',
    ], mc('Wages rise sharply while the price of machinery falls. Which change in production method is most likely?', [
      ['A switch to more capital-intensive production', 'Correct: capital is now relatively cheaper.'],
      ['A switch to more labour-intensive production', 'Labour is relatively dearer.'],
      ['No change, because the choice of method never depends on factor prices', 'It does.'],
      ['A switch to producing fewer goods but using more workers per unit', 'Not logical.'],
    ], 0)),
    byte('Influences on productivity and the effect of investment', [
      'Productivity rises with **training and education**, better **technology and machines**, better management, and better **incentives** for workers.',
      '**Investment** in capital goods raises productivity and the quantity of output, which can reduce unit costs and increase economic growth.',
    ], short('Explain how an increase in investment in machinery could raise a firm’s productivity.', {
      command: 'Explain',
      points: ['Workers have better or more machines to use', 'So each worker can produce more output per hour, which raises productivity'],
      model: 'More investment in machinery gives workers better equipment, so each worker can produce more in an hour. Output per worker, which is productivity, rises.',
    })),
  ],

  'e3-costs': [
    byte('Average fixed cost and average variable cost', [
      '**Average fixed cost (AFC) = FC ÷ output.** **Average variable cost (AVC) = VC ÷ output.** **ATC = AFC + AVC.**',
      'AFC always **falls** as output rises (fixed costs are spread over more units).',
    ], calc('A firm has fixed costs of $6 000, variable costs of $9 000 and produces 1 500 units. What is its average total cost per unit ($)?', 10, {
      unit: '$', formula: 'ATC = (FC + VC) ÷ output', steps: ['TC = 6 000 + 9 000 = $15 000', 'ATC = 15 000 ÷ 1 500 = $10'], tol: 0.01,
    }), { eq: ['AFC = FC ÷ output', 'AVC = VC ÷ output', 'ATC = AFC + AVC'] }),
    byte('Total revenue and average revenue', [
      '**Total revenue (TR) = price × quantity sold.** **Average revenue (AR) = TR ÷ quantity sold,** which equals the **price**.',
      'Revenue rises when sales rise at the same price, or when the price rises and sales do not fall by proportionately more.',
    ], calc('A firm sells 250 units for a total revenue of $3 000. What is the average revenue per unit ($)?', 12, {
      unit: '$', formula: 'AR = TR ÷ quantity', steps: ['3 000 ÷ 250 = $12'], tol: 0.01,
    })),
    byte('Objectives of firms', [
      '**Survival:** keeping the firm in business (important for new firms). **Profit maximisation:** making the biggest gap between revenue and costs.',
      '**Growth:** increasing output, sales or market share. **Social welfare:** serving the community (for example a charity or a social enterprise).',
    ], match('Match each firm to its most likely main objective.', [
      ['A new start-up with little cash', 'Survival'],
      ['A listed company with shareholders', 'Profit maximisation'],
      ['A charity running a shelter', 'Social welfare'],
      ['A successful firm opening in new countries', 'Growth'],
    ])),
  ],

  'e3-markets': [
    byte('Competitive markets', [
      '**Characteristics:** many firms, many buyers, easy entry and exit, and similar products.',
      '**Effects:** lower prices, better quality, more choice, and lower profit per firm. **Advantages:** consumers benefit and firms must be efficient. **Disadvantages:** firms earn small profits, so little may be spent on research, and some firms may fail.',
    ], mc('Which is a likely effect of having a large number of firms in a market?', [
      ['Lower prices and more choice for consumers, but lower profit for each firm', 'Correct.'],
      ['Higher prices and less choice for consumers, with higher profit for each firm', 'The opposite.'],
      ['Higher prices and more choice for consumers, with no change in profit', 'Competition lowers prices.'],
      ['Lower prices and less choice for consumers, with higher profit for each firm', 'More firms means more choice.'],
    ], 0)),
    byte('Monopoly markets', [
      '**Characteristics:** one (or one dominant) firm, high barriers to entry, and no close substitutes.',
      '**Effects:** higher prices, less choice, and higher profit. **Advantages:** economies of scale and profits that can fund research. **Disadvantages:** consumers may be exploited, lower quality and less innovation.',
    ], multi('Which of these can be an advantage of a monopoly? Select all that apply.', [
      ['Large economies of scale', 'Large output can cut unit costs.', true],
      ['High profits that can pay for research', 'Funding innovation.', true],
      ['Lower prices because of strong competition', 'There is no competition.', false],
      ['Greater choice for consumers', 'Choice is limited.', false],
    ])),
  ],
};
