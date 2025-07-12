import HeroText from './HeroText';
import HeroSocial from './HeroSocial';
import HeroImage from './HeroImage';

const HeroLayout = () => (
  <section className="min-h-screen flex flex-col lg:flex-row relative overflow-hidden bg-[#d7d7d7]">
    {/* Left: Text & Social */}
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center relative px-4 sm:px-8 py-12 lg:py-0">
      <HeroText />
      <HeroSocial />
    </div>

    {/* Right: Hero Image */}
    <div className="relative pb-16 w-full lg:w-1/2 bg-gradient-to-r from-[#1c1c1c] via-black to-[#1c1c1c] flex items-end justify-center px-4 py-12">
      <HeroImage />
    </div>
  </section>
);

export default HeroLayout;
