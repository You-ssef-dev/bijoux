import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import About from './pages/About';
import Cart from './pages/Cart';
import Collections from './pages/Collections';
import Contact from './pages/Contact';
import FAQ from './pages/FAQ';
import Care from './pages/Care';
import GoldCollection from './pages/GoldCollection';
import SilverCollection from './pages/SilverCollection';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound';

import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <ThemeProvider>
      <CartProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/gold-collection" element={<GoldCollection />} />
              <Route path="/silver-collection" element={<SilverCollection />} />
              <Route path="/collections/:category" element={<Collections />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/care" element={<Care />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
