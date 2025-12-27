import styles from './AchievementCard.module.css';

const AchievementCard = ({ achievement }) => {
  return (
    <div
      className={`${styles.achievementCard} ${achievement.featured ? styles.featured : ''}`}
    >
      <h3 className={styles.achievementTitle}>{achievement.title}</h3>
      <p className={styles.achievementEvent}>{achievement.event}</p>
      {achievement.organization && (
        <p className={styles.achievementOrg}>{achievement.organization}</p>
      )}
      <span className={styles.achievementDate}>{achievement.date}</span>
      {achievement.description && (
        <p className={styles.achievementDesc}>{achievement.description}</p>
      )}
    </div>
  );
};

export default AchievementCard;
