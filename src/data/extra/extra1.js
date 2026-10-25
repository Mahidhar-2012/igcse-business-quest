import { mc, ord, scn, calc, tfd } from '../builders.js';

// Harder, exam-style questions appended to existing Unit 1 lessons (keyed by submodule id).
export const extra1 = {
  'u1-activity-sectors': [
    mc('A firm has $50,000 to spend. Options: a delivery van (extra profit $8,000/yr), an advertising campaign ($6,000/yr) or staff training ($5,000/yr). It buys the van. What is the opportunity cost?', [
      ['$50,000', 'That is the amount spent, not the benefit forgone.'],
      ['The $8,000 extra profit from the van', 'That is the benefit of the option chosen.'],
      ['The advertising campaign (the next best alternative)', 'Correct: opportunity cost is the next best alternative given up.'],
      ['Staff training and advertising together', 'Opportunity cost is only the single NEXT best option, not all rejected options.'],
    ], 2),
    calc('A firm sells 1,000 units at $9 each. Materials and other bought-in inputs cost $3.20 per unit. What is the TOTAL value added ($)?', 5800, {
      unit: '$',
      formula: 'Added value = (selling price − cost of inputs) × units',
      steps: ['Added value per unit = 9 − 3.20 = $5.80', '5.80 × 1,000 = $5,800'],
    }),
    mc('A company grows cocoa beans and also manufactures chocolate bars from them. Which sectors does it operate in?', [
      ['Primary only', 'Growing is primary, but manufacturing is a separate sector.'],
      ['Primary and secondary', 'Correct: growing = primary; making chocolate = secondary.'],
      ['Secondary and tertiary', 'There is no service activity described.'],
      ['Tertiary only', 'No services are described.'],
    ], 1),
    scn('A dairy farm sells raw milk at $0.50 per litre (inputs cost $0.30). It could process milk into branded yoghurt selling at $1.80 per litre of milk used, with total input and packaging costs of $1.10.', [
      ['Keep selling raw milk', 'Added value stays at $0.20 per litre — safe but low.', false],
      ['Switch to branded yoghurt', 'Added value rises from $0.20 to $0.70 per litre. Needs investment, but processing and branding capture much more value.', true],
    ], 'Moving from primary to secondary activity and branding raises added value; check that extra demand and finance exist.'),
    tfd('A single business can operate in more than one economic sector.', 'true', 'e.g. a farm that grows crops (primary), processes them (secondary) and runs a farm shop (tertiary).'),
  ],
  'u1-enterprise': [
    mc('A bank manager is assessing a loan application. Which part of the business plan is MOST useful for judging ability to repay?', [
      ['Finance (cash flow forecast and funding needs)', 'Correct: it shows whether cash will cover repayments.'],
      ['The owner’s personal hobbies', 'Irrelevant to repayment.'],
      ['The business logo design', 'Not evidence of ability to repay.'],
      ['The list of staff names', 'Not financial evidence.'],
    ], 0),
    mc('Which is an example of NON-financial government support for start-ups?', [
      ['A grant', 'Money — financial support.'],
      ['A low-cost loan', 'Money — financial support.'],
      ['Free business advice and training schemes', 'Correct: help and know-how rather than cash.'],
      ['A subsidy payment', 'Money — financial support.'],
    ], 2),
    tfd('A successful entrepreneur must always create a product nobody has ever sold before.', 'false', 'Many succeed by improving existing ideas or serving a market better. Innovation helps, but is not essential.'),
    scn('Arjun is passionate about opening a gym. He has no plan and thinks market research is a waste of time.', [
      ['Launch immediately to save time', 'He risks opening in a market with little demand or too much competition, and cannot show lenders evidence.', false],
      ['Survey 100 local people and review competitor gyms first', 'Cheap, quick evidence of demand, prices and gaps in the market that strengthens the plan.', true],
    ], 'Market research is a core part of the business plan and reduces the risk of failure.'),
    mc('Why might a government offer low-cost loans to start-ups?', [
      ['So that start-ups grow, employ people and later pay taxes', 'Correct.'],
      ['To make sure every start-up makes a profit', 'No policy can guarantee that.'],
      ['To stop new competitors entering any market', 'Governments generally want competition.'],
      ['To reduce the number of jobs', 'The aim is to create jobs.'],
    ], 0),
  ],
  'u1-size-growth': [
    calc('A firm’s sales revenue rose from $2.5m to $3.1m. By what percentage did its size (measured by sales) grow?', 24, {
      unit: '%',
      formula: '% change = (new − old) ÷ old × 100',
      steps: ['Increase = 3.1 − 2.5 = $0.6m', '0.6 ÷ 2.5 = 0.24', '0.24 × 100 = 24%'],
    }),
    mc('Which is a likely ADVANTAGE of horizontal integration (merging with a rival)?', [
      ['Fewer competitors and potential economies of scale', 'Correct: more market share and bulk-buying power.'],
      ['Guaranteed supply of raw materials', 'That is a vertical backward benefit.'],
      ['Control of distribution to customers', 'That is a vertical forward benefit.'],
      ['No risk of culture clashes', 'Mergers often cause culture clashes.'],
    ], 0),
    mc('A clothing manufacturer buys a chain of shops that sell its products. This is an advantage because it…', [
      ['Controls distribution and keeps the retailer’s profit', 'Correct: vertical forward integration.'],
      ['Removes all competition', 'Rivals still exist.'],
      ['Secures cheaper cotton', 'That would be a supplier (backward integration).'],
      ['Avoids all management problems', 'More stages = more to manage.'],
    ], 0),
    scn('A 200-employee firm takes over a 300-employee firm that has a very different working culture and sites 400 km apart.', [
      ['Merge everything immediately and keep existing managers on', 'Likely culture clash, poor communication and diseconomies of scale.', false],
      ['Integrate gradually, communicate clearly and keep strong local managers', 'Slower but reduces conflict and protects key staff.', true],
    ], 'External growth brings problems: culture clash, communication, loss of control and high cost. Justify with the context.'),
    tfd('Internal growth is usually faster than external growth.', 'false', 'External growth (merger/takeover) gives instant size. Internal growth is slower but lower risk and easier to control.'),
    mc('Which is a problem LINKED to rapid growth?', [
      ['Loss of control and poorer communication (diseconomies of scale)', 'Correct.'],
      ['Automatically lower costs per unit', 'That is economies of scale, which are not automatic.'],
      ['Reduced need for finance', 'Growth usually needs MORE finance.'],
      ['Less need for managers', 'Larger firms usually need more management.'],
    ], 0),
  ],
  'u1-organisations': [
    scn('Maria runs a successful bakery as a sole trader. She wants $1m to open 10 shops, to keep control and to protect her personal assets.', [
      ['Remain a sole trader and borrow personally', 'Unlimited liability puts her home at risk, and one person cannot raise $1m easily.', false],
      ['Form a private limited company and sell shares to chosen investors', 'Limited liability, more capital, and she decides who buys shares, so she keeps control.', true],
    ], 'A private limited company raises capital without the cost and loss of control of a PLC flotation.'),
    mc('A key DISADVANTAGE of being a public limited company (PLC) is…', [
      ['Must publish accounts and risk being taken over', 'Correct: more regulation and public disclosure; shares can be bought by anyone.'],
      ['Unlimited liability', 'PLCs have limited liability.'],
      ['Cannot raise large sums', 'PLCs can raise very large sums.'],
      ['Cannot sell shares', 'They can, publicly.'],
    ], 0),
    mc('Which is an ADVANTAGE of a joint venture?', [
      ['Costs, risks and expertise are shared', 'Correct.'],
      ['One partner makes every decision', 'Decisions are shared, which can cause disagreement.'],
      ['No chance of disagreement', 'Disagreements are a common disadvantage.'],
      ['Profits are not shared', 'Profits are usually shared.'],
    ], 0),
    tfd('Partners must always share profits equally.', 'false', 'Profit shares follow the partnership agreement; without one, equal shares may apply by default, but it is not compulsory.'),
    calc('A franchisee pays a 6% royalty on sales. Annual sales are $400,000. How much royalty is paid to the franchisor ($)?', 24000, {
      unit: '$',
      formula: 'Royalty = sales × royalty %',
      steps: ['6% = 0.06', '400,000 × 0.06 = $24,000'],
    }),
    mc('Which is a disadvantage of being a sole trader?', [
      ['Unlimited liability and difficulty raising finance', 'Correct.'],
      ['Having to share profits', 'Sole traders keep all profit.'],
      ['Slow decision making', 'Decisions are quick.'],
      ['Must publish accounts publicly', 'They do not have to.'],
    ], 0),
  ],
  'u1-objectives-stakeholders': [
    mc('A supermarket aims to raise its market share from 12% to 15% within two years. Which type of objective is this?', [
      ['Market share (growth)', 'Correct: a specific, measurable aim.'],
      ['Survival', 'It already survives; it is aiming to expand.'],
      ['Social', 'No social aim is mentioned.'],
      ['Cost cutting', 'Not the objective described.'],
    ], 0),
    scn('A supplier wants to be paid in 14 days; the business wants to delay payment by 60 days to protect its cash flow.', [
      ['Always pay late — cash flow is more important', 'Supplier may stop supplying or remove discounts.', false],
      ['Negotiate a compromise such as 30 days', 'Balances both parties’ needs and keeps the relationship.', true],
    ], 'Stakeholder objectives often conflict. Compromise protects long-term relationships.'),
    tfd('A business should have only one objective at a time.', 'false', 'Businesses usually have several (e.g. survival, growth and profit) and priorities can change.'),
    scn('Managers want a big bank loan to expand. The lender wants low risk and certain repayment.', [
      ['Borrow as much as possible regardless', 'Risk of being unable to repay, harming the lender relationship.', false],
      ['Borrow a smaller amount supported by a cash flow forecast', 'Meets the lender’s need for security while allowing growth.', true],
    ], 'Evidence (forecasts) helps resolve conflicts between stakeholders.'),
    mc('Which pair of stakeholders is MOST likely to have conflicting objectives?', [
      ['Shareholders wanting high dividends and employees wanting higher wages', 'Correct: both draw on the same profit.'],
      ['Customers and suppliers both wanting survival', 'Shared objective.'],
      ['Managers and owners both wanting growth', 'Largely aligned.'],
      ['Government and community both wanting jobs', 'Largely aligned.'],
    ], 0),
  ],
};
