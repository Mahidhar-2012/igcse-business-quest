// Original Mathematics diagrams (part 2: solids, trigonometry, transformations, vectors, probability, statistics).
import { Svg, T, L, K } from './svgFigs.jsx';
import { C, Box, Ax } from './svgKit.jsx';

const BLUE = '#2563eb';
const RED = '#dc2626';
const TEAL = '#0d9488';

const path = (pts) => pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ');

/* ---------- Solids ---------- */
const Solids3d = () => (
  <Svg w={560} h={280} label="Cylinder with radius r and height h, cone with radius r, vertical height h and slant height l, and a sphere of radius r with their volume formulas">
    <ellipse cx={90} cy={60} rx={50} ry={14} fill="#e0f2fe" stroke={K} strokeWidth={2} />
    <path d="M40 60 V170 A50 14 0 0 0 140 170 V60" fill="#bfdbfe" stroke={K} strokeWidth={2} />
    <ellipse cx={90} cy={60} rx={50} ry={14} fill="#e0f2fe" stroke={K} strokeWidth={2} />
    <L x1={90} y1={60} x2={140} y2={60} w={1.6} dash="4 3" /><T x={118} y={54} size={11}>r</T>
    <L x1={152} y1={60} x2={152} y2={170} w={1.4} /><T x={160} y={118} size={11} anchor="start">h</T>
    <T x={90} y={216} bold size={12}>cylinder</T><T x={90} y={234} size={11}>V = πr²h</T>
    <path d="M230 170 A50 14 0 0 0 330 170 A50 14 0 0 0 230 170" fill="#bbf7d0" stroke={K} strokeWidth={2} />
    <path d="M230 170 L280 40 L330 170" fill="#bbf7d0" stroke={K} strokeWidth={2} />
    <path d="M230 170 A50 14 0 0 0 330 170" fill="none" stroke={K} strokeWidth={2} />
    <L x1={280} y1={40} x2={280} y2={170} w={1.4} dash="4 3" /><T x={268} y={110} size={11} anchor="end">h</T>
    <L x1={280} y1={170} x2={330} y2={170} w={1.4} dash="4 3" /><T x={306} y={186} size={11}>r</T><T x={318} y={96} size={11} anchor="start">l</T>
    <T x={280} y={216} bold size={12}>cone</T><T x={280} y={234} size={11}>V = ⅓πr²h</T>
    <circle cx={460} cy={110} r={64} fill="#fde68a" stroke={K} strokeWidth={2} /><ellipse cx={460} cy={110} rx={64} ry={16} fill="none" stroke={K} strokeWidth={1.4} strokeDasharray="5 4" />
    <L x1={460} y1={110} x2={524} y2={110} w={1.6} /><T x={494} y={104} size={11}>r</T>
    <T x={460} y={216} bold size={12}>sphere</T><T x={460} y={234} size={11}>V = 4/3 πr³, A = 4πr²</T>
  </Svg>
);

