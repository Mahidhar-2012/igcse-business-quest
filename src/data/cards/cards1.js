import { mc, ord, scn, calc, tfd, card } from '../builders.js';

// Unit 1 knowledge bytes. Each card is followed by test question(s) on exactly that byte.
export const cards1 = {
  'u1-activity-sectors': [
    card('Factors of production', [
      '**Land** = natural resources (soil, oil, water, forests). Reward: rent.',
      '**Labour** = human effort and skills. Reward: wages.',
      '**Capital** = man-made aids (machines, tools, buildings). Reward: interest.',
      '**Enterprise** = the risk-taker who organises the other three. Reward: profit.',
    ],
      mc('Which factor of production earns PROFIT as its reward?', [
        ['Land', 'Land earns rent.'],
        ['Labour', 'Labour earns wages.'],
        ['Capital', 'Capital earns interest.'],
        ['Enterprise', 'Correct: the entrepreneur takes the risk and earns profit.'],
      ], 3)),
    card('Adding value', [
      '**Added value** = selling price − cost of inputs.',
      'Raise it by branding, better design, higher quality, better service or cutting input costs (without hurting quality).',
      'A business must add value to make a profit.',
    ],
      tfd('If a firm cuts input costs but keeps the same price and quality, its added value rises.', 'true', 'Same selling price minus lower input cost = bigger gap = more added value.')),
    card('Opportunity cost', [
      'Resources are limited, so every choice means giving something up.',
      '**Opportunity cost** = the NEXT BEST alternative you give up (not the money spent).',
    ],
      mc('A council has $5m. It can build a school, a hospital or a sports centre (in order of benefit). It builds the school. What is the opportunity cost?', [
        ['The $5m', 'Money spent is not the opportunity cost.'],
        ['The hospital', 'Correct: the next best alternative forgone.'],
        ['The hospital and the sports centre', 'Only the single next best option counts.'],
        ['There is none', 'Every choice has an opportunity cost.'],
      ], 1)),
    card('Primary, secondary and tertiary sectors', [
      '**Primary**: extracts or grows raw materials (farming, mining, fishing, oil).',
      '**Secondary**: manufactures or builds (factories, construction).',
      '**Tertiary**: provides services (retail, banking, transport, education).',
      'As countries develop, the tertiary sector usually grows.',
    ],
      mc('Which business is in the TERTIARY sector?', [
        ['A wheat farm', 'Primary.'],
        ['A car factory', 'Secondary.'],
        ['A bank', 'Correct: banking is a service.'],
        ['A copper mine', 'Primary.'],
      ], 2)),
    card('Private and public sector', [
      '**Private sector**: owned by individuals or companies; main aim is usually profit.',
      '**Public sector**: owned and controlled by the government (state schools, hospitals, public transport); aim is to provide services.',
    ],
      mc('Which is a PUBLIC sector organisation?', [
        ['A family-owned restaurant', 'Private.'],
        ['A state-run hospital', 'Correct: owned by the government.'],
        ['A listed supermarket company', 'Private.'],
        ['A sole trader’s shop', 'Private.'],
      ], 1)),
  ],

  'u1-enterprise': [
    card('The entrepreneur', [
      'An **entrepreneur** organises resources and takes risks to start a business.',
      'Typical qualities: risk-taker, creative/innovative, determined, hard-working, confident, good leader, willing to learn from failure.',
    ],
      mc('An entrepreneur’s first product fails, but she learns from it and launches an improved one. Which quality does this show?', [
        ['Determination (resilience)', 'Correct: keeps going after setbacks.'],
        ['Laziness', 'Not shown.'],
        ['Avoiding risk', 'She is taking risk again.'],
        ['Government support', 'Not a personal quality.'],
      ], 0)),
    card('What goes in a business plan', [
      'Eight key sections: **summary/overview, objectives, resources, market research, marketing, finance, people, operations**.',
      'Finance = cash flow forecast and funding needed. People = staff and skills. Operations = production, suppliers, location.',
    ],
      mc('Which business plan section explains staff numbers and their skills?', [
        ['Finance', 'Covers money.'],
        ['People', 'Correct.'],
        ['Marketing', 'Covers promotion, price, etc.'],
        ['Operations', 'Covers how goods/services are produced.'],
      ], 1)),
    card('Why a business plan matters', [
      'Gives clear **direction and targets**.',
      '**Persuades lenders and investors** that the idea is viable.',
      'Spots problems early and lets the owner measure progress.',
      'It improves the odds but does NOT guarantee success.',
    ],
      mc('A start-up’s main reason for writing a plan before approaching a bank is to…', [
        ['Persuade the bank the idea is viable and repayable', 'Correct.'],
        ['Avoid paying tax', 'Not its purpose.'],
        ['Guarantee a loan', 'No plan guarantees this.'],
        ['Replace market research', 'Research is a section of the plan.'],
      ], 0)),
    card('Why governments support start-ups', [
      'New firms **create jobs** and reduce unemployment.',
      'They produce **tax revenue**, more competition, innovation and economic growth.',
    ],
      mc('Which is a reason governments support new businesses?', [
        ['To reduce unemployment and raise tax revenue', 'Correct.'],
        ['To raise prices', 'Not the aim.'],
        ['To limit competition', 'Governments generally want more competition.'],
        ['To cut exports', 'Not the aim.'],
      ], 0)),
    card('How governments support start-ups', [
      '**Grants**: money that does not have to be repaid.',
      '**Low-cost loans**: borrowing at cheaper interest.',
      '**Advice** and mentoring; **training schemes** for skills.',
    ],
      mc('How does a government GRANT differ from a low-cost loan?', [
        ['A grant does not have to be repaid', 'Correct.'],
        ['A grant must be repaid with interest', 'That describes a loan.'],
        ['A grant is only advice', 'Advice is non-financial.'],
        ['There is no difference', 'They differ in repayment.'],
      ], 0)),
  ],

  'u1-size-growth': [
    card('Measuring business size', [
      'Methods: **number of employees, value of sales/output, volume of output, capital employed**.',
      '**Profit is NOT a measure of size.**',
    ],
      mc('Which is a valid way to measure business size?', [
        ['Capital employed', 'Correct.'],
        ['Profit', 'Profit is not a size measure.'],
        ['Number of complaints', 'Not a size measure.'],
        ['Advertising budget', 'Not a size measure.'],
      ], 0)),
    card('Problems when measuring size', [
      'Industries differ: a **capital-intensive** firm (e.g. oil refinery) has few staff but huge output.',
      'Sales can be seasonal; currencies and countries are hard to compare; part-timers and outsourcing blur employee numbers.',
    ],
      mc('Why can comparing a car factory and a law firm by employees mislead?', [
        ['The factory uses far more machines/capital per employee', 'Correct: headcount hides true scale.'],
        ['Law firms have no staff', 'They do.'],
        ['Employees cannot be counted', 'They can.'],
        ['Cars cost nothing', 'Irrelevant.'],
      ], 0)),
    card('Why owners want to grow', [
      'More **profit** and a bigger **market share**.',
      '**Economies of scale** (lower unit costs).',
      'Spreading risk by selling more products or in more markets; survival against rivals; owner’s prestige.',
    ],
      mc('Which is a reason owners may want their business to grow?', [
        ['To benefit from economies of scale', 'Correct.'],
        ['To avoid all competition', 'Growth does not remove rivals.'],
        ['To reduce market share', 'Opposite.'],
        ['To pay less tax by law', 'Not a general reason.'],
      ], 0)),
    card('Internal (organic) growth', [
      'Growth from within: **new products, new markets, more outlets**.',
      '+ Slower but lower risk, owner keeps control, funded from retained profit.',
      '− Slow; may miss opportunities.',
    ],
      tfd('Internal growth gives instant size, like a takeover does.', 'false', 'Internal growth is gradual; external growth (merger/takeover) is instant.')),
    card('External growth: mergers and takeovers', [
      '**Merger**: two firms agree to join. **Takeover**: one firm buys another.',
      '**Horizontal**: same stage of production (two bakeries).',
      '**Vertical backward**: buy a supplier. **Vertical forward**: buy a distributor/retailer.',
    ],
      mc('A supermarket chain buys a farm that supplies its vegetables. This is…', [
        ['Horizontal integration', 'Different stages of the chain.'],
        ['Vertical backward integration', 'Correct: buying a supplier.'],
        ['Vertical forward integration', 'Forward = distributor/retailer.'],
        ['Organic growth', 'It is a takeover, so external.'],
      ], 1)),
    card('Advantages and disadvantages of growth', [
      '+ Economies of scale, more market share, spread risk, stronger brand.',
      '− **Diseconomies** (poor communication, loss of control), need for finance, culture clashes after mergers.',
    ],
      mc('Which is a problem linked to growth?', [
        ['Loss of control and poorer communication', 'Correct: diseconomies of scale.'],
        ['Guaranteed lower costs', 'Not guaranteed.'],
        ['No need for more finance', 'Usually needs more.'],
        ['Fewer managers needed', 'Usually more.'],
      ], 0)),
    card('Why some businesses stay small', [
      'Niche or personal-service markets (hairdresser, local café).',
      'Owner wants control or a simple lifestyle.',
      'Limited finance or a small local market.',
    ],
      mc('Which firm is MOST likely to stay small?', [
        ['A personalised home-tailoring service', 'Correct: personal service limits scale.'],
        ['A car manufacturer', 'Needs large scale.'],
        ['A global bank', 'Large by nature.'],
        ['An online marketplace', 'Aims to scale.'],
      ], 0)),
    card('Why businesses succeed or fail', [
      '**Success**: good management skills, enough finance, suitable product, strong demand, favourable economy, manageable competition.',
      '**Failure**: poor management, **running out of cash**, unsuitable product, falling demand, recession, strong competition.',
    ],
      mc('A new restaurant has great food but runs out of cash after 4 months. Which cause of failure is this?', [
        ['Lack of finance/poor cash management', 'Correct.'],
        ['Too much demand', 'Not the issue.'],
        ['Economic boom', 'Not the issue.'],
        ['Government grants', 'Not the issue.'],
      ], 0)),
  ],

  'u1-organisations': [
    card('Sole trader', [
      'One owner (may employ staff). **Unlimited liability**: personal assets are at risk.',
      '+ Full control, keeps all profit, cheap and easy to set up.',
      '− Limited finance, long hours, no one to share risk, ends if owner stops.',
    ],
      mc('A key disadvantage of a sole trader is…', [
        ['Unlimited liability', 'Correct: debts can reach personal assets.'],
        ['Sharing profit with partners', 'Sole traders keep all profit.'],
        ['Complex legal set-up', 'Very simple.'],
        ['Loss of control', 'The owner keeps control.'],
      ], 0)),
    card('Partnership', [
      'Two or more owners who share profits, decisions and (usually) **unlimited liability**.',
      '+ More capital and skills, shared workload.',
      '− Disagreements, shared profit, partners liable for each other’s decisions.',
    ],
      mc('Which is an advantage of a partnership over a sole trader?', [
        ['More capital and a wider range of skills', 'Correct.'],
        ['Limited liability always', 'Usually unlimited.'],
        ['No disagreements', 'Disputes are a risk.'],
        ['Keeps all profit', 'Profit is shared.'],
      ], 0)),
    card('Private limited company (Ltd)', [
      'Owned by **shareholders**; **limited liability** (can lose only what they invested).',
      'Shares are sold **privately**, e.g. to family or friends, not on the stock exchange.',
      '+ Protects personal assets, can raise more capital. − Less control, more paperwork.',
    ],
      mc('Who decides who can buy shares in a private limited company?', [
        ['The existing owners/directors', 'Correct: shares are not offered to the public.'],
        ['Anyone via the stock exchange', 'That is a PLC.'],
        ['The government', 'No.'],
        ['The customers', 'No.'],
      ], 0)),
    card('Public limited company (PLC)', [
      'Shares are sold to the **public on the stock exchange**; limited liability.',
      '+ Can raise very large sums, high status.',
      '− Risk of **takeover**, must publish accounts, pressure for dividends, costly to set up.',
    ],
      mc('A disadvantage of being a PLC is…', [
        ['It can be taken over by buying its shares', 'Correct.'],
        ['Unlimited liability', 'PLCs have limited liability.'],
        ['Cannot raise large capital', 'It can.'],
        ['Keeps accounts secret', 'It must publish them.'],
      ], 0)),
    card('Choosing the right business type', [
      'Small, low-risk, wants full control → **sole trader**.',
      'Needs skills/capital from others → **partnership**.',
      'Wants to protect personal assets → **private limited company**.',
      'Needs huge capital for expansion → **PLC**.',
    ],
      scn('Two dentists want to open a clinic together, share skills and keep outside investors out, but want personal protection if it fails.', [
        ['Partnership', 'Shared skills, but unlimited liability exposes personal assets.', false],
        ['Private limited company', 'Limited liability and they control who owns shares.', true],
      ], 'Match the form to needs: control, capital and risk.')),
    card('Franchises', [
      'The **franchisee** pays an initial fee and a **royalty** to use the **franchisor’s** brand and system.',
      'Franchisee +: proven brand, training, support. −: fees, strict rules, less freedom.',
      'Franchisor +: fast growth with others’ money, fee income. −: less control over quality, shares profit.',
    ],
      mc('Which is a disadvantage for the FRANCHISOR?', [
        ['Less control over the quality delivered by franchisees', 'Correct.'],
        ['Paying fees to franchisees', 'Franchisees pay the franchisor.'],
        ['Slow expansion', 'Franchising is fast.'],
        ['Unproven brand', 'That is a franchisee’s risk with a new franchise.'],
      ], 0)),
    card('Joint ventures and social enterprises', [
      '**Joint venture**: two or more firms set up a project together. + share costs, risk and expertise. − disagreements, shared profit.',
      '**Social enterprise**: sells goods/services mainly to achieve a social or environmental aim; profits are reinvested.',
    ],
      mc('What is the main aim of a social enterprise?', [
        ['A social or environmental goal, reinvesting profits', 'Correct.'],
        ['Maximum dividends for shareholders', 'Not its main aim.'],
        ['Avoid earning revenue', 'It does earn revenue.'],
        ['Government ownership', 'That is public sector.'],
      ], 0)),
  ],

  'u1-objectives-stakeholders': [
    card('Business objectives', [
      'Common objectives: **survival, growth, profit, market share** (also social or ethical aims).',
      'Businesses can have several at once, and they change over time (new firm → survival; established firm → growth).',
    ],
      mc('Which objective is MOST likely for a brand-new business?', [
        ['Survival', 'Correct.'],
        ['Becoming market leader', 'Later.'],
        ['Entering 20 countries', 'Later.'],
        ['Paying large dividends', 'Unlikely at start.'],
      ], 0)),
    card('Why objectives matter', [
      'Give **direction** and targets for everyone.',
      'Let the business **measure success** and compare results.',
      'Keep decisions consistent and motivate staff.',
    ],
      tfd('Objectives help a business measure whether it has been successful.', 'true', 'Results can be compared with targets.')),
    card('Internal stakeholders', [
      '**Owners**: profit, growth, return on investment.',
      '**Managers**: salary, status, business success.',
      '**Employees**: pay, job security, good conditions.',
    ],
      mc('Which stakeholder MOST wants job security and fair pay?', [
        ['Employees', 'Correct.'],
        ['Customers', 'Want quality and low prices.'],
        ['Lenders', 'Want repayment.'],
        ['Government', 'Wants taxes and jobs.'],
      ], 0)),
    card('External stakeholders', [
      '**Customers**: quality, value, safety. **Suppliers**: regular orders, prompt payment.',
      '**Lenders/banks**: repayment with interest. **Government**: taxes, jobs, law-abiding.',
      '**Local community**: jobs, less pollution and noise.',
    ],
      mc('Which stakeholder is MOST concerned about being repaid with interest?', [
        ['Lenders/banks', 'Correct.'],
        ['Employees', 'Pay and security.'],
        ['Customers', 'Quality and price.'],
        ['Local community', 'Environment and jobs.'],
      ], 0)),
    card('Stakeholder conflicts', [
      'Objectives can clash: **owners want profit vs employees want higher pay**.',
      'Customers want low prices vs owners want high profit; the community wants less pollution vs the firm wants lower costs.',
      'Managers must weigh and compromise.',
    ],
      mc('Which pair is MOST likely to conflict?', [
        ['Owners wanting profit and employees wanting higher wages', 'Correct: same money.'],
        ['Customers and suppliers both wanting survival', 'Shared aim.'],
        ['Managers and owners both wanting success', 'Aligned.'],
        ['Government and community both wanting jobs', 'Aligned.'],
      ], 0)),
  ],
};
