import { motion } from 'framer-motion';

const SectionHeading = ({ eyebrow, title, description, align = 'left' }) => {
  const isCenter = align === 'center';

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`max-w-2xl mb-9 md:mb-11 ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      <span className="eyebrow">
        <span className="h-px w-6 bg-accent" />
        {eyebrow}
      </span>
      <h2 className="section-heading mt-3">{title}</h2>
      {description && (
        <p className="mt-3 text-ink-soft leading-relaxed text-[15px]">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