/* ---------- Pythagoras ---------- */
const Pythagoras = () => (
  <Svg w={560} h={280} label="Right-angled triangle with sides 3, 4 and 5 and a square drawn on each side showing 9 plus 16 equals 25">
    <polygon points="200,170 288,170 200,104" fill="#fef9c3" stroke={K} strokeWidth={2.4} />
    <rect x={134} y={104} width={66} height={66} fill="#bfdbfe" stroke={K} strokeWidth={2} /><T x={167} y={140} bold size={14}>a²</T><T x={167} y={158} size={11}>= 9</T>
    <rect x={200} y={170} width={88} height={88} fill="#bbf7d0" stroke={K} strokeWidth={2} /><T x={244} y={212} bold size={14}>b²</T><T x={244} y={230} size={11}>= 16</T>
    <polygon points="200,104 288,170 354,82 266,16" fill="#fecaca" stroke={K} strokeWidth={2} /><T x={277} y={96} bold size={14}>c²</T><T x={277} y={114} size={11}>= 25</T>
    <path d="M200 158 h12 v12" fill="none" stroke={K} strokeWidth={1.6} />
    <T x={192} y={140} size={12} anchor="end" bold>3</T><T x={244} y={166} size={12} bold>4</T><T x={250} y={132} size={12} anchor="start" bold>5</T>
    <T x={460} y={90} bold size={13}>a² + b² = c²</T><T x={460} y={114} size={12}>9 + 16 = 25</T>
    <T x={460} y={150} size={11}>hypotenuse = longest side,</T><T x={460} y={166} size={11}>opposite the right angle</T>
  </Svg>
);
/* ---------- Cuboid diagonal ---------- */
const CuboidDiagonal = () => (
  <Svg w={560} h={260} label="Cuboid 3 by 4 by 12 with the space diagonal from one corner to the opposite corner, length 13">
    <polygon points="80,200 260,200 260,120 80,120" fill="#e0f2fe" stroke={K} strokeWidth={2} />
    <polygon points="80,120 260,120 320,70 140,70" fill="#bfdbfe" stroke={K} strokeWidth={2} />
    <polygon points="260,200 320,150 320,70 260,120" fill="#c7d2fe" stroke={K} strokeWidth={2} />
    <L x1={80} y1={200} x2={140} y2={150} w={1.4} dash="5 4" /><L x1={140} y1={150} x2={140} y2={70} w={1.4} dash="5 4" /><L x1={140} y1={150} x2={320} y2={150} w={1.4} dash="5 4" />
    <L x1={80} y1={200} x2={320} y2={70} w={3} stroke={RED} />
    <T x={170} y={218} size={12} bold>12</T><T x={290} y={186} size={12} bold anchor="start">4</T><T x={68} y={164} size={12} bold anchor="end">3</T>
    <T x={190} y={124} size={12} bold fill={RED}>d</T>
    <T x={440} y={90} bold size={13}>d² = l² + w² + h²</T>
    <T x={440} y={116} size={12}>= 12² + 4² + 3²</T><T x={440} y={138} size={12}>= 144 + 16 + 9 = 169</T><T x={440} y={164} bold size={13}>d = 13</T>
  </Svg>
);

/* ---------- SOH CAH TOA ---------- */
const Sohcahtoa = () => (
  <Svg w={560} h={260} label="Right-angled triangle with angle theta, showing the opposite, adjacent and hypotenuse sides and the SOH CAH TOA definitions of sine, cosine and tangent">
    <polygon points="60,200 280,200 280,60" fill="#fef9c3" stroke={K} strokeWidth={2.6} />
    <path d="M268 200 v-12 h12" fill="none" stroke={K} strokeWidth={1.6} /><path d="M120 200 A60 60 0 0 0 112 176" fill="none" stroke={RED} strokeWidth={2} />
    <T x={130} y={192} size={15} bold fill={RED}>θ</T>
    <T x={170} y={222} bold size={13}>adjacent</T><T x={272} y={136} bold size={13} anchor="end">opposite</T><T x={140} y={116} bold size={13} fill={BLUE}>hypotenuse</T>
    <rect x={350} y={34} width={200} height={170} rx={8} fill={C.blue} stroke={K} strokeWidth={1.5} />
    <T x={450} y={62} bold size={14}>SOH: sin θ = O/H</T><T x={450} y={96} bold size={14}>CAH: cos θ = A/H</T><T x={450} y={130} bold size={14}>TOA: tan θ = O/A</T>
    <T x={450} y={170} size={11}>label the sides from the angle first</T><T x={450} y={186} size={11}>(hypotenuse faces the right angle)</T>
  </Svg>
);

/* ---------- Elevation and depression ---------- */
const ElevationDepression = () => (
  <Svg w={560} h={280} label="Angle of elevation measured up from the horizontal to the top of a tower, and angle of depression measured down from the horizontal at the top of a cliff to a boat">
    <L x1={20} y1={220} x2={250} y2={220} w={2.2} />
    <rect x={190} y={80} width={26} height={140} fill="#d1d5db" stroke={K} strokeWidth={2} />
    <circle cx={50} cy={206} r={6} fill={K} /><T x={50} y={196} size={11} bold>observer</T>
    <L x1={50} y1={206} x2={203} y2={80} w={2} stroke={BLUE} /><L x1={50} y1={206} x2={203} y2={206} w={1.4} dash="5 4" />
    <path d="M100 206 A50 50 0 0 0 91 177" fill="none" stroke={RED} strokeWidth={2} /><T x={110} y={190} size={12} bold fill={RED} anchor="start">elevation</T>
    <T x={205} y={70} size={11} bold>top</T>
    <T x={135} y={256} size={11}>tan θ = height ÷ distance</T>
    <rect x={320} y={60} width={50} height={160} fill="#d1d5db" stroke={K} strokeWidth={2} />
    <L x1={20} y1={0} x2={20} y2={0} w={0} />
    <path d="M370 220 H540" stroke="#7dd3fc" strokeWidth={6} />
    <L x1={370} y1={60} x2={540} y2={60} w={1.4} dash="5 4" /><L x1={370} y1={60} x2={505} y2={214} w={2} stroke={BLUE} />
    <path d="M430 60 A60 60 0 0 1 409.5 105.2" fill="none" stroke={RED} strokeWidth={2} /><T x={440} y={92} size={12} bold fill={RED} anchor="start">depression</T>
    <ellipse cx={505} cy={216} rx={14} ry={5} fill="#a16207" stroke={K} strokeWidth={1.4} /><T x={505} y={240} size={11} bold>boat</T>
    <T x={440} y={266} size={11}>the same angle appears at the boat (alternate)</T>
  </Svg>
);

