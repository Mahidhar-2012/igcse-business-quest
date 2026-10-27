// Hand-drawn vector diagrams for physics notes, drawn in the plain black-line style of exam papers.
// Used as fig: { svg: 'name', caption: '…' } on cards and questions.

const K = '#111';
const FONT = 'Arial, Helvetica, sans-serif';

const Svg = ({ w, h, children, label }) => (
  <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} className="mx-auto block h-auto w-full max-w-xl" style={{ fontFamily: FONT, fontSize: 13 }}>
    <defs>
      <marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill={K} />
      </marker>
    </defs>
    {children}
  </svg>
);

const T = ({ x, y, children, anchor = 'middle', size, bold, fill = K }) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={bold ? 700 : 400} fill={fill}>{children}</text>
);
const L = ({ x1, y1, x2, y2, dash, arrow, w = 2, stroke = K }) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={w} strokeDasharray={dash} markerEnd={arrow ? 'url(#ah)' : undefined} />
);
const Axes = ({ x0, y0, x1, y1, xl, yl, ylx }) => (
  <g>
    <L x1={x0} y1={y0} x2={x1} y2={y0} arrow />
    <L x1={x0} y1={y0} x2={x0} y2={y1} arrow />
    <T x={x1 - 10} y={y0 + 20} anchor="end">{xl}</T>
    <T x={ylx ?? x0 + 10} y={y1 + 6} anchor="start">{yl}</T>
    <T x={x0 - 6} y={y0 + 4} anchor="end">0</T>
  </g>
);

const DistanceTime = () => (
  <Svg w={520} h={250} label="Distance-time graph with constant speed, stationary and accelerating sections">
    <Axes x0={60} y0={210} x1={500} y1={20} xl="time" yl="distance" />
    <polyline points="60,210 160,130" fill="none" stroke={K} strokeWidth={2.5} />
    <polyline points="160,130 260,130" fill="none" stroke={K} strokeWidth={2.5} />
    <path d="M260 130 Q330 125 400 40" fill="none" stroke={K} strokeWidth={2.5} />
    <T x={150} y={186} anchor="start">constant speed</T>
    <T x={150} y={201} anchor="start" size={11}>(gradient = speed)</T>
    <T x={210} y={116}>stationary</T>
    <T x={210} y={102} size={11}>(horizontal line)</T>
    <T x={330} y={185} anchor="start">accelerating</T>
    <T x={330} y={200} anchor="start" size={11}>(gradient increasing)</T>
  </Svg>
);

const SpeedTime = () => (
  <Svg w={520} h={260} label="Speed-time graph: acceleration, constant speed, deceleration; area under graph is distance">
    <Axes x0={60} y0={220} x1={500} y1={20} xl="time / s" yl="speed / m/s" />
    <polygon points="60,220 160,80 330,80 440,220" fill="#e8eefb" stroke="none" />
    <polyline points="60,220 160,80 330,80 440,220" fill="none" stroke={K} strokeWidth={2.5} />
    <L x1={160} y1={80} x2={160} y2={220} dash="4 4" w={1} />
    <L x1={330} y1={80} x2={330} y2={220} dash="4 4" w={1} />
    <T x={72} y={66} anchor="start" size={12}>acceleration</T>
    <T x={72} y={80} anchor="start" size={11}>(gradient = a)</T>
    <T x={245} y={68}>constant speed</T>
    <T x={430} y={130} anchor="start" size={12}>deceleration</T>
    <T x={245} y={150} size={12}>area under graph</T>
    <T x={245} y={165} size={12}>= distance travelled</T>
  </Svg>
);

const FallingTerminal = () => (
  <Svg w={520} h={250} label="Speed-time graph for a falling object reaching terminal velocity">
    <Axes x0={60} y0={210} x1={500} y1={20} xl="time" yl="speed" />
    <path d="M60 210 C110 120 170 70 280 55 C360 48 420 48 480 47" fill="none" stroke={K} strokeWidth={2.5} />
    <L x1={280} y1={47} x2={500} y2={47} dash="5 4" w={1} />
    <T x={380} y={34}>terminal velocity</T>
    <T x={380} y={74} size={11}>weight = air resistance</T>
    <T x={380} y={88} size={11}>(no resultant force)</T>
    <T x={290} y={150} anchor="start" size={12}>before this: weight &gt; air resistance,</T>
    <T x={290} y={165} anchor="start" size={12}>so acceleration decreases</T>
  </Svg>
);

