import ProfileSection from '../components/About/ProfileSection';
import Education from '../components/About/Education';
import Interests from '../components/About/Interests';
import CoreStrengths from '../components/About/CoreStrengths';
import SEO from '../components/SEO/SEO';
import styles from './About.module.css';

/**
 * About page component
 * Displays background, education, interests, and core strengths
 */
function About() {
  return (
    <>
      <SEO 
        title="About Me"
        description="Learn about Abhav Bhanot's background, education at Symbiosis Institute of Technology, technical interests in AI/ML, and core strengths in leadership and problem-solving."
        keywords="Abhav Bhanot, About, Education, Symbiosis Institute of Technology, AI Student, ML Student, Technical Interests, Leadership"
        canonicalUrl="/about"
      />
      <div className={styles.aboutPage}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>About Me</h1>
          <p className={styles.pageSubtitle}>Background, Education & Interests</p>
        </header>

        <div className={styles.aboutContent}>
          <ProfileSection />
          <Education />
          <Interests />
          <CoreStrengths />
        </div>
      </div>
    </>
  );
}

export default About;
