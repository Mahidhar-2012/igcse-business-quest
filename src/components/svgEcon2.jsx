// More original Economics diagrams, drawn in the plain black-line style of exam papers.
import { Svg, T, L, K } from './svgFigs.jsx';
import { C, Box, Arrow, Ax } from './svgKit.jsx';

const RED = '#dc2626';
const BLUE = '#2563eb';

/* ---------- PES diagrams ---------- */
const PesCurves = () => (
  <Svg w={560} h={296} label="Supply curves showing price elasticity of supply: a straight supply curve that cuts the price axis is elastic, one that cuts the quantity axis is inelastic, one through the origin has unit elasticity">
    <Ax x0={50} y0={215} x1={250} y1={30} xl="Quantity" yl="Price" />
    <L x1={50} y1={170} x2={240} y2={60} w={3.2} stroke={BLUE} />
    <T x={150} y={256} bold size={12}>Elastic: PES &gt; 1</T>
    <T x={150} y={270} size={10}>cuts the price axis</T>
    <Ax x0={320} y0={215} x1={520} y1={30} xl="Quantity" yl="Price" />
    <L x1={350} y1={215} x2={450} y2={45} w={3.2} stroke={RED} />
    <T x={420} y={256} bold size={12}>Inelastic: PES &lt; 1</T>
    <T x={420} y={270} size={10}>cuts the quantity axis</T>
    <T x={280} y={286} size={11}>Through the origin: PES = 1. Vertical: PES = 0. Horizontal: perfectly elastic.</T>
  </Svg>
);

/* ---------- Individual to market demand ---------- */
const MarketDemand = () => {
  const panel = (ox, name, qEnd, col) => (
    <g key={name}>
      <Ax x0={ox} y0={215} x1={ox + 150} y1={40} xl="Quantity" yl="Price" />
      <L x1={ox + 10} y1={50} x2={ox + qEnd} y2={200} w={3} stroke={col} />
      <L x1={ox} y1={125} x2={ox + (10 + (qEnd - 10) * 0.5)} y2={125} w={1.2} dash="5 4" />
      <circle cx={ox + 10 + (qEnd - 10) * 0.5} cy={125} r={3.4} fill={col} />
      <T x={ox + 75} y={250} bold size={12}>{name}</T>
    </g>
  );
  return (
    <Svg w={560} h={280} label="Market demand is found by adding the quantities that every individual buys at each price: Ann's demand plus Ben's demand gives the market demand curve">
      {panel(30, "Ann's demand", 60, BLUE)}
      <T x={203} y={195} size={22} bold>+</T>
      {panel(225, "Ben's demand", 80, RED)}
      <T x={388} y={195} size={22} bold>=</T>
      {panel(405 - 10, 'Market demand', 150, '#0d9488')}
      <T x={280} y={272} size={11}>At each price, add the quantities (horizontal sum)</T>
    </Svg>
  );
};

/* ---------- Price mechanism ---------- */
const PriceMechanism = () => (
  <Svg w={560} h={290} label="Price mechanism: where demand and supply cross is the equilibrium price; above it there is a surplus so price falls, below it there is a shortage so price rises">
    <Ax x0={70} y0={240} x1={400} y1={30} xl="Quantity" yl="Price" xo={38} yo={42} />
    <L x1={100} y1={50} x2={360} y2={220} w={3.2} stroke={BLUE} /><T x={372} y={226} size={13} bold fill={BLUE} anchor="start">D</T>
    <L x1={100} y1={220} x2={360} y2={50} w={3.2} stroke={RED} /><T x={372} y={54} size={13} bold fill={RED} anchor="start">S</T>
    <circle cx={230} cy={135} r={5} fill={K} />
    <L x1={70} y1={135} x2={230} y2={135} w={1.2} dash="5 4" /><L x1={230} y1={135} x2={230} y2={240} w={1.2} dash="5 4" />
    <T x={60} y={139} size={11} anchor="end" bold>P*</T><T x={230} y={256} size={11} bold>Q*</T>
    <L x1={70} y1={85} x2={310} y2={85} w={1.2} dash="5 4" /><T x={60} y={89} size={11} anchor="end">P₁</T>
    <L x1={154} y1={80} x2={306} y2={80} w={3} stroke={C.orange} /><T x={230} y={72} size={11} bold fill={C.orange}>surplus: price falls</T>
    <L x1={70} y1={185} x2={310} y2={185} w={1.2} dash="5 4" /><T x={60} y={189} size={11} anchor="end">P₂</T>
    <L x1={154} y1={190} x2={306} y2={190} w={3} stroke={C.teal} /><T x={230} y={206} size={11} bold fill={C.teal}>shortage: price rises</T>
    <rect x={415} y={70} width={135} height={130} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={482} y={92} bold size={12}>Price signals</T>
    <T x={482} y={114} size={11}>demand = supply at P*</T>
    <T x={482} y={134} size={11}>price rations scarce goods</T>
    <T x={482} y={154} size={11}>and tells firms what</T><T x={482} y={168} size={11}>to produce</T>
    <T x={482} y={188} size={11}>the market clears</T>
  </Svg>
);

