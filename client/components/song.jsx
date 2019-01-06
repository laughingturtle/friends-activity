import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';

var SongListEntry = ({song, handleSongClick}) => (
    <div className="songBlock">
      <div className="leftBlock"><img className="circMe" src="http://lorempixel.com/50/50/people"/></div>
      <div className="rightBlock"><strong>Fake Name</strong>
        <div className="" onClick={() => handleSongClick(song.song_id)}> <FontAwesomeIcon icon="play-circle" /> fake title</div>
        <div className="">{/* artist */}fake artist</div>
        <div className="">{moment(song.date_last_played).startOf('day').fromNow()}</div>
      </div>
    </div>
  );

  // `var` declarations will only exist globally where explicitly defined
export default SongListEntry;