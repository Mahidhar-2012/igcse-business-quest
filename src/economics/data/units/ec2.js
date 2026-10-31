import { byte, lesson, mc, calc, fig } from '../helpers.js';

// Units 3 and 4: microeconomic decision-makers and the government and the macroeconomy
// (Cambridge IGCSE Economics 0455, syllabus for 2027, 2028 and 2029, topics 3 and 4).

export const e31 = lesson('e3-money', 'Money and banking', '3.1', [
  'Money is a medium of exchange, store of value, unit of account and standard for deferred payment. Banks accept deposits, make loans and the central bank oversees the system.',
], [
  byte('Money and its functions', [
    '**Money** is anything generally accepted as payment for goods and services. Good money is **durable, portable, divisible, scarce and acceptable**.',
    'Functions: **medium of exchange** (used to buy and sell), **store of value** (keeps purchasing power over time), **unit of account** (prices can be compared) and **standard for deferred payment** (debts can be repaid later).',
    'Money replaces **barter**, which needs a **double coincidence of wants**.',
  ], mc('Which function of money allows people to compare the prices of different goods?', [
    ['Unit of account', 'Correct: all prices are measured in the same unit.'],
    ['Medium of exchange', 'This is its use in buying and selling.'],
    ['Store of value', 'This is keeping wealth for later.'],
    ['Standard for deferred payment', 'This is repaying debts in the future.'],
  ], 0)),
  byte('Commercial banks and the central bank', [
    '**Commercial banks** accept **deposits**, make **loans**, provide **overdrafts** and payment services, and earn money from the **difference between interest charged and interest paid**.',
    'The **central bank** issues notes and coins, acts as **banker to the government and commercial banks**, manages the **money supply and interest rates** and acts as **lender of last resort**.',
  ], mc('Which is a role of a central bank?', [
    ['Acting as lender of last resort to commercial banks', 'Correct.'],
    ['Selling consumer goods to households', 'Central banks do not trade goods.'],
    ['Setting the wages of all workers', 'Wages are set in labour markets.'],
    ['Running a supermarket chain', 'This is a business activity.'],
  ], 0)),
]);

export const e32 = lesson('e3-households', 'Households', '3.2', [
  'Households spend, save and borrow. Their spending depends on income, wealth, interest rates and confidence.',
], [
  byte('Household spending, saving and borrowing', [
    '**Spending** depends on **income**, **wealth**, **interest rates**, taxes, prices and **confidence**. Rich households **save a larger amount**.',
    '**Saving** is income not spent; it earns **interest**. **Borrowing** (loans, credit) lets people buy now and pay later, but must be **repaid with interest**.',
    'A **rise in interest rates** encourages saving and discourages borrowing and spending.',
  ], mc('What is most likely to happen to household borrowing if interest rates rise?', [
    ['It falls, because borrowing is more expensive', 'Correct.'],
    ['It rises, because saving is less attractive', 'Higher rates make saving more attractive.'],
    ['It stays the same', 'Interest rates strongly influence borrowing.'],
    ['It becomes free', 'Borrowing always has a cost.'],
  ], 0)),
]);

export const e33 = lesson('e3-workers', 'Workers', '3.3', [
  'Wages depend on supply and demand for labour, skills and qualifications. Trade unions and a minimum wage can change pay. Workers choose jobs using pay and non-pay factors.',
], [
  byte('Factors affecting wage rates', [
    'Wages are set in the **labour market** by **demand for labour** (from firms) and **supply of labour** (from workers).',
    'Pay is **higher** for jobs needing **skills, qualifications and experience** (supply is limited), **risky or unpleasant** jobs, and jobs with **high demand**.',
    'Pay is lower for **unskilled** jobs with a large supply of workers.',
  ], mc('Why do surgeons earn more than shop assistants?', [
    ['Fewer people have the skills and qualifications, so supply of labour is limited', 'Correct.'],
    ['Surgeons work fewer hours', 'Pay is determined by demand, supply and skills.'],
    ['Shop assistants are not needed', 'They are needed, but the supply of labour is large.'],
    ['Surgeons are paid by the government only', 'Pay is determined by market forces and other factors.'],
  ], 0)),
  byte('The labour market and the minimum wage', [
    'The equilibrium wage is where **demand for labour equals supply of labour**.',
    'A **minimum wage** above equilibrium raises pay for those in work, but may cause **unemployment** (firms demand fewer workers) and higher costs.',
  ], fig({ svg: 'labourMarket' }, mc('A minimum wage is set above the equilibrium wage. What is the most likely effect?', [
    ['Some workers lose jobs, as quantity of labour demanded falls', 'Correct: surplus of labour appears.'],
    ['A shortage of labour appears', 'This occurs if the wage is below equilibrium.'],
    ['Unemployment always falls', 'Unemployment is more likely to rise.'],
    ['Labour supply falls to zero', 'Supply of labour increases at a higher wage.'],
  ], 0)), { fig: { svg: 'labourMarket', caption: 'The labour market with a minimum wage' } }),
  byte('Trade unions and choosing a job', [
    '**Trade unions** bargain for **higher pay, better conditions and job security**. They can raise wages but, if too strong, may increase costs and reduce employment.',
    'Workers choose jobs using **pay** and **non-pay factors** such as hours, job security, promotion prospects, location and work satisfaction.',
    'Types of pay: **time rate** (per hour), **piece rate** (per item), **salary**, **commission**, **bonus**.',
  ], mc('A worker is paid for each unit produced. What type of pay is this?', [
    ['Piece rate', 'Correct.'],
    ['Time rate', 'Time rate is per hour worked.'],
    ['Salary', 'A salary is a fixed annual amount.'],
    ['Commission', 'Commission is a percentage of sales.'],
  ], 0)),
]);

