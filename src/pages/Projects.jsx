import { projects, getFeaturedProject } from '../data/projects';
import { additionalProjects } from '../data/additionalProjects';
import FeaturedProject from '../components/Projects/FeaturedProject';
import ProjectGrid from '../components/Projects/ProjectGrid';
import AdditionalProjectsGrid from '../components/Projects/AdditionalProjectsGrid';
import SEO from '../components/SEO/SEO';
import styles from './Projects.module.css';

/**
 * Projects page - Showcases AI/ML projects with featured project and grid layout
 */
function Projects() {
  const featuredProject = getFeaturedProject();
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <>
      <SEO 
        title="Projects"
        description="Explore Abhav Bhanot's AI/ML projects including VRU Detection, Multimodal Healthcare Platform, RecruitEdge AI, and SQL Genius. Featuring deep learning, computer vision, and NLP applications."
        keywords="AI Projects, Machine Learning Projects, Deep Learning, Computer Vision, NLP, Healthcare AI, Autonomous Vehicles, LLM Applications"
        canonicalUrl="/projects"
      />
      <div className={styles.projectsPage}>
        <div className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Projects</h1>
          <p className={styles.pageSubtitle}>AI/ML Solutions & Innovations</p>
        </div>

        {featuredProject && <FeaturedProject project={featuredProject} />}
        
        <ProjectGrid projects={regularProjects} />
        
        <AdditionalProjectsGrid projects={additionalProjects} />
      </div>
    </>
  );
}

export default Projects;