const MomentsBeam = () => (
  <Svg w={520} h={230} label="A beam balanced on a pivot with a force on each side">
    <rect x={60} y={105} width={400} height={16} fill="#fff" stroke={K} strokeWidth={2} />
    <polygon points="260,121 244,150 276,150" fill="#fff" stroke={K} strokeWidth={2} />
    <T x={260} y={168}>pivot</T>
    <L x1={110} y1={50} x2={110} y2={103} arrow />
    <T x={110} y={42}>F₁</T>
    <L x1={400} y1={50} x2={400} y2={103} arrow />
    <T x={400} y={42}>F₂</T>
    <L x1={110} y1={190} x2={258} y2={190} arrow w={1.5} />
    <L x1={258} y1={190} x2={110} y2={190} arrow w={1.5} />
    <T x={184} y={206}>d₁</T>
    <L x1={262} y1={190} x2={398} y2={190} arrow w={1.5} />
    <L x1={398} y1={190} x2={262} y2={190} arrow w={1.5} />
    <T x={330} y={206}>d₂</T>
    <T x={260} y={20} bold>F₁ × d₁ = F₂ × d₂ (balanced)</T>
  </Svg>
);

const LoadExtension = () => (
  <Svg w={520} h={250} label="Load-extension graph with limit of proportionality">
    <Axes x0={60} y0={210} x1={500} y1={20} xl="extension" yl="load" />
    <polyline points="60,210 280,90" fill="none" stroke={K} strokeWidth={2.5} />
    <path d="M280 90 Q330 62 420 50" fill="none" stroke={K} strokeWidth={2.5} />
    <circle cx={280} cy={90} r={4} fill={K} />
    <T x={292} y={118} anchor="start">limit of proportionality</T>
    <T x={84} y={60} anchor="start" size={12}>straight line through 0:</T>
    <T x={84} y={75} anchor="start" size={12}>load ∝ extension</T>
    <T x={84} y={90} anchor="start" size={12}>(gradient = 1 / k)</T>
  </Svg>
);

const Sankey = () => (
  <Svg w={520} h={230} label="Sankey diagram for a lamp: 100 J in, 10 J useful light out, 90 J wasted as heat">
    <path d="M30 60 L200 60 C260 60 270 60 330 60 L480 60 L480 70 L330 70 C270 70 250 90 200 110 L200 130 L30 130 Z" fill="#f6e7a5" stroke={K} strokeWidth={1.5} />
    <path d="M200 110 C260 110 270 160 340 170 L480 170 L480 215 L340 215 C270 205 250 140 200 130 Z" fill="#f6e7a5" stroke={K} strokeWidth={1.5} />
    <T x={115} y={98} bold>100 J in</T>
    <T x={115} y={113} size={11}>(electrical)</T>
    <T x={480} y={50} anchor="end">useful output: 10 J (light)</T>
    <T x={480} y={235} anchor="end" size={1}>{' '}</T>
    <T x={410} y={196}>wasted: 90 J (heat)</T>
    <T x={30} y={175} anchor="start" size={11}>arrow width ∝ energy</T>
  </Svg>
);

const HeatingCurve = () => (
  <Svg w={520} h={260} label="Temperature against time for heating a solid to a gas">
    <Axes x0={60} y0={220} x1={500} y1={20} xl="time" yl="temperature" />
    <polyline points="60,200 110,160 180,160 260,90 340,90 420,50" fill="none" stroke={K} strokeWidth={2.5} />
    <T x={72} y={150} anchor="start" size={12}>solid warms</T>
    <T x={145} y={184}>melting</T>
    <T x={145} y={198} size={11}>(constant temp.)</T>
    <T x={212} y={156} anchor="start" size={12}>liquid</T>
    <T x={212} y={170} anchor="start" size={12}>warms</T>
    <T x={300} y={112}>boiling</T>
    <T x={300} y={126} size={11}>(constant temp.)</T>
    <T x={420} y={80} anchor="start" size={12}>gas warms</T>
    <T x={280} y={246} size={11}>flat sections: energy breaks bonds instead of raising the temperature</T>
  </Svg>
);

const dots = (x0, y0, cols, rows, gap, jitter) => {
  const out = [];
  for (let r = 0; r < rows; r++) for (let c = 0; c < cols; c++) {
    const j = jitter ? [(((r * 7 + c * 13) % 5) - 2) * jitter, (((r * 11 + c * 3) % 5) - 2) * jitter] : [0, 0];
    out.push(<circle key={`${x0}${r}${c}`} cx={x0 + c * gap + j[0]} cy={y0 + r * gap + j[1]} r={7} fill="#fff" stroke={K} strokeWidth={1.8} />);
  }
  return out;
};

