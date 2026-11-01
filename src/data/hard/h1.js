import { mc, multi, match, cloze, short, scn, ao } from '../builders.js';

// Unit 1 (Understanding business activity): harder replacements and extra question types.
// Options are kept the same length and style on purpose, so the answer cannot be guessed from its shape.

export const h1 = {
  replace: {
    // ---------- Business activity ----------
    'u1-activity-sectors:1': ao(4, mc('A government has one grant to give: to a small coal mine (primary) or to a software start-up (tertiary). Which argument for the start-up is best supported?', [
      ['Each worker is likely to add more value, and the jobs need skills that raise future earnings', 'Correct: a reasoned case based on value added per worker and skills.'],
      ['A tertiary firm has no input costs, so a start-up cannot make a loss on its work', 'Services still have costs such as wages, rent and equipment.'],
      ['A primary firm adds no value at all, because the coal already exists in the ground', 'Extraction and sale of coal does add value; it is just usually lower per worker.'],
      ['Start-ups always employ more people than mines, so the grant creates more total jobs', 'Not true as a rule; a mine can employ many people.'],
    ], 0)),
    'u1-activity-sectors:3': ao(3, mc('In Country P, 68% of workers are in farming and mining and 7% are in services. Which statement is the best conclusion?', [
      ['P is likely to be a less developed economy, because output depends on the primary sector', 'Correct: high primary employment is typical of lower-income economies.'],
      ['P is likely to be a developed economy, because most of its output is made by workers', 'Developed economies usually employ most workers in services.'],
      ['P must have high unemployment, because farming and mining provide few jobs', 'The data show 75% of workers are in these sectors, so employment is not low.'],
      ['P has no private sector, because the data show only farming and mining jobs', 'Farms and mines can be privately owned; nothing here suggests otherwise.'],
    ], 0)),
    'u1-activity-sectors:5': ao(4, mc('A baker is deciding between a $8,000 oven (extra profit $3,000 a year) and $8,000 of online marketing (extra profit $2,400 a year). She buys the oven. What is the opportunity cost of that decision?', [
      ['The extra $2,400 a year she would have earned from the marketing', 'Correct: the benefit of the next best alternative given up.'],
      ['The $8,000 she spent, because that money is no longer available to her', 'The money is the cost in resources; opportunity cost is the next best benefit forgone.'],
      ['The $3,000 extra profit she expects, because it might not be earned', 'That is the expected benefit of the chosen option.'],
      ['The $5,400 total of both extra profits, because she gave up both options', 'She keeps the oven benefit; only the alternative is forgone.'],
    ], 0)),
    'u1-activity-sectors:6': ao(2, mc('Which description is correct for BOTH the sector and the ownership?', [
      ['A privately owned car factory: secondary sector and private sector', 'Correct: manufacturing, owned by individuals or shareholders.'],
      ['A state-run railway: tertiary sector and private sector', 'Rail is a service (tertiary) but a state railway is public sector.'],
      ['A family-owned farm: primary sector and public sector', 'Farming is primary but a family farm is private sector.'],
      ['A government-run bank: tertiary sector and secondary sector', 'Sector of activity and ownership sector are different ideas.'],
    ], 0)),
    'u1-activity-sectors:7': ao(3, mc('A firm sells 500 units a month. Which single change raises its monthly added value the most? (Assume sales stay at 500.)', [
      ['Raising the price from $10 to $11 with no change in costs', 'Correct: +$1 × 500 = +$500 a month.'],
      ['Cutting the cost of inputs from $6.00 to $5.70 a unit', 'Only +$0.30 × 500 = +$150.'],
      ['Cutting the price from $10 to $9.50 to try to win more orders', 'This lowers added value per unit by $0.50.'],
      ['Hiring one more worker on $400 a month to speed up delivery', 'This is a wage cost, not an input cost; it does not raise value per unit.'],
    ], 0)),
    'u1-activity-sectors:c0.0': ao(3, mc('A brewery sells its delivery van and uses the money for a bottling machine. Which description is most accurate?', [
      ['One capital good is swapped for another, which may raise output per worker', 'Correct: both are capital; the machine can raise productivity.'],
      ['More land is now used, because the machine needs a place in the factory', 'Land means natural resources; a machine is capital.'],
      ['Less enterprise is used, because the owner now takes fewer risks', 'Taking risk and organising resources is enterprise, which is unchanged.'],
      ['Labour is the factor that changes, because workers must learn to use it', 'Labour is the workforce; the item that changed hands is capital.'],
    ], 0)),
    'u1-activity-sectors:c1.0': ao(3, mc('A café sells sandwiches for $5.00 with ingredient cost $2.40. Option 1: better bread costs $0.60 more and allows a $6.20 price. Option 2: cheaper filling saves $0.30 and the price stays $5.00. Which gives more added value per sandwich?', [
      ['Option 1: $3.20 against $2.90 for option 2', 'Correct: (6.20 − 3.00) = 3.20 and (5.00 − 2.10) = 2.90.'],
      ['Option 2: $2.90 against $2.80 for option 1', 'Option 1 is $3.20, not $2.80.'],
      ['Option 1: $1.20 more, because that is the rise in the selling price', 'The extra $0.60 of bread cost must be taken off the price rise.'],
      ['They are equal, because both options change profit by about the same', 'The values are $3.20 and $2.90.'],
    ], 0)),
    'u1-activity-sectors:c2.0': ao(3, mc('A farmer’s options are wheat (profit $5,000), maize ($6,500) or renting to a developer ($4,000). He plants wheat. What is his opportunity cost?', [
      ['$6,500, the profit from maize', 'Correct: the next best alternative to wheat.'],
      ['$4,000, the rent, because it is the safest of the other choices', 'Opportunity cost is the best alternative, not the safest.'],
      ['$10,500, the total of maize and rent given up', 'Only the single next best alternative counts.'],
      ['$5,000, the profit from wheat that he now earns', 'This is the benefit of the chosen option.'],
    ], 0)),
    'u1-activity-sectors:c3.0': ao(3, mc('A company mines iron ore, makes steel and sells steel goods in its own shop. Which statement is correct?', [
      ['It works in the primary, secondary and tertiary sectors together', 'Correct: mining, manufacturing and retailing.'],
      ['It is secondary only, because the steel it makes is its main product', 'It also extracts raw materials and sells to the public.'],
      ['It is primary only, because it owns the mine that supplies everything', 'Making steel and retailing are other sectors.'],
      ['It is tertiary only, because it sells goods to final customers in a shop', 'Its mining and manufacturing are not services.'],
    ], 0)),
    'u1-activity-sectors:c4.0': ao(3, mc('Why might a state-owned hospital not aim to maximise profit?', [
      ['Its purpose is to provide healthcare to citizens, paid for from taxes', 'Correct: public sector aims are social, not profit.'],
      ['The law forbids any hospital from earning more income than it spends', 'Private hospitals can aim for profit.'],
      ['Hospitals have no running costs, so there is no profit to maximise', 'Hospitals have large costs.'],
      ['Governments do not allow public sector bodies to charge for any service', 'Some public bodies do charge fees.'],
    ], 0)),

    // ---------- Enterprise and entrepreneurs ----------
    'u1-enterprise:1': ao(3, mc('Four people plan phone-repair shops in the same town. Whose approach gives the best chance of surviving the first year?', [
      ['Tests demand with a survey, then undercuts rivals on speed while keeping costs low', 'Correct: evidence about customers plus a clear advantage.'],
      ['Copies the nearest rival’s prices and opening hours exactly, to avoid risk', 'No advantage over the rival; customers have no reason to switch.'],
      ['Spends all savings on a large shop first, then looks for customers afterwards', 'High fixed costs before knowing demand is the riskiest approach.'],
      ['Waits until a perfect business plan is finished, however long that takes', 'Delay has a cost; plans need to be good enough, then tested.'],
    ], 0)),
    'u1-enterprise:2': ao(4, mc('A plan’s market research section is based on 12 survey replies from friends. What is its most important weakness?', [
      ['The sample is small and biased, so it may not show real demand', 'Correct: friends are unlikely to be a fair sample of customers.'],
      ['The survey was done before the business had registered with the government', 'Registration is not needed to carry out research.'],
      ['Surveys cost too much to be used in a plan for a small business', 'Surveys can be cheap; cost is not the weakness.'],
      ['Primary research is never reliable, so secondary data should be used instead', 'Primary research can be reliable if the sample is good.'],
    ], 0)),
    'u1-enterprise:4': ao(4, mc('A government can fund only one: grants for start-ups, or training in management skills. The main cause of failure in its area is poor financial control. Which choice is best supported?', [
      ['Training, because it targets the main cause of failure', 'Correct: the policy matches the problem.'],
      ['Grants, because money is the only thing a new firm really needs', 'A grant does not fix poor control of cash.'],
      ['Grants, because more start-ups always means more jobs in the long term', 'Many may fail; the evidence is that failure is the problem.'],
      ['Neither, because enterprise cannot be helped by government action', 'Governments can and do support enterprise.'],
    ], 0)),
    'u1-enterprise:5': ao(3, mc('An entrepreneur is described as creative, willing to take risks and hard-working, but impatient. Which weakness might this cause?', [
      ['Good at starting ideas, but may not wait to check them or finish the details', 'Correct: impatience can lead to unfinished or untested projects.'],
      ['Unable to think of new products, because impatient people are not creative', 'The description says the person is creative.'],
      ['Likely to avoid all risks, because impatient people prefer safe choices', 'The description says the person takes risks.'],
      ['Likely to work too few hours, because impatient people tire of long tasks', 'The description says the person is hard-working.'],
    ], 0)),
    'u1-enterprise:6': ao(2, mc('A nursery for children aged 1 to 3 plans to rent premises and buy toys. Which section of its business plan lists the rent and the cost of the toys?', [
      ['Finance', 'Correct: costs and start-up funds belong in the finance section.'],
      ['Operations', 'Operations covers how the nursery will run, such as staff ratios and opening hours.'],
      ['Marketing', 'Marketing covers customers, prices and promotion.'],
      ['People', 'People covers who will work there and their skills.'],
    ], 0)),
    'u1-enterprise:c0.0': ao(3, mc('Founder A closes a new café after three loss-making months. Founder B changes the menu and prices and survives year one. Which quality best explains the difference?', [
      ['Resilience and willingness to adapt after a setback', 'Correct: B kept going and changed the approach.'],
      ['Better creativity, because B’s original idea was clearly more original', 'Both started similar cafés; the difference is the reaction.'],
      ['Greater luck, because outcomes of new firms are random in the first year', 'Not an entrepreneurial quality, and unsupported.'],
      ['Better qualifications, because B must have studied business first', 'Nothing in the question mentions qualifications.'],
    ], 0)),
    'u1-enterprise:c1.0': ao(2, mc('A plan says: “We will employ 3 bakers and 2 assistants, all with artisan bread experience.” Which section is this?', [
      ['People', 'Correct: staffing and skills.'],
      ['Operations', 'Operations covers premises, suppliers and production methods.'],
      ['Finance', 'Finance covers costs, revenue and cash flow forecasts.'],
      ['Marketing', 'Marketing covers customers, prices and promotion.'],
    ], 0)),
    'u1-enterprise:c2.0': ao(4, mc('A bank can lend $15,000 to one of two start-ups. A has a researched plan and a cash flow forecast; B has only an idea. Which statement is best justified?', [
      ['A is more likely to be lent to, since its plan shows how it can repay', 'Correct: banks lend on evidence of repayment.'],
      ['B is more likely to be lent to, since new ideas have more room to grow', 'Banks lend against evidence, not potential alone.'],
      ['Both are equally likely, since the amount of the loan is the same', 'The quality of evidence differs.'],
      ['Neither can borrow, since start-ups have no trading history at all', 'Start-ups can borrow if the plan is convincing.'],
    ], 0)),
    'u1-enterprise:c3.0': ao(3, mc('A government cuts tax for start-ups in a high-unemployment region. What is the best-reasoned benefit to the government?', [
      ['New firms create jobs, so benefit payments fall and later tax income rises', 'Correct: a chain of cause and effect.'],
      ['Tax income rises straight away, because more firms are now registered', 'The tax cut reduces income in the short run.'],
      ['Competition falls, because the tax cut helps only the firms that are new', 'Start-ups increase competition.'],
      ['Every start-up is certain to survive, because tax is no longer a cost', 'Tax is one cost among many; survival is not guaranteed.'],
    ], 0)),

    // ---------- Size and growth ----------
    'u1-size-growth:2': ao(4, mc('Which is the best-justified reason for a small, cash-poor firm to choose organic growth rather than a takeover?', [
      ['A takeover needs large funds or borrowing, while organic growth can use its own profit', 'Correct: affordability and lower risk.'],
      ['Organic growth is always faster, so it gives a larger share of the market sooner', 'Organic growth is usually slower than a takeover.'],
      ['Takeovers are illegal for any firm with fewer than 50 employees', 'There is no such rule.'],
      ['Organic growth removes the risk of diseconomies of scale completely', 'Any growth can bring diseconomies.'],
    ], 0)),
    'u1-size-growth:3': ao(3, mc('A clothes maker buys a chain of shops that sells its clothes. How is this best described?', [
      ['Vertical integration forwards: it controls selling to the final customer', 'Correct: a move towards the customer in the chain.'],
      ['Vertical integration backwards: it now controls its own raw materials', 'Backward means towards suppliers, such as buying a cotton farm.'],
      ['Horizontal integration: it joins a firm at the same stage of production', 'The shops are at a different stage (retail).'],
      ['Diversification: it moves into a market unrelated to its own products', 'The shops sell its own clothes, so the market is related.'],
    ], 0)),
    'u1-size-growth:5': ao(3, mc('Which is the most likely cause of diseconomies of scale in a firm that has grown quickly?', [
      ['Messages pass through more managers, so decisions slow and mistakes rise', 'Correct: poor communication and control raise unit costs.'],
      ['Larger orders to suppliers earn discounts, so unit costs begin to rise', 'Bulk discounts are an economy of scale.'],
      ['The firm spreads its fixed costs over more output, so unit costs rise', 'This lowers unit costs.'],
      ['Specialist machines make workers faster, so unit costs begin to rise', 'Specialist machines are an economy of scale.'],
    ], 0)),
    'u1-size-growth:7': ao(2, mc('Which pair is matched correctly?', [
      ['Takeover: one firm buys enough shares to control another', 'Correct.'],
      ['Merger: one firm is forced to leave the market by a larger rival', 'A merger is a joining together, usually by agreement.'],
      ['Organic growth: a firm buys another firm to gain its customers', 'That is external growth.'],
      ['Backward integration: a firm buys a shop that sells its products', 'That is forward integration.'],
    ], 0)),
    'u1-size-growth:c0.0': ao(3, mc('Firm X: 40 employees, $20m sales, mostly automated. Firm Y: 400 employees, $15m sales. Which statement is correct?', [
      ['Y is bigger by employees, but X is bigger by sales', 'Correct: the measure used changes the answer.'],
      ['Y is bigger on both measures, because it has ten times the staff', 'X has higher sales than Y.'],
      ['X is bigger on both measures, because automation always creates value', 'X has far fewer employees.'],
      ['They cannot be compared, because they use different production methods', 'Each measure can still be compared.'],
    ], 0)),
    'u1-size-growth:c1.0': ao(3, mc('A law firm and a car factory both employ 100 people. Which conclusion about their size is most reasonable?', [
      ['Using employees alone may mislead, since the factory is likely to use more capital', 'Correct: capital employed and sales could be very different.'],
      ['They are exactly the same size, because the number of employees is equal', 'Other measures can differ a lot.'],
      ['The law firm is bigger, because services are always larger than factories', 'There is no such rule.'],
      ['The factory is bigger, because factories always have more customers', 'Customer numbers are not given.'],
    ], 0)),
    'u1-size-growth:c2.0': ao(4, mc('A retailer with $8m sales wants to grow. Which motive is best justified by business reasoning?', [
      ['To gain economies of scale, such as bulk-buying discounts', 'Correct: a clear cost benefit.'],
      ['To remove all competition, so it can set prices without any limit', 'Competition rarely disappears and the law limits this.'],
      ['To avoid paying tax, because larger firms are taxed at a lower rate', 'Larger firms are not taxed less.'],
      ['To reduce risk to zero, because a large firm cannot make a loss', 'Large firms can fail.'],
    ], 0)),
    'u1-size-growth:c3.0': ao(4, mc('A restaurant could open a second branch from its own profit (about two years) or buy a rival café now using a loan. Which statement is best?', [
      ['Organic growth is slower but safer; the takeover is quicker but adds debt', 'Correct: a balanced comparison.'],
      ['The takeover is better in every way, since it gives more customers immediately', 'It also adds debt and integration risk.'],
      ['Organic growth is better in every way, since it avoids any extra costs', 'It is slower and has costs too.'],
      ['Neither is possible, since small firms cannot grow beyond one location', 'Small firms can grow.'],
    ], 0)),
    'u1-size-growth:c4.0': ao(3, mc('A national supermarket buys a regional supermarket chain. Which description and benefit fit best?', [
      ['Horizontal integration, giving an immediate rise in market share', 'Correct: same stage of production, same market.'],
      ['Vertical integration, giving more secure supplies of fresh food', 'Both are at the retail stage, so this is not vertical.'],
      ['Organic growth, giving slower but lower-risk expansion', 'Buying another firm is external growth.'],
      ['Diversification, giving protection from changes in one market', 'It stays in the same market.'],
    ], 0)),
    'u1-size-growth:c5.0': ao(4, mc('A chocolate maker can buy a cocoa farm for $4m, borrowing at 8% interest ($320,000 a year). Which is the best evaluation?', [
      ['Secure supply is valuable, but the interest is only worth paying if it saves more', 'Correct: compares the benefit with the cost.'],
      ['It must be a good decision, because owning suppliers always cuts costs', 'The saving has to be greater than the interest.'],
      ['It must be a bad decision, because borrowing is always too risky for a firm', 'Borrowing can be sensible if returns are higher.'],
      ['It is irrelevant to profit, because interest is not a business cost', 'Interest is a cost of the business.'],
    ], 0)),
    'u1-size-growth:c6.0': ao(3, mc('A hair salon has no plan to grow although the market is strong. Which reason is best justified?', [
      ['The owner values personal service and control, which growth could weaken', 'Correct: a non-financial objective.'],
      ['Growth is illegal for any business that has fewer than 5 staff', 'No such law exists.'],
      ['A salon cannot make a profit, so there is no money to expand with', 'The question says the market is strong.'],
      ['Customers never want more than one salon in an area to choose from', 'Unsupported.'],
    ], 0)),
    'u1-size-growth:c8.0': ao(3, mc('A toy company that merged with a rival now has slow decisions and communication errors between its two factories. Which statement is best?', [
      ['It is external growth, and the problems are signs of diseconomies of scale', 'Correct: merger is external growth; poor coordination raises costs.'],
      ['It is organic growth, and the problems are signs of economies of scale', 'A merger is external, and these problems are not economies.'],
      ['It is internal growth, and the problems show the rival was a poor choice', 'Merging is not internal growth.'],
      ['It is vertical integration, and the problems show a shortage of finance', 'Two toy makers at the same stage is horizontal.'],
    ], 0)),
    'u1-size-growth:c9.0': ao(3, mc('A bicycle repair shop earns steady profit and the owner values knowing every customer. Which is a likely cost of staying small?', [
      ['Higher cost per repair, because it cannot get bulk-buying discounts', 'Correct: a missed economy of scale.'],
      ['Lower profit per repair, because small firms must charge a lower price', 'No such rule applies.'],
      ['Greater risk of takeover, because all small firms are bought eventually', 'Not a certainty.'],
      ['Higher tax, because small firms pay more tax than large firms', 'Not true as a general rule.'],
    ], 0)),

    // ---------- Types of organisation ----------
    'u1-organisations:1': ao(3, mc('A franchisee has sales of $80,000 and pays a 6% royalty. How much is the royalty, and what do they get in return?', [
      ['$4,800, for the use of a proven brand and support', 'Correct: 6% × 80,000 = 4,800.'],
      ['$480, for the use of a proven brand and support', 'Calculation error: 6% of 80,000 is $4,800.'],
      ['$4,800, for a share of the franchisor’s profits', 'The franchisee does not receive the franchisor’s profits.'],
      ['$8,000, for ownership of the brand after the contract ends', 'The brand always belongs to the franchisor.'],
    ], 0)),
    'u1-organisations:2': ao(4, mc('A government wants more people to start businesses but they fear losing their homes if it fails. Which action best addresses this fear?', [
      ['Make it simple and cheap to register a private limited company', 'Correct: limited liability separates business and personal assets.'],
      ['Reduce the tax paid by sole traders on profit they make each year', 'A tax cut does not protect personal assets.'],
      ['Offer free business plan templates to anyone who asks for one', 'Helpful, but it does not change liability.'],
      ['Let partnerships share unlimited liability equally between partners', 'Partners still have unlimited liability.'],
    ], 0)),
    'u1-organisations:5': ao(2, mc('Which statement about a limited company is correct?', [
      ['It is a separate legal entity, and owners usually lose only what they invested', 'Correct.'],
      ['It is the same legal person as its owners, and they share all of its debts', 'That describes a sole trader or partnership.'],
      ['It can sell shares to the general public on the stock exchange only', 'Only a PLC can do that; private limited companies cannot.'],
      ['It must pay out all of its profit to its owners every year', 'Profit may be retained.'],
    ], 0)),
    'u1-organisations:6': ao(4, mc('Which reason is best supported for a person to reject a franchise offer?', [
      ['Royalties and strict rules may leave too little profit or freedom', 'Correct: costs and control are the main drawbacks.'],
      ['A franchise cannot use a well-known brand name in its advertising', 'It usually can; this is a main benefit.'],
      ['Franchisees must pay all of the franchisor’s own business debts', 'Debts of the franchisor are not the franchisee’s.'],
      ['The franchisee has to employ staff chosen by the franchisor’s customers', 'Not a feature of franchises.'],
    ], 0)),
    'u1-organisations:7': ao(3, mc('Two friends who have trusted each other for years want to share work, skills and start-up money. Which form of business is the most suitable?', [
      ['A partnership with a written agreement on shares and duties', 'Correct: simple, shared skills, with rules to avoid disputes.'],
      ['A PLC, so the public can invest money straight away', 'Costly and complex for two friends starting out.'],
      ['A sole trader, so that each friend has full control', 'Only one owner is allowed.'],
      ['A public sector body, so the government covers all losses', 'Public sector bodies are owned by the state.'],
    ], 0)),
    'u1-organisations:c0.0': ao(3, mc('Karim, a sole trader, owes a supplier $25,000 but his business assets are worth $10,000. What is the outcome?', [
      ['He is personally liable for the remaining $15,000', 'Correct: unlimited liability.'],
      ['The supplier loses the $15,000, because Karim’s liability is limited', 'A sole trader has unlimited liability.'],
      ['The government pays the $15,000, because small firms are protected', 'No such protection exists.'],
      ['The debt disappears when the business closes, because it is not a company', 'Debts remain with the owner.'],
    ], 0)),
    'u1-organisations:c1.0': ao(3, mc('Two partners disagree: one wants a $20,000 van and the other refuses. There is no written agreement. Which is the most likely problem?', [
      ['Decisions are slow and disputes can harm the business', 'Correct: shared decision-making without rules.'],
      ['The refusing partner is forced to pay for the van personally', 'No rule requires this.'],
      ['The business is automatically converted into a limited company', 'It does not happen automatically.'],
      ['The partner who wants the van takes full control of the business', 'Partners normally have equal say unless agreed.'],
    ], 0)),
    'u1-organisations:c2.0': ao(3, mc('Three friends each put $10,000 into a private limited company, which then fails owing $90,000. What is the most that each friend can lose?', [
      ['Their $10,000 share, because their liability is limited', 'Correct.'],
      ['$30,000, because the debts are divided equally between them', 'Each friend’s loss is limited to what they invested.'],
      ['$90,000, because owners must pay all debts of the company', 'That is unlimited liability.'],
      ['Nothing at all, because the company is a separate person', 'They can lose the money they invested.'],
    ], 0)),
    'u1-organisations:c3.0': ao(4, mc('A family-owned company becomes a PLC. Which is the strongest disadvantage for the family?', [
      ['Outsiders can buy shares and take control, and accounts must be published', 'Correct: loss of control and privacy.'],
      ['The company can no longer raise money by selling any shares at all', 'A PLC can sell shares publicly; that is the benefit.'],
      ['The family become personally responsible for all of the firm’s debts', 'A PLC has limited liability.'],
      ['The company is no longer allowed to make a profit for its owners', 'A PLC aims to make a profit.'],
    ], 0)),
    'u1-organisations:c5.0': ao(4, mc('A student can buy a franchised sandwich shop for $60,000 plus a 6% royalty. Which statement best weighs it up?', [
      ['A proven brand reduces risk, but royalties lower the profit kept', 'Correct: benefit and cost.'],
      ['Profit is guaranteed, so there is no reason to compare other options', 'Franchises can still fail.'],
      ['The student owns the brand, so the royalty is paid back at the end', 'The franchisor owns the brand.'],
      ['The student has total freedom to change the menu to suit local tastes', 'Franchisors usually set strict rules.'],
    ], 0)),
    'u1-organisations:c6.0': ao(3, mc('A mining firm and a council set up a joint venture to run a recycling plant. Which is the most likely problem?', [
      ['Disagreements over decisions and how to share profits', 'Correct: two organisations with different aims.'],
      ['The council must pay all the costs, because it is a public body', 'Costs are shared by agreement.'],
      ['The venture cannot trade, because public and private bodies cannot join', 'They can form joint ventures.'],
      ['The mining firm’s other businesses become public sector by joining', 'Ownership of its other businesses is unchanged.'],
    ], 0)),
    'u1-organisations:c7.0': ao(4, mc('A sole trader with $15,000 of savings wants a $90,000 expansion. Which statement best explains why a partner may help?', [
      ['A partner can bring money and skills, but profits are shared', 'Correct: benefit and cost.'],
      ['A partner removes personal liability, because debts are now shared', 'Partners still have unlimited liability.'],
      ['A partner means all decisions can still be made quickly alone', 'Decisions are now shared.'],
      ['A partner guarantees the firm will make more profit than before', 'No guarantee.'],
    ], 0)),
    'u1-organisations:c8.0': ao(4, mc('A private limited company is deciding whether to become a PLC to raise $5m. Which statement is best?', [
      ['A PLC could raise the money quickly, but owners risk losing control', 'Correct.'],
      ['Becoming a PLC is cheaper, because there are fewer legal rules', 'A PLC has more rules, not fewer.'],
      ['A PLC keeps the shares private, so control stays with the family', 'A PLC sells shares to the public.'],
      ['Only a PLC has limited liability, so it is the safer form', 'Private limited companies also have limited liability.'],
    ], 0)),
    'u1-organisations:c9.0': ao(4, mc('A franchisor’s brand is damaged when one franchisee serves poor food. Which advantage and disadvantage does this show?', [
      ['Fast growth using others’ money, but less control over quality', 'Correct.'],
      ['Lower royalties from all franchisees, but better control of quality', 'Royalties are not affected, and control is the problem.'],
      ['Ownership of every outlet, but higher start-up costs for each one', 'Franchisees own and fund their outlets.'],
      ['Guaranteed profit for franchisees, but fewer new outlets opening', 'Profit is not guaranteed.'],
    ], 0)),
    'u1-organisations:c10.0': ao(4, mc('A social enterprise reinvests its profit in training unemployed people. Which statement is the best evaluation?', [
      ['It meets its social aim and builds goodwill, but owners earn less', 'Correct.'],
      ['It will fail, because a business that does not aim for profit loses money', 'It can make a surplus and reinvest it.'],
      ['It is a public sector body, because it helps the community', 'It can be privately owned.'],
      ['It cannot pay staff, because its owners take no income', 'It can pay wages.'],
    ], 0)),

    // ---------- Objectives and stakeholders ----------
    'u1-objectives-stakeholders:1': ao(3, mc('Which objective is best, as a business target?', [
      ['Raise market share from 10% to 14% within two years', 'Correct: specific, measurable and has a deadline.'],
      ['Become one of the better known firms in the industry soon', 'Vague; no measure and no deadline.'],
      ['Try hard to improve customer satisfaction wherever possible', 'No way to know when it is achieved.'],
      ['Grow bigger than rivals when conditions turn out to allow it', 'No figure or timescale.'],
    ], 0)),
    'u1-objectives-stakeholders:2': ao(4, mc('A start-up’s aim is to survive, but growth needs a risky loan. Which statement is best?', [
      ['Wait until cash flow is secure, then borrow to grow', 'Correct: survival comes first.'],
      ['Take the loan at once, because growth always cuts the risk of failure', 'Debt raises the risk.'],
      ['Never borrow, because a firm that borrows cannot survive', 'Borrowing can be sound if repayable.'],
      ['Change the aim to maximising profit, because aims do not matter', 'Aims guide decisions.'],
    ], 0)),
    'u1-objectives-stakeholders:3': ao(3, mc('Which two groups are most likely to have opposing interests over a price rise?', [
      ['Owners, who want higher profit, and customers, who want lower prices', 'Correct.'],
      ['Owners, who want higher profit, and managers, who want higher sales', 'These usually agree.'],
      ['Customers, who want quality, and employees, who want job security', 'Not directly opposed.'],
      ['Suppliers, who want orders, and managers, who want reliable supply', 'These usually agree.'],
    ], 0)),
    'u1-objectives-stakeholders:5': ao(3, mc('A supplier lets a firm pay 30 days after delivery. Which business objective does this help most directly?', [
      ['Keeping enough cash in the business to pay its short-term bills', 'Correct: credit eases cash flow.'],
      ['Increasing market share in the long run by taking over competitors', 'Credit terms are about cash timing.'],
      ['Reducing the wages paid to employees across the whole business', 'Not linked.'],
      ['Meeting a social aim of helping the local community in need', 'Not linked.'],
    ], 0)),
    'u1-objectives-stakeholders:7': ao(2, mc('Which organisation is most likely to have social responsibility as a main objective?', [
      ['A social enterprise', 'Correct: social aims come first.'],
      ['A sole trader seeking profit', 'Likely to aim for profit.'],
      ['A PLC seeking to raise its share price', 'Likely to aim for growth and profit.'],
      ['A new partnership seeking survival', 'Likely to aim to survive first.'],
    ], 0)),
    'u1-objectives-stakeholders:c0.0': ao(3, mc('A business has survived two years and sales are strong. Which change in its objectives is most likely?', [
      ['A shift from survival to growth and profit', 'Correct.'],
      ['A shift from growth to survival', 'Survival is already achieved.'],
      ['A shift from profit to social aims only', 'No reason given.'],
      ['No objectives are now needed', 'All businesses need objectives.'],
    ], 0)),
    'u1-objectives-stakeholders:c1.0': ao(4, mc('A manager says: “We do not need objectives; we just serve customers.” Which reply is best justified?', [
      ['Without targets the firm cannot judge whether it is succeeding', 'Correct.'],
      ['Objectives are only needed for businesses that sell shares', 'All businesses need them.'],
      ['Serving customers is impossible for a firm that has objectives', 'No conflict.'],
      ['Objectives are set by the government for every firm', 'Firms set their own.'],
    ], 0)),
    'u1-objectives-stakeholders:c2.0': ao(4, mc('Owners want higher dividends, employees want a 10% pay rise and managers want bigger bonuses. What is the main reason these aims conflict?', [
      ['They all depend on the same pool of profit', 'Correct.'],
      ['They each need a different type of business organisation', 'Not the reason.'],
      ['They are all against the interests of customers', 'Not the reason.'],
      ['They all need the government to give permission', 'Not the reason.'],
    ], 0)),
    'u1-objectives-stakeholders:c3.0': ao(3, mc('A new supermarket will add traffic and noise to a quiet street but create 100 jobs. Which pair of groups have opposing interests?', [
      ['Local residents (quiet) and job seekers (employment)', 'Correct.'],
      ['The supermarket owners and the supermarket managers', 'Usually aligned.'],
      ['Job seekers and the local council wanting employment', 'Usually aligned.'],
      ['Shareholders and the employees who will be hired', 'Not directly opposed here.'],
    ], 0)),
  },

  add: {
    'u1-activity-sectors': [
      match('Match each business to the sector it operates in.', [
        ['A copper mine', 'Primary'],
        ['A furniture factory', 'Secondary'],
        ['A taxi company', 'Tertiary'],
      ], 'Primary extracts or grows; secondary makes or builds; tertiary provides a service.'),
      multi('Which of these are examples of CAPITAL as a factor of production? Select all that apply.', [
        ['A delivery van owned by a bakery', 'A machine or vehicle used to produce is capital.', true],
        ['An oven used to bake bread', 'Equipment used in production is capital.', true],
        ['The coal in a mine', 'Natural resources are land.', false],
        ['The skills of a trained chef', 'Human effort and skill are labour.', false],
      ], 'Capital means man-made goods used to produce other goods.'),
      cloze('Complete the definitions.', 'Added value is the difference between the ___ price of a product and the ___ costs of making it. Opportunity cost is the ___ best alternative given up.', ['selling', 'input', 'next'], ['total', 'fixed', 'worst']),
      short('Define the term “opportunity cost”.', {
        kind: 'Definition',
        points: ['The value of the next best alternative', 'that is given up (forgone) when a choice is made'],
        model: 'Opportunity cost is the next best alternative that is given up when a choice is made.',
      }),
      short('Explain one way a business can increase its added value.', {
        command: 'Explain',
        points: ['Raise the selling price (for example through branding or quality)', 'or cut the cost of inputs', 'Link: the gap between price and input cost gets bigger, so added value rises'],
        model: 'A business can raise its price by improving quality or branding. If costs stay the same, the gap between the selling price and the input costs widens, so added value rises.',
      }),
    ],
    'u1-enterprise': [
      cloze('Complete the sentence.', 'An entrepreneur organises the other factors of production and takes the ___ of running a business, hoping to earn ___.', ['risk', 'profit'], ['wages', 'interest']),
      multi('Which are typical qualities of a successful entrepreneur? Select all that apply.', [
        ['Willingness to take calculated risks', 'Starting a business involves risk.', true],
        ['Resilience after setbacks', 'New firms meet problems.', true],
        ['Ability to avoid all decisions', 'Entrepreneurs must decide.', false],
        ['A guarantee of government funding', 'Not a personal quality.', false],
      ]),
      short('Define the term “entrepreneur”.', {
        kind: 'Definition',
        points: ['A person who organises resources (land, labour, capital)', 'and takes the risk of starting or running a business'],
        model: 'An entrepreneur is a person who organises the factors of production and takes the risk of starting and running a business.',
      }),
    ],
    'u1-size-growth': [
      match('Match the term to its meaning.', [
        ['Organic growth', 'Growth from the firm’s own sales and profits'],
        ['Merger', 'Two firms agree to join and form one'],
        ['Takeover', 'One firm buys control of another'],
        ['Diseconomies of scale', 'Unit costs rise as the firm gets too large'],
      ]),
      cloze('Complete the sentence.', 'Buying a supplier is ___ integration; buying a rival at the same stage is ___ integration.', ['backward vertical', 'horizontal'], ['forward vertical', 'conglomerate']),
      short('Explain one economy of scale.', {
        command: 'Explain',
        points: ['A named economy (for example buying in bulk)', 'It lowers the average (unit) cost as output rises'],
        model: 'A large firm can buy materials in bulk and get a discount, so the average cost of each unit falls as output increases.',
      }),
    ],
    'u1-organisations': [
      match('Match each organisation to its main feature.', [
        ['Sole trader', 'One owner with unlimited liability'],
        ['Private limited company', 'Shares not sold to the public; limited liability'],
        ['PLC', 'Shares can be sold to the public'],
        ['Franchise', 'Uses another firm’s brand and pays a royalty'],
      ]),
      multi('Which statements about limited liability are true? Select all that apply.', [
        ['Shareholders can lose only the money they invested', 'This is what limited liability means.', true],
        ['Personal assets of owners are normally protected', 'The company is a separate legal entity.', true],
        ['The owners are personally responsible for all debts', 'This is unlimited liability.', false],
        ['It applies to sole traders and partnerships', 'They have unlimited liability.', false],
      ]),
      short('Define the term “unlimited liability”.', {
        kind: 'Definition',
        points: ['The owner is personally responsible for all the debts of the business', 'so personal assets could be lost to pay them'],
        model: 'Unlimited liability means the owner is personally responsible for all the business’s debts, so they could lose personal assets.',
      }),
    ],
    'u1-objectives-stakeholders': [
      match('Match each stakeholder to a typical objective.', [
        ['Shareholders', 'High dividends and a rising share price'],
        ['Employees', 'Good pay and job security'],
        ['Customers', 'Good quality at a fair price'],
        ['Local community', 'Jobs without pollution'],
      ]),
      short('Explain why two stakeholder groups might have conflicting objectives.', {
        command: 'Explain',
        points: ['Identify two groups and their aims (for example owners want profit, employees want higher pay)', 'Both draw on the same limited profit, so one group’s gain is the other’s loss'],
        model: 'Owners want high profit, while employees want higher pay. Wages are a cost, so paying more reduces profit and the two aims conflict.',
      }),
    ],
  },
};
