// Cambridge IGCSE Global Perspectives 0457 — Component 1 (Written Exam): how to answer each question.
// Original guidance written for this app, grounded in the published syllabus (2025-2027) and the June 2025
// principal examiner report. The exam is source-based and 100% AO1 (research, analysis and evaluation):
// knowledge of the topic is NOT assessed — the skill of handling the sources is.
//
// Card shapes (rendered by GPCard): note, steps, dont (do/avoid), stems (sentence starters), concepts (table).
export const note = (title, ...points) => ({ type: 'note', title, points });
export const steps = (title, intro, items) => ({ type: 'steps', title, intro, items });
export const dont = (title, doList, avoidList) => ({ type: 'dont', title, doList, avoidList });
export const stems = (title, intro, items) => ({ type: 'stems', title, intro, items });
export const concepts = (title, intro, rows) => ({ type: 'concepts', title, intro, rows });

const lesson = (id, title, emoji, blurb, cards) => ({ id, title, emoji, blurb, cards });

export const GP_INTRO = lesson('gp-exam', 'The written exam at a glance', '🧭',
  'What Component 1 is and how it is marked', [
    note('The paper',
      'The **Written Exam (Component 1)** lasts **1 hour 25 minutes** and is worth **70 marks**. It is **35%** of the qualification.',
      'You answer **four compulsory questions** based on a set of **sources** in an insert (resource) booklet. The sources show one global issue from different perspectives — **personal, local/national and global**.',
      'The issue comes from a **topic** in the syllabus list (for example Conflict and peace, Education for all, Environment). You do **not** need to have studied that exact topic.',
    ),
    note('What is really being tested',
      'Component 1 is **100% AO1: research, analysis and evaluation**. **Knowledge of the topic is not assessed.** Everything you need is in the sources.',
      'You are marked on **skills**: identifying information, analysing a perspective, evaluating research and arguments, designing research, and recommending a course of action.',
      'The single most important habit: **explain, do not just state.** The examiner report says again and again that candidates listed points but did not explain their **significance**.',
    ),
    dont('The habits that move you up the levels',
      ['Explain WHY a point matters — its effect on the quality of the research, argument or action', 'Use evidence and short quotations FROM THE SOURCES to support what you say', 'Reach a clear, balanced judgement in the longer questions', 'Use critical-thinking words: reliability, validity, bias, representativeness, vested interest'],
      ['Simply listing or describing points with no explanation', 'Giving your own opinion with no reason or evidence', 'Writing everything you know about the topic (knowledge is not marked)', 'Answering only one side of a “which is more convincing?” question'],
    ),
    concepts('Critical-thinking words examiners reward', 'Use these to explain the strength or weakness of a source, research study or argument.', [
      ['reliability', 'can the source be trusted and repeated? (method, consistency)'],
      ['validity', 'does it really measure/test what it claims to?'],
      ['representativeness', 'is the sample big and typical enough to generalise from?'],
      ['bias / vested interest', 'does the author gain from one view, slanting the message?'],
      ['expertise / ability to know', 'is the author in a position to know the facts?'],
      ['tone and language', 'is it balanced, or emotive and one-sided?'],
    ]),
  ]);

export const GP_Q1 = lesson('gp-q1', 'Question 1 — read, analyse a perspective, judge significance', '🔍',
  'Identify information, describe a group’s perspective, and say which issue matters most', [
    note('What Question 1 asks',
      'Q1 is based mainly on **Source 1**. It builds up: (a) **identify** information, (b) spot a **claim or prediction**, (c) **analyse the perspective** of a group, (d) judge which **issue is most significant**.',
      'Parts (a) and (b) are short (1 mark each point). Parts (c) and (d) are longer and marked in **levels**.',
    ),
    steps('(a) Identify information / data', 'One mark each. Be quick and exact.', [
      'Find the exact fact, figure or example the question asks for **in the named source**.',
      'Write it in a few words — copying or lightly rewording the source is fine here.',
      'Give the number of points the marks ask for (2 marks = two separate pieces of information).',
    ]),
    steps('(c) Analyse the perspective of a group', 'Describe what the group thinks — not what YOU think.', [
      'A **perspective** = a viewpoint based on reasons and evidence. Describe the group’s view, do not evaluate it.',
      'Cover several of these aspects: **issue, cause, consequence, values, aims, action** the group wants.',
      'Support each aspect with a short detail or example **from the source**.',
      'Aim for three or four clear aspects. You are NOT asked for your own opinion here.',
    ]),
    steps('(d) Which issue is most significant?', 'Choose ONE issue from the sources and justify it.', [
      'Name **one** global issue from the sources (not several).',
      'Give **three or four reasons** why it is the most significant, and **explain each briefly**.',
      'Good reasons are about **impact**: how many people are affected, how severe, how long it lasts, effects on life, health, the economy and the environment.',
      'A weak answer just states the issue and asserts reasons. A strong answer explains why each reason makes it significant.',
    ]),
    stems('Useful sentence starters', 'Adapt these — do not copy them mechanically.', [
      '“From Source 1, one piece of information is that…”',
      '“The group sees the issue as… They believe the main cause is… and a consequence is…”',
      '“The action group values… and aims to…”',
      '“I think the most significant issue is… This is significant because… which affects…”',
    ]),
  ]);