const States = () => (
  <Svg w={520} h={210} label="Particle arrangement in a solid, a liquid and a gas">
    <rect x={14} y={30} width={150} height={130} fill="none" stroke={K} />
    {dots(40, 55, 5, 5, 22, 0)}
    <T x={89} y={185}>solid</T>
    <T x={89} y={199} size={11}>regular, close, vibrate</T>
    <rect x={185} y={30} width={150} height={130} fill="none" stroke={K} />
    {dots(205, 60, 5, 4, 24, 5)}
    <T x={260} y={185}>liquid</T>
    <T x={260} y={199} size={11}>irregular, close, move past</T>
    <rect x={356} y={30} width={150} height={130} fill="none" stroke={K} />
    {[[385, 55], [450, 70], [480, 120], [400, 110], [430, 145], [372, 140], [470, 48]].map(([x, y]) => <circle key={`${x}${y}`} cx={x} cy={y} r={7} fill="#fff" stroke={K} strokeWidth={1.8} />)}
    <T x={431} y={185}>gas</T>
    <T x={431} y={199} size={11}>far apart, fast, random</T>
  </Svg>
);

const Convection = () => (
  <Svg w={520} h={250} label="Convection current in a beaker heated from below at the left">
    <path d="M150 40 L150 190 Q150 210 170 210 L350 210 Q370 210 370 190 L370 40" fill="#e8f1fb" stroke={K} strokeWidth={2.5} />
    <path d="M190 190 C170 150 170 90 200 60 C230 40 290 40 320 60 C345 90 345 150 325 190" fill="none" stroke={K} strokeWidth={2} markerEnd="url(#ah)" />
    <T x={250} y={120} size={12}>warm water rises</T>
    <T x={250} y={134} size={12}>(less dense)</T>
    <T x={385} y={110} size={12} anchor="start">cool water sinks</T>
    <T x={385} y={124} size={12} anchor="start">(more dense)</T>
    <polygon points="160,226 190,216 220,226 190,246" fill="#f59e0b" stroke={K} strokeWidth={1.5} />
    <T x={235} y={242} anchor="start" size={12}>heat source</T>
  </Svg>
);

const WaveParts = () => (
  <Svg w={520} h={250} label="Transverse wave showing wavelength and amplitude">
    <L x1={40} y1={125} x2={500} y2={125} dash="5 4" w={1} />
    <path d="M60 125 C90 50 130 50 160 125 C190 200 230 200 260 125 C290 50 330 50 360 125 C390 200 430 200 460 125" fill="none" stroke={K} strokeWidth={2.5} />
    <L x1={110} y1={125} x2={110} y2={70} arrow w={1.5} />
    <L x1={166} y1={98} x2={114} y2={98} w={1} />
    <T x={170} y={102} anchor="start">amplitude</T>
    <L x1={110} y1={30} x2={310} y2={30} arrow w={1.5} />
    <L x1={310} y1={30} x2={110} y2={30} arrow w={1.5} />
    <T x={210} y={22}>wavelength λ</T>
    <L x1={110} y1={34} x2={110} y2={68} dash="3 3" w={1} />
    <L x1={310} y1={34} x2={310} y2={68} dash="3 3" w={1} />
    <T x={126} y={66} anchor="start" size={12}>crest</T>
    <T x={210} y={206} size={12}>trough</T>
    <T x={38} y={118} anchor="start" size={11}>rest line</T>
    <L x1={400} y1={235} x2={500} y2={235} arrow />
    <T x={390} y={239} anchor="end" size={12}>direction of travel</T>
  </Svg>
);

const Longitudinal = () => (
  <Svg w={520} h={170} label="Longitudinal wave with compressions and rarefactions">
    {[30, 60, 80, 100, 130, 190, 230, 250, 270, 310, 370, 410, 428, 446, 480].map((x) => <line key={x} x1={x} y1={50} x2={x} y2={110} stroke={K} strokeWidth={2} />)}
    <T x={90} y={36}>compression</T>
    <T x={170} y={134} size={12}>rarefaction</T>
    <T x={260} y={36}>compression</T>
    <T x={350} y={134} size={12}>rarefaction</T>
    <T x={436} y={36}>compression</T>
    <L x1={150} y1={150} x2={380} y2={150} arrow w={1.5} />
    <T x={265} y={166} size={11}>direction of wave travel (vibration is parallel to this)</T>
  </Svg>
);

