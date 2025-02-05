import React from 'react';
import {
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
  FaGithubSquare,
  FaGlobe,
} from 'react-icons/fa';
import { FaBluesky, FaEnvelope, FaGoodreads } from 'react-icons/fa6';

export type SocialIconsProps = {
  twitter: string | undefined;
  instagram: string | undefined;
  linkedin: string | undefined;
  github: string | undefined;
  bluesky: string | undefined;
  website: string | undefined;
  email: string | undefined;
  goodreads: string | undefined;
};

const SocialIcons = ({
  twitter,
  instagram,
  linkedin,
  github,
  bluesky,
  website,
  email,
  goodreads,
}: SocialIconsProps) => {
  return (
    <div className="mt-4 flex justify-center space-x-4">
      {twitter && (
        <a href={twitter} target="_blank" rel="noopener noreferrer">
          <FaTwitterSquare className="text-3xl text-blue-500 hover:text-blue-700" />
        </a>
      )}
      {instagram && (
        <a href={instagram} target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-3xl text-red-500 hover:text-red-700" />
        </a>
      )}
      {linkedin && (
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-blue-600 hover:text-blue-900" />
        </a>
      )}
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithubSquare className="text-3xl text-gray-200 hover:text-gray-700" />
        </a>
      )}
      {bluesky && (
        <a href={bluesky} target="_blank" rel="noopener noreferrer">
          <FaBluesky className="text-3xl text-blue-500 hover:text-blue-700" />
        </a>
      )}
      {website && (
        <a href={website} target="_blank" rel="noopener noreferrer">
          <FaGlobe className="text-3xl text-slate-400 hover:text-slate-600" />
        </a>
      )}
      {goodreads && (
        <a href={goodreads} target="_blank" rel="noopener noreferrer">
          <FaGoodreads className="text-3xl text-slate-400 hover:text-slate-600" />
        </a>
      )}
      {email && (
        <a href={`mailto:${email}`}>
          <FaEnvelope className="text-3xl text-blue-500 hover:text-blue-700" />
        </a>
      )}
    </div>
  );
};

export default SocialIcons;
