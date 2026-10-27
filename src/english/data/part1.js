import { note, dont, bank, model, steps, lesson, section } from './helpers.js';

export const overview = section('overview', 'Exam map', '🧭', 'sky', 'How the papers work and how marks are won', [
  lesson('ov-papers', 'The three papers', '📚', [
    note('Paper 1: Reading & Writing', [
      'Paper 1 is the biggest paper. It starts with **reading exercises** (Exercises 1–4) and ends with **two writing tasks**.',
      'Exercise 5 is an **informal email** to a friend or relative. Exercise 6 is a **longer piece** whose type changes: review, report, essay or article.',
      'Reading exercises test whether you understand texts. Writing exercises test **content** (what you say) and **language** (how well you say it).',
    ]),
    note('Paper 2: Listening', [
      'You hear recordings **twice**, and answer short questions or fill in gaps.',
      'Answers are usually **short**: a word, a number or a few words. Long answers waste time and can lose marks.',
      'Read the questions **before** the recording starts so you know what to listen for.',
    ]),
    note('Paper 3: Speaking', [
      'A short conversation with an examiner (0510 is the version where speaking counts towards the grade; 0511 reports it separately).',
      'You talk about a topic you have prepared, then answer follow-up questions.',
      'Examiners reward **developed answers**, a range of vocabulary and a natural flow, not memorised speeches.',
    ]),
    note('Check your own paper', [
      'Timings, mark totals and word limits can differ between the **Core** and **Extended** papers, and between years.',
      'Always read the **instructions on the front page** and the **bracketed marks** beside each question.',
      'Past papers on the Cambridge website show the exact layout you will face.',
    ]),
  ]),
  lesson('ov-marks', 'How writing marks work', '🎯', [
    note('Two marks, two jobs', [
      'Every long writing task earns marks in two groups: **content and structure**, and **language** (vocabulary, grammar, spelling, punctuation).',
      'A typical split for a 150–200 word task is around **8 marks for content** and **8 marks for language**. Your paper states the exact numbers.',
      'You can be strong in one and weak in the other, so train **both**.',
    ]),
    note('What earns content marks', [
      '**Cover every bullet** in the task. Missing one means losing marks immediately.',
      '**Develop** each point: give a reason, an example or a detail. A bare statement earns little.',
      'Stay **on task**: right format, right reader, right purpose.',
      'Use a clear **structure**: opening, organised paragraphs, ending.',
    ]),
    note('What earns language marks', [
      '**Accuracy**: correct tenses, agreement, spelling and punctuation.',
      '**Range**: a mix of short and long sentences and some less common words used correctly.',
      '**Tone**: informal for friends, formal for reports and articles to an audience.',
      '**Linking**: connectives and pronouns that join ideas smoothly.',
    ]),
    note('The word limit', [
      'Aim for the **middle of the range**. If the task says 150–200 words, plan for roughly 170–190.',
      'Writing far **below** the minimum means you cannot develop the points.',
      'Writing far **above** the maximum rarely helps: content beyond the limit may not be credited and mistakes pile up.',
      'Practise counting: one line of your handwriting is usually 8–12 words, so you can estimate quickly.',
    ]),
  ]),
  lesson('ov-time', 'Time and planning', '⏱️', [
    steps('A calm plan for a writing task',
      '**Read** the task twice. Underline the audience, purpose and every bullet point.',
      '**Plan** for 3–4 minutes: jot a few words per paragraph. A plan stops rambling.',
      '**Write** the piece, keeping to your plan.',
      '**Check** for 3–5 minutes: bullets covered, word count, spelling, tenses, punctuation.',
    ),
    note('Spending time wisely', [
      'Do not rush the writing tasks. They carry a large share of Paper 1, and you control exactly how well you do.',
      'If a reading question is stuck, **move on** and come back. Never leave blanks at the end.',
      'Leave time to read your writing **line by line**. Most slips (missing letters, tense changes) are caught only this way.',
    ]),
    dont('Common planning mistakes',
      ['Underline the audience and format in the task', 'Tick off each bullet as you write', 'Write a brief plan, even if only keywords'],
      ['Starting to write before you know your three main points', 'Spending most of the time on a long introduction', 'Finishing with no time left to check']),
  ]),
]);

