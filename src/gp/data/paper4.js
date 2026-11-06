// GP mock Paper 4 — Topic: Health and wellbeing. Issue: fast food, sugary drinks and young people's health.
// All sources, statements, questions, model answers and mark schemes are ORIGINAL practice material in the style
// of the Cambridge IGCSE 0457 Written Exam. Not real past papers; people, groups, studies and figures are invented.
// 70 marks.
import { P } from './marks.js';

export const paper4 = {
  id: 'gp-p4',
  title: 'Mock Paper 4 — Fast food and health',
  topic: 'Health and wellbeing',
  issue: 'Fast food, sugary drinks and young people’s health',
  minutes: 85,
  insert: {
    note: 'These sources are original practice material written for this app. The organisations, people, studies and figures are invented.',
    sources: [
      {
        id: 'Source 1', kind: 'Report', title: 'Healthy Futures — campaign briefing', byline: 'Healthy Futures, a public-health charity',
        paras: [
          'More young people than ever eat fast food and drink sugary drinks every day. Healthy Futures works in schools where many students buy cheap burgers, crisps and fizzy drinks instead of balanced meals.',
          'The charity argues the cause is not laziness but the way such food is sold: it is cheap, heavily advertised and sold everywhere, while fresh food is often pricier and harder to find. A consequence, it says, is rising tooth decay and weight problems, and tired, less focused students during the school day.',
          'Healthy Futures believes prevention is better than cure and that children should be protected from aggressive advertising. It wants a tax on sugary drinks and limits on junk-food adverts near schools, and it runs free after-school cooking clubs so students learn to prepare cheap, healthy meals.',
        ],
      },
      {
        id: 'Source 2', kind: 'Article', title: 'A high-street view', byline: 'Local newspaper, small shop owners',
        paras: [
          'On our high street, several worries compete. Fast food is cheap and quick, which matters to busy, low-income families, and small shops depend on selling it. At the same time, there is nowhere safe for young people to exercise, and traffic fumes make the area unpleasant.',
          'Some residents say poor diet is the most urgent problem. Others argue that the real issue is that fresh food is too expensive and that there are no parks or sports grounds, so blaming fast food alone is unfair.',
        ],
      },
      {
        id: 'Source 3', kind: 'Research', title: 'Drinks diary', byline: 'A student research project',
        paras: [
          'A student wanted to find out how common sugary drinks are among students. Research question: “How many students drink a sugary drink every day?”',
          'The student asked 25 classmates to write down everything they drank for one day. Eighteen of the twenty-five recorded at least one sugary drink. The classmates were chosen because they were in the student’s own class. The student plans to repeat the study with other classes later.',
        ],
        table: { caption: 'Drinks recorded in one day (25 students)', head: ['Drink', 'Students'], rows: [['Sugary fizzy drink', '18'], ['Water', '11'], ['Fruit juice', '7'], ['Energy drink', '4']] },
      },
    ],
    statements: {
      lead: 'Source 4 — two people give opposite views on the best way to improve young people’s diets.',
      a: { name: 'Priya', role: 'a dentist', paras: [
        'We should tax sugary drinks and limit junk-food adverts aimed at children. Price and advertising strongly shape what young people buy: when one country taxed sugary drinks, sales fell noticeably within a year. Children cannot be expected to resist constant, clever advertising, so clear rules are needed to protect them. We already limit adverts for things that harm children, so protecting their health in the same way is sensible and fair.',
      ] },
      b: { name: 'Marco', role: 'a nutrition coach', paras: [
        'Taxes and bans are the wrong approach. A sugar tax hits poor families hardest and teaches nobody anything, while banning adverts just treats people as if they cannot think for themselves. The real answer is education: teach young people to cook, read food labels and understand what they eat, so they make good choices for life. Give people knowledge and respect their freedom, rather than punishing them with higher prices.',
      ] },
    },
  },
  questions: [
    {
      n: 1, about: 'Sources 1 and 2',
      parts: [
        P('a', 'Identify', 'two consequences, from Source 1, of young people eating too much fast food.', 2,
          { points: [{ t: 'Any two of: tooth decay / weight problems / tired or less focused during the school day (1 each).', m: 2 }] },
          'One mark each — take the exact consequences named in the source.',
          'Two consequences named in Source 1 are rising tooth decay and students being tired and less focused during the school day.'),
        P('b', 'Identify', 'a prediction made by Healthy Futures in Source 1, and explain why it is a prediction.', 4,
          { points: [
            { t: 'Identifies a prediction, e.g. that prevention (a tax and advert limits) will reduce the problem (1).', m: 1 },
            { t: 'Explains it describes a future outcome (1)', m: 1 },
            { t: 'that has not happened yet and cannot be checked now (1)', m: 1 },
            { t: 'and depends on whether the measures are introduced, so it is uncertain (1).', m: 1 },
          ] },
          'A prediction is a claim about the future. Say what it is, then why it counts as a prediction.',
          'Healthy Futures predicts that preventing the problem — through a sugar tax and limits on advertising — will work better than treating ill health later. This is a prediction because it describes a future outcome that has not happened yet, so it cannot be checked now, and it depends on whether governments actually introduce the measures, which makes it uncertain.'),
        P('c', 'Analyse', 'Source 1. Describe the perspective of Healthy Futures towards fast food and young people.', 6,
          { levels: 'perspective6' },
          'Describe the charity’s viewpoint — issue, cause, consequence, values, aims, action — supported from the source. Do not give your own opinion.',
          'Healthy Futures sees heavy fast-food and sugary-drink consumption by young people as a health problem (issue). It identifies the cause not as laziness but as the way the food is sold — cheap, heavily advertised and everywhere, while fresh food is pricier and harder to find. The consequences it describes are rising tooth decay, weight problems and tired, less focused students. Its values are that prevention is better than cure and that children should be protected from aggressive advertising. Its aims are a tax on sugary drinks and limits on junk-food adverts near schools, and the action it takes is running free after-school cooking clubs.'),
        P('d', 'Explain', 'which issue facing the area, in Sources 1 and 2, you think is the most significant.', 6,
          { levels: 'significance6' },
          'Choose ONE issue (poor diet, cost of fresh food, or lack of places to exercise). Explain three or four reasons — scale, severity, how long effects last, who is affected.',
          'I think poor diet is the most significant issue. First, it affects a very large number of young people, since Source 1 says more than ever eat fast food daily. Second, the effects are serious and long-lasting: tooth decay and weight problems in youth can lead to disease later in life, shaping a person’s health for decades. Third, it also harms learning now, because tired, unfocused students do worse at school. Although Source 2 is right that expensive fresh food and a lack of parks matter, I judge poor diet as most significant because it affects the most people and its health effects last the longest — though the other issues are part of its cause.'),
      ],
    },
    {
      n: 2, about: 'Source 3',
      parts: [
        P('a', 'Evaluate', 'the research in Source 3. Explain its strengths and weaknesses.', 8,
          { levels: 'evaluate8' },
          'Explain how each point affects the quality of the evidence. Cover strengths AND weaknesses; use words like representative, biased, reliable, valid.',
          'A strength is the clear research question and the use of a drinks diary, which records what students actually drank rather than what they think they drink, so the data is fairly concrete and measurable. The result also shows a clear pattern, with most students recording a sugary drink. However, the weaknesses are serious. The sample is very small — only 25 students — and they were the researcher’s own classmates, a convenience sample that is not representative, so the result may not generalise to the whole school. The diary covers just one day, which may not be typical, and because students filled it in themselves they may have forgotten or hidden drinks, reducing validity. There is no repeat yet, so reliability is untested. Overall the study hints at a real pattern but, being small, one-day and self-reported, the evidence is weak and should not be treated as typical.'),
        P('b', 'Design', 'a plan to test the claim that “Most students at the school drink a sugary drink every day” (Source 3). Describe your methods and sources.', 6,
          { levels: 'design6' },
          'Name methods and credible sources and explain how each gathers evidence that tests THIS claim about students at the school.',
          'To test the claim I would survey a random sample of students from every year group, so the sample represents the whole school rather than one class; this directly tests what students in general drink. I would collect diaries over several days, not one, so a single unusual day does not distort the result and I can see whether drinking a sugary drink is really an everyday habit. To improve accuracy I would keep the diaries anonymous so students answer honestly. I could also check the school canteen’s sales records of sugary drinks, because that is real data that does not rely on memory. Using a random, multi-day, anonymous method plus canteen data would test the claim far more reliably than one class on one day.'),
      ],
    },
    {
      n: 3, about: 'Source 4',
      parts: [
        P('', 'Evaluate', 'the two arguments in Source 4. Which argument about how to improve young people’s diets is more convincing? Use the source to support your answer.', 16,
          { levels: 'argue16' },
          'Weigh BOTH people — reasons, evidence, language — quote short phrases, and conclude clearly on which is more convincing.',
          'Priya argues for a sugar tax and advert limits, while Marco argues for education instead. Priya’s reasoning is clear and backed by evidence: she notes that when one country taxed sugary drinks “sales fell noticeably within a year”, which is a strength because it is real evidence that price changes behaviour, making her case easier to believe. Her comparison that “we already limit adverts for things that harm children” is a strong analogy, because it shows protecting health this way is normal and accepted.\n\nMarco’s argument is also reasonable and raises a fair weakness in Priya’s plan: a sugar tax “hits poor families hardest”, which is a genuine drawback. His point that education helps people “make good choices for life” is sensible, because it addresses the long term. However, his argument is weaker on evidence — he offers no example that education alone changes behaviour, while Priya gives a concrete result. His claim that bans treat people “as if they cannot think for themselves” is more of an emotive appeal than a reason.\n\nBoth use calm, reasoned language. On balance I find Priya’s argument more convincing, because it is supported by evidence of real impact and tackles the cause Source 1 identifies — cheap, heavily advertised products — whereas Marco relies on assertion. That said, Marco’s warning about poorer families is important, so the most convincing overall approach might pair a tax with the education he recommends.'),
      ],
    },
    {
      n: 4, about: 'All the sources',
      parts: [
        P('', 'Recommend', 'ONE course of action Healthy Futures (Source 1) should take to improve young people’s diets, and justify it using the sources and your own ideas.', 22,
          { levels: 'action22' },
          'Choose one action. Explain its likely impact and consequences, weigh an alternative, use the sources and conclude clearly, linked to the aim.',
          'I recommend that Healthy Futures campaign for healthier, cheaper food in and around schools — for example working with the school to lower the price of water and fresh snacks and to move junk-food adverts away from the gates — alongside its cooking clubs. I choose this because Source 1 says the cause is that healthy food is pricier and harder to find while junk food is cheap and everywhere; changing what is available and advertised tackles that cause directly, and it answers Source 2’s point that fresh food is too expensive.\n\nThe likely impact is wide and fairly quick. If the cheapest, most visible choice at school becomes a healthier one, many students change what they buy without being forced, and Source 4 gives evidence that price strongly shapes choices. Pairing this with cooking clubs builds the knowledge Marco values in Source 4, so students also learn to eat well at home.\n\nI must weigh the consequences. Cheaper healthy food may cost the school or charity money, and small shops in Source 2 rely on junk-food sales, so there could be resistance. Changing the school environment also does not reach students once they leave the gates. So Healthy Futures should start inside schools, where it has most influence, while pressing for the wider sugar tax and advert limits over time.\n\nAn alternative would be to focus only on lobbying government for a sugar tax, as Priya suggests in Source 4. This could have a big national impact, but it is slow and, as Marco warns, can hit poor families hardest. On balance I recommend changing the school food environment plus cooking clubs now, because it has the most direct and immediate impact on the charity’s aim of healthier young people, while avoiding the heaviest cost to poorer families.'),
      ],
    },
  ],
};
