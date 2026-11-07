// GP mock Paper 5 — Topic: Migration and urbanisation. Issue: rapid growth of a city as people move from the countryside.
// All sources, statements, questions, model answers and mark schemes are ORIGINAL practice material in the style
// of the Cambridge IGCSE 0457 Written Exam. Not real past papers; people, groups, studies and figures are invented.
// 70 marks.
import { P } from './marks.js';

export const paper5 = {
  id: 'gp-p5',
  title: 'Mock Paper 5 — People moving to the city',
  topic: 'Migration and urbanisation',
  issue: 'Managing the rapid growth of a city',
  minutes: 85,
  insert: {
    note: 'These sources are original practice material written for this app. The organisations, people, studies and figures are invented.',
    sources: [
      {
        id: 'Source 1', kind: 'Report', title: 'City Futures — briefing', byline: 'City Futures, an urban-planning group',
        paras: [
          'Every year thousands of people move from the countryside into our growing city. Most come as young adults looking for paid work, hoping for better wages, schools and healthcare than their villages can offer.',
          'City Futures says this brings real opportunity but also strain. New arrivals often cannot find affordable homes, so crowded informal settlements spread, and the roads, buses and water supply struggle to serve so many people. Meanwhile some villages lose most of their young people.',
          'The group believes everyone deserves decent housing and basic services, and that cities should be planned for the people who live in them. It wants governments to invest in affordable housing and public transport in the city, and in jobs and services in rural areas so that fewer people are forced to leave. It runs community planning workshops so residents can shape their neighbourhoods.',
        ],
      },
      {
        id: 'Source 2', kind: 'Article', title: 'Two neighbourhoods', byline: 'City newspaper',
        paras: [
          'Across the city, worries differ. Newcomers in the fast-growing settlements struggle most with finding a home and with clean, safe water. Longer-term residents complain about crowded buses and rising rents. Out in the villages, families watch their young people leave and fear being left behind.',
          'Some people say housing is the most urgent issue the city faces. Others argue that the real problem is the lack of rural jobs, because that is what drives people to leave their villages in the first place.',
        ],
      },
      {
        id: 'Source 3', kind: 'Research', title: 'Bus-station survey', byline: 'A student research project',
        paras: [
          'A student wanted to find out why people move to the city. Research question: “Why do people move from the countryside to the city?”',
          'The student spent one morning at the main bus station and asked 30 people who had just arrived why they had come. Twenty-two said “for work”. The people asked were simply those arriving by bus that morning. The student plans to repeat the survey elsewhere later.',
        ],
        table: { caption: 'Main reason given for moving (30 new arrivals)', head: ['Reason', 'People'], rows: [['For work', '22'], ['To join family', '4'], ['For school or study', '3'], ['Other', '1']] },
      },
    ],
    statements: {
      lead: 'Source 4 — two people give opposite views on the best way to manage the city’s rapid growth.',
      a: { name: 'Leila', role: 'a city planner', paras: [
        'We must build affordable housing and better public transport in the city. People will keep coming for work whatever we do, so the sensible choice is to plan for them properly. When one city built cheap flats and new bus routes, its overcrowded settlements began to shrink and journeys became easier for everyone. Trying to stop people moving never works; managing the growth well does, and it treats newcomers with dignity.',
      ] },
      b: { name: 'Sam', role: 'a rural development worker', paras: [
        'The answer is to invest in the countryside so that people do not need to leave. If villages had better jobs, schools and clinics, families would stay where they are. Cities simply cannot build homes and roads fast enough to keep up, so we should fix the cause, not the symptom. Keeping rural communities alive is better for the villages and takes the pressure off the city at the same time.',
      ] },
    },
  },
  questions: [
    {
      n: 1, about: 'Sources 1 and 2',
      parts: [
        P('a', 'Identify', 'two reasons, from Source 1, why people move from the countryside to the city.', 2,
          { points: [{ t: 'Any two of: to find paid work / better wages / better schools / better healthcare (1 each).', m: 2 }] },
          'One mark each — take the exact reasons named in the source.',
          'Two reasons from Source 1 are to find paid work and to get better schools and healthcare than their villages offer.'),
        P('b', 'Identify', 'a value held by City Futures in Source 1, and explain how it shapes what the group wants.', 4,
          { points: [
            { t: 'Identifies a value, e.g. everyone deserves decent housing and services / cities should be planned for people (1).', m: 1 },
            { t: 'Links the value to an aim (1)', m: 1 },
            { t: 'e.g. because it values decent housing for all, it wants investment in affordable homes and transport (1)', m: 1 },
            { t: 'and acts on it by running community planning workshops (1).', m: 1 },
          ] },
          'Name the value, then show how it leads to what the group asks for and does.',
          'City Futures values the idea that everyone deserves decent housing and services, and that cities should be planned for the people who live in them. This value shapes its aims: because it believes in decent housing for all, it wants governments to invest in affordable homes and public transport, and in rural areas so fewer people must leave; and it acts on the value by running community planning workshops so residents can shape their own neighbourhoods.'),
        P('c', 'Analyse', 'Source 1. Describe the perspective of City Futures towards the growth of the city.', 6,
          { levels: 'perspective6' },
          'Describe the group’s viewpoint — issue, cause, consequence, values, aims, action — supported from the source. Do not give your own opinion.',
          'City Futures sees the rapid growth of the city as both an opportunity and a strain (issue). It identifies the cause as people moving from the countryside for work, better wages, schools and healthcare. The consequences it describes are a shortage of affordable homes, the spread of crowded informal settlements, pressure on roads, buses and water, and villages losing their young people. Its values are that everyone deserves decent housing and services and that cities should be planned for their residents. Its aims are investment in affordable housing and transport in the city and in jobs and services in rural areas, and the action it takes is running community planning workshops.'),
        P('d', 'Explain', 'which issue facing the city, in Sources 1 and 2, you think is the most significant.', 6,
          { levels: 'significance6' },
          'Choose ONE issue (housing, clean water, crowded transport, or lost rural jobs). Explain three or four reasons — scale, severity, how long effects last, who is affected.',
          'I think the shortage of affordable housing is the most significant issue. First, it affects huge numbers of people, since Source 1 says crowded informal settlements are spreading as thousands arrive each year. Second, it is severe, because without a decent home families also struggle for clean water and safety, so housing shapes many other needs. Third, its effects are long-lasting, as settlements built without planning are hard to improve later. Although Source 2 is right that lost rural jobs are the underlying cause, I judge housing as most significant because it is where the strain hits most people most directly, every day, in the place they have moved to.'),
      ],
    },
    {
      n: 2, about: 'Source 3',
      parts: [
        P('a', 'Evaluate', 'the research in Source 3. Explain its strengths and weaknesses.', 8,
          { levels: 'evaluate8' },
          'Explain how each point affects the quality of the evidence. Cover strengths AND weaknesses; use words like representative, biased, reliable, valid.',
          'A strength is the clear research question and the fact that the student asked people directly, so the answers come first-hand from those who actually moved, which makes them relevant. The result also shows a strong pattern, with most giving work as the reason. However, the weaknesses are serious. The sample is small and taken at one bus station on one morning, so it is not representative — people who arrive by other transport, or at other times, are missed, which biases the result. Only new arrivals were asked, not people who stayed in their villages or who left for other reasons, so the research cannot show the whole picture. The reasons may also have been squeezed into set categories. With no repeat, reliability is untested. Overall the study points to a real pattern, but the small, one-place, one-time sample means the evidence is weak.'),
        P('b', 'Design', 'a plan to test the claim that “Most people move to the city for work” (Source 3). Describe your methods and sources.', 6,
          { levels: 'design6' },
          'Name methods and credible sources and explain how each gathers evidence that tests THIS claim about why people move.',
          'To test the claim I would survey a larger, more varied sample of recent migrants from across the city — in different neighbourhoods, not just one bus station, and over several days — so the sample is more representative and the “for work” figure can be trusted. I would let people give their own reasons rather than fixed choices, so the data is valid and not forced into categories. I would also look at official census or housing-authority data on why people register as moving, because that large, reliable dataset would show whether work really is the main reason for most. Comparing a broad survey with official records would test the claim far better than one morning at one station.'),
      ],
    },
    {
      n: 3, about: 'Source 4',
      parts: [
        P('', 'Evaluate', 'the two arguments in Source 4. Which argument about how to manage the city’s growth is more convincing? Use the source to support your answer.', 16,
          { levels: 'argue16' },
          'Weigh BOTH people — reasons, evidence, language — quote short phrases, and conclude clearly on which is more convincing.',
          'Leila argues for building housing and transport in the city, while Sam argues for investing in the countryside so people stay. Leila’s reasoning is practical and supported by evidence: she notes that when one city “built cheap flats and new bus routes, its overcrowded settlements began to shrink.” This is a strength because it is a real example that planning for growth works, which makes her argument easier to accept. Her point that “trying to stop people moving never works” is logical, since it faces reality rather than wishing migration away.\n\nSam’s argument is also well reasoned and tackles the deeper cause. His strongest point is that cities “cannot build homes and roads fast enough”, which is a fair weakness in Leila’s plan, and investing in villages so “families would stay” addresses the root of the problem rather than its symptoms. However, his argument is weaker on evidence — he gives no example of rural investment actually slowing migration, while Leila offers a concrete result.\n\nBoth use calm, reasoned language. On balance I find Leila’s argument slightly more convincing, because it is backed by evidence of real impact and deals with the people already arriving, whom Source 1 and Source 2 show are struggling now. Yet Sam is right that cities cannot keep pace forever, so the most convincing overall approach may combine Leila’s city planning with Sam’s longer-term rural investment.'),
      ],
    },
    {
      n: 4, about: 'All the sources',
      parts: [
        P('', 'Choose', 'ONE of the three courses of action below that City Futures (Source 1) could take to manage the city’s rapid growth. Explain why it is the best choice, using the sources and your own ideas.', 22,
          { levels: 'action22' },
          'Choose one of the three options. Explain its likely impact and consequences, weigh it against the others, use the sources and conclude clearly, linked to the aim.',
          'I would choose course of action A: campaigning for affordable housing with basic services — clean water and transport links — in the fast-growing settlements, supported by its community planning workshops. I choose this because Source 2 shows newcomers struggle most with housing and clean water, and Leila in Source 4 gives evidence that building affordable homes and bus routes made overcrowded settlements shrink. It directly serves the group’s aim of decent housing for all.\n\nThe likely impact is large and reaches the people in greatest need. Planned, affordable homes with water and transport replace unsafe informal settlements, improving daily life for thousands and easing the strain on services that Source 1 describes. Using the workshops means residents help shape the plans, so the housing fits what people actually need and is more likely to last.\n\nI must weigh the consequences. Housing is expensive and slow, and, as Sam warns in Source 4, the city “cannot build fast enough” if migration keeps rising, so housing alone treats the symptom. There is also a risk that better city housing attracts even more arrivals. So City Futures should pair its housing work with longer-term pressure on government to invest in rural areas.\n\nThe other options are weaker on their own. Option B, better public transport, would ease the crowded buses and rising-rent pressures that longer-term residents complain of in Source 2, but it does not give the newcomers in the settlements the homes and clean water they most need. Option C, rural investment so fewer people move, tackles the root cause Source 2 identifies, but Source 2 also shows people are already in the city and struggling now, and rural change is slow, so it would not help them this year. On balance I choose A, supported by longer-term rural investment, because it has the most direct and immediate impact on the group’s aim of decent housing and services for the people arriving in the city.',
          [
            'A — Campaign for affordable housing with clean water in the fast-growing settlements.',
            'B — Campaign for better public transport and roads across the city.',
            'C — Campaign for investment in rural jobs and services so fewer people are forced to leave.',
          ]),
      ],
    },
  ],
};
