//Styles
import './styles/app.scss';

//Components
import Player from "./components/Player"
import Song from "./components/Song"

//Database
import data from "./data";

function App() {
  return (
    <div className="App">
      <Song />
      <Player />
    </div>
  );
}

export default App;
