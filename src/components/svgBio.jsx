// Original vector diagrams for Biology, drawn in the plain black-line style of exam papers.
// Used as fig: { svg: 'name', caption } on cards and questions.
import { Svg, T, L, K } from './svgFigs.jsx';

const GREEN = '#bbf7d0';
const PINK = '#fecdd3';
const BLUE = '#dbeafe';
const YEL = '#fef9c3';

/** A label with a leader line from (px, py) on the diagram to text at (tx, ty). */
const Lab = ({ px, py, tx, ty, children }) => (
  <g>
    <L x1={px} y1={py} x2={tx - 4} y2={ty - 4} w={1.2} />
    <circle cx={px} cy={py} r={2} fill={K} />
    <T x={tx} y={ty} anchor="start" size={12}>{children}</T>
  </g>
);

const Mito = ({ cx, cy, rot = 0 }) => (
  <g transform={`rotate(${rot} ${cx} ${cy})`}>
    <ellipse cx={cx} cy={cy} rx={20} ry={11} fill={PINK} stroke={K} strokeWidth={1.5} />
    <path d={`M${cx - 13} ${cy} q4 -7 8 0 t8 0 t8 0`} fill="none" stroke={K} strokeWidth={1.1} />
  </g>
);

const Ribos = ({ pts }) => pts.map(([x, y], i) => <circle key={i} cx={x} cy={y} r={2.2} fill={K} />);

/* ---------- Animal cell ---------- */
const AnimalCell = () => (
  <Svg w={560} h={290} label="Diagram of an animal cell showing the cell membrane, cytoplasm, nucleus, mitochondria and ribosomes">
    <ellipse cx={190} cy={145} rx={150} ry={112} fill={YEL} stroke={K} strokeWidth={2.5} />
    <circle cx={175} cy={135} r={42} fill="#fff" stroke={K} strokeWidth={2} />
    <circle cx={168} cy={130} r={11} fill="#d1d5db" stroke={K} strokeWidth={1.2} />
    <Mito cx={270} cy={105} rot={-25} />
    <Mito cx={115} cy={210} rot={20} />
    <Mito cx={262} cy={195} rot={60} />
    <Ribos pts={[[105, 120], [120, 95], [225, 150], [230, 225], [160, 215], [90, 165], [215, 85], [250, 150]]} />
    <Lab px={284} py={98} tx={375} ty={60}>mitochondrion</Lab>
    <Lab px={216} py={118} tx={375} ty={105}>nucleus</Lab>
    <Lab px={338} py={145} tx={375} ty={150}>cell membrane</Lab>
    <Lab px={250} py={150} tx={375} ty={195}>ribosomes (dots)</Lab>
    <Lab px={235} py={235} tx={375} ty={240}>cytoplasm</Lab>
  </Svg>
);

/* ---------- Plant cell ---------- */
const PlantCell = () => (
  <Svg w={560} h={290} label="Diagram of a plant cell showing the cell wall, cell membrane, cytoplasm, nucleus, large vacuole, chloroplasts and mitochondria">
    <rect x={40} y={25} width={310} height={240} rx={10} fill="#fff" stroke={K} strokeWidth={6} />
    <rect x={48} y={33} width={294} height={224} rx={6} fill={YEL} stroke={K} strokeWidth={1.5} />
    <rect x={120} y={60} width={185} height={170} rx={40} fill={BLUE} stroke={K} strokeWidth={1.5} />
    <circle cx={85} cy={150} r={24} fill="#fff" stroke={K} strokeWidth={2} />
    <circle cx={82} cy={147} r={7} fill="#d1d5db" stroke={K} strokeWidth={1} />
    {[[75, 55], [200, 45], [320, 80], [325, 200], [235, 245], [100, 240]].map(([x, y], i) => (
      <ellipse key={i} cx={x} cy={y} rx={17} ry={9} fill={GREEN} stroke={K} strokeWidth={1.4} />
    ))}
    <Mito cx={78} cy={205} rot={30} />
    <Ribos pts={[[110, 100], [112, 190], [330, 140], [140, 40], [260, 250]]} />
    <Lab px={327} py={76} tx={385} ty={40}>chloroplast</Lab>
    <Lab px={345} py={115} tx={385} ty={85}>cell wall</Lab>
    <Lab px={300} py={130} tx={385} ty={130}>vacuole</Lab>
    <Lab px={341} py={165} tx={385} ty={175}>cell membrane</Lab>
    <Lab px={105} py={140} tx={385} ty={220}>nucleus</Lab>
    <Lab px={95} py={208} tx={385} ty={268}>mitochondrion</Lab>
  </Svg>
);

