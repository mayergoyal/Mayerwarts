import "./ProjectBox.css";
import React, { useState } from "react";

const ProjectBox = ({
  name,
  imgsrc,
  about,
  githublink,
  deploylink,
  projectdisplay,
}) => {
  const [check, setcheck] = useState(false);

  function close() {
    setcheck(false);
  }

  return (
    <>
      <div className="box">
        <div
          className="project-display"
          style={{
            backgroundImage: `url(${imgsrc})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "250px",
            width: "100%",
          }}
        ></div>

        <h1>{name}</h1>
        <button onClick={() => setcheck(true)}>Check</button>
      </div>

      {check && (
        <div className="project-details">
          
          <img src={projectdisplay} 
          style={{
            height:"300px",
            width:"100%"
          }}
          className="project-image"/>
          <div className="cross" onClick={close}>
            ❌
          </div>
          <h2>About the Project</h2>
          <p>{about}</p>
          <div className="links">
            {githublink && (
              <a href={githublink} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            )}
            {deploylink && (
              <a href={deploylink} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectBox;
