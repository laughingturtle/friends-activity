import React from 'react';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle  } from '@fortawesome/free-solid-svg-icons';
library.add(faPlayCircle);
import SongList from './songList.jsx';

var songs = [{
  song_id: 23,
  title: 'bing bang bop',
  artist: 'mr whatsit',
  firstname: 'willy',
  lastname: 'walrus'
}, {
  song_id: 5,
  title: 'bloot bloot',
  artist: 'Blim blam',
  firstname: 'Sooch',
  lastname: 'Arechi'
}];

export default class FriendsApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      songs: songs
      }
  }

  componentDidMount(){
    this.getSongs();
  }

  sendSong(song){
    console.log('my song inside send song - ready to sling to SQS', song);
    axios.post('/song', {
      mySong: song
    })
    .then (function(response) {
    console.log('song sent to SQS: ', response, song);
    })
    .catch (function(error){
      console.log(error);
    });
  }

  getSongs(){
    var that = this;
    axios.get('/data')
    .then (function(response) {
      that.setState({
        songs: response.data
      })
    })
    .catch (function(error){
      console.log(error);
    });
  }

  handleSongClick(song) { 
    this.sendSong(song);
  } 
    
  render () {
    return (
      <div>
          <h4>Friends Activity</h4>
        <div className="">
        <SongList
          songs={this.state.songs}
          handleSongClick={this.handleSongClick.bind(this)}
        />
      </div>
    </div>
    )
  }
}

//export default FriendsApp;
