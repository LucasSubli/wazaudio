const Audio = ({ currentAudio }) => {
  // Template
  return (
    <div className="audio-container">
      <img
        className="rotateAudio"
        src={currentAudio.cover}
        alt="cover art"
      ></img>
      <h2>{currentAudio.name}</h2>
      <h3>{currentAudio.transcript}</h3>
    </div>
  );
};

export default Audio;
