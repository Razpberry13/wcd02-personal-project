'use client';

import ProjectCarousel from './ProjectCarousel';

const Projects = () => (
  <section id="project" className="bg-[#d7d7d7] py-16 px-4 sm:px-8">
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-black ">
        Future Projects
      </h2>
      <ProjectCarousel />
    </div>
  </section>
);

export default Projects;
