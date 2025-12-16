import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const ProductCard = ({ product }) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const name = product.name[currentLang] || product.name['en'] || product.name;
  const category = product.category[currentLang] || product.category['en'] || product.category;
  const price = product.price;

  return (
    <Link to={`/product/${product.id}`} className="product-card-link">
      <div className="product-image-container">
        {product.image ? (
          <img src={product.image} alt={product.name} className="product-image" />
        ) : (
          <div className="product-image-placeholder">
            <span>{product.name}</span>
          </div>
        )}
        <motion.div
          className="product-overlay"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <button className="btn btn-primary quick-view-btn">Quick View</button>
        </motion.div>
      </div>
      <div className="product-info">
        <span className="product-category">{category}</span>
        <h3 className="product-name">{name}</h3>
        <p className="product-price">${price.toLocaleString()}</p>
      </div>

      <style>{`
        .product-card-link {
          display: block;
          group: hover;
        }

        .product-image-container {
          position: relative;
          aspect-ratio: 3/4;
          background-color: var(--color-card-bg);
          margin-bottom: 1rem;
          overflow: hidden;
        }

        .product-image-placeholder {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--color-input-bg);
          color: var(--color-secondary);
          font-family: var(--font-serif);
          text-align: center;
          padding: 1rem;
        }

        .product-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .product-card:hover .product-image {
          transform: scale(1.05);
        }

        .product-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.4); /* Darker overlay for better contrast */
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(2px);
        }

        .quick-view-btn {
            background-color: #FFFFFF;
            color: #000000;
            border: none;
            font-weight: 600;
        }

        .quick-view-btn:hover {
            background-color: var(--color-primary);
            color: #FFFFFF;
        }

        .product-info {
          text-align: center;
        }

        .product-name {
          font-size: 1rem;
          font-family: var(--font-serif);
          margin-bottom: 0.5rem;
          color: var(--color-text);
        }

        .product-price {
          font-family: var(--font-sans);
          color: var(--color-secondary);
          font-size: 0.9rem;
        }
      `}</style>
    </Link>
  );
};

export default ProductCard;
