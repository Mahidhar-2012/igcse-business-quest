// More original Physics diagrams, drawn in the plain black-line style of exam papers.
import { Svg, T, L, K } from './svgFigs.jsx';
import { C, Lab, LabL, Box, Arrow, Ax } from './svgKit.jsx';

/* ---------- Resultant of two perpendicular vectors ---------- */
const VectorAddition = () => (
  <Svg w={560} h={270} label="Two perpendicular vectors of 30 newtons and 40 newtons joined head to tail, with the resultant of 50 newtons found by Pythagoras">
    <Arrow x1={100} y1={240} x2={250} y2={240} label="30 N" lx={175} ly={260} w={3} />
    <Arrow x1={250} y1={240} x2={250} y2={40} label="40 N" lx={285} ly={145} w={3} anchor="start" />
    <Arrow x1={100} y1={240} x2={250} y2={44} w={3.4} stroke={C.red} />
    <T x={150} y={130} size={12} anchor="end" fill={C.red} bold>resultant = 50 N</T>
    <path d="M140 240 a40 40 0 0 0 -8 -26" fill="none" stroke={K} strokeWidth={1.4} />
    <T x={150} y={226} size={11} anchor="start">θ</T>
    <path d="M238 240 v-12 h12" fill="none" stroke={K} strokeWidth={1.4} />
    <rect x={340} y={70} width={200} height={130} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={440} y={94} bold size={12}>Pythagoras</T>
    <T x={440} y={116} size={12}>R² = 30² + 40²</T>
    <T x={440} y={136} size={12}>R² = 2500</T>
    <T x={440} y={156} size={12} bold>R = 50 N</T>
    <T x={440} y={182} size={11}>tan θ = 40 ÷ 30 gives θ = 53°</T>
  </Svg>
);

/* ---------- Speed–time graph shapes ---------- */
const SpeedTimeShapes = () => {
  const panel = (x, title, d, note) => (
    <g key={title}>
      <Ax x0={x} y0={190} x1={x + 100} y1={50} xl="time" yl="speed" />
      <path d={d} fill="none" stroke="#2563eb" strokeWidth={3.2} />
      <T x={x + 55} y={32} bold size={12}>{title}</T>
      <T x={x + 55} y={226} size={11}>{note}</T>
    </g>
  );
  return (
    <Svg w={560} h={250} label="Speed–time graphs: constant speed is a horizontal line, constant acceleration a rising straight line, constant deceleration a falling line and an object at rest lies on the time axis">
      {panel(50, 'Constant speed', 'M50 110 H140', 'gradient = 0')}
      {panel(185, 'Accelerating', 'M185 185 L275 70', 'gradient = acceleration')}
      {panel(320, 'Decelerating', 'M320 70 L410 185', 'negative gradient')}
      {panel(455, 'At rest', 'M455 190 H545', 'speed = 0')}
    </Svg>
  );
};

/* ---------- Forces on a moving car ---------- */
const ForcesCar = () => (
  <Svg w={560} h={270} label="Forces on a car moving at constant speed: the driving force equals the resistive force and the weight equals the reaction force, so the resultant force is zero">
    <rect x={210} y={110} width={140} height={44} rx={10} fill={C.blue} stroke={K} strokeWidth={2.4} />
    <rect x={240} y={86} width={80} height={28} rx={8} fill={C.blue} stroke={K} strokeWidth={2.4} />
    <circle cx={245} cy={160} r={17} fill="#9ca3af" stroke={K} strokeWidth={2.4} /><circle cx={315} cy={160} r={17} fill="#9ca3af" stroke={K} strokeWidth={2.4} />
    <L x1={60} y1={178} x2={500} y2={178} w={3} />
    <Arrow x1={352} y1={132} x2={455} y2={132} label="driving force" lx={455} ly={118} anchor="end" stroke={C.red} w={3.4} />
    <Arrow x1={208} y1={132} x2={105} y2={132} label="drag + friction" lx={105} ly={118} anchor="start" stroke={C.navy} w={3.4} />
    <Arrow x1={280} y1={108} x2={280} y2={36} label="reaction" lx={290} ly={44} anchor="start" stroke={C.teal} w={3.4} />
    <Arrow x1={280} y1={156} x2={280} y2={238} label="weight" lx={290} ly={236} anchor="start" stroke={C.violet} w={3.4} />
    <T x={280} y={262} size={12} bold>Balanced forces: driving = resistive and weight = reaction, so constant speed</T>
  </Svg>
);

/* ---------- Circular motion ---------- */
const CircularMotion = () => (
  <Svg w={560} h={270} label="A stone whirled on a string moves in a circle; the force towards the centre keeps it moving in a circle; if the string breaks the stone moves along the tangent in a straight line">
    <circle cx={190} cy={135} r={90} fill="none" stroke={K} strokeWidth={1.4} strokeDasharray="6 5" />
    <L x1={190} y1={135} x2={280} y2={135} w={2.4} />
    <circle cx={280} cy={135} r={10} fill="#9ca3af" stroke={K} strokeWidth={2} />
    <circle cx={190} cy={135} r={4} fill={K} />
    <Arrow x1={270} y1={135} x2={215} y2={135} label="force towards the centre" lx={200} ly={120} anchor="middle" stroke={C.red} w={3.2} />
    <Arrow x1={280} y1={125} x2={280} y2={60} label="velocity (tangent)" lx={290} ly={56} anchor="start" stroke={C.navy} w={3.2} />
    <L x1={280} y1={125} x2={280} y2={20} dash="5 4" w={1.4} />
    <Lab px={235} py={135} tx={340} ty={200}>string: tension is the force</Lab>
    <T x={440} y={110} size={11}>If the string breaks the</T><T x={440} y={125} size={11}>stone leaves in a straight</T><T x={440} y={140} size={11}>line along the tangent</T>
    <T x={280} y={256} size={11}>Speed is constant but the direction keeps changing, so velocity changes</T>
  </Svg>
);

