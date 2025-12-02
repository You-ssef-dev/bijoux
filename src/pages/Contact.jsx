import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const Contact = () => {
  return (
    <div className="page contact-page">
      <SEO
        title="Contact Us | Bijoux"
        description="Get in touch with Bijoux. We are here to assist you with any inquiries about our jewelry."
      />

      <div className="container section">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Our team is here to assist with any inquiries.</p>
        </div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="info-card">
              <h3>Get in Touch</h3>
              <div className="info-item">
                <Mail size={20} />
                <span>youssefnajmi890@gmail.com</span>
              </div>
              <div className="info-item">
                <Phone size={20} />
                <span>+212 652864068</span>
              </div>
              <div className="info-item">
                <MapPin size={20} />
                <span>123 Luxury Ave, New York, NY 10012</span>
              </div>
            </div>

            <div className="info-card">
              <h3>Opening Hours</h3>
              <div className="info-item">
                <Clock size={20} />
                <div>
                  <p>Mon - Fri: 10am - 7pm</p>
                  <p>Sat: 11am - 5pm</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const name = formData.get('name');
              const email = formData.get('email');
              const subject = formData.get('subject');
              const message = formData.get('message');

              const whatsappMessage = `Hello Bijoux,\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
              const encodedMessage = encodeURIComponent(whatsappMessage);
              window.open(`https://wa.me/15551234567?text=${encodedMessage}`, '_blank');
            }}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Your Email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <select id="subject" name="subject">
                  <option value="general">General Inquiry</option>
                  <option value="order">Order Status</option>
                  <option value="returns">Returns & Exchanges</option>
                  <option value="custom">Custom Design</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="5" placeholder="How can we help?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send via WhatsApp</button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        .contact-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .contact-header h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
          font-family: var(--font-serif);
        }

        .contact-header p {
          color: var(--color-secondary);
          font-size: 1.2rem;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 4rem;
        }

        .info-card {
          background-color: var(--color-card-bg);
          padding: 2rem;
          margin-bottom: 2rem;
          border-radius: 4px;
          border: 1px solid var(--color-border);
        }

        .info-card h3 {
          font-family: var(--font-serif);
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }

        .info-item {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          margin-bottom: 1rem;
          color: var(--color-secondary);
        }

        .contact-form {
          background-color: var(--color-card-bg);
          padding: 2rem;
          border: 1px solid var(--color-border);
          border-radius: 4px;
        }

        .form-group {
          margin-bottom: 1.5rem;
        }

        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: 0.8rem;
          border: 1px solid var(--color-border);
          border-radius: 4px;
          font-family: var(--font-sans);
          background-color: var(--color-input-bg);
          color: var(--color-text);
          transition: border-color 0.3s;
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Contact;
