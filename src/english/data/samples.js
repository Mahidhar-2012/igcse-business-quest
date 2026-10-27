import { model, lesson, section } from './helpers.js';
import { emailSamples } from './samples_email.js';
import { reviewSamples } from './samples_review.js';
import { reportSamples } from './samples_report.js';
import { articleSamples } from './samples_article.js';

// The Essay PDF contains the three essays only, without their exam questions.
const essaySamples = [
  {
    title: 'Essay 1: Length of school holidays',
    task: ['The exam question was not included in the PDF. The essay discusses how long school holidays should be.'],
    paras: [
      'The debate regarding the duration of school holidays is a perennial topic of discussion. While some argue that extended breaks are essential for mental rejuvenation, others contend that shorter holidays are necessary for academic progress.',
      'On the one hand, long holidays offer students the valuable opportunity to pursue extracurricular interests, travel, or participate in internships, which mitigates the stress of rigorous academic schedules. Consequently, students often return to the classroom with renewed motivation and a broader perspective on the world.',
      'Conversely, shorter holidays could prevent the significant ‘learning loss’ that frequently occurs during long absences. Furthermore, shorter breaks allow for a more consistent pace of instruction, which is particularly advantageous for complex subjects like Mathematics.',
      'In conclusion, I believe a compromise is ideal: slightly shorter summer holidays combined with more frequent, shorter breaks throughout the year. In my opinion, this structure would successfully balance student well-being with consistent academic growth, ensuring that learning remains a continuous and engaging process rather than a sporadic one.',
    ],
  },
  {
    title: 'Essay 2: Social media and communication',
    task: ['The exam question was not included in the PDF. The essay discusses whether social media has improved or harmed human communication.'],
    paras: [
      'In the digital age, social media has revolutionized how we connect. While its impact is undeniable, whether it has truly enhanced or diminished human communication remains a significant point of contention.',
      'On the one hand, proponents argue that social media platforms enable instantaneous contact across the globe, allowing people to maintain relationships that would otherwise fade due to distance. This constant connectivity fosters a sense of community, enabling users to share their life experiences in real-time.',
      'Conversely, skeptics argue that digital interactions often lack the nuance of face-to-face conversation, which can lead to superficial connections. Moreover, an over-reliance on screens may reduce the quality of physical social interactions, as individuals may prioritize digital engagement over genuine presence.',
      'Ultimately, while I recognize that social media is an invaluable tool for maintaining long-distance ties, I am convinced that it should never replace the depth and sincerity of in-person communication. Digital tools should be viewed as a supplement to, rather than a substitute for, genuine human connection.',
    ],
  },
  {
    title: 'Essay 3: Who is responsible for the environment?',
    task: ['The exam question was not included in the PDF. The essay discusses whether governments or individuals are mainly responsible for restoring the environment.'],
    paras: [
      'Environmental degradation is a pressing global crisis, which has sparked an intense debate regarding who bears the primary responsibility for environmental restoration. While it is clear that governments hold the power to implement systemic change, individuals also possess the power to influence daily consumption patterns.',
      'To begin with, governments are essential for enacting policies, such as strict industrial regulations and carbon taxes, which have the most significant impact on emission reduction. These top-down initiatives are crucial because they provide the framework necessary for large-scale environmental protection. Without such legislative action, individual efforts may remain largely insignificant when compared to industrial-scale pollution.',
      'In contrast, individual choices—such as reducing single-use plastic, opting for public transport, and conserving energy—collectively create a shift in market demand. By consistently making eco-friendly decisions, consumers force corporations to adapt their practices to meet the expectations of a more sustainable market. Furthermore, individual advocacy often serves as the catalyst that prompts governments to consider more stringent environmental laws.',
      'In conclusion, I believe that environmental protection is a shared duty in which the individual is just as important as the state. Sustainable progress can only be achieved when strong government policies are supported by the conscious, eco-friendly habits of every citizen. In my opinion, we must all take personal ownership of our environmental footprint if we truly wish to see a greener, more sustainable future for the next generation.',
    ],
  },
];

const wordCount = (paras) =>
  paras.join(' ').replace(/\*\*/g, '').split(/\s+/).filter(Boolean).length;

const toCards = (list) =>
  list.map((s) =>
    model(s.title, {
      task: s.task,
      words: `About ${wordCount(s.paras)} words`,
      paras: s.paras,
      why: s.why || [],
    }),
  );

export const samples = section(
  'samples',
  'A* model answers',
  '🏆',
  'amber',
  'Full sample answers with their exam questions: email, review, report, essay and article',
  [
    lesson('sm-email', `Email samples (${emailSamples.length})`, '✉️', toCards(emailSamples)),
    lesson('sm-review', `Review samples (${reviewSamples.length})`, '⭐', toCards(reviewSamples)),
    lesson('sm-report', `Report samples (${reportSamples.length})`, '📋', toCards(reportSamples)),
    lesson('sm-essay', `Essay samples (${essaySamples.length})`, '🧠', toCards(essaySamples)),
    lesson('sm-article', `Article samples (${articleSamples.length})`, '📰', toCards(articleSamples)),
  ],
);
