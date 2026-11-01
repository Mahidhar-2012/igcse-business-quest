// More original Chemistry diagrams, drawn in the plain black-line style of exam papers.
import { Svg, T, L, K } from './svgFigs.jsx';
import { C, Lab, LabL, Box, Arrow, Ax } from './svgKit.jsx';

/* ---------- Ionic lattice ---------- */
const IonicLattice = () => (
  <Svg w={560} h={300} label="Giant ionic lattice of sodium chloride: a regular three-dimensional arrangement of alternating positive sodium ions and negative chloride ions held by strong electrostatic attraction">
    {Array.from({ length: 4 }, (_, r) => Array.from({ length: 4 }, (_, c) => {
      const x = 60 + c * 60, y = 50 + r * 60, na = (r + c) % 2 === 0;
      return (
        <g key={`${r}${c}`}>
          {c < 3 && <L x1={x} y1={y} x2={x + 60} y2={y} w={1.6} />}
          {r < 3 && <L x1={x} y1={y} x2={x} y2={y + 60} w={1.6} />}
          <circle cx={x} cy={y} r={na ? 14 : 20} fill={na ? '#fecaca' : '#bbf7d0'} stroke={K} strokeWidth={2} />
          <text x={x} y={y + 4} textAnchor="middle" fontSize={11} fontWeight={800}>{na ? 'Na⁺' : 'Cl⁻'}</text>
        </g>
      );
    }))}
    <circle cx={312} cy={46} r={10} fill="#fecaca" stroke={K} strokeWidth={1.6} /><T x={332} y={50} anchor="start" size={12}>Na⁺ ion (small, positive)</T>
    <circle cx={312} cy={86} r={14} fill="#bbf7d0" stroke={K} strokeWidth={1.6} /><T x={332} y={90} anchor="start" size={12}>Cl⁻ ion (large, negative)</T>
    <L x1={298} y1={126} x2={326} y2={126} w={1.6} /><T x={332} y={130} anchor="start" size={12}>strong electrostatic attraction</T>
    <rect x={300} y={160} width={240} height={110} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={420} y={182} bold size={12}>Because of the giant lattice:</T>
    <T x={420} y={202} size={11}>very high melting and boiling points</T>
    <T x={420} y={220} size={11}>solid: ions fixed, does not conduct</T>
    <T x={420} y={238} size={11}>molten or dissolved: ions free, conducts</T>
    <T x={420} y={256} size={11}>brittle: like charges meet when it shifts</T>
  </Svg>
);

/* ---------- Graphite ---------- */
const GraphiteStructure = () => {
  const hex = (cx, cy, r = 20) => Array.from({ length: 6 }, (_, i) => `${cx + r * Math.cos((Math.PI / 3) * i + Math.PI / 6)},${cy + r * Math.sin((Math.PI / 3) * i + Math.PI / 6)}`).join(' ');
  return (
    <Svg w={560} h={300} label="Graphite: layers of carbon atoms in hexagons, each atom bonded to three others, with weak forces between the layers and delocalised electrons that allow conduction">
      <T x={150} y={22} bold size={13}>One layer (top view)</T>
      {[[93, 80], [131, 80], [169, 80], [112, 113], [150, 113], [188, 113], [93, 146], [131, 146], [169, 146]].map(([x, y], i) => <polygon key={i} points={hex(x, y, 22)} fill="#f1f5f9" stroke={K} strokeWidth={2} />)}
      <T x={150} y={198} size={11}>each carbon bonded to 3 others</T>
      <T x={150} y={212} size={11}>one electron per atom is delocalised</T>
      <T x={420} y={22} bold size={13}>Layers (side view)</T>
      {[60, 110, 160].map((y) => <g key={y}><L x1={310} y1={y} x2={530} y2={y} w={4} />{[330, 380, 430, 480].map((x) => <circle key={x} cx={x} cy={y} r={6} fill="#6b7280" stroke={K} strokeWidth={1.4} />)}</g>)}
      <T x={420} y={86} size={11} fill={C.red} bold>weak forces between layers</T>
      <T x={420} y={136} size={11} fill={C.red} bold>layers slide over each other</T>
      <rect x={310} y={190} width={230} height={86} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
      <T x={425} y={212} bold size={12}>Uses follow from structure</T>
      <T x={425} y={232} size={11}>soft, slippery: pencils and lubricant</T>
      <T x={425} y={250} size={11}>delocalised electrons: electrodes</T>
      <T x={425} y={268} size={11}>high melting point: strong bonds</T>
    </Svg>
  );
};

