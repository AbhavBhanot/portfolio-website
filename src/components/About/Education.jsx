import { personalInfo } from '../../data/personal';
import Badge from '../UI/Badge';
import styles from './About.module.css';

/**
 * Education component
 * Displays education cards with degree, GPA, and courses
 */
function Education() {
  return (
    <section className={styles.educationSection}>
      <h2 className={styles.sectionTitle}>Education</h2>
      
      {personalInfo.education.map((edu) => (
        <div key={edu.id} className={styles.educationCard}>
          <h3 className={styles.schoolName}>{edu.institution}</h3>
          <p className={styles.degree}>{edu.degree}</p>
          <p className={styles.duration}>{edu.duration}</p>
          
          {edu.gpa && (
            <p className={styles.gpa}>GPA: {edu.gpa}</p>
          )}
          
          {edu.achievement && (
            <p className={styles.achievement}>{edu.achievement}</p>
          )}
          
          {edu.courses && (
            <div className={styles.courses}>
              {edu.courses.map((course, index) => (
                <Badge key={index}>{course}</Badge>
              ))}
            </div>
          )}
        </div>
      ))}
    </section>
  );
}

export default Education;
