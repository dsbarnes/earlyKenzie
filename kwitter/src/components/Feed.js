import React, { Component } from "react";
import { connect } from "react-redux";
import {
  // getAllMessages,
  deleteMessage,
  getFeedPageData
} from "../actions/messages";
import { setProfileToView } from "../actions/users";
import { likeButtonAction } from "../actions/likes";
import { NavLink } from "react-router-dom";
// import { domain, handleJsonResponse } from "../actions/constants/index";
import { Feed, Button, Icon } from "semantic-ui-react";
import defaultImage from "../../src/kwitter.jpg";

// let picUrl = "";

class KwitterFeed extends Component {
  componentDidMount() {
    this.props.getFeedPageData();
  }

  checkForImage(message) {
    let url = "https://kwitter-api.herokuapp.com";
    let userImageLocation = this.props.users.find(
      user => user.username === message.username
    ).pictureLocation;
    if (userImageLocation === null) {
      return defaultImage;
    } else {
      return url + userImageLocation;
    }
  }

  render() {
    const loggedInUser = this.props.loggedInUser;
    return (
      <>
        {this.props.messages.map(message => {
          return (
            <div id="kweetBorder">
              <Feed>
                <Feed.Event>
                  <Feed.Content>
                    <Feed.Summary>
                      <h5>
                        <Feed.User>
                          <NavLink
                            onClick={() =>
                              this.props.setProfileToView(message.username)
                            }
                            to="/profile"
                          >
                            {message.username}
                          </NavLink>
                        </Feed.User>
                      </h5>
                    </Feed.Summary>
                    <Feed.Label>
                      <img
                        src={this.checkForImage(message)}
                        alt="profilePicture"
                      ></img>
                    </Feed.Label>

                    <p>{message.text}</p>

                    {loggedInUser === message.username && (
                      <Button
                        onClick={() => {
                          this.props.deleteMessage(message.id);
                        }}
                      >
                        Delete Kweet
                      </Button>
                    )}

                    <Feed.Meta>
                      <Feed.Like>{message.likes.length}</Feed.Like>
                      <Button
                        as="kwitterBorder"
                        labelPosition="right"
                        floated="right"
                        onClick={() =>
                          this.props.likeButtonAction(
                            message.id,
                            message.likes.reduce((ac, cu) => {
                              cu.username === loggedInUser
                                ? (ac = cu.id)
                                : (ac = 0);
                              return ac;
                            }, 0)
                          )
                        }
                      >
                        <Button icon color="blue">
                          <Icon name="like" />
                        </Button>
                      </Button>
                    </Feed.Meta>
                  </Feed.Content>
                </Feed.Event>
              </Feed>
            </div>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages.allMessages,
    isLoggedIn: state.auth.isLoggedIn,
    loggedInUser: state.auth.loggedInUser,
    users: state.users.getAllUsers
  };
};
const mapDispatchToProps = dispatch => {
  return {
    // getAllMessages: () =>
    //     dispatch ( getAllMessages() ),

    setProfileToView: username => dispatch(setProfileToView(username)),

    likeButtonAction: (messageId, likeId) =>
      dispatch(likeButtonAction(messageId, likeId)),

    deleteMessage: messageId => dispatch(deleteMessage(messageId)),

    // getAllUsers: () =>
    //     dispatch( getAllUsers() ),

    getFeedPageData: () => dispatch(getFeedPageData())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(KwitterFeed);