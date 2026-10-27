import { note, dont, bank, model, steps, lesson, section } from './helpers.js';

export const review = section('review', 'Review (Ex 6)', '⭐', 'amber', 'Give an honest, balanced opinion about something you know', [
  lesson('rv-basics', 'What a review is', '🎬', [
    note('Purpose and reader', [
      'A review **describes** something (a film, book, restaurant, place, game, app, event) and gives your **judgement**, so readers can decide whether to try it.',
      'It is usually written for a **school magazine or website**, so the tone is **friendly but fairly polished**, not slangy.',
      'You must cover every bullet in the task, commonly: **what it is**, **what you liked or disliked**, and **a recommendation**.',
    ]),
    steps('Review structure',
      '**Title** (optional): short and catchy.',
      '**Introduction**: what you are reviewing, where or when, and your overall feeling in one line.',
      '**Description**: key facts a reader needs (plot, setting, menu, features).',
      '**Evaluation**: good points and weaker points, each with a reason.',
      '**Recommendation**: who should try it, and your verdict.',
    ),
    note('Balance wins marks', [
      'A review made entirely of praise sounds like an advert. A review of only complaints sounds bitter.',
      'Include **at least one honest criticism** and **at least one strong positive**.',
      'Support every opinion with a **reason or example**: not "it was boring" but "{{the middle dragged because nothing new happened for half an hour}}".',
    ]),
  ]),
  lesson('rv-language', 'Language for reviews', '🗣️', [
    bank('Opinion language',
      ['Positive', ['{{a real highlight was…}}', '{{what impressed me most…}}', '{{it was well worth the money}}', '{{vivid, entertaining, memorable}}']],
      ['Mixed or negative', ['{{unfortunately, it fell short of…}}', '{{my only complaint is…}}', '{{it could have been improved by…}}', '{{slow-paced, repetitive, overpriced}}']],
      ['Recommending', ['{{I would highly recommend this to…}}', '{{it is ideal for anyone who enjoys…}}', '{{give it a miss if you prefer…}}']],
    ),
    note('Describe, do not just label', [
      'Replace weak adjectives ("nice", "good", "bad") with **precise ones**: {{gripping}}, {{cosy}}, {{chaotic}}, {{reliable}}, {{tedious}}.',
      'Use **detail**: the colour of the room, a line from a scene, the price, the staff\'s manner.',
      'Add a **comparison** when you can: "{{unlike most action films, this one takes time to develop its characters}}".',
    ]),
    dont('Review do and avoid',
      ['Use present tense to describe plot and features', 'Mix short and long sentences', 'Give a clear final verdict', 'Write for people who have not seen it'],
      ['Telling the whole plot including the ending', 'Repeating "good" and "nice" ten times', 'Listing facts with no opinion', 'Ending without a recommendation']),
  ]),
  lesson('rv-model', 'Model review', '📝', [
    model('Model review: a local café', {
      task: 'Write a review for your school magazine of a café, restaurant or other place you have visited. Include: what it is like, what you liked and disliked, and who you would recommend it to. (Original practice task)',
      words: 'About 180 words',
      paras: [
        '**A Corner of Calm: Bluebird Café**',
        'Tucked behind the bus station, Bluebird Café is easy to miss, but it is the kind of place you will want to tell your friends about. I visited last Saturday and I have been thinking about the visit ever since.',
        'The first thing you notice is the atmosphere. Mismatched armchairs, shelves of secondhand books and soft music make it feel more like someone\'s living room than a business. The menu is short but clever: the lemon pancakes were light and tangy, and the hot chocolate came with a tiny marshmallow flower on top.',
        'However, it is not perfect. We waited nearly twenty minutes for our drinks, and on a busy afternoon the noise level rose until we could barely hear each other. The prices are also a little higher than at other cafés nearby.',
        'Even so, I would recommend it to students who need a quiet place to study on weekday mornings or to anyone who loves cosy surroundings. Just go early, bring a book and order the pancakes.',
      ],
      why: [
        'A **hooking opening** gives place, time and a first opinion.',
        'The description is **specific** (lemon pancakes, marshmallow flower), not generic.',
        'One paragraph praises and one **honestly criticises**, each with reasons.',
        'The ending names **who** it suits and **what** to try, so the recommendation is clear.',
      ],
    }),
    note('Making a review your own', [
      'Choose something you really **know well**: strong detail comes from real experience.',
      'Keep a few ready topics (a film, a game, a trip, a restaurant) so you can adapt quickly.',
      'Practise rewriting the same review as **magazine**, **website** and **letter** versions to adjust tone.',
    ]),
  ]),
]);

