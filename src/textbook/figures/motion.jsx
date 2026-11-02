// Original drawings for the "Describing motion" chapter. Drawn on a white "paper" panel with dark ink, so they read
// the same in light and dark themes. Colour is never the only cue: every section is also labelled in words.
const INK = '#111827';
const GRID = '#d6d3d1';

const Frame = ({ alt, children }) => (
  <svg viewBox="0 0 480 300" role="img" aria-label={alt} className="mx-auto block h-auto w-full max-w-[34rem]" fontFamily="system-ui, sans-serif">
    <defs>
      <marker id="mo-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" fill={INK} /></marker>
    </defs>
    {children}
  </svg>
);

/** Grid, axes, tick numbers and axis titles. Plot box: x 60..420, y 250 (zero) up to 50. */
const Axes = ({ xTicks, yTicks, xTitle, yTitle, xStep, yStep }) => (
  <g>
    {xTicks.map((t, i) => <line key={`vx${t}`} x1={60 + i * xStep} y1={250} x2={60 + i * xStep} y2={50} stroke={GRID} strokeWidth="1" />)}
    {yTicks.map((t, i) => <line key={`hy${t}`} x1={60} y1={250 - i * yStep} x2={420} y2={250 - i * yStep} stroke={GRID} strokeWidth="1" />)}
    <line x1="60" y1="250" x2="440" y2="250" stroke={INK} strokeWidth="2" markerEnd="url(#mo-arrow)" />
    <line x1="60" y1="250" x2="60" y2="36" stroke={INK} strokeWidth="2" markerEnd="url(#mo-arrow)" />
    {xTicks.map((t, i) => <text key={`xt${t}`} x={60 + i * xStep} y={268} textAnchor="middle" fontSize="12" fill={INK}>{t}</text>)}
    {yTicks.map((t, i) => <text key={`yt${t}`} x={52} y={254 - i * yStep} textAnchor="end" fontSize="12" fill={INK}>{t}</text>)}
    <text x="240" y="291" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK}>{xTitle}</text>
    <text x="14" y="150" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK} transform="rotate(-90 14 150)">{yTitle}</text>
  </g>
);

export function DistanceTime({ alt }) {
  return (
    <Frame alt={alt}>
      <Axes xTicks={[0, 10, 20, 30]} yTicks={[0, 10, 20, 30, 40, 50]} xStep={120} yStep={40} xTitle="Time (s)" yTitle="Distance (m)" />
      <polyline points="60,250 180,170 300,170 420,50" fill="none" stroke="#1d4ed8" strokeWidth="3.5" strokeLinejoin="round" />
      <line x1="300" y1="170" x2="420" y2="170" stroke={INK} strokeWidth="1.5" strokeDasharray="5 4" />
      <line x1="420" y1="170" x2="420" y2="50" stroke={INK} strokeWidth="1.5" strokeDasharray="5 4" />
      <text x="360" y="187" textAnchor="middle" fontSize="12" fill={INK}>10 s</text>
      <text x="426" y="116" fontSize="12" fill={INK}>30 m</text>
      <text x="138" y="222" fontSize="13" fontWeight="700" fill="#1d4ed8">A: 2 m/s</text>
      <text x="240" y="158" textAnchor="middle" fontSize="13" fontWeight="700" fill="#92400e">B: at rest</text>
      <text x="334" y="100" textAnchor="end" fontSize="13" fontWeight="700" fill="#166534">C: 3 m/s</text>
    </Frame>
  );
}

export function SpeedTime({ alt }) {
  return (
    <Frame alt={alt}>
      <Axes xTicks={[0, 5, 10, 15, 20]} yTicks={[0, 5, 10, 15, 20, 25]} xStep={90} yStep={40} xTitle="Time (s)" yTitle="Speed (m/s)" />
      <polygon points="60,250 150,90 330,90 420,250" fill="rgba(37,99,235,0.16)" />
      <line x1="150" y1="90" x2="150" y2="250" stroke={INK} strokeWidth="1.5" strokeDasharray="5 4" />
      <line x1="330" y1="90" x2="330" y2="250" stroke={INK} strokeWidth="1.5" strokeDasharray="5 4" />
      <polyline points="60,250 150,90 330,90 420,250" fill="none" stroke="#1d4ed8" strokeWidth="3.5" strokeLinejoin="round" />
      <text x="128" y="226" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK}>50 m</text>
      <text x="240" y="176" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK}>10 s × 20 m/s = 200 m</text>
      <text x="352" y="226" textAnchor="middle" fontSize="13" fontWeight="700" fill={INK}>50 m</text>
      <text x="240" y="132" textAnchor="middle" fontSize="12" fill={INK}>Shaded area = distance</text>
      <text x="96" y="74" textAnchor="middle" fontSize="12" fontWeight="700" fill="#166534">a = +4 m/s²</text>
      <text x="240" y="74" textAnchor="middle" fontSize="12" fontWeight="700" fill="#92400e">constant speed, a = 0</text>
      <text x="388" y="74" textAnchor="middle" fontSize="12" fontWeight="700" fill="#b91c1c">a = −4 m/s²</text>
    </Frame>
  );
}

export const FIGURES = { 'dt-graph': DistanceTime, 'st-graph': SpeedTime };
