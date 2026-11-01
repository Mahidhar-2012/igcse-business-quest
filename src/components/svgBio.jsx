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

/* ---------- DNA double helix ---------- */
const Dna = () => {
  const ys = Array.from({ length: 61 }, (_, i) => 20 + i * 4);
  const s1 = ys.map((y) => `${200 + 42 * Math.sin(((y - 20) / 60) * Math.PI)},${y}`).join(' ');
  const s2 = ys.map((y) => `${200 - 42 * Math.sin(((y - 20) / 60) * Math.PI)},${y}`).join(' ');
  const rungs = Array.from({ length: 16 }, (_, i) => 24 + i * 15.3);
  const pairs = [['A', 'T'], ['G', 'C'], ['T', 'A'], ['C', 'G']];
  return (
    <Svg w={560} h={290} label="Diagram of the DNA double helix with two strands joined by pairs of bases: A with T and C with G">
      <polyline points={s1} fill="none" stroke="#2563eb" strokeWidth={4} />
      <polyline points={s2} fill="none" stroke="#dc2626" strokeWidth={4} />
      {rungs.map((y, i) => {
        const half = 42 * Math.sin(((y - 20) / 60) * Math.PI);
        const [a, b] = pairs[i % 4];
        return (
          <g key={i}>
            <line x1={200 - half} y1={y} x2={200 + half} y2={y} stroke={K} strokeWidth={1.6} />
            {Math.abs(half) > 26 && (
              <>
                <text x={200 - half * 0.62} y={y - 2} textAnchor="middle" fontSize={9} fontWeight={700} fill="#dc2626">{half > 0 ? b : a}</text>
                <text x={200 + half * 0.62} y={y - 2} textAnchor="middle" fontSize={9} fontWeight={700} fill="#2563eb">{half > 0 ? a : b}</text>
              </>
            )}
          </g>
        );
      })}
      <Lab px={242} py={60} tx={340} ty={50}>sugar-phosphate backbone</Lab>
      <Lab px={200} py={125} tx={340} ty={110}>pair of bases joined by bonds</Lab>
      <Lab px={160} py={200} tx={340} ty={170}>two strands coiled: double helix</Lab>
      <rect x={340} y={200} width={190} height={62} rx={8} fill={YEL} stroke={K} strokeWidth={1.5} />
      <T x={435} y={222} bold size={12}>Base pairing rule</T>
      <T x={435} y={240} size={13}>A pairs with T</T>
      <T x={435} y={256} size={13}>C pairs with G</T>
    </Svg>
  );
};

/* ---------- Nephron ---------- */
const Nephron = () => (
  <Svg w={560} h={320} label="Diagram of a nephron showing the glomerulus inside the Bowman's capsule, the first coiled tubule, the loop of Henle, the second coiled tubule, the collecting duct and the surrounding blood capillaries">
    <path d="M40 40 L84 66" stroke="#dc2626" strokeWidth={6} fill="none" />
    <path d="M70 118 L50 150" stroke="#dc2626" strokeWidth={4} fill="none" />
    <circle cx={100} cy={85} r={36} fill="#fff" stroke={K} strokeWidth={2.5} />
    <path d="M82 76 q14 -16 28 0 q14 14 -4 26 q-16 6 -24 -8 q-8 -10 0 -18z" fill="#fecaca" stroke="#dc2626" strokeWidth={2} />
    <path d="M128 100 q40 20 25 62 q-14 34 20 52" fill="none" stroke={K} strokeWidth={9} />
    <path d="M128 100 q40 20 25 62 q-14 34 20 52" fill="none" stroke={YEL} strokeWidth={5} />
    <path d="M175 214 V292 H215 V190" fill="none" stroke={K} strokeWidth={9} strokeLinejoin="round" />
    <path d="M175 214 V292 H215 V190" fill="none" stroke={YEL} strokeWidth={5} strokeLinejoin="round" />
    <path d="M215 190 q30 -40 62 -14 q20 18 40 -6" fill="none" stroke={K} strokeWidth={9} />
    <path d="M215 190 q30 -40 62 -14 q20 18 40 -6" fill="none" stroke={YEL} strokeWidth={5} />
    <path d="M345 30 V300" stroke={K} strokeWidth={14} />
    <path d="M345 30 V300" stroke="#fde68a" strokeWidth={9} />
    <path d="M317 170 L345 176" stroke={K} strokeWidth={5} />
    <path d="M150 130 q-20 20 0 40 M165 175 q-18 24 4 42 M195 220 q-14 40 6 60" fill="none" stroke="#dc2626" strokeWidth={2.4} />
    <Lab px={92} py={80} tx={400} ty={30}>glomerulus (filtration)</Lab>
    <Lab px={134} py={62} tx={400} ty={62}>Bowman’s capsule</Lab>
    <Lab px={160} py={150} tx={400} ty={96}>first coiled tubule (reabsorption)</Lab>
    <Lab px={195} py={292} tx={400} ty={150}>loop of Henle</Lab>
    <Lab px={290} py={180} tx={400} ty={190}>second coiled tubule</Lab>
    <Lab px={345} py={240} tx={400} ty={240}>collecting duct</Lab>
    <LabL px={145} py={150} tx={115} ty={190}>blood capillaries</LabL>
    <LabL px={50} py={44} tx={150} ty={22}>afferent arteriole</LabL>
  </Svg>
);

/* ---------- Box-and-arrow helpers for cycles ---------- */
const BoxT = ({ x, y, w, h, fill = '#fff', children }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={9} fill={fill} stroke={K} strokeWidth={2} />
    <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fontSize={12} fontWeight={700} fill={K}>{children}</text>
  </g>
);
const Arr = ({ x1, y1, x2, y2, label, lx, ly, anchor = 'middle' }) => (
  <g>
    <L x1={x1} y1={y1} x2={x2} y2={y2} arrow w={2} />
    {label && <T x={lx} y={ly} anchor={anchor} size={11}>{label}</T>}
  </g>
);