const Reflection = () => (
  <Svg w={520} h={260} label="Reflection at a plane mirror, angle of incidence equals angle of reflection">
    <L x1={60} y1={200} x2={460} y2={200} w={3} />
    {[80, 120, 160, 200, 240, 280, 320, 360, 400, 440].map((x) => <line key={x} x1={x} y1={200} x2={x - 14} y2={216} stroke={K} strokeWidth={1.5} />)}
    <L x1={260} y1={200} x2={260} y2={40} dash="5 4" w={1.5} />
    <T x={268} y={52} anchor="start">normal</T>
    <L x1={130} y1={64} x2={258} y2={198} arrow />
    <L x1={262} y1={198} x2={390} y2={64} arrow />
    <T x={150} y={56}>incident ray</T>
    <T x={376} y={56}>reflected ray</T>
    <path d="M260 140 A60 60 0 0 0 218 158" fill="none" stroke={K} strokeWidth={1.5} />
    <T x={228} y={134} size={12}>i</T>
    <path d="M260 140 A60 60 0 0 1 302 158" fill="none" stroke={K} strokeWidth={1.5} />
    <T x={290} y={134} size={12}>r</T>
    <T x={260} y={244}>angle i = angle r (measured from the normal)</T>
  </Svg>
);

const Refraction = () => (
  <Svg w={520} h={290} label="Refraction at an air-glass boundary: ray bends towards the normal">
    <rect x={30} y={150} width={460} height={110} fill="#e6f0fa" stroke={K} strokeWidth={2} />
    <T x={80} y={242} size={12}>glass</T>
    <T x={80} y={30} size={12}>air</T>
    <L x1={260} y1={20} x2={260} y2={270} dash="5 4" w={1.5} />
    <T x={268} y={30} anchor="start">normal</T>
    <L x1={130} y1={46} x2={258} y2={148} arrow />
    <L x1={262} y1={152} x2={330} y2={262} arrow />
    <T x={150} y={40} size={12}>incident ray</T>
    <T x={350} y={236} anchor="start" size={12}>refracted ray</T>
    <T x={222} y={108} size={12}>i</T>
    <T x={278} y={200} size={12}>r</T>
    <T x={270} y={282} size={12}>slower in glass: ray bends towards the normal, so r &lt; i</T>
  </Svg>
);

const TotalInternal = () => (
  <Svg w={520} h={270} label="Light in glass meeting an air boundary at angles below, equal to and above the critical angle">
    <rect x={20} y={120} width={480} height={110} fill="#e6f0fa" stroke={K} strokeWidth={2} />
    <T x={36} y={142} anchor="start" size={12}>glass</T>
    <T x={36} y={106} anchor="start" size={12}>air</T>
    {[90, 260, 430].map((x) => <L key={x} x1={x} y1={40} x2={x} y2={215} dash="5 4" w={1} />)}
    <L x1={30} y1={195} x2={88} y2={122} arrow />
    <L x1={92} y1={118} x2={160} y2={34} arrow />
    <T x={90} y={256} size={12}>i &lt; c: refracts out</T>
    <L x1={190} y1={200} x2={258} y2={122} arrow />
    <L x1={262} y1={119} x2={345} y2={119} arrow />
    <T x={260} y={256} size={12}>i = c: along boundary</T>
    <L x1={340} y1={170} x2={428} y2={122} arrow />
    <L x1={432} y1={122} x2={500} y2={165} arrow />
    <T x={430} y={256} size={12}>i &gt; c: total reflection</T>
  </Svg>
);

const Lens = () => (
  <Svg w={520} h={250} label="Converging lens bringing parallel rays to the principal focus">
    <L x1={20} y1={125} x2={500} y2={125} w={1} />
    <path d="M260 40 Q290 125 260 210 Q230 125 260 40 Z" fill="#e6f0fa" stroke={K} strokeWidth={2} />
    <L x1={30} y1={80} x2={258} y2={80} arrow w={1.5} />
    <L x1={262} y1={80} x2={420} y2={125} arrow w={1.5} />
    <L x1={30} y1={170} x2={258} y2={170} arrow w={1.5} />
    <L x1={262} y1={170} x2={420} y2={125} arrow w={1.5} />
    <circle cx={420} cy={125} r={4} fill={K} />
    <T x={440} y={98}>principal focus F</T>
    <L x1={262} y1={236} x2={418} y2={236} arrow w={1.5} />
    <L x1={418} y1={236} x2={262} y2={236} arrow w={1.5} />
    <T x={340} y={232} size={12}>focal length f</T>
    <T x={150} y={64} size={12}>parallel rays</T>
    <T x={260} y={30} size={12}>converging lens</T>
  </Svg>
);