/* ---------- Bacterial cell ---------- */
const BacterialCell = () => (
  <Svg w={560} h={250} label="Diagram of a bacterial cell showing the cell wall, cell membrane, cytoplasm, circular DNA, plasmids and ribosomes">
    <rect x={40} y={55} width={320} height={140} rx={70} fill="#fff" stroke={K} strokeWidth={5} />
    <rect x={48} y={63} width={304} height={124} rx={62} fill={YEL} stroke={K} strokeWidth={1.5} />
    <path d="M110 125 q10 -45 50 -30 t50 5 q25 35 -10 45 t-50 -5 q-35 25 -40 -15z" fill="none" stroke={K} strokeWidth={2.2} />
    <circle cx={265} cy={105} r={9} fill="none" stroke={K} strokeWidth={2} />
    <circle cx={290} cy={150} r={8} fill="none" stroke={K} strokeWidth={2} />
    <Ribos pts={[[85, 100], [95, 150], [230, 165], [240, 85], [310, 120], [150, 165], [200, 82]]} />
    <Lab px={165} py={90} tx={395} ty={55}>circular DNA</Lab>
    <Lab px={355} py={115} tx={395} ty={100}>cell wall</Lab>
    <Lab px={349} py={135} tx={395} ty={145}>cell membrane</Lab>
    <Lab px={290} py={150} tx={395} ty={190}>plasmid</Lab>
    <Lab px={300} py={175} tx={395} ty={235}>cytoplasm</Lab>
  </Svg>
);

/* ---------- Leaf section ---------- */
const LeafSection = () => (
  <Svg w={560} h={300} label="Section through a leaf showing cuticle, upper epidermis, palisade mesophyll, spongy mesophyll with air spaces, xylem and phloem in a vascular bundle, lower epidermis, guard cells and a stoma">
    <L x1={30} y1={30} x2={400} y2={30} w={3} />
    {Array.from({ length: 12 }, (_, i) => <rect key={`u${i}`} x={30 + i * 31} y={33} width={31} height={24} fill="#fff" stroke={K} strokeWidth={1.4} />)}
    {Array.from({ length: 12 }, (_, i) => (
      <g key={`p${i}`}>
        <rect x={32 + i * 31} y={60} width={26} height={62} rx={5} fill={GREEN} stroke={K} strokeWidth={1.3} />
        <circle cx={40 + i * 31} cy={75} r={3} fill="#16a34a" /><circle cx={50 + i * 31} cy={90} r={3} fill="#16a34a" /><circle cx={42 + i * 31} cy={108} r={3} fill="#16a34a" />
      </g>
    ))}
    {[[60, 140], [100, 155], [140, 135], [185, 160], [225, 140], [270, 160], [320, 140], [365, 155], [90, 180], [160, 182], [250, 182], [345, 180]].map(([x, y], i) => (
      <ellipse key={`s${i}`} cx={x} cy={y} rx={20} ry={14} fill={GREEN} stroke={K} strokeWidth={1.3} />
    ))}
    <ellipse cx={210} cy={165} rx={34} ry={22} fill="#fff" stroke={K} strokeWidth={1.8} />
    <path d="M195 160 a14 14 0 0 1 28 0z" fill={BLUE} stroke={K} strokeWidth={1.2} />
    <path d="M195 172 a14 14 0 0 0 28 0z" fill="#fde68a" stroke={K} strokeWidth={1.2} />
    {Array.from({ length: 12 }, (_, i) => (i === 7 ? null : <rect key={`l${i}`} x={30 + i * 31} y={196} width={31} height={22} fill="#fff" stroke={K} strokeWidth={1.4} />))}
    <path d="M247 196 q9 -2 14 11 q-5 13 -14 11z" fill={GREEN} stroke={K} strokeWidth={1.3} />
    <path d="M277 196 q-9 -2 -14 11 q5 13 14 11z" fill={GREEN} stroke={K} strokeWidth={1.3} />
    <Lab px={370} py={30} tx={440} ty={28}>cuticle</Lab>
    <Lab px={370} py={45} tx={440} ty={58}>upper epidermis</Lab>
    <Lab px={365} py={90} tx={440} ty={88}>palisade mesophyll</Lab>
    <Lab px={340} py={138} tx={440} ty={118}>spongy mesophyll</Lab>
    <Lab px={300} py={152} tx={440} ty={148}>air space</Lab>
    <Lab px={225} py={158} tx={440} ty={178}>xylem</Lab>
    <Lab px={225} py={173} tx={440} ty={208}>phloem</Lab>
    <Lab px={350} py={207} tx={440} ty={238}>lower epidermis</Lab>
    <Lab px={252} py={212} tx={440} ty={268}>guard cell</Lab>
    <Lab px={262} py={207} tx={440} ty={288}>stoma</Lab>
  </Svg>
);

