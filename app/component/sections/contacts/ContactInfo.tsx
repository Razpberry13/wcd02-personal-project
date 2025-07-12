import { MailIcon, LinkedinIcon } from 'lucide-react'; // atau react-icons

const ContactInfo = () => (
  <div className="space-y-4">
    <div className="flex items-center gap-3">
      <MailIcon />
      <span>farraz@example.com</span>
    </div>
    <div className="flex items-center gap-3">
      <LinkedinIcon />
      <a href="https://linkedin.com/in/farraz" className="hover:underline">
        linkedin.com/in/farraz
      </a>
    </div>
  </div>
);

export default ContactInfo;
