import React, { Component } from "react";
import { Label } from "semantic-ui-react";

class Search extends Component {
  render() {
    return (
      <div id="searchBar">
        <input type="text"></input>
        <Label color='blue'>Search </Label>
      </div>
    );
  }
}

export default Search;