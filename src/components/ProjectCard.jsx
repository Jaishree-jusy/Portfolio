import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      className="card-surface overflow-hidden transition-shadow duration-200 hover:shadow-lift flex flex-col"
    >
      {/* Thumbnail */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:26px_26px] opacity-50" />
        <div className="absolute inset-0 grid place-items-center px-6">
          <span className="font-display font-semibold text-xl text-accent-dark/80 text-center">
            {project.title}
          </span>
        </div>
        <span className="absolute top-4 left-4 px-2.5 py-1 rounded-md bg-white/90 backdrop-blur text-[11px] font-medium text-ink-soft border border-surface-border">
          {project.type}
        </span>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display font-semibold text-ink mb-2">{project.title}</h3>
        <p className="text-sm text-ink-soft leading-relaxed mb-4">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-1.5 mb-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="px-2.5 py-1 rounded-md bg-surface-bg border border-surface-border text-[11px] font-medium text-ink-faint"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </motion.article>
  );
};

export default ProjectCard;