/* ---------- Periodic Table layout ---------- */
const PeriodicLayout = () => {
  const cell = (c, r, fill) => <rect key={`${c}-${r}`} x={40 + c * 28} y={50 + r * 26} width={26} height={24} fill={fill} stroke={K} strokeWidth={1.2} />;
  const cells = [];
  const groupsTop = [0, 1, 12, 13, 14, 15, 16, 17];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 18; c++) {
      const isTrans = c >= 2 && c <= 11;
      if (r < 1 && c > 0 && c < 17) continue;
      if (r < 3 && isTrans) continue;
      let fill = '#e5e7eb';
      if (c === 0 && !(r === 0 && false)) fill = '#fecaca';
      else if (c === 1) fill = '#fed7aa';
      else if (isTrans) fill = '#bfdbfe';
      else if (c === 17) fill = '#ddd6fe';
      else if (c >= 12 && c <= 16) fill = '#bbf7d0';
      cells.push(cell(c, r, fill));
    }
  }
  return (
    <Svg w={560} h={300} label="Layout of the Periodic Table: groups are vertical columns, periods are horizontal rows; Group I alkali metals, Group II, the transition elements, Groups III to VII, and Group VIII noble gases">
      {cells}
      {Array.from({ length: 8 }, (_, i) => <T key={i} x={53 + [0, 1, 12, 13, 14, 15, 16, 17][i] * 28} y={42} size={10} bold>{['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'][i]}</T>)}
      {[1, 2, 3, 4].map((p, i) => <T key={p} x={24} y={67 + i * 26} size={10} bold>{p}</T>)}
      <T x={38} y={42} size={10} anchor="end">Group</T>
      <T x={14} y={28} size={10} anchor="start" bold>Period ↓</T>
      <path d="M404 50 L404 76 L432 76 L432 102 L460 102 L460 128 L488 128 L488 154" fill="none" stroke={C.red} strokeWidth={2.4} />
      <T x={400} y={176} size={11} fill={C.red} bold>metals | non-metals</T>
      <T x={400} y={190} size={11} fill={C.red}>(zig-zag line)</T>
      <Lab px={54} py={118} tx={40} ty={210}>Group I: alkali metals</Lab>
      <Lab px={250} py={158} tx={230} ty={240}>transition elements</Lab>
      <Lab px={530} py={140} tx={380} ty={226}>Group VIII: noble gases</Lab>
      <T x={280} y={284} size={11}>Group number = outer electrons (Groups I to VII). Period number = shells.</T>
    </Svg>
  );
};

/* ---------- Group I trends ---------- */
const Group1Trends = () => (
  <Svg w={560} h={290} label="Group I alkali metals lithium, sodium and potassium: reactivity increases down the group, melting point decreases and density increases; they are soft and react with water to make hydrogen and an alkaline solution">
    {[['Li', 'lithium'], ['Na', 'sodium'], ['K', 'potassium']].map(([s, n], i) => (
      <g key={s}>
        <circle cx={110} cy={70 + i * 70} r={26} fill="#fecaca" stroke={K} strokeWidth={2} />
        <T x={110} y={76 + i * 70} bold size={16}>{s}</T>
        <T x={180} y={74 + i * 70} size={12} anchor="start">{n}</T>
      </g>
    ))}
    <L x1={270} y1={40} x2={270} y2={240} arrow w={2.6} stroke={C.red} />
    <T x={285} y={70} size={12} anchor="start" bold fill={C.red}>reactivity increases</T>
    <L x1={420} y1={40} x2={420} y2={236} arrow w={2.6} stroke={C.navy} />
    <T x={434} y={70} size={12} anchor="start" bold fill={C.navy}>melting point</T><T x={434} y={86} size={12} anchor="start" bold fill={C.navy}>decreases</T>
    <T x={285} y={100} size={12} anchor="start" bold>density increases</T>
    <T x={285} y={150} size={11} anchor="start">outer electron further out,</T>
    <T x={285} y={166} size={11} anchor="start">so lost more easily</T>
    <rect x={60} y={246} width={440} height={36} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={280} y={269} size={12} bold>Soft metals. 2Na + 2H₂O → 2NaOH + H₂ (an alkaline solution)</T>
  </Svg>
);

