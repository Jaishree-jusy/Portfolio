import SectionHeading from './SectionHeading';
import ProjectCard from './ProjectCard';
import { projects } from '../constants/data';

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container-content">
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A few projects spanning full-stack development and applied machine learning."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
