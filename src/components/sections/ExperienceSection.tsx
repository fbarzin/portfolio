import React from 'react';
import data from '../../../data/experience.json';
import ExperienceCard from '../ExperienceCard';
import { Button } from '../ui/button';
import { CornerRightUpIcon } from 'lucide-react';

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
      <a href="/resume.pdf" target="_blank" rel="noreferrer">
        <Button
          className="my-4 transform px-2 font-semibold text-gray-300 transition duration-300 hover:scale-105 hover:text-emerald-400"
          variant="ghost"
        >
          View Full Resume
          <CornerRightUpIcon className="inline-block" />
        </Button>
      </a>
    </section>
  );
}

export default ExperienceSection;
