import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';
import Card from '../UI/Card';
import Button from '../UI/Button';
import styles from './ContactInfo.module.css';

/**
 * ContactInfo component
 * Displays contact information cards with icons
 */
function ContactInfo() {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.contact.resume;
    link.download = 'Abhav_Bhanot_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={styles.contactInfo}>
      <Card className={styles.infoCard}>
        <div className={styles.cardIcon}>
          <FaEnvelope />
        </div>
        <h3 className={styles.cardTitle}>Email</h3>
        <a 
          href={`mailto:${personalInfo.contact.email}`}
          className={styles.cardLink}
        >
          {personalInfo.contact.email}
        </a>
        <p className={styles.cardDesc}>For professional inquiries and opportunities</p>
      </Card>

      <Card className={styles.infoCard}>
        <div className={styles.cardIcon}>
          <FaLinkedin />
        </div>
        <h3 className={styles.cardTitle}>LinkedIn</h3>
        <a 
          href={personalInfo.contact.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          Abhav Bhanot
        </a>
        <p className={styles.cardDesc}>Connect professionally</p>
      </Card>

      <Card className={styles.infoCard}>
        <div className={styles.cardIcon}>
          <FaGithub />
        </div>
        <h3 className={styles.cardTitle}>GitHub</h3>
        <a 
          href={personalInfo.contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.cardLink}
        >
          AbhavBhanot
        </a>
        <p className={styles.cardDesc}>Explore my code and projects</p>
      </Card>

      <Card className={styles.infoCard}>
        <div className={styles.cardIcon}>
          <FaFileDownload />
        </div>
        <h3 className={styles.cardTitle}>Resume</h3>
        <Button 
          variant="secondary" 
          onClick={handleDownloadResume}
          className={styles.downloadButton}
        >
          Download PDF
        </Button>
        <p className={styles.cardDesc}>View my complete professional profile</p>
      </Card>
    </div>
  );
}

export default ContactInfo;
