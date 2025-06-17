import React from "react";
import "./About.css";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import owl from "../assets/owl.json";
import train from "../assets/train.json"
import snake from "../assets/snake.json";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false,
  });

  return (
    <div className="aboutmain">
      <section className="about-section" id="about" ref={ref}>
        {/* Left Side Animation */}
        <motion.div
          className="sticker-left"
          initial={{ x: -200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: -200, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Player
            autoplay
            loop
            src={owl}
            className="player"
           
          />
        </motion.div>

        {/* Right Side Animation */}
        <div className="about-scroll">
          <h2 className="section-title">📜 Who Am I?</h2>

          <p className="about-text">
            I’m Mayer Goyal, a passionate aspiring AI & Software Engineer,
            driven by curiosity and creativity. I love blending technology and
            imagination — building projects that make people think, smile, and
            explore. Just like magic, great code has the power to transform
            ideas into reality. Welcome to my magical journey!
          </p>
        </div>
        <motion.div
          className="sticker-right"
          initial={{ x: 200, opacity: 0 }}
          animate={inView ? { x: 0, opacity: 1 } : { x: 200, opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Player
            autoplay
            loop
            src={snake}
            className="player"
           
          />
        </motion.div>
      </section>
    </div>
  );
};

export default About;
