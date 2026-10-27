import { note, dont, bank, steps, lesson, section } from './helpers.js';

export const language = section('language', 'Language boosters', '🚀', 'orange', 'Small upgrades that lift every writing task', [
  lesson('lg-sentences', 'Sentences and linking', '🔗', [
    note('Vary your sentences', [
      'Mix **short** sentences (for impact) with **longer** ones that join ideas.',
      'Start some sentences with something other than "I" or "The": a time phrase ({{Last week,}}), a linking word ({{Although…}}) or an -ing phrase ({{Walking home,}}).',
      'Join ideas with **who / which / that**: "{{My cousin, who lives in Lagos, is visiting.}}"',
    ]),
    bank('Linking words by job',
      ['Add', ['{{and, also, as well as, in addition}}']],
      ['Contrast', ['{{but, however, although, whereas, despite}}']],
      ['Cause and result', ['{{because, since, so, therefore, as a result}}']],
      ['Order', ['{{firstly, then, after that, finally}}']],
      ['Example', ['{{for example, for instance, such as}}']],
    ),
    note('Avoid repetition', [
      'Do not start three sentences in a row with the same word.',
      'Use **pronouns** (it, they, this) or **synonyms** to avoid repeating a noun.',
      'Keep a small bank of replacements: {{important → essential}}, {{big → significant}}, {{show → demonstrate}}.',
    ]),
  ]),
  lesson('lg-vocab', 'Vocabulary upgrades', '💎', [
    bank('Swap simple words for stronger ones',
      ['good →', ['{{excellent, enjoyable, beneficial, impressive}}']],
      ['bad →', ['{{poor, disappointing, harmful, dreadful}}']],
      ['big →', ['{{enormous, significant, vast, considerable}}']],
      ['say →', ['{{explain, mention, suggest, announce}}']],
      ['get →', ['{{obtain, receive, earn, achieve}}']],
    ),
    note('Use new words safely', [
      'Only use a word if you are **sure of its meaning** and spelling.',
      'Learn words in **phrases** ({{make an effort}}, {{take responsibility}}), not alone.',
      'One well-chosen advanced word is better than five wrong ones.',
    ]),
    note('Collocations to learn', [
      '{{do homework}} / {{make a mistake}} / {{take a break}} / {{pay attention}}',
      '{{heavy traffic}} / {{strong opinion}} / {{fast food}} / {{high price}}',
      '{{reach a decision}} / {{raise awareness}} / {{solve a problem}}',
    ]),
  ]),
  lesson('lg-accuracy', 'Accuracy checks', '🔧', [
    note('Tenses', [
      'Stay consistent: **do not slide** between past and present without a reason.',
      'Use **past simple** for finished events ({{I visited}}), **present perfect** for experience up to now ({{I have visited}}), **will / going to** for plans.',
      'Watch irregular verbs: {{went, saw, took, began, bought}}.',
    ]),
    note('Agreement and small words', [
      '**Subject–verb agreement**: "{{The students are}}", "{{Each student has}}".',
      '**Articles**: {{a}} before consonant sounds, {{an}} before vowel sounds, none for general plural ideas.',
      '**Prepositions**: {{interested in}}, {{good at}}, {{depend on}}, {{arrive at/in}}.',
    ]),
    note('Spelling and punctuation', [
      'Frequent trouble words: {{definitely, separate, receive, necessary, environment, government}}.',
      'Use **full stops** and **capital letters** correctly. Avoid joining sentences with commas only.',
      'Apostrophes: {{it\'s}} = it is, {{its}} = belonging to it.',
    ]),
    dont('Proofreading routine',
      ['Check one thing at a time: tenses, then spelling, then punctuation', 'Read from the last sentence backwards to spot slips', 'Fix handwriting that could be misread'],
      ['Rewriting whole paragraphs at the end', 'Crossing out messily', 'Ignoring red-flag words you are unsure of']),
  ]),
  lesson('lg-tone', 'Formal and informal tone', '🎭', [
    note('Matching tone to reader', [
      '**Informal**: friends, family. Use contractions, friendly phrases and exclamation marks.',
      '**Neutral / semi-formal**: magazine reviews and articles. Friendly but polished.',
      '**Formal**: reports and essays. No contractions, no slang, careful vocabulary.',
    ]),
    bank('Informal → formal',
      ['Phrasing', ['{{get → obtain}}, {{ask for → request}}, {{kids → children}}, {{a lot of → many / considerable}}']],
      ['Openings', ['{{Hi → Dear…}}, {{I\'m writing to say → I am writing to inform you}}']],
      ['Closings', ['{{See you → Yours sincerely}}, {{Bye → Kind regards}}']],
    ),
  ]),
]);

export const listenSpeak = section('listen', 'Listening & Speaking', '🎧', 'teal', 'Quick wins for Papers 2 and 3', [
  lesson('ls-listening', 'Listening tips', '👂', [
    steps('Before, during and after the recording',
      '**Before**: read every question and underline key words. Guess what type of word is missing (number, place, name).',
      '**First listening**: write answers quickly, using short forms.',
      '**Second listening**: check and complete the gaps you missed.',
      '**After**: make sure each answer is the **right form** and spelled sensibly.',
    ),
    note('Watch for changes of mind', [
      'Speakers often **correct themselves** ("It starts at five… no, sorry, half past five"). The final version is the answer.',
      'Distractors repeat the words from the question but give a different fact.',
      'Numbers: listen carefully to **13 vs 30**, **15 vs 50**, and dates.',
    ]),
    note('Writing your answers', [
      'Copy words exactly as they would be spelled; names are often spelled out.',
      'Do not write more than the question asks.',
      'If you miss one, **keep listening**: do not lose the next answer.',
    ]),
  ]),
  lesson('ls-speaking', 'Speaking tips', '🎤', [
    note('Develop your answers', [
      'Avoid one-word answers. Add a **reason**, an **example** and a **feeling**.',
      'Use the pattern **Answer → Because → For example**.',
      'If you do not know a word, **explain around it** ("the thing you use to…") and keep going.',
    ]),
    bank('Useful speaking phrases',
      ['Buying time', ['{{That\'s an interesting question…}}', '{{Let me think for a moment…}}']],
      ['Giving opinions', ['{{In my opinion…}}', '{{I\'d say that…}}', '{{What I like about it is…}}']],
      ['Adding detail', ['{{For example…}}', '{{Another reason is…}}', '{{Also…}}']],
    ),
    dont('Speaking do and avoid',
      ['Speak clearly at a steady pace', 'Look at the examiner and smile', 'Ask for repetition politely if needed', 'Prepare topics from your own life'],
      ['Memorised speeches', 'Long silences', 'Whispering', 'Only answering yes or no']),
  ]),
  lesson('ls-routine', 'Study routine', '📆', [
    note('Weekly plan', [
      '**Writing**: one full piece each week, rotating formats.',
      '**Reading**: one article in English each day (news, blogs, books).',
      '**Listening**: a short podcast or video with subtitles off.',
      '**Speaking**: talk about your day aloud for two minutes.',
    ]),
    note('Learn from your errors', [
      'Keep a **mistake list**: write the wrong version and the correct one.',
      'Review it before each new piece of writing.',
      'Ask a teacher to mark one piece against the content and language criteria.',
    ]),
  ]),
]);
