import React from 'react';

export type Experience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  description: string;
  location: string;
  website: string;
  tags: string[];
  products: string[];
};

function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <a href={experience.website} target="_blank" rel="noreferrer">
      <div className="group rounded-lg p-4 transition duration-300 hover:border hover:border-gray-700 hover:bg-gray-900 hover:shadow-lg">
        <div>
          <h3 className="mb-2 text-xl font-bold group-hover:text-sky-400">
            {experience.company}
          </h3>
          <p className="text-base font-semibold">{experience.position}</p>
          <p className="text-sm text-gray-400">
            {experience.startDate} - {experience.endDate}
          </p>
          <p className="mt-4 text-base text-gray-400">
            {experience.description}
          </p>
          <div className="mt-4 flex flex-row flex-wrap gap-2">
            {experience.tags.map((badge) => (
              <span
                key={badge}
                className="rounded-full bg-sky-900/50 px-4 py-1 text-sm font-semibold text-sky-400"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}

export default ExperienceCard;
