import { motion } from 'framer-motion';
import { FiDownload, FiGithub, FiLinkedin, FiArrowRight, FiMapPin } from 'react-icons/fi';
import { personalInfo } from '../constants/data';
import { useTypewriter } from '../hooks/useTypewriter';
import { scrollToSection } from '../utils/scrollTo';

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const Hero = () => {
  const role = useTypewriter(personalInfo.roles);

  return (
    <section id="home" className="pt-32 pb-16 md:pt-36 md:pb-20">
      <div className="container-content grid lg:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        {/* Left: intro */}
        <div>
          <motion.p variants={fadeUp} initial="hidden" animate="show" className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-primary-500" />
            Available for opportunities
          </motion.p>

          <motion.h1
            variants={fadeUp}
            custom={1}
            initial="hidden"
            animate="show"
            className="mt-5 text-4xl sm:text-5xl font-display font-semibold text-ink leading-[1.15] tracking-tight"
          >
            {personalInfo.name}
          </motion.h1>

          <motion.div
            variants={fadeUp}
            custom={2}
            initial="hidden"
            animate="show"
            className="mt-3 h-7 flex items-center text-lg font-medium text-accent-dark"
          >
            {role}
            <span className="inline-block w-[2px] h-5 bg-accent ml-1 opacity-70" />
          </motion.div>

          <motion.p
            variants={fadeUp}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-5 max-w-lg text-ink-soft leading-relaxed"
          >
            {personalInfo.summary}
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
             href={personalInfo.resumeFile}
             target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
>
  <FiDownload size={15} /> Resume
</a>
            <button
              onClick={() => scrollToSection('#projects')}
              className="btn-secondary"
            >
              View Projects <FiArrowRight size={15} />
            </button>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid place-items-center h-10 w-10 rounded-lg border border-surface-border text-ink-soft hover:border-accent hover:text-accent-dark transition-colors"
            >
              <FiGithub size={17} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid place-items-center h-10 w-10 rounded-lg border border-surface-border text-ink-soft hover:border-accent hover:text-accent-dark transition-colors"
            >
              <FiLinkedin size={17} />
            </a>
          </motion.div>
        </div>

        {/* Right: profile card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="relative"
        >
          <div className="card-surface p-8 relative overflow-hidden">
            <span className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-primary-400 to-accent" />

            <div className="flex items-center gap-4">
              <span className="grid place-items-center h-16 w-16 rounded-xl bg-primary-50 text-accent-dark font-display font-bold text-xl border border-primary-100">
                {personalInfo.initials}
              </span>
              <div>
                <p className="font-display font-semibold text-ink">{personalInfo.name}</p>
                <p className="flex items-center gap-1 text-sm text-ink-faint mt-0.5">
                  <FiMapPin size={13} /> {personalInfo.location}
                </p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-surface-bg border border-surface-border p-4">
                <p className="text-xs text-ink-faint">CGPA</p>
                <p className="text-xl font-display font-semibold text-ink mt-1">9.38</p>
              </div>
              <div className="rounded-lg bg-surface-bg border border-surface-border p-4">
                <p className="text-xs text-ink-faint">HackerRank</p>
                <p className="text-xl font-display font-semibold text-ink mt-1">Silver</p>
              </div>
            </div>

            <div className="mt-4 rounded-lg bg-primary-50 border border-primary-100 p-4">
              <p className="text-xs text-ink-faint">Focus</p>
              <p className="text-sm font-medium text-accent-dark mt-1">
                Python &middot; MERN Stack &middot; Machine Learning
              </p>
            </div>
          </div>

          {/* subtle floating accent */}
          <motion.span
            aria-hidden="true"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute -top-3 -right-3 h-6 w-6 rounded-md bg-primary-100 border border-primary-200"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
