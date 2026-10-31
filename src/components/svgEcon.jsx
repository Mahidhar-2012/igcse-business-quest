// Original vector diagrams for Economics, drawn in the plain black-line style of exam papers.
// Data space is 0–100 on both axes, mapped into the plot area. Straight demand and supply lines
// are built from exact formulae so every intersection drawn is the true intersection.
import { Svg, T, L, K } from './svgFigs.jsx';

const X0 = 70; const X1 = 470; const Y0 = 210; const Y1 = 24;
const px = (x) => X0 + (x / 100) * (X1 - X0 - 24);
const py = (y) => Y0 - (y / 100) * (Y0 - Y1 - 14);

const W = 540; const H = 290;
const GREY = '#6b7280';
const DARK = '#374151';

const Axes = ({ xl = 'quantity', yl = 'price' }) => (
  <g>
    <L x1={X0} y1={Y0} x2={X1} y2={Y0} arrow />
    <L x1={X0} y1={Y0} x2={X0} y2={Y1} arrow />
    <T x={X1} y={Y0 + 34} anchor="end" size={13}>{xl}</T>
    <T x={X0 + 8} y={Y1 + 2} anchor="start" size={13}>{yl}</T>
  </g>
);

const Caption = ({ lines }) => (
  <g>
    {lines.map((s, i) => <T key={s} x={W / 2} y={H - 22 + i * 16} size={12}>{s}</T>)}
  </g>
);

/** Straight line in data space with an optional label just beyond its end. */
const Ln = ({ a, b, label, anchor = 'start', dx = 6, dy = 4, stroke = K, w = 2.6, dash }) => (
  <g>
    <line x1={px(a[0])} y1={py(a[1])} x2={px(b[0])} y2={py(b[1])} stroke={stroke} strokeWidth={w} strokeDasharray={dash} />
    {label && <text x={px(b[0]) + dx} y={py(b[1]) + dy} textAnchor={anchor} fontSize={14} fontWeight={700} fill={stroke}>{label}</text>}
  </g>
);

const Guide = ({ x, y, xl, yl }) => (
  <g>
    <line x1={px(x)} y1={py(y)} x2={px(x)} y2={Y0} stroke={K} strokeWidth={1.2} strokeDasharray="4 4" />
    <line x1={px(x)} y1={py(y)} x2={X0} y2={py(y)} stroke={K} strokeWidth={1.2} strokeDasharray="4 4" />
    {xl && <T x={px(x)} y={Y0 + 17} size={13}>{xl}</T>}
    {yl && <T x={X0 - 8} y={py(y) + 5} anchor="end" size={13}>{yl}</T>}
  </g>
);

const Dot = ({ x, y, r = 4.5 }) => <circle cx={px(x)} cy={py(y)} r={r} fill={K} />;

// Standard lines. Demand: P = 85 − 0.875(Q − 10). Supply: P = 15 + 0.875(Q − 10). They cross at (50, 50).
const D = (shift = 0, from = 10, to = 90) => [[from + shift, 85 - 0.875 * (from - 10)], [to + shift, 85 - 0.875 * (to - 10)]];
const S = (shift = 0, from = 10, to = 90) => [[from + shift, 15 + 0.875 * (from - 10)], [to + shift, 15 + 0.875 * (to - 10)]];
const dQ = (p) => 10 + (85 - p) / 0.875; // quantity demanded at price p
const sQ = (p) => 10 + (p - 15) / 0.875; // quantity supplied at price p

export const PPC = () => (
  <Svg w={W} h={H} label="Production possibility curve with a point on the curve, a point inside it and an unattainable point outside it">
    <Axes xl="consumer goods" yl="capital goods" />
    <path d={`M${px(5)} ${py(92)} Q${px(72)} ${py(84)} ${px(95)} ${py(8)}`} fill="none" stroke={K} strokeWidth={2.8} />
    <T x={px(95) + 6} y={py(8) - 6} anchor="start" size={14} bold>PPC</T>
    <Dot x={52} y={73} /><T x={px(52) - 10} y={py(73) - 10} size={14} bold>A</T>
    <Dot x={38} y={40} /><T x={px(38) - 12} y={py(40) + 5} size={14} bold>B</T>
    <Dot x={80} y={74} /><T x={px(80) + 12} y={py(74) - 6} size={14} bold>C</T>
    <Caption lines={['A: on the PPC, all resources used efficiently · B: inside, resources unused or wasted', 'C: outside the PPC, cannot be produced with current resources']} />
  </Svg>
);

