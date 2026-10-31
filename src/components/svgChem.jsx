// Original vector diagrams for Chemistry, drawn in the plain black-line style of exam papers.
// Used as fig: { svg: 'name', caption } on cards and questions.
import { Svg, T, L, K } from './svgFigs.jsx';

const rad = (d) => (d * Math.PI) / 180;
const pt = (cx, cy, r, deg) => [cx + r * Math.cos(rad(deg)), cy + r * Math.sin(rad(deg))];

/** An electron as a dot (o) or cross (x). */
const E = ({ x, y, cross }) =>
  cross ? (
    <g stroke={K} strokeWidth={1.6}><line x1={x - 3} y1={y - 3} x2={x + 3} y2={y + 3} /><line x1={x - 3} y1={y + 3} x2={x + 3} y2={y - 3} /></g>
  ) : (
    <circle cx={x} cy={y} r={3} fill="#fff" stroke={K} strokeWidth={1.6} />
  );

/** Bohr-style atom: shells = electron counts per shell, e.g. [2, 8, 1]. */
const Bohr = ({ cx, cy, shells, name, protons }) => (
  <g>
    <circle cx={cx} cy={cy} r={9} fill="#fde68a" stroke={K} strokeWidth={1.5} />
    <text x={cx} y={cy + 3.5} textAnchor="middle" fontSize={9} fontWeight={700} fill={K}>{protons}+</text>
    {shells.map((n, si) => {
      const r = 20 + si * 14;
      return (
        <g key={si}>
          <circle cx={cx} cy={cy} r={r} fill="none" stroke={K} strokeWidth={1.2} />
          {Array.from({ length: n }, (_, i) => {
            const [x, y] = pt(cx, cy, r, -90 + si * 20 + (360 / n) * i);
            return <circle key={i} cx={x} cy={y} r={3.2} fill={K} />;
          })}
        </g>
      );
    })}
    <T x={cx} y={cy + 20 + (shells.length - 1) * 14 + 22} bold size={13}>{name}</T>
    <T x={cx} y={cy + 20 + (shells.length - 1) * 14 + 37} size={11}>{shells.join(',')}</T>
  </g>
);

const BohrModels = () => (
  <Svg w={560} h={200} label="Electron shell diagrams for carbon (2,4), oxygen (2,6), sodium (2,8,1) and chlorine (2,8,7)">
    <Bohr cx={70} cy={80} shells={[2, 4]} name="carbon" protons={6} />
    <Bohr cx={195} cy={80} shells={[2, 6]} name="oxygen" protons={8} />
    <Bohr cx={335} cy={85} shells={[2, 8, 1]} name="sodium" protons={11} />
    <Bohr cx={480} cy={85} shells={[2, 8, 7]} name="chlorine" protons={17} />
  </Svg>
);

/** Outer shell circle with electrons. electrons = [[angle, 'dot' | 'cross'], ...] */
const Outer = ({ cx, cy, r = 30, label, electrons = [], bracket, charge, size = 15 }) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill="#fff" stroke={K} strokeWidth={1.8} />
    <text x={cx} y={cy + 5} textAnchor="middle" fontSize={size} fontWeight={700} fill={K}>{label}</text>
    {electrons.map(([a, kind], i) => { const [x, y] = pt(cx, cy, r, a); return <E key={i} x={x} y={y} cross={kind === 'cross'} />; })}
    {bracket && (
      <g stroke={K} strokeWidth={2} fill="none">
        <path d={`M${cx - r - 8} ${cy - r - 4} h-6 v${2 * r + 8} h6`} />
        <path d={`M${cx + r + 8} ${cy - r - 4} h6 v${2 * r + 8} h-6`} />
      </g>
    )}
    {charge && <text x={cx + r + 20} y={cy - r + 2} fontSize={14} fontWeight={700} fill={K}>{charge}</text>}
  </g>
);

