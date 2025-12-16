import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getWhatsAppUrl } from '../utils/whatsapp';

const WhatsAppButton = ({ variant = 'default', label, isFloating = false, className = '', context = '' }) => {
  const { t } = useTranslation();

  // Determine context: provided context OR default "we clicked the [label] button"
  const buttonLabel = label || t('home.whatsapp_cta');
  const finalContext = context || t('common.whatsapp_context_default', { label: buttonLabel });

  // Use the global utility to ensure consistent message and number
  const whatsappUrl = getWhatsAppUrl(finalContext);

  return (
    <>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${isFloating ? 'whatsapp-float' : 'whatsapp-btn'} ${className}`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={isFloating ? 32 : 20} className={!isFloating ? "whatsapp-icon" : ""} />
        {!isFloating && <span>{buttonLabel}</span>}
      </a>
      <style>{`
        .whatsapp-float {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #25D366;
          color: white;
          border-radius: 50%;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          z-index: 1000;
          transition: transform 0.3s ease, background-color 0.3s ease;
          text-decoration: none;
        }

        .whatsapp-float:hover {
          transform: scale(1.05);
          background-color: #1DA851;
        }

        .whatsapp-float svg {
          fill: white;
        }

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
          width: 100%;
          max-width: 300px;
        }

        [data-theme="dark"] .whatsapp-btn {
           color: var(--color-primary);
           border-color: var(--color-primary);
        }

        .whatsapp-btn:hover {
          background-color: var(--color-primary);
          color: #000000;
          transform: translateY(-2px);
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
                width: auto;
            }
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
