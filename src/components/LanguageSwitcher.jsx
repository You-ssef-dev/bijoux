import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        document.dir = lng === 'ar' ? 'rtl' : 'ltr';
    };

    return (
        <div className="language-switcher">
            <button className="lang-btn" aria-label="Change Language">
                <Globe size={20} />
            </button>
            <div className="lang-dropdown">
                <button onClick={() => changeLanguage('en')} className={i18n.language === 'en' ? 'active' : ''}>English</button>
                <button onClick={() => changeLanguage('fr')} className={i18n.language === 'fr' ? 'active' : ''}>Français</button>
                <button onClick={() => changeLanguage('ar')} className={i18n.language === 'ar' ? 'active' : ''}>العربية</button>
            </div>
            <style>{`
        .language-switcher {
          position: relative;
          display: inline-block;
          margin-left: 1rem;
        }
        .lang-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: var(--color-text);
          padding: 0.5rem;
          display: flex;
          align-items: center;
          transition: color 0.3s ease;
        }
        .lang-btn:hover {
          color: var(--color-accent);
        }
        .lang-dropdown {
          display: none;
          position: absolute;
          right: 0;
          top: 100%;
          background-color: var(--color-card-bg);
          min-width: 120px;
          box-shadow: 0 8px 16px rgba(0,0,0,0.1);
          border-radius: 8px;
          z-index: 1000;
          overflow: hidden;
          border: 1px solid var(--color-border);
        }
        .language-switcher:hover .lang-dropdown {
          display: block;
        }
        .lang-dropdown button {
          color: var(--color-text);
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          width: 100%;
          text-align: left; /* Default LTR alignment */
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          transition: background-color 0.2s;
        }
        /* RTL support for dropdown items */
        [dir="rtl"] .lang-dropdown button {
            text-align: right;
        }
        [dir="rtl"] .language-switcher {
            margin-left: 0;
            margin-right: 1rem;
        }
        [dir="rtl"] .lang-dropdown {
            right: auto;
            left: 0;
        }

        .lang-dropdown button:hover {
          background-color: var(--color-bg-secondary);
        }
        .lang-dropdown button.active {
          font-weight: bold;
          color: var(--color-accent);
        }
      `}</style>
        </div>
    );
};

export default LanguageSwitcher;