/* ---------- Halogens ---------- */
const Halogens = () => (
  <Svg w={560} h={290} label="Group VII halogens: chlorine is a pale green gas, bromine a red-brown liquid and iodine a grey-black solid; reactivity decreases down the group so a more reactive halogen displaces a less reactive halide">
    {[['Cl₂', 'chlorine', 'pale green gas', '#d9f99d'], ['Br₂', 'bromine', 'red-brown liquid', '#fdba74'], ['I₂', 'iodine', 'grey-black solid', '#9ca3af']].map(([s, n, d, f], i) => (
      <g key={s}>
        <rect x={40 + i * 160} y={40} width={130} height={90} rx={10} fill={f} stroke={K} strokeWidth={2} />
        <T x={105 + i * 160} y={78} bold size={20}>{s}</T>
        <T x={105 + i * 160} y={100} bold size={12}>{n}</T>
        <T x={105 + i * 160} y={118} size={11}>{d}</T>
      </g>
    ))}
    <L x1={50} y1={150} x2={490} y2={150} arrow w={2.4} stroke={C.red} />
    <T x={270} y={170} size={12} bold fill={C.red}>reactivity decreases down the group; density and boiling point increase</T>
    <rect x={40} y={190} width={480} height={80} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={280} y={212} bold size={12}>Displacement: a more reactive halogen takes the place of a less reactive one</T>
    <T x={280} y={234} size={12}>Cl₂ + 2KBr → 2KCl + Br₂   (chlorine displaces bromine: solution turns orange)</T>
    <T x={280} y={254} size={12}>Br₂ + 2KCl → no reaction   (bromine is less reactive than chlorine)</T>
  </Svg>
);

/* ---------- Collision theory ---------- */
const CollisionTheory = () => (
  <Svg w={560} h={300} label="Collision theory: particles must collide with at least the activation energy to react; a low-energy collision bounces apart and a high-energy collision reacts; a higher temperature gives more successful collisions">
    <T x={140} y={22} bold size={13}>Collision with too little energy</T>
    <circle cx={90} cy={90} r={20} fill="#fecaca" stroke={K} strokeWidth={2} /><circle cx={190} cy={90} r={20} fill="#bfdbfe" stroke={K} strokeWidth={2} />
    <L x1={50} y1={90} x2={68} y2={90} arrow w={1.6} /><L x1={230} y1={90} x2={212} y2={90} arrow w={1.6} />
    <T x={140} y={140} size={11}>slow particles bounce apart:</T><T x={140} y={154} size={11} bold>no reaction</T>
    <T x={420} y={22} bold size={13}>Collision with at least Ea</T>
    <circle cx={370} cy={90} r={20} fill="#fecaca" stroke={K} strokeWidth={2} /><circle cx={470} cy={90} r={20} fill="#bfdbfe" stroke={K} strokeWidth={2} />
    <L x1={310} y1={90} x2={348} y2={90} arrow w={3} stroke={C.red} /><L x1={530} y1={90} x2={492} y2={90} arrow w={3} stroke={C.red} />
    <T x={420} y={140} size={11}>fast particles collide hard:</T><T x={420} y={154} size={11} bold>reaction (products form)</T>
    <rect x={50} y={180} width={460} height={100} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={280} y={202} bold size={12}>Rate increases when there are more frequent AND more successful collisions</T>
    <T x={280} y={222} size={11}>higher temperature: particles move faster, so more collisions have energy ≥ Ea</T>
    <T x={280} y={240} size={11}>higher concentration or pressure, larger surface area: more collisions each second</T>
    <T x={280} y={258} size={11}>catalyst: lowers Ea, so more collisions are successful</T>
  </Svg>
);

/* ---------- Haber process ---------- */
const HaberProcess = () => (
  <Svg w={560} h={300} label="Haber process flow diagram: nitrogen from air and hydrogen from methane are compressed and passed over an iron catalyst at 450 degrees Celsius and 200 atmospheres; ammonia is cooled and liquefied and unreacted gases are recycled">
    <Box x={14} y={40} w={96} h={40} fill={C.blue}>nitrogen</Box><T x={62} y={94} size={10}>from the air</T>
    <Box x={14} y={110} w={96} h={40} fill={C.blue}>hydrogen</Box><T x={62} y={164} size={10}>from methane</T>
    <Arrow x1={112} y1={60} x2={160} y2={96} /><Arrow x1={112} y1={130} x2={160} y2={110} />
    <Box x={162} y={82} w={86} h={44} fill={C.grey} size={11}>compressor</Box>
    <T x={205} y={146} size={10}>200 atm</T>
    <Arrow x1={250} y1={104} x2={290} y2={104} />
    <rect x={292} y={50} width={110} height={110} rx={10} fill="#fed7aa" stroke={K} strokeWidth={2.4} />
    <T x={347} y={84} bold size={12}>reactor</T><T x={347} y={102} size={11}>iron catalyst</T><T x={347} y={118} size={11}>450 °C</T><T x={347} y={138} size={10}>N₂ + 3H₂ ⇌ 2NH₃</T>
    <Arrow x1={404} y1={104} x2={440} y2={104} />
    <Box x={442} y={82} w={96} h={44} fill="#e0f2fe" size={11}>cooler</Box><T x={490} y={142} size={10}>NH₃ liquefies</T>
    <Arrow x1={490} y1={152} x2={490} y2={186} label="liquid ammonia" lx={490} ly={204} />
    <path d="M440 120 V230 H225 V130" fill="none" stroke={K} strokeWidth={1.8} strokeDasharray="6 4" />
    <L x1={225} y1={134} x2={225} y2={128} arrow w={1.6} />
    <T x={330} y={248} size={11}>unreacted nitrogen and hydrogen are recycled</T>
    <T x={280} y={282} size={11}>Compromise: a lower temperature gives more ammonia but too slowly, so 450 °C is used</T>
  </Svg>
);

