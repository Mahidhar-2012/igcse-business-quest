import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Bookmark, BookmarkCheck, BookOpen, Check, ChevronLeft, ChevronRight, List, Search } from 'lucide-react';
import { loadBook, loadChapter, chapterOf, STATUS_LABEL, KIND_LABEL } from './books.js';
import { SUBJECTS_META } from '../subjects.meta.js';
import { ThemeButton, Logo } from '../hub/parts.jsx';
import { Block, Rich } from './blocks.jsx';
import { searchBook } from './search.js';
import * as P from './progress.js';

const useStore = () => {
  const [state, setState] = useState(() => P.load(window.localStorage));
  const update = useCallback((fn) => setState((prev) => { const next = fn(prev); if (next !== prev) P.save(window.localStorage, next); return next; }), []);
  return [state, update];
};

const Status = ({ status, kind }) => (
  <>
    <span className={`inline-block rounded-full border-2 px-2.5 py-0.5 text-xs font-extrabold ${status === 'reviewed' ? 'border-emerald-300 bg-emerald-50 text-emerald-900' : 'border-amber-300 bg-amber-50 text-amber-900'}`}>{STATUS_LABEL[status]}</span>
    {kind && <span className="inline-block rounded-full border-2 border-sky-200 bg-sky-50 px-2.5 py-0.5 text-xs font-extrabold text-sky-900">{KIND_LABEL[kind]}</span>}
  </>
);

