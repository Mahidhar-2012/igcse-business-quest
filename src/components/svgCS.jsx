// Original Computer Science diagrams, in the plain black-line style of exam papers.
import { Svg, T, L, K } from './svgFigs.jsx';
import { C, Box } from './svgKit.jsx';

const BLUE = '#2563eb';
const RED = '#dc2626';
const TEAL = '#0d9488';

/* ---------- Binary place values ---------- */
const CsPlaceValue = () => {
  const w = [128, 64, 32, 16, 8, 4, 2, 1];
  const bits = [1, 0, 1, 1, 0, 1, 0, 1];
  return (
    <Svg w={560} h={190} label="An 8-bit binary number 10110101 with place values 128, 64, 32, 16, 8, 4, 2 and 1 above each bit. It equals 181 in denary and B5 in hexadecimal, split into two nibbles 1011 and 0101">
      <T x={68} y={20} size={11} bold>MSB</T><T x={488} y={20} size={11} bold>LSB</T>
      {w.map((v, i) => (
        <g key={v}>
          <T x={68 + i * 60} y={40} size={13} bold fill={BLUE}>{v}</T>
          <rect x={40 + i * 60} y={48} width={56} height={50} rx={6} fill={i < 4 ? C.blue : C.green} stroke={K} strokeWidth={2} />
          <T x={68 + i * 60} y={82} size={24} bold>{bits[i]}</T>
        </g>
      ))}
      <path d="M40 106 v6 H276 v-6" fill="none" stroke={K} strokeWidth={1.6} />
      <path d="M280 106 v6 H516 v-6" fill="none" stroke={K} strokeWidth={1.6} />
      <T x={158} y={132} size={12}>nibble 1011 = B in hex</T><T x={398} y={132} size={12}>nibble 0101 = 5 in hex</T>
      <T x={280} y={170} size={13} bold>128 + 32 + 16 + 4 + 1 = 181 = B5</T>
    </Svg>
  );
};

/* ---------- Bitmap image ---------- */
const FACE = ['00111100', '01000010', '10100101', '10000001', '10100101', '10011001', '01000010', '00111100'];
const CsPixelGrid = () => (
  <Svg w={560} h={230} label="An 8 by 8 grid of pixels forming a smiley face. Each pixel is stored as a binary value, 1 for black and 0 for white, and the first rows are 00111100, 01000010 and 10100101">
    {FACE.map((row, r) => row.split('').map((b, c) => (
      <rect key={`${r}-${c}`} x={30 + c * 25} y={16 + r * 25} width={25} height={25} fill={b === '1' ? K : '#fff'} stroke="#9ca3af" strokeWidth={1} />
    )))}
    <rect x={30} y={16} width={200} height={200} fill="none" stroke={K} strokeWidth={2} />
    <T x={290} y={36} anchor="start" size={12} bold>Each pixel is a binary number</T>
    <T x={290} y={62} anchor="start" size={13}>Row 1:  0 0 1 1 1 1 0 0</T>
    <T x={290} y={82} anchor="start" size={13}>Row 2:  0 1 0 0 0 0 1 0</T>
    <T x={290} y={102} anchor="start" size={13}>Row 3:  1 0 1 0 0 1 0 1</T>
    <T x={290} y={122} anchor="start" size={13}>…</T>
    <T x={290} y={152} anchor="start" size={12} fill={RED} bold>1 bit per pixel = 2 colours</T>
    <T x={290} y={170} anchor="start" size={12} fill={RED} bold>8 bits per pixel = 256 colours</T>
    <T x={290} y={198} anchor="start" size={12}>File size = width × height × colour depth</T>
  </Svg>
);