export const PPCShift = () => (
  <Svg w={W} h={H} label="Outward shift of a production possibility curve showing economic growth">
    <Axes xl="consumer goods" yl="capital goods" />
    <path d={`M${px(5)} ${py(70)} Q${px(50)} ${py(64)} ${px(75)} ${py(6)}`} fill="none" stroke={K} strokeWidth={2.6} />
    <path d={`M${px(5)} ${py(95)} Q${px(70)} ${py(88)} ${px(98)} ${py(10)}`} fill="none" stroke={DARK} strokeWidth={2.6} strokeDasharray="7 4" />
    <T x={px(75) + 8} y={py(6)} anchor="start" size={13} bold>PPC₁</T>
    <T x={px(98) + 8} y={py(10)} anchor="start" size={13} bold>PPC₂</T>
    <L x1={px(52)} y1={py(48)} x2={px(66)} y2={py(72)} arrow w={1.6} />
    <Caption lines={['An outward shift shows economic growth: more resources, better quality resources', 'or improved technology allow more of both goods to be produced']} />
  </Svg>
);

export const DemandCurve = () => (
  <Svg w={W} h={H} label="Demand curve sloping downwards with an extension and a contraction of demand marked as movements along the curve">
    <Axes />
    <Ln a={D()[0]} b={D()[1]} label="D" />
    <Dot x={50} y={50} /><Dot x={70} y={32.5} /><Dot x={30} y={67.5} />
    <Guide x={50} y={50} xl="Q₁" yl="P₁" /><Guide x={70} y={32.5} xl="Q₂" yl="P₂" /><Guide x={30} y={67.5} xl="Q₃" yl="P₃" />
    <Caption lines={['A fall in price from P₁ to P₂ causes an extension of demand (Q₁ to Q₂)', 'A rise in price from P₁ to P₃ causes a contraction of demand (Q₁ to Q₃)']} />
  </Svg>
);

export const DemandShift = () => (
  <Svg w={W} h={H} label="Shifts of the demand curve: an increase to the right and a decrease to the left">
    <Axes />
    <Ln a={D()[0]} b={D()[1]} label="D₁" dx={4} />
    <Ln a={D(20, 10, 80)[0]} b={D(20, 10, 80)[1]} label="D₂" dx={6} stroke={DARK} dash="7 4" />
    <Ln a={[0, 76.25]} b={[70, 15]} label="D₃" dx={6} dy={14} stroke={GREY} dash="3 3" />
    <Caption lines={['D₂: an increase in demand (shift right) · D₃: a decrease in demand (shift left)', 'A change in any factor other than price shifts the whole curve']} />
  </Svg>
);

export const SupplyCurve = () => (
  <Svg w={W} h={H} label="Supply curve sloping upwards with shifts to the right for an increase and to the left for a decrease">
    <Axes />
    <Ln a={S()[0]} b={S()[1]} label="S₁" dy={0} />
    <Ln a={S(18, 10, 82)[0]} b={S(18, 10, 82)[1]} label="S₂" stroke={DARK} dash="7 4" dy={16} />
    <Ln a={[0, 22]} b={[72, 85]} label="S₃" dx={-6} anchor="end" dy={-6} stroke={GREY} dash="3 3" />
    <Caption lines={['S₂: an increase in supply (shift right) · S₃: a decrease in supply (shift left)', 'A change in price moves along the curve; other changes shift it']} />
  </Svg>
);

export const Equilibrium = () => (
  <Svg w={W} h={H} label="Market equilibrium where the demand and supply curves cross, with equilibrium price and quantity marked">
    <Axes />
    <Ln a={D()[0]} b={D()[1]} label="D" />
    <Ln a={S()[0]} b={S()[1]} label="S" />
    <Dot x={50} y={50} r={5} /><Guide x={50} y={50} xl="Qe" yl="Pe" />
    <Caption lines={['At the equilibrium price Pe, quantity demanded equals quantity supplied (Qe)']} />
  </Svg>
);

