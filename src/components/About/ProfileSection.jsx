import { personalInfo } from '../../data/personal';
import styles from './About.module.css';

/**
 * ProfileSection component
 * Displays profile image and bio paragraphs
 */
function ProfileSection() {
  return (
    <section className={styles.profileSection}>
      <div className={styles.profileImage}>
        <img 
          src="/profile/profile.jpg" 
          alt={personalInfo.name}
          className={styles.image}
        />
      </div>
      
      <div className={styles.bio}>
        {personalInfo.bio.paragraphs.map((paragraph, index) => (
          <p key={index} className={styles.bioParagraph}>
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
}

export default ProfileSection;