/* ---------- Plant cells in different solutions ---------- */
const CellBox = ({ cx, shrink, label, sub, vac }) => {
  const w = 130, h = 120, x = cx - w / 2, y = 30;
  const m = shrink;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={8} fill="#fff" stroke={K} strokeWidth={5} />
      <rect x={x + 6 + m} y={y + 6 + m} width={w - 12 - 2 * m} height={h - 12 - 2 * m} rx={10} fill={YEL} stroke={K} strokeWidth={1.4} />
      <rect x={x + 22 + m} y={y + 22 + m} width={w - 44 - 2 * m} height={h - 44 - 2 * m} rx={14} fill={BLUE} stroke={K} strokeWidth={1.2} />
      <T x={cx} y={y + h + 24} bold size={14}>{label}</T>
      <T x={cx} y={y + h + 42} size={11}>{sub}</T>
      <T x={cx} y={y + h + 58} size={11}>{vac}</T>
    </g>
  );
};

const OsmosisCells = () => (
  <Svg w={560} h={260} label="Three plant cells: a turgid cell in dilute solution, a flaccid cell in solution of equal concentration, and a plasmolysed cell in concentrated solution">
    <CellBox cx={95} shrink={0} label="Turgid" sub="in dilute solution" vac="water enters by osmosis" />
    <CellBox cx={280} shrink={9} label="Flaccid" sub="in solution of equal conc." vac="no net movement of water" />
    <CellBox cx={465} shrink={22} label="Plasmolysed" sub="in concentrated solution" vac="water leaves by osmosis" />
  </Svg>
);