/* ---------- Contact process ---------- */
const ContactProcess = () => (
  <Svg w={560} h={290} label="Contact process flow diagram: sulfur is burned to make sulfur dioxide, which is converted to sulfur trioxide at 450 degrees Celsius and 2 atmospheres with a vanadium oxide catalyst, then absorbed in concentrated sulfuric acid to make oleum and diluted to sulfuric acid">
    <Box x={14} y={60} w={100} h={44} fill="#fde68a" size={11}>burn sulfur in air</Box>
    <T x={64} y={124} size={11}>S + O₂ → SO₂</T>
    <Arrow x1={116} y1={82} x2={156} y2={82} />
    <rect x={158} y={36} width={130} height={104} rx={10} fill="#fed7aa" stroke={K} strokeWidth={2.4} />
    <T x={223} y={66} bold size={12}>converter</T><T x={223} y={84} size={11}>V₂O₅ catalyst</T><T x={223} y={100} size={11}>450 °C, 2 atm</T><T x={223} y={122} size={10}>2SO₂ + O₂ ⇌ 2SO₃</T>
    <Arrow x1={290} y1={88} x2={328} y2={88} />
    <Box x={330} y={60} w={100} h={56} fill={C.blue} size={11}>conc. H₂SO₄</Box>
    <T x={380} y={134} size={10}>absorbs SO₃: oleum</T>
    <Arrow x1={432} y1={88} x2={466} y2={88} />
    <Box x={468} y={60} w={76} h={56} fill={C.green} size={11}>add water</Box>
    <Arrow x1={506} y1={118} x2={506} y2={160} label="sulfuric acid" lx={506} ly={178} />
    <T x={280} y={220} size={11}>SO₃ is not added to water directly: the reaction is too violent</T>
    <T x={280} y={250} size={12} bold>Conditions: 450 °C (rate vs yield), 2 atm (yield is already high), V₂O₅ catalyst</T>
  </Svg>
);

/* ---------- Equilibrium rates ---------- */
const EquilibriumRates = () => (
  <Svg w={560} h={290} label="Graph of reaction rate against time for a reversible reaction: the forward rate falls and the reverse rate rises until they become equal at equilibrium, after which both stay constant">
    <Ax x0={80} y0={235} x1={500} y1={30} xl="time" yl="rate of reaction" />
    <path d="M82 60 C150 120 220 150 290 160 H480" fill="none" stroke="#2563eb" strokeWidth={3.4} />
    <path d="M82 232 C150 200 220 175 290 160 H480" fill="none" stroke="#dc2626" strokeWidth={3.4} />
    <L x1={290} y1={40} x2={290} y2={235} w={1.4} dash="5 4" />
    <T x={400} y={140} size={12} bold>equilibrium: rates equal</T>
    <T x={150} y={90} size={12} anchor="start" fill="#2563eb" bold>forward reaction</T>
    <T x={150} y={216} size={12} anchor="start" fill="#dc2626" bold>reverse reaction</T>
    <T x={400} y={188} size={11}>from here, concentrations stay constant</T>
  </Svg>
);

/* ---------- Conditions for rusting ---------- */
const RustingVenn = () => (
  <Svg w={560} h={280} label="Rusting needs both oxygen and water: iron plus oxygen plus water forms hydrated iron(III) oxide, rust; with only one of them iron does not rust">
    <circle cx={200} cy={130} r={85} fill="#bfdbfe" opacity={0.7} stroke={K} strokeWidth={2} />
    <circle cx={290} cy={130} r={85} fill="#fecaca" opacity={0.7} stroke={K} strokeWidth={2} />
    <T x={158} y={120} bold size={14}>water</T><T x={158} y={138} size={10}>no O₂: no rust</T>
    <T x={334} y={120} bold size={14}>oxygen</T><T x={334} y={138} size={10}>no water: no rust</T>
    <T x={245} y={120} bold size={13} fill="#92400e">RUST</T><T x={245} y={138} size={10}>iron + both</T>
    <rect x={400} y={60} width={140} height={150} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={470} y={84} bold size={12}>Prevent rusting</T>
    <T x={470} y={106} size={11}>paint, grease, plastic:</T><T x={470} y={120} size={11}>keep out air and water</T>
    <T x={470} y={142} size={11}>galvanising: zinc coat and</T><T x={470} y={156} size={11}>sacrificial protection</T>
    <T x={470} y={178} size={11}>magnesium blocks: they</T><T x={470} y={192} size={11}>corrode instead of iron</T>
    <T x={245} y={254} size={12} bold>Iron + oxygen + water → hydrated iron(III) oxide (rust)</T>
  </Svg>
);

