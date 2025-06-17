
import Navbar from "./Navbar";
import GobletIntro from "./GobletIntro";
import About from "./About";
import "./MainPage.css";
import { ParallaxProvider,Parallax } from "react-scroll-parallax";
import Skills from "./Skills";
import Projects from "./Projects";
import Experience from "./Experience";
import ExtraMe from "./ExtraMe";
import Contact from "./Contact";
/*
import Skills from "./Skills";
import Projects from "./Projects";


import Contact from "./Contact";*/
const MainPage = () => {
  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Navbar />
      <ParallaxProvider>
        <Parallax speed={-10}>
          <section id="home">
            <GobletIntro />
          </section>
        </Parallax>

        <Parallax speed={-10} className="transition"></Parallax>

        <Parallax speed={-18}>
          <section id="about">
            <About />
          </section>
        </Parallax>

        <Parallax>
          <section id="skills">
            <Skills />
          </section>
        </Parallax>
        <Parallax>
          <section id="projects">
            <Projects />
          </section>
        </Parallax>
        <Parallax>
          <section id="experience">
            <Experience />
          </section>
        </Parallax>
        <Parallax>
          <section id="extrame">
            <ExtraMe />
          </section>
        </Parallax>
        <Parallax>
          <section id="contact">
            <Contact />
          </section>
        </Parallax>
      </ParallaxProvider>

      {/*
      
      
      <section id="experience">
        <Experience />
      </section>
      
      <section id="contact">
        <Contact />
      </section>*/}
    </div>
  );
};

export default MainPage;