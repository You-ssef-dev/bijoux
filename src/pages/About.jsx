import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const About = () => {
  return (
    <div className="page about-page">
      <SEO
        title="Our Story | Bijoux"
        description="Learn about the heritage, craftsmanship, and values behind Bijoux. Timeless elegance designed for the modern woman."
      />

      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-hero-content">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            The Art of Elegance
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting memories in gold and precious stones since 2024.
          </motion.p>
        </div>
      </div>

      {/* Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className="split-layout">
            <motion.div
              className="split-image-container"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/hero.jpg" alt="Woman wearing Bijoux jewelry" className="split-image" />
            </motion.div>
            <motion.div
              className="split-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Our Story</h2>
              <p>
                Bijoux was born from a simple yet profound desire: to create jewelry that transcends the fleeting nature of trends.
                We believe that true luxury lies not just in the price tag, but in the story a piece tells and the feeling it evokes.
              </p>
              <p>
                Founded by a team of passionate artisans and designers, our mission is to bring the timeless beauty of traditional
                craftsmanship into the modern era. Each piece is a labor of love, designed to be a companion for life's most
                cherished moments.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Craftsmanship Section */}
      <section className="section craftsmanship-section">
        <div className="container">
          <div className="split-layout reverse">
            <motion.div
              className="split-image-container"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/bracelets/silver/silver-cuff.jpg" alt="Intricate silver craftsmanship" className="split-image" />
            </motion.div>
            <motion.div
              className="split-content"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2>Master Craftsmanship</h2>
              <p>
                At the heart of Bijoux is an unwavering commitment to quality. We work with master jewelers who have honed their
                skills over decades. From the initial sketch to the final polish, every step of the process is executed with
                precision and care.
              </p>
              <p>
                We use only the finest ethically sourced materials—18k gold, sterling silver, and conflict-free gemstones.
                Our dedication to sustainability ensures that your jewelry is as kind to the earth as it is beautiful to wear.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">✦</div>
              <h3>Timeless Design</h3>
              <p>We create pieces that defy trends, designed to be worn and loved for generations.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✦</div>
              <h3>Ethical Sourcing</h3>
              <p>We are committed to transparency and responsibility in our supply chain.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✦</div>
              <h3>Uncompromised Quality</h3>
              <p>We never cut corners. Every detail is scrutinized to ensure perfection.</p>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .about-hero {
          height: 60vh;
          background-image: url('/images/about_hero.jpg');
          background-size: cover;
          background-position: center;
          background-color: #1A1A1A;
          color: #FFFFFF;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        
        .about-hero::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.5);
        }

        .about-hero-content {
            position: relative;
            z-index: 2;
            padding: 0 2rem;
        }

        .about-hero h1 {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          font-family: var(--font-serif);
        }

        .about-hero p {
          font-size: 1.2rem;
          max-width: 600px;
          margin: 0 auto;
          opacity: 0.9;
        }

        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }

        .split-layout.reverse {
            direction: rtl;
        }
        
        .split-layout.reverse .split-content {
            direction: ltr;
        }

        .split-image-container {
          width: 100%;
          height: 600px;
          overflow: hidden;
          position: relative;
        }

        .split-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .split-content h2 {
          font-size: 2.5rem;
          margin-bottom: 2rem;
          color: var(--color-text);
        }

        .split-content p {
          color: var(--color-secondary);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
          line-height: 1.8;
        }

        .values-section {
          background-color: var(--color-card-bg);
          padding: 8rem 0;
          border-top: 1px solid var(--color-border);
        }

        .section-title {
            text-align: center;
            font-size: 2.5rem;
            margin-bottom: 4rem;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 4rem;
          text-align: center;
        }

        .value-icon {
            font-size: 2rem;
            color: var(--color-primary);
            margin-bottom: 1.5rem;
        }

        .value-card h3 {
          font-size: 1.2rem;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .value-card p {
          color: var(--color-secondary);
          line-height: 1.6;
        }

        @media (max-width: 768px) {
          .about-hero h1 {
            font-size: 2.5rem;
          }
          
          .split-layout {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
          
          .split-layout.reverse {
              direction: ltr;
          }
          
          .split-image-container {
              height: 400px;
          }

          .values-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