const Spectrum = () => (
  <Svg w={560} h={170} label="Electromagnetic spectrum from radio waves to gamma rays">
    <L x1={540} y1={22} x2={20} y2={22} arrow />
    <T x={280} y={14} size={12}>increasing wavelength</T>
    {[['radio', '#e5e7eb'], ['micro', '#d1d5db'], ['infra-red', '#fca5a5'], ['visible', '#fde68a'], ['UV', '#c4b5fd'], ['X-rays', '#93c5fd'], ['γ-rays', '#6ee7b7']].map(([n, c], i) => (
      <g key={n}>
        <rect x={20 + i * 74} y={38} width={74} height={50} fill={c} stroke={K} strokeWidth={1.5} />
        <T x={57 + i * 74} y={69} size={12}>{n}</T>
      </g>
    ))}
    <L x1={20} y1={104} x2={540} y2={104} arrow />
    <T x={280} y={124} size={12}>increasing frequency and photon energy</T>
    <T x={280} y={152} size={11}>all are transverse and travel at 3.0 × 10⁸ m/s in a vacuum</T>
  </Svg>
);

const CircuitSymbols = () => (
  <Svg w={560} h={260} label="Common circuit symbols">
    <g transform="translate(20,20)">
      <T x={30} y={0} size={12}>cell</T><L x1={0} y1={25} x2={22} y2={25} /><L x1={22} y1={10} x2={22} y2={40} /><L x1={34} y1={17} x2={34} y2={33} w={4} /><L x1={34} y1={25} x2={56} y2={25} />
      <T x={130} y={0} size={12}>battery</T><L x1={90} y1={25} x2={104} y2={25} /><L x1={104} y1={10} x2={104} y2={40} /><L x1={114} y1={17} x2={114} y2={33} w={4} /><L x1={124} y1={10} x2={124} y2={40} /><L x1={134} y1={17} x2={134} y2={33} w={4} /><L x1={134} y1={25} x2={160} y2={25} />
      <T x={230} y={0} size={12}>switch (open)</T><L x1={190} y1={25} x2={210} y2={25} /><circle cx={212} cy={25} r={3} fill={K} /><L x1={214} y1={25} x2={240} y2={10} /><circle cx={252} cy={25} r={3} fill={K} /><L x1={254} y1={25} x2={276} y2={25} />
      <T x={340} y={0} size={12}>lamp</T><L x1={310} y1={25} x2={325} y2={25} /><circle cx={340} cy={25} r={15} fill="none" stroke={K} strokeWidth={2} /><L x1={330} y1={15} x2={350} y2={35} w={1.8} /><L x1={350} y1={15} x2={330} y2={35} w={1.8} /><L x1={355} y1={25} x2={370} y2={25} />
      <T x={430} y={0} size={12}>resistor</T><L x1={395} y1={25} x2={410} y2={25} /><rect x={410} y={15} width={40} height={20} fill="none" stroke={K} strokeWidth={2} /><L x1={450} y1={25} x2={465} y2={25} />
    </g>
    <g transform="translate(20,110)">
      <T x={30} y={0} size={12}>variable resistor</T><L x1={0} y1={25} x2={14} y2={25} /><rect x={14} y={15} width={40} height={20} fill="none" stroke={K} strokeWidth={2} /><L x1={54} y1={25} x2={68} y2={25} /><L x1={14} y1={44} x2={54} y2={6} arrow w={1.8} />
      <T x={130} y={0} size={12}>ammeter</T><L x1={95} y1={25} x2={110} y2={25} /><circle cx={125} cy={25} r={15} fill="none" stroke={K} strokeWidth={2} /><T x={125} y={30} bold>A</T><L x1={140} y1={25} x2={155} y2={25} />
      <T x={230} y={0} size={12}>voltmeter</T><L x1={195} y1={25} x2={210} y2={25} /><circle cx={225} cy={25} r={15} fill="none" stroke={K} strokeWidth={2} /><T x={225} y={30} bold>V</T><L x1={240} y1={25} x2={255} y2={25} />
      <T x={340} y={0} size={12}>diode</T><L x1={300} y1={25} x2={325} y2={25} /><polygon points="325,10 325,40 350,25" fill="none" stroke={K} strokeWidth={2} /><L x1={350} y1={10} x2={350} y2={40} /><L x1={350} y1={25} x2={375} y2={25} />
      <T x={455} y={0} size={12}>fuse</T><L x1={415} y1={25} x2={430} y2={25} /><rect x={430} y={17} width={36} height={16} fill="none" stroke={K} strokeWidth={2} /><L x1={430} y1={25} x2={466} y2={25} w={1.4} /><L x1={466} y1={25} x2={481} y2={25} />
    </g>
    <g transform="translate(20,190)">
      <T x={84} y={30} size={12} anchor="start">LDR (light-dependent resistor)</T><L x1={0} y1={25} x2={14} y2={25} /><rect x={14} y={15} width={40} height={20} fill="none" stroke={K} strokeWidth={2} /><L x1={54} y1={25} x2={68} y2={25} /><circle cx={34} cy={25} r={22} fill="none" stroke={K} strokeWidth={1.4} /><L x1={0} y1={0} x2={14} y2={10} arrow w={1.4} />
      <T x={230} y={0} size={12}>thermistor</T><L x1={190} y1={25} x2={204} y2={25} /><rect x={204} y={15} width={40} height={20} fill="none" stroke={K} strokeWidth={2} /><L x1={244} y1={25} x2={258} y2={25} /><polyline points="198,44 214,44 244,6" fill="none" stroke={K} strokeWidth={1.8} />
    </g>
  </Svg>
);

