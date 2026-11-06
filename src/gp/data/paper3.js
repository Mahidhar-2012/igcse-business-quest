// GP mock Paper 3 — Topic: Education for all. Issue: children out of school in a rural region.
// All sources, statements, questions, model answers and mark schemes are ORIGINAL practice material in the style
// of the Cambridge IGCSE 0457 Written Exam. Not real past papers; people, groups, studies and figures are invented.
// 70 marks.
import { P } from './marks.js';

export const paper3 = {
  id: 'gp-p3',
  title: 'Mock Paper 3 — Children out of school',
  topic: 'Education for all',
  issue: 'Why children in a rural region miss school',
  minutes: 85,
  insert: {
    note: 'These sources are original practice material written for this app. The organisations, people, studies and figures are invented.',
    sources: [
      {
        id: 'Source 1', kind: 'Report', title: 'Learn Together — charity briefing', byline: 'Learn Together, an education charity',
        paras: [
          'In many rural regions, large numbers of children leave school early, and girls are the most likely to drop out. Learn Together estimates that in the region where it works, one child in three does not finish primary school.',
          'The charity says the main causes are distance and cost. The nearest secondary school can be a two-hour walk away, and families must pay for uniforms, books and transport. When money is short, children are kept at home to work in the fields or to care for younger brothers and sisters.',
          'Learn Together believes that every child has a right to education and that teaching girls lifts whole communities out of poverty. It wants governments to build schools closer to villages and to make basic education free. It also runs after-school clubs and provides bicycles so that children can reach school more easily.',
        ],
      },
      {
        id: 'Source 2', kind: 'Article', title: 'A village council speaks', byline: 'Local radio, a rural community',
        paras: [
          'Our village faces several problems at the same time. The school is far away and costly, but we also have no clean, safe water nearby, and many young adults cannot find paid work, so families depend on their children helping in the fields.',
          'Some elders say education must come first, because it is the only lasting way out of poverty. Others argue that without clean water and jobs now, families simply cannot afford to send a child on a long daily journey to school.',
        ],
      },
      {
        id: 'Source 3', kind: 'Research', title: 'School-distance survey', byline: 'A student research project',
        paras: [
          'A student wanted to find out whether distance affects attendance. Research question: “Does the distance to school affect how often children attend?”',
          'The student asked 40 families in one village how far their children walk to school and how many days each child attended last week. The families were chosen because they lived near the student’s own home. The student plans to survey other villages later.',
        ],
        table: { caption: 'Average days attended last week, by distance to school', head: ['Distance to school', 'Average days (out of 5)'], rows: [['Under 30 minutes', '4.6'], ['30–60 minutes', '3.8'], ['1–2 hours', '2.4'], ['Over 2 hours', '1.5']] },
      },
    ],
    statements: {
      lead: 'Source 4 — two people give opposite views on the best way to get more children into school.',
      a: { name: 'Nadia', role: 'a teacher', paras: [
        'We should build more schools close to the villages. Children drop out mainly because school is simply too far away. A school within walking distance means younger children, and especially girls, can attend safely, and parents worry far less about the journey. When a neighbouring country opened small village schools, attendance rose sharply within a year. Distance is the one barrier we can remove the fastest, and it helps every child equally.',
      ] },
      b: { name: 'Tomas', role: 'works for a development fund', paras: [
        'New schools are expensive and slow to build. The quicker answer is to pay poor families a small monthly grant so that they do not lose a child’s help by sending them to school. Cash support has boosted attendance in many countries almost immediately, and it lets each family decide what their children need most. Building takes years, but families need help this term, not in a decade.',
      ] },
    },
  },
  questions: [
    {
      n: 1, about: 'Sources 1 and 2',
      parts: [
        P('a', 'Identify', 'two reasons, from Source 1, why children leave school early.', 2,
          { points: [{ t: 'Any two of: the school is too far / the cost of uniforms, books or transport / children are needed to work or care for siblings (1 each).', m: 2 }] },
          'One mark each — take the exact reasons named in the source.',
          'Two reasons from Source 1 are that the nearest school is a long walk away and that families cannot afford uniforms, books and transport.'),
        P('b', 'Identify', 'a value held by Learn Together in Source 1, and explain how it shapes what the charity wants.', 4,
          { points: [
            { t: 'Identifies a value, e.g. every child has a right to education / educating girls lifts communities (1).', m: 1 },
            { t: 'Links the value to an aim (1)', m: 1 },
            { t: 'e.g. because it values the right to education, it wants free basic education and schools closer to villages (1)', m: 1 },
            { t: 'and acts on it by providing bicycles and after-school clubs (1).', m: 1 },
          ] },
          'Name the value, then show how it leads to what the charity asks for and does.',
          'Learn Together values the idea that every child has a right to education and that educating girls lifts whole communities. This value shapes its aims: because it believes in that right, it wants basic education made free and schools built closer to villages, and it acts on the value itself by providing bicycles and running after-school clubs so children can actually reach and stay in school.'),
        P('c', 'Analyse', 'Source 1. Describe the perspective of Learn Together towards children’s education in the region.', 6,
          { levels: 'perspective6' },
          'Describe the charity’s viewpoint — issue, cause, consequence, values, aims, action — supported from the source. Do not give your own opinion.',
          'Learn Together sees early drop-out from school, especially among girls, as a serious problem (issue), noting that one child in three does not finish primary school. It identifies the causes as the distance to school and the cost of uniforms, books and transport, which lead families to keep children home to work or care for siblings (consequence). Its values are that every child has a right to education and that educating girls benefits the whole community. Its aims are free basic education and schools built closer to villages, and the action it takes is running after-school clubs and providing bicycles so children can reach school.'),
        P('d', 'Explain', 'which issue facing the village, in Sources 1 and 2, you think is the most significant.', 6,
          { levels: 'significance6' },
          'Choose ONE issue (education, clean water or jobs). Give three or four reasons and explain each — scale, severity, how long effects last, who is affected.',
          'I think the lack of education is the most significant issue. First, it affects a very large number of children — Source 1 says one in three does not finish primary school. Second, its effects are long-lasting, because a child who misses school has fewer chances of paid work for the rest of their life, which Source 2 calls the way out of poverty. Third, it is linked to the other problems: educated adults are more able to solve issues like water and jobs in future. Although clean water affects health immediately, I judge education as most significant because it has the widest and longest-term impact on the whole community.'),
      ],
    },
    {
      n: 2, about: 'Source 3',
      parts: [
        P('a', 'Evaluate', 'the research in Source 3. Explain its strengths and weaknesses.', 8,
          { levels: 'evaluate8' },
          'Explain how each point affects the quality of the evidence. Cover strengths AND weaknesses; use words like representative, biased, reliable, valid.',
          'A strength is the clear, focused research question, which keeps the data relevant, and the data is measurable — days attended against distance — so a pattern can be seen and the result looks fairly objective. The table does show a consistent fall in attendance as distance grows, which supports the idea being tested. However, the weaknesses are serious. The sample is small and from only one village, and the families were chosen because they lived near the student, so it is a convenience sample that is not representative and may not generalise to other villages. The attendance figures are reported by families, not checked against school registers, so they may be inaccurate or exaggerated, reducing validity. There is no repeat yet, so reliability is untested. Overall the research is a reasonable start and hints at a real pattern, but the small, unrepresentative, self-reported sample means the evidence is weak.'),
        P('b', 'Design', 'a plan to test the claim that “Children who live more than two hours from school attend less than half the time” (Source 3). Describe your methods and sources.', 6,
          { levels: 'design6' },
          'Name methods and credible sources and explain how each gathers evidence that tests THIS claim about distant children’s attendance.',
          'To test the claim I would compare children from several villages, grouped by how far they live from school, so the sample is larger and more representative than one village; this directly tests the “more than two hours” group against the rest. Instead of asking families, I would use the schools’ own attendance registers, because official records are more reliable than self-reported figures and let me check whether the distant group really attends less than half the time. I would also record each child’s travel time accurately, perhaps by mapping, so the groups are correct. Comparing register data across many villages would test the claim with far more representative and valid evidence than a single survey.'),
      ],
    },
    {
      n: 3, about: 'Source 4',
      parts: [
        P('', 'Evaluate', 'the two arguments in Source 4. Which argument about how to get more children into school is more convincing? Use the source to support your answer.', 16,
          { levels: 'argue16' },
          'Weigh BOTH people — reasons, evidence, language — quote short phrases, and conclude clearly on which is more convincing.',
          'Nadia argues for building schools close to villages, while Tomas argues for paying families a grant instead. Nadia’s reasoning is clear and addresses the main cause: children drop out “because school is simply too far away”, and a nearby school helps “especially girls” attend safely. Her evidence — that attendance “rose sharply within a year” when a neighbouring country opened village schools — is a strength, because it is a real example that building schools changes behaviour, which makes her argument easier to believe.\n\nTomas’s argument is also well reasoned and arguably more practical in the short term. His strongest point is speed: “building takes years, but families need help this term.” He supports this with evidence that cash grants “boosted attendance in many countries almost immediately”, and his point that grants “let each family decide” is sensible because families know their own needs. A possible weakness is that a grant does not remove the long journey itself, so a very distant child may still struggle.\n\nBoth use calm, reasoned language, which makes them credible. On balance I find Tomas’s argument slightly more convincing, because it is supported by evidence of immediate impact and tackles the cost barrier that Source 1 stresses, while Nadia’s schools, though valuable, take years. However, Nadia is right that distance is the deepest cause, so the most convincing overall position may be to combine quick grants now with new schools over time.'),
      ],
    },
    {
      n: 4, about: 'All the sources',
      parts: [
        P('', 'Recommend', 'ONE course of action Learn Together (Source 1) should take to get more children, especially girls, into school, and justify it using the sources and your own ideas.', 22,
          { levels: 'action22' },
          'Choose one action. Explain its likely impact and consequences, weigh an alternative, use the sources and conclude clearly, linked to the aim.',
          'I recommend that Learn Together focus on removing the cost barrier first, by funding uniforms, books and transport (including its bicycles) for the poorest families, while campaigning for free basic education. I choose this because Source 1 names cost as a main reason children stay home, and Tomas in Source 4 gives evidence that easing the money pressure on families “boosted attendance almost immediately”. It also helps girls most, who are the likeliest to drop out.\n\nThe likely impact is large and quick. Covering costs means a family no longer loses money by sending a child to school, so more children, especially girls, can attend this term, not years from now. Source 3’s data shows attendance is already lower further from school, so pairing cost support with bicycles tackles both the cost and the distance for those children at once.\n\nI must weigh the consequences. Funding costs for many families is expensive and may not reach the most distant villages, where, as Nadia argues in Source 4, the journey itself is the real barrier. Grants also do not build long-term capacity. So Learn Together should treat cost support as its immediate action while continuing to press governments to build closer schools for the longer term.\n\nAn alternative would be to put all its effort into building new schools, as Nadia suggests. This tackles the deepest cause, but Source 4 admits it “takes years”, so its impact on children out of school today would be small. On balance I recommend leading with cost support and bicycles now, supported by campaigning for closer, free schools, because it has the most direct and immediate impact on the charity’s aim of getting children — especially girls — into school.'),
      ],
    },
  ],
};
