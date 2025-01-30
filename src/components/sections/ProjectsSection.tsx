import React from 'react';

function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col items-start justify-center">
      <h2 className="my-8 text-start text-5xl font-extrabold">Projects</h2>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">Project 1</h3>
          <p className="text-xl">Description 1</p>
          <a href="https://example.com" className="text-blue-500">
            Link
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">Project 2</h3>
          <p className="text-xl">Description 2</p>
          <a href="https://example.com" className="text-blue-500">
            Link
          </a>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">Project 3</h3>
          <p className="text-xl">Description 3</p>
          <a href="https://example.com" className="text-blue-500">
            Link
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
