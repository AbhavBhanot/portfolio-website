import { personalInfo } from '../../data/personal';
import { 
  FaBrain, 
  FaNetworkWired, 
  FaLayerGroup, 
  FaComments, 
  FaEye, 
  FaCloud 
} from 'react-icons/fa';
import styles from './About.module.css';

/**
 * Interests component
 * Displays grid of interest cards with icons
 */

// Icon mapping
const iconMap = {
  brain: FaBrain,
  network: FaNetworkWired,
  layers: FaLayerGroup,
  message: FaComments,
  eye: FaEye,
  cloud: FaCloud
};

function Interests() {
  return (
    <section className={styles.interestsSection}>
      <h2 className={styles.sectionTitle}>Technical Interests</h2>
      
      <div className={styles.interestGrid}>
        {personalInfo.interests.map((interest) => {
          const IconComponent = iconMap[interest.icon];
          
          return (
            <div key={interest.id} className={styles.interestCard}>
              <div className={styles.interestIcon}>
                {IconComponent && <IconComponent />}
              </div>
              <h3 className={styles.interestTitle}>{interest.title}</h3>
              <p className={styles.interestDesc}>{interest.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Interests;
