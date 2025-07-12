import { Mail, Github, Linkedin } from 'lucide-react';

const socials = [
  {
    icon: Mail,
    href: 'mailto:farrazfauzan42@gmail.com',
    label: 'Email Farraz',
  },
  {
    icon: Github,
    href: 'https://github.com/Razpberry13',
    label: 'Farraz on GitHub',
  },
  {
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/farraz-fauzan-daeng-mangali-477347356/',
    label: 'Farraz on LinkedIn',
  },
];

const HeroSocial = () => (
  <div className="flex space-x-4 z-10">
    {socials.map(({ icon: Icon, href, label }) => (
      <a
        key={label}
        href={href}
        aria-label={label}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#c4c4c4] p-3 rounded-md hover:bg-gray-400 transition-colors"
      >
        <Icon className="w-6 h-6 text-black" />
      </a>
    ))}
  </div>
);

export default HeroSocial;
