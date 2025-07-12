import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaGitAlt,
    FaBootstrap,
  } from 'react-icons/fa';
  import {
    SiCplusplus,
    SiFigma,
    SiTypescript,
    SiMysql,
    SiMongodb,
    SiPrisma,
    SiGraphql,
    SiDocker,
    SiNodedotjs,
  } from 'react-icons/si';
  import { IconType } from 'react-icons';
  
  export interface Skill {
    name: string;
    icon: IconType;
  }
  
  export const usingNowIcons: Skill[] = [
    { name: 'HTML5', icon: FaHtml5 },
    { name: 'CSS3', icon: FaCss3Alt },
    { name: 'JavaScript', icon: FaJs },
    { name: 'React', icon: FaReact },
    { name: 'Git', icon: FaGitAlt },
    { name: 'Bootstrap', icon: FaBootstrap },
    { name: 'C++', icon: SiCplusplus },
    { name: 'Figma', icon: SiFigma },
  ];
  
  export const learningSkills: Skill[] = [
    { name: 'Node.js', icon: SiNodedotjs },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'MongoDB', icon: SiMongodb },
    { name: 'MySQL', icon: SiMysql },
    { name: 'Prisma', icon: SiPrisma },
    { name: 'GraphQL', icon: SiGraphql },
    { name: 'Docker', icon: SiDocker },
  ];
  