const DotCrossIonic = () => {
  const eight = (skip) => Array.from({ length: 8 }, (_, i) => [-90 + i * 45, i === skip ? 'dot' : 'cross']);
  return (
    <Svg w={600} h={270} label="Dot-and-cross diagrams for ionic bonding in sodium chloride and magnesium oxide">
      <T x={300} y={18} bold>sodium chloride, NaCl</T>
      <Outer cx={70} cy={80} label="Na" electrons={[[0, 'dot']]} />
      <Outer cx={150} cy={80} label="Cl" electrons={Array.from({ length: 7 }, (_, i) => [-90 + (i + 1) * 45, 'cross'])} />
      <L x1={200} y1={80} x2={260} y2={80} arrow />
      <Outer cx={330} cy={80} label="Na" bracket charge="+" />
      <Outer cx={460} cy={80} label="Cl" electrons={eight(0)} bracket charge="−" />
      <T x={330} y={132} size={12}>2,8 (outer shell now full)</T>
      <T x={460} y={132} size={12}>2,8,8</T>
      <T x={300} y={158} bold>magnesium oxide, MgO</T>
      <Outer cx={70} cy={215} label="Mg" electrons={[[0, 'dot'], [180, 'dot']]} />
      <Outer cx={150} cy={215} label="O" electrons={Array.from({ length: 6 }, (_, i) => [-90 + (i + 1) * 45, 'cross'])} />
      <L x1={200} y1={215} x2={260} y2={215} arrow />
      <Outer cx={330} cy={215} label="Mg" bracket charge="2+" />
      <Outer cx={460} cy={215} label="O" electrons={Array.from({ length: 8 }, (_, i) => [-90 + i * 45, i < 6 ? 'cross' : 'dot'])} bracket charge="2−" />
    </Svg>
  );
};

/** Covalent molecule helper: central atom with bonded outer atoms. */
const Cov = ({ cx, cy, rc = 28, rb = 20, label, bonds, lone = [], centreCross = false }) => (
  <g>
    <circle cx={cx} cy={cy} r={rc} fill="#fff" stroke={K} strokeWidth={1.8} />
    {bonds.map(({ a, name, pairs = 1 }, bi) => {
      const d = rc + rb - 12;
      const [bx, by] = pt(cx, cy, d, a);
      const [mx, my] = pt(cx, cy, rc - 4 + (d - rc + rb) / 2 - (rb - 8) / 2, a);
      const px = -Math.sin(rad(a)); const py = Math.cos(rad(a));
      return (
        <g key={bi}>
          <circle cx={bx} cy={by} r={rb} fill="#fff" stroke={K} strokeWidth={1.8} />
          <text x={bx + (name === 'H' ? 0 : 0)} y={by + 5} textAnchor="middle" fontSize={13} fontWeight={700} fill={K} opacity={0.0}>{name}</text>
          {Array.from({ length: pairs }, (_, pi) => {
            const off = (pi - (pairs - 1) / 2) * 11;
            const cxm = mx + px * off; const cym = my + py * off;
            const dir = [Math.cos(rad(a)), Math.sin(rad(a))];
            return (
              <g key={pi}>
                <E x={cxm - dir[0] * 4} y={cym - dir[1] * 4} />
                <E x={cxm + dir[0] * 4} y={cym + dir[1] * 4} cross />
              </g>
            );
          })}
        </g>
      );
    })}
    {lone.map((a, i) => { const [x, y] = pt(cx, cy, rc, a); return <E key={i} x={x} y={y} cross={centreCross} />; })}
    <text x={cx} y={cy + 5} textAnchor="middle" fontSize={15} fontWeight={700} fill={K}>{label}</text>
    {bonds.map(({ a, name }, bi) => { const [bx, by] = pt(cx, cy, rc + rb - 12, a); const [lx, ly] = pt(bx, by, rb - 5, a); return <text key={`t${bi}`} x={lx} y={ly + 4} textAnchor="middle" fontSize={12} fontWeight={700} fill={K}>{name}</text>; })}
  </g>
);

