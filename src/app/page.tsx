import StatusBar from "@/components/StatusBar";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import EducationAndAchievements from "@/components/EducationAndAchievements";
import CurrentFocus from "@/components/CurrentFocus";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AskAssistant from "@/components/AskAssistant";

export default function Home() {
  return (
    <>
      <StatusBar />
      <Nav />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <MarqueeStrip />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <EducationAndAchievements />
        <CurrentFocus />
        <Contact />
      </main>
      <Footer />
      <AskAssistant />
    </>
  );
}
