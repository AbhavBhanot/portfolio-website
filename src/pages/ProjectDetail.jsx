import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { getProjectById, getRelatedProjects } from '../data/projects';
import ProjectDetailView from '../components/Projects/ProjectDetailView';
import ProjectCard from '../components/Projects/ProjectCard';
import SEO from '../components/SEO/SEO';
import styles from './ProjectDetail.module.css';

function ProjectDetail() {
  const { id } = useParams();
  const project = getProjectById(id);
  const relatedProjects = project ? getRelatedProjects(id, 3) : [];

  // If project not found, redirect to projects page
  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <SEO 
        title={project.title}
        description={project.longDescription || project.shortDescription}
        keywords={`${project.title}, ${project.techStack.join(', ')}, AI Project, ML Project`}
        ogImage={project.image}
        canonicalUrl={`/projects/${project.id}`}
      />
      <div className={styles.projectDetailPage}>
      {/* Project Hero */}
      <div className={styles.projectHero}>
        <div className={styles.heroContent}>
          <Link to="/projects" className={styles.backButton}>
            <svg 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M12.5 15L7.5 10L12.5 5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Back to Projects
          </Link>
          
          <motion.h1 
            className={styles.projectTitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {project.title}
          </motion.h1>
          
          <motion.div 
            className={styles.projectMeta}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className={styles.metaItem}>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26362 2 4V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4C14 3.26362 13.403 2.66667 12.6667 2.66667Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M10.6667 1.33333V4" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M5.33333 1.33333V4" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M2 6.66667H14" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              {project.date}
            </div>
            <div className={styles.metaItem}>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M2 4.66667L8 1.33333L14 4.66667V11.3333C14 11.687 13.8595 12.0261 13.6095 12.2761C13.3594 12.5262 13.0203 12.6667 12.6667 12.6667H3.33333C2.97971 12.6667 2.64057 12.5262 2.39052 12.2761C2.14048 12.0261 2 11.687 2 11.3333V4.66667Z" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M6 14.6667V8H10V14.6667" 
                  stroke="currentColor" 
                  strokeWidth="1.5" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              {project.category}
            </div>
            <div className={styles.metaItem}>
              <span className={`${styles.statusBadge} ${styles[project.status.toLowerCase()]}`}>
                {project.status}
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Project Detail View */}
      <ProjectDetailView project={project} />

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className={styles.relatedProjects}>
          <div className={styles.relatedContent}>
            <h2 className={styles.relatedTitle}>More Projects</h2>
            <div className={styles.relatedGrid}>
              {relatedProjects.map((relatedProject, index) => (
                <motion.div
                  key={relatedProject.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                >
                  <ProjectCard project={relatedProject} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
    </>
  );
}

export default ProjectDetail;
