// React stuff
import { useState } from "react";
// import styles
import "./styles/app.scss";
// adding components
import Player from "./components/Player";
import Audio from "./components/Audio";
import Library from "./components/Library";
import Nav from "./components/Nav";
// Import data (yeah it is hard coded, live with it)
import data from "./assets/data";

function App() {
  // State
  const [audios] = useState(data());
  const [currentAudio, setCurrentAudio] = useState(audios[0]);
  const [libraryStatus, setLibraryStatus] = useState({ isOpen: false });

  // Functions
  const skipAudio = (nSkips) => {
    // -1 or 1
    const currentIndex = audios.findIndex((s) => s.id === currentAudio.id);
    let newIndex = currentIndex + nSkips;

    if (newIndex < 0) {
      newIndex = (newIndex % audios.length) + audios.length;
    } else if (newIndex >= audios.length) {
      newIndex = newIndex % audios.length;
    }

    setCurrentAudio(audios[newIndex]);
  };

  // Template
  return (
    <div className={`App ${libraryStatus.isOpen ? "library-active" : ""}`}>
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Audio currentAudio={currentAudio} />
      <Player currentAudio={currentAudio} skipAudioFunction={skipAudio} />
      <Library
        libraryStatus={libraryStatus}
        audios={audios}
        currentAudio={currentAudio}
        selectAudioFunction={setCurrentAudio}
      />
    </div>
  );
}

export default App;