/* ---------- Enzyme action ---------- */
/** Enzyme body with a curved notch (the active site) in its top edge. */
const Enz = ({ x, y, shape = 'fit' }) => (
  <path
    d={shape === 'fit'
      ? `M${x} ${y} h22 a14 14 0 0 0 26 0 h22 v40 h-70z`
      : `M${x} ${y} h18 l8 -8 h18 l8 8 h18 v40 h-70z`}
    fill={BLUE} stroke={K} strokeWidth={2}
  />
);
/** Substrate with a curved bottom that matches the notch; its top-left corner is at (x, y). */
const Sub = ({ x, y }) => (
  <path d={`M${x} ${y} h26 v14 a14 14 0 0 1 -26 0z`} fill="#fca5a5" stroke={K} strokeWidth={1.6} />
);
const EnzymeAction = () => (
  <Svg w={560} h={260} label="Enzyme action: the substrate fits the active site to form an enzyme-substrate complex and then products; a denatured enzyme has a changed active site and the substrate no longer fits">
    <T x={150} y={22} bold size={13}>Normal enzyme</T>
    <Enz x={20} y={80} />
    <Sub x={42} y={30} />
    <L x1={52} y1={62} x2={52} y2={72} arrow w={1.5} />
    <T x={55} y={148} size={11}>enzyme and substrate</T>
    <T x={55} y={163} size={10}>(complementary shapes)</T>
    <L x1={100} y1={105} x2={125} y2={105} arrow />
    <Enz x={135} y={80} />
    <Sub x={157} y={66} />
    <T x={170} y={148} size={11}>enzyme-substrate</T>
    <T x={170} y={163} size={11}>complex</T>
    <L x1={215} y1={105} x2={240} y2={105} arrow />
    <Enz x={250} y={80} />
    <rect x={262} y={40} width={14} height={14} fill="#fca5a5" stroke={K} strokeWidth={1.5} />
    <rect x={292} y={48} width={14} height={14} fill="#fca5a5" stroke={K} strokeWidth={1.5} />
    <T x={285} y={148} size={11}>enzyme and products</T>
    <T x={285} y={163} size={10}>(enzyme is unchanged)</T>
    <rect x={375} y={10} width={175} height={170} rx={8} fill="none" stroke={K} strokeWidth={1.2} strokeDasharray="5 4" />
    <T x={462} y={30} bold size={13}>Denatured enzyme</T>
    <Enz x={427} y={98} shape="bent" />
    <Sub x={449} y={50} />
    <L x1={437} y1={62} x2={475} y2={92} w={2.4} stroke="#dc2626" />
    <L x1={475} y1={62} x2={437} y2={92} w={2.4} stroke="#dc2626" />
    <T x={462} y={165} size={11}>active site shape changed: no fit</T>
    <T x={280} y={215} size={12}>The active site fits only its own substrate (specificity). High temperature or a wrong pH</T>
    <T x={280} y={232} size={12}>changes the shape of the active site, so the enzyme is denatured and cannot work.</T>
  </Svg>
);

/** A label to the LEFT of the diagram: text ends at (tx, ty). */
const LabL = ({ px, py, tx, ty, children }) => (
  <g>
    <L x1={px} y1={py} x2={tx + 4} y2={ty - 4} w={1.2} />
    <circle cx={px} cy={py} r={2} fill={K} />
    <T x={tx} y={ty} anchor="end" size={12}>{children}</T>
  </g>
);

const RED = '#fca5a5';
const BLU = '#93c5fd';

/* ---------- Digestive system ---------- */
const DigestiveSystem = () => (
  <Svg w={560} h={330} label="Diagram of the human digestive system showing the mouth, salivary glands, oesophagus, liver, gall bladder, stomach, pancreas, small intestine, large intestine, rectum and anus">
    <ellipse cx={200} cy={30} rx={34} ry={15} fill={PINK} stroke={K} strokeWidth={1.8} />
    <ellipse cx={150} cy={50} rx={12} ry={8} fill={YEL} stroke={K} strokeWidth={1.5} />
    <path d="M200 46 V112" stroke={K} strokeWidth={9} fill="none" strokeLinecap="round" />
    <path d="M200 46 V112" stroke={PINK} strokeWidth={5} fill="none" strokeLinecap="round" />
    <path d="M205 105 q55 -5 55 40 q0 38 -42 36 q-28 -2 -20 -34 z" fill={PINK} stroke={K} strokeWidth={1.8} />
    <path d="M110 125 q-30 5 -30 35 q0 30 40 30 q60 -5 80 -35 q-30 -20 -90 -30z" fill="#e9b2a0" stroke={K} strokeWidth={1.8} />
    <ellipse cx={175} cy={196} rx={12} ry={9} fill={GREEN} stroke={K} strokeWidth={1.6} />
    <ellipse cx={232} cy={198} rx={34} ry={9} fill={YEL} stroke={K} strokeWidth={1.6} />
    <rect x={150} y={208} width={140} height={90} rx={6} fill="none" stroke={K} strokeWidth={9} strokeLinejoin="round" />
    <rect x={150} y={208} width={140} height={90} rx={6} fill="none" stroke="#fbbf24" strokeWidth={5} strokeLinejoin="round" />
    <path d="M178 222 h82 q12 0 0 12 h-82 q-12 0 0 12 h82 q12 0 0 12 h-82 q-12 0 0 12 h82" fill="none" stroke={K} strokeWidth={5} />
    <path d="M178 222 h82 q12 0 0 12 h-82 q-12 0 0 12 h82 q12 0 0 12 h-82 q-12 0 0 12 h82" fill="none" stroke="#fda4af" strokeWidth={2.4} />
    <path d="M220 298 v22" stroke={K} strokeWidth={9} />
    <circle cx={220} cy={324} r={4} fill={K} />
    <LabL px={166} py={50} tx={128} ty={60}>salivary glands</LabL>
    <Lab px={234} py={30} tx={310} ty={26}>mouth</Lab>
    <Lab px={200} py={80} tx={310} ty={62}>oesophagus</Lab>
    <Lab px={248} py={140} tx={310} ty={98}>stomach</Lab>
    <Lab px={252} py={198} tx={310} ty={134}>pancreas</Lab>
    <Lab px={262} py={240} tx={310} ty={170}>small intestine</Lab>
    <Lab px={288} py={270} tx={310} ty={206}>large intestine</Lab>
    <Lab px={220} py={310} tx={310} ty={256}>rectum</Lab>
    <Lab px={224} py={324} tx={310} ty={300}>anus</Lab>
    <LabL px={92} py={160} tx={56} ty={150}>liver</LabL>
    <LabL px={166} py={198} tx={125} ty={225}>gall bladder</LabL>
  </Svg>
);

