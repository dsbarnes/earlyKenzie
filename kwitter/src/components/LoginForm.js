import React, { Component } from "react";
import { connect } from "react-redux";
import Spinner from "react-spinkit";
import { NavLink } from "react-router-dom";
import { loginThenGoToUserProfile } from "../actions/auth";
import {
  Button,
  Grid,
  Message,
  Segment,
  Form,
  Header,
  Icon
} from "semantic-ui-react";

class LoginForm extends Component {
  state = { username: "", password: "" };

  handleLogin = e => {
    e.preventDefault();
    this.props.loginThenGoToUserProfile(this.state);
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { isLoading, err } = this.props;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" color="blue" textAlign="center">
            <Icon name="twitter" /> Login
          </Header>
          <Form size="large" onSubmit={this.handleLogin}>
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                autoFocus
                required
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name="password"
                required
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                onChange={this.handleChange}
              />

              <Button color="blue" fluid size="large">
                Login
              </Button>
            </Segment>
          </Form>
          {isLoading && <Spinner name="circle" color="blue" />}
          {err && <p style={{ color: "red" }}>{err}</p>}
          <Message>
            <NavLink exact to="/reset">
              Forgot Password?
            </NavLink>
          </Message>
          <Message>
            {"   "}
            <NavLink exact to="/create">
              New Here? Sign Up
            </NavLink>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    isLoading: state.auth.loginLoading,
    err: state.auth.loginError
  };
};
const mapDispatchToProps = {
  loginThenGoToUserProfile
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);

//OLD VERSION
// const { isLoading, err } = this.props;
// return (
//   <React.Fragment>
//     <p>Login</p>
//     <form onSubmit={this.handleLogin}>
//       <label htmlFor="username">Username</label>
//       <input
//         type="text"
//         name="username"
//         autoFocus
//         required
//         onChange={this.handleChange}
//       />
//       <label htmlFor="password">Password</label>
//       <input
//         type="password"
//         name="password"
//         required
//         onChange={this.handleChange}
//       />
//       <button type="submit" disabled={isLoading}>
//         Login
//       </button>
//     </form>
//     {isLoading && <Spinner name="circle" color="blue" />}
//     {err && <p style={{ color: "red" }}>{err}</p>}

//     <NavLink exact to="/reset">
//       <small>Forgot Password?</small>
//     </NavLink>

//     <hr></hr>

//     <div>
//       <p>Logo Here</p>
//       <p>Join Today!</p>
//       <NavLink exact to="/create">
//         <button>Sign Up!</button>
//       </NavLink>
//     </div>

//   </React.Fragment>
