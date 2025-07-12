'use client';

import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';

const HeroText = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.3 }}
    className="text-center lg:text-left z-10 mb-8"
  >
    <p className="text-2xl sm:text-3xl font-semibold text-black mb-2">
      Hi, I am
    </p>

    {/* Typing Effect */}
    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 leading-tight">
      <Typewriter
        words={['Farraz Fauzan Mangali']}
        loop={false}
        cursor
        cursorStyle="|"
        typeSpeed={90}
        deleteSpeed={0}
        delaySpeed={2000}
      />
    </h1>

    <p className="text-lg sm:text-xl lg:text-2xl font-medium text-black hover:text-gray-500 transition-colors">
      Data Science Student
    </p>
  </motion.div>
);

export default HeroText;