const SeriesParallel = () => (
  <Svg w={560} h={230} label="Series circuit and parallel circuit with two lamps">
    <T x={130} y={20} bold>series</T>
    <rect x={40} y={40} width={180} height={140} fill="none" stroke={K} strokeWidth={2} />
    <rect x={100} y={32} width={60} height={16} fill="#fff" stroke="none" />
    <L x1={116} y1={28} x2={116} y2={52} /><L x1={124} y1={34} x2={124} y2={46} w={4} />
    <rect x={55} y={95} width={30} height={30} fill="#fff" stroke="none" /><circle cx={70} cy={110} r={14} fill="#fff" stroke={K} strokeWidth={2} /><L x1={60} y1={100} x2={80} y2={120} w={1.6} /><L x1={80} y1={100} x2={60} y2={120} w={1.6} />
    <circle cx={190} cy={110} r={14} fill="#fff" stroke={K} strokeWidth={2} /><L x1={180} y1={100} x2={200} y2={120} w={1.6} /><L x1={200} y1={100} x2={180} y2={120} w={1.6} />
    <T x={130} y={205} size={12}>one path: same current everywhere;</T>
    <T x={130} y={220} size={12}>p.d. is shared between components</T>
    <T x={400} y={20} bold>parallel</T>
    <rect x={320} y={40} width={160} height={140} fill="none" stroke={K} strokeWidth={2} />
    <L x1={390} y1={40} x2={390} y2={180} w={2} /><L x1={450} y1={40} x2={450} y2={180} w={2} />
    <circle cx={390} cy={110} r={14} fill="#fff" stroke={K} strokeWidth={2} /><L x1={380} y1={100} x2={400} y2={120} w={1.6} /><L x1={400} y1={100} x2={380} y2={120} w={1.6} />
    <circle cx={450} cy={110} r={14} fill="#fff" stroke={K} strokeWidth={2} /><L x1={440} y1={100} x2={460} y2={120} w={1.6} /><L x1={460} y1={100} x2={440} y2={120} w={1.6} />
    <circle cx={390} cy={40} r={3.5} fill={K} /><circle cx={390} cy={180} r={3.5} fill={K} /><circle cx={450} cy={40} r={3.5} fill={K} /><circle cx={450} cy={180} r={3.5} fill={K} />
    <T x={400} y={205} size={12}>branches: current splits and re-joins;</T>
    <T x={400} y={220} size={12}>same p.d. across every branch</T>
  </Svg>
);

const IVGraphs = () => (
  <Svg w={560} h={230} label="Current-voltage graphs for a resistor, a filament lamp and a diode">
    {[[20, 'ohmic resistor'], [200, 'filament lamp'], [380, 'diode']].map(([x, name]) => (
      <g key={name} transform={`translate(${x},10)`}>
        <Axes x0={28} y0={150} x1={150} y1={10} xl="V" yl="I" ylx={36} />
        <T x={90} y={186} size={12}>{name}</T>
      </g>
    ))}
    <L x1={48} y1={160} x2={150} y2={40} w={2.5} />
    <path d="M228 160 C250 90 270 60 340 40" fill="none" stroke={K} strokeWidth={2.5} />
    <path d="M408 160 L460 160 C470 160 480 150 500 80 L520 30" fill="none" stroke={K} strokeWidth={2.5} />
    <T x={100} y={215} size={11}>straight line through 0: R constant</T>
    <T x={285} y={215} size={11}>curve flattens: R rises as it heats</T>
    <T x={465} y={215} size={11}>current flows one way only</T>
  </Svg>
);