/* ---------- Mergers ---------- */
const Mergers = () => (
  <Svg w={560} h={290} label="Types of merger: horizontal merger joins firms at the same stage of the same industry; vertical merger joins firms at different stages of production in one industry; conglomerate merger joins firms in different industries">
    <T x={20} y={42} bold size={12} anchor="start">Horizontal</T>
    <Box x={130} y={22} w={110} h={34} fill={C.blue} size={11}>Bakery A</Box><T x={260} y={44} size={18} bold>+</T><Box x={280} y={22} w={110} h={34} fill={C.blue} size={11}>Bakery B</Box>
    <T x={470} y={36} size={11}>same industry,</T><T x={470} y={50} size={11}>same stage</T>
    <T x={20} y={132} bold size={12} anchor="start">Vertical</T>
    <Box x={130} y={106} w={90} h={34} fill={C.green} size={11}>Wheat farm</Box><L x1={222} y1={123} x2={242} y2={123} arrow w={1.8} /><Box x={244} y={106} w={90} h={34} fill={C.yellow} size={11}>Flour mill</Box><L x1={336} y1={123} x2={356} y2={123} arrow w={1.8} /><Box x={358} y={106} w={90} h={34} fill={C.pink} size={11}>Bakery</Box>
    <T x={500} y={118} size={11}>same industry,</T><T x={500} y={132} size={11}>different stages</T>
    <path d="M175 148 V160 H403 V148" fill="none" stroke={RED} strokeWidth={2} /><T x={290} y={176} size={10} fill={RED} bold>backward: buying a supplier   |   forward: buying a customer</T>
    <T x={20} y={228} bold size={12} anchor="start">Conglomerate</T>
    <Box x={130} y={206} w={110} h={34} fill={C.blue} size={11}>Bakery</Box><T x={260} y={228} size={18} bold>+</T><Box x={280} y={206} w={110} h={34} fill={C.pink} size={11}>Car maker</Box>
    <T x={470} y={220} size={11}>different</T><T x={470} y={234} size={11}>industries</T>
    <T x={280} y={272} size={11}>Why merge: economies of scale, more market share, spreading risk (conglomerate)</T>
  </Svg>
);

/* ---------- HDI ---------- */
const HdiParts = () => (
  <Svg w={560} h={280} label="The Human Development Index combines three measures: health measured by life expectancy, education measured by years of schooling, and income measured by gross national income per head; the result is a value between 0 and 1">
    <Box x={20} y={40} w={150} h={50} fill={C.green} size={12}>Health: life expectancy</Box>
    <Box x={20} y={110} w={150} h={50} fill={C.blue} size={12}>Education: schooling</Box>
    <Box x={20} y={180} w={150} h={50} fill={C.yellow} size={12}>Income: GNI per head</Box>
    {[65, 135, 205].map((y) => <L key={y} x1={172} y1={y} x2={250} y2={135} arrow w={2} />)}
    <rect x={252} y={95} width={110} height={80} rx={10} fill="#fed7aa" stroke={K} strokeWidth={2.4} />
    <T x={307} y={128} bold size={16}>HDI</T><T x={307} y={148} size={11}>a value from 0 to 1</T>
    <L x1={364} y1={135} x2={394} y2={135} arrow w={2.2} />
    <rect x={396} y={60} width={150} height={150} rx={8} fill={C.yellow} stroke={K} strokeWidth={1.5} />
    <T x={471} y={82} bold size={12}>Closer to 1 is better</T>
    <T x={471} y={106} size={11}>+ more than income alone</T>
    <T x={471} y={126} size={11}>+ easy to compare countries</T>
    <T x={471} y={152} size={11}>− averages hide inequality</T>
    <T x={471} y={172} size={11}>− ignores environment,</T><T x={471} y={186} size={11}>freedom and happiness</T>
    <T x={280} y={264} size={11}>GDP per head alone measures only income, not health or education</T>
  </Svg>
);