/* ---------- Gas pressure and volume ---------- */
const GasPressureVolume = () => (
  <Svg w={560} h={280} label="Graph of gas pressure against volume at constant temperature: pressure falls as volume increases (pV is constant); a higher temperature gives a higher curve">
    <Ax x0={80} y0={230} x1={400} y1={30} xl="volume" yl="pressure" />
    <path d="M110 40 C130 120 170 170 400 210" fill="none" stroke="#2563eb" strokeWidth={3.2} />
    <path d="M130 40 C170 100 230 140 400 168" fill="none" stroke="#dc2626" strokeWidth={3.2} />
    <T x={400} y={206} size={11} anchor="start" fill="#2563eb" bold>lower temperature</T>
    <T x={400} y={164} size={11} anchor="start" fill="#dc2626" bold>higher temperature</T>
    <rect x={400} y={40} width={150} height={96} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={475} y={62} bold size={12}>At constant T</T>
    <T x={475} y={84} size={12}>p₁V₁ = p₂V₂</T>
    <T x={475} y={104} size={11}>halve the volume: the</T><T x={475} y={118} size={11}>pressure doubles</T>
  </Svg>
);

/* ---------- Brownian motion ---------- */
const BrownianMotion = () => (
  <Svg w={560} h={280} label="Brownian motion: a smoke particle follows a random zig-zag path because fast-moving air molecules hit it from all sides">
    <rect x={30} y={20} width={300} height={230} rx={8} fill="#fff" stroke={K} strokeWidth={1.8} />
    <polyline points="120,130 160,100 150,150 200,170 240,120 220,70 270,60 290,110 260,160" fill="none" stroke="#dc2626" strokeWidth={2.4} />
    <circle cx={120} cy={130} r={6} fill={C.grey} stroke={K} strokeWidth={1.6} />
    <circle cx={260} cy={160} r={7} fill="#6b7280" stroke={K} strokeWidth={1.6} />
    {[[70, 60], [60, 180], [180, 220], [310, 200], [300, 50], [100, 230], [200, 40], [60, 110]].map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r={3.2} fill="#2563eb" /><L x1={x} y1={y} x2={x + (i % 2 ? 14 : -14)} y2={y + (i % 3 ? 12 : -12)} arrow w={1.2} stroke="#2563eb" /></g>)}
    <Lab px={260} py={160} tx={350} ty={110}>smoke particle</Lab>
    <Lab px={200} py={170} tx={350} ty={150}>path: random zig-zag</Lab>
    <Lab px={300} py={200} tx={350} ty={190}>air molecules</Lab>
    <T x={440} y={236} size={11}>Random collisions move the particle</T>
  </Svg>
);

/* ---------- Conduction, convection and radiation ---------- */
const HeatTransfer = () => (
  <Svg w={560} h={290} label="Three ways thermal energy is transferred: conduction through a metal rod, convection currents in a heated fluid, and radiation from a hot object">
    <T x={90} y={22} bold size={13}>Conduction</T>
    <rect x={30} y={90} width={120} height={26} fill="#d1d5db" stroke={K} strokeWidth={2} />
    <rect x={14} y={80} width={20} height={46} rx={6} fill="#fb923c" stroke={K} strokeWidth={2} />
    {[50, 75, 100, 125].map((x) => <circle key={x} cx={x} cy={103} r={4} fill={C.navy} />)}
    <L x1={44} y1={150} x2={140} y2={150} arrow w={2} stroke={C.red} />
    <T x={90} y={172} size={11}>vibrating particles and</T><T x={90} y={186} size={11}>free electrons pass energy on</T>
    <T x={280} y={22} bold size={13}>Convection</T>
    <rect x={225} y={50} width={110} height={110} rx={8} fill="#e0f2fe" stroke={K} strokeWidth={2} />
    <path d="M250 140 V80 M310 80 V140" stroke={C.red} strokeWidth={2} fill="none" />
    <path d="M250 80 H310" stroke={C.navy} strokeWidth={0} />
    <L x1={250} y1={140} x2={250} y2={78} arrow w={2.4} stroke={C.red} />
    <L x1={250} y1={72} x2={310} y2={72} arrow w={2.4} stroke={C.red} />
    <L x1={310} y1={78} x2={310} y2={140} arrow w={2.4} stroke={C.navy} />
    <L x1={310} y1={146} x2={250} y2={146} arrow w={2.4} stroke={C.navy} />
    <path d="M240 168 q10 -12 20 0 M270 168 q10 -12 20 0 M300 168 q10 -12 20 0" fill="none" stroke={C.orange} strokeWidth={3} />
    <T x={280} y={196} size={11}>warm fluid expands, is less dense</T><T x={280} y={210} size={11}>and rises; cool fluid sinks</T>
    <T x={470} y={22} bold size={13}>Radiation</T>
    <circle cx={440} cy={105} r={30} fill="#fb923c" stroke={K} strokeWidth={2} />
    {[0, 1, 2].map((i) => <path key={i} d={`M480 ${85 + i * 20} q10 -8 20 0 t20 0 t20 0`} fill="none" stroke={C.red} strokeWidth={2.2} />)}
    <T x={480} y={172} size={11}>infra-red waves:</T><T x={480} y={186} size={11}>work through a vacuum</T>
    <T x={280} y={262} size={12} bold>Dull black surfaces absorb and emit best; shiny surfaces reflect</T>
  </Svg>
);

/* ---------- Diffraction through gaps ---------- */
const DiffractionGaps = () => {
  const arcs = (cx, cy, n) => Array.from({ length: n }, (_, i) => <path key={i} d={`M${cx + 14 + i * 22} ${cy - 30 - i * 14} A${30 + i * 22} ${30 + i * 22} 0 0 1 ${cx + 14 + i * 22} ${cy + 30 + i * 14}`} fill="none" stroke="#2563eb" strokeWidth={1.8} />);
  return (
    <Svg w={560} h={290} label="Diffraction of water waves through a wide gap with little spreading and through a gap about one wavelength wide with strong spreading">
      <T x={140} y={22} bold size={13}>Wide gap: little diffraction</T>
      {[0, 1, 2].map((i) => <line key={i} x1={20 + i * 22} y1={60} x2={20 + i * 22} y2={230} stroke="#2563eb" strokeWidth={1.8} />)}
      <rect x={90} y={40} width={10} height={80} fill="#6b7280" /><rect x={90} y={170} width={10} height={80} fill="#6b7280" />
      {[0, 1, 2].map((i) => <line key={i} x1={118 + i * 22} y1={120} x2={118 + i * 22} y2={170} stroke="#2563eb" strokeWidth={1.8} />)}
      <path d="M118 118 q-10 -4 -14 -8 M118 172 q-10 4 -14 8" fill="none" stroke="#2563eb" strokeWidth={1.4} />
      <T x={140} y={272} size={11}>gap much wider than the wavelength</T>
      <T x={420} y={22} bold size={13}>Narrow gap: strong diffraction</T>
      {[0, 1, 2].map((i) => <line key={i} x1={300 + i * 22} y1={60} x2={300 + i * 22} y2={230} stroke="#2563eb" strokeWidth={1.8} />)}
      <rect x={370} y={40} width={10} height={90} fill="#6b7280" /><rect x={370} y={160} width={10} height={90} fill="#6b7280" />
      {arcs(380, 145, 4)}
      <T x={430} y={272} size={11}>gap about one wavelength: waves spread out</T>
    </Svg>
  );
};

