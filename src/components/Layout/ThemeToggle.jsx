import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useThemeContext } from '../../contexts/ThemeContext';
import styles from './ThemeToggle.module.css';

/**
 * ThemeToggle Component
 * Button to toggle between light and dark themes
 */
const ThemeToggle = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      className={styles.themeToggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className={styles.iconWrapper}>
        {theme === 'light' ? (
          <FiMoon className={styles.icon} aria-hidden="true" />
        ) : (
          <FiSun className={styles.icon} aria-hidden="true" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
