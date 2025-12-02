import React from 'react';
import WhatsAppButton from './WhatsAppButton';

const Newsletter = () => {
  return (
    <section className="section newsletter-section">
      <div className="container newsletter-container">
        <h2>Ready to make it yours?</h2>
        <p>Order directly via WhatsApp for a personalized shopping experience.</p>
        <div className="whatsapp-cta-container">
          <WhatsAppButton label="Order via WhatsApp" />
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
