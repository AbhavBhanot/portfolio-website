import styles from './Timeline.module.css';
import Badge from '../UI/Badge';

const TimelineItem = ({ item }) => {
  return (
    <div
      className={styles.timelineItem}
    >
      <div className={styles.timelineDot}></div>
      <div className={styles.timelineContent}>
        <div className={styles.itemHeader}>
          <h3 className={styles.itemTitle}>{item.title}</h3>
          <span className={styles.itemDate}>
            {item.startDate} - {item.endDate}
          </span>
        </div>
        
        <div className={styles.itemMeta}>
          <p className={styles.itemOrg}>{item.organization}</p>
          {item.location && (
            <p className={styles.itemLocation}>📍 {item.location}</p>
          )}
        </div>

        <p className={styles.itemDescription}>{item.description}</p>

        {item.highlights && item.highlights.length > 0 && (
          <div className={styles.itemHighlights}>
            <h4 className={styles.highlightsTitle}>Key Highlights:</h4>
            <ul className={styles.highlightsList}>
              {item.highlights.map((highlight, idx) => (
                <li key={idx} className={styles.highlightItem}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}

        {item.techStack && item.techStack.length > 0 && (
          <div className={styles.itemTags}>
            {item.techStack.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
