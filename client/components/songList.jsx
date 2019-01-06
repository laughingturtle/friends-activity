var SongList = ({songs, handleSongClick}) => (
    <div className="songs-list">
      {songs.map((song) => (
        < SongListEntry
          song={song}
          key={song.id.songId}
          handleSongClick={handleSongClick}
        />
      )
      )}
    </div>
  );
  
  
  // In the ES6 spec, files are "modules" and do not share a top-level scope.
  // `var` declarations will only exist globally where explicitly defined.
  export default SongList;