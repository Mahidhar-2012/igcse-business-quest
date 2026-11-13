import { useMemo, useRef, useState, useCallback } from 'react';
import { ArrowLeft, RotateCcw } from 'lucide-react';

/**
 * Curved-mirror ray-diagram lab — a live teaching demonstration.
 * Move the object along the principal axis and the reflected rays and the image
 * update in real time. Pole (P), focal point (F) and centre of curvature (C) are labelled.
 * Concave and convex. All original teaching material (no past-paper content).
 *
 * Geometry convention: pole at world origin, +x points toward the FRONT (object side).
 * f>0 concave, f<0 convex. Mirror equation 1/v + 1/u = 1/f, magnification m = -v/u.
 */

// ---- viewBox / world mapping -------------------------------------------------
const VBW = 720;
const VBH = 430;
const AXIS_Y = 215;      // principal axis (screen y)
const POLE_X = 498;      // pole P (screen x); front/object side is to the LEFT
const SCALE = 15;        // pixels per "cm"
const APERTURE = 7;      // mirror half-height in cm
const HO = 5;            // object height in cm (fixed)

const sx = (wx) => POLE_X - wx * SCALE;         // world x -> screen x  (+x world = left)
const sy = (wy) => AXIS_Y - wy * SCALE;         // world y -> screen y  (+y world = up)
const r1 = (n) => Math.round(n * 10) / 10;

// Extend a ray from screen point a through screen point b to well past the canvas (SVG clips it).
const far = (a, b, k = 400) => {
  const dx = b.x - a.x, dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  return { x: a.x + (dx / len) * k, y: a.y + (dy / len) * k };
};

const PRESETS_CONCAVE = [
  ['Beyond C', (f) => 2 * f + 7],
  ['At C', (f) => 2 * f],
  ['Between C & F', (f) => 1.5 * f],
  ['At F', (f) => f],
  ['Inside F', (f) => 0.55 * f],
];

function geometry(type, f, u) {
  const fs = type === 'concave' ? f : -f;         // signed focal length
  const C = 2 * fs;                                // centre of curvature (world x)
  const atFocus = Math.abs(u - fs) < 0.5;          // object ~ at focus -> image at infinity
  let v = atFocus ? Infinity : (u * fs) / (u - fs);
  const noImage = !isFinite(v) || Math.abs(v) > 95;
  const m = noImage ? 0 : -v / u;
  const hi = m * HO;
  const real = isFinite(v) && v > 0;

  const T = { x: u, y: HO };                        // object tip (world)
  const I = noImage ? null : { x: v, y: hi };       // image tip (world)

  // Mirror hit points on the pole plane (x = 0), paraxial convention.
  const Ma = { x: 0, y: HO };                        // parallel ray hits here
  const P0 = { x: 0, y: 0 };                         // pole ray hits here
  // Centre-of-curvature ray: line through T and C, where it meets x = 0.
  let Mc = null;
  if (Math.abs(u - C) > 0.8) {
    const s = u / (u - C);
    Mc = { x: 0, y: HO * (1 - s) };
  }

  return { fs, C, v, m, hi, real, noImage, atFocus, T, I, Ma, P0, Mc };
}

// Build the solid (incident + reflected) and dashed (virtual extension) polylines for one ray.
function rayPaths(Mw, g) {
  const { T, I, real, noImage } = g;
  const Tp = { x: sx(T.x), y: sy(T.y) };
  const Mp = { x: sx(Mw.x), y: sy(Mw.y) };
  const incident = [Tp, Mp];
  if (noImage || !I) {
    // Reflected direction: toward F for the parallel ray is handled by caller via I=null fallback.
    return { incident, reflected: null, dashed: null };
  }
  const Ip = { x: sx(I.x), y: sy(I.y) };
  if (real) {
    // Converges at the image, then continues past it.
    return { incident, reflected: [Mp, Ip, far(Mp, Ip)], dashed: null };
  }
  // Virtual: real reflected ray travels to the front (away from the image); image is a dashed extension behind.
  const front = far(Ip, Mp); // from image through mirror-hit, onward to the front
  return { incident, reflected: [Mp, front], dashed: [Mp, Ip] };
}

