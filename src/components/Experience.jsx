import React from 'react';
import './Experience.css';
import brickwall from "../assets/brickwall.png"
// Example image, replace with actual image path
// Assuming you have a CSS file for styling
const experiences = [
  {
    title: "Software Developer Intern",
    company: "DRID JIIT Noida",
    duration: "June 2024 – July 2024",
    description:
      "Worked under JIIT professor on a medical domain project , have reaserached on cognition and mental illness , created a platform to gamify the cognition and mental illnness diagnosis using HTML/CSS /JS and React and used SQL as database.",
    link: "https://github.com/mayergoyal/cognition-and-mental-illness",
  },
  {
    title: "Full Stack Web Developer Intern",
    company: "Null Class",
    duration: "June 2024",
    description:
      " Worked as full stack developmer on the real world problems , created projects under company officials and learned about the real world development process.",
    link: "https://github.com/mayergoyal/You-tube-clone-mayer",
  },
  {
    title: "Optica Internal Hackathon ",
    company: "Optica JIIT",
    duration: "Dec -2023",
    description:
      "Participated in the internal hackathon of optica JIIT , created full website for JSCOP (Optica's flagship event ) using HTML/CSS/JS ",
    link: "https://team-spectrum-optica-internal-hackathon.vercel.app/",
  },
  {
    title: "OSDC Hackathon ",
    company: "OSDC JIIT",
    duration: "August 2024",
    description:
      "Participated in the  hackathon and created  a platform for the farmers called Krishi-Konnect where we included several faetures like AI based disease detection in crops , mandi near me , weather forecasting etc with real time apis integrated . ",
    link: "https://github.com/mayergoyal/team-conquers",
  },
  {
    title: "College Head",
    company: "LDL , Team Green (TGCC) , Optica",
    duration: "August 2024- April 2025",
    description:
      "Led various college hubs and socities including social service hubs like LDL and TGCC and technical hubs like Optica , organized various events and activities in the college and led the team to success.",
  },
  {
    title: "Your Story Hackearth ",
    company: "Open Source Developers Community",
    duration: "June 2023",
    description:
      "Participated in the  hackathon and  Made Virtual teaching platform for gamifying the learninig process",
    link: "https://virtual-teaching-project.vercel.app/",
  },
];
const Experience=()=>{
return (
  <div className="main" style={{ overflowX: "scroll",
    background: `url(${brickwall}) center center / cover repeat`,
    height: '100vh',
    width: '100vw',

   }}
  
  >
    
    <section className="experience-section">
      <div className="scroll-track">
        {experiences.map((exp, index) => (
          <div className="frame" key={index}>
            <h3>{exp.title}</h3>
            <p className="company">{exp.company}</p>
            <p className="duration">{exp.duration}</p>
            <p className="desc">{exp.description}</p>
            {
                exp.link &&(
                    <p className='link-container'>
                        <a href={exp.link} target="_blank" rel="noopener noreferrer" className="link">
                            Check
                        </a>
                    </p>
                )
            }
          </div>
        ))}
      </div>
    </section>
  </div>
);
}
export default Experience ;