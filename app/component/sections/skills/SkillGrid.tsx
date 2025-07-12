'use client';

import { IconType } from 'react-icons';
import SkillItem from './SkillItem';

interface Skill {
  name: string;
  icon: IconType;
}

interface Props {
  title: string;
  skills: Skill[];
}

const SkillGrid = ({ title, skills }: Props) => (
  <div className="mb-12">
    <h3 className="text-2xl sm:text-3xl font-bold mb-6 text-black font-montserrat">
      {title}
    </h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
      {skills.map((skill) => (
        <SkillItem key={skill.name} {...skill} />
      ))}
    </div>
  </div>
);

export default SkillGrid;