/* ---------- Sound sampling ---------- */
const CsSoundSample = () => {
  const X = (t) => 50 + t, Y = (t) => 118 - 66 * Math.sin((t / 230) * 2 * Math.PI);
  const pts = Array.from({ length: 93 }, (_, i) => [X(i * 5), Y(i * 5)]);
  const samples = Array.from({ length: 20 }, (_, i) => i * 23 + 11.5);
  return (
    <Svg w={560} h={240} label="A sound wave measured at regular intervals. Each dot is one sample and its height is stored as a binary number. The sample rate is the number of samples per second and the sample resolution is the number of bits per sample">
      <L x1={50} y1={118} x2={520} y2={118} arrow w={1.8} /><L x1={50} y1={214} x2={50} y2={22} arrow w={1.8} />
      <T x={528} y={122} anchor="start" size={11}>time</T><T x={56} y={20} anchor="start" size={11}>level</T>
      <path d={pts.map(([x, y], i) => `${i ? 'L' : 'M'}${x.toFixed(1)} ${y.toFixed(1)}`).join(' ')} fill="none" stroke={BLUE} strokeWidth={2.6} />
      {samples.map((t) => (
        <g key={t}>
          <L x1={X(t)} y1={118} x2={X(t)} y2={Y(t)} w={1} stroke="#9ca3af" dash="3 3" />
          <circle cx={X(t)} cy={Y(t)} r={3.6} fill={RED} />
        </g>
      ))}
      <L x1={X(11.5)} y1={204} x2={X(34.5)} y2={204} w={1.6} /><T x={X(34.5) + 8} y={208} anchor="start" size={11}>one sample interval = 1 ÷ sample rate</T>
      <T x={290} y={232} size={12} bold>Sample rate = samples per second (Hz)   ·   Sample resolution = bits per sample</T>
    </Svg>
  );
};

/* ---------- Packet and routes ---------- */
const CsPacketBox = () => (
  <Svg w={560} h={275} label="A data packet made of a header holding the destination address, sender address and packet number, then the payload, then a trailer for error checking. Below, three packets travel from sender to receiver by different routes through routers">
    <rect x={40} y={16} width={230} height={78} rx={6} fill={C.blue} stroke={K} strokeWidth={2} />
    <rect x={270} y={16} width={150} height={78} rx={6} fill={C.green} stroke={K} strokeWidth={2} />
    <rect x={420} y={16} width={100} height={78} rx={6} fill={C.yellow} stroke={K} strokeWidth={2} />
    <T x={155} y={36} size={13} bold>Header</T><T x={155} y={52} size={11}>destination address</T><T x={155} y={66} size={11}>sender address</T><T x={155} y={80} size={11}>packet number</T>
    <T x={345} y={36} size={13} bold>Payload</T><T x={345} y={56} size={11}>part of the data</T>
    <T x={470} y={36} size={13} bold>Trailer</T><T x={470} y={56} size={11}>error check</T>
    <Box x={20} y={152} w={74} h={40} fill={C.pink}>Sender</Box><Box x={466} y={152} w={74} h={40} fill={C.pink}>Receiver</Box>
    {[[190, 128], [370, 128], [190, 220], [370, 220]].map(([x, y]) => (
      <g key={`${x}-${y}`}><circle cx={x} cy={y} r={17} fill="#fff" stroke={K} strokeWidth={2} /><T x={x} y={y + 4} size={12} bold>R</T></g>
    ))}
    <L x1={94} y1={166} x2={174} y2={134} w={1.6} /><L x1={207} y1={128} x2={353} y2={128} w={1.6} /><L x1={387} y1={134} x2={466} y2={166} w={1.6} />
    <L x1={94} y1={178} x2={174} y2={214} w={1.6} /><L x1={207} y1={220} x2={353} y2={220} w={1.6} /><L x1={387} y1={214} x2={466} y2={178} w={1.6} />
    <L x1={190} y1={145} x2={190} y2={203} w={1.2} dash="4 4" /><L x1={370} y1={145} x2={370} y2={203} w={1.2} dash="4 4" />
    {[[250, 128, 1], [320, 128, 3], [280, 220, 2]].map(([x, y, n]) => (
      <g key={n}><rect x={x - 12} y={y - 11} width={24} height={22} rx={4} fill={C.yellow} stroke={RED} strokeWidth={1.8} /><T x={x} y={y + 5} size={13} bold fill={RED}>{n}</T></g>
    ))}
    <T x={540} y={118} anchor="end" size={11}>R = router</T><T x={280} y={262} size={12} bold>Packets can take different routes and arrive out of order; packet numbers put them back in order</T>
  </Svg>
);