const DotCrossCovalent = () => (
  <Svg w={600} h={250} label="Dot-and-cross diagrams for covalent bonding in water, methane and nitrogen">
    <T x={100} y={20} bold>water, H₂O</T>
    <T x={300} y={20} bold>methane, CH₄</T>
    <T x={498} y={20} bold>nitrogen, N₂</T>
    <circle cx={100} cy={105} r={30} fill="#fff" stroke={K} strokeWidth={1.8} />
    <circle cx={74.8} cy={141.0} r={20} fill="#fff" stroke={K} strokeWidth={1.8} />
    <E x={80.4} y={124.2} />
    <E x={88.6} y={130.0} cross />
    <text x={69.6} y={153.4} textAnchor="middle" fontSize={13} fontWeight={700} fill={K}>H</text>
    <circle cx={125.2} cy={141.0} r={20} fill="#fff" stroke={K} strokeWidth={1.8} />
    <E x={111.4} y={130.0} />
    <E x={119.6} y={124.2} cross />
    <text x={130.4} y={153.4} textAnchor="middle" fontSize={13} fontWeight={700} fill={K}>H</text>
    <E x={77.0} y={85.7} />
    <E x={89.7} y={76.8} />
    <E x={110.3} y={76.8} />
    <E x={123.0} y={85.7} />
    <text x={100.0} y={101.0} textAnchor="middle" fontSize={15} fontWeight={700} fill={K}>O</text>
    <circle cx={300} cy={110} r={30} fill="#fff" stroke={K} strokeWidth={1.8} />
    <circle cx={346.0} cy={110.0} r={19} fill="#fff" stroke={K} strokeWidth={1.8} />
    <E x={329.0} y={115.0} />
    <E x={329.0} y={105.0} cross />
    <text x={355.0} y={115.0} textAnchor="middle" fontSize={13} fontWeight={700} fill={K}>H</text>
    <circle cx={300.0} cy={156.0} r={19} fill="#fff" stroke={K} strokeWidth={1.8} />
    <E x={295.0} y={139.0} />
    <E x={305.0} y={139.0} cross />
    <text x={300.0} y={170.0} textAnchor="middle" fontSize={13} fontWeight={700} fill={K}>H</text>
    <circle cx={254.0} cy={110.0} r={19} fill="#fff" stroke={K} strokeWidth={1.8} />
    <E x={271.0} y={105.0} />
    <E x={271.0} y={115.0} cross />
    <text x={245.0} y={115.0} textAnchor="middle" fontSize={13} fontWeight={700} fill={K}>H</text>
    <circle cx={300.0} cy={64.0} r={19} fill="#fff" stroke={K} strokeWidth={1.8} />
    <E x={305.0} y={81.0} />
    <E x={295.0} y={81.0} cross />
    <text x={300.0} y={60.0} textAnchor="middle" fontSize={13} fontWeight={700} fill={K}>H</text>
    <text x={300.0} y={115.0} textAnchor="middle" fontSize={15} fontWeight={700} fill={K}>C</text>
    <circle cx={478} cy={110} r={28} fill="#fff" stroke={K} strokeWidth={1.8} />
    <circle cx={518} cy={110} r={28} fill="#fff" stroke={K} strokeWidth={1.8} />
    <E x={494.0} y={97.0} />
    <E x={502.0} y={97.0} cross />
    <E x={494.0} y={110.0} />
    <E x={502.0} y={110.0} cross />
    <E x={494.0} y={123.0} />
    <E x={502.0} y={123.0} cross />
    <E x={450.6} y={115.8} />
    <E x={450.6} y={104.2} />
    <E x={545.4} y={104.2} cross />
    <E x={545.4} y={115.8} cross />
    <text x={470.0} y={115.0} textAnchor="middle" fontSize={14} fontWeight={700} fill={K}>N</text>
    <text x={526.0} y={115.0} textAnchor="middle" fontSize={14} fontWeight={700} fill={K}>N</text>
    <T x={300} y={205} size={12}>each shared pair is one covalent bond: H–O–H, four C–H bonds, N≡N</T>
    <T x={300} y={227} size={11}>o = electron from one atom, x = electron from the other atom</T>
  </Svg>
);

