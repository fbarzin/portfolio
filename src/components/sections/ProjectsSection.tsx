import React from 'react';
import data from '../../../data/projects.json';
import ProjectCard from '../ProjectCard';

function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col items-start justify-center">
      <h2 className="my-8 text-start text-5xl font-extrabold">Projects</h2>
      <div className="flex flex-col items-center justify-center gap-2">
        {data.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
