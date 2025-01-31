import { getSkillBadge } from '@/lib/skill-badge.utils';
import React from 'react';

export type SkillBadge = {
  skill: string;
  website: string;
};

function SkillBadge({ skillBadge }: { skillBadge: SkillBadge }) {
  const skillBadgeData = getSkillBadge(skillBadge.skill);
  if (!skillBadgeData) {
    return <></>;
  }

  const skillBadgeColor = skillBadgeData.color;
  const foregroundColor = getContrastColor(skillBadgeColor);

  return (
    <a href={skillBadge.website} target="_blank" rel="noreferrer">
      <div
        className={`text-md flex flex-row items-center rounded-sm border-2 border-solid border-gray-700 px-2 py-1 font-semibold`}
        style={{
          backgroundColor: skillBadgeColor,
          color: foregroundColor,
        }}
      >
        <div
          className="mr-2 h-4 w-4"
          dangerouslySetInnerHTML={{ __html: skillBadgeData.logo }}
          style={{ fill: foregroundColor }}
        />
        {skillBadgeData.label}
      </div>
    </a>
  );
}

function getContrastColor(hex: string): string {
  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  // Calculate contrast color
  const contrast = luminance > 0.5 ? '#000000' : '#FFFFFF';

  // Specific case for colors close to React's color
  if (
    Math.abs(r - 97) < 10 &&
    Math.abs(g - 218) < 10 &&
    Math.abs(b - 251) < 10
  ) {
    return '#000000';
  }

  return contrast;
}

export default SkillBadge;
