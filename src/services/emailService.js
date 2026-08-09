import emailjs from '@emailjs/browser';

// Create a free account at https://www.emailjs.com and replace these
// with your own Service ID, Template ID, and Public Key.
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

/**
 * Sends a contact form submission via EmailJS.
 * @param {{ name: string, email: string, message: string }} formData
 * @returns {Promise<object>}
 */
export const sendContactMessage = (formData) => {
  return emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    },
    EMAILJS_PUBLIC_KEY
  );
};
