// GP mock Paper 1 — Topic: Environment, pollution and conservation. Issue: plastic waste in the ocean.
// All sources, statements, questions, model answers and mark schemes are ORIGINAL, written for this app in the
// style of the Cambridge IGCSE 0457 Written Exam. They are NOT real past papers or mark schemes, and the
// people, groups, studies and figures are invented for practice. 70 marks.
import { P } from './marks.js';

export const paper1 = {
  id: 'gp-p1',
  title: 'Mock Paper 1 — Plastic in the ocean',
  topic: 'Environment, pollution and conservation',
  issue: 'Plastic waste in the ocean',
  minutes: 85,
  insert: {
    note: 'These sources are original practice material written for this app. The organisations, people, studies and figures are invented.',
    sources: [
      {
        id: 'Source 1', kind: 'Report', title: 'Clear Seas — campaign briefing', byline: 'Clear Seas, an ocean conservation action group',
        paras: [
          'Every year huge amounts of plastic reach the sea. Most of it is single-use packaging — bottles, bags and food wrappers — that is used once and thrown away. Clear Seas estimates that a rubbish-truck load of plastic enters the ocean every minute.',
          'This matters because plastic does not rot away. It breaks into tiny pieces called microplastics that sea animals swallow. Turtles, fish and seabirds are harmed, and the plastic passes up the food chain to the fish that people eat.',
          'Clear Seas believes clean oceans are a shared responsibility and that prevention is better than cleaning up afterwards. The group wants governments to ban the most wasteful single-use plastics and wants shops to offer refillable packaging. It runs school beach-cleans so that young people see the problem for themselves.',
        ],
      },
      {
        id: 'Source 2', kind: 'Article', title: 'A coastal town speaks', byline: 'Local newspaper, a fishing community',
        paras: [
          'In our town, three problems compete for attention. Plastic washes up on the beach and tangles fishing nets. At the same time, many young people cannot find work as the fishing industry shrinks, and the cost of food and fuel keeps rising.',
          'Some residents say the plastic is the most urgent issue because it damages the sea the town depends on. Others argue that unemployment affects families right now, every day, and should come first.',
        ],
      },
      {
        id: 'Source 3', kind: 'Research', title: 'Beach survey', byline: 'A student research project',
        paras: [
          'A student wanted to find out what kinds of plastic are most common on local beaches. Research question: “Which types of single-use plastic are found most often on our coastline?”',
          'The student visited one beach on one Saturday morning after a storm and collected every piece of plastic in a 50-metre stretch. Each piece was sorted into types (bottles, bags, wrappers, other) and counted. The student plans to repeat the count on other beaches later.',
        ],
        table: { caption: 'Items collected (one beach, one morning)', head: ['Type', 'Number'], rows: [['Food wrappers', '142'], ['Bottles and caps', '96'], ['Bags', '55'], ['Other', '71']] },
      },
    ],
    statements: {
      lead: 'Source 4 — two people give opposite views on the best way to cut ocean plastic.',
      a: { name: 'Mara', role: 'environmental campaigner', paras: [
        'The only real solution is to ban single-use plastics. History shows that bans work: when some countries banned plastic bags, their use fell almost overnight. If we keep producing throwaway plastic, no amount of cleaning up will keep pace. A ban stops the problem at the source and forces shops and makers to design better packaging. People adapt quickly, just as they did to seat belts and smoking bans.',
      ] },
      b: { name: 'Davi', role: 'works for a packaging company', paras: [
        'Banning plastic sounds good but causes new problems. Plastic is cheap, light and keeps food fresh, so banning it can mean more food waste and heavier packaging that costs more to transport. The answer is better recycling and new materials, not bans. Our industry is already investing in packaging that breaks down safely. Punishing businesses will cost jobs without cleaning a single beach.',
      ] },
    },
  },
  questions: [
    {
      n: 1, about: 'Sources 1 and 2',
      parts: [
        P('a', 'Identify', 'two single-use plastic items, from Source 1, that reach the sea.', 2,
          { points: [{ t: 'Any two of: bottles / bags / food wrappers (1 mark each).', m: 2 }] },
          'One mark each. Take the exact items named in the source.',
          'Two single-use items named in Source 1 are plastic bottles and food wrappers.'),
        P('b', 'Identify', 'a prediction made by Clear Seas in Source 1, and explain why it is a prediction.', 4,
          { points: [
            { t: 'Identifies a prediction, e.g. that cleaning up afterwards cannot keep pace / that prevention will reduce the problem (1).', m: 1 },
            { t: 'Explains it refers to a future outcome (1)', m: 1 },
            { t: 'that has not happened yet and cannot be checked now (1)', m: 1 },
            { t: 'and depends on what people do, so it is uncertain (1).', m: 1 },
          ] },
          'A prediction is a claim about the future. Say what it is, then why it counts as a prediction.',
          'Clear Seas predicts that prevention will work better than cleaning up afterwards. This is a prediction because it describes a future outcome that has not happened yet, so it cannot be checked now, and it depends on whether governments and shops actually change, which makes it uncertain.'),
        P('c', 'Analyse', 'Source 1. Describe the perspective of Clear Seas towards plastic in the ocean.', 6,
          { levels: 'perspective6' },
          'Describe the group’s viewpoint — issue, cause, consequence, values, aims and action. Do NOT give your own opinion. Support each aspect from the source.',
          'Clear Seas sees ocean plastic as a serious, shared problem (issue). It identifies the cause as single-use packaging that is used once and thrown away. It describes the consequence that plastic breaks into microplastics which harm sea animals and enter the human food chain. Its values are that clean oceans are a shared responsibility and that prevention is better than cure. Its aim is to stop plastic at the source, and the action it wants is a ban on the most wasteful single-use plastics, refillable packaging in shops, and school beach-cleans to raise awareness.'),
        P('d', 'Explain', 'which global issue, in Sources 1 and 2, you think is the most significant.', 6,
          { levels: 'significance6' },
          'Choose ONE issue. Give three or four reasons and explain each — think about scale, severity, how long it lasts and who it affects.',
          'I think plastic pollution is the most significant issue. First, its scale is global: Source 1 says a rubbish-truck load enters the ocean every minute, so it affects every coastline, not one town. Second, it is long-lasting, because plastic does not rot and becomes microplastics that stay in the environment for years. Third, it harms both wildlife and people, since the plastic passes up the food chain to the fish people eat. Although Source 2 shows unemployment affects families daily, I judge plastic pollution as most significant because its effects are worldwide, long-term and damage the sea that communities like the one in Source 2 depend on.'),
      ],
    },
    {
      n: 2, about: 'Source 3',
      parts: [
        P('a', 'Evaluate', 'the research in Source 3. Explain its strengths and weaknesses.', 8,
          { levels: 'evaluate8' },
          'Explain HOW each point affects the quality of the evidence. Cover strengths AND weaknesses. Use words like reliable, valid, representative, biased.',
          'A strength is the clear, focused research question, which keeps the data collection on track and relevant. Counting and sorting every item also gives measurable, factual data that can be compared, so the result is fairly objective. However, there are serious weaknesses. The sample is very small — one beach on one morning — so it is not representative of the whole coastline, and the results may not generalise. Collecting after a storm may bias the data, because a storm can wash up more of one type of plastic than normal, reducing validity. There is no repeat count yet, so the reliability is untested. Overall the method is a reasonable start, but the small, one-off, possibly biased sample means the evidence is weak and should not yet be trusted as typical.'),
        P('b', 'Design', 'a plan to test the claim that “Food wrappers are the most common plastic on our beaches” (Source 3). Describe your methods and sources.', 6,
          { levels: 'design6' },
          'Name methods and credible sources, and explain how EACH would gather evidence that tests THIS claim about wrappers.',
          'To test the claim I would repeat the beach count on several different beaches, on several ordinary days (not only after storms), so the sample is larger and more representative; this directly tests whether wrappers really are most common in general. I would use the same sorting categories each time so the counts can be compared reliably. I would also check secondary data from a national beach-clean charity or a government environment agency, because their large datasets would show whether wrappers top the list across many beaches, not just mine. Comparing my counts with their published figures would test the claim with more and better evidence than a single survey.'),
      ],
    },
    {
      n: 3, about: 'Source 4',
      parts: [
        P('', 'Evaluate', 'the two arguments in Source 4. Which argument about how to cut ocean plastic is more convincing? Use the source to support your answer.', 16,
          { levels: 'argue16' },
          'Weigh BOTH people. Judge their reasons, evidence and language, quote short phrases, and reach a clear conclusion on which is more convincing.',
          'Mara argues for banning single-use plastics and Davi argues for recycling and new materials instead. Mara’s argument is supported by evidence and examples: she notes that when some countries banned plastic bags “their use fell almost overnight”, and compares this to seat belts and smoking bans. These examples are a strength because they are real evidence that bans can change behaviour quickly, which makes her reasoning easier to believe. Her point that “no amount of cleaning up will keep pace” is logical, because it addresses the cause rather than the symptom.\n\nDavi raises fair points — that plastic “keeps food fresh”, so a ban could increase food waste, and that jobs could be lost. These are relevant consequences. However, a weakness is his possible vested interest: he “works for a packaging company”, so he gains from avoiding a ban, which reduces the reliability of his claim that industry will solve the problem itself. His evidence is also weaker — “already investing” is a vague assertion with no figures, while Mara gives concrete examples.\n\nOverall I find Mara’s argument more convincing, because it is supported by specific evidence of bans working and tackles the cause, whereas Davi relies on assertion and has an interest in the outcome. Davi’s point about food waste is a genuine drawback a good policy would need to manage, but it does not outweigh the stronger, better-evidenced case for prevention.'),
      ],
    },
    {
      n: 4, about: 'All the sources',
      parts: [
        P('', 'Choose', 'ONE of the three courses of action below that Clear Seas (Source 1) could take to reduce ocean plastic in its region. Explain why it is the best choice, using the sources and your own ideas.', 22,
          { levels: 'action22' },
          'Choose one of the three options. Explain its likely impact and consequences, weigh it against the others, use the sources, and conclude clearly, linked to the aim.',
          'I would choose course of action A: campaigning for a local ban on the most wasteful single-use plastics. I choose this because, as Mara argues in Source 4, a ban tackles the cause: it stops throwaway bottles, bags and wrappers entering the sea in the first place, rather than cleaning them up after the harm is done, which Source 1 says cannot keep pace with “a rubbish-truck load of plastic” every minute.\n\nThe likely impact is large and lasting. A ban changes the behaviour of every shop and shopper at once, and Source 4 gives evidence that bag use “fell almost overnight” when some countries banned bags. Source 3’s survey shows wrappers and bottles dominate local litter, giving the campaign clear, local evidence to show decision-makers which items to target first.\n\nI must weigh the consequences. Davi’s point in Source 4 is a real drawback: a ban could raise costs or food waste if good alternatives are not ready, and Source 2 reminds us the town also worries about jobs and prices. So Clear Seas should target only the most wasteful items and press shops for refillable options at the same time, which reduces the economic harm.\n\nThe other options are weaker on their own. Option B, more beach-cleans and awareness, is valuable for building public support but only removes plastic that is already in the sea, so its impact on the cause is small. Option C, refillable packaging in shops, helps but depends on shops volunteering and reaches only their customers. On balance I choose A, because a targeted ban has the greatest and most direct impact on the group’s aim of cleaner seas, while B and C work best as support for it.',
          [
            'A — Campaign for a local ban on the most wasteful single-use plastics (bottles, bags and wrappers).',
            'B — Expand its school beach-cleans and public awareness work so more people act.',
            'C — Work with local shops to replace throwaway packaging with refillable and reusable options.',
          ]),
      ],
    },
  ],
};
