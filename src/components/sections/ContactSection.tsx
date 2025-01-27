import React from 'react';

function ContactSection() {
  return (
    <section id="contact" className="flex flex-col items-center justify-center">
      <h2 className="text-4xl font-bold">Contact</h2>
      <div className="flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">Email</h3>
          <p className="text-xl">
            <a href="mailto:fbarzin84@gmail.com">email</a>
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <h3 className="text-2xl font-bold">LinkedIn</h3>
          <p className="text-xl">
            <a href="https://www.linkedin.com/in/farzad-barzin/">LinkedIn</a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
