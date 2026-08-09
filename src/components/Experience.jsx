import SectionHeading from './SectionHeading';
import ExperienceTimeline from './ExperienceTimeline';
import Credentials from './Credentials';
import { experience } from '../constants/data';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-surface-card">
      <div className="container-content">
        <SectionHeading
          eyebrow="Experience"
          title="Experience & background"
          description="Industry experience, academic background, and recognitions."
        />

        <ExperienceTimeline items={experience} />
        <Credentials />
      </div>
    </section>
  );
};

export default Experience;
