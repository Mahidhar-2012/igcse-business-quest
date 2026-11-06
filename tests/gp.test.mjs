// Global Perspectives mock papers and "how to answer" guidance: structure and mark-scheme integrity.
import { test } from 'node:test';
import assert from 'node:assert/strict';

const { HOWTO, PAPERS, partsOf, marksOf, GP_TOTAL, TOPIC_LIST } = await import('../src/gp/data/index.js');
const { LEVELS, gradeFor } = await import('../src/gp/data/marks.js');
const { SUBJECTS_META } = await import('../src/subjects.meta.js');

test('each mock paper is a complete 70-mark source-based paper', () => {
  assert.ok(PAPERS.length >= 2, 'need at least two mock papers');
  for (const p of PAPERS) {
    assert.equal(marksOf(p), 70, `${p.id}: should total 70 marks`);
    assert.ok(p.insert.sources.length >= 3, `${p.id}: needs several sources`);
    assert.ok(p.insert.statements && p.insert.statements.a.paras.length && p.insert.statements.b.paras.length, `${p.id}: Question 3 needs two opposing statements`);
    assert.equal(p.questions.length, 4, `${p.id}: four compulsory questions`);
    assert.ok(p.questions.some((q) => q.parts.some((x) => x.marks === 16)), `${p.id}: a 16-mark evaluate-arguments question`);
    assert.ok(p.questions.some((q) => q.parts.some((x) => x.marks >= 20)), `${p.id}: a long recommend-action question`);
  }
});

test('every part has a question, a hint, a model answer and a valid scheme', () => {
  for (const p of PAPERS) {
    const seen = new Set();
    for (const { p: part } of partsOf(p)) {
      const where = `${p.id} (${part.label || part.command})`;
      for (const k of ['command', 'text', 'hint', 'model']) assert.ok(part[k] && part[k].trim(), `${where}: missing ${k}`);
      assert.ok(part.marks > 0, `${where}: marks`);
      assert.ok(!seen.has(part.text), `${where}: duplicate question text`);
      seen.add(part.text);
      if (part.scheme.type === 'points') {
        const sum = part.scheme.points.reduce((n, pt) => n + pt.m, 0);
        assert.ok(sum >= part.marks, `${where}: points (${sum}) must cover the marks (${part.marks})`);
        part.scheme.points.forEach((pt) => assert.ok(pt.t && pt.m > 0, `${where}: a point is malformed`));
      } else {
        const lv = part.scheme.levels;
        assert.ok(lv.length >= 3, `${where}: needs level descriptors`);
        assert.equal(lv[0].marks, 0, `${where}: first level is 0`);
        assert.equal(lv[lv.length - 1].marks, part.marks, `${where}: top level must award full marks`);
        for (let k = 1; k < lv.length; k++) assert.ok(lv[k].marks > lv[k - 1].marks && lv[k].band && lv[k].desc, `${where}: levels must rise and be described`);
      }
    }
  }
});

test('the model answers reflect the exam technique (explain, use the source, conclude)', () => {
  for (const p of PAPERS) {
    for (const { p: part } of partsOf(p)) {
      if (part.marks >= 16) {
        assert.ok(/convincing|recommend|conclusion|on balance|overall/i.test(part.model), `${p.id}: long answer should reach a judgement`);
        assert.ok(part.model.length > 400, `${p.id}: long answer model should be developed`);
      }
    }
  }
});

test('how-to guidance covers every question type and is readable', () => {
  assert.ok(HOWTO.length >= 5, 'guidance for the paper and each question');
  for (const l of HOWTO) {
    assert.ok(l.id && l.title && l.emoji && l.cards.length, `${l.id}: incomplete lesson`);
    for (const c of l.cards) assert.ok(['note', 'steps', 'dont', 'stems', 'concepts'].includes(c.type), `${l.id}: unknown card ${c.type}`);
  }
  assert.ok(HOWTO.some((l) => /Question 3/.test(l.title)) && HOWTO.some((l) => /Question 4/.test(l.title)), 'guidance for Q3 and Q4');
});

test('the subject total and topic list are consistent', () => {
  assert.equal(GP_TOTAL, HOWTO.length + PAPERS.length);
  assert.equal(SUBJECTS_META.find((s) => s.id === 'gp').total, GP_TOTAL, 'hub total matches');
  assert.equal(SUBJECTS_META.find((s) => s.id === 'gp').kind, 'notes');
  assert.ok(TOPIC_LIST.length >= 20 && TOPIC_LIST.includes('Digital world'));
  assert.equal(gradeFor(85), 'A*');
  assert.equal(gradeFor(10), 'Keep practising');
  // every level template used is coherent
  for (const [k, lv] of Object.entries(LEVELS)) assert.ok(lv[0].marks === 0 && lv[lv.length - 1].marks > 0, `LEVELS.${k} malformed`);
});
