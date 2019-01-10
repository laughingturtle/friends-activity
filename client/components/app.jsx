import React from 'react';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle  } from '@fortawesome/free-solid-svg-icons'

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

  getSongs(){
    var that = this;
    // console.log('this outside axios', this);
    axios.get('http://127.0.0.1:3003/data')
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

  handleSongClick(video) {
    // trigger api call to player
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