/* ---------- Refraction of waves ---------- */
const WaveRefraction = () => (
  <Svg w={560} h={280} label="Water waves travelling from deep to shallow water slow down, their wavelength gets shorter and they bend towards the normal; the frequency does not change">
    <rect x={20} y={20} width={520} height={110} fill="#bfdbfe" opacity={0.7} /><rect x={20} y={130} width={520} height={120} fill="#7dd3fc" opacity={0.9} />
    <L x1={20} y1={130} x2={540} y2={130} w={2.4} />
    <L x1={280} y1={30} x2={280} y2={245} dash="6 5" w={1.2} />
    <T x={500} y={44} size={12} bold>deep water</T><T x={500} y={238} size={12} bold>shallow water</T>
    {[0, 1, 2, 3].map((i) => <line key={`d${i}`} x1={150 + i * 50} y1={30} x2={110 + i * 50} y2={110} stroke={K} strokeWidth={2} />)}
    {[0, 1, 2, 3, 4].map((i) => <line key={`s${i}`} x1={130 + i * 26} y1={150 + i * 14} x2={190 + i * 26} y2={120 + i * 14} stroke={K} strokeWidth={2} />)}
    <Arrow x1={100} y1={50} x2={200} y2={100} label="direction of travel" lx={60} ly={30} anchor="start" w={2} />
    <Arrow x1={200} y1={150} x2={265} y2={215} w={2} />
    <T x={420} y={80} size={11}>longer wavelength, faster</T>
    <T x={430} y={190} size={11}>shorter wavelength, slower</T>
    <T x={290} y={268} size={12} bold>Frequency stays the same; v = fλ so v and λ both fall together</T>
  </Svg>
);

/* ---------- Dispersion by a prism ---------- */
const PrismDispersion = () => {
  const cols = ['#dc2626', '#f97316', '#facc15', '#22c55e', '#3b82f6', '#6366f1', '#7c3aed'];
  return (
    <Svg w={560} h={270} label="White light entering a glass prism is dispersed into a spectrum: red is refracted least and violet most">
      <polygon points="220,210 300,60 380,210" fill="#e0f2fe" stroke={K} strokeWidth={2.4} />
      <L x1={40} y1={170} x2={258} y2={150} w={3.4} stroke="#6b7280" />
      <T x={110} y={140} size={12} bold>white light</T>
      {cols.map((c, i) => <L key={c} x1={258} y1={150} x2={500} y2={148 + i * 13 - 20} w={3} stroke={c} />)}
      {cols.map((c, i) => <L key={`${c}b`} x1={338} y1={160} x2={500} y2={148 + i * 13 - 20} w={0} stroke={c} />)}
      <T x={512} y={132} size={12} anchor="start" fill="#dc2626" bold>red</T>
      <T x={512} y={226} size={12} anchor="start" fill="#7c3aed" bold>violet</T>
      <T x={300} y={256} size={11}>Violet has the shortest wavelength and is refracted the most</T>
    </Svg>
  );
};

/* ---------- Refraction through a glass block ---------- */
const GlassBlock = () => (
  <Svg w={560} h={290} label="A ray of light passing through a rectangular glass block bends towards the normal on entering, bends away from the normal on leaving, and leaves parallel to the incident ray but shifted sideways">
    <rect x={190} y={80} width={180} height={140} fill="#e0f2fe" stroke={K} strokeWidth={2.4} />
    <L x1={100} y1={30} x2={230} y2={80} w={2.6} />
    <L x1={230} y1={80} x2={330} y2={220} w={2.6} />
    <L x1={330} y1={220} x2={450} y2={262} w={2.6} />
    <L x1={230} y1={30} x2={230} y2={130} dash="5 4" w={1.2} /><L x1={330} y1={170} x2={330} y2={270} dash="5 4" w={1.2} />
    <Arrow x1={150} y1={50} x2={190} y2={65} w={0} />
    <T x={205} y={62} size={12} anchor="end" bold>i</T><T x={248} y={112} size={12} bold>r</T>
    <T x={150} y={26} size={12} anchor="end">incident ray</T>
    <T x={280} y={160} size={11}>bends towards the normal</T><T x={280} y={174} size={11}>in glass (slower)</T>
    <T x={400} y={196} size={11} anchor="start">emergent ray: parallel</T><T x={400} y={210} size={11} anchor="start">to incident, shifted</T>
    <L x1={450} y1={262} x2={450} y2={262} w={0} />
    <T x={112} y={230} size={11} anchor="start">normal (dashed)</T>
  </Svg>
);

/* ---------- Diverging lens ---------- */
const DivergingLens = () => (
  <Svg w={560} h={280} label="A diverging lens spreads parallel rays so they seem to come from a principal focus on the same side as the light; it is used to correct short sight">
    <L x1={20} y1={140} x2={540} y2={140} w={1.2} dash="6 5" />
    <path d="M250 50 q18 90 0 180 M310 50 q-18 90 0 180" fill="#e0f2fe" stroke={K} strokeWidth={2.2} />
    {[90, 140, 190].map((y, i) => <L key={i} x1={40} y1={y} x2={280} y2={y} w={2} arrow={false} />)}
    <L x1={280} y1={90} x2={430} y2={50} w={2} /><L x1={280} y1={190} x2={430} y2={230} w={2} />
    <L x1={280} y1={140} x2={440} y2={140} w={2} />
    <L x1={280} y1={90} x2={160} y2={140} w={1.3} dash="4 4" /><L x1={280} y1={190} x2={160} y2={140} w={1.3} dash="4 4" />
    <circle cx={160} cy={140} r={4} fill={C.red} />
    <T x={160} y={162} size={11} bold>F (virtual focus)</T>
    <T x={130} y={30} size={12} bold>parallel rays</T>
    <T x={470} y={80} size={11} anchor="start">rays diverge</T>
    <T x={280} y={265} size={12} bold>A diverging lens corrects short sight: the image forms on the retina</T>
  </Svg>
);

