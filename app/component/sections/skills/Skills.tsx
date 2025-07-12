'use client';

import SkillSlider from './SkillSlider';
import SkillGrid from './SkillGrid';
import { learningSkills } from './skillData';

const Skills = () => (
  <section id="skills" className="bg-[#d7d7d7] py-20 px-4 sm:px-8">
    <div className="max-w-6xl mx-auto space-y-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-black font-montserrat">
        Skills
      </h2>

      <SkillSlider />
      <SkillGrid title="🚀 Learning" skills={learningSkills} />
    </div>
  </section>
);

export default Skills;
