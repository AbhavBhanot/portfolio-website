import styles from './Badge.module.css';

/**
 * Badge component for tech stack and tags
 * Displays small labels with warm accent colors
 */
function Badge({ 
  children, 
  variant = 'default',
  className = '',
  ...props 
}) {
  const badgeClass = `${styles.badge} ${styles[variant]} ${className}`;

  return (
    <span className={badgeClass} {...props}>
      {children}
    </span>
  );
}

export default Badge;