function Arrow({ from, to, color, dashed }) {
  // from/to are world points; draws a vertical object/image arrow with a head.
  const x = sx(from.x);
  const y0 = sy(from.y), y1 = sy(to.y);
  const up = y1 < y0 ? -1 : 1;
  return (
    <g>
      <line x1={x} y1={y0} x2={x} y2={y1} stroke={color} strokeWidth="3.5" strokeDasharray={dashed ? '6 5' : undefined} />
      <polygon points={`${x - 6},${y1 + up * 10} ${x + 6},${y1 + up * 10} ${x},${y1}`} fill={color} opacity={dashed ? 0.85 : 1} />
    </g>
  );
}

function Ray({ paths, color }) {
  const poly = (pts, dash) =>
    pts && <polyline points={pts.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke={color} strokeWidth="2.2" strokeLinejoin="round" strokeDasharray={dash ? '7 6' : undefined} opacity={dash ? 0.7 : 1} />;
  return (
    <g>
      {poly(paths.incident)}
      {poly(paths.reflected)}
      {poly(paths.dashed, true)}
    </g>
  );
}

function AxisPoint({ wx, label, sub, filled = true }) {
  if (!isFinite(wx) || Math.abs(wx) > 34) return null;
  const x = sx(wx);
  return (
    <g>
      <circle cx={x} cy={AXIS_Y} r="4" fill={filled ? '#0f172a' : '#fff'} stroke="#0f172a" strokeWidth="2" />
      <text x={x} y={AXIS_Y + 26} textAnchor="middle" fontSize="15" fontWeight="800" fill="#0f172a">{label}</text>
      {sub && <text x={x} y={AXIS_Y + 42} textAnchor="middle" fontSize="10.5" fontWeight="700" fill="#64748b">{sub}</text>}
    </g>
  );
}

export default function MirrorLab({ onBack }) {
  const [type, setType] = useState('concave');
  const [f, setF] = useState(8);
  const [u, setU] = useState(23);
  const svgRef = useRef(null);
  const drag = useRef(false);

  const g = useMemo(() => geometry(type, f, u), [type, f, u]);

  // ---- dragging the object along the axis -----------------------------------
  const pointerToU = useCallback((e) => {
    const svg = svgRef.current;
    if (!svg) return null;
    const rect = svg.getBoundingClientRect();
    const userX = ((e.clientX - rect.left) / rect.width) * VBW;
    const wx = (POLE_X - userX) / SCALE;
    return Math.min(30, Math.max(1.5, Math.round(wx * 2) / 2));
  }, []);
  const onMove = useCallback((e) => {
    if (!drag.current) return;
    const nu = pointerToU(e);
    if (nu != null) setU(nu);
  }, [pointerToU]);
  const endDrag = useCallback(() => { drag.current = false; }, []);

  // Mirror arc path (an arc of radius 2|f| through the pole).
  const arcPath = useMemo(() => {
    const R = 2 * f;
    const cx = g.fs >= 0 ? 2 * f : -2 * f; // centre x (world)
    const half = Math.min(APERTURE, R - 0.2);
    const ex = cx - Math.sign(cx || 1) * Math.sqrt(Math.max(0, R * R - half * half));
    const top = { x: sx(ex), y: sy(half) };
    const bot = { x: sx(ex), y: sy(-half) };
    const rpx = R * SCALE;
    // sweep flag chosen so a concave surface opens toward the object (left).
    const sweep = type === 'concave' ? 1 : 0;
    return `M ${top.x} ${top.y} A ${rpx} ${rpx} 0 0 ${sweep} ${bot.x} ${bot.y}`;
  }, [f, type, g.fs]);

  // Ray constructions.
  const rays = [];
  if (g.noImage) {
    // Object at F: parallel ray reflects through F; pole ray reflects symmetrically. Image at infinity.
    const Tp = { x: sx(g.T.x), y: sy(g.T.y) };
    const Ma = { x: sx(g.Ma.x), y: sy(g.Ma.y) };
    const Fp = { x: sx(g.fs), y: sy(0) };
    rays.push({ key: 'par', color: '#d97706', paths: { incident: [Tp, Ma], reflected: [Ma, far(Ma, Fp, 500)], dashed: null } });
    const Pp = { x: sx(0), y: sy(0) };
    // pole ray reflects to world direction (u, -ho); that screen point is (sx(u), sy(-ho)).
    const poleEnd = far(Pp, { x: sx(g.T.x), y: sy(-g.T.y) }, 480);
    rays.push({ key: 'pole', color: '#0284c7', paths: { incident: [Tp, Pp], reflected: [Pp, poleEnd], dashed: null } });
  } else {
    rays.push({ key: 'par', color: '#d97706', paths: rayPaths(g.Ma, g) });    // parallel -> through F
    rays.push({ key: 'pole', color: '#0284c7', paths: rayPaths(g.P0, g) });    // through pole
    if (g.Mc) rays.push({ key: 'cen', color: '#0d9488', paths: rayPaths(g.Mc, g) }); // through C -> back on itself
  }

  // Readout text.
  const nature = g.noImage
    ? 'No image — the reflected rays are parallel, so the image is at infinity.'
    : `${g.real ? 'Real' : 'Virtual'}, ${g.hi < 0 ? 'inverted' : 'upright'}, ${Math.abs(g.m) > 1.05 ? 'enlarged' : Math.abs(g.m) < 0.95 ? 'diminished' : 'same size'}.`;

  const reset = () => { setType('concave'); setF(8); setU(23); };

  return (
    <main className="mx-auto max-w-3xl px-4 pb-24 pt-4">
      <div className="mb-3 flex items-center gap-2">
        <button type="button" onClick={onBack} className="icon-btn" aria-label="Back to demos"><ArrowLeft className="h-5 w-5" /></button>
        <h1 className="text-xl font-black text-slate-800">Curved mirrors — live ray diagram</h1>
        <button type="button" onClick={reset} className="icon-btn ml-auto" aria-label="Reset demo" title="Reset"><RotateCcw className="h-5 w-5" /></button>
      </div>
      <p className="mb-3 text-sm font-semibold text-slate-500">
        Drag the <span className="font-black text-blue-600">object</span> (or use the sliders) to move it to different places. The reflected rays and the image update live. P = pole, F = focal point, C = centre of curvature.
      </p>

      <div className="overflow-hidden rounded-2xl border-2 border-slate-200 shadow-sm" style={{ background: '#ffffff' }}>
        <svg
          ref={svgRef}
          viewBox={`0 0 ${VBW} ${VBH}`}
          className="w-full touch-none select-none"
          style={{ cursor: 'ew-resize', background: '#ffffff' }}
          onPointerMove={onMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          role="img"
          aria-label={`Ray diagram of a ${type} mirror. Object distance ${r1(u)} centimetres. Image: ${nature}`}
        >
          <rect x="0" y="0" width={VBW} height={VBH} fill="#ffffff" />
          {/* principal axis */}
          <line x1="8" y1={AXIS_Y} x2={VBW - 8} y2={AXIS_Y} stroke="#cbd5e1" strokeWidth="1.5" strokeDasharray="2 4" />
          {/* mirror */}
          <path d={arcPath} fill="none" stroke="#4338ca" strokeWidth="5" strokeLinecap="round" />
          {/* axis points */}
          <AxisPoint wx={0} label="P" sub="pole" />
          <AxisPoint wx={g.fs} label="F" sub={`f=${r1(f)}`} filled={type === 'concave'} />
          <AxisPoint wx={2 * g.fs} label="C" sub={`r=${r1(2 * f)}`} filled={type === 'concave'} />

          {/* rays */}
          {rays.map((ry) => <Ray key={ry.key} paths={ry.paths} color={ry.color} />)}

          {/* image arrow */}
          {g.I && <Arrow from={{ x: g.I.x, y: 0 }} to={g.I} color={g.real ? '#059669' : '#7c3aed'} dashed={!g.real} />}
          {/* object arrow + drag handle */}
          <Arrow from={{ x: u, y: 0 }} to={{ x: u, y: HO }} color="#2563eb" />
          <g
            onPointerDown={(e) => { drag.current = true; e.currentTarget.setPointerCapture?.(e.pointerId); }}
            style={{ cursor: 'grab' }}
          >
            <rect x={sx(u) - 16} y={sy(HO) - 12} width="32" height={AXIS_Y - sy(HO) + 26} fill="transparent" />
            <circle cx={sx(u)} cy={sy(HO)} r="8" fill="#2563eb" stroke="#fff" strokeWidth="2.5" />
            <text x={sx(u)} y={sy(HO) - 14} textAnchor="middle" fontSize="12" fontWeight="800" fill="#2563eb">object</text>
          </g>
        </svg>
      </div>

      {/* nature readout */}
      <div className={`mt-3 rounded-2xl border-2 p-3 ${g.noImage ? 'border-amber-200 bg-amber-50' : g.real ? 'border-emerald-200 bg-emerald-50' : 'border-violet-200 bg-violet-50'}`}>
        <p className="text-base font-black text-slate-800">{nature}</p>
        {!g.noImage && (
          <p className="mt-1 text-sm font-semibold text-slate-600">
            Object distance u = {r1(u)} cm · image distance v = {r1(g.v)} cm {g.real ? '(in front)' : '(behind the mirror)'} · magnification m = {r1(g.m)}
          </p>
        )}
      </div>

      {/* controls */}
      <div className="mt-4 space-y-4">
        <div className="flex gap-2">
          {['concave', 'convex'].map((t) => (
            <button
              key={t}
              type="button"
              onClick={() => setType(t)}
              className={`flex-1 rounded-xl border-2 px-3 py-2 text-sm font-black capitalize transition ${type === t ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'}`}
            >
              {t} mirror
            </button>
          ))}
        </div>

        <label className="block">
          <span className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Object distance · u = {r1(u)} cm</span>
          <input type="range" min="1.5" max="30" step="0.5" value={u} onChange={(e) => setU(+e.target.value)} className="mt-1 w-full accent-blue-600" />
        </label>
        <label className="block">
          <span className="text-xs font-extrabold uppercase tracking-wide text-slate-500">Focal length · f = {r1(f)} cm (so C is at {r1(2 * f)} cm)</span>
          <input type="range" min="4" max="13" step="0.5" value={f} onChange={(e) => setF(+e.target.value)} className="mt-1 w-full accent-indigo-600" />
        </label>

        {type === 'concave' && (
          <div className="flex flex-wrap gap-2">
            {PRESETS_CONCAVE.map(([label, fn]) => (
              <button
                key={label}
                type="button"
                onClick={() => setU(Math.min(30, Math.max(1.5, Math.round(fn(f) * 2) / 2)))}
                className="rounded-full border-2 border-slate-200 bg-white px-3 py-1 text-xs font-extrabold text-slate-600 hover:border-indigo-300 hover:bg-indigo-50"
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* legend */}
      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-1 text-xs font-bold text-slate-500">
        <Legend color="#d97706" text="Ray parallel to axis → through F" />
        <Legend color="#0d9488" text="Ray through C → straight back" />
        <Legend color="#0284c7" text="Ray to pole → reflects about axis" />
        <Legend color="#2563eb" text="Object" />
        <Legend color="#059669" text="Real image" />
        <Legend color="#7c3aed" text="Virtual image (dashed)" />
      </div>
    </main>
  );
}

function Legend({ color, text }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className="h-2.5 w-4 rounded-full" style={{ background: color }} /> {text}
    </span>
  );
}
