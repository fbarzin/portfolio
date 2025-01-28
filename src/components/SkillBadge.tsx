import React from 'react';

export type SkillBadge = {
  skill: string;
  level: number;
  freshness: number;
  website: string;
};

function SkillBadge({ skillBadge }: { skillBadge: SkillBadge }) {
  return (
    <a href={skillBadge.website} target="_blank" rel="noreferrer">
      <div className="flex flex-row items-center rounded-lg border border-sky-900 bg-gray-900">
        <div className="rounded-l-md bg-gray-800 px-2 py-1 text-sm font-semibold">
          {skillBadge.skill}
        </div>
        <div className="bg-sky-800/50 px-2 py-1 text-sm text-gray-200">
          {convertSkillLevelToString(skillBadge.level)}
        </div>
        <div className="px-2 py-1 text-sm text-gray-300">
          {convertFreshnessToString(skillBadge.freshness)}
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
      return 'Beginner';
    case 2:
      return 'Intermediate';
    case 3:
      return 'Advanced';
    case 4:
      return 'Expert';
    case 5:
      return 'Guru';
    default:
      return 'Unknown';
  }
}

/**
 * Converts the freshness level to a string
 * @param level 1-5
 * @returns
 */
function convertFreshnessToString(level: number): string {
  switch (level) {
    case 1:
      return 'Rusty 🏜️';
    case 2:
      return 'Dusty 🏚️';
    case 3:
      return 'Fresh 🌱';
    case 4:
      return 'Sharp 🗡️';
    case 5:
      return 'Cutting Edge 🪓';
    default:
      return 'Unknown ❓';
  }
}

export default SkillBadge;
