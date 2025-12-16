import React from 'react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

const PrivacyPolicy = () => {
    const { t } = useTranslation();

    return (
        <div className="page privacy-page">
            <SEO
                title={`${t('privacy.title')} | Bijoux`}
                description={t('privacy.intro')}
            />
            <div className="container section">
                <h1>{t('privacy.title')}</h1>
                <p className="last-updated">{t('privacy.last_updated')}</p>
                <p className="intro-text">{t('privacy.intro')}</p>

                <div className="policy-section">
                    <h2>{t('privacy.section1_title')}</h2>
                    <p>{t('privacy.section1_text')}</p>
                </div>

                <div className="policy-section">
                    <h2>{t('privacy.section2_title')}</h2>
                    <p>{t('privacy.section2_text')}</p>
                </div>

                <div className="policy-section">
                    <h2>{t('privacy.section3_title')}</h2>
                    <p>{t('privacy.section3_text')}</p>
                </div>
            </div>
            <style>{`
                .privacy-page h1 {
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
                .policy-section {
                    margin-bottom: 2.5rem;
                }
                .policy-section h2 {
                    font-size: 1.5rem;
                    margin-bottom: 1rem;
                }
                .policy-section p {
                    color: var(--color-secondary);
                    line-height: 1.7;
                }
            `}</style>
        </div>
    );
};

export default PrivacyPolicy;