const GiantStructures = () => (
  <Svg w={560} h={260} label="Giant covalent structures: diamond with four bonds to each carbon, and graphite in layers with weak forces between layers">
    <T x={140} y={20} bold>diamond</T>
    <g stroke={K} strokeWidth={2}>
      {[[140, 55], [70, 175], [210, 175], [200, 95]].map(([x, y], i) => (
        <g key={i}>
          <line x1={140} y1={125} x2={x} y2={y} />
          <circle cx={x} cy={y} r={9} fill="#e5e7eb" />
          <line x1={x} y1={y} x2={x + (x - 140) * 0.35} y2={y + (y - 125) * 0.35} strokeDasharray="3 3" />
        </g>
      ))}
      <circle cx={140} cy={125} r={11} fill="#9ca3af" />
    </g>
    <T x={140} y={215} size={12}>each carbon is bonded to 4 others</T>
    <T x={140} y={232} size={12}>(tetrahedral, rigid network)</T>
    <T x={410} y={20} bold>graphite</T>
    <polygon points="370.8,76.0 350.0,82.0 329.2,76.0 329.2,64.0 350.0,58.0 370.8,64.0" fill="none" stroke={K} strokeWidth={1.8} />
      <polygon points="416.8,76.0 396.0,82.0 375.2,76.0 375.2,64.0 396.0,58.0 416.8,64.0" fill="none" stroke={K} strokeWidth={1.8} />
      <polygon points="462.8,76.0 442.0,82.0 421.2,76.0 421.2,64.0 442.0,58.0 462.8,64.0" fill="none" stroke={K} strokeWidth={1.8} />
      <polygon points="393.8,98.0 373.0,104.0 352.2,98.0 352.2,86.0 373.0,80.0 393.8,86.0" fill="none" stroke={K} strokeWidth={1.8} />
      <polygon points="439.8,98.0 419.0,104.0 398.2,98.0 398.2,86.0 419.0,80.0 439.8,86.0" fill="none" stroke={K} strokeWidth={1.8} />
      <polygon points="485.8,98.0 465.0,104.0 444.2,98.0 444.2,86.0 465.0,80.0 485.8,86.0" fill="none" stroke={K} strokeWidth={1.8} />
      <polygon points="370.8,154.0 350.0,160.0 329.2,154.0 329.2,142.0 350.0,136.0 370.8,142.0" fill="none" stroke={K} strokeWidth={1.8} />
      <polygon points="416.8,154.0 396.0,160.0 375.2,154.0 375.2,142.0 396.0,136.0 416.8,142.0" fill="none" stroke={K} strokeWidth={1.8} />
      <polygon points="462.8,154.0 442.0,160.0 421.2,154.0 421.2,142.0 442.0,136.0 462.8,142.0" fill="none" stroke={K} strokeWidth={1.8} />
      <polygon points="393.8,176.0 373.0,182.0 352.2,176.0 352.2,164.0 373.0,158.0 393.8,164.0" fill="none" stroke={K} strokeWidth={1.8} />
      <polygon points="439.8,176.0 419.0,182.0 398.2,176.0 398.2,164.0 419.0,158.0 439.8,164.0" fill="none" stroke={K} strokeWidth={1.8} />
      <polygon points="485.8,176.0 465.0,182.0 444.2,176.0 444.2,164.0 465.0,158.0 485.8,164.0" fill="none" stroke={K} strokeWidth={1.8} />
    <line x1={400} y1={112} x2={400} y2={140} stroke={K} strokeWidth={1.5} strokeDasharray="4 4" />
    <T x={410} y={128} anchor="start" size={12}> </T>
    <T x={512} y={117} anchor="end" size={11}>weak forces</T>
    <T x={512} y={130} anchor="end" size={11}>between layers</T>
    <T x={410} y={215} size={12}>layers of carbon atoms, each bonded to 3 others</T>
    <T x={410} y={232} size={12}>(layers slide over each other; delocalised electrons)</T>
  </Svg>
);

const Metallic = () => (
  <Svg w={520} h={230} label="Metallic bonding: a regular lattice of positive metal ions surrounded by a sea of delocalised electrons">
    <rect x={60} y={30} width={400} height={150} fill="#f3f4f6" stroke={K} strokeWidth={1.5} />
    {Array.from({ length: 4 }, (_, r) => Array.from({ length: 6 }, (_, c) => {
      const x = 105 + c * 62 + (r % 2) * 18; const y = 62 + r * 36;
      return <g key={`${r}${c}`}><circle cx={x} cy={y} r={14} fill="#fca5a5" stroke={K} strokeWidth={1.6} /><text x={x} y={y + 5} textAnchor="middle" fontSize={14} fontWeight={700} fill={K}>+</text></g>;
    }))}
    {[[136, 62], [260, 62], [384, 62], [216, 98], [340, 98], [136, 134], [260, 134], [384, 134], [216, 170], [340, 170], [114, 80], [300, 80], [238, 116], [424, 116], [176, 152], [362, 152]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={3.4} fill={K} />)}
    <T x={260} y={205} size={13}>positive metal ions (+) in a lattice, with delocalised electrons (•) free to move</T>
  </Svg>
);

