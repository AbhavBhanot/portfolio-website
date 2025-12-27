import { motion } from 'framer-motion';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import SkillBadge from './SkillBadge';
import Badge from '../UI/Badge';
import styles from './SkillCategory.module.css';

/**
 * SkillCategory component
 * Displays a category of skills with clean header and grid layout
 */
function SkillCategory({ category }) {
  const isSoftSkills = category.id === 'soft-skills';
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <motion.div 
      ref={ref}
      className={styles.skillCategory}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.categoryHeader}>
        <h2 className={styles.categoryTitle}>{category.title}</h2>
      </div>

      {isSoftSkills ? (
        <motion.div 
          className={styles.softSkillsGrid}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {category.skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              variants={{
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 }
              }}
              transition={{ duration: 0.3 }}
            >
              <Badge variant="secondary">
                {skill.name}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      ) : (
        <motion.div 
          className={styles.skillsGrid}
          initial="initial"
          animate={isVisible ? "animate" : "initial"}
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.05
              }
            }
          }}
        >
          {category.skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.4 }}
            >
              <SkillBadge skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}

export default SkillCategory;
