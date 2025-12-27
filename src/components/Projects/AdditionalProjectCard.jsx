import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import Badge from '../UI/Badge';
import styles from './AdditionalProjectCard.module.css';

/**
 * AdditionalProjectCard component - Simple card for GitHub projects using interest card styling
 */
function AdditionalProjectCard({ project, animationDelay = 0 }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div 
      ref={ref}
      className={styles.projectCard}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: animationDelay / 1000, ease: 'easeOut' }}
    >
      <div className={styles.projectIcon}>
        <FiGithub />
      </div>
      
      <h3 className={styles.projectTitle}>{project.title}</h3>
      
      <p className={styles.projectDescription}>{project.description}</p>

      <div className={styles.techStack}>
        {project.techStack.map((tech, index) => (
          <Badge key={index} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>

      <a 
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.githubLink}
        title="View on GitHub"
      >
        View on GitHub
      </a>
    </motion.div>
  );
}

export default AdditionalProjectCard;