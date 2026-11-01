import CourseApp from '../course/CourseApp.jsx';
import PhysicsCard from '../physics/PhysicsCard.jsx';
import { units, questionIndex, subQuestionIds } from './data/index.js';

const config = {
  id: 'addmaths',
  appTitle: 'Additional Maths Quest',
  heading: 'IGCSE Additional Mathematics 0606',
  gradient: 'from-fuchsia-700 to-purple-700',
  storageKey: 'igcse-addmaths-quest:v1',
  units,
  questionIndex,
  subQuestionIds,
  CardView: PhysicsCard,
};

export default function AddMathsApp({ onHome }) {
  return <CourseApp onHome={onHome} config={config} />;
}