const MagnetField = () => (
  <Svg w={520} h={270} label="Magnetic field lines around a bar magnet, from the north pole to the south pole">
    {[[100, 30], [80, 62]].map(([d, top]) => (
      <g key={top}>
        <path d={`M192 118 C${192 - d} 118 ${192 - d} ${top} 265 ${top} C${338 + d} ${top} ${338 + d} 118 338 118`} fill="none" stroke={K} strokeWidth={1.8} markerEnd="url(#ah)" />
        <path d={`M192 142 C${192 - d} 142 ${192 - d} ${270 - top - 30} 265 ${270 - top - 30} C${338 + d} ${270 - top - 30} ${338 + d} 142 338 142`} fill="none" stroke={K} strokeWidth={1.8} markerEnd="url(#ah)" />
      </g>
    ))}
    <rect x={190} y={115} width={75} height={28} fill="#fca5a5" stroke={K} strokeWidth={2} /><T x={227} y={134} bold>N</T>
    <rect x={265} y={115} width={75} height={28} fill="#93c5fd" stroke={K} strokeWidth={2} /><T x={302} y={134} bold>S</T>
    <T x={260} y={266} size={12}>field lines leave the N pole and enter the S pole; closer lines = stronger field</T>
  </Svg>
);

const Transformer = () => (
  <Svg w={520} h={240} label="A transformer with primary coil, soft iron core and secondary coil">
    <rect x={150} y={50} width={220} height={140} fill="none" stroke={K} strokeWidth={14} />
    <rect x={150} y={50} width={220} height={140} fill="none" stroke="#c7d2fe" strokeWidth={10} />
    {[70, 90, 110, 130, 150].map((y) => <ellipse key={y} cx={150} cy={y + 8} rx={26} ry={7} fill="none" stroke={K} strokeWidth={2} />)}
    {[70, 90, 110, 130, 150].map((y) => <ellipse key={`s${y}`} cx={370} cy={y + 8} rx={26} ry={7} fill="none" stroke={K} strokeWidth={2} />)}
    <T x={60} y={118} size={12}>primary</T><T x={60} y={132} size={12}>coil (Np)</T>
    <T x={460} y={118} size={12}>secondary</T><T x={460} y={132} size={12}>coil (Ns)</T>
    <T x={260} y={125} size={12}>soft-iron core</T>
    <T x={260} y={222} bold>Vp / Vs = Np / Ns</T>
  </Svg>
);

const Atom = () => (
  <Svg w={520} h={250} label="Nuclear model of the atom">
    <circle cx={170} cy={125} r={92} fill="none" stroke={K} strokeWidth={1.4} strokeDasharray="4 4" />
    <circle cx={170} cy={125} r={16} fill="#fff" stroke={K} strokeWidth={2} />
    {[[164, 119], [175, 122], [167, 131], [174, 113]].map(([x, y], i) => <circle key={x} cx={x} cy={y} r={4.5} fill={i % 2 ? '#fff' : '#fca5a5'} stroke={K} strokeWidth={1.2} />)}
    {[[170, 33], [260, 130], [100, 190]].map(([x, y]) => <circle key={x} cx={x} cy={y} r={5} fill={K} />)}
    <L x1={186} y1={112} x2={285} y2={70} w={1} />
    <T x={290} y={62} anchor="start" size={12}>nucleus: protons (+) and neutrons (0),</T>
    <T x={290} y={78} anchor="start" size={12}>tiny but almost all of the mass</T>
    <L x1={262} y1={133} x2={290} y2={165} w={1} />
    <T x={294} y={168} anchor="start" size={12}>electrons (−) orbit the nucleus;</T>
    <T x={294} y={184} anchor="start" size={12}>the rest of the atom is empty space</T>
  </Svg>
);

const DecayCurve = () => (
  <Svg w={520} h={250} label="Radioactive decay curve showing half-life">
    <Axes x0={60} y0={210} x1={500} y1={20} xl="time" yl="activity" />
    <path d="M60 40 C100 100 140 140 200 168 C250 190 330 202 470 207" fill="none" stroke={K} strokeWidth={2.5} />
    <L x1={60} y1={40} x2={500} y2={40} w={0.1} />
    <L x1={60} y1={125} x2={150} y2={125} dash="4 4" w={1} /><L x1={150} y1={125} x2={150} y2={210} dash="4 4" w={1} />
    <L x1={60} y1={168} x2={240} y2={168} dash="4 4" w={1} /><L x1={240} y1={168} x2={240} y2={210} dash="4 4" w={1} />
    <T x={52} y={44} anchor="end" size={11}>A</T><T x={52} y={129} anchor="end" size={11}>A/2</T><T x={52} y={172} anchor="end" size={11}>A/4</T>
    <T x={150} y={226} size={11}>1 half-life</T><T x={240} y={226} size={11}>2 half-lives</T>
    <T x={320} y={110} anchor="start" size={12}>half-life = time for the activity</T>
    <T x={320} y={126} anchor="start" size={12}>(or number of nuclei) to halve</T>
  </Svg>
);