/* ---------- Villus ---------- */
const Villus = () => (
  <Svg w={560} h={270} label="Diagram of a villus showing the wall one cell thick with microvilli, a network of blood capillaries and a central lacteal">
    <rect x={190} y={25} width={120} height={215} rx={55} fill={YEL} stroke={K} strokeWidth={3} />
    {Array.from({ length: 11 }, (_, i) => <line key={i} x1={205 + i * 9} y1={29} x2={205 + i * 9} y2={20} stroke={K} strokeWidth={1.4} />)}
    <rect x={225} y={55} width={50} height={180} rx={22} fill="#fff" stroke={K} strokeWidth={1.8} />
    <path d="M235 235 V70 q15 -18 30 0 V235" fill="none" stroke="#ec4899" strokeWidth={2.5} />
    <path d="M205 240 V80 q-10 -25 22 -35" fill="none" stroke="#dc2626" strokeWidth={3} />
    <path d="M295 240 V80 q10 -25 -22 -35" fill="none" stroke="#2563eb" strokeWidth={3} />
    <path d="M215 120 q20 15 0 30 M285 120 q-20 15 0 30 M215 180 q20 15 0 30 M285 180 q-20 15 0 30" fill="none" stroke="#7c3aed" strokeWidth={2} />
    <Lab px={300} py={22} tx={345} ty={30}>microvilli (tiny projections)</Lab>
    <Lab px={308} py={90} tx={345} ty={80}>epithelium: wall one cell thick</Lab>
    <Lab px={290} py={140} tx={345} ty={130}>network of blood capillaries</Lab>
    <Lab px={250} py={175} tx={345} ty={180}>lacteal (lymph vessel)</Lab>
    <LabL px={200} py={160} tx={160} ty={180}>blood vessels</LabL>
    <T x={278} y={262} size={11}>Glucose and amino acids enter the capillaries; fatty acids and glycerol enter the lacteal</T>
  </Svg>
);

