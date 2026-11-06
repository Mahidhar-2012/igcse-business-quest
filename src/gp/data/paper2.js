// GP mock Paper 2 — Topic: Digital world. Issue: a minimum age for social media.
// All sources, statements, questions, model answers and mark schemes are ORIGINAL practice material in the style
// of the Cambridge IGCSE 0457 Written Exam. They are not real past papers; people, groups, studies and figures
// are invented. 70 marks.
import { P } from './marks.js';

export const paper2 = {
  id: 'gp-p2',
  title: 'Mock Paper 2 — A minimum age for social media',
  topic: 'Digital world',
  issue: 'Should there be a minimum age for social media?',
  minutes: 85,
  insert: {
    note: 'These sources are original practice material written for this app. The organisations, people, studies and figures are invented.',
    sources: [
      {
        id: 'Source 1', kind: 'Report', title: 'Mind First — young people and screens', byline: 'Mind First, a youth wellbeing charity',
        paras: [
          'More young people than ever use social media, often for several hours a day. Mind First works with teenagers who say that endless scrolling, comparison with others and late-night use leave them anxious and tired at school.',
          'The charity argues the cause is not the teenagers but the way the apps are designed to keep users online for as long as possible. A consequence, it says, is that sleep and concentration suffer during important school years.',
          'Mind First believes childhood should be protected and that companies, not children, should carry the responsibility. It wants a minimum age of 16 for the main social apps, better age checks, and lessons in school on using technology healthily.',
        ],
      },
      {
        id: 'Source 2', kind: 'Article', title: 'A student’s view', byline: 'School magazine',
        paras: [
          'Three worries come up when my friends talk about phones. Some feel social media harms their sleep and mood. Others say the real danger is strangers and scams online, whatever your age. A few argue the biggest problem is simply that we are never taught how to use these tools wisely.',
          'For many of us, social media is also how we keep in touch with family far away and learn about the world — so banning it feels like losing something, not just being protected.',
        ],
      },
      {
        id: 'Source 3', kind: 'Research', title: 'Online poll', byline: 'A school newspaper',
        paras: [
          'A school newspaper asked: “Does social media harm students’ sleep?” It posted a poll on its own social media page. Anyone could vote, and 300 people replied; 68% said yes.',
          'The newspaper concluded that “most students believe social media harms sleep.” It did not record the ages of voters or whether they were students at the school.',
        ],
        table: { caption: 'Online poll result (self-selected, 300 votes)', head: ['Answer', 'Share'], rows: [['Yes, it harms sleep', '68%'], ['No', '22%'], ['Not sure', '10%']] },
      },
    ],
    statements: {
      lead: 'Source 4 — two people give opposite views on a minimum age for social media.',
      a: { name: 'Hana', role: 'parent and teacher', paras: [
        'A minimum age of 16 is the right step. Young children are not ready for the pressures these apps create, and the companies will not act unless the law forces them. Rules already protect children from gambling and alcohol, so protecting them online is nothing new. A clear age limit gives parents and schools something solid to stand behind, and it puts the responsibility on the companies that profit, not on worried families.',
      ] },
      b: { name: 'Theo', role: 'runs online-safety workshops', paras: [
        'An age limit looks strong but will not work. Children already lie about their age, so a ban just drives them to hide their accounts, making them harder to protect. The real answer is education: teaching young people to question what they see and manage their time. Banning social media also cuts teenagers off from friends, family and learning. We should make the apps safer and smarter, not pretend a number fixes everything.',
      ] },
    },
  },
  questions: [
    {
      n: 1, about: 'Sources 1 and 2',
      parts: [
        P('a', 'Identify', 'two effects on teenagers that Mind First (Source 1) links to social media.', 2,
          { points: [{ t: 'Any two of: anxiety / tiredness at school / poor sleep / poor concentration (1 each).', m: 2 }] },
          'One mark each — take the exact effects named in the source.',
          'Two effects named in Source 1 are feeling anxious and being too tired at school (poor sleep and concentration).'),
        P('b', 'Identify', 'a value held by Mind First in Source 1, and explain how it shapes what the charity wants.', 4,
          { points: [
            { t: 'Identifies a value, e.g. childhood should be protected / companies should carry responsibility (1).', m: 1 },
            { t: 'Links the value to an aim (1)', m: 1 },
            { t: 'e.g. because it values protecting childhood, it wants a minimum age / better age checks (1)', m: 1 },
            { t: 'and places responsibility on companies rather than children (1).', m: 1 },
          ] },
          'Name the value, then show how it leads to what the charity asks for.',
          'Mind First values protecting childhood and believes companies, not children, should carry the responsibility. This value shapes its aims: because it wants childhood protected, it calls for a minimum age of 16 and better age checks, and because it blames the app design rather than the teenagers, it wants the companies to be made responsible through the law and schools to teach healthy use.'),
        P('c', 'Analyse', 'Source 1. Describe the perspective of Mind First towards young people and social media.', 6,
          { levels: 'perspective6' },
          'Describe the charity’s viewpoint — issue, cause, consequence, values, aims, action — supported from the source. Do not give your own opinion.',
          'Mind First sees heavy social media use by young people as a wellbeing problem (issue). It identifies the cause not as the teenagers but as apps designed to keep users online as long as possible. The consequence it describes is that anxiety rises and sleep and concentration suffer during important school years. Its values are that childhood should be protected and that companies, not children, should be responsible. Its aims and the action it wants are a minimum age of 16 for the main apps, stronger age checks, and lessons in school on using technology healthily.'),
        P('d', 'Explain', 'which issue about young people online, in Sources 1 and 2, you think is the most significant.', 6,
          { levels: 'significance6' },
          'Pick ONE issue and explain three or four reasons — scale, severity, how long effects last, who is affected.',
          'I think the effect on wellbeing and sleep is the most significant issue. First, it affects very many young people, since Source 1 says more teenagers than ever use these apps for hours a day. Second, it is serious because poor sleep and anxiety harm health and school performance during important years, which can shape a person’s future. Third, the harm can be long-lasting if habits form early. Although Source 2 also raises strangers and scams, I judge wellbeing as most significant because it affects the largest number of ordinary users every day, not only those who meet a specific danger.'),
      ],
    },
    {
      n: 2, about: 'Source 3',
      parts: [
        P('a', 'Evaluate', 'the research in Source 3. Explain its strengths and weaknesses.', 8,
          { levels: 'evaluate8' },
          'Explain how each point affects the quality of the evidence. Cover strengths and weaknesses; use words like representative, biased, valid, reliable.',
          'A strength is that the poll gathered a fairly large number of responses (300) quickly and cheaply, and the question is short and clear, so answers are easy to compare. However, the weaknesses are serious. The sample is self-selected — people chose to vote — so those who already feel strongly about sleep were more likely to reply, which biases the result and makes it unrepresentative. Because ages and whether voters attend the school were not recorded, the conclusion that “most students” believe this is not valid: we cannot be sure the voters were students at all. Posting on the paper’s own page reaches only its followers, again limiting representativeness. Overall the poll is a weak basis for the claim: it is quick but biased and cannot reliably be generalised to all students.'),
        P('b', 'Design', 'a plan to test the claim that “Most students at our school believe social media harms their sleep” (Source 3). Describe your methods and sources.', 6,
          { levels: 'design6' },
          'Name methods and credible sources and explain how each gathers evidence that tests THIS claim about students at the school.',
          'To test the claim I would survey a random sample of students from across all year groups, so the sample represents the whole school rather than only the paper’s followers; this directly tests what students in general think. I would record each respondent’s year group to check the sample is balanced and that they really are students. To add reliability I would keep the question wording neutral and anonymous so people answer honestly. I could also compare the survey with a short set of interviews, which would explain why students answer as they do. Using a random, school-wide sample rather than a self-selected online poll would test the claim with far more representative and valid evidence.'),
      ],
    },
    {
      n: 3, about: 'Source 4',
      parts: [
        P('', 'Evaluate', 'the two arguments in Source 4. Which argument about a minimum age for social media is more convincing? Use the source to support your answer.', 16,
          { levels: 'argue16' },
          'Weigh BOTH people — reasons, evidence, language — quote short phrases, and conclude clearly on which is more convincing.',
          'Hana argues for a minimum age of 16, while Theo argues that education, not an age limit, is the answer. Hana’s reasoning is clear and uses a comparison as evidence: rules “already protect children from gambling and alcohol”, so an online age limit “is nothing new.” This analogy is a strength because it shows age limits are a normal, accepted way to protect children, which makes her case easier to accept. Her point that companies “will not act unless the law forces them” is logical and addresses who holds responsibility.\n\nTheo’s argument is also well reasoned and arguably more practical. His strongest point is evidence-based reasoning: “children already lie about their age”, so a ban may just push them to “hide their accounts”, making them harder to protect. This is a strength because it questions whether the policy would actually work, not just whether it sounds good. His warning that a ban “cuts teenagers off from friends, family and learning” is supported by Source 2, where students value staying in touch.\n\nBoth use fairly balanced, calm language, which makes them credible. On balance I find Theo’s argument slightly more convincing, because he addresses whether the policy would succeed in practice and is backed up by Source 2, whereas Hana’s analogy, though strong, does not answer the problem of children lying about their age. However, Hana is right that responsibility should sit with companies, so the most convincing position may combine her accountability with Theo’s focus on education.'),
      ],
    },
    {
      n: 4, about: 'All the sources',
      parts: [
        P('', 'Recommend', 'ONE course of action Mind First (Source 1) should take to improve young people’s wellbeing online, and justify it using the sources and your own ideas.', 22,
          { levels: 'action22' },
          'Choose one action. Explain its likely impact and consequences, weigh an alternative, use the sources and conclude clearly, linked to the aim.',
          'I recommend that Mind First focus first on getting healthy-technology lessons into schools, rather than campaigning only for a minimum age. I choose this because, as Theo argues in Source 4, a ban is hard to enforce when “children already lie about their age”, whereas education reaches students whatever their age and tackles the habits — late-night scrolling and comparison — that Source 1 links to anxiety and poor sleep.\n\nThe likely impact is wide and lasting. Lessons reach every student in a year group at once, and they build the skills to question what apps are designed to do, which addresses the cause Source 1 identifies rather than just the symptom. Source 2 supports this: students there say the real problem is that “we are never taught how to use these tools wisely,” so the action matches what young people themselves ask for.\n\nI must weigh the consequences. Education is slower than a law and relies on schools finding time, and it does not by itself force companies to change — Hana’s point in Source 4 that firms “will not act unless the law forces them” is a genuine limit. So Mind First should keep pressing for better age checks and company responsibility as a second aim, while making education its main, achievable action now.\n\nAn alternative would be to put all its effort into campaigning for a minimum age of 16. This is a clear, strong signal and places responsibility on companies, but Source 3’s weak evidence and Theo’s enforcement point show a ban may not work in practice and could cut teenagers off from family and learning. On balance I recommend leading with school education, supported by pressure on companies, because it has the most direct and reliable impact on the charity’s aim of better wellbeing online.'),
      ],
    },
  ],
};
