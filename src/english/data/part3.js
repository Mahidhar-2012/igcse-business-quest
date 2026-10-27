import { note, dont, bank, model, steps, lesson, section } from './helpers.js';

export const essay = section('essay', 'Essay (Ex 6)', '🧠', 'violet', 'Argue a point with clear paragraphs and reasons', [
  lesson('es-basics', 'What an essay is', '🏛️', [
    note('Purpose and reader', [
      'An essay **argues a point of view** or **weighs two sides** of a topic. The reader is a teacher or examiner, so the tone is **formal and thoughtful**.',
      'Read the task to see whether it asks for **your opinion** or **both sides**. Check the bullets: they usually show the structure expected.',
      'Essays have **no headings** and **no greeting**. They flow in paragraphs.',
    ]),
    steps('Essay shape',
      '**Introduction**: introduce the topic and say what you will discuss (2–3 sentences).',
      '**Paragraph 1**: first main point plus reason and example.',
      '**Paragraph 2**: second point, or the opposing view.',
      '**Paragraph 3** (if needed): a further point or counter-argument.',
      '**Conclusion**: your final opinion, linked to the arguments above.',
    ),
    note('One-sided versus balanced', [
      '**One-sided** (agree or disagree): every paragraph supports your view. You may briefly mention the opposite and then explain why you disagree.',
      '**Balanced** (discuss both sides): give fair space to each side, then state your own conclusion.',
      'Whichever you choose, **state your position clearly** in the introduction or conclusion.',
    ]),
  ]),
  lesson('es-paragraphs', 'Strong paragraphs', '🧱', [
    steps('PEEL paragraph',
      '**P**oint: the idea in one sentence.',
      '**E**vidence or reason: why it is true.',
      '**E**xample: a specific case, fact or experience.',
      '**L**ink: connect back to the question.',
    ),
    bank('Connectives for essays',
      ['Adding', ['{{Furthermore,}}', '{{In addition,}}', '{{What is more,}}']],
      ['Contrasting', ['{{However,}}', '{{On the other hand,}}', '{{Nevertheless,}}', '{{Although…}}']],
      ['Explaining', ['{{As a result,}}', '{{Consequently,}}', '{{This is because…}}']],
      ['Concluding', ['{{In conclusion,}}', '{{To sum up,}}', '{{All things considered,}}']],
    ),
    note('Opinion phrases that sound mature', [
      '{{It could be argued that…}}',
      '{{Many people believe that…, but I disagree because…}}',
      '{{From my point of view,}}',
      '{{There is no doubt that…}}',
      'Do not overuse "I think". Vary your phrasing.',
    ]),
    dont('Essay do and avoid',
      ['Support every claim with a reason', 'Use varied connectives', 'Keep paragraphs focused on one idea', 'Finish with a clear conclusion'],
      ['One giant paragraph', 'Repeating the same argument in new words', 'Introducing new points in the conclusion', 'Informal language and slang']),
  ]),
  lesson('es-model-bal', 'Model: balanced essay', '⚖️', [
    model('Model essay: part-time jobs for teenagers', {
      task: 'Some people think teenagers should have part-time jobs while they are at school. Write an essay giving your views. (Original practice task)',
      words: 'About 190 words',
      paras: [
        'Whether teenagers should take part-time jobs while still at school is a question that divides opinion. Some see work as a valuable education in itself, while others fear it harms studies.',
        'On the one hand, a part-time job teaches skills that classrooms rarely provide. Young people learn to manage money, arrive on time and deal politely with customers. For example, a teenager working in a bakery on Saturdays quickly learns responsibility and teamwork, which will help in future careers.',
        'On the other hand, long working hours can leave students exhausted. A teenager who finishes a shift at ten at night may struggle to concentrate in class the next day, and homework can easily be neglected. Moreover, the money earned sometimes encourages spending rather than saving, which defeats the purpose of learning about finance.',
        'In my opinion, part-time work is beneficial as long as it is limited. A few hours at weekends can build confidence and independence without damaging grades. In conclusion, teenagers should be encouraged to work, provided parents and schools help them find a sensible balance.',
      ],
      why: [
        'The introduction **states the debate** and previews both sides.',
        'Each body paragraph follows **PEEL**: point, reason, example, link.',
        'Connectives ({{On the one hand}}, {{On the other hand}}, {{Moreover}}) **guide the reader**.',
        'The conclusion gives a **clear, qualified opinion** that grows from the arguments.',
      ],
    }),
  ]),
  lesson('es-model-one', 'Model: one-sided essay', '➡️', [
    model('Model essay: cooking lessons', {
      task: '"Every school should make cooking lessons compulsory." Write an essay giving your opinion. (Original practice task)',
      words: 'About 180 words',
      paras: [
        'Cooking is something nearly everyone does for a lifetime, yet many young people leave school unable to prepare a simple meal. For this reason, I strongly believe that every school should make cooking lessons compulsory.',
        'First and foremost, cooking is a basic life skill. A teenager who can make a healthy meal from fresh ingredients is far less likely to rely on expensive takeaways, which saves money and protects health. For instance, students who learn to cook pasta with vegetables can feed themselves well on a small budget.',
        'Furthermore, cooking lessons teach valuable lessons beyond the kitchen. Following a recipe develops reading and maths skills, and working in a team to prepare a dish encourages cooperation and communication.',
        'Some people argue that parents should teach cooking at home. However, not all families have the time or confidence to do so, and school lessons ensure that no student is left behind.',
        'In conclusion, compulsory cooking lessons would produce healthier, more independent adults, so schools should introduce them without delay.',
      ],
      why: [
        'Opinion is stated in the **introduction** and repeated in the **conclusion**.',
        'Every body paragraph supports the same view with **reason and example**.',
        'The fourth paragraph **acknowledges the opposite view and answers it**, which shows depth.',
        'Tone is formal, with strong connectives ({{First and foremost}}, {{Furthermore}}, {{However}}).',
      ],
    }),
    note('Quick essay planning', [
      'Pick **2–3 strong ideas**. Quality beats quantity within the word limit.',
      'Give each idea a **mini example** from daily life, school, family or the news.',
      'Decide your **conclusion first** if the task asks for an opinion. It keeps your argument consistent.',
    ]),
  ]),
]);

