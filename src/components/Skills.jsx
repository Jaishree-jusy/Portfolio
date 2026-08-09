import SectionHeading from './SectionHeading';
import SkillCard from './SkillCard';
import { skillCategories } from '../constants/data';

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-surface-card">
      <div className="container-content">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A snapshot of the languages, frameworks, and tools I've built with across academic and personal projects."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
