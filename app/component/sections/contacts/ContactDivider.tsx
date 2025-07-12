interface DividerProps {
    color?: string;
    width?: string;
    margin?: string;
  }
  
  const ContactDivider = ({
    color = 'bg-black',
    width = 'w-24',
    margin = 'my-12',
  }: DividerProps) => (
    <div className={`${width} h-1 ${color} mx-auto ${margin}`} />
  );
  
  export default ContactDivider;
  