export const reading = section('reading', 'Reading Exercises 1–4', '📖', 'violet', 'Get the marks before the writing even starts', [
  lesson('rd-method', 'A reliable reading method', '🔍', [
    steps('Before you answer anything',
      'Read the **title and headings**: they tell you the topic.',
      'Skim the whole text once for the **main idea** (about 30 seconds).',
      'Read the **question** carefully and underline the key word.',
      'Return to the text and find the part that deals with that key word.',
    ),
    note('Answer from the text, in your own words', [
      'Many answers must be **copied accurately** from the text (names, numbers, short phrases). Copy them exactly.',
      'Other answers ask you to **explain in your own words**. Do not lift whole sentences: change the wording while keeping the meaning.',
      'If a question asks for **one word**, give one word. If it asks for **two reasons**, give two separate reasons.',
    ]),
    note('Watch for traps', [
      'Text and question often use **different words for the same idea** (synonyms). Search for meaning, not only for identical words.',
      'A sentence may mention your key word but answer a **different** question. Read the whole sentence.',
      '"**Not**", "**only**" and "**except**" change the answer completely. Circle them.',
    ]),
  ]),
  lesson('rd-types', 'Question types', '🧩', [
    note('Short answer questions', [
      'Look for the exact sentence that answers. The answer is often **one phrase** next to your key word.',
      'Copy the **right part only**; adding extra words that contradict the answer can lose the mark.',
    ]),
    note('Matching and true/false/not given', [
      'For **matching** tasks, find the clue in each paragraph, then choose. Cross out used options to speed up.',
      '**True** means the text says it. **False** means the text says the opposite. **Not given** means the text does not mention it at all.',
      'Do not use your own knowledge: judge **only** by the text.',
    ]),
    note('Note-making and summaries', [
      'Notes use **short phrases**, not full sentences. Drop articles and linking words.',
      'In a summary, use the text for **facts** but your **own words** for structure.',
      'Keep each point to **one idea**; stay inside the word limit given.',
    ]),
    note('Vocabulary in context', [
      'When asked what a word means, check the **sentences around it**: clues often sit before or after.',
      'Try replacing the word with your answer. If the sentence still makes sense, you are close.',
      'Your answer must work in this text, even if the word has other meanings elsewhere.',
    ]),
  ]),
  lesson('rd-inference', 'Opinions and attitudes', '💭', [
    note('Facts versus opinions', [
      '**Fact**: can be checked ("The festival takes place in July").',
      '**Opinion**: shows a feeling or judgement ("It is the best festival in the region").',
      'Opinion words: {{believe}}, {{in my view}}, {{unfortunately}}, {{clearly}}, strong adjectives such as {{fantastic}} or {{dreadful}}.',
    ]),
    note('Reading between the lines', [
      'Some answers are **suggested**, not stated. Ask: what does the writer feel, and what in the text shows it?',
      'Look at **adjectives, adverbs and verbs** that carry feeling.',
      'Base your inference on a **specific word or phrase**, not a guess.',
    ]),
    note('Using what you read in your writing', [
      'Reading also builds **ideas and vocabulary** for Exercises 5 and 6.',
      'While reading, notice **good phrases** (linking words, opinion phrases) you could reuse.',
      'Note how texts are organised: that is a model for your own paragraphs.',
    ]),
  ]),
]);