/* ---------- Fetch decode execute ---------- */
const CsCpuCycle = () => (
  <Svg w={560} h={270} label="The fetch, decode, execute cycle. Fetch copies the instruction from RAM into the CIR using the PC, MAR and MDR. Decode is done by the control unit. Execute carries out the instruction using the ALU. The cycle then repeats">
    <Box x={30} y={26} w={150} h={46} fill={C.blue} size={15}>1  Fetch</Box>
    <Box x={205} y={26} w={150} h={46} fill={C.yellow} size={15}>2  Decode</Box>
    <Box x={380} y={26} w={150} h={46} fill={C.green} size={15}>3  Execute</Box>
    <L x1={182} y1={49} x2={203} y2={49} arrow w={2.4} /><L x1={357} y1={49} x2={378} y2={49} arrow w={2.4} />
    <path d="M455 74 V102 H105 V76" fill="none" stroke={RED} strokeWidth={2.2} markerEnd="url(#ah)" />
    <T x={280} y={120} size={12} bold fill={RED}>the cycle repeats billions of times a second</T>
    <T x={105} y={150} size={12}>PC → MAR</T><T x={105} y={166} size={12}>RAM → MDR → CIR</T><T x={105} y={182} size={12}>PC increases by 1</T>
    <T x={280} y={150} size={12}>The control unit decodes</T><T x={280} y={166} size={12}>the instruction held</T><T x={280} y={182} size={12}>in the CIR</T>
    <T x={455} y={150} size={12}>The ALU or control unit</T><T x={455} y={166} size={12}>carries it out; a result</T><T x={455} y={182} size={12}>may go to the ACC</T>
    <T x={280} y={222} size={12} bold>Address bus (one way)   ·   Data bus (two way)   ·   Control bus</T>
    <T x={280} y={246} size={11}>PC program counter · MAR memory address register · MDR memory data register · CIR current instruction register</T>
  </Svg>
);

/* ---------- Memory hierarchy ---------- */
const CsMemoryPyramid = () => (
  <Svg w={560} h={245} label="A pyramid of memory: cache and registers at the top are fastest and smallest, RAM is in the middle, and secondary storage such as SSD and hard disk at the bottom is slowest and largest. Cache, registers and RAM are volatile and secondary storage is non-volatile">
    <polygon points="210,20 350,20 375,75 185,75" fill={C.pink} stroke={K} strokeWidth={2} />
    <polygon points="185,81 375,81 400,136 160,136" fill={C.yellow} stroke={K} strokeWidth={2} />
    <polygon points="160,142 400,142 425,197 135,197" fill={C.green} stroke={K} strokeWidth={2} />
    <T x={280} y={52} size={13} bold>Cache and registers</T>
    <T x={280} y={113} size={13} bold>RAM (main memory)</T>
    <T x={280} y={174} size={13} bold>Secondary storage (SSD, HDD)</T>
    <L x1={60} y1={190} x2={60} y2={30} arrow w={2.2} stroke={BLUE} /><T x={60} y={16} size={12} bold fill={BLUE}>faster</T><T x={60} y={210} size={12} bold fill={BLUE}>slower</T>
    <L x1={505} y1={30} x2={505} y2={190} arrow w={2.2} stroke={TEAL} /><T x={505} y={16} size={12} bold fill={TEAL}>less storage</T><T x={505} y={210} size={12} bold fill={TEAL}>more storage</T>
    <T x={280} y={234} size={12} bold>Cache, registers and RAM are volatile; secondary storage is non-volatile</T>
  </Svg>
);

