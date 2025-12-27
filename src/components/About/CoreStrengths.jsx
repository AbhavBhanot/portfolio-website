import { personalInfo } from '../../data/personal';
import Badge from '../UI/Badge';
import styles from './About.module.css';

/**
 * CoreStrengths component
 * Displays core strengths as badges
 */
function CoreStrengths() {
  return (
    <section className={styles.strengthsSection}>
      <h2 className={styles.sectionTitle}>Core Strengths</h2>
      
      <div className={styles.strengthsList}>
        {personalInfo.coreStrengths.map((strength, index) => (
          <Badge key={index} variant="primary">
            {strength}
          </Badge>
        ))}
      </div>
    </section>
  );
}

export default CoreStrengths;
