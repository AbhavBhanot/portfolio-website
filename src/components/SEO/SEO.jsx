import { useEffect } from 'react';

/**
 * SEO component for managing page metadata
 * Handles title, description, keywords, Open Graph, and Twitter Card tags
 */
function SEO({ 
  title, 
  description, 
  keywords, 
  ogImage = '/og-image.jpg',
  ogType = 'website',
  twitterCard = 'summary_large_image',
  canonicalUrl
}) {
  const siteUrl = import.meta.env.VITE_SITE_URL || 'https://abhavbhanot.dev';
  const fullTitle = title ? `${title} | Abhav Bhanot` : 'Abhav Bhanot | AI/ML Engineering Student | Portfolio';
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  useEffect(() => {
    // Update title
    document.title = fullTitle;

    // Helper function to update or create meta tags
    const updateMetaTag = (selector, attribute, value) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        if (selector.includes('property=')) {
          element.setAttribute('property', selector.match(/property="([^"]+)"/)[1]);
        } else {
          element.setAttribute('name', selector.match(/name="([^"]+)"/)[1]);
        }
        document.head.appendChild(element);
      }
      element.setAttribute(attribute, value);
    };

    // Update basic meta tags
    updateMetaTag('meta[name="description"]', 'content', description);
    if (keywords) {
      updateMetaTag('meta[name="keywords"]', 'content', keywords);
    }
    updateMetaTag('meta[name="author"]', 'content', 'Abhav Bhanot');

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', fullUrl);

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', 'content', fullTitle);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:type"]', 'content', ogType);
    updateMetaTag('meta[property="og:url"]', 'content', fullUrl);
    updateMetaTag('meta[property="og:image"]', 'content', fullOgImage);
    updateMetaTag('meta[property="og:site_name"]', 'content', 'Abhav Bhanot Portfolio');

    // Update Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'content', twitterCard);
    updateMetaTag('meta[name="twitter:title"]', 'content', fullTitle);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    updateMetaTag('meta[name="twitter:image"]', 'content', fullOgImage);
  }, [fullTitle, description, keywords, fullUrl, fullOgImage, ogType, twitterCard]);

  return null;
}

export default SEO;