export const report = section('report', 'Report (Ex 6)', '📋', 'sky', 'Clear headings, facts, and sensible suggestions', [
  lesson('rp-basics', 'What a report is', '🗂️', [
    note('Purpose and reader', [
      'A report **gives information** about a situation and often **recommends action**. Your reader may be a head teacher, a club leader or a local council.',
      'The tone is **formal and neutral**: no slang, no chatty asides, limited use of "I".',
      'A report is **organised for scanning**: headings help the reader find each section quickly.',
    ]),
    steps('Report layout',
      '**Title**: say what the report is about (e.g. {{Report on student facilities}}).',
      '**Introduction**: one or two sentences stating the **aim**.',
      '**Headed sections**: one heading per bullet or theme.',
      '**Conclusion / recommendation**: a short, decisive ending.',
    ),
    note('Headings and paragraphs', [
      'Use headings taken from the task\'s bullets (e.g. {{Current situation}}, {{Problems}}, {{Suggestions}}).',
      'Under each heading write **one short paragraph** or a **few concise sentences**.',
      'Bullet points are acceptable in moderation, but the examiner still needs to see **full, accurate sentences** to award language marks.',
    ]),
  ]),
  lesson('rp-language', 'Formal language', '🧾', [
    bank('Report phrases',
      ['Introducing', ['{{The aim of this report is to…}}', '{{This report outlines…}}', '{{It is based on a survey of…}}']],
      ['Describing findings', ['{{The majority of students felt that…}}', '{{Approximately half of those asked…}}', '{{It became clear that…}}']],
      ['Recommending', ['{{I would suggest that…}}', '{{It is recommended that…}}', '{{One possible solution would be to…}}']],
      ['Concluding', ['{{In conclusion,}}', '{{Overall, it is evident that…}}', '{{Taking everything into account,}}']],
    ),
    dont('Report do and avoid',
      ['Stay objective and polite', 'Back claims with figures or examples', 'Give practical recommendations', 'Use passive forms sparingly ("it was found that")'],
      ['Contractions and slang', 'Emotional language ("this is awful!")', 'Recommendations that are unrealistic', 'A conclusion that adds nothing']),
    note('Make recommendations usable', [
      'A recommendation is **specific**: not "improve the library" but "{{extend opening hours until 6 p.m. and add two more computers}}".',
      'Add a **reason or benefit**: "{{which would help students who stay late for clubs}}".',
      'Order them from **most important** to least.',
    ]),
  ]),
  lesson('rp-model', 'Model report', '📝', [
    model('Model report: school canteen', {
      task: 'The head teacher has asked for a report on the school canteen. Include: what is good about it, what the problems are, and your recommendations. (Original practice task)',
      words: 'About 180 words',
      paras: [
        '**Report on the School Canteen**',
        '**Introduction**',
        'The aim of this report is to describe how students currently use the canteen and to suggest improvements. It is based on conversations with students in several year groups.',
        '**Strengths**',
        'Most students agree that the food is fresh and reasonably priced. The daily vegetarian option is particularly popular, and staff are generally friendly and efficient.',
        '**Problems**',
        'The main difficulty is overcrowding at lunchtime. Roughly half of those asked said they wait more than ten minutes to be served, leaving little time to eat. In addition, there are too few seats, so many students eat standing up or leave early.',
        '**Recommendations**',
        'I would suggest staggering lunch breaks by year group, which would shorten queues. It is also recommended that two more serving points be opened and that outdoor seating be provided in dry weather.',
        '**Conclusion**',
        'With a few practical changes, the canteen could become a more relaxing and efficient space for all students.',
      ],
      why: [
        'Headings match the **task bullets**, so the reader sees coverage at once.',
        'Language is **formal** and neutral, with phrases such as {{The aim of this report is to…}}.',
        'Claims are backed by **specific detail** (waiting time, seat shortage).',
        'Recommendations are **practical** and linked to the problems named earlier.',
      ],
    }),
    note('Common report mistakes', [
      'Writing an essay in disguise: reports need **headings** and **recommendations**.',
      'Mixing informal and formal tone in one report.',
      'Forgetting to **link recommendations to problems**.',
      'Running out of time before the conclusion: plan the headings first so you can pace yourself.',
    ]),
  ]),
]);
