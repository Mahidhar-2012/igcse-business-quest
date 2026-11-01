import { byte, mc, calc } from '../helpers.js';
import { multi, match, short } from '../../../data/builders.js';

// Syllabus audit (topics 4 to 6): bytes for objectives the first pass did not cover.
// Appended to the lesson with the matching id (see ../index.js). Tests follow the hard-question standard.

export const extrasB = {
  'e4-aims': [
    byte('Why governments choose aims, and how they judge success', [
      'Governments choose aims to raise **living standards** and keep the economy stable. They set **criteria** to judge success, for example growth of 2% to 3% a year, unemployment below 5%, inflation about 2%, a balanced current account.',
      '**Conflicts:** **full employment and stable prices** (more jobs push up wages and prices); **growth and environmental sustainability** (more output uses more resources); **full employment and balance of payments stability** (more income means more imports).',
    ], match('Match each pair of conflicting aims to the reason they can conflict.', [
      ['Full employment and stable prices', 'More jobs raise wages and spending, which can push up prices'],
      ['Growth and the environment', 'More output uses more resources and creates more pollution'],
      ['Full employment and a balanced current account', 'Higher incomes raise spending on imports'],
    ])),
  ],

  'e4-fiscal': [
    byte('The government budget', [
      'The **government budget** compares government spending with its revenue (mainly taxes).',
      '**Budget deficit:** spending is greater than revenue. **Budget surplus:** revenue is greater than spending.',
      '**Size = revenue − spending** (a negative answer is a deficit).',
    ], calc('A government plans to spend $540 billion and expects tax revenue of $500 billion. What is the budget balance ($ billion; give a negative answer for a deficit)?', -40, {
      unit: '$ billion', formula: 'budget balance = revenue − spending', steps: ['500 − 540 = −40, a deficit of $40 billion'], tol: 0.01,
    })),
    byte('Reasons for government spending', [
      'Main areas: **healthcare, education, defence, transport and infrastructure, social benefits.**',
      '**Reasons and effects:** healthcare and education improve the quality of labour; infrastructure lowers firms’ costs; benefits reduce poverty and support demand; defence provides a public good.',
    ], mc('A government spends heavily on schools and training. Which effect is most likely in the long run?', [
      ['Higher labour productivity, which supports growth and incomes', 'Correct.'],
      ['Lower labour productivity, because workers spend time out of work', 'Education raises productivity.'],
      ['A larger budget surplus, because spending usually raises tax revenue at once', 'It adds to spending first.'],
      ['Lower demand for workers, because skills are no longer scarce', 'Skilled workers raise demand.'],
    ], 0)),
    byte('Reasons for taxation and its impact', [
      '**Reasons:** raise **revenue**; discourage **demerit goods**; reduce **imports**; **redistribute income**; influence **total demand**; encourage **environmental sustainability**.',
      '**Impact:** consumers have less income and pay higher prices; workers have less take-home pay and may work less; firms may have lower profits and invest less; the government gains revenue.',
    ], multi('Which are reasons why a government taxes goods and services? Select all that apply.', [
      ['To raise revenue for public spending', 'The main reason.', true],
      ['To discourage consumption of demerit goods', 'Higher prices cut demand.', true],
      ['To reduce the price of imports', 'A tax on imports raises their price.', false],
      ['To increase the take-home pay of every worker', 'Taxes reduce take-home pay.', false],
    ])),
    byte('Fiscal policy and the macroeconomic aims', [
      '**Fiscal policy** is the use of **government spending and taxation** to influence the economy.',
      '**To boost growth and jobs:** raise spending or cut taxes (but risk inflation and a bigger deficit). **To cut inflation:** cut spending or raise taxes (but risk slower growth and higher unemployment). Higher taxes on pollution support sustainability.',
    ], mc('A government wants to reduce inflation caused by excess demand. Which fiscal policy fits best?', [
      ['Raise taxes and cut spending, which reduces total demand', 'Correct.'],
      ['Cut taxes and raise spending, which reduces total demand', 'This raises demand.'],
      ['Raise taxes and raise spending, which keeps total demand the same', 'Offsetting; not a clear fit.'],
      ['Cut taxes and cut spending, which raises total demand', 'Not logical.'],
    ], 0)),
  ],

  'e4-monetary': [
    byte('Money supply and monetary policy measures', [
      '**Money supply:** the total amount of money in an economy. **Monetary policy:** the use of **interest rates, the money supply and the exchange rate** by the central bank to influence the economy.',
      '**Expansionary:** cut interest rates, raise the money supply. **Contractionary:** raise interest rates, restrict the money supply. A **higher exchange rate** makes imports cheaper, which helps to lower inflation.',
    ], match('Match each monetary policy change to its likely effect.', [
      ['Interest rates fall', 'Borrowing and spending rise'],
      ['Interest rates rise', 'Borrowing and spending fall'],
      ['Money supply increases', 'More money available to spend, demand may rise'],
      ['Exchange rate rises', 'Imports become cheaper, exports dearer'],
    ])),
    byte('How monetary policy helps meet the aims', [
      '**Cutting interest rates** can raise growth and cut unemployment (but may push up inflation). **Raising interest rates** helps to cut inflation (but may slow growth).',
      'A **stronger currency** reduces import prices and inflation, but makes exports less competitive and can hurt the current account.',
    ], mc('A central bank raises interest rates to cut inflation. Which cost is most likely?', [
      ['Slower economic growth and higher unemployment', 'Correct: demand falls.'],
      ['Faster economic growth and lower unemployment', 'Higher rates slow demand.'],
      ['A lower exchange rate and cheaper exports', 'Higher rates usually raise the exchange rate.'],
      ['A fall in saving as returns on deposits decrease', 'Saving becomes more attractive.'],
    ], 0)),
  ],

  'e4-supplyside': [
    byte('Supply-side measures and their effects on the aims', [
      '**Measures:** education and training, **infrastructure** spending, **labour market reforms** (such as weaker trade union power or more flexible hiring), **lower direct taxes**, **deregulation**, better **incentives** to work and invest, and **privatisation**.',
      '**Effects:** increased productive capacity (PPC shifts right) means **growth with lower inflation**, more jobs, and a stronger current account as goods become more competitive. **Disadvantages:** slow, costly and may widen income inequality.',
    ], multi('Which of these are supply-side policies? Select all that apply.', [
      ['Spending on roads and ports', 'Infrastructure lowers firms’ costs.', true],
      ['Training programmes for the unemployed', 'Raises skills.', true],
      ['Lower income tax to improve work incentives', 'Lower direct taxes.', true],
      ['Raising interest rates to cut spending', 'Monetary policy.', false],
    ])),
  ],

  'e4-growth': [
    byte('Causes and consequences of economic growth', [
      '**Causes:** an increase in **total demand**, an increase in the **quantity** of resources (labour, capital, land), or an increase in the **quality** of resources (skills, technology).',
      '**Advantages:** higher incomes and living standards, more jobs, more tax revenue. **Disadvantages:** pollution and resource use, inflation, unequal gains.',
    ], mc('A new technology raises the output of every worker. Which cause of growth is this?', [
      ['An increase in the quality of resources', 'Correct.'],
      ['An increase in the quantity of resources', 'The number of workers has not changed.'],
      ['An increase in total demand only', 'The change is on the supply side.'],
      ['A decrease in the quality of resources', 'Quality has risen.'],
    ], 0)),
    byte('Recession: causes and consequences', [
      '**Recession:** a fall in real GDP for two or more consecutive quarters.',
      '**Causes:** a fall in total demand, or a fall in the quantity or quality of resources (for example a natural disaster).',
      '**Consequences:** consumers lose income and confidence; **workers** lose jobs; **firms** lose sales and profit and may close; the **government** collects less tax and spends more on benefits.',
    ], match('Match each group to the likely effect of a recession.', [
      ['Workers', 'Job losses and lower pay rises'],
      ['Firms', 'Falling sales and profits'],
      ['Government', 'Lower tax revenue and higher benefit spending'],
      ['Consumers', 'Less income and lower confidence'],
    ])),
    byte('Policies to promote growth', [
      '**Policies:** lower interest rates and taxes (to raise demand), **government spending** on infrastructure, **education and training**, support for **investment**, and trade policies to widen markets.',
      '**Effectiveness:** demand-side policies work quickly but may cause inflation; supply-side policies work slowly but raise the economy’s capacity.',
    ], short('Explain one demand-side and one supply-side policy to promote growth.', {
      command: 'Explain',
      points: ['Demand side: for example cutting interest rates, so borrowing and spending rise', 'Supply side: for example more training, so productivity and capacity rise'],
      model: 'Cutting interest rates makes borrowing cheaper, so spending and total demand rise. More training raises workers’ productivity, so the economy’s capacity to produce increases.',
    })),
  ],

  'e4-unemployment': [
    byte('Employment, unemployment and full employment', [
      '**Employment:** having a paid job. **Unemployment:** being without a job, able and actively looking for work. **Full employment:** everyone who is able and willing to work has a job (some frictional unemployment remains).',
      'Unemployment is measured by the **labour force survey** (a sample survey of households asking whether people are working or looking for work).',
    ], mc('Why is the labour force survey used to measure unemployment?', [
      ['It asks a sample of people whether they are working or looking for work', 'Correct.'],
      ['It counts only people who claim unemployment benefit from the government', 'That is the claimant count.'],
      ['It counts all adults who are not in paid employment, including students', 'Not all are looking for work.'],
      ['It records all jobs that firms advertise during the year', 'That measures vacancies.'],
    ], 0)),
    byte('Consequences of unemployment and policies', [
      '**Consequences:** the **individual** loses income and skills; **firms** lose customers; the **government** loses tax revenue and pays benefits; the **economy** loses output and has a lower growth rate.',
      '**Policies:** expansionary fiscal or monetary policy (cyclical), education and training (structural), job information and mobility help (frictional), and labour market reforms. Each has costs and takes time.',
    ], multi('Which are consequences of high unemployment? Select all that apply.', [
      ['Lower tax revenue for the government', 'Fewer earners.', true],
      ['Higher spending on unemployment benefits', 'More claimants.', true],
      ['Lost output for the economy', 'Resources are unused.', true],
      ['Higher incomes for the unemployed individual', 'They lose income.', false],
    ])),
  ],

  'e4-inflation': [
    byte('Measuring inflation with the Consumer Prices Index', [
      'The **Consumer Prices Index (CPI)** measures the average change in the prices of a **basket** of goods and services that households buy.',
      'Items are **weighted** by how much households spend on them, so a rise in the price of food matters more than a rise in the price of salt. **Inflation rate = percentage change in the CPI.**',
    ], mc('Why is the CPI based on weighted prices?', [
      ['Items that households spend more on have a larger effect on the index', 'Correct.'],
      ['Items with the biggest price rises have a larger effect on the index', 'Weights reflect spending, not price rises.'],
      ['Items that are cheapest have a larger effect on the index', 'Not the aim.'],
      ['Every item is given the same importance in the index', 'That would be unweighted.'],
    ], 0)),
    byte('Consequences of inflation', [
      '**Savers** lose if interest rates are lower than inflation (real value of savings falls). **Borrowers** gain (debts are worth less in real terms); **lenders** lose.',
      '**Consumers** can buy less; **workers** need pay rises to keep up; **firms** face rising costs and uncertainty; **the economy** may lose competitiveness and see lower investment.',
    ], mc('Inflation is 6% and a saver earns 2% interest. What is the effect?', [
      ['The real value of savings falls, so the saver loses out', 'Correct.'],
      ['The real value of savings rises, so the saver gains', 'Prices rise faster than the interest.'],
      ['There is no change in the real value of the savings', 'Interest is below inflation.'],
      ['The saver gains because the savings grow by 6% a year', 'The savings grow by 2%.'],
    ], 0)),
    byte('Policies to control inflation', [
      '**Fiscal:** higher taxes and lower government spending reduce demand. **Monetary:** higher interest rates reduce spending; a higher exchange rate cuts import prices. **Supply side:** policies that raise productivity reduce costs.',
      '**Effectiveness:** demand-side policies work quickly against demand-pull inflation but cost growth and jobs; they are less effective against cost-push inflation.',
    ], match('Match each type of inflation to the most suitable policy.', [
      ['Demand-pull', 'Higher interest rates or higher taxes to reduce demand'],
      ['Cost-push', 'Supply-side measures to raise productivity and cut costs'],
      ['Inflation caused by a higher import price', 'A higher exchange rate to make imports cheaper'],
    ])),
  ],

  'e5-living': [
    byte('Advantages and disadvantages of GDP per head and the HDI', [
      '**Real GDP per head:** an easy-to-compare, regularly updated measure, but it is an **average** (hides inequality) and ignores health, education, the environment and unpaid work.',
      '**HDI:** includes **income, health and education**, so it gives a fuller picture. **Disadvantages:** still ignores inequality, the environment and political freedom, and its three parts are weighted equally.',
    ], mc('Which is an advantage of the HDI over real GDP per head?', [
      ['It includes health and education as well as income', 'Correct.'],
      ['It shows how income is shared between rich and poor', 'It does not.'],
      ['It is calculated using only one figure, which is simpler', 'It combines three components.'],
      ['It includes the damage that production does to the environment', 'It does not.'],
    ], 0)),
    byte('Differences in living standards and income distribution', [
      'Living standards differ **between countries** because of differences in income, resources, education, healthcare, productivity and stability. Within countries, income is **unequally distributed** because of differences in skills, wealth, wages, discrimination and tax and benefit systems.',
    ], short('Explain one reason why living standards differ between two countries.', {
      command: 'Explain',
      points: ['Names a reason (for example differences in education, productivity or natural resources)', 'Links it to income or output per person, which affects living standards'],
      model: 'One country spends more on education, so its workers are more productive. They produce more per person, so incomes and living standards are higher.',
    })),
  ],

  'e5-poverty': [
    byte('Causes of poverty and policies to reduce it', [
      '**Causes:** unemployment, low wages, **illness**, **age** (the very young or old), and **environmental factors** (floods, drought).',
      '**Policies:** promote growth, improve **education** and **healthcare**, more generous **state benefits**, **progressive taxation**, and a **national minimum wage**. Each has costs; for example benefits cost money and may reduce the incentive to work.',
    ], match('Match each policy to how it reduces poverty.', [
      ['National minimum wage', 'Raises the pay of the lowest-paid workers'],
      ['Progressive taxation', 'Takes a larger share from high incomes to redistribute'],
      ['Improved education', 'Raises skills and earning power'],
      ['State benefits', 'Gives income to people unable to work'],
    ])),
  ],

  'e5-population': [
    byte('Birth rate, death rate and migration', [
      '**Birth rate:** births per 1 000 people per year. **Death rate:** deaths per 1 000 people per year. **Net migration = immigration − emigration.**',
      '**Population change = births − deaths + net migration.** Rates differ between countries because of income, healthcare, education, culture and government policy.',
    ], calc('A country has 20 000 births, 12 000 deaths, 5 000 immigrants and 3 000 emigrants in a year. By how much does its population change?', 10000, {
      formula: 'births − deaths + (immigration − emigration)', steps: ['Natural change = 20 000 − 12 000 = 8 000', 'Net migration = 5 000 − 3 000 = 2 000', 'Total = 10 000'], tol: 0.01,
    })),
    byte('Optimum population and changing population structure', [
      '**Optimum population:** the population size that gives the **highest output per head** with the available resources. **Overpopulation:** too many people for the resources, so output per head falls. **Underpopulation:** too few people to use the resources fully.',
      '**Effects of change:** an **ageing** population raises the cost of pensions and healthcare and shrinks the labour force; a young population raises demand for schools and jobs. An imbalance between **males and females** can also affect the labour force.',
    ], mc('A country’s population grows until output per head begins to fall. What has happened?', [
      ['It has passed its optimum population', 'Correct.'],
      ['It has reached its optimum population and will now rise', 'Output per head falls beyond the optimum.'],
      ['It has become underpopulated', 'Underpopulation means output per head could rise with more people.'],
      ['Net migration has become negative', 'Not shown.'],
    ], 0)),
  ],

  'e5-development': [
    byte('Why countries differ in development', [
      'Differences include **income**, **productivity**, **population growth**, the size of the **primary, secondary and tertiary sectors**, **saving and investment**, **education**, **healthcare** and **natural resources**.',
      'Poorer countries often have more people in the primary sector, lower saving and investment, lower education and healthcare, and faster population growth; richer countries usually have larger tertiary sectors.',
    ], multi('Which of these are common features of a less developed country? Select all that apply.', [
      ['A large share of workers in the primary sector', 'Typical of lower-income economies.', true],
      ['Low levels of saving and investment', 'Limits growth.', true],
      ['A large tertiary sector and high productivity', 'Typical of developed economies.', false],
      ['Very high spending on education per person', 'Typically lower.', false],
    ])),
  ],

  'e6-trade': [
    byte('The basis for specialisation and free trade', [
      '**Specialisation by country:** a country concentrates on the goods it makes best, because it has the **best resources** or **lower costs**.',
      '**Free trade:** trade between countries without barriers such as tariffs or quotas.',
      '**Advantages of free trade:** lower prices, more choice, bigger markets, competition and efficiency. **Disadvantages:** damage to infant or declining industries, job losses, overdependence on imports and unfair competition from dumping.',
    ], mc('A country has fertile land and a warm climate, so it concentrates on growing coffee. What is the basis for its specialisation?', [
      ['It has the best resources for this good, giving lower costs of production', 'Correct.'],
      ['It wants to import less of every other kind of good', 'Trade increases imports.'],
      ['It wants to raise the price of coffee for all other countries', 'Not the basis.'],
      ['Its government banned the production of all other goods', 'Not the basis.'],
    ], 0)),
  ],

  'e6-global': [
    byte('Globalisation: causes and effects', [
      '**Globalisation:** the growing connection and interdependence of economies through trade, investment, people and ideas.',
      '**Causes:** fewer **trade restrictions**, lower **transport costs**, lower **communication costs**, and the spread of **multinational companies**.',
      '**Effects:** more international trade and competition; effects on the environment (more transport and pollution); more migration; changes in income distribution; and faster development in some countries.',
    ], multi('Which changes help to cause globalisation? Select all that apply.', [
      ['Lower transport costs', 'Trade becomes cheaper.', true],
      ['Cheaper communication, such as the internet', 'Easier to organise global trade.', true],
      ['Fewer tariffs and quotas', 'Fewer barriers.', true],
      ['Higher tariffs on imports', 'Reduces trade.', false],
    ])),
    byte('Multinational companies: host and home countries', [
      '**MNC:** a firm that operates in more than one country.',
      '**Host country advantages:** jobs, investment, skills and technology, tax revenue, exports. **Disadvantages:** profits sent abroad, competition for local firms, pollution, low wages, and dependence on the MNC.',
      '**Home country advantages:** profits returned and access to cheaper production. **Disadvantages:** jobs lost when production moves abroad.',
    ], mc('A UK firm moves its factory to a lower-wage country, and thousands of UK workers lose their jobs. Which is this?', [
      ['A disadvantage for the home country of an MNC moving production abroad', 'Correct.'],
      ['An advantage for the host country, since it loses jobs', 'The host gains jobs.'],
      ['An advantage for the home country, since jobs rise', 'Jobs fell.'],
      ['A disadvantage for the host country, since profits stay at home', 'The effect described is a home country effect.'],
    ], 0)),
    byte('Types of trade restriction', [
      '**Tariff:** a tax on imports. **Import quota:** a limit on the quantity of a good that can be imported. **Subsidy:** payment to domestic producers so they can compete with imports. **Embargo:** a complete ban on trade with a country or in a product.',
    ], match('Match each trade restriction to its description.', [
      ['Tariff', 'A tax on imported goods'],
      ['Import quota', 'A limit on the quantity imported'],
      ['Subsidy', 'A payment to help domestic producers compete'],
      ['Embargo', 'A ban on trade'],
    ])),
    byte('Reasons for trade restrictions and their consequences', [
      '**Reasons:** protect **infant (sunrise) industries**, protect **declining (sunset) industries**, protect **strategic industries** (such as defence or food), avoid **dumping**, reduce a **current account deficit**, raise **tax revenue**, restrict **demerit goods**, and promote **environmental sustainability**.',
      '**Consequences:** home producers gain protection and jobs; consumers face **higher prices and less choice**; trading partners may **retaliate**, reducing exports; efficiency may fall.',
    ], mc('A government puts a tariff on cheap imported steel sold below the cost of production. Which reason for restriction is this?', [
      ['To avoid dumping', 'Correct.'],
      ['To protect an infant industry', 'The question describes below-cost selling.'],
      ['To restrict the import of demerit goods', 'Steel is not a demerit good.'],
      ['To promote environmental sustainability', 'Not the reason here.'],
    ], 0)),
  ],

  'e6-fx': [
    byte('Reasons for buying and selling foreign currencies', [
      'People and firms buy a currency to pay for **goods and services** from that country, for **investment** in capital goods, to pay **profit, interest and dividends**, to send **workers’ remittances**, and for **speculation**. Governments also buy and sell currency to **intervene** in the market.',
    ], multi('Which of these create demand for a country’s currency? Select all that apply.', [
      ['Foreigners buying its exports', 'They need its currency to pay.', true],
      ['Foreign firms investing in its factories', 'Capital investment needs the currency.', true],
      ['Speculators who expect the currency to rise', 'They buy it hoping to sell at a profit.', true],
      ['Residents buying imported goods', 'That creates supply of the currency.', false],
    ])),
    byte('Causes of exchange-rate changes', [
      'A **floating exchange rate** is set by demand and supply of the currency. **Appreciation** is a rise; **depreciation** is a fall.',
      '**Causes of fluctuations:** changes in the demand for **exports and imports**; changes in **interest rates** (higher rates attract foreign savings, raising the rate); and **speculation**.',
    ], mc('Interest rates in a country rise above those in other countries. What is most likely to happen to its exchange rate?', [
      ['It appreciates, because foreign savers buy the currency to earn higher interest', 'Correct.'],
      ['It depreciates, because foreign savers sell the currency to avoid high interest', 'Higher rates attract funds.'],
      ['It stays the same, because interest rates do not affect currencies', 'They do.'],
      ['It falls to zero, because borrowing becomes more expensive', 'Not logical.'],
    ], 0)),
    byte('Effects of exchange-rate changes on trade', [
      '**Appreciation:** exports are **dearer** abroad and imports are **cheaper**, so export demand falls and import demand rises.',
      '**Depreciation:** exports are **cheaper** abroad and imports are **dearer**, so export demand rises and import demand falls (the effect depends on elasticity).',
    ], calc('A UK firm sells a machine for £5 000. The exchange rate is £1 = $1.30. What is the price in dollars ($)?', 6500, {
      unit: '$', formula: 'price in $ = price in £ × exchange rate', steps: ['5 000 × 1.30 = $6 500'], tol: 0.01,
    })),
  ],

  'e6-bop': [
    byte('The components of the current account', [
      '**Trade in goods** (exports − imports of physical goods), **trade in services** (such as tourism and banking), **primary income** (profits, interest and dividends sent or received), **secondary income** (transfers such as aid and remittances).',
      '**Current account balance = goods + services + primary income + secondary income.**',
    ], calc('A country’s balances are: goods −$30 bn, services +$22 bn, primary income −$6 bn, secondary income +$4 bn. What is the current account balance ($ bn)?', -10, {
      unit: '$ bn', formula: 'sum of the four components', steps: ['−30 + 22 − 6 + 4 = −10', 'A deficit of $10 billion'], tol: 0.01,
    })),
    byte('Causes and consequences of current account imbalances', [
      '**Deficit causes:** strong demand for imports, an expensive currency, low productivity and rising costs. **Surplus causes:** competitive exports, a weak currency and low spending on imports.',
      '**Consequences of a deficit:** may reduce GDP and employment (exports fall), put downward pressure on the exchange rate, and require borrowing. A large surplus can cause inflation and a rising exchange rate.',
    ], match('Match each cause to the type of imbalance it may produce.', [
      ['A very strong currency makes exports dear', 'Deficit that arises from falling export sales'],
      ['Highly competitive exports and low import spending', 'Surplus'],
      ['Rapid growth in spending on imports', 'Deficit that is made worse by rising import demand'],
    ], 'Deficits and surpluses reflect differences between money spent on imports and earned from exports.')),
  ],
};
