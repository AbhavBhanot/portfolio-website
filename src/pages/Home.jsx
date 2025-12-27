import Hero from '../components/Hero/Hero';
import QuickLinks from '../components/Hero/QuickLinks';
import SEO from '../components/SEO/SEO';
import StructuredData from '../components/SEO/StructuredData';
import { personalInfo } from '../data/personal';

/**
 * Home page component
 * Displays Hero section and QuickLinks section
 */
function Home() {
  // Structured data for Person schema
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": personalInfo.name,
    "jobTitle": "AI/ML Engineering Student",
    "description": personalInfo.bio.short,
    "url": "https://abhavbhanot.dev",
    "email": personalInfo.contact.email,
    "telephone": personalInfo.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": personalInfo.location.city,
      "addressRegion": personalInfo.location.state,
      "addressCountry": personalInfo.location.country
    },
    "sameAs": [
      personalInfo.contact.linkedin,
      personalInfo.contact.github
    ],
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Symbiosis Institute of Technology"
    },
    "knowsAbout": [
      "Artificial Intelligence",
      "Machine Learning",
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "Python",
      "PyTorch",
      "TensorFlow",
      "LangChain"
    ]
  };

  return (
    <>
      <SEO 
        title="Home"
        description="Portfolio of Abhav Bhanot, AI/ML Engineering student at Symbiosis Institute of Technology. Showcasing machine learning projects, deep learning applications, and AI innovations."
        keywords="AI, Machine Learning, Deep Learning, NLP, Computer Vision, Portfolio, Abhav Bhanot, Python, PyTorch, TensorFlow, LangChain"
        canonicalUrl="/"
      />
      <StructuredData data={personSchema} />
      <Hero />
      <QuickLinks />
    </>
  );
}

export default Home;
