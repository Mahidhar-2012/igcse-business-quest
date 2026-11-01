import CourseApp from '../course/CourseApp.jsx';
import PhysicsCard from '../physics/PhysicsCard.jsx';
import { units, questionIndex, subQuestionIds } from './data/index.js';

const config = {
  id: 'cs',
  appTitle: 'Computer Science Quest',
  heading: 'IGCSE Computer Science 0478',
  gradient: 'from-cyan-700 to-sky-700',
  storageKey: 'igcse-cs-quest:v1',
  units,
  questionIndex,
  subQuestionIds,
  CardView: PhysicsCard,
};

export default function CSApp({ onHome, deep }) {
  return <CourseApp onHome={onHome} config={config} deep={deep} />;
}
