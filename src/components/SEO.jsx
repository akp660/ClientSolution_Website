import { useEffect } from 'react';

const SEO = ({ title, description, keywords }) => {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = `${title} | Client Solution`;
    } else {
      document.title = 'Client Solution | Custom CRMs, Billing Engines & Cloud Software';
    }

    // 2. Update Description
    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement('meta');
        metaDesc.name = 'description';
        document.head.appendChild(metaDesc);
      }
      metaDesc.content = description;

      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.content = description;
      }
    }

    // 3. Update Keywords
    if (keywords) {
      let metaKeywords = document.querySelector('meta[name="keywords"]');
      if (!metaKeywords) {
        metaKeywords = document.createElement('meta');
        metaKeywords.name = 'keywords';
        document.head.appendChild(metaKeywords);
      }
      metaKeywords.content = keywords;
    }

    // 4. Scroll to top on page load
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [title, description, keywords]);

  return null;
};

export default SEO;
