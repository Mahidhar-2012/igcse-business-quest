// Original Additional Mathematics diagrams, in the plain black-line style of exam papers.
import { Svg, T, L, K } from './svgFigs.jsx';
import { C, Box } from './svgKit.jsx';

const BLUE = '#2563eb';
const RED = '#dc2626';
const TEAL = '#0d9488';
const ORANGE = '#f97316';

const path = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');
const range = (a, b, n) => Array.from({ length: n + 1 }, (_, i) => a + ((b - a) * i) / n);

/* ---------- Modulus ---------- */
const ModulusGraph = () => {
  const X = (x) => 150 + x * 42, Y = (y) => 180 - y * 34;
  return (
    <Svg w={560} h={240} label="Graph of y equals the modulus of x minus 2, a V shape with its vertex at (2, 0), and the line y equals 3 crossing it at x equals minus 1 and x equals 5">
      <L x1={60} y1={180} x2={420} y2={180} arrow w={1.8} /><L x1={150} y1={214} x2={150} y2={20} arrow w={1.8} />
      <path d={path([[X(-2), Y(4)], [X(2), Y(0)], [X(6), Y(4)]])} fill="none" stroke={BLUE} strokeWidth={3.4} />
      <L x1={60} y1={Y(3)} x2={410} y2={Y(3)} w={1.8} stroke={RED} dash="7 5" />
      <circle cx={X(-1)} cy={Y(3)} r={4.5} fill={RED} /><circle cx={X(5)} cy={Y(3)} r={4.5} fill={RED} />
      <T x={X(-1) + 10} y={Y(3) + 22} size={11} bold fill={RED} anchor="start">x = −1</T><T x={X(5) - 10} y={Y(3) + 22} size={11} bold fill={RED} anchor="end">x = 5</T>
      <T x={X(2)} y={198} size={11} bold>2</T><T x={X(6) + 10} y={Y(4)} size={12} bold fill={BLUE} anchor="start">y = |x − 2|</T>
      <T x={428} y={Y(3) + 4} size={11} fill={RED} anchor="start">y = 3</T>
      <T x={490} y={90} size={11} bold>|x − 2| = 3</T><T x={490} y={108} size={10}>x − 2 = 3 or −3</T>
    </Svg>
  );
};

/* ---------- Discriminant ---------- */
const QuadNature = () => {
  const panel = (ox, name, sub, dy, col) => (
    <g key={name}>
      <L x1={ox} y1={110} x2={ox + 150} y2={110} arrow w={1.6} />
      <path d={path(range(-1.4, 1.4, 28).map((x) => [ox + 75 + x * 44, 110 + dy - x * x * 28]))} fill="none" stroke={col} strokeWidth={3.2} />
      <T x={ox + 75} y={176} bold size={12}>{name}</T><T x={ox + 75} y={192} size={11}>{sub}</T>
    </g>
  );
  return (
    <Svg w={560} h={215} label="Three parabolas showing the discriminant: positive gives two roots, zero gives one repeated root where the curve touches the axis, negative gives no real roots">
      {panel(15, 'b² − 4ac > 0', 'two real roots', 35, BLUE)}
      {panel(200, 'b² − 4ac = 0', 'one repeated root (tangent)', 0, TEAL)}
      {panel(385, 'b² − 4ac < 0', 'no real roots', -40, RED)}
    </Svg>
  );
};

/* ---------- Cubic roots ---------- */
const CubicRoots = () => {
  const X = (x) => 260 + x * 56, Y = (y) => 120 - y * 6.2;
  const pts = range(-3.5, 2.7, 62).map((x) => [X(x), Y(x * x * x - 7 * x + 6)]);
  return (
    <Svg w={560} h={240} label="Graph of y equals x cubed minus 7x plus 6 crossing the x-axis at minus 3, 1 and 2">
      <L x1={50} y1={120} x2={470} y2={120} arrow w={1.8} /><L x1={260} y1={230} x2={260} y2={10} arrow w={1.8} />
      <path d={path(pts)} fill="none" stroke={BLUE} strokeWidth={3.2} />
      {[-3, 1, 2].map((r) => <g key={r}><circle cx={X(r)} cy={120} r={4.5} fill={RED} /><T x={X(r)} y={140} size={11} bold fill={RED}>{r}</T></g>)}
      <circle cx={260} cy={Y(6)} r={4} fill={TEAL} /><T x={270} y={Y(6) - 4} size={11} fill={TEAL} anchor="start">(0, 6)</T>
      <T x={490} y={64} size={12} bold>(x − 1)(x − 2)(x + 3)</T><T x={490} y={84} size={11}>roots −3, 1, 2</T>
    </Svg>
  );
};

