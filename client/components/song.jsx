import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

var SongListEntry = ({song, handleSongClick}) => (
      <div className="songBlock">
        <div className="leftBlock"><img className="circMe" src={song.img}/></div>
        <div className="rightBlock"><strong>{song.first_name} {song.last_name}</strong>
          <div className="" onClick={() => handleSongClick(song.song_id)}> <FontAwesomeIcon icon="play-circle" /> {song.song_name}</div>
          <div className="">{song.artist}</div>
          <div className="">{moment(song.date_last_played).startOf('day').fromNow()}</div>
        </div>
      </div> 
  );

  // `var` declarations will only exist globally where explicitly defined
export default SongListEntry;