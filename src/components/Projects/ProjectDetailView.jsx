import { motion } from 'framer-motion';
import { Button } from '../UI';
import Badge from '../UI/Badge';
import styles from './ProjectDetailView.module.css';

function ProjectDetailView({ project }) {
  return (
    <div className={styles.projectDetailView}>
      <div className={styles.content}>
        {/* Project Image */}
        <motion.div 
          className={styles.imageContainer}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img 
            src={project.image} 
            alt={project.title}
            className={styles.projectImage}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/1200x600/d97706/ffffff?text=Project+Image';
            }}
          />
        </motion.div>

        {/* Project Description */}
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className={styles.sectionTitle}>Overview</h2>
          <p className={styles.description}>{project.longDescription}</p>
        </motion.section>

        {/* Key Features/Highlights */}
        {project.highlights && project.highlights.length > 0 && (
          <motion.section 
            className={styles.section}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className={styles.sectionTitle}>Key Features</h2>
            <ul className={styles.highlightsList}>
              {project.highlights.map((highlight, index) => (
                <motion.li 
                  key={index}
                  className={styles.highlightItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 20 20" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.checkIcon}
                  >
                    <path 
                      d="M16.6667 5L7.50004 14.1667L3.33337 10" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </motion.section>
        )}

        {/* Tech Stack */}
        <motion.section 
          className={styles.section}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className={styles.sectionTitle}>Technologies Used</h2>
          <div className={styles.techGrid}>
            {project.techStack.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.6 + index * 0.05 }}
              >
                <div className={styles.techCard}>
                  <div className={styles.techIcon}>
                    <svg 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path 
                        d="M13 2L3 14H12L11 22L21 10H12L13 2Z" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className={styles.techName}>{tech}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Project Links */}
        <motion.div 
          className={styles.projectLinks}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          {project.liveDemo && (
            <Button 
              href={project.liveDemo} 
              target="_blank" 
              rel="noopener noreferrer"
              variant="primary"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M12.5 2.5H17.5V7.5" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
                <path 
                  d="M8.33337 11.6667L17.5 2.5" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              </svg>
              View Live Demo
            </Button>
          )}
          
          {project.github && (
            <Button 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              variant="secondary"
            >
              <svg 
                width="20" 
                height="20" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z" 
                  fill="currentColor"
                />
              </svg>
              View on GitHub
            </Button>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default ProjectDetailView;
