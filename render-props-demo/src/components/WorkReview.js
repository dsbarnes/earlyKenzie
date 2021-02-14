import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import CompoundSlider from './CompoundSlider'
import Resume from './Resume'
import { Card } from 'react-bootstrap'
import { Container } from 'shards-react'
import './workReview.css'

export default class WorkReview extends React.Component {

    render() {
        if(this.props.data.isLoading === true){
            return(
                <h1>Loading</h1>
            )
        }

        const store = this.props.data
        const bio = store.moreApiData[0]
        // console.log(this.props)
        return (
            <div id="outsideContainer">
                <Card>
                    <Resume 
                        data={store.apiData.results[0]} 
                        bio={bio}
                    />
                    <Container id="sliderSection">
                    <CompoundSlider 
                        URL={store.apiURL}
                        fetchData={this.props.fetchData}
                        fetchMoreData={this.props.fetchMoreData}
                    />
                    </Container>
                </Card>
            </div>
        );
    }
}