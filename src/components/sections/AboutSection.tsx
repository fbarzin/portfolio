import React from 'react';
import data from '../../../data/about.json';
import ImagesCarousel from '../ImagesCarousel';
import Image from 'next/image';
import SocialIcons from '../SocialIcons';
import { Button } from '../ui/button';
import { ContactRound, CornerRightUpIcon } from 'lucide-react';

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
          <a
            href="mailto:farzadbarzin@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <Button
              variant="default"
              className="mt-6 transform font-semibold text-white transition duration-300 hover:scale-105"
            >
              Contact Me
              <ContactRound className="inline-block" />
            </Button>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer">
            <Button
              className="mt-2 transform bg-emerald-200/10 px-3 font-semibold text-emerald-400 transition duration-300 hover:scale-105 hover:text-emerald-400"
              variant="ghost"
            >
              View Resume
              <CornerRightUpIcon className="inline-block" />
            </Button>
          </a>
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