/* ---------- Carbon cycle ---------- */
const CarbonCycle = () => (
  <Svg w={560} h={330} label="Carbon cycle: carbon dioxide in the air is taken in by plants in photosynthesis, passes to animals by feeding, and returns to the air by respiration, decomposition and combustion; fossil fuels form from dead organisms">
    <BoxT x={190} y={14} w={180} h={40} fill={BLUE}>carbon dioxide in the air</BoxT>
    <BoxT x={20} y={140} w={120} h={40} fill={GREEN}>plants</BoxT>
    <BoxT x={420} y={140} w={120} h={40} fill={PINK}>animals</BoxT>
    <BoxT x={215} y={262} w={130} h={40} fill={YEL}>decomposers</BoxT>
    <BoxT x={420} y={262} w={120} h={40} fill="#e5e7eb">fossil fuels</BoxT>
    <Arr x1={110} y1={138} x2={200} y2={58} label="photosynthesis" lx={110} ly={92} anchor="end" />
    <Arr x1={226} y1={58} x2={140} y2={146} />
    <Arr x1={472} y1={138} x2={370} y2={54} label="respiration" lx={440} ly={88} anchor="start" />
    <Arr x1={142} y1={160} x2={418} y2={160} label="feeding" lx={280} ly={152} />
    <Arr x1={60} y1={184} x2={228} y2={268} label="death and waste" lx={36} ly={236} anchor="start" />
    <Arr x1={478} y1={184} x2={346} y2={272} label="death and waste" lx={524} ly={236} anchor="end" />
    <Arr x1={280} y1={260} x2={280} y2={58} label="respiration of decomposers" lx={286} ly={222} anchor="start" />
    <Arr x1={480} y1={260} x2={372} y2={52} label="combustion" lx={496} ly={206} anchor="start" />
    <Arr x1={348} y1={290} x2={416} y2={290} label="millions of years" lx={382} ly={318} />
  </Svg>
);

/* ---------- Nitrogen cycle ---------- */
const NitrogenCycle = () => (
  <Svg w={560} h={330} label="Nitrogen cycle: nitrogen gas is fixed by lightning and bacteria into nitrate, taken up by plants to make protein, passed to animals, returned as ammonium by decomposers, converted to nitrate by nitrifying bacteria and back to nitrogen gas by denitrifying bacteria">
    <BoxT x={205} y={12} w={150} h={36} fill={BLUE}>nitrogen in the air</BoxT>
    <BoxT x={30} y={125} w={140} h={36} fill={YEL}>nitrate ions in soil</BoxT>
    <BoxT x={390} y={125} w={140} h={36} fill={YEL}>ammonium ions in soil</BoxT>
    <BoxT x={30} y={250} w={140} h={36} fill={GREEN}>plants (protein)</BoxT>
    <BoxT x={210} y={250} w={140} h={36} fill={PINK}>animals (protein)</BoxT>
    <BoxT x={390} y={250} w={140} h={36} fill="#e5e7eb">decomposers</BoxT>
    <Arr x1={225} y1={50} x2={140} y2={122} label="fixation (lightning, bacteria)" lx={20} ly={62} anchor="start" />
    <Arr x1={110} y1={122} x2={190} y2={50} label="denitrification" lx={192} ly={104} anchor="start" />
    <Arr x1={100} y1={163} x2={100} y2={248} label="absorbed by roots" lx={108} ly={210} anchor="start" />
    <Arr x1={172} y1={268} x2={208} y2={268} label="feeding" lx={190} ly={262} />
    <Arr x1={100} y1={288} x2={420} y2={312} />
    <T x={260} y={315} size={10}>death</T>
    <Arr x1={352} y1={268} x2={388} y2={268} />
    <Arr x1={460} y1={248} x2={460} y2={165} label="decomposition" lx={468} ly={212} anchor="start" />
    <Arr x1={388} y1={143} x2={172} y2={143} label="nitrification (bacteria)" lx={280} ly={135} />
  </Svg>
);

