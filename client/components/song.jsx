import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

var SongListEntry = ({songs, handleSongClick}) => (
    <div className="">
      <div className="">{ /* friends name */} friends name 

      </div>
      <div className="">
        <div className=""
          onClick={() => handleSongClick(id)}> <FontAwesomeIcon icon="play-circle" /> fake title</div>
        <div className="">{/* artist */}fake artist</div>
      </div>
    </div>
  );

  // `var` declarations will only exist globally where explicitly defined
export default SongListEntry;