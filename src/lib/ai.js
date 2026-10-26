// AI teacher: marks written exam answers like a Cambridge IGCSE Business (0264) examiner and coaches the student.
// The student's own Anthropic API key is stored only in this browser (localStorage) and calls go straight from the
// browser to api.anthropic.com. Typing the key "demo" runs an offline demo so the layout can be previewed for free.

const CONFIG_KEY = 'igcse-business-quest:ai';
const API_URL = 'https://api.anthropic.com/v1/messages';

export const AI_MODELS = [
  { id: 'claude-opus-5-5', label: 'Claude Opus 5.5 — very strong marking (recommended)' },
  { id: 'claude-fable-5-1', label: 'Claude Fable 5.1 — most capable, highest cost' },
  { id: 'claude-sonnet-5-5', label: 'Claude Sonnet 5.5 — strong and cheaper' },
  { id: 'claude-haiku-5-5', label: 'Claude Haiku 5.5 — fastest and cheapest, less careful' },
];

export const getAiConfig = () => {
  try {
    const c = JSON.parse(localStorage.getItem(CONFIG_KEY) || 'null');
    return { key: c?.key || '', model: c?.model || AI_MODELS[0].id };
  } catch {
    return { key: '', model: AI_MODELS[0].id };
  }
};

export const saveAiConfig = (cfg) => {
  try {
    localStorage.setItem(CONFIG_KEY, JSON.stringify({ key: cfg.key.trim(), model: cfg.model }));
  } catch {
    /* storage blocked: the key just won't persist */
  }
};

export const clearAiConfig = () => {
  try {
    localStorage.removeItem(CONFIG_KEY);
  } catch {
    /* ignore */
  }
};

export const aiReady = (cfg = getAiConfig()) => !!cfg.key;

/* ------------------------------------------------------------------ */
/* Examiner knowledge: the assessment objectives and marking conventions */
/* ------------------------------------------------------------------ */
const SYSTEM_PROMPT = `You are a senior Cambridge IGCSE Business (0264) examiner AND an outstanding classroom teacher. You mark a student's written answer exactly as a Cambridge examiner would, then coach the student so their next answer scores higher.

ASSESSMENT OBJECTIVES (from the 0264 syllabus)
- AO1 Knowledge and understanding: demonstrate knowledge and understanding of business concepts, terms and theories; use business terminology.
- AO2 Application: apply knowledge and understanding to a GIVEN business.
- AO3 Analysis: select, organise and interpret business data and information in written, numerical and graphical forms; analyse business information.
- AO4 Evaluation: make justified decisions, reach conclusions and make recommendations based on evidence.
Weightings: Paper 1 AO1 40 / AO2 30 / AO3 20 / AO4 10 per cent. Paper 2 AO1 30 / AO2 30 / AO3 25 / AO4 15 per cent.

PAPER STRUCTURE
- Paper 1: four 20-mark questions; parts (a) 2 marks AO1 (define/identify/state), (b) 4 marks AO1+AO2 (outline/calculate), (c) 6 marks AO1+AO2+AO3 (explain two ways), (d) 8 marks AO1+AO2+AO3+AO4 (two knowledge, two application, two analysis, two evaluation).
- Paper 2: case study; four questions each with (a) 8 marks and (b) 12 marks. (b) is marked by levels (see below).

MARKING CONVENTIONS (apply strictly, as an examiner)
- Knowledge (AO1): credit accurate, relevant points and correct terminology. A vague definition (e.g. "misbehaving", "does well") earns limited credit; a clear definition with a relevant example earns full credit. Identify/State need only the point; explanation earns nothing extra. A wrong point earns nothing and cannot support later marks.
- Application (AO2): credit only details specific to the given business taken from the stem/case/data (what it sells, what it does or plans to do, its sector/type, numerical data). DO NOT credit: the business's name, the owner's name, or any detail/word that already appears in the question wording. Do not credit the same application detail twice within the same part (the same detail may be credited in a different part). Figures from the data used correctly in calculations count as application.
- Analysis (AO3): credit a logical chain of reasoning: WHAT (knowledge point) -> HOW (direct impact) -> EFFECT (e.g. profit/margins, reputation, efficiency/competitiveness, working capital). Do not credit assertions that jump from point to effect without the how, repetition of the point, lists, or circular statements. Analysis marks come from the direct impact and do not need case details. Data interpretation (calculations and what they show) also earns AO3.
- Evaluation (AO4): credit only a clear decision/recommendation that is justified with reasoning that fits THIS business, and the rejection of the alternative(s) with a reason. Do NOT credit summaries, repetition of earlier points, "it depends" without a decision, unsupported opinions, or brand-new knowledge introduced in the conclusion. When two points are available the usual split is: (1) a justified decision; (2) a justified rejection of the other option/factor.
- 12-mark Paper 2 (b) levels: Level 1 (1-4): knowledge only, e.g. options identified, plus limited application. Level 2 (5-8): analysis/explanation with impact of at least one option (advantage and disadvantage when asked to consider them); each additional well-analysed option adds marks; a candidate needs at least TWO level-2 analyses to access Level 3. Level 3 (9-12): a well-justified recommendation that rejects each alternative with reasons and justifies the best choice; reasons must not simply repeat earlier analysis. In calculation questions a new calculation (e.g. the difference between options) is a valid justification, and numbers used count as application. Only two application marks exist in a 12-mark answer: one in the analysis and one in the conclusion.
- Be strict but fair. Do not reward length. Accept valid points that are not on the supplied mark scheme. Give reasonable benefit of the doubt on wording, never on missing content. A blank or irrelevant answer scores 0. Never exceed the maximum marks available for any objective.

HOW TO COACH
- For every objective, say exactly what earned marks (quote the student's own words as evidence) and what was missing.
- When a mark was missed, explain WHY in one sentence and show the missing piece written out, using the student's own idea where possible.
- Write an "upgrade" that rewrites the student's weakest part into a full-marks version, clearly built from their ideas (do not paste a generic model answer).
- Use plain, encouraging English suited to a 15-year-old. Be specific, never vague. Prioritise the 2-3 changes that will gain the most marks.
- Return the result ONLY through the submit_marking tool.`;

