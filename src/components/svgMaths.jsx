// Original Mathematics diagrams (part 1: number, algebra, graphs, geometry), in the plain black-line style of exam papers.
import { Svg, T, L, K } from './svgFigs.jsx';
import { C, Box, Ax } from './svgKit.jsx';

const BLUE = '#2563eb';
const RED = '#dc2626';
const TEAL = '#0d9488';

/** Polyline path through points. */
const path = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');

/* ---------- Prime factor tree ---------- */
const PrimeTree = () => {
  const comps = [360, 180, 90, 45, 15];
  const primes = [2, 2, 2, 3, 3];
  return (
    <Svg w={560} h={300} label="Prime factor tree for 360: it splits into 2, 2, 2, 3, 3 and 5, so 360 equals 2 cubed times 3 squared times 5">
      {comps.map((c, i) => {
        const y = 36 + i * 50;
        return (
          <g key={i}>
            <circle cx={300} cy={y} r={20} fill="#fff" stroke={K} strokeWidth={2} /><T x={300} y={y + 5} bold size={14}>{c}</T>
            <L x1={290} y1={y + 18} x2={248} y2={y + 36} w={1.6} />
            <circle cx={240} cy={y + 46} r={16} fill="#fecaca" stroke={K} strokeWidth={2} /><T x={240} y={y + 51} bold size={14}>{primes[i]}</T>
            {i < 4 && <L x1={300} y1={y + 20} x2={300} y2={y + 30} w={1.6} />}
          </g>
        );
      })}
      <circle cx={360} cy={282} r={16} fill="#fecaca" stroke={K} strokeWidth={2} /><T x={360} y={287} bold size={14}>5</T>
      <L x1={310} y1={252} x2={352} y2={270} w={1.6} />
      <T x={470} y={90} bold size={12}>Prime factors in red</T>
      <T x={470} y={130} size={13}>360 = 2 × 2 × 2 × 3 × 3 × 5</T>
      <T x={470} y={156} bold size={14}>360 = 2³ × 3² × 5</T>
    </Svg>
  );
};

/* ---------- Direct and inverse proportion ---------- */
const DirectInverse = () => (
  <Svg w={560} h={280} label="Direct proportion is a straight line through the origin; inverse proportion is a curve that falls as the other quantity rises and never touches either axis">
    <Ax x0={50} y0={215} x1={250} y1={30} xl="x" yl="y" />
    <L x1={50} y1={215} x2={230} y2={60} w={3.2} stroke={BLUE} />
    <T x={150} y={254} bold size={12}>Direct: y = kx</T><T x={150} y={270} size={11}>double x, double y</T>
    <Ax x0={320} y0={215} x1={520} y1={30} xl="x" yl="y" />
    <path d={path(Array.from({ length: 40 }, (_, i) => { const x = 0.6 + i * 0.1; return [320 + x * 45, 215 - 140 / x]; }).filter(([, y]) => y > 40))} fill="none" stroke={RED} strokeWidth={3.2} />
    <T x={420} y={254} bold size={12}>Inverse: y = k/x</T><T x={420} y={270} size={11}>double x, halve y; xy is constant</T>
  </Svg>
);

/* ---------- Bounds ---------- */
const BoundsLine = () => (
  <Svg w={560} h={200} label="Number line showing 8.6 to 1 decimal place lies from 8.55, included, up to 8.65, not included">
    <L x1={40} y1={110} x2={520} y2={110} w={2.4} />
    {[0, 1, 2, 3, 4].map((i) => (<g key={i}><L x1={80 + i * 100} y1={102} x2={80 + i * 100} y2={118} w={2} /><T x={80 + i * 100} y={138} size={12}>{(8.5 + i * 0.05).toFixed(2)}</T></g>))}
    <L x1={180} y1={110} x2={380} y2={110} w={7} stroke={BLUE} />
    <circle cx={180} cy={110} r={7} fill={BLUE} stroke={K} strokeWidth={2} />
    <circle cx={380} cy={110} r={7} fill="#fff" stroke={K} strokeWidth={2} />
    <T x={180} y={80} bold size={12}>lower bound 8.55</T><T x={180} y={96} size={11}>(included)</T>
    <T x={380} y={80} bold size={12}>upper bound 8.65</T><T x={380} y={96} size={11}>(not included)</T>
    <T x={280} y={176} size={13} bold>8.55 ≤ x &lt; 8.65</T>
  </Svg>
);

