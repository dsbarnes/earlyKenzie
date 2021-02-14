import React, { Component } from 'react';
import './App.css';

// This URL can be combined with an photo id to fetch an photo.
// const PHOTO_URL = "https://picsum.photos/200?photo=";
const PHOTO_URL = photoId => `https://picsum.photos/id/${photoId}/200/200`;
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";

class App extends Component {
  // 1. Declare a state object that will be used to track an array of photos
  //this.setState({k:V})
  state = {
    photos: []
  }

  // 2. Declare a life cycle method
  // This life cycle method should:
  //  - be called after the component is initially rendered
  // - fetch an array of photos
  // - add that array of photos to state once received
  componentDidMount(){
    
    const picsArray = []
    
    fetch(PHOTO_LIST_URL)
      .then(res => res.json())
      .then(data => {
        const newData = data.slice(0, 10)
        // console.log(newData)
        newData.forEach(pic => {

          fetch(PHOTO_URL(pic.id)) //TODO: Write a method that does this (Async/Await)
            .then(res => res)
            .then( data => {
              picsArray.push({
                fileName: pic.filename,
                id: pic.id,
                url: data.url
              })
              // console.log(picsArray)
              this.setState({photos: picsArray})
            })
          })
        })
  }
  
  //We wan't render to be the last one! (readability)
  render() {
    // const { photos = [] } = this.state;
    const photos = this.state.photos
    //this.state.photos
    // console.log(this.state)

    return (
      <React.Fragment> 
        <h1 id='header'>Photo Wall</h1>

        <div className="collage">
            
            {/* We use map here because Array.prototype.map is an expression,
              * and for loops are not. You'll learn more about this soon! 
              */}
            
            {photos.map( photo =>
                <img  alt={photo.fileName}
                      key={photo.id}
                      src={photo.url}
                />
            )}

        </div>
      </React.Fragment>
    );
  }
}

export default App;