const MARKING_TOOL = {
  name: 'submit_marking',
  description: 'Submit the examiner-style marking and teacher feedback for the student answer.',
  input_schema: {
    type: 'object',
    properties: {
      marks_by_ao: {
        type: 'object',
        description: 'Marks awarded per assessment objective. Use 0 for objectives not available in this part.',
        properties: {
          K: { type: 'number', description: 'AO1 marks awarded' },
          A: { type: 'number', description: 'AO2 marks awarded' },
          N: { type: 'number', description: 'AO3 marks awarded' },
          E: { type: 'number', description: 'AO4 marks awarded' },
        },
        required: ['K', 'A', 'N', 'E'],
      },
      level: { type: 'string', description: 'For 12-mark Paper 2 (b) answers: "Level 1", "Level 2" or "Level 3" with a short reason. Otherwise an empty string.' },
      mark_points: {
        type: 'array',
        description: 'Point-by-point marking, in the order of the available marks.',
        items: {
          type: 'object',
          properties: {
            ao: { type: 'string', enum: ['K', 'A', 'N', 'E'] },
            description: { type: 'string', description: 'What this mark point requires, in plain words.' },
            awarded: { type: 'boolean' },
            evidence: { type: 'string', description: 'Quote the student words that earned it, or empty if missed.' },
            comment: { type: 'string', description: 'Why it was or was not awarded, and how to gain it if missed.' },
          },
          required: ['ao', 'description', 'awarded', 'evidence', 'comment'],
        },
      },
      examiner_comment: { type: 'string', description: 'A short overall examiner comment (2-4 sentences).' },
      strengths: { type: 'array', items: { type: 'string' }, description: '1-3 specific strengths.' },
      improvements: {
        type: 'array',
        description: 'The most valuable fixes, most important first.',
        items: {
          type: 'object',
          properties: {
            ao: { type: 'string', enum: ['K', 'A', 'N', 'E'] },
            problem: { type: 'string' },
            fix: { type: 'string', description: 'Exactly what to write differently, with a short example.' },
          },
          required: ['ao', 'problem', 'fix'],
        },
      },
      upgrade: { type: 'string', description: "The student's weakest part rewritten to a full-marks standard, built from their own ideas." },
    },
    required: ['marks_by_ao', 'level', 'mark_points', 'examiner_comment', 'strengths', 'improvements', 'upgrade'],
  },
};

const REPORT_TOOL = {
  name: 'submit_report',
  description: 'Submit an overall teacher report for a set of marked answers.',
  input_schema: {
    type: 'object',
    properties: {
      headline: { type: 'string', description: 'One sentence summing up performance.' },
      by_ao: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            ao: { type: 'string', enum: ['K', 'A', 'N', 'E'] },
            verdict: { type: 'string', description: 'What the pattern across answers shows for this objective.' },
          },
          required: ['ao', 'verdict'],
        },
      },
      priorities: { type: 'array', items: { type: 'string' }, description: 'The 3 most valuable habits to fix, each with a concrete action.' },
      study_plan: { type: 'array', items: { type: 'string' }, description: 'A 3-5 step plan for the next study session.' },
    },
    required: ['headline', 'by_ao', 'priorities', 'study_plan'],
  },
};

