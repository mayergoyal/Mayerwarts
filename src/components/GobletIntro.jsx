import { Player } from "@lottiefiles/react-lottie-player";
import goblet from "../assets/goblet-fire.json";
import "./GobletIntro.css";

const GobletIntro = () => {
  const sparkles = Array.from({ length: 40 });

  return (
    <div className="goblet-section">
      <div className="fire">
        <Player
          autoplay
          loop
          src={goblet}
          style={{ height: "500px", width: "500px", opacity: 0.55 , margin:0,padding:0 }}
          className="goblet-fire"
        />
      </div>
      <h2 className="goblet-text">The Goblet of Fire</h2>

      {/* Sparkles */}
      {sparkles.map((_, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
};

export default GobletIntro;