/* ---------- Area model ---------- */
const AreaModel = () => (
  <Svg w={560} h={260} label="Area model for expanding (x plus 3) times (2x minus 5): the four partial products are 2x squared, 6x, minus 5x and minus 15">
    <T x={190} y={40} bold size={14}>x</T><T x={310} y={40} bold size={14}>+3</T>
    <T x={96} y={100} bold size={14}>2x</T><T x={96} y={190} bold size={14}>−5</T>
    <rect x={130} y={50} width={120} height={80} fill="#bfdbfe" stroke={K} strokeWidth={2} /><T x={190} y={96} bold size={15}>2x²</T>
    <rect x={250} y={50} width={120} height={80} fill="#bbf7d0" stroke={K} strokeWidth={2} /><T x={310} y={96} bold size={15}>+6x</T>
    <rect x={130} y={130} width={120} height={80} fill="#fecaca" stroke={K} strokeWidth={2} /><T x={190} y={176} bold size={15}>−5x</T>
    <rect x={250} y={130} width={120} height={80} fill="#fef08a" stroke={K} strokeWidth={2} /><T x={310} y={176} bold size={15}>−15</T>
    <T x={470} y={106} size={12} bold>Add all four:</T>
    <T x={470} y={128} size={13}>2x² + 6x − 5x − 15</T>
    <T x={470} y={156} size={14} bold>= 2x² + x − 15</T>
  </Svg>
);

/* ---------- Quadratic graph ---------- */
const QuadraticGraph = () => {
  const X = (x) => 220 + x * 44, Y = (y) => 120 - y * 19;
  const pts = Array.from({ length: 57 }, (_, i) => { const x = -1.8 + i * 0.1; return [X(x), Y(x * x - 2 * x - 3)]; });
  return (
    <Svg w={560} h={240} label="Graph of y equals x squared minus 2x minus 3: roots at x equals minus 1 and 3, y-intercept minus 3 and minimum point (1, minus 4)">
      <L x1={90} y1={120} x2={380} y2={120} arrow w={2} /><L x1={220} y1={216} x2={220} y2={14} arrow w={2} />
      <T x={388} y={124} size={12} anchor="start">x</T><T x={228} y={20} size={12} anchor="start">y</T>
      <path d={path(pts)} fill="none" stroke={BLUE} strokeWidth={3.2} />
      <circle cx={X(-1)} cy={Y(0)} r={4.5} fill={RED} /><circle cx={X(3)} cy={Y(0)} r={4.5} fill={RED} />
      <circle cx={X(1)} cy={Y(-4)} r={4.5} fill={TEAL} /><circle cx={X(0)} cy={Y(-3)} r={4.5} fill={C.orange} />
      <T x={X(-1)} y={110} size={11} bold fill={RED}>−1</T><T x={X(3)} y={110} size={11} bold fill={RED}>3</T>
      <T x={X(1) + 10} y={Y(-4) + 16} size={11} bold fill={TEAL} anchor="start">(1, −4)</T>
      <T x={X(0) - 8} y={Y(-3) - 8} size={11} bold fill={C.orange} anchor="end">(0, −3)</T>
      <rect x={410} y={50} width={140} height={130} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
      <T x={480} y={72} bold size={12}>y = x² − 2x − 3</T>
      <T x={480} y={96} size={11} fill={RED}>roots: x = −1, x = 3</T>
      <T x={480} y={116} size={11} fill={C.orange}>y-intercept: −3</T>
      <T x={480} y={136} size={11} fill={TEAL}>minimum (1, −4)</T>
      <T x={480} y={160} size={11}>symmetry line x = 1</T>
    </Svg>
  );
};