/* ---------- Triangle ABC ---------- */
const AbcTriangle = () => (
  <Svg w={560} h={260} label="Triangle ABC with side a opposite angle A, side b opposite angle B and side c opposite angle C, with the sine and cosine rules">
    <polygon points="40,200 280,200 200,50" fill="#e0f2fe" stroke={K} strokeWidth={2.6} />
    <T x={40} y={222} bold size={14}>A</T><T x={290} y={222} bold size={14} anchor="start">B</T><T x={200} y={40} bold size={14}>C</T>
    <T x={160} y={218} bold size={13} fill={BLUE}>c</T><T x={252} y={118} bold size={13} fill={BLUE} anchor="start">a</T><T x={104} y={118} bold size={13} fill={BLUE} anchor="end">b</T>
    <rect x={330} y={34} width={220} height={190} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={440} y={60} bold size={12}>Sine rule (a pair known)</T><T x={440} y={80} size={12}>a/sin A = b/sin B = c/sin C</T>
    <T x={440} y={116} bold size={12}>Cosine rule (SAS or SSS)</T><T x={440} y={136} size={12}>a² = b² + c² − 2bc cos A</T>
    <T x={440} y={172} bold size={12}>Area</T><T x={440} y={192} size={12}>½ab sin C</T>
    <T x={440} y={212} size={10}>side a is opposite angle A</T>
  </Svg>
);

/* ---------- Trig graphs ---------- */
const TrigGraphs = () => {
  const X = (d) => 60 + d * 1.2, Y = (v) => 110 - v * 70;
  const sin = Array.from({ length: 73 }, (_, i) => [X(i * 5), Y(Math.sin((i * 5 * Math.PI) / 180))]);
  const cos = Array.from({ length: 73 }, (_, i) => [X(i * 5), Y(Math.cos((i * 5 * Math.PI) / 180))]);
  return (
    <Svg w={560} h={250} label="Graphs of sine and cosine from 0 to 360 degrees, both between minus 1 and 1 with period 360 degrees">
      <L x1={50} y1={110} x2={510} y2={110} arrow w={1.8} /><L x1={60} y1={200} x2={60} y2={14} arrow w={1.8} />
      <path d={path(sin)} fill="none" stroke={BLUE} strokeWidth={3.2} /><path d={path(cos)} fill="none" stroke={RED} strokeWidth={3.2} />
      {[90, 180, 270, 360].map((d) => <g key={d}><L x1={X(d)} y1={104} x2={X(d)} y2={116} w={1.4} /><T x={X(d)} y={132} size={11}>{d}°</T></g>)}
      <T x={52} y={44} size={11} anchor="end">1</T><T x={52} y={184} size={11} anchor="end">−1</T>
      <T x={X(90)} y={30} size={12} bold fill={BLUE}>y = sin x</T><T x={X(360) - 4} y={30} size={12} bold fill={RED} anchor="end">y = cos x</T>
      <T x={280} y={232} size={12}>both repeat every 360°; sin x = 0.5 gives x = 30° and 150°</T>
    </Svg>
  );
};

