// Shared drawing helpers for the newer diagram files (svgPhys2, svgChem2, svgEcon2).
import { T, L, K } from './svgFigs.jsx';

export const C = {
  green: '#bbf7d0', pink: '#fecdd3', blue: '#dbeafe', yellow: '#fef9c3', grey: '#e5e7eb',
  red: '#dc2626', navy: '#2563eb', teal: '#0d9488', orange: '#f97316', violet: '#7c3aed',
};

/** Label at the right, with a leader line from (px, py). */
export const Lab = ({ px, py, tx, ty, children }) => (
  <g>
    <L x1={px} y1={py} x2={tx - 4} y2={ty - 4} w={1.2} />
    <circle cx={px} cy={py} r={2} fill={K} />
    <T x={tx} y={ty} anchor="start" size={12}>{children}</T>
  </g>
);

/** Label at the left. */
export const LabL = ({ px, py, tx, ty, children }) => (
  <g>
    <L x1={px} y1={py} x2={tx + 4} y2={ty - 4} w={1.2} />
    <circle cx={px} cy={py} r={2} fill={K} />
    <T x={tx} y={ty} anchor="end" size={12}>{children}</T>
  </g>
);

export const Box = ({ x, y, w, h, fill = '#fff', children, size = 12, stroke = K }) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx={8} fill={fill} stroke={stroke} strokeWidth={2} />
    <text x={x + w / 2} y={y + h / 2 + 4} textAnchor="middle" fontSize={size} fontWeight={700} fill={K}>{children}</text>
  </g>
);

export const Arrow = ({ x1, y1, x2, y2, label, lx, ly, anchor = 'middle', w = 2.2, stroke = K, size = 11 }) => (
  <g>
    <L x1={x1} y1={y1} x2={x2} y2={y2} arrow w={w} stroke={stroke} />
    {label && <T x={lx} y={ly} anchor={anchor} size={size} fill={stroke === K ? K : stroke} bold>{label}</T>}
  </g>
);

/** Small x–y axes: origin (x0, y0), end of x axis x1, top of y axis y1. */
export const Ax = ({ x0, y0, x1, y1, xl, yl, xo = 22, yo = 22 }) => (
  <g>
    <L x1={x0} y1={y0} x2={x1} y2={y0} arrow />
    <L x1={x0} y1={y0} x2={x0} y2={y1} arrow />
    <T x={(x0 + x1) / 2} y={y0 + xo} size={12}>{xl}</T>
    <text x={x0 - yo} y={(y0 + y1) / 2} transform={`rotate(-90 ${x0 - yo} ${(y0 + y1) / 2})`} textAnchor="middle" fontSize={12} fill={K}>{yl}</text>
  </g>
);
