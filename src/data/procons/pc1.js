import { mc, tfd, scn, pc } from '../builders.js';

// Advantages & disadvantages cards for Units 1-2 (appended to the end of each lesson's cards).
export const pc1 = {
  'u1-size-growth': [
    pc('Internal vs external growth', [
      ['Internal (organic) growth', ['Lower risk and cost', 'Owners keep control and culture', 'Can be funded from retained profit'], ['Slow', 'Limited by available finance', 'May miss opportunities as rivals grow faster']],
      ['External growth (merger/takeover)', ['Instant increase in size and market share', 'Can remove a competitor or secure supplies/distribution', 'Quick access to new markets and skills'], ['Expensive', 'Culture clashes and management problems', 'Risk of diseconomies of scale']],
    ],
      mc('Which is an ADVANTAGE of internal growth?', [
        ['Lower risk and owners keep control', 'Correct.'],
        ['Instant increase in market share', 'That is an advantage of external growth.'],
        ['Risk of culture clash with a merged firm', 'That is a disadvantage of external growth.'],
        ['Very fast expansion', 'Internal growth is slow.'],
      ], 0)),
    pc('Staying small vs growing large', [
      ['Remaining small', ['Personal service and close customer relationships', 'Flexible and quick decisions', 'Owner keeps full control', 'Lower costs and less risk'], ['Fewer economies of scale', 'Difficulty raising finance', 'Vulnerable to larger competitors']],
      ['Growing large', ['Economies of scale', 'Greater market share and brand power', 'Spreads risk across products/markets'], ['Diseconomies of scale', 'Loss of control and personal touch', 'Needs more finance']],
    ],
      mc('A DISADVANTAGE of remaining small is…', [
        ['Fewer economies of scale', 'Correct.'],
        ['Loss of control by the owner', 'Small firms keep control.'],
        ['Poor communication across large sites', 'A large-firm problem.'],
        ['High risk from a huge workforce', 'A large-firm issue.'],
      ], 0)),
  ],

  'u1-organisations': [
    pc('Sole trader and partnership', [
      ['Sole trader', ['Full control and keeps all profit', 'Quick, simple and cheap to set up', 'Close contact with customers'], ['Unlimited liability', 'Limited finance and skills', 'Long hours, no continuity if the owner stops']],
      ['Partnership', ['More capital and a wider range of skills', 'Shared workload and decisions', 'Risk shared between partners'], ['Usually unlimited liability, even for a partner’s mistakes', 'Disagreements between partners', 'Profits must be shared']],
    ],
      mc('A DISADVANTAGE of a partnership compared with a sole trader is…', [
        ['Decisions and profits must be shared, and disputes may arise', 'Correct.'],
        ['The owner has more control', 'Control is shared.'],
        ['Less capital is available', 'Usually more capital.'],
        ['Limited liability', 'Partners normally have unlimited liability.'],
      ], 0)),
    pc('Private and public limited companies', [
      ['Private limited company (Ltd)', ['Limited liability protects personal assets', 'Can raise more capital than a sole trader/partnership', 'Owners control who buys shares'], ['Shares cannot be sold to the public', 'More legal paperwork and cost to set up', 'Profits shared with shareholders']],
      ['Public limited company (PLC)', ['Limited liability', 'Can raise very large sums by selling shares publicly', 'High status; shares easily traded'], ['Risk of takeover', 'Must publish accounts publicly', 'Pressure from shareholders for dividends; costly to set up']],
    ],
      mc('Which is a DISADVANTAGE of a PLC?', [
        ['Risk of takeover and the need to publish accounts', 'Correct.'],
        ['Unlimited liability', 'PLCs have limited liability.'],
        ['Cannot raise large capital', 'It can.'],
        ['Owners cannot sell their shares', 'Shares are easily traded.'],
      ], 0)),
    pc('Franchise: franchisee and franchisor', [
      ['Franchisee (buyer of the franchise)', ['Proven brand and customers from day one', 'Training and support from the franchisor', 'Lower risk of failure'], ['Pays a fee and a royalty on sales', 'Must follow the franchisor’s rules', 'Less freedom to innovate']],
      ['Franchisor (seller of the franchise)', ['Fast expansion using the franchisee’s capital', 'Receives fees and royalties', 'Franchisees are motivated owners'], ['Less control over quality and brand image', 'Shares some profit', 'One poor franchisee can damage the brand']],
    ],
      mc('A disadvantage of a franchise to the FRANCHISEE is…', [
        ['Paying fees and following strict rules', 'Correct.'],
        ['Unknown brand', 'The brand is proven.'],
        ['No support', 'Support is a benefit.'],
        ['Complete freedom to change products', 'Rules restrict this.'],
      ], 0)),
    pc('Joint ventures and social enterprises', [
      ['Joint venture', ['Shares costs, risks and expertise', 'Access to a partner’s local market knowledge', 'Can enter new markets more easily'], ['Disagreements between partners', 'Profits must be shared', 'Loss of some control']],
      ['Social enterprise', ['Achieves social or environmental aims', 'Profit is reinvested', 'Customer goodwill and possible grants'], ['Lower profits for owners', 'Harder to raise finance', 'Conflict between social and financial aims']],
    ],
      mc('Which is an ADVANTAGE of a joint venture?', [
        ['Costs and risks are shared', 'Correct.'],
        ['One partner controls everything', 'Control is shared.'],
        ['Profits are never shared', 'They are shared.'],
        ['No chance of disagreement', 'Disagreements are a risk.'],
      ], 0)),
  ],

  'u2-recruitment': [
    pc('Internal vs external recruitment', [
      ['Internal recruitment', ['Cheaper and quicker', 'Candidate already knows the business', 'Motivates existing staff with promotion chances'], ['Limited choice of candidates', 'Creates another vacancy', 'No new ideas or skills brought in']],
      ['External recruitment', ['Wider choice of candidates', 'New skills and fresh ideas', 'No vacancy created inside the firm'], ['More expensive and slower', 'Candidate is an unknown quantity', 'May demotivate staff passed over']],
    ],
      mc('Which is an ADVANTAGE of external recruitment?', [
        ['Brings in new skills and fresh ideas', 'Correct.'],
        ['Cheaper than internal recruitment', 'Usually costlier.'],
        ['Faster than internal recruitment', 'Usually slower.'],
        ['The candidate already knows the firm', 'That is internal.'],
      ], 0)),
    pc('Selection methods', [
      ['CV / application form', ['Quick first filter of many applicants', 'Shows qualifications and experience'], ['Self-reported, may be exaggerated', 'Does not show personality']],
      ['Interview', ['Two-way discussion; shows personality and communication', 'Can probe answers'], ['Time-consuming and costly', 'Interviewer bias']],
      ['Tests / assessment centres', ['Show real skills and teamwork', 'Fair comparison between candidates'], ['Expensive and time-consuming', 'Candidates may be nervous']],
      ['References', ['Independent evidence of past behaviour'], ['Referees may be biased; cannot confirm future performance']],
    ],
      mc('A DISADVANTAGE of interviews is…', [
        ['They are time-consuming and may suffer from interviewer bias', 'Correct.'],
        ['They show nothing about personality', 'They do.'],
        ['They are free', 'They cost time and money.'],
        ['They cannot be two-way', 'They are two-way.'],
      ], 0)),
  ],

  'u2-contracts-training': [
    pc('Types of training', [
      ['Induction training', ['New staff settle in quickly', 'Fewer early mistakes and accidents', 'Lower labour turnover'], ['Takes time away from work', 'Costs money, and only helps new starters']],
      ['On-the-job training', ['Cheap and practical', 'Staff are productive while learning', 'No travel needed'], ['Output may fall while learning', 'Trainer may pass on bad habits', 'Limited to skills available in the workplace']],
      ['Off-the-job training', ['Specialist trainers and wider skills', 'Can be recognised qualifications'], ['Expensive', 'Staff away from work, so output is lost', 'Skills may not fit the workplace']],
    ],
      mc('A DISADVANTAGE of off-the-job training is…', [
        ['It is costly and takes staff away from work', 'Correct.'],
        ['It is carried out only by untrained staff', 'Specialists usually train.'],
        ['It is always irrelevant', 'Often relevant.'],
        ['It is free', 'It costs money.'],
      ], 0)),
    pc('Contracts and legal controls', [
      ['Employment contracts', ['Clear duties, hours and pay for both sides', 'Legal protection and fewer disputes'], ['Admin time and cost to write', 'May limit flexibility to change terms']],
      ['Legal controls (unfair dismissal, discrimination, health and safety, minimum wage)', ['Employees protected, fairly paid and safe', 'Employers gain better morale and reputation'], ['Higher costs for employers (wages, equipment, training)', 'More paperwork; risk of fines or tribunals']],
    ],
      mc('How can a legal minimum wage be a DISADVANTAGE to an employer?', [
        ['It increases labour costs', 'Correct.'],
        ['It reduces staff motivation', 'It often raises it.'],
        ['It guarantees profits', 'No.'],
        ['It lets employers pay less', 'It sets a minimum, not a maximum.'],
      ], 0)),
  ],

  'u2-organisation-management': [
    pc('Tall vs flat structures', [
      ['Tall structure', ['Close supervision (narrow spans)', 'Clear promotion steps', 'Clear specialist roles'], ['Slow communication', 'Long chain of command', 'High management costs']],
      ['Flat structure', ['Fast communication and decisions', 'Lower management costs', 'Staff given more responsibility'], ['Managers may be overloaded (wide spans)', 'Fewer promotion opportunities', 'Less supervision']],
    ],
      mc('An ADVANTAGE of a flat structure is…', [
        ['Faster communication', 'Correct.'],
        ['Narrow spans of control', 'That is tall.'],
        ['Many promotion steps', 'That is tall.'],
        ['A long chain of command', 'That is tall.'],
      ], 0)),
    pc('Part-time vs full-time employees', [
      ['Part-time employees', ['Flexible: cover busy periods', 'Lower wage bill when business is quiet', 'Can suit students and parents'], ['Less commitment', 'More training and admin per hour', 'Less availability']],
      ['Full-time employees', ['More committed and experienced', 'Always available', 'Better customer relationships'], ['Cost even when business is quiet', 'Less flexibility', 'Higher pay and benefits cost']],
    ],
      mc('An ADVANTAGE of part-time staff to a business is…', [
        ['Flexibility to match staffing to busy periods', 'Correct.'],
        ['Greater long-term commitment', 'That is more typical of full-time.'],
        ['Lower admin costs per hour', 'Usually higher.'],
        ['Always more skilled', 'Not necessarily.'],
      ], 0)),
    pc('Delegation', [
      ['Delegation', ['Frees managers for important work', 'Motivates and develops employees', 'Faster decisions at lower levels'], ['Loss of control by the manager', 'Risk of mistakes', 'Staff need training and may feel overworked']],
    ],
      mc('A DISADVANTAGE of delegation is…', [
        ['Risk of mistakes and loss of control', 'Correct.'],
        ['Managers are kept too busy', 'Delegation frees time.'],
        ['Employees are demotivated', 'It usually motivates.'],
        ['Slower decisions', 'Often faster.'],
      ], 0)),
    pc('Leadership styles', [
      ['Autocratic', ['Fast decisions and clear direction', 'Good in emergencies and for unskilled staff'], ['Demotivates staff', 'Ignores employees’ ideas', 'High labour turnover']],
      ['Democratic', ['Motivates through involvement', 'Better decisions from shared ideas'], ['Slower decision making', 'Disagreements; may be too much discussion']],
      ['Laissez-faire', ['Freedom suits skilled, self-motivated staff', 'Encourages creativity'], ['Lack of direction and control', 'Poor results with unskilled staff']],
    ],
      mc('Which is a DISADVANTAGE of autocratic leadership?', [
        ['It demotivates staff because their ideas are ignored', 'Correct.'],
        ['Decisions are very slow', 'Decisions are fast.'],
        ['It lets staff decide everything', 'That is laissez-faire.'],
        ['It encourages creativity', 'That is a laissez-faire benefit.'],
      ], 0)),
  ],

  'u2-communication': [
    pc('Methods of communication (1)', [
      ['Meetings (face-to-face or virtual)', ['Two-way discussion and instant feedback', 'Personal; good for complex or sensitive issues'], ['Time-consuming and costly', 'Hard to arrange for large groups']],
      ['Email', ['Fast and cheap', 'Written record; can reach many people at once'], ['Impersonal and may be ignored', 'Overload; security risks']],
      ['Text messages', ['Very fast and cheap', 'Short and direct'], ['Informal; limited detail', 'May be misunderstood; no formal record']],
    ],
      mc('A DISADVANTAGE of email is…', [
        ['It can be impersonal and employees may be overloaded', 'Correct.'],
        ['It is very slow', 'It is fast.'],
        ['It gives no written record', 'It gives a record.'],
        ['It is very expensive', 'It is cheap.'],
      ], 0)),
    pc('Methods of communication (2)', [
      ['Social media', ['Wide reach quickly and cheaply', 'Interactive with customers'], ['Not private or secure', 'Messages can spread uncontrollably']],
      ['Phone calls', ['Immediate two-way discussion', 'Personal tone'], ['No written record', 'Cost for international calls; person may be unavailable']],
      ['Letters', ['Formal with a written record', 'Suitable for legal or official messages'], ['Slow and costly', 'No instant feedback']],
      ['Posters and noticeboards', ['Cheap and visible to many people', 'Good for general information'], ['One-way only', 'May be ignored; not private']],
    ],
      mc('A DISADVANTAGE of letters is…', [
        ['They are slow and give no instant feedback', 'Correct.'],
        ['They give no written record', 'They give a record.'],
        ['They are private to everyone', 'Not a feature.'],
        ['They reach thousands instantly', 'They do not.'],
      ], 0)),
  ],

  'u2-motivation': [
    pc('Financial methods of motivation', [
      ['Piece-rate', ['Rewards output; encourages productivity', 'Easy to calculate'], ['Quality may fall', 'Not suitable where output cannot be counted', 'Income varies']],
      ['Salary', ['Secure, regular income', 'Suits jobs where output is hard to measure'], ['No direct link to performance', 'May not motivate extra effort']],
      ['Commission and bonus', ['Reward sales/results directly', 'Encourage extra effort'], ['Pressure and stress', 'Income uncertain; may cause unethical selling']],
      ['Profit sharing', ['Encourages teamwork and loyalty', 'Staff care about business success'], ['Depends on profit, which staff cannot fully control', 'Delayed reward']],
    ],
      mc('A DISADVANTAGE of piece-rate pay is…', [
        ['Quality may suffer as workers rush', 'Correct.'],
        ['Pay is guaranteed regardless of output', 'That is salary.'],
        ['It cannot be calculated', 'It is easy to calculate.'],
        ['It rewards no effort', 'It rewards output.'],
      ], 0)),
    pc('Non-financial methods of motivation', [
      ['Job enrichment', ['More challenge and responsibility', 'Raises job satisfaction'], ['Needs training', 'May not suit everyone']],
      ['Job rotation', ['Variety reduces boredom', 'Staff gain a range of skills'], ['Training costs; disruption', 'May not raise skills for repetitive jobs']],
      ['Training and promotion', ['Skills and career growth', 'Lower labour turnover'], ['Costly; trained staff may leave', 'Limited promotion places']],
      ['Praise / employee of the month', ['Cheap and quick', 'Recognition raises morale'], ['May not satisfy those wanting pay', 'Can seem insincere']],
    ],
      mc('Which is an ADVANTAGE of job rotation?', [
        ['It reduces boredom and builds a range of skills', 'Correct.'],
        ['It ends the need for training', 'It may need training.'],
        ['It pays staff per unit', 'That is piece-rate.'],
        ['It removes all supervision', 'No.'],
      ], 0)),
  ],
};
