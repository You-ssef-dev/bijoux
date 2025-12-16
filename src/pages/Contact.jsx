import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, ArrowRight, MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SEO from '../components/SEO';

import { openWhatsApp } from '../utils/whatsapp';

const Contact = () => {
  const { t } = useTranslation();
  const [focusedField, setFocusedField] = useState(null);

  const handleFocus = (field) => setFocusedField(field);
  const handleBlur = (e) => {
    if (!e.target.value) setFocusedField(null);
  };

  const handleWhatsAppClick = () => {
    openWhatsApp(t('contact.facebook_context') || t('contact.whatsapp_context'));
  };

  return (
    <div className="page contact-page">
      <SEO
        title={`${t('contact.title')} | Bijoux`}
        description={t('contact.subtitle')}
      />

      <div className="container section contact-container">
        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="page-title">{t('contact.title')}</h1>
          <p className="page-subtitle">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="contact-wrapper">
          {/* Contact Info Side */}
          <motion.div
            className="contact-info-side"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="info-card glass-panel">
              <h2 className="info-heading">{t('contact.info_title')}</h2>
              <div className="info-list">
                <a href={`mailto:${t('contact.email')}`} className="info-item">
                  <div className="icon-box"><Mail size={20} /></div>
                  <div className="info-content">
                    <span className="label"><strong>{t('contact.labels.email')}</strong></span>
                    <span className="value">{t('contact.email')}</span>
                  </div>
                </a>
                <a href={`tel:${t('contact.phone')}`} className="info-item">
                  <div className="icon-box"><Phone size={20} /></div>
                  <div className="info-content">
                    <span className="label"><strong>{t('contact.labels.phone')}</strong></span>
                    <span className="value">{t('contact.phone')}</span>
                  </div>
                </a>
                <div className="info-item">
                  <div className="icon-box"><MapPin size={20} style={{ transform: 'translateY(1px)' }} /></div>
                  <div className="info-content">
                    <span className="label"><strong>{t('contact.labels.address')}</strong></span>
                    <span className="value">{t('contact.address')}</span>
                  </div>
                </div>

                <a
                  href="#"
                  onClick={(e) => { e.preventDefault(); handleWhatsAppClick(); }}
                  className="whatsapp-btn-info"
                >
                  <MessageCircle size={20} />
                  <span>{t('contact.whatsapp_label')}</span>
                </a>
              </div>

              <div className="hours-section">
                <h3 className="hours-heading">
                  <Clock size={18} style={{ marginRight: '8px' }} />
                  {t('contact.hours_title')}
                </h3>
                <div className="hours-grid">
                  <div className="hour-row">
                    <span>{t('contact.hours_mon_fri')}</span>
                  </div>
                  <div className="hour-row">
                    <span>{t('contact.hours_sat')}</span>
                  </div>
                  <div className="hour-row">
                    <span>{t('contact.hours_sun')}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            className="contact-form-side glass-panel"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="contact-form">
              <div className={`input-group ${focusedField === 'name' ? 'focused' : ''}`}>
                <label className="floating-label" htmlFor="name">{t('contact.form_name')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                />
                <div className="border-line"></div>
              </div>

              <div className={`input-group ${focusedField === 'email' ? 'focused' : ''}`}>
                <label className="floating-label" htmlFor="email">{t('contact.form_email')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                />
                <div className="border-line"></div>
              </div>

              <div className={`input-group ${focusedField === 'subject' ? 'focused' : ''}`}>
                <label className="floating-label" htmlFor="subject">{t('contact.form_subject')}</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  onFocus={() => handleFocus('subject')}
                  onBlur={handleBlur}
                  required
                />
                <div className="border-line"></div>
              </div>

              <div className={`input-group ${focusedField === 'message' ? 'focused' : ''}`}>
                <label className="floating-label" htmlFor="message">{t('contact.form_message')}</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  required
                ></textarea>
                <div className="border-line"></div>
              </div>

              <button type="submit" className="submit-btn">
                <span>{t('contact.send_button')}</span>
                <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>

          {/* Styled Map (Grayscale) - Moved to bottom */}
          <div className="map-section">
            <div className="map-container glass-panel">
              <iframe
                src="https://maps.google.com/maps?q=N+10,+Ground+Floor,+Kissariat+Timizar+1+Place+El+Mechouar+Tiznit+85000,+Morocco&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(100%) invert(1) contrast(1.2) brightness(0.8)' }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <motion.button
        className="whatsapp-float"
        onClick={handleWhatsAppClick}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <MessageCircle size={32} />
      </motion.button>

      <style>{`
        .contact-page {
            min-height: 100vh;
            background-color: var(--color-background);
        }
        
        .contact-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 1rem;
        }

        .contact-header {
            text-align: center;
            margin-bottom: 4rem;
        }

        .page-title {
            font-size: 3.5rem;
            font-family: var(--font-serif);
            margin-bottom: 1rem;
        }

        .page-subtitle {
            font-size: 1.25rem;
            color: var(--color-secondary);
            max-width: 600px;
            margin: 0 auto;
        }

        .contact-wrapper {
            display: grid;
            grid-template-columns: 1fr 1.5fr;
            gap: 2rem;
            align-items: start;
        }

        .glass-panel {
            background: var(--color-card-bg);
            border: 1px solid var(--color-border);
            border-radius: 8px;
            padding: 2.5rem;
            box-shadow: 0 4px 20px rgba(0,0,0,0.03);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .glass-panel:hover {
            box-shadow: 0 10px 30px rgba(0,0,0,0.06);
            border-color: var(--color-primary);
        }

        /* Info Side */
        .contact-info-side {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .info-heading {
            font-family: var(--font-serif);
            font-size: 1.5rem;
            margin-bottom: 2rem;
            border-bottom: 1px solid var(--color-border);
            padding-bottom: 1rem;
        }

        .info-item {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            margin-bottom: 2rem;
            text-decoration: none;
            color: inherit;
        }
        
        .icon-box {
            width: 48px;
            height: 48px;
            background: var(--color-background);
            border: 1px solid var(--color-border);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-primary);
            transition: all 0.3s ease;
        }
        
        .info-item:hover .icon-box {
            background: var(--color-primary);
            color: white;
            transform: scale(1.05);
        }

        .whatsapp-btn-info {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            background-color: #25D366;
            color: white;
            padding: 1rem;
            border-radius: 8px;
            font-weight: bold;
            text-decoration: none;
            margin-top: 1rem;
            transition: all 0.3s ease;
            box-shadow: 0 4px 10px rgba(37, 211, 102, 0.2);
        }

        .whatsapp-btn-info:hover {
            background-color: #128C7E;
            transform: translateY(-2px);
            box-shadow: 0 6px 15px rgba(37, 211, 102, 0.3);
        }

        .info-content {
            display: flex;
            flex-direction: column;
        }

        .info-content .label {
            font-size: 0.95rem;
            color: var(--color-text);
            margin-bottom: 0.25rem;
        }
        
        .info-content .value {
            font-weight: 500;
        }

        .hours-section {
            background: var(--color-background);
            padding: 1.5rem;
            border-radius: 4px;
            margin-top: 1rem;
        }

        .hours-heading {
            display: flex;
            align-items: center;
            font-size: 1rem;
            margin-bottom: 1rem;
            color: var(--color-primary);
        }

        .hours-grid {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .hour-row {
            display: flex;
            justify-content: space-between;
            font-size: 0.9rem;
            color: var(--color-secondary);
        }
        
        .hour-row.closed {
            color: var(--color-secondary);
            opacity: 0.7;
        }

        .map-section {
            grid-column: 1 / -1;
            width: 100%;
            margin-top: 2rem;
            opacity: 0;
            animation: fadeIn 0.8s ease forwards 0.6s;
        }

        @keyframes fadeIn {
            to { opacity: 1; }
        }

        .map-container {
            height: 400px;
            overflow: hidden;
            padding: 0; 
            border: 1px solid var(--color-border);
            border-radius: 8px; /* Matching the cards */
            box-shadow: 0 4px 15px rgba(0,0,0,0.05); /* Subtle lift */
        }
        
        .map-container iframe {
            transition: all 0.5s ease;
        }
        
        .map-container:hover iframe {
            filter: grayscale(0%) invert(0) !important; /* Reveal color on hover */
        }

        .whatsapp-float {
            position: fixed;
            bottom: 30px;
            right: 30px;
            background-color: #25D366;
            color: white;
            border-radius: 50%;
            width: 60px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: none;
            cursor: pointer;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            z-index: 100;
            transition: all 0.3s ease;
        }

        .whatsapp-float:hover {
            box-shadow: 0 6px 20px rgba(37, 211, 102, 0.4);
            transform: translateY(-5px);
        }

        /* RTL for WhatsApp Button */
        :global([dir="rtl"]) .whatsapp-float {
            left: 30px;
            right: auto;
        }

        /* Form Side */
        .contact-form {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }

        .input-group {
            position: relative;
            padding-top: 1rem;
        }

        .input-group input,
        .input-group textarea {
            width: 100%;
            padding: 1rem 0;
            border: none;
            border-bottom: 1px solid var(--color-border);
            background: transparent;
            font-family: var(--font-sans);
            font-size: 1rem;
            color: var(--color-text);
            transition: all 0.3s ease;
            resize: none;
        }

        .input-group input:focus,
        .input-group textarea:focus {
            outline: none;
        }
        
        .border-line {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--color-primary);
            transition: width 0.4s ease;
        }
        
        .input-group.focused .border-line,
        .input-group input:valid ~ .border-line,
        .input-group textarea:valid ~ .border-line {
            width: 100%;
        }

        .floating-label {
            position: absolute;
            top: 1rem;
            left: 0;
            font-size: 1rem;
            color: var(--color-secondary);
            transition: all 0.3s ease;
            pointer-events: none;
        }
        
        .input-group.focused .floating-label,
        .input-group input:valid ~ .floating-label,
        .input-group textarea:valid ~ .floating-label {
             top: -0.5rem;
             font-size: 0.8rem;
             color: var(--color-primary);
        }

        .submit-btn {
            display: inline-flex;
            align-items: center;
            justify-content: space-between;
            padding: 1.2rem 2rem;
            background: var(--color-text);
            color: var(--color-background);
            border: none;
            font-size: 1rem;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            cursor: pointer;
            transition: all 0.3s ease;
            margin-top: 1rem;
            font-weight: bold;
        }

        .submit-btn:hover {
            background: var(--color-primary);
            transform: translateY(-2px);
            padding-right: 2.5rem; /* Slide effect */
        }

        @media (max-width: 900px) {
            .contact-wrapper {
                grid-template-columns: 1fr;
            }
            .page-title {
                font-size: 2.5rem;
            }
            .contact-container {
                padding: 2rem 1rem;
            }
        }
      `}</style>
    </div>
  );
};

export default Contact;
