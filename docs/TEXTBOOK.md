# Interactive textbook: pilot stage report

## Update: every unit of every subject now has a chapter (auto-built from the lessons)

Every subject has a Textbook button on its hub card and a book at `#/book/<subject>`: Physics, Chemistry, Economics, Biology, Maths, Additional Maths, Computer Science, Business Studies and English.

| Subject | Chapters (one per unit) | Lessons covered |
|---|---|---|
| Physics | 6 (plus the hand-written pilot chapter) | 26 |
| Chemistry | 6 | 43 |
| Economics | 6 | 36 |
| Biology | 21 | 55 |
| Maths | 9 | 30 |
| Additional Maths | 7 | 17 |
| Computer Science | 6 | 17 |
| Business Studies | 7 | 38 |
| English | 11 (one per section of the notes) | 42 |

**How these chapters are made.** `src/textbook/generate.js` turns each unit's lessons into a chapter, one section per lesson: the lesson's key points, equations, diagrams, advantages and disadvantages, worked examples and model answers, then a "Check yourself" set built from the lesson's questions (multiple choice, calculations, true/false, with the answer options shuffled in a fixed order) and "Recall" prompts from its written questions. The contents and search index for each subject is the generated file `src/textbook/generated/<subject>.json`. Chapters are built on demand, so they are always in step with the lessons.

**What these chapters are not.** They are not hand-written textbook prose. They collect the lesson content in order with the diagrams, and they do not have the longer connected explanations, original interactions and tailored wrong-answer feedback of the hand-written pilot chapter. The page says so on the cover and in every chapter. Question types that need dragging, matching or ordering stay in the lessons. All chapters are marked Draft: none has been reviewed by a subject expert.

**Checks.** `npm test` (47 tests) checks that every unit of every subject has a chapter, that sections equal lessons and match the hub totals, that every chapter passes the schema, that the correct answer is not first in practice questions, that the diagrams carry over, that term links point at real sections, and that the generated index files are up to date. After changing lesson content, run `npm run textbook:index` and commit the updated files.

**Browser checks.** Contents and chapters for Chemistry, Business and English opened with their diagrams, pros/cons cards and model answers; practice questions graded correctly; every subject's hub button points at its book; eight chapters across all subject types had no horizontal overflow at 375 px.

**Known limits of this update.** Diagrams from the lessons have a caption but no longer text description (the original lesson diagrams were not written with one). Keyboard-only and screen-reader passes were not run. The 310 kB diagram library loads when a chapter shows a diagram.

**Next.** Hand-written chapters in the style of the pilot, written unit by unit and replacing the auto-built chapter for that unit once reviewed.

---

# Pilot chapter report (Physics, "Describing motion")

Status: pilot chapter built and checked in a browser. **Not pushed.** One chapter exists (Physics, "Describing motion"). It is marked **Draft** in the app because no subject expert has reviewed it and it has not been checked line by line against the official syllabus.

## What was added

| Area | Where |
|---|---|
| Routes `#/book/physics` (cover, search, contents, resume, bookmarks) and `#/book/physics/motion[/section]` (reader) | `src/App.jsx`, `src/textbook/TextbookApp.jsx` |
| Hub entry: a "Textbook" button on the current-subject card, shown only for subjects that have a book | `src/hub/Tabs.jsx` |
| Registry: titles, objectives, key terms, section lists. The only textbook data the hub downloads | `src/textbook/books.js` |
| Content schema (version 1) and validator | `src/textbook/schema.js` |
| Block renderers and interactions: slider tied to a graph, predict then reveal, classify, step-by-step worked examples, practice with specific wrong-answer feedback, retrieval prompts | `src/textbook/blocks.jsx` |
| Original SVG figures | `src/textbook/figures/motion.jsx` |
| The pilot chapter text | `src/textbook/content/physics/motion.js` |
| Reading state (position, bookmarks, read marks), search, answer checking | `src/textbook/progress.js`, `search.js`, `check.js` |
| Tests | `tests/textbook.test.mjs` (11 tests) |

## Design decisions

