import CourseApp from '../course/CourseApp.jsx';
import PhysicsCard from '../physics/PhysicsCard.jsx';
import { units, questionIndex, subQuestionIds } from './data/index.js';

const config = {
  id: 'economics',
  appTitle: 'Economics Quest',
  heading: 'IGCSE Economics 0455',
  gradient: 'from-amber-700 to-orange-700',
  storageKey: 'igcse-economics-quest:v1',
  units,
  questionIndex,
  subQuestionIds,
  CardView: PhysicsCard,
};

export default function EconomicsApp({ onHome }) {
  return <CourseApp onHome={onHome} config={config} />;
}
