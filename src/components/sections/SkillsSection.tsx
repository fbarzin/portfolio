import React from 'react';

function SkillsSection() {
  return (
    <section id="skills" className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold">Skills</h2>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">Frontend</h3>
          <p className="text-xl">React</p>
          <p className="text-xl">Next.js</p>
          <p className="text-xl">Tailwind CSS</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">Backend</h3>
          <p className="text-xl">Node.js</p>
          <p className="text-xl">Express</p>
          <p className="text-xl">PostgreSQL</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">DevOps</h3>
          <p className="text-xl">Docker</p>
          <p className="text-xl">Kubernetes</p>
          <p className="text-xl">AWS</p>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