export const GP_Q2 = lesson('gp-q2', 'Question 2 — evaluate research and design research', '🧪',
  'Judge a study’s strengths and weaknesses, then plan how to test a claim', [
    note('What Question 2 asks',
      'Q2 is based on a **research source** (Source 3). Part (a): **evaluate** the research. Part (b): **design research** to test a given claim. Both are marked in **levels**.',
      'This is the skill candidates find hardest in the examiner report, because they **list** strengths and weaknesses without **explaining their significance**.',
    ),
    steps('(a) Evaluate the research', 'Explain HOW each point affects the quality of the evidence.', [
      'Identify **strengths**: a clear research question, a method that fits the question, measurable data, a large or random sample, a clear outcome.',
      'Identify **weaknesses**: a small or unrepresentative sample, leading questions, bias in where/how data was collected, ethical problems, poor citation.',
      'For each point, **explain the impact** on the research using concept words: “a small sample makes the data **less representative**, so the results may not **generalise**.”',
      'Cover both strengths **and** weaknesses to reach the top level.',
    ]),
    steps('(b) Design research to test a claim', 'Match methods and sources to the exact claim.', [
      'Name clear **methods**: survey/questionnaire, interview, observation, consulting experts, reliable secondary sources (government, NGOs, universities).',
      'For each, **explain how it would gather evidence that tests the specific claim** — link it explicitly to the claim’s wording.',
      'Say why your sources are **reliable and free from bias** (for example official statistics rather than a campaign’s own page).',
      'Listing methods is not enough: the marks come from the **link to the claim** and the explanation.',
    ]),
    dont('Common mistakes in Question 2',
      ['Explain why a strength/weakness matters for the quality of the evidence', 'Tie every method directly to the claim being tested', 'Name specific, credible sources of evidence'],
      ['Listing strengths and weaknesses with no explanation', 'Giving your opinion on the topic instead of how to research it', 'Naming methods with no link to the claim'],
    ),
  ]);

export const GP_Q3 = lesson('gp-q3', 'Question 3 — evaluate two arguments (16 marks)', '⚖️',
  'Decide which of two opposing arguments is more convincing, and why', [
    note('What Question 3 asks',
      'You are given **two short statements** that argue **opposite positions** on the issue. You must judge **which argument is more convincing** and explain why. It is worth **16 marks**, marked in **levels**.',
      'You are evaluating the **quality of the argument** — the reasons, the evidence and the language — **not** which position you personally prefer.',
    ),
    steps('How to build a top-level answer', 'Balanced, structured, supported by the source.', [
      'Look at **both** statements. Weighing only one caps you at a low level.',
      'For each, judge the **reasons** (logical? relevant?), the **evidence** (examples, facts — reliable? representative?) and the **language/tone** (balanced or emotive?).',
      'Quote **short phrases from the statements** as evidence for your judgement.',
      'Explain **why** each strength makes an argument more convincing — do not just assert it.',
      'Reach a **clear conclusion**: which argument is more convincing, overall, and why.',
    ]),
    concepts('Turn an asserted point into an explained one', 'The examiner report’s own example of weak vs strong:', [
      ['Weak (asserted)', '“Her argument has lots of examples, which is a strength.”'],
      ['Strong (explained)', '“The examples (Martin Luther King, Gandhi) are a strength because they are evidence that peaceful protest can work, which makes the reasoning easier to believe and more convincing than the other statement.”'],
    ]),
    stems('Sentence starters for evaluation', 'Adapt to the statements in front of you.', [
      '“X’s argument is more convincing because the reason… is supported by evidence such as…”',
      '“A weakness of Y’s argument is… This matters because it makes the claim less reliable / less representative.”',
      '“The tone of… is emotive (‘…’), which weakens it as evidence because…”',
      '“Overall, X is more convincing than Y because…”',
    ]),
  ]);

export const GP_Q4 = lesson('gp-q4', 'Question 4 — recommend a course of action', '🎯',
  'Recommend and justify an action in response to the global issue', [
    note('What Question 4 asks',
      'You recommend **a course of action** in response to the issue (for example which proposal a campaign group should choose) and **justify** it. This is the **longest essay** question, marked in **levels**.',
      'You may **compare several actions** or **justify one** — both work. You must assess **impact and consequences** and reach a **balanced, supported conclusion**.',
    ),
    steps('How to structure it', 'Judgement + reasons + evidence + balance + conclusion.', [
      'Decide on your recommended action early, then argue for it.',
      'Explain the **likely impact**: who it reaches, how much change it could make, and the **consequences** (cost, time, who benefits, barriers).',
      'Use **material from the sources**, and you may add your own relevant examples (allowed, not required).',
      'Give a **balanced** view: acknowledge a drawback or a weaker alternative and say why your choice is still best.',
      'End with a **clear conclusion** that links the action back to the group’s aim.',
    ]),
    dont('What separates high and low answers',
      ['Explaining WHY an action would be effective and have impact', 'Weighing consequences for different groups', 'Reaching a clear, justified conclusion'],
      ['Listing ways to solve the problem with no evaluation', 'Describing HOW to carry out an action instead of why it is best', 'Drifting into general opinions about the topic'],
    ),
    stems('Sentence starters for a recommendation', null, [
      '“I recommend… because it would… which directly supports the aim of…”',
      '“This action would have a greater impact than… because…”',
      '“One consequence to weigh is… however, on balance…”',
      '“In conclusion, the most effective action is… because…”',
    ]),
  ]);

export const HOWTO = [GP_INTRO, GP_Q1, GP_Q2, GP_Q3, GP_Q4];
