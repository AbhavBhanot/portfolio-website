import { Link } from 'react-router-dom';
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa';
import styles from './Footer.module.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.footerColumn}>
            <div className={styles.brand}>
              <h3 className={styles.brandName}>Abhav Bhanot</h3>
              <p className={styles.brandTagline}>AI/ML Engineer</p>
            </div>
            <p className={styles.brandDescription}>
              Building intelligent systems that solve real-world problems through AI, Machine Learning, and Deep Learning.
            </p>
          </div>

          {/* Navigation Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Navigation</h4>
            <nav className={styles.footerNav}>
              <Link to="/" className={styles.footerLink}>Home</Link>
              <Link to="/about" className={styles.footerLink}>About</Link>
              <Link to="/projects" className={styles.footerLink}>Projects</Link>
              <Link to="/skills" className={styles.footerLink}>Skills</Link>
              <Link to="/experience" className={styles.footerLink}>Experience</Link>
              <Link to="/contact" className={styles.footerLink}>Contact</Link>
            </nav>
          </div>

          {/* Contact Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Contact</h4>
            <div className={styles.contactInfo}>
              <a 
                href="mailto:abhavbhanot28@gmail.com" 
                className={styles.contactLink}
                aria-label="Email"
              >
                <FaEnvelope className={styles.contactIcon} />
                <span>abhavbhanot28@gmail.com</span>
              </a>
              <a 
                href="tel:+917876445994" 
                className={styles.contactLink}
                aria-label="Phone"
              >
                <FaPhone className={styles.contactIcon} />
                <span>+91-7876445994</span>
              </a>
            </div>
          </div>

          {/* Social Column */}
          <div className={styles.footerColumn}>
            <h4 className={styles.columnTitle}>Connect</h4>
            <div className={styles.socialLinks}>
              <a
                href="https://www.linkedin.com/in/abhav-bhanot"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="LinkedIn"
              >
                <FaLinkedin className={styles.socialIcon} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/abhavbhanot"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub"
              >
                <FaGithub className={styles.socialIcon} />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <p className={styles.copyright}>
            © {currentYear} Abhav Bhanot. All rights reserved.
          </p>
          <p className={styles.madeWith}>
            Built with React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
