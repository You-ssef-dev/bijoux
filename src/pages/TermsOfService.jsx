import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const TermsOfService = () => {
    const { t } = useTranslation();

    return (
        <div className="page terms-page">
            <SEO
                title={`${t('terms.title')} | Bijoux`}
                description={t('terms.intro')}
            />
            <div className="container section">
                <h1>{t('terms.title')}</h1>
                <p className="last-updated">{t('terms.last_updated')}</p>
                <p className="intro-text">{t('terms.intro')}</p>

                <div className="terms-section">
                    <h2>{t('terms.section1_title')}</h2>
                    <p>{t('terms.section1_text')}</p>
                </div>

                <div className="terms-section">
                    <h2>{t('terms.section2_title')}</h2>
                    <p>{t('terms.section2_text')}</p>
                </div>

                <div className="terms-section">
                    <h2>{t('terms.section3_title')}</h2>
                    <p>{t('terms.section3_text')}</p>
                </div>
            </div>
            <style>{`
                .terms-page h1 {
                    margin-bottom: 0.5rem;
                }
                .last-updated {
                    color: var(--color-secondary);
                    font-size: 0.9rem;
                    margin-bottom: 2rem;
                }
                .intro-text {
                    margin-bottom: 3rem;
                    font-size: 1.1rem;
                }
                .terms-section {
                    margin-bottom: 2.5rem;
                }
                .terms-section h2 {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                }
                .terms-section p {
                    color: var(--color-secondary);
                    line-height: 1.7;
                }
            `}</style>
        </div>
    );
};

export default TermsOfService;
