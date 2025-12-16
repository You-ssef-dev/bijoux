import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import WhatsAppButton from './WhatsAppButton';

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <h3 className="footer-logo">BIJOUX</h3>
            <p className="footer-text">
              {t('footer.about_text')}
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/bijoux" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/bijoux" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://x.com/bijoux" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="X (Twitter)">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h4>{t('nav.shop')}</h4>
            <ul className="footer-links">
              <li><Link to="/shop">{t('footer.all_products')}</Link></li>
              <li><Link to="/collections/new">{t('footer.new_arrivals')}</Link></li>
              <li><Link to="/collections/bestsellers">{t('footer.best_sellers')}</Link></li>
              <li><Link to="/collections/bridal">{t('footer.bridal')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.links')}</h4>
            <ul className="footer-links">
              <li><Link to="/contact">{t('footer.contact')}</Link></li>
              <li><Link to="/faq">{t('footer.faq')}</Link></li>
              <li><Link to="/care">{t('footer.jewelry_care')}</Link></li>
              <li><Link to="/privacy">{t('privacy.title')}</Link></li>
              <li><Link to="/terms">{t('terms.title')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.whatsapp_order_title')}</h4>
            <p className="footer-text">{t('footer.whatsapp_order_text')}</p>
            <WhatsAppButton label={t('footer.whatsapp_chat_label')} />
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BIJOUX. {t('footer.rights')}</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: var(--color-card-bg);
          padding: 5rem 0 2rem;
          margin-top: auto;
          border-top: 1px solid var(--color-border);
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 3rem;
          margin-bottom: 4rem;
        }

        .footer-logo {
          font-family: var(--font-serif);
          font-size: 1.5rem;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
        }

        .footer-text {
          color: var(--color-secondary);
          font-size: 0.9rem;
          margin-bottom: 1.5rem;
          max-width: 300px;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          color: var(--color-text);
          opacity: 0.7;
          transition: all 0.3s;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .social-link:hover {
          opacity: 1;
          color: var(--color-primary);
          transform: translateY(-2px);
        }

        .footer h4 {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 1.5rem;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.8rem;
        }

        .footer-links a {
          color: var(--color-secondary);
          font-size: 0.9rem;
        }

        .footer-links a:hover {
          color: var(--color-text);
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(0,0,0,0.05);
          color: var(--color-secondary);
          font-size: 0.8rem;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
