import styles from './Achievements.module.css';
import { achievements, workshops, leadership } from '../data/experience';
import AchievementCard from '../components/Experience/AchievementCard';
import SEO from '../components/SEO/SEO';

const Achievements = () => {
  return (
    <>
      <SEO 
        title="Achievements & Recognition"
        description="Abhav Bhanot's achievements including hackathon wins (ImaGenAI 3rd place at IIT Delhi), certifications, workshops, and leadership roles in AI/ML community."
        keywords="Hackathons, ImaGenAI, IIT Delhi, Certifications, Leadership, AI Club, Workshops, Achievements, Recognition"
        canonicalUrl="/achievements"
      />
      <div className={styles.achievementsPage}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Achievements & Recognition</h1>
          <p className={styles.pageSubtitle}>Competitions, Awards & Community Impact</p>
        </header>

        <div className={styles.achievementsContent}>
          {/* Competitions & Hackathons Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Competitions & Hackathons</h2>
            <div className={styles.achievementsGrid}>
              {achievements.map((achievement) => (
                <AchievementCard 
                  key={achievement.id} 
                  achievement={achievement}
                />
              ))}
            </div>
          </section>

          {/* Workshops & Outreach Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Workshops & Outreach</h2>
            <div className={styles.outreachList}>
              {workshops.map((workshop) => (
                <div key={workshop.id} className={styles.outreachItem}>
                  <h3 className={styles.outreachTitle}>{workshop.title}</h3>
                  <p className={styles.outreachDesc}>{workshop.description}</p>
                  {workshop.attendees && (
                    <span className={styles.attendeeBadge}>{workshop.attendees} attendees</span>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Leadership & Activities Section */}
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Leadership & Activities</h2>
            <div className={styles.experienceGrid}>
              {leadership.map((item) => (
                <div
                  key={item.id}
                  className={styles.experienceCard}
                >
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  {item.organization && (
                    <p className={styles.cardOrg}>{item.organization}</p>
                  )}
                  {item.startDate && (
                    <p className={styles.cardDate}>
                      {item.startDate} - {item.endDate}
                    </p>
                  )}
                  <p className={styles.cardDesc}>{item.description}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Achievements;