/* ---------- Electroplating cell ---------- */
const PlatingCell = () => (
  <Svg w={560} h={300} label="Electroplating a key with copper: the key is the cathode, a copper anode dissolves, and the electrolyte is copper(II) sulfate solution; copper ions are discharged at the cathode">
    <rect x={150} y={110} width={260} height={140} fill="#bae6fd" stroke={K} strokeWidth={2.6} />
    <rect x={190} y={80} width={20} height={120} fill="#b45309" stroke={K} strokeWidth={2} />
    <rect x={350} y={80} width={20} height={120} fill="#9ca3af" stroke={K} strokeWidth={2} />
    <path d="M200 80 V40 H280 M360 80 V40 H300" fill="none" stroke={K} strokeWidth={2.2} />
    <circle cx={290} cy={40} r={14} fill="#fff" stroke={K} strokeWidth={2} /><T x={290} y={45} size={13} bold>+ −</T>
    <T x={200} y={72} size={13} bold>+</T><T x={360} y={72} size={13} bold>−</T>
    <Lab px={210} py={160} tx={420} ty={140}>copper anode (+)</Lab>
    <T x={420} y={156} size={11} anchor="start">Cu → Cu²⁺ + 2e⁻</T>
    <Lab px={370} py={170} tx={420} ty={196}>key = cathode (−)</Lab>
    <T x={420} y={212} size={11} anchor="start">Cu²⁺ + 2e⁻ → Cu</T>
    <LabL px={160} py={230} tx={140} ty={262}>copper(II) sulfate solution</LabL>
    <T x={280} y={290} size={11}>The blue colour stays the same: copper ions are replaced as fast as they are used</T>
  </Svg>
);

/* ---------- Aluminium extraction cell ---------- */
const AluminiumCell = () => (
  <Svg w={560} h={300} label="Electrolysis cell for aluminium: molten aluminium oxide dissolved in cryolite, carbon anodes where oxygen forms and burns the carbon, and a carbon lining as the cathode where molten aluminium collects">
    <rect x={90} y={90} width={300} height={150} fill="#d1d5db" stroke={K} strokeWidth={3} />
    <rect x={106} y={100} width={268} height={126} fill="#fed7aa" stroke={K} strokeWidth={1.4} />
    {[150, 230, 310].map((x) => <rect key={x} x={x} y={40} width={26} height={110} fill="#374151" stroke={K} strokeWidth={2} />)}
    <rect x={106} y={210} width={268} height={16} fill="#cbd5e1" stroke={K} strokeWidth={1.4} />
    <path d="M163 40 V20 H323" fill="none" stroke={K} strokeWidth={2} /><T x={243} y={14} size={11} bold>+ anodes</T>
    <path d="M90 232 H60 V20" fill="none" stroke={K} strokeWidth={2} /><T x={60} y={14} size={11} bold>− cathode</T>
    <Lab px={243} py={80} tx={410} ty={60}>carbon anodes: O²⁻ → O₂</Lab>
    <Lab px={243} py={170} tx={410} ty={130}>molten Al₂O₃ in cryolite</Lab>
    <T x={410} y={146} size={11} anchor="start">(cryolite lowers melting point)</T>
    <Lab px={243} py={218} tx={410} ty={200}>molten aluminium collects</Lab>
    <T x={410} y={216} size={11} anchor="start">Al³⁺ + 3e⁻ → Al</T>
    <T x={280} y={272} size={11}>Oxygen burns the hot carbon anodes away as carbon dioxide, so they are replaced</T>
  </Svg>
);

/* ---------- Greenhouse effect ---------- */
const GreenhouseEffect = () => (
  <Svg w={560} h={300} label="The enhanced greenhouse effect: short-wave radiation from the Sun passes through the atmosphere and warms the Earth, the Earth emits infra-red radiation, and greenhouse gases such as carbon dioxide and methane absorb it and re-emit some back so less thermal energy escapes to space">
    <rect x={20} y={230} width={520} height={50} fill="#86efac" stroke={K} strokeWidth={2} /><T x={280} y={260} bold size={13}>Earth&apos;s surface</T>
    <rect x={20} y={110} width={520} height={50} fill="#bfdbfe" opacity={0.7} stroke={K} strokeWidth={1.4} strokeDasharray="6 4" /><T x={280} y={140} bold size={12}>greenhouse gases: CO₂ and CH₄</T>
    <circle cx={60} cy={40} r={26} fill="#fde047" stroke={K} strokeWidth={2} />
    <Arrow x1={90} y1={58} x2={190} y2={222} label="sunlight" lx={138} ly={86} anchor="start" stroke={C.orange} w={3} />
    <Arrow x1={300} y1={228} x2={300} y2={164} label="infra-red from Earth" lx={312} ly={196} anchor="start" stroke={C.red} w={3} />
    <Arrow x1={300} y1={108} x2={300} y2={30} label="some escapes to space" lx={312} ly={50} anchor="start" stroke={C.red} w={2} />
    <Arrow x1={500} y1={112} x2={500} y2={224} label="re-emitted to Earth" lx={490} ly={180} anchor="end" stroke={C.red} w={3} />
    <T x={280} y={296} size={11}>More CO₂ and CH₄ means more energy is trapped, so the Earth warms: climate change</T>
  </Svg>
);

