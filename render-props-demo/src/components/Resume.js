import React from 'react'
import { Image, Card } from 'react-bootstrap'

export default class Resume extends React.Component{

    render(){
        const data = this.props.data
        const bio = this.props.bio
        return(
            <React.Fragment>
                    <Card.Body>
                        <Card.Title>{data.name.first} {data.name.last}</Card.Title>
                        
                        <Card.Subtitle>
                            <small>Applied For:</small>
                            <p>Digital Assistant (Remote)</p>
                        </Card.Subtitle>

                        <Card.Subtitle>
                            <small> Current Location: </small>
                            <p>{ data.location.city }, { data.location.country }</p>
                        </Card.Subtitle>

                        <Image src={data.picture.large} roundedCircle />
                        
                        <Card.Text class="bio">
                            <small>Experience and Background:</small>
                            <br></br>
                            <br></br>
                            <p>{ bio }</p>
                        </Card.Text>
                    </Card.Body>

                    <Card.Text class="callToAction">
                        <p>Please provide feedback on this candidate</p>
                    </Card.Text>
            </React.Fragment>
        )

    }
}