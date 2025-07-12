'use client';

import Image from 'next/image';

interface Props {
  title: string;
  image: string;
  stack: string[];
  description: string;
  demoUrl?: string;
  codeUrl?: string;
}

const ProjectCard = ({
  title,
  image,
  stack,
  description,
  demoUrl,
  codeUrl,
}: Props) => (
  <div className="group bg-[#2e2e2e] border border-black rounded-xl p-6 shadow-md hover:shadow-xl transform transition duration-300 hover:scale-[1.03]">
    <Image
      src={image}
      alt={`${title} preview`}
      title={title}
      width={640}
      height={360}
      className="rounded-md mb-4 object-cover w-full h-[180px] transition group-hover:brightness-125 group-hover:scale-105"
    />
    
    <h3 className="text-xl font-bold text-black group-hover:text-white transition duration-300">
      {title}
    </h3>
    
    <div className="mt-2 flex flex-wrap gap-2">
      {stack.map((tech) => (
        <span
          key={tech}
          className="text-xs bg-black text-white px-2 py-1 rounded-sm group-hover:bg-white group-hover:text-black transition"
        >
          {tech}
        </span>
      ))}
    </div>

    <p className="mt-4 text-sm text-gray-600 group-hover:text-white leading-relaxed">
      {description}
    </p>

    <div className="mt-4 flex gap-4 flex-wrap">
      {demoUrl && (
        <a
          href={demoUrl}
          aria-label={`${title} Live Demo`}
          className="text-sm px-4 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>
      )}
      {codeUrl && (
        <a
          href={codeUrl}
          aria-label={`${title} Source Code`}
          className="text-sm px-4 py-2 bg-black text-white rounded-md hover:bg-white hover:text-black transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          Source Code
        </a>
      )}
    </div>
  </div>
);

export default ProjectCard;
