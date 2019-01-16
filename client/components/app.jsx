import React from 'react';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle  } from '@fortawesome/free-solid-svg-icons';
library.add(faPlayCircle);
import SongList from './songList.jsx';
const creds = require('../../sqs/awsConfig');
var Producer = require('sqs-producer');

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


var producer = Producer.create({
  queueUrl: 'https://sqs.us-east-2.amazonaws.com/021058984666/song-queue',
  region: 'us-east-2',
  accessKeyId: creds.AWS_ACCESS_KEY_ID,
  secretAccessKey: creds.AWS_SECRET_ACCESS_KEY
});

const sendMessage = (song) => {
  console.log('song inside send message: ', song);
  producer.send([{
      id: '1',
      body: JSON.stringify({songName: song.song_name, songUrl:song.song_url,  songArtist:song.artist})
    }], function(err) {
      if (err){
        console.log(err);
    } else {
      console.log('your sqs succeeded');
    }
  });
}

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

  getSongs(){
    var that = this;
    // console.log('this outside axios', this);
    axios.get('/data')
    .then (function(response) {
    //console.log('your data from db: ', response);
  //  console.log('this inside axios', that);
      that.setState({
        songs: response.data
      })
    })
    .catch (function(error){
      console.log(error);
    });
  }

  handleSongClick(song) {
    sendMessage(song);
    console.log('test click. Ouch that hurt');
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