export const e34 = lesson('e3-firms', 'Firms', '3.4', [
  'Firms differ in size and sector. They aim for profit, growth, survival or social goals. Businesses grow internally or by merging, and can face problems of size.',
], [
  byte('Types and sizes of firms', [
    '**Sectors:** **primary** (extracting raw materials), **secondary** (manufacturing), **tertiary** (services).',
    '**Size** can be measured by **number of employees, revenue, output or capital employed**.',
    '**Private sector** firms are owned by individuals (sole traders, partnerships, companies); **public sector** firms are owned by the government.',
  ], mc('A firm builds cars. In which sector does it operate?', [
    ['Secondary', 'Correct: manufacturing.'],
    ['Primary', 'Primary firms extract raw materials.'],
    ['Tertiary', 'Tertiary firms provide services.'],
    ['Public', 'Sectors of production differ from ownership sectors.'],
  ], 0)),
  byte('Firms’ objectives and growth', [
    'Objectives: **profit maximisation**, **growth**, **survival** (new firms), **market share**, and **social objectives** (charities, social enterprises).',
    'Firms grow **internally** (selling more) or **externally** (mergers and takeovers).',
    '**Economies of scale** are falling average costs as output rises (bulk buying, specialisation, cheaper finance). **Diseconomies of scale** occur when very large firms become hard to manage and costs rise.',
  ], mc('Which is an example of an economy of scale?', [
    ['A large firm gets a discount for buying materials in bulk', 'Correct: average cost falls as output rises.'],
    ['A firm struggles with communication as it grows', 'This is a diseconomy of scale.'],
    ['A firm raises its prices', 'This is not a cost advantage of size.'],
    ['A government subsidy', 'This is not an internal economy of scale.'],
  ], 0)),
]);

export const e35 = lesson('e3-production', 'Firms and production', '3.5', [
  'Production uses factors to make output. Productivity is output per unit of input. Specialisation and technology raise productivity and lower costs.',
], [
  byte('Production and productivity', [
    '**Production** is the making of goods and services using factors of production. **Productivity** is **output per unit of input** (for example output per worker per hour).',
    '**Labour-intensive** production uses more labour; **capital-intensive** production uses more machines. Choice depends on **relative costs**.',
    '**Productivity of labour = total output ÷ number of workers.**',
  ], calc('A factory makes 4 500 units with 150 workers. Calculate output per worker.', 30, {
    formula: 'output ÷ workers', steps: ['4 500 ÷ 150 = 30 units per worker'], tol: 0.01,
  })),
  byte('Raising productivity', [
    'Methods: **training**, **better technology and machinery**, **division of labour (specialisation)**, better management and incentives.',
    'Higher productivity **reduces average costs**, can increase **profit** and allows **lower prices** or higher wages.',
  ], mc('Which is the most likely way to raise labour productivity?', [
    ['Training workers and giving them better machines', 'Correct.'],
    ['Cutting the number of hours worked without other changes', 'This is unlikely to raise output per hour.'],
    ['Raising the price of the product', 'This does not change output per worker.'],
    ['Reducing the size of the market', 'Not related to productivity.'],
  ], 0)),
]);