/* ---------- eˣ and ln x ---------- */
const LogGraph = () => {
  const X = (x) => 150 + x * 50, Y = (y) => 150 - y * 50;
  return (
    <Svg w={560} h={260} label="Graphs of y equals e to the x and y equals natural log of x, which are reflections of each other in the line y equals x">
      <L x1={40} y1={150} x2={430} y2={150} arrow w={1.8} /><L x1={150} y1={250} x2={150} y2={14} arrow w={1.8} />
      <L x1={60} y1={Y(-1.8)} x2={400} y2={Y(5.0)} w={1.6} stroke="#9ca3af" dash="6 5" />
      <path d={path(range(-2.5, 1.25, 50).map((x) => [X(x), Y(Math.exp(x))]))} fill="none" stroke={BLUE} strokeWidth={3.2} />
      <path d={path(range(0.07, 5.0, 60).map((x) => [X(x), Y(Math.log(x))]))} fill="none" stroke={RED} strokeWidth={3.2} />
      <circle cx={X(0)} cy={Y(1)} r={4.5} fill={BLUE} /><T x={X(0) - 8} y={Y(1) - 6} size={11} bold fill={BLUE} anchor="end">(0, 1)</T>
      <circle cx={X(1)} cy={Y(0)} r={4.5} fill={RED} /><T x={X(1) + 4} y={Y(0) + 16} size={11} bold fill={RED}>(1, 0)</T>
      <T x={X(1.2) + 6} y={Y(3.3)} size={12} bold fill={BLUE} anchor="start">y = eˣ</T><T x={X(4)} y={Y(1.4) - 8} size={12} bold fill={RED}>y = ln x</T>
      <T x={X(4.2)} y={Y(4.5)} size={11} fill="#6b7280">y = x</T>
      <T x={490} y={60} size={11} bold>inverse functions:</T><T x={490} y={78} size={11}>reflect in y = x</T>
    </Svg>
  );
};

/* ---------- Linear form ---------- */
const LinearGraph = () => (
  <Svg w={560} h={250} label="The curve y equals 3x squared plus 2 becomes a straight line with gradient 3 and intercept 2 when y is plotted against x squared">
    <L x1={40} y1={200} x2={250} y2={200} arrow w={1.8} /><L x1={50} y1={210} x2={50} y2={20} arrow w={1.8} />
    <path d={path(range(0, 2.4, 40).map((x) => [50 + x * 70, 170 - (3 * x * x) * 4.4]))} fill="none" stroke={BLUE} strokeWidth={3.2} />
    <T x={150} y={230} bold size={12}>y against x</T><T x={150} y={246} size={11}>a curve</T>
    <T x={235} y={216} size={11}>x</T><T x={36} y={28} size={11}>y</T>
    <L x1={330} y1={200} x2={540} y2={200} arrow w={1.8} /><L x1={340} y1={210} x2={340} y2={20} arrow w={1.8} />
    <L x1={340} y1={170} x2={500} y2={60} w={3.2} stroke={RED} />
    <circle cx={340} cy={170} r={4} fill={RED} /><T x={330} y={174} size={11} anchor="end" bold fill={RED}>2</T>
    <T x={440} y={230} bold size={12}>y against x²</T><T x={440} y={246} size={11}>a line: gradient 3, intercept 2</T>
    <T x={525} y={216} size={11}>x²</T>
  </Svg>
);

