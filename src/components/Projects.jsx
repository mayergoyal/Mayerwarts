import react from "react"
import "./Projects.css"
import ProjectBox from "./ProjectBox";
import cognition from "../assets/cognition.jpg"
import cog2 from "../assets/cogimg.png"
import enftohindi from "../assets/engtohindi.png"
import fashion from "../assets/fashion.jpg"
 import karing from "../assets/karing.avif"
 import k2 from "../assets/karingg.png"
 import stock from "../assets/stock.jpg"
 import s2 from "../assets/ss.png"
 import ldl from "../assets/ldl.jpg"
 import l2 from "../assets/ll.png"
 import vibecheck from "../assets/vibecheck.png"
 import v2 from "../assets/vc.png"
 import ehc from "../assets/engtodi.jpg"
 import voice1 from "../assets/voice1.png"
 import vpai from "../assets/voicepenai.png"
 import bus from "../assets/bus.png"
const Projects=()=>{
return (
  <div className="mani">
    <h1 className="projecthead">My Magical Projects</h1>
    <div className="boxdiv">
      <ProjectBox
        name="Cognition & Mental Illness Diagnosis"
        imgsrc={cognition}
        about="This project aims to gamify the cognition and mental illness diagnosis , created under Drid internship 2024"
        githublink="https://github.com/mayergoyal/cognition-and-mental-illness"
        deploylink={null}
        projectdisplay={cog2}
      />
      <ProjectBox
        name="English to Hindi Dubber"
        imgsrc={enftohindi}
        about="This project aims to convert english language videos into hindi using AI models "
        githublink="https://github.com/mayergoyal/COEengtohindi"
        deploylink={null}
        projectdisplay={ehc}
      />
      <ProjectBox
        name="VoicePen AI"
        imgsrc={voice1}
        about="A dynamic backend service built with FastAPI and Uvicorn, enabling real-time audio transcription using Whisper. Deployed via Docker with complete support for PyAudio and ONNX models, this project turns audio into accurate text for integration with grammar and punctuation correction"
        githublink="https://github.com/mayergoyal/VoicePen_AI"
        deploylink="https://voicepen-ai-2.onrender.com"
        projectdisplay={vpai}
      />
      <ProjectBox
        name="Fashion App"
        imgsrc={fashion}
        about="This react native app comprise various fashion conscious features like cloth/accessories recommendation system , cloth customization and 3D Avatar wrap and try system  "
        githublink="https://github.com/mayergoyal/Fashion-App-System"
        deploylink={null}
        projectdisplay={null}
      />
      <ProjectBox
        name="Karing: Medication"
        imgsrc={karing}
        about="This streamlit designed tech page is for medication including different features like medicine recommendation , disease diagnosis etc"
        githublink="https://github.com/mayergoyal/Karing-Medicine-Recommendation-System"
        deploylink={null}
        projectdisplay={k2}
      />
      <ProjectBox
        name="LDL JIIT portal"
        imgsrc={ldl}
        about="This web portal is made for smooth run of the hub called Light de Literacy in JIIT"
        githublink="https://github.com/mayergoyal/LDL-Emailing-Admin-Portal"
        deploylink={null}
        projectdisplay={l2}
      />
      <ProjectBox
        name="Stock Analysis, Recommendation & Portfolio management system "
        imgsrc={stock}
        about="This streamlit app was designed for stock investmentrecommendation , stock prediction, paper trading and portfolio management"
        githublink={null}
        deploylink={null}
        projectdisplay={s2}
      />
      <ProjectBox
        name="Vibe Check"
        imgsrc={vibecheck}
        about="This web page is designed for vibe checking through fun questions and dynamic results based on user input"
        githublink="https://github.com/mayergoyal/Vibe-Check"
        deploylink="https://vibe-check-aub8.vercel.app/"
        projectdisplay={v2}
      />
      <ProjectBox
        name="Real time Bus Ticketing System "
        imgsrc={bus}
        about="Engineered a full-stack, real-time bus ticketing platform using
Node.js, React, WebSockets, and Redis, deployed as a containerized application with Docker."
        githublink="https://github.com/mayergoyal/BusTicketing"
        deploylink="https://busticketing-1.onrender.com/"
        projectdisplay={v2}
      />
    </div>
  </div>
);
}
export default Projects