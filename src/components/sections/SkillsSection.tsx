import React from 'react';
import data from '../../../data/skills.json';
import SkillBadge from '../SkillBadge';

function SkillsSection() {
  return (
    <section id="skills" className="flex flex-col items-start justify-center">
      <h2 className="text-4xl font-bold">Skills</h2>
      <div className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
        {data.map((skill) => (
          <SkillBadge key={skill.skill} skillBadge={skill} />
        ))}
      </div>
    </section>
  );
}

export default SkillsSection;