/* ---------- Bearings ---------- */
const Bearings = () => (
  <Svg w={560} h={290} label="Bearings measured clockwise from north: B is on a bearing of 070 degrees from A, so A is on a bearing of 250 degrees from B">
    <L x1={110} y1={220} x2={110} y2={60} w={1.6} arrow /><T x={110} y={50} bold size={12}>N</T>
    <L x1={330} y1={140} x2={330} y2={40} w={1.6} arrow /><T x={330} y={34} bold size={12}>N</T>
    <circle cx={110} cy={220} r={4} fill={K} /><T x={96} y={236} bold size={13} anchor="end">A</T>
    <circle cx={330} cy={140} r={4} fill={K} /><T x={342} y={156} bold size={13} anchor="start">B</T>
    <L x1={110} y1={220} x2={330} y2={140} w={2.8} stroke={BLUE} />
    <path d="M110 170 A50 50 0 0 1 157 203" fill="none" stroke={RED} strokeWidth={2.4} /><T x={150} y={166} size={12} bold fill={RED} anchor="start">070°</T>
    <path d="M330 96 A44 44 0 1 1 288.7 155" fill="none" stroke={TEAL} strokeWidth={2.4} /><T x={330} y={204} size={12} bold fill={TEAL}>250°</T>
    <rect x={380} y={80} width={165} height={110} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={462} y={104} bold size={12}>Bearings</T><T x={462} y={126} size={11}>clockwise from north</T><T x={462} y={144} size={11}>3 digits: 070°, 250°</T>
    <T x={462} y={168} size={11} bold>back bearing = ± 180°</T>
  </Svg>
);

/* ---------- Transformation grids ---------- */
const grid = (x0, y0, n, s) => Array.from({ length: n + 1 }, (_, i) => (
  <g key={i}><L x1={x0} y1={y0 + i * s} x2={x0 + n * s} y2={y0 + i * s} w={0.8} stroke="#cbd5e1" /><L x1={x0 + i * s} y1={y0} x2={x0 + i * s} y2={y0 + n * s} w={0.8} stroke="#cbd5e1" /></g>
));

const ReflectionGrid = () => {
  const s = 28, ox = 30, oy = 20;
  const P = (x, y) => `${ox + x * s},${oy + (8 - y) * s}`;
  return (
    <Svg w={560} h={270} label="Triangle A reflected in the mirror line x equals 4 to give triangle B, each point the same distance from the mirror line on the opposite side">
      {grid(ox, oy, 8, s)}
      <L x1={ox + 4 * s} y1={oy - 8} x2={ox + 4 * s} y2={oy + 8 * s + 8} w={2.6} stroke={RED} dash="7 5" />
      <polygon points={`${P(1, 2)} ${P(3, 2)} ${P(1, 5)}`} fill="#bfdbfe" stroke={K} strokeWidth={2.4} />
      <polygon points={`${P(7, 2)} ${P(5, 2)} ${P(7, 5)}`} fill="#bbf7d0" stroke={K} strokeWidth={2.4} />
      <T x={ox + 1.6 * s} y={oy + 5.4 * s} size={14} bold>A</T><T x={ox + 6.4 * s} y={oy + 5.4 * s} size={14} bold>B</T>
      <T x={ox + 4 * s + 6} y={oy + 14} size={11} fill={RED} bold anchor="start">x = 4</T>
      <rect x={290} y={50} width={250} height={120} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
      <T x={415} y={76} bold size={12}>Reflection: give the mirror line</T>
      <T x={415} y={100} size={11}>each point and its image are the same</T><T x={415} y={116} size={11}>distance from the line, on opposite sides</T>
      <T x={415} y={144} size={11}>in y = x, (x, y) → (y, x)</T>
    </Svg>
  );
};

const RotationGrid = () => {
  const s = 24, ox = 30, oy = 24, c = 6; // origin at (6, 6)
  const P = (x, y) => `${ox + (c + x) * s},${oy + (c - y) * s}`;
  return (
    <Svg w={560} h={290} label="Triangle A rotated 90 degrees anticlockwise about the origin to give triangle B">
      {grid(ox, oy, 12, s)}
      <L x1={ox} y1={oy + c * s} x2={ox + 12 * s} y2={oy + c * s} w={1.8} /><L x1={ox + c * s} y1={oy} x2={ox + c * s} y2={oy + 12 * s} w={1.8} />
      <polygon points={`${P(2, 1)} ${P(5, 1)} ${P(5, 3)}`} fill="#bfdbfe" stroke={K} strokeWidth={2.4} />
      <polygon points={`${P(-1, 2)} ${P(-1, 5)} ${P(-3, 5)}`} fill="#bbf7d0" stroke={K} strokeWidth={2.4} />
      <circle cx={ox + c * s} cy={oy + c * s} r={4} fill={RED} />
      <path d={`M${ox + (c + 2.2) * s} ${oy + (c - 0.2) * s} A60 60 0 0 0 ${ox + (c + 0.2) * s} ${oy + (c - 2.2) * s}`} fill="none" stroke={RED} strokeWidth={2} />
      <T x={ox + (c + 4) * s} y={oy + (c - 0.1) * s - 6} size={14} bold>A</T><T x={ox + (c - 3.7) * s} y={oy + (c - 4.1) * s} size={14} bold>B</T>
      <rect x={350} y={50} width={195} height={130} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
      <T x={447} y={76} bold size={12}>Rotation needs 3 details</T><T x={447} y={100} size={11}>angle: 90°</T><T x={447} y={118} size={11}>direction: anticlockwise</T><T x={447} y={136} size={11}>centre: the origin (0, 0)</T>
      <T x={447} y={162} size={11}>(x, y) → (−y, x)</T>
    </Svg>
  );
};

