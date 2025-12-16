import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
    const { t } = useTranslation();

    return (
        <div className="page not-found-page">
            <SEO
                title={`${t('not_found.title')} | Bijoux`}
                description={t('not_found.message')}
            />
            <div className="container section">
                <h1>404</h1>
                <h2>{t('not_found.title')}</h2>
                <p>{t('not_found.message')}</p>
                <Link to="/" className="btn btn-primary">{t('not_found.back_home')}</Link>
            </div>
            <style>{`
                .not-found-page .section {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    text-align: center;
                    min-height: 60vh;
                }
                .not-found-page h1 {
                    font-size: 6rem;
                    margin-bottom: 1rem;
                    color: var(--color-primary);
                    font-family: var(--font-serif);
                    line-height: 1;
                }
                .not-found-page h2 {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                }
                .not-found-page p {
                    color: var(--color-secondary);
                    margin-bottom: 2rem;
                    max-width: 400px;
                }
            `}</style>
        </div>
    );
};

export default NotFound;