export const e36 = lesson('e3-costs', 'Firms’ costs, revenue and objectives', '3.6', [
  'Fixed and variable costs make total cost. Average cost = total cost ÷ output. Revenue = price × quantity. Profit = revenue − total cost.',
], [
  byte('Fixed, variable and total costs', [
    '**Fixed costs** do not change with output (rent, insurance, salaries). **Variable costs** change with output (raw materials, piece-rate wages).',
    '**Total cost (TC) = fixed cost (FC) + variable cost (VC).** **Average cost (AC) = TC ÷ output.**',
  ], fig({ svg: 'costLines' }, calc('A bakery has fixed costs of $200 and variable costs of $1 per loaf. It makes 400 loaves. Calculate total cost ($).', 600, {
    unit: '$', formula: 'TC = FC + VC', steps: ['VC = 400 × 1 = $400', 'TC = 200 + 400 = $600'], tol: 0.5,
  })), { fig: { svg: 'costLines', caption: 'Fixed, variable and total cost' }, eq: ['TC = FC + VC', 'AC = TC ÷ output'] }),
  byte('Average cost', [
    'The **average total cost (ATC)** curve is **U-shaped**: it falls at first (economies of scale, spreading fixed costs), reaches a **minimum**, then rises (diseconomies of scale).',
    'The firm’s most efficient output is at the **lowest average cost**.',
  ], fig({ svg: 'atcCurve' }, mc('What is the shape of the average total cost curve in the short run?', [
    ['U-shaped', 'Correct.'],
    ['A straight horizontal line', 'Average costs change with output.'],
    ['Always rising', 'It falls at first as fixed costs are spread over more output.'],
    ['Always falling', 'It eventually rises with diseconomies of scale.'],
  ], 0)), { fig: { svg: 'atcCurve', caption: 'An average total cost curve' } }),
  byte('Revenue and profit', [
    '**Total revenue = price × quantity sold.** **Average revenue = total revenue ÷ quantity** (equals the price).',
    '**Profit = total revenue − total cost.** A negative result is a **loss**.',
  ], calc('A firm sells 300 units at $8. Its total costs are $1 900. Calculate its profit ($).', 500, {
    unit: '$', formula: 'profit = revenue − costs', steps: ['Revenue = 300 × 8 = $2 400', 'Profit = 2 400 − 1 900 = $500'], tol: 0.5,
  }), { eq: ['Total revenue = price × quantity', 'Profit = total revenue − total cost'] }),
]);

export const e37 = lesson('e3-markets', 'Market structures', '3.7', [
  'Competitive markets have many firms and low barriers; monopolies have one dominant firm. Competition usually gives lower prices and better quality.',
], [
  byte('Competitive markets and monopolies', [
    'In a **competitive market** there are **many firms**, **similar products** and **easy entry**. Prices are lower and firms must be efficient and innovative.',
    'A **monopoly** has **one (or a dominant) seller** and **barriers to entry**. It can **raise prices**, restrict output and has less incentive to innovate, but may gain **economies of scale** and fund research.',
    'The **market share** of a firm is its sales as a percentage of the total market.',
  ], mc('Which is likely in a market with strong competition?', [
    ['Lower prices and more choice for consumers', 'Correct.'],
    ['Higher prices with a single supplier', 'This describes a monopoly.'],
    ['High barriers to entry', 'Barriers are low in competitive markets.'],
    ['Little incentive to improve quality', 'Competition drives improvement.'],
  ], 0)),
]);

export const e41 = lesson('e4-aims', 'The role of government and macroeconomic aims', '4.1', [
  'Governments aim for economic growth, low unemployment, price stability, a balance of payments, redistribution of income and protection of the environment.',
], [
  byte('Macroeconomic aims', [
    'Main aims: **economic growth**, **low unemployment**, **stable prices (low inflation)**, a **balance of payments** equilibrium, **redistribution of income** and **protection of the environment**.',
    'Aims can **conflict**: for example faster growth may cause higher inflation or damage the environment.',
  ], mc('Which pair of aims might conflict?', [
    ['Rapid economic growth and protecting the environment', 'Correct: expansion can increase pollution and resource use.'],
    ['Low unemployment and economic growth', 'These usually go together.'],
    ['Low inflation and stable prices', 'These are the same aim.'],
    ['Higher incomes and economic growth', 'These normally go together.'],
  ], 0)),
]);

