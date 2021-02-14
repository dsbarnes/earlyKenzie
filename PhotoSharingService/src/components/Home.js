import React from "react";
// import { getImagesResponse, postImagesResponse } from "../apiStubs"
import { getImages, postImage } from "../clientApi"

class Home extends React.Component {
state = {
  getImages: {
    imageURIs: [],
    statusCode: 0
  },
  postImage: {
    imageURI: "",
    statusCode: 0
  }
}

componentDidMount(){
  // this.setState({
  //   ...this.state,
  //   getImages: getImagesResponse
  // })
  getImages()
    .then(res => {
      this.setState({
        ...this.state,
        getImages: res
      })
    })
}
handleImageUpload = (event) => {
  event.preventDefault()
  const formData = new FormData(event.target)
  //Using setState twice will fuck with the data...
  //So that's we we need objecs of state objects in the state object....

  postImage(formData)
  .then(res => {
    this.setState({
      ...this.state,
      postImage: res
    })
  })
}
  
  render() {
    return <React.Fragment>

      <h1>Kenziegram</h1>

      <form onSubmit={this.handleImageUpload}>
        <input type="file"></input>
        <button type="subit">Upload Image</button>
      </form>

      {this.state.postImage.statusCode === 200 && "You uploaded!"}

      {this.state.getImages.imageURIs.map(uri =>
        <img src={uri}/>
      )}

    </React.Fragment>
  }
}
export default Home;
