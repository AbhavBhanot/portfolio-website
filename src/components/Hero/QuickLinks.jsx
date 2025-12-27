import { motion } from 'framer-motion';
import { FaUser, FaCode, FaTrophy, FaEnvelope, FaAward, FaProjectDiagram } from 'react-icons/fa';
import Card from '../UI/Card';
import styles from './QuickLinks.module.css';
import { Link } from 'react-router-dom';

/**
 * QuickLinks section component
 * Displays 6 cards linking to main pages with icons and descriptions
 */
function QuickLinks() {
  const links = [
    {
      id: 1,
      to: '/about',
      icon: <FaUser />,
      title: 'About Me',
      description: 'Background & Interests'
    },
    {
      id: 2,
      to: '/projects',
      icon: <FaProjectDiagram />,
      title: 'Projects',
      description: 'Featured Work & Demos'
    },
    {
      id: 3,
      to: '/experience',
      icon: <FaTrophy />,
      title: 'Experience',
      description: 'Work & Internships'
    },
    {
      id: 4,
      to: '/skills',
      icon: <FaCode />,
      title: 'Skills',
      description: 'Technologies & Tools'
    },
    {
      id: 5,
      to: '/achievements',
      icon: <FaAward />,
      title: 'Achievements',
      description: 'Awards & Recognition'
    },
    {
      id: 6,
      to: '/contact',
      icon: <FaEnvelope />,
      title: 'Contact',
      description: 'Get In Touch'
    }
  ];

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut'
      }
    }
  };

  return (
    <section className={styles.quickLinks}>
      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {links.map((link) => (
          <motion.div key={link.id} variants={itemVariants}>
            <Link to={link.to} className={styles.linkWrapper}>
              <Card className={styles.quickLinkCard}>
                <div className={styles.iconWrapper}>
                  {link.icon}
                </div>
                <h3 className={styles.cardTitle}>{link.title}</h3>
                <p className={styles.cardDescription}>{link.description}</p>
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default QuickLinks;