/* ---------- Gradient ---------- */
const GradientLine = () => (
  <Svg w={560} h={260} label="Gradient of a straight line: the rise divided by the run between two points, for example 8 up and 4 across gives gradient 2">
    <Ax x0={60} y0={220} x1={340} y1={20} xl="x" yl="y" />
    <L x1={90} y1={200} x2={300} y2={40} w={3.2} stroke={BLUE} />
    <circle cx={140} cy={162} r={5} fill={K} /><circle cx={250} cy={78} r={5} fill={K} />
    <L x1={140} y1={162} x2={250} y2={162} w={2} dash="6 4" /><L x1={250} y1={162} x2={250} y2={78} w={2} dash="6 4" />
    <T x={195} y={182} size={12} bold>run = 4</T><T x={282} y={124} size={12} bold anchor="start">rise = 8</T>
    <T x={110} y={150} size={11} anchor="end">(2, 3)</T><T x={262} y={72} size={11} anchor="start">(6, 11)</T>
    <rect x={370} y={70} width={170} height={110} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={455} y={96} bold size={13}>gradient m</T>
    <T x={455} y={120} size={13}>= rise ÷ run</T>
    <T x={455} y={144} size={13}>= 8 ÷ 4</T>
    <T x={455} y={168} bold size={14}>= 2</T>
  </Svg>
);

/* ---------- Inequality region ---------- */
const InequalityRegion = () => {
  const X = (x) => 60 + x * 38, Y = (y) => 230 - y * 32;
  return (
    <Svg w={560} h={270} label="Region defined by y greater than or equal to x plus 1 and x plus y less than 6: a triangle above the solid line and below the dashed line">
      <L x1={60} y1={230} x2={330} y2={230} arrow w={2} /><L x1={60} y1={230} x2={60} y2={20} arrow w={2} />
      <T x={338} y={234} size={12} anchor="start">x</T><T x={68} y={22} size={12} anchor="start">y</T>
      <polygon points={`${X(0)},${Y(1)} ${X(0)},${Y(6)} ${X(2.5)},${Y(3.5)}`} fill="#fde68a" opacity={0.75} />
      <L x1={X(0)} y1={Y(1)} x2={X(5)} y2={Y(6)} w={3} stroke={BLUE} />
      <L x1={X(0)} y1={Y(6)} x2={X(6)} y2={Y(0)} w={3} stroke={RED} dash="8 5" />
      <T x={X(4.6)} y={Y(6.5)} size={12} bold fill={BLUE}>y = x + 1 (solid)</T>
      <T x={X(5.9)} y={Y(1)} size={12} bold fill={RED} anchor="start">x + y = 6</T><T x={X(5.9)} y={Y(1) + 14} size={11} fill={RED} anchor="start">(dashed)</T>
      <T x={X(0.9)} y={Y(4)} bold size={20}>R</T>
      <circle cx={X(1)} cy={Y(3)} r={4.5} fill={K} />
      <T x={450} y={90} bold size={12}>Solid: ≤ or ≥ included</T>
      <T x={450} y={112} bold size={12}>Dashed: &lt; or &gt; not included</T>
      <T x={450} y={150} size={11}>Test a point such as (0, 0)</T><T x={450} y={166} size={11}>to choose the side to shade</T><T x={450} y={196} size={11} bold>The point (1, 3) is inside R</T>
    </Svg>
  );
};

