import { byte, lesson, mc, calc, fig } from '../helpers.js';

// Units 5 and 6: economic development and international trade
// (Cambridge IGCSE Economics 0455, syllabus for 2027, 2028 and 2029, topics 5 and 6).

export const e51 = lesson('e5-living', 'Living standards', '5.1', [
  'Living standards are measured by real GDP per head and the Human Development Index (HDI), which combines income, health and education.',
], [
  byte('Measuring living standards', [
    '**Real GDP per head** is GDP adjusted for inflation divided by the population. It shows average income but hides **inequality** and ignores **non-market output** and the environment.',
    'The **Human Development Index (HDI)** combines **income** (GNI per head), **health** (life expectancy) and **education** (years of schooling). It is a number from 0 to 1; closer to 1 is higher development.',
  ], mc('Which three things does the Human Development Index combine?', [
    ['Income, life expectancy and education', 'Correct.'],
    ['Inflation, unemployment and growth', 'These are macroeconomic indicators, not HDI components.'],
    ['Exports, imports and exchange rates', 'These are trade measures.'],
    ['Population, area and climate', 'These are not HDI components.'],
  ], 0)),
  byte('Differences between countries', [
    'Living standards differ because of **income levels, resources, education, healthcare, infrastructure, political stability** and trade.',
    '**Developed** countries have high incomes and HDI; **developing** countries often rely on primary products, have lower productivity and face higher poverty.',
  ], mc('Why might real GDP per head give a misleading picture of living standards?', [
    ['It ignores how evenly income is shared and non-market activity', 'Correct.'],
    ['It is always lower than the HDI', 'This is not necessarily true.'],
    ['It includes only health and education', 'It measures income only.'],
    ['It cannot be calculated', 'It is calculated by dividing real GDP by population.'],
  ], 0)),
]);

export const e52 = lesson('e5-poverty', 'Poverty', '5.2', [
  'Absolute poverty means being unable to afford basic needs; relative poverty means having much less than the average. Causes include unemployment, low wages and lack of education.',
], [
  byte('Absolute and relative poverty', [
    '**Absolute poverty:** a person cannot afford **basic needs** such as food, water, shelter. **Relative poverty:** a person has **much less income than the average** in their country.',
    '**Causes:** unemployment, low wages, poor education and health, discrimination, conflict, lack of infrastructure.',
    '**Policies:** progressive taxes and benefits, minimum wage, education and training, aid and investment.',
  ], mc('A family can afford food and shelter but has far less income than most people in their country. What is this?', [
    ['Relative poverty', 'Correct: low compared with the average.'],
    ['Absolute poverty', 'Absolute poverty means basic needs cannot be met.'],
    ['Inflation', 'Inflation is a general price rise.'],
    ['Deflation', 'Deflation is a general price fall.'],
  ], 0)),
]);

export const e53 = lesson('e5-population', 'Population', '5.3', [
  'Population changes through birth rates, death rates and migration. Age structure and population growth affect the labour force, spending and government budgets.',
], [
  byte('Population change and structure', [
    '**Population growth = births − deaths + net migration.** The **birth rate** and **death rate** are measured per 1 000 people.',
    '**Age structure:** many young people means high dependency and spending on education; an **ageing population** raises spending on healthcare and pensions and reduces the labour force.',
    '**Population density** = population ÷ area.',
  ], calc('A country has 60 million people living in 300 000 km². Calculate its population density (people per km²).', 200, {
    formula: '60 000 000 ÷ 300 000', steps: ['60 000 000 ÷ 300 000 = 200'], tol: 0.01,
  })),
  byte('Effects of population change', [
    'A **growing working-age population** can raise output, but only if **jobs** are available. Rapid growth can strain **resources, housing and public services**.',
    'An **ageing population** raises the **dependency ratio** and **tax burden** on workers; governments may raise the retirement age or encourage immigration.',
  ], mc('Which is a likely consequence of an ageing population?', [
    ['Higher government spending on healthcare and pensions', 'Correct.'],
    ['A larger working-age labour force', 'It usually shrinks the proportion of workers.'],
    ['Lower demand for healthcare', 'Demand for healthcare normally rises.'],
    ['Fewer retired people', 'The number of older people rises.'],
  ], 0)),
]);

export const e54 = lesson('e5-development', 'Development', '5.4', [
  'Development aims to improve living standards. Strategies include education, healthcare, investment, trade and aid. Each has benefits and costs.',
], [
  byte('Promoting development', [
    '**Education and healthcare** raise labour quality and productivity. **Investment** in infrastructure and industry raises capacity. **Foreign aid** and **foreign direct investment** supply funds.',
    '**Trade** brings export earnings and technology. **Problems:** corruption, debt, dependence on primary products, conflict and weak institutions.',
  ], mc('Which policy would most directly help to raise labour productivity in a developing country?', [
    ['Improving access to education and healthcare', 'Correct: healthier, better-educated workers are more productive.'],
    ['Raising import tariffs on all goods', 'This protects industries but does not raise skills directly.'],
    ['Cutting spending on infrastructure', 'This would reduce productivity.'],
    ['Increasing the birth rate', 'This does not directly raise productivity.'],
  ], 0)),
]);

