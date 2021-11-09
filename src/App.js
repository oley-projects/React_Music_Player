import { useState, useRef } from 'react';
//Styles
import './styles/app.scss';
//Components
import Player from "./components/Player"
import Song from "./components/Song"
import Library from "./components/Library";
import Nav from "./components/Nav"
//Database
import data from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [libraryStatus, setLibraryStatus] = useState(false);
  //Ref
  const audioRef = useRef(null);
  const [songInfo, setSongInfo] = useState({
    currentTime: "00:00",
    duration: "00:00",
  });
  //Handlers
  const timeUpdateHandler = (e) => {
    const { currentTime, duration } = e.target;
    setSongInfo({ ...songInfo, currentTime, duration });
  };
  
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song currentSong={currentSong} /> 
      <Player 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        songs={songs}
        setSongs={setSongs}
      />
      <Library 
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
      />
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>

  );
}

export default App;
