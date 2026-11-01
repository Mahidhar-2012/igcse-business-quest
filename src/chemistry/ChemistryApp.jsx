import CourseApp from '../course/CourseApp.jsx';
import PhysicsCard from '../physics/PhysicsCard.jsx';
import { units, questionIndex, subQuestionIds } from './data/index.js';

const config = {
  id: 'chemistry',
  appTitle: 'Chemistry Quest',
  heading: 'IGCSE Chemistry 0620',
  gradient: 'from-teal-700 to-emerald-700',
  storageKey: 'igcse-chemistry-quest:v1',
  units,
  questionIndex,
  subQuestionIds,
  CardView: PhysicsCard, // the byte card supports notes, equations and diagrams for any subject
};

export default function ChemistryApp({ onHome, deep }) {
  return <CourseApp onHome={onHome} config={config} deep={deep} />;
}
