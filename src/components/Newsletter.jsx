import React from 'react';
import WhatsAppButton from './WhatsAppButton';

import { useTranslation } from 'react-i18next';

const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <section className="section newsletter-section">
      <div className="container newsletter-container">
        <h2>{t('home.newsletter_title')}</h2>
        <p>{t('home.newsletter_subtitle')}</p>
        <div className="whatsapp-cta-container">
          <WhatsAppButton variant="inline" label={t('home.whatsapp_cta')} />
        </div>
      </div>

      <style>{`
        .newsletter-section {
          background-color: var(--color-card-bg);
          text-align: center;
          padding: 6rem 0;
          border-top: 1px solid var(--color-border);
        }

        .newsletter-container {
          max-width: 600px;
        }

        .newsletter-section h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .newsletter-section p {
          color: var(--color-secondary);
          margin-bottom: 2.5rem;
        }

        .whatsapp-cta-container {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }
      `}</style>
    </section>
  );
};

export default Newsletter;