export const Disequilibrium = () => (
  <Svg w={W} h={H} label="Market disequilibrium: at a price above equilibrium there is a surplus, and at a price below equilibrium there is a shortage">
    <Axes />
    <Ln a={D()[0]} b={D()[1]} label="D" />
    <Ln a={S()[0]} b={S()[1]} label="S" />
    <Dot x={50} y={50} />
    <Guide x={dQ(72)} y={72} xl="Qd" yl="P high" />
    <line x1={px(sQ(72))} y1={py(72)} x2={px(sQ(72))} y2={Y0} stroke={K} strokeWidth={1.2} strokeDasharray="4 4" />
    <line x1={px(dQ(72))} y1={py(72)} x2={px(sQ(72))} y2={py(72)} stroke={K} strokeWidth={4} />
    <T x={px(sQ(72))} y={Y0 + 17} size={13}>Qs</T>
    <T x={px(50)} y={py(72) - 8} size={12} bold>surplus</T>
    <Guide x={sQ(28)} y={28} yl="P low" />
    <line x1={px(dQ(28))} y1={py(28)} x2={px(dQ(28))} y2={Y0} stroke={K} strokeWidth={1.2} strokeDasharray="4 4" />
    <line x1={px(sQ(28))} y1={py(28)} x2={px(dQ(28))} y2={py(28)} stroke={K} strokeWidth={4} />
    <T x={px(50)} y={py(28) + 18} size={12} bold>shortage</T>
    <Caption lines={['Above the equilibrium price supply exceeds demand (surplus);','below it, demand exceeds supply (shortage)']} />
  </Svg>
);

export const PriceChange = () => (
  <Svg w={W} h={H} label="An increase in demand shifts the demand curve right, raising the equilibrium price and quantity">
    <Axes />
    <Ln a={D()[0]} b={D()[1]} label="D₁" />
    <Ln a={D(20, 10, 80)[0]} b={D(20, 10, 80)[1]} label="D₂" stroke={DARK} dash="7 4" dx={6} />
    <Ln a={S()[0]} b={S()[1]} label="S" />
    <Dot x={50} y={50} /><Dot x={60} y={58.75} r={5.5} />
    <Guide x={50} y={50} xl="Q₁" yl="P₁" /><Guide x={60} y={58.75} xl="Q₂" yl="P₂" />
    <Caption lines={['A rise in demand (D₁ to D₂) raises the equilibrium price (P₁ to P₂) and quantity (Q₁ to Q₂)']} />
  </Svg>
);

const SmallPed = ({ ox, title, sub, children }) => (
  <g transform={`translate(${ox},0)`}>
    <L x1={18} y1={150} x2={118} y2={150} arrow w={1.8} />
    <L x1={18} y1={150} x2={18} y2={36} arrow w={1.8} />
    <T x={68} y={14} size={12} bold>{title}</T>
    <T x={68} y={28} size={12} bold>{sub}</T>
    <T x={118} y={166} size={11} anchor="end">Q</T>
    <T x={26} y={46} size={11} anchor="start">P</T>
    {children}
  </g>
);

export const PedCurves = () => (
  <Svg w={680} h={190} label="Five demand curves showing perfectly inelastic, inelastic, unitary, elastic and perfectly elastic demand">
    <SmallPed ox={0} title="perfectly" sub="inelastic"><L x1={70} y1={44} x2={70} y2={140} w={2.6} /></SmallPed>
    <SmallPed ox={134} title="inelastic" sub="(PED < 1)"><L x1={48} y1={48} x2={95} y2={140} w={2.6} /></SmallPed>
    <SmallPed ox={268} title="unitary" sub="(PED = 1)"><path d="M34 50 Q44 112 112 132" fill="none" stroke={K} strokeWidth={2.6} /></SmallPed>
    <SmallPed ox={402} title="elastic" sub="(PED > 1)"><L x1={32} y1={82} x2={112} y2={108} w={2.6} /></SmallPed>
    <SmallPed ox={536} title="perfectly" sub="elastic"><L x1={30} y1={90} x2={115} y2={90} w={2.6} /></SmallPed>
  </Svg>
);

export const MaxMinPrice = () => (
  <Svg w={W + 40} h={H} label="A maximum price below equilibrium causes a shortage and a minimum price above equilibrium causes a surplus">
    <Axes />
    <Ln a={D()[0]} b={D()[1]} label="D" />
    <Ln a={S()[0]} b={S()[1]} label="S" />
    <Dot x={50} y={50} />
    <line x1={X0} y1={py(30)} x2={px(98)} y2={py(30)} stroke={K} strokeWidth={2.2} strokeDasharray="8 4" />
    <T x={px(98) + 6} y={py(30) + 4} anchor="start" size={12} bold>maximum price</T>
    <line x1={px(sQ(30))} y1={py(30)} x2={px(dQ(30))} y2={py(30)} stroke={K} strokeWidth={5} />
    <T x={px(50)} y={py(30) + 18} size={12} bold>shortage</T>
    <line x1={X0} y1={py(70)} x2={px(98)} y2={py(70)} stroke={K} strokeWidth={2.2} strokeDasharray="2 4" />
    <T x={px(98) + 6} y={py(70) + 4} anchor="start" size={12} bold>minimum price</T>
    <line x1={px(dQ(70))} y1={py(70)} x2={px(sQ(70))} y2={py(70)} stroke={K} strokeWidth={5} />
    <T x={px(50)} y={py(70) - 8} size={12} bold>surplus</T>
    <Caption lines={['A maximum price below equilibrium causes a shortage;', 'a minimum price above equilibrium causes a surplus']} />
  </Svg>
);

