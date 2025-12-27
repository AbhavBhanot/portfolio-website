import { useEffect } from 'react';

/**
 * StructuredData component for adding JSON-LD schema markup
 * Helps search engines understand the content better
 */
function StructuredData({ data }) {
  useEffect(() => {
    // Create or update script tag with JSON-LD data
    const scriptId = 'structured-data';
    let script = document.getElementById(scriptId);
    
    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(data);
    
    // Cleanup function to remove script when component unmounts
    return () => {
      const existingScript = document.getElementById(scriptId);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, [data]);

  return null;
}

export default StructuredData;
