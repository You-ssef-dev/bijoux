import React from 'react';
import Hero from '../components/Hero';
import FeaturedCollections from '../components/FeaturedCollections';
import BestSellers from '../components/BestSellers';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';

import { useTranslation } from 'react-i18next';

const Home = () => {
    const { t } = useTranslation();
    return (
        <div className="page home-page">
            <SEO
                title={`${t('home.hero_title')} | Bijoux`}
                description={t('home.hero_subtitle')}
                keywords={t('home.meta_keywords')}
            />
            <Hero />
            <FeaturedCollections />
            <BestSellers />
            <Newsletter />
        </div>
    );
};

export default Home;
