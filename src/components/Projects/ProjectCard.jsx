import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import Badge from '../UI/Badge';
import styles from './ProjectCard.module.css';

/**
 * ProjectCard component - Displays project with image, title, description, and tech stack
 * Includes hover overlay with "View Details" button and icon buttons for Live Demo and GitHub
 */
function ProjectCard({ project, animationDelay = 0 }) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div 
      ref={ref}
      className={styles.projectCard}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: animationDelay / 1000, ease: 'easeOut' }}
    >
      <Link to={`/projects/${project.id}`} className={styles.imageLink}>
        <div className={styles.imageContainer}>
          <img 
            src={project.image} 
            alt={project.title}
            className={styles.image}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/600x400/d4a574/ffffff?text=Project+Image';
            }}
          />
          <div className={styles.overlay}>
            <span className={styles.viewDetails}>View Details</span>
          </div>
        </div>
      </Link>

      <div className={styles.content}>
        <Link to={`/projects/${project.id}`} className={styles.titleLink}>
          <h3 className={styles.title}>{project.title}</h3>
        </Link>
        
        <p className={styles.description}>{project.shortDescription}</p>

        <div className={styles.techStack}>
          {project.techStack.slice(0, 4).map((tech, index) => (
            <Badge key={index} variant="default">
              {tech}
            </Badge>
          ))}
          {project.techStack.length > 4 && (
            <Badge variant="default">+{project.techStack.length - 4}</Badge>
          )}
        </div>

        <div className={styles.actions}>
          {project.liveDemo && (
            <a 
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
              title="Live Demo"
              onClick={(e) => e.stopPropagation()}
            >
              <FiExternalLink />
            </a>
          )}
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
              title="GitHub Repository"
              onClick={(e) => e.stopPropagation()}
            >
              <FiGithub />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
