// Components
import LibraryAudio from "./LibraryAudio";

// Library
const Library = ({
  libraryStatus,
  audios,
  currentAudio,
  selectAudioFunction,
}) => {
  // Template
  return (
    <div className={`library ${libraryStatus.isOpen ? "active-library" : ""}`}>
      <h2>Library</h2>
      <div className="library-audios">
        {audios.map((audio) => (
          <LibraryAudio
            key={audio.id}
            audio={audio}
            isActive={currentAudio.id === audio.id}
            onClick={() => selectAudioFunction(audio)}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
