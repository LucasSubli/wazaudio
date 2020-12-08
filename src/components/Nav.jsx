import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAudio } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibraryStatus }) => {
  // Functions
  const toggleLibraryOpen = () => {
    setLibraryStatus({
      ...libraryStatus,
      isOpen: !libraryStatus.isOpen,
    });
  };

  // Template
  return (
    <nav>
      <h1> Wazaudio </h1>
      <button onClick={toggleLibraryOpen}>
        Library <FontAwesomeIcon icon={faFileAudio} />
      </button>
    </nav>
  );
};

export default Nav;