/* ---------- Water treatment ---------- */
const WaterTreatment = () => (
  <Svg w={560} h={260} label="Treatment of the domestic water supply: screening, sedimentation, filtration, carbon to remove tastes and odours, then chlorination to kill microbes">
    {[['reservoir', 'water source', C.blue], ['screen', 'removes large debris', C.grey], ['sedimentation', 'solids settle out', C.yellow], ['filtration', 'removes small solids', C.green], ['carbon', 'tastes and odours', C.grey], ['chlorine', 'kills microbes', C.pink]].map(([t, cap, f], i) => (
      <g key={t}>
        <Box x={8 + i * 92} y={80} w={80} h={50} fill={f} size={10}>{t}</Box>
        <T x={48 + i * 92} y={150} size={10}>{cap}</T>
        {i < 5 && <L x1={88 + i * 92} y1={105} x2={100 + i * 92} y2={105} arrow w={1.6} />}
      </g>
    ))}
    <T x={280} y={50} bold size={12}>Stages in order</T>
    <T x={280} y={200} size={12}>Filtration does not remove dissolved salts; distillation is needed for that</T>
    <T x={280} y={222} size={11}>Pure water boils at 100 °C and melts at 0 °C</T>
  </Svg>
);

/* ---------- Addition of bromine to ethene ---------- */
const AdditionBromine = () => {
  const H = ({ x, y }) => <T x={x} y={y} size={14} bold>H</T>;
  return (
    <Svg w={560} h={260} label="Addition reaction: ethene, with a carbon double bond, reacts with bromine to form 1,2-dibromoethane; the orange bromine water turns colourless">
      <T x={80} y={30} bold size={13}>ethene</T>
      <H x={40} y={80} /><H x={40} y={150} /><H x={160} y={80} /><H x={160} y={150} />
      <T x={78} y={120} size={16} bold>C</T><T x={124} y={120} size={16} bold>C</T>
      <L x1={90} y1={112} x2={112} y2={112} w={2.4} /><L x1={90} y1={122} x2={112} y2={122} w={2.4} />
      <L x1={52} y1={90} x2={72} y2={108} w={2} /><L x1={52} y1={142} x2={72} y2={126} w={2} /><L x1={148} y1={90} x2={130} y2={108} w={2} /><L x1={148} y1={142} x2={130} y2={126} w={2} />
      <T x={210} y={122} size={22} bold>+</T>
      <T x={270} y={122} size={18} bold fill="#92400e">Br–Br</T>
      <T x={270} y={150} size={11}>bromine water (orange)</T>
      <L x1={320} y1={118} x2={360} y2={118} arrow w={2.6} />
      <T x={470} y={30} bold size={13}>1,2-dibromoethane</T>
      <T x={400} y={80} size={14} bold fill="#92400e">Br</T><T x={400} y={150} size={14} bold>H</T><T x={540} y={80} size={14} bold fill="#92400e">Br</T><T x={540} y={150} size={14} bold>H</T>
      <T x={438} y={120} size={16} bold>C</T><T x={500} y={120} size={16} bold>C</T>
      <L x1={450} y1={117} x2={488} y2={117} w={2.4} />
      <L x1={412} y1={88} x2={432} y2={108} w={2} /><L x1={412} y1={142} x2={432} y2={126} w={2} /><L x1={528} y1={88} x2={510} y2={108} w={2} /><L x1={528} y1={142} x2={510} y2={126} w={2} />
      <T x={280} y={206} size={12} bold>One product only. Test for an alkene: bromine water turns from orange-brown to colourless.</T>
      <T x={280} y={228} size={11}>The double bond opens: C=C becomes C–C, so the product is saturated</T>
    </Svg>
  );
};

