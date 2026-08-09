import { motion } from 'framer-motion';
import { FiAward, FiBookOpen } from 'react-icons/fi';
import { education, achievements, certifications } from '../constants/data';

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, delay: i * 0.07, ease: 'easeOut' },
  }),
};

const Credentials = () => {
  return (
    <div className="mt-10 grid md:grid-cols-2 gap-6">
      {/* Education */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="card-surface p-6"
      >
        <div className="flex items-center gap-2.5 mb-4">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary-50 text-accent-dark">
            <FiBookOpen size={16} />
          </span>
          <h3 className="font-display font-semibold text-ink text-sm">Education</h3>
        </div>
        <div className="space-y-4">
          {education.map((item) => (
            <div key={item.id} className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-ink">{item.school}</p>
                <p className="text-xs text-ink-faint mt-0.5">{item.degree}</p>
              </div>
              <div className="text-right shrink-0">
                <p className="text-xs text-ink-faint">{item.period}</p>
                <p className="text-xs font-semibold text-accent-dark mt-0.5">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Achievements + Certifications */}
      <motion.div
        variants={fadeUp}
        custom={1}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="card-surface p-6"
      >
        <div className="flex items-center gap-2.5 mb-4">
          <span className="grid place-items-center h-9 w-9 rounded-lg bg-primary-50 text-accent-dark">
            <FiAward size={16} />
          </span>
          <h3 className="font-display font-semibold text-ink text-sm">Achievements & Certifications</h3>
        </div>

        <ul className="space-y-2 mb-5">
          {achievements.map((item) => (
            <li key={item.id} className="text-sm text-ink-soft leading-relaxed flex gap-2">
              <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
              <span>
                <span className="font-medium text-ink">{item.title}</span> — {item.description}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5">
          {certifications.map((cert) => (
            <span
              key={cert.id}
              title={cert.org}
              className="px-2.5 py-1 rounded-md bg-surface-bg border border-surface-border text-[11px] font-medium text-ink-faint"
            >
              {cert.name}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Credentials;
