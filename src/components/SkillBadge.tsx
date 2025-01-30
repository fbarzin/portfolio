import React from 'react';

export type SkillBadge = {
  skill: string;
  level: number;
  website: string;
};

function SkillBadge({ skillBadge }: { skillBadge: SkillBadge }) {
  return (
    <a href={skillBadge.website} target="_blank" rel="noreferrer">
      <div className="flex flex-row items-center rounded-lg border border-sky-900">
        <div className="rounded-l-md bg-sky-900 px-2 py-1 text-sm font-semibold">
          {skillBadge.skill}
        </div>
        <div className="rounded-r-md bg-sky-300 px-2 py-1 text-sm font-semibold text-black">
          {convertSkillLevelToString(skillBadge.level)}
        </div>
      </div>
    </a>
  );
}

/**
 * Converts the skill level to a string
 * @param level 1-5
 * @returns
 */
function convertSkillLevelToString(level: number): string {
  switch (level) {
    case 1:
      return 'Just Started';
    case 2:
      return 'Beginner';
    case 3:
      return 'Intermediate';
    case 4:
      return 'Advanced';
    case 5:
      return 'Expert';
    default:
      return 'Unknown';
  }
}

export default SkillBadge;
