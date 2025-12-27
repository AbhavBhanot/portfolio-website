import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from './ThemeToggle';
import styles from './Header.module.css';

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logo} onClick={closeMobileMenu}>
          <span className={styles.logoText}>Abhav Bhanot</span>
          <span className={styles.logoSubtext}>AI/ML Engineer</span>
        </Link>

        <nav className={styles.nav}>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/projects"
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/skills"
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Skills
          </NavLink>
          <NavLink 
            to="/experience"
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Experience
          </NavLink>
          <NavLink 
            to="/achievements"
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Achievements
          </NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
            }
          >
            Contact
          </NavLink>
        </nav>

        <div className={styles.headerActions}>
          <ThemeToggle />
          <button 
            className={styles.mobileMenuButton}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.mobileMenuOpen : ''}`}>
          <NavLink 
            to="/" 
            end
            className={({ isActive }) => 
              isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
            }
            onClick={closeMobileMenu}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about"
            className={({ isActive }) => 
              isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
            }
            onClick={closeMobileMenu}
          >
            About
          </NavLink>
          <NavLink 
            to="/projects"
            className={({ isActive }) => 
              isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
            }
            onClick={closeMobileMenu}
          >
            Projects
          </NavLink>
          <NavLink 
            to="/skills"
            className={({ isActive }) => 
              isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
            }
            onClick={closeMobileMenu}
          >
            Skills
          </NavLink>
          <NavLink 
            to="/experience"
            className={({ isActive }) => 
              isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
            }
            onClick={closeMobileMenu}
          >
            Experience
          </NavLink>
          <NavLink 
            to="/achievements"
            className={({ isActive }) => 
              isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
            }
            onClick={closeMobileMenu}
          >
            Achievements
          </NavLink>
          <NavLink 
            to="/contact"
            className={({ isActive }) => 
              isActive ? `${styles.mobileNavLink} ${styles.active}` : styles.mobileNavLink
            }
            onClick={closeMobileMenu}
          >
            Contact
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
