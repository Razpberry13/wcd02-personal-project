import { Navbar } from "./component/layouts/Navbar";
import { Footer } from "./component/layouts/footers";
import { About } from "./component/sections/abouts";
import Summary from "./component/sections/abouts/Summary";
import { Contact } from "./component/sections/contacts";
import { HeroLayout } from "./component/sections/heros";
import Projects from "./component/sections/project/Projects";
import Skills from "./component/sections/skills/Skills";


export default function Home() {
  return (
    <>
      <Navbar />
      <HeroLayout />
      <Summary />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      
      </>
  );
}
