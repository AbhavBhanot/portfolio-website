import { motion } from 'framer-motion';
import AdditionalProjectCard from './AdditionalProjectCard';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import styles from './AdditionalProjectsGrid.module.css';

/**
 * AdditionalProjectsGrid component - Grid layout for additional GitHub projects
 */
function AdditionalProjectsGrid({ projects }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.section 
      ref={ref}
      className={styles.additionalProjects}
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <div className={styles.sectionHeader}>
        <h2 className={styles.sectionTitle}>Additional Projects</h2>
        <p className={styles.sectionSubtitle}>
          More projects and experiments available on GitHub
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <AdditionalProjectCard
            key={project.id}
            project={project}
            animationDelay={index * 100}
          />
        ))}
      </div>
    </motion.section>
  );
}

export default AdditionalProjectsGrid;