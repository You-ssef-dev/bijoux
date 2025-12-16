import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';

const collectionsData = [
    {
        id: 'minimalist',
        title: { en: 'Minimalist', ar: 'بسيط', fr: 'Minimaliste' },
        description: { en: 'Clean lines and understated elegance for the modern woman.', ar: 'خطوط نظيفة وأناقة هادئة للمرأة العصرية.', fr: 'Lignes épurées et élégance discrète pour la femme moderne.' },
        image: '/images/bracelets/gold/minimalist-gold-choker.jpg'
    },
    {
        id: 'vintage',
        title: { en: 'Vintage', ar: 'عتيق', fr: 'Vintage' },
        description: { en: 'Timeless treasures inspired by eras past.', ar: 'كنوز خالدة مستوحاة من العصور الماضية.', fr: 'Trésors intemporels inspirés des époques passées.' },
        image: '/images/necklaces/gold/vintage-gold-chain.jpg'
    },
    {
        id: 'bridal',
        title: { en: 'Bridal', ar: 'زفاف', fr: 'Mariage' },
        description: { en: 'Exquisite pieces for your special day.', ar: 'قطع رائعة ليومك الخاص.', fr: 'Des pièces exquises pour votre jour spécial.' },
        image: '/images/rings/silver/diamond-ring.jpg'
    },
    {
        id: 'gold',
        title: { en: 'Gold Essentials', ar: 'أساسيات الذهب', fr: 'Essentiels en Or' },
        description: { en: 'The warm glow of 18k gold, a staple for every collection.', ar: 'التوهج الدافئ للذهب عيار 18 قيراط، عنصر أساسي لكل مجموعة.', fr: 'La lueur chaude de l\'or 18 carats, un incontournable pour chaque collection.' },
        image: '/images/earrings/gold/gold-hoops.jpg'
    },
    {
        id: 'silver',
        title: { en: 'Sterling Silver', ar: 'فضة استرليني', fr: 'Argent Sterling' },
        description: { en: 'Cool, crisp, and versatile sterling silver pieces.', ar: 'قطع فضة استرليني باردة ونقية ومتعددة الاستخدامات.', fr: 'Pièces en argent sterling fraîches, nettes et polyvalentes.' },
        image: '/images/bracelets/silver/silver-cuff.jpg'
    },
    {
        id: 'pearl',
        title: { en: 'Pearl Collection', ar: 'مجموعة اللؤلؤ', fr: 'Collection Perle' },
        description: { en: 'The organic beauty of freshwater pearls.', ar: 'الجمال العضوي للآلئ المياه العذبة.', fr: 'La beauté organique des perles d\'eau douce.' },
        image: '/images/earrings/gold/pearl-earrings.jpg'
    },
    {
        id: 'bestsellers',
        title: { en: 'Best Sellers', ar: 'الأكثر مبيعاً', fr: 'Meilleures Ventes' },
        description: { en: 'Our most loved and highly rated pieces, chosen by you.', ar: 'قطعنا الأكثر حباً وتقييماً عالياً، من اختيارك.', fr: 'Nos pièces les plus aimées et les mieux notées, choisies par vous.' },
        image: '/images/necklaces/gold/gold-necklace.jpg'
    },
    {
        id: 'new',
        title: { en: 'New Arrivals', ar: 'وصل حديثاً', fr: 'Nouveautés' },
        description: { en: 'The latest additions to our curated collection.', ar: 'أحدث الإضافات إلى مجموعتنا المختارة.', fr: 'Les derniers ajouts à notre collection.' },
        image: '/images/earrings/gold/classic-pearl-studs.jpg'
    },
    {
        id: 'gold-rings',
        title: { en: 'Gold Rings', ar: 'خواتم ذهب', fr: 'Bagues en Or' },
        description: { en: 'Elegant gold rings for every occasion.', ar: 'خواتم ذهبية أنيقة لكل مناسبة.', fr: 'Bagues en or élégantes pour toutes les occasions.' },
        image: '/images/rings/gold/gold-ring-1.jpg'
    },
    {
        id: 'gold-necklaces',
        title: { en: 'Gold Necklaces', ar: 'قلائد ذهب', fr: 'Colliers en Or' },
        description: { en: 'Stunning gold necklaces to elevate your style.', ar: 'قلائد ذهبية مذهلة لرفع مستوى أناقتك.', fr: 'Colliers en or époustouflants pour rehausser votre style.' },
        image: '/images/necklaces/gold/gold-necklace-1.jpg'
    },
    {
        id: 'gold-earrings',
        title: { en: 'Gold Earrings', ar: 'أقراط ذهب', fr: 'Boucles d\'oreilles en Or' },
        description: { en: 'Classic and modern gold earrings.', ar: 'أقراط ذهبية كلاسيكية وعصرية.', fr: 'Boucles d\'oreilles en or classiques et modernes.' },
        image: '/images/earrings/gold/gold-hoops.jpg'
    },
    {
        id: 'gold-bracelets',
        title: { en: 'Gold Bracelets', ar: 'أساور ذهب', fr: 'Bracelets en Or' },
        description: { en: 'Luxurious gold bracelets.', ar: 'أساور ذهبية فاخرة.', fr: 'Bracelets en or luxueux.' },
        image: '/images/bracelets/gold/minimalist-gold-choker.jpg'
    },
    {
        id: 'silver-rings',
        title: { en: 'Silver Rings', ar: 'خواتم فضة', fr: 'Bagues en Argent' },
        description: { en: 'Contemporary silver rings.', ar: 'خواتم فضة معاصرة.', fr: 'Bagues en argent contemporaines.' },
        image: '/images/rings/silver/silver-ring-1.jpg'
    },
    {
        id: 'silver-necklaces',
        title: { en: 'Silver Necklaces', ar: 'قلائد فضة', fr: 'Colliers en Argent' },
        description: { en: 'Timeless silver necklaces.', ar: 'قلائد فضة خالدة.', fr: 'Colliers en argent intemporels.' },
        image: '/images/bracelets/silver/silver-cuff.jpg'
    },
    {
        id: 'silver-earrings',
        title: { en: 'Silver Earrings', ar: 'أقراط فضة', fr: 'Boucles d\'oreilles en Argent' },
        description: { en: 'Elegant silver earrings.', ar: 'أقراط فضة أنيقة.', fr: 'Boucles d\'oreilles en argent élégantes.' },
        image: '/images/earrings/gold/pearl-earrings.jpg'
    },
    {
        id: 'silver-bracelets',
        title: { en: 'Silver Bracelets', ar: 'أساور فضة', fr: 'Bracelets en Argent' },
        description: { en: 'Stylish silver bracelets.', ar: 'أساور فضة أنيقة.', fr: 'Bracelets en argent élégants.' },
        image: '/images/bracelets/silver/silver-cuff.jpg'
    }
];

