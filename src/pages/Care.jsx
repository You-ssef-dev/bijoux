import React from 'react';
import SEO from '../components/SEO';

import { useTranslation } from 'react-i18next';

const Care = () => {
    const { t } = useTranslation();

    return (
        <div className="page care-page">
            <SEO
                title={`${t('care.title')} | Bijoux`}
                description={t('care.subtitle')}
            />

            <div className="container section">
                <div className="care-header">
                    <h1>{t('care.title')}</h1>
                    <p>{t('care.subtitle')}</p>
                </div>

                <div className="care-grid">
                    <div className="care-card">
                        <div className="care-icon">✨</div>
                        <h2>{t('care.general_title')}</h2>
                        <p>{t('care.general_text')}</p>
                    </div>

                    <div className="care-card">
                        <div className="care-icon">🧼</div>
                        <h2>{t('care.cleaning_title')}</h2>
                        <p>{t('care.cleaning_text')}</p>
                    </div>

                    <div className="care-card">
                        <div className="care-icon">📦</div>
                        <h2>{t('care.storage_title')}</h2>
                        <p>{t('care.storage_text')}</p>
                    </div>

                    <div className="care-card">
                        <div className="care-icon">🔍</div>
                        <h2>{t('care.maintenance_title')}</h2>
                        <p>{t('care.maintenance_text')}</p>
                    </div>
                </div>

                <div className="material-guide">
                    <h2>{t('care.material_guide_title')}</h2>
                    <div className="material-row">
                        <div className="material-col">
                            <h3>{t('care.gold_title')}</h3>
                            <p>{t('care.gold_text')}</p>
                        </div>
                        <div className="material-col">
                            <h3>{t('care.silver_title')}</h3>
                            <p>{t('care.silver_text')}</p>
                        </div>
                        <div className="material-col">
                            <h3>{t('care.pearls_title')}</h3>
                            <p>{t('care.pearls_text')}</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .care-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .care-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-family: var(--font-serif);
        }

        .care-header p {
          color: var(--color-secondary);
          font-size: 1.2rem;
        }

        .care-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
          margin-bottom: 5rem;
        }

        .care-card {
          background-color: var(--color-card-bg);
          padding: 2.5rem;
          padding: 2.5rem;
          border-radius: 4px;
          text-align: center;
        }

        .care-icon {
            font-size: 3rem;
            margin-bottom: 1.5rem;
        }

        .care-card h2 {
          font-family: var(--font-serif);
          margin-bottom: 1rem;
          font-size: 1.5rem;
        }

        .care-card p {
          color: var(--color-secondary);
          line-height: 1.6;
        }

        .material-guide {
            text-align: center;
            padding: 4rem 0;
            text-align: center;
            padding: 4rem 0;
            border-top: 1px solid var(--color-border);
        }

        .material-guide h2 {
            font-size: 2rem;
            font-family: var(--font-serif);
            margin-bottom: 3rem;
        }

        .material-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 3rem;
        }

        .material-col h3 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
        }

        .material-col p {
            color: var(--color-secondary);
        }

        @media (max-width: 768px) {
          .care-grid, .material-row {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
        </div>
    );
};

export default Care;
