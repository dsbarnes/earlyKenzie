import React from 'react'
import { Image } from 'react-bootstrap'
import { Button } from 'shards-react'

export default class DogPictures extends React.Component {

    render() {
        if(!this.props.data.apiData.message){
            return <h1>Loading</h1>
        }
        console.log(this.props)
        const imgSrc = this.props.data.apiData.message
        
        return (
            <div id="dogContainer">
                <h3>Is this dog awesome!</h3>

                <Image id="dogImg" src={imgSrc} fluid/>

                <div class="buttonGroup">
                    <Button onClick={this.props.upVote}>Yes! This dog is awesome! </Button>
                    <Button onClick={this.props.downVote}>Sorry, this is not awesome.</Button>
                </div>
            </div>
        );
    }
}
