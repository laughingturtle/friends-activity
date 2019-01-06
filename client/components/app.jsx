import React from 'react';

export default class FriendsApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
 
      }
  }

  handleVideoListEntryTitleClick(video) {
    // trigger api call to player
  } 
    
  render () {
    return (
      <div>
          I'm your react ** friends ** service!
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

export default FriendsApp;