function Shell({ crumbs, children }) {
  return (
    <>
      <header className="mx-auto flex max-w-5xl items-center gap-3 px-4 pt-4">
        <a href="#/" aria-label="IGCSE Quest home" className="shrink-0 rounded-xl focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300"><Logo size={36} /></a>
        <nav aria-label="Breadcrumb" className="min-w-0 flex-1">
          <ol className="flex flex-wrap items-center gap-x-1 text-sm font-bold text-slate-500">
            {crumbs.map((c, i) => (
              <li key={i} className="flex min-w-0 items-center gap-1">
                {i > 0 && <ChevronRight className="h-3.5 w-3.5 shrink-0" aria-hidden />}
                {c.href ? <a href={c.href} className="rounded px-0.5 text-brand-dark hover:underline focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">{c.label}</a> : <span aria-current="page" className="truncate text-slate-700">{c.label}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <ThemeButton />
      </header>
      <main id="main" tabIndex={-1} className="mx-auto max-w-5xl px-4 pb-24 pt-4 outline-none">{children}</main>
    </>
  );
}

const NotFound = ({ what }) => (
  <Shell crumbs={[{ label: 'Home', href: '#/' }, { label: 'Textbook' }]}>
    <div className="card mx-auto max-w-xl space-y-3 p-6 text-center">
      <h1 className="font-display text-2xl font-black">{what} not found</h1>
      <p className="text-slate-600">That link does not match anything in the textbook.</p>
      <a href="#/" className="btn btn-green">Back to home</a>
    </div>
  </Shell>
);

/* ---------- book home: cover, search, resume, contents ---------- */

function BookHome({ book, store }) {
  const meta = SUBJECTS_META.find((s) => s.id === book.subjectId);
  const [q, setQ] = useState('');
  const results = useMemo(() => searchBook(book, q), [book, q]);
  const last = P.lastChapter(store, book.id);
  const lastMeta = last && chapterOf(book, last);
  const lastPos = lastMeta && P.positionOf(store, book.id, last);
  const lastSection = lastMeta && lastMeta.sections.find((s) => s.id === lastPos);
  const marks = P.bookmarksOf(store, book.id);
  const units = [...new Map(book.chapters.map((c) => [c.unit, c.unitTitle])).entries()].sort((a, b) => a[0] - b[0]);
  const href = (c, s) => `#/book/${book.id}/${c}${s ? `/${s}` : ''}`;
  const handCount = book.chapters.filter((c) => c.kind === 'handwritten').length;
  const genCount = book.chapters.length - handCount;

  return (
    <Shell crumbs={[{ label: 'Home', href: '#/' }, { label: `${book.title} textbook` }]}>
      <div className="mx-auto max-w-3xl space-y-6">
        <div className="overflow-hidden rounded-3xl p-6 text-white" style={{ background: `linear-gradient(135deg, ${meta?.text || '#4f46e5'}, ${meta?.color || '#6366f1'})` }}>
          <p className="text-xs font-extrabold uppercase tracking-widest text-white/85">Interactive textbook</p>
          <h1 className="mt-1 font-display text-3xl font-black leading-tight">IGCSE {book.title}</h1>
          <p className="mt-1 text-sm font-semibold text-white/90">{book.syllabus}</p>
          <p className="mt-3 text-sm font-semibold text-white/90">Every unit as a readable chapter, with the diagrams, equations, worked examples and practice from the lessons.</p>
        </div>

        <section aria-label="Coverage" className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-4 text-sm font-semibold leading-relaxed text-amber-900">
          <b>Coverage so far:</b> {book.chapters.length} chapter{book.chapters.length === 1 ? '' : 's'}: {handCount} hand-written and {genCount} auto-built from the lessons. Every chapter is marked “Draft”: none has been reviewed by a subject expert or checked line by line against the official syllabus. Auto-built chapters collect the lesson content in order and do not yet have the longer connected explanations of a hand-written chapter. The lessons remain the complete course.
        </section>

        {lastMeta && (
          <a href={href(last, lastSection && lastSection.id)} className="card flex items-center gap-3 p-4 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
            <BookOpen className="h-6 w-6 shrink-0 text-brand-dark" aria-hidden />
            <span className="min-w-0 flex-1"><span className="block text-xs font-extrabold uppercase tracking-wider text-slate-500">Resume reading</span><span className="block font-display text-lg font-black leading-tight">{lastMeta.title}</span>{lastSection && <span className="block truncate text-sm font-semibold text-slate-500">{lastSection.title}</span>}</span>
            <ChevronRight className="h-5 w-5 text-slate-500" aria-hidden />
          </a>
        )}

        <section aria-label="Search the textbook">
          <label htmlFor="bk-search" className="mb-1 block text-sm font-extrabold">Search chapters, topics and key terms</label>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden />
            <input id="bk-search" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="e.g. acceleration" className="h-12 w-full rounded-2xl border-2 border-slate-300 bg-white pl-11 pr-3 font-bold" />
          </div>
          {q.trim() && (
            <div className="mt-2" aria-live="polite">
              <p className="text-sm font-bold text-slate-500">{results.length ? `${results.length} match${results.length === 1 ? '' : 'es'}` : 'No matches. Search looks for the words you type in titles, objectives and key terms.'}</p>
              {results.length > 0 && (
                <ul className="card mt-1 divide-y divide-slate-100">
                  {results.map((r, i) => (
                    <li key={i}>
                      <a href={href(r.chapterId, r.sectionId)} className="block min-h-11 p-3 hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
                        <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500">{r.kind === 'term' ? 'Key term' : r.kind} · {r.chapterTitle}</span>
                        <span className="block font-bold leading-snug">{r.text}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </section>

        <section aria-label="Contents">
          <h2 className="mb-2 font-display text-xl font-black">Contents</h2>
          <div className="space-y-4">
            {units.map(([n, title]) => (
              <div key={n}>
                <h3 className="mb-1 text-sm font-extrabold uppercase tracking-wider text-slate-500">Unit {n} · {title}</h3>
                <ul className="space-y-2">
                  {book.chapters.filter((c) => c.unit === n).map((c) => (
                    <li key={c.id}>
                      <a href={href(c.id)} className="card flex items-center gap-3 p-4 transition hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
                        <span className="min-w-0 flex-1">
                          <span className="block font-display text-lg font-black leading-tight">{c.title}</span>
                          <span className="mt-1 flex flex-wrap items-center gap-2 text-xs font-bold text-slate-500">Syllabus {c.syllabusRef} · about {c.minutes} min <Status status={c.status} kind={c.kind} /></span>
                        </span>
                        {P.isRead(store, book.id, c.id) && <span className="flex items-center gap-1 text-xs font-extrabold text-emerald-700"><Check className="h-4 w-4" aria-hidden /> Read</span>}
                        <ChevronRight className="h-5 w-5 shrink-0 text-slate-500" aria-hidden />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {marks.length > 0 && (
          <section aria-label="Bookmarks">
            <h2 className="mb-2 font-display text-xl font-black">Your bookmarks</h2>
            <ul className="card divide-y divide-slate-100">
              {marks.map((m) => {
                const c = chapterOf(book, m.chapterId);
                const s = c && c.sections.find((x) => x.id === m.sectionId);
                const title = s ? s.title : m.sectionId === 'summary' ? 'Summary' : m.sectionId === 'terms' ? 'Key terms' : null;
                if (!c || !title) return null;
                return <li key={`${m.chapterId}/${m.sectionId}`}><a href={href(m.chapterId, m.sectionId)} className="flex min-h-11 items-center gap-2 p-3 font-bold hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300"><BookmarkCheck className="h-4 w-4 shrink-0 text-brand-dark" aria-hidden /> {title}<span className="text-sm font-semibold text-slate-500">· {c.title}</span></a></li>;
              })}
            </ul>
          </section>
        )}
      </div>
    </Shell>
  );
}

/* ---------- chapter reader ---------- */

function Contents({ parts, active, marks, onJump, hrefOf }) {
  return (
    <ol className="space-y-0.5">
      {parts.map((p) => (
        <li key={p.id}>
          <a href={hrefOf(p.id)} onClick={(e) => onJump(p.id, e)} aria-current={active === p.id ? 'location' : undefined}
            className={`flex min-h-11 items-center gap-2 rounded-xl px-3 py-2 text-sm font-bold leading-snug focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300 ${active === p.id ? 'bg-slate-100 text-brand-dark' : 'text-slate-600 hover:bg-slate-50'}`}>
            <span className="flex-1">{p.title}</span>
            {marks.includes(p.id) && <BookmarkCheck className="h-4 w-4 shrink-0 text-brand-dark" aria-label="Bookmarked" />}
          </a>
        </li>
      ))}
    </ol>
  );
}

function Reader({ book, meta, sectionId, store, update }) {
  const [ch, setCh] = useState(null);
  const [figs, setFigs] = useState({});
  const [err, setErr] = useState(null);
  const [active, setActive] = useState(null);
  const [menu, setMenu] = useState(false);
  const [pct, setPct] = useState(0);
  const [skipResume, setSkipResume] = useState(false);
  const moved = useRef(false);
  const saved = useRef(P.positionOf(store, book.id, meta.id)); // where the student was when they opened the chapter

  useEffect(() => {
    let off = false;
    loadChapter(book, meta).then(({ chapter, figures }) => { if (!off) { setCh(chapter); setFigs(figures); } }, (e) => { if (!off) setErr(e); });
    return () => { off = true; };
  }, [book, meta]);

  const parts = useMemo(() => (ch ? [...ch.sections.map((s) => ({ id: s.id, title: s.title })), { id: 'summary', title: 'Summary' }, ...(ch.glossary.length ? [{ id: 'terms', title: 'Key terms' }] : [])] : []), [ch]);
  const hrefOf = (id) => `#/book/${book.id}/${meta.id}/${id}`;

  const jump = useCallback((id, e) => {
    if (e) e.preventDefault();
    const el = document.getElementById(`sec-${id}`);
    if (!el) return;
    el.scrollIntoView({ block: 'start', behavior: 'instant' });
    el.querySelector('h2')?.focus({ preventScroll: true });
    try { window.history.replaceState(null, '', hrefOf(id)); } catch { /* ignore */ }
    setMenu(false);
  }, [book.id, meta.id]); // eslint-disable-line react-hooks/exhaustive-deps

  // a link to a section scrolls there once the chapter has loaded
  useEffect(() => {
    if (!ch || !sectionId) return;
    const el = document.getElementById(`sec-${sectionId}`);
    if (el) el.scrollIntoView({ block: 'start', behavior: 'instant' });
  }, [ch]); // eslint-disable-line react-hooks/exhaustive-deps

  // which section is on screen, and how far down the chapter the student is
  useEffect(() => {
    if (!ch) return undefined;
    const els = parts.map((p) => document.getElementById(`sec-${p.id}`)).filter(Boolean);
    const vis = new Map();
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => vis.set(e.target.id, e.isIntersecting));
      const first = els.find((el) => vis.get(el.id));
      if (first) setActive(first.id.slice(4));
    }, { rootMargin: '-10% 0px -75% 0px' });
    els.forEach((el) => io.observe(el));
    let tick = false;
    const onScroll = () => {
      if (window.scrollY > 40) moved.current = true;
      if (tick) return;
      tick = true;
      requestAnimationFrame(() => {
        tick = false;
        const max = document.documentElement.scrollHeight - window.innerHeight;
        setPct(max > 0 ? Math.min(100, Math.round((window.scrollY / max) * 100)) : 0);
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll); };
  }, [ch, parts]);

  // remember the position, but only after the student has actually scrolled (so opening a chapter never overwrites it)
  useEffect(() => {
    if (!active || !moved.current) return undefined;
    const t = setTimeout(() => update((s) => P.setPosition(s, book.id, meta.id, active)), 500);
    return () => clearTimeout(t);
  }, [active, update, book.id, meta.id]);

  const crumbs = [{ label: 'Home', href: '#/' }, { label: `${book.title} textbook`, href: `#/book/${book.id}` }, { label: meta.title }];
  if (err) return <Shell crumbs={crumbs}><div role="alert" className="card mx-auto max-w-xl space-y-3 p-6 text-center"><h1 className="font-display text-2xl font-black">This chapter did not load</h1><p className="text-slate-600">Check your connection and try again.</p><button type="button" className="btn btn-green" onClick={() => window.location.reload()}>Reload</button></div></Shell>;
  if (!ch) return <Shell crumbs={crumbs}><div role="status" aria-live="polite" className="py-20 text-center text-lg font-black text-slate-500"><span className="animate-pulse">Loading chapter…</span></div></Shell>;

  const marks = (store.books[book.id]?.marks[meta.id]) || [];
  const read = P.isRead(store, book.id, meta.id);
  const idx = book.chapters.findIndex((c) => c.id === meta.id);
  const prev = book.chapters[idx - 1];
  const next = book.chapters[idx + 1];
  const resumeAt = saved.current && saved.current !== ch.sections[0].id && !sectionId && !skipResume && !moved.current ? parts.find((p) => p.id === saved.current) : null;

  const MarkBtn = ({ id, title }) => {
    const on = marks.includes(id);
    return (
      <button type="button" aria-pressed={on} aria-label={`Bookmark: ${title}`} onClick={() => update((s) => P.toggleBookmark(s, book.id, meta.id, id))} className="grid h-11 w-11 shrink-0 place-items-center rounded-xl text-slate-500 hover:bg-slate-100 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">
        {on ? <BookmarkCheck className="h-5 w-5 text-brand-dark" aria-hidden /> : <Bookmark className="h-5 w-5" aria-hidden />}
      </button>
    );
  };
  const Heading = ({ id, title }) => (
    <div className="flex items-start justify-between gap-2">
      <h2 id={`h-${id}`} tabIndex={-1} className="font-display text-2xl font-black leading-tight outline-none">{title}</h2>
      {MarkBtn({ id, title })}
    </div>
  );

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-30 h-1.5 bg-transparent" role="progressbar" aria-label="Reading progress" aria-valuemin={0} aria-valuemax={100} aria-valuenow={pct}><div className="h-full" style={{ width: `${pct}%`, background: 'var(--brand)' }} /></div>
      <Shell crumbs={crumbs}>
        <div className="lg:grid lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-10">
          <aside className="lg:sticky lg:top-4 lg:max-h-[calc(100vh-2rem)] lg:self-start lg:overflow-y-auto">
            <button type="button" aria-expanded={menu} aria-controls="chapter-menu" onClick={() => setMenu(!menu)} className="card flex min-h-11 w-full items-center gap-2 px-4 py-2 text-left font-extrabold lg:hidden">
              <List className="h-5 w-5" aria-hidden /> Contents <span className="ml-auto text-sm font-bold text-slate-500">{menu ? 'Hide' : 'Show'}</span>
            </button>
            <nav id="chapter-menu" aria-label="Chapter contents" className={`${menu ? 'mt-2 block' : 'hidden'} card p-2 lg:mt-0 lg:block lg:border-0 lg:bg-transparent lg:p-0`}>
              <p className="hidden px-3 pb-1 text-xs font-extrabold uppercase tracking-wider text-slate-500 lg:block">In this chapter</p>
              <Contents parts={parts} active={active} marks={marks} onJump={jump} hrefOf={hrefOf} />
            </nav>
          </aside>

          <article className="mt-5 min-w-0 space-y-8 lg:mt-0">
            <header className="space-y-3">
              <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">Unit {ch.unit} · {ch.unitTitle} · Syllabus {ch.syllabusRef}</p>
              <h1 className="font-display text-3xl font-black leading-tight sm:text-4xl">{ch.title}</h1>
              <p className="text-lg font-semibold text-slate-600">{ch.subtitle}</p>
              <p className="flex flex-wrap items-center gap-2 text-sm font-bold text-slate-500">About {ch.minutes} minutes <Status status={ch.status} kind={meta.kind} /></p>
              <p className="rounded-xl border-2 border-amber-300 bg-amber-50 p-3 text-sm font-semibold leading-relaxed text-amber-900">{ch.review.state}</p>
            </header>

            {resumeAt && (
              <div role="region" aria-label="Resume reading" className="card flex flex-wrap items-center gap-3 p-4">
                <BookOpen className="h-5 w-5 text-brand-dark" aria-hidden />
                <p className="min-w-0 flex-1 font-bold">Pick up where you left off: <span className="text-brand-dark">{resumeAt.title}</span></p>
                <button type="button" className="btn btn-green !px-4 !py-2 text-sm" onClick={() => { setSkipResume(true); jump(resumeAt.id); }}>Resume</button>
                <button type="button" className="btn btn-ghost !px-4 !py-2 text-sm" onClick={() => setSkipResume(true)}>Start from the top</button>
              </div>
            )}

            <div className={`grid gap-4 ${ch.prerequisites.length ? 'md:grid-cols-2' : ''}`}>
              <section aria-label={ch.generated ? 'Lessons in this chapter' : 'Learning objectives'} className="card p-4">
                <h2 className="font-display text-lg font-black">{ch.generated ? 'In this chapter' : 'What you will learn'}</h2>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm font-semibold leading-relaxed">{ch.objectives.map((o) => <li key={o.id}>{ch.generated ? <a href={hrefOf(o.id)} onClick={(e) => jump(o.id, e)} className="text-brand-dark hover:underline">{o.text}</a> : o.text}</li>)}</ul>
              </section>
              {ch.prerequisites.length > 0 && (
                <section aria-label="Before you start" className="card p-4">
                  <h2 className="font-display text-lg font-black">Before you start</h2>
                  <ul className="mt-2 list-disc space-y-1.5 pl-5 text-sm font-semibold leading-relaxed">{ch.prerequisites.map((o) => <li key={o}>{o}</li>)}</ul>
                </section>
              )}
            </div>

            {ch.sections.map((s) => (
              <section key={s.id} id={`sec-${s.id}`} aria-labelledby={`h-${s.id}`} className="scroll-mt-6 space-y-4">
                {Heading({ id: s.id, title: s.title })}
                {s.blocks.map((b, i) => <Block key={i} block={b} chapter={ch} figures={figs} />)}
              </section>
            ))}

            <section id="sec-summary" aria-labelledby="h-summary" className="scroll-mt-6 space-y-3">
              {Heading({ id: 'summary', title: 'Summary' })}
              <ul className="list-disc space-y-2 pl-6 text-[1.0625rem] leading-[1.7]">{ch.summary.map((t, i) => <li key={i}><Rich text={t} /></li>)}</ul>
            </section>

            {ch.glossary.length > 0 && (
              <section id="sec-terms" aria-labelledby="h-terms" className="scroll-mt-6 space-y-3">
                {Heading({ id: 'terms', title: 'Key terms' })}
                <dl className="card divide-y divide-slate-100">{ch.glossary.map((g) => <div key={g.term} className="p-3"><dt className="font-extrabold">{g.term}</dt><dd className="text-sm font-semibold leading-relaxed text-slate-600">{g.def}</dd></div>)}</dl>
              </section>
            )}

            <footer className="space-y-4 border-t-2 border-slate-200 pt-6">
              <div className="flex flex-wrap items-center gap-3">
                <button type="button" aria-pressed={read} onClick={() => update((s) => P.setRead(s, book.id, meta.id, !read))} className={read ? 'btn btn-ghost' : 'btn btn-green'}>
                  <Check className="h-5 w-5" aria-hidden /> {read ? 'Marked as read' : 'Mark chapter as read'}
                </button>
                <p className="text-sm font-semibold text-slate-500">Marking a chapter as read records your reading. It does not change XP, stars or lesson progress.</p>
              </div>
              {ch.lessonLinks.map((l) => <a key={l.href} href={l.href} className="card block p-4 font-extrabold text-brand-dark hover:bg-slate-50 focus-visible:outline focus-visible:outline-4 focus-visible:outline-sky-300">{l.label} <ChevronRight className="inline h-4 w-4" aria-hidden /></a>)}
              <details className="card p-4">
                <summary className="min-h-11 cursor-pointer py-2 font-extrabold">What this chapter does not cover yet, and where it came from</summary>
                <ul className="mt-1 list-disc space-y-1 pl-5 text-sm font-semibold leading-relaxed">{ch.notCovered.map((t) => <li key={t}>{t}</li>)}</ul>
                <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-600">{ch.provenance}</p>
              </details>
              <nav aria-label="Chapter navigation" className="flex flex-wrap justify-between gap-2">
                {prev ? <a className="btn btn-ghost" href={`#/book/${book.id}/${prev.id}`}><ChevronLeft className="h-5 w-5" aria-hidden /> {prev.title}</a> : <a className="btn btn-ghost" href={`#/book/${book.id}`}><ChevronLeft className="h-5 w-5" aria-hidden /> All chapters</a>}
                {next && <a className="btn btn-green" href={`#/book/${book.id}/${next.id}`}>{next.title} <ChevronRight className="h-5 w-5" aria-hidden /></a>}
              </nav>
            </footer>
          </article>
        </div>
      </Shell>
    </>
  );
}

export default function TextbookApp({ path }) {
  const [bookId, chapterId, sectionId] = path;
  const [store, update] = useStore();
  const [book, setBook] = useState(undefined); // undefined while loading, null when there is no such book
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let off = false;
    setBook(undefined);
    loadBook(bookId).then((b) => { if (!off) setBook(b); }, () => { if (!off) setFailed(true); });
    return () => { off = true; };
  }, [bookId]);
  if (failed) return <Shell crumbs={[{ label: 'Home', href: '#/' }, { label: 'Textbook' }]}><div role="alert" className="card mx-auto max-w-xl space-y-3 p-6 text-center"><h1 className="font-display text-2xl font-black">The textbook did not load</h1><p className="text-slate-600">Check your connection and try again.</p><button type="button" className="btn btn-green" onClick={() => window.location.reload()}>Reload</button></div></Shell>;
  if (book === undefined) return <Shell crumbs={[{ label: 'Home', href: '#/' }, { label: 'Textbook' }]}><div role="status" aria-live="polite" className="py-20 text-center text-lg font-black text-slate-500"><span className="animate-pulse">Loading textbook…</span></div></Shell>;
  if (!book) return <NotFound what="Textbook" />;
  if (!chapterId) return <BookHome book={book} store={store} />;
  const meta = chapterOf(book, chapterId);
  if (!meta) return <NotFound what="Chapter" />;
  return <Reader key={`${book.id}/${meta.id}`} book={book} meta={meta} sectionId={sectionId || null} store={store} update={update} />;
}
