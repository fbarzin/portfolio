import React from 'react';
import data from '../../../data/experience.json';
import ExperienceCard from '../ExperienceCard';

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex flex-col items-start justify-center"
    >
      <h2 className="my-8 text-start text-5xl font-extrabold">Experience</h2>
      <div className="relative flex flex-col gap-8">
        {data.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;