/* ---------- Heart ---------- */
const Heart = () => (
  <Svg w={560} h={330} label="Diagram of the mammalian heart showing the vena cava, right atrium, right ventricle, pulmonary artery, pulmonary vein, left atrium, left ventricle with a thick wall, aorta, valves, septum and a coronary artery">
    <path d="M165 148 h-60 q-30 0 -30 -50 v-40" fill="none" stroke={K} strokeWidth={18} />
    <path d="M165 148 h-60 q-30 0 -30 -50 v-40" fill="none" stroke={BLU} strokeWidth={14} />
    <rect x={160} y={5} width={26} height={68} fill={BLU} stroke={K} strokeWidth={2} />
    <rect x={330} y={90} width={66} height={22} fill={RED} stroke={K} strokeWidth={2} />
    <path d="M330 215 h50 q36 0 36 -50 v-120" fill="none" stroke={K} strokeWidth={22} />
    <path d="M330 215 h50 q36 0 36 -50 v-120" fill="none" stroke={RED} strokeWidth={18} />
    <rect x={150} y={70} width={84} height={72} rx={18} fill={BLU} stroke={K} strokeWidth={2.5} />
    <rect x={252} y={70} width={84} height={72} rx={18} fill={RED} stroke={K} strokeWidth={2.5} />
    <rect x={150} y={146} width={84} height={104} rx={24} fill={BLU} stroke={K} strokeWidth={2.5} />
    <rect x={252} y={146} width={84} height={116} rx={28} fill={RED} stroke={K} strokeWidth={8} />
    <rect x={234} y={70} width={18} height={192} fill="#e5e7eb" stroke={K} strokeWidth={2} />
    <polygon points="170,143 214,143 192,160" fill="#fff" stroke={K} strokeWidth={1.6} />
    <polygon points="272,143 316,143 294,160" fill="#fff" stroke={K} strokeWidth={1.6} />
    <path d="M318 160 q22 40 6 90" fill="none" stroke="#7f1d1d" strokeWidth={2.4} />
    <T x={192} y={112} size={12}>right</T><T x={192} y={126} size={12}>atrium</T>
    <T x={294} y={112} size={12}>left</T><T x={294} y={126} size={12}>atrium</T>
    <LabL px={173} py={30} tx={140} ty={20}>vena cava</LabL>
    <LabL px={75} py={80} tx={118} ty={50}>pulmonary artery</LabL>
    <LabL px={160} py={210} tx={125} ty={235}>right ventricle</LabL>
    <Lab px={416} py={80} tx={438} ty={56}>aorta</Lab>
    <Lab px={390} py={101} tx={438} ty={100}>pulmonary vein</Lab>
    <Lab px={330} py={205} tx={430} ty={210}>left ventricle (thick wall)</Lab>
    <Lab px={321} py={190} tx={430} ty={252}>coronary artery</Lab>
    <Lab px={294} py={152} tx={430} ty={150}>valve</Lab>
    <LabL px={243} py={250} tx={215} ty={290}>septum</LabL>
  </Svg>
);

/* ---------- Reflex arc ---------- */
const Box = ({ x, y, w, h, fill = '#fff', children }) => (
  <g><rect x={x} y={y} width={w} height={h} rx={8} fill={fill} stroke={K} strokeWidth={2} />{children}</g>
);
const ReflexArc = () => (
  <Svg w={560} h={270} label="A reflex arc: stimulus detected by a receptor, an impulse along a sensory neurone to a relay neurone in the spinal cord, along a motor neurone to an effector, giving a response">
    <T x={55} y={30} bold size={12}>stimulus</T>
    <path d="M55 38 l-10 18 h20z" fill="#fb923c" stroke={K} strokeWidth={1.5} />
    <circle cx={55} cy={135} r={14} fill={YEL} stroke={K} strokeWidth={2} />
    <T x={55} y={172} size={12}>receptor</T>
    <L x1={69} y1={135} x2={190} y2={135} arrow w={2.6} />
    <T x={130} y={122} size={12}>sensory neurone</T>
    <Box x={190} y={75} w={140} h={120} fill="#e5e7eb" />
    <T x={260} y={92} size={12} bold>spinal cord (CNS)</T>
    <path d="M200 135 h30 v35 h-30z" fill="none" />
    <path d="M205 135 h40 q10 0 10 12 v18 q0 10 10 10 h25" fill="none" stroke={K} strokeWidth={2.4} />
    <T x={260} y={185} size={11}>relay neurone</T>
    <L x1={330} y1={165} x2={430} y2={165} arrow w={2.6} />
    <T x={380} y={154} size={12}>motor neurone</T>
    <Box x={430} y={140} w={100} h={50} fill={PINK} />
    <T x={480} y={170} size={12} bold>effector</T>
    <T x={480} y={208} size={12}>(muscle or gland)</T>
    <T x={480} y={235} bold size={12}>response</T>
    <L x1={480} y1={212} x2={480} y2={222} arrow w={1.6} />
    <T x={280} y={252} size={12}>Impulses travel in this order: receptor, sensory, relay, motor, effector</T>
  </Svg>
);

