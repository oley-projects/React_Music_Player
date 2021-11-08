const LibrarySong = ({ song, songs, setCurrentSong, audioRef, isPlaying, setSongs }) => {
  const songSelectHandler = () => {
    setCurrentSong(song);
    //Add active song
    const newSongs = songs.map((songElem) => {
      if (songElem.id === song.id) {
        return {
          ...songElem, 
          active: true,
        };
      } else {
        return {
          ...songElem, 
          active: false,
        };      
      }
    });
    setSongs(newSongs);
    // Check if song is playing
    if(isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== 'undefined') {
        playPromise.then((audio) => audioRef.current.play());
      }
    }
    
  }
  return(
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
      <img src={song.cover} alt={song.name}></img>
      <div className="song-description">
          <h3>{song.name}</h3>
          <h4>{song.artist}</h4>
      </div>
    </div>   
  );
}
  
  export default LibrarySong;