export const article = section('article', 'Article (Ex 6)', '📰', 'rose', 'A lively piece that grabs readers and keeps them reading', [
  lesson('ar-basics', 'What an article is', '🗞️', [
    note('Purpose and reader', [
      'An article is written for a **magazine, website or newsletter**. Your aim is to **interest, inform or persuade** readers.',
      'The tone is **engaging**: more lively than an essay, less formal than a report. Think of speaking directly to the reader.',
      'Articles often have a **catchy title** and a strong opening line.',
    ]),
    steps('Article shape',
      '**Headline**: short, eye-catching, relevant.',
      '**Opening**: grab attention with a question, surprising fact or short scene.',
      '**Body**: two or three paragraphs, each with a clear point and example.',
      '**Ending**: leave the reader with a thought, challenge or call to action.',
    ),
    note('One-sided or two-sided', [
      'A **one-sided** article persuades the reader to agree with you. Use strong examples and confident language.',
      'A **two-sided** article explores more than one view fairly before giving your opinion.',
      'Check the task wording: **"give your views"** is usually one-sided, **"discuss"** or "the advantages and disadvantages" is balanced.',
    ]),
  ]),
  lesson('ar-hook', 'Hooks and endings', '🎣', [
    bank('Ways to open an article',
      ['Question', ['{{Have you ever wondered why…?}}', '{{What would you do if…?}}']],
      ['Surprising fact', ['{{Every year, more than a million people…}}', '{{It might sound unbelievable, but…}}']],
      ['Mini-story', ['{{Last month, I watched a boy of ten fix a broken bike with nothing but a spanner and a smile.}}']],
      ['Direct address', ['{{If you\'ve ever felt tired on a Monday morning, you\'re not alone.}}']],
    ),
    bank('Ways to end',
      ['Call to action', ['{{So next time you…, why not give it a try?}}', '{{It\'s time we all…}}']],
      ['Strong thought', ['{{After all, small changes can make a big difference.}}']],
      ['Question', ['{{Isn\'t it time you tried it?}}']],
    ),
    dont('Article do and avoid',
      ['Use a vivid, specific example', 'Speak directly to readers ("you")', 'Vary sentence length for rhythm', 'Keep to the topic in the task'],
      ['Beginning "In this article I will…"', 'Long, dull lists with no explanation', 'Slang or text-speak', 'Ending abruptly']),
  ]),
  lesson('ar-model-one', 'Model: one-sided article', '📣', [
    model('Model article: volunteering', {
      task: 'Your school magazine is running a series on how teenagers spend free time. Write an article persuading students to try volunteering. (Original practice task)',
      words: 'About 180 words',
      paras: [
        '**Give a Little, Gain a Lot**',
        'What if the best thing you did this month cost nothing at all? Volunteering, giving a few hours each week to help others, might be the most rewarding hobby you have never tried.',
        'Firstly, it builds skills that no exam can measure. When I helped at a local animal shelter, I learned to stay calm under pressure, to cooperate with strangers and to take responsibility for another living creature. Employers and universities notice these qualities.',
        'Secondly, volunteering is good for you. Studies suggest that helping others lifts your mood, and I can believe it: after an afternoon of walking dogs, I always went home smiling.',
        'Of course, you may think you are too busy. But even two hours on a Saturday can make a difference, and you will meet people you would never normally talk to.',
        'So why not look for a cause that matters to you? A small effort from you could change someone\'s week, and it might just change yours.',
      ],
      why: [
        'The **headline** is short and has a pleasing balance.',
        'A **question** opens the piece, then the topic is revealed.',
        'The writer uses **personal experience** as proof, which feels authentic.',
        'The ending is a **call to action** that directly addresses the reader.',
      ],
    }),
  ]),
  lesson('ar-model-two', 'Model: two-sided article', '🔀', [
    model('Model article: homework', {
      task: 'Write an article for your school website discussing whether students should have homework every night. (Original practice task)',
      words: 'About 180 words',
      paras: [
        '**Homework: Help or Hindrance?**',
        'Few topics start an argument faster than homework. Ask ten students and you will probably hear ten different opinions, so let us look at both sides.',
        'Supporters say regular homework helps knowledge stick. Practising a skill in a quiet space, they argue, is the best way to remember it, and it teaches students to manage their own time. Many teachers also believe it prepares us for the independence of university.',
        'Critics, however, point out that after a full day at school many students are simply exhausted. Homework can steal time from sleep, sport and family, and it can create stress, particularly when students have several tasks due on the same day.',
        'Personally, I think the answer lies in balance. Short, meaningful tasks, perhaps three evenings a week, would keep the benefits while leaving time to relax. After all, learning does not stop when the bell rings, but neither should life.',
      ],
      why: [
        'Opening line **hooks** with a relatable claim.',
        'Both viewpoints get **fair, equal space**.',
        'The writer’s **own opinion** appears near the end, as a sensible compromise.',
        'A short **closing line** leaves a memorable thought.',
      ],
    }),
    note('Article checklist', [
      'Is there a **headline**?',
      'Does the opening **hook** the reader?',
      'Have I used **"you"** or a question at least once to connect?',
      'Is my **tone** lively but still accurate?',
      'Does the ending **leave an impression**?',
    ]),
  ]),
]);
