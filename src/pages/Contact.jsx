import { FaLinkedin, FaGithub } from 'react-icons/fa';
import ContactInfo from '../components/Contact/ContactInfo';
import ConnectWidget from '../components/About/ConnectWidget';
import SEO from '../components/SEO/SEO';
import { personalInfo } from '../data/personal';
import styles from './Contact.module.css';

/**
 * Contact page component
 * Displays contact information and social links
 */
function Contact() {
  return (
    <>
      <SEO 
        title="Contact"
        description="Get in touch with Abhav Bhanot for AI/ML opportunities, collaborations, or inquiries. Connect via email, LinkedIn, or GitHub."
        keywords="Contact, Email, LinkedIn, GitHub, Collaboration, AI Opportunities, ML Jobs, Internships"
        canonicalUrl="/contact"
      />
      <div className={styles.contactPage}>
        <header className={styles.pageHeader}>
          <h1 className={styles.pageTitle}>Get In Touch</h1>
          <p className={styles.pageSubtitle}>Let's Connect & Collaborate</p>
        </header>
        
        <div className={styles.contactContent}>
          <ContactInfo />
        </div>

        <div className={styles.connectWidgetWrapper}>
          <ConnectWidget />
        </div>

        <section className={styles.socialLinks}>
          <h2 className={styles.socialTitle}>Find Me Online</h2>
          <div className={styles.socialGrid}>
            <a
              href={personalInfo.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </div>
        </section>
      </div>
    </>
  );
}

export default Contact;
