import { motion } from 'framer-motion';
import styles from './Card.module.css';

/**
 * Card component with clean design and soft shadow
 * Flexible container for different content types
 */
function Card({ 
  children, 
  className = '',
  hoverable = true,
  onClick,
  ...props 
}) {
  const cardClass = `${styles.card} ${hoverable ? styles.hoverable : ''} ${className}`;

  const hoverAnimation = hoverable ? {
    whileHover: { 
      y: -4, 
      boxShadow: 'var(--shadow-lg)',
      transition: { duration: 0.3, ease: 'easeOut' }
    }
  } : {};

  return (
    <motion.div 
      className={cardClass}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      {...hoverAnimation}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default Card;
