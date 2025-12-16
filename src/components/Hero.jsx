import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {t('hero.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {t('hero.subtitle')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/shop" className="btn btn-primary">
            {t('hero.cta')}
          </Link>
        </motion.div>
      </div>
      <div className="hero-image-container">
        <img src="/images/hero.jpg" alt="Model wearing luxury jewelry" className="hero-image" />
      </div>

      <style>{`
        .hero {
          height: 80vh;
          display: flex;
          align-items: center;
          position: relative;
          position: relative;
          overflow: hidden;
          background-color: var(--color-card-bg);
        }

        .hero-content {
          flex: 1;
          padding: 0 5%;
          z-index: 2;
          max-width: 600px;
        }

        .hero h1 {
          font-size: 3.5rem;
          line-height: 1.2;
          margin-bottom: 1.5rem;
          color: var(--color-text);
        }

        .hero p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          color: var(--color-secondary);
        }

        .hero-image-container {
          flex: 1;
          height: 100%;
          position: relative;
        }

        .hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @media (max-width: 768px) {
          .hero {
            flex-direction: column;
            height: auto;
            padding: 4rem 0;
          }
          
          .hero-content {
            padding: 0 2rem;
            text-align: center;
            margin-bottom: 2rem;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .hero-image-container {
            width: 100%;
            height: 400px;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;
