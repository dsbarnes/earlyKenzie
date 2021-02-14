import React, { Component } from 'react';
// import VideoSlider from './VideoSlider'

import ExpansionPanel from '@material-ui/core/ExpansionPanel'
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';


class Expansion extends Component{
    render(){
        return(
            <React.Fragment>
                <ExpansionPanel>
                <ExpansionPanelSummary>
                    <p>this.props.sectionTitle (soon, nuff)</p>
                </ExpansionPanelSummary>

                <ExpansionPanelDetails>
                    <p>Videos Will Go Here</p>
                    {/* <VideoSlider/> */}
                </ExpansionPanelDetails>
                </ExpansionPanel>
            </React.Fragment>
        )
    }
}
export default Expansion