/* ---------- Radian sector ---------- */
const RadianSector = () => {
  const cx = 150, cy = 140, r = 100, a = (50 * Math.PI) / 180, b = (-50 * Math.PI) / 180;
  const p = (t) => [cx + r * Math.cos(t), cy + r * Math.sin(t)];
  const [x0, y0] = p(a), [x1, y1] = p(b);
  return (
    <Svg w={560} h={270} label="Sector with radius r and angle theta in radians, arc length s equals r times theta and area equals half r squared theta; one radian is when the arc equals the radius">
      <path d={`M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 0 0 ${x1} ${y1} Z`} fill="#bfdbfe" stroke={K} strokeWidth={2.6} />
      <path d={`M${x0} ${y0} A${r} ${r} 0 0 0 ${x1} ${y1}`} fill="none" stroke={RED} strokeWidth={4.5} />
      <T x={cx + 34} y={cy + 5} size={15} bold>θ</T><T x={cx + 50} y={cy - 26} size={12} bold anchor="start">r</T><T x={cx + r + 14} y={cy + 4} size={12} bold fill={RED} anchor="start">s</T>
      <rect x={300} y={40} width={250} height={170} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
      <T x={425} y={66} bold size={13}>θ in radians</T>
      <T x={425} y={96} size={13}>arc s = rθ</T><T x={425} y={122} size={13}>area A = ½ r² θ</T>
      <T x={425} y={152} size={12}>π rad = 180°</T><T x={425} y={178} size={11}>1 radian: arc length = radius (≈ 57.3°)</T>
    </Svg>
  );
};

/* ---------- Unit circle ---------- */
const UnitCircle = () => {
  const cx = 150, cy = 140, r = 100;
  const pts = [[30, 'π/6', '(√3/2, ½)'], [45, 'π/4', '(1/√2, 1/√2)'], [60, 'π/3', '(½, √3/2)']];
  return (
    <Svg w={560} h={290} label="Unit circle with the angles pi over 6, pi over 4 and pi over 3 marked with their cosine and sine coordinates, and the ASTC rule for signs in each quadrant">
      <circle cx={cx} cy={cy} r={r} fill="#f0f9ff" stroke={K} strokeWidth={2.2} />
      <L x1={30} y1={cy} x2={270} y2={cy} arrow w={1.6} /><L x1={cx} y1={270} x2={cx} y2={10} arrow w={1.6} />
      {pts.map(([d, rad, co]) => {
        const t = (d * Math.PI) / 180, x = cx + r * Math.cos(t), y = cy - r * Math.sin(t);
        return (<g key={d}><L x1={cx} y1={cy} x2={x} y2={y} w={1.8} stroke={BLUE} /><circle cx={x} cy={y} r={3.8} fill={RED} /><T x={x + 8} y={y - 4} size={10} bold anchor="start">{rad}</T></g>);
      })}
      <T x={cx + r + 6} y={cy - 6} size={10} anchor="start">0, 2π</T><T x={cx - 6} y={cy - r - 6} size={10} anchor="end">π/2</T><T x={cx - r - 4} y={cy - 6} size={10} anchor="end">π</T>
      <rect x={310} y={30} width={240} height={110} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
      <T x={430} y={52} bold size={12}>Point at angle θ: (cos θ, sin θ)</T>
      {pts.map(([d, rad, co], i) => <T key={d} x={430} y={78 + i * 20} size={11}>{rad}: {co}</T>)}
      <rect x={310} y={156} width={240} height={110} rx={8} fill={C.blue} stroke={K} strokeWidth={1.5} />
      <T x={430} y={178} bold size={12}>ASTC: positive functions</T>
      <T x={370} y={208} size={11}>2nd: sin</T><T x={490} y={208} size={11}>1st: all</T><T x={370} y={236} size={11}>3rd: tan</T><T x={490} y={236} size={11}>4th: cos</T>
    </Svg>
  );
};

