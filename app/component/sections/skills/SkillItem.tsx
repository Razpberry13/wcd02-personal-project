import { IconType } from 'react-icons';

interface Props {
  name: string;
  icon: IconType;
}

const SkillItem = ({ name, icon: Icon }: Props) => (
  <div
    className="group bg-[#2e2e2e] border border-black rounded-lg p-6 text-center shadow-md hover:shadow-xl
               transform transition duration-300 hover:scale-[1.05] cursor-default"
    role="listitem"
    aria-label={`Skill: ${name}`}
  >
    <Icon
      className="mx-auto text-4xl text-black group-hover:text-white group-hover:drop-shadow-[0_0_8px_white]
                 transition duration-300 mb-3"
      title={name}
    />
    <h4 className="text-lg font-semibold text-black group-hover:text-white transition duration-300
                   group-hover:drop-shadow-[0_0_6px_white]">
      {name}
    </h4>
  </div>
);

export default SkillItem;
