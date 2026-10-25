import { mc, ord, scn, tfd } from '../builders.js';

export const unit6 = {
  id: 'u6',
  number: 6,
  title: 'External Influences on Business Activity',
  short: 'External',
  emoji: '🌍',
  color: 'teal',
  submodules: [
    {
      id: 'u6-business-cycle',
      title: 'The Business Cycle',
      syllabus: '6.1.1',
      microConcept: [
        'Stages: growth → boom → recession → slump. Boom: high demand, employment and prices. Recession/slump: falling sales, rising unemployment, cost-cutting.',
        'Inflation (general price rises) raises costs and cuts buying power. High unemployment lowers spending; economic growth raises demand.',
      ],
      challenges: [
        ord('Order the main stages of the business cycle.', [
          'Growth',
          'Boom',
          'Recession',
          'Slump',
        ], 'The economy expands, peaks, then contracts, with the slump the deepest point.'),
        mc('In a recession which business is likely to be hit HARDEST?', [
          ['Luxury car dealer', 'Correct: people cut back on expensive non-essentials.'],
          ['Basic food supermarket', 'Essentials keep selling.'],
          ['Discount budget retailer', 'Cheap alternatives often hold up or grow.'],
          ['Utility company', 'Demand is steady.'],
        ], 0),
        tfd('Rising unemployment tends to reduce consumer spending.', 'true', 'Fewer people have wages, so demand for many goods falls.'),
        mc('Rising inflation raises a firm’s raw-material costs. If it can’t raise prices, what happens?', [
          ['Profit margins fall', 'Correct: costs rise faster than revenue.'],
          ['Profit rises', 'Costs up, revenue flat — the opposite.'],
          ['Revenue doubles', 'No link.'],
          ['Nothing changes', 'Costs are higher, so profit is squeezed.'],
        ], 0),
        scn('The economy is in a boom and orders exceed your factory’s capacity.', [
          ['Expand capacity and recruit, but plan for a possible downturn', 'Meets demand while managing the risk of later recession.', true],
          ['Ignore extra orders', 'Lost sales and customers turn to rivals.', false],
        ], 'Booms suit expansion, but firms must remember the cycle can turn.'),
      ],
    },
    {
      id: 'u6-government-policy',
      title: 'Government Policy: Taxes, Interest & Spending',
      syllabus: '6.1.2',
      microConcept: [
        'Higher corporation tax cuts retained profit. Higher income tax/VAT cuts disposable income and demand. Higher government spending boosts demand for contractors.',
        'Higher interest rates make borrowing costlier, discourage spending and investment; lower rates do the opposite.',
      ],
      challenges: [
        ord('Build the chain of reasoning for rising interest rates.', [
          'Interest rates rise',
          'Loan repayments rise and borrowing falls',
          'Consumers cut spending',
          'Business sales fall',
          'Business profit falls',
        ], 'Higher borrowing costs reduce demand and squeeze profits.'),
        mc('A government cuts income tax. What is the likely effect on a clothes retailer?', [
          ['Higher demand as people have more disposable income', 'Correct.'],
          ['Lower demand', 'More take-home pay usually raises spending.'],
          ['No effect at all', 'Disposable income changes spending patterns.'],
          ['Higher corporation tax', 'Different tax.'],
        ], 0),
        mc('A government announces major spending on new railways. Who benefits most?', [
          ['Construction firms and steel suppliers', 'Correct: they win contracts.'],
          ['Cinema chains only', 'Indirect at best.'],
          ['Firms with no connection', 'No direct benefit.'],
          ['Importers of luxury goods', 'Unrelated.'],
        ], 0),
        tfd('Higher interest rates benefit people with large bank loans.', 'false', 'Borrowers pay more; savers benefit.'),
        scn('Interest rates fall while a firm plans to expand using a bank loan.', [
          ['Borrow now to expand', 'Cheaper repayments and rising consumer demand make expansion more attractive.', true],
          ['Delay indefinitely', 'Misses a favourable borrowing environment.', false],
        ], 'Lower interest rates reduce borrowing costs and encourage investment.'),
      ],
    },
    {
      id: 'u6-globalisation',
      title: 'Globalisation, MNCs & Exchange Rates',
      syllabus: '6.2',
      microConcept: [
        'Globalisation is driven by transport links, technology, free trade agreements and newly industrialised countries. Tariffs tax imports; quotas limit them.',
        'MNCs bring jobs, investment and exports, but may harm local firms, exploit resources and repatriate profits.',
        'Appreciation (stronger currency): exports dearer, imports cheaper. Depreciation: the reverse.',
      ],
      challenges: [
        mc('A tariff is…', [
          ['A tax on imported goods', 'Correct.'],
          ['A limit on the number of imports', 'That is a quota.'],
          ['A subsidy to exporters', 'Not a tariff.'],
          ['A fall in the value of currency', 'That is depreciation.'],
        ], 0),
        ord('Build the chain of reasoning for appreciation.', [
          'Home currency appreciates',
          'Exports become more expensive abroad',
          'Overseas demand for exports falls',
          'Export revenue falls',
        ], 'A stronger currency hurts exporters, but helps importers buying cheaper inputs.'),
        tfd('A depreciating currency is always bad for businesses.', 'depends', 'Exporters gain competitiveness; importers face higher costs.'),
        mc('Which is a DISADVANTAGE of an MNC for the host country?', [
          ['Profits repatriated to the home country', 'Correct: money leaves the host economy.'],
          ['Creation of jobs', 'This is an advantage.'],
          ['Investment in infrastructure', 'This is an advantage.'],
          ['Greater consumer choice', 'This is an advantage.'],
        ], 0),
        scn('Your country’s currency depreciates. You import materials but sell only domestically.', [
          ['Expect higher costs; look for local suppliers or adjust prices', 'Imports cost more, squeezing profit — respond to the cost pressure.', true],
          ['Expect lower costs', 'Depreciation makes imports DEARER.', false],
        ], 'Depreciation raises import costs and helps exporters; the net effect depends on the business.'),
        mc('A quota differs from a tariff because it…', [
          ['Limits the quantity of imports', 'Correct.'],
          ['Taxes imports', 'That is a tariff.'],
          ['Increases exports', 'Not what a quota does.'],
          ['Lowers import prices', 'Quotas usually raise prices by reducing supply.'],
        ], 0),
      ],
    },
    {
      id: 'u6-environment-ethics',
      title: 'Environment, Ethics & Pressure Groups',
      syllabus: '6.2.3, 6.3 – 6.5',
      microConcept: [
        'External costs (pollution, noise) fall on third parties; external benefits (jobs, infrastructure) too. Firms respond to environmental issues for reputation, sales and the law.',
        'Ethical issues: child labour, fair wages, fair prices to suppliers. Being ethical builds trust but can raise costs.',
        'Pressure groups use campaigns, publicity and boycotts to change business decisions.',
      ],
      challenges: [
        mc('A factory pollutes a river and the local council pays to clean it. This is an…', [
          ['External cost', 'Correct: a cost borne by someone other than the producer.'],
          ['External benefit', 'It is a harm, not a gain.'],
          ['Internal cost', 'The firm itself does not pay it.'],
          ['Economy of scale', 'Unrelated.'],
        ], 0),
        ord('Build the chain of reasoning for pressure-group action.', [
          'Pressure group runs a social media campaign',
          'Media coverage spreads',
          'Customers boycott the firm',
          'Sales fall',
          'Firm changes its policy',
        ], 'Public pressure harms reputation and sales, which pushes firms to change.'),
        tfd('Being ethical always increases a firm’s profit.', 'depends', 'It can build loyalty and reputation but can raise costs and prices too.'),
        scn('A clothing firm discovers a supplier uses child labour.', [
          ['Ignore it to keep costs low', 'Risks scandal, boycotts and legal action.', false],
          ['Switch to an audited ethical supplier', 'Costs more but protects reputation and customer trust.', true],
        ], 'Ethical decisions weigh short-term cost against long-term reputation.'),
        mc('A new factory brings jobs and better roads to a town. This is an…', [
          ['External benefit', 'Correct: benefits received by the community.'],
          ['External cost', 'Costs are harms.'],
          ['Internal cost', 'Not a cost.'],
          ['Tariff', 'Unrelated.'],
        ], 0),
        mc('A firm cuts packaging waste and uses solar power. A likely benefit is…', [
          ['Improved reputation and possible cost savings', 'Correct.'],
          ['Immediate loss of all customers', 'Unlikely.'],
          ['Exemption from all laws', 'Not true.'],
          ['Higher external costs', 'Sustainability reduces external costs.'],
        ], 0),
      ],
    },
  ],
};