export const email = section('email', 'Informal Email (Ex 5)', '✉️', 'green', 'A friendly, organised message that covers every point', [
  lesson('em-basics', 'What the examiner wants', '🎯', [
    note('The task in one line', [
      'You write an **informal email** to a friend, relative or peer. A short situation is given and you must respond to **bullet points** (often three).',
      'Most of the time the bullets are things like: **what happened or will happen**, **your opinion or advice**, and **an invitation or question**.',
      'You are writing to someone you know well, so the tone is **warm and natural**, but the English must still be **accurate**.',
    ]),
    note('Informal does not mean careless', [
      'Informal means **contractions** ({{I\'m}}, {{we\'ll}}), friendly openings and some everyday phrases.',
      'It does **not** mean text-speak ("u", "gr8"), missing capital letters or slang you could not explain.',
      'Examiners still mark **spelling, punctuation and grammar**.',
    ]),
    steps('Email layout',
      '**Greeting**: {{Hi Sam,}} or {{Dear Sam,}}.',
      '**Opening line**: react to the message you received or say why you are writing.',
      '**Body**: one short paragraph per bullet point.',
      '**Closing line**: look forward to the next contact.',
      '**Sign-off**: {{Best wishes,}} / {{See you soon,}} then your first name.',
    ),
  ]),
  lesson('em-paragraphs', 'Building each paragraph', '🧱', [
    note('Develop every bullet', [
      'A bullet is a **prompt**, not the whole answer. Add a **reason**, a **detail** and a **feeling**.',
      'A good body paragraph has about **3–4 sentences**: point, reason, example, link to the reader.',
      'Try the pattern **Say it → Explain it → Show it**.',
    ]),
    model('Developing one bullet', {
      task: 'Bullet: "Say what you did at the weekend."',
      words: 'Weak vs strong',
      paras: [
        '**Weak:** I went to a market. It was good.',
        '**Strong:** On Saturday I went to the night market in town with my cousins. It was packed with stalls selling everything from handmade bags to street food, and I tried grilled corn for the first time. I loved it so much that I went back for seconds!',
      ],
      why: [
        'The strong version names **when**, **where** and **who with**.',
        'It adds a **detail** (grilled corn) and a **feeling** (loved it).',
        'It ends with a **friendly touch** that sounds natural.',
      ],
    }),
    bank('Friendly openings and closings',
      ['Opening', ['{{Thanks for your message, it was great to hear from you!}}', '{{I hope you\'re doing well.}}', '{{Sorry I haven\'t written sooner.}}']],
      ['Moving on', ['{{Anyway, about the trip…}}', '{{By the way,}}', '{{As for the party,}}']],
      ['Closing', ['{{Write back soon and tell me everything!}}', '{{Can\'t wait to see you.}}', '{{Let me know what you think.}}']],
    ),
  ]),
  lesson('em-model', 'Model email', '📝', [
    model('Model email: planning a visit', {
      task: 'Your friend Jordan is coming to stay for a weekend. Write to Jordan about: where you will go, what food to bring, and what you are looking forward to. (Original practice task)',
      words: 'About 170 words',
      paras: [
        'Hi Jordan,',
        'Thanks for your message! I was so excited to hear you\'re coming to stay. I\'ve already started planning the weekend.',
        'On Saturday morning I thought we could take the bus to the old harbour. There\'s a small museum about ships that I think you\'d love, and afterwards we can walk along the sea wall and have lunch at the café where the fish is always fresh. If the weather is good, we might even hire a rowing boat for an hour.',
        'As for food, don\'t worry about bringing much. My mum is making her famous vegetable pie on Saturday night, so you\'ll be well fed. If you really want to bring something, a box of those chocolates you brought last time would be perfect, because everyone in my family fought over them!',
        'What I\'m looking forward to most is just catching up. It feels like ages since we sat down and talked properly, and I have loads of news to tell you.',
        'Let me know what time your train arrives and I\'ll meet you at the station.',
        'See you soon,',
        'Maya',
      ],
      why: [
        'All **three bullets** have their own paragraph and each is developed with detail.',
        'Friendly phrases ({{Thanks for your message}}, {{I\'ve already started planning}}) set the **informal tone**.',
        '**Contractions** and exclamation marks are used naturally, not overdone.',
        'It ends with a **practical question**, keeping the conversation alive.',
      ],
    }),
    note('What to copy from this model', [
      'The **structure**: greeting, opening, one paragraph per bullet, close.',
      'The **detail**: names of places, specific food, small stories.',
      'The **voice**: friendly sentences that still use correct grammar and punctuation.',
      'Do not memorise it: practise **new topics** with the same skeleton.',
    ]),
  ]),
  lesson('em-checks', 'Final email checklist', '✅', [
    dont('Email do and avoid',
      ['Answer every bullet in order', 'Use contractions and friendly phrases', 'Include at least one question or invitation', 'Keep paragraphs short'],
      ['Text-speak or abbreviations', 'Starting every sentence with "I"', 'Copying phrases from the task word for word', 'Forgetting a sign-off']),
    note('Quick proofreading pass', [
      'Read each sentence aloud in your head: do the **verb tenses** agree?',
      'Check **capital letters** for names and sentence starts.',
      'Common slips: {{their/there}}, {{your/you\'re}}, {{its/it\'s}}, {{lose/loose}}.',
      'Count words roughly: are you inside the limit?',
    ]),
  ]),
]);
