import React, { Component } from "react";
import { 
    MainSidebar, 
    PostKweet,
    Search,
    TrendingSidebar,
    Feed
} from "."
import { Icon } from "semantic-ui-react";

class MainPage extends Component {
    render() {
        // console.log("did it")
        // console.log(this.state)
        // console.log(this.props)
        // console.log(localStorage)


    return(
        <>
        <h1>Kwitter</h1>
        <Icon name='twitter' color='blue' size='massive'></Icon>
        <Search />
        <MainSidebar />
        <TrendingSidebar />
        <PostKweet />
        <Feed /> 
        </>
    )
    }
}

export default MainPage;