const DiffusionTube = () => {
  const x0 = 70; const len = 400; const ring = x0 + 0.594 * len;
  return (
    <Svg w={520} h={220} label="Ammonia and hydrogen chloride diffusing along a tube; the white ring of ammonium chloride forms nearer the hydrogen chloride end">
      <rect x={x0} y={80} width={len} height={44} rx={22} fill="#f9fafb" stroke={K} strokeWidth={2} />
      <rect x={x0 - 6} y={88} width={26} height={28} rx={8} fill="#cbd5e1" stroke={K} strokeWidth={1.5} />
      <rect x={x0 + len - 20} y={88} width={26} height={28} rx={8} fill="#cbd5e1" stroke={K} strokeWidth={1.5} />
      <T x={x0 + 8} y={52} size={12}>cotton wool with</T><T x={x0 + 8} y={66} size={12}>ammonia solution</T>
      <T x={x0 + len - 7} y={52} size={12}>cotton wool with</T><T x={x0 + len - 7} y={66} size={12}>hydrochloric acid</T>
      <rect x={ring - 6} y={84} width={12} height={36} fill="#e5e7eb" stroke={K} strokeWidth={1.2} />
      <L x1={ring} y1={170} x2={ring} y2={128} arrow w={1.6} />
      <T x={ring} y={188} size={12}>white ring of ammonium chloride</T>
      <L x1={x0 + 20} y1={150} x2={ring - 8} y2={150} arrow w={1.4} />
      <L x1={x0 + len - 20} y1={150} x2={ring + 8} y2={150} arrow w={1.4} />
      <T x={(x0 + 20 + ring) / 2} y={144} size={11}>NH₃ (Mr 17)</T>
      <T x={(x0 + len - 20 + ring) / 2} y={144} size={11}>HCl (Mr 36.5)</T>
      <T x={260} y={210} size={12}>the lighter NH₃ moves further, so the ring forms closer to the HCl end</T>
    </Svg>
  );
};


const Electrolysis = () => (
  <Svg w={520} h={300} label="Electrolysis cell: molten lead(II) bromide between two inert electrodes connected to a power supply, lead forming at the cathode and bromine at the anode">
    <rect x={130} y={118} width={260} height={150} fill="#e6f0fa" stroke="none" />
    <path d="M130 100 L130 268 L390 268 L390 100" fill="none" stroke={K} strokeWidth={2.5} />
    <rect x={188} y={62} width={14} height={170} fill="#6b7280" stroke={K} strokeWidth={1.8} />
    <rect x={318} y={62} width={14} height={170} fill="#6b7280" stroke={K} strokeWidth={1.8} />
    <polyline points="195,62 195,36 244,36" fill="none" stroke={K} strokeWidth={2} />
    <polyline points="325,62 325,36 276,36" fill="none" stroke={K} strokeWidth={2} />
    <L x1={246} y1={22} x2={246} y2={50} w={5} />
    <L x1={274} y1={14} x2={274} y2={58} w={1.8} />
    <T x={160} y={24} size={12}>cathode (−)</T>
    <T x={360} y={24} size={12}>anode (+)</T>
    <ellipse cx={195} cy={246} rx={12} ry={5} fill="#9ca3af" stroke={K} strokeWidth={1.4} />
    <T x={122} y={250} size={12} anchor="end">molten lead</T>
    {[[340, 190, 5], [350, 165, 4], [338, 140, 6], [352, 210, 3.5]].map(([x, y, r]) => <circle key={`${x}${y}`} cx={x} cy={y} r={r} fill="#fff" stroke={K} strokeWidth={1.4} />)}
    <T x={420} y={185} size={12} anchor="start">bromine</T><T x={420} y={199} size={12} anchor="start">gas (Br₂)</T>
    <L x1={262} y1={170} x2={214} y2={170} arrow w={1.6} />
    <T x={245} y={162} size={12}>Pb²⁺</T>
    <L x1={262} y1={205} x2={310} y2={205} arrow w={1.6} />
    <T x={285} y={197} size={12}>Br⁻</T>
    <T x={260} y={288} size={12}>molten lead(II) bromide (the electrolyte)</T>
  </Svg>
);

