import { 
  FaPython, FaDatabase, FaJs, FaReact, FaDocker, FaGitAlt, FaLinux, FaCode,
  FaBrain, FaSearch, FaEye, FaTachometerAlt, FaTree, FaPen, FaComments, FaChartBar, FaStar
} from 'react-icons/fa';
import { 
  SiPytorch, SiTensorflow, SiScikitlearn, SiPandas, SiNumpy, 
  SiJupyter 
} from 'react-icons/si';
import styles from './SkillBadge.module.css';

/**
 * Icon mapping for skills
 */
const iconMap = {
  python: FaPython,
  database: FaDatabase,
  javascript: FaJs,
  react: FaReact,
  docker: FaDocker,
  git: FaGitAlt,
  linux: FaLinux,
  pytorch: SiPytorch,
  tensorflow: SiTensorflow,
  scikit: SiScikitlearn,
  pandas: SiPandas,
  numpy: SiNumpy,
  jupyter: SiJupyter,
  vscode: FaCode,
  brain: FaBrain,
  search: FaSearch,
  message: FaComments,
  eye: FaEye,
  chart: FaChartBar,
  speedometer: FaTachometerAlt,
  tree: FaTree,
  vector: FaPen,
  chain: FaStar,
  huggingface: FaStar,
  forest: FaTree,
};

/**
 * SkillBadge component
 * Displays individual skill with icon and name
 * Includes subtle hover effect
 */
function SkillBadge({ skill }) {
  const Icon = skill.icon ? iconMap[skill.icon] : null;

  return (
    <div className={styles.skillBadge}>
      {Icon && (
        <div className={styles.iconWrapper}>
          <Icon className={styles.icon} />
        </div>
      )}
      <div className={styles.content}>
        <span className={styles.name}>{skill.name}</span>
        {skill.level && (
          <span className={styles.level}>{skill.level}</span>
        )}
        {skill.description && (
          <span className={styles.description}>{skill.description}</span>
        )}
      </div>
    </div>
  );
}

export default SkillBadge;
