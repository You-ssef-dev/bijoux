import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SEO from '../components/SEO';

const faqs = [
    {
        question: "How do I know my ring size?",
        answer: "We recommend visiting a local jeweler to get professionally sized. Alternatively, you can use our printable ring size guide available on our website. If you're between sizes, we suggest sizing up."
    },
    {
        question: "Do you offer warranty on your jewelry?",
        answer: "Yes, all Bijoux jewelry comes with a 2-year warranty against manufacturing defects. This covers loose stones, broken clasps, and other structural issues. It does not cover normal wear and tear."
    },
    {
        question: "Are your diamonds ethically sourced?",
        answer: "Absolutely. We adhere to the Kimberley Process and only work with suppliers who can guarantee conflict-free diamonds. We are committed to ethical and sustainable practices throughout our supply chain."
    },
    {
        question: "Can I customize a piece of jewelry?",
        answer: "Yes, we offer bespoke design services. Whether you want to modify an existing design or create something entirely new, our artisans can bring your vision to life. Contact us to start the process."
    },
    {
        question: "How should I care for my jewelry?",
        answer: "We recommend cleaning your jewelry regularly with a soft cloth. Avoid exposing it to harsh chemicals, perfumes, or lotions. When not in use, store it in the provided Bijoux box or a soft pouch."
    },
    {
        question: "Do you ship internationally?",
        answer: "Yes, we ship to over 50 countries worldwide. Shipping costs and delivery times vary by location. You can see the shipping options for your country at checkout."
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
    return (
        <div className="page faq-page">
            <SEO
                title="Frequently Asked Questions | Bijoux"
                description="Find answers to common questions about our jewelry, shipping, and services."
            />

            <div className="container section">
                <div className="faq-header">
                    <h1>Frequently Asked Questions</h1>
                </div>

                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <FAQItem key={index} question={faq.question} answer={faq.answer} />
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
