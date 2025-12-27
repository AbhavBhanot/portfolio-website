import { motion } from 'framer-motion';
import { personalInfo } from '../../data/personal';
import Button from '../UI/Button';
import styles from './Hero.module.css';

/**
 * Hero section component for the home page
 * Displays name, title, introduction, and call-to-action buttons
 */
function Hero() {
  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = personalInfo.contact.resume;
    link.download = 'Abhav_Bhanot_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className={styles.hero}>
      <motion.div 
        className={styles.heroContent}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.h1 
          className={styles.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {personalInfo.name}
        </motion.h1>
        
        <motion.p 
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {personalInfo.title}
        </motion.p>
        
        <motion.p 
          className={styles.introduction}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {personalInfo.bio.short}
        </motion.p>
        
        <motion.div 
          className={styles.ctaButtons}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Button variant="primary" to="/projects">
            View Projects
          </Button>
          <Button variant="secondary" onClick={handleDownloadResume}>
            Download Resume
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