/* ---------- Graph shapes ---------- */
const GraphShapes = () => {
  const panel = (ox, oy, name, d, sub) => (
    <g key={name}>
      <L x1={ox} y1={oy + 70} x2={ox + 120} y2={oy + 70} arrow w={1.6} /><L x1={ox + 60} y1={oy + 100} x2={ox + 60} y2={oy} arrow w={1.6} />
      <path d={d(ox, oy)} fill="none" stroke={BLUE} strokeWidth={3} />
      <T x={ox + 60} y={oy + 116} bold size={12}>{name}</T><T x={ox + 60} y={oy + 130} size={10}>{sub}</T>
    </g>
  );
  const U = (ox, oy) => path(Array.from({ length: 31 }, (_, i) => { const x = -1.5 + i * 0.1; return [ox + 60 + x * 30, oy + 56 - x * x * 16]; }));
  const S = (ox, oy) => path(Array.from({ length: 31 }, (_, i) => { const x = -1.5 + i * 0.1; return [ox + 60 + x * 32, oy + 70 - (x * x * x - x) * 16]; }));
  const R1 = (ox, oy) => path(Array.from({ length: 22 }, (_, i) => { const x = 0.3 + i * 0.1; return [ox + 60 + x * 28, oy + 70 - 28 / x]; }).filter(([, y]) => y > oy));
  const R2 = (ox, oy) => path(Array.from({ length: 22 }, (_, i) => { const x = 0.3 + i * 0.1; return [ox + 60 - x * 28, oy + 70 + 28 / x]; }).filter(([, y]) => y < oy + 100));
  const E = (ox, oy) => path(Array.from({ length: 31 }, (_, i) => { const x = -1.5 + i * 0.1; return [ox + 60 + x * 32, oy + 70 - Math.pow(2, x) * 14]; }).filter(([, y]) => y > oy));
  return (
    <Svg w={560} h={320} label="Standard graph shapes: quadratic parabola, cubic S-shape, reciprocal with two branches and exponential growth curve">
      {panel(30, 12, 'Quadratic', U, 'y = ax² + bx + c')}
      {panel(310, 12, 'Cubic', S, 'y = ax³ + …')}
      <g>
        <L x1={30} y1={232} x2={150} y2={232} arrow w={1.6} /><L x1={90} y1={262} x2={90} y2={162} arrow w={1.6} />
        <path d={R1(30, 162)} fill="none" stroke={BLUE} strokeWidth={3} /><path d={R2(30, 162)} fill="none" stroke={BLUE} strokeWidth={3} />
        <T x={90} y={278} bold size={12}>Reciprocal</T><T x={90} y={292} size={10}>y = a/x, asymptotes on the axes</T>
      </g>
      <g>
        <L x1={310} y1={232} x2={430} y2={232} arrow w={1.6} /><L x1={370} y1={262} x2={370} y2={162} arrow w={1.6} />
        <path d={E(310, 162)} fill="none" stroke={BLUE} strokeWidth={3} />
        <circle cx={370} cy={218} r={3.5} fill={RED} /><T x={382} y={216} size={10} anchor="start" fill={RED}>(0, 1)</T>
        <T x={370} y={278} bold size={12}>Exponential</T><T x={370} y={292} size={10}>y = aˣ, passes through (0, 1)</T>
      </g>
    </Svg>
  );
};

/* ---------- Motion graphs ---------- */
const MotionGraphs = () => (
  <Svg w={560} h={280} label="Distance-time graph where gradient is speed and a flat line means stationary, and a speed-time graph where gradient is acceleration and the area under the graph is distance">
    <Ax x0={50} y0={215} x1={250} y1={30} xl="time" yl="distance" />
    <path d="M50 215 L110 130 L170 130 L240 40" fill="none" stroke={BLUE} strokeWidth={3.2} />
    <T x={116} y={196} size={11} anchor="start" bold>steady speed</T><T x={140} y={122} size={11} bold>stationary</T><T x={200} y={70} size={11} anchor="end" bold>faster</T>
    <T x={150} y={254} size={11}>gradient = speed</T>
    <Ax x0={320} y0={215} x1={530} y1={30} xl="time" yl="speed" />
    <polygon points="320,215 370,80 450,80 500,215" fill="#bfdbfe" opacity={0.8} stroke={K} strokeWidth={0} />
    <path d="M320 215 L370 80 L450 80 L500 215" fill="none" stroke={RED} strokeWidth={3.2} />
    <T x={346} y={200} size={10} anchor="start" bold>accelerating</T><T x={410} y={72} size={11} bold>constant speed</T><T x={508} y={170} size={11} anchor="start" bold>slowing</T>
    <T x={410} y={150} size={12} bold>area = distance</T>
    <T x={420} y={254} size={11}>gradient = acceleration</T>
  </Svg>
);

/* ---------- Function machine ---------- */
const FunctionMachine = () => (
  <Svg w={560} h={220} label="Function machine: the input x goes into the rule f of x equals 3x minus 2 and the output is shown, for example input 4 gives output 10">
    <Box x={30} y={80} w={90} h={50} fill={C.blue} size={14}>input x</Box>
    <L x1={122} y1={105} x2={190} y2={105} arrow w={2.4} />
    <rect x={192} y={60} width={180} height={90} rx={12} fill="#fed7aa" stroke={K} strokeWidth={2.6} />
    <T x={282} y={92} bold size={15}>f(x) = 3x − 2</T><T x={282} y={116} size={12}>multiply by 3, subtract 2</T><T x={282} y={136} size={11}>one output per input</T>
    <L x1={374} y1={105} x2={440} y2={105} arrow w={2.4} />
    <Box x={442} y={80} w={100} h={50} fill={C.green} size={14}>output f(x)</Box>
    <T x={75} y={160} size={13} bold>4</T><T x={492} y={160} size={13} bold>10</T>
    <T x={280} y={196} size={12}>f(4) = 3(4) − 2 = 10</T>
  </Svg>
);

