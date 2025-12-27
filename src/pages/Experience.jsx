import styles from './Experience.module.css';
import { workExperience } from '../data/experience';
import Timeline from '../components/Experience/Timeline';
import SEO from '../components/SEO/SEO';

const Experience = () => {
  return (
    <>
      <SEO 
        title="Professional Experience"
        description="Abhav Bhanot's professional experience including internships at SCAAI and Newtuple, focusing on AI/ML development and research."
        keywords="AI Internship, ML Internship, SCAAI, Newtuple, Professional Experience, AI Development, Machine Learning"
        canonicalUrl="/experience"
      />
      <div className={styles.experiencePage}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Professional Experience</h1>
          <p className={styles.pageSubtitle}>Work History & Career Journey</p>
        </header>

        <div className={styles.experienceContent}>
          {/* Work Experience Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Work Experience</h2>
            <Timeline items={workExperience} />
          </section>
        </div>
      </div>
    </>
  );
};

export default Experience;