/* ---------- Pascal's triangle ---------- */
const PascalTriangle = () => {
  const rows = [[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1], [1, 5, 10, 10, 5, 1], [1, 6, 15, 20, 15, 6, 1]];
  return (
    <Svg w={560} h={270} label="Pascal's triangle rows 0 to 6, where each number is the sum of the two above it, giving the binomial coefficients">
      {rows.map((row, r) => row.map((v, c) => (
        <g key={`${r}${c}`}>
          <circle cx={200 + (c - r / 2) * 52} cy={26 + r * 36} r={16} fill={r === 5 ? '#fde68a' : '#fff'} stroke={K} strokeWidth={1.6} />
          <T x={200 + (c - r / 2) * 52} y={31 + r * 36} size={12} bold>{v}</T>
        </g>
      )))}
      <T x={430} y={60} bold size={12}>Row n gives (a + b)ⁿ</T>
      <T x={430} y={88} size={11}>each entry = sum of the two above</T>
      <T x={430} y={116} size={11}>row 5: 1, 5, 10, 10, 5, 1</T>
      <T x={430} y={146} size={11} bold>5C3 = 10</T><T x={430} y={168} size={11}>nCr = n!/(r!(n − r)!)</T>
    </Svg>
  );
};

/* ---------- Velocity triangle ---------- */
const RiverVelocity = () => (
  <Svg w={560} h={260} label="Triangle of velocities: an aircraft flying due north at 200 kilometres per hour in a wind blowing due east at 50 kilometres per hour has a resultant ground speed of 206 kilometres per hour">
    <circle cx={110} cy={220} r={4} fill={K} />
    <L x1={110} y1={220} x2={110} y2={64} w={3} arrow stroke={BLUE} /><T x={96} y={146} size={12} bold fill={BLUE} anchor="end">200 km/h north</T>
    <L x1={110} y1={64} x2={162} y2={64} w={3} arrow stroke={ORANGE} /><T x={136} y={52} size={12} bold fill={ORANGE}>wind 50 east</T>
    <L x1={110} y1={220} x2={158} y2={68} w={3} arrow stroke={RED} /><T x={146} y={150} size={12} bold fill={RED} anchor="start">resultant</T>
    <rect x={280} y={50} width={260} height={150} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={410} y={76} bold size={12}>Add the velocity vectors</T>
    <T x={410} y={104} size={12}>speed = √(200² + 50²)</T><T x={410} y={128} size={12}>= √42 500 = 206.2 km/h</T>
    <T x={410} y={160} size={11}>direction: tan⁻¹(50/200) = 14.0° east of north</T>
    <T x={410} y={182} size={11}>bearing 014°</T>
  </Svg>
);

/* ---------- Stationary points ---------- */
const StationaryTypes = () => {
  const panel = (ox, name, sub, d, dotY) => (
    <g key={name}>
      <L x1={ox} y1={120} x2={ox + 150} y2={120} arrow w={1.6} />
      <path d={d(ox)} fill="none" stroke={BLUE} strokeWidth={3.2} />
      <circle cx={ox + 75} cy={dotY} r={4.8} fill={RED} />
      <T x={ox + 75} y={170} bold size={12}>{name}</T><T x={ox + 75} y={186} size={11}>{sub}</T>
    </g>
  );
  const maxP = (ox) => path(range(-1.5, 1.5, 30).map((x) => [ox + 75 + x * 42, 40 + x * x * 26]));
  const minP = (ox) => path(range(-1.5, 1.5, 30).map((x) => [ox + 75 + x * 42, 100 - x * x * 26 + 0]));
  const infP = (ox) => path(range(-1.5, 1.5, 30).map((x) => [ox + 75 + x * 42, 75 + x * x * x * 11]));
  return (
    <Svg w={560} h={205} label="Three types of stationary point: a maximum where d2y/dx2 is negative, a minimum where it is positive, and a point of inflection where the gradient does not change sign">
      {panel(15, 'Maximum', 'd²y/dx² < 0', (ox) => path(range(-1.5, 1.5, 30).map((x) => [ox + 75 + x * 42, 45 + x * x * 26])), 45)}
      {panel(200, 'Minimum', 'd²y/dx² > 0', (ox) => path(range(-1.5, 1.5, 30).map((x) => [ox + 75 + x * 42, 105 - x * x * 26])), 105)}
      {panel(385, 'Inflection', 'gradient keeps its sign', infP, 75)}
    </Svg>
  );
};

