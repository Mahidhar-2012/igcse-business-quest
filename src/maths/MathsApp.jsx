import CourseApp from '../course/CourseApp.jsx';
import PhysicsCard from '../physics/PhysicsCard.jsx';
import { units, questionIndex, subQuestionIds } from './data/index.js';

const config = {
  id: 'maths',
  appTitle: 'Maths Quest',
  heading: 'IGCSE Mathematics 0580',
  gradient: 'from-rose-700 to-pink-700',
  storageKey: 'igcse-maths-quest:v1',
  units,
  questionIndex,
  subQuestionIds,
  CardView: PhysicsCard,
};

export default function MathsApp({ onHome, deep }) {
  return <CourseApp onHome={onHome} config={config} deep={deep} />;
}
