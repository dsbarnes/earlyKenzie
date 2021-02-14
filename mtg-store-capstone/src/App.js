import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import { Route } from "react-router-dom";

import { 
  LoginPage, 
  Inventory, 
  Profile, 
  UserSearch
} from './components'

class App extends Component {
  //This is the Table of Contents for our app.
  //Unless you know what you're about to break, please don't change them here.
  render() {
    return(
      <React.Fragment>
          <Route exact path="/" component={LoginPage}/>
          <Route exact path="/inventory" component={Inventory} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/search" component={UserSearch}/>
      </React.Fragment>
    )
  }
}

export default App;