/* ---------- Star network ---------- */
const CsStarNetwork = () => (
  <Svg w={560} h={262} label="A star network: a PC, a laptop, a printer and a server each connect to a central switch with their own cable, and a router connects the switch to the internet">
    <T x={280} y={14} size={11}>to the Internet</T>
    <Box x={235} y={22} w={90} h={34} fill="#ede9fe">Router</Box>
    <Box x={235} y={112} w={90} h={40} fill={C.yellow} size={14}>Switch</Box>
    <Box x={30} y={62} w={96} h={34} fill={C.blue}>PC</Box><Box x={30} y={168} w={96} h={34} fill={C.blue}>Laptop</Box>
    <Box x={434} y={62} w={96} h={34} fill={C.green}>Printer</Box><Box x={434} y={168} w={96} h={34} fill={C.green}>File server</Box>
    <L x1={280} y1={56} x2={280} y2={112} w={2} />
    <L x1={126} y1={85} x2={235} y2={124} w={2} /><L x1={126} y1={185} x2={235} y2={140} w={2} />
    <L x1={434} y1={85} x2={325} y2={124} w={2} /><L x1={434} y1={185} x2={325} y2={140} w={2} />
    <T x={280} y={236} size={12} bold>Each device has its own cable to the switch, so one broken cable does not stop the others</T>
  </Svg>
);

/* ---------- Flowchart symbols ---------- */
const CsFlowSymbols = () => (
  <Svg w={560} h={230} label="The flowchart symbols: a rounded terminator for start and end, a rectangle for a process, a parallelogram for input and output, a diamond for a decision with yes and no branches, an arrow for the flow of control, and a rectangle with double sides for a predefined process">
    <rect x={30} y={14} width={100} height={44} rx={22} fill={C.green} stroke={K} strokeWidth={2} /><T x={80} y={41} size={13} bold>Start</T>
    <T x={150} y={34} anchor="start" size={12} bold>Terminator</T><T x={150} y={49} anchor="start" size={11}>start or end</T>
    <rect x={30} y={84} width={100} height={44} fill={C.blue} stroke={K} strokeWidth={2} /><T x={80} y={111} size={13} bold>x ← x + 1</T>
    <T x={150} y={104} anchor="start" size={12} bold>Process</T><T x={150} y={119} anchor="start" size={11}>a calculation</T>
    <polygon points="45,154 140,154 115,198 20,198" fill={C.yellow} stroke={K} strokeWidth={2} /><T x={80} y={181} size={13} bold>INPUT n</T>
    <T x={150} y={174} anchor="start" size={12} bold>Input / output</T><T x={150} y={189} anchor="start" size={11}>read or display</T>
    <polygon points="350,8 410,46 350,84 290,46" fill={C.pink} stroke={K} strokeWidth={2} /><T x={350} y={51} size={13} bold>n &gt; 10 ?</T>
    <T x={420} y={36} anchor="start" size={12} bold fill={TEAL}>Yes</T><T x={284} y={100} size={12} bold fill={RED} anchor="start">No</T>
    <T x={450} y={34} anchor="start" size={12} bold>Decision</T><T x={450} y={49} anchor="start" size={11}>two exits: yes, no</T>
    <L x1={290} y1={118} x2={400} y2={118} arrow w={2.4} /><T x={410} y={116} anchor="start" size={12} bold>Flow line</T><T x={410} y={131} anchor="start" size={11}>direction of flow</T>
    <rect x={290} y={154} width={110} height={44} fill={C.blue} stroke={K} strokeWidth={2} /><L x1={304} y1={154} x2={304} y2={198} w={2} /><L x1={386} y1={154} x2={386} y2={198} w={2} />
    <T x={345} y={181} size={12} bold>CALL sort</T>
    <T x={410} y={174} anchor="start" size={12} bold>Predefined process</T><T x={410} y={189} anchor="start" size={11}>a procedure</T>
  </Svg>
);

