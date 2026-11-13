import { useMemo } from 'react';
import CourseApp from '../course/CourseApp.jsx';
import PhysicsCard from './PhysicsCard.jsx';
import { units, questionIndex, subQuestionIds } from './data/index.js';
import { DEMOS } from './demos/index.js';
import { physicsStorageKey } from '../portal/session.js';

export default function PhysicsApp({ onHome, deep }) {
  // Storage key is namespaced to the signed-in student (if any) so a teacher can review
  // everyone on this device. Computed per mount — a student signs in at the portal, then opens Physics.
  const config = useMemo(() => ({
    id: 'physics',
    appTitle: 'Physics Quest',
    heading: 'IGCSE Physics 0625',
    gradient: 'from-sky-700 to-indigo-700',
    storageKey: physicsStorageKey(),
    units,
    questionIndex,
    subQuestionIds,
    CardView: PhysicsCard,
    demos: DEMOS,
  }), []);

  return <CourseApp onHome={onHome} config={config} deep={deep} />;
}
