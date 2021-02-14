import React from 'react';

class Video extends React.Component{
    render(){
        return(
            <React.Fragment>
            <div id="video">
            <iframe 
                title="vid"
                id="vid" 
                src="https://www.youtube.com/embed/DrvrWtD-5FA" 
                frameBorder="0" 
                allow="accelerometer; 
                    autoplay; 
                    encrypted-media; 
                    gyroscope; 
                    picture-in-picture" 
                allowFullScreen>
            </iframe>
            </div>
            </React.Fragment>
        )
    }
}
export default Video