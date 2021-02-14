import React, { Component } from "react";
import { connect } from "react-redux";
import { setProfileToView } from "../actions/users";
import { NavLink } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

class MainSidebar extends Component {
  pushToProfilePage = () => {
    this.props.setProfileToView(this.props.loggedInUser);
    // push("/profile")
  };

  render() {
    return (
      <>
        <div id="mainSidebar">
          <h3>Main Sidebar</h3>
          <Button.Group vertical>
            <Button as="mainSidebar" labelPosition="right">
              <Button icon color="blue">
                <Icon name="home" />
                Home
              </Button>
            </Button>
            <br />
            <br />

            <Button as="mainSidebar" labelPosition="right">
              <Button icon color="blue">
                <Icon name="hashtag" />
                Explore
              </Button>
            </Button>
            <br />
            <br />

            <Button as="mainSidebar" labelPosition="right">
              <Button icon color="blue">
                <Icon name="facebook messenger" />
                Messages
              </Button>
            </Button>
            <br />
            <br />

            <NavLink to="/profile" onClick={this.pushToProfilePage}>
              <Button as="mainSidebar" labelPosition="right">
                <Button icon color="blue">
                  <Icon name="male" />
                  Profile
                </Button>
              </Button>
            </NavLink>
            <br />
            <br />
          </Button.Group>
        </div>
      </>
    );
  }
}

// export default MainSidebar;
const mapStateToProps = state => {
  return {
    loggedInUser: state.auth.loggedInUser
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setProfileToView: username => dispatch(setProfileToView(username))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSidebar);