/* ---------- Logic gates ---------- */
const gate = (type, cx, oy, rule) => {
  const ox = cx - 36;
  const cy = oy + 22;
  const orBody = `M${ox} ${oy} Q${ox + 30} ${oy} ${ox + 52} ${cy} Q${ox + 30} ${oy + 44} ${ox} ${oy + 44} Q${ox + 14} ${cy} ${ox} ${oy} Z`;
  const andBody = `M${ox} ${oy} h24 a22 22 0 0 1 0 44 h-24 z`;
  const body = { AND: andBody, NAND: andBody, OR: orBody, NOR: orBody, XOR: orBody, NOT: `M${ox} ${oy} L${ox + 44} ${cy} L${ox} ${oy + 44} Z` }[type];
  const tip = { AND: 46, NAND: 46, OR: 52, NOR: 52, XOR: 52, NOT: 44 }[type];
  const bubble = type === 'NAND' || type === 'NOR' || type === 'NOT';
  const outStart = ox + tip + (bubble ? 10 : 0);
  const inEnd = type === 'XOR' ? ox - 2 : type === 'OR' || type === 'NOR' ? ox + 5 : ox;
  return (
    <g key={type}>
      <T x={cx} y={oy - 10} size={13} bold>{type}</T>
      <path d={body} fill={C.blue} stroke={K} strokeWidth={2} />
      {type === 'XOR' && <path d={`M${ox - 7} ${oy} Q${ox + 7} ${cy} ${ox - 7} ${oy + 44}`} fill="none" stroke={K} strokeWidth={2} />}
      {bubble && <circle cx={ox + tip + 5} cy={cy} r={5} fill="#fff" stroke={K} strokeWidth={2} />}
      {type === 'NOT' ? <L x1={ox - 22} y1={cy} x2={ox} y2={cy} w={2} /> : (
        <g><L x1={ox - 22} y1={oy + 11} x2={inEnd} y2={oy + 11} w={2} /><L x1={ox - 22} y1={oy + 33} x2={inEnd} y2={oy + 33} w={2} /></g>
      )}
      <L x1={outStart} y1={cy} x2={outStart + 20} y2={cy} w={2} />
      <T x={ox - 26} y={type === 'NOT' ? cy + 4 : oy + 15} anchor="end" size={11}>A</T>
      {type !== 'NOT' && <T x={ox - 26} y={oy + 37} anchor="end" size={11}>B</T>}
      <T x={outStart + 26} y={cy + 4} anchor="start" size={11}>Q</T>
      <T x={cx} y={oy + 66} size={11}>{rule}</T>
    </g>
  );
};

const CsLogicGates = () => (
  <Svg w={560} h={290} label="The six logic gate symbols: AND outputs 1 only if both inputs are 1, OR outputs 1 if either input is 1, NOT gives the opposite, NAND is NOT AND, NOR is NOT OR, and XOR outputs 1 if the inputs are different">
    {gate('AND', 100, 40, 'output 1 only if both are 1')}
    {gate('OR', 290, 40, 'output 1 if either is 1')}
    {gate('NOT', 470, 40, 'output is the opposite')}
    {gate('NAND', 100, 175, 'NOT AND: 0 only if both 1')}
    {gate('NOR', 290, 175, 'NOT OR: 1 only if both 0')}
    {gate('XOR', 470, 175, '1 if the inputs differ')}
  </Svg>
);

export const CS_FIGS = {
  csPlaceValue: CsPlaceValue,
  csPixelGrid: CsPixelGrid,
  csSoundSample: CsSoundSample,
  csPacketBox: CsPacketBox,
  csCpuCycle: CsCpuCycle,
  csMemoryPyramid: CsMemoryPyramid,
  csStarNetwork: CsStarNetwork,
  csFlowSymbols: CsFlowSymbols,
  csLogicGates: CsLogicGates,
};