/* ------------------------------------------------------------------ */
const flattenTable = (t) => (t ? `${t.caption || 'Table'}\n${[t.head, ...t.rows].map((r) => r.join(' | ')).join('\n')}` : '');

/** Max marks per assessment objective for a part, from its mark points. */
export const maxByAo = (part) => {
  const out = { K: 0, A: 0, N: 0, E: 0 };
  for (const p of part.points) out[p.ao] += p.m;
  return out;
};

const caseTextFor = (exam, question) =>
  [
    exam.intro ? `CASE STUDY: ${exam.intro.title || ''}\n${(exam.intro.paragraphs || []).join('\n')}\n${flattenTable(exam.intro.table)}` : '',
    question.stem ? `STEM: ${question.stem}` : '',
    question.table ? flattenTable(question.table) : '',
  ]
    .filter(Boolean)
    .join('\n\n');

const describeError = (status, body) => {
  if (status === 401) return 'The API key was rejected. Check it in AI settings.';
  if (status === 403) return 'The API key does not have permission for this model. Try a different model in AI settings.';
  if (status === 404) return 'That model was not found for your account. Pick another model in AI settings.';
  if (status === 429) return 'Rate limit or spending limit reached. Wait a minute or check your Anthropic account limits.';
  if (status === 529 || status >= 500) return 'Anthropic’s service is busy right now. Try again in a moment.';
  return body?.error?.message || `The AI request failed (status ${status}).`;
};

async function callTool({ cfg, system, user, tool, maxTokens = 3000 }) {
  let res;
  try {
    res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': cfg.key,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({
        model: cfg.model,
        max_tokens: maxTokens,
        system,
        tools: [tool],
        tool_choice: { type: 'tool', name: tool.name },
        messages: [{ role: 'user', content: user }],
      }),
    });
  } catch {
    throw new Error('Could not reach the AI service. Check your internet connection.');
  }
  let body = null;
  try {
    body = await res.json();
  } catch {
    /* ignore */
  }
  if (!res.ok) throw new Error(describeError(res.status, body));
  const block = body?.content?.find((b) => b.type === 'tool_use' && b.name === tool.name);
  if (!block?.input) throw new Error('The AI did not return a marking result. Please try again.');
  return block.input;
}

/** Make marks sane: clamp each objective to what is available and cap the total at the part's marks. */
const normaliseMarking = (raw, part) => {
  const max = maxByAo(part);
  const awarded = { K: 0, A: 0, N: 0, E: 0 };
  for (const k of Object.keys(awarded)) awarded[k] = Math.max(0, Math.min(max[k], Math.round((Number(raw.marks_by_ao?.[k]) || 0) * 2) / 2));
  let total = awarded.K + awarded.A + awarded.N + awarded.E;
  if (total > part.marks) {
    const f = part.marks / total;
    for (const k of Object.keys(awarded)) awarded[k] = Math.round(awarded[k] * f * 2) / 2;
    total = awarded.K + awarded.A + awarded.N + awarded.E;
  }
  return {
    awarded,
    max,
    total,
    level: raw.level || '',
    markPoints: Array.isArray(raw.mark_points) ? raw.mark_points : [],
    comment: raw.examiner_comment || '',
    strengths: raw.strengths || [],
    improvements: raw.improvements || [],
    upgrade: raw.upgrade || '',
  };
};

/** Offline demo used when the key is "demo": lets you preview the layout without an API call. */
const demoMarking = (part, answer) => {
  const max = maxByAo(part);
  const words = answer.trim().split(/\s+/).filter(Boolean).length;
  const share = words < 5 ? 0 : Math.min(0.7, words / (part.marks * 14));
  const awarded = {};
  for (const k of Object.keys(max)) awarded[k] = Math.floor(max[k] * share * (k === 'E' ? 0.5 : 1));
  return normaliseMarking(
    {
      marks_by_ao: awarded,
      level: part.marks === 12 ? 'Level 2 (demo)' : '',
      mark_points: part.points.map((p, i) => ({
        ao: p.ao,
        description: p.t,
        awarded: i % 2 === 0 && words >= 5,
        evidence: i % 2 === 0 && words >= 5 ? answer.trim().slice(0, 70) : '',
        comment: i % 2 === 0 ? 'Demo mode: this is example feedback only.' : 'Demo mode: in real marking, the teacher explains exactly what was missing and how to write it.',
      })),
      examiner_comment: 'DEMO MODE — this is placeholder feedback to preview the layout. Add a real API key in AI settings to have your answer marked by the AI teacher.',
      strengths: ['You attempted the question.'],
      improvements: [{ ao: 'N', problem: 'Demo example: the “how” in your chain of reasoning is missing.', fix: 'Add a link phrase such as “this means that…” between the point and its effect.' }],
      upgrade: 'DEMO: the real teacher rewrites your weakest sentence into a full-marks version using your own ideas.',
    },
    part,
  );
};

