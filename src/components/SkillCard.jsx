import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';

const SkillCard = ({ category, index }) => {
  const Icon = FiIcons[category.icon] || FiIcons.FiCode;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -3 }}
      className="card-surface p-6 transition-shadow duration-200 hover:shadow-lift"
    >
      <div className="flex items-center gap-3 mb-4">
        <span className="grid place-items-center h-10 w-10 rounded-lg bg-primary-50 text-accent-dark shrink-0">
          <Icon size={18} />
        </span>
        <h3 className="font-display font-semibold text-ink text-[15px]">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill.name}
            className="px-3 py-1.5 rounded-md bg-surface-bg border border-surface-border text-xs font-medium text-ink-soft"
          >
            {skill.name}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCard;
