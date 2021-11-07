import { useState, useRef } from 'react';
//Styles
import './styles/app.scss';

//Components
import Player from "./components/Player"
import Song from "./components/Song"
import Library from './components/Library';

//Database
import data from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
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
      <Song currentSong={currentSong} /> 
      <Player 
        isPlaying={isPlaying} 
        setIsPlaying={setIsPlaying} 
        currentSong={currentSong}
        audioRef={audioRef}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library 
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
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