const FuelCell = () => (
  <Svg w={520} h={290} label="Hydrogen-oxygen fuel cell: hydrogen enters at one electrode, oxygen at the other, electrons flow through an external circuit to a load and water is produced">
    <rect x={150} y={90} width={220} height={150} fill="#e6f0fa" stroke={K} strokeWidth={2.5} />
    <rect x={150} y={90} width={22} height={150} fill="#6b7280" stroke={K} strokeWidth={2} />
    <rect x={348} y={90} width={22} height={150} fill="#6b7280" stroke={K} strokeWidth={2} />
    <T x={260} y={168} size={12}>electrolyte</T>
    <L x1={40} y1={130} x2={146} y2={130} arrow w={2.5} />
    <T x={90} y={118} size={13} bold>H₂ in</T>
    <L x1={480} y1={130} x2={374} y2={130} arrow w={2.5} />
    <T x={430} y={118} size={13} bold>O₂ in</T>
    <L x1={374} y1={215} x2={470} y2={215} arrow w={2.5} />
    <T x={425} y={235} size={13} bold>water out</T>
    <polyline points="161,90 161,40 232,40" fill="none" stroke={K} strokeWidth={2} />
    <polyline points="359,90 359,40 288,40" fill="none" stroke={K} strokeWidth={2} />
    <circle cx={260} cy={40} r={16} fill="#fff" stroke={K} strokeWidth={2} />
    <L x1={249} y1={29} x2={271} y2={51} w={1.8} /><L x1={271} y1={29} x2={249} y2={51} w={1.8} />
    <T x={260} y={14} size={12}>lamp (load)</T>
    <L x1={190} y1={62} x2={226} y2={62} arrow w={1.8} />
    <T x={205} y={78} size={12}>e⁻ flow</T>
    <T x={161} y={262} size={12}>hydrogen</T><T x={161} y={276} size={12}>electrode (−)</T>
    <T x={359} y={262} size={12}>oxygen</T><T x={359} y={276} size={12}>electrode (+)</T>
  </Svg>
);


const Panel = ({ ox, yR, yP, title, line1, line2 }) => (
  <g transform={`translate(${ox},0)`}>
    <L x1={30} y1={210} x2={30} y2={30} arrow />
    <L x1={30} y1={210} x2={300} y2={210} arrow />
    <T x={30} y={22} size={12}>energy</T>
    <T x={296} y={230} size={12} anchor="end">progress of reaction</T>
    <T x={165} y={12} bold>{title}</T>
    <path d={`M30 ${yR} L70 ${yR} C95 ${yR} 100 48 125 48 C150 48 155 ${yP} 180 ${yP} L225 ${yP}`} fill="none" stroke={K} strokeWidth={2.5} />
    <T x={36} y={yR + 18} size={12} anchor="start">reactants</T>
    <T x={205} y={yP + 18} size={12}>products</T>
    <L x1={100} y1={yR} x2={100} y2={50} arrow w={1.5} />
    <T x={94} y={34} size={11} anchor="end">activation</T>
    <T x={94} y={47} size={11} anchor="end">energy</T>
    <L x1={238} y1={yR} x2={238} y2={yP} arrow w={1.8} />
    <T x={246} y={(yR + yP) / 2 - 2} size={11} anchor="start">{line1}</T>
    <T x={246} y={(yR + yP) / 2 + 11} size={11} anchor="start">{line2}</T>
  </g>
);

const ReactionProfile = () => (
  <Svg w={700} h={240} label="Reaction profile diagrams: in an exothermic reaction the products are at lower energy than the reactants; in an endothermic reaction they are at higher energy">
    <Panel ox={0} yR={110} yP={165} title="exothermic" line1="energy" line2="released" />
    <Panel ox={360} yR={165} yP={110} title="endothermic" line1="energy" line2="absorbed" />
  </Svg>
);