/* ---------- Tangent on a curve ---------- */
const TangentCurve = () => {
  const X = (x) => 260 + x * 44, Y = (y) => 120 - y * 5.4;
  const pts = Array.from({ length: 69 }, (_, i) => { const x = -3.4 + i * 0.1; return [X(x), Y(x * x * x - 12 * x)]; });
  return (
    <Svg w={560} h={250} label="Graph of y equals x cubed minus 12x with a maximum at (minus 2, 16), a minimum at (2, minus 16) and a tangent line at the origin with gradient minus 12">
      <L x1={90} y1={120} x2={430} y2={120} arrow w={2} /><L x1={260} y1={236} x2={260} y2={6} arrow w={2} />
      <path d={path(pts)} fill="none" stroke={BLUE} strokeWidth={3.2} />
      <L x1={X(-1.1)} y1={Y(13.2)} x2={X(1.1)} y2={Y(-13.2)} w={2.2} stroke={RED} />
      <circle cx={X(0)} cy={Y(0)} r={4.5} fill={RED} />
      <circle cx={X(-2)} cy={Y(16)} r={4.5} fill={TEAL} /><circle cx={X(2)} cy={Y(-16)} r={4.5} fill={TEAL} />
      <T x={X(-2) - 8} y={Y(16) - 2} size={11} bold fill={TEAL} anchor="end">max (−2, 16)</T>
      <T x={X(2) + 8} y={Y(-16) + 16} size={11} bold fill={TEAL} anchor="start">min (2, −16)</T>
      <T x={480} y={60} bold size={12}>dy/dx = 3x² − 12</T><T x={480} y={80} size={11}>= 0 at x = ±2</T><T x={480} y={112} size={11} bold fill={RED}>red tangent at x = 0:</T><T x={480} y={128} size={11} fill={RED}>gradient −12</T>
    </Svg>
  );
};

/* ---------- Parallel line angles ---------- */
const ParallelAngles = () => {
  const panel = (ox, title, sub, labA, labB, col) => {
    const T1 = [ox + 70, 70], B1 = [ox + 115, 140];
    const off = { UL: [-24, -10], UR: [24, -10], LL: [-24, 24], LR: [24, 24] };
    const at = (base, k) => [base[0] + off[k][0], base[1] + off[k][1]];
    const [ax, ay] = at(T1, labA), [bx, by] = at(B1, labB);
    return (
      <g key={title}>
        <L x1={ox} y1={70} x2={ox + 170} y2={70} w={2.2} /><L x1={ox} y1={140} x2={ox + 170} y2={140} w={2.2} />
        <path d={`M${ox + 130} 64 l9 6 l-9 6`} fill="none" stroke={K} strokeWidth={1.5} /><path d={`M${ox + 130} 134 l9 6 l-9 6`} fill="none" stroke={K} strokeWidth={1.5} />
        <L x1={ox + 48} y1={20} x2={ox + 138} y2={190} w={2.2} />
        <T x={ax} y={ay + 4} size={14} bold fill={col}>a</T><T x={bx} y={by + 4} size={14} bold fill={col}>{title === 'Co-interior' ? 'b' : 'a'}</T>
        <T x={ox + 85} y={216} bold size={12} fill={col}>{title}</T><T x={ox + 85} y={232} size={11}>{sub}</T>
      </g>
    );
  };
  return (
    <Svg w={560} h={250} label="Three pairs of angles formed when parallel lines are cut by a transversal: corresponding angles are equal, alternate angles are equal and co-interior angles add to 180 degrees">
      {panel(10, 'Corresponding', 'equal (F shape)', 'UR', 'UR', BLUE)}
      {panel(195, 'Alternate', 'equal (Z shape)', 'LR', 'UL', TEAL)}
      {panel(380, 'Co-interior', 'a + b = 180° (C shape)', 'LR', 'UR', RED)}
      <T x={280} y={248} size={10}>arrow heads show the lines are parallel</T>
    </Svg>
  );
};
/* ---------- Polygon angles ---------- */
const PolygonAngles = () => {
  const cx = 150, cy = 140, r = 90;
  const v = Array.from({ length: 6 }, (_, i) => [cx + r * Math.cos((Math.PI / 3) * i - Math.PI / 2), cy + r * Math.sin((Math.PI / 3) * i - Math.PI / 2)]);
  const ext = [v[0][0] + 0.55 * (v[0][0] - v[5][0]), v[0][1] + 0.55 * (v[0][1] - v[5][1])];
  return (
    <Svg w={560} h={280} label="A regular hexagon: each exterior angle is 360 divided by 6 which is 60 degrees and each interior angle is 120 degrees">
      <polygon points={v.map((p) => p.join(',')).join(' ')} fill="#e0f2fe" stroke={K} strokeWidth={2.6} />
      <L x1={v[0][0]} y1={v[0][1]} x2={ext[0]} y2={ext[1]} w={2} dash="5 4" />
      <T x={v[0][0] + 42} y={v[0][1] + 20} size={12} bold fill={RED} anchor="start">60° exterior</T>
      <T x={cx} y={cy + 6} size={13} bold fill={BLUE}>120°</T><T x={cx} y={cy + 22} size={11}>interior</T>
      <rect x={300} y={40} width={250} height={190} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
      <T x={425} y={66} bold size={13}>Regular polygon, n sides</T>
      <T x={425} y={96} size={12}>exterior angle = 360° ÷ n</T>
      <T x={425} y={120} size={12}>interior + exterior = 180°</T>
      <T x={425} y={144} size={12}>interior sum = (n − 2) × 180°</T>
      <T x={425} y={176} size={12} bold>n = 6: 60°, 120°, sum 720°</T>
      <T x={425} y={206} size={11}>exterior angles of any polygon add to 360°</T>
    </Svg>
  );
};

