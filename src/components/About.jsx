import { motion } from 'framer-motion';
import { FiTarget, FiHeart, FiZap } from 'react-icons/fi';
import SectionHeading from './SectionHeading';
import { about, personalInfo } from '../constants/data';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
};

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container-content">
        <SectionHeading
          eyebrow="About Me"
          title="A little about my journey so far"
          description="Where I'm coming from, what drives me, and the kind of work I like building."
        />

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 items-start">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="card-surface p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary-100 text-accent">
                <FiTarget size={18} />
              </span>
              <h3 className="font-display font-semibold text-ink">Career Objective</h3>
            </div>
            <p className="text-ink-soft leading-relaxed text-sm">{about.objective}</p>

            <div className="flex items-center gap-3 mt-8 mb-4">
              <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary-100 text-accent">
                <FiHeart size={18} />
              </span>
              <h3 className="font-display font-semibold text-ink">What I Enjoy Building</h3>
            </div>
            <p className="text-ink-soft leading-relaxed text-sm">{about.enjoys}</p>
          </motion.div>

          <div className="space-y-8">
            <motion.div
              variants={fadeUp}
              custom={1}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="font-display font-semibold text-ink mb-3">Professional Summary</h3>
              <p className="text-ink-soft leading-relaxed">{personalInfo.summary}</p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              custom={2}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="grid place-items-center h-10 w-10 rounded-xl bg-primary-100 text-accent">
                  <FiZap size={18} />
                </span>
                <h3 className="font-display font-semibold text-ink">Strengths</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {about.strengths.map((strength, i) => (
                  <motion.span
                    key={strength}
                    variants={fadeUp}
                    custom={i + 3}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="px-3 py-1.5 rounded-md bg-primary-50 text-accent-dark text-sm font-medium border border-primary-100"
                  >
                    {strength}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