/* ---------- Circuit symbols ---------- */
const CircuitSymbols = () => {
  const item = (x, y, name, glyph) => (
    <g key={name}>
      {glyph}
      <T x={x + 60} y={y + 46} size={11} bold>{name}</T>
    </g>
  );
  const w = (x, y) => <><L x1={x} y1={y} x2={x + 28} y2={y} w={2} /><L x1={x + 92} y1={y} x2={x + 120} y2={y} w={2} /></>;
  const sym = [
    ['cell', (x, y) => <>{w(x, y)}<L x1={x + 56} y1={y - 16} x2={x + 56} y2={y + 16} w={2} /><L x1={x + 64} y1={y - 9} x2={x + 64} y2={y + 9} w={3.4} /><L x1={x + 28} y1={y} x2={x + 56} y2={y} w={2} /><L x1={x + 64} y1={y} x2={x + 92} y2={y} w={2} /></>],
    ['switch', (x, y) => <>{w(x, y)}<L x1={x + 28} y1={y} x2={x + 92} y2={y - 22} w={2} /></>],
    ['lamp', (x, y) => <>{w(x, y)}<circle cx={x + 60} cy={y} r={20} fill="#fff" stroke={K} strokeWidth={2} /><L x1={x + 46} y1={y - 14} x2={x + 74} y2={y + 14} w={2} /><L x1={x + 46} y1={y + 14} x2={x + 74} y2={y - 14} w={2} /></>],
    ['resistor', (x, y) => <>{w(x, y)}<rect x={x + 28} y={y - 10} width={64} height={20} fill="#fff" stroke={K} strokeWidth={2} /></>],
    ['variable resistor', (x, y) => <>{w(x, y)}<rect x={x + 28} y={y - 10} width={64} height={20} fill="#fff" stroke={K} strokeWidth={2} /><L x1={x + 30} y1={y + 24} x2={x + 90} y2={y - 22} w={2} arrow /></>],
    ['fuse', (x, y) => <>{w(x, y)}<rect x={x + 28} y={y - 9} width={64} height={18} fill="#fff" stroke={K} strokeWidth={2} /><L x1={x + 28} y1={y} x2={x + 92} y2={y} w={1.6} /></>],
    ['ammeter', (x, y) => <>{w(x, y)}<circle cx={x + 60} cy={y} r={20} fill="#fff" stroke={K} strokeWidth={2} /><text x={x + 60} y={y + 6} textAnchor="middle" fontSize={17} fontWeight={800}>A</text></>],
    ['voltmeter', (x, y) => <>{w(x, y)}<circle cx={x + 60} cy={y} r={20} fill="#fff" stroke={K} strokeWidth={2} /><text x={x + 60} y={y + 6} textAnchor="middle" fontSize={17} fontWeight={800}>V</text></>],
    ['thermistor', (x, y) => <>{w(x, y)}<rect x={x + 28} y={y - 10} width={64} height={20} fill="#fff" stroke={K} strokeWidth={2} /><L x1={x + 34} y1={y + 26} x2={x + 56} y2={y + 26} w={2} /><L x1={x + 56} y1={y + 26} x2={x + 86} y2={y - 20} w={2} /></>],
    ['LDR', (x, y) => <>{w(x, y)}<circle cx={x + 60} cy={y} r={20} fill="#fff" stroke={K} strokeWidth={2} /><rect x={x + 44} y={y - 8} width={32} height={16} fill="#fff" stroke={K} strokeWidth={1.8} /><L x1={x + 28} y1={y - 34} x2={x + 44} y2={y - 20} arrow w={1.6} /><L x1={x + 40} y1={y - 38} x2={x + 56} y2={y - 24} arrow w={1.6} /></>],
    ['diode', (x, y) => <>{w(x, y)}<polygon points={`${x + 40},${y - 16} ${x + 40},${y + 16} ${x + 72},${y}`} fill="#fff" stroke={K} strokeWidth={2} /><L x1={x + 72} y1={y - 16} x2={x + 72} y2={y + 16} w={2.4} /></>],
    ['battery', (x, y) => <>{w(x, y)}<L x1={x + 44} y1={y - 16} x2={x + 44} y2={y + 16} w={2} /><L x1={x + 52} y1={y - 9} x2={x + 52} y2={y + 9} w={3.4} /><L x1={x + 62} y1={y - 16} x2={x + 62} y2={y + 16} w={2} /><L x1={x + 70} y1={y - 9} x2={x + 70} y2={y + 9} w={3.4} /></>],
  ];
  return (
    <Svg w={560} h={400} label="Circuit symbols: cell, battery, switch, lamp, resistor, variable resistor, fuse, ammeter, voltmeter, thermistor, light-dependent resistor and diode">
      {sym.map(([name, fn], i) => {
        const col = i % 3, row = Math.floor(i / 3);
        const x = 20 + col * 180, y = 45 + row * 88;
        return item(x, y, name, fn(x, y));
      })}
    </Svg>
  );
};

/* ---------- Potential divider ---------- */
const PotentialDivider = () => (
  <Svg w={560} h={290} label="A potential divider circuit with a battery and two resistors in series; the output voltage is taken across the second resistor, Vout equals Vin times R2 divided by R1 plus R2">
    <path d="M110 60 H300 V90 M300 150 V190 M300 250 H110 V60" fill="none" stroke={K} strokeWidth={2.4} />
    <rect x={284} y={90} width={32} height={60} fill="#fff" stroke={K} strokeWidth={2.4} /><T x={270} y={125} size={13} anchor="end" bold>R₁</T>
    <rect x={284} y={190} width={32} height={60} fill="#fff" stroke={K} strokeWidth={2.4} /><T x={270} y={225} size={13} anchor="end" bold>R₂</T>
    <L x1={90} y1={130} x2={130} y2={130} w={2} /><L x1={98} y1={142} x2={122} y2={142} w={4} />
    <T x={62} y={140} size={12} bold anchor="end">Vin</T>
    <path d="M316 220 H400 M316 250 H400" fill="none" stroke={K} strokeWidth={1.6} />
    <circle cx={400} cy={220} r={14} fill="#fff" stroke={K} strokeWidth={2} /><text x={400} y={226} textAnchor="middle" fontSize={15} fontWeight={800}>V</text>
    <L x1={400} y1={250} x2={400} y2={234} w={1.6} />
    <T x={440} y={226} size={12} anchor="start" bold>Vout</T>
    <rect x={380} y={60} width={160} height={80} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={460} y={82} bold size={12}>Vout = Vin × R₂ ÷ (R₁ + R₂)</T>
    <T x={460} y={102} size={11}>bigger R₂: bigger share of Vin</T>
    <T x={460} y={120} size={11}>R₂ an LDR: dark gives high Vout</T>
  </Svg>
);

