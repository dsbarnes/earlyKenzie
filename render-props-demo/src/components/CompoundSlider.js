import React from 'react'
import { Slider, Button} from 'shards-react'

export default class CompoundSlider extends React.Component{
    state = {
        ksaSliderValue: [5],
        expSliderValue: [5],
        confidenceRange: [2, 8]
    }

    handleKsaSlide = (e) => {
        this.setState({
            ksaSliderValue: [Number(e)]
        })
    }
    handleExpSlide = (e) => {
        this.setState({
            expSliderValue: [Number(e)]
        })
    }
    handleConfidenceSlide = (e) => {
        this.setState({
            confidenceRange: [Number(e[0]), Number(e[1])]
        })
    }
    
    nextResume = () => {
        this.props.fetchData(this.props.URL)
        this.props.fetchMoreData()
        this.setState({
            ksaSliderValue: [5],
            expSliderValue: [5],
            confidenceRange: [2, 8]
        })
    }

    render(){
        return(
            <React.Fragment>
                <p> KSA's : {JSON.stringify(this.state.ksaSliderValue)}</p>
                <Slider 
                    connect={[true, false]}  
                    start={this.state.ksaSliderValue} 
                    range={{min: 0, max: 10}}
                    pips={{mode: "steps", stepped: true, density: 20}}
                    onSlide={this.handleKsaSlide}
                />
                
                <p>Experience : {JSON.stringify(this.state.expSliderValue)}</p>
                <Slider 
                    connect={[true, false]}
                    start={this.state.expSliderValue} 
                    range={{min: 0, max: 10}}
                    pips={{mode: "steps", stepped: true, density: 20}}
                    onSlide={this.handleExpSlide}
                />
                
                <p>Confidence Range : {JSON.stringify(this.state.confidenceRange)}</p>
                <Slider
                    connect
                    start={this.state.confidenceRange}
                    range={{ min: 0, max: 10 }}
                    pips={{ mode: "steps", stepped: true, density: 20 }}
                    onSlide={this.handleConfidenceSlide}
                />
                
                <div class="buttonGroup">
                <Button onClick={ this.nextResume }> Rate KSAs </Button>
                <Button onClick={ this.nextResume }> Bin </Button>
                </div>

            </React.Fragment>
        )

    }
}