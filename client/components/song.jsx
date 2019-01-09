import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

var SongListEntry = ({song, handleSongClick}) => (
      <div className="songBlock">
        <div className="leftBlock"><img className="circMe" src={song.img}/></div>
        <div className="rightBlock friendName"><strong>{song.first_name} {song.last_name}</strong>
          
          <div className="songName details" onClick={() => handleSongClick(song.song_id)}> <FontAwesomeIcon icon="play-circle" id="white"/> {song.song_name}</div>
          <div className="songArtist details">{song.artist}</div>
          <div className="datePlayed details">{moment(song.date_last_played).startOf('day').fromNow()}</div>
        </div>
      </div> 
  );

  // `var` declarations will only exist globally where explicitly defined
export default SongListEntry;