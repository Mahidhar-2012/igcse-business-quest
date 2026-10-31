import { note, steps, dont, tryIt, annotated, lesson, section } from './helpers.js';

// Skills workshop: active practice that needs no multiple-choice questions.
// Everything is original. Do the task on paper first, then reveal the model answer and compare.

export const workshop = section('workshop', 'Skills workshop', '🛠️', 'teal', 'Practise on paper, then compare with a model: grammar, sentence upgrades, planning, reading and self-checking', [
  lesson('ws-fix', 'Fix the sentence', '🔧', [
    note('How to use this workshop', [
      'Read the task and **write your own answer on paper** before you press the button.',
      'Compare **meaning and accuracy**, not word for word. Many correct versions are possible.',
      'If your version differs, ask: is mine still **correct, clear and natural**?',
      'Keep a list of the mistakes you make most often and look for them whenever you proofread.',
    ]),
    tryIt('Verb tenses', {
      task: ['Correct the tense errors:', '“Yesterday I go to the market and buy some fruit, then I am seeing my friend.”'],
      hint: 'Everything happened yesterday, so use one tense for finished events.',
      answer: 'Yesterday I **went** to the market and **bought** some fruit, then I **saw** my friend.',
      why: ['Finished past events take the **past simple** ({{went, bought, saw}}).', 'Do not slide between tenses in one sentence unless the time really changes.'],
    }),
    tryIt('Subject and verb agreement', {
      task: ['Correct the sentence:', '“The list of questions are on the table, and each student have a copy.”'],
      hint: 'Find the real subject of each verb.',
      answer: 'The list of questions **is** on the table, and each student **has** a copy.',
      why: ['The subject is **list** (singular), not “questions”.', '**Each** student is singular, so it takes {{has}}.'],
    }),
    tryIt('Comma splice', {
      task: ['Two sentences are joined only by a comma. Fix it in two different ways:', '“The film was long, I enjoyed every minute.”'],
      answer: ['The film was long, **but** I enjoyed every minute.', 'The film was long; I enjoyed every minute.', 'Or: Although the film was long, I enjoyed every minute.'],
      why: ['A comma alone cannot join two full sentences.', 'Use a **linking word**, a **semicolon**, or make one part a subordinate clause.'],
    }),
    tryIt('Apostrophes', {
      task: ['Add or correct the apostrophes:', '“Its a pity that the childrens playground is closed, but theyre fixing it’s roof.”'],
      answer: '**It’s** a pity that the **children’s** playground is closed, but **they’re** fixing **its** roof.',
      why: ['{{it’s}} = it is; {{its}} = belonging to it (no apostrophe).', '{{they’re}} = they are.', 'An irregular plural (children) shows possession with **’s**.'],
    }),
    tryIt('Articles', {
      task: ['Correct the articles:', '“I bought umbrella because it was raining, and it was a expensive one.”'],
      answer: 'I bought **an** umbrella because it was raining, and it was **an** expensive one.',
      why: ['Use {{an}} before a **vowel sound** ({{an umbrella, an expensive}}).', 'A singular countable noun needs an article when it is first mentioned.'],
    }),
    tryIt('Prepositions', {
      task: ['Correct the prepositions:', '“She is good in drawing and interested on art, so she arrived to the gallery early.”'],
      answer: 'She is good **at** drawing and interested **in** art, so she arrived **at** the gallery early.',
      why: ['Learn them as pairs: {{good at}}, {{interested in}}, {{arrive at (a place) / in (a town)}}.'],
    }),
    tryIt('Fragments and run-ons', {
      task: ['Fix the punctuation and sentence structure:', '“Because the bus was late. We missed the start of the match and we were very disappointed we sat down quietly.”'],
      answer: 'Because the bus was late, we missed the start of the match. We were very disappointed, **so** we sat down quietly.',
      why: ['“Because the bus was late” cannot stand alone: join it to the main clause.', 'Split long strings of clauses with **full stops** and **linking words**.'],
    }),
    tryIt('Informal to formal', {
      task: ['Rewrite for a report or essay (formal register):', '“Kids get loads of stuff from sports, and it’s a really good thing for their health.”'],
      answer: 'Children gain **many benefits** from sport, and it is **extremely good** for their health.',
      why: ['Replace slang and vague words ({{kids, loads of stuff, really good thing}}).', 'Avoid contractions in formal writing.'],
    }),
  ]),

  lesson('ws-upgrade', 'Upgrade the sentence', '📈', [
    tryIt('Stronger description', {
      task: ['Improve this sentence with a precise adjective and one detail:', '“It was a good film.”'],
      answer: 'It was a **gripping** film with a **surprising ending** that kept me thinking for days.',
      why: ['“Good” says very little. Choose a word that shows **how** it was good.', 'One concrete detail makes a claim believable.'],
    }),
    tryIt('Sentence variety', {
      task: ['Combine these three short sentences into one flowing sentence:', '“I went to the beach. I swam. I came home.”'],
      answer: 'After a morning of **swimming** at the beach, I came home exhausted but happy.',
      why: ['Use a **time phrase** and an **-ing** phrase to join events.', 'Short sentences have a place, but three in a row sounds flat.'],
    }),
    tryIt('Better linking', {
      task: ['Join these sentences with a contrast word:', '“I like football. I don’t like playing it in the rain.”'],
      answer: 'I like football, **although** I don’t enjoy playing it in the rain.',
      why: ['Contrast links: {{although, however, but, whereas, despite}}.', 'Check punctuation: **However** needs a full stop or semicolon before it.'],
    }),
    tryIt('Develop an email bullet', {
      task: ['Expand this answer to a bullet point (“say what you did at the weekend”) to 2–3 sentences with a place, a person and a feeling:', '“I went to a museum.”'],
      answer: 'Last Saturday I went to the science museum with my cousins, and we spent an hour in the space section. **I was amazed** to stand next to a real rocket engine!',
      why: ['Add **when, where, who with**, a **detail** and a **feeling**.', 'Keep an informal tone with a friendly exclamation.'],
    }),
    tryIt('Sound persuasive', {
      task: ['Rewrite this blunt statement for an essay, giving a reason:', '“School uniforms are bad.”'],
      answer: 'In my opinion, **compulsory** school uniforms limit students’ self-expression and are **unnecessarily expensive** for many families.',
      why: ['Open with an opinion phrase and **give reasons**.', 'Choose precise adjectives ({{compulsory, unnecessarily expensive}}).'],
    }),
    tryIt('Stop repeating words', {
      task: ['Rewrite to avoid repeating “park” and “nice”:', '“The park is nice. The park has nice trees. The park is nice for families.”'],
      answer: 'The park is a **lovely** place for families, with **tall, shady trees** and plenty of space to play.',
      why: ['Combine ideas and use **pronouns or synonyms**.', 'Specific nouns and adjectives are stronger than “nice”.'],
    }),
  ]),

  lesson('ws-plan', 'Plan before you write', '🗺️', [
    steps('A three-minute planning routine',
      'Underline the **reader**, the **purpose** and **every bullet** in the task.',
      'Choose a **tone**: informal, neutral or formal.',
      'Jot **one idea plus a detail** for each paragraph (not full sentences).',
      'Decide the **opening and ending** (greeting and close, headline, or conclusion).',
      'Estimate length: how many words does each paragraph get?',
    ),
    tryIt('Plan an informal email', {
      task: ['Your friend Alex has just moved to a new town. Write an email: (1) say how you felt when you heard, (2) ask about the new school, (3) invite Alex to visit.', 'Write a four-line plan.'],
      answer: [
        '**Opening:** thanks for the news, sorry I was slow to reply.',
        '**Para 1 (feelings):** shocked then sad, then excited for Alex; I miss our walks to school.',
        '**Para 2 (school):** ask about subjects, clubs, new friends, uniform; mention I’m curious.',
        '**Para 3 (invite):** half-term visit, plan a hike and my mum’s pizza; ask which dates suit.',
        '**Close:** write back soon, sign off with first name.',
      ],
      why: ['Each paragraph answers **one bullet** and has a detail.', 'The plan fits about 170–190 words.'],
    }),
    tryIt('Plan a report', {
      task: ['Write a report for the head teacher on the school library: say what is good, what the problems are, and suggest improvements.', 'List your headings and two points under each.'],
      answer: [
        '**Introduction:** aim of the report; based on talking to students.',
        '**What works well:** wide choice of fiction; helpful librarian.',
        '**Problems:** closes at 4 p.m., too few computers; noisy corner near the entrance.',
        '**Recommendations:** open until 5 p.m. twice a week; add four computers; create a quiet study zone.',
        '**Conclusion:** small changes would make the library more useful for all students.',
      ],
      why: ['Headings mirror the task bullets.', 'Recommendations are **specific** and answer the problems above.'],
    }),
    tryIt('Plan an article', {
      task: ['Write an article for the school magazine persuading students to read for fun.', 'Plan the hook, two arguments, one counter-argument and the ending.'],
      answer: [
        '**Headline:** “Page-Turners Wanted”.',
        '**Hook:** question about the last time you lost track of time.',
        '**Argument 1:** reading improves vocabulary and writing without feeling like homework.',
        '**Argument 2:** relaxes you; ten minutes before bed beats scrolling.',
        '**Counter:** “I have no time”: ten minutes a day is enough.',
        '**Ending:** call to action: pick up one book this week.',
      ],
      why: ['A clear hook, arguments with reasons, and an answer to an objection make the article persuasive.'],
    }),
  ]),

  lesson('ws-analyse', 'Model answer analysis', '🔍', [
    annotated('An informal email, line by line', {
      task: 'Task (original): write to a friend about a school event you helped organise. Read the model and the comment on each part.',
      parts: [
        ['Hi Priya,', 'A friendly **greeting** with the reader’s name and a comma.'],
        ['Thanks for your message! I’m sorry I took so long to reply: the week has been a blur.', 'A warm **opening** that reacts to the reader and gives a reason for the delay. Contractions keep it informal.'],
        ['As you know, our school held its first science fair on Friday, and I was in charge of the robotics stand.', 'Answers the first bullet. It gives **when**, **what** and **the writer’s role**.'],
        ['My team built a small robot that follows a line on the floor. At first it kept turning the wrong way, so we spent two evenings fixing the sensors.', 'A **detail** and a short story make the point interesting. “At first… so…” links the events clearly.'],
        ['On the day, a crowd gathered and one little boy cheered when it finally worked! I was so proud.', 'Adds a **feeling** and a lively moment. The exclamation fits an informal email.'],
        ['What about you? Are you still planning to join the drama club? Write back soon and tell me everything.', 'Questions **involve the reader**, and the closing line invites a reply.'],
        ['Best wishes, Sam', 'A friendly **sign-off** with the writer’s first name.'],
      ],
      summary: ['Greeting → reaction → one paragraph per bullet → questions → close.', 'Each paragraph has a **detail** and a **feeling**, not just facts.'],
    }),
    annotated('A review opening and evaluation', {
      task: 'Task (original): review a local sports centre for your school magazine.',
      parts: [
        ['**Lane Nine: the Pool That Surprised Me**', 'A catchy **title** that gives a name and a hint of the verdict.'],
        ['Tucked behind the railway station, Riverside Sports Centre looks plain from the outside, but inside it is a pleasant surprise.', 'The **opening** gives location and an overall opinion in one sentence.'],
        ['The main pool is clean and bright, and the lifeguards are friendly without being intrusive.', '**Description with a positive** opinion supported by specifics.'],
        ['However, the changing rooms are cramped and often crowded after school, which spoils an otherwise relaxing visit.', 'A **balanced criticism** with a reason. “However” signals the contrast.'],
        ['I would recommend it to families and keen swimmers, but I suggest going early on weekends.', 'Ends with a clear **recommendation** and practical advice.'],
      ],
      summary: ['Balance praise and criticism, give reasons, and finish with who the place suits.'],
    }),
    annotated('A report section with formal language', {
      task: 'Task (original): report on student use of the school computer room.',
      parts: [
        ['**Findings**', 'A clear **heading** that tells the reader what follows.'],
        ['The majority of students who were interviewed use the computer room for research and homework.', '**Formal** vocabulary and a neutral tone. No contractions.'],
        ['Approximately half stated that they have to wait for a free computer during lunchtime.', '“Approximately half” gives a measured **figure** rather than an exaggeration.'],
        ['As a result, some students are unable to complete tasks before afternoon lessons.', '“As a result” links the problem to its **consequence**.'],
      ],
      summary: ['Facts, figures, formal vocabulary and clear links make a report credible.'],
    }),
    annotated('An article opening and ending', {
      task: 'Task (original): write an article encouraging teenagers to cook.',
      parts: [
        ['When did you last make a meal that made someone say “wow”?', 'A **question hook** that draws the reader in.'],
        ['Cooking is not just about feeding yourself; it is a skill that saves money, improves your health and impresses your friends.', 'States the writer’s **position** and previews the arguments.'],
        ['Think of it this way: every dish you master is one less takeaway you need.', 'Direct address ({{Think of it this way}}) keeps a lively, personal voice.'],
        ['So tomorrow, why not choose a simple recipe and surprise your family? You might discover your hidden talent.', 'A **call to action** and an encouraging last line.'],
      ],
      summary: ['Hook → position → vivid argument → call to action.'],
    }),
    annotated('An essay paragraph (PEEL)', {
      task: 'Task (original): “Teenagers should have a say in how their school is run.”',
      parts: [
        ['**Point:** Firstly, giving students a voice makes school rules fairer.', 'A clear **point** in the first sentence.'],
        ['**Evidence/reason:** Students are the people who experience those rules every day, so they notice problems that adults might overlook.', 'The **reason** explains why the point is true.'],
        ['**Example:** For instance, a student council might point out that the lunch queue is so long that pupils have only ten minutes to eat.', 'A specific **example** makes the argument concrete.'],
        ['**Link:** Therefore, listening to students would improve both fairness and daily life at school.', 'The **link** returns to the question and closes the paragraph.'],
      ],
      summary: ['One idea per paragraph: point, reason, example, link.'],
    }),
  ]),

  lesson('ws-check', 'Self-check against the criteria', '✅', [
    note('A note on marks', [
      'These checklists are **for your own revision**. They are not an official Cambridge mark.',
      'Your teacher’s feedback and the mark scheme for your paper are the final guide.',
      'Content and structure marks reward **covering every bullet, developing ideas and organising well**. Language marks reward **accurate, varied and well-chosen language**.',
    ]),
    steps('Email checklist',
      'Did I answer **every bullet**, each in its own paragraph?',
      'Is the tone **friendly and natural** (contractions, questions, feelings) but still accurate?',
      'Does each paragraph have a **detail**, not just a statement?',
      'Did I start with a greeting and end with a friendly close and sign-off?',
      'Check **tenses, spelling, apostrophes and capital letters**. Is the length within the limit?',
    ),
    steps('Review checklist',
      'Is there a **title** and an opening that names the subject and gives an overall view?',
      'Did I describe **specific details** instead of only saying “good” or “bad”?',
      'Is there **at least one criticism** and one strong positive, each with a reason?',
      'Did I **recommend** it to someone specific?',
      'Have I used present tense for description and checked punctuation?',
    ),
    steps('Report checklist',
      'Is there a **title**, a short introduction with the aim, and clear **headings**?',
      'Is the tone **formal and neutral**, with no contractions or slang?',
      'Do my recommendations **answer the problems** I described and are they realistic?',
      'Did I give figures or examples to support claims?',
      'Is there a short conclusion?',
    ),
    steps('Essay checklist',
      'Is my **opinion** clear in the introduction and again in the conclusion?',
      'Is each paragraph about **one idea** with a reason and an example?',
      'Did I use **linking words** and vary my sentence beginnings?',
      'Did I acknowledge another view if the task asks for a balanced essay?',
      'Is the register formal, and is every sentence correct?',
    ),
    steps('Article checklist',
      'Is there a **headline** and a hook that makes people want to read on?',
      'Do I speak to the reader (you, questions) in a lively but accurate voice?',
      'Are my arguments **developed with examples**, with a clear position?',
      'Does the ending leave an impression or call to action?',
      'Did I check spelling, tenses and the word limit?',
    ),
    dont('Last two minutes',
      ['Read line by line for missing words', 'Check names, capital letters and apostrophes', 'Count a few lines to estimate length'],
      ['Rewriting whole paragraphs', 'Adding words you are unsure of', 'Leaving the final sentence unfinished']),
  ]),

  lesson('ws-read', 'Reading practice', '📖', [
    tryIt('Passage 1: The floating library', {
      task: [
        '**Read the passage, then answer the questions on paper.**',
        'Every morning at six, a small blue boat leaves the harbour at Port Meadow and chugs slowly along the river. It is not carrying fish or tourists. It carries books. The “floating library” was started eight years ago by a retired teacher, Mrs Okafor, after she noticed that children in the riverside villages had to walk nearly two hours to reach the nearest school library.',
        'The boat stops at six villages. At each one, children queue on the wooden jetty, hand back their old books and carefully choose new ones. Mrs Okafor says the quiet ones surprise her most. “They arrive with their heads down,” she smiles, “and leave with a story under their arm and a grin.”',
        'Running the boat is not easy. Fuel is expensive, and in the rainy season the river rises so fast that some stops have to be cancelled. Even so, more than four hundred children now borrow books regularly, and a local company has promised to pay for a second boat next year.',
        '**Questions:** (a) Why was the floating library started? (b) How often does it leave the harbour? (c) What problem do the organisers face in the rainy season? (d) What does the phrase “a story under their arm and a grin” suggest about the children? (e) What does “regularly” suggest about the borrowers?',
      ],
      hint: 'Find the sentence that answers each question, then put it in your own words.',
      answer: [
        '(a) Because children in the riverside villages had to walk nearly two hours to reach a school library.',
        '(b) Every morning (daily) at six.',
        '(c) The river rises so quickly that some stops have to be cancelled.',
        '(d) It suggests the children are **happy and excited** to have a book, and that visiting the boat lifts their mood.',
        '(e) It suggests they borrow **often**, not just once, so the library is well used.',
      ],
      why: ['(a)–(c) are **factual** answers found in the text.', '(d) is an **inference**: use the image of grinning children and the contrast with “heads down”.', '(e) asks for the meaning of a word **in context**.'],
    }),
    tryIt('Passage 2: Phones in class?', {
      task: [
        '**Read the passage, then answer the questions on paper.**',
        'Whenever the idea of allowing phones in lessons comes up, teachers groan and students cheer. Yet the argument is not as simple as it sounds. Used well, a phone is a dictionary, a calculator and a camera in one pocket. In my own history lesson last term, we photographed an old map and zoomed in to read the tiny names; no textbook could have done that.',
        'The danger, of course, is distraction. Even the best-behaved student can be tempted by a message that buzzes during a difficult explanation. Studies suggest that merely having a phone on the desk, switched on, makes it harder to concentrate.',
        'My view is that blanket bans and free-for-alls are both mistakes. A fairer approach would be to keep phones in bags by default, and invite students to use them only when the teacher says so. That way, we keep the benefits without the temptation.',
        '**Questions:** (a) Give one way the writer used a phone in a history lesson. (b) According to the writer, why can a phone be a problem even when it is not being used? (c) What is the writer’s final opinion? (d) What does “blanket bans” mean? (e) How can you tell the writer is partly in favour of phones?',
      ],
      hint: 'In (c) and (e) decide the writer’s attitude and quote a phrase that shows it.',
      answer: [
        '(a) They photographed an old map and zoomed in to read the small names.',
        '(b) Simply having the phone switched on at the desk makes it harder to concentrate.',
        '(c) Phones should stay in bags by default and be used only when the teacher allows it.',
        '(d) Rules that forbid something **completely and for everyone**.',
        '(e) The writer praises phones as “a dictionary, a calculator and a camera in one pocket” and describes a lesson where a phone was useful.',
      ],
      why: ['(c) combines the writer’s **balanced** conclusion into one sentence.', '(d) uses context: “blanket bans and free-for-alls” are opposite extremes.', '(e) needs **evidence** from the text, not only your impression.'],
    }),
  ]),
]);