const EnlargementGrid = () => {
  const s = 26, ox = 30, oy = 24;
  const P = (x, y) => `${ox + x * s},${oy + (9 - y) * s}`;
  return (
    <Svg w={560} h={280} label="Triangle A enlarged by scale factor 2 from the centre of enlargement O to give triangle B, with rays from O through matching vertices">
      {grid(ox, oy, 9, s)}
      <polygon points={`${P(2, 1)} ${P(3, 1)} ${P(2, 3)}`} fill="#bfdbfe" stroke={K} strokeWidth={2.4} />
      <polygon points={`${P(3, 2)} ${P(5, 2)} ${P(3, 6)}`} fill="#bbf7d0" stroke={K} strokeWidth={2.4} />
      <L x1={ox + 1 * s} y1={oy + 9 * s} x2={ox + 3 * s} y2={oy + 7 * s} w={1.2} dash="4 3" stroke="#6b7280" />
      <L x1={ox + 1 * s} y1={oy + 9 * s} x2={ox + 5 * s} y2={oy + 7 * s} w={1.2} dash="4 3" stroke="#6b7280" />
      <L x1={ox + 1 * s} y1={oy + 9 * s} x2={ox + 3 * s} y2={oy + 3 * s} w={1.2} dash="4 3" stroke="#6b7280" />
      <circle cx={ox + 1 * s} cy={oy + 9 * s} r={4.5} fill={RED} />
      <T x={ox + 1 * s - 8} y={oy + 9 * s - 6} size={13} bold fill={RED} anchor="end">O</T>
      <T x={ox + 1.4 * s} y={oy + 7.2 * s} size={13} bold>A</T><T x={ox + 3.5 * s} y={oy + 5.4 * s} size={13} bold>B</T>
      <rect x={310} y={50} width={235} height={130} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
      <T x={427} y={76} bold size={12}>Enlargement: centre + scale factor</T><T x={427} y={100} size={11}>distance from O is multiplied by k</T>
      <T x={427} y={120} size={11}>lengths × k, area × k²</T><T x={427} y={140} size={11}>negative k: image on the other side</T><T x={427} y={160} size={11}>of the centre, upside down</T>
    </Svg>
  );
};

/* ---------- Vector geometry ---------- */
const VectorGeometry = () => (
  <Svg w={560} h={270} label="Triangle OAB with OA equals a and OB equals b, AB equals b minus a, and M the midpoint of AB so that OM equals half of a plus b">
    <circle cx={70} cy={210} r={4} fill={K} /><circle cx={240} cy={210} r={4} fill={K} /><circle cx={160} cy={50} r={4} fill={K} />
    <T x={56} y={226} bold size={13} anchor="end">O</T><T x={252} y={226} bold size={13} anchor="start">A</T><T x={160} y={40} bold size={13}>B</T>
    <L x1={70} y1={210} x2={236} y2={210} w={2.6} arrow stroke={BLUE} /><T x={150} y={230} size={13} bold fill={BLUE}>a</T>
    <L x1={70} y1={210} x2={156} y2={56} w={2.6} arrow stroke={RED} /><T x={100} y={120} size={13} bold fill={RED} anchor="end">b</T>
    <L x1={240} y1={210} x2={164} y2={56} w={2.6} arrow stroke={TEAL} /><T x={214} y={120} size={12} bold fill={TEAL} anchor="start">b − a</T>
    <circle cx={200} cy={130} r={4.5} fill={C.orange} /><T x={212} y={146} size={13} bold fill={C.orange} anchor="start">M</T>
    <L x1={70} y1={210} x2={196} y2={134} w={2} dash="6 4" stroke={C.orange} />
    <rect x={320} y={50} width={225} height={140} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={432} y={76} bold size={12}>AB = −a + b = b − a</T><T x={432} y={104} size={12}>M is the midpoint of AB</T>
    <T x={432} y={128} size={12}>OM = a + ½(b − a)</T><T x={432} y={152} bold size={13}>OM = ½(a + b)</T>
  </Svg>
);

