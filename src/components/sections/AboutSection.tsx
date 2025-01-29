import React from 'react';
import data from '../../../data/about.json';
import CatImagesCarousel from '../CatImagesCarousel';
import Image from 'next/image';
import SocialIcons from '../SocialIcons';

function AboutSection() {
  return (
    <section id="about">
      <div className="grid grid-cols-1 gap-14 text-center sm:grid-cols-5 sm:text-left">
        <div className="flex flex-col items-center sm:col-span-2">
          <Image
            src="/images/farzad.jpg"
            alt="Profile"
            width={200}
            height={200}
            className="rounded-full border border-gray-800"
          />
          <h1 className="mt-4 text-5xl font-extrabold">{data.name}</h1>
          <p className="mt-2 text-xl text-gray-300">{data.title}</p>
          <SocialIcons
            twitter={data.twitter}
            linkedin={data.linkedin}
            instagram={undefined}
            github={data.github}
            bluesky={undefined}
            website={undefined}
            email={data.email}
          />
        </div>
        <div className="sm:col-span-3">{data.description}</div>
      </div>
      <CatImagesCarousel images={data.cats} className="mt-16" />
    </section>
  );
}

export default AboutSection;