const Penetration = () => (
  <Svg w={520} h={240} label="Penetration of alpha, beta and gamma radiation through paper, aluminium and lead">
    <rect x={190} y={30} width={14} height={160} fill="#fff" stroke={K} strokeWidth={2} /><T x={197} y={210} size={12}>paper</T>
    <rect x={300} y={30} width={22} height={160} fill="#d1d5db" stroke={K} strokeWidth={2} /><T x={311} y={210} size={12}>few mm aluminium</T>
    <rect x={410} y={30} width={50} height={160} fill="#6b7280" stroke={K} strokeWidth={2} /><T x={435} y={210} size={12}>thick lead</T>
    <T x={60} y={66} size={13} bold>α</T><L x1={80} y1={62} x2={188} y2={62} arrow />
    <T x={60} y={112} size={13} bold>β</T><L x1={80} y1={108} x2={298} y2={108} arrow />
    <T x={60} y={158} size={13} bold>γ</T><L x1={80} y1={154} x2={408} y2={154} arrow />
    <T x={260} y={20} size={12}>α stopped by paper · β stopped by aluminium · γ reduced by thick lead</T>
  </Svg>
);

const Solar = () => {
  const Box = ({ x, y, w, children }) => (
    <g><rect x={x} y={y} width={w} height={32} rx={6} fill="#fff" stroke={K} strokeWidth={1.6} /><T x={x + w / 2} y={y + 21} size={11}>{children}</T></g>
  );
  return (
    <Svg w={520} h={250} label="Life cycle of a star: low-mass and high-mass routes">
      <Box x={20} y={14} w={84}>nebula</Box><L x1={104} y1={30} x2={118} y2={30} arrow w={1.4} />
      <Box x={120} y={14} w={84}>protostar</Box><L x1={204} y1={30} x2={218} y2={30} arrow w={1.4} />
      <Box x={220} y={14} w={110}>main sequence</Box>
      <L x1={275} y1={46} x2={275} y2={66} w={1.4} /><L x1={275} y1={66} x2={20} y2={66} w={1.4} />
      <L x1={90} y1={66} x2={90} y2={88} arrow w={1.4} />
      <L x1={20} y1={66} x2={20} y2={178} w={1.4} /><L x1={20} y1={178} x2={36} y2={178} arrow w={1.4} />
      <T x={110} y={82} anchor="start" size={12} bold>star of about the Sun’s mass</T>
      <Box x={36} y={92} w={90}>red giant</Box><L x1={126} y1={108} x2={140} y2={108} arrow w={1.4} />
      <Box x={142} y={92} w={120}>planetary nebula</Box><L x1={262} y1={108} x2={276} y2={108} arrow w={1.4} />
      <Box x={278} y={92} w={100}>white dwarf</Box>
      <T x={110} y={162} anchor="start" size={12} bold>star much more massive than the Sun</T>
      <Box x={36} y={166} w={110}>red supergiant</Box><L x1={146} y1={182} x2={160} y2={182} arrow w={1.4} />
      <Box x={162} y={166} w={100}>supernova</Box><L x1={262} y1={182} x2={276} y2={182} arrow w={1.4} />
      <Box x={278} y={166} w={160}>neutron star or black hole</Box>
    </Svg>
  );
};

export const SVG_FIGS = {
  distanceTime: DistanceTime,
  speedTime: SpeedTime,
  terminal: FallingTerminal,
  momentsBeam: MomentsBeam,
  loadExtension: LoadExtension,
  sankey: Sankey,
  heatingCurve: HeatingCurve,
  states: States,
  convection: Convection,
  waveParts: WaveParts,
  longitudinal: Longitudinal,
  reflection: Reflection,
  refraction: Refraction,
  totalInternal: TotalInternal,
  lens: Lens,
  spectrum: Spectrum,
  circuitSymbols: CircuitSymbols,
  seriesParallel: SeriesParallel,
  ivGraphs: IVGraphs,
  magnetField: MagnetField,
  transformer: Transformer,
  atom: Atom,
  decayCurve: DecayCurve,
  penetration: Penetration,
  solar: Solar,
};
