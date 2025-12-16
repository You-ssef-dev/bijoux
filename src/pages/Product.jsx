import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import { Minus, Plus, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';

import { useTranslation } from 'react-i18next';

const Product = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // Scroll to top when product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return <div className="container section">{t('product.not_found')}</div>;
  }

  const productName = product.name[currentLang] || product.name['en'] || product.name;
  const productDescription = product.description[currentLang] || product.description['en'] || product.description;
  const productMaterial = product.material[currentLang] || product.material['en'] || product.material;
  const productCategory = product.category[currentLang] || product.category['en'] || product.category;

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  // Random recommendation logic: show random products, excluding current product
  const recommendations = products
    .filter(p => p.id !== product.id)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return (
    <div className="page product-details-page">
      <div className="container section">
        <div className="product-details-grid">
          <div className="product-gallery">
            <div className="main-image-container">
              {product.image ? (
                <img src={product.image} alt={productName} className="main-image" />
              ) : (
                <div className="main-image-placeholder">
                  <span>{productName}</span>
                </div>
              )}
            </div>
          </div>

          <div className="product-info-section">
            <h1 className="product-title">{productName}</h1>
            <div className="product-price-row">
              <span className="price">${product.price.toLocaleString()}</span>
              <div className="reviews">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={i < (product.rating || 0) ? "#D4AF37" : "none"}
                      color="#D4AF37"
                    />
                  ))}
                </div>
                <span className="review-count">({t('product.reviews', { count: 12 })})</span>
              </div>
            </div>

            <p className="product-description">{productDescription}</p>

            <div className="product-meta">
              <p><strong>{t('product.material')}:</strong> {productMaterial}</p>
              <p><strong>{t('product.category')}:</strong> {productCategory}</p>
            </div>

            <div className="add-to-cart-section">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}><Minus size={16} /></button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}><Plus size={16} /></button>
              </div>
              <button className="btn btn-primary add-btn" onClick={handleAddToCart}>
                {t('product.add_to_cart')}
              </button>
            </div>
          </div>
        </div>

        {recommendations.length > 0 && (
          <div className="recommendations-section">
            <h2 className="section-title">{t('product.you_may_also_like')}</h2>
            <div className="product-grid">
              {recommendations.map(rec => (
                <ProductCard key={rec.id} product={rec} />
              ))}
            </div>
          </div>
        )}
      </div>

      <style>{`
        .product-details-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          margin-bottom: 6rem;
        }

        .main-image-container {
          width: 100%;
          max-width: 500px;
          aspect-ratio: 1;
          margin: 0 auto 2rem;
          background-color: var(--color-card-bg);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .main-image-container:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        }

        .main-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .main-image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: var(--font-serif);
          font-size: 1.5rem;
          font-size: 1.5rem;
          color: var(--color-secondary);
        }

        .product-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .product-price-row {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .price {
          font-size: 1.5rem;
          font-family: var(--font-sans);
          color: var(--color-text);
        }

        .reviews {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .stars {
          display: flex;
        }

        .review-count {
          font-size: 0.9rem;
          color: var(--color-secondary);
        }

        .product-description {
          font-size: 1.1rem;
          color: var(--color-secondary);
          margin-bottom: 2rem;
          line-height: 1.8;
        }

        .product-meta {
          margin-bottom: 2rem;
          font-size: 0.9rem;
        }

        .add-to-cart-section {
          display: flex;
          gap: 1rem;
        }

        .quantity-selector {
          display: flex;
          align-items: center;
          display: flex;
          align-items: center;
          border: 1px solid var(--color-border);
        }

        .quantity-selector button {
          padding: 0.8rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .quantity-selector span {
          width: 40px;
          text-align: center;
          font-family: var(--font-sans);
        }

        .add-btn {
          flex: 1;
          text-align: center;
        }

        .recommendations-section {
          border-top: 1px solid var(--color-border);
          padding-top: 4rem;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 3rem;
            font-size: 2rem;
        }

        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 3rem;
        }

        @media (max-width: 768px) {
          .product-details-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Product;
