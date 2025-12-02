import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Layout = ({ children }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <div className="layout">
            <Navbar />
            <main className="main-content">
                {children}
            </main>
            <Footer />
            <style>{`
        .layout {
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