/* ---------- Sample space ---------- */
const SampleSpace = () => (
  <Svg w={560} h={290} label="Table of the 36 sums of two dice with the six outcomes that give a total of 7 highlighted along the diagonal">
    <T x={40} y={30} size={11} bold>+</T>
    {[1, 2, 3, 4, 5, 6].map((n) => <g key={n}><T x={40 + n * 38} y={30} bold size={12}>{n}</T><T x={40} y={36 + n * 34} bold size={12}>{n}</T></g>)}
    {[1, 2, 3, 4, 5, 6].map((r) => [1, 2, 3, 4, 5, 6].map((c) => (
      <g key={`${r}${c}`}>
        <rect x={22 + c * 38} y={14 + r * 34} width={36} height={32} fill={r + c === 7 ? '#fde68a' : '#fff'} stroke={K} strokeWidth={1.2} />
        <T x={40 + c * 38} y={36 + r * 34} size={12} bold={r + c === 7}>{r + c}</T>
      </g>
    )))}
    <T x={420} y={80} bold size={12}>36 equally likely outcomes</T>
    <T x={420} y={110} size={12}>sum 7: 6 outcomes (highlighted)</T><T x={420} y={130} bold size={13}>P(7) = 6/36 = 1/6</T>
    <T x={420} y={166} size={12}>sum of at least 11: 3 outcomes</T><T x={420} y={186} bold size={13}>P = 3/36 = 1/12</T>
  </Svg>
);

/* ---------- Tree diagram ---------- */
const TreeDiagram = () => (
  <Svg w={560} h={290} label="Tree diagram for rain on two independent days with probability of rain 0.4: outcomes rain-rain 0.16, rain-dry 0.24, dry-rain 0.24 and dry-dry 0.36">
    <circle cx={40} cy={145} r={4} fill={K} />
    {[[110, 'Rain', '0.4'], [200, 'Dry', '0.6']].map(([_y], i) => null)}
    <L x1={40} y1={145} x2={170} y2={75} w={2} /><L x1={40} y1={145} x2={170} y2={215} w={2} />
    <T x={90} y={96} size={11} bold>0.4</T><T x={90} y={206} size={11} bold>0.6</T>
    <T x={186} y={79} size={12} bold anchor="start">Rain</T><T x={186} y={219} size={12} bold anchor="start">Dry</T>
    <L x1={230} y1={75} x2={330} y2={38} w={2} /><L x1={230} y1={75} x2={330} y2={112} w={2} /><L x1={230} y1={215} x2={330} y2={178} w={2} /><L x1={230} y1={215} x2={330} y2={252} w={2} />
    <T x={272} y={48} size={11} bold>0.4</T><T x={272} y={108} size={11} bold>0.6</T><T x={272} y={188} size={11} bold>0.4</T><T x={272} y={248} size={11} bold>0.6</T>
    {[[38, 'Rain, Rain', '0.4 × 0.4 = 0.16'], [112, 'Rain, Dry', '0.4 × 0.6 = 0.24'], [178, 'Dry, Rain', '0.6 × 0.4 = 0.24'], [252, 'Dry, Dry', '0.6 × 0.6 = 0.36']].map(([y, a, b]) => (
      <g key={a}><T x={338} y={y + 4} size={12} bold anchor="start">{a}</T><T x={440} y={y + 4} size={11} anchor="start">{b}</T></g>
    ))}
    <T x={40} y={284} size={12} bold anchor="start">P(exactly one rain) = 0.24 + 0.24 = 0.48</T>
  </Svg>
);

