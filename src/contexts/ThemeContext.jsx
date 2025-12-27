import React, { createContext, useContext } from 'react';
import { useTheme } from '../hooks/useTheme';

// Create Theme Context
const ThemeContext = createContext(undefined);

/**
 * Theme Provider Component
 * Provides theme state and toggle function to all child components
 */
export const ThemeProvider = ({ children }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

/**
 * Custom hook to use theme context
 * @returns {Object} Theme context value
 * @throws {Error} If used outside ThemeProvider
 */
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  
  return context;
};
