const LibraryAudio = ({ audio, isActive, onClick }) => {

  const maxLenght = 80;
  // Functions
  const getTranscriptPreview = (transcript) => {
    if (transcript.length > maxLenght) {
      return transcript.substr(0, maxLenght - 5).concat(' (...)');
    }
    return transcript;
  }

  // Template
  return (
    <div
      className={`library-audio ${isActive ? "selected" : ""}`}
      onClick={onClick}
    >
      <img src={audio.cover} alt="cover art"></img>
      <div className="audio-description">
        <h3>{audio.name}</h3>
        <h4>{getTranscriptPreview(audio.transcript)}</h4>
      </div>
    </div>
  );
};

export default LibraryAudio;
