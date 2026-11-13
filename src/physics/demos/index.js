import MirrorLab from './MirrorLab.jsx';

// Live, teacher-driven physics demonstrations. Add a new topic by appending to this list.
// Each demo opens at #/physics/<id> and from the "Live demos" button in the Physics header.
export const DEMOS = [
  {
    id: 'mirrors',
    title: 'Curved mirrors',
    emoji: '🪞',
    blurb: 'Move the object along the axis and watch the reflected rays and image form — concave & convex, with pole, focus and centre of curvature labelled.',
    Component: MirrorLab,
  },
];

export const findDemo = (id) => DEMOS.find((d) => d.id === id) || null;