/* ---------- Food web ---------- */
const FoodWeb = () => {
  const N = (x, y, w, name, fill) => <BoxT key={name} x={x} y={y} w={w} h={30} fill={fill}>{name}</BoxT>;
  const A = (x1, y1, x2, y2) => <L key={`${x1}${y1}${x2}${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} arrow w={1.6} />;
  return (
    <Svg w={560} h={318} label="A food web. Arrows point from the organism being eaten to the organism that eats it. Grass and shrubs are producers; grasshoppers, rabbits and mice eat plants; frogs, snakes, foxes and hawks are carnivores">
      {N(90, 262, 80, 'grass', GREEN)}
      {N(350, 262, 80, 'shrubs', GREEN)}
      {N(20, 180, 100, 'grasshopper', YEL)}
      {N(180, 180, 80, 'rabbit', YEL)}
      {N(400, 180, 70, 'mouse', YEL)}
      {N(20, 100, 70, 'frog', PINK)}
      {N(190, 100, 70, 'fox', PINK)}
      {N(400, 100, 80, 'snake', PINK)}
      {N(250, 20, 80, 'hawk', PINK)}
      {A(130, 262, 70, 212)}{A(130, 262, 215, 212)}{A(140, 262, 420, 212)}
      {A(390, 262, 230, 212)}{A(390, 262, 435, 212)}
      {A(70, 180, 55, 132)}{A(215, 180, 225, 132)}{A(430, 180, 440, 132)}{A(410, 180, 250, 132)}
      {A(70, 100, 270, 52)}{A(440, 100, 320, 52)}{A(225, 100, 280, 52)}
      <T x={280} y={308} size={11}>Arrows point from the food to the animal that eats it</T>
    </Svg>
  );
};

/* ---------- Punnett square ---------- */
const PunnettSquare = () => (
  <Svg w={560} h={270} label="Punnett square for a cross between two heterozygous tall plants Tt and Tt giving TT, Tt, Tt and tt in a ratio of three tall to one short">
    <T x={250} y={26} bold size={13}>Parents: Tt × Tt (both tall)</T>
    <T x={250} y={44} size={12}>Gametes</T>
    {[['T', 195], ['t', 285]].map(([g, x]) => <T key={g} x={x} y={72} bold size={16}>{g}</T>)}
    {[['T', 120], ['t', 190]].map(([g, y]) => <T key={g + y} x={150} y={y + 22} bold size={16}>{g}</T>)}
    {[[0, 0, 'TT', 'tall'], [1, 0, 'Tt', 'tall'], [0, 1, 'Tt', 'tall'], [1, 1, 'tt', 'short']].map(([c, r, gt, ph]) => (
      <g key={`${c}${r}`}>
        <rect x={165 + c * 90} y={85 + r * 70} width={90} height={70} fill={gt === 'tt' ? '#fecdd3' : GREEN} stroke={K} strokeWidth={2} />
        <T x={210 + c * 90} y={118 + r * 70} bold size={18}>{gt}</T>
        <T x={210 + c * 90} y={138 + r * 70} size={11}>{ph}</T>
      </g>
    ))}
    <rect x={380} y={85} width={160} height={140} rx={8} fill={YEL} stroke={K} strokeWidth={1.5} />
    <T x={460} y={110} bold size={12}>Offspring</T>
    <T x={460} y={132} size={12}>genotypes 1 TT : 2 Tt : 1 tt</T>
    <T x={460} y={154} size={12}>phenotypes</T>
    <T x={460} y={172} bold size={14}>3 tall : 1 short</T>
    <T x={460} y={198} size={11}>T = dominant (tall)</T>
    <T x={460} y={214} size={11}>t = recessive (short)</T>
  </Svg>
);

/* ---------- Single and double circulation ---------- */
const CirculationTypes = () => (
  <Svg w={560} h={300} label="Single circulation of a fish (heart to gills to body to heart) and double circulation of a mammal (heart to lungs to heart to body to heart)">
    <T x={130} y={22} bold size={13}>Single circulation (fish)</T>
    <BoxT x={85} y={60} w={90} h={36} fill={RED}>heart</BoxT>
    <BoxT x={20} y={160} w={90} h={36} fill={BLUE}>gills</BoxT>
    <BoxT x={150} y={235} w={90} h={36} fill={PINK}>body</BoxT>
    <Arr x1={100} y1={98} x2={70} y2={158} />
    <Arr x1={80} y1={198} x2={160} y2={233} />
    <Arr x1={200} y1={233} x2={170} y2={100} />
    <T x={230} y={155} size={11}>blood passes through</T><T x={230} y={169} size={11}>the heart once</T>
    <T x={420} y={22} bold size={13}>Double circulation (mammal)</T>
    <BoxT x={350} y={70} w={90} h={36} fill={BLUE}>right heart</BoxT>
    <BoxT x={462} y={70} w={90} h={36} fill={RED}>left heart</BoxT>
    <BoxT x={400} y={140} w={100} h={32} fill={BLUE}>lungs</BoxT>
    <BoxT x={400} y={230} w={100} h={32} fill={PINK}>body</BoxT>
    <Arr x1={395} y1={108} x2={420} y2={138} />
    <Arr x1={480} y1={140} x2={505} y2={108} />
    <Arr x1={510} y1={108} x2={480} y2={228} />
    <Arr x1={400} y1={246} x2={380} y2={110} />
    <T x={460} y={290} size={11}>blood passes through the heart twice</T>
  </Svg>
);

/* ---------- Blood vessels (cross-sections) ---------- */
const BloodVessels = () => (
  <Svg w={560} h={270} label="Cross-sections of an artery with a thick wall and narrow lumen, a vein with a thin wall and wide lumen, and a capillary with a wall one cell thick">
    <circle cx={90} cy={110} r={56} fill="#fca5a5" stroke={K} strokeWidth={2.5} />
    <circle cx={90} cy={110} r={22} fill="#fff" stroke={K} strokeWidth={2} />
    <T x={90} y={195} bold size={13}>Artery</T>
    <T x={90} y={212} size={11}>thick muscular, elastic wall</T>
    <T x={90} y={227} size={11}>narrow lumen, high pressure</T>
    <circle cx={280} cy={110} r={56} fill="#bfdbfe" stroke={K} strokeWidth={2.5} />
    <circle cx={280} cy={110} r={48} fill="#fff" stroke={K} strokeWidth={2} />
    <path d="M250 134 q30 -40 60 0" fill="none" stroke={K} strokeWidth={2.4} />
    <T x={280} y={195} bold size={13}>Vein</T>
    <T x={280} y={212} size={11}>thin wall, wide lumen</T>
    <T x={280} y={227} size={11}>valves, low pressure</T>
    <circle cx={470} cy={110} r={18} fill="#fde68a" stroke={K} strokeWidth={2} />
    <circle cx={470} cy={110} r={12} fill="#fff" stroke={K} strokeWidth={1.4} />
    <ellipse cx={470} cy={110} rx={8} ry={5} fill="#dc2626" />
    <T x={470} y={195} bold size={13}>Capillary</T>
    <T x={470} y={212} size={11}>wall one cell thick</T>
    <T x={470} y={227} size={11}>very narrow lumen</T>
    <T x={90} y={30} size={11}>wall</T><L x1={90} y1={34} x2={90} y2={64} w={1.2} />
    <T x={150} y={118} size={11} anchor="start">lumen</T><L x1={148} y1={113} x2={115} y2={110} w={1.2} />
  </Svg>
);

/* ---------- Skin and temperature control ---------- */
const SkinSection = () => (
  <Svg w={560} h={320} label="Section through human skin showing hair, hair erector muscle, sweat gland and duct, sensory receptor and neurone, blood vessels and fatty tissue">
    <rect x={20} y={40} width={330} height={30} fill="#fde68a" stroke={K} strokeWidth={2} />
    <rect x={20} y={70} width={330} height={130} fill="#fecdd3" stroke={K} strokeWidth={2} />
    <rect x={20} y={200} width={330} height={60} fill="#fef9c3" stroke={K} strokeWidth={2} />
    <path d="M110 20 V150" stroke={K} strokeWidth={5} />
    <ellipse cx={110} cy={158} rx={11} ry={13} fill="#fff" stroke={K} strokeWidth={2} />
    <path d="M122 110 L170 80" stroke="#b91c1c" strokeWidth={6} strokeLinecap="round" />
    <path d="M250 42 q-14 30 6 55 q14 26 -8 44" fill="none" stroke={K} strokeWidth={3} />
    <path d="M248 141 q-22 8 -18 26 q10 16 26 4 q16 -10 -2 -28" fill="#fff" stroke={K} strokeWidth={2.2} />
    <path d="M300 200 V120 q0 -20 15 -20 q15 0 15 20 V200" fill="none" stroke="#dc2626" strokeWidth={4} />
    <path d="M300 200 V130 M330 200 V130" stroke="#2563eb" strokeWidth={0} />
    <path d="M60 200 V112" stroke={K} strokeWidth={2} />
    <circle cx={60} cy={104} r={8} fill="#fff" stroke={K} strokeWidth={2} />
    <Lab px={110} py={30} tx={380} ty={28}>hair</Lab>
    <Lab px={152} py={91} tx={380} ty={64}>hair erector muscle</Lab>
    <Lab px={252} py={50} tx={380} ty={100}>sweat duct and pore</Lab>
    <Lab px={242} py={160} tx={380} ty={136}>sweat gland</Lab>
    <Lab px={315} py={115} tx={380} ty={172}>arteriole (widens or narrows)</Lab>
    <Lab px={68} py={104} tx={380} ty={208}>receptor and sensory neurone</Lab>
    <Lab px={200} py={232} tx={380} ty={252}>fatty tissue (insulation)</Lab>
    <T x={185} y={285} size={11}>Epidermis (top), dermis (middle), fat layer (bottom)</T>
  </Svg>
);

/* ---------- Synapse ---------- */
const Synapse = () => (
  <Svg w={560} h={260} label="A synapse: an impulse arrives at the end of one neurone, vesicles release neurotransmitter into the synaptic gap, the molecules diffuse across and bind to receptor proteins on the next neurone">
    <path d="M10 95 H150 q40 0 40 45 q0 45 -40 45 H10z" fill="#fef3c7" stroke={K} strokeWidth={2.5} />
    <path d="M370 95 H550 V185 H370 q-30 0 -30 -45 q0 -45 30 -45z" fill="#dbeafe" stroke={K} strokeWidth={2.5} />
    {[[120, 125], [145, 150], [120, 160], [160, 125]].map(([x, y], i) => (
      <g key={i}><circle cx={x} cy={y} r={12} fill="#fff" stroke={K} strokeWidth={1.6} /><circle cx={x - 3} cy={y - 2} r={2} fill="#dc2626" /><circle cx={x + 3} cy={y + 3} r={2} fill="#dc2626" /></g>
    ))}
    {[0, 1, 2, 3, 4].map((i) => <circle key={i} cx={235 + i * 18} cy={125 + (i % 2) * 28} r={3} fill="#dc2626" />)}
    {[0, 1, 2].map((i) => <path key={i} d={`M338 ${112 + i * 28} l12 8 l-12 8`} fill="#16a34a" stroke={K} strokeWidth={1.4} />)}
    <L x1={20} y1={140} x2={90} y2={140} arrow w={2.2} />
    <T x={55} y={128} size={11}>impulse</T>
    <Lab px={135} py={140} tx={120} ty={50}>vesicle with neurotransmitter</Lab>
    <Lab px={280} py={130} tx={330} ty={50}>molecules diffuse across the gap</Lab>
    <Lab px={340} py={140} tx={375} ty={225}>receptor proteins</Lab>
    <LabL px={196} py={150} tx={80} ty={235}>synaptic gap</LabL>
    <T x={450} y={150} size={11}>next neurone: new impulse</T>
  </Svg>
);

/* ---------- Mitosis and meiosis ---------- */
const Cell = ({ cx, cy, r = 26, pairs = 2, single = false, colours = ['#2563eb', '#dc2626'] }) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill="#fff" stroke={K} strokeWidth={2} />
    {Array.from({ length: pairs }, (_, i) => (
      <g key={i}>
        <line x1={cx - 10 + i * 14} y1={cy - 10} x2={cx - 10 + i * 14} y2={cy + 10} stroke={colours[0]} strokeWidth={3} strokeLinecap="round" />
        {!single && <line x1={cx - 4 + i * 14} y1={cy - 10} x2={cx - 4 + i * 14} y2={cy + 10} stroke={colours[1]} strokeWidth={3} strokeLinecap="round" />}
      </g>
    ))}
  </g>
);
const MitosisMeiosis = () => (
  <Svg w={560} h={320} label="Mitosis produces two genetically identical diploid cells; meiosis produces four genetically different haploid cells">
    <T x={90} y={22} bold size={13}>Mitosis</T>
    <Cell cx={90} cy={70} />
    <T x={90} y={108} size={11}>diploid body cell</T>
    <Arr x1={90} y1={115} x2={90} y2={140} />
    <Cell cx={55} cy={175} r={22} />
    <Cell cx={125} cy={175} r={22} />
    <T x={90} y={215} size={11}>2 identical diploid cells</T>
    <T x={90} y={230} size={10}>growth, repair, replacement</T>
    <T x={400} y={22} bold size={13}>Meiosis</T>
    <Cell cx={400} cy={70} />
    <T x={400} y={108} size={11}>diploid cell in ovary or testis</T>
    <Arr x1={400} y1={115} x2={400} y2={135} />
    <Cell cx={350} cy={165} r={20} />
    <Cell cx={450} cy={165} r={20} />
    <Arr x1={350} y1={190} x2={320} y2={215} /><Arr x1={350} y1={190} x2={375} y2={215} />
    <Arr x1={450} y1={190} x2={425} y2={215} /><Arr x1={450} y1={190} x2={480} y2={215} />
    {[320, 375, 425, 480].map((x, i) => <Cell key={x} cx={x} cy={240} r={17} pairs={1} single colours={[i % 2 ? '#dc2626' : '#2563eb', '#fff']} />)}
    <T x={400} y={282} size={11}>4 genetically different haploid gametes</T>
    <T x={280} y={312} size={11}>Chromosome number is halved in meiosis, so fertilisation restores the diploid number</T>
  </Svg>
);

/* ---------- Enzyme and temperature ---------- */
const EnzymeGraph = () => (
  <Svg w={560} h={270} label="Graph of enzyme activity against temperature: the rate rises to an optimum temperature then falls sharply as the enzyme is denatured">
    <L x1={70} y1={220} x2={500} y2={220} arrow />
    <L x1={70} y1={220} x2={70} y2={25} arrow />
    <T x={285} y={254} size={13}>temperature (°C)</T>
    <text x={24} y={125} transform="rotate(-90 24 125)" textAnchor="middle" fontSize={13} fill={K}>rate of reaction</text>
    <path d="M70 218 C150 212 230 150 300 62 C320 40 335 38 345 70 C360 130 372 190 380 218" fill="none" stroke="#2563eb" strokeWidth={3.5} />
    <line x1={322} y1={44} x2={322} y2={220} stroke={K} strokeWidth={1.2} strokeDasharray="5 4" />
    <T x={322} y={238} size={11}>optimum</T>
    <T x={100} y={200} size={11} anchor="start">rate rises with temperature</T>
    <T x={430} y={125} size={11} anchor="start">enzyme</T><T x={430} y={139} size={11} anchor="start">denatured</T>
    <L x1={428} y1={130} x2={378} y2={160} arrow w={1.4} />
  </Svg>
);

/* ---------- Human reproductive systems ---------- */
const ReproSystems = () => (
  <Svg w={560} h={340} label="Diagrams of the male reproductive system (testes, scrotum, sperm ducts, prostate gland, urethra, penis) and the female reproductive system (ovaries, oviducts, uterus, cervix, vagina)">
    <T x={130} y={20} bold size={13}>Male</T>
    <ellipse cx={95} cy={215} rx={26} ry={32} fill="#fde68a" stroke={K} strokeWidth={2} />
    <ellipse cx={165} cy={215} rx={26} ry={32} fill="#fde68a" stroke={K} strokeWidth={2} />
    <path d="M95 185 q-5 -60 35 -75 M165 185 q5 -60 -35 -75" fill="none" stroke={K} strokeWidth={3} />
    <ellipse cx={130} cy={100} rx={22} ry={14} fill="#fecdd3" stroke={K} strokeWidth={2} />
    <path d="M130 114 V240 q0 22 -10 40" fill="none" stroke={K} strokeWidth={9} strokeLinecap="round" />
    <path d="M130 114 V240 q0 22 -10 40" fill="none" stroke="#fff" strokeWidth={4} strokeLinecap="round" />
    <rect x={112} y={150} width={36} height={100} rx={14} fill="none" stroke={K} strokeWidth={1.5} strokeDasharray="3 3" />
    <Lab px={150} py={100} tx={14} ty={56}>prostate gland</Lab>
    <Lab px={160} py={140} tx={14} ty={96}>sperm duct</Lab>
    <Lab px={188} py={215} tx={14} ty={300}>testis (scrotum around)</Lab>
    <Lab px={131} py={200} tx={14} ty={324}>urethra and penis</Lab>
    <T x={400} y={20} bold size={13}>Female</T>
    <path d="M400 100 q-45 0 -45 55 q0 35 45 35 q45 0 45 -35 q0 -55 -45 -55z" fill="#fecdd3" stroke={K} strokeWidth={2.2} />
    <path d="M360 110 q-40 -30 -75 0 M440 110 q40 -30 75 0" fill="none" stroke={K} strokeWidth={4} />
    <ellipse cx={275} cy={115} rx={22} ry={14} fill="#fde68a" stroke={K} strokeWidth={2} />
    <ellipse cx={525} cy={115} rx={22} ry={14} fill="#fde68a" stroke={K} strokeWidth={2} />
    <rect x={390} y={190} width={20} height={20} fill="#fda4af" stroke={K} strokeWidth={2} />
    <path d="M385 210 H415 V280 q-15 12 -30 0z" fill="#fff" stroke={K} strokeWidth={2} />
    <Lab px={275} py={118} tx={300} ty={44}>ovary</Lab>
    <Lab px={320} py={104} tx={350} ty={60}>oviduct</Lab>
    <Lab px={420} py={150} tx={460} ty={170}>uterus</Lab>
    <Lab px={410} py={200} tx={460} ty={216}>cervix</Lab>
    <Lab px={405} py={250} tx={460} ty={266}>vagina</Lab>
  </Svg>
);

/* ---------- Menstrual cycle ---------- */
const MenstrualCycle = () => (
  <Svg w={560} h={320} label="Graph of the 28-day menstrual cycle showing the thickness of the uterus lining and the levels of FSH, LH, oestrogen and progesterone, with ovulation at about day 14">
    <T x={285} y={16} bold size={13}>Uterus lining (thickness)</T>
    <path d="M70 75 L130 40 C180 38 250 36 300 34 L430 36 L450 70" fill="#fecdd3" stroke="#be123c" strokeWidth={2.5} />
    <path d="M70 75 L70 92 L450 92 L450 70" fill="none" stroke="#be123c" strokeWidth={2.5} />
    <L x1={70} y1={282} x2={500} y2={282} arrow />
    <L x1={70} y1={282} x2={70} y2={110} arrow />
    <T x={285} y={312} size={12}>day of cycle</T>
    {[0, 7, 14, 21, 28].map((d) => <g key={d}><line x1={70 + d * 15} y1={282} x2={70 + d * 15} y2={288} stroke={K} /><T x={70 + d * 15} y={300} size={10}>{d}</T></g>)}
    <line x1={280} y1={105} x2={280} y2={282} stroke={K} strokeWidth={1.2} strokeDasharray="5 4" />
    <T x={280} y={118} size={11} bold>ovulation</T>
    <path d="M70 250 C110 215 150 200 190 245 C220 262 250 258 300 255" fill="none" stroke="#2563eb" strokeWidth={2.8} />
    <path d="M70 262 C150 255 230 245 270 205 C280 150 290 150 300 215 C320 260 380 265 450 265" fill="none" stroke="#16a34a" strokeWidth={2.8} />
    <path d="M70 270 C200 268 270 266 300 262 C330 235 360 200 380 200 C410 200 430 240 450 268" fill="none" stroke="#f97316" strokeWidth={2.8} />
    <path d="M70 268 C100 268 150 250 200 200 C240 150 255 135 270 140 C285 170 300 250 330 265 C370 270 420 270 450 270" fill="none" stroke="#7c3aed" strokeWidth={2.8} />
    <T x={455} y={140} size={11} anchor="start" fill="#7c3aed" bold>oestrogen</T>
    <T x={455} y={156} size={11} anchor="start" fill="#f97316" bold>progesterone</T>
    <T x={455} y={172} size={11} anchor="start" fill="#16a34a" bold>LH</T>
    <T x={455} y={188} size={11} anchor="start" fill="#2563eb" bold>FSH</T>
    <T x={95} y={106} size={10}>menstruation</T>
  </Svg>
);

/* ---------- Tooth ---------- */
const Tooth = () => (
  <Svg w={560} h={300} label="Section through a human tooth showing enamel, dentine, pulp cavity with nerves and blood vessels, cement, gum and jaw bone">
    <rect x={40} y={170} width={260} height={120} fill="#e5e7eb" stroke={K} strokeWidth={2} />
    <rect x={40} y={150} width={260} height={30} fill="#fda4af" stroke={K} strokeWidth={2} />
    <path d="M110 160 q-10 -110 60 -120 q70 10 60 120 q-5 90 -25 120 q-5 10 -15 -40 q-5 -20 -20 -20 q-15 0 -20 20 q-10 50 -15 40 q-20 -30 -25 -120z" fill="#fff" stroke={K} strokeWidth={4} />
    <path d="M120 160 q-8 -95 50 -105 q58 10 50 105 q-4 80 -22 108 q-5 8 -12 -32 q-5 -16 -16 -16 q-11 0 -16 16 q-7 40 -12 32 q-18 -28 -22 -108z" fill="#fde68a" stroke={K} strokeWidth={1.4} />
    <path d="M150 150 q-4 -50 20 -55 q24 5 20 55 q-2 60 -12 85 h-16 q-10 -25 -12 -85z" fill="#fecaca" stroke={K} strokeWidth={1.4} />
    <path d="M166 150 V260 M174 150 V260" stroke="#dc2626" strokeWidth={2} />
    <path d="M182 150 V260" stroke="#2563eb" strokeWidth={2} />
    <path d="M118 200 q-8 40 6 80 M222 200 q8 40 -6 80" fill="none" stroke="#a16207" strokeWidth={4} />
    <Lab px={130} py={70} tx={330} ty={40}>enamel (hard outer layer)</Lab>
    <Lab px={135} py={110} tx={330} ty={82}>dentine</Lab>
    <Lab px={170} py={120} tx={330} ty={124}>pulp cavity (nerves, blood vessels)</Lab>
    <Lab px={120} py={230} tx={330} ty={190}>cement (fixes tooth in jaw)</Lab>
    <Lab px={90} py={165} tx={330} ty={230}>gum</Lab>
    <Lab px={90} py={235} tx={330} ty={270}>jaw bone</Lab>
  </Svg>
);

/* ---------- Transpiration pathway ---------- */
const TranspirationPath = () => (
  <Svg w={560} h={320} label="Pathway of water in a plant: absorbed by root hairs, up the xylem in the stem, and lost as water vapour through the stomata of the leaves">
    <path d="M200 300 V90" stroke={K} strokeWidth={12} />
    <path d="M200 300 V90" stroke={BLUE} strokeWidth={7} />
    <path d="M200 140 q70 -20 100 -70 q-60 -5 -100 70z" fill={GREEN} stroke={K} strokeWidth={2} />
    <path d="M200 190 q-70 -20 -100 -70 q60 -5 100 70z" fill={GREEN} stroke={K} strokeWidth={2} />
    <path d="M200 300 q-40 20 -80 15 M200 300 q40 20 80 15 M200 305 V318" fill="none" stroke="#92400e" strokeWidth={3} />
    {[[120, 313], [150, 312], [250, 312], [280, 314]].map(([x, y], i) => <line key={i} x1={x} y1={y} x2={x + (i % 2 ? 6 : -6)} y2={y + 8} stroke="#92400e" strokeWidth={1.4} />)}
    {[0, 1, 2].map((i) => <path key={i} d={`M${290 + i * 6} ${98 - i * 8} q8 -12 0 -24`} fill="none" stroke="#2563eb" strokeWidth={1.8} />)}
    <L x1={200} y1={260} x2={200} y2={120} arrow w={2.2} stroke="#2563eb" />
    <Lab px={300} py={84} tx={340} ty={50}>water vapour leaves (stomata)</Lab>
    <Lab px={202} py={200} tx={340} ty={160}>water rises in the xylem</Lab>
    <Lab px={150} py={312} tx={340} ty={250}>water enters root hairs</Lab>
    <Lab px={250} py={150} tx={340} ty={110}>evaporation inside leaf</Lab>
  </Svg>
);

/* ---------- Specialised cells ---------- */
const SpecialisedCells = () => (
  <Svg w={560} h={330} label="Six specialised cells: ciliated cell, root hair cell, palisade cell, neurone, red blood cell and sperm cell">
    <g>
      <rect x={20} y={40} width={50} height={80} rx={10} fill="#fecdd3" stroke={K} strokeWidth={2} />
      {Array.from({ length: 6 }, (_, i) => <line key={i} x1={26 + i * 8} y1={40} x2={26 + i * 8} y2={22} stroke={K} strokeWidth={2} />)}
      <circle cx={45} cy={90} r={9} fill="#fff" stroke={K} strokeWidth={1.4} />
      <T x={45} y={142} bold size={11}>ciliated cell</T><T x={45} y={156} size={10}>cilia move mucus</T>
    </g>
    <g>
      <rect x={130} y={55} width={50} height={60} rx={6} fill={YEL} stroke={K} strokeWidth={2} />
      <path d="M145 115 q-5 30 -3 50 M165 115 q5 30 3 50" fill="none" stroke={K} strokeWidth={9} strokeLinecap="round" />
      <path d="M145 115 q-5 30 -3 50 M165 115 q5 30 3 50" fill="none" stroke={YEL} strokeWidth={5} strokeLinecap="round" />
      <T x={155} y={190} bold size={11}>root hair cell</T><T x={155} y={204} size={10}>large surface area</T>
    </g>
    <g>
      <rect x={235} y={40} width={44} height={90} rx={8} fill={GREEN} stroke={K} strokeWidth={2} />
      {[[250, 62], [264, 80], [252, 100], [265, 116]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx={6} ry={4} fill="#16a34a" />)}
      <T x={257} y={152} bold size={11}>palisade cell</T><T x={257} y={166} size={10}>many chloroplasts</T>
    </g>
    <g>
      <circle cx={380} cy={80} r={14} fill="#dbeafe" stroke={K} strokeWidth={2} />
      <path d="M366 74 l-28 -14 M366 86 l-24 18 M394 76 l24 -16 M380 94 V150" stroke={K} strokeWidth={2} fill="none" />
      <path d="M380 150 H470" stroke={K} strokeWidth={2.4} />
      <T x={420} y={175} bold size={11}>neurone</T><T x={420} y={189} size={10}>carries impulses</T>
    </g>
    <g>
      <ellipse cx={90} cy={250} rx={28} ry={28} fill="#fca5a5" stroke={K} strokeWidth={2} />
      <ellipse cx={90} cy={250} rx={10} ry={10} fill="#fecaca" stroke={K} strokeWidth={1} />
      <T x={90} y={298} bold size={11}>red blood cell</T><T x={90} y={312} size={10}>no nucleus, haemoglobin</T>
    </g>
    <g>
      <ellipse cx={270} cy={250} rx={18} ry={11} fill="#fff" stroke={K} strokeWidth={2} />
      <path d="M288 250 q40 -22 80 0 t60 0" fill="none" stroke={K} strokeWidth={2.4} />
      <ellipse cx={256} cy={250} rx={6} ry={8} fill="#fde68a" stroke={K} strokeWidth={1} />
      <T x={340} y={298} bold size={11}>sperm cell</T><T x={340} y={312} size={10}>tail, mitochondria, acrosome</T>
    </g>
  </Svg>
);

/* ---------- Blood cells ---------- */
const BloodCells = () => (
  <Svg w={560} h={230} label="Types of blood cell: red blood cells without a nucleus, a phagocyte with a lobed nucleus, a lymphocyte with a large round nucleus, and platelets">
    {[[70, 80], [120, 110], [90, 140]].map(([x, y], i) => (
      <g key={i}><circle cx={x} cy={y} r={24} fill="#fca5a5" stroke={K} strokeWidth={2} /><circle cx={x} cy={y} r={9} fill="#fecaca" /></g>
    ))}
    <T x={95} y={190} bold size={12}>red blood cells</T><T x={95} y={206} size={10}>carry oxygen (haemoglobin)</T>
    <path d="M230 70 q-10 -30 30 -30 q50 -2 48 38 q0 40 -40 42 q-48 0 -38 -50z" fill="#e0e7ff" stroke={K} strokeWidth={2} />
    <path d="M240 85 q8 -16 22 -6 q10 10 20 -4 q10 22 -8 30 q-18 6 -34 -20z" fill="#818cf8" stroke={K} strokeWidth={1.4} />
    <T x={270} y={190} bold size={12}>phagocyte</T><T x={270} y={206} size={10}>engulfs pathogens</T>
    <circle cx={410} cy={85} r={36} fill="#e0e7ff" stroke={K} strokeWidth={2} />
    <circle cx={410} cy={85} r={24} fill="#818cf8" stroke={K} strokeWidth={1.4} />
    <T x={410} y={190} bold size={12}>lymphocyte</T><T x={410} y={206} size={10}>makes antibodies</T>
    {[[500, 60], [520, 90], [490, 105]].map(([x, y], i) => <ellipse key={i} cx={x} cy={y} rx={9} ry={5} fill="#fde68a" stroke={K} strokeWidth={1.4} />)}
    <T x={505} y={190} bold size={12}>platelets</T><T x={505} y={206} size={10}>help blood clot</T>
  </Svg>
);

/* ---------- Breathing system ---------- */
const BreathingSystem = () => (
  <Svg w={560} h={340} label="The human breathing system: trachea with rings of cartilage, two bronchi, bronchioles ending in alveoli, lungs inside the ribs, intercostal muscles and the diaphragm">
    <path d="M200 20 V110" stroke={K} strokeWidth={14} />
    <path d="M200 20 V110" stroke="#e0f2fe" strokeWidth={9} />
    {Array.from({ length: 6 }, (_, i) => <line key={i} x1={193} y1={30 + i * 14} x2={207} y2={30 + i * 14} stroke={K} strokeWidth={1.6} />)}
    <path d="M70 130 q-25 70 5 140 q40 20 105 0 q15 -80 10 -145 q-60 -30 -120 5z" fill="#fecdd3" stroke={K} strokeWidth={2.4} />
    <path d="M330 130 q25 70 -5 140 q-40 20 -105 0 q-15 -80 -10 -145 q60 -30 120 5z" fill="#fecdd3" stroke={K} strokeWidth={2.4} />
    <path d="M200 110 L160 150 M200 110 L240 150 M160 150 L130 200 M160 150 L170 205 M240 150 L270 200 M240 150 L230 205" stroke={K} strokeWidth={4} fill="none" />
    {[[125, 215], [172, 220], [268, 215], [228, 220]].map(([x, y], i) => <g key={i}><circle cx={x} cy={y} r={7} fill="#fff" stroke={K} strokeWidth={1.4} /><circle cx={x - 7} cy={y + 8} r={6} fill="#fff" stroke={K} strokeWidth={1.4} /><circle cx={x + 7} cy={y + 8} r={6} fill="#fff" stroke={K} strokeWidth={1.4} /></g>)}
    <path d="M40 280 Q200 250 360 280" fill="none" stroke={K} strokeWidth={5} />
    <path d="M45 120 q-22 80 0 160 M355 120 q22 80 0 160" fill="none" stroke="#a16207" strokeWidth={4} strokeDasharray="10 6" />
    <Lab px={207} py={50} tx={400} ty={40}>trachea (cartilage rings)</Lab>
    <Lab px={238} py={135} tx={400} ty={92}>bronchus</Lab>
    <Lab px={252} py={190} tx={400} ty={140}>bronchiole</Lab>
    <Lab px={270} py={225} tx={400} ty={186}>alveoli (air sacs)</Lab>
    <Lab px={355} py={190} tx={400} ty={232}>rib and intercostal muscles</Lab>
    <Lab px={300} py={268} tx={400} ty={282}>diaphragm</Lab>
    <LabL px={110} py={170} tx={30} ty={320}>lung</LabL>
  </Svg>
);

/* ---------- Alveolus ---------- */
const Alveolus = () => (
  <Svg w={560} h={280} label="An alveolus surrounded by capillaries: oxygen diffuses from the air into the blood and carbon dioxide diffuses from the blood into the air across thin walls">
    <circle cx={190} cy={140} r={90} fill="#f0f9ff" stroke={K} strokeWidth={3} />
    <path d="M110 80 q-40 10 -50 40 M110 200 q-40 -10 -50 -40 M270 80 q40 10 50 40 M270 200 q40 -10 50 -40" fill="none" stroke="#dc2626" strokeWidth={9} strokeLinecap="round" />
    <path d="M195 50 q70 20 85 70 M195 230 q70 -20 85 -70 M85 120 q-10 30 0 60" fill="none" stroke="#2563eb" strokeWidth={9} strokeLinecap="round" />
    <L x1={350} y1={110} x2={270} y2={130} arrow w={2.6} stroke="#16a34a" />
    <L x1={270} y1={160} x2={350} y2={180} arrow w={2.6} stroke="#7c3aed" />
    <T x={360} y={100} anchor="start" bold size={12} fill="#16a34a">O₂: air to blood</T>
    <T x={360} y={196} anchor="start" bold size={12} fill="#7c3aed">CO₂: blood to air</T>
    <T x={190} y={146} bold size={13}>air in alveolus</T>
    <Lab px={110} py={85} tx={400} ty={40}>blood capillary</Lab>
    <Lab px={180} py={230} tx={400} ty={250}>wall one cell thick</Lab>
    <T x={190} y={268} size={11}>Large surface area, thin walls and a rich blood supply make diffusion fast</T>
  </Svg>
);

/* ---------- Root, stem and leaf sections ---------- */
const VascularPositions = () => (
  <Svg w={560} h={250} label="Positions of xylem and phloem in a root, a stem and a leaf vein: xylem in the centre of the root, bundles in a ring in the stem, and xylem above phloem in a leaf vein">
    <circle cx={90} cy={105} r={70} fill="#fef9c3" stroke={K} strokeWidth={2.5} />
    <path d="M90 105 m-22 0 h44 M90 105 m0 -22 v44 M75 90 l30 30 M105 90 l-30 30" stroke="#2563eb" strokeWidth={9} strokeLinecap="round" />
    {[[90, 70], [125, 105], [90, 140], [55, 105]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={7} fill="#f97316" />)}
    <T x={90} y={195} bold size={12}>Root</T><T x={90} y={210} size={10}>xylem in the centre</T>
    <circle cx={280} cy={105} r={70} fill="#dcfce7" stroke={K} strokeWidth={2.5} />
    {Array.from({ length: 7 }, (_, i) => { const a = (i / 7) * Math.PI * 2; const x = 280 + 45 * Math.cos(a), y = 105 + 45 * Math.sin(a); return <g key={i}><circle cx={x} cy={y} r={11} fill="#fff" stroke={K} strokeWidth={1.4} /><circle cx={x + 3 * Math.cos(a)} cy={y + 3 * Math.sin(a)} r={5} fill="#f97316" /><circle cx={x - 5 * Math.cos(a)} cy={y - 5 * Math.sin(a)} r={4} fill="#2563eb" /></g>; })}
    <T x={280} y={195} bold size={12}>Stem</T><T x={280} y={210} size={10}>bundles in a ring</T>
    <rect x={400} y={50} width={130} height={110} rx={10} fill="#bbf7d0" stroke={K} strokeWidth={2} />
    <circle cx={465} cy={105} r={30} fill="#fff" stroke={K} strokeWidth={2} />
    <path d="M450 100 a16 16 0 0 1 30 0z" fill="#93c5fd" stroke={K} strokeWidth={1.2} />
    <path d="M450 112 a16 16 0 0 0 30 0z" fill="#fdba74" stroke={K} strokeWidth={1.2} />
    <T x={465} y={195} bold size={12}>Leaf vein</T><T x={465} y={210} size={10}>xylem above phloem</T>
    <T x={285} y={238} size={11} fill="#2563eb" bold>blue = xylem</T>
    <T x={400} y={238} size={11} fill="#f97316" bold>orange = phloem</T>
  </Svg>
);

export const BIO_FIGS = {
  synapse: Synapse,
  mitosisMeiosis: MitosisMeiosis,
  enzymeGraph: EnzymeGraph,
  reproSystems: ReproSystems,
  menstrualCycle: MenstrualCycle,
  tooth: Tooth,
  transpirationPath: TranspirationPath,
  specialisedCells: SpecialisedCells,
  bloodCells: BloodCells,
  breathingSystem: BreathingSystem,
  alveolus: Alveolus,
  vascularPositions: VascularPositions,
  dna: Dna,
  nephron: Nephron,
  carbonCycle: CarbonCycle,
  nitrogenCycle: NitrogenCycle,
  foodWeb: FoodWeb,
  punnett: PunnettSquare,
  circulationTypes: CirculationTypes,
  bloodVessels: BloodVessels,
  skinSection: SkinSection,
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