/* ---------- Similar triangles ---------- */
const SimilarTriangles = () => (
  <Svg w={560} h={260} label="Two similar triangles: corresponding sides 8 and 20 have scale factor 2.5, so the side of 12 corresponds to 30">
    <polygon points="40,200 200,200 40,80" fill="#bfdbfe" stroke={K} strokeWidth={2.4} />
    <T x={120} y={218} bold size={12}>12</T><T x={28} y={146} bold size={12} anchor="end">8</T><T x={130} y={134} size={11} anchor="start">x</T>
    <polygon points="260,230 500,230 260,50" fill="#bbf7d0" stroke={K} strokeWidth={2.4} />
    <T x={380} y={248} bold size={12}>30</T><T x={248} y={146} bold size={12} anchor="end">20</T>
    <T x={455} y={60} size={13} bold>Scale factor</T><T x={455} y={80} size={13} bold>k = 20 ÷ 8 = 2.5</T>
    <T x={455} y={104} size={11}>small side × 2.5 = large side</T>
    <T x={455} y={124} size={11}>12 × 2.5 = 30</T>
  </Svg>
);

/* ---------- Circle theorems 1 ---------- */
const CircleThm1 = () => (
  <Svg w={560} h={280} label="Circle theorems: the angle at the centre is twice the angle at the circumference on the same arc, and the angle in a semicircle is 90 degrees">
    <circle cx={140} cy={140} r={90} fill="#f0f9ff" stroke={K} strokeWidth={2.4} />
    <circle cx={140} cy={140} r={3} fill={K} /><T x={128} y={132} size={12} bold anchor="end">O</T>
    <L x1={140} y1={140} x2={85} y2={210} w={2} /><L x1={140} y1={140} x2={205} y2={204} w={2} />
    <L x1={140} y1={50} x2={85} y2={210} w={2} stroke={BLUE} /><L x1={140} y1={50} x2={205} y2={204} w={2} stroke={BLUE} />
    <T x={140} y={42} size={12} bold>P</T><T x={76} y={226} size={12} bold>A</T><T x={212} y={220} size={12} bold>B</T>
    <T x={140} y={186} size={12} bold fill={RED}>2x</T><T x={140} y={80} size={12} bold fill={BLUE}>x</T>
    <T x={140} y={262} size={12}>centre angle = 2 × circumference angle</T>
    <circle cx={410} cy={140} r={90} fill="#f0fdf4" stroke={K} strokeWidth={2.4} />
    <L x1={320} y1={140} x2={500} y2={140} w={2} /><circle cx={410} cy={140} r={3} fill={K} />
    <L x1={320} y1={140} x2={440} y2={52} w={2} stroke={BLUE} /><L x1={500} y1={140} x2={440} y2={52} w={2} stroke={BLUE} />
    <path d="M432 62 l8 10 l10 -6" fill="none" stroke={RED} strokeWidth={1.8} />
    <T x={440} y={44} size={12} bold>C</T><T x={310} y={146} size={12} bold anchor="end">A</T><T x={510} y={146} size={12} bold anchor="start">B</T>
    <T x={410} y={262} size={12}>angle in a semicircle = 90°</T>
  </Svg>
);