import { useTranslation } from 'react-i18next';

const Collections = () => {
    const { category } = useParams();
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;

    if (category) {
        // Detail View: Show products in this collection
        const collectionInfo = collectionsData.find(c => c.id === category) || {
            title: { en: category.charAt(0).toUpperCase() + category.slice(1), ar: category, fr: category },
            description: { en: `Explore our ${category} collection.`, ar: `استكشف مجموعة ${category}.`, fr: `Découvrez notre collection ${category}.` },
            image: '/images/hero.jpg'
        };

        const title = collectionInfo.title[currentLang] || collectionInfo.title['en'];
        const description = collectionInfo.description[currentLang] || collectionInfo.description['en'];

        const collectionProducts = products.filter(p =>
            p.collections && p.collections.includes(category)
        );

        const isCleanHero = ['bestsellers', 'new'].includes(category);

        return (
            <div className="page collection-detail-page">
                <SEO
                    title={`${title} | Bijoux Collections`}
                    description={description}
                />

                <div className="collection-hero">
                    <div className="collection-hero-image-container">
                        <img src={collectionInfo.image} alt={title} className="collection-hero-image" />
                        {!isCleanHero && <div className="overlay"></div>}
                    </div>
                    {!isCleanHero && (
                        <div className="collection-hero-content">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {description}
                            </motion.p>
                        </div>
                    )}
                </div>

                <div className="container section">
                    {collectionProducts.length > 0 ? (
                        <div className="product-grid">
                            {collectionProducts.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty-collection">
                            <p>{t('collections.empty')}</p>
                            <Link to="/collections" className="btn btn-primary">{t('collections.view_all')}</Link>
                        </div>
                    )}
                </div>

                <style>{`
            .collection-hero {
                height: 50vh;
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
                font-size: 3.5rem;
                margin-bottom: 1rem;
                font-family: var(--font-serif);
            }

            .collection-hero p {
                font-size: 1.2rem;
                max-width: 600px;
                margin: 0 auto;
            }

            .product-grid {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
                gap: 2rem;
            }

            .empty-collection {
                text-align: center;
                padding: 4rem 0;
            }

            @media (max-width: 768px) {
                .collection-hero h1 {
                    font-size: 2.5rem;
                }
            }
        `}</style>
            </div>
        );
    }

    // Overview View: List all collections
    return (
        <div className="page collections-page">
            <SEO
                title="Collections | Bijoux"
                description="Discover our curated collections of luxury jewelry."
            />

            <div className="container section">
                <div className="collections-header">
                    <h1>{t('collections.title')}</h1>
                    <p>{t('collections.subtitle')}</p>
                </div>

                <div className="collections-grid">
                    {collectionsData.map((collection, index) => (
                        <Link to={`/collections/${collection.id}`} key={collection.id} className="collection-item">
                            <motion.div
                                className="collection-card-image-container"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img src={collection.image} alt={collection.title[currentLang] || collection.title['en']} className="collection-card-image" />
                                <div className="collection-card-overlay">
                                    <h2>{collection.title[currentLang] || collection.title['en']}</h2>
                                    <span className="explore-link">{t('common.explore')} &rarr;</span>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>

            <style>{`
        .collections-header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .collections-header h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            font-family: var(--font-serif);
        }

        .collections-header p {
            color: var(--color-secondary);
            font-size: 1.2rem;
        }

        .collections-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 2rem;
        }

        .collection-item {
            display: block;
            text-decoration: none;
            color: inherit;
        }

        .collection-card-image-container {
            position: relative;
            aspect-ratio: 16/9;
            overflow: hidden;
            border-radius: 4px;
        }

        .collection-card-image {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.8s ease;
        }

        .collection-item:hover .collection-card-image {
            transform: scale(1.1);
        }

        .collection-card-overlay {
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

        .collection-card-overlay h2 {
            font-size: 2rem;
            font-family: var(--font-serif);
            margin: 0;
        }

        .explore-link {
            font-size: 1.1rem;
            opacity: 0;
            transform: translateX(-10px);
            transition: all 0.3s ease;
        }

        .collection-item:hover .explore-link {
            opacity: 1;
            transform: translateX(0);
        }

        @media (max-width: 768px) {
            .collections-grid {
                grid-template-columns: 1fr;
            }
        }
      `}</style>
        </div>
    );
};

export default Collections;
