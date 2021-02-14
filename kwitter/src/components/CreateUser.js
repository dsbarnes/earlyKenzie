import React, { Component } from "react";
import { connect } from "react-redux";
import { createUserThenLogin } from "../actions/users";
import Spinner from "react-spinkit";
import { Button, Form, Grid, Header, Icon, Segment } from "semantic-ui-react";

class CreateUser extends Component {
  state = { username: "", displayName: "", password: "" };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleCreateUser = e => {
    e.preventDefault();
    this.props.createUserThenLogin(this.state);
  };

  render() {
    const isLoading = this.props.createUserLoading;
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="blue" textAlign="center">
            <Icon name="twitter" /> Create New Account
          </Header>
          <Form size="large" onSubmit={this.handleCreateUser}>
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                required
                icon="user"
                iconPosition="left"
                placeholder="Username"
                onChange={this.handleChange}
              />
              <Form.Input
                fluid
                name="displayName"
                required
                icon="user"
                iconPosition="left"
                placeholder="Display Name"
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
                Create Account
              </Button>
            </Segment>
          </Form>
          {isLoading && <Spinner name="circle" color="blue" />}
        </Grid.Column>
      </Grid>
    );
  }
}

// export default CreateUser;
const mapStateToProps = state => {
  return {
    isLoading: state.users.createUserLoading
  };
};
const mapDispatchToProps = {
  createUserThenLogin
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateUser);

/* <>
<p>This is the Create User page</p>
<form onSubmit={this.handleCreateUser}>

<label htmlFor="username">username</label>
    <input 
        type="test"
        name="username"
        required
        onChange={this.handleChange}
    ></input><br></br>

<label htmlFor="displayName">displayName</label>
    <input 
        type="test"
        name="displayName"
        required
        onChange={this.handleChange}
    ></input><br></br>

<label htmlFor="password">password</label>
    <input 
        type="test"
        name="password"
        required
        onChange={this.handleChange}
    ></input><br></br>
    <button type="submit">Create Account</button>
</form>
isLoading && <Spinner name="circle" color="blue" />
</> */
