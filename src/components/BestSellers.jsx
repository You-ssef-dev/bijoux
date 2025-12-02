import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { products } from '../data/products';

const BestSellers = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Select best sellers (first 6 products)
  const bestSellers = products.slice(0, 6);
  const itemsPerView = 3;
  const maxIndex = Math.max(0, bestSellers.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const visibleProducts = bestSellers.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="section best-sellers-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Best Sellers</h2>
          <div className="carousel-controls">
            <button
              className="carousel-btn"
              onClick={handlePrev}
              disabled={currentIndex === 0}
            >
              <ChevronLeft size={24} />
            </button>
            <button
              className="carousel-btn"
              onClick={handleNext}
              disabled={currentIndex >= maxIndex}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>

        <div className="carousel-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="carousel-track"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              {visibleProducts.map((product) => (
                <Link
                  to={`/product/${product.id}`}
                  key={product.id}
                  className="bestseller-card"
                >
                  <div className="bestseller-image-container">
                    {product.image && (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="bestseller-image"
                      />
                    )}
                    <div className="bestseller-badge">Best Seller</div>
                  </div>
                  <div className="bestseller-info">
                    <h3>{product.name}</h3>
                    <div className="bestseller-rating">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          fill={i < (product.rating || 0) ? "#D4AF37" : "none"}
                          color="#D4AF37"
                        />
                      ))}
                    </div>
                    <p className="bestseller-price">${product.price.toLocaleString()}</p>
                  </div>
                </Link>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .best-sellers-section {
          padding: 6rem 0;
          background-color: var(--color-background);
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-family: var(--font-serif);
        }

        .carousel-controls {
          display: flex;
          gap: 1rem;
        }

        .carousel-btn {
          width: 48px;
          height: 48px;
          border: 1px solid var(--color-border);
          background-color: var(--color-card-bg);
          color: var(--color-text);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s;
        }

        .carousel-btn:hover:not(:disabled) {
          background-color: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }

        .carousel-btn:disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }

        .carousel-container {
          overflow: hidden;
          position: relative;
        }

        .carousel-track {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .bestseller-card {
          display: block;
          text-decoration: none;
          color: inherit;
          transition: transform 0.3s;
        }

        .bestseller-card:hover {
          transform: translateY(-5px);
        }

        .bestseller-image-container {
          position: relative;
          aspect-ratio: 3/4;
          background-color: var(--color-card-bg);
          margin-bottom: 1rem;
          overflow: hidden;
        }

        .bestseller-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .bestseller-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          background-color: var(--color-primary);
          color: white;
          padding: 0.4rem 0.8rem;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
        }

        .bestseller-info {
          text-align: center;
        }

        .bestseller-info h3 {
          font-size: 1.1rem;
          font-family: var(--font-serif);
          margin-bottom: 0.5rem;
        }

        .bestseller-rating {
          display: flex;
          justify-content: center;
          gap: 0.2rem;
          margin-bottom: 0.5rem;
        }

        .bestseller-price {
          font-size: 1rem;
          color: var(--color-secondary);
          font-weight: 600;
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
          margin-top: 2rem;
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background-color: var(--color-border);
          border: none;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .dot.active {
          background-color: var(--color-primary);
        }

        @media (max-width: 1024px) {
          .carousel-track {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .section-header {
            flex-direction: column;
            gap: 1.5rem;
            align-items: flex-start;
          }

          .carousel-track {
            grid-template-columns: 1fr;
          }

          .carousel-controls {
            align-self: flex-end;
          }
        }
      `}</style>
    </section>
  );
};

export default BestSellers;
