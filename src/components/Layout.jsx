import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <style>{`
        .app-container {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .main-content {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Layout;
