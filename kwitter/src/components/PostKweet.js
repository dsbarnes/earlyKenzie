import React, { Component } from "react";
import { connect } from "react-redux";
import { jsonHeaders, handleJsonResponse } from "../actions/constants/index";
import { getAllMessages } from "../actions/messages";
import { Button, Input, Icon } from "semantic-ui-react";
const url = "https://kwitter-api.herokuapp.com/messages";

class PostKweet extends Component {
  state = { text: "" };

  handleChange = e => {
    console.log(this.state);
    this.setState({ text: e.target.value });
  };
  handleMessage = e => {
    e.preventDefault();
    const body = { text: this.state.text };
    fetch(url, {
      method: "POST",
      headers: {
        ...jsonHeaders,
        Authorization: `Bearer ${this.props.token}`
      },
      body: JSON.stringify(body)
    })
      .then(handleJsonResponse)
      .then(() => {
        this.props.getAllMessages();
        return;
      });
    // .catch()
  };

  render() {
    return (
      <>
        <form id="kweetComponent">
          <Input focus type="text" onChange={this.handleChange}></Input>
          <Button
            as="kweetComponent"
            labelPosition="left"
            onClick={this.handleMessage}
          >
            <Button icon color='blue'>
              <Icon name="hashtag" />
              Kweet
            </Button>
          </Button>
        </form>
      </>
    );
  }
}

// export default PostKweet;
const mapStateToProps = state => {
  return {
    token: state.auth.login.token
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getAllMessages: () => dispatch(getAllMessages())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostKweet);