/* ---------- Optimum population ---------- */
const OptimumPopulation = () => (
  <Svg w={560} h={290} label="Optimum population: output per head rises as population grows towards the optimum, then falls as the population becomes too large for the resources, which is overpopulation">
    <Ax x0={70} y0={235} x1={510} y1={30} xl="Population size" yl="Output per head" />
    <path d="M85 215 Q290 -50 495 215" fill="none" stroke={BLUE} strokeWidth={3.4} />
    <circle cx={290} cy={82} r={5} fill={K} />
    <L x1={290} y1={82} x2={290} y2={235} w={1.2} dash="5 4" />
    <T x={290} y={64} bold size={12}>optimum population</T>
    <T x={175} y={192} size={12} bold fill={C.teal}>under-population</T><T x={175} y={207} size={10}>too few workers to use resources</T>
    <T x={405} y={192} size={12} bold fill={RED}>overpopulation</T><T x={405} y={207} size={10}>too many people for resources</T>
    <T x={290} y={276} size={11}>The optimum changes with technology, capital and discoveries of resources</T>
  </Svg>
);

/* ---------- Current account ---------- */
const CurrentAccount = () => (
  <Svg w={560} h={290} label="The four components of the current account of the balance of payments: trade in goods, trade in services, primary income and secondary income; the balance is exports minus imports across all four">
    <Box x={20} y={30} w={240} h={56} fill={C.blue} size={12}>Trade in goods (visible)</Box>
    <T x={140} y={104} size={10}>cars, oil, food, machinery</T>
    <Box x={300} y={30} w={240} h={56} fill={C.green} size={12}>Trade in services (invisible)</Box>
    <T x={420} y={104} size={10}>tourism, banking, shipping</T>
    <Box x={20} y={124} w={240} h={56} fill={C.yellow} size={12}>Primary income</Box>
    <T x={140} y={198} size={10}>wages, profits, interest and dividends</T>
    <Box x={300} y={124} w={240} h={56} fill={C.pink} size={12}>Secondary income</Box>
    <T x={420} y={198} size={10}>transfers: foreign aid, remittances</T>
    <rect x={60} y={222} width={440} height={52} rx={8} fill="#fed7aa" stroke={K} strokeWidth={2} />
    <T x={280} y={244} bold size={12}>Balance = money in from abroad − money out</T>
    <T x={280} y={262} size={11}>more in than out: surplus   |   more out than in: deficit</T>
  </Svg>
);

/* ---------- Costs ---------- */
const CostCurves = () => (
  <Svg w={560} h={290} label="Average cost curves: average fixed cost falls continuously as output rises, average variable cost is U-shaped, and average total cost is the sum of the two and is also U-shaped">
    <Ax x0={70} y0={235} x1={510} y1={30} xl="Output" yl="Cost per unit" />
    <path d="M90 80 Q120 195 490 215" fill="none" stroke="#0d9488" strokeWidth={3} />
    <path d="M90 190 Q170 235 280 185 Q360 140 470 80" fill="none" stroke={C.orange} strokeWidth={3} />
    <path d="M90 42 Q150 185 270 158 Q380 130 470 58" fill="none" stroke={BLUE} strokeWidth={3} />
    <T x={440} y={198} size={12} bold fill="#0d9488" anchor="end">AFC falls</T>
    <T x={478} y={86} size={12} bold fill={C.orange} anchor="start">AVC</T>
    <T x={478} y={60} size={12} bold fill={BLUE} anchor="start">AC</T>
    <T x={280} y={276} size={11}>AC = AFC + AVC. Spreading fixed costs over more units lowers AFC; diminishing returns raise AVC.</T>
  </Svg>
);

