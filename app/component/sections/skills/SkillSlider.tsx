'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import { usingNowIcons } from './skillData';

const SkillSlider = () => (
  <div className="pb-12">
    <h3 className="text-2xl font-bold mb-6 text-black font-montserrat">🧠 Using Now:</h3>
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 1500, disableOnInteraction: false }}
      loop={true}
      slidesPerView={4}
      breakpoints={{ 640: { slidesPerView: 5 }, 1024: { slidesPerView: 7 } }}
      spaceBetween={24}
    >
      {usingNowIcons.map(({ name, icon: Icon }, idx) => (
        <SwiperSlide key={idx}>
        <div className="group flex flex-col items-center justify-center text-center">
          <Icon className="text-black text-6xl group-hover:text-white transition duration-300 group-hover:drop-shadow-[0_0_8px_white]" />
        </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default SkillSlider;