/* ---------- Area between curves ---------- */
const AreaCurve = () => {
  const X = (x) => 80 + x * 200, Y = (y) => 220 - y * 200;
  const top = range(0, 1, 40).map((x) => [X(x), Y(x)]);
  const bot = range(1, 0, 40).map((x) => [X(x), Y(x * x)]);
  return (
    <Svg w={560} h={260} label="Area enclosed between the line y equals x and the curve y equals x squared from x equals 0 to 1, which equals one sixth">
      <L x1={50} y1={220} x2={330} y2={220} arrow w={1.8} /><L x1={80} y1={244} x2={80} y2={10} arrow w={1.8} />
      <polygon points={[...top, ...bot].map((p) => p.join(',')).join(' ')} fill="#bfdbfe" opacity={0.85} />
      <L x1={X(0)} y1={Y(0)} x2={X(1.05)} y2={Y(1.05)} w={3} stroke={RED} />
      <path d={path(range(0, 1.02, 44).map((x) => [X(x), Y(x * x)]))} fill="none" stroke={BLUE} strokeWidth={3.2} />
      <T x={X(0.38)} y={Y(0.38) - 14} size={12} bold fill={RED} anchor="end">y = x</T><T x={X(0.8) + 10} y={Y(0.64) + 22} size={12} bold fill={BLUE} anchor="start">y = x²</T>
      <T x={X(1)} y={238} size={11}>1</T>
      <T x={430} y={80} bold size={12}>Area = ∫₀¹ (x − x²) dx</T><T x={430} y={108} size={12}>= [x²/2 − x³/3] from 0 to 1</T><T x={430} y={134} bold size={13}>= ½ − ⅓ = 1/6</T>
      <T x={430} y={168} size={11}>top curve minus bottom curve</T>
    </Svg>
  );
};

/* ---------- Kinematics chain ---------- */
const KinematicsChain = () => (
  <Svg w={560} h={230} label="Displacement s differentiates to velocity v which differentiates to acceleration a; integrating goes back the other way">
    <Box x={30} y={80} w={120} h={60} fill={C.blue} size={14}>s (displacement)</Box>
    <Box x={220} y={80} w={120} h={60} fill={C.green} size={14}>v (velocity)</Box>
    <Box x={410} y={80} w={120} h={60} fill={C.pink} size={14}>a (acceleration)</Box>
    <L x1={152} y1={96} x2={218} y2={96} arrow w={2.4} stroke={RED} /><L x1={342} y1={96} x2={408} y2={96} arrow w={2.4} stroke={RED} />
    <T x={185} y={84} size={12} bold fill={RED}>d/dt</T><T x={375} y={84} size={12} bold fill={RED}>d/dt</T>
    <L x1={408} y1={124} x2={342} y2={124} arrow w={2.4} stroke={TEAL} /><L x1={218} y1={124} x2={152} y2={124} arrow w={2.4} stroke={TEAL} />
    <T x={375} y={146} size={12} bold fill={TEAL}>∫ dt</T><T x={185} y={146} size={12} bold fill={TEAL}>∫ dt</T>
    <T x={280} y={196} size={12}>Find each constant of integration from the initial conditions.</T>
  </Svg>
);

export const ADDM_FIGS = {
  modulusGraph: ModulusGraph,
  quadNature: QuadNature,
  cubicRoots: CubicRoots,
  logGraph: LogGraph,
  linearGraph: LinearGraph,
  radianSector: RadianSector,
  unitCircle: UnitCircle,
  pascalTriangle: PascalTriangle,
  riverVelocity: RiverVelocity,
  stationaryTypes: StationaryTypes,
  areaCurve: AreaCurve,
  kinematicsChain: KinematicsChain,
};
