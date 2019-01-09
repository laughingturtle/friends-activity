import React from 'react';
import SongListEntry from './song.jsx';

var SongList = ({songs, handleSongClick}) => (
    <div className="songs-list">
    {/*console.log('ma props man: ', songs)*/}
      {songs.map((song) => (
        < SongListEntry
          song={song}
          key={song.listen_id}
          handleSongClick={handleSongClick}
        />
      )
      )}
    </div>
  );
  
  
  // In the ES6 spec, files are "modules" and do not share a top-level scope.
  // `var` declarations will only exist globally where explicitly defined.
  export default SongList;