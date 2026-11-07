// GP mock Paper 6 — Topic: Technology, industry and innovation. Issue: automation and machines replacing jobs.
// All sources, statements, questions, model answers and mark schemes are ORIGINAL practice material in the style
// of the Cambridge IGCSE 0457 Written Exam. Not real past papers; people, groups, studies and figures are invented.
// 70 marks.
import { P } from './marks.js';

export const paper6 = {
  id: 'gp-p6',
  title: 'Mock Paper 6 — Machines and jobs',
  topic: 'Technology, industry and innovation',
  issue: 'Automation and the future of work',
  minutes: 85,
  insert: {
    note: 'These sources are original practice material written for this app. The organisations, people, studies and figures are invented.',
    sources: [
      {
        id: 'Source 1', kind: 'Report', title: 'Future Work — briefing', byline: 'Future Work, a research group on jobs',
        paras: [
          'Machines and computer programs are now doing many tasks that people used to do. Self-checkouts replace cashiers, software handles routine office work, and automated vehicles are beginning to replace some drivers.',
          'Future Work says the cause is that automation is often cheaper and faster for businesses, and that the technology is improving quickly. A consequence is that some jobs disappear and workers must learn new skills, although new kinds of work also appear as technology spreads.',
          'The group believes technology should serve people and that no one should be left behind by change. It wants governments to fund retraining for workers whose jobs are at risk and to teach digital skills in schools, and it runs free evening skills workshops so adults can learn to use new tools.',
        ],
      },
      {
        id: 'Source 2', kind: 'Article', title: 'Two workers', byline: 'Local newspaper, a factory town',
        paras: [
          'In our town, worries differ by age. Older workers fear a machine will take the job they have done for years. Younger people wonder whether there will be enough good jobs for them at all. And some say the real problem is not machines but that so much work today is low-paid and insecure.',
          'Some residents say losing jobs to machines is the most urgent issue. Others argue that the bigger problem is poor, unstable pay, and that blaming machines distracts from it.',
        ],
      },
      {
        id: 'Source 3', kind: 'Research', title: 'Checkout survey', byline: 'A student research project',
        paras: [
          'A student wanted to find out whether self-checkout machines affect workers. Research question: “Have self-checkout machines changed shop workers’ hours?”',
          'The student asked 20 workers at one large supermarket whether their hours had changed since self-checkouts were installed. Fourteen said their hours had been cut. The workers asked were simply those willing to talk during one afternoon. The student plans to ask workers in other shops later.',
        ],
        table: { caption: 'Effect on hours since self-checkouts (20 supermarket workers)', head: ['Effect on hours', 'Workers'], rows: [['Hours cut', '14'], ['No change', '4'], ['Hours increased', '2']] },
      },
    ],
    statements: {
      lead: 'Source 4 — two people give opposite views on how to respond to automation.',
      a: { name: 'Omar', role: 'an economist', paras: [
        'We should invest in retraining and education so that workers can move into the new jobs that technology creates. Automation has always destroyed some jobs and created others; the real danger is people being left without the new skills they need. In the past, when machines replaced old jobs, retraining helped workers adapt and often find better-paid work. If we try to hold technology back, we fall behind other countries; if we train people, they can thrive alongside the machines.',
      ] },
      b: { name: 'Vera', role: 'a factory worker and union member', paras: [
        'We should slow down automation and protect jobs — for example by taxing companies that replace workers with machines and using the money to support those who lose their work. New jobs may appear in time, but often not for the same people or the same towns, and not quickly enough to pay this month’s bills. People need security today, not a promise that things will balance out eventually. Protecting workers now is only fair.',
      ] },
    },
  },
  questions: [
    {
      n: 1, about: 'Sources 1 and 2',
      parts: [
        P('a', 'Identify', 'two jobs or tasks, from Source 1, that machines are now doing instead of people.', 2,
          { points: [{ t: 'Any two of: cashiers (self-checkouts) / routine office work / driving (automated vehicles) (1 each).', m: 2 }] },
          'One mark each — take the exact examples named in the source.',
          'Two examples from Source 1 are cashiers’ work being done by self-checkouts and routine office work being handled by software.'),
        P('b', 'Identify', 'a prediction made by Future Work in Source 1, and explain why it is a prediction.', 4,
          { points: [
            { t: 'Identifies a prediction, e.g. that new kinds of work will appear as technology spreads (1).', m: 1 },
            { t: 'Explains it describes a future outcome (1)', m: 1 },
            { t: 'that has not fully happened yet and cannot be checked now (1)', m: 1 },
            { t: 'and depends on how technology and the economy develop, so it is uncertain (1).', m: 1 },
          ] },
          'A prediction is a claim about the future. Say what it is, then why it counts as a prediction.',
          'Future Work predicts that new kinds of work will appear as technology spreads, even as old jobs disappear. This is a prediction because it describes a future outcome that has not fully happened yet, so it cannot be checked now, and it depends on how technology and the economy develop, which makes it uncertain.'),
        P('c', 'Analyse', 'Source 1. Describe the perspective of Future Work towards automation and jobs.', 6,
          { levels: 'perspective6' },
          'Describe the group’s viewpoint — issue, cause, consequence, values, aims, action — supported from the source. Do not give your own opinion.',
          'Future Work sees machines replacing human tasks as a major change to work (issue), pointing to self-checkouts, office software and automated vehicles. It identifies the cause as automation being cheaper and faster for businesses and improving quickly. The consequences it describes are that some jobs disappear and workers must learn new skills, though new kinds of work also appear. Its values are that technology should serve people and that no one should be left behind by change. Its aims are government-funded retraining and digital skills in schools, and the action it takes is running free evening skills workshops for adults.'),
        P('d', 'Explain', 'which issue facing workers, in Sources 1 and 2, you think is the most significant.', 6,
          { levels: 'significance6' },
          'Choose ONE issue (job loss to machines, or low-paid insecure work). Explain three or four reasons — scale, severity, how long effects last, who is affected.',
          'I think insecure, low-paid work is the most significant issue. First, it affects a very large number of people right now, not only those whose exact job is automated, because Source 2 says “so much work today is low-paid and insecure.” Second, it is severe, since unstable pay makes it hard for families to plan, rent a home or save. Third, its effects last, because insecure work can trap people in poverty for years. Although losing a job to a machine is serious, I judge insecure work as most significant because it already affects more people more deeply, and automation is partly one cause of it rather than a separate problem.'),
      ],
    },
    {
      n: 2, about: 'Source 3',
      parts: [
        P('a', 'Evaluate', 'the research in Source 3. Explain its strengths and weaknesses.', 8,
          { levels: 'evaluate8' },
          'Explain how each point affects the quality of the evidence. Cover strengths AND weaknesses; use words like representative, biased, reliable, valid.',
          'A strength is the clear, focused research question and the fact that the student asked workers directly, so the evidence comes first-hand from people affected, and the result shows a clear pattern of hours being cut. However, the weaknesses are serious. The sample is small — 20 workers at one supermarket — and only one type of workplace, so it is not representative of shop or other workers generally and may not generalise. The workers were those “willing to talk”, a self-selecting group who may feel more strongly, which biases the result. The information is self-reported and not checked against the shop’s records, so it may be inaccurate, and workers cannot be sure the machines, rather than other factors, caused the change, which weakens validity. With no repeat, reliability is untested. Overall the study suggests a real effect but, being small, one-workplace and self-reported, the evidence is weak.'),
        P('b', 'Design', 'a plan to test the claim that “Self-checkout machines have reduced shop workers’ hours” (Source 3). Describe your methods and sources.', 6,
          { levels: 'design6' },
          'Name methods and credible sources and explain how each gathers evidence that tests THIS claim about workers’ hours.',
          'To test the claim I would gather data from many shops of different types and sizes, not one supermarket, so the sample is representative; this tests whether hours really fell across shops generally. Rather than relying on memory, I would ask to see the shops’ records of staff hours before and after self-checkouts were installed, because that is reliable, factual data that directly shows any change. I would also interview a range of workers, chosen at random rather than only the willing, to understand whether the machines or other causes reduced hours, which improves validity. Comparing hours records across many shops would test the claim far more reliably than one afternoon of volunteers.'),
      ],
    },
    {
      n: 3, about: 'Source 4',
      parts: [
        P('', 'Evaluate', 'the two arguments in Source 4. Which argument about how to respond to automation is more convincing? Use the source to support your answer.', 16,
          { levels: 'argue16' },
          'Weigh BOTH people — reasons, evidence, language — quote short phrases, and conclude clearly on which is more convincing.',
          'Omar argues for retraining and education, while Vera argues for slowing automation and protecting jobs now. Omar’s reasoning is logical and uses evidence from the past: “when machines replaced old jobs, retraining helped workers adapt and often find better-paid work.” This is a strength because it is evidence that the approach has worked before, which makes his argument more convincing, and his point that holding technology back means “we fall behind other countries” is a realistic concern.\n\nVera’s argument is also strong and exposes a real weakness in Omar’s case. Her key point is timing: new jobs come “often not for the same people or the same towns, and not quickly enough.” This matters because Omar’s retraining may not help an older worker in a factory town today, which Source 2 shows is exactly who is worried. Her idea of taxing firms that replace workers, to fund support, is concrete. A possible weakness is that slowing automation could, as Omar warns, make the country less competitive.\n\nBoth use calm, reasoned language, though Vera’s “pay this month’s bills” adds emotional weight. On balance I find Omar’s argument slightly more convincing overall, because it is supported by evidence that retraining works and faces the reality that technology cannot easily be stopped. However, Vera is right that the people who lose out now need protection, so the most convincing position may combine Omar’s retraining with Vera’s support for those displaced.'),
      ],
    },
    {
      n: 4, about: 'All the sources',
      parts: [
        P('', 'Choose', 'ONE of the three courses of action below that Future Work (Source 1) could take to help workers affected by automation. Explain why it is the best choice, using the sources and your own ideas.', 22,
          { levels: 'action22' },
          'Choose one of the three options. Explain its likely impact and consequences, weigh it against the others, use the sources and conclude clearly, linked to the aim.',
          'I would choose course of action A: making free, practical retraining its main work — expanding its evening skills workshops and pressing government to fund retraining for workers whose jobs are most at risk. I choose this because Source 1 says the real danger is workers being “left behind” without new skills, and Omar in Source 4 gives evidence that retraining has helped workers adapt and find better-paid work before. It fits the group’s value that no one should be left behind.\n\nThe likely impact is wide and lasting. Retraining lets a worker whose hours are cut, like those in Source 3, move into new work rather than being stuck. Because skills stay with a person, the benefit lasts for the rest of their working life, and the group can start now through the workshops it already runs.\n\nI must weigh the consequences. Retraining is slow and, as Vera argues in Source 4, may not help an older worker in a struggling town quickly enough, nor guarantee a job at the end. It also does nothing about pay and insecurity now. So Future Work should pair retraining with support for those who lose work while they retrain, so people are not left without income in the meantime.\n\nThe other options are weaker on their own. Option B, digital skills in schools, prepares young people — whom Source 2 shows are anxious about jobs — but it does nothing for the adults already losing hours in Source 3. Option C, taxing firms that replace workers and supporting those who lose their jobs, protects people in the short term, but Omar warns it could make the country less competitive and it does not prepare anyone for new work. On balance I choose A, backed by support for displaced workers, because it has the most direct and lasting impact on the group’s aim that technology serves people and no one is left behind.',
          [
            'A — Make free, practical retraining its main work, and press government to fund retraining for workers at risk.',
            'B — Campaign for digital skills to be taught in schools so young people are ready.',
            'C — Campaign to tax firms that replace workers with machines and use the money to support those who lose their jobs.',
          ]),
      ],
    },
  ],
};