export const IndirectTax = () => (
  <Svg w={W + 20} h={H} label="An indirect tax shifts the supply curve upward by the amount of the tax, raising the price paid by consumers and lowering quantity">
    <Axes />
    <Ln a={D()[0]} b={D()[1]} label="D" />
    <Ln a={S()[0]} b={S()[1]} label="S" />
    <Ln a={[10, 35]} b={[80, 76.25 + 20]} label="S + tax" stroke={DARK} dash="7 4" dx={4} dy={0} />
    <Dot x={50} y={50} /><Dot x={38.6} y={59.9} r={5.5} />
    <Guide x={50} y={50} xl="Q₁" yl="P₁" /><Guide x={38.6} y={59.9} xl="Q₂" yl="P₂" />
    <Caption lines={['The tax shifts supply up by the amount of the tax: price rises from P₁ to P₂', 'and quantity falls from Q₁ to Q₂']} />
  </Svg>
);

export const Subsidy = () => (
  <Svg w={W + 20} h={H} label="A subsidy shifts the supply curve downward, lowering the price and raising the quantity">
    <Axes />
    <Ln a={D()[0]} b={D()[1]} label="D" />
    <Ln a={S()[0]} b={S()[1]} label="S" />
    <Ln a={[10, -5]} b={[80, 76.25 - 20]} label="S + subsidy" stroke={DARK} dash="7 4" dx={4} dy={0} />
    <Dot x={50} y={50} /><Dot x={61.4} y={40} r={5.5} />
    <Guide x={50} y={50} xl="Q₁" yl="P₁" /><Guide x={61.4} y={40} xl="Q₂" yl="P₂" />
    <Caption lines={['The subsidy shifts supply down by the amount of the subsidy: price falls from P₁ to P₂', 'and quantity rises from Q₁ to Q₂']} />
  </Svg>
);

export const LabourMarket = () => (
  <Svg w={W + 20} h={H} label="Labour market with a national minimum wage set above the equilibrium wage causing a surplus of labour (unemployment)">
    <Axes xl="quantity of labour" yl="wage rate" />
    <Ln a={D()[0]} b={D()[1]} label="D (labour)" dx={4} />
    <Ln a={S()[0]} b={S()[1]} label="S (labour)" dx={4} />
    <Dot x={50} y={50} />
    <line x1={X0} y1={py(68)} x2={px(98)} y2={py(68)} stroke={K} strokeWidth={2.2} strokeDasharray="8 4" />
    <T x={px(98) + 6} y={py(68) + 4} anchor="start" size={12} bold>NMW</T>
    <line x1={px(dQ(68))} y1={py(68)} x2={px(dQ(68))} y2={Y0} stroke={K} strokeWidth={1} strokeDasharray="3 3" />
    <line x1={px(sQ(68))} y1={py(68)} x2={px(sQ(68))} y2={Y0} stroke={K} strokeWidth={1} strokeDasharray="3 3" />
    <line x1={px(dQ(68))} y1={py(68)} x2={px(sQ(68))} y2={py(68)} stroke={K} strokeWidth={5} />
    <T x={px(dQ(68))} y={Y0 + 17} size={12}>Qd</T>
    <T x={px(sQ(68))} y={Y0 + 17} size={12}>Qs</T>
    <T x={px(50)} y={py(68) - 8} size={12} bold>surplus of labour</T>
    <Caption lines={['A national minimum wage (NMW) above the equilibrium wage creates a surplus of labour:', 'more people want to work than firms want to employ (unemployment)']} />
  </Svg>
);

