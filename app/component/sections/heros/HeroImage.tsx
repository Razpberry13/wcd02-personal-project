'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroImage = () => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
    className="absolute bottom-[-20px] left-0 right-0 flex justify-center lg:justify-end px-4 lg:px-12 z-10"
  >
    <div className="relative w-[300px] sm:w-[400px] lg:w-[540px] h-[540px]">
    <Image
        src="/assets/Photo.png"
        alt="Farraz crouching pose"
        width={540}
        height={540}
        className="object-contain drop-shadow-xl transition-transform duration-300 hover:scale-105"
      />
    </div>
  </motion.div>
);

export default HeroImage;
