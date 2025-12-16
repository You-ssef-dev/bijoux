import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const FeaturedCollections = () => {
  const { t } = useTranslation();

  const collections = [
    {
      id: 'minimalist',
      title: t('collections.minimalist'),
      image: '/images/necklaces/gold/gold-necklace.jpg',
      color: '#EAEAEA'
    },
    {
      id: 'vintage',
      title: t('collections.vintage'),
      image: '/images/bracelets/silver/silver-cuff.jpg',
      color: '#D8D8D0'
    },
    {
      id: 'bridal',
      title: t('collections.bridal'),
      image: '/images/rings/silver/diamond-ring.jpg',
      color: '#F4F4F4'
    }
  ];

  return (
    <section className="section collections-section">
      <div className="container">
        <h2 className="section-title">{t('home.featured_collections')}</h2>
        <div className="collections-grid">
          {collections.map((collection) => (
            <Link to={`/collections/${collection.id}`} key={collection.id} className="collection-card">
              <motion.div
                className="collection-image-container"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <img src={collection.image} alt={collection.title} className="collection-image" />
              </motion.div>
              <h3 className="collection-title">{collection.title}</h3>
            </Link>
          ))}
        </div>
      </div>

      <style>{`
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
        }

        .collections-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .collection-card {
          display: block;
          text-align: center;
        }

        .collection-image-container {
          width: 100%;
          aspect-ratio: 1;
          margin-bottom: 1.5rem;
          overflow: hidden;
        }

        .collection-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .collection-title {
          font-size: 1.2rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
      `}</style>
    </section>
  );
};

export default FeaturedCollections;
