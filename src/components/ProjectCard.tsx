import { cn } from '@/lib/utils';
import React from 'react';
import ImagesCarousel from './ImagesCarousel';
import PlatformIcons from './PlatformIcons';

export type Platform = {
  name: string;
  url: string;
};

export type Project = {
  id: number;
  name: string;
  company: string;
  description: string;
  platforms: Platform[];
  role: string;
  technologies: string[];
  images: string[];
};

export interface ProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  project: Project;
}

function ProjectCard({ className, project, ...props }: ProjectCardProps) {
  return (
    <div className={cn('w-full', className)} {...props}>
      <div className="group my-2 rounded-lg border border-gray-800 px-4 py-2 transition duration-300 hover:border hover:border-gray-700 hover:bg-gray-900 hover:shadow-lg">
        <div className="flex flex-row items-center">
          <h2 className="my-4 text-2xl font-bold group-hover:text-sky-400">
            {project.name} - {project.company}
          </h2>
          <PlatformIcons platforms={project.platforms} />
        </div>
        <h3 className="text-lg font-semibold text-gray-400">
          Role: {project.role}
        </h3>
        <div
          className="text-md py-4 text-gray-400 group-hover:text-gray-100"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <div className="my-1 flex flex-row flex-wrap gap-2">
          {project.technologies.map((technology, index) => (
            <span
              key={index}
              className="rounded-full bg-sky-900/50 px-3 py-1 text-sm font-semibold text-sky-400"
            >
              {technology}
            </span>
          ))}
        </div>
        <ImagesCarousel images={project.images} width={400} height={800} />
      </div>
    </div>
  );
}

export default ProjectCard;
