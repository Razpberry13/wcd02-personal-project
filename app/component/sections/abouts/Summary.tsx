'use client';

import { useState } from 'react';

const Summary = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-[#1d1d1d] text-white px-4 sm:px-8 py-10 flex flex-col items-start">
      <div className="max-w-5xl w-full">
        <h2 className="text-2xl font-bold mb-6">My Journey</h2>

        <div className="border border-white/30 rounded-md p-6 backdrop-blur-sm bg-white/5 space-y-6">
          <p className="text-base text-gray-300 leading-relaxed">
            I&apos;m a passionate data science student with a deep curiosity for uncovering insights from complex datasets. My journey combines analytical thinking with creative problem-solving to transform raw data into meaningful stories.
          </p>

          {showMore && (
            <p className="text-base text-gray-300 leading-relaxed animate-fade-in">
              Throughout my academic path, I’ve explored various domains—from data wrangling and database design to building visual dashboards and writing code to automate workflows. I continuously improve, experiment with new tools, and apply insights where data impacts real-world challenges.
            </p>
          )}

          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-4 px-8 py-3 border-x-2 border-white text-white font-medium rounded-md hover:bg-white hover:text-[#1d1d1d] transition duration-300"
          >
            {showMore ? 'Show Less' : 'Read More'}
          </button>
        </div>
        
      </div>
    </section>
  );
};

export default Summary;