/* ---------- Venn diagram ---------- */
const VennDiagram = () => (
  <Svg w={560} h={280} label="Venn diagram of 40 students: 16 like only pizza, 9 like both, 9 like only pasta and 6 like neither">
    <rect x={30} y={20} width={330} height={230} fill="#f8fafc" stroke={K} strokeWidth={2.2} /><T x={44} y={40} size={12} bold anchor="start">ξ = 40</T>
    <circle cx={150} cy={135} r={80} fill="#bfdbfe" opacity={0.7} stroke={K} strokeWidth={2.2} /><circle cx={240} cy={135} r={80} fill="#fecaca" opacity={0.7} stroke={K} strokeWidth={2.2} />
    <T x={110} y={140} bold size={18}>16</T><T x={195} y={140} bold size={18}>9</T><T x={282} y={140} bold size={18}>9</T><T x={335} y={236} bold size={16}>6</T>
    <T x={120} y={46} bold size={13}>A: pizza</T><T x={270} y={46} bold size={13}>B: pasta</T>
    <T x={460} y={80} bold size={12}>n(A ∩ B) = 9</T><T x={460} y={106} size={11}>n(A ∪ B) = 34</T><T x={460} y={126} size={11}>n(A′ ∩ B′) = 6</T>
    <T x={460} y={160} size={11} bold>P(A | B) = 9 ÷ 18 = 0.5</T>
  </Svg>
);

/* ---------- Box plot ---------- */
const BoxPlot = () => {
  const X = (v) => 60 + v * 36;
  return (
    <Svg w={560} h={230} label="Box plot for the data 2, 4, 5, 7, 8, 10, 12 showing minimum 2, lower quartile 4, median 7, upper quartile 10 and maximum 12 with an interquartile range of 6">
      <L x1={50} y1={150} x2={510} y2={150} arrow w={1.8} />
      {[0, 2, 4, 6, 8, 10, 12].map((v) => <g key={v}><L x1={X(v)} y1={146} x2={X(v)} y2={154} w={1.4} /><T x={X(v)} y={170} size={11}>{v}</T></g>)}
      <L x1={X(2)} y1={90} x2={X(4)} y2={90} w={2.6} /><L x1={X(10)} y1={90} x2={X(12)} y2={90} w={2.6} />
      <L x1={X(2)} y1={76} x2={X(2)} y2={104} w={2.6} /><L x1={X(12)} y1={76} x2={X(12)} y2={104} w={2.6} />
      <rect x={X(4)} y={66} width={X(10) - X(4)} height={48} fill="#bfdbfe" stroke={K} strokeWidth={2.4} />
      <L x1={X(7)} y1={66} x2={X(7)} y2={114} w={3.4} stroke={RED} />
      <T x={X(2)} y={58} size={11} bold>min 2</T><T x={X(4)} y={58} size={11} bold>Q₁ = 4</T><T x={X(7)} y={58} size={11} bold fill={RED}>median 7</T><T x={X(10)} y={58} size={11} bold>Q₃ = 10</T><T x={X(12)} y={58} size={11} bold>max 12</T>
      <L x1={X(4)} y1={128} x2={X(10)} y2={128} w={1.8} arrow /><L x1={X(10)} y1={128} x2={X(4)} y2={128} w={1.8} arrow />
      <T x={X(7)} y={196} size={12} bold>interquartile range = 10 − 4 = 6</T>
    </Svg>
  );
};

/* ---------- Histogram ---------- */
const HistogramFD = () => (
  <Svg w={560} h={270} label="Histogram with unequal class widths: bar height is frequency density, and the area of each bar is the frequency, for example class 10 to 30 with density 2.5 has frequency 50">
    <Ax x0={70} y0={220} x1={500} y1={20} xl="value" yl="frequency density" xo={36} yo={48} />
    {[[0, 10, 1.2], [10, 30, 2.5], [30, 40, 4], [40, 60, 1]].map(([a, b, h], i) => (
      <g key={i}>
        <rect x={70 + a * 6} y={220 - h * 38} width={(b - a) * 6} height={h * 38} fill={['#bfdbfe', '#bbf7d0', '#fde68a', '#fecaca'][i]} stroke={K} strokeWidth={2} />
        <T x={70 + ((a + b) / 2) * 6} y={220 - h * 19 + 4} size={11} bold>{h * (b - a)}</T>
      </g>
    ))}
    {[0, 10, 30, 40, 60].map((v) => <g key={v}><L x1={70 + v * 6} y1={220} x2={70 + v * 6} y2={226} w={1.4} /><T x={70 + v * 6} y={240} size={10}>{v}</T></g>)}
    <T x={420} y={60} bold size={12}>Number in each bar</T><T x={420} y={78} size={11}>= area = height × width</T>
    <T x={420} y={102} size={11}>10–30: 2.5 × 20 = 50</T>
  </Svg>
);