/* ---------- Three-pin plug ---------- */
const PlugWiring = () => (
  <Svg w={560} h={300} label="A correctly wired three-pin plug: the brown live wire goes to the fused terminal, the blue neutral wire to the neutral terminal and the green and yellow earth wire to the earth terminal, with the cable gripped firmly">
    <rect x={150} y={30} width={250} height={230} rx={22} fill="#e5e7eb" stroke={K} strokeWidth={3} />
    <rect x={225} y={225} width={100} height={36} rx={4} fill="#9ca3af" stroke={K} strokeWidth={2} />
    <T x={275} y={248} size={11} bold>cable grip</T>
    <path d="M250 225 V150 M275 225 V150 M300 225 V150" stroke={K} strokeWidth={0} />
    <path d="M300 225 V170 Q300 150 345 120 V90" fill="none" stroke="#92400e" strokeWidth={7} strokeLinecap="round" />
    <path d="M250 225 V170 Q250 150 205 120 V90" fill="none" stroke="#2563eb" strokeWidth={7} strokeLinecap="round" />
    <path d="M275 225 V80" fill="none" stroke="#65a30d" strokeWidth={7} strokeLinecap="round" />
    <path d="M275 225 V80" fill="none" stroke="#facc15" strokeWidth={3} strokeDasharray="8 8" />
    <rect x={325} y={60} width={50} height={32} rx={5} fill="#fde68a" stroke={K} strokeWidth={2} /><T x={350} y={80} size={11} bold>fuse</T>
    <circle cx={205} cy={80} r={12} fill="#cbd5e1" stroke={K} strokeWidth={2} /><circle cx={275} cy={62} r={12} fill="#cbd5e1" stroke={K} strokeWidth={2} />
    <Lab px={345} py={150} tx={425} ty={140}>live (brown) to the fuse</Lab>
    <LabL px={205} py={150} tx={130} ty={150}>neutral (blue)</LabL>
    <Lab px={275} py={110} tx={425} ty={60}>earth (green/yellow)</Lab>
    <T x={275} y={285} size={11}>Fuse and switch go in the live wire. Earth connects the metal case to earth.</T>
  </Svg>
);

/* ---------- Electromagnetic induction ---------- */
const InductionCoil = () => (
  <Svg w={560} h={280} label="Electromagnetic induction: a bar magnet pushed into a coil connected to a sensitive meter induces an e.m.f. while the magnet moves; the size increases with faster movement, a stronger magnet or more turns">
    <path d="M280 110 q-25 0 -25 18 q0 18 25 18 M280 110 q25 0 25 18 q0 18 -25 18" fill="none" stroke={K} strokeWidth={0} />
    {Array.from({ length: 8 }, (_, i) => <ellipse key={i} cx={300 + i * 14} cy={150} rx={16} ry={36} fill="none" stroke="#b45309" strokeWidth={3} />)}
    <path d="M300 114 H260 V60 H460 V114 H412" fill="none" stroke="#b45309" strokeWidth={0} />
    <path d="M300 186 V240 H400 V186" fill="none" stroke="#b45309" strokeWidth={3} />
    <path d="M412 114 V70 H470 V150 M470 150 V198" fill="none" stroke="#b45309" strokeWidth={0} />
    <circle cx={480} cy={215} r={30} fill="#fff" stroke={K} strokeWidth={2.4} /><L x1={480} y1={215} x2={494} y2={195} w={2.6} />
    <T x={480} y={265} size={11} bold>sensitive meter</T>
    <path d="M412 150 H480 V185" fill="none" stroke="#b45309" strokeWidth={3} />
    <path d="M400 240 H480 V245" fill="none" stroke="#b45309" strokeWidth={3} />
    <rect x={60} y={125} width={70} height={50} fill="#fca5a5" stroke={K} strokeWidth={2.4} /><rect x={130} y={125} width={70} height={50} fill="#93c5fd" stroke={K} strokeWidth={2.4} />
    <T x={95} y={156} bold size={16}>N</T><T x={165} y={156} bold size={16}>S</T>
    <Arrow x1={205} y1={150} x2={285} y2={150} label="magnet in" lx={245} ly={138} w={3} stroke={C.red} />
    <T x={280} y={34} size={12} bold>An e.m.f. is induced only while the magnetic field through the coil is changing</T>
    <T x={150} y={235} size={11}>faster, stronger magnet or more turns: larger e.m.f.</T>
  </Svg>
);

