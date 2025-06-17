// FloatingHouseCards.jsx
import React, { useState } from "react";
import "./FloatingHouseCards.css";
import grif from "../assets/Gryffindor.jpg";
import sly from "../assets/slytherin.jpg";
import raven from "../assets/ravenclaw.jpg";
import huffle from "../assets/hufflepuf.jpg";

const houses = [
  {
    name: "Gryffindor",
    color: "#ae0001",
    frontImage: grif,
    backText:
      "Gryffindor is all about Leadership, Public Speaking, Volunteering . I have led three hubs in my college . I was the President of LDL & Team Green and the Outreach Head of Optica . I also 've been President of my school Council . I have won several devates , elocutions and extempores . For me, Passion & Purpose go hand in hand.",
  },
  {
    name: "Slytherin",
    color: "#2a623d",
    frontImage: sly,
    backText:
      "Slytherin is all about Strategic Planning, Productivity, Goals . I am a firm believer in setting clear goals and working strategically towards them. I have a knack for planning and executing tasks efficiently, ensuring that I stay productive and focused on my objectives. , Here's my GFG and leetcode profile :-",
    backLink1: "https://www.geeksforgeeks.org/user/goyalmm87a/",
    backlink2: "https://leetcode.com/u/Mayer_Goyal123/",
  },
  {
    name: "Ravenclaw",
    color: "#222f5b",
    frontImage: raven,
    backText:
      "Ravenclaw is all about Writing, Creative Thinking, Research. When I'm not coding I write stories , poems . I love synthesising characters , plots and new worlds. Fiction is my fortae. Hindi poems are my my way to express . I 'm also involved in simplifying Bhagawat Geeta and thus post videos on my page called BlueSoul",
    backLink1: "https://www.instagram.com/thebluesoul0/",
  },
  {
    name: "Hufflepuff",
    color: "#ecb939",
    frontImage: huffle,
    backText: " Hufflepuff is all about Music, Practice, Consistency, Patience. I call myself a singer . I sing and feel the world from this beautiful lens of tone and lyrics .",
  },
];

const FloatingHouseCards = () => {
  return (
    <section className="four-houses-section" id="extrame">
      <h2 className="floating-title">🪄 Beyond Magic: My Other Strengths</h2>
      <br />
      <div className="cards-container">
        {houses.map((house, i) => (
          <FlippableCard key={i} {...house} />
        ))}
      </div>
    </section>
  );
};

const FlippableCard = ({ name, color, frontImage, backText }) => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="card" onClick={() => setFlipped(!flipped)}>
      <div
        className={`card-inner ${flipped ? "flipped" : ""}`}
        style={{ backgroundColor: color }}
      >
        <div className="card-front">
          <img src={frontImage} alt={name} />
          <h3>{name}</h3>
        </div>
        <div className="card-back">
          <p>{backText}</p>
          { backText.includes("GFG")&&(
            <div className="back-links">
                <a
                    href="https://www.geeksforgeeks.org/user/goyalmm87a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="back-link"
                >
                    GFG Profile
                </a>
                <br />
                <a
                    href="https://leetcode.com/u/Mayer_Goyal123/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="back-link"
                >
                    LeetCode Profile
                </a>
            </div>
          )}

          {
            backText.includes("BlueSoul") && (
              <a
                href="https://www.instagram.com/thebluesoul0/"
                target="_blank"
                rel="noopener noreferrer"
                className="back-link"
              >
                BlueSoul Page
              </a>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default FloatingHouseCards;
