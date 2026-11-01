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

export const BIO_FIGS = {
  animalCell: AnimalCell,
  plantCell: PlantCell,
  bacterialCell: BacterialCell,
  leafSection: LeafSection,
  osmosisCells: OsmosisCells,
  enzymeAction: EnzymeAction,
};
