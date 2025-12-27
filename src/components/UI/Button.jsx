import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styles from './Button.module.css';

/**
 * Button component with primary and secondary variants
 * Supports both internal navigation (Link) and external links (anchor)
 */
function Button({ 
  children, 
  variant = 'primary', 
  to, 
  href, 
  onClick, 
  type = 'button',
  disabled = false,
  className = '',
  ...props 
}) {
  const buttonClass = `${styles.button} ${styles[variant]} ${className}`;

  const hoverAnimation = !disabled ? {
    whileHover: { scale: 1.05 },
    whileTap: { scale: 0.98 },
    transition: { duration: 0.2 }
  } : {};

  // Internal navigation with React Router Link
  if (to) {
    return (
      <motion.div style={{ display: 'inline-block' }} {...hoverAnimation}>
        <Link to={to} className={buttonClass} {...props}>
          {children}
        </Link>
      </motion.div>
    );
  }

  // External link with anchor tag
  if (href) {
    return (
      <motion.a 
        href={href} 
        className={buttonClass}
        target="_blank"
        rel="noopener noreferrer"
        {...hoverAnimation}
        {...props}
      >
        {children}
      </motion.a>
    );
  }

  // Regular button
  return (
    <motion.button 
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonClass}
      {...hoverAnimation}
      {...props}
    >
      {children}
    </motion.button>
  );
}

export default Button;