export const e42 = lesson('e4-fiscal', 'Fiscal policy', '4.2', [
  'Fiscal policy uses government spending and taxation. Direct taxes are on income; indirect taxes are on spending. Budget deficits happen when spending exceeds tax revenue.',
], [
  byte('Government spending and taxation', [
    '**Fiscal policy** uses **taxation and government spending** to influence the economy.',
    '**Direct taxes** (income tax, corporation tax) are paid straight to the government from income or profit. **Indirect taxes** (VAT, excise duties) are paid on spending.',
    'A tax can be **progressive** (rate rises with income), **proportional** (same rate) or **regressive** (takes a larger share from low incomes).',
  ], mc('VAT is an example of which type of tax?', [
    ['An indirect tax', 'Correct: it is added to the price of goods and services.'],
    ['A direct tax', 'Direct taxes are on income or profits.'],
    ['A progressive tax', 'VAT is usually regressive or proportional.'],
    ['A subsidy', 'A subsidy is a payment, not a tax.'],
  ], 0)),
  byte('Budgets and fiscal policy effects', [
    'A **budget deficit** is when government spending is greater than tax revenue; a **surplus** is when revenue is greater.',
    '**Expansionary fiscal policy** (higher spending, lower taxes) boosts **demand, growth and jobs**, but risks **inflation** and larger deficits.',
    '**Contractionary fiscal policy** (lower spending, higher taxes) reduces **inflation**, but can slow growth and raise unemployment.',
  ], mc('A government cuts income tax. Which effect is most likely?', [
    ['Disposable income and spending rise, boosting demand', 'Correct.'],
    ['Disposable income falls', 'Lower taxes increase disposable income.'],
    ['The government’s budget moves towards surplus automatically', 'Lower tax revenue tends to move it towards deficit.'],
    ['Unemployment rises immediately', 'Higher demand normally reduces unemployment.'],
  ], 0)),
]);

export const e43 = lesson('e4-monetary', 'Monetary policy', '4.3', [
  'Monetary policy uses interest rates, the money supply and the exchange rate. Higher interest rates reduce borrowing and spending and lower inflation.',
], [
  byte('Interest rates and monetary policy', [
    '**Monetary policy** is run by the **central bank**. It changes **interest rates**, the **money supply** or the **exchange rate**.',
    '**Raising interest rates:** borrowing falls, saving rises, spending and investment fall, so **inflation falls** but **growth may slow**. **Lowering rates** has the opposite effect.',
  ], mc('A central bank raises interest rates. Which is the most likely result?', [
    ['Borrowing and consumer spending fall', 'Correct.'],
    ['Borrowing rises sharply', 'Higher rates make borrowing more costly.'],
    ['The economy grows faster', 'Higher rates tend to slow demand.'],
    ['Prices always fall immediately', 'The effect on inflation is gradual and uncertain.'],
  ], 0)),
]);

export const e44 = lesson('e4-supplyside', 'Supply-side policy', '4.4', [
  'Supply-side policies raise the productive capacity of the economy: education and training, infrastructure, deregulation, privatisation and lower taxes.',
], [
  byte('Supply-side policies', [
    '**Supply-side policies** aim to **increase productive capacity** (shift the PPC outwards) and efficiency.',
    'Examples: **education and training**, **investment in infrastructure**, **deregulation**, **privatisation**, **lower taxes** to encourage work and enterprise, **reducing trade union power**.',
    '**Advantages:** long-term growth, lower costs and prices. **Disadvantages:** slow to work, expensive, may increase inequality.',
  ], mc('Which is a supply-side policy?', [
    ['Improving training for the unemployed', 'Correct: it raises the skills and productivity of labour.'],
    ['Raising government spending on benefits only', 'This mainly affects demand.'],
    ['Cutting interest rates', 'This is monetary policy.'],
    ['Printing more money', 'This is not a supply-side policy.'],
  ], 0)),
]);

export const e45 = lesson('e4-growth', 'Economic growth', '4.5', [
  'Economic growth is an increase in real GDP. It brings higher incomes and living standards but can cause inequality and environmental damage. Recessions are periods of falling GDP.',
], [
  byte('Economic growth and the business cycle', [
    '**Economic growth** is an **increase in real GDP** over time (GDP adjusted for inflation). **GDP** is the total value of output in a country in a year.',
    'The **business cycle** has **boom**, **slowdown**, **recession** (falling GDP for two quarters) and **recovery**.',
    '**Benefits:** higher incomes, more jobs, more tax revenue. **Costs:** pollution, resource depletion, inequality, inflation.',
  ], fig({ svg: 'businessCycle' }, mc('What is a recession?', [
    ['A fall in real GDP, usually for two quarters or more', 'Correct.'],
    ['A rise in prices', 'This is inflation.'],
    ['A period when GDP rises very fast', 'This describes a boom.'],
    ['A fall in the exchange rate', 'This is depreciation.'],
  ], 0)), { fig: { svg: 'businessCycle', caption: 'The business cycle' } }),
  byte('Calculating growth', [
    '**Growth rate = (new GDP − old GDP) ÷ old GDP × 100.**',
    '**GDP per head = GDP ÷ population.**',
  ], calc('Real GDP rises from $400 billion to $420 billion. Calculate the growth rate (%).', 5, {
    unit: '%', formula: '(420 − 400) ÷ 400 × 100', steps: ['20 ÷ 400 = 0.05', '× 100 = 5%'], tol: 0.01,
  }), { eq: ['Growth rate (%) = (new GDP − old GDP) ÷ old GDP × 100'] }),
]);

