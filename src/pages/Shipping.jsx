import React from 'react';
import SEO from '../components/SEO';

const Shipping = () => {
  return (
    <div className="page shipping-page">
      <SEO
        title="Shipping & Returns | Bijoux"
        description="Learn about our shipping policies, delivery times, and return process."
      />

      <div className="container section">
        <div className="policy-header">
          <h1>Shipping & Returns</h1>
        </div>

        <div className="policy-content">
          <section className="policy-section">
            <h2>Shipping Policy</h2>
            <p>
              We offer complimentary shipping on all orders over $500. All shipments are fully insured and require a signature upon delivery to ensure your jewelry arrives safely.
            </p>

            <div className="shipping-methods">
              <div className="method">
                <h3>Standard Shipping</h3>
                <p>3-5 Business Days</p>
                <p>Free for orders over $500</p>
                <p>$15 for orders under $500</p>
              </div>
              <div className="method">
                <h3>Express Shipping</h3>
                <p>1-2 Business Days</p>
                <p>$35 flat rate</p>
              </div>
            </div>
          </section>

          <section className="policy-section">
            <h2>International Shipping</h2>
            <p>
              We currently ship to select countries worldwide. International shipping rates and delivery times vary by location.
              Please note that customers are responsible for any customs duties or taxes incurred.
            </p>
          </section>

          <section className="policy-section">
            <h2>Returns & Exchanges</h2>
            <p>
              We want you to be completely delighted with your purchase. If for any reason you are not satisfied, we accept returns
              within 30 days of delivery for a full refund or exchange.
            </p>
            <ul>
              <li>Items must be unworn, in original condition, and in their original packaging.</li>
              <li>Custom or personalized pieces are final sale and cannot be returned.</li>
              <li>Return shipping is free for domestic orders.</li>
            </ul>
            <p>
              To initiate a return, please contact our support team at <a href="mailto:hello@bijoux.com">hello@bijoux.com</a>.
            </p>
          </section>
        </div>
      </div>

      <style>{`
        .policy-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .policy-header h1 {
          font-size: 3rem;
          font-family: var(--font-serif);
        }

        .policy-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .policy-section {
          margin-bottom: 4rem;
        }

        .policy-section h2 {
          font-size: 1.8rem;
          font-family: var(--font-serif);
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid var(--color-border);
        }

        .policy-section p {
          color: var(--color-secondary);
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .policy-section ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--color-secondary);
        }

        .policy-section li {
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .shipping-methods {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
          margin-top: 2rem;
        }

        .method {
          background-color: var(--color-card-bg);
          padding: 1.5rem;
          padding: 1.5rem;
          border-radius: 4px;
        }

        .method h3 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
          font-family: var(--font-serif);
        }

        .method p {
          margin-bottom: 0.2rem;
          font-size: 0.9rem;
        }

        @media (max-width: 600px) {
          .shipping-methods {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Shipping;
