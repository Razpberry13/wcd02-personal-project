'use client';

import AboutExplore from "./AboutExplore";

const About = () => (
  <section id="about" className="bg-[#d7d7d7] py-16 px-4 sm:px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-black font-montserrat">
        About Me
      </h2>
      <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
        I’m a data science student with a strong foundation in frontend development.
        I enjoy building visually engaging and responsive user interfaces using tools
        like React, Next.js, Tailwind CSS, and Framer Motion. My approach combines
        clean code architecture with attention to aesthetic detail — always aiming to
        deliver seamless experiences. Beyond coding, I explore ways to turn data into
        insight, blending technology with storytelling.
      </p>
      <AboutExplore />
    </div>
  </section>
);

export default About;
