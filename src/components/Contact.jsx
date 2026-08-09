import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheck } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { personalInfo } from '../constants/data';
import { sendContactMessage } from '../services/emailService';

const initialForm = { name: '', email: '', message: '' };

const contactDetails = [
  { icon: FiMail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: FiPhone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone.replace(/\s/g, '')}` },
  { icon: FiGithub, label: 'GitHub', value: 'View profile', href: personalInfo.github },
  { icon: FiLinkedin, label: 'LinkedIn', value: 'View profile', href: personalInfo.linkedin },
];

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await sendContactMessage(form);
      setStatus('sent');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('Failed to send message:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-content">
        <SectionHeading
          eyebrow="Contact"
          title="Get in touch"
          description="Have an opportunity or a question? My inbox is open."
        />

        <div className="grid lg:grid-cols-2 gap-6 max-w-3xl">
          <div className="grid grid-cols-2 gap-3 content-start">
            {contactDetails.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="card-surface p-4 flex items-center gap-3 transition-shadow duration-200 hover:shadow-lift"
                >
                  <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary-50 text-accent-dark shrink-0">
                    <Icon size={16} />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[11px] text-ink-faint">{item.label}</p>
                    <p className="text-sm font-medium text-ink truncate">{item.value}</p>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="card-surface p-6 relative overflow-hidden">
            <AnimatePresence mode="wait">
              {status === 'sent' ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center py-10"
                >
                  <span className="grid place-items-center h-12 w-12 rounded-full bg-primary-50 text-accent-dark mb-4">
                    <FiCheck size={22} />
                  </span>
                  <h3 className="font-display font-semibold text-ink mb-1">Message sent</h3>
                  <p className="text-sm text-ink-soft max-w-xs">
                    Thanks for reaching out — I&apos;ll reply soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full rounded-lg border border-surface-border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent"
                    />
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email"
                      className="w-full rounded-lg border border-surface-border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent"
                    />
                  </div>

                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Message"
                    className="w-full rounded-lg border border-surface-border bg-white px-3.5 py-2.5 text-sm text-ink placeholder:text-ink-faint outline-none transition-colors focus:border-accent resize-none"
                  />

                  {status === 'error' && (
                    <p className="text-xs text-red-500">
                      Something went wrong. Please email {personalInfo.email} directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? 'Sending...' : (
                      <>
                        <FiSend size={15} /> Send Message
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
