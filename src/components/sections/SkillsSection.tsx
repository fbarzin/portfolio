import React from 'react';
import data from '../../../data/skills.json';
import SkillBadge from '../SkillBadge';

function SkillsSection() {
  return (
    <section id="skills" className="flex flex-col items-start justify-center">
      <h2 className="my-8 text-start text-5xl font-extrabold">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-x-4 gap-y-4">
        {data.map((skill) => (
          <SkillBadge key={skill.skill} skillBadge={skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
