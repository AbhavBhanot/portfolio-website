import ProjectCard from './ProjectCard';
import styles from './ProjectGrid.module.css';

/**
 * ProjectGrid component - Responsive grid layout for project cards
 * 3 columns on desktop, 2 on tablet, 1 on mobile
 */
function ProjectGrid({ projects }) {
  if (!projects || projects.length === 0) {
    return (
      <div className={styles.emptyState}>
        <p>No projects to display yet.</p>
      </div>
    );
  }

  return (
    <div className={styles.projectGrid}>
      {projects.map((project, index) => (
        <ProjectCard 
          key={project.id} 
          project={project}
          animationDelay={index * 100}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;
