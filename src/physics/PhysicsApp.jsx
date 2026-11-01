import CourseApp from '../course/CourseApp.jsx';
import PhysicsCard from './PhysicsCard.jsx';
import { units, questionIndex, subQuestionIds } from './data/index.js';

const config = {
  id: 'physics',
  appTitle: 'Physics Quest',
  heading: 'IGCSE Physics 0625',
  gradient: 'from-sky-700 to-indigo-700',
  storageKey: 'igcse-physics-quest:v1',
  units,
  questionIndex,
  subQuestionIds,
  CardView: PhysicsCard,
};

export default function PhysicsApp({ onHome, deep }) {
  return <CourseApp onHome={onHome} config={config} deep={deep} />;
}