export async function markPart({ exam, question, part, answer }) {
  const cfg = getAiConfig();
  if (!cfg.key) throw new Error('No API key set. Open AI settings to add one.');
  if (cfg.key.toLowerCase() === 'demo') {
    await new Promise((r) => setTimeout(r, 700));
    return demoMarking(part, answer);
  }
  const max = maxByAo(part);
  const user = `MARK THIS ANSWER.

${exam.paper === 1 ? 'PAPER 1 (short answer and data response)' : 'PAPER 2 (case study)'} — ${exam.title}

${caseTextFor(exam, question) || '(No case material)'}

QUESTION PART (${part.label}) [${part.marks} marks]
Command word: ${part.command}
Question: ${part.command} ${part.text}

MARKS AVAILABLE BY OBJECTIVE: AO1 knowledge = ${max.K}, AO2 application = ${max.A}, AO3 analysis = ${max.N}, AO4 evaluation = ${max.E} (total ${part.marks}).

OFFICIAL-STYLE MARK SCHEME POINTS (guidance only; credit other valid points):
${part.points.map((p, i) => `${i + 1}. [${p.ao}] ${p.t} (${p.m} mark${p.m > 1 ? 's' : ''})`).join('\n')}

STUDENT'S ANSWER:
"""
${answer.trim() || '(blank)'}
"""

Mark it now using the submit_marking tool. Keep each comment short and specific.`;
  const raw = await callTool({ cfg, system: SYSTEM_PROMPT, user, tool: MARKING_TOOL, maxTokens: 3500 });
  return normaliseMarking(raw, part);
}

export async function overallReport({ exam, parts }) {
  const cfg = getAiConfig();
  if (!cfg.key) throw new Error('No API key set. Open AI settings to add one.');
  if (cfg.key.toLowerCase() === 'demo') {
    await new Promise((r) => setTimeout(r, 600));
    return {
      headline: 'DEMO MODE — add a real API key to get a genuine report.',
      by_ao: [{ ao: 'N', verdict: 'Demo example: analysis chains were often missing the “how”.' }],
      priorities: ['Demo priority 1', 'Demo priority 2', 'Demo priority 3'],
      study_plan: ['Re-read the AO3 notes in Unit 7.', 'Rewrite one answer with a full chain of reasoning.'],
    };
  }
  const summary = parts
    .map(
      (x) =>
        `Q${x.qi + 1}(${x.p.label}) [${x.p.marks}] ${x.p.command} ${x.p.text}\nMarks: ${x.ai ? `${x.ai.total}/${x.p.marks} (AO1 ${x.ai.awarded.K}/${x.ai.max.K}, AO2 ${x.ai.awarded.A}/${x.ai.max.A}, AO3 ${x.ai.awarded.N}/${x.ai.max.N}, AO4 ${x.ai.awarded.E}/${x.ai.max.E})` : 'not AI-marked'}\nExaminer comment: ${x.ai?.comment || '-'}\nStudent answer: ${x.answer.trim().slice(0, 700) || '(blank)'}`,
    )
    .join('\n\n');
  const user = `A student has completed "${exam.title}". Their marked answers are below. Write the overall teacher report using the submit_report tool: what the pattern across their answers shows for each assessment objective, the 3 most valuable habits to fix (with concrete actions), and a 3-5 step study plan.

${summary}`;
  return callTool({ cfg, system: SYSTEM_PROMPT, user, tool: REPORT_TOOL, maxTokens: 2000 });
}

/** Cheap connection check used by the settings screen. */
export async function testConnection(cfg) {
  if (!cfg.key) throw new Error('Enter an API key first.');
  if (cfg.key.toLowerCase() === 'demo') return 'Demo mode is on: you can preview the layout, but answers are not really marked.';
  let res;
  try {
    res = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'x-api-key': cfg.key.trim(),
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true',
      },
      body: JSON.stringify({ model: cfg.model, max_tokens: 16, messages: [{ role: 'user', content: 'Reply with the single word: ready' }] }),
    });
  } catch {
    throw new Error('Could not reach the AI service. Check your internet connection.');
  }
  let body = null;
  try {
    body = await res.json();
  } catch {
    /* ignore */
  }
  if (!res.ok) throw new Error(describeError(res.status, body));
  return 'Connected. The AI teacher is ready.';
}
