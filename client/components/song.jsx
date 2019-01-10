import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import moment from 'moment';

const SongBlock = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  width: 270px; 
  cursor: pointer;
`;

const CircleImg = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  height: 50px;
  width: 50px;
  border: 2px solid #b3b3b3;
`;

const LeftBlock = styled.div`
  padding-top: 20px;
  float:left; 
  clear:left;
`;

const RightBlock = styled.div`
  padding-top: 20px;
  float:left; 
`;

var SongListEntry = ({song, handleSongClick}) => (
      <SongBlock onClick={() => handleSongClick(song.song_id)}>
        <LeftBlock><CircleImg src={song.img}/></LeftBlock>
        <RightBlock className="friendName"><strong>{song.first_name} {song.last_name}</strong>   
          <div className="details"> <FontAwesomeIcon icon="play-circle" id="white"/> {song.song_name}</div>
          <div className="details">{song.artist}</div>
          <div className="details small">{moment(song.date_last_played).startOf('day').fromNow()}</div>
        </RightBlock>
      </SongBlock> 
  );

  // `var` declarations will only exist globally where explicitly defined
export default SongListEntry;