/* ---------- D.c. motor ---------- */
const DcMotor = () => (
  <Svg w={560} h={310} label="A simple d.c. motor: a coil between the north and south poles of a magnet, connected through a split-ring commutator and brushes to a battery; the forces on the two sides of the coil act in opposite directions so the coil turns">
    <rect x={40} y={100} width={80} height={120} fill="#fca5a5" stroke={K} strokeWidth={2.4} /><T x={80} y={170} bold size={22}>N</T>
    <rect x={440} y={100} width={80} height={120} fill="#93c5fd" stroke={K} strokeWidth={2.4} /><T x={480} y={170} bold size={22}>S</T>
    <rect x={190} y={110} width={180} height={90} fill="none" stroke="#b45309" strokeWidth={5} />
    <L x1={190} y1={110} x2={190} y2={200} w={8} stroke="#b45309" /><L x1={370} y1={110} x2={370} y2={200} w={8} stroke="#b45309" />
    <Arrow x1={190} y1={205} x2={190} y2={262} label="force down" lx={190} ly={278} stroke={C.red} w={3.4} />
    <Arrow x1={370} y1={105} x2={370} y2={48} label="force up" lx={370} ly={40} stroke={C.red} w={3.4} />
    <L x1={280} y1={200} x2={280} y2={226} w={3} stroke="#b45309" />
    <path d="M262 232 a18 18 0 0 1 18 -6 M280 226 a18 18 0 0 1 18 6" fill="none" stroke={K} strokeWidth={5} />
    <rect x={238} y={238} width={20} height={14} fill="#d1d5db" stroke={K} strokeWidth={1.6} /><rect x={302} y={238} width={20} height={14} fill="#d1d5db" stroke={K} strokeWidth={1.6} />
    <path d="M248 252 V292 H300" fill="none" stroke={K} strokeWidth={2} /><path d="M312 252 V292 H340" fill="none" stroke={K} strokeWidth={2} />
    <L x1={300} y1={282} x2={300} y2={302} w={2} /><L x1={308} y1={288} x2={308} y2={296} w={4} />
    <T x={280} y={20} bold size={12}>Left-hand rule: first finger = field, second finger = current, thumb = force</T>
    <T x={410} y={262} size={11} anchor="start">brushes touch the</T><T x={410} y={276} size={11} anchor="start">split-ring commutator</T>
    <L x1={324} y1={246} x2={408} y2={260} w={1.2} />
  </Svg>
);
/* ---------- Solenoid ---------- */
const Solenoid = () => (
  <Svg w={560} h={290} label="The magnetic field of a solenoid: field lines run through the coil and out of one end, like a bar magnet, with a north pole at one end and a south pole at the other; the field is stronger with more current, more turns or an iron core">
    <path d="M395 140 C480 20 80 20 165 140" fill="none" stroke="#2563eb" strokeWidth={2} />
    <path d="M395 140 C440 60 120 60 165 140" fill="none" stroke="#2563eb" strokeWidth={2} />
    <path d="M395 140 C480 260 80 260 165 140" fill="none" stroke="#2563eb" strokeWidth={2} />
    <path d="M395 140 C440 220 120 220 165 140" fill="none" stroke="#2563eb" strokeWidth={2} />
    {Array.from({ length: 9 }, (_, i) => <ellipse key={i} cx={185 + i * 25} cy={140} rx={10} ry={36} fill="none" stroke="#b45309" strokeWidth={3.4} />)}
    <L x1={200} y1={140} x2={380} y2={140} arrow w={2.6} stroke="#2563eb" />
    <T x={420} y={146} size={16} bold anchor="start">N</T><T x={140} y={146} size={16} bold anchor="end">S</T>
    <T x={280} y={42} size={11}>field lines leave the north end and return to the south end</T>
    <T x={280} y={284} size={12} bold>Stronger with more current, more turns or a soft iron core</T>
  </Svg>
);
/* ---------- Power transmission ---------- */
const PowerLines = () => (
  <Svg w={560} h={270} label="Electricity transmission: a power station, a step-up transformer to a very high voltage, overhead power lines, a step-down transformer and the consumer; the high voltage means a low current and less energy lost as heat">
    <Box x={14} y={92} w={92} h={56} fill={C.grey}>power station</Box>
    <Arrow x1={108} y1={120} x2={138} y2={120} />
    <Box x={140} y={92} w={84} h={56} fill={C.yellow}>step-up</Box>
    <T x={182} y={164} size={10}>transformer</T><T x={182} y={84} size={11} bold>25 kV</T>
    <Arrow x1={226} y1={120} x2={284} y2={120} />
    {[298, 342, 386].map((x) => <g key={x}><path d={`M${x} 160 L${x + 10} 80 L${x + 20} 160`} fill="none" stroke={K} strokeWidth={2.4} /><L x1={x - 10} y1={100} x2={x + 30} y2={100} w={2.4} /></g>)}
    <T x={345} y={62} bold size={12} fill={C.red}>400 kV, low current</T>
    <Arrow x1={428} y1={120} x2={452} y2={120} />
    <Box x={454} y={92} w={86} h={56} fill={C.yellow}>step-down</Box>
    <T x={497} y={164} size={10}>transformer</T><T x={497} y={84} size={11} bold>230 V</T>
    <T x={280} y={206} size={12} bold>Power = I × V. At the same power, a higher voltage gives a smaller current.</T>
    <T x={280} y={226} size={12}>Energy lost as heat in the cables = I² × R, so a small current wastes far less.</T>
    <T x={280} y={252} size={11}>Transformers only work with a.c.: Vp ÷ Vs = Np ÷ Ns</T>
  </Svg>
);
/* ---------- Nuclide notation and isotopes ---------- */
const NuclideNotation = () => (
  <Svg w={560} h={280} label="Nuclide notation: the nucleon number is written above and the proton number below the symbol, shown for uranium-235, and carbon-12, carbon-13 and carbon-14 as isotopes with the same number of protons and different numbers of neutrons">
    <T x={90} y={36} bold size={13}>Nuclide notation</T>
    <text x={30} y={104} fontSize={22} fontWeight={800} fill={C.red}>235</text>
    <text x={44} y={138} fontSize={22} fontWeight={800} fill={C.navy}>92</text>
    <text x={96} y={128} fontSize={52} fontWeight={800}>U</text>
    <Lab px={74} py={98} tx={150} ty={78}>nucleon number</Lab>
    <Lab px={64} py={134} tx={150} ty={172}>proton number</Lab>
    <T x={110} y={196} size={11}>nucleon number = protons + neutrons</T><T x={110} y={212} size={11}>neutrons = 235 − 92 = 143</T>
    <rect x={290} y={20} width={255} height={170} rx={8} fill="#fff" stroke={K} strokeWidth={1.6} />
    <T x={417} y={42} bold size={12}>Isotopes of carbon</T>
    {[['¹²C', '6', '6', '6'], ['¹³C', '6', '6', '7'], ['¹⁴C', '6', '6', '8']].map(([n, p, e, nn], i) => (
      <g key={n}>
        <T x={325} y={82 + i * 36} bold size={15}>{n}</T>
        <T x={400} y={82 + i * 36} size={12}>{p} protons</T>
        <T x={460} y={82 + i * 36} size={12}>{e} electrons</T>
        <T x={520} y={82 + i * 36} size={12} fill={C.red} bold>{nn} n</T>
      </g>
    ))}
    <T x={417} y={178} size={11}>same protons, different neutrons</T>
    <T x={280} y={252} size={12} bold>Isotopes have the same chemical properties but different masses</T>
  </Svg>
);

