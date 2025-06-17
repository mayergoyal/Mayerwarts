import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./HeroIntro.css";
import herobg from "../assets/mayerwarts.png"; // Import the background image
const HeroIntro = ({ onFinish }) => {
  const [showText, setShowText] = useState(true); // ✅ Start with visible text

  useEffect(() => {
    // Text stays for 5s, then fade out
    const timer = setTimeout(() => {
      setShowText(false); // triggers fade-out
      setTimeout(onFinish, 2000); // wait for smokeOut animation (2s)
    }, 5000); // show text for 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="hero-container"
      style={{
        background: `url(${herobg}) center center / cover no-repeat`,
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className={`smoke-bg ${!showText ? "fade-out" : ""}`}>
        <motion.h1
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to <br /> Mayer-warts <b>9¾</b>
        </motion.h1>
      </div>
    </div>
  );
};

export default HeroIntro;