const RateGraph = () => (
  <Svg w={520} h={260} label="Volume of gas against time for two reactions: curve X is steeper, so faster, and both reach the same final volume">
    <L x1={70} y1={210} x2={70} y2={25} arrow />
    <L x1={70} y1={210} x2={500} y2={210} arrow />
    <T x={78} y={26} size={12} anchor="start">volume of gas</T>
    <T x={496} y={230} size={12} anchor="end">time</T>
    <path d="M70.0 210.0 L78.4 187.0 L86.8 167.5 L95.2 151.0 L103.6 137.0 L112.0 125.2 L120.4 115.2 L128.8 106.7 L137.2 99.5 L145.6 93.5 L154.0 88.3 L162.4 84.0 L170.8 80.3 L179.2 77.2 L187.6 74.5 L196.0 72.3 L204.4 70.4 L212.8 68.8 L221.2 67.5 L229.6 66.3 L238.0 65.4 L246.4 64.5 L254.8 63.8 L263.2 63.2 L271.6 62.7 L280.0 62.3 L288.4 62.0 L296.8 61.7 L305.2 61.4 L313.6 61.2 L322.0 61.0 L330.4 60.9 L338.8 60.7 L347.2 60.6 L355.6 60.5 L364.0 60.4 L372.4 60.4 L380.8 60.3 L389.2 60.3 L397.6 60.2 L406.0 60.2 L414.4 60.2 L422.8 60.1 L431.2 60.1 L439.6 60.1 L448.0 60.1 L456.4 60.1 L464.8 60.1 L473.2 60.1 L481.6 60.0 L490.0 60.0" fill="none" stroke={K} strokeWidth={2.5} />
    <path d="M70.0 210.0 L78.4 200.3 L86.8 191.3 L95.2 182.8 L103.6 174.9 L112.0 167.5 L120.4 160.5 L128.8 154.1 L137.2 148.0 L145.6 142.3 L154.0 137.0 L162.4 132.0 L170.8 127.4 L179.2 123.1 L187.6 119.0 L196.0 115.2 L204.4 111.6 L212.8 108.3 L221.2 105.2 L229.6 102.3 L238.0 99.5 L246.4 97.0 L254.8 94.6 L263.2 92.4 L271.6 90.3 L280.0 88.3 L288.4 86.5 L296.8 84.8 L305.2 83.2 L313.6 81.7 L322.0 80.3 L330.4 79.0 L338.8 77.8 L347.2 76.6 L355.6 75.5 L364.0 74.5 L372.4 73.6 L380.8 72.7 L389.2 71.9 L397.6 71.1 L406.0 70.4 L414.4 69.8 L422.8 69.1 L431.2 68.5 L439.6 68.0 L448.0 67.5 L456.4 67.0 L464.8 66.5 L473.2 66.1 L481.6 65.7 L490.0 65.4" fill="none" stroke="#6b7280" strokeWidth={2.5} strokeDasharray="8 4" />
    <L x1={70} y1={60} x2={490} y2={60} dash="3 4" w={1} />
    <T x={100} y={104} size={13} bold anchor="start">X (faster)</T>
    <T x={330} y={118} size={13} fill="#4b5563" bold>Y (slower)</T>
    <T x={290} y={252} size={11}>same final volume: the same amount of limiting reactant</T>
  </Svg>
);


const PH_COLOURS = ['#c1121f', '#d62828', '#e85d04', '#f48c06', '#faa307', '#f9c74f', '#d4e157', '#66bb6a', '#2a9d8f', '#2b8ac6', '#3a6bc9', '#4a52c4', '#5f3fbf', '#6b2fb0', '#7b2f98'];
const PhScale = () => (
  <Svg w={560} h={170} label="The pH scale from 0 (strong acid) to 14 (strong alkali) with universal indicator colours, neutral at pH 7">
    {PH_COLOURS.map((c, i) => (
      <g key={i}>
        <rect x={35 + i * 33} y={50} width={33} height={46} fill={c} stroke={K} strokeWidth={1} />
        <T x={51.5 + i * 33} y={116} size={12}>{i}</T>
      </g>
    ))}
    <L x1={284} y1={44} x2={36} y2={44} arrow w={1.6} />
    <L x1={284} y1={44} x2={532} y2={44} arrow w={1.6} />
    <T x={160} y={36} size={13} bold>acidic</T>
    <T x={410} y={36} size={13} bold>alkaline</T>
    <T x={268} y={140} size={12}>7 = neutral (pure water)</T>
    <T x={70} y={140} size={11}>strong acid</T>
    <T x={500} y={140} size={11}>strong alkali</T>
    <T x={280} y={20} size={12}>universal indicator colours</T>
  </Svg>
);


