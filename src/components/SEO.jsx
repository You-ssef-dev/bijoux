import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEO = ({ title, description, keywords }) => {
    const location = useLocation();

    useEffect(() => {
        // Update title
        document.title = title || 'Bijoux | Timeless Elegance';

        // Update meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.name = 'description';
            document.head.appendChild(metaDescription);
        }
        metaDescription.content = description || 'Discover our exclusive collection of fine jewelry. Timeless elegance, crafted for you.';

        // Update meta keywords
        let metaKeywords = document.querySelector('meta[name="keywords"]');
        if (!metaKeywords) {
            metaKeywords = document.createElement('meta');
            metaKeywords.name = 'keywords';
            document.head.appendChild(metaKeywords);
        }
        metaKeywords.content = keywords || 'jewelry, luxury jewelry, gold, diamonds, pearls, necklaces, earrings, rings, bracelets';

        // Update Open Graph tags
        let ogTitle = document.querySelector('meta[property="og:title"]');
        if (!ogTitle) {
            ogTitle = document.createElement('meta');
            ogTitle.setAttribute('property', 'og:title');
            document.head.appendChild(ogTitle);
        }
        ogTitle.content = title || 'Bijoux | Timeless Elegance';

        let ogDescription = document.querySelector('meta[property="og:description"]');
        if (!ogDescription) {
            ogDescription = document.createElement('meta');
            ogDescription.setAttribute('property', 'og:description');
            document.head.appendChild(ogDescription);
        }
        ogDescription.content = description || 'Discover our exclusive collection of fine jewelry.';

    }, [title, description, keywords, location]);

    return null;
};

export default SEO;
