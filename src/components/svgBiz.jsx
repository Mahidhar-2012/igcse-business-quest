// Original vector diagrams for Business Studies, drawn in the plain black-line style of exam papers.
import { Svg, T, L, K } from './svgFigs.jsx';

const GREEN = '#bbf7d0';
const BLUE = '#dbeafe';
const YEL = '#fef9c3';
const PINK = '#fecdd3';

const Box = ({ x, y, w, h, fill = '#fff', children, size = 12 }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={7} fill={fill} stroke={K} strokeWidth={1.8} />
    <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fontSize={size} fontWeight={700} fill={K}>{children}</text>
  </g>
);

/* ---------- Break-even chart ---------- */
const BreakEven = () => (
  <Svg w={560} h={325} label="Break-even chart: total revenue crosses total costs at the break-even output; fixed costs are a horizontal line; the gap between actual output and break-even output is the margin of safety">
    <L x1={70} y1={250} x2={500} y2={250} arrow />
    <L x1={70} y1={250} x2={70} y2={20} arrow />
    <T x={190} y={286} size={13}>output (units)</T>
    <text x={22} y={135} transform="rotate(-90 22 135)" textAnchor="middle" fontSize={13} fill={K}>costs and revenue ($)</text>
    <L x1={70} y1={190} x2={480} y2={190} w={2.4} stroke="#16a34a" />
    <L x1={70} y1={190} x2={480} y2={90} w={2.8} stroke="#dc2626" />
    <L x1={70} y1={250} x2={480} y2={50} w={2.8} stroke="#2563eb" />
    <T x={486} y={186} size={11} anchor="start" fill="#16a34a" bold>fixed costs</T>
    <T x={486} y={90} size={11} anchor="start" fill="#dc2626" bold>total costs</T>
    <T x={486} y={52} size={11} anchor="start" fill="#2563eb" bold>total revenue</T>
    <circle cx={314} cy={130} r={5} fill={K} />
    <L x1={314} y1={130} x2={314} y2={250} dash="5 4" w={1.4} />
    <L x1={70} y1={130} x2={314} y2={130} dash="5 4" w={1.4} />
    <T x={314} y={266} size={11} bold>break-even output</T>
    <T x={76} y={124} size={11} anchor="start">break-even revenue</T>
    <L x1={314} y1={296} x2={414} y2={296} w={2} stroke="#7c3aed" />
    <L x1={414} y1={250} x2={414} y2={296} w={1.2} dash="4 3" />
    <T x={364} y={312} size={11} fill="#7c3aed" bold>margin of safety</T>
    <T x={400} y={150} size={12} fill="#16a34a" bold>profit</T>
    <T x={150} y={216} size={12} fill="#991b1b" bold>loss</T>
    <T x={215} y={160} size={10}>variable costs</T>
  </Svg>
);

/* ---------- Product life cycle ---------- */
const ProductLifeCycle = () => (
  <Svg w={560} h={290} label="Product life cycle graph showing sales over time through introduction, growth, maturity and decline, with an extension strategy that raises sales again">
    <L x1={70} y1={240} x2={500} y2={240} arrow />
    <L x1={70} y1={240} x2={70} y2={20} arrow />
    <T x={285} y={278} size={13}>time</T>
    <text x={22} y={130} transform="rotate(-90 22 130)" textAnchor="middle" fontSize={13} fill={K}>sales</text>
    <path d="M72 232 C110 230 140 226 160 205 C190 165 215 80 255 62 C300 52 330 52 360 70 C385 90 410 160 440 215" fill="none" stroke="#2563eb" strokeWidth={3.5} />
    <path d="M360 70 C385 76 405 60 430 48 C455 38 470 60 485 100" fill="none" stroke="#16a34a" strokeWidth={2.6} strokeDasharray="6 5" />
    {[160, 262, 365].map((x) => <line key={x} x1={x} y1={30} x2={x} y2={240} stroke={K} strokeWidth={1.2} strokeDasharray="5 4" />)}
    <T x={115} y={40} bold size={12}>introduction</T><T x={115} y={55} size={10}>slow sales</T>
    <T x={211} y={40} bold size={12}>growth</T><T x={211} y={55} size={10}>sales rise fast</T>
    <T x={313} y={26} bold size={12}>maturity</T><T x={313} y={41} size={10}>sales level off</T>
    <T x={440} y={26} bold size={12}>decline</T><T x={440} y={41} size={10}>sales fall</T>
    <T x={440} y={145} size={10} anchor="start" fill="#16a34a" bold>extension strategy</T>
  </Svg>
);

