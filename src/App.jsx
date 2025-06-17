import { useState } from "react";
import HeroIntro from "./components/HeroIntro";
import MainPage from "./components/MainPage"; // We'll create this next


function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <div>
      {showIntro ? (
        <HeroIntro onFinish={() => setShowIntro(false)} />
      ) : (
        <MainPage />
      )}
    </div>
  );
}


export default App;