const REACT = [['K', 'potassium'], ['Na', 'sodium'], ['Ca', 'calcium'], ['Mg', 'magnesium'], ['Al', 'aluminium'], ['C', 'carbon'], ['Zn', 'zinc'], ['Fe', 'iron'], ['H', 'hydrogen'], ['Cu', 'copper'], ['Ag', 'silver'], ['Au', 'gold']];
const ReactivitySeries = () => (
  <Svg w={560} h={330} label="The reactivity series from potassium (most reactive) to gold (least reactive), with carbon and hydrogen shown for comparison">
    <L x1={40} y1={300} x2={40} y2={30} arrow w={2.5} />
    <T x={40} y={20} size={12}>most reactive</T>
    <T x={40} y={316} size={12}>least reactive</T>
    {REACT.map(([s, n], i) => {
      const y = 36 + i * 22;
      const ref = s === 'C' || s === 'H';
      return (
        <g key={s}>
          <rect x={70} y={y} width={170} height={19} fill={ref ? '#fef3c7' : '#e0f2fe'} stroke={K} strokeWidth={1.4} strokeDasharray={ref ? '4 3' : undefined} />
          <text x={80} y={y + 14} fontSize={13} fontWeight={700} fill={K}>{s}</text>
          <text x={120} y={y + 14} fontSize={13} fill={K}>{n}</text>
        </g>
      );
    })}
    <path d="M250 36 V151" fill="none" stroke={K} strokeWidth={2} />
    <T x={262} y={90} size={12} anchor="start">extracted by electrolysis</T>
    <T x={262} y={104} size={12} anchor="start">of the molten compound</T>
    <path d="M250 168 V256" fill="none" stroke={K} strokeWidth={2} />
    <T x={262} y={206} size={12} anchor="start">can be reduced by heating</T>
    <T x={262} y={220} size={12} anchor="start">with carbon (Zn, Fe, Cu)</T>
    <T x={262} y={290} size={12} anchor="start">Ag and Au are often found native</T>
    <T x={262} y={306} size={11} anchor="start">metals above H react with dilute acids</T>
    <T x={262} y={320} size={11} anchor="start">dashed boxes: non-metals shown for comparison</T>
  </Svg>
);

const BlastFurnace = () => (
  <Svg w={560} h={330} label="Blast furnace: iron ore, coke and limestone enter at the top, hot air near the bottom, molten iron and slag leave at the bottom and waste gases leave at the top">
    <path d="M200 50 L180 170 L215 270 L345 270 L380 170 L360 50 Z" fill="#fde2c4" stroke={K} strokeWidth={2.5} />
    <L x1={280} y1={8} x2={280} y2={52} arrow w={2.5} />
    <T x={266} y={24} size={12} anchor="end">iron ore, coke and limestone in</T>
    <L x1={330} y1={30} x2={455} y2={30} arrow w={2} />
    <T x={455} y={50} size={12} anchor="end">waste gases out</T>
    <L x1={70} y1={225} x2={198} y2={225} arrow w={2.5} />
    <T x={70} y={212} size={12} anchor="start">hot air blown in</T>
    <L x1={470} y1={225} x2={362} y2={225} arrow w={2.5} />
    <T x={470} y={212} size={12} anchor="end">hot air blown in</T>
    <L x1={250} y1={270} x2={250} y2={310} arrow w={2.5} />
    <T x={250} y={324} size={12}>molten iron</T>
    <L x1={310} y1={270} x2={310} y2={310} arrow w={2.5} />
    <T x={335} y={324} size={12} anchor="start">molten slag</T>
    <T x={280} y={95} size={12}>Fe₂O₃ + 3CO → 2Fe + 3CO₂</T>
    <T x={280} y={120} size={11}>(carbon monoxide reduces the ore)</T>
    <T x={280} y={165} size={12}>CaCO₃ → CaO + CO₂</T>
    <T x={280} y={185} size={12}>CaO + SiO₂ → CaSiO₃ (slag)</T>
    <T x={280} y={245} size={12}>C + O₂ → CO₂ (heat)</T>
  </Svg>
);

export const CHEM_FIGS = {
  reactivitySeries: ReactivitySeries,
  blastFurnace: BlastFurnace,
  phScale: PhScale,
  reactionProfile: ReactionProfile,
  rateGraph: RateGraph,
  electrolysis: Electrolysis,
  fuelCell: FuelCell,
  bohrModels: BohrModels,
  dotCrossIonic: DotCrossIonic,
  dotCrossCovalent: DotCrossCovalent,
  giantStructures: GiantStructures,
  metallic: Metallic,
  diffusionTube: DiffusionTube,
};