/* ---------- Half-life graph ---------- */
const HalfLifeGraph = () => (
  <Svg w={560} h={290} label="Radioactive decay graph: the count rate falls from 800 to 400 to 200 to 100 counts per minute in successive half-lives of equal length">
    <Ax x0={90} y0={240} x1={520} y1={30} xl="time" yl="count rate" xo={40} yo={50} />
    <path d="M80 50 C150 120 200 160 260 185 S400 220 500 232" fill="none" stroke="#2563eb" strokeWidth={3.4} />
    {[[80, 50, '800'], [180, 145, '400'], [280, 192, '200'], [380, 216, '100']].map(([x, y, v], i) => (
      <g key={v}>
        <circle cx={x} cy={y} r={4} fill={C.red} />
        {i > 0 && <L x1={x} y1={y} x2={x} y2={240} dash="5 4" w={1.2} />}
        {i > 0 && <L x1={80} y1={y} x2={x} y2={y} dash="5 4" w={1.2} />}
        <T x={72} y={y + 4} size={11} anchor="end">{v}</T>
      </g>
    ))}
    {[180, 280, 380].map((x, i) => <T key={x} x={x} y={258} size={11}>{i + 1}T</T>)}
    <T x={400} y={90} size={12} bold anchor="start">Half-life T:</T>
    <T x={400} y={108} size={11} anchor="start">time for the count rate</T><T x={400} y={122} size={11} anchor="start">(or number of nuclei) to halve</T>
  </Svg>
);

/* ---------- Radiation in a field ---------- */
const RadiationDeflection = () => (
  <Svg w={560} h={290} label="Alpha, beta and gamma radiation passing between charged plates: beta particles bend strongly towards the positive plate, alpha particles bend slightly towards the negative plate and gamma rays are not deflected">
    <rect x={190} y={36} width={210} height={14} fill="#fca5a5" stroke={K} strokeWidth={1.8} /><T x={295} y={30} bold size={12}>positive plate +</T>
    <rect x={190} y={240} width={210} height={14} fill="#93c5fd" stroke={K} strokeWidth={1.8} /><T x={295} y={272} bold size={12}>negative plate −</T>
    <L x1={30} y1={145} x2={190} y2={145} w={3} />
    <T x={100} y={130} size={11}>source</T>
    <path d="M190 145 Q290 120 400 60" fill="none" stroke="#16a34a" strokeWidth={3} /><L x1={400} y1={60} x2={430} y2={44} arrow w={0} />
    <path d="M190 145 H430" fill="none" stroke={K} strokeWidth={3} />
    <path d="M190 145 Q300 150 400 175" fill="none" stroke="#dc2626" strokeWidth={3} />
    <T x={440} y={50} size={12} anchor="start" fill="#16a34a" bold>beta (β⁻)</T>
    <T x={440} y={64} size={11} anchor="start">bends strongly to +</T>
    <T x={440} y={146} size={12} anchor="start" bold>gamma (γ)</T><T x={440} y={160} size={11} anchor="start">not deflected</T>
    <T x={440} y={196} size={12} anchor="start" fill="#dc2626" bold>alpha (α)</T>
    <T x={440} y={210} size={11} anchor="start">bends slightly to −</T>
  </Svg>
);

/* ---------- Seasons ---------- */
const Seasons = () => {
  const pos = [[110, 150, 'December', 'N winter', 'below'], [280, 60, 'March', 'equinox', 'above'], [450, 150, 'June', 'N summer', 'below'], [280, 240, 'September', 'equinox', 'below']];
  return (
    <Svg w={560} h={326} label="The seasons: the Earth's axis is tilted at 23.5 degrees and always points the same way; when the northern hemisphere tilts towards the Sun it is summer there, and winter when it tilts away">
      <circle cx={280} cy={150} r={32} fill="#fde047" stroke={K} strokeWidth={2.4} /><T x={280} y={154} size={12} bold>Sun</T>
      <ellipse cx={280} cy={150} rx={170} ry={90} fill="none" stroke={K} strokeWidth={1.4} strokeDasharray="6 5" />
      {pos.map(([x, y, m, s, where]) => (
        <g key={m}>
          <circle cx={x} cy={y} r={17} fill="#7dd3fc" stroke={K} strokeWidth={2} />
          <L x1={x - 7} y1={y - 26} x2={x + 7} y2={y + 26} w={2.4} stroke={C.red} />
          <T x={x} y={where === 'above' ? y - 36 : y + 42} size={12} bold>{m}</T>
          <T x={x} y={where === 'above' ? y - 50 : y + 56} size={11}>{s}</T>
        </g>
      ))}
      <T x={280} y={318} size={11}>The axis always points the same way, so the hemisphere tilted towards the Sun has summer</T>
    </Svg>
  );
};
/* ---------- Phases of the Moon ---------- */
const MoonPhases = () => (
  <Svg w={560} h={300} label="Phases of the Moon: the Sun always lights half of the Moon; we see different amounts of the lit half as the Moon orbits the Earth in about 27 days">
    <T x={55} y={32} bold size={12}>Sunlight</T>
    {[60, 100, 140, 180, 220].map((y) => <L key={y} x1={20} y1={y} x2={80} y2={y} arrow w={2} stroke="#eab308" />)}
    <circle cx={280} cy={150} r={26} fill="#7dd3fc" stroke={K} strokeWidth={2.4} /><T x={280} y={154} size={11} bold>Earth</T>
    <circle cx={280} cy={150} r={100} fill="none" stroke={K} strokeWidth={1.2} strokeDasharray="6 5" />
    {[[180, 150, 'new moon'], [280, 250, 'first quarter'], [380, 150, 'full moon'], [280, 50, 'last quarter']].map(([x, y, n]) => (
      <g key={n}>
        <circle cx={x} cy={y} r={14} fill="#fff" stroke={K} strokeWidth={2} />
        <path d={`M${x} ${y - 14} A14 14 0 0 1 ${x} ${y + 14}z`} fill="#4b5563" />
        <T x={x} y={y + (y === 250 ? 34 : y === 50 ? -22 : 34)} size={11} bold>{n}</T>
      </g>
    ))}
    <T x={440} y={90} size={11} anchor="start">The half facing the</T><T x={440} y={104} size={11} anchor="start">Sun is always lit.</T>
    <T x={440} y={130} size={11} anchor="start">From Earth we see more</T><T x={440} y={144} size={11} anchor="start">or less of the lit half.</T>
    <T x={440} y={174} size={11} anchor="start">A cycle takes about</T><T x={440} y={188} size={11} anchor="start">27 days.</T>
  </Svg>
);
/* ---------- Hubble graph ---------- */
const HubbleGraph = () => (
  <Svg w={560} h={280} label="Hubble's law graph: the recession speed of galaxies is directly proportional to their distance, a straight line through the origin whose gradient is the Hubble constant">
    <Ax x0={90} y0={230} x1={430} y1={30} xl="distance of galaxy" yl="speed of recession" />
    {[[150, 205], [200, 170], [250, 150], [300, 115], [360, 80], [400, 52]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={4.5} fill="#2563eb" />)}
    <L x1={90} y1={230} x2={420} y2={40} w={2.6} stroke={C.red} />
    <rect x={430} y={50} width={120} height={120} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={490} y={72} bold size={12}>v = H₀ × d</T>
    <T x={490} y={92} size={11}>gradient = H₀</T>
    <T x={490} y={112} size={11}>(Hubble constant)</T>
    <T x={490} y={132} size={11}>age of Universe</T><T x={490} y={146} size={11} bold>≈ 1 ÷ H₀</T>
    <T x={240} y={266} size={11}>Further galaxies have larger red-shift and move away faster</T>
  </Svg>
);

