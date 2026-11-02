// Regenerates src/textbook/generated/<subject>.json: the light contents and search index for each subject's
// auto-built chapters. Run `npm run textbook:index` after changing any lesson content.
// tests/textbook.test.mjs fails if these files are out of date.
import { mkdirSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import { SOURCES, buildChapters } from '../src/textbook/sources.js';
import { metaOf } from '../src/textbook/generate.js';

const out = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/textbook/generated');
mkdirSync(out, { recursive: true });

for (const id of Object.keys(SOURCES)) {
  const chapters = (await buildChapters(id)).map(metaOf);
  writeFileSync(path.join(out, `${id}.json`), `${JSON.stringify(chapters, null, 1)}\n`);
  console.log(`${id}: ${chapters.length} chapters, ${chapters.reduce((n, c) => n + c.sections.length, 0)} sections`);
}
