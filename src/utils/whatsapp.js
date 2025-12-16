/**
 * Centralized WhatsApp utility to ensure consistent behavior across the application.
 */

// We import i18n directly to access translations outside of React components if needed,
// but for most cases we might pass the translated string or let the utility handle it.
// However, since we want to enforce the rule globally, we can use the i18n instance.
import i18n from '../i18n';

export const getWhatsAppUrl = (message = null) => {
    const phoneNumber = '212652864068';

    // Use the provided context/message, or fall back to a default if absolutely nothing is provided
    // But generally, the greeting is fixed, and the context is variable.
    const greeting = i18n.t('contact.whatsapp_message') || "Hello Youssef, ";

    // If a full custom message is intended to REPLACE everything, we might handle it, 
    // but the rule is "Every WhatsApp message must Start exactly with: Hello Youssef,"
    // So we treat the 'message' argument as the 'context' part.
    const context = message || i18n.t('common.whatsapp_context_default', { label: 'Contact' }) || "we want to get in touch.";

    const fullMessage = `${greeting}${context}`;

    const encodedMessage = encodeURIComponent(fullMessage);

    return `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodedMessage}&type=phone_number&app_absent=0`;
};

export const openWhatsApp = (message = null) => {
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank');
};
