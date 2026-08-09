import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar } from 'react-icons/fi';

const ExperienceTimeline = ({ items }) => {
  return (
    <div className="relative pl-8">
      <div className="absolute left-[7px] top-2 bottom-2 w-px bg-surface-border" />

      <div className="space-y-6">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
            className="relative"
          >
            <span className="absolute -left-8 top-1.5 h-3.5 w-3.5 rounded-full bg-accent ring-4 ring-primary-50" />

            <div className="card-surface p-6">
              <div className="flex items-center gap-2 text-xs font-medium text-accent-dark mb-2">
                <FiCalendar size={13} /> {item.period}
              </div>
              <h3 className="font-display font-semibold text-ink mb-1">{item.role}</h3>
              <p className="flex items-center gap-1.5 text-sm text-ink-soft mb-4">
                <FiBriefcase size={13} className="text-ink-faint" /> {item.org}
              </p>
              <ul className="space-y-1.5">
                {item.points.map((point) => (
                  <li key={point} className="text-sm text-ink-soft leading-relaxed flex gap-2">
                    <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
