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

export const CHEM_FIGS = {
  bohrModels: BohrModels,
  dotCrossIonic: DotCrossIonic,
  dotCrossCovalent: DotCrossCovalent,
  giantStructures: GiantStructures,
  metallic: Metallic,
  diffusionTube: DiffusionTube,
};
