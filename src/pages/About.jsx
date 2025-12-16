import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Diamond, ShieldCheck, HeartHandshake } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div className="page about-page">
      <SEO
        title={`${t('about.title')} | Bijoux`}
        description={t('about.story_text')}
      />

      {/* Hero Section */}
      <div className="about-hero" ref={targetRef}>
        <div className="about-hero-overlay"></div>
        <div className="about-hero-content">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="hero-title">{t('about.title')}</h1>
            <p className="hero-subtitle">{t('about.story_text').substring(0, 100)}...</p>
          </motion.div>
        </div>
      </div>

      {/* Intro / Story Section */}
      <section className="section story-section">
        <div className="container">
          <div className={`split-layout ${isRTL ? 'reverse' : ''}`}>
            <motion.div
              className="split-image-wrapper"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img src="/images/hero.jpg" alt="Our Story" className="split-image" />
              <div className="image-decoration"></div>
            </motion.div>
            <motion.div
              className="split-content"
              initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="section-heading">{t('about.story_title')}</h2>
              <p className="section-text">{t('about.story_text')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section values-section">
        <div className="container">
          <motion.div
            className="values-header"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="section-heading centered">{t('about.values_title')}</h2>
          </motion.div>

          <div className="values-grid">
            <ValueCard
              icon={<Diamond size={32} />}
              title={t('about.value1_title')}
              text={t('about.value1_text')}
              delay={0}
            />
            <ValueCard
              icon={<ShieldCheck size={32} />}
              title={t('about.value2_title')}
              text={t('about.value2_text')}
              delay={0.2}
            />
            <ValueCard
              icon={<HeartHandshake size={32} />}
              title={t('about.value3_title')}
              text={t('about.value3_text')}
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Craftsmanship Parallax Section */}
      <section className="section craft-section">
        <div className="craft-background-container">
          <motion.div style={{ y }} className="craft-background"></motion.div>
          <div className="craft-overlay"></div>
        </div>

        {/* Floating Diamond Element */}
        <motion.div
          className="floating-diamond-container"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <img src="/images/floating_diamond.png" alt="Floating Diamond" className="floating-diamond" />
        </motion.div>

        <div className="container craft-content-container">
          <motion.div
            className="craft-content glass-box"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="section-heading">{t('about.craft_title')}</h2>
            <p className="section-text">{t('about.craft_text')}</p>
          </motion.div>
        </div>
      </section>

      <style>{`
        /* About Page Global Styles */
        .about-page {
          overflow-x: hidden;
        }

        /* Hero Section */
        .about-hero {
          height: 85vh;
          position: relative;
          background-image: url('/images/about_hero.jpg');
          background-size: cover;
          background-position: center;
          background-attachment: fixed; /* Parallax effect */
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: white;
        }

        .about-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7));
          z-index: 1;
        }

        .about-hero-content {
          position: relative;
          z-index: 2;
          max-width: 800px;
          padding: 2rem;
        }

        .hero-title {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 8vw, 5rem);
          margin-bottom: 1.5rem;
          line-height: 1.1;
          letter-spacing: -0.02em;
          text-shadow: 2px 2px 10px rgba(0,0,0,0.5);
        }

        .hero-subtitle {
          font-size: 1.25rem;
          letter-spacing: 0.05em;
          opacity: 0.9;
          font-weight: 300;
        }

        /* Typography */
        .section-heading {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-text);
        }
        
        .section-heading.centered {
          text-align: center;
          margin-bottom: 4rem;
        }

        .section-text {
          font-size: 1.1rem;
          line-height: 1.8;
          color: var(--color-secondary);
        }

        /* Story Section - Split Layout */
        .story-section {
          padding: 8rem 0;
        }

        .split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        
        .split-layout.reverse {
            /* Handled by RTL specific logic if needed, but flex/grid order works naturally */
        }

        .split-image-wrapper {
          position: relative;
        }

        .split-image {
          width: 100%;
          border-radius: 4px; /* Slight softening */
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }

        .image-decoration {
          position: absolute;
          top: -20px;
          left: -20px;
          width: 100%;
          height: 100%;
          border: 2px solid var(--color-primary);
          z-index: -1;
          opacity: 0.3;
        }

        /* Values Section */
        .values-section {
          background-color: var(--color-card-bg); /* Use theme bg */
          padding: 6rem 0;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
        }

        .value-card {
           text-align: center;
           padding: 2.5rem;
           background: var(--color-background);
           border: 1px solid var(--color-border);
           transition: transform 0.3s ease, box-shadow 0.3s ease;
           border-radius: 8px;
        }

        .value-card:hover {
           transform: translateY(-10px);
           box-shadow: 0 15px 30px rgba(0,0,0,0.05);
           border-color: var(--color-primary);
        }

        .value-icon-wrapper {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          background-color: var(--color-card-bg);
          border: 1px solid var(--color-border);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: var(--color-primary);
          transition: all 0.3s ease;
        }

        .value-card:hover .value-icon-wrapper {
           background-color: var(--color-primary);
           color: white;
           border-color: var(--color-primary);
        }

        .value-title {
           font-family: var(--font-serif);
           font-size: 1.25rem;
           margin-bottom: 1rem;
        }

        /* Craftsmanship Section */
        .craft-section {
          position: relative;
          height: 700px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .craft-background-container {
           position: absolute;
           inset: 0;
           z-index: -1;
        }
        
        .craft-background {
           background-image: url('/images/bracelets/silver/silver-cuff.jpg'); /* Or another detail shot */
           background-size: cover;
           background-position: center;
           height: 120%; /* For parallax movement */
           width: 100%;
        }

        .craft-overlay {
           position: absolute;
           inset: 0;
           background: rgba(0,0,0,0.5);
        }

        .craft-content-container {
           position: relative;
           z-index: 10;
           display: flex;
           justify-content: center; /* Center horizontally */
           width: 100%;
        }
        
        .floating-diamond-container {
            position: absolute;
            top: 15%;
            right: 15%;
            z-index: 5;
            width: 150px;
            pointer-events: none;
            filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.4));
        }
        
        .floating-diamond {
            width: 100%;
            height: auto;
        }
        
        /* RTL support for floating element */
        :global([dir="rtl"]) .floating-diamond-container {
            right: auto;
            left: 15%;
        }

        .glass-box {
           background: rgba(255, 255, 255, 0.1);
           backdrop-filter: blur(12px);
           -webkit-backdrop-filter: blur(12px);
           padding: 4rem;
           max-width: 700px;
           text-align: center;
           border: 1px solid rgba(255, 255, 255, 0.2);
           box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
           border-radius: 16px;
           color: white;
        }
        
        .glass-box .section-heading {
            color: white;
            text-shadow: 0 2px 4px rgba(0,0,0,0.3);
        }
        
        .glass-box .section-text {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.2rem;
        }
        
        /* Dark mode overrides for glass box */
        :global([data-theme="dark"]) .glass-box {
           background: rgba(0, 0, 0, 0.4);
           border: 1px solid rgba(255, 255, 255, 0.1);
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .split-layout {
            grid-template-columns: 1fr;
          }
          
          .floating-diamond-container {
              width: 80px;
              top: 10%;
              right: 5%;
          }
          
          .image-decoration {
             display: none;
          }
           
          .hero-title {
             font-size: 3rem;
          }
          
          .glass-box {
             padding: 2rem;
             margin: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
};

const ValueCard = ({ icon, title, text, delay }) => (
  <motion.div
    className="value-card"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div className="value-icon-wrapper">
      {icon}
    </div>
    <h3 className="value-title">{title}</h3>
    <p>{text}</p>
  </motion.div>
);

export default About;
