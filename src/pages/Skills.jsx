import { motion } from 'framer-motion';
import { skillCategories, certifications } from '../data/skills';
import SkillCategory from '../components/Skills/SkillCategory';
import SEO from '../components/SEO/SEO';
import styles from './Skills.module.css';

/**
 * Skills page component
 * Displays technical skills, expertise, and certifications organized by category
 */
function Skills() {
  return (
    <>
      <SEO 
        title="Skills & Certifications"
        description="Explore Abhav Bhanot's technical skills including Python, PyTorch, TensorFlow, LangChain, React, and expertise in AI/ML specializations like LLM Fine-tuning, RAG, NLP, and Computer Vision, along with professional certifications."
        keywords="Python, PyTorch, TensorFlow, LangChain, HuggingFace, React, Docker, LLM Fine-tuning, RAG, NLP, Computer Vision, Machine Learning Skills, Certifications"
        canonicalUrl="/skills"
      />
      <div className={styles.skillsPage}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Skills & Certifications</h1>
          <p className={styles.pageSubtitle}>Technical Expertise, Tools & Professional Certifications</p>
        </header>

        <div className={styles.skillsContent}>
          {skillCategories.map((category) => (
            <SkillCategory key={category.id} category={category} />
          ))}

          {/* Certifications Section */}
          <section className={styles.certificationsSection}>
            <h2 className={styles.sectionTitle}>Professional Certifications</h2>
            <div className={styles.certificationsList}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  className={styles.certificationItem}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className={styles.certContent}>
                    <h4 className={styles.certTitle}>{cert.title}</h4>
                    <p className={styles.certIssuer}>{cert.issuer}</p>
                  </div>
                  <span className={styles.certDate}>{cert.date}</span>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Skills;
