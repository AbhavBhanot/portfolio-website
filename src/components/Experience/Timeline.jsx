import TimelineItem from './TimelineItem';
import styles from './Timeline.module.css';

const Timeline = ({ items }) => {
  return (
    <div className={styles.timeline}>
      {items.map((item) => (
        <TimelineItem 
          key={item.id} 
          item={item}
        />
      ))}
    </div>
  );
};

export default Timeline;