/* ---------- Organisation structures ---------- */
const OrgStructures = () => {
  const bx = (x, y, w = 28) => <rect key={`${x}-${y}`} x={x} y={y} width={w} height={16} rx={3} fill="#fff" stroke={K} strokeWidth={1.5} />;
  const ln = (x1, y1, x2, y2) => <line key={`${x1}${y1}${x2}${y2}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke={K} strokeWidth={1.2} />;
  return (
    <Svg w={560} h={320} label="Organisation charts: a tall structure with many levels and narrow spans of control, and a flat structure with few levels and wide spans of control">
      <T x={125} y={20} bold size={13}>Tall structure</T>
      {[[125, 30, 0], [95, 70, 1], [155, 70, 1], [80, 110, 2], [110, 110, 2], [140, 110, 2], [170, 110, 2], [80, 150, 3], [110, 150, 3], [140, 150, 3], [170, 150, 3], [95, 190, 4], [155, 190, 4]].map(([x, y]) => bx(x - 14, y))}
      {ln(125, 46, 95, 70)}{ln(125, 46, 155, 70)}{ln(95, 86, 80, 110)}{ln(95, 86, 110, 110)}{ln(155, 86, 140, 110)}{ln(155, 86, 170, 110)}
      {ln(80, 126, 80, 150)}{ln(110, 126, 110, 150)}{ln(140, 126, 140, 150)}{ln(170, 126, 170, 150)}{ln(80, 166, 95, 190)}{ln(170, 166, 155, 190)}
      <T x={125} y={235} size={11}>many levels, long chain of command</T>
      <T x={125} y={250} size={11}>narrow span of control (2 per manager)</T>
      <T x={125} y={265} size={11}>slower communication, more managers to pay</T>
      <T x={415} y={20} bold size={13}>Flat structure</T>
      {bx(401, 30, 28)}
      {[330, 370, 410, 450, 490].map((x) => bx(x - 14, 90))}
      {[310, 330, 350, 370, 390, 410, 430, 450, 470, 490, 510].map((x) => bx(x - 12, 150, 24))}
      {[330, 370, 410, 450, 490].map((x) => ln(415, 46, x, 90))}
      {ln(330, 106, 310, 150)}{ln(330, 106, 330, 150)}{ln(330, 106, 350, 150)}{ln(370, 106, 370, 150)}{ln(370, 106, 390, 150)}
      {ln(410, 106, 410, 150)}{ln(410, 106, 430, 150)}{ln(450, 106, 450, 150)}{ln(450, 106, 470, 150)}{ln(490, 106, 490, 150)}{ln(490, 106, 510, 150)}
      <T x={415} y={205} size={11}>few levels, short chain of command</T>
      <T x={415} y={220} size={11}>wide span of control (5 or more)</T>
      <T x={415} y={235} size={11}>faster communication, fewer managers</T>
    </Svg>
  );
};

/* ---------- Maslow ---------- */
const Maslow = () => {
  const levels = [
    ['Self-actualisation', 'achieving potential, creativity', '#c4b5fd', 10],
    ['Esteem', 'status, recognition, respect', '#a5b4fc', 70],
    ['Social', 'friendship, belonging, teamwork', '#93c5fd', 130],
    ['Safety', 'job security, safe conditions', '#86efac', 190],
    ['Physiological', 'pay for food, warmth, shelter', '#fde68a', 250],
  ];
  return (
    <Svg w={560} h={330} label="Maslow's hierarchy of needs as a pyramid: physiological, safety, social, esteem and self-actualisation, with a workplace example for each">
      {levels.map(([name, ex, fill, off], i) => {
        const top = 20 + i * 56, w1 = 90 + i * 55, w2 = 145 + i * 55;
        return (
          <g key={name}>
            <polygon points={`${200 - w1 / 2},${top} ${200 + w1 / 2},${top} ${200 + w2 / 2},${top + 52} ${200 - w2 / 2},${top + 52}`} fill={fill} stroke={K} strokeWidth={2} />
            <T x={200} y={top + 31} bold size={12}>{name}</T>
            <T x={398} y={top + 31} size={11} anchor="start">{ex}</T>
          </g>
        );
      })}
      <T x={280} y={318} size={11}>Lower needs must be met before the next level motivates workers</T>
    </Svg>
  );
};

/* ---------- Distribution channels ---------- */
const Channels = () => (
  <Svg w={560} h={270} label="Channels of distribution: producer to wholesaler to retailer to consumer; producer to retailer to consumer; and direct selling from producer to consumer">
    {[
      { y: 20, items: ['Producer', 'Wholesaler', 'Retailer', 'Consumer'], note: 'Longest channel: more middlemen, each adds a margin' },
      { y: 100, items: ['Producer', 'Retailer', 'Consumer'], note: 'Shorter channel: fewer margins, large retailers buy in bulk' },
      { y: 180, items: ['Producer', 'Consumer'], note: 'Direct selling (online or own shop): keeps all the margin' },
    ].map((row) => {
      const n = row.items.length, step = 410 / n;
      return (
        <g key={row.y}>
          {row.items.map((it, i) => (
            <g key={it + i}>
              <Box x={30 + i * step} y={row.y} w={90} h={34} fill={i === 0 ? GREEN : i === n - 1 ? PINK : YEL}>{it}</Box>
              {i < n - 1 && <L x1={122 + i * step} y1={row.y + 17} x2={28 + (i + 1) * step} y2={row.y + 17} arrow w={2} />}
            </g>
          ))}
          <T x={30} y={row.y + 52} size={11} anchor="start">{row.note}</T>
        </g>
      );
    })}
  </Svg>
);

/* ---------- Stakeholders ---------- */
const Stakeholders = () => (
  <Svg w={560} h={350} label="Stakeholder map: the business at the centre with internal stakeholders (owners, managers, employees) and external stakeholders (customers, suppliers, lenders, government, community) and the usual objective of each">
    <circle cx={280} cy={165} r={48} fill={YEL} stroke={K} strokeWidth={2.5} />
    <T x={280} y={170} bold size={14}>Business</T>
    <T x={110} y={20} bold size={12}>Internal stakeholders</T>
    {[['Owners / shareholders', 'profit, dividends, growth', 60], ['Managers', 'salary, bonuses, status', 150], ['Employees', 'pay, security, conditions', 240]].map(([n, o, y]) => (
      <g key={n}><Box x={14} y={y} w={150} h={34} fill={GREEN} size={11}>{n}</Box><T x={89} y={y + 50} size={10}>{o}</T><L x1={164} y1={y + 17} x2={236} y2={165} w={1.3} /></g>
    ))}
    <T x={455} y={20} bold size={12}>External stakeholders</T>
    {[['Customers', 'quality, price, service', 40], ['Suppliers', 'orders, prompt payment', 105], ['Lenders (banks)', 'repayment of loans', 170], ['Government', 'tax, laws followed', 235], ['Local community', 'jobs, no pollution', 290]].map(([n, o, y]) => (
      <g key={n}><Box x={395} y={y} w={150} h={30} fill={BLUE} size={11}>{n}</Box><T x={470} y={y + 44} size={10}>{o}</T><L x1={395} y1={y + 15} x2={324} y2={165} w={1.3} /></g>
    ))}
  </Svg>
);

/* ---------- Cash flow forecast table ---------- */
const CashFlowTable = () => {
  const rows = [
    ['', 'January', 'February', 'March'],
    ['Opening balance', '2 000', '500', '−1 000'],
    ['Cash inflows', '9 000', '8 000', '12 000'],
    ['Cash outflows', '10 500', '9 500', '9 000'],
    ['Net cash flow', '−1 500', '−1 500', '+3 000'],
    ['Closing balance', '500', '−1 000', '2 000'],
  ];
  return (
    <Svg w={560} h={270} label="Cash flow forecast table for January to March: opening balance, cash inflows, cash outflows, net cash flow and closing balance, with a negative closing balance in February">
      {rows.map((r, ri) => r.map((cell, ci) => {
        const x = 40 + (ci === 0 ? 0 : 150 + (ci - 1) * 120), w = ci === 0 ? 150 : 120, y = 20 + ri * 36;
        const neg = String(cell).startsWith('−');
        return (
          <g key={`${ri}-${ci}`}>
            <rect x={x} y={y} width={w} height={36} fill={ri === 0 ? '#e5e7eb' : ri === 5 ? YEL : '#fff'} stroke={K} strokeWidth={1.4} />
            <text x={ci === 0 ? x + 8 : x + w - 12} y={y + 23} textAnchor={ci === 0 ? 'start' : 'end'} fontSize={13} fontWeight={ri === 0 || ri === 5 || ci === 0 ? 700 : 400} fill={neg ? '#b91c1c' : K}>{cell}</text>
          </g>
        );
      }))}
      <T x={280} y={252} size={11}>Closing balance = opening balance + inflows − outflows. A negative balance means extra finance is needed.</T>
    </Svg>
  );
};

export const BIZ_FIGS = {
  breakEven: BreakEven,
  productLifeCycle: ProductLifeCycle,
  orgStructures: OrgStructures,
  maslow: Maslow,
  channels: Channels,
  stakeholders: Stakeholders,
  cashFlowTable: CashFlowTable,
};
