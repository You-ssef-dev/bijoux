import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import SEO from '../components/SEO';

const collectionsData = [
    {
        id: 'minimalist',
        title: 'Minimalist',
        description: 'Clean lines and understated elegance for the modern woman.',
        image: '/images/bracelets/gold/minimalist-gold-choker.jpg' // Minimalist Gold Choker
    },
    {
        id: 'vintage',
        title: 'Vintage',
        description: 'Timeless treasures inspired by eras past.',
        image: '/images/necklaces/gold/vintage-gold-chain.jpg' // Vintage Gold Chain
    },
    {
        id: 'bridal',
        title: 'Bridal',
        description: 'Exquisite pieces for your special day.',
        image: '/images/rings/silver/diamond-ring.jpg' // Diamond Solitaire
    },
    {
        id: 'gold',
        title: 'Gold Essentials',
        description: 'The warm glow of 18k gold, a staple for every collection.',
        image: '/images/earrings/gold/gold-hoops.jpg' // Modern Gold Hoops
    },
    {
        id: 'silver',
        title: 'Sterling Silver',
        description: 'Cool, crisp, and versatile sterling silver pieces.',
        image: '/images/bracelets/silver/silver-cuff.jpg' // Vintage Silver Cuff
    },
    {
        id: 'pearl',
        title: 'Pearl Collection',
        description: 'The organic beauty of freshwater pearls.',
        image: '/images/earrings/gold/pearl-earrings.jpg' // Pearl Drop Earrings
    },
    {
        id: 'bestsellers',
        title: 'Best Sellers',
        description: 'Our most loved and highly rated pieces, chosen by you.',
        image: '/images/necklaces/gold/gold-necklace.jpg' // Ethereal Gold Necklace (Top bestseller)
    },
    {
        id: 'new',
        title: 'New Arrivals',
        description: 'The latest additions to our curated collection.',
        image: '/images/earrings/gold/classic-pearl-studs.jpg' // New Arrivals (temp placeholder)
    },
    {
        id: 'gold-rings',
        title: 'Gold Rings',
        description: 'Elegant gold rings for every occasion.',
        image: '/images/rings/gold/gold-ring-1.jpg'
    },
    {
        id: 'gold-necklaces',
        title: 'Gold Necklaces',
        description: 'Stunning gold necklaces to elevate your style.',
        image: '/images/necklaces/gold/gold-necklace-1.jpg'
    },
    {
        id: 'gold-earrings',
        title: 'Gold Earrings',
        description: 'Classic and modern gold earrings.',
        image: '/images/earrings/gold/gold-hoops.jpg'
    },
    {
        id: 'gold-bracelets',
        title: 'Gold Bracelets',
        description: 'Luxurious gold bracelets.',
        image: '/images/bracelets/gold/minimalist-gold-choker.jpg'
    },
    {
        id: 'silver-rings',
        title: 'Silver Rings',
        description: 'Contemporary silver rings.',
        image: '/images/rings/silver/silver-ring-1.jpg'
    },
    {
        id: 'silver-necklaces',
        title: 'Silver Necklaces',
        description: 'Timeless silver necklaces.',
        image: '/images/bracelets/silver/silver-cuff.jpg'
    },
    {
        id: 'silver-earrings',
        title: 'Silver Earrings',
        description: 'Elegant silver earrings.',
        image: '/images/earrings/gold/pearl-earrings.jpg'
    },
    {
        id: 'silver-bracelets',
        title: 'Silver Bracelets',
        description: 'Stylish silver bracelets.',
        image: '/images/bracelets/silver/silver-cuff.jpg'
    }
];

const Collections = () => {
    const { category } = useParams();

    if (category) {
        // Detail View: Show products in this collection
        const collectionInfo = collectionsData.find(c => c.id === category) || {
            title: category.charAt(0).toUpperCase() + category.slice(1),
            description: `Explore our ${category} collection.`,
            image: '/images/hero.jpg'
        };

        const collectionProducts = products.filter(p =>
            p.collections && p.collections.includes(category)
        );

        const isCleanHero = ['bestsellers', 'new'].includes(category);

        return (
            <div className="page collection-detail-page">
                <SEO
                    title={`${collectionInfo.title} | Bijoux Collections`}
                    description={collectionInfo.description}
                />

                <div className="collection-hero">
                    <div className="collection-hero-image-container">
                        <img src={collectionInfo.image} alt={collectionInfo.title} className="collection-hero-image" />
                        {!isCleanHero && <div className="overlay"></div>}
                    </div>
                    {!isCleanHero && (
                        <div className="collection-hero-content">
                            <motion.h1
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                {collectionInfo.title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                {collectionInfo.description}
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
                            <p>No products found in this collection.</p>
                            <Link to="/collections" className="btn btn-primary">View All Collections</Link>
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
                    <h1>Our Collections</h1>
                    <p>Curated selections for every style and occasion.</p>
                </div>

                <div className="collections-grid">
                    {collectionsData.map((collection, index) => (
                        <Link to={`/collections/${collection.id}`} key={collection.id} className="collection-item">
                            <motion.div
                                className="collection-card-image-container"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5 }}
                            >
                                <img src={collection.image} alt={collection.title} className="collection-card-image" />
                                <div className="collection-card-overlay">
                                    <h2>{collection.title}</h2>
                                    <span className="explore-link">Explore &rarr;</span>
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
