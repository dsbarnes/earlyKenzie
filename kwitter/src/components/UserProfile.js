import React, { Component } from "react"
import { connect } from "react-redux"
import { 
  getUserMessages,
  deleteMessage,} from "../actions/messages"
import { logoutThenGoToLogin } from "../actions/auth"
import { getAllUsers, uploadPicture } from "../actions/users"
import { likeButtonAction } from "../actions/likes"
import { Button, Input, Icon} from 'semantic-ui-react'

class UserProfile extends Component {

  handleLogout = e => {
    e.preventDefault()
    this.props.logoutThenGoToLogin()
  }

  handleUploadPicture = (event) => {
    event.preventDefault()
    const formData = new FormData(event.target)
    this.props.uploadPicture(formData)
  }

  componentDidMount(){
    const userProfileToView = 
    this.props.userProfileToView ?
    this.props.userProfileToView :
    this.props.loggedInUser

    // this.props.getAllUsers()

    this.setState({
      messages: this.props.getUserMessages(userProfileToView),
      allUsers: this.props.getAllUsers()
    })
  }

  render() {
    // this.props.getAllUsers()
    console.log(this.props)
    return(
      <React.Fragment>
        
​
      <h1 id="profileHeader">{this.props.userProfileToView}</h1>
      {this.props.allUsers.map(user => {
        return(
          user.username === this.props.userProfileToView &&
          <React.Fragment>
            <p>username: {user.username}</p>
            <p>displayName: {user.displayName}</p>
            <p>createdAt: {user.createdAt}</p>
            <p>lastUpdated: {user.updatedAt}</p>
            <p>pictureLocation: {user.pictureLocation}</p>
          </React.Fragment>
        )
      })}
​
​
​
      <form onSubmit={this.handleUploadPicture}>
        <Input name="picture" type="file"></Input>
        <Button type="submit" disabled={this.props.isLoading}>
            Upload Picture
        </Button>
      </form>
​
​
      <form onSubmit={this.handleLogout}>
          <Button color='twitter' type="submit">
          <Icon name='x' />
            Logout
          </Button>
        </form>
​
        <Button color='black'>
          <Icon name='eraser' />
          Delete My Account</Button>
        {this.props.messages.map(message => {
          return(
            <React.Fragment>
            <div id="kweetContainer">
            <h3>{message.username}</h3>
            <h5>{message.text}</h5>
​
            {this.props.loggedInUser === message.username &&
              <Button size='medium'
              onClick={() => this.props.deleteMessage(message.id)}
              >Delete</Button>}
            <label>Likes: {message.likes.length}</label>
​
            <Button color='red' onClick={() => {
              this.props.likeButtonAction(
              message.id,
              message.likes
                .reduce((ac, cu) => {
                cu.username === this.props.loggedInUser ?
                ac = cu.id :
                ac = 0
                return ac
                }, 0))
              }}
              >
                 <Icon name='heart' />
                 Like</Button>
​
            </div>
            </React.Fragment>
          )
        })}
      </React.Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages.userMessages,
    isLoading : state.auth.loginLoading,
    err: state.auth.logoutError,
    loggedInUser: state.auth.loggedInUser,
    userProfileToView: state.users.userBeingViewed,
    allUsers: state.users.getAllUsers
  }
}
const mapDispatchToProps = dispatch => {
  return{
  logoutThenGoToLogin,

  uploadPicture: (formData) => 
    dispatch( uploadPicture(formData) ),

  getUserMessages : (username) => 
    dispatch( getUserMessages(username)),

  deleteMessage: (id) => 
    dispatch( deleteMessage(id) ),

  likeButtonAction: (messageId, likeId) =>
    dispatch( likeButtonAction(messageId, likeId) ),

  getAllUsers: () =>
    dispatch( getAllUsers() ),
  }
}
export default connect(
  mapStateToProps, 
  mapDispatchToProps)(UserProfile)