import React from 'react'
import SiteCard from './components/SiteCard'
import Expansion from './components/Expansion'
import VideoSlider from './components/VideoSlider'
// import bandData from './JSONdata/data'
// import moreBandData from './JSONdata/moreData'
import "./App.css"

class MyApp extends React.Component{
    render(){

        return(
            <React.Fragment>
                <SiteCard/>
                <h2> >> Go To The Blog >> </h2>
                <VideoSlider />
                <Expansion />
                <Expansion />
                <Expansion />
                <Expansion />
            </React.Fragment>
        )
    }
}

export default MyApp

