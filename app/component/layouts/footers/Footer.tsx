import FooterTopButton from "./FooterTopButton";
import FooterSocials from "./FooterSocials";
import FooterCopyright from "./FooterCopyright";

const Footer = () => (
  <footer className="bg-black text-white py-8">
    <div className="max-w-6xl mx-auto px-4 text-center">
      <FooterTopButton />
      <FooterSocials />
      <FooterCopyright />
    </div>
  </footer>
);

export default Footer;