/* ---------- Inflation causes ---------- */
const InflationCauses = () => (
  <Svg w={560} h={280} label="Causes of inflation: demand-pull inflation happens when total demand grows faster than supply and pulls prices up; cost-push inflation happens when firms' costs rise and push prices up">
    <T x={280} y={22} bold size={13}>Two main causes of a rising price level</T>
    <T x={20} y={64} bold size={12} anchor="start" fill={BLUE}>Demand-pull</T>
    <Box x={20} y={76} w={150} h={50} fill={C.blue} size={11}>spending rises</Box>
    <Arrow x1={172} y1={101} x2={198} y2={101} />
    <Box x={200} y={76} w={160} h={50} fill={C.yellow} size={11}>demand &gt; supply</Box>
    <Arrow x1={362} y1={101} x2={388} y2={101} />
    <Box x={390} y={76} w={150} h={50} fill={C.pink} size={11}>prices pulled up</Box>
    <T x={20} y={174} bold size={12} anchor="start" fill={RED}>Cost-push</T>
    <Box x={20} y={184} w={150} h={50} fill={C.blue} size={11}>costs rise</Box>
    <Arrow x1={172} y1={209} x2={198} y2={209} />
    <Box x={200} y={184} w={160} h={50} fill={C.yellow} size={11}>profit margins squeezed</Box>
    <Arrow x1={362} y1={209} x2={388} y2={209} />
    <Box x={390} y={184} w={150} h={50} fill={C.pink} size={11}>prices pushed up</Box>
    <T x={95} y={140} size={10}>low interest, tax cuts, exports</T>
    <T x={95} y={250} size={10}>wages, oil, imported materials</T>
    <T x={280} y={274} size={11}>Both raise the general price level; inflation is the rate of change of that level</T>
  </Svg>
);

/* ---------- Social cost ---------- */
const SocialCost = () => (
  <Svg w={560} h={290} label="Private plus external costs equal social costs, and private plus external benefits equal social benefits; a market ignores the external parts, so market failure occurs">
    <T x={150} y={22} bold size={13}>Costs</T>
    <rect x={90} y={150} width={120} height={70} fill="#bfdbfe" stroke={K} strokeWidth={2} /><T x={150} y={190} size={12} bold>private cost</T>
    <rect x={90} y={80} width={120} height={70} fill="#fecaca" stroke={K} strokeWidth={2} /><T x={150} y={110} size={12} bold>external cost</T><T x={150} y={126} size={10}>paid by others</T>
    <T x={150} y={238} bold size={12}>social cost</T>
    <path d="M222 80 V220" fill="none" stroke={K} strokeWidth={2} />
    <T x={410} y={22} bold size={13}>Benefits</T>
    <rect x={350} y={150} width={120} height={70} fill="#bbf7d0" stroke={K} strokeWidth={2} /><T x={410} y={190} size={12} bold>private benefit</T>
    <rect x={350} y={90} width={120} height={60} fill="#fef08a" stroke={K} strokeWidth={2} /><T x={410} y={114} size={12} bold>external benefit</T><T x={410} y={130} size={10}>gained by others</T>
    <T x={410} y={238} bold size={12}>social benefit</T>
    <path d="M482 90 V220" fill="none" stroke={K} strokeWidth={2} />
    <T x={280} y={266} size={11}>Example: factory pollution (external cost); vaccination (external benefit)</T>
    <T x={280} y={282} size={11}>Markets ignore external effects, so too much is made or too little is made</T>
  </Svg>
);