/* ---------- Eye ---------- */
const Eye = () => (
  <Svg w={560} h={300} label="Section through the human eye showing the cornea, iris, pupil, lens, suspensory ligaments, ciliary muscle, retina, fovea, optic nerve and blind spot">
    <circle cx={260} cy={150} r={105} fill="#fff" stroke={K} strokeWidth={2.5} />
    <path d="M165 100 Q128 150 165 200" fill={BLUE} stroke={K} strokeWidth={3} />
    <path d="M178 96 v34 M178 170 v34" stroke="#92400e" strokeWidth={9} strokeLinecap="round" />
    <ellipse cx={205} cy={150} rx={13} ry={33} fill="#e0f2fe" stroke={K} strokeWidth={2} />
    <path d="M205 118 L188 92 M205 182 L188 208" stroke={K} strokeWidth={1.4} />
    <ellipse cx={186} cy={86} rx={14} ry={9} fill={PINK} stroke={K} strokeWidth={1.4} />
    <ellipse cx={186} cy={214} rx={14} ry={9} fill={PINK} stroke={K} strokeWidth={1.4} />
    <path d="M312.5 59 A105 105 0 0 1 312.5 241" fill="none" stroke="#b91c1c" strokeWidth={6} />
    <circle cx={365} cy={150} r={4} fill="#facc15" stroke={K} strokeWidth={1} />
    <path d="M358.7 186 L430 212" stroke={K} strokeWidth={16} strokeLinecap="round" />
    <path d="M358.7 186 L430 212" stroke="#fde68a" strokeWidth={11} strokeLinecap="round" />
    <LabL px={142} py={150} tx={100} ty={60}>cornea</LabL>
    <LabL px={178} py={108} tx={100} ty={95}>iris</LabL>
    <LabL px={178} py={150} tx={100} ty={130}>pupil</LabL>
    <LabL px={205} py={150} tx={100} ty={165}>lens</LabL>
    <LabL px={196} py={100} tx={135} ty={200}>suspensory ligaments</LabL>
    <LabL px={180} py={214} tx={100} ty={250}>ciliary muscle</LabL>
    <Lab px={330} py={66} tx={400} ty={40}>retina</Lab>
    <Lab px={366} py={150} tx={420} ty={115}>fovea</Lab>
    <Lab px={410} py={205} tx={450} ty={170}>optic nerve</Lab>
    <Lab px={361} py={187} tx={400} ty={262}>blind spot</Lab>
  </Svg>
);

/* ---------- Flower ---------- */
const Flower = () => (
  <Svg w={560} h={310} label="Section through an insect-pollinated flower showing the stigma, style, ovary, ovules, anthers, filaments, petals and sepals">
    <rect x={195} y={250} width={10} height={55} fill={GREEN} stroke={K} strokeWidth={1.6} />
    <ellipse cx={200} cy={246} rx={24} ry={9} fill={GREEN} stroke={K} strokeWidth={1.6} />
    <ellipse cx={135} cy={165} rx={30} ry={78} transform="rotate(-14 135 165)" fill="#fbcfe8" stroke={K} strokeWidth={1.8} />
    <ellipse cx={265} cy={165} rx={30} ry={78} transform="rotate(14 265 165)" fill="#fbcfe8" stroke={K} strokeWidth={1.8} />
    <ellipse cx={168} cy={238} rx={26} ry={8} transform="rotate(-20 168 238)" fill="#86efac" stroke={K} strokeWidth={1.6} />
    <ellipse cx={232} cy={238} rx={26} ry={8} transform="rotate(20 232 238)" fill="#86efac" stroke={K} strokeWidth={1.6} />
    <line x1={182} y1={228} x2={167} y2={128} stroke={K} strokeWidth={2.4} />
    <line x1={218} y1={228} x2={233} y2={128} stroke={K} strokeWidth={2.4} />
    <ellipse cx={166} cy={116} rx={8} ry={15} fill="#fde047" stroke={K} strokeWidth={1.6} />
    <ellipse cx={234} cy={116} rx={8} ry={15} fill="#fde047" stroke={K} strokeWidth={1.6} />
    <rect x={196} y={100} width={8} height={80} fill={GREEN} stroke={K} strokeWidth={1.6} />
    <ellipse cx={200} cy={94} rx={15} ry={9} fill="#fda4af" stroke={K} strokeWidth={1.6} />
    <ellipse cx={200} cy={208} rx={27} ry={36} fill={GREEN} stroke={K} strokeWidth={2} />
    {[[191, 196], [209, 196], [200, 218]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={5.5} fill="#fde68a" stroke={K} strokeWidth={1.3} />)}
    <Lab px={214} py={92} tx={340} ty={32}>stigma</Lab>
    <Lab px={242} py={106} tx={340} ty={68}>anther</Lab>
    <Lab px={204} py={140} tx={340} ty={104}>style</Lab>
    <Lab px={290} py={140} tx={340} ty={140}>petal</Lab>
    <Lab px={226} py={180} tx={340} ty={176}>filament</Lab>
    <Lab px={225} py={208} tx={340} ty={212}>ovary</Lab>
    <Lab px={209} py={198} tx={340} ty={246}>ovule</Lab>
    <Lab px={252} py={240} tx={340} ty={282}>sepal</Lab>
  </Svg>
);

