import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useTheme } from '../context/ThemeContext';
import { products } from '../data/products';
import '../index.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const searchRef = useRef(null);

  const { cartCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearchInput = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.trim().length > 0) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5); // Limit to 5 results
      setSearchResults(filtered);
      setShowDropdown(true);
    } else {
      setSearchResults([]);
      setShowDropdown(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setShowDropdown(false);
    }
  };

  const handleResultClick = (productId) => {
    navigate(`/product/${productId}`);
    setSearchQuery('');
    setShowDropdown(false);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Shop', path: '/shop' },
    { name: 'Collections', path: '/collections' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="navbar-left">
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <Menu size={24} />
          </button>
          <div className="desktop-nav">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `nav-link ${isActive ? 'active' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="navbar-center">
          <Link to="/" className="logo">
            BIJOUX
          </Link>
        </div>

        <div className="navbar-right">
          <div className="search-container" ref={searchRef}>
            <form className="search-form" onSubmit={handleSearchSubmit}>
              <div className="search-input-container">
                <Search size={18} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={handleSearchInput}
                  onFocus={() => searchQuery.trim().length > 0 && setShowDropdown(true)}
                  className="search-input"
                />
              </div>
            </form>

            <AnimatePresence>
              {showDropdown && searchResults.length > 0 && (
                <motion.div
                  className="search-dropdown"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {searchResults.map(product => (
                    <div
                      key={product.id}
                      className="search-result-item"
                      onClick={() => handleResultClick(product.id)}
                    >
                      <img src={product.image} alt={product.name} className="search-result-image" />
                      <div className="search-result-info">
                        <span className="search-result-name">{product.name}</span>
                        <span className="search-result-price">${product.price.toLocaleString()}</span>
                      </div>
                    </div>
                  ))}
                  <div
                    className="view-all-results"
                    onClick={handleSearchSubmit}
                  >
                    View all results for "{searchQuery}"
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          <Link to="/cart" className="icon-btn cart-btn">
            <ShoppingBag size={20} />
            <span className="cart-count">{cartCount}</span>
          </Link>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
          >
            <div className="mobile-menu-header">
              <button onClick={toggleMenu}>
                <X size={24} />
              </button>
            </div>
            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={toggleMenu}
                  className="mobile-nav-link"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .navbar {
          padding: 1.5rem 0;
          position: sticky;
          top: 0;
          background-color: var(--color-background);
          backdrop-filter: blur(10px);
          z-index: 1000;
          border-bottom: 1px solid var(--color-border);
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .navbar-left, .navbar-right {
          flex: 1;
          display: flex;
          align-items: center;
        }

        .navbar-right {
          justify-content: flex-end;
          gap: 1rem;
        }

        .logo {
          font-family: var(--font-serif);
          font-size: 2rem;
          letter-spacing: 0.1em;
          font-weight: 700;
        }

        .nav-link {
          margin-right: 2rem;
          text-transform: uppercase;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          position: relative;
          opacity: 0.7;
        }

        .nav-link:hover, .nav-link.active {
          opacity: 1;
        }

        .nav-link.active::after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 100%;
          height: 1px;
          background-color: var(--color-text);
        }

        .search-container {
          position: relative;
        }

        .search-form {
          display: flex;
          align-items: center;
        }

        .search-input-container {
          position: relative;
          display: flex;
          align-items: center;
        }

        .search-icon {
          position: absolute;
          left: 0.8rem;
          color: var(--color-secondary);
          pointer-events: none;
        }

        .search-input {
          width: 200px;
          padding: 0.5rem 0.8rem 0.5rem 2.5rem;
          border: 1px solid var(--color-border);
          border-radius: 20px;
          background-color: var(--color-input-bg);
          color: var(--color-text);
          font-size: 0.85rem;
          font-family: var(--font-sans);
          transition: all 0.3s;
        }

        .search-input:focus {
          outline: none;
          border-color: var(--color-primary);
          width: 250px;
          background-color: var(--color-card-bg);
        }

        .search-input::placeholder {
          color: var(--color-secondary);
          opacity: 0.6;
        }

        .search-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          width: 300px;
          background-color: var(--color-card-bg);
          border: 1px solid var(--color-border);
          border-radius: 8px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          margin-top: 0.5rem;
          overflow: hidden;
          z-index: 1002;
        }

        .search-result-item {
          display: flex;
          align-items: center;
          padding: 0.8rem;
          border-bottom: 1px solid var(--color-border);
          cursor: pointer;
          transition: background-color 0.2s;
        }

        .search-result-item:hover {
          background-color: var(--color-input-bg);
        }

        .search-result-image {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: 4px;
          margin-right: 1rem;
        }

        .search-result-info {
          display: flex;
          flex-direction: column;
        }

        .search-result-name {
          font-size: 0.9rem;
          color: var(--color-text);
          font-weight: 500;
        }

        .search-result-price {
          font-size: 0.8rem;
          color: var(--color-secondary);
        }

        .view-all-results {
          padding: 0.8rem;
          text-align: center;
          font-size: 0.85rem;
          color: var(--color-primary);
          cursor: pointer;
          font-weight: 600;
        }

        .view-all-results:hover {
          background-color: var(--color-input-bg);
        }

        .icon-btn {
          opacity: 0.8;
          transition: opacity 0.3s;
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .icon-btn:hover {
          opacity: 1;
        }

        .cart-btn {
          position: relative;
        }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: var(--color-text);
          color: var(--color-white);
          font-size: 0.7rem;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .mobile-menu-btn {
          display: none;
        }

        .mobile-menu {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background-color: var(--color-background);
          z-index: 1001;
          padding: 2rem;
        }

        .mobile-menu-header {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 3rem;
        }

        .mobile-nav-link {
          display: block;
          font-family: var(--font-serif);
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 968px) {
          .search-form {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .logo {
            font-size: 1.5rem;
          }
          .navbar-right {
            gap: 0.8rem;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
