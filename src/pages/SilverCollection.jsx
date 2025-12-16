import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { useTranslation } from 'react-i18next';

const SilverCollection = () => {
    const { t } = useTranslation();

    const categories = [
        {
            id: 'silver-rings',
            title: t('collections.silver_rings'),
            image: '/images/bracelets/silver/silver-cuff.jpg'
        },
        {
            id: 'silver-necklaces',
            title: t('collections.silver_necklaces'),
            image: '/images/bracelets/silver/silver-cuff.jpg'
        },
        {
            id: 'silver-earrings',
            title: t('collections.silver_earrings'),
            image: '/images/bracelets/silver/silver-cuff.jpg'
        },
        {
            id: 'silver-bracelets',
            title: t('collections.silver_bracelets'),
            image: '/images/bracelets/silver/silver-cuff.jpg'
        }
    ];
    return (
        <div className="page silver-collection-page">
            <SEO
                title={`${t('collections.silver_title')} | Bijoux`}
                description={t('collections.silver_description')}
            />

            <div className="collection-hero">
                <div className="collection-hero-image-container">
                    <img src="/images/bracelets/silver/silver-cuff.jpg" alt="Silver Collection" className="collection-hero-image" />
                    <div className="overlay"></div>
                </div>
                <div className="collection-hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        {t('collections.silver_hero_title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        {t('collections.silver_hero_text')}
                    </motion.p>
                </div>
            </div>

            <div className="container section">
                <div className="categories-grid">
                    {categories.map((category) => (
                        <Link to={`/collections/${category.id}`} key={category.id} className="category-item">
                            <motion.div
                                className="category-card-image-container"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img src={category.image} alt={category.title} className="category-card-image" />
                                <div className="category-card-overlay">
                                    <h2>{category.title}</h2>
                                    <span className="explore-link">{t('common.explore')} &rarr;</span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            <style>{`
                .collection-hero {
                    height: 60vh;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    color: white;
                    margin-bottom: 4rem;
                }

                .collection-hero-image-container {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                }

                .collection-hero-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: rgba(0,0,0,0.4);
                }

                .collection-hero-content {
                    position: relative;
                    z-index: 2;
                    padding: 0 2rem;
                }

                .collection-hero h1 {
                    font-size: 4rem;
                    margin-bottom: 1rem;
                    font-family: var(--font-serif);
                }

                .collection-hero p {
                    font-size: 1.3rem;
                    max-width: 700px;
                    margin: 0 auto;
                }

                .categories-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    gap: 2rem;
                }

                .category-item {
                    display: block;
                    text-decoration: none;
                    color: inherit;
                }

                .category-card-image-container {
                    position: relative;
                    aspect-ratio: 1;
                    overflow: hidden;
                    border-radius: 4px;
                }

                .category-card-image {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.8s ease;
                }

                .category-item:hover .category-card-image {
                    transform: scale(1.1);
                }

                .category-card-overlay {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding: 2rem;
                    background: linear-gradient(to top, rgba(0,0,0,0.7), transparent);
                    color: white;
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                }

                .category-card-overlay h2 {
                    font-size: 1.8rem;
                    font-family: var(--font-serif);
                    margin: 0;
                }

                .explore-link {
                    font-size: 1.1rem;
                    opacity: 0;
                    transform: translateX(-10px);
                    transition: all 0.3s ease;
                }

                .category-item:hover .explore-link {
                    opacity: 1;
                    transform: translateX(0);
                }

                @media (max-width: 768px) {
                    .categories-grid {
                        grid-template-columns: 1fr;
                    }
                    .collection-hero h1 {
                        font-size: 3rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default SilverCollection;
