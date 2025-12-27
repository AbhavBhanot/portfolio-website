import { Link } from 'react-router-dom';
import { FiExternalLink, FiGithub, FiArrowRight } from 'react-icons/fi';
import Button from '../UI/Button';
import Badge from '../UI/Badge';
import styles from './FeaturedProject.module.css';

/**
 * FeaturedProject component - Displays featured project banner with large image
 */
function FeaturedProject({ project }) {
  return (
    <div className={styles.featuredProject}>
      <div className={styles.featuredBadge}>
        <span>Featured Project</span>
      </div>

      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <img 
            src={project.image} 
            alt={project.title}
            className={styles.image}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x500/d4a574/ffffff?text=Project+Image';
            }}
          />
        </div>

        <div className={styles.info}>
          <h2 className={styles.title}>{project.title}</h2>
          <p className={styles.description}>{project.longDescription || project.shortDescription}</p>

          <div className={styles.techStack}>
            <h3 className={styles.techTitle}>Tech Stack</h3>
            <div className={styles.techList}>
              {project.techStack.map((tech, index) => (
                <Badge key={index} variant="default">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className={styles.actions}>
            <Button variant="primary" to={`/projects/${project.id}`}>
              <FiArrowRight /> View Details
            </Button>
            {project.liveDemo && (
              <Button variant="secondary" href={project.liveDemo}>
                <FiExternalLink /> Live Demo
              </Button>
            )}
            <Button variant="secondary" href={project.github}>
              <FiGithub /> GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProject;
