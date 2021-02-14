import React, { Component } from "react";
import { Card, Image, Button, Input } from "semantic-ui-react";
import "./App.css";

const URL = 'https://api.github.com/users/'

class App extends Component {

  state = {
    active : false,
    user : {},
    input : '',
    isError : false,
  }

  handleClick = () => {
    fetch(URL + this.state.input)
      .then(res => {
        if(!res.ok){
          throw Error
        }
        return res.json()
      })
      .then(data => {
        console.log(data)
        this.setState({
          user : data, 
          active : true,
          isError : false,
        })
      })
      .catch(err => {
        this.setState({
          isError : true,
          active : false,
        })
      })
  }

  handleChange = (event) => {
    this.setState({
      input : event.target.value
    })
    console.log(this.state.input)
  }

  //Bottom -- always
  render() {
    const {user, active, isError} = this.state

    return (
      <div>
        {/* This is just a turn, but a short circuit */}
        {isError && <div>User does not exist</div> }

        {active && 
        <Card>
          
          <Image src={user.avatar_url} wrapped ui={false} />
          
          <Card.Content>
            <Card.Header>{user.name}</Card.Header>

            <Card.Meta>
              <span> {user.location} </span>
            </Card.Meta>

            <Card.Description>
              {user.bio}
            </Card.Description>

          </Card.Content>
          
          <Card.Content extra>
              {user.followers} Followers
          </Card.Content>
        </Card>
        }

      <Input id="userNameInput" type='text' onChange={this.handleChange}></Input>

      <Button onClick={this.handleClick}> Click Me </Button>
      </div>
    );
  }
}
export default App;