/* ---------- Cracking ---------- */
const Cracking = () => (
  <Svg w={560} h={260} label="Cracking: a long chain alkane is broken by heat and a catalyst into a shorter alkane and an alkene; for example decane forms octane and ethene">
    <Box x={10} y={90} w={150} h={50} fill={C.yellow} size={11}>long alkane C₁₀H₂₂</Box>
    <Arrow x1={162} y1={115} x2={260} y2={115} label="heat + catalyst" lx={211} ly={102} />
    <Box x={262} y={50} w={150} h={50} fill={C.green} size={12}>shorter alkane C₈H₁₈</Box>
    <Box x={262} y={130} w={150} h={50} fill={C.pink} size={12}>alkene C₂H₄ (ethene)</Box>
    <L x1={262} y1={105} x2={262} y2={105} w={0} />
    <T x={425} y={79} size={11} anchor="start">fuel (petrol)</T>
    <T x={425} y={159} size={11} anchor="start">for making polymers,</T><T x={425} y={173} size={11} anchor="start">e.g. poly(ethene)</T>
    <T x={280} y={222} size={12} bold>C₁₀H₂₂ → C₈H₁₈ + C₂H₄</T>
    <T x={280} y={244} size={11}>Cracking makes shorter, more useful molecules and alkenes from long, less useful ones</T>
  </Svg>
);

/* ---------- Air composition ---------- */
const AirPie = () => {
  const arc = (a0, a1, f) => {
    const r = 90, cx = 150, cy = 140, p = (a) => [cx + r * Math.cos((a - 90) * Math.PI / 180), cy + r * Math.sin((a - 90) * Math.PI / 180)];
    const [x0, y0] = p(a0), [x1, y1] = p(a1);
    return <path d={`M${cx} ${cy} L${x0} ${y0} A${r} ${r} 0 ${a1 - a0 > 180 ? 1 : 0} 1 ${x1} ${y1}z`} fill={f} stroke={K} strokeWidth={2} />;
  };
  return (
    <Svg w={560} h={280} label="Pie chart of the composition of clean dry air: about 78 percent nitrogen, 21 percent oxygen, and about 1 percent noble gases and carbon dioxide">
      {arc(0, 280.8, '#bfdbfe')}{arc(280.8, 356.4, '#fecaca')}{arc(356.4, 360, '#bbf7d0')}
      {[['#bfdbfe', 'nitrogen N₂: about 78%'], ['#fecaca', 'oxygen O₂: about 21%'], ['#bbf7d0', 'noble gases, CO₂: about 1%']].map(([f, s], i) => (
        <g key={s}><rect x={290} y={70 + i * 40} width={22} height={22} fill={f} stroke={K} strokeWidth={1.6} /><T x={322} y={86 + i * 40} anchor="start" size={12}>{s}</T></g>
      ))}
      <T x={150} y={262} size={11}>Clean, dry air</T>
    </Svg>
  );
};

/* ---------- Condensation polymers ---------- */
const CondensationPolymers = () => (
  <Svg w={560} h={280} label="Condensation polymers: a dicarboxylic acid and a diamine join in alternating units to make nylon, a polyamide, losing water at each link; a dicarboxylic acid and a diol make PET, a polyester">
    <T x={280} y={22} bold size={13}>Alternating monomers, small molecule (water) lost at each link</T>
    <T x={20} y={64} size={13} bold anchor="start">Nylon</T>
    {[0, 1, 2].map((i) => <g key={i}><Box x={90 + i * 130} y={44} w={56} h={34} fill={C.blue} size={11}>diamine</Box><Box x={146 + i * 130} y={44} w={56} h={34} fill={C.yellow} size={11}>diacid</Box></g>)}
    {[0, 1, 2, 3, 4].map((i) => <T key={i} x={146 + i * 65} y={36} size={10} fill={C.red}>amide</T>)}
    <T x={20} y={150} size={13} bold anchor="start">PET</T>
    {[0, 1, 2].map((i) => <g key={i}><Box x={90 + i * 130} y={130} w={56} h={34} fill={C.green} size={11}>diol</Box><Box x={146 + i * 130} y={130} w={56} h={34} fill={C.yellow} size={11}>diacid</Box></g>)}
    {[0, 1, 2, 3, 4].map((i) => <T key={i} x={146 + i * 65} y={122} size={10} fill={C.red}>ester</T>)}
    <rect x={60} y={190} width={440} height={72} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={280} y={212} size={12} bold>nylon = polyamide (amide link)   PET = polyester (ester link)</T>
    <T x={280} y={232} size={11}>Addition polymers use one alkene and lose nothing; condensation polymers need two</T>
    <T x={280} y={250} size={11}>different functional groups and lose a small molecule such as water</T>
  </Svg>
);