export const e61 = lesson('e6-trade', 'Specialisation and free trade', '6.1', [
  'Countries specialise in goods they produce efficiently and trade. Free trade gives wider choice and lower prices but can harm domestic industries and cause dependence.',
], [
  byte('Specialisation and trade', [
    '**Specialisation:** individuals, firms and countries focus on what they can produce **most efficiently**. Exchange then allows more goods and services overall.',
    '**Advantages:** higher output, lower costs, greater choice. **Disadvantages:** over-dependence on one product or trading partner, unemployment if an industry declines, structural change.',
  ], mc('Which is a benefit of specialisation?', [
    ['Higher total output and lower costs', 'Correct.'],
    ['A guarantee of full employment', 'Specialisation can cause structural unemployment.'],
    ['Less trade between countries', 'Specialisation increases trade.'],
    ['Reduced productivity', 'Specialisation usually raises productivity.'],
  ], 0)),
  byte('Free trade and protection', [
    '**Free trade** has no barriers to imports and exports: **lower prices**, **wider choice**, **competition**, bigger markets.',
    '**Protectionism** (tariffs, quotas, subsidies) protects **infant and key industries and jobs** but raises prices, reduces choice and can lead to **retaliation**.',
  ], mc('A government places a tax on imported steel. What is this called?', [
    ['A tariff', 'Correct: a tax on imports.'],
    ['A quota', 'A quota is a limit on quantity.'],
    ['A subsidy', 'A subsidy is a payment to producers.'],
    ['A devaluation', 'A devaluation is a fall in the fixed exchange rate.'],
  ], 0)),
]);

export const e62 = lesson('e6-global', 'Globalisation and multinationals', '6.2', [
  'Globalisation is the growing connection between economies. Multinational companies operate in several countries and bring jobs and investment but may exploit workers or resources.',
], [
  byte('Globalisation and multinational companies', [
    '**Globalisation** is the increasing **integration of economies** through trade, investment, technology and migration.',
    'A **multinational company (MNC)** operates in **more than one country**. **Benefits to host countries:** jobs, investment, technology, tax revenue and exports. **Costs:** profits sent abroad, pressure on local firms, environmental damage, low wages.',
  ], mc('Which is a possible benefit of a multinational setting up in a developing country?', [
    ['New jobs and transfer of technology', 'Correct.'],
    ['All profits remain in the host country', 'Profits are usually sent to the home country.'],
    ['Local firms face no competition', 'Local firms often face more competition.'],
    ['Less tax revenue always', 'MNCs usually pay some tax.'],
  ], 0)),
]);

export const e63 = lesson('e6-fx', 'Foreign exchange rates', '6.3', [
  'The exchange rate is the price of one currency in terms of another. Floating rates are set by demand and supply. A higher rate makes exports dearer and imports cheaper.',
], [
  byte('Exchange rate determination', [
    'The **exchange rate** is the **price of one currency in terms of another**. In a **floating** system it is set by the **demand and supply of the currency**; in a **fixed** system the government or central bank sets it.',
    '**Appreciation** is a rise in the value of a currency; **depreciation** is a fall.',
  ], fig({ svg: 'fxRate' }, mc('Demand for a country’s currency rises because foreigners want to buy its exports. What happens to its exchange rate?', [
    ['It appreciates', 'Correct: higher demand raises the currency’s price.'],
    ['It depreciates', 'This follows an increase in the supply of the currency.'],
    ['It stays fixed under floating rates', 'Under floating rates the rate moves with demand and supply.'],
    ['It becomes zero', 'The rate does not fall to zero.'],
  ], 0)), { fig: { svg: 'fxRate', caption: 'The market for a currency' } }),
  byte('Effects of exchange rate changes', [
    '**Appreciation:** exports become **more expensive abroad** and imports **cheaper**; exports fall, imports rise, inflation may fall.',
    '**Depreciation:** exports become **cheaper abroad** and imports **dearer**; exports rise, imports fall, inflation may rise.',
  ], calc('The exchange rate is $1 = €0.80. How many euros (€) will an American receive for $250?', 200, {
    unit: '€', formula: '250 × 0.80', steps: ['250 × 0.80 = €200'], tol: 0.01,
  })),
]);

export const e64 = lesson('e6-bop', 'Balance of payments', '6.4', [
  'The current account of the balance of payments records trade in goods and services, income and transfers. A deficit means more money flows out than in.',
], [
  byte('Current account of the balance of payments', [
    'The **current account** records **trade in goods** (visible), **trade in services** (invisible), **primary income** (such as profits and interest) and **secondary income** (transfers such as gifts and aid).',
    '**Balance of trade in goods = value of exports − value of imports.** A negative result is a **deficit**.',
  ], calc('A country exports goods worth $90 billion and imports goods worth $110 billion. Calculate the balance of trade in goods ($ billion; give a negative answer for a deficit).', -20, {
    unit: '$ billion', formula: 'exports − imports', steps: ['90 − 110 = −20, a deficit of $20 billion'], tol: 0.01,
  })),
  byte('Causes and effects of imbalances', [
    '**Causes of a deficit:** strong demand for imports, low competitiveness, a high exchange rate, low productivity.',
    '**Effects of a persistent deficit:** borrowing, falling currency value, lower reserves. **Policies:** raise competitiveness, supply-side measures, tariffs, a lower exchange rate.',
  ], mc('A country has a persistent current account deficit. Which policy could help to reduce it?', [
    ['Supply-side measures that make its goods more competitive', 'Correct.'],
    ['Encouraging more imports', 'This would worsen the deficit.'],
    ['Raising the exchange rate sharply', 'A higher rate makes exports dearer.'],
    ['Cutting exports', 'This would worsen the deficit.'],
  ], 0)),
]);

export const unit5 = {
  id: 'e5', number: 5, title: 'Economic Development', short: 'Development', emoji: '🌍', color: 'amber',
  submodules: [e51, e52, e53, e54],
  papers: [],
};

export const unit6 = {
  id: 'e6', number: 6, title: 'International Trade and Globalisation', short: 'Trade', emoji: '🚢', color: 'rose',
  submodules: [e61, e62, e63, e64],
  papers: [],
};
