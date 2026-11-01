import CourseApp from '../course/CourseApp.jsx';
import PhysicsCard from '../physics/PhysicsCard.jsx';
import { units, questionIndex, subQuestionIds } from './data/index.js';

const config = {
  id: 'biology',
  appTitle: 'Biology Quest',
  heading: 'IGCSE Biology 0610',
  gradient: 'from-lime-700 to-green-700',
  storageKey: 'igcse-biology-quest:v1',
  units,
  questionIndex,
  subQuestionIds,
  CardView: PhysicsCard,
};

export default function BiologyApp({ onHome, deep }) {
  return <CourseApp onHome={onHome} config={config} deep={deep} />;
}
