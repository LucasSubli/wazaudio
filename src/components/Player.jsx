// React stuff
import { useRef, useState } from "react";
// icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faDownload,
  faPlay,
  faPause,
  faVolumeDown,
  faShareAlt,
} from "@fortawesome/free-solid-svg-icons";

// Player
const Player = ({ currentAudio, skipAudioFunction }) => {
  // State
  const [isPlaying, setIsPlaying] = useState(false);
  const [showVolume, setShowVolume] = useState(false);
  const [audioInfo, setAudioInfo] = useState({
    currentTime: 0,
    duration: 0,
    volume: 0.5,
  });

  // Ref
  const audioRef = useRef(null);

  // Functions
  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const changeVolume = (e) => {
    let value = e.target.value;
    audioRef.current.volume = value;
    setAudioInfo({ ...audioInfo, volume: value });
  };

  const downloadAudio = () => {
    window.open(currentAudio.audio, "_blank");
  };

  // Event Handlers
  const playAudioHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    setAudioInfo({
      ...audioInfo,
      currentTime: current,
    });
  };

  const audioLoadedHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setAudioInfo({
      ...audioInfo,
      currentTime: current,
      duration: duration,
    });
  };

  const autoPlayHandler = () => {
    if (isPlaying) {
      audioRef.current.play();
    }
  };

  const dragHandler = (e) => {
    const sliderValue = e.target.value;
    audioRef.current.currentTime = sliderValue;
    setAudioInfo({
      ...audioInfo,
      currentTime: sliderValue,
    });
  };

  const skipAudioHandler = (direction) => {
    if (direction === "skip-back") {
      skipAudioFunction(-1);
    } else {
      skipAudioFunction(1);
    }
  };

  const audioEndedHandler = () => {
    skipAudioFunction(1);
  };

  // Template
  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(audioInfo.currentTime ?? "0:00")}</p>
        <div
          className="track"
          style={{
            background: `linear-gradient(to right, ${currentAudio.color[0]},${currentAudio.color[1]})`,
          }}
        >
          <input
            min={0}
            max={audioInfo.duration || 0}
            value={audioInfo.currentTime || 0}
            onChange={dragHandler}
            type="range"
          />
          <div
            className="animate-track"
            style={{
              transform: `translateX(${
                (audioInfo.currentTime / audioInfo.duration) * 100
              }%)`,
            }}
          ></div>
        </div>
        <p>{formatTime(audioInfo.duration ?? "0:00")}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => setShowVolume(!showVolume)}
          icon={faVolumeDown}
        />
        {showVolume && (
          <input
            onChange={changeVolume}
            value={audioInfo.volume}
            max="1"
            min="0"
            step="0.01"
            type="range"
          />
        )}
        <FontAwesomeIcon
          className="skip-back"
          onClick={() => skipAudioHandler("skip-back")}
          size="2x"
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          className="play"
          onClick={playAudioHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          className="skip-forward"
          onClick={() => skipAudioHandler("skip-forward")}
          size="2x"
          icon={faAngleRight}
        />
        <FontAwesomeIcon onClick={downloadAudio} icon={faDownload} />
        <a
          href={`https://wa.me/?text=${encodeURI(currentAudio.transcript) + "%0A%0A%0A" + encodeURI(currentAudio.audio)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faShareAlt}/>
        </a>

      </div>

      <audio
        ref={audioRef}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={audioLoadedHandler}
        onLoadedData={autoPlayHandler}
        onEnded={audioEndedHandler}
        src={currentAudio.audio}
      ></audio>
    </div>
  );
};

export default Player;
