import React, { useState, useEffect, useRef } from 'react';
import { X, Search as SearchIcon, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { useTheme } from '../context/ThemeContext';
import { useTranslation } from 'react-i18next';

const SearchOverlay = ({ isOpen, onClose }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const { theme } = useTheme();

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      return;
    }

    if (searchQuery.length > 2) {
      const filtered = products.filter(product => {
        const name = product.name[currentLang] || product.name['en'] || product.name;
        const category = product.category[currentLang] || product.category['en'] || product.category;
        const material = product.material[currentLang] || product.material['en'] || product.material;

        return name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          material.toLowerCase().includes(searchQuery.toLowerCase());
      }).slice(0, 6); // Limit to 6 results

      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery, currentLang]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/ shop ? search = ${encodeURIComponent(searchQuery)} `);
      onClose();
      setSearchQuery('');
    }
  };

  const handleProductClick = (id) => {
    navigate(`/ product / ${id} `);
    onClose();
    setSearchQuery('');
  };

  const handleClose = () => {
    onClose();
    setSearchQuery('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="search-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="search-container"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <button className="close-btn" onClick={handleClose} aria-label={t('search.close_search')}>
              <X size={28} />
            </button>

            <div className="search-header">
              <h2>{t('search.title')}</h2>
              <p>{t('search.subtitle')}</p>
            </div>

            <form onSubmit={handleSearchSubmit} className="search-form">
              <div className="search-input-wrapper">
                <SearchIcon size={24} className="search-icon" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder={t('search.placeholder')}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
              </div>
            </form>

            <div className="search-results">
              {searchResults.length > 0 && (
                <div className="results-header">
                  <span>{searchResults.length} {searchResults.length === 1 ? t('search.result_singular') : t('search.result_plural')} {t('search.found')}</span>
                </div>
              )}

              <div className="results-grid">
                {searchResults.map(product => (
                  <motion.div
                    key={product.id}
                    className="search-result-item"
                    onClick={() => handleProductClick(product.id)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="result-image">
                      {product.image && <img src={product.image} alt={product.name[currentLang] || product.name['en']} />}
                    </div>
                    <div className="result-info">
                      <h4>{product.name[currentLang] || product.name['en']}</h4>
                      <p className="result-category">{product.category[currentLang] || product.category['en']}</p>
                      <p className="result-price">${product.price.toLocaleString()}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {searchQuery && searchResults.length === 0 && (
                <motion.div
                  className="no-results"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <SearchIcon size={48} className="no-results-icon" />
                  <p>{t('search.no_results_for', { query: searchQuery })}</p>
                  <span>{t('search.try_suggestions')}</span>
                </motion.div>
              )}

              {!searchQuery && (
                <div className="search-suggestions">
                  <h3>{t('search.popular_searches')}</h3>
                  <div className="suggestion-tags">
                    {['Gold Necklace', 'Diamond Ring', 'Pearl Earrings', 'Silver Bracelet'].map(tag => (
                      <button
                        key={tag}
                        className="suggestion-tag"
                        onClick={() => setSearchQuery(tag)}
                      >
                        {t(`search.suggestions.${tag.toLowerCase().replace(/\s/g, '_')} `, tag)}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>

          <style>{`
  .search - overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100 %;
  height: 100 %;
  background - color: ${theme === 'dark'
              ? 'rgba(0, 0, 0, 0.95)'
              : 'rgba(250, 250, 245, 0.98)'
            };
  backdrop - filter: blur(20px);
  z - index: 2000;
  display: flex;
  justify - content: center;
  padding: 2rem;
  overflow - y: auto;
}

            .search - container {
  width: 100 %;
  max - width: 900px;
  padding: 3rem 2rem;
  position: relative;
}

            .close - btn {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: var(--color - text);
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s;
  width: 48px;
  height: 48px;
  border - radius: 50 %;
  display: flex;
  align - items: center;
  justify - content: center;
}

            .close - btn:hover {
  opacity: 1;
  background - color: var(--color - border);
}

            .search - header {
  text - align: center;
  margin - bottom: 3rem;
}

            .search - header h2 {
  font - size: 3rem;
  font - family: var(--font - serif);
  color: var(--color - text);
  margin - bottom: 0.5rem;
}

            .search - header p {
  font - size: 1.1rem;
  color: var(--color - secondary);
}

            .search - form {
  margin - bottom: 3rem;
}

            .search - input - wrapper {
  position: relative;
  max - width: 700px;
  margin: 0 auto;
}

            .search - icon {
  position: absolute;
  left: 1.5rem;
  top: 50 %;
  transform: translateY(-50 %);
  color: var(--color - secondary);
  pointer - events: none;
}

            .search - input {
  width: 100 %;
  background - color: var(--color - card - bg);
  border: 2px solid var(--color - border);
  font - size: 1.2rem;
  color: var(--color - text);
  padding: 1.2rem 1.5rem 1.2rem 4rem;
  font - family: var(--font - sans);
  border - radius: 50px;
  transition: all 0.3s;
  box - shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

            .search - input:focus {
  outline: none;
  border - color: var(--color - primary);
  box - shadow: 0 6px 30px rgba(212, 175, 55, 0.2);
}

            .search - input::placeholder {
  color: var(--color - secondary);
  opacity: 0.6;
}

            .search - results {
  max - width: 800px;
  margin: 0 auto;
}

            .results - header {
  margin - bottom: 1.5rem;
  padding - bottom: 1rem;
  border - bottom: 1px solid var(--color - border);
}

            .results - header span {
  font - size: 0.9rem;
  text - transform: uppercase;
  letter - spacing: 0.1em;
  color: var(--color - secondary);
  font - weight: 600;
}

            .results - grid {
  display: grid;
  grid - template - columns: repeat(auto - fill, minmax(250px, 1fr));
  gap: 1.5rem;
}

            .search - result - item {
  display: flex;
  flex - direction: column;
  background - color: var(--color - card - bg);
  border: 1px solid var(--color - border);
  border - radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s;
}

            .search - result - item:hover {
  border - color: var(--color - primary);
  box - shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

            .result - image {
  width: 100 %;
  aspect - ratio: 1;
  background - color: var(--color - accent);
  overflow: hidden;
}

            .result - image img {
  width: 100 %;
  height: 100 %;
  object - fit: cover;
  transition: transform 0.5s;
}

            .search - result - item: hover.result - image img {
  transform: scale(1.1);
}

            .result - info {
  padding: 1.2rem;
}

            .result - info h4 {
  color: var(--color - text);
  font - size: 1rem;
  font - family: var(--font - serif);
  margin - bottom: 0.3rem;
}

            .result - category {
  font - size: 0.85rem;
  color: var(--color - secondary);
  margin - bottom: 0.5rem;
  text - transform: uppercase;
  letter - spacing: 0.05em;
}

            .result - price {
  font - size: 1.1rem;
  color: var(--color - primary);
  font - weight: 700;
}

            .no - results {
  text - align: center;
  padding: 4rem 2rem;
}

            .no - results - icon {
  color: var(--color - secondary);
  opacity: 0.3;
  margin - bottom: 1.5rem;
}

            .no - results p {
  color: var(--color - text);
  font - size: 1.3rem;
  margin - bottom: 0.5rem;
}

            .no - results span {
  color: var(--color - secondary);
  font - size: 0.95rem;
}

            .search - suggestions {
  text - align: center;
  padding: 2rem 0;
}

            .search - suggestions h3 {
  font - size: 1.2rem;
  font - family: var(--font - serif);
  color: var(--color - text);
  margin - bottom: 1.5rem;
}

            .suggestion - tags {
  display: flex;
  flex - wrap: wrap;
  gap: 1rem;
  justify - content: center;
}

            .suggestion - tag {
  padding: 0.7rem 1.5rem;
  background - color: var(--color - card - bg);
  border: 1px solid var(--color - border);
  border - radius: 25px;
  color: var(--color - text);
  font - size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s;
}

            .suggestion - tag:hover {
  background - color: var(--color - primary);
  color: white;
  border - color: var(--color - primary);
  transform: translateY(-2px);
}

@media(max - width: 768px) {
              .search - header h2 {
    font - size: 2rem;
  }

              .search - input {
    font - size: 1rem;
    padding: 1rem 1rem 1rem 3.5rem;
  }

              .search - icon {
    left: 1rem;
  }

              .results - grid {
    grid - template - columns: 1fr;
  }
}
`}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchOverlay;
