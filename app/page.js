import HeroSection from "./components/HeroSection";
import About from "./components/About";
import SecondHero from "./components/SecondHero";
import Specialties from "./components/Specialties";
import SectionThree from "./components/SectionThree";
import Chat from "./components/Chat"
import Office from "./components/Office";
import FreqentlyQ from "./components/FreqentlyQ";
import MyProfessional from "./components/MyProfessional";
import GetTouch from "./components/GetTouch";
export default function Home() {
  return (
    <div>
     <HeroSection />
     <About />
      <SecondHero />
      <Specialties />
      <SectionThree />
      <Chat />
      <Office />
      <FreqentlyQ />
      <MyProfessional />
      <GetTouch />
    </div>
  );
}