/* ---------- Scatter graphs ---------- */
const ScatterCorr = () => {
  const panel = (ox, name, pts, line) => (
    <g key={name}>
      <L x1={ox} y1={170} x2={ox + 150} y2={170} arrow w={1.6} /><L x1={ox} y1={170} x2={ox} y2={30} arrow w={1.6} />
      {pts.map(([x, y], i) => <circle key={i} cx={ox + x} cy={170 - y} r={3.8} fill={BLUE} />)}
      {line && <L x1={ox + line[0]} y1={170 - line[1]} x2={ox + line[2]} y2={170 - line[3]} w={2} stroke={RED} />}
      <T x={ox + 75} y={196} bold size={12}>{name}</T>
    </g>
  );
  return (
    <Svg w={560} h={230} label="Three scatter graphs showing positive correlation, negative correlation and no correlation">
      {panel(20, 'Positive', [[20, 20], [35, 40], [50, 45], [65, 70], [80, 75], [100, 100], [120, 110]], [10, 14, 130, 118])}
      {panel(200, 'Negative', [[20, 110], [35, 95], [50, 90], [65, 65], [80, 55], [100, 40], [120, 22]], [10, 118, 130, 14])}
      {panel(380, 'No correlation', [[20, 60], [35, 110], [50, 30], [65, 90], [80, 50], [100, 105], [120, 70]], null)}
    </Svg>
  );
};

/* ---------- Cumulative frequency ---------- */
const CumFreq = () => {
  const X = (v) => 70 + v * 4, Y = (f) => 220 - f * 1.5;
  const pts = [[0, 0], [10, 8], [20, 28], [30, 60], [40, 95], [50, 116], [60, 120]];
  return (
    <Svg w={560} h={270} label="Cumulative frequency curve for 120 values: the lower quartile is read at 30, the median at 60 and the upper quartile at 90 on the cumulative frequency axis">
      <L x1={70} y1={220} x2={330} y2={220} arrow w={1.8} /><L x1={70} y1={220} x2={70} y2={30} arrow w={1.8} />
      <T x={200} y={252} size={11}>value</T>
      <text x={24} y={125} transform="rotate(-90 24 125)" textAnchor="middle" fontSize={11} fill={K}>cumulative frequency</text>
      <path d={path(pts.map(([v, f]) => [X(v), Y(f)]))} fill="none" stroke={BLUE} strokeWidth={3.2} />
      {[[30, 20.6], [60, 30], [90, 38.6]].map(([f, v]) => (
        <g key={f}>
          <L x1={70} y1={Y(f)} x2={X(v)} y2={Y(f)} w={1.4} dash="5 4" stroke={RED} /><L x1={X(v)} y1={Y(f)} x2={X(v)} y2={220} w={1.4} dash="5 4" stroke={RED} />
          <T x={66} y={Y(f) + 4} size={10} anchor="end" fill={RED}>{f}</T>
        </g>
      ))}
      <T x={440} y={80} bold size={12}>n = 120</T><T x={440} y={104} size={11}>Q₁ at n/4 = 30</T><T x={440} y={122} size={11}>median at n/2 = 60</T><T x={440} y={140} size={11}>Q₃ at 3n/4 = 90</T>
      <T x={440} y={168} size={11}>plot at upper class boundaries</T>
    </Svg>
  );
};

export const MATHS2_FIGS = {
  solids3d: Solids3d,
  pythagoras: Pythagoras,
  cuboidDiagonal: CuboidDiagonal,
  sohcahtoa: Sohcahtoa,
  elevationDepression: ElevationDepression,
  abcTriangle: AbcTriangle,
  trigGraphs: TrigGraphs,
  bearings: Bearings,
  reflectionGrid: ReflectionGrid,
  rotationGrid: RotationGrid,
  enlargementGrid: EnlargementGrid,
  vectorGeometry: VectorGeometry,
  sampleSpace: SampleSpace,
  treeDiagram: TreeDiagram,
  vennDiagram: VennDiagram,
  boxPlot: BoxPlot,
  histogramFD: HistogramFD,
  scatterCorr: ScatterCorr,
  cumFreq: CumFreq,
};
