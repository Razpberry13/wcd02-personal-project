'use client';

import Image from 'next/image';
import { useState } from 'react';

const AboutExplore = () => {
  const [visible, setVisible] = useState(false);

  return (
    <section className="mt-12 text-center max-w-6xl mx-auto">
      {/* EXPLORE Button */}
      <button
        onClick={() => setVisible(!visible)}
        aria-label={visible ? 'Close cards' : 'Explore cards'}
        className="text-xl font-semibold mb-6 px-6 py-3 border border-black bg-black text-white hover:bg-[#d7d7d7] hover:text-black transition duration-300 rounded-md"
      >
        {visible ? 'Close' : 'EXPLORE'}
      </button>

      {/* Service Cards */}
      {visible && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mt-12">
          
          {/* Card: Design */}
          <div className="group bg-[#2e2e2e] border border-black rounded-xl px-12 py-10 space-y-6 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.06]">
            <div className="flex justify-center items-center gap-2">
              <Image
                src="/assets/design.png"
                alt="Design Icon"
                width={56}
                height={56}
                className="transition duration-300 group-hover:brightness-125 group-hover:saturate-150 group-hover:drop-shadow-[0_0_10px_white]"
              />
              <h3 className="text-2xl font-bold text-black group-hover:text-white group-hover:drop-shadow-[0_0_6px_white] transition duration-300">
                Design
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-black group-hover:text-white group-hover:drop-shadow-[0_0_4px_white] transition duration-300">
              I can design your site based on your needs or start from scratch with consultative feedback throughout.
            </p>
          </div>

          {/* Card: Development */}
          <div className="group bg-[#2e2e2e] border border-black rounded-xl px-12 py-10 space-y-6 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.06]">
            <div className="flex justify-center items-start gap-2">
              <Image
                src="/assets/development.png"
                alt="Development Icon"
                width={56}
                height={56}
                className="transition duration-300 group-hover:brightness-125 group-hover:saturate-150 group-hover:drop-shadow-[0_0_10px_white]"
              />
              <h3 className="text-2xl font-bold text-black group-hover:text-white group-hover:drop-shadow-[0_0_6px_white] transition duration-300">
                Development
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-black group-hover:text-white group-hover:drop-shadow-[0_0_4px_white] transition duration-300">
              I build robust React & Next.js web apps with clean architecture, modular code, and scalable UI components.
            </p>
          </div>

          {/* Card: Maintenance */}
          <div className="group bg-[#2e2e2e] border border-black rounded-xl px-12 py-10 space-y-6 shadow-md hover:shadow-xl transition duration-300 transform hover:scale-[1.06]">
            <div className="flex justify-center items-center gap-2">
              <Image
                src="/assets/maintanance.png"
                alt="Maintenance Icon"
                width={56}
                height={56}
                className="transition duration-300 group-hover:brightness-125 group-hover:saturate-150 group-hover:drop-shadow-[0_0_10px_white]"
              />
              <h3 className="text-2xl font-bold text-black group-hover:text-white group-hover:drop-shadow-[0_0_6px_white] transition duration-300">
                Maintenance
              </h3>
            </div>
            <p className="text-lg leading-relaxed text-black group-hover:text-white group-hover:drop-shadow-[0_0_4px_white] transition duration-300">
              I provide long-term stability by monitoring performance, refactoring outdated features, and maintaining clean code.
            </p>
          </div>

        </div>
      )}
    </section>
  );
};

export default AboutExplore;