/* ---------- Circle theorems 2 ---------- */
const CircleThm2 = () => (
  <Svg w={560} h={280} label="Cyclic quadrilateral with opposite angles adding to 180 degrees, and a tangent that meets a radius at 90 degrees">
    <circle cx={140} cy={130} r={92} fill="#fef9c3" stroke={K} strokeWidth={2.4} />
    <polygon points="140,38 228,150 150,222 52,150" fill="none" stroke={BLUE} strokeWidth={2.6} />
    <T x={140} y={30} size={12} bold>A</T><T x={238} y={154} size={12} bold anchor="start">B</T><T x={150} y={240} size={12} bold>C</T><T x={42} y={154} size={12} bold anchor="end">D</T>
    <T x={196} y={150} size={12} bold fill={RED}>112°</T><T x={92} y={150} size={12} bold fill={RED}>68°</T>
    <T x={140} y={266} size={12}>opposite angles add to 180°</T>
    <circle cx={410} cy={130} r={80} fill="#f0f9ff" stroke={K} strokeWidth={2.4} />
    <circle cx={410} cy={130} r={3} fill={K} /><T x={400} y={122} size={12} bold anchor="end">O</T>
    <L x1={410} y1={130} x2={410} y2={210} w={2} /><circle cx={410} cy={210} r={3} fill={K} />
    <L x1={330} y1={210} x2={520} y2={210} w={2.2} stroke={RED} />
    <path d="M410 198 h12 v12" fill="none" stroke={RED} strokeWidth={1.8} />
    <T x={410} y={228} size={12} bold>T</T><T x={500} y={226} size={12} bold fill={RED}>tangent</T>
    <T x={410} y={266} size={12}>tangent ⟂ radius (90°)</T>
  </Svg>
);

/* ---------- Loci ---------- */
const LocusRegions = () => (
  <Svg w={560} h={280} label="Three loci: points a fixed distance from P form a circle, points equidistant from A and B lie on the perpendicular bisector, and points equidistant from two lines lie on the angle bisector">
    <circle cx={90} cy={110} r={56} fill="#e0f2fe" stroke={BLUE} strokeWidth={2.6} /><circle cx={90} cy={110} r={3} fill={K} /><T x={80} y={104} size={12} bold anchor="end">P</T>
    <L x1={90} y1={110} x2={146} y2={110} w={1.6} /><T x={118} y={104} size={11}>r</T>
    <T x={90} y={200} bold size={12}>fixed distance from P</T><T x={90} y={216} size={11}>a circle</T>
    <circle cx={225} cy={110} r={4} fill={K} /><circle cx={335} cy={110} r={4} fill={K} />
    <L x1={225} y1={110} x2={335} y2={110} w={1.8} /><L x1={280} y1={40} x2={280} y2={190} w={2.6} stroke={BLUE} dash="7 5" />
    <T x={218} y={126} size={12} bold anchor="end">A</T><T x={342} y={126} size={12} bold anchor="start">B</T>
    <T x={280} y={206} bold size={12}>equidistant from A and B</T><T x={280} y={222} size={11}>perpendicular bisector</T>
    <L x1={400} y1={170} x2={540} y2={60} w={2.2} /><L x1={400} y1={170} x2={540} y2={170} w={2.2} />
    <L x1={400} y1={170} x2={540} y2={115} w={2.6} stroke={BLUE} dash="7 5" />
    <T x={470} y={206} bold size={12}>equidistant from two lines</T><T x={470} y={222} size={11}>angle bisector</T>
    <T x={280} y={262} size={11}>Keep your construction arcs in an exam answer</T>
  </Svg>
);

