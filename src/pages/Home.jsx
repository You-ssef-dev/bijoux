import React from 'react';
import Hero from '../components/Hero';
import FeaturedCollections from '../components/FeaturedCollections';
import BestSellers from '../components/BestSellers';
import Newsletter from '../components/Newsletter';
import SEO from '../components/SEO';

const Home = () => {
    return (
        <div className="page home-page">
            <SEO
                title="Bijoux | Timeless Elegance - Luxury Jewelry"
                description="Discover our exclusive collection of fine jewelry. From minimalist designs to vintage classics, find the perfect piece for every occasion."
                keywords="luxury jewelry, fine jewelry, gold necklaces, diamond rings, pearl earrings, bridal jewelry"
            />
            <Hero />
            <FeaturedCollections />
            <BestSellers />
            <Newsletter />
        </div>
    );
};

export default Home;
