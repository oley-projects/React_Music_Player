import { useState } from 'react';
//Styles
import './styles/app.scss';

//Components
import Player from "./components/Player"
import Song from "./components/Song"

//Database
import data from "./data";

function App() {
  //State
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  
  return (
    <div className="App">
      <Song currentSong={currentSong} /> 
      <Player />
    </div>
  );
}

export default App;
