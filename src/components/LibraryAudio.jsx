const LibraryAudio = ({ audio, isActive, onClick }) => {
  // Template
  return (
    <div
      className={`library-audio ${isActive ? "selected" : ""}`}
      onClick={onClick}
    >
      <img src={audio.cover} alt="cover art"></img>
      <div className="audio-description">
        <h3>{audio.name}</h3>
        <h4>{audio.transcript}</h4>
      </div>
    </div>
  );
};

export default LibraryAudio;
