import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SEO from '../components/SEO';

const faqs = [
    {
        question: "faq.q1",
        answer: "faq.a1"
    },
    {
        question: "faq.q2",
        answer: "faq.a2"
    },
    {
        question: "faq.q3",
        answer: "faq.a3"
    },
    {
        question: "faq.q4",
        answer: "faq.a4"
    },
    {
        question: "faq.q5",
        answer: "faq.a5"
    },
    {
        question: "faq.q6",
        answer: "faq.a6"
    }
];

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="faq-item">
            <button className="faq-question" onClick={() => setIsOpen(!isOpen)}>
                <span>{question}</span>
                {isOpen ? <Minus size={20} /> : <Plus size={20} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="faq-answer-container"
                    >
                        <p className="faq-answer">{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const { t } = useTranslation();

    return (
        <div className="page faq-page">
            <SEO
                title={`${t('faq.title')} | Bijoux`}
                description={t('faq.subtitle')}
            />

            <div className="container section">
                <div className="faq-header">
                    <h1>{t('faq.title')}</h1>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={t(faq.question)} answer={t(faq.answer)} />
                    ))}
                </div>
            </div>

            <style>{`
        .faq-header {
          text-align: center;
          margin-bottom: 4rem;
        }

        .faq-header h1 {
          font-size: 3rem;
          font-family: var(--font-serif);
        }

        .faq-list {
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-item {
          border-bottom: 1px solid var(--color-border);
        }

        .faq-question {
          width: 100%;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.5rem 0;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.1rem;
          font-family: var(--font-serif);
          cursor: pointer;
          color: var(--color-text);
          transition: color 0.3s;
        }

        .faq-question:hover {
          color: var(--color-primary);
        }

        .faq-answer-container {
          overflow: hidden;
        }

        .faq-answer {
          padding-bottom: 1.5rem;
          color: var(--color-secondary);
          line-height: 1.6;
        }
      `}</style>
        </div>
    );
};

export default FAQ;