/* ---------- Sector ---------- */
const SectorArc = () => {
  const cx = 160, cy = 140, r = 100, a = (60 * Math.PI) / 180, b = (-60 * Math.PI) / 180;
  const p = (t) => [cx + r * Math.cos(t), cy + r * Math.sin(t)];
  const [x0, y0] = p(a), [x1, y1] = p(b);
  return (
    <Svg w={560} h={270} label="Circle sector with radius r and angle theta at the centre: arc length is theta over 360 times 2 pi r and sector area is theta over 360 times pi r squared">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke={K} strokeWidth={1.6} strokeDasharray="6 4" />
      <path d={`M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 0 0 ${x1} ${y1} Z`} fill="#bfdbfe" stroke={K} strokeWidth={2.6} />
      <path d={`M${x0} ${y0} A${r} ${r} 0 0 0 ${x1} ${y1}`} fill="none" stroke={RED} strokeWidth={4.5} />
      <T x={cx + 38} y={cy + 5} size={14} bold>θ</T><T x={cx + 56} y={cy - 24} size={12} bold anchor="start">r</T>
      <T x={cx + r + 14} y={cy + 4} size={12} bold fill={RED} anchor="start">arc</T><T x={cx + 70} y={cy + 44} size={12} bold>sector</T>
      <rect x={300} y={50} width={250} height={150} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
      <T x={425} y={76} bold size={13}>Fraction of the circle = θ/360</T>
      <T x={425} y={110} size={13}>arc = (θ/360) × 2πr</T>
      <T x={425} y={140} size={13}>sector area = (θ/360) × πr²</T>
      <T x={425} y={176} size={11}>sector perimeter = arc + 2r</T>
    </Svg>
  );
};

/* ---------- Area formulae ---------- */
const AreaFormulas = () => (
  <Svg w={560} h={260} label="Area formulas for a triangle, a parallelogram and a trapezium with perpendicular height shown">
    <polygon points="30,170 150,170 100,60" fill="#bfdbfe" stroke={K} strokeWidth={2.4} /><L x1={100} y1={60} x2={100} y2={170} w={1.6} dash="5 4" />
    <T x={90} y={120} size={11} anchor="end">h</T><T x={90} y={188} size={12}>b</T>
    <T x={90} y={216} bold size={12}>triangle</T><T x={90} y={234} size={12}>A = ½ × b × h</T>
    <polygon points="210,170 330,170 360,70 240,70" fill="#bbf7d0" stroke={K} strokeWidth={2.4} /><L x1={240} y1={70} x2={240} y2={170} w={1.6} dash="5 4" />
    <T x={246} y={124} size={11} anchor="start">h</T><T x={270} y={188} size={12}>b</T>
    <T x={285} y={216} bold size={12}>parallelogram</T><T x={285} y={234} size={12}>A = b × h</T>
    <polygon points="400,170 540,170 510,70 440,70" fill="#fde68a" stroke={K} strokeWidth={2.4} /><L x1={440} y1={70} x2={440} y2={170} w={1.6} dash="5 4" />
    <T x={474} y={62} size={12}>a</T><T x={470} y={188} size={12}>b</T><T x={446} y={124} size={11} anchor="start">h</T>
    <T x={470} y={216} bold size={12}>trapezium</T><T x={470} y={234} size={12}>A = ½(a + b)h</T>
  </Svg>
);

export const MATHS_FIGS = {
  primeTree: PrimeTree,
  directInverse: DirectInverse,
  boundsLine: BoundsLine,
  areaModel: AreaModel,
  quadraticGraph: QuadraticGraph,
  gradientLine: GradientLine,
  inequalityRegion: InequalityRegion,
  graphShapes: GraphShapes,
  motionGraphs: MotionGraphs,
  functionMachine: FunctionMachine,
  tangentCurve: TangentCurve,
  parallelAngles: ParallelAngles,
  polygonAngles: PolygonAngles,
  similarTriangles: SimilarTriangles,
  circleThm1: CircleThm1,
  circleThm2: CircleThm2,
  locusRegions: LocusRegions,
  sectorArc: SectorArc,
  areaFormulas: AreaFormulas,
};