- **Separate storage.** Reading state lives under `iq:book:v1`. It never touches lesson progress, XP, stars or unlocks, and it is not in the cloud-synced key list, so cloud save is unaffected. "Mark as read" records reading, not mastery.
- **Lazy loading.** The hub gets only the small registry. The reader (about 39 kB), the chapter text (about 21 kB) and the figures (about 4 kB) load when a chapter opens. Deep links and refresh work on GitHub Pages because routing is hash based.
- **Content is data, rendering is shared.** Chapters are plain data validated by a schema. The only markup content may use is `**bold**`, so content cannot inject HTML.
- **Honest status.** A chapter cannot be marked "reviewed" without a reviewer and date (the validator enforces this). Draft chapters say so on the cover, in the chapter header and in the contents.
- **Original material only.** Nothing from textbooks, past papers, mark schemes or the Cambridge-derived question images was used, copied or paraphrased.

## Pilot chapter against the acceptance list

| Requirement | Result |
|---|---|
| Connected explanation across the stated objectives | 5 objectives, 9 sections, each objective taught and practised (enforced by the validator) |
| Two original figures with captions, alt text and a text equivalent | 2 figures, plus a live chart in the slider |
| Two worked examples with every step, the reason for it, units and a reasonableness check | 3 worked examples |
| Two meaningful interactions with corrective feedback | 3 (slider, predict, classify) |
| An unfamiliar application and a common misconception | Average-speed cameras; "the graph is not a picture of the route" and "fast does not mean accelerating" |
| Original practice with worked solutions, a transfer question, feedback for plausible wrong answers | 6 questions, one transfer question, 9 specific wrong-answer hints |
| Retrieval check | 4 prompts |
| Objective mapping and review status visible | Yes |

## How it was verified

- `npm test`: 41 tests pass (30 existing plus 11 new). The new tests cover the schema (including that broken chapters are rejected), registry and chapter agreement, answer parsing and grading, every worked number in the chapter, MCQ length and position bias, reading state with damaged storage, and search.
- `npm run build`: passes.
- Browser (built app on a local preview): the home page, chapter load, all five interaction types, practice grading including wrong-answer hints, bookmark, mark as read, scroll-position saving, resume banner, deep link to a section, hub button (Physics only), existing Physics course still loads. No console errors.
- Visual: 375 px dark theme (no horizontal overflow, figures scroll sideways with a visible hint) and 1280 px light theme with the contents rail.

## Found and fixed while testing

- All three multiple-choice questions had the correct answer in the same position. The new bias test caught it; options were reordered.
- One question's correct answer was the longest option. Options were rebalanced.
- Jumps to a section and resume used the page's smooth scrolling and a frame callback, which can stall in a background or unfocused tab. They are now instant, which also suits reduced-motion users.
- Classify and retrieval buttons updated state from a stale copy; they now use functional updates.
- Panel titles skipped from h2 to h4; they are now h3.

## Not verified

- **Subject review.** No physics teacher has reviewed the chapter. The wording of objectives is mapped to topic 1.2 but not compared with the official syllabus document line by line.
- **Keyboard-only and screen-reader passes** were not run. Everything uses native buttons, inputs, `details` and labelled regions, so it should work, but it has not been tested with a screen reader.
- **Tablet width and 320 px** were not checked, and neither was the other half of the theme matrix (phone in light mode, desktop in dark mode).
- **Students.** Nobody has used the chapter. Whether it improves understanding is unknown.
- **Offline use** is not provided.

## Not covered by this chapter

Free fall and g, terminal velocity, curved speed–time graphs with tangents, and the Extended equations of uniformly accelerated motion.

## Proposed next step (needs your approval)

Review the pilot (read it, try it on a phone). If it is the right shape, the next batch is the rest of Physics Unit 1 (forces, mass and weight, density, momentum, energy), one chapter at a time, each marked Draft until reviewed.

## Subjects and the book mode

The app has nine subjects (Business, English, Physics, Chemistry, Biology, Economics, Maths, Additional Maths, Computer Science). Hindi and Global Perspectives are not in the app and would each need an approved syllabus scope before any book is written for them. English notes are not a candidate for a textbook until its language-versus-literature scope is settled.
