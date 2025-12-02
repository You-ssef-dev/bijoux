import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = ({
  phoneNumber = "1234567890",
  message = "Hello! I'd like to place an order.",
  label = "Order via WhatsApp",
  className = ""
}) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`whatsapp-btn ${className}`}
        aria-label={label}
      >
        <MessageCircle size={20} className="whatsapp-icon" />
        <span>{label}</span>
      </a>
      <style>{`
        .whatsapp-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          padding: 1rem 2rem;
          background-color: transparent;
          color: var(--color-primary);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          border: 1px solid var(--color-primary);
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease-in-out;
          position: relative;
          overflow: hidden;
          width: 100%; /* Responsive: full width on small screens if needed, or controlled by container */
          max-width: 300px; /* Prevent it from being too wide */
        }

        /* Dark Mode Adjustment */
        [data-theme="dark"] .whatsapp-btn {
           color: var(--color-primary);
           border-color: var(--color-primary);
        }

        .whatsapp-btn:hover {
          background-color: var(--color-primary);
          color: #000000; /* Black text for clarity */
          transform: translateY(-2px);
          /* Removed box-shadow glow */
        }

        [data-theme="dark"] .whatsapp-btn:hover {
           color: #000000; 
        }

        .whatsapp-btn:active {
          transform: translateY(0);
        }

        .whatsapp-icon {
          transition: transform 0.3s ease;
        }

        .whatsapp-btn:hover .whatsapp-icon {
          transform: scale(1.1);
        }
        
        @media (min-width: 768px) {
            .whatsapp-btn {
                width: auto; /* Auto width on desktop */
            }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
