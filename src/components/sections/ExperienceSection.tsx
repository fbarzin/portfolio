import React from 'react';

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center"
    >
      <h2 className="text-4xl font-bold">Experience</h2>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">Software Engineer</h3>
          <p className="text-xl">Google</p>
          <p className="text-lg">2020 - Present</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">Software Engineer</h3>
          <p className="text-xl">Facebook</p>
          <p className="text-lg">2018 - 2020</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">Software Engineer</h3>
          <p className="text-xl">Microsoft</p>
          <p className="text-lg">2016 - 2018</p>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