/* ---------- Budget ---------- */
const BudgetStates = () => (
  <Svg w={560} h={280} label="Government budget: a deficit is when spending is greater than tax revenue, a balanced budget is when they are equal, and a surplus is when tax revenue is greater than spending">
    {[['Deficit', 110, 70], ['Balanced', 70, 70], ['Surplus', 70, 110]].map(([n, spend, tax], i) => {
      const ox = 50 + i * 170;
      return (
        <g key={n}>
          <L x1={ox - 10} y1={220} x2={ox + 130} y2={220} w={2.2} />
          <rect x={ox + 5} y={220 - tax} width={44} height={tax} fill="#bbf7d0" stroke={K} strokeWidth={2} />
          <rect x={ox + 65} y={220 - spend} width={44} height={spend} fill="#fecaca" stroke={K} strokeWidth={2} />
          <T x={ox + 27} y={236} size={10}>tax</T><T x={ox + 87} y={236} size={10}>spending</T>
          <T x={ox + 57} y={50} bold size={13}>{n}</T>
        </g>
      );
    })}
    <T x={107} y={80} size={10}>spending &gt; tax:</T><T x={107} y={93} size={10}>borrow more</T>
    <T x={277} y={80} size={10}>spending = tax</T>
    <T x={447} y={80} size={10}>tax &gt; spending:</T><T x={447} y={93} size={10}>can repay debt</T>
    <T x={280} y={266} size={11}>Fiscal policy: raise spending or cut tax to boost demand; the opposite to slow it</T>
  </Svg>
);

/* ---------- Money ---------- */
const MoneyFunctions = () => (
  <Svg w={560} h={290} label="Four functions of money: a medium of exchange, a unit of account, a store of value and a means of deferred payment">
    <circle cx={280} cy={140} r={52} fill="#fde68a" stroke={K} strokeWidth={2.4} /><T x={280} y={146} bold size={18}>Money</T>
    <Box x={30} y={30} w={190} h={56} fill={C.blue} size={12}>Medium of exchange</Box><T x={125} y={104} size={10}>accepted for goods and services</T>
    <Box x={340} y={30} w={190} h={56} fill={C.green} size={12}>Unit of account</Box><T x={435} y={104} size={10}>prices can be compared</T>
    <Box x={30} y={196} w={190} h={56} fill={C.yellow} size={12}>Store of value</Box><T x={125} y={270} size={10}>keeps value until it is spent</T>
    <Box x={340} y={196} w={190} h={56} fill={C.pink} size={12}>Deferred payment</Box><T x={435} y={270} size={10}>settles debts in the future</T>
    {[[222, 70, 245, 110], [338, 70, 315, 110], [222, 212, 245, 170], [338, 212, 315, 170]].map(([a, b, c, d], i) => <L key={i} x1={a} y1={b} x2={c} y2={d} w={1.6} />)}
  </Svg>
);

/* ---------- Exchange rate ---------- */
const FxEffects = () => (
  <Svg w={560} h={290} label="Effects of exchange rate changes: when the home currency appreciates exports become dearer abroad and imports cheaper, so exports fall and imports rise; when it depreciates exports become cheaper and imports dearer, so exports rise and imports fall">
    <T x={150} y={26} bold size={13} fill={BLUE}>Currency appreciates</T>
    <T x={410} y={26} bold size={13} fill={RED}>Currency depreciates</T>
    {[['exports dearer abroad', 'exports cheaper abroad'], ['imports cheaper', 'imports dearer'], ['exports fall, imports rise', 'exports rise, imports fall'], ['inflation pressure falls', 'inflation pressure rises']].map(([a, b], i) => (
      <g key={a}>
        <Box x={30} y={42 + i * 54} w={240} h={38} fill={C.blue} size={11}>{a}</Box>
        <Box x={290} y={42 + i * 54} w={240} h={38} fill={C.pink} size={11}>{b}</Box>
        {i < 3 && <>
          <L x1={150} y1={82 + i * 54} x2={150} y2={94 + i * 54} arrow w={1.8} />
          <L x1={410} y1={82 + i * 54} x2={410} y2={94 + i * 54} arrow w={1.8} />
        </>}
      </g>
    ))}
    <T x={280} y={272} size={11}>Trade balance: appreciation tends to worsen it, depreciation tends to improve it</T>
  </Svg>
);

export const ECON2_FIGS = {
  pesCurves: PesCurves,
  marketDemand: MarketDemand,
  priceMechanism: PriceMechanism,
  mergers: Mergers,
  hdiParts: HdiParts,
  optimumPopulation: OptimumPopulation,
  currentAccount: CurrentAccount,
  costCurves: CostCurves,
  inflationCauses: InflationCauses,
  socialCost: SocialCost,
  budgetStates: BudgetStates,
  moneyFunctions: MoneyFunctions,
  fxEffects: FxEffects,
};