/* ---------- Simple molecules ---------- */
const SimpleMolecules = () => {
  const mol = (cx, cy, name, formula, bonds, label) => (
    <g key={name}>
      <T x={cx} y={cy - 56} bold size={12}>{name}</T>
      {bonds.map(([x, y, s], i) => (<g key={i}><L x1={cx} y1={cy} x2={cx + x} y2={cy + y} w={2.2} /><circle cx={cx + x} cy={cy + y} r={11} fill="#fff" stroke={K} strokeWidth={1.6} /><text x={cx + x} y={cy + y + 4} textAnchor="middle" fontSize={11} fontWeight={800}>{s}</text></g>))}
      <circle cx={cx} cy={cy} r={14} fill="#e0f2fe" stroke={K} strokeWidth={2} /><text x={cx} y={cy + 5} textAnchor="middle" fontSize={13} fontWeight={800}>{formula}</text>
      <T x={cx} y={cy + 66} size={10}>{label}</T>
    </g>
  );
  return (
    <Svg w={560} h={300} label="Displayed formulae of common simple molecules: hydrogen, chlorine, water, methane, ammonia and hydrogen chloride, each atom sharing electrons to complete its outer shell">
      {mol(70, 90, 'hydrogen H₂', 'H', [[48, 0, 'H']], '1 shared pair')}
      {mol(210, 90, 'chlorine Cl₂', 'Cl', [[52, 0, 'Cl']], '1 shared pair')}
      {mol(350, 90, 'water H₂O', 'O', [[-38, 34, 'H'], [38, 34, 'H']], '2 bonds, 2 lone pairs')}
      {mol(490, 90, 'hydrogen chloride HCl', 'Cl', [[52, 0, 'H']], '1 shared pair')}
      {mol(150, 230, 'methane CH₄', 'C', [[-36, -30, 'H'], [36, -30, 'H'], [-36, 30, 'H'], [36, 30, 'H']], '4 shared pairs')}
      {mol(410, 230, 'ammonia NH₃', 'N', [[-38, 32, 'H'], [0, -42, 'H'], [38, 32, 'H']], '3 bonds, 1 lone pair')}
    </Svg>
  );
};

/* ---------- Atom structure ---------- */
const AtomStructure = () => (
  <Svg w={560} h={290} label="Structure of an atom: a small central nucleus containing protons and neutrons, surrounded by electrons in shells; the relative charge and mass of each particle are shown">
    <circle cx={150} cy={140} r={110} fill="none" stroke={K} strokeWidth={1.6} /><circle cx={150} cy={140} r={74} fill="none" stroke={K} strokeWidth={1.6} /><circle cx={150} cy={140} r={38} fill="none" stroke={K} strokeWidth={1.6} />
    <circle cx={150} cy={140} r={18} fill="#fde68a" stroke={K} strokeWidth={2} />
    {[[142, 134, '#fca5a5'], [158, 136, '#fca5a5'], [148, 148, '#d1d5db'], [160, 148, '#d1d5db']].map(([x, y, f], i) => <circle key={i} cx={x} cy={y} r={6} fill={f} stroke={K} strokeWidth={1.2} />)}
    {[[188, 140], [112, 140], [150, 66], [150, 214], [224, 140], [76, 140]].map(([x, y], i) => <circle key={i} cx={x} cy={y} r={5} fill="#2563eb" stroke={K} strokeWidth={1} />)}
    <Lab px={150} py={140} tx={290} ty={40}>nucleus: protons and neutrons</Lab>
    <Lab px={188} py={140} tx={290} ty={80}>electron in the first shell</Lab>
    <Lab px={150} py={66} tx={290} ty={110}>shells (energy levels)</Lab>
    <rect x={290} y={130} width={250} height={130} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={415} y={152} bold size={12}>Particle · relative charge · relative mass</T>
    <T x={415} y={176} size={12}>proton · +1 · 1</T>
    <T x={415} y={198} size={12}>neutron · 0 · 1</T>
    <T x={415} y={220} size={12}>electron · −1 · 1/1836 (negligible)</T>
    <T x={415} y={246} size={11}>atom: protons = electrons</T>
  </Svg>
);

export const CHEM2_FIGS = {
  ionicLattice: IonicLattice,
  graphiteStructure: GraphiteStructure,
  periodicLayout: PeriodicLayout,
  group1Trends: Group1Trends,
  halogens: Halogens,
  collisionTheory: CollisionTheory,
  haberProcess: HaberProcess,
  contactProcess: ContactProcess,
  equilibriumRates: EquilibriumRates,
  rustingVenn: RustingVenn,
  platingCell: PlatingCell,
  aluminiumCell: AluminiumCell,
  greenhouseEffect: GreenhouseEffect,
  waterTreatment: WaterTreatment,
  additionBromine: AdditionBromine,
  cracking: Cracking,
  airPie: AirPie,
  condensationPolymers: CondensationPolymers,
  simpleMolecules: SimpleMolecules,
  atomStructure: AtomStructure,
};
