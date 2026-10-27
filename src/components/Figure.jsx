import { SVG_FIGS } from './svgFigs.jsx';

const BASE = import.meta.env.BASE_URL;

/**
 * A diagram. `fig` is either a path under /public (string), or { src, alt, caption } for an image,
 * or { svg: 'name', caption } for a built-in vector diagram from svgFigs.jsx.
 */
export default function Figure({ fig, className = '' }) {
  const f = typeof fig === 'string' ? { src: fig } : fig;
  const Svg = f.svg ? SVG_FIGS[f.svg] : null;
  return (
    <figure className={`my-3 ${className}`}>
      <div className="overflow-hidden rounded-xl border-2 border-slate-200 bg-white p-2">
        {Svg ? (
          <Svg />
        ) : (
          <img src={`${BASE}${f.src}`} alt={f.alt || 'Diagram'} loading="lazy" className="mx-auto block h-auto max-h-[28rem] w-auto max-w-full" />
        )}
      </div>
      {f.caption && <figcaption className="mt-1 text-center text-xs font-bold text-slate-500">{f.caption}</figcaption>}
    </figure>
  );
}
