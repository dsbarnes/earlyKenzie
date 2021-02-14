import React from 'react';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
// import GridListTileBar from '@material-ui/core/GridListTileBar';

import videoData from '../JSONdata/videoData'
// import { isUserWhitespacable } from '@babel/types';
// import IconButton from '@material-ui/core/IconButton';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
// import tileData from './tileData';
console.log(videoData)

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        // Promote the list into his own layer on Chrome. 
        //This cost memory but helps keeping high FPS.
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        // height: '400px'
        // cellHeight: 'auto'
    },
    titleBar: {
        background:
        'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
}));
const useThis = makeStyles(theme => ({
    root: {
        border: "1px solid red"
    },
    tile: {
        border: "1px solid orange"
    },
    imgFullHeight: true
}))


export default function VideoSlider() {
    const classes = useStyles()
    const otherClasses = useThis()
    return(
        <React.Fragment>
            <div className={classes.root}>
            <GridList cols={1.25} className={classes.gridList}>

                {videoData.map(tile => (
                    <GridListTile className={otherClasses.tile}>
                        <iframe src="https://www.youtube.com/embed/DrvrWtD-5FA"></iframe>
                    </GridListTile>
                ))}

            </GridList>
            </div>
        </React.Fragment>
    )
}
// frameborder="0" 
// allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
// allowfullscreen