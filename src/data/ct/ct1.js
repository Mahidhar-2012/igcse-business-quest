import { mc, ord, scn, calc, tfd, ao } from '../builders.js';

// Unit 1: critical-thinking questions. For each lesson:
//   cards: one array of test(s) per knowledge card, in the same order as the lesson's cards (main bytes, then advantages/disadvantages cards)
//   pool:  the practice-round question pool
export const ct1 = {
  'u1-activity-sectors': {
    cards: [
      [ao(3, mc('A small brewery sells its delivery van and uses the money to buy a bottling machine. Which statement is the best analysis of this change?', [
        ['It swaps one capital good for another, which may raise output per worker and so reduce cost per bottle', 'Correct: both are capital; the machine can raise productivity, lowering unit cost.'],
        ['It increases the land used by the business', 'Land means natural resources, not machines.'],
        ['It reduces enterprise because the owner takes fewer risks', 'Enterprise is organising and risk-taking, which is unchanged.'],
        ['It has no effect on production because the money is the same', 'The type of capital changes what the business can produce.'],
      ], 0))],
      [ao(3, mc('A café sells a sandwich for $5.00. Ingredients cost $2.40. Option 1: premium bread costs $0.60 more and allows a price of $6.20. Option 2: cheaper filling saves $0.30 per sandwich and the price stays $5.00. Which option adds more value per sandwich, and by how much more?', [
        ['Option 1, by $0.30 more', 'Correct: added value is $6.20 − $3.00 = $3.20 for option 1 and $5.00 − $2.10 = $2.90 for option 2.'],
        ['Option 2, by $0.30 more', 'Option 2 only raises added value from $2.60 to $2.90.'],
        ['They add the same value', 'Option 1 = $3.20, option 2 = $2.90.'],
        ['Option 1, by $1.20 more', 'That is the price rise, ignoring the extra cost of premium bread.'],
      ], 0))],
      [ao(3, mc('A farmer can grow wheat (profit $5,000), grow maize (profit $6,500) or rent the land to a developer ($4,000). He plants wheat. What is the opportunity cost, and what does it suggest?', [
        ['$6,500 from maize; he gave up the next best alternative, so wheat may not be his best choice financially', 'Correct: the next best alternative to wheat is maize at $6,500.'],
        ['$5,000; the profit from wheat', 'That is the benefit of the chosen option.'],
        ['$4,000 from renting; it is the lowest so it does not matter', 'Opportunity cost is the next BEST alternative, not the lowest.'],
        ['$15,500; all alternatives added together', 'Only the single next best alternative counts.'],
      ], 0))],
      [ao(3, mc('A company mines iron ore, turns it into steel and sells steel products in its own shop. Which statement is most accurate?', [
        ['It operates in the primary, secondary and tertiary sectors', 'Correct: mining (primary), steelmaking (secondary), retailing (tertiary).'],
        ['It is only in the secondary sector because steel is manufactured', 'It also extracts raw materials and provides a retail service.'],
        ['It is in the primary sector because it owns the mine', 'Its other activities are secondary and tertiary.'],
        ['Businesses can only belong to one sector', 'Many businesses span more than one sector.'],
      ], 0))],
      [ao(3, mc('Which is the best explanation for why a state-owned hospital may not aim to maximise profit?', [
        ['Its main purpose is to provide a service to citizens, funded by the government', 'Correct: public sector organisations exist to provide services, not to maximise profit.'],
        ['Hospitals cannot make a profit by law', 'Private hospitals can aim for profit; the reason is the public purpose.'],
        ['The government does not know how to run businesses', 'Not an explanation.'],
        ['Public sector organisations have no costs', 'They have costs, paid mostly from taxes.'],
      ], 0))],
    ],
    pool: [
      ao(3, scn('A bakery sells loaves for $2.00 with ingredient and packaging cost $1.40. It can (A) add a premium brand and sell at $3.00 with cost $1.80, or (B) cut ingredient quality to reduce cost to $1.10 and keep the price at $2.00. Which should the owner choose?', [
        ['A: added value rises to $1.20 and the brand can support loyalty', 'Added value moves from $0.60 to $1.20; the brand supports the higher price.', true],
        ['B: added value rises to $0.90, but quality may fall and customers may leave', 'The gain is smaller and risks reputation.', false],
      ], 'Raising price more than cost rises (via branding) adds more value than cutting quality, which risks demand.')),
      ao(4, mc('A government grant is available to either a small coal mine (primary) or a software start-up (tertiary). Which statement is the best-justified argument for giving it to the software start-up?', [
        ['Services can grow quickly and create skilled jobs with little damage to natural resources, adding more value per worker', 'Correct: a reasoned case using value added and jobs.'],
        ['The tertiary sector is always more important', 'An unsupported claim.'],
        ['Because mines are old-fashioned', 'Opinion rather than evidence.'],
        ['Because software firms never need money', 'Untrue and irrelevant.'],
      ], 0)),
      ao(3, calc('A firm produces 2,000 units. Each sells for $15. Inputs cost $9 per unit. It then cuts input cost by 10% and keeps the price. What is the NEW total added value ($)?', 12600, {
        unit: '$',
        formula: 'Added value = (price − input cost) × units',
        steps: ['Input cost falls by 10%: 9 × 0.90 = $8.10', 'Added value per unit = 15 − 8.10 = $6.90', '6.90 × 2,000 = $13,800', 'Check: old total = (15 − 9) × 2,000 = $12,000; the 10% saving adds $1,800 → $13,800.'],
      })),
      ao(3, mc('A country’s farming employs 70% of workers while its manufacturing and services are small. Which conclusion is best supported?', [
        ['It is likely a developing economy relying on the primary sector', 'Correct: high primary employment is typical of developing economies.'],
        ['It is a developed economy with strong services', 'Developed economies usually have most workers in services.'],
        ['It has too many factories', 'Manufacturing is small, so no.'],
        ['It has no private sector', 'Not supported by the data.'],
      ], 0)),
      ao(3, tfd('A business that adds more value will always make more profit.', 'depends', 'Higher added value helps, but profit also depends on other expenses and on how many units are sold.')),
      ao(4, mc('A bakery owner is deciding between spending $8,000 on a new oven (expected extra profit $3,000 a year) or on online marketing (expected extra profit $2,400 a year). She buys the oven. Which statement about her decision is best?', [
        ['The opportunity cost is the marketing campaign ($2,400 a year), so the oven is justified only if its extra benefit outweighs this', 'Correct: compares the chosen option with the next best alternative.'],
        ['There is no opportunity cost because she bought something useful', 'Every choice has an opportunity cost.'],
        ['The opportunity cost is $8,000', 'The money is the cost of the choice; the opportunity cost is the benefit forgone.'],
        ['The decision is wrong because marketing is always better', 'No evidence for “always”.'],
      ], 0)),
      ao(2, mc('Which business activity is correctly matched to its sector AND ownership type?', [
        ['A privately owned car factory: secondary, private sector', 'Correct.'],
        ['A state railway: tertiary, private sector', 'A state railway is public sector.'],
        ['A family-owned farm: tertiary, private sector', 'Farming is primary.'],
        ['A government-run bank: secondary, public sector', 'Banking is a tertiary service.'],
      ], 0)),
      ao(3, mc('Which change would increase a business’s added value by the largest amount, assuming demand stays the same?', [
        ['Raising the price from $10 to $12 with no change in costs', 'Correct: added value rises by $2 per unit.'],
        ['Cutting input costs from $6 to $5.90', 'Only $0.10 per unit.'],
        ['Hiring an extra worker', 'This usually raises costs, not value per unit.'],
        ['Cutting prices to sell more units', 'Lower price reduces added value per unit.'],
      ], 0)),
    ],
  },

  'u1-enterprise': {
    cards: [
      [ao(3, mc('Two founders open similar cafés. Founder A abandons the idea after losing money in month 3. Founder B changes the menu and prices and gets through the difficult first year. Which entrepreneurial quality best explains the difference?', [
        ['Determination and willingness to adapt', 'Correct: B kept going and adjusted after setbacks.'],
        ['Owning more land', 'Not a personal quality.'],
        ['Having a larger shop', 'Not a quality of the entrepreneur.'],
        ['Getting government grants', 'Not stated and not a personal quality.'],
      ], 0))],
      [ao(2, mc('A business plan for a new bakery states: “We will employ 3 bakers and 2 assistants, with experience in artisan bread.” Which section of the plan is this?', [
        ['People', 'Correct: staffing and skills.'],
        ['Finance', 'Finance covers money and forecasts.'],
        ['Operations', 'Operations covers production methods, suppliers and location.'],
        ['Market research', 'Research covers customers and competitors.'],
      ], 0))],
      [ao(4, mc('A bank manager is deciding whether to lend $15,000 to two start-ups. Start-up A has a plan with research and a cash flow forecast. Start-up B has an idea only. Which statement is best justified?', [
        ['A is more likely to receive the loan because the plan gives evidence that it can repay', 'Correct: the plan shows viability and repayment ability.'],
        ['B is more likely because it needs the loan more', 'Banks lend on evidence of repayment, not need.'],
        ['Both are equally likely since the amount is the same', 'Evidence differs.'],
        ['Neither, since start-ups can never borrow', 'Start-ups can borrow with good evidence.'],
      ], 0))],
      [ao(3, mc('A government gives tax breaks to start-ups in a region with high unemployment. Which is the best-justified benefit to the government?', [
        ['New firms create jobs, which reduces unemployment benefits and increases future tax income', 'Correct: a chain of logical reasoning.'],
        ['It makes the government richer immediately', 'Tax breaks reduce short-term tax income.'],
        ['It removes all competition', 'The opposite effect.'],
        ['It guarantees all start-ups survive', 'No such guarantee.'],
      ], 0))],
      [ao(4, scn('A start-up needs $20,000. A government grant of up to $8,000 is not guaranteed. A low-cost loan of $20,000 would need repaying with 3% interest. The owner has no savings. Which is the better first step?', [
        ['Apply for the low-cost loan and also apply for the grant to reduce borrowing', 'Matches the need: loan guarantees the amount; the grant may cut later costs.', true],
        ['Rely only on the grant', 'Not guaranteed and may not cover $20,000.', false],
        ['Delay the business until savings exist', 'Misses the opportunity and the support available.', false],
      ], 'Weigh certainty of funds against cost; combining sources reduces risk.'))],
    ],
    pool: [
      ao(3, scn('A new café has a 12-page business plan with a cash flow forecast. The owner says: “Now that I have a plan, I do not need to check market conditions again.” What is the best response?', [
        ['The plan should be reviewed regularly because conditions and costs change', 'Plans guide but do not guarantee; they need updating.', true],
        ['The owner is right because plans guarantee success', 'No plan guarantees success.', false],
        ['Plans are worthless after the loan is approved', 'They remain useful for monitoring progress.', false],
      ], 'A business plan is a living document, used to measure progress and adjust.')),
      ao(4, mc('Which entrepreneur is most likely to succeed in a competitive market for phone repairs?', [
        ['One who researches demand, offers faster repairs than rivals and is willing to adapt prices', 'Correct: evidence, differentiation and adaptability.'],
        ['One who copies a rival exactly and refuses to change', 'No advantage and no adaptability.'],
        ['One with no plan but strong enthusiasm', 'Enthusiasm alone is rarely enough.'],
        ['One who spends all funds on shop fittings', 'Poor use of limited finance.'],
      ], 0)),
      ao(3, mc('A plan’s “market research” section shows only 12 survey replies. What is the most significant weakness for a lender?', [
        ['The sample is too small to be sure demand is real', 'Correct: a lender needs reliable evidence of demand.'],
        ['Surveys cannot be used in plans', 'Surveys are a common method.'],
        ['The research is too cheap', 'Cost is not the issue.'],
        ['There are too many replies', '12 replies is too few.'],
      ], 0)),
      ao(3, tfd('A business plan removes the risk of business failure.', 'false', 'It reduces risk by improving planning and showing viability, but markets, costs and competitors can still change.')),
      ao(4, mc('A government has a limited budget and must support only one: (A) a grant scheme for start-ups or (B) a training scheme for entrepreneurs. Which is the best-justified choice if most new firms fail from poor management?', [
        ['B, because training addresses the main cause of failure and improves survival', 'Correct: links the support to the cause.'],
        ['A, because grants are always better', '“Always” is unsupported.'],
        ['Neither; start-ups should receive no help', 'Ignores the evidence about failure.'],
        ['A, because training is cheaper', 'Cost alone does not address failure.'],
      ], 0)),
      ao(3, mc('An entrepreneur is described as “creative, willing to take risks and hard-working but impatient with planning”. Which prediction is best supported?', [
        ['Strong at generating ideas but may struggle to get finance without a plan', 'Correct: ideas are strong; planning weakness affects funding.'],
        ['Certain to succeed', 'No guarantee.'],
        ['Certain to fail', 'No evidence for certainty.'],
        ['Unable to take risks', 'The description says the opposite.'],
      ], 0)),
      ao(2, mc('Case: a nursery for children aged 1 to 3 plans to rent premises and buy toys. Which business plan section would show how much money it needs for toys and rent?', [
        ['Finance', 'Correct: funding needs and costs.'],
        ['People', 'Covers staffing.'],
        ['Objectives', 'Covers aims.'],
        ['Marketing', 'Covers pricing/promotion.'],
      ], 0)),
      ao(4, scn('A town council can fund a free business-advice centre ($50,000) or low-cost loans ($50,000 pot, average $5,000 each). The area has many ideas but few people who know accounting. Which is better?', [
        ['The advice centre, because lack of skills is the barrier and advice helps many entrepreneurs', 'Fits the problem identified.', true],
        ['The loans, because money always matters most', '“Always” is unsupported; the barrier is skills.', false],
      ], 'Match the support to the actual barrier.')),
    ],
  },

  'u1-size-growth': {
    cards: [
      [ao(3, mc('Firm X has 40 employees and sales of $20m (automated). Firm Y has 400 employees and sales of $15m. Which statement about size is most accurate?', [
        ['By employees Y is bigger, but by sales X is bigger — the measure chosen changes the answer', 'Correct: demonstrates the problem of measuring size.'],
        ['X is definitely bigger because it makes more profit', 'Profit is not a measure of size.'],
        ['Y is definitely bigger because it has more workers', 'By sales X is bigger.'],
        ['Size cannot be measured', 'It can, with limitations.'],
      ], 0))],
      [ao(3, mc('A law firm and a car factory both have 100 employees. Which is the most reasonable conclusion about using employees to compare their size?', [
        ['It is misleading because the factory uses far more machinery and produces much higher output per worker', 'Correct: capital intensity distorts the comparison.'],
        ['They are the same size', 'The measure is unreliable.'],
        ['The law firm is bigger because services are more valuable', 'No evidence.'],
        ['The factory has no employees', 'It has 100.'],
      ], 0))],
      [ao(4, mc('A retailer with sales of $8m has the option to grow. Which owner motive is best justified as a reason for growth?', [
        ['To gain economies of scale such as bulk discounts, lowering average cost and raising profit', 'Correct: a business-based reason with impact.'],
        ['To avoid paying tax', 'Growth does not avoid tax.'],
        ['Because growth is always good', 'Unsupported.'],
        ['To reduce the number of customers', 'Illogical.'],
      ], 0))],
      [ao(3, mc('A small restaurant could grow organically by opening a second branch funded by its own profits, or wait. Its profit is $30,000 a year and a branch costs $60,000. Which is the best assessment?', [
        ['Internal growth is feasible but slow: about two years of profit are needed, so it keeps control but may miss opportunities', 'Correct: uses the figures and recognises the trade-off.'],
        ['It should merge instantly', 'Merging is external, not internal growth.'],
        ['It is impossible to grow', 'It is possible over time.'],
        ['It will become instantly profitable', 'No evidence.'],
      ], 0))],
      [ao(3, mc('A national supermarket buys a regional supermarket chain. Which statement describes this and a likely advantage?', [
        ['Horizontal integration; instant extra market share and possible economies of scale', 'Correct.'],
        ['Vertical backward integration; secure supplies', 'Both are supermarkets, so horizontal.'],
        ['Organic growth; low risk', 'It is a takeover, so external.'],
        ['Conglomerate integration; spread risk', 'Both are in the same industry.'],
      ], 0))],
      [ao(4, mc('A chocolate maker with 150 staff can take over a cocoa farm (vertical backward) costing $4m. Its profit is $1m a year and borrowing would cost 8% interest. Which assessment is best?', [
        ['A secure supply is valuable but $320,000 interest a year is a third of profit, so it needs a strong supply-risk reason', 'Correct: weighs the benefit against the measurable cost.'],
        ['The takeover is certainly worth it because supply is important', 'Ignores the cost evidence.'],
        ['The takeover is a bad idea because farms are different', 'Not a justified reason.'],
        ['Interest does not matter for takeovers', 'It reduces profit.'],
      ], 0))],
      [ao(4, mc('A hair salon has no plan to grow even though the market is strong. Which reason is best justified?', [
        ['The owner values personal service and control, which could be lost in a larger business', 'Correct: reasons linked to the nature of the business.'],
        ['Hair salons cannot be profitable', 'Unsupported.'],
        ['Growth is illegal for salons', 'Untrue.'],
        ['Customers dislike all large businesses', 'Over-generalised.'],
      ], 0))],
      [ao(4, scn('A new restaurant has a strong menu, but the owner has no management experience and little cash. Which is the most likely main reason it would fail?', [
        ['Lack of finance and poor cash management, since it cannot pay bills even if customers like the food', 'Correct: cash problems are a leading cause of failure.', true],
        ['Too much demand', 'Demand is not the problem described.', false],
        ['Strong menu', 'A strength, not a cause of failure.', false],
      ], 'Failure often results from finance and management weaknesses rather than product quality.'))],
      // advantages / disadvantages cards
      [ao(4, mc('A rapidly growing toy company faces slower decisions and communication errors between two factories. Which growth route and effect fit best?', [
        ['External growth by merger; diseconomies of scale from coordinating two sites', 'Correct: this describes a typical merger problem.'],
        ['Internal growth; lower risk', 'Does not describe the problems.'],
        ['Staying small; personal service', 'The firm is growing.'],
        ['No growth; economies of scale', 'Contradicts the case.'],
      ], 0))],
      [ao(4, mc('A local bicycle repair shop earns steady profit and the owner values knowing every customer. Which is the strongest disadvantage of choosing to stay small?', [
        ['Higher cost per repair because it cannot use bulk buying or advanced equipment', 'Correct: lack of economies of scale.'],
        ['Loss of control by the owner', 'Small firms keep control.'],
        ['Communication problems across several sites', 'A large-firm issue.'],
        ['Too many managers', 'Not a small-firm issue.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('Two rival coffee chains consider merging. Chain A has 80 shops and a strong brand; Chain B has 30 shops but its staff are highly loyal. Which statement is the best-justified risk of merging?', [
        ['Different cultures and brands could cause conflict and confuse customers, reducing the expected gains', 'A genuine risk specific to merging two chains.', true],
        ['Merging removes all risks', 'False.', false],
      ], 'Mergers can bring gains, but culture and brand clashes are common problems.')),
      ao(3, calc('A business’s sales grew from $4.0m to $5.4m while employees rose from 50 to 54. By what percentage did sales grow, and was growth in employees larger or smaller? (Enter the % growth in sales.)', 35, {
        unit: '%',
        formula: '% change = (new − old) ÷ old × 100',
        steps: ['Sales: (5.4 − 4.0) ÷ 4.0 = 0.35 → 35%', 'Employees: (54 − 50) ÷ 50 = 8%', 'Sales grew much faster than headcount, suggesting higher productivity or automation.'],
      })),
      ao(4, mc('Which is the best-justified reason for a small business to prefer organic growth rather than a takeover?', [
        ['It has little cash and a takeover would need heavy borrowing that could threaten survival', 'Correct: links the choice to the firm’s finances.'],
        ['Takeovers are illegal for small firms', 'Untrue.'],
        ['Organic growth is faster', 'Organic growth is slower.'],
        ['Because small businesses never grow', 'Unsupported.'],
      ], 0)),
      ao(3, mc('A clothing manufacturer buys a chain of shops that sells its clothes. Which is the best analysis?', [
        ['Vertical forward integration: it controls distribution and earns the retailer’s margin, but needs capital and retail skills', 'Correct: identifies type and balanced impact.'],
        ['Horizontal integration: removes a competitor', 'Shops are at a different stage.'],
        ['Conglomerate: diversification', 'Same industry chain.'],
        ['Organic growth: low cost', 'A purchase of shops is external growth.'],
      ], 0)),
      ao(4, tfd('A business that is profitable but small has failed to be successful.', 'false', 'Success depends on objectives; a small profitable business may be meeting its owner’s aims.')),
      ao(3, mc('Which of these is the most likely cause of diseconomies of scale in a rapidly growing firm?', [
        ['Managers cannot coordinate a larger workforce, so mistakes and delays raise average cost', 'Correct.'],
        ['Buying materials in bulk', 'An economy of scale.'],
        ['Cheaper loans', 'An economy of scale.'],
        ['Using a bigger machine', 'A technical economy.'],
      ], 0)),
      ao(4, scn('A firm’s market share is 12%. It can raise share by launching new products (organic, 3 years) or by taking over a rival with 8% share (6 months, $10m, needs a loan). Competitors are launching products fast. Which is better?', [
        ['The takeover, because speed matters and the extra 8% share is immediate, if the loan is affordable', 'Justified using the case evidence (rivals acting quickly).', true],
        ['Organic growth, because it is always better', '“Always” is unsupported.', false],
      ], 'Choose between speed and risk using the facts: here rival action favours speed, subject to affordability.')),
      ao(3, mc('Which pair is correctly matched?', [
        ['Takeover — one firm buys another', 'Correct.'],
        ['Merger — one firm forces another out of business', 'A merger is agreed by both firms.'],
        ['Organic growth — buying a supplier', 'That is external growth.'],
        ['Diversification — buying a rival in the same industry', 'That is horizontal integration.'],
      ], 0)),
    ],
  },

  'u1-organisations': {
    cards: [
      [ao(4, mc('Karim runs a bakery as a sole trader. A supplier takes him to court for a $25,000 unpaid bill and the bakery’s assets are worth $10,000. What happens?', [
        ['He is personally liable for the remaining $15,000, which could come from his own assets', 'Correct: unlimited liability.'],
        ['The debt disappears because the bakery has no money', 'Sole traders have unlimited liability.'],
        ['The supplier can only take $10,000', 'There is no limit for a sole trader.'],
        ['The government pays the rest', 'No such rule.'],
      ], 0))],
      [ao(4, mc('Two partners disagree: one wants to invest in a new van ($20,000), the other refuses. No partnership agreement exists. Which statement is the best analysis?', [
        ['Shared decision making slows the decision and can damage the relationship; an agreement could have set rules', 'Correct.'],
        ['The first partner can decide alone', 'Partners usually share decisions.'],
        ['The business must close', 'Not automatically.'],
        ['The government decides', 'Not relevant.'],
      ], 0))],
      [ao(4, mc('Three friends form a private limited company and invest $10,000 each. After a bad year the company owes $90,000 but has only $20,000 in assets. What is the most likely result for the shareholders?', [
        ['They can lose their $30,000 invested but are not personally liable for the extra debt', 'Correct: limited liability.'],
        ['They must each pay $23,333 from their savings', 'That would be unlimited liability.'],
        ['The company can sell shares to the public to cover it', 'A private limited company cannot.'],
        ['They lose nothing', 'The investment is lost.'],
      ], 0))],
      [ao(4, mc('Which is the strongest disadvantage for a growing family-owned company that decides to become a PLC?', [
        ['Rivals can buy shares and take control, and the firm must publish accounts', 'Correct: takeover risk and disclosure.'],
        ['It cannot raise any more capital', 'A PLC can raise large capital.'],
        ['The owners gain unlimited liability', 'PLCs have limited liability.'],
        ['The firm can no longer have employees', 'Irrelevant.'],
      ], 0))],
      [ao(4, scn('A single hairdresser wants to open four salons, borrow $200,000 and protect her home if things go wrong. She wants to choose who her investors are. Which form is the best-justified?', [
        ['Private limited company: limited liability and she controls who buys shares', 'Meets all three needs.', true],
        ['Sole trader: she keeps all decisions', 'Unlimited liability risks her home.', false],
        ['PLC: the most capital', 'Selling shares publicly loses control of who owns the firm.', false],
      ], 'Match the business form to the owner’s needs for capital, control and risk.'))],
      [ao(4, mc('A student wants to open a franchised sandwich shop. The franchise costs $60,000 plus 6% royalties; an independent shop would cost $35,000. Which is the best-supported advantage of the franchise?', [
        ['A proven brand and training could reduce the risk of failure despite higher costs', 'Correct: links the benefit to risk.'],
        ['It costs less than the independent shop', 'It costs more.'],
        ['There are no ongoing payments', 'There is a 6% royalty.'],
        ['The student can change the menu freely', 'Franchises restrict changes.'],
      ], 0))],
      [ao(4, mc('A mining firm and a local council set up a joint venture to build a recycling plant. Which is the best-supported risk?', [
        ['Disagreements over decisions and sharing profits could delay the project', 'Correct: a typical joint-venture risk.'],
        ['The firm keeps all the profit', 'Profit is shared.'],
        ['The plant cannot exist legally', 'Not stated.'],
        ['No capital is needed', 'Capital is shared, not removed.'],
      ], 0))],
      // advantages / disadvantages cards
      [ao(4, mc('A sole trader with $15,000 savings wants a $90,000 expansion. Which statement best explains why a partnership might solve her problem BUT create another?', [
        ['A partner brings capital and skills, but profits and decisions must be shared and liability is still usually unlimited', 'Correct: weighs benefits and drawbacks.'],
        ['A partner removes all risk', 'Risk is shared, not removed.'],
        ['A partnership has limited liability', 'Usually not.'],
        ['A partner does not share profits', 'Profits are shared.'],
      ], 0))],
      [ao(4, mc('A private limited company is deciding whether to become a PLC to fund a $5m expansion. Which statement shows the best evaluation?', [
        ['A PLC could raise the funds quickly, but the owners risk a takeover and loss of control, so the benefit depends on how important control is', 'Correct: balanced, linked to the decision.'],
        ['A PLC is always better', '“Always” is unsupported.'],
        ['A PLC cannot raise $5m', 'It can.'],
        ['The owners keep full control', 'Shares are sold to the public.'],
      ], 0))],
      [ao(4, mc('A franchisor’s brand is damaged when one franchisee serves poor-quality food. Which advantage-disadvantage pair does this show?', [
        ['Rapid expansion via others’ capital, but less control over quality', 'Correct.'],
        ['Fee income, but no brand', 'The brand exists; the issue is control.'],
        ['Full control, but slow expansion', 'This describes expanding alone.'],
        ['Limited liability, but unlimited profit', 'Unrelated.'],
      ], 0))],
      [ao(4, mc('A social enterprise reinvests its profit in training for unemployed people, so its owners earn no dividends. Which statement best evaluates this?', [
        ['It achieves its social aim and builds goodwill, but it may find it harder to attract investors who want a return', 'Correct.'],
        ['It will never make a profit', 'It does aim to earn a surplus.'],
        ['It is owned by the government', 'Not stated.'],
        ['It has no customers', 'It sells goods or services.'],
      ], 0))],
    ],
    pool: [
      ao(4, scn('Aurelie and Nadine are partners making handmade shoes (20 staff). Orders are growing and they need $300,000. They worry about personal risk and disagree about decisions. Which form is best-justified?', [
        ['Private limited company: limited liability for both, share capital to raise funds, and clear ownership rules', 'Addresses finance, risk and disagreement.', true],
        ['Remain a partnership', 'Unlimited liability and unresolved disagreements remain.', false],
      ], 'Justify the form using the owners’ needs.')),
      ao(3, mc('A franchisee earns $80,000 sales a year and pays a 6% royalty. How much royalty is paid, and what does it show?', [
        ['$4,800 — franchisees give up part of revenue for the use of the brand', 'Correct: 6% of $80,000.'],
        ['$480 — a small fee', 'Miscalculated.'],
        ['$48,000', 'Too large.'],
        ['$0 — franchisees do not pay royalties', 'They usually do.'],
      ], 0)),
      ao(4, mc('A government wants more people to start businesses but is worried about owners losing their homes. Which policy is best-justified?', [
        ['Encourage private limited companies through simple registration so owners have limited liability', 'Correct: links policy to risk.'],
        ['Ban sole traders', 'Unreasonable.'],
        ['Remove all company laws', 'Removes protection.'],
        ['Give every sole trader unlimited loans', 'Not realistic.'],
      ], 0)),
      ao(4, tfd('A PLC is part of the public sector because it sells shares to the public.', 'false', 'A PLC is owned by private shareholders, so it is in the private sector.')),
      ao(4, scn('A social enterprise cafe wants to expand but its charity-minded owners fear that new investors will demand profit and change its mission. Which approach best balances both needs?', [
        ['Seek grants and small investors who accept limited returns and agree to protect the mission', 'Protects mission while raising funds.', true],
        ['Become a PLC and sell shares freely', 'Risks losing the mission.', false],
      ], 'Evaluate options against the organisation’s main aim.')),
      ao(3, mc('Which statement about a limited liability company is most accurate?', [
        ['The company is a separate legal entity; shareholders risk only their investment', 'Correct.'],
        ['Shareholders must pay all company debts personally', 'That is unlimited liability.'],
        ['It can never be sued', 'It can be.'],
        ['It has no owners', 'Shareholders own it.'],
      ], 0)),
      ao(4, mc('Which is the best-supported reason a franchisee might reject a franchise offer?', [
        ['The ongoing royalty and rules could leave too little profit and too little freedom', 'Correct.'],
        ['The brand is too well known', 'That is an advantage.'],
        ['The franchisor offers training', 'An advantage.'],
        ['The risk of failure is lower', 'An advantage.'],
      ], 0)),
      ao(3, mc('Two entrepreneurs want to share work and skills but have trusted each other for years. Which form fits and what should they prepare?', [
        ['A partnership with a written partnership agreement to avoid disputes', 'Correct.'],
        ['A PLC with a stock exchange listing', 'Too complex for their needs.'],
        ['A franchise without a contract', 'Contracts are essential.'],
        ['A sole trader with two owners', 'Contradiction.'],
      ], 0)),
    ],
  },

  'u1-objectives-stakeholders': {
    cards: [
      [ao(3, mc('A business has just survived its first two years and now has strong sales. Which objective change is most likely?', [
        ['A shift from survival to growth and profit', 'Correct: objectives change as the business develops.'],
        ['A shift to closing down', 'No evidence.'],
        ['No objectives are needed', 'Objectives guide decisions.'],
        ['Becoming a public sector firm', 'No link.'],
      ], 0))],
      [ao(4, mc('A manager says: “We do not need objectives; we just serve customers.” Which response is best-justified?', [
        ['Without targets the firm cannot measure whether it is succeeding or make consistent decisions', 'Correct: objectives give direction and measurement.'],
        ['Objectives are only for banks', 'No.'],
        ['Objectives guarantee success', 'They do not.'],
        ['The manager is right', 'Not justified.'],
      ], 0))],
      [ao(3, mc('A factory’s owners want higher dividends, employees want a 10% pay rise, and managers want a bigger bonus. Which statement best analyses the situation?', [
        ['All three groups want a share of the same profit, so their objectives may conflict', 'Correct.'],
        ['Their objectives are identical', 'They compete for the same money.'],
        ['Only the owners matter', 'All are stakeholders.'],
        ['Profit does not matter to employees', 'Pay rises depend on it.'],
      ], 0))],
      [ao(3, mc('A new supermarket will increase traffic and noise on a quiet street but create 100 jobs. Which stakeholders have conflicting interests?', [
        ['Local residents (quiet) and the government or job-seekers (jobs)', 'Correct: the same decision affects them differently.'],
        ['Customers and suppliers only', 'Not the conflict here.'],
        ['Only the shareholders', 'The question is about community groups.'],
        ['No one is affected', 'Many groups are.'],
      ], 0))],
      [ao(4, scn('A firm can raise prices 10% (owners gain profit; customers lose) or hold prices and accept lower profit. Customers are loyal but have low incomes. Which choice best balances stakeholders?', [
        ['Raise prices by a smaller amount and explain why, protecting loyalty while improving profit', 'A compromise using the situation described.', true],
        ['Raise prices 10% regardless', 'Risks losing loyal customers.', false],
        ['Cut prices below cost', 'Hurts survival.', false],
      ], 'Evaluate conflicts by weighing which stakeholder impact matters most and compromising where possible.'))],
    ],
    pool: [
      ao(4, scn('BPM is a mining company with dangerous conditions. The MD says shareholders are the most important stakeholders. Workers threaten to strike and the community protests about pollution. Which view is best-justified?', [
        ['All groups matter: ignoring workers and the community risks stoppages, fines and lost reputation that harm shareholders too', 'Uses the case to show interdependence.', true],
        ['Only shareholders matter because they own it', 'Ignores the consequences of conflict.', false],
      ], 'Stakeholder importance depends on their power to affect the business.')),
      ao(3, mc('A business has the objective “increase market share from 10% to 14% in two years”. Which is the best reason this is a useful objective?', [
        ['It is specific and measurable, so progress can be checked', 'Correct.'],
        ['It guarantees extra profit', 'It does not.'],
        ['It removes competition', 'It does not.'],
        ['It is vague', 'It is specific.'],
      ], 0)),
      ao(4, mc('A start-up’s objective is survival, but it can only grow if it takes a risky loan. Which statement is best-justified?', [
        ['It should delay the loan until it has secured enough cash flow, because survival comes first', 'Correct: aligns the decision with the current objective.'],
        ['It should always take any loan', 'Ignores risk.'],
        ['Objectives never matter in decisions', 'They guide decisions.'],
        ['Growth is always the best objective', 'Not for a start-up.'],
      ], 0)),
      ao(3, mc('Which pair is most likely to have OPPOSING objectives regarding a price rise?', [
        ['Owners (higher profit) and customers (lower prices)', 'Correct.'],
        ['Owners and managers (both want success)', 'Aligned.'],
        ['Suppliers and employees', 'No direct conflict.'],
        ['Government and the community (both want jobs)', 'Aligned.'],
      ], 0)),
      ao(4, tfd('A business should always put shareholders’ interests above all other stakeholders.', 'depends', 'Shareholders provide capital, but ignoring employees, customers or the community can damage long-term profit. The best balance depends on the situation.')),
      ao(3, mc('A supplier agrees to deliver on credit for 30 days. Which stakeholder objective is most directly served?', [
        ['The business’s working capital objective (cash flow), at the supplier’s cost of waiting', 'Correct: credit supports the buyer’s cash flow.'],
        ['The government’s tax objective', 'Unrelated.'],
        ['The community’s environment objective', 'Unrelated.'],
        ['The employees’ pay objective', 'Indirect only.'],
      ], 0)),
      ao(4, scn('A factory could automate and cut 40 jobs (saving $600,000 a year) or keep staff and accept lower profit. Employees will protest; the owners want higher returns. Which is best-justified?', [
        ['Automate gradually using natural leaving and retraining, because it balances profit and employee concerns', 'A compromise using the case.', true],
        ['Sack all 40 immediately', 'Maximises savings but risks unrest and morale.', false],
      ], 'Evaluate conflicts by looking for a justified compromise.')),
      ao(3, mc('A business objective of ‘social responsibility’ is most likely to appear for which organisation?', [
        ['A social enterprise', 'Correct: it has social aims.'],
        ['A sole trader who only wants maximum profit', 'Not necessarily.'],
        ['A firm about to close', 'Not necessarily.'],
        ['A monopoly with no customers', 'Not relevant.'],
      ], 0)),
    ],
  },
};