export const e46 = lesson('e4-unemployment', 'Employment and unemployment', '4.6', [
  'Unemployment is the number of people able and willing to work who cannot find a job. Types include cyclical, structural, frictional and seasonal. It has costs for individuals and the economy.',
], [
  byte('Measuring and types of unemployment', [
    '**Unemployment rate = number unemployed ÷ labour force × 100.** The **labour force** is everyone in work or actively seeking work.',
    '**Cyclical** (fall in demand during a recession), **structural** (industries decline or skills do not match), **frictional** (between jobs), **seasonal** (jobs depend on the time of year).',
  ], calc('A country has a labour force of 20 million, of whom 1 million are unemployed. Calculate the unemployment rate (%).', 5, {
    unit: '%', formula: '1 ÷ 20 × 100', steps: ['1 ÷ 20 = 0.05', '= 5%'], tol: 0.01,
  })),
  byte('Consequences and policies', [
    '**Costs:** lost output, less tax revenue, more benefit spending, poverty and social problems.',
    '**Policies:** **expansionary fiscal and monetary policy** for cyclical unemployment, **education and training** for structural unemployment, better job information for frictional unemployment.',
  ], mc('Workers in a declining coal industry cannot find jobs because they lack the skills for new industries. What type of unemployment is this?', [
    ['Structural', 'Correct: caused by a mismatch of skills as industries change.'],
    ['Cyclical', 'Cyclical unemployment comes from a fall in overall demand.'],
    ['Frictional', 'Frictional unemployment is the short wait between jobs.'],
    ['Seasonal', 'Seasonal unemployment depends on the time of year.'],
  ], 0)),
]);

export const e47 = lesson('e4-inflation', 'Inflation and deflation', '4.7', [
  'Inflation is a sustained rise in the general price level, measured by the CPI. It can be demand-pull or cost-push. It reduces the value of money and hurts those on fixed incomes.',
], [
  byte('Measuring inflation', [
    '**Inflation** is a **sustained rise in the general price level**; **deflation** is a sustained fall. **Disinflation** is a fall in the rate of inflation.',
    'It is measured by the **consumer price index (CPI)**, using a **weighted** basket of goods and services.',
    '**Inflation rate = (new CPI − old CPI) ÷ old CPI × 100.**',
  ], calc('The CPI rises from 120 to 126. Calculate the inflation rate (%).', 5, {
    unit: '%', formula: '(126 − 120) ÷ 120 × 100', steps: ['6 ÷ 120 = 0.05', '= 5%'], tol: 0.01,
  }), { eq: ['Inflation rate (%) = (new CPI − old CPI) ÷ old CPI × 100'] }),
  byte('Causes and consequences of inflation', [
    '**Demand-pull:** total demand rises faster than supply. **Cost-push:** higher costs of production (wages, raw materials, imports) push prices up.',
    '**Consequences:** the purchasing power of money falls, people on **fixed incomes** and savers lose out, exports become less competitive, and uncertainty reduces investment.',
  ], mc('A rise in the world price of oil raises firms’ costs and prices. What type of inflation is this?', [
    ['Cost-push inflation', 'Correct.'],
    ['Demand-pull inflation', 'Demand-pull comes from excess spending.'],
    ['Deflation', 'Deflation is a fall in prices.'],
    ['Disinflation', 'Disinflation is a slower rate of increase.'],
  ], 0)),
]);

export const unit3 = {
  id: 'e3', number: 3, title: 'Microeconomic Decision-Makers', short: 'Micro', emoji: '🏭', color: 'emerald',
  submodules: [e31, e32, e33, e34, e35, e36, e37],
  papers: [],
};

export const unit4 = {
  id: 'e4', number: 4, title: 'Government and the Macroeconomy', short: 'Macro', emoji: '🏛️', color: 'violet',
  submodules: [e41, e42, e43, e44, e45, e46, e47],
  papers: [],
};
