import React from 'react';
import data from '../../../data/about.json';

function AboutSection() {
  return (
    <section
      id="about"
      className="grid grid-cols-1 gap-8 p-8 text-center sm:grid-cols-3 sm:text-left"
    >
      <div className="sm:col-span-2">
        <h1 className="text-6xl font-extrabold">{data.name}</h1>
        <p className="mt-4 text-xl text-gray-300">{data.title}</p>
        <p className="mt-4 text-base text-gray-400">{data.tagline}</p>
      </div>
      <div>{data.description}</div>
    </section>
  );
}

export default AboutSection;