/* ---------- Pyramid of energy ---------- */
const EnergyPyramid = () => (
  <Svg w={560} h={270} label="Pyramid of energy with four trophic levels: producers at the base with 10 000 kilojoules, primary consumers 1 000, secondary consumers 100 and tertiary consumers 10">
    {[
      { w: 360, y: 190, name: 'producers', e: '10 000 kJ' },
      { w: 240, y: 140, name: 'primary consumers', e: '1 000 kJ' },
      { w: 130, y: 90, name: 'secondary consumers', e: '100 kJ' },
      { w: 50, y: 40, name: 'tertiary consumers', e: '10 kJ' },
    ].map((l) => (
      <g key={l.name}>
        <rect x={190 - l.w / 2 + 20} y={l.y} width={l.w} height={46} fill={GREEN} stroke={K} strokeWidth={2} />
        <T x={400} y={l.y + 20} anchor="start" size={12} bold>{l.name}</T>
        <T x={400} y={l.y + 36} anchor="start" size={12}>{l.e}</T>
        <L x1={190 + l.w / 2 + 22} y1={l.y + 23} x2={396} y2={l.y + 23} w={1.2} dash="3 3" />
      </g>
    ))}
    <T x={210} y={256} size={12}>Only about 10% of the energy passes to the next level</T>
  </Svg>
);

/* ---------- Population growth curve ---------- */
const PopulationCurve = () => (
  <Svg w={560} h={280} label="Sigmoid population growth curve showing the lag phase, exponential phase, stationary phase and death phase">
    <L x1={70} y1={230} x2={500} y2={230} arrow />
    <L x1={70} y1={230} x2={70} y2={25} arrow />
    <T x={285} y={262} size={13}>time</T>
    <text x={22} y={130} transform="rotate(-90 22 130)" textAnchor="middle" fontSize={13} fill={K}>population size</text>
    <path d="M72 218 C110 216 150 212 180 192 C220 160 250 90 300 66 C340 56 380 56 410 64 C440 76 462 118 482 168" fill="none" stroke="#2563eb" strokeWidth={3.5} />
    {[175, 300, 410].map((x) => <line key={x} x1={x} y1={40} x2={x} y2={230} stroke={K} strokeWidth={1.2} strokeDasharray="5 4" />)}
    <T x={122} y={52} size={12} bold>lag</T><T x={122} y={67} size={11}>phase</T>
    <T x={238} y={52} size={12} bold>exponential</T><T x={238} y={67} size={11}>(log) phase</T>
    <T x={355} y={38} size={12} bold>stationary</T><T x={355} y={53} size={11}>phase</T>
    <T x={455} y={52} size={12} bold>death</T><T x={455} y={67} size={11}>phase</T>
  </Svg>
);

export const BIO_FIGS = {
  flower: Flower,
  energyPyramid: EnergyPyramid,
  populationCurve: PopulationCurve,
  digestiveSystem: DigestiveSystem,
  villus: Villus,
  heart: Heart,
  reflexArc: ReflexArc,
  eye: Eye,
  animalCell: AnimalCell,
  plantCell: PlantCell,
  bacterialCell: BacterialCell,
  leafSection: LeafSection,
  osmosisCells: OsmosisCells,
  enzymeAction: EnzymeAction,
};
