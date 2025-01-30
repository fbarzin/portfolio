import React from 'react';
import { FaApple, FaGlobe, FaGooglePlay } from 'react-icons/fa6';
import { Platform } from './ProjectCard';
import { cn } from '@/lib/utils';

export interface PlatformIconsProps
  extends React.HTMLAttributes<HTMLDivElement> {
  platforms: Platform[];
}

function PlatformIcons({ className, platforms, ...props }: PlatformIconsProps) {
  return (
    <div className={cn('flex flex-row items-center', className)} {...props}>
      {platforms.map((platform, index) => (
        <div key={index} className="mx-2">
          {platform.name === 'Android' ? (
            <FaGooglePlay className="text-2xl" />
          ) : platform.name === 'iOS' ? (
            <FaApple className="text-3xl" />
          ) : (
            <FaGlobe className="text-2xl" />
          )}
        </div>
      ))}
    </div>
  );
}

export default PlatformIcons;
