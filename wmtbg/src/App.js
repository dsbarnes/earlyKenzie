import React from 'react';

import VideoLinks from './components/VideoLinks'
import Header from './components/Header'
// import Footer from './components/Footer'
import Video from './components/Video'
import playlistOne from '../src/JSONdata/videoPlaylist1.json'
import playlistTwo from '../src/JSONdata/videoPlaylist2.json'

import './App.css';

const handleIframChange = (videoName) => {
  // document.querySelector('iframe').src = ''
  console.log("Got it")
}
const handleVideoLinksChange = (menuItem) => {
  //
  console.log('Got something')
}

class App extends React.Component {

  state = {
    playlistOne : playlistOne,
    playListTwo : playlistTwo
  }

  render(){
    return (
      <React.Fragment>
        <Header />
        <div id="videoPlaylistContainer">
          <Video />
          <VideoLinks />
        </div>
        {/* <Footer /> */}
      </React.Fragment>
    );
  }
}

export default App;
