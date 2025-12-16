import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { Filter, ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';

import { useTranslation } from 'react-i18next';

const Shop = () => {
    const { t, i18n } = useTranslation();
    const currentLang = i18n.language;
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const categoryParam = searchParams.get('category');
    const materialParam = searchParams.get('material');

    const [selectedCategory, setSelectedCategory] = useState(categoryParam || 'All');
    const [selectedMaterial, setSelectedMaterial] = useState(materialParam || 'All');
    const [priceRange, setPriceRange] = useState('All');

    const categories = ['All', 'Necklaces', 'Earrings', 'Rings', 'Bracelets'];
    const materials = ['All', 'Gold', 'Silver', 'Pearl'];
    const prices = ['All', 'Under $500', '$500 - $1000', '$1000+'];

    const filteredProducts = useMemo(() => {
        return products.filter(product => {
            // Search filter - partial or exact match on product name
            const productName = product.name[currentLang] || product.name['en'] || '';
            const searchMatch = !searchQuery ||
                productName.toLowerCase().includes(searchQuery.toLowerCase());

            const productCategory = product.category?.en || product.category;
            const productMaterial = product.material?.en || product.material;

            const categoryMatch = selectedCategory === 'All' || productCategory === selectedCategory;
            const materialMatch = selectedMaterial === 'All' || productMaterial === selectedMaterial;
            let priceMatch = true;
            if (priceRange === 'Under $500') priceMatch = product.price < 500;
            else if (priceRange === '$500 - $1000') priceMatch = product.price >= 500 && product.price <= 1000;
            else if (priceRange === '$1000+') priceMatch = product.price > 1000;

            return searchMatch && categoryMatch && materialMatch && priceMatch;
        });
    }, [searchQuery, selectedCategory, selectedMaterial, priceRange, currentLang]);

    return (
        <div className="page shop-page">
            <SEO
                title={`${t('shop.title')} | Bijoux`}
                description={t('shop.description')}
                keywords={t('shop.keywords')}
            />
            <div className="container section">
                <div className="shop-header">
                    <h1>{searchQuery ? `${t('shop.search_results')} "${searchQuery}"` : t('shop.shop_all')}</h1>
                    <p>{filteredProducts.length} {filteredProducts.length !== 1 ? t('shop.products') : t('shop.product')}</p>
                </div>

                <div className="shop-layout">
                    <aside className="filters-sidebar">
                        <div className="filter-group">
                            <h3>{t('shop.category')}</h3>
                            <ul>
                                {categories.map(cat => (
                                    <li key={cat}>
                                        <button
                                            className={selectedCategory === cat ? 'active' : ''}
                                            onClick={() => setSelectedCategory(cat)}
                                        >
                                            {cat === 'All' ? t('shop.all') : t(`shop.categories.${cat.toLowerCase()}`)}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="filter-group">
                            <h3>{t('shop.material')}</h3>
                            <ul>
                                {materials.map(mat => (
                                    <li key={mat}>
                                        <button
                                            className={selectedMaterial === mat ? 'active' : ''}
                                            onClick={() => setSelectedMaterial(mat)}
                                        >
                                            {mat === 'All' ? t('shop.all') : t(`shop.materials.${mat.toLowerCase()}`)}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="filter-group">
                            <h3>{t('shop.price')}</h3>
                            <ul>
                                {prices.map(price => (
                                    <li key={price}>
                                        <button
                                            className={priceRange === price ? 'active' : ''}
                                            onClick={() => setPriceRange(price)}
                                        >
                                            {price}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </aside>

                    <div className="product-grid">
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .shop-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .shop-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .shop-layout {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: 4rem;
        }

        .filter-group {
          margin-bottom: 3rem;
        }

        .filter-group h3 {
          font-size: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
          border-bottom: 1px solid var(--color-border);
          padding-bottom: 0.5rem;
        }

        .filter-group ul {
          list-style: none;
        }

        .filter-group li {
          margin-bottom: 0.8rem;
        }

        .filter-group button {
          font-family: var(--font-sans);
          color: var(--color-secondary);
          font-size: 0.9rem;
          transition: color 0.3s;
          text-align: left;
        }

        .filter-group button:hover, .filter-group button.active {
          color: var(--color-text);
          font-weight: 700;
        }

        .product-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
          gap: 3rem;
        }

        @media (max-width: 768px) {
          .shop-layout {
            grid-template-columns: 1fr;
          }
          .filters-sidebar {
            display: none; /* Mobile filters to be implemented */
          }
        }
      `}</style>
        </div>
    );
};

export default Shop;
