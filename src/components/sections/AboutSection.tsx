import React from 'react';
import data from '../../../data/about.json';
import ImagesCarousel from '../ImagesCarousel';
import Image from 'next/image';
import SocialIcons from '../SocialIcons';

function AboutSection() {
  return (
    <section id="about">
      <div className="grid grid-cols-1 gap-14 text-center sm:text-left lg:grid-cols-5">
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
            email={undefined}
            goodreads={data.goodreads}
          />
        </div>
        <div
          className="sm:col-span-3"
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
      </div>
      <ImagesCarousel
        images={data.cats}
        width={400}
        height={400}
        className="mt-16"
      />
    </section>
  );
}

export default AboutSection;