export const AtcCurve = () => (
  <Svg w={W + 20} h={H} label="Long-run average total cost curve falling with economies of scale, then rising with diseconomies of scale">
    <Axes xl="output" yl="average total cost" />
    <path d={`M${px(8)} ${py(92)} C${px(25)} ${py(30)} ${px(55)} ${py(20)} ${px(92)} ${py(85)}`} fill="none" stroke={K} strokeWidth={2.8} />
    <T x={px(92) + 8} y={py(85) + 4} anchor="start" size={13} bold>ATC</T>
    <T x={px(22)} y={py(6)} size={12} bold>economies of scale</T>
    <T x={px(22)} y={py(-6)} size={11}>(ATC falls)</T>
    <T x={px(78)} y={py(6)} size={12} bold>diseconomies of scale</T>
    <T x={px(78)} y={py(-6)} size={11}>(ATC rises)</T>
    <Dot x={45.4} y={40.7} /><T x={px(45.4)} y={py(40.7) + 20} size={12}>lowest ATC</T>
    <Caption lines={['As output rises ATC first falls, then rises: the lowest point is the most efficient scale']} />
  </Svg>
);

export const CostLines = () => (
  <Svg w={W + 20} h={H} label="Fixed cost as a horizontal line, variable cost rising with output, and total cost as their sum">
    <Axes xl="output" yl="cost" />
    <Ln a={[0, 25]} b={[95, 25]} label="FC" dx={6} dy={4} />
    <Ln a={[0, 0]} b={[95, 70]} label="VC" dx={6} dy={4} stroke={GREY} />
    <Ln a={[0, 25]} b={[95, 95]} label="TC" dx={6} dy={4} stroke={DARK} dash="7 4" />
    <Caption lines={['Fixed costs (FC) do not change with output; variable costs (VC) rise with output;', 'total cost (TC) = FC + VC']} />
  </Svg>
);

export const FxRate = () => (
  <Svg w={W + 20} h={H} label="Foreign exchange market with demand for and supply of a currency determining the equilibrium exchange rate, and an increase in demand raising the rate">
    <Axes xl="quantity of pesos" yl="price of the peso (in dollars)" />
    <Ln a={D()[0]} b={D()[1]} label="D₁" />
    <Ln a={S()[0]} b={S()[1]} label="S" />
    <Ln a={D(20, 10, 80)[0]} b={D(20, 10, 80)[1]} label="D₂" stroke={DARK} dash="7 4" dx={6} />
    <Dot x={50} y={50} /><Dot x={60} y={58.75} r={5.5} />
    <Guide x={50} y={50} xl="Q₁" yl="R₁" /><Guide x={60} y={58.75} xl="Q₂" yl="R₂" />
    <Caption lines={['An increase in demand for the currency raises its exchange rate (R₁ to R₂):', 'the currency appreciates']} />
  </Svg>
);

export const BusinessCycle = () => (
  <Svg w={W + 20} h={H} label="Real GDP over time showing a long-term upward trend with a boom, a recession and a recovery">
    <Axes xl="time" yl="real GDP" />
    <path d={`M${px(3)} ${py(35)} C${px(15)} ${py(62)} ${px(25)} ${py(68)} ${px(32)} ${py(58)} C${px(40)} ${py(40)} ${px(46)} ${py(38)} ${px(54)} ${py(55)} C${px(62)} ${py(75)} ${px(72)} ${py(82)} ${px(80)} ${py(70)} C${px(86)} ${py(60)} ${px(92)} ${py(65)} ${px(97)} ${py(80)}`} fill="none" stroke={K} strokeWidth={2.8} />
    <L x1={px(3)} y1={py(35)} x2={px(97)} y2={py(90)} dash="5 5" w={1.4} />
    <T x={px(22)} y={py(80)} size={12} bold>boom</T>
    <T x={px(43)} y={py(24)} size={12} bold>recession</T>
    <T x={px(66)} y={py(22)} size={12} bold>recovery</T>
    <T x={px(86)} y={py(96)} size={11}>long-run trend</T>
    <Caption lines={['Economic growth is a rise in real GDP; a recession is a fall in real GDP']} />
  </Svg>
);

export const ECON_FIGS = {
  ppc: PPC,
  ppcShift: PPCShift,
  demandCurve: DemandCurve,
  demandShift: DemandShift,
  supplyCurve: SupplyCurve,
  equilibrium: Equilibrium,
  disequilibrium: Disequilibrium,
  priceChange: PriceChange,
  pedCurves: PedCurves,
  maxMinPrice: MaxMinPrice,
  indirectTax: IndirectTax,
  subsidy: Subsidy,
  labourMarket: LabourMarket,
  atcCurve: AtcCurve,
  costLines: CostLines,
  fxRate: FxRate,
  businessCycle: BusinessCycle,
};