/* ---------- Pressure in a liquid ---------- */
const LiquidPressure = () => (
  <Svg w={560} h={290} label="Pressure in a liquid increases with depth: water jets from holes in a tank travel further from the lower holes where the pressure is larger; p equals density times g times height">
    <rect x={60} y={30} width={150} height={220} fill="#bfdbfe" stroke={K} strokeWidth={2.6} />
    <L x1={60} y1={40} x2={210} y2={40} w={2.6} stroke="#3b82f6" />
    {[90, 150, 210].map((y, i) => (
      <g key={y}>
        <circle cx={210} cy={y} r={4} fill="#fff" stroke={K} strokeWidth={1.6} />
        <path d={`M210 ${y} q${40 + i * 25} ${-4 + i * 6} ${60 + i * 45} ${254 - y}`} fill="none" stroke="#3b82f6" strokeWidth={3} />
        <T x={135} y={y + 4} size={11} bold>{['low pressure', 'higher pressure', 'highest pressure'][i]}</T>
      </g>
    ))}
    <L x1={20} y1={256} x2={540} y2={256} w={2.6} />
    <T x={390} y={72} size={12} bold anchor="start">Deeper water</T>
    <T x={390} y={88} size={12} anchor="start">pushes harder, so the</T><T x={390} y={104} size={12} anchor="start">jet from the lowest hole</T><T x={390} y={120} size={12} anchor="start">travels furthest.</T>
    <rect x={390} y={140} width={150} height={50} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={465} y={162} bold size={12}>p = ρ g h</T>
    <T x={465} y={180} size={11}>density, g and depth</T>
  </Svg>
);
/* ---------- Energy transfer chain ---------- */
const EnergyChain = () => (
  <Svg w={560} h={260} label="Energy transfer chain for a battery-powered lamp: chemical energy in the battery is transferred electrically to the lamp and then as light and thermal energy to the surroundings; the total energy is conserved">
    <Box x={14} y={95} w={110} h={50} fill={C.yellow}>chemical store</Box>
    <Arrow x1={126} y1={120} x2={170} y2={120} />
    <Box x={172} y={95} w={110} h={50} fill={C.blue}>electrical</Box>
    <T x={148} y={106} size={10}>battery</T><T x={227} y={158} size={10}>wire to lamp</T>
    <Box x={350} y={20} w={130} h={50} fill="#fef08a">light (useful)</Box>
    <Box x={350} y={170} w={130} h={50} fill="#fed7aa">thermal (wasted)</Box>
    <L x1={284} y1={110} x2={348} y2={52} arrow w={2.4} /><L x1={284} y1={132} x2={348} y2={190} arrow w={2.4} />
    <T x={290} y={86} size={11} anchor="start">lamp</T>
    <L x1={482} y1={195} x2={530} y2={195} arrow w={2} /><T x={500} y={214} size={10}>surroundings</T>
    <T x={280} y={248} size={12} bold>Energy is never created or destroyed: total in = useful out + wasted</T>
  </Svg>
);
/* ---------- Power station chain ---------- */
const PowerStation = () => (
  <Svg w={560} h={250} label="How a fossil-fuel power station generates electricity: fuel burns to heat water to steam, the steam drives a turbine, the turbine turns a generator, and the electricity goes to the grid">
    {[['fuel', 'fuel burns', '#fed7aa'], ['boiler', 'water becomes steam', '#fecaca'], ['turbine', 'steam turns it', '#e0f2fe'], ['generator', 'makes electricity', '#fef9c3'], ['grid', 'to homes and industry', '#d9f99d']].map(([t, cap, f], i) => (
      <g key={t}>
        <Box x={12 + i * 108} y={82} w={90} h={52} fill={f}>{t}</Box>
        <T x={57 + i * 108} y={152} size={10}>{cap}</T>
        {i < 4 && <Arrow x1={104 + i * 108} y1={108} x2={118 + i * 108} y2={108} w={2.6} />}
      </g>
    ))}
    <T x={280} y={40} size={12} bold>Chemical → thermal → kinetic → electrical</T>
    <T x={280} y={206} size={12}>Wind, hydroelectric and geothermal plants also turn a turbine and generator</T>
    <T x={280} y={226} size={12}>(solar cells make electricity directly)</T>
  </Svg>
);
export const PHYS2_FIGS = {
  vectorAddition: VectorAddition,
  speedTimeShapes: SpeedTimeShapes,
  forcesCar: ForcesCar,
  circularMotion: CircularMotion,
  gasPressureVolume: GasPressureVolume,
  brownianMotion: BrownianMotion,
  heatTransfer: HeatTransfer,
  diffractionGaps: DiffractionGaps,
  waveRefraction: WaveRefraction,
  prismDispersion: PrismDispersion,
  glassBlock: GlassBlock,
  divergingLens: DivergingLens,
  circuitSymbols: CircuitSymbols,
  potentialDivider: PotentialDivider,
  plugWiring: PlugWiring,
  inductionCoil: InductionCoil,
  dcMotor: DcMotor,
  solenoid: Solenoid,
  powerLines: PowerLines,
  nuclideNotation: NuclideNotation,
  halfLifeGraph: HalfLifeGraph,
  radiationDeflection: RadiationDeflection,
  seasons: Seasons,
  moonPhases: MoonPhases,
  hubbleGraph: HubbleGraph,
  liquidPressure: LiquidPressure,
  energyChain: EnergyChain,
  powerStation: PowerStation,
};
