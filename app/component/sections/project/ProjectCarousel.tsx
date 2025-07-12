'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

import ProjectCard from './ProjectCard';
import { projects } from './projectData';

const ProjectCarousel = () => (
  <div className="px-4 py-8">
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop={true}
      slidesPerView={1}
      spaceBetween={24}
      breakpoints={{
        640: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.title}>
          <ProjectCard {...project} />
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default